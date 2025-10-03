(() => {
  const androidClipboard = (() => {
    const bridge = window.Android || window.AndroidInterface || window.AndroidBridge;
    if (!bridge) {
      return null;
    }

    const method = typeof bridge.copyToClipboard === "function"
      ? bridge.copyToClipboard
      : (typeof bridge.copy === "function" ? bridge.copy : null);

    if (!method) {
      return null;
    }

    return text => {
      const safe = text === undefined || text === null ? "" : String(text);
      method.call(bridge, safe);
    };
  })();

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }

  function loadDarkModePreference() {
    try {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark-mode");
      }
    } catch (err) {
      // ignore
    }
  }

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleDarkMode);
  }

  const countrySelect = document.getElementById("country-select");
  const flagEl = document.getElementById("flag");
  const countryButton = document.getElementById("country-button");
  const countryLabel = document.getElementById("country-label");

  function updateFlag() {
    if (!countrySelect) {
      return;
    }
    const value = countrySelect.value;
    if (flagEl) {
      flagEl.className = "fi fi-" + value;
    }

    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const readable = selectedOption ? selectedOption.textContent : value.toUpperCase();

    if (countryLabel) {
      countryLabel.textContent = readable;
    }

    if (countryButton) {
      const aria = readable ? `Cambiar país (actual: ${readable})` : "Cambiar país";
      countryButton.setAttribute("aria-label", aria);
      countryButton.setAttribute("aria-expanded", "false");
    }
  }

  if (countrySelect) {
    countrySelect.addEventListener("change", updateFlag);
    countrySelect.addEventListener("blur", () => {
      if (countryButton) {
        countryButton.setAttribute("aria-expanded", "false");
      }
    });
  }
  updateFlag();

  function openCountryPicker() {
    if (!countrySelect) {
      return;
    }

    const previousPointer = countrySelect.style.pointerEvents;
    countrySelect.style.pointerEvents = "auto";

    if (countryButton) {
      countryButton.setAttribute("aria-expanded", "true");
    }

    if (typeof countrySelect.showPicker === "function") {
      try {
        countrySelect.showPicker();
        setTimeout(() => {
          countrySelect.style.pointerEvents = previousPointer;
        }, 250);
        return;
      } catch (err) {
        // fallback below
      }
    }

    if (typeof countrySelect.focus === "function") {
      try {
        countrySelect.focus({ preventScroll: true });
      } catch (focusErr) {
        countrySelect.focus();
      }
    }
    countrySelect.click();
    setTimeout(() => {
      countrySelect.style.pointerEvents = previousPointer;
    }, 250);
  }

  if (countryButton && countrySelect) {
    countryButton.addEventListener("click", openCountryPicker);
    countryButton.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
        event.preventDefault();
        openCountryPicker();
      }
    });
  }

  function sanitizePhone(value) {
    return String(value === undefined || value === null ? "" : value).replace(/\D+/g, "");
  }

  function buildName(entry) {
    const parts = [];
    if (entry && entry.title) {
      const title = String(entry.title).trim();
      if (title) parts.push(title);
    }
    if (entry && entry.firstName) {
      const first = String(entry.firstName).trim();
      if (first) parts.push(first);
    }
    if (entry && entry.lastName) {
      const last = String(entry.lastName).trim();
      if (last) parts.push(last);
    }
    return parts.length ? parts.join(" ") : "N/A";
  }

  function buildStreet(entry) {
    const parts = [];
    if (entry && entry.streetNumber !== undefined && entry.streetNumber !== null) {
      const number = String(entry.streetNumber).trim();
      if (number) parts.push(number);
    }
    if (entry && entry.streetName) {
      const street = String(entry.streetName).trim();
      if (street) parts.push(street);
    }
    return parts.length ? parts.join(" ") : "N/A";
  }

  function safeText(value, fallback) {
    const text = value === undefined || value === null ? "" : String(value).trim();
    return text || fallback;
  }

  async function fetchAddress(country = "us") {
    const generator = window.getRandomOfflineAddress;
    if (typeof generator !== "function") {
      throw new Error("Generador offline no disponible");
    }

    const normalized = (country || "us").toLowerCase();
    const entry = generator(normalized);

    if (!entry) {
      throw new Error("No se pudo generar dirección offline");
    }

    const zipValue = entry && entry.zip ? entry.zip : (entry && entry.postalCode ? entry.postalCode : null);
    const phoneDigits = sanitizePhone(entry && entry.phone);

    const addressData = {
      name: buildName(entry),
      street: buildStreet(entry),
      city: safeText(entry && entry.city, "N/A"),
      state: safeText(entry && entry.state, "N/A"),
      phone: phoneDigits || "N/A",
      zip: zipValue ? String(zipValue).trim() : "N/A"
    };

    try {
      localStorage.setItem("address.json", JSON.stringify(addressData));
    } catch (storageError) {
      // ignore storage issues
    }

    return addressData;
  }

  async function generateNewAddress() {
    const loading = document.getElementById("loading");
    if (loading) {
      loading.classList.add("active");
    }

    try {
      const country = countrySelect ? countrySelect.value : "us";
      const data = await fetchAddress(country);

      setTimeout(() => {
        updateFieldWithAnimation("name", data.name);
        updateFieldWithAnimation("street", data.street);
        updateFieldWithAnimation("city", data.city);
        updateFieldWithAnimation("state", data.state);
        updateFieldWithAnimation("phone", data.phone);
        updateFieldWithAnimation("zip", data.zip);
        if (loading) {
          loading.classList.remove("active");
        }
      }, 300);
    } catch (error) {
      console.error("Error:", error);
      if (loading) {
        loading.classList.remove("active");
      }
      showToast("Error al generar dirección", true);
    }
  }

  function updateFieldWithAnimation(fieldId, value) {
    const element = document.getElementById(fieldId);
    if (!element) {
      return;
    }
    element.style.opacity = "0";
    setTimeout(() => {
      element.textContent = value || "N/A";
      element.style.opacity = "1";
    }, 150);
  }

  async function copyToClipboard(fieldId, event) {
    const element = document.getElementById(fieldId);
    const text = element && element.textContent ? element.textContent.trim() : "";

    if (!text || text === "N/A" || text === "-" || text === "Haz clic en generar") {
      showToast("No hay datos para copiar", true);
      return;
    }

    try {
      if (androidClipboard) {
        androidClipboard(text);
      } else if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }

      showToast("¡Copiado al portapapeles!");

      const target = event && event.target ? event.target : null;
      const button = target && typeof target.closest === "function"
        ? target.closest(".copy-btn")
        : (event && event.currentTarget ? event.currentTarget : null);

      if (button) {
        button.style.transform = "scale(1.2)";
        setTimeout(() => {
          button.style.transform = "";
        }, 200);
      }
    } catch (err) {
      console.error("Error al copiar:", err);
      showToast("Error al copiar al portapapeles", true);
    }
  }

  function showToast(message, isError) {
    const toast = document.getElementById("toast");
    if (!toast) {
      return;
    }
    const toastText = toast.querySelector("span");
    if (toastText) {
      toastText.textContent = message;
    }
    toast.style.background = isError ? "#ef4444" : "var(--success)";
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const values = document.querySelectorAll(".value");
    values.forEach(value => {
      value.style.transition = "opacity 0.3s ease";
    });
  });

  window.addEventListener("load", () => {
    loadDarkModePreference();
    generateNewAddress();
  });

  window.generateNewAddress = generateNewAddress;
  window.copyToClipboard = copyToClipboard;
  window.fetchAddress = fetchAddress;
})();
