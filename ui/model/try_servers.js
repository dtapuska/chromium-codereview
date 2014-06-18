
var TryServers = (function() {
    var servers = [
        {
            master: "tryserver.blink",
            builders: [
                "blink_presubmit",
                "linux_blink_compile_dbg",
                "linux_blink_compile_rel",
                "linux_blink_dbg",
                "linux_blink_oilpan_dbg",
                "linux_blink_oilpan_rel",
                "linux_blink_rel",
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
            master: "tryserver.chromium",
            builders: [
                "android_aosp",
                "android_chromium_gn_compile_dbg",
                "android_chromium_gn_compile_rel",
                "android_clang_dbg",
                "android_dbg",
                "android_fyi_dbg",
                "android_rel",
                "android_x86_dbg",
                "blink_android_compile_dbg",
                "blink_android_compile_rel",
                "chromium_presubmit",
                "cros_amd64",
                "cros_amd64_telemetry",
                "cros_daisy",
                "cros_x86",
                "cros_x86_telemetry",
                "ios_dbg_simulator",
                "ios_rel_device",
                "ios_rel_device_ninja",
                "linux",
                "linux_arm_cross_compile",
                "linux_arm_tester",
                "linux_asan",
                "linux_browser_asan",
                "linux_chromeos",
                "linux_chromeos_asan",
                "linux_chromeos_browser_asan",
                "linux_chromeos_clang",
                "linux_chromeos_valgrind",
                "linux_chromium_chromeos_clang_dbg",
                "linux_chromium_chromeos_clang_rel",
                "linux_chromium_chromeos_dbg",
                "linux_chromium_chromeos_rel",
                "linux_chromium_clang_dbg",
                "linux_chromium_clang_rel",
                "linux_chromium_compile_dbg",
                "linux_chromium_compile_rel",
                "linux_chromium_dbg",
                "linux_chromium_gn_dbg",
                "linux_chromium_gn_rel",
                "linux_chromium_rel",
                "linux_chromium_trusty32_dbg",
                "linux_chromium_trusty32_rel",
                "linux_chromium_trusty_dbg",
                "linux_chromium_trusty_rel",
                "linux_clang",
                "linux_clang_tsan",
                "linux_ecs_ozone",
                "linux_futura",
                "linux_layout",
                "linux_layout_asan",
                "linux_layout_rel",
                "linux_layout_rel_32",
                "linux_nacl_sdk",
                "linux_nacl_sdk_build",
                "linux_redux",
                "linux_rel",
                "linux_rel_alt",
                "linux_rel_naclmore",
                "linux_rel_precise32",
                "linux_tsan",
                "linux_valgrind",
                "mac",
                "mac_asan",
                "mac_asan_64",
                "mac_chromium_compile_dbg",
                "mac_chromium_compile_rel",
                "mac_chromium_dbg",
                "mac_chromium_rel",
                "mac_nacl_sdk",
                "mac_nacl_sdk_alt",
                "mac_nacl_sdk_build",
                "mac_rel",
                "mac_rel_naclmore",
                "mac_valgrind",
                "mac_valgrind_alt",
                "mac_x64_rel",
                "mac_xcodebuild",
                "tools_build_presubmit",
                "win",
                "win8_aura",
                "win_chromium_compile_dbg",
                "win_chromium_compile_rel",
                "win_chromium_dbg",
                "win_chromium_rel",
                "win_chromium_x64_dbg",
                "win_chromium_x64_rel",
                "win_drmemory",
                "win_nacl_sdk",
                "win_nacl_sdk_build",
                "win_rel",
                "win_rel_naclmore",
                "win_tsan",
                "win_x64_rel",
            ],
        },
        {
            master: "tryserver.chromium.gpu",
            builders: [
                "linux_gpu",
                "mac_gpu",
                "mac_gpu_retina",
                "win_gpu",
            ],
        },
        // FIXME: Add these.
        // {
        //     master:"tryserver.skia",
        //     builders: [],
        // },
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
                "v8_win_rel",
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
