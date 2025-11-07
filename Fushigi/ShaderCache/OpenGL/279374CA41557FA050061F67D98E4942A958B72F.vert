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
    int temp_19;
    uint temp_20;
    uint temp_21;
    int temp_22;
    precise float temp_23;
    int temp_24;
    uint temp_25;
    int temp_26;
    precise float temp_27;
    int temp_28;
    int temp_29;
    uint temp_30;
    uint temp_31;
    int temp_32;
    precise float temp_33;
    int temp_34;
    uint temp_35;
    int temp_36;
    precise float temp_37;
    uint temp_38;
    int temp_39;
    int temp_40;
    int temp_41;
    int temp_42;
    uint temp_43;
    uint temp_44;
    int temp_45;
    precise float temp_46;
    int temp_47;
    uint temp_48;
    int temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    uint temp_55;
    int temp_56;
    int temp_57;
    int temp_58;
    uint temp_59;
    uint temp_60;
    int temp_61;
    precise float temp_62;
    int temp_63;
    uint temp_64;
    int temp_65;
    precise float temp_66;
    uint temp_67;
    int temp_68;
    int temp_69;
    int temp_70;
    int temp_71;
    uint temp_72;
    uint temp_73;
    int temp_74;
    precise float temp_75;
    int temp_76;
    uint temp_77;
    int temp_78;
    precise float temp_79;
    int temp_80;
    uint temp_81;
    uint temp_82;
    int temp_83;
    precise float temp_84;
    int temp_85;
    uint temp_86;
    int temp_87;
    precise float temp_88;
    precise float temp_89;
    int temp_90;
    uint temp_91;
    uint temp_92;
    int temp_93;
    precise float temp_94;
    int temp_95;
    uint temp_96;
    int temp_97;
    precise float temp_98;
    uint temp_99;
    uint temp_100;
    int temp_101;
    precise float temp_102;
    int temp_103;
    uint temp_104;
    int temp_105;
    precise float temp_106;
    int temp_107;
    uint temp_108;
    uint temp_109;
    int temp_110;
    precise float temp_111;
    int temp_112;
    uint temp_113;
    int temp_114;
    precise float temp_115;
    uint temp_116;
    uint temp_117;
    int temp_118;
    precise float temp_119;
    int temp_120;
    uint temp_121;
    int temp_122;
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
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
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
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    int temp_177;
    uint temp_178;
    uint temp_179;
    int temp_180;
    precise float temp_181;
    int temp_182;
    uint temp_183;
    int temp_184;
    precise float temp_185;
    precise float temp_186;
    int temp_187;
    uint temp_188;
    uint temp_189;
    int temp_190;
    precise float temp_191;
    int temp_192;
    uint temp_193;
    int temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
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
    precise float temp_222;
    precise float temp_223;
    int temp_224;
    uint temp_225;
    uint temp_226;
    int temp_227;
    precise float temp_228;
    int temp_229;
    uint temp_230;
    int temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    int temp_235;
    uint temp_236;
    uint temp_237;
    int temp_238;
    precise float temp_239;
    int temp_240;
    uint temp_241;
    int temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    int temp_248;
    uint temp_249;
    uint temp_250;
    int temp_251;
    precise float temp_252;
    int temp_253;
    uint temp_254;
    int temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    int temp_259;
    uint temp_260;
    uint temp_261;
    int temp_262;
    precise float temp_263;
    int temp_264;
    uint temp_265;
    int temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    int temp_270;
    uint temp_271;
    uint temp_272;
    int temp_273;
    precise float temp_274;
    int temp_275;
    uint temp_276;
    int temp_277;
    precise float temp_278;
    precise float temp_279;
    int temp_280;
    uint temp_281;
    uint temp_282;
    int temp_283;
    precise float temp_284;
    int temp_285;
    uint temp_286;
    int temp_287;
    precise float temp_288;
    precise float temp_289;
    precise float temp_290;
    int temp_291;
    uint temp_292;
    uint temp_293;
    int temp_294;
    precise float temp_295;
    int temp_296;
    uint temp_297;
    int temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    int temp_303;
    uint temp_304;
    uint temp_305;
    int temp_306;
    precise float temp_307;
    int temp_308;
    uint temp_309;
    int temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    precise float temp_314;
    precise float temp_315;
    precise float temp_316;
    precise float temp_317;
    precise float temp_318;
    precise float temp_319;
    precise float temp_320;
    precise float temp_321;
    precise float temp_322;
    precise float temp_323;
    precise float temp_324;
    precise float temp_325;
    precise float temp_326;
    precise float temp_327;
    precise float temp_328;
    precise float temp_329;
    precise float temp_330;
    precise float temp_331;
    precise float temp_332;
    precise float temp_333;
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
    int temp_360;
    precise float temp_361;
    int temp_362;
    uint temp_363;
    uint temp_364;
    int temp_365;
    precise float temp_366;
    int temp_367;
    uint temp_368;
    int temp_369;
    precise float temp_370;
    precise float temp_371;
    int temp_372;
    uint temp_373;
    uint temp_374;
    int temp_375;
    precise float temp_376;
    int temp_377;
    uint temp_378;
    int temp_379;
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
    int temp_397;
    uint temp_398;
    uint temp_399;
    int temp_400;
    precise float temp_401;
    precise float temp_402;
    int temp_403;
    uint temp_404;
    uint temp_405;
    int temp_406;
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
    precise float temp_470;
    precise float temp_471;
    precise float temp_472;
    precise float temp_473;
    precise float temp_474;
    precise float temp_475;
    precise float temp_476;
    precise float temp_477;
    precise float temp_478;
    precise float temp_479;
    precise float temp_480;
    precise float temp_481;
    precise float temp_482;
    precise float temp_483;
    precise float temp_484;
    precise float temp_485;
    precise float temp_486;
    precise float temp_487;
    precise float temp_488;
    precise float temp_489;
    precise float temp_490;
    precise float temp_491;
    precise float temp_492;
    precise float temp_493;
    precise float temp_494;
    precise float temp_495;
    precise float temp_496;
    precise float temp_497;
    precise float temp_498;
    precise float temp_499;
    precise float temp_500;
    precise float temp_501;
    precise float temp_502;
    precise float temp_503;
    precise float temp_504;
    precise float temp_505;
    precise float temp_506;
    precise float temp_507;
    precise float temp_508;
    precise float temp_509;
    precise float temp_510;
    precise float temp_511;
    precise float temp_512;
    precise float temp_513;
    precise float temp_514;
    precise float temp_515;
    precise float temp_516;
    precise float temp_517;
    precise float temp_518;
    precise float temp_519;
    precise float temp_520;
    precise float temp_521;
    precise float temp_522;
    precise float temp_523;
    precise float temp_524;
    precise float temp_525;
    precise float temp_526;
    precise float temp_527;
    precise float temp_528;
    precise float temp_529;
    precise float temp_530;
    precise float temp_531;
    precise float temp_532;
    precise float temp_533;
    precise float temp_534;
    precise float temp_535;
    precise float temp_536;
    precise float temp_537;
    precise float temp_538;
    precise float temp_539;
    precise float temp_540;
    precise float temp_541;
    precise float temp_542;
    precise float temp_543;
    precise float temp_544;
    precise float temp_545;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400270023 Mov
    // 0x000010: 0xEFD87F800E47FF01 Ald
    temp_0 = in_attr6.y;
    // 0x000018: 0x4C9807940037000B Mov
    // 0x000028: 0xEFD87F800E07FF02 Ald
    temp_1 = in_attr6.x;
    // 0x000030: 0xEFD87F800E87FF00 Ald
    temp_2 = in_attr6.z;
    // 0x000038: 0xEFD87F800EC7FF04 Ald
    temp_3 = in_attr6.w;
    // 0x000048: 0xEFD87F801047FF22 Ald
    temp_4 = in_attr8.y;
    // 0x000050: 0xEFD87F800A07FF35 Ald
    temp_5 = in_attr2.x;
    // 0x000058: 0x36007F8003070144 Xmad
    temp_6 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_7 = temp_6 * 48;
    // 0x000068: 0xEFD87F800907FF0F Ald
    temp_8 = in_attr1.x;
    // 0x000070: 0x36007F8003070248 Xmad
    temp_9 = floatBitsToInt(temp_1) & 0xFFFF;
    temp_10 = temp_9 * 48;
    // 0x000078: 0xEFD87F800807FF0D Ald
    temp_11 = in_attr0.x;
    // 0x000088: 0x3620221003070144 Xmad
    temp_12 = floatBitsToUint(temp_0) >> 16;
    temp_13 = int(temp_12) * 48;
    temp_14 = temp_13 << 16;
    temp_15 = temp_14 + temp_7;
    // 0x000090: 0xEFD87F801007FF0C Ald
    temp_16 = in_attr8.x;
    // 0x000098: 0x36007F8003070027 Xmad
    temp_17 = floatBitsToInt(temp_2) & 0xFFFF;
    temp_18 = temp_17 * 48;
    // 0x0000A8: 0xEF95008001074418 Ldc
    temp_19 = temp_15 + 16;
    temp_20 = uint(temp_19) >> 2;
    temp_21 = temp_20 >> 2;
    temp_22 = int(temp_20) & 3;
    temp_23 = vp_c8.data[int(temp_21)][temp_22];
    temp_24 = int(temp_20) + 1;
    temp_25 = uint(temp_24) >> 2;
    temp_26 = temp_24 & 3;
    temp_27 = vp_c8.data[int(temp_25)][temp_26];
    // 0x0000B0: 0x36007F8003070425 Xmad
    temp_28 = floatBitsToInt(temp_3) & 0xFFFF;
    temp_29 = temp_28 * 48;
    // 0x0000B8: 0xEF95008000074410 Ldc
    temp_30 = uint(temp_15) >> 2;
    temp_31 = temp_30 >> 2;
    temp_32 = int(temp_30) & 3;
    temp_33 = vp_c8.data[int(temp_31)][temp_32];
    temp_34 = int(temp_30) + 1;
    temp_35 = uint(temp_34) >> 2;
    temp_36 = temp_34 & 3;
    temp_37 = vp_c8.data[int(temp_35)][temp_36];
    // 0x0000C8: 0x3620241003070248 Xmad
    temp_38 = floatBitsToUint(temp_1) >> 16;
    temp_39 = int(temp_38) * 48;
    temp_40 = temp_39 << 16;
    temp_41 = temp_40 + temp_10;
    // 0x0000D0: 0xEF9500800207441C Ldc
    temp_42 = temp_15 + 32;
    temp_43 = uint(temp_42) >> 2;
    temp_44 = temp_43 >> 2;
    temp_45 = int(temp_43) & 3;
    temp_46 = vp_c8.data[int(temp_44)][temp_45];
    temp_47 = int(temp_43) + 1;
    temp_48 = uint(temp_47) >> 2;
    temp_49 = temp_47 & 3;
    temp_50 = vp_c8.data[int(temp_48)][temp_49];
    // 0x0000D8: 0x51A0119400472223 Ffma
    temp_51 = fma(temp_4, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0000E8: 0xEFD87F800A47FF26 Ald
    temp_52 = in_attr2.y;
    // 0x0000F0: 0x51A0059400572222 Ffma
    temp_53 = fma(temp_4, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0000F8: 0xEFD87F800947FF28 Ald
    temp_54 = in_attr1.y;
    // 0x000108: 0x3620139003070027 Xmad
    temp_55 = floatBitsToUint(temp_2) >> 16;
    temp_56 = int(temp_55) * 48;
    temp_57 = temp_56 << 16;
    temp_58 = temp_57 + temp_18;
    // 0x000110: 0xEF95008000074814 Ldc
    temp_59 = uint(temp_41) >> 2;
    temp_60 = temp_59 >> 2;
    temp_61 = int(temp_59) & 3;
    temp_62 = vp_c8.data[int(temp_60)][temp_61];
    temp_63 = int(temp_59) + 1;
    temp_64 = uint(temp_63) >> 2;
    temp_65 = temp_63 & 3;
    temp_66 = vp_c8.data[int(temp_64)][temp_65];
    // 0x000118: 0x3620129003070425 Xmad
    temp_67 = floatBitsToUint(temp_3) >> 16;
    temp_68 = int(temp_67) * 48;
    temp_69 = temp_68 << 16;
    temp_70 = temp_69 + temp_29;
    // 0x000128: 0xEF9500800107481A Ldc
    temp_71 = temp_41 + 16;
    temp_72 = uint(temp_71) >> 2;
    temp_73 = temp_72 >> 2;
    temp_74 = int(temp_72) & 3;
    temp_75 = vp_c8.data[int(temp_73)][temp_74];
    temp_76 = int(temp_72) + 1;
    temp_77 = uint(temp_76) >> 2;
    temp_78 = temp_76 & 3;
    temp_79 = vp_c8.data[int(temp_77)][temp_78];
    // 0x000130: 0xEF95008002074816 Ldc
    temp_80 = temp_41 + 32;
    temp_81 = uint(temp_80) >> 2;
    temp_82 = temp_81 >> 2;
    temp_83 = int(temp_81) & 3;
    temp_84 = vp_c8.data[int(temp_82)][temp_83];
    temp_85 = int(temp_81) + 1;
    temp_86 = uint(temp_85) >> 2;
    temp_87 = temp_85 & 3;
    temp_88 = vp_c8.data[int(temp_86)][temp_87];
    // 0x000138: 0xEFD87F800847FF24 Ald
    temp_89 = in_attr0.y;
    // 0x000148: 0xEF95008001072702 Ldc
    temp_90 = temp_58 + 16;
    temp_91 = uint(temp_90) >> 2;
    temp_92 = temp_91 >> 2;
    temp_93 = int(temp_91) & 3;
    temp_94 = vp_c8.data[int(temp_92)][temp_93];
    temp_95 = int(temp_91) + 1;
    temp_96 = uint(temp_95) >> 2;
    temp_97 = temp_95 & 3;
    temp_98 = vp_c8.data[int(temp_96)][temp_97];
    // 0x000150: 0xEF95008000072712 Ldc
    temp_99 = uint(temp_58) >> 2;
    temp_100 = temp_99 >> 2;
    temp_101 = int(temp_99) & 3;
    temp_102 = vp_c8.data[int(temp_100)][temp_101];
    temp_103 = int(temp_99) + 1;
    temp_104 = uint(temp_103) >> 2;
    temp_105 = temp_103 & 3;
    temp_106 = vp_c8.data[int(temp_104)][temp_105];
    // 0x000158: 0xEF95008002072708 Ldc
    temp_107 = temp_58 + 32;
    temp_108 = uint(temp_107) >> 2;
    temp_109 = temp_108 >> 2;
    temp_110 = int(temp_108) & 3;
    temp_111 = vp_c8.data[int(temp_109)][temp_110];
    temp_112 = int(temp_108) + 1;
    temp_113 = uint(temp_112) >> 2;
    temp_114 = temp_112 & 3;
    temp_115 = vp_c8.data[int(temp_113)][temp_114];
    // 0x000168: 0xEF95008000072504 Ldc
    temp_116 = uint(temp_70) >> 2;
    temp_117 = temp_116 >> 2;
    temp_118 = int(temp_116) & 3;
    temp_119 = vp_c8.data[int(temp_117)][temp_118];
    temp_120 = int(temp_116) + 1;
    temp_121 = uint(temp_120) >> 2;
    temp_122 = temp_120 & 3;
    temp_123 = vp_c8.data[int(temp_121)][temp_122];
    // 0x000170: 0xEF95008001072506 Ldc
    temp_124 = temp_70 + 16;
    temp_125 = uint(temp_124) >> 2;
    temp_126 = temp_125 >> 2;
    temp_127 = int(temp_125) & 3;
    temp_128 = vp_c8.data[int(temp_126)][temp_127];
    temp_129 = int(temp_125) + 1;
    temp_130 = uint(temp_129) >> 2;
    temp_131 = temp_129 & 3;
    temp_132 = vp_c8.data[int(temp_130)][temp_131];
    // 0x000178: 0xEF95008002072500 Ldc
    temp_133 = temp_70 + 32;
    temp_134 = uint(temp_133) >> 2;
    temp_135 = temp_134 >> 2;
    temp_136 = int(temp_134) & 3;
    temp_137 = vp_c8.data[int(temp_135)][temp_136];
    temp_138 = int(temp_134) + 1;
    temp_139 = uint(temp_138) >> 2;
    temp_140 = temp_138 & 3;
    temp_141 = vp_c8.data[int(temp_139)][temp_140];
    // 0x000188: 0xEF9500800087440A Ldc
    temp_142 = temp_15 + 8;
    temp_143 = uint(temp_142) >> 2;
    temp_144 = temp_143 >> 2;
    temp_145 = int(temp_143) & 3;
    temp_146 = vp_c8.data[int(temp_144)][temp_145];
    temp_147 = int(temp_143) + 1;
    temp_148 = uint(temp_147) >> 2;
    temp_149 = temp_147 & 3;
    temp_150 = vp_c8.data[int(temp_148)][temp_149];
    // 0x000190: 0x49A0119400070C23 Ffma
    temp_151 = fma(temp_16, vp_c5.data[0].x, temp_51);
    // 0x000198: 0xEFD87F800887FF41 Ald
    temp_152 = in_attr0.z;
    // 0x0001A8: 0x49A0111400170C22 Ffma
    temp_153 = fma(temp_16, vp_c5.data[0].y, temp_53);
    // 0x0001B0: 0xEFD87F800A87FF45 Ald
    temp_154 = in_attr2.z;
    // 0x0001B8: 0xEFD87F800987FF4B Ald
    temp_155 = in_attr1.z;
    // 0x0001C8: 0x5C68100000F7181E Fmul
    temp_156 = temp_23 * temp_8;
    // 0x0001D0: 0x5C68100000D7100E Fmul
    temp_157 = temp_33 * temp_11;
    // 0x0001D8: 0x5C68100000D7183B Fmul
    temp_158 = temp_23 * temp_11;
    // 0x0001E8: 0x5C68100000D71C42 Fmul
    temp_159 = temp_46 * temp_11;
    // 0x0001F0: 0x5C68100003571034 Fmul
    temp_160 = temp_33 * temp_5;
    // 0x0001F8: 0x5C68100000F7103E Fmul
    temp_161 = temp_33 * temp_8;
    // 0x000208: 0x59A00F000287193C Ffma
    temp_162 = fma(temp_27, temp_54, temp_156);
    // 0x000210: 0x5C68100000F71C47 Fmul
    temp_163 = temp_46 * temp_8;
    // 0x000218: 0x5C68100003571838 Fmul
    temp_164 = temp_23 * temp_5;
    // 0x000228: 0x5C6810000357141F Fmul
    temp_165 = temp_62 * temp_5;
    // 0x000230: 0x5C68100000D71437 Fmul
    temp_166 = temp_62 * temp_11;
    // 0x000238: 0x5C68100000D71A3D Fmul
    temp_167 = temp_75 * temp_11;
    // 0x000248: 0x5C68100000D71646 Fmul
    temp_168 = temp_84 * temp_11;
    // 0x000250: 0x5C68100000D7022A Fmul
    temp_169 = temp_94 * temp_11;
    // 0x000258: 0x5C68100003570229 Fmul
    temp_170 = temp_94 * temp_5;
    // 0x000268: 0x5C68100000F7022D Fmul
    temp_171 = temp_94 * temp_8;
    // 0x000270: 0x5C68100000D71221 Fmul
    temp_172 = temp_102 * temp_11;
    // 0x000278: 0x5C68100000D70802 Fmul
    temp_173 = temp_111 * temp_11;
    // 0x000288: 0x5C68100000D7042E Fmul
    temp_174 = temp_119 * temp_11;
    // 0x000290: 0x5C68100000D70631 Fmul
    temp_175 = temp_128 * temp_11;
    // 0x000298: 0x5C68100000D70032 Fmul
    temp_176 = temp_137 * temp_11;
    // 0x0002A8: 0xEF9500800087480C Ldc
    temp_177 = temp_41 + 8;
    temp_178 = uint(temp_177) >> 2;
    temp_179 = temp_178 >> 2;
    temp_180 = int(temp_178) & 3;
    temp_181 = vp_c8.data[int(temp_179)][temp_180];
    temp_182 = int(temp_178) + 1;
    temp_183 = uint(temp_182) >> 2;
    temp_184 = temp_182 & 3;
    temp_185 = vp_c8.data[int(temp_183)][temp_184];
    // 0x0002B0: 0x59A00F8002671539 Ffma
    temp_186 = fma(temp_66, temp_52, temp_165);
    // 0x0002B8: 0xEF9500800287271E Ldc
    temp_187 = temp_58 + 40;
    temp_188 = uint(temp_187) >> 2;
    temp_189 = temp_188 >> 2;
    temp_190 = int(temp_188) & 3;
    temp_191 = vp_c8.data[int(temp_189)][temp_190];
    temp_192 = int(temp_188) + 1;
    temp_193 = uint(temp_192) >> 2;
    temp_194 = temp_192 & 3;
    temp_195 = vp_c8.data[int(temp_193)][temp_194];
    // 0x0002C8: 0x5C6810000357082B Fmul
    temp_196 = temp_111 * temp_5;
    // 0x0002D0: 0x5C68100000F7082F Fmul
    temp_197 = temp_111 * temp_8;
    // 0x0002D8: 0x5C68100003570408 Fmul
    temp_198 = temp_119 * temp_5;
    // 0x0002E8: 0x5C68100000F70433 Fmul
    temp_199 = temp_119 * temp_8;
    // 0x0002F0: 0x5C68100000F7143A Fmul
    temp_200 = temp_62 * temp_8;
    // 0x0002F8: 0x5C68100003571A40 Fmul
    temp_201 = temp_75 * temp_5;
    // 0x000308: 0x5C68100003571630 Fmul
    temp_202 = temp_84 * temp_5;
    // 0x000310: 0x5C68100003571220 Fmul
    temp_203 = temp_102 * temp_5;
    // 0x000318: 0x5C68100003570604 Fmul
    temp_204 = temp_128 * temp_5;
    // 0x000328: 0x5C6810000357002C Fmul
    temp_205 = temp_137 * temp_5;
    // 0x000330: 0x5C68100000F70036 Fmul
    temp_206 = temp_137 * temp_8;
    // 0x000338: 0x5C68100000F71A1A Fmul
    temp_207 = temp_75 * temp_8;
    // 0x000348: 0x5C68100000F71616 Fmul
    temp_208 = temp_84 * temp_8;
    // 0x000350: 0x5C68100000F71212 Fmul
    temp_209 = temp_102 * temp_8;
    // 0x000358: 0x5C68100000F70606 Fmul
    temp_210 = temp_128 * temp_8;
    // 0x000368: 0x59A0070002471100 Ffma
    temp_211 = fma(temp_37, temp_89, temp_157);
    // 0x000370: 0xEF9500800187440E Ldc
    temp_212 = temp_15 + 24;
    temp_213 = uint(temp_212) >> 2;
    temp_214 = temp_213 >> 2;
    temp_215 = int(temp_213) & 3;
    temp_216 = vp_c8.data[int(temp_214)][temp_215];
    temp_217 = int(temp_213) + 1;
    temp_218 = uint(temp_217) >> 2;
    temp_219 = temp_217 & 3;
    temp_220 = vp_c8.data[int(temp_218)][temp_219];
    // 0x000378: 0x5C68100003571C3F Fmul
    temp_221 = temp_46 * temp_5;
    // 0x000388: 0x59A01A0002671134 Ffma
    temp_222 = fma(temp_37, temp_52, temp_160);
    // 0x000390: 0x59A01F0002871135 Ffma
    temp_223 = fma(temp_37, temp_54, temp_161);
    // 0x000398: 0xEF95008001874810 Ldc
    temp_224 = temp_41 + 24;
    temp_225 = uint(temp_224) >> 2;
    temp_226 = temp_225 >> 2;
    temp_227 = int(temp_225) & 3;
    temp_228 = vp_c8.data[int(temp_226)][temp_227];
    temp_229 = int(temp_225) + 1;
    temp_230 = uint(temp_229) >> 2;
    temp_231 = temp_229 & 3;
    temp_232 = vp_c8.data[int(temp_230)][temp_231];
    // 0x0003A8: 0x59A01B8002471537 Ffma
    temp_233 = fma(temp_66, temp_89, temp_166);
    // 0x0003B0: 0x59A01D000287153A Ffma
    temp_234 = fma(temp_66, temp_54, temp_200);
    // 0x0003B8: 0xEF95008002874414 Ldc
    temp_235 = temp_15 + 40;
    temp_236 = uint(temp_235) >> 2;
    temp_237 = temp_236 >> 2;
    temp_238 = int(temp_236) & 3;
    temp_239 = vp_c8.data[int(temp_237)][temp_238];
    temp_240 = int(temp_236) + 1;
    temp_241 = uint(temp_240) >> 2;
    temp_242 = temp_240 & 3;
    temp_243 = vp_c8.data[int(temp_241)][temp_242];
    // 0x0003C8: 0x59A0200002671B3E Ffma
    temp_244 = fma(temp_79, temp_52, temp_201);
    // 0x0003D0: 0x59A0230002471746 Ffma
    temp_245 = fma(temp_88, temp_89, temp_168);
    // 0x0003D8: 0x59A018000267174A Ffma
    temp_246 = fma(temp_88, temp_52, temp_202);
    // 0x0003E8: 0x59A00B0002871749 Ffma
    temp_247 = fma(temp_88, temp_54, temp_208);
    // 0x0003F0: 0xEF95008000872516 Ldc
    temp_248 = temp_70 + 8;
    temp_249 = uint(temp_248) >> 2;
    temp_250 = temp_249 >> 2;
    temp_251 = int(temp_249) & 3;
    temp_252 = vp_c8.data[int(temp_250)][temp_251];
    temp_253 = int(temp_249) + 1;
    temp_254 = uint(temp_253) >> 2;
    temp_255 = temp_253 & 3;
    temp_256 = vp_c8.data[int(temp_254)][temp_255];
    // 0x0003F8: 0x59A0108002471330 Ffma
    temp_257 = fma(temp_106, temp_89, temp_172);
    // 0x000408: 0x59A0100002671340 Ffma
    temp_258 = fma(temp_106, temp_52, temp_203);
    // 0x000410: 0xEF95008002872520 Ldc
    temp_259 = temp_70 + 40;
    temp_260 = uint(temp_259) >> 2;
    temp_261 = temp_260 >> 2;
    temp_262 = int(temp_260) & 3;
    temp_263 = vp_c8.data[int(temp_261)][temp_262];
    temp_264 = int(temp_260) + 1;
    temp_265 = uint(temp_264) >> 2;
    temp_266 = temp_264 & 3;
    temp_267 = vp_c8.data[int(temp_265)][temp_266];
    // 0x000418: 0x59A01E8002471B3D Ffma
    temp_268 = fma(temp_79, temp_89, temp_167);
    // 0x000428: 0x59A0090002871344 Ffma
    temp_269 = fma(temp_106, temp_54, temp_209);
    // 0x000430: 0xEF95008001872512 Ldc
    temp_270 = temp_70 + 24;
    temp_271 = uint(temp_270) >> 2;
    temp_272 = temp_271 >> 2;
    temp_273 = int(temp_271) & 3;
    temp_274 = vp_c8.data[int(temp_272)][temp_273];
    temp_275 = int(temp_271) + 1;
    temp_276 = uint(temp_275) >> 2;
    temp_277 = temp_275 & 3;
    temp_278 = vp_c8.data[int(temp_276)][temp_277];
    // 0x000438: 0x59A00D0002871B43 Ffma
    temp_279 = fma(temp_79, temp_54, temp_207);
    // 0x000448: 0xEF9500800087271A Ldc
    temp_280 = temp_58 + 8;
    temp_281 = uint(temp_280) >> 2;
    temp_282 = temp_281 >> 2;
    temp_283 = int(temp_281) & 3;
    temp_284 = vp_c8.data[int(temp_282)][temp_283];
    temp_285 = int(temp_281) + 1;
    temp_286 = uint(temp_285) >> 2;
    temp_287 = temp_285 & 3;
    temp_288 = vp_c8.data[int(temp_286)][temp_287];
    // 0x000450: 0x59A01D800247193B Ffma
    temp_289 = fma(temp_27, temp_89, temp_158);
    // 0x000458: 0x59A01C0002671938 Ffma
    temp_290 = fma(temp_27, temp_52, temp_164);
    // 0x000468: 0xEF95008002874818 Ldc
    temp_291 = temp_41 + 40;
    temp_292 = uint(temp_291) >> 2;
    temp_293 = temp_292 >> 2;
    temp_294 = int(temp_292) & 3;
    temp_295 = vp_c8.data[int(temp_293)][temp_294];
    temp_296 = int(temp_292) + 1;
    temp_297 = uint(temp_296) >> 2;
    temp_298 = temp_296 & 3;
    temp_299 = vp_c8.data[int(temp_297)][temp_298];
    // 0x000470: 0x59A0210002471D42 Ffma
    temp_300 = fma(temp_50, temp_89, temp_159);
    // 0x000478: 0x59A01F8002671D3F Ffma
    temp_301 = fma(temp_50, temp_52, temp_221);
    // 0x000488: 0x59A0238002871D47 Ffma
    temp_302 = fma(temp_50, temp_54, temp_163);
    // 0x000490: 0xEF9500800187271C Ldc
    temp_303 = temp_58 + 24;
    temp_304 = uint(temp_303) >> 2;
    temp_305 = temp_304 >> 2;
    temp_306 = int(temp_304) & 3;
    temp_307 = vp_c8.data[int(temp_305)][temp_306];
    temp_308 = int(temp_304) + 1;
    temp_309 = uint(temp_308) >> 2;
    temp_310 = temp_308 & 3;
    temp_311 = vp_c8.data[int(temp_309)][temp_310];
    // 0x000498: 0x59A015000247032A Ffma
    temp_312 = fma(temp_98, temp_89, temp_169);
    // 0x0004A8: 0x59A014800267034E Ffma
    temp_313 = fma(temp_98, temp_52, temp_170);
    // 0x0004B0: 0x59A016800287032D Ffma
    temp_314 = fma(temp_98, temp_54, temp_171);
    // 0x0004B8: 0x59A0010002470903 Ffma
    temp_315 = fma(temp_115, temp_89, temp_173);
    // 0x0004C8: 0x59A015800267092B Ffma
    temp_316 = fma(temp_115, temp_52, temp_196);
    // 0x0004D0: 0x59A0178002870909 Ffma
    temp_317 = fma(temp_115, temp_54, temp_197);
    // 0x0004D8: 0x59A017000247052F Ffma
    temp_318 = fma(temp_123, temp_89, temp_174);
    // 0x0004E8: 0x59A0040002670508 Ffma
    temp_319 = fma(temp_123, temp_52, temp_198);
    // 0x0004F0: 0x59A0198002870505 Ffma
    temp_320 = fma(temp_123, temp_54, temp_199);
    // 0x0004F8: 0x59A0188002470733 Ffma
    temp_321 = fma(temp_132, temp_89, temp_175);
    // 0x000508: 0x59A0190002470132 Ffma
    temp_322 = fma(temp_141, temp_89, temp_176);
    // 0x000510: 0x59A0030002870724 Ffma
    temp_323 = fma(temp_132, temp_54, temp_210);
    // 0x000518: 0xEFD87F800C47FF06 Ald
    temp_324 = in_attr4.y;
    // 0x000528: 0x59A01B8004170C37 Ffma
    temp_325 = fma(temp_181, temp_152, temp_233);
    // 0x000530: 0x59A01C8004570C39 Ffma
    temp_326 = fma(temp_181, temp_154, temp_186);
    // 0x000538: 0x59A01D0004B70C3A Ffma
    temp_327 = fma(temp_181, temp_155, temp_234);
    // 0x000548: 0xEFD87F800C07FF0C Ald
    temp_328 = in_attr4.x;
    // 0x000550: 0x59A0000004170A00 Ffma
    temp_329 = fma(temp_146, temp_152, temp_211);
    // 0x000558: 0x59A01A0004570A34 Ffma
    temp_330 = fma(temp_146, temp_154, temp_222);
    // 0x000568: 0x59A01A8004B70A35 Ffma
    temp_331 = fma(temp_146, temp_155, temp_223);
    // 0x000570: 0x59A0018004171E0A Ffma
    temp_332 = fma(temp_191, temp_152, temp_315);
    // 0x000578: 0x4CB0119002371A03 F2i
    temp_333 = trunc(vp_c4.data[8].w);
    temp_334 = int(temp_333);
    // 0x000588: 0x59A0020002670704 Ffma
    temp_335 = fma(temp_132, temp_52, temp_204);
    // 0x000590: 0xEFD87F800C87FF07 Ald
    temp_336 = in_attr4.z;
    // 0x000598: 0x59A0160002670126 Ffma
    temp_337 = fma(temp_141, temp_52, temp_205);
    // 0x0005A8: 0x59A01B0002870136 Ffma
    temp_338 = fma(temp_141, temp_54, temp_206);
    // 0x0005B0: 0x5C58100000070B00 Fadd
    temp_339 = temp_150 + temp_329;
    // 0x0005B8: 0xEFD87F800CC7FF0B Ald
    temp_340 = in_attr4.w;
    // 0x0005C8: 0x5C58100003770D0D Fadd
    temp_341 = temp_185 + temp_325;
    // 0x0005D0: 0x59A0158004571E2B Ffma
    temp_342 = fma(temp_191, temp_154, temp_316);
    // 0x0005D8: 0x59A0048004B71E09 Ffma
    temp_343 = fma(temp_191, temp_155, temp_317);
    // 0x0005E8: 0x59A01D8004170E01 Ffma
    temp_344 = fma(temp_216, temp_152, temp_289);
    // 0x0005F0: 0x59A01C0004570E38 Ffma
    temp_345 = fma(temp_216, temp_154, temp_290);
    // 0x0005F8: 0x59A01E0004B70E3C Ffma
    temp_346 = fma(temp_216, temp_155, temp_162);
    // 0x000608: 0x59A01E8004171002 Ffma
    temp_347 = fma(temp_228, temp_152, temp_268);
    // 0x000610: 0x59A01F000457103E Ffma
    temp_348 = fma(temp_228, temp_154, temp_244);
    // 0x000618: 0x59A0210004171442 Ffma
    temp_349 = fma(temp_239, temp_152, temp_300);
    // 0x000628: 0x59A01F800457143F Ffma
    temp_350 = fma(temp_239, temp_154, temp_301);
    // 0x000630: 0x59A0238004B71447 Ffma
    temp_351 = fma(temp_239, temp_155, temp_302);
    // 0x000638: 0x5C58100000170F0F Fadd
    temp_352 = temp_220 + temp_344;
    // 0x000648: 0x59A0178004171614 Ffma
    temp_353 = fma(temp_252, temp_152, temp_318);
    // 0x000650: 0x59A0040004571608 Ffma
    temp_354 = fma(temp_252, temp_154, temp_319);
    // 0x000658: 0x59A0028004B71605 Ffma
    temp_355 = fma(temp_252, temp_155, temp_320);
    // 0x000668: 0x5C6810000067000E Fmul
    temp_356 = temp_339 * temp_324;
    // 0x000670: 0x59A0198004171216 Ffma
    temp_357 = fma(temp_274, temp_152, temp_321);
    // 0x000678: 0x59A0020004571204 Ffma
    temp_358 = fma(temp_274, temp_154, temp_335);
    // 0x000688: 0x59A0120004B71224 Ffma
    temp_359 = fma(temp_274, temp_155, temp_323);
    // 0x000690: 0x3848000000470312 Shl
    temp_360 = temp_334 << 4;
    // 0x000698: 0x5C58100000271111 Fadd
    temp_361 = temp_232 + temp_347;
    // 0x0006A8: 0xEF95007068071200 Ldc
    temp_362 = temp_360 + 0x680;
    temp_363 = uint(temp_362) >> 2;
    temp_364 = temp_363 >> 2;
    temp_365 = int(temp_363) & 3;
    temp_366 = vp_c7.data[int(temp_364)][temp_365];
    temp_367 = int(temp_363) + 1;
    temp_368 = uint(temp_367) >> 2;
    temp_369 = temp_367 & 3;
    temp_370 = vp_c7.data[int(temp_368)][temp_369];
    // 0x0006B0: 0x59A0180004171A30 Ffma
    temp_371 = fma(temp_284, temp_152, temp_257);
    // 0x0006B8: 0xEF95007048071202 Ldc
    temp_372 = temp_360 + 0x480;
    temp_373 = uint(temp_372) >> 2;
    temp_374 = temp_373 >> 2;
    temp_375 = int(temp_373) & 3;
    temp_376 = vp_c7.data[int(temp_374)][temp_375];
    temp_377 = int(temp_373) + 1;
    temp_378 = uint(temp_377) >> 2;
    temp_379 = temp_377 & 3;
    temp_380 = vp_c7.data[int(temp_378)][temp_379];
    // 0x0006C8: 0x5C58100004271515 Fadd
    temp_381 = temp_243 + temp_349;
    // 0x0006D0: 0x5C68100000670F0F Fmul
    temp_382 = temp_352 * temp_324;
    // 0x0006D8: 0x59A0230004171846 Ffma
    temp_383 = fma(temp_295, temp_152, temp_245);
    // 0x0006E8: 0x59A0218004B71043 Ffma
    temp_384 = fma(temp_228, temp_155, temp_279);
    // 0x0006F0: 0x5C58100000A71F10 Fadd
    temp_385 = temp_195 + temp_332;
    // 0x0006F8: 0x5C58100001671316 Fadd
    temp_386 = temp_278 + temp_357;
    // 0x000708: 0x59A0070000C70D0D Ffma
    temp_387 = fma(temp_341, temp_328, temp_356);
    // 0x000710: 0x59A0150004171C2A Ffma
    temp_388 = fma(temp_307, temp_152, temp_312);
    // 0x000718: 0x5C6810000067340A Fmul
    temp_389 = temp_330 * temp_324;
    // 0x000728: 0x5C68100000673535 Fmul
    temp_390 = temp_331 * temp_324;
    // 0x000730: 0x5C68100000673813 Fmul
    temp_391 = temp_345 * temp_324;
    // 0x000738: 0x5C68100000673C0E Fmul
    temp_392 = temp_346 * temp_324;
    // 0x000748: 0x5C68100000673F3F Fmul
    temp_393 = temp_350 * temp_324;
    // 0x000750: 0x5C68100000674747 Fmul
    temp_394 = temp_351 * temp_324;
    // 0x000758: 0x5C58100003071B30 Fadd
    temp_395 = temp_288 + temp_371;
    // 0x000768: 0x5C68100000671506 Fmul
    temp_396 = temp_381 * temp_324;
    // 0x000770: 0xEF94007048871215 Ldc
    temp_397 = temp_360 + 0x488;
    temp_398 = uint(temp_397) >> 2;
    temp_399 = temp_398 >> 2;
    temp_400 = int(temp_398) & 3;
    temp_401 = vp_c7.data[int(temp_399)][temp_400];
    // 0x000778: 0x59A0078000C71111 Ffma
    temp_402 = fma(temp_361, temp_328, temp_382);
    // 0x000788: 0xEF9400706887120F Ldc
    temp_403 = temp_360 + 0x688;
    temp_404 = uint(temp_403) >> 2;
    temp_405 = temp_404 >> 2;
    temp_406 = int(temp_404) & 3;
    temp_407 = vp_c7.data[int(temp_405)][temp_406];
    // 0x000790: 0x5C58100004671919 Fadd
    temp_408 = temp_299 + temp_383;
    // 0x000798: 0x5C58100002A71D2A Fadd
    temp_409 = temp_311 + temp_388;
    // 0x0007A8: 0x5C58100001471714 Fadd
    temp_410 = temp_256 + temp_353;
    // 0x0007B0: 0x59A006800077300D Ffma
    temp_411 = fma(temp_395, temp_336, temp_387);
    // 0x0007B8: 0x59A0190004172032 Ffma
    temp_412 = fma(temp_263, temp_152, temp_322);
    // 0x0007C8: 0x59A025000457184A Ffma
    temp_413 = fma(temp_295, temp_154, temp_246);
    // 0x0007D0: 0x59A0030000C71906 Ffma
    temp_414 = fma(temp_408, temp_328, temp_396);
    // 0x0007D8: 0x59A0088000772A11 Ffma
    temp_415 = fma(temp_409, temp_336, temp_402);
    // 0x0007E8: 0x59A0248004B71849 Ffma
    temp_416 = fma(temp_295, temp_155, temp_247);
    // 0x0007F0: 0x59A0068000B7140D Ffma
    temp_417 = fma(temp_410, temp_340, temp_411);
    // 0x0007F8: 0x5C58100003272121 Fadd
    temp_418 = temp_267 + temp_412;
    // 0x000808: 0x59A0270004571C4E Ffma
    temp_419 = fma(temp_307, temp_154, temp_313);
    // 0x000810: 0x59A0030000771006 Ffma
    temp_420 = fma(temp_385, temp_336, temp_414);
    // 0x000818: 0x59A0088000B71616 Ffma
    temp_421 = fma(temp_386, temp_340, temp_415);
    // 0x000828: 0x59A0098000C73E14 Ffma
    temp_422 = fma(temp_348, temp_328, temp_391);
    // 0x000830: 0x59A0000000270D02 Ffma
    temp_423 = fma(temp_417, temp_376, temp_366);
    // 0x000838: 0x59A0200004571A40 Ffma
    temp_424 = fma(temp_284, temp_154, temp_258);
    // 0x000848: 0x59A0220004B71A44 Ffma
    temp_425 = fma(temp_284, temp_155, temp_269);
    // 0x000850: 0x59A0030000B72106 Ffma
    temp_426 = fma(temp_418, temp_340, temp_420);
    // 0x000858: 0x59A0008000371601 Ffma
    temp_427 = fma(temp_421, temp_380, temp_370);
    // 0x000868: 0x59A0050000C7390A Ffma
    temp_428 = fma(temp_326, temp_328, temp_389);
    // 0x000870: 0x4C5830180B070203 Fadd
    temp_429 = 0.0 - vp_c6.data[44].x;
    temp_430 = temp_423 + temp_429;
    // 0x000878: 0x59A01A8000C73A35 Ffma
    temp_431 = fma(temp_327, temp_328, temp_390);
    // 0x000888: 0x59A0070000C7430E Ffma
    temp_432 = fma(temp_384, temp_328, temp_392);
    // 0x000890: 0x59A0078001570606 Ffma
    temp_433 = fma(temp_426, temp_401, temp_407);
    // 0x000898: 0x59A01F8000C74A4A Ffma
    temp_434 = fma(temp_413, temp_328, temp_393);
    // 0x0008A8: 0x59A0168004B71C2D Ffma
    temp_435 = fma(temp_307, temp_155, temp_314);
    // 0x0008B0: 0x59A0238000C7490C Ffma
    temp_436 = fma(temp_416, temp_328, temp_394);
    // 0x0008B8: 0x59A00A0000774E4E Ffma
    temp_437 = fma(temp_419, temp_336, temp_422);
    // 0x0008C8: 0x4C5830180B17010D Fadd
    temp_438 = 0.0 - vp_c6.data[44].y;
    temp_439 = temp_427 + temp_438;
    // 0x0008D0: 0x4C68101803870303 Fmul
    temp_440 = temp_430 * vp_c6.data[14].x;
    // 0x0008D8: 0x4C5810180BA7060F Fadd
    temp_441 = temp_433 + vp_c6.data[46].z;
    // 0x0008E8: 0x59A005000077400A Ffma
    temp_442 = fma(temp_424, temp_336, temp_428);
    // 0x0008F0: 0x59A01A8000774444 Ffma
    temp_443 = fma(temp_425, temp_336, temp_431);
    // 0x0008F8: 0x59A0070000772D0E Ffma
    temp_444 = fma(temp_435, temp_336, temp_432);
    // 0x000908: 0x59A0250000772B00 Ffma
    temp_445 = fma(temp_342, temp_336, temp_434);
    // 0x000910: 0x59A0060000770909 Ffma
    temp_446 = fma(temp_343, temp_336, temp_436);
    // 0x000918: 0x59A0270000B7044E Ffma
    temp_447 = fma(temp_358, temp_340, temp_437);
    // 0x000928: 0x49A0019803970D07 Ffma
    temp_448 = fma(temp_439, vp_c6.data[14].y, temp_440);
    // 0x000930: 0x4C5830180B270604 Fadd
    temp_449 = 0.0 - vp_c6.data[44].z;
    temp_450 = temp_433 + temp_449;
    // 0x000938: 0x4C5810180B97010D Fadd
    temp_451 = temp_427 + vp_c6.data[46].y;
    // 0x000948: 0x4C6810180C270F03 Fmul
    temp_452 = temp_441 * vp_c6.data[48].z;
    // 0x000950: 0x59A0050000B70808 Ffma
    temp_453 = fma(temp_354, temp_340, temp_442);
    // 0x000958: 0x59A0220000B70544 Ffma
    temp_454 = fma(temp_355, temp_340, temp_443);
    // 0x000968: 0x4C5810180B87020C Fadd
    temp_455 = temp_423 + vp_c6.data[46].x;
    // 0x000970: 0x49A0039803A70407 Ffma
    temp_456 = fma(temp_450, vp_c6.data[14].z, temp_448);
    // 0x000978: 0x59A0130004572026 Ffma
    temp_457 = fma(temp_263, temp_154, temp_337);
    // 0x000988: 0x49A001980C170D05 Ffma
    temp_458 = fma(temp_451, vp_c6.data[48].y, temp_452);
    // 0x000990: 0x59A01B0004B72036 Ffma
    temp_459 = fma(temp_263, temp_155, temp_338);
    // 0x000998: 0x59A0070000B7240E Ffma
    temp_460 = fma(temp_359, temp_340, temp_444);
    // 0x0009A8: 0x5C68100000870803 Fmul
    temp_461 = temp_453 * temp_453;
    // 0x0009B0: 0x5C68100004474404 Fmul
    temp_462 = temp_454 * temp_454;
    // 0x0009B8: 0x4C98079803C70012 Mov
    // 0x0009C8: 0x49A002980C070C05 Ffma
    temp_463 = fma(temp_455, vp_c6.data[48].x, temp_458);
    // 0x0009D0: 0x59A0000000B72626 Ffma
    temp_464 = fma(temp_457, temp_340, temp_445);
    // 0x0009D8: 0xEFD87F800AC7FF00 Ald
    temp_465 = in_attr2.w;
    // 0x0009E8: 0x59A0048000B73609 Ffma
    temp_466 = fma(temp_459, temp_340, temp_446);
    // 0x0009F0: 0xEFF07F800D07FF02 Ast
    out_attr5.x = temp_423;
    // 0x0009F8: 0x59A0018004E74E03 Ffma
    temp_467 = fma(temp_447, temp_447, temp_461);
    // 0x000A08: 0xEFF07F800D47FF01 Ast
    out_attr5.y = temp_427;
    // 0x000A10: 0x59A0020000E70E04 Ffma
    temp_468 = fma(temp_460, temp_460, temp_462);
    // 0x000A18: 0xEFF07F800D87FF06 Ast
    out_attr5.z = temp_433;
    // 0x000A28: 0x4C58300C02F7020A Fadd
    temp_469 = 0.0 - vp_c3.data[11].w;
    temp_470 = temp_423 + temp_469;
    // 0x000A30: 0xEFF07F800E07FF23 Ast
    out_attr6.x = temp_151;
    // 0x000A38: 0x4C58300C0337010B Fadd
    temp_471 = 0.0 - vp_c3.data[12].w;
    temp_472 = temp_427 + temp_471;
    // 0x000A48: 0xEFF07F800B07FF0A Ast
    out_attr3.x = temp_470;
    // 0x000A50: 0x51A0091803B70712 Ffma
    temp_473 = fma(temp_456, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000A58: 0xEFF07F800B47FF0B Ast
    out_attr3.y = temp_472;
    // 0x000A68: 0x4C6810180C670F07 Fmul
    temp_474 = temp_441 * vp_c6.data[49].z;
    // 0x000A70: 0xEFF07F800E47FF22 Ast
    out_attr6.y = temp_153;
    // 0x000A78: 0x4C6810180BB70511 Fmul
    temp_475 = temp_463 * vp_c6.data[46].w;
    // 0x000A88: 0xEFF07F801047FF12 Ast
    out_attr8.y = temp_473;
    // 0x000A90: 0x59A0018002672605 Ffma
    temp_476 = fma(temp_464, temp_464, temp_467);
    // 0x000A98: 0xEFF07F801107FF11 Ast
    out_attr9.x = temp_475;
    // 0x000AA8: 0x59A002000097090A Ffma
    temp_477 = fma(temp_466, temp_466, temp_468);
    // 0x000AB0: 0x5080000000570505 Mufu
    temp_478 = inversesqrt(temp_476);
    // 0x000AB8: 0x49A003980C570D07 Ffma
    temp_479 = fma(temp_451, vp_c6.data[49].y, temp_474);
    // 0x000AC8: 0x5080000000570A0B Mufu
    temp_480 = inversesqrt(temp_477);
    // 0x000AD0: 0x4C58300C03770610 Fadd
    temp_481 = 0.0 - vp_c3.data[13].w;
    temp_482 = temp_433 + temp_481;
    // 0x000AD8: 0x4C68100C00470203 Fmul
    temp_483 = temp_423 * vp_c3.data[1].x;
    // 0x000AE8: 0xEFF07F800B87FF10 Ast
    out_attr3.z = temp_482;
    // 0x000AF0: 0x4C68100C00870204 Fmul
    temp_484 = temp_423 * vp_c3.data[2].x;
    // 0x000AF8: 0x4C6810180CA70F0F Fmul
    temp_485 = temp_441 * vp_c6.data[50].z;
    // 0x000B08: 0x49A0018C00570103 Ffma
    temp_486 = fma(temp_427, vp_c3.data[1].y, temp_483);
    // 0x000B10: 0x5C68100000574E4E Fmul
    temp_487 = temp_447 * temp_478;
    // 0x000B18: 0x49A003980C470C10 Ffma
    temp_488 = fma(temp_455, vp_c6.data[49].x, temp_479);
    // 0x000B28: 0xEFF07F800947FF4E Ast
    out_attr1.y = temp_487;
    // 0x000B30: 0x4C68100C00070207 Fmul
    temp_489 = temp_423 * vp_c3.data[0].x;
    // 0x000B38: 0x4C58101002070602 Fadd
    temp_490 = temp_433 + vp_c4.data[8].x;
    // 0x000B48: 0x5C68100000B70909 Fmul
    temp_491 = temp_466 * temp_480;
    // 0x000B50: 0x49A0020C00970104 Ffma
    temp_492 = fma(temp_427, vp_c3.data[2].y, temp_484);
    // 0x000B58: 0xEFF07F800887FF09 Ast
    out_attr0.z = temp_491;
    // 0x000B68: 0x49A0038C00170107 Ffma
    temp_493 = fma(temp_427, vp_c3.data[0].y, temp_489);
    // 0x000B70: 0x5C68100000B74444 Fmul
    temp_494 = temp_454 * temp_480;
    // 0x000B78: 0x5C68100000B70E0E Fmul
    temp_495 = temp_460 * temp_480;
    // 0x000B88: 0xEFF07F800807FF44 Ast
    out_attr0.x = temp_494;
    // 0x000B90: 0x5C68100000570808 Fmul
    temp_496 = temp_453 * temp_478;
    // 0x000B98: 0xEFF07F800847FF0E Ast
    out_attr0.y = temp_495;
    // 0x000BA8: 0x49A0018C00670201 Ffma
    temp_497 = fma(temp_490, vp_c3.data[1].z, temp_486);
    // 0x000BB0: 0xEFF07F800907FF08 Ast
    out_attr1.x = temp_496;
    // 0x000BB8: 0x49A0018C0067060B Ffma
    temp_498 = fma(temp_433, vp_c3.data[1].z, temp_486);
    // 0x000BC8: 0x5C68100000572605 Fmul
    temp_499 = temp_464 * temp_478;
    // 0x000BD0: 0x5C68100000974E03 Fmul
    temp_500 = temp_487 * temp_491;
    // 0x000BD8: 0xEFF07F800987FF05 Ast
    out_attr1.z = temp_499;
    // 0x000BE8: 0x49A0020C00A7060A Ffma
    temp_501 = fma(temp_433, vp_c3.data[2].z, temp_492);
    // 0x000BF0: 0x49A007980C970D0F Ffma
    temp_502 = fma(temp_451, vp_c6.data[50].y, temp_485);
    // 0x000BF8: 0x49A0020C00A70204 Ffma
    temp_503 = fma(temp_490, vp_c3.data[2].z, temp_492);
    // 0x000C08: 0x49A0038C0027060D Ffma
    temp_504 = fma(temp_433, vp_c3.data[0].z, temp_493);
    // 0x000C10: 0x49A0038C00270202 Ffma
    temp_505 = fma(temp_490, vp_c3.data[0].z, temp_493);
    // 0x000C18: 0x59A2018000E70506 Ffma
    temp_506 = 0.0 - temp_500;
    temp_507 = fma(temp_499, temp_495, temp_506);
    // 0x000C28: 0x5C68100004470503 Fmul
    temp_508 = temp_499 * temp_494;
    // 0x000C30: 0x5C68100000E70807 Fmul
    temp_509 = temp_496 * temp_495;
    // 0x000C38: 0x4C58100C00770B0B Fadd
    temp_510 = temp_498 + vp_c3.data[1].w;
    // 0x000C48: 0x4C58100C00370D0D Fadd
    temp_511 = temp_504 + vp_c3.data[0].w;
    // 0x000C50: 0x4C58100C00370202 Fadd
    temp_512 = temp_505 + vp_c3.data[0].w;
    // 0x000C58: 0x4C58100C00770101 Fadd
    temp_513 = temp_497 + vp_c3.data[1].w;
    // 0x000C68: 0x59A2018000970809 Ffma
    temp_514 = 0.0 - temp_508;
    temp_515 = fma(temp_496, temp_491, temp_514);
    // 0x000C70: 0x59A2038004474E05 Ffma
    temp_516 = 0.0 - temp_509;
    temp_517 = fma(temp_487, temp_494, temp_516);
    // 0x000C78: 0x5C68100000070608 Fmul
    temp_518 = temp_507 * temp_465;
    // 0x000C88: 0x4C68101802C70D0D Fmul
    temp_519 = temp_511 * vp_c6.data[11].x;
    // 0x000C90: 0xEFF07F800A07FF08 Ast
    out_attr2.x = temp_518;
    // 0x000C98: 0x4C68100C02870203 Fmul
    temp_520 = temp_512 * vp_c3.data[10].x;
    // 0x000CA8: 0x4C68100C02470206 Fmul
    temp_521 = temp_512 * vp_c3.data[9].x;
    // 0x000CB0: 0x4C68100C02070207 Fmul
    temp_522 = temp_512 * vp_c3.data[8].x;
    // 0x000CB8: 0x4C68100C01C70202 Fmul
    temp_523 = temp_512 * vp_c3.data[7].x;
    // 0x000CC8: 0x4C58100C00B70A0A Fadd
    temp_524 = temp_501 + vp_c3.data[2].w;
    // 0x000CD0: 0x49A0069802D70B0B Ffma
    temp_525 = fma(temp_510, vp_c6.data[11].y, temp_519);
    // 0x000CD8: 0xEFF07F800C87FF0A Ast
    out_attr4.z = temp_524;
    // 0x000CE8: 0x4C58100C00B70404 Fadd
    temp_526 = temp_503 + vp_c3.data[2].w;
    // 0x000CF0: 0x49A0018C02970103 Ffma
    temp_527 = fma(temp_513, vp_c3.data[10].y, temp_520);
    // 0x000CF8: 0x49A0030C02570106 Ffma
    temp_528 = fma(temp_513, vp_c3.data[9].y, temp_521);
    // 0x000D08: 0x49A0038C02170107 Ffma
    temp_529 = fma(temp_513, vp_c3.data[8].y, temp_522);
    // 0x000D10: 0x49A0010C01D70102 Ffma
    temp_530 = fma(temp_513, vp_c3.data[7].y, temp_523);
    // 0x000D18: 0x49A0059802E70A0B Ffma
    temp_531 = fma(temp_524, vp_c6.data[11].z, temp_525);
    // 0x000D28: 0x49A007980C870C0F Ffma
    temp_532 = fma(temp_455, vp_c6.data[50].x, temp_502);
    // 0x000D30: 0x4C9807980307000A Mov
    // 0x000D38: 0x49A0018C02A70403 Ffma
    temp_533 = fma(temp_526, vp_c3.data[10].z, temp_527);
    // 0x000D48: 0x49A0030C02670406 Ffma
    temp_534 = fma(temp_526, vp_c3.data[9].z, temp_528);
    // 0x000D50: 0x49A0038C02270407 Ffma
    temp_535 = fma(temp_526, vp_c3.data[8].z, temp_529);
    // 0x000D58: 0x49A0010C01E70402 Ffma
    temp_536 = fma(temp_526, vp_c3.data[7].z, temp_530);
    // 0x000D68: 0x4C6810180BB71010 Fmul
    temp_537 = temp_488 * vp_c6.data[46].w;
    // 0x000D70: 0x4C6810180BB70F0F Fmul
    temp_538 = temp_532 * vp_c6.data[46].w;
    // 0x000D78: 0xEFF07F801147FF10 Ast
    out_attr9.y = temp_537;
    // 0x000D88: 0x5C68100000070909 Fmul
    temp_539 = temp_515 * temp_465;
    // 0x000D90: 0xEFF07F801187FF0F Ast
    out_attr9.z = temp_538;
    // 0x000D98: 0x5C68100000070505 Fmul
    temp_540 = temp_517 * temp_465;
    // 0x000DA8: 0xEFF07F800A47FF09 Ast
    out_attr2.y = temp_539;
    // 0x000DB0: 0x51A0051802F70B0B Ffma
    temp_541 = fma(temp_531, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000DB8: 0xEFF07F800A87FF05 Ast
    out_attr2.z = temp_540;
    // 0x000DC8: 0x4C58100C02B70303 Fadd
    temp_542 = temp_533 + vp_c3.data[10].w;
    // 0x000DD0: 0xEFF07F801007FF0B Ast
    out_attr8.x = temp_541;
    // 0x000DD8: 0x4C58100C02770606 Fadd
    temp_543 = temp_534 + vp_c3.data[9].w;
    // 0x000DE8: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_542;
    // 0x000DF0: 0x4C58100C02370707 Fadd
    temp_544 = temp_535 + vp_c3.data[8].w;
    // 0x000DF8: 0xEFF07F800787FF06 Ast
    gl_Position.z = temp_543;
    // 0x000E08: 0x4C58100C01F70202 Fadd
    temp_545 = temp_536 + vp_c3.data[7].w;
    // 0x000E10: 0xEFF07F800747FF07 Ast
    gl_Position.y = temp_544;
    // 0x000E18: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_545;
    // 0x000E28: 0xE30000000007000F Exit
    return;
}
