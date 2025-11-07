#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 9, std140) uniform _vp_c8
{
    precise vec4 data[4096];
} vp_c8;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 4) in vec4 in_attr4;
layout (location = 6) in vec4 in_attr6;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    int temp_7;
    precise float temp_8;
    int temp_9;
    int temp_10;
    precise float temp_11;
    uint temp_12;
    int temp_13;
    int temp_14;
    int temp_15;
    precise float temp_16;
    int temp_17;
    int temp_18;
    uint temp_19;
    uint temp_20;
    int temp_21;
    precise float temp_22;
    int temp_23;
    uint temp_24;
    int temp_25;
    precise float temp_26;
    uint temp_27;
    int temp_28;
    int temp_29;
    int temp_30;
    int temp_31;
    uint temp_32;
    uint temp_33;
    int temp_34;
    precise float temp_35;
    int temp_36;
    uint temp_37;
    int temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    uint temp_42;
    int temp_43;
    int temp_44;
    int temp_45;
    uint temp_46;
    uint temp_47;
    int temp_48;
    precise float temp_49;
    int temp_50;
    uint temp_51;
    int temp_52;
    precise float temp_53;
    int temp_54;
    uint temp_55;
    uint temp_56;
    int temp_57;
    precise float temp_58;
    int temp_59;
    uint temp_60;
    int temp_61;
    precise float temp_62;
    int temp_63;
    uint temp_64;
    uint temp_65;
    int temp_66;
    precise float temp_67;
    int temp_68;
    uint temp_69;
    int temp_70;
    precise float temp_71;
    int temp_72;
    uint temp_73;
    uint temp_74;
    int temp_75;
    precise float temp_76;
    int temp_77;
    uint temp_78;
    int temp_79;
    precise float temp_80;
    uint temp_81;
    uint temp_82;
    int temp_83;
    precise float temp_84;
    int temp_85;
    uint temp_86;
    int temp_87;
    precise float temp_88;
    int temp_89;
    uint temp_90;
    uint temp_91;
    int temp_92;
    precise float temp_93;
    int temp_94;
    uint temp_95;
    int temp_96;
    precise float temp_97;
    int temp_98;
    uint temp_99;
    uint temp_100;
    int temp_101;
    precise float temp_102;
    int temp_103;
    uint temp_104;
    int temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    int temp_114;
    uint temp_115;
    uint temp_116;
    int temp_117;
    precise float temp_118;
    int temp_119;
    uint temp_120;
    int temp_121;
    precise float temp_122;
    precise float temp_123;
    int temp_124;
    uint temp_125;
    uint temp_126;
    int temp_127;
    precise float temp_128;
    int temp_129;
    uint temp_130;
    int temp_131;
    precise float temp_132;
    int temp_133;
    uint temp_134;
    uint temp_135;
    int temp_136;
    precise float temp_137;
    int temp_138;
    uint temp_139;
    int temp_140;
    precise float temp_141;
    int temp_142;
    uint temp_143;
    uint temp_144;
    int temp_145;
    precise float temp_146;
    int temp_147;
    uint temp_148;
    int temp_149;
    precise float temp_150;
    int temp_151;
    uint temp_152;
    uint temp_153;
    int temp_154;
    precise float temp_155;
    int temp_156;
    uint temp_157;
    int temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    int temp_170;
    uint temp_171;
    uint temp_172;
    int temp_173;
    precise float temp_174;
    int temp_175;
    uint temp_176;
    int temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    int temp_202;
    uint temp_203;
    uint temp_204;
    int temp_205;
    precise float temp_206;
    int temp_207;
    uint temp_208;
    int temp_209;
    precise float temp_210;
    precise float temp_211;
    int temp_212;
    uint temp_213;
    uint temp_214;
    int temp_215;
    precise float temp_216;
    int temp_217;
    uint temp_218;
    int temp_219;
    precise float temp_220;
    precise float temp_221;
    int temp_222;
    uint temp_223;
    uint temp_224;
    int temp_225;
    precise float temp_226;
    int temp_227;
    uint temp_228;
    int temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    int temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    int temp_299;
    precise float temp_300;
    int temp_301;
    uint temp_302;
    uint temp_303;
    int temp_304;
    precise float temp_305;
    precise float temp_306;
    int temp_307;
    uint temp_308;
    uint temp_309;
    int temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    int temp_314;
    uint temp_315;
    uint temp_316;
    int temp_317;
    precise float temp_318;
    int temp_319;
    uint temp_320;
    int temp_321;
    precise float temp_322;
    precise float temp_323;
    precise float temp_324;
    precise float temp_325;
    precise float temp_326;
    int temp_327;
    uint temp_328;
    uint temp_329;
    int temp_330;
    precise float temp_331;
    int temp_332;
    uint temp_333;
    int temp_334;
    precise float temp_335;
    precise float temp_336;
    precise float temp_337;
    precise float temp_338;
    precise float temp_339;
    precise float temp_340;
    precise float temp_341;
    precise float temp_342;
    precise float temp_343;
    precise float temp_344;
    precise float temp_345;
    precise float temp_346;
    precise float temp_347;
    precise float temp_348;
    precise float temp_349;
    precise float temp_350;
    precise float temp_351;
    precise float temp_352;
    precise float temp_353;
    precise float temp_354;
    precise float temp_355;
    precise float temp_356;
    precise float temp_357;
    precise float temp_358;
    precise float temp_359;
    precise float temp_360;
    precise float temp_361;
    precise float temp_362;
    precise float temp_363;
    precise float temp_364;
    precise float temp_365;
    precise float temp_366;
    precise float temp_367;
    precise float temp_368;
    precise float temp_369;
    precise float temp_370;
    precise float temp_371;
    precise float temp_372;
    precise float temp_373;
    precise float temp_374;
    precise float temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    precise float temp_381;
    precise float temp_382;
    precise float temp_383;
    precise float temp_384;
    precise float temp_385;
    precise float temp_386;
    precise float temp_387;
    precise float temp_388;
    precise float temp_389;
    precise float temp_390;
    precise float temp_391;
    precise float temp_392;
    precise float temp_393;
    precise float temp_394;
    precise float temp_395;
    precise float temp_396;
    precise float temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    precise float temp_405;
    precise float temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    precise float temp_412;
    precise float temp_413;
    precise float temp_414;
    precise float temp_415;
    precise float temp_416;
    precise float temp_417;
    precise float temp_418;
    precise float temp_419;
    precise float temp_420;
    precise float temp_421;
    precise float temp_422;
    precise float temp_423;
    precise float temp_424;
    precise float temp_425;
    precise float temp_426;
    precise float temp_427;
    precise float temp_428;
    precise float temp_429;
    precise float temp_430;
    precise float temp_431;
    precise float temp_432;
    precise float temp_433;
    precise float temp_434;
    precise float temp_435;
    precise float temp_436;
    precise float temp_437;
    precise float temp_438;
    precise float temp_439;
    precise float temp_440;
    precise float temp_441;
    precise float temp_442;
    precise float temp_443;
    precise float temp_444;
    precise float temp_445;
    precise float temp_446;
    precise float temp_447;
    precise float temp_448;
    precise float temp_449;
    precise float temp_450;
    precise float temp_451;
    precise float temp_452;
    precise float temp_453;
    precise float temp_454;
    precise float temp_455;
    precise float temp_456;
    precise float temp_457;
    precise float temp_458;
    precise float temp_459;
    precise float temp_460;
    precise float temp_461;
    precise float temp_462;
    precise float temp_463;
    precise float temp_464;
    precise float temp_465;
    precise float temp_466;
    precise float temp_467;
    precise float temp_468;
    precise float temp_469;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400270007 Mov
    // 0x000010: 0xEFD87F800E47FF00 Ald
    temp_0 = in_attr6.y;
    // 0x000018: 0x4C98079400370005 Mov
    // 0x000028: 0xEFD87F800E87FF02 Ald
    temp_1 = in_attr6.z;
    // 0x000030: 0xEFD87F800E07FF01 Ald
    temp_2 = in_attr6.x;
    // 0x000038: 0xEFD87F800907FF15 Ald
    temp_3 = in_attr1.x;
    // 0x000048: 0xEFD87F800A87FF04 Ald
    temp_4 = in_attr2.z;
    // 0x000050: 0xEFD87F801047FF08 Ald
    temp_5 = in_attr8.y;
    // 0x000058: 0x36007F800307003D Xmad
    temp_6 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_7 = temp_6 * 48;
    // 0x000068: 0xEFD87F800987FF0B Ald
    temp_8 = in_attr1.z;
    // 0x000070: 0x36007F8003070209 Xmad
    temp_9 = floatBitsToInt(temp_1) & 0xFFFF;
    temp_10 = temp_9 * 48;
    // 0x000078: 0xEFD87F800A07FF19 Ald
    temp_11 = in_attr2.x;
    // 0x000088: 0x36201E900307003D Xmad
    temp_12 = floatBitsToUint(temp_0) >> 16;
    temp_13 = int(temp_12) * 48;
    temp_14 = temp_13 << 16;
    temp_15 = temp_14 + temp_7;
    // 0x000090: 0xEFD87F800A47FF06 Ald
    temp_16 = in_attr2.y;
    // 0x000098: 0x36007F8003070130 Xmad
    temp_17 = floatBitsToInt(temp_2) & 0xFFFF;
    temp_18 = temp_17 * 48;
    // 0x0000A8: 0xEF95008000073D0C Ldc
    temp_19 = uint(temp_15) >> 2;
    temp_20 = temp_19 >> 2;
    temp_21 = int(temp_19) & 3;
    temp_22 = vp_c8.data[int(temp_20)][temp_21];
    temp_23 = int(temp_19) + 1;
    temp_24 = uint(temp_23) >> 2;
    temp_25 = temp_23 & 3;
    temp_26 = vp_c8.data[int(temp_24)][temp_25];
    // 0x0000B0: 0x3620049003070209 Xmad
    temp_27 = floatBitsToUint(temp_1) >> 16;
    temp_28 = int(temp_27) * 48;
    temp_29 = temp_28 << 16;
    temp_30 = temp_29 + temp_10;
    // 0x0000B8: 0xEF95008002073D22 Ldc
    temp_31 = temp_15 + 32;
    temp_32 = uint(temp_31) >> 2;
    temp_33 = temp_32 >> 2;
    temp_34 = int(temp_32) & 3;
    temp_35 = vp_c8.data[int(temp_33)][temp_34];
    temp_36 = int(temp_32) + 1;
    temp_37 = uint(temp_36) >> 2;
    temp_38 = temp_36 & 3;
    temp_39 = vp_c8.data[int(temp_37)][temp_38];
    // 0x0000C8: 0x5C68100000471502 Fmul
    temp_40 = temp_3 * temp_4;
    // 0x0000D0: 0xEFD87F801007FF0A Ald
    temp_41 = in_attr8.x;
    // 0x0000D8: 0x3620181003070130 Xmad
    temp_42 = floatBitsToUint(temp_2) >> 16;
    temp_43 = int(temp_42) * 48;
    temp_44 = temp_43 << 16;
    temp_45 = temp_44 + temp_18;
    // 0x0000E8: 0xEF95008000070912 Ldc
    temp_46 = uint(temp_30) >> 2;
    temp_47 = temp_46 >> 2;
    temp_48 = int(temp_46) & 3;
    temp_49 = vp_c8.data[int(temp_47)][temp_48];
    temp_50 = int(temp_46) + 1;
    temp_51 = uint(temp_50) >> 2;
    temp_52 = temp_50 & 3;
    temp_53 = vp_c8.data[int(temp_51)][temp_52];
    // 0x0000F0: 0xEF95008001073D2E Ldc
    temp_54 = temp_15 + 16;
    temp_55 = uint(temp_54) >> 2;
    temp_56 = temp_55 >> 2;
    temp_57 = int(temp_55) & 3;
    temp_58 = vp_c8.data[int(temp_56)][temp_57];
    temp_59 = int(temp_55) + 1;
    temp_60 = uint(temp_59) >> 2;
    temp_61 = temp_59 & 3;
    temp_62 = vp_c8.data[int(temp_60)][temp_61];
    // 0x0000F8: 0xEF9500800107091E Ldc
    temp_63 = temp_30 + 16;
    temp_64 = uint(temp_63) >> 2;
    temp_65 = temp_64 >> 2;
    temp_66 = int(temp_64) & 3;
    temp_67 = vp_c8.data[int(temp_65)][temp_66];
    temp_68 = int(temp_64) + 1;
    temp_69 = uint(temp_68) >> 2;
    temp_70 = temp_68 & 3;
    temp_71 = vp_c8.data[int(temp_69)][temp_70];
    // 0x000108: 0xEF9500800207091A Ldc
    temp_72 = temp_30 + 32;
    temp_73 = uint(temp_72) >> 2;
    temp_74 = temp_73 >> 2;
    temp_75 = int(temp_73) & 3;
    temp_76 = vp_c8.data[int(temp_74)][temp_75];
    temp_77 = int(temp_73) + 1;
    temp_78 = uint(temp_77) >> 2;
    temp_79 = temp_77 & 3;
    temp_80 = vp_c8.data[int(temp_78)][temp_79];
    // 0x000110: 0xEF9500800007300E Ldc
    temp_81 = uint(temp_45) >> 2;
    temp_82 = temp_81 >> 2;
    temp_83 = int(temp_81) & 3;
    temp_84 = vp_c8.data[int(temp_82)][temp_83];
    temp_85 = int(temp_81) + 1;
    temp_86 = uint(temp_85) >> 2;
    temp_87 = temp_85 & 3;
    temp_88 = vp_c8.data[int(temp_86)][temp_87];
    // 0x000118: 0xEF95008001073016 Ldc
    temp_89 = temp_45 + 16;
    temp_90 = uint(temp_89) >> 2;
    temp_91 = temp_90 >> 2;
    temp_92 = int(temp_90) & 3;
    temp_93 = vp_c8.data[int(temp_91)][temp_92];
    temp_94 = int(temp_90) + 1;
    temp_95 = uint(temp_94) >> 2;
    temp_96 = temp_94 & 3;
    temp_97 = vp_c8.data[int(temp_95)][temp_96];
    // 0x000128: 0xEF95008002073026 Ldc
    temp_98 = temp_45 + 32;
    temp_99 = uint(temp_98) >> 2;
    temp_100 = temp_99 >> 2;
    temp_101 = int(temp_99) & 3;
    temp_102 = vp_c8.data[int(temp_100)][temp_101];
    temp_103 = int(temp_99) + 1;
    temp_104 = uint(temp_103) >> 2;
    temp_105 = temp_103 & 3;
    temp_106 = vp_c8.data[int(temp_104)][temp_105];
    // 0x000130: 0xEFD87F800947FF03 Ald
    temp_107 = in_attr1.y;
    // 0x000138: 0x51A0039400470807 Ffma
    temp_108 = fma(temp_5, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000148: 0xEFD87F800AC7FF00 Ald
    temp_109 = in_attr2.w;
    // 0x000150: 0x51A0029400570808 Ffma
    temp_110 = fma(temp_5, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000158: 0xEFD87F800807FF11 Ald
    temp_111 = in_attr0.x;
    // 0x000168: 0x59A2010001970B05 Ffma
    temp_112 = 0.0 - temp_40;
    temp_113 = fma(temp_8, temp_11, temp_112);
    // 0x000170: 0xEF95008000873032 Ldc
    temp_114 = temp_45 + 8;
    temp_115 = uint(temp_114) >> 2;
    temp_116 = temp_115 >> 2;
    temp_117 = int(temp_115) & 3;
    temp_118 = vp_c8.data[int(temp_116)][temp_117];
    temp_119 = int(temp_115) + 1;
    temp_120 = uint(temp_119) >> 2;
    temp_121 = temp_119 & 3;
    temp_122 = vp_c8.data[int(temp_120)][temp_121];
    // 0x000178: 0x5C68100000670B01 Fmul
    temp_123 = temp_8 * temp_16;
    // 0x000188: 0xEF95008000873D2A Ldc
    temp_124 = temp_15 + 8;
    temp_125 = uint(temp_124) >> 2;
    temp_126 = temp_125 >> 2;
    temp_127 = int(temp_125) & 3;
    temp_128 = vp_c8.data[int(temp_126)][temp_127];
    temp_129 = int(temp_125) + 1;
    temp_130 = uint(temp_129) >> 2;
    temp_131 = temp_129 & 3;
    temp_132 = vp_c8.data[int(temp_130)][temp_131];
    // 0x000190: 0xEF95008001873D36 Ldc
    temp_133 = temp_15 + 24;
    temp_134 = uint(temp_133) >> 2;
    temp_135 = temp_134 >> 2;
    temp_136 = int(temp_134) & 3;
    temp_137 = vp_c8.data[int(temp_135)][temp_136];
    temp_138 = int(temp_134) + 1;
    temp_139 = uint(temp_138) >> 2;
    temp_140 = temp_138 & 3;
    temp_141 = vp_c8.data[int(temp_139)][temp_140];
    // 0x000198: 0xEF9500800187303A Ldc
    temp_142 = temp_45 + 24;
    temp_143 = uint(temp_142) >> 2;
    temp_144 = temp_143 >> 2;
    temp_145 = int(temp_143) & 3;
    temp_146 = vp_c8.data[int(temp_144)][temp_145];
    temp_147 = int(temp_143) + 1;
    temp_148 = uint(temp_147) >> 2;
    temp_149 = temp_147 & 3;
    temp_150 = vp_c8.data[int(temp_148)][temp_149];
    // 0x0001A8: 0xEF9500800087093E Ldc
    temp_151 = temp_30 + 8;
    temp_152 = uint(temp_151) >> 2;
    temp_153 = temp_152 >> 2;
    temp_154 = int(temp_152) & 3;
    temp_155 = vp_c8.data[int(temp_153)][temp_154];
    temp_156 = int(temp_152) + 1;
    temp_157 = uint(temp_156) >> 2;
    temp_158 = temp_156 & 3;
    temp_159 = vp_c8.data[int(temp_157)][temp_158];
    // 0x0001B0: 0x49A0041400170A02 Ffma
    temp_160 = fma(temp_41, vp_c5.data[0].y, temp_110);
    // 0x0001B8: 0xEFD87F800847FF08 Ald
    temp_161 = in_attr0.y;
    // 0x0001C8: 0x59A2008000370401 Ffma
    temp_162 = 0.0 - temp_123;
    temp_163 = fma(temp_4, temp_107, temp_162);
    // 0x0001D0: 0x5C68100001970303 Fmul
    temp_164 = temp_107 * temp_11;
    // 0x0001D8: 0x5C68100000070505 Fmul
    temp_165 = temp_113 * temp_109;
    // 0x0001E8: 0x5C6810000007011D Fmul
    temp_166 = temp_163 * temp_109;
    // 0x0001F0: 0x49A0039400070A01 Ffma
    temp_167 = fma(temp_41, vp_c5.data[0].x, temp_108);
    // 0x0001F8: 0x59A2018001570603 Ffma
    temp_168 = 0.0 - temp_164;
    temp_169 = fma(temp_16, temp_3, temp_168);
    // 0x000208: 0xEF95008002873D14 Ldc
    temp_170 = temp_15 + 40;
    temp_171 = uint(temp_170) >> 2;
    temp_172 = temp_171 >> 2;
    temp_173 = int(temp_171) & 3;
    temp_174 = vp_c8.data[int(temp_172)][temp_173];
    temp_175 = int(temp_171) + 1;
    temp_176 = uint(temp_175) >> 2;
    temp_177 = temp_175 & 3;
    temp_178 = vp_c8.data[int(temp_176)][temp_177];
    // 0x000210: 0x5C68100001970C1C Fmul
    temp_179 = temp_22 * temp_11;
    // 0x000218: 0x5C68100001D70C0A Fmul
    temp_180 = temp_22 * temp_166;
    // 0x000228: 0x5C68100001170C0B Fmul
    temp_181 = temp_22 * temp_111;
    // 0x000230: 0x5C68100001972229 Fmul
    temp_182 = temp_35 * temp_11;
    // 0x000238: 0x5C68100001172231 Fmul
    temp_183 = temp_35 * temp_111;
    // 0x000248: 0x5C68100000070303 Fmul
    temp_184 = temp_169 * temp_109;
    // 0x000250: 0x5C68100001971225 Fmul
    temp_185 = temp_49 * temp_11;
    // 0x000258: 0x5C68100001D71228 Fmul
    temp_186 = temp_49 * temp_166;
    // 0x000268: 0x5C6810000117122D Fmul
    temp_187 = temp_49 * temp_111;
    // 0x000270: 0x5C68100001D72212 Fmul
    temp_188 = temp_35 * temp_166;
    // 0x000278: 0x59A00E0000670D39 Ffma
    temp_189 = fma(temp_26, temp_16, temp_179);
    // 0x000288: 0x59A0050000570D3D Ffma
    temp_190 = fma(temp_26, temp_165, temp_180);
    // 0x000290: 0x5C68100001970E0C Fmul
    temp_191 = temp_84 * temp_11;
    // 0x000298: 0x5C68100001D70E07 Fmul
    temp_192 = temp_84 * temp_166;
    // 0x0002A8: 0x5C68100001972E10 Fmul
    temp_193 = temp_58 * temp_11;
    // 0x0002B0: 0x5C68100001D72E20 Fmul
    temp_194 = temp_58 * temp_166;
    // 0x0002B8: 0x5C68100001971621 Fmul
    temp_195 = temp_93 * temp_11;
    // 0x0002C8: 0x5C68100001D71624 Fmul
    temp_196 = temp_93 * temp_166;
    // 0x0002D0: 0x5C6810000197262C Fmul
    temp_197 = temp_102 * temp_11;
    // 0x0002D8: 0x5C68100001D72622 Fmul
    temp_198 = temp_102 * temp_166;
    // 0x0002E8: 0x5C68100001971E35 Fmul
    temp_199 = temp_67 * temp_11;
    // 0x0002F0: 0x5C68100001D71E34 Fmul
    temp_200 = temp_67 * temp_166;
    // 0x0002F8: 0x5C68100001971A38 Fmul
    temp_201 = temp_76 * temp_11;
    // 0x000308: 0xEF95008002873018 Ldc
    temp_202 = temp_45 + 40;
    temp_203 = uint(temp_202) >> 2;
    temp_204 = temp_203 >> 2;
    temp_205 = int(temp_203) & 3;
    temp_206 = vp_c8.data[int(temp_204)][temp_205];
    temp_207 = int(temp_203) + 1;
    temp_208 = uint(temp_207) >> 2;
    temp_209 = temp_207 & 3;
    temp_210 = vp_c8.data[int(temp_208)][temp_209];
    // 0x000310: 0x5C68100001D71A3C Fmul
    temp_211 = temp_76 * temp_166;
    // 0x000318: 0xEF9500800187091C Ldc
    temp_212 = temp_30 + 24;
    temp_213 = uint(temp_212) >> 2;
    temp_214 = temp_213 >> 2;
    temp_215 = int(temp_213) & 3;
    temp_216 = vp_c8.data[int(temp_214)][temp_215];
    temp_217 = int(temp_213) + 1;
    temp_218 = uint(temp_217) >> 2;
    temp_219 = temp_217 & 3;
    temp_220 = vp_c8.data[int(temp_218)][temp_219];
    // 0x000328: 0x59A0058000870D0D Ffma
    temp_221 = fma(temp_26, temp_161, temp_181);
    // 0x000330: 0xEF9500800287090A Ldc
    temp_222 = temp_30 + 40;
    temp_223 = uint(temp_222) >> 2;
    temp_224 = temp_223 >> 2;
    temp_225 = int(temp_223) & 3;
    temp_226 = vp_c8.data[int(temp_224)][temp_225];
    temp_227 = int(temp_223) + 1;
    temp_228 = uint(temp_227) >> 2;
    temp_229 = temp_227 & 3;
    temp_230 = vp_c8.data[int(temp_228)][temp_229];
    // 0x000338: 0x5C68100001170E0E Fmul
    temp_231 = temp_84 * temp_111;
    // 0x000348: 0x59A0060000670F0C Ffma
    temp_232 = fma(temp_88, temp_16, temp_191);
    // 0x000350: 0x59A0038000570F07 Ffma
    temp_233 = fma(temp_88, temp_165, temp_192);
    // 0x000358: 0x59A0128000671325 Ffma
    temp_234 = fma(temp_53, temp_16, temp_185);
    // 0x000368: 0x59A0140000571328 Ffma
    temp_235 = fma(temp_53, temp_165, temp_186);
    // 0x000370: 0x59A016800087132D Ffma
    temp_236 = fma(temp_53, temp_161, temp_187);
    // 0x000378: 0x59A0070000870F0F Ffma
    temp_237 = fma(temp_88, temp_161, temp_231);
    // 0x000388: 0xEFD87F800887FF0E Ald
    temp_238 = in_attr0.z;
    // 0x000390: 0x59A0148000672329 Ffma
    temp_239 = fma(temp_39, temp_16, temp_182);
    // 0x000398: 0x59A0090000572312 Ffma
    temp_240 = fma(temp_39, temp_165, temp_188);
    // 0x0003A8: 0x59A0188000872331 Ffma
    temp_241 = fma(temp_39, temp_161, temp_183);
    // 0x0003B0: 0x59A0080000672F10 Ffma
    temp_242 = fma(temp_62, temp_16, temp_193);
    // 0x0003B8: 0x59A0108000671721 Ffma
    temp_243 = fma(temp_97, temp_16, temp_195);
    // 0x0003C8: 0x59A0160000672713 Ffma
    temp_244 = fma(temp_106, temp_16, temp_197);
    // 0x0003D0: 0x59A01A8000671F35 Ffma
    temp_245 = fma(temp_71, temp_16, temp_199);
    // 0x0003D8: 0x59A01C0000671B23 Ffma
    temp_246 = fma(temp_80, temp_16, temp_201);
    // 0x0003E8: 0xEFD87F800C47FF06 Ald
    temp_247 = in_attr4.y;
    // 0x0003F0: 0x5C68100001171616 Fmul
    temp_248 = temp_93 * temp_111;
    // 0x0003F8: 0x5C68100001172E2E Fmul
    temp_249 = temp_58 * temp_111;
    // 0x000408: 0x5C68100001172626 Fmul
    temp_250 = temp_102 * temp_111;
    // 0x000410: 0x5C68100001171E1E Fmul
    temp_251 = temp_67 * temp_111;
    // 0x000418: 0x5C68100001171A11 Fmul
    temp_252 = temp_76 * temp_111;
    // 0x000428: 0x59A0100000572F20 Ffma
    temp_253 = fma(temp_62, temp_165, temp_194);
    // 0x000430: 0x59A0120000571724 Ffma
    temp_254 = fma(temp_97, temp_165, temp_196);
    // 0x000438: 0x59A0110000572722 Ffma
    temp_255 = fma(temp_106, temp_165, temp_198);
    // 0x000448: 0x59A01A0000571F09 Ffma
    temp_256 = fma(temp_71, temp_165, temp_200);
    // 0x000450: 0x59A01E0000571B3C Ffma
    temp_257 = fma(temp_80, temp_165, temp_211);
    // 0x000458: 0xEFD87F800C07FF05 Ald
    temp_258 = in_attr4.x;
    // 0x000468: 0x59A00B0000871717 Ffma
    temp_259 = fma(temp_97, temp_161, temp_248);
    // 0x000470: 0x59A006000047320C Ffma
    temp_260 = fma(temp_118, temp_4, temp_232);
    // 0x000478: 0x59A0038000373207 Ffma
    temp_261 = fma(temp_118, temp_184, temp_233);
    // 0x000488: 0x59A0170000872F2F Ffma
    temp_262 = fma(temp_62, temp_161, temp_249);
    // 0x000490: 0x59A0130000872727 Ffma
    temp_263 = fma(temp_106, temp_161, temp_250);
    // 0x000498: 0x59A00F0000871F1F Ffma
    temp_264 = fma(temp_71, temp_161, temp_251);
    // 0x0004A8: 0x59A0088000871B11 Ffma
    temp_265 = fma(temp_80, temp_161, temp_252);
    // 0x0004B0: 0x59A0078000E73232 Ffma
    temp_266 = fma(temp_118, temp_238, temp_237);
    // 0x0004B8: 0xEFD87F800C87FF0F Ald
    temp_267 = in_attr4.z;
    // 0x0004C8: 0x59A0108000473A08 Ffma
    temp_268 = fma(temp_146, temp_4, temp_243);
    // 0x0004D0: 0xEFF07F800E07FF01 Ast
    out_attr6.x = temp_167;
    // 0x0004D8: 0x59A0120000373A24 Ffma
    temp_269 = fma(temp_146, temp_184, temp_254);
    // 0x0004E8: 0xEFF07F800E47FF02 Ast
    out_attr6.y = temp_160;
    // 0x0004F0: 0x59A00B8000E73A3A Ffma
    temp_270 = fma(temp_146, temp_238, temp_259);
    // 0x0004F8: 0x59A0080000473610 Ffma
    temp_271 = fma(temp_137, temp_4, temp_242);
    // 0x000508: 0x59A0100000373620 Ffma
    temp_272 = fma(temp_137, temp_184, temp_253);
    // 0x000510: 0x59A0148000471429 Ffma
    temp_273 = fma(temp_174, temp_4, temp_239);
    // 0x000518: 0x59A0090000371417 Ffma
    temp_274 = fma(temp_174, temp_184, temp_240);
    // 0x000528: 0x59A0068000E72A0D Ffma
    temp_275 = fma(temp_128, temp_238, temp_221);
    // 0x000530: 0x59A0178000E73636 Ffma
    temp_276 = fma(temp_137, temp_238, temp_262);
    // 0x000538: 0x59A0168000E73E2D Ffma
    temp_277 = fma(temp_155, temp_238, temp_236);
    // 0x000548: 0x59A0188000E71414 Ffma
    temp_278 = fma(temp_174, temp_238, temp_241);
    // 0x000550: 0x59A0138000E71827 Ffma
    temp_279 = fma(temp_206, temp_238, temp_263);
    // 0x000558: 0x59A00F8000E71C1F Ffma
    temp_280 = fma(temp_216, temp_238, temp_264);
    // 0x000568: 0x59A0088000E70A11 Ffma
    temp_281 = fma(temp_226, temp_238, temp_265);
    // 0x000570: 0x4CB0119002371A0E F2i
    temp_282 = trunc(vp_c4.data[8].w);
    temp_283 = int(temp_282);
    // 0x000578: 0x59A01C8000472A39 Ffma
    temp_284 = fma(temp_128, temp_4, temp_189);
    // 0x000588: 0x59A01E8000372A3D Ffma
    temp_285 = fma(temp_128, temp_184, temp_190);
    // 0x000590: 0x59A0140000373E28 Ffma
    temp_286 = fma(temp_155, temp_184, temp_235);
    // 0x000598: 0x59A0110000371822 Ffma
    temp_287 = fma(temp_206, temp_184, temp_255);
    // 0x0005A8: 0x59A0048000371C09 Ffma
    temp_288 = fma(temp_216, temp_184, temp_256);
    // 0x0005B0: 0x59A01E0000370A3C Ffma
    temp_289 = fma(temp_226, temp_184, temp_257);
    // 0x0005B8: 0x5C68100000673903 Fmul
    temp_290 = temp_284 * temp_247;
    // 0x0005C8: 0x59A0128000473E25 Ffma
    temp_291 = fma(temp_155, temp_4, temp_234);
    // 0x0005D0: 0x59A0098000471813 Ffma
    temp_292 = fma(temp_206, temp_4, temp_244);
    // 0x0005D8: 0x59A01A8000471C35 Ffma
    temp_293 = fma(temp_216, temp_4, temp_245);
    // 0x0005E8: 0x59A0118000470A12 Ffma
    temp_294 = fma(temp_226, temp_4, temp_246);
    // 0x0005F0: 0x5C68100000672904 Fmul
    temp_295 = temp_273 * temp_247;
    // 0x0005F8: 0x5C6810000067100A Fmul
    temp_296 = temp_271 * temp_247;
    // 0x000608: 0x59A0018000570C0C Ffma
    temp_297 = fma(temp_260, temp_258, temp_290);
    // 0x000610: 0x5C58100001471514 Fadd
    temp_298 = temp_178 + temp_278;
    // 0x000618: 0x3848000000470E0E Shl
    temp_299 = temp_283 << 4;
    // 0x000628: 0x5C58100000D72B2B Fadd
    temp_300 = temp_132 + temp_275;
    // 0x000630: 0xEF94007048870E10 Ldc
    temp_301 = temp_299 + 0x488;
    temp_302 = uint(temp_301) >> 2;
    temp_303 = temp_302 >> 2;
    temp_304 = int(temp_302) & 3;
    temp_305 = vp_c7.data[int(temp_303)][temp_304];
    // 0x000638: 0x59A0020000571304 Ffma
    temp_306 = fma(temp_292, temp_258, temp_295);
    // 0x000648: 0xEF94007068870E16 Ldc
    temp_307 = temp_299 + 0x688;
    temp_308 = uint(temp_307) >> 2;
    temp_309 = temp_308 >> 2;
    temp_310 = int(temp_308) & 3;
    temp_311 = vp_c7.data[int(temp_309)][temp_310];
    // 0x000650: 0x59A0050000570808 Ffma
    temp_312 = fma(temp_268, temp_258, temp_296);
    // 0x000658: 0x59A0060000F72525 Ffma
    temp_313 = fma(temp_291, temp_267, temp_297);
    // 0x000668: 0xEF95007068070E0C Ldc
    temp_314 = temp_299 + 0x680;
    temp_315 = uint(temp_314) >> 2;
    temp_316 = temp_315 >> 2;
    temp_317 = int(temp_315) & 3;
    temp_318 = vp_c7.data[int(temp_316)][temp_317];
    temp_319 = int(temp_315) + 1;
    temp_320 = uint(temp_319) >> 2;
    temp_321 = temp_319 & 3;
    temp_322 = vp_c7.data[int(temp_320)][temp_321];
    // 0x000670: 0x5C58100003673737 Fadd
    temp_323 = temp_141 + temp_276;
    // 0x000678: 0x5C58100002771927 Fadd
    temp_324 = temp_210 + temp_279;
    // 0x000688: 0x5C68100000671414 Fmul
    temp_325 = temp_298 * temp_247;
    // 0x000690: 0x59A0020000F71203 Ffma
    temp_326 = fma(temp_294, temp_267, temp_306);
    // 0x000698: 0xEF95007048070E12 Ldc
    temp_327 = temp_299 + 0x480;
    temp_328 = uint(temp_327) >> 2;
    temp_329 = temp_328 >> 2;
    temp_330 = int(temp_328) & 3;
    temp_331 = vp_c7.data[int(temp_329)][temp_330];
    temp_332 = int(temp_328) + 1;
    temp_333 = uint(temp_332) >> 2;
    temp_334 = temp_332 & 3;
    temp_335 = vp_c7.data[int(temp_333)][temp_334];
    // 0x0006A8: 0x59A0040000F73535 Ffma
    temp_336 = fma(temp_293, temp_267, temp_312);
    // 0x0006B0: 0x5C68100002572504 Fmul
    temp_337 = temp_313 * temp_313;
    // 0x0006B8: 0x5C58100003273332 Fadd
    temp_338 = temp_122 + temp_266;
    // 0x0006C8: 0x5C68100000672B2B Fmul
    temp_339 = temp_300 * temp_247;
    // 0x0006D0: 0x5C58100003A73B3A Fadd
    temp_340 = temp_150 + temp_270;
    // 0x0006D8: 0x5C68100000673737 Fmul
    temp_341 = temp_323 * temp_247;
    // 0x0006E8: 0x5C58100001170B11 Fadd
    temp_342 = temp_230 + temp_281;
    // 0x0006F0: 0x59A00A0000572714 Ffma
    temp_343 = fma(temp_324, temp_258, temp_325);
    // 0x0006F8: 0x59A0020003573504 Ffma
    temp_344 = fma(temp_336, temp_336, temp_337);
    // 0x000708: 0x5C58100002D73F2D Fadd
    temp_345 = temp_159 + temp_277;
    // 0x000710: 0x59A0158000573232 Ffma
    temp_346 = fma(temp_338, temp_258, temp_339);
    // 0x000718: 0x5C68100000673D08 Fmul
    temp_347 = temp_285 * temp_247;
    // 0x000728: 0x5C6810000067200A Fmul
    temp_348 = temp_272 * temp_247;
    // 0x000730: 0x5C68100000671717 Fmul
    temp_349 = temp_274 * temp_247;
    // 0x000738: 0x5C58100001F71D1D Fadd
    temp_350 = temp_220 + temp_280;
    // 0x000748: 0x59A01B8000573A3A Ffma
    temp_351 = fma(temp_340, temp_258, temp_341);
    // 0x000750: 0x59A00A0000F71111 Ffma
    temp_352 = fma(temp_342, temp_267, temp_343);
    // 0x000758: 0x59A0020000370306 Ffma
    temp_353 = fma(temp_326, temp_326, temp_344);
    // 0x000768: 0x59A0190000F72D2D Ffma
    temp_354 = fma(temp_345, temp_267, temp_346);
    // 0x000770: 0x5080000000570606 Mufu
    temp_355 = inversesqrt(temp_353);
    // 0x000778: 0x59A004000057070E Ffma
    temp_356 = fma(temp_261, temp_258, temp_347);
    // 0x000788: 0x59A01D0000F71D3A Ffma
    temp_357 = fma(temp_350, temp_267, temp_351);
    // 0x000790: 0x59A00B0001071110 Ffma
    temp_358 = fma(temp_352, temp_305, temp_311);
    // 0x000798: 0x59A0050000572404 Ffma
    temp_359 = fma(temp_269, temp_258, temp_348);
    // 0x0007A8: 0xEFF07F800D87FF10 Ast
    out_attr5.z = temp_358;
    // 0x0007B0: 0x59A0060001272D0C Ffma
    temp_360 = fma(temp_354, temp_331, temp_318);
    // 0x0007B8: 0x59A00B8000572222 Ffma
    temp_361 = fma(temp_287, temp_258, temp_349);
    // 0x0007C8: 0xEFF07F800D07FF0C Ast
    out_attr5.x = temp_360;
    // 0x0007D0: 0x59A0068001373A0D Ffma
    temp_362 = fma(temp_357, temp_335, temp_322);
    // 0x0007D8: 0x4C5810180BA71005 Fadd
    temp_363 = temp_358 + vp_c6.data[46].z;
    // 0x0007E8: 0xEFF07F800D47FF0D Ast
    out_attr5.y = temp_362;
    // 0x0007F0: 0x5C68100000672525 Fmul
    temp_364 = temp_313 * temp_355;
    // 0x0007F8: 0x5C68100000673535 Fmul
    temp_365 = temp_336 * temp_355;
    // 0x000808: 0xEFF07F800907FF25 Ast
    out_attr1.x = temp_364;
    // 0x000810: 0x5C68100000670303 Fmul
    temp_366 = temp_326 * temp_355;
    // 0x000818: 0xEFF07F800947FF35 Ast
    out_attr1.y = temp_365;
    // 0x000828: 0x4C5830180B070C07 Fadd
    temp_367 = 0.0 - vp_c6.data[44].x;
    temp_368 = temp_360 + temp_367;
    // 0x000830: 0xEFF07F800987FF03 Ast
    out_attr1.z = temp_366;
    // 0x000838: 0x59A0020000F70904 Ffma
    temp_369 = fma(temp_288, temp_267, temp_359);
    // 0x000848: 0x4C68100C00070C06 Fmul
    temp_370 = temp_360 * vp_c3.data[0].x;
    // 0x000850: 0x4C5810180B970D09 Fadd
    temp_371 = temp_362 + vp_c6.data[46].y;
    // 0x000858: 0x4C6810180C27050A Fmul
    temp_372 = temp_363 * vp_c6.data[48].z;
    // 0x000868: 0x59A0070000F72828 Ffma
    temp_373 = fma(temp_286, temp_267, temp_356);
    // 0x000870: 0x4C6810180C67050B Fmul
    temp_374 = temp_363 * vp_c6.data[49].z;
    // 0x000878: 0x4C6810180CA7050E Fmul
    temp_375 = temp_363 * vp_c6.data[50].z;
    // 0x000888: 0x4C68101803870711 Fmul
    temp_376 = temp_368 * vp_c6.data[14].x;
    // 0x000890: 0x4C68100C00470C08 Fmul
    temp_377 = temp_360 * vp_c3.data[1].x;
    // 0x000898: 0x49A0030C00170D07 Ffma
    temp_378 = fma(temp_362, vp_c3.data[0].y, temp_370);
    // 0x0008A8: 0x4C5810180B870C05 Fadd
    temp_379 = temp_360 + vp_c6.data[46].x;
    // 0x0008B0: 0x49A005180C170906 Ffma
    temp_380 = fma(temp_371, vp_c6.data[48].y, temp_372);
    // 0x0008B8: 0x49A005980C57090B Ffma
    temp_381 = fma(temp_371, vp_c6.data[49].y, temp_374);
    // 0x0008C8: 0x49A007180C97090E Ffma
    temp_382 = fma(temp_371, vp_c6.data[50].y, temp_375);
    // 0x0008D0: 0x49A0040C00570D0A Ffma
    temp_383 = fma(temp_362, vp_c3.data[1].y, temp_377);
    // 0x0008D8: 0x59A0110000F73C3C Ffma
    temp_384 = fma(temp_289, temp_267, temp_361);
    // 0x0008E8: 0x4C5830180B170D0F Fadd
    temp_385 = 0.0 - vp_c6.data[44].y;
    temp_386 = temp_362 + temp_385;
    // 0x0008F0: 0x49A003180C070508 Ffma
    temp_387 = fma(temp_379, vp_c6.data[48].x, temp_380);
    // 0x0008F8: 0x4C68100C00870C06 Fmul
    temp_388 = temp_360 * vp_c3.data[2].x;
    // 0x000908: 0x49A0038C00271009 Ffma
    temp_389 = fma(temp_358, vp_c3.data[0].z, temp_378);
    // 0x000910: 0x49A005980C47050B Ffma
    temp_390 = fma(temp_379, vp_c6.data[49].x, temp_381);
    // 0x000918: 0x49A007180C87050E Ffma
    temp_391 = fma(temp_379, vp_c6.data[50].x, temp_382);
    // 0x000928: 0x4C58101002071005 Fadd
    temp_392 = temp_358 + vp_c4.data[8].x;
    // 0x000930: 0x49A0089803970F12 Ffma
    temp_393 = fma(temp_386, vp_c6.data[14].y, temp_376);
    // 0x000938: 0x49A0030C00970D06 Ffma
    temp_394 = fma(temp_362, vp_c3.data[2].y, temp_388);
    // 0x000948: 0x49A0050C0067100F Ffma
    temp_395 = fma(temp_358, vp_c3.data[1].z, temp_383);
    // 0x000950: 0x4C58100C00370909 Fadd
    temp_396 = temp_389 + vp_c3.data[0].w;
    // 0x000958: 0x5C68100000470302 Fmul
    temp_397 = temp_366 * temp_369;
    // 0x000968: 0x49A0038C00270507 Ffma
    temp_398 = fma(temp_392, vp_c3.data[0].z, temp_378);
    // 0x000970: 0x49A0050C0067050A Ffma
    temp_399 = fma(temp_392, vp_c3.data[1].z, temp_383);
    // 0x000978: 0x49A0030C00A70505 Ffma
    temp_400 = fma(temp_392, vp_c3.data[2].z, temp_394);
    // 0x000988: 0x49A0030C00A71001 Ffma
    temp_401 = fma(temp_358, vp_c3.data[2].z, temp_394);
    // 0x000990: 0x4C58100C00770F0F Fadd
    temp_402 = temp_395 + vp_c3.data[1].w;
    // 0x000998: 0x4C68101802C70909 Fmul
    temp_403 = temp_396 * vp_c6.data[11].x;
    // 0x0009A8: 0x5C68100002873506 Fmul
    temp_404 = temp_365 * temp_373;
    // 0x0009B0: 0x4C58100C00370707 Fadd
    temp_405 = temp_398 + vp_c3.data[0].w;
    // 0x0009B8: 0x4C58100C00770A0A Fadd
    temp_406 = temp_399 + vp_c3.data[1].w;
    // 0x0009C8: 0x59A2010003C73502 Ffma
    temp_407 = 0.0 - temp_397;
    temp_408 = fma(temp_365, temp_384, temp_407);
    // 0x0009D0: 0x4C58300C02F70C13 Fadd
    temp_409 = 0.0 - vp_c3.data[11].w;
    temp_410 = temp_360 + temp_409;
    // 0x0009D8: 0x49A0049802D70F0F Ffma
    temp_411 = fma(temp_402, vp_c6.data[11].y, temp_403);
    // 0x0009E8: 0xEFF07F800B07FF13 Ast
    out_attr3.x = temp_410;
    // 0x0009F0: 0x59A2030000472506 Ffma
    temp_412 = 0.0 - temp_404;
    temp_413 = fma(temp_364, temp_369, temp_412);
    // 0x0009F8: 0x4C58100C00B70109 Fadd
    temp_414 = temp_401 + vp_c3.data[2].w;
    // 0x000A08: 0x4C68100C02870704 Fmul
    temp_415 = temp_405 * vp_c3.data[10].x;
    // 0x000A10: 0xEFF07F800C87FF09 Ast
    out_attr4.z = temp_414;
    // 0x000A18: 0x5C68100003C72501 Fmul
    temp_416 = temp_364 * temp_384;
    // 0x000A28: 0x4C58300C03370D0C Fadd
    temp_417 = 0.0 - vp_c3.data[12].w;
    temp_418 = temp_362 + temp_417;
    // 0x000A30: 0x4C58100C00B70505 Fadd
    temp_419 = temp_400 + vp_c3.data[2].w;
    // 0x000A38: 0xEFF07F800B47FF0C Ast
    out_attr3.y = temp_418;
    // 0x000A48: 0x49A0020C02970A04 Ffma
    temp_420 = fma(temp_406, vp_c3.data[10].y, temp_415);
    // 0x000A50: 0x59A2008002870301 Ffma
    temp_421 = 0.0 - temp_416;
    temp_422 = fma(temp_366, temp_373, temp_421);
    // 0x000A58: 0x5C68100000070202 Fmul
    temp_423 = temp_408 * temp_109;
    // 0x000A68: 0x49A0079802E7090F Ffma
    temp_424 = fma(temp_414, vp_c6.data[11].z, temp_411);
    // 0x000A70: 0x4C6810180BB7080D Fmul
    temp_425 = temp_387 * vp_c6.data[46].w;
    // 0x000A78: 0x4C68100C02470708 Fmul
    temp_426 = temp_405 * vp_c3.data[9].x;
    // 0x000A88: 0xEFF07F801107FF0D Ast
    out_attr9.x = temp_425;
    // 0x000A90: 0x4C68100C01C70709 Fmul
    temp_427 = temp_405 * vp_c3.data[7].x;
    // 0x000A98: 0x4C68100C0207070C Fmul
    temp_428 = temp_405 * vp_c3.data[8].x;
    // 0x000AA8: 0x49A0020C02A70507 Ffma
    temp_429 = fma(temp_419, vp_c3.data[10].z, temp_420);
    // 0x000AB0: 0x5C68100000070101 Fmul
    temp_430 = temp_422 * temp_109;
    // 0x000AB8: 0x5C68100000270204 Fmul
    temp_431 = temp_423 * temp_423;
    // 0x000AC8: 0x5C68100000070606 Fmul
    temp_432 = temp_413 * temp_109;
    // 0x000AD0: 0x49A0040C02570A08 Ffma
    temp_433 = fma(temp_406, vp_c3.data[9].y, temp_426);
    // 0x000AD8: 0x4C6810180BB70B0B Fmul
    temp_434 = temp_390 * vp_c6.data[46].w;
    // 0x000AE8: 0x4C58100C02B70707 Fadd
    temp_435 = temp_429 + vp_c3.data[10].w;
    // 0x000AF0: 0xEFF07F801147FF0B Ast
    out_attr9.y = temp_434;
    // 0x000AF8: 0x59A0020000170104 Ffma
    temp_436 = fma(temp_430, temp_430, temp_431);
    // 0x000B08: 0xEFF07F8007C7FF07 Ast
    gl_Position.w = temp_435;
    // 0x000B10: 0x49A0040C02670508 Ffma
    temp_437 = fma(temp_419, vp_c3.data[9].z, temp_433);
    // 0x000B18: 0x4C5830180B271011 Fadd
    temp_438 = 0.0 - vp_c6.data[44].z;
    temp_439 = temp_358 + temp_438;
    // 0x000B28: 0x49A0060C02170A0C Ffma
    temp_440 = fma(temp_406, vp_c3.data[8].y, temp_428);
    // 0x000B30: 0x49A0048C01D70A0B Ffma
    temp_441 = fma(temp_406, vp_c3.data[7].y, temp_427);
    // 0x000B38: 0x4C98079803C70013 Mov
    // 0x000B48: 0x59A0020000670604 Ffma
    temp_442 = fma(temp_432, temp_432, temp_436);
    // 0x000B50: 0x4C58100C02770808 Fadd
    temp_443 = temp_437 + vp_c3.data[9].w;
    // 0x000B58: 0x5080000000570404 Mufu
    temp_444 = inversesqrt(temp_442);
    // 0x000B68: 0x49A0091803A71111 Ffma
    temp_445 = fma(temp_439, vp_c6.data[14].z, temp_393);
    // 0x000B70: 0xEFF07F800787FF08 Ast
    gl_Position.z = temp_443;
    // 0x000B78: 0x4C98079803070014 Mov
    // 0x000B88: 0x49A0058C01E7050B Ffma
    temp_446 = fma(temp_419, vp_c3.data[7].z, temp_441);
    // 0x000B90: 0x49A0060C0227050C Ffma
    temp_447 = fma(temp_419, vp_c3.data[8].z, temp_440);
    // 0x000B98: 0x4C58300C03771012 Fadd
    temp_448 = 0.0 - vp_c3.data[13].w;
    temp_449 = temp_358 + temp_448;
    // 0x000BA8: 0x4C6810180BB70E0E Fmul
    temp_450 = temp_391 * vp_c6.data[46].w;
    // 0x000BB0: 0xEFF07F800B87FF12 Ast
    out_attr3.z = temp_449;
    // 0x000BB8: 0x5C68100000470607 Fmul
    temp_451 = temp_432 * temp_444;
    // 0x000BC8: 0xEFF07F801187FF0E Ast
    out_attr9.z = temp_450;
    // 0x000BD0: 0x5C68100000470202 Fmul
    temp_452 = temp_423 * temp_444;
    // 0x000BD8: 0xEFF07F800887FF07 Ast
    out_attr0.z = temp_451;
    // 0x000BE8: 0x5C68100000470106 Fmul
    temp_453 = temp_430 * temp_444;
    // 0x000BF0: 0xEFF07F800807FF02 Ast
    out_attr0.x = temp_452;
    // 0x000BF8: 0x5C68100000773501 Fmul
    temp_454 = temp_365 * temp_451;
    // 0x000C08: 0xEFF07F800847FF06 Ast
    out_attr0.y = temp_453;
    // 0x000C10: 0x5C68100000270304 Fmul
    temp_455 = temp_366 * temp_452;
    // 0x000C18: 0x5C68100000672508 Fmul
    temp_456 = temp_364 * temp_453;
    // 0x000C28: 0x51A0099803B71111 Ffma
    temp_457 = fma(temp_445, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000C30: 0x51A00A1802F70F0F Ffma
    temp_458 = fma(temp_424, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000C38: 0xEFF07F801047FF11 Ast
    out_attr8.y = temp_457;
    // 0x000C48: 0x59A2008000670301 Ffma
    temp_459 = 0.0 - temp_454;
    temp_460 = fma(temp_366, temp_453, temp_459);
    // 0x000C50: 0xEFF07F801007FF0F Ast
    out_attr8.x = temp_458;
    // 0x000C58: 0x59A2020000772525 Ffma
    temp_461 = 0.0 - temp_455;
    temp_462 = fma(temp_364, temp_451, temp_461);
    // 0x000C68: 0x59A2040000273535 Ffma
    temp_463 = 0.0 - temp_456;
    temp_464 = fma(temp_365, temp_452, temp_463);
    // 0x000C70: 0x4C58100C01F70B0B Fadd
    temp_465 = temp_446 + vp_c3.data[7].w;
    // 0x000C78: 0x4C58100C02370C0C Fadd
    temp_466 = temp_447 + vp_c3.data[8].w;
    // 0x000C88: 0xEFF07F800707FF0B Ast
    gl_Position.x = temp_465;
    // 0x000C90: 0x5C68100000070101 Fmul
    temp_467 = temp_460 * temp_109;
    // 0x000C98: 0xEFF07F800747FF0C Ast
    gl_Position.y = temp_466;
    // 0x000CA8: 0x5C68100000072525 Fmul
    temp_468 = temp_462 * temp_109;
    // 0x000CB0: 0xEFF07F800A07FF01 Ast
    out_attr2.x = temp_467;
    // 0x000CB8: 0x5C68100000073535 Fmul
    temp_469 = temp_464 * temp_109;
    // 0x000CC8: 0xEFF07F800A47FF25 Ast
    out_attr2.y = temp_468;
    // 0x000CD0: 0xEFF07F800A87FF35 Ast
    out_attr2.z = temp_469;
    // 0x000CD8: 0xE30000000007000F Exit
    return;
}
