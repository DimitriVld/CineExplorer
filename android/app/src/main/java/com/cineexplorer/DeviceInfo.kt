// DeviceInfo.kt

package com.cineexplorer

import android.os.Build
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactMethod

class CustomDeviceInfo(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "CustomDeviceInfo"
    }

    @ReactMethod
    fun getSystemVersion(promise: Promise) {
        val systemVersion = Build.VERSION.RELEASE
        promise.resolve(systemVersion)
    }
}
