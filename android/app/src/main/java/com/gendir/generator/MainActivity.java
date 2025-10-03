package com.gendir.generator;

import android.annotation.SuppressLint;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.graphics.Color;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.Window;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.WindowInsetsControllerCompat;

import java.lang.ref.WeakReference;

public class MainActivity extends AppCompatActivity {
    private WebView webView;

    @SuppressLint({"SetJavaScriptEnabled"})
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.webview);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setAllowUniversalAccessFromFileURLs(true);

        webView.setWebChromeClient(new WebChromeClient());
        webView.setWebViewClient(new WebViewClient());

        NativeBridge bridge = new NativeBridge(this);
        webView.addJavascriptInterface(bridge, "Android");
        bridge.applyStatusBarColor("#edf7f8", true);

        webView.loadUrl("file:///android_asset/www/index.html");
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK && webView != null && webView.canGoBack()) {
            webView.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    private static class NativeBridge {
        private final WeakReference<MainActivity> activityRef;
        private final Context appContext;

        NativeBridge(MainActivity activity) {
            this.activityRef = new WeakReference<>(activity);
            this.appContext = activity.getApplicationContext();
        }

        @JavascriptInterface
        public void copyToClipboard(String text) {
            ClipboardManager clipboard = (ClipboardManager) appContext.getSystemService(Context.CLIPBOARD_SERVICE);
            if (clipboard == null) {
                return;
            }
            ClipData clip = ClipData.newPlainText("Dirección", text == null ? "" : text);
            clipboard.setPrimaryClip(clip);
        }

        @JavascriptInterface
        public void setStatusBarColor(String color, boolean useDarkIcons) {
            applyStatusBarColor(color, useDarkIcons);
        }

        void applyStatusBarColor(String color, boolean useDarkIcons) {
            MainActivity activity = activityRef.get();
            if (activity == null) {
                return;
            }

            activity.runOnUiThread(() -> {
                Window window = activity.getWindow();
                if (window == null) {
                    return;
                }

                try {
                    window.setStatusBarColor(Color.parseColor(color));
                } catch (IllegalArgumentException ignored) {
                    // Si el color no es válido, no hacemos nada
                }

                View decorView = window.getDecorView();
                WindowInsetsControllerCompat controller = new WindowInsetsControllerCompat(window, decorView);
                controller.setAppearanceLightStatusBars(useDarkIcons);
            });
        }
    }
}
