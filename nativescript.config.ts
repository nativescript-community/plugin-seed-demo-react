import { NativeScriptConfig } from '@nativescript/core';

export default {
    id: 'org.nativescript.demoreact',
    appPath: 'src',
    appResourcesPath: 'App_Resources',
    android: {
        gradleVersion: '8.14.3',
        v8Flags: '--expose_gc',
        markingMode: 'none'
    }
} as NativeScriptConfig;
