"use strict";

var TryServers = (function() {
    var servers = [
        {
            master: "tryserver.blink",
            builders: [
                "android_blink_compile_dbg",
                "android_blink_compile_rel",
                "android_chromium_gn_compile_rel",
                "blink_presubmit",
                "linux_blink_compile_dbg",
                "linux_blink_compile_rel",
                "linux_blink_dbg",
                "linux_blink_oilpan_dbg",
                "linux_blink_oilpan_rel",
                "linux_blink_rel",
                "linux_chromium_gn_rel",
                "mac_blink_compile_dbg",
                "mac_blink_compile_rel",
                "mac_blink_dbg",
                "mac_blink_oilpan_dbg",
                "mac_blink_oilpan_rel",
                "mac_blink_rel",
                "win_blink_compile_dbg",
                "win_blink_compile_rel",
                "win_blink_dbg",
                "win_blink_oilpan_dbg",
                "win_blink_oilpan_rel",
                "win_blink_rel",
            ],
        },
        {
            master: "tryserver.chromium.linux",
            builders: [
                "android_aosp",
                "android_chromium_gn_compile_dbg",
                "android_chromium_gn_compile_rel",
                "android_clang_dbg",
                "android_dbg",
                "android_dbg_recipe",
                "android_fyi_dbg",
                "android_rel",
                "android_x86_dbg",
                "blink_android_compile_dbg",
                "blink_android_compile_rel",
                "blink_presubmit",
                "chromium_presubmit",
                "linux_arm_cross_compile",
                "linux_arm_tester",
                "linux_asan",
                "linux_browser_asan",
                "linux_chromeos_asan",
                "linux_chromeos_browser_asan",
                "linux_chromeos_valgrind",
                "linux_chromium_chromeos_clang_dbg",
                "linux_chromium_chromeos_clang_rel",
                "linux_chromium_chromeos_dbg",
                "linux_chromium_chromeos_ozone_dbg",
                "linux_chromium_chromeos_ozone_rel",
                "linux_chromium_chromeos_rel",
                "linux_chromium_chromeos_rel_swarming",
                "linux_chromium_clang_dbg",
                "linux_chromium_clang_rel",
                "linux_chromium_compile_dbg",
                "linux_chromium_compile_rel",
                "linux_chromium_dbg",
                "linux_chromium_gn_dbg",
                "linux_chromium_gn_rel",
                "linux_chromium_rel",
                "linux_chromium_rel_swarming",
                "linux_chromium_trusty32_dbg",
                "linux_chromium_trusty32_rel",
                "linux_chromium_trusty_dbg",
                "linux_chromium_trusty_rel",
                "linux_clang_tsan",
                "linux_ecs_ozone",
                "linux_layout",
                "linux_layout_asan",
                "linux_layout_rel",
                "linux_layout_rel_32",
                "linux_nacl_sdk",
                "linux_nacl_sdk_bionic",
                "linux_nacl_sdk_bionic_build",
                "linux_nacl_sdk_build",
                "linux_redux",
                "linux_rel_naclmore",
                "linux_rel_precise32",
                "linux_valgrind",
                "tools_build_presubmit",
            ],
        },
        {
            master: "tryserver.chromium.mac",
            builders: [
                "ios_dbg_simulator",
                "ios_rel_device",
                "ios_rel_device_ninja",
                "mac_asan",
                "mac_asan_64",
                "mac_chromium_compile_dbg",
                "mac_chromium_compile_rel",
                "mac_chromium_dbg",
                "mac_chromium_rel",
                "mac_chromium_rel_swarming",
                "mac_nacl_sdk",
                "mac_nacl_sdk_build",
                "mac_rel_naclmore",
                "mac_valgrind",
                "mac_x64_rel",
                "mac_xcodebuild",
            ],
        },
        {
            master: "tryserver.chromium.win",
            builders: [
                "win8_aura",
                "win8_chromium_dbg",
                "win8_chromium_rel",
                "win_chromium_compile_dbg",
                "win_chromium_compile_rel",
                "win_chromium_dbg",
                "win_chromium_rel",
                "win_chromium_rel_swarming",
                "win_chromium_x64_dbg",
                "win_chromium_x64_rel",
                "win_drmemory",
                "win_nacl_sdk",
                "win_nacl_sdk_build",
                "win_rel_naclmore",
            ],
        },
        {
            master: "tryserver.chromium.gpu",
            builders: [
                "linux_gpu",
                "mac_gpu",
                "win_gpu",
            ],
        },
        {
            master: "tryserver.v8",
            builders: [
                "v8_linux64_rel",
                "v8_linux_arm64_rel",
                "v8_linux_arm_dbg",
                "v8_linux_dbg",
                "v8_linux_layout_dbg",
                "v8_linux_nosnap_dbg",
                "v8_linux_nosnap_rel",
                "v8_linux_rel",
                "v8_mac_rel",
                "v8_win64_rel",
                "v8_win_rel",
            ],
        },
        {
             master:"tryserver.skia",
             builders: [
                "Build-Mac10.7-Clang-x86-Debug-Trybot",
                "Build-Mac10.7-Clang-Arm7-Release-iOS-Trybot",
                "Build-Mac10.7-Clang-x86-Release-Trybot",
                "Build-Mac10.7-Clang-x86_64-Debug-Trybot",
                "Build-Mac10.7-Clang-Arm7-Debug-iOS-Trybot",
                "Build-Mac10.7-Clang-x86_64-Release-Trybot",
                "Build-Mac10.8-Clang-x86-Release-Trybot",
                "Build-Mac10.8-Clang-x86_64-Debug-Trybot",
                "Build-Mac10.8-Clang-x86_64-Release-Trybot",
                "Build-Mac10.8-Clang-x86-Debug-Trybot",
                "Build-Ubuntu13.10-GCC4.8-x86_64-Release-NoGPU-Trybot",
                "Build-Ubuntu13.10-GCC4.8-x86-Release-CrOS_Alex-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Arm7-Debug-Android-Trybot",
                "Build-Ubuntu13.10-Clang-x86_64-Debug-Trybot",
                "Build-Ubuntu13.10-GCC4.8-x86_64-Debug-CrOS_Link-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Arm7-Debug-Android_Neon-Trybot",
                "Build-Ubuntu13.10-GCC4.8-x86_64-Release-Trybot",
                "Build-Ubuntu13.10-GCC4.8-NaCl-Debug-Trybot",
                "Build-Ubuntu13.10-GCC4.8-x86_64-Debug-Trybot",
                "Build-Ubuntu13.10-GCC4.8-x86-Release-Android-Trybot",
                "Build-Ubuntu13.10-GCC4.8-x86-Debug-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Arm64-Release-Android-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Mips64-Release-Android-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Arm7-Debug-Android_NoNeon-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Mips64-Debug-Android-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Arm7-Release-Android_NoThumb-Trybot",
                "Build-Ubuntu13.10-GCC4.8-MipsDSP2-Release-Android-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Arm7-Debug-Android_NoThumb-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Mips-Debug-Android-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Arm64-Debug-Android-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Arm7-Release-CrOS_Daisy-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Mips-Release-Android-Trybot",
                "Build-Ubuntu13.10-GCC4.8-x86_64-Release-CrOS_Link-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Arm7-Release-Android_Neon-Trybot",
                "Build-Ubuntu13.10-GCC4.8-NaCl-Release-Trybot",
                "Build-Ubuntu13.10-GCC4.8-x86_64-Debug-Android-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Arm7-Debug-CrOS_Daisy-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Arm7-Release-Android_NoNeon-Trybot",
                "Build-Ubuntu13.10-GCC4.8-x86-Debug-Android-Trybot",
                "Build-Ubuntu13.10-GCC4.8-x86_64-Release-Android-Trybot",
                "Build-Ubuntu13.10-GCC4.8-x86-Debug-CrOS_Alex-Trybot",
                "Build-Ubuntu13.10-GCC4.8-x86-Release-Trybot",
                "Build-Ubuntu13.10-GCC4.8-x86_64-Debug-NoGPU-Trybot",
                "Build-Ubuntu13.10-GCC4.8-MipsDSP2-Debug-Android-Trybot",
                "Build-Ubuntu13.10-GCC4.8-Arm7-Release-Android-Trybot",
                "Build-Win-VS2013-x86-Debug-ANGLE-Trybot",
                "Build-Win-VS2013-x86-Release-GDI-Trybot",
                "Build-Win-VS2013-x86-Release-Trybot",
                "Build-Win-VS2013-x86-Release-ANGLE-Trybot",
                "Build-Win-VS2013-x86_64-Debug-Trybot",
                "Build-Win-VS2013-x86-Debug-Exceptions-Trybot",
                "Build-Win-VS2013-x86-Debug-GDI-Trybot",
                "Build-Win-VS2013-x86_64-Release-Trybot",
                "Build-Win-VS2013-x86-Debug-Trybot",
                "Canary-Chrome-Win-Ninja-x86-SharedLib_ToT-Trybot",
                "Canary-Chrome-Ubuntu13.10-Ninja-x86_64-DRT-Trybot",
                "Canary-Chrome-Ubuntu13.10-Ninja-x86_64-ToT-Trybot",
                "Canary-Moz2D-Ubuntu12-GCC-x86_64-Release-Trybot",
                "Housekeeper-Nightly-Trybot",
                "Housekeeper-Nightly-Monitoring-Trybot",
                "Housekeeper-Nightly-RecreateSKPs-Trybot",
                "Housekeeper-PerCommit-Trybot",
                "Housekeeper-PerCommit-AutoRoll-Trybot",
                "Perf-Android-Nexus10-MaliT604-Arm7-Release-Trybot",
                "Perf-Android-IntelRhb-SGX544-x86-Release-Trybot",
                "Perf-Android-GalaxyNexus-SGX540-Arm7-Release-Trybot",
                "Perf-Android-NexusS-SGX540-Arm7-Release-Trybot",
                "Perf-Android-Nexus4-Adreno320-Arm7-Release-Trybot",
                "Perf-Android-Xoom-Tegra2-Arm7-Release-Trybot",
                "Perf-Android-Nexus7-Tegra3-Arm7-Release-Trybot",
                "Perf-ChromeOS-Alex-GMA3150-x86-Release-Trybot",
                "Perf-ChromeOS-Link-HD4000-x86_64-Release-Trybot",
                "Perf-ChromeOS-Daisy-MaliT604-Arm7-Release-Trybot",
                "Perf-Mac10.6-MacMini4.1-GeForce320M-x86-Release-Trybot",
                "Perf-Mac10.6-MacMini4.1-GeForce320M-x86_64-Release-Trybot",
                "Perf-Mac10.7-MacMini4.1-GeForce320M-x86-Release-Trybot",
                "Perf-Mac10.7-MacMini4.1-GeForce320M-x86_64-Release-Trybot",
                "Perf-Mac10.8-MacMini4.1-GeForce320M-x86_64-Release-Trybot",
                "Perf-Mac10.8-MacMini4.1-GeForce320M-x86-Release-Trybot",
                "Perf-Ubuntu12-ShuttleA-GTX660-x86-Release-Trybot",
                "Perf-Ubuntu12-ShuttleA-GTX660-x86_64-Release-Trybot",
                "Perf-Win7-ShuttleA-HD2000-x86-Release-Trybot",
                "Perf-Win7-ShuttleA-HD2000-x86-Release-GDI-Trybot",
                "Perf-Win7-ShuttleA-HD2000-x86_64-Release-Trybot",
                "Perf-Win7-ShuttleA-HD2000-x86-Release-ANGLE-Trybot",
                "Perf-Win8-ShuttleA-GTX660-x86_64-Release-Trybot",
                "Perf-Win8-ShuttleA-HD7770-x86-Release-Trybot",
                "Perf-Win8-ShuttleA-HD7770-x86_64-Release-Trybot",
                "Perf-Win8-ShuttleA-GTX660-x86-Release-Trybot",
                "Test-Android-NexusS-SGX540-Arm7-Debug-Trybot",
                "Test-Android-Nexus10-MaliT604-Arm7-Release-Trybot",
                "Test-Android-Nexus7-Tegra3-Arm7-Release-Trybot",
                "Test-Android-IntelRhb-SGX544-x86-Debug-Trybot",
                "Test-Android-IntelRhb-SGX544-x86-Release-Trybot",
                "Test-Android-Nexus4-Adreno320-Arm7-Release-Trybot",
                "Test-Android-Xoom-Tegra2-Arm7-Debug-Trybot",
                "Test-Android-GalaxyNexus-SGX540-Arm7-Release-Trybot",
                "Test-Android-Nexus10-MaliT604-Arm7-Debug-Trybot",
                "Test-Android-GalaxyNexus-SGX540-Arm7-Debug-Trybot",
                "Test-Android-Nexus7-Tegra3-Arm7-Debug-Trybot",
                "Test-Android-NexusS-SGX540-Arm7-Release-Trybot",
                "Test-Android-Xoom-Tegra2-Arm7-Release-Trybot",
                "Test-Android-Nexus4-Adreno320-Arm7-Debug-Trybot",
                "Test-ChromeOS-Link-HD4000-x86_64-Release-Trybot",
                "Test-ChromeOS-Daisy-MaliT604-Arm7-Debug-Trybot",
                "Test-ChromeOS-Link-HD4000-x86_64-Debug-Trybot",
                "Test-ChromeOS-Alex-GMA3150-x86-Release-Trybot",
                "Test-ChromeOS-Daisy-MaliT604-Arm7-Release-Trybot",
                "Test-ChromeOS-Alex-GMA3150-x86-Debug-Trybot",
                "Test-Mac10.6-MacMini4.1-GeForce320M-x86_64-Release-Trybot",
                "Test-Mac10.6-MacMini4.1-GeForce320M-x86-Release-Trybot",
                "Test-Mac10.6-MacMini4.1-GeForce320M-x86_64-Debug-Trybot",
                "Test-Mac10.6-MacMini4.1-GeForce320M-x86-Debug-Trybot",
                "Test-Mac10.7-MacMini4.1-GeForce320M-x86-Debug-Trybot",
                "Test-Mac10.7-MacMini4.1-GeForce320M-x86_64-Release-Trybot",
                "Test-Mac10.7-MacMini4.1-GeForce320M-x86_64-Debug-Trybot",
                "Test-Mac10.7-MacMini4.1-GeForce320M-x86-Release-Trybot",
                "Test-Mac10.8-MacMini4.1-GeForce320M-x86_64-Release-Trybot",
                "Test-Mac10.8-MacMini4.1-GeForce320M-x86-Debug-Trybot",
                "Test-Mac10.8-MacMini4.1-GeForce320M-x86_64-Debug-Trybot",
                "Test-Mac10.8-MacMini4.1-GeForce320M-x86-Release-Trybot",
                "Test-Ubuntu12-ShuttleA-GTX550Ti-x86_64-Debug-ZeroGPUCache-Trybot",
                "Test-Ubuntu12-ShuttleA-GTX660-x86_64-Debug-Trybot",
                "Test-Ubuntu12-ShuttleA-GTX660-x86-Release-Trybot",
                "Test-Ubuntu12-ShuttleA-GTX550Ti-x86_64-Release-Valgrind-Trybot",
                "Test-Ubuntu12-ShuttleA-GTX660-x86-Debug-Trybot",
                "Test-Ubuntu12-ShuttleA-GTX660-x86_64-Release-Trybot",
                "Test-Ubuntu13.10-ShuttleA-NoGPU-x86_64-Debug-Trybot",
                "Test-Ubuntu13.10-GCE-NoGPU-x86_64-Release-TSAN-Trybot",
                "Test-Ubuntu13.10-GCE-NoGPU-x86_64-Debug-ASAN-Trybot",
                "Test-Win7-ShuttleA-HD2000-x86_64-Release-Trybot",
                "Test-Win7-ShuttleA-HD2000-x86-Debug-Trybot",
                "Test-Win7-ShuttleA-HD2000-x86-Debug-ANGLE-Trybot",
                "Test-Win7-ShuttleA-HD2000-x86-Release-Trybot",
                "Test-Win7-ShuttleA-HD2000-x86-Debug-GDI-Trybot",
                "Test-Win7-ShuttleA-HD2000-x86-Release-ANGLE-Trybot",
                "Test-Win7-ShuttleA-HD2000-x86-Release-GDI-Trybot",
                "Test-Win7-ShuttleA-HD2000-x86_64-Debug-Trybot",
                "Test-Win8-ShuttleA-HD7770-x86-Release-Trybot",
                "Test-Win8-ShuttleA-HD7770-x86-Debug-Trybot",
                "Test-Win8-ShuttleA-HD7770-x86_64-Release-Trybot",
                "Test-Win8-ShuttleA-HD7770-x86_64-Debug-Trybot",
                "Test-Win8-ShuttleA-GTX660-x86_64-Debug-Trybot",
                "Test-Win8-ShuttleA-GTX660-x86_64-Release-Trybot",
                "Test-Win8-ShuttleA-GTX660-x86-Debug-Trybot",
                "Test-Win8-ShuttleA-GTX660-x86-Release-Trybot",
             ],
        },
    ];

    var builderToMasterMap = {};
    servers.forEach(function(server) {
        server.builders.forEach(function(builder) {
            builderToMasterMap[builder] = server.master;
        });
    });

    function createFlagValue(builders) {
        return builders.map(function(builder) {
            return builderToMasterMap[builder] + ":" + builder;
        }).join(",");
    }

    return {
        SERVERS: servers,
        BUILDER_TO_MASTER: builderToMasterMap,
        createFlagValue: createFlagValue,
    };
})();
