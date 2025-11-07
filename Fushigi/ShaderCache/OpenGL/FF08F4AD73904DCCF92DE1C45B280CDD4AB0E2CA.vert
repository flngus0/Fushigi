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
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 7) out vec4 out_attr7;
layout (location = 9) out vec4 out_attr9;
layout (location = 10) out vec4 out_attr10;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    int temp_4;
    int temp_5;
    precise float temp_6;
    int temp_7;
    int temp_8;
    precise float temp_9;
    uint temp_10;
    int temp_11;
    int temp_12;
    int temp_13;
    precise float temp_14;
    int temp_15;
    int temp_16;
    int temp_17;
    uint temp_18;
    uint temp_19;
    int temp_20;
    precise float temp_21;
    int temp_22;
    uint temp_23;
    int temp_24;
    precise float temp_25;
    int temp_26;
    int temp_27;
    int temp_28;
    uint temp_29;
    uint temp_30;
    int temp_31;
    precise float temp_32;
    int temp_33;
    uint temp_34;
    int temp_35;
    precise float temp_36;
    uint temp_37;
    int temp_38;
    int temp_39;
    int temp_40;
    uint temp_41;
    uint temp_42;
    int temp_43;
    precise float temp_44;
    int temp_45;
    uint temp_46;
    int temp_47;
    precise float temp_48;
    uint temp_49;
    int temp_50;
    int temp_51;
    int temp_52;
    uint temp_53;
    uint temp_54;
    int temp_55;
    precise float temp_56;
    int temp_57;
    uint temp_58;
    int temp_59;
    precise float temp_60;
    uint temp_61;
    int temp_62;
    int temp_63;
    int temp_64;
    int temp_65;
    uint temp_66;
    uint temp_67;
    int temp_68;
    precise float temp_69;
    int temp_70;
    uint temp_71;
    int temp_72;
    precise float temp_73;
    int temp_74;
    uint temp_75;
    uint temp_76;
    int temp_77;
    precise float temp_78;
    int temp_79;
    uint temp_80;
    int temp_81;
    precise float temp_82;
    precise float temp_83;
    uint temp_84;
    uint temp_85;
    int temp_86;
    precise float temp_87;
    int temp_88;
    uint temp_89;
    int temp_90;
    precise float temp_91;
    uint temp_92;
    uint temp_93;
    int temp_94;
    precise float temp_95;
    int temp_96;
    uint temp_97;
    int temp_98;
    precise float temp_99;
    int temp_100;
    uint temp_101;
    uint temp_102;
    int temp_103;
    precise float temp_104;
    int temp_105;
    uint temp_106;
    int temp_107;
    precise float temp_108;
    int temp_109;
    uint temp_110;
    uint temp_111;
    int temp_112;
    precise float temp_113;
    int temp_114;
    uint temp_115;
    int temp_116;
    precise float temp_117;
    int temp_118;
    uint temp_119;
    uint temp_120;
    int temp_121;
    precise float temp_122;
    int temp_123;
    uint temp_124;
    int temp_125;
    precise float temp_126;
    int temp_127;
    uint temp_128;
    uint temp_129;
    int temp_130;
    precise float temp_131;
    int temp_132;
    uint temp_133;
    int temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    int temp_139;
    uint temp_140;
    uint temp_141;
    int temp_142;
    precise float temp_143;
    int temp_144;
    uint temp_145;
    int temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
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
    int temp_162;
    uint temp_163;
    uint temp_164;
    int temp_165;
    precise float temp_166;
    int temp_167;
    uint temp_168;
    int temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
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
    int temp_190;
    uint temp_191;
    uint temp_192;
    int temp_193;
    precise float temp_194;
    int temp_195;
    uint temp_196;
    int temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    int temp_204;
    uint temp_205;
    uint temp_206;
    int temp_207;
    precise float temp_208;
    int temp_209;
    uint temp_210;
    int temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    int temp_221;
    uint temp_222;
    uint temp_223;
    int temp_224;
    precise float temp_225;
    int temp_226;
    uint temp_227;
    int temp_228;
    precise float temp_229;
    precise float temp_230;
    int temp_231;
    uint temp_232;
    uint temp_233;
    int temp_234;
    precise float temp_235;
    int temp_236;
    uint temp_237;
    int temp_238;
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
    int temp_254;
    uint temp_255;
    uint temp_256;
    int temp_257;
    precise float temp_258;
    int temp_259;
    uint temp_260;
    int temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    int temp_265;
    uint temp_266;
    uint temp_267;
    int temp_268;
    precise float temp_269;
    int temp_270;
    uint temp_271;
    int temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    int temp_276;
    uint temp_277;
    uint temp_278;
    int temp_279;
    precise float temp_280;
    int temp_281;
    uint temp_282;
    int temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    int temp_288;
    uint temp_289;
    uint temp_290;
    int temp_291;
    precise float temp_292;
    int temp_293;
    uint temp_294;
    int temp_295;
    precise float temp_296;
    precise float temp_297;
    int temp_298;
    uint temp_299;
    uint temp_300;
    int temp_301;
    precise float temp_302;
    int temp_303;
    uint temp_304;
    int temp_305;
    precise float temp_306;
    precise float temp_307;
    precise float temp_308;
    int temp_309;
    uint temp_310;
    uint temp_311;
    int temp_312;
    precise float temp_313;
    int temp_314;
    uint temp_315;
    int temp_316;
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
    precise float temp_334;
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
    int temp_346;
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
    int temp_364;
    precise float temp_365;
    int temp_366;
    uint temp_367;
    uint temp_368;
    int temp_369;
    precise float temp_370;
    int temp_371;
    uint temp_372;
    int temp_373;
    precise float temp_374;
    precise float temp_375;
    int temp_376;
    uint temp_377;
    uint temp_378;
    int temp_379;
    precise float temp_380;
    precise float temp_381;
    precise float temp_382;
    precise float temp_383;
    precise float temp_384;
    precise float temp_385;
    int temp_386;
    uint temp_387;
    uint temp_388;
    int temp_389;
    precise float temp_390;
    int temp_391;
    uint temp_392;
    int temp_393;
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
    int temp_408;
    uint temp_409;
    uint temp_410;
    int temp_411;
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
    precise float temp_546;
    precise float temp_547;
    precise float temp_548;
    precise float temp_549;
    precise float temp_550;
    precise float temp_551;
    precise float temp_552;
    precise float temp_553;
    precise float temp_554;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400A70025 Mov
    // 0x000010: 0xEFD87F800E87FF02 Ald
    temp_0 = in_attr6.z;
    // 0x000018: 0x4C98079400B70023 Mov
    // 0x000028: 0xEFD87F800E07FF01 Ald
    temp_1 = in_attr6.x;
    // 0x000030: 0x4C98079400270024 Mov
    // 0x000038: 0xEFD87F800EC7FF04 Ald
    temp_2 = in_attr6.w;
    // 0x000048: 0x4C9807940037000B Mov
    // 0x000050: 0xEFD87F800E47FF00 Ald
    temp_3 = in_attr6.y;
    // 0x000058: 0x36007F8003070229 Xmad
    temp_4 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_5 = temp_4 * 48;
    // 0x000068: 0xEFD87F800A07FF2F Ald
    temp_6 = in_attr2.x;
    // 0x000070: 0x36007F800307014C Xmad
    temp_7 = floatBitsToInt(temp_1) & 0xFFFF;
    temp_8 = temp_7 * 48;
    // 0x000078: 0xEFD87F800807FF0D Ald
    temp_9 = in_attr0.x;
    // 0x000088: 0x3620149003070229 Xmad
    temp_10 = floatBitsToUint(temp_0) >> 16;
    temp_11 = int(temp_10) * 48;
    temp_12 = temp_11 << 16;
    temp_13 = temp_12 + temp_5;
    // 0x000090: 0xEFD87F800907FF3B Ald
    temp_14 = in_attr1.x;
    // 0x000098: 0x36007F8003070427 Xmad
    temp_15 = floatBitsToInt(temp_2) & 0xFFFF;
    temp_16 = temp_15 * 48;
    // 0x0000A8: 0xEF95008001072908 Ldc
    temp_17 = temp_13 + 16;
    temp_18 = uint(temp_17) >> 2;
    temp_19 = temp_18 >> 2;
    temp_20 = int(temp_18) & 3;
    temp_21 = vp_c8.data[int(temp_19)][temp_20];
    temp_22 = int(temp_18) + 1;
    temp_23 = uint(temp_22) >> 2;
    temp_24 = temp_22 & 3;
    temp_25 = vp_c8.data[int(temp_23)][temp_24];
    // 0x0000B0: 0x36007F800307004B Xmad
    temp_26 = floatBitsToInt(temp_3) & 0xFFFF;
    temp_27 = temp_26 * 48;
    // 0x0000B8: 0xEF95008002072906 Ldc
    temp_28 = temp_13 + 32;
    temp_29 = uint(temp_28) >> 2;
    temp_30 = temp_29 >> 2;
    temp_31 = int(temp_29) & 3;
    temp_32 = vp_c8.data[int(temp_30)][temp_31];
    temp_33 = int(temp_29) + 1;
    temp_34 = uint(temp_33) >> 2;
    temp_35 = temp_33 & 3;
    temp_36 = vp_c8.data[int(temp_34)][temp_35];
    // 0x0000C8: 0x362026100307014C Xmad
    temp_37 = floatBitsToUint(temp_1) >> 16;
    temp_38 = int(temp_37) * 48;
    temp_39 = temp_38 << 16;
    temp_40 = temp_39 + temp_8;
    // 0x0000D0: 0xEF95008000072912 Ldc
    temp_41 = uint(temp_13) >> 2;
    temp_42 = temp_41 >> 2;
    temp_43 = int(temp_41) & 3;
    temp_44 = vp_c8.data[int(temp_42)][temp_43];
    temp_45 = int(temp_41) + 1;
    temp_46 = uint(temp_45) >> 2;
    temp_47 = temp_45 & 3;
    temp_48 = vp_c8.data[int(temp_46)][temp_47];
    // 0x0000D8: 0x3620139003070427 Xmad
    temp_49 = floatBitsToUint(temp_2) >> 16;
    temp_50 = int(temp_49) * 48;
    temp_51 = temp_50 << 16;
    temp_52 = temp_51 + temp_16;
    // 0x0000E8: 0xEF95008000074C14 Ldc
    temp_53 = uint(temp_40) >> 2;
    temp_54 = temp_53 >> 2;
    temp_55 = int(temp_53) & 3;
    temp_56 = vp_c8.data[int(temp_54)][temp_55];
    temp_57 = int(temp_53) + 1;
    temp_58 = uint(temp_57) >> 2;
    temp_59 = temp_57 & 3;
    temp_60 = vp_c8.data[int(temp_58)][temp_59];
    // 0x0000F0: 0x362025900307004B Xmad
    temp_61 = floatBitsToUint(temp_3) >> 16;
    temp_62 = int(temp_61) * 48;
    temp_63 = temp_62 << 16;
    temp_64 = temp_63 + temp_27;
    // 0x0000F8: 0xEF95008001074C1A Ldc
    temp_65 = temp_40 + 16;
    temp_66 = uint(temp_65) >> 2;
    temp_67 = temp_66 >> 2;
    temp_68 = int(temp_66) & 3;
    temp_69 = vp_c8.data[int(temp_67)][temp_68];
    temp_70 = int(temp_66) + 1;
    temp_71 = uint(temp_70) >> 2;
    temp_72 = temp_70 & 3;
    temp_73 = vp_c8.data[int(temp_71)][temp_72];
    // 0x000108: 0xEF95008002074C16 Ldc
    temp_74 = temp_40 + 32;
    temp_75 = uint(temp_74) >> 2;
    temp_76 = temp_75 >> 2;
    temp_77 = int(temp_75) & 3;
    temp_78 = vp_c8.data[int(temp_76)][temp_77];
    temp_79 = int(temp_75) + 1;
    temp_80 = uint(temp_79) >> 2;
    temp_81 = temp_79 & 3;
    temp_82 = vp_c8.data[int(temp_80)][temp_81];
    // 0x000110: 0xEFD87F801047FF22 Ald
    temp_83 = in_attr8.y;
    // 0x000118: 0xEF95008000072702 Ldc
    temp_84 = uint(temp_52) >> 2;
    temp_85 = temp_84 >> 2;
    temp_86 = int(temp_84) & 3;
    temp_87 = vp_c8.data[int(temp_85)][temp_86];
    temp_88 = int(temp_84) + 1;
    temp_89 = uint(temp_88) >> 2;
    temp_90 = temp_88 & 3;
    temp_91 = vp_c8.data[int(temp_89)][temp_90];
    // 0x000128: 0xEF95008000074B10 Ldc
    temp_92 = uint(temp_64) >> 2;
    temp_93 = temp_92 >> 2;
    temp_94 = int(temp_92) & 3;
    temp_95 = vp_c8.data[int(temp_93)][temp_94];
    temp_96 = int(temp_92) + 1;
    temp_97 = uint(temp_96) >> 2;
    temp_98 = temp_96 & 3;
    temp_99 = vp_c8.data[int(temp_97)][temp_98];
    // 0x000130: 0xEF95008001074B18 Ldc
    temp_100 = temp_64 + 16;
    temp_101 = uint(temp_100) >> 2;
    temp_102 = temp_101 >> 2;
    temp_103 = int(temp_101) & 3;
    temp_104 = vp_c8.data[int(temp_102)][temp_103];
    temp_105 = int(temp_101) + 1;
    temp_106 = uint(temp_105) >> 2;
    temp_107 = temp_105 & 3;
    temp_108 = vp_c8.data[int(temp_106)][temp_107];
    // 0x000138: 0xEF95008002074B1C Ldc
    temp_109 = temp_64 + 32;
    temp_110 = uint(temp_109) >> 2;
    temp_111 = temp_110 >> 2;
    temp_112 = int(temp_110) & 3;
    temp_113 = vp_c8.data[int(temp_111)][temp_112];
    temp_114 = int(temp_110) + 1;
    temp_115 = uint(temp_114) >> 2;
    temp_116 = temp_114 & 3;
    temp_117 = vp_c8.data[int(temp_115)][temp_116];
    // 0x000148: 0xEF95008001072700 Ldc
    temp_118 = temp_52 + 16;
    temp_119 = uint(temp_118) >> 2;
    temp_120 = temp_119 >> 2;
    temp_121 = int(temp_119) & 3;
    temp_122 = vp_c8.data[int(temp_120)][temp_121];
    temp_123 = int(temp_119) + 1;
    temp_124 = uint(temp_123) >> 2;
    temp_125 = temp_123 & 3;
    temp_126 = vp_c8.data[int(temp_124)][temp_125];
    // 0x000150: 0xEF95008002072704 Ldc
    temp_127 = temp_52 + 32;
    temp_128 = uint(temp_127) >> 2;
    temp_129 = temp_128 >> 2;
    temp_130 = int(temp_128) & 3;
    temp_131 = vp_c8.data[int(temp_129)][temp_130];
    temp_132 = int(temp_128) + 1;
    temp_133 = uint(temp_132) >> 2;
    temp_134 = temp_132 & 3;
    temp_135 = vp_c8.data[int(temp_133)][temp_134];
    // 0x000158: 0xEFD87F800A47FF26 Ald
    temp_136 = in_attr2.y;
    // 0x000168: 0x4C68101406972F2F Fmul
    temp_137 = temp_6 * vp_c5.data[26].y;
    // 0x000170: 0xEFD87F801007FF0A Ald
    temp_138 = in_attr8.x;
    // 0x000178: 0xEF95008001874B0E Ldc
    temp_139 = temp_64 + 24;
    temp_140 = uint(temp_139) >> 2;
    temp_141 = temp_140 >> 2;
    temp_142 = int(temp_140) & 3;
    temp_143 = vp_c8.data[int(temp_141)][temp_142];
    temp_144 = int(temp_140) + 1;
    temp_145 = uint(temp_144) >> 2;
    temp_146 = temp_144 & 3;
    temp_147 = vp_c8.data[int(temp_145)][temp_146];
    // 0x000188: 0xEFD87F800847FF28 Ald
    temp_148 = in_attr0.y;
    // 0x000190: 0xEFD87F800947FF2A Ald
    temp_149 = in_attr1.y;
    // 0x000198: 0xEFD87F800887FF49 Ald
    temp_150 = in_attr0.z;
    // 0x0001A8: 0x51A0129400C72225 Ffma
    temp_151 = fma(temp_83, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x0001B0: 0xEFD87F800987FF4D Ald
    temp_152 = in_attr1.z;
    // 0x0001B8: 0x51A0119400D72223 Ffma
    temp_153 = fma(temp_83, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x0001C8: 0x51A0121400472224 Ffma
    temp_154 = fma(temp_83, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0001D0: 0x51A0059400572222 Ffma
    temp_155 = fma(temp_83, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0001D8: 0x4C68101406972626 Fmul
    temp_156 = temp_136 * vp_c5.data[26].y;
    // 0x0001E8: 0x49A0129400870A25 Ffma
    temp_157 = fma(temp_138, vp_c5.data[2].x, temp_151);
    // 0x0001F0: 0x49A0119400970A23 Ffma
    temp_158 = fma(temp_138, vp_c5.data[2].y, temp_153);
    // 0x0001F8: 0x49A0121400070A24 Ffma
    temp_159 = fma(temp_138, vp_c5.data[0].x, temp_154);
    // 0x000208: 0x49A0111400170A22 Ffma
    temp_160 = fma(temp_138, vp_c5.data[0].y, temp_155);
    // 0x000210: 0x5C68100000D7082E Fmul
    temp_161 = temp_21 * temp_9;
    // 0x000218: 0xEF95008000874B0A Ldc
    temp_162 = temp_64 + 8;
    temp_163 = uint(temp_162) >> 2;
    temp_164 = temp_163 >> 2;
    temp_165 = int(temp_163) & 3;
    temp_166 = vp_c8.data[int(temp_164)][temp_165];
    temp_167 = int(temp_163) + 1;
    temp_168 = uint(temp_167) >> 2;
    temp_169 = temp_167 & 3;
    temp_170 = vp_c8.data[int(temp_168)][temp_169];
    // 0x000228: 0x5C68100002F7082B Fmul
    temp_171 = temp_21 * temp_137;
    // 0x000230: 0x5C68100003B7082C Fmul
    temp_172 = temp_21 * temp_14;
    // 0x000238: 0x5C68100000D7062D Fmul
    temp_173 = temp_32 * temp_9;
    // 0x000248: 0x5C68100002F70608 Fmul
    temp_174 = temp_32 * temp_137;
    // 0x000250: 0x5C68100003B70631 Fmul
    temp_175 = temp_32 * temp_14;
    // 0x000258: 0x5C68100000D7143A Fmul
    temp_176 = temp_56 * temp_9;
    // 0x000268: 0x5C68100002F71448 Fmul
    temp_177 = temp_56 * temp_137;
    // 0x000270: 0x5C68100003B71414 Fmul
    temp_178 = temp_56 * temp_14;
    // 0x000278: 0x5C68100000D71A42 Fmul
    temp_179 = temp_69 * temp_9;
    // 0x000288: 0x5C68100000D70206 Fmul
    temp_180 = temp_87 * temp_9;
    // 0x000290: 0x5C68100002F70230 Fmul
    temp_181 = temp_87 * temp_137;
    // 0x000298: 0x5C68100003B70234 Fmul
    temp_182 = temp_87 * temp_14;
    // 0x0002A8: 0x5C68100000D71037 Fmul
    temp_183 = temp_95 * temp_9;
    // 0x0002B0: 0x5C68100000D71843 Fmul
    temp_184 = temp_104 * temp_9;
    // 0x0002B8: 0x5C68100000D71C46 Fmul
    temp_185 = temp_113 * temp_9;
    // 0x0002C8: 0x5C68100000D7161E Fmul
    temp_186 = temp_78 * temp_9;
    // 0x0002D0: 0x5C68100000D71221 Fmul
    temp_187 = temp_44 * temp_9;
    // 0x0002D8: 0x5C68100000D70002 Fmul
    temp_188 = temp_122 * temp_9;
    // 0x0002E8: 0x5C68100000D70432 Fmul
    temp_189 = temp_131 * temp_9;
    // 0x0002F0: 0xEF95008000874C0C Ldc
    temp_190 = temp_40 + 8;
    temp_191 = uint(temp_190) >> 2;
    temp_192 = temp_191 >> 2;
    temp_193 = int(temp_191) & 3;
    temp_194 = vp_c8.data[int(temp_192)][temp_193];
    temp_195 = int(temp_191) + 1;
    temp_196 = uint(temp_195) >> 2;
    temp_197 = temp_195 & 3;
    temp_198 = vp_c8.data[int(temp_196)][temp_197];
    // 0x0002F8: 0x5C68100002F71220 Fmul
    temp_199 = temp_44 * temp_137;
    // 0x000308: 0x5C68100003B71238 Fmul
    temp_200 = temp_44 * temp_14;
    // 0x000310: 0x59A01D000287153A Ffma
    temp_201 = fma(temp_60, temp_148, temp_176);
    // 0x000318: 0x59A0240002671536 Ffma
    temp_202 = fma(temp_60, temp_156, temp_177);
    // 0x000328: 0x59A00A0002A7153E Ffma
    temp_203 = fma(temp_60, temp_149, temp_178);
    // 0x000330: 0xEF95008002874B14 Ldc
    temp_204 = temp_64 + 40;
    temp_205 = uint(temp_204) >> 2;
    temp_206 = temp_205 >> 2;
    temp_207 = int(temp_205) & 3;
    temp_208 = vp_c8.data[int(temp_206)][temp_207];
    temp_209 = int(temp_205) + 1;
    temp_210 = uint(temp_209) >> 2;
    temp_211 = temp_209 & 3;
    temp_212 = vp_c8.data[int(temp_210)][temp_211];
    // 0x000338: 0x59A0108002871348 Ffma
    temp_213 = fma(temp_48, temp_148, temp_187);
    // 0x000348: 0x5C68100002F7103C Fmul
    temp_214 = temp_95 * temp_137;
    // 0x000350: 0x59A01C0002A71338 Ffma
    temp_215 = fma(temp_48, temp_149, temp_200);
    // 0x000358: 0x5C68100003B71A44 Fmul
    temp_216 = temp_69 * temp_14;
    // 0x000368: 0x5C68100003B71010 Fmul
    temp_217 = temp_95 * temp_14;
    // 0x000370: 0x5C68100002F7183F Fmul
    temp_218 = temp_104 * temp_137;
    // 0x000378: 0x5C68100003B71840 Fmul
    temp_219 = temp_104 * temp_14;
    // 0x000388: 0x59A010000267134B Ffma
    temp_220 = fma(temp_48, temp_156, temp_199);
    // 0x000390: 0xEF95008001872712 Ldc
    temp_221 = temp_52 + 24;
    temp_222 = uint(temp_221) >> 2;
    temp_223 = temp_222 >> 2;
    temp_224 = int(temp_222) & 3;
    temp_225 = vp_c8.data[int(temp_223)][temp_224];
    temp_226 = int(temp_222) + 1;
    temp_227 = uint(temp_226) >> 2;
    temp_228 = temp_226 & 3;
    temp_229 = vp_c8.data[int(temp_227)][temp_228];
    // 0x000398: 0x5C68100002F71A41 Fmul
    temp_230 = temp_69 * temp_137;
    // 0x0003A8: 0xEF95008002872720 Ldc
    temp_231 = temp_52 + 40;
    temp_232 = uint(temp_231) >> 2;
    temp_233 = temp_232 >> 2;
    temp_234 = int(temp_232) & 3;
    temp_235 = vp_c8.data[int(temp_233)][temp_234];
    temp_236 = int(temp_232) + 1;
    temp_237 = uint(temp_236) >> 2;
    temp_238 = temp_236 & 3;
    temp_239 = vp_c8.data[int(temp_237)][temp_238];
    // 0x0003B0: 0x5C68100002F71C1F Fmul
    temp_240 = temp_113 * temp_137;
    // 0x0003B8: 0x5C68100003B71C47 Fmul
    temp_241 = temp_113 * temp_14;
    // 0x0003C8: 0x5C68100002F71635 Fmul
    temp_242 = temp_78 * temp_137;
    // 0x0003D0: 0x5C68100003B71639 Fmul
    temp_243 = temp_78 * temp_14;
    // 0x0003D8: 0x5C68100002F70033 Fmul
    temp_244 = temp_122 * temp_137;
    // 0x0003E8: 0x5C68100003B70000 Fmul
    temp_245 = temp_122 * temp_14;
    // 0x0003F0: 0x5C68100002F7042F Fmul
    temp_246 = temp_131 * temp_137;
    // 0x0003F8: 0x5C68100003B7043B Fmul
    temp_247 = temp_131 * temp_14;
    // 0x000408: 0x59A021800287193D Ffma
    temp_248 = fma(temp_108, temp_148, temp_184);
    // 0x000410: 0x59A01E0002671104 Ffma
    temp_249 = fma(temp_99, temp_156, temp_214);
    // 0x000418: 0x59A0220002A71B43 Ffma
    temp_250 = fma(temp_73, temp_149, temp_216);
    // 0x000428: 0xEFD87F800A87FF44 Ald
    temp_251 = in_attr2.z;
    // 0x000430: 0x59A01B8002871137 Ffma
    temp_252 = fma(temp_99, temp_148, temp_183);
    // 0x000438: 0x59A0080002A7113C Ffma
    temp_253 = fma(temp_99, temp_149, temp_217);
    // 0x000448: 0xEF95008001874C10 Ldc
    temp_254 = temp_40 + 24;
    temp_255 = uint(temp_254) >> 2;
    temp_256 = temp_255 >> 2;
    temp_257 = int(temp_255) & 3;
    temp_258 = vp_c8.data[int(temp_256)][temp_257];
    temp_259 = int(temp_255) + 1;
    temp_260 = uint(temp_259) >> 2;
    temp_261 = temp_259 & 3;
    temp_262 = vp_c8.data[int(temp_260)][temp_261];
    // 0x000450: 0x59A01F800267193F Ffma
    temp_263 = fma(temp_108, temp_156, temp_218);
    // 0x000458: 0x59A0200002A71940 Ffma
    temp_264 = fma(temp_108, temp_149, temp_219);
    // 0x000468: 0xEF95008002874C18 Ldc
    temp_265 = temp_40 + 40;
    temp_266 = uint(temp_265) >> 2;
    temp_267 = temp_266 >> 2;
    temp_268 = int(temp_266) & 3;
    temp_269 = vp_c8.data[int(temp_267)][temp_268];
    temp_270 = int(temp_266) + 1;
    temp_271 = uint(temp_270) >> 2;
    temp_272 = temp_270 & 3;
    temp_273 = vp_c8.data[int(temp_271)][temp_272];
    // 0x000470: 0x59A0210002871B42 Ffma
    temp_274 = fma(temp_73, temp_148, temp_179);
    // 0x000478: 0x59A0208002671B41 Ffma
    temp_275 = fma(temp_73, temp_156, temp_230);
    // 0x000488: 0xEF9500800087291A Ldc
    temp_276 = temp_13 + 8;
    temp_277 = uint(temp_276) >> 2;
    temp_278 = temp_277 >> 2;
    temp_279 = int(temp_277) & 3;
    temp_280 = vp_c8.data[int(temp_278)][temp_279];
    temp_281 = int(temp_277) + 1;
    temp_282 = uint(temp_281) >> 2;
    temp_283 = temp_281 & 3;
    temp_284 = vp_c8.data[int(temp_282)][temp_283];
    // 0x000490: 0x59A0230002871D46 Ffma
    temp_285 = fma(temp_117, temp_148, temp_185);
    // 0x000498: 0x59A00F8002671D45 Ffma
    temp_286 = fma(temp_117, temp_156, temp_240);
    // 0x0004A8: 0x59A0238002A71D47 Ffma
    temp_287 = fma(temp_117, temp_149, temp_241);
    // 0x0004B0: 0xEF9500800187291C Ldc
    temp_288 = temp_13 + 24;
    temp_289 = uint(temp_288) >> 2;
    temp_290 = temp_289 >> 2;
    temp_291 = int(temp_289) & 3;
    temp_292 = vp_c8.data[int(temp_290)][temp_291];
    temp_293 = int(temp_289) + 1;
    temp_294 = uint(temp_293) >> 2;
    temp_295 = temp_293 & 3;
    temp_296 = vp_c8.data[int(temp_294)][temp_295];
    // 0x0004B8: 0x59A00F000287174A Ffma
    temp_297 = fma(temp_82, temp_148, temp_186);
    // 0x0004C8: 0xEF9500800287291E Ldc
    temp_298 = temp_13 + 40;
    temp_299 = uint(temp_298) >> 2;
    temp_300 = temp_299 >> 2;
    temp_301 = int(temp_299) & 3;
    temp_302 = vp_c8.data[int(temp_300)][temp_301];
    temp_303 = int(temp_299) + 1;
    temp_304 = uint(temp_303) >> 2;
    temp_305 = temp_303 & 3;
    temp_306 = vp_c8.data[int(temp_304)][temp_305];
    // 0x0004D0: 0x59A01A8002671735 Ffma
    temp_307 = fma(temp_82, temp_156, temp_242);
    // 0x0004D8: 0x59A01C8002A71739 Ffma
    temp_308 = fma(temp_82, temp_149, temp_243);
    // 0x0004E8: 0xEF95008000872716 Ldc
    temp_309 = temp_52 + 8;
    temp_310 = uint(temp_309) >> 2;
    temp_311 = temp_310 >> 2;
    temp_312 = int(temp_310) & 3;
    temp_313 = vp_c8.data[int(temp_311)][temp_312];
    temp_314 = int(temp_310) + 1;
    temp_315 = uint(temp_314) >> 2;
    temp_316 = temp_314 & 3;
    temp_317 = vp_c8.data[int(temp_315)][temp_316];
    // 0x0004F0: 0x59A017000287092E Ffma
    temp_318 = fma(temp_25, temp_148, temp_161);
    // 0x0004F8: 0x59A015800267092B Ffma
    temp_319 = fma(temp_25, temp_156, temp_171);
    // 0x000508: 0x59A0160002A7094E Ffma
    temp_320 = fma(temp_25, temp_149, temp_172);
    // 0x000510: 0x59A003000287034C Ffma
    temp_321 = fma(temp_91, temp_148, temp_180);
    // 0x000518: 0x59A0180002670330 Ffma
    temp_322 = fma(temp_91, temp_156, temp_181);
    // 0x000528: 0x59A01A0002A70334 Ffma
    temp_323 = fma(temp_91, temp_149, temp_182);
    // 0x000530: 0x59A0010002870103 Ffma
    temp_324 = fma(temp_126, temp_148, temp_188);
    // 0x000538: 0xEFD87F800C47FF02 Ald
    temp_325 = in_attr4.y;
    // 0x000548: 0x59A0198002670133 Ffma
    temp_326 = fma(temp_126, temp_156, temp_244);
    // 0x000550: 0x59A0000002A70100 Ffma
    temp_327 = fma(temp_126, temp_149, temp_245);
    // 0x000558: 0x59A01B8004970A01 Ffma
    temp_328 = fma(temp_166, temp_150, temp_252);
    // 0x000568: 0x59A01D0004970C3A Ffma
    temp_329 = fma(temp_194, temp_150, temp_201);
    // 0x000570: 0x4C68101406974409 Fmul
    temp_330 = temp_251 * vp_c5.data[26].y;
    // 0x000578: 0x59A01F0004D70C3E Ffma
    temp_331 = fma(temp_194, temp_152, temp_203);
    // 0x000588: 0x59A01E0004D70A3C Ffma
    temp_332 = fma(temp_166, temp_152, temp_253);
    // 0x000590: 0x59A0040002670708 Ffma
    temp_333 = fma(temp_36, temp_156, temp_174);
    // 0x000598: 0x59A0190002870532 Ffma
    temp_334 = fma(temp_135, temp_148, temp_189);
    // 0x0005A8: 0x59A017800267052F Ffma
    temp_335 = fma(temp_135, temp_156, temp_246);
    // 0x0005B0: 0x59A01B0000970C36 Ffma
    temp_336 = fma(temp_194, temp_330, temp_202);
    // 0x0005B8: 0xEFD87F800C07FF0C Ald
    temp_337 = in_attr4.x;
    // 0x0005C8: 0x59A0020000970A04 Ffma
    temp_338 = fma(temp_166, temp_330, temp_249);
    // 0x0005D0: 0x59A01D8002A7053B Ffma
    temp_339 = fma(temp_135, temp_149, temp_247);
    // 0x0005D8: 0xEFD87F800C87FF05 Ald
    temp_340 = in_attr4.z;
    // 0x0005E8: 0x5C58100000170B01 Fadd
    temp_341 = temp_170 + temp_328;
    // 0x0005F0: 0x59A001800497120A Ffma
    temp_342 = fma(temp_225, temp_150, temp_324);
    // 0x0005F8: 0x59A0198000971233 Ffma
    temp_343 = fma(temp_225, temp_330, temp_326);
    // 0x000608: 0x59A0000004D71212 Ffma
    temp_344 = fma(temp_225, temp_152, temp_327);
    // 0x000610: 0x4CB0119002371A00 F2i
    temp_345 = trunc(vp_c4.data[8].w);
    temp_346 = int(temp_345);
    // 0x000618: 0x59A016800287072C Ffma
    temp_347 = fma(temp_36, temp_148, temp_173);
    // 0x000628: 0x59A0188002A70707 Ffma
    temp_348 = fma(temp_36, temp_149, temp_175);
    // 0x000630: 0x59A01E8004970E3D Ffma
    temp_349 = fma(temp_143, temp_150, temp_248);
    // 0x000638: 0x59A01F8000970E3F Ffma
    temp_350 = fma(temp_143, temp_330, temp_263);
    // 0x000648: 0x59A0228000971445 Ffma
    temp_351 = fma(temp_208, temp_330, temp_286);
    // 0x000650: 0x59A017800097202F Ffma
    temp_352 = fma(temp_235, temp_330, temp_335);
    // 0x000658: 0x5C58100003A70D0D Fadd
    temp_353 = temp_198 + temp_329;
    // 0x000668: 0x5C68100000270106 Fmul
    temp_354 = temp_341 * temp_325;
    // 0x000670: 0x59A0230004971446 Ffma
    temp_355 = fma(temp_208, temp_150, temp_285);
    // 0x000678: 0x59A0200004D70E40 Ffma
    temp_356 = fma(temp_143, temp_152, temp_264);
    // 0x000688: 0x5C58100000A7130E Fadd
    temp_357 = temp_229 + temp_342;
    // 0x000690: 0x59A0208000971041 Ffma
    temp_358 = fma(temp_258, temp_330, temp_275);
    // 0x000698: 0x59A0210004971042 Ffma
    temp_359 = fma(temp_258, temp_150, temp_274);
    // 0x0006A8: 0x59A01A8000971835 Ffma
    temp_360 = fma(temp_269, temp_330, temp_307);
    // 0x0006B0: 0x5C58100003D70F0F Fadd
    temp_361 = temp_147 + temp_349;
    // 0x0006B8: 0x59A0258000971A4B Ffma
    temp_362 = fma(temp_280, temp_330, temp_220);
    // 0x0006C8: 0x59A0030000C70D0A Ffma
    temp_363 = fma(temp_353, temp_337, temp_354);
    // 0x0006D0: 0x384800000047000B Shl
    temp_364 = temp_346 << 4;
    // 0x0006D8: 0x59A0158000971C2B Ffma
    temp_365 = fma(temp_292, temp_330, temp_319);
    // 0x0006E8: 0xEF95007068070B00 Ldc
    temp_366 = temp_364 + 0x680;
    temp_367 = uint(temp_366) >> 2;
    temp_368 = temp_367 >> 2;
    temp_369 = int(temp_367) & 3;
    temp_370 = vp_c7.data[int(temp_368)][temp_369];
    temp_371 = int(temp_367) + 1;
    temp_372 = uint(temp_371) >> 2;
    temp_373 = temp_371 & 3;
    temp_374 = vp_c7.data[int(temp_372)][temp_373];
    // 0x0006F0: 0x59A0040000971E08 Ffma
    temp_375 = fma(temp_302, temp_330, temp_333);
    // 0x0006F8: 0xEF94007048870B0D Ldc
    temp_376 = temp_364 + 0x488;
    temp_377 = uint(temp_376) >> 2;
    temp_378 = temp_377 >> 2;
    temp_379 = int(temp_377) & 3;
    temp_380 = vp_c7.data[int(temp_378)][temp_379];
    // 0x000708: 0x59A0180000971630 Ffma
    temp_381 = fma(temp_313, temp_330, temp_322);
    // 0x000710: 0xEFD87F800CC7FF09 Ald
    temp_382 = in_attr4.w;
    // 0x000718: 0x59A0160004971E2C Ffma
    temp_383 = fma(temp_302, temp_150, temp_347);
    // 0x000728: 0x59A0170004971C2E Ffma
    temp_384 = fma(temp_292, temp_150, temp_318);
    // 0x000730: 0x59A0038004D71E1E Ffma
    temp_385 = fma(temp_302, temp_152, temp_348);
    // 0x000738: 0xEF95007048070B06 Ldc
    temp_386 = temp_364 + 0x480;
    temp_387 = uint(temp_386) >> 2;
    temp_388 = temp_387 >> 2;
    temp_389 = int(temp_387) & 3;
    temp_390 = vp_c7.data[int(temp_388)][temp_389];
    temp_391 = int(temp_387) + 1;
    temp_392 = uint(temp_391) >> 2;
    temp_393 = temp_391 & 3;
    temp_394 = vp_c7.data[int(temp_392)][temp_393];
    // 0x000748: 0x59A0238004D71447 Ffma
    temp_395 = fma(temp_208, temp_152, temp_287);
    // 0x000750: 0xEFD87F801407FF14 Ald
    temp_396 = in_attr12.x;
    // 0x000758: 0x59A0240004971A48 Ffma
    temp_397 = fma(temp_280, temp_150, temp_213);
    // 0x000768: 0x59A025000497184A Ffma
    temp_398 = fma(temp_269, temp_150, temp_297);
    // 0x000770: 0x5C58100004671515 Fadd
    temp_399 = temp_212 + temp_355;
    // 0x000778: 0x59A01C0004D71A38 Ffma
    temp_400 = fma(temp_280, temp_152, temp_215);
    // 0x000788: 0x59A026000497164C Ffma
    temp_401 = fma(temp_313, temp_150, temp_321);
    // 0x000790: 0x59A01A0004D71634 Ffma
    temp_402 = fma(temp_313, temp_152, temp_323);
    // 0x000798: 0x5C58100004271111 Fadd
    temp_403 = temp_262 + temp_359;
    // 0x0007A8: 0x5C58100002E71D2E Fadd
    temp_404 = temp_296 + temp_384;
    // 0x0007B0: 0x5C68100000270F0F Fmul
    temp_405 = temp_361 * temp_325;
    // 0x0007B8: 0x5C58100004871B1B Fadd
    temp_406 = temp_284 + temp_397;
    // 0x0007C8: 0x5C68100000270413 Fmul
    temp_407 = temp_338 * temp_325;
    // 0x0007D0: 0xEF94007068870B04 Ldc
    temp_408 = temp_364 + 0x688;
    temp_409 = uint(temp_408) >> 2;
    temp_410 = temp_409 >> 2;
    temp_411 = int(temp_409) & 3;
    temp_412 = vp_c7.data[int(temp_410)][temp_411];
    // 0x0007D8: 0x5C68100000273C1D Fmul
    temp_413 = temp_332 * temp_325;
    // 0x0007E8: 0x5C68100000273F3F Fmul
    temp_414 = temp_350 * temp_325;
    // 0x0007F0: 0x5C6810000027401A Fmul
    temp_415 = temp_356 * temp_325;
    // 0x0007F8: 0x5C68100000274516 Fmul
    temp_416 = temp_351 * temp_325;
    // 0x000808: 0x5C68100000274747 Fmul
    temp_417 = temp_395 * temp_325;
    // 0x000810: 0x5C58100004A71919 Fadd
    temp_418 = temp_273 + temp_398;
    // 0x000818: 0x5C68100000271502 Fmul
    temp_419 = temp_399 * temp_325;
    // 0x000828: 0x59A0078000C7110F Ffma
    temp_420 = fma(temp_403, temp_337, temp_405);
    // 0x000830: 0xEFD87F801447FF11 Ald
    temp_421 = in_attr12.y;
    // 0x000838: 0x5C58100004C71717 Fadd
    temp_422 = temp_317 + temp_401;
    // 0x000848: 0x59A0050000571B0A Ffma
    temp_423 = fma(temp_406, temp_340, temp_363);
    // 0x000850: 0x59A0190004972003 Ffma
    temp_424 = fma(temp_235, temp_150, temp_334);
    // 0x000858: 0x5C58100002C71F1F Fadd
    temp_425 = temp_306 + temp_383;
    // 0x000868: 0x59A0010000C71902 Ffma
    temp_426 = fma(temp_418, temp_337, temp_419);
    // 0x000870: 0x59A0078000572E0F Ffma
    temp_427 = fma(temp_404, temp_340, temp_420);
    // 0x000878: 0x59A0218004D71043 Ffma
    temp_428 = fma(temp_258, temp_152, temp_250);
    // 0x000888: 0x59A0050000971717 Ffma
    temp_429 = fma(temp_422, temp_382, temp_423);
    // 0x000890: 0x5C58100000372103 Fadd
    temp_430 = temp_239 + temp_424;
    // 0x000898: 0x59A01C8004D71839 Ffma
    temp_431 = fma(temp_269, temp_152, temp_308);
    // 0x0008A8: 0x59A0010000571F02 Ffma
    temp_432 = fma(temp_425, temp_340, temp_426);
    // 0x0008B0: 0x59A0078000970E0E Ffma
    temp_433 = fma(temp_357, temp_382, temp_427);
    // 0x0008B8: 0x59A0098000C73636 Ffma
    temp_434 = fma(temp_336, temp_337, temp_407);
    // 0x0008C8: 0x59A0000000671706 Ffma
    temp_435 = fma(temp_429, temp_390, temp_370);
    // 0x0008D0: 0xEFD87F800AC7FF00 Ald
    temp_436 = in_attr2.w;
    // 0x0008D8: 0x59A00E8000C73E3E Ffma
    temp_437 = fma(temp_331, temp_337, temp_413);
    // 0x0008E8: 0xEFF07F800E07FF06 Ast
    out_attr6.x = temp_435;
    // 0x0008F0: 0x59A0010000970302 Ffma
    temp_438 = fma(temp_430, temp_382, temp_432);
    // 0x0008F8: 0xEFF07F800B07FF14 Ast
    out_attr3.x = temp_396;
    // 0x000908: 0x59A0008000770E01 Ffma
    temp_439 = fma(temp_433, temp_394, temp_374);
    // 0x000910: 0xEFF07F800B47FF11 Ast
    out_attr3.y = temp_421;
    // 0x000918: 0x4C5830180B070607 Fadd
    temp_440 = 0.0 - vp_c6.data[44].x;
    temp_441 = temp_435 + temp_440;
    // 0x000928: 0xEFF07F800E47FF01 Ast
    out_attr6.y = temp_439;
    // 0x000930: 0x59A0020000D70202 Ffma
    temp_442 = fma(temp_438, temp_380, temp_412);
    // 0x000938: 0xEFF07F800F87FF25 Ast
    out_attr7.z = temp_157;
    // 0x000948: 0x59A0270004D71C4E Ffma
    temp_443 = fma(temp_292, temp_152, temp_320);
    // 0x000950: 0xEFF07F800E87FF02 Ast
    out_attr6.z = temp_442;
    // 0x000958: 0x59A01F8000C74110 Ffma
    temp_444 = fma(temp_358, temp_337, temp_414);
    // 0x000968: 0xEFF07F800FC7FF23 Ast
    out_attr7.w = temp_158;
    // 0x000970: 0x59A00D0000C74343 Ffma
    temp_445 = fma(temp_428, temp_337, temp_415);
    // 0x000978: 0xEFF07F800F07FF24 Ast
    out_attr7.x = temp_159;
    // 0x000988: 0x59A00B0000C73516 Ffma
    temp_446 = fma(temp_360, temp_337, temp_416);
    // 0x000990: 0xEFF07F800F47FF22 Ast
    out_attr7.y = temp_160;
    // 0x000998: 0x59A0238000C73947 Ffma
    temp_447 = fma(temp_431, temp_337, temp_417);
    // 0x0009A8: 0x4C5830180B170103 Fadd
    temp_448 = 0.0 - vp_c6.data[44].y;
    temp_449 = temp_439 + temp_448;
    // 0x0009B0: 0x4C6810180387070A Fmul
    temp_450 = temp_441 * vp_c6.data[14].x;
    // 0x0009B8: 0x4C5810180BA7020B Fadd
    temp_451 = temp_442 + vp_c6.data[46].z;
    // 0x0009C8: 0x59A01B0000574B36 Ffma
    temp_452 = fma(temp_362, temp_340, temp_434);
    // 0x0009D0: 0x59A01F000057383E Ffma
    temp_453 = fma(temp_400, temp_340, temp_437);
    // 0x0009D8: 0x59A01D8004D7203B Ffma
    temp_454 = fma(temp_235, temp_152, temp_339);
    // 0x0009E8: 0x59A0080000572B10 Ffma
    temp_455 = fma(temp_365, temp_340, temp_444);
    // 0x0009F0: 0x59A0218000574E43 Ffma
    temp_456 = fma(temp_443, temp_340, temp_445);
    // 0x0009F8: 0x59A00B0000570808 Ffma
    temp_457 = fma(temp_375, temp_340, temp_446);
    // 0x000A08: 0x59A0238000571E1E Ffma
    temp_458 = fma(temp_385, temp_340, temp_447);
    // 0x000A10: 0x49A005180397030A Ffma
    temp_459 = fma(temp_449, vp_c6.data[14].y, temp_450);
    // 0x000A18: 0x4C5830180B270204 Fadd
    temp_460 = 0.0 - vp_c6.data[44].z;
    temp_461 = temp_442 + temp_460;
    // 0x000A28: 0x4C5810180B97010D Fadd
    temp_462 = temp_439 + vp_c6.data[46].y;
    // 0x000A30: 0x4C6810180C270B03 Fmul
    temp_463 = temp_451 * vp_c6.data[48].z;
    // 0x000A38: 0x59A01B0000973030 Ffma
    temp_464 = fma(temp_381, temp_382, temp_452);
    // 0x000A48: 0x59A01F0000973434 Ffma
    temp_465 = fma(temp_402, temp_382, temp_453);
    // 0x000A50: 0x59A0080000973310 Ffma
    temp_466 = fma(temp_343, temp_382, temp_455);
    // 0x000A58: 0x59A0040000972F2F Ffma
    temp_467 = fma(temp_352, temp_382, temp_457);
    // 0x000A68: 0x59A0218000971212 Ffma
    temp_468 = fma(temp_344, temp_382, temp_456);
    // 0x000A70: 0x59A00F0000973B1E Ffma
    temp_469 = fma(temp_454, temp_382, temp_458);
    // 0x000A78: 0x49A0051803A70404 Ffma
    temp_470 = fma(temp_461, vp_c6.data[14].z, temp_459);
    // 0x000A88: 0x4C98079803C70007 Mov
    // 0x000A90: 0x49A001980C170D09 Ffma
    temp_471 = fma(temp_462, vp_c6.data[48].y, temp_463);
    // 0x000A98: 0x4C5810180B87060C Fadd
    temp_472 = temp_435 + vp_c6.data[46].x;
    // 0x000AA8: 0x5C68100003073003 Fmul
    temp_473 = temp_464 * temp_464;
    // 0x000AB0: 0x5C68100003473405 Fmul
    temp_474 = temp_465 * temp_465;
    // 0x000AB8: 0x4C58300C02F7060A Fadd
    temp_475 = 0.0 - vp_c3.data[11].w;
    temp_476 = temp_435 + temp_475;
    // 0x000AC8: 0x51A0039803B70408 Ffma
    temp_477 = fma(temp_470, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000AD0: 0xEFF07F800C07FF0A Ast
    out_attr4.x = temp_476;
    // 0x000AD8: 0x49A004980C070C09 Ffma
    temp_478 = fma(temp_472, vp_c6.data[48].x, temp_471);
    // 0x000AE8: 0xEFF07F801147FF08 Ast
    out_attr9.y = temp_477;
    // 0x000AF0: 0x59A0018001071004 Ffma
    temp_479 = fma(temp_466, temp_466, temp_473);
    // 0x000AF8: 0x59A0028001271203 Ffma
    temp_480 = fma(temp_468, temp_468, temp_474);
    // 0x000B08: 0x4C6810180C670B07 Fmul
    temp_481 = temp_451 * vp_c6.data[49].z;
    // 0x000B10: 0x4C58300C03370111 Fadd
    temp_482 = 0.0 - vp_c3.data[12].w;
    temp_483 = temp_439 + temp_482;
    // 0x000B18: 0x4C58300C03770213 Fadd
    temp_484 = 0.0 - vp_c3.data[13].w;
    temp_485 = temp_442 + temp_484;
    // 0x000B28: 0xEFF07F800C47FF11 Ast
    out_attr4.y = temp_483;
    // 0x000B30: 0x4C6810180BB7090F Fmul
    temp_486 = temp_478 * vp_c6.data[46].w;
    // 0x000B38: 0xEFF07F800C87FF13 Ast
    out_attr4.z = temp_485;
    // 0x000B48: 0x59A0018001E71E09 Ffma
    temp_487 = fma(temp_469, temp_469, temp_480);
    // 0x000B50: 0xEFF07F801207FF0F Ast
    out_attr10.x = temp_486;
    // 0x000B58: 0x49A003980C570D0E Ffma
    temp_488 = fma(temp_462, vp_c6.data[49].y, temp_481);
    // 0x000B68: 0x5080000000570909 Mufu
    temp_489 = inversesqrt(temp_487);
    // 0x000B70: 0x59A0020002F72F05 Ffma
    temp_490 = fma(temp_467, temp_467, temp_479);
    // 0x000B78: 0x4C68100C00070607 Fmul
    temp_491 = temp_435 * vp_c3.data[0].x;
    // 0x000B88: 0x508000000057050A Mufu
    temp_492 = inversesqrt(temp_490);
    // 0x000B90: 0x4C68100C00870603 Fmul
    temp_493 = temp_435 * vp_c3.data[2].x;
    // 0x000B98: 0x4C68100C00470608 Fmul
    temp_494 = temp_435 * vp_c3.data[1].x;
    // 0x000BA8: 0x49A007180C470C0E Ffma
    temp_495 = fma(temp_472, vp_c6.data[49].x, temp_488);
    // 0x000BB0: 0x49A0018C00970104 Ffma
    temp_496 = fma(temp_439, vp_c3.data[2].y, temp_493);
    // 0x000BB8: 0x49A0038C00170105 Ffma
    temp_497 = fma(temp_439, vp_c3.data[0].y, temp_491);
    // 0x000BC8: 0x4C6810180BB70E11 Fmul
    temp_498 = temp_495 * vp_c6.data[46].w;
    // 0x000BD0: 0x4C6810180CA70B0E Fmul
    temp_499 = temp_451 * vp_c6.data[50].z;
    // 0x000BD8: 0xEFF07F801247FF11 Ast
    out_attr10.y = temp_498;
    // 0x000BE8: 0x4C58101002070203 Fadd
    temp_500 = temp_442 + vp_c4.data[8].x;
    // 0x000BF0: 0x5C68100000973407 Fmul
    temp_501 = temp_465 * temp_489;
    // 0x000BF8: 0x5C6810000097120B Fmul
    temp_502 = temp_468 * temp_489;
    // 0x000C08: 0xEFF07F800807FF07 Ast
    out_attr0.x = temp_501;
    // 0x000C10: 0x5C68100000A71010 Fmul
    temp_503 = temp_466 * temp_492;
    // 0x000C18: 0xEFF07F800847FF0B Ast
    out_attr0.y = temp_502;
    // 0x000C28: 0x5C68100000971E09 Fmul
    temp_504 = temp_469 * temp_489;
    // 0x000C30: 0xEFF07F800947FF10 Ast
    out_attr1.y = temp_503;
    // 0x000C38: 0x49A0040C00570108 Ffma
    temp_505 = fma(temp_439, vp_c3.data[1].y, temp_494);
    // 0x000C48: 0xEFF07F800887FF09 Ast
    out_attr0.z = temp_504;
    // 0x000C50: 0x49A0028C00270206 Ffma
    temp_506 = fma(temp_442, vp_c3.data[0].z, temp_497);
    // 0x000C58: 0x5C68100000A73030 Fmul
    temp_507 = temp_464 * temp_492;
    // 0x000C68: 0x49A0020C00A70301 Ffma
    temp_508 = fma(temp_500, vp_c3.data[2].z, temp_496);
    // 0x000C70: 0xEFF07F800907FF30 Ast
    out_attr1.x = temp_507;
    // 0x000C78: 0x49A0020C00A7020F Ffma
    temp_509 = fma(temp_442, vp_c3.data[2].z, temp_496);
    // 0x000C88: 0x5C68100000A72F0A Fmul
    temp_510 = temp_467 * temp_492;
    // 0x000C90: 0x5C68100000971004 Fmul
    temp_511 = temp_503 * temp_504;
    // 0x000C98: 0xEFF07F800987FF0A Ast
    out_attr1.z = temp_510;
    // 0x000CA8: 0x49A0040C00670211 Ffma
    temp_512 = fma(temp_442, vp_c3.data[1].z, temp_505);
    // 0x000CB0: 0x4C58100C00370606 Fadd
    temp_513 = temp_506 + vp_c3.data[0].w;
    // 0x000CB8: 0x49A007180C970D0E Ffma
    temp_514 = fma(temp_462, vp_c6.data[50].y, temp_499);
    // 0x000CC8: 0x49A0028C00270305 Ffma
    temp_515 = fma(temp_500, vp_c3.data[0].z, temp_497);
    // 0x000CD0: 0x5C68100000770A02 Fmul
    temp_516 = temp_510 * temp_501;
    // 0x000CD8: 0x59A2020000B70A0D Ffma
    temp_517 = 0.0 - temp_511;
    temp_518 = fma(temp_510, temp_502, temp_517);
    // 0x000CE8: 0x4C58100C00771111 Fadd
    temp_519 = temp_512 + vp_c3.data[1].w;
    // 0x000CF0: 0x4C68101802C70604 Fmul
    temp_520 = temp_513 * vp_c6.data[11].x;
    // 0x000CF8: 0x5C68100000B73006 Fmul
    temp_521 = temp_507 * temp_502;
    // 0x000D08: 0x4C58100C00B70F0F Fadd
    temp_522 = temp_509 + vp_c3.data[2].w;
    // 0x000D10: 0x49A0040C00670303 Ffma
    temp_523 = fma(temp_500, vp_c3.data[1].z, temp_505);
    // 0x000D18: 0xEFF07F800D87FF0F Ast
    out_attr5.z = temp_522;
    // 0x000D28: 0x49A0021802D71104 Ffma
    temp_524 = fma(temp_519, vp_c6.data[11].y, temp_520);
    // 0x000D30: 0x4C58100C00370505 Fadd
    temp_525 = temp_515 + vp_c3.data[0].w;
    // 0x000D38: 0x59A201000097300A Ffma
    temp_526 = 0.0 - temp_516;
    temp_527 = fma(temp_507, temp_504, temp_526);
    // 0x000D48: 0x59A2030000771007 Ffma
    temp_528 = 0.0 - temp_521;
    temp_529 = fma(temp_503, temp_501, temp_528);
    // 0x000D50: 0x4C58100C00B70101 Fadd
    temp_530 = temp_508 + vp_c3.data[2].w;
    // 0x000D58: 0x4C58100C00770303 Fadd
    temp_531 = temp_523 + vp_c3.data[1].w;
    // 0x000D68: 0x49A0021802E70F08 Ffma
    temp_532 = fma(temp_522, vp_c6.data[11].z, temp_524);
    // 0x000D70: 0x4C68100C02870502 Fmul
    temp_533 = temp_525 * vp_c3.data[10].x;
    // 0x000D78: 0x4C68100C02470504 Fmul
    temp_534 = temp_525 * vp_c3.data[9].x;
    // 0x000D88: 0x4C68100C02070506 Fmul
    temp_535 = temp_525 * vp_c3.data[8].x;
    // 0x000D90: 0x4C68100C01C70505 Fmul
    temp_536 = temp_525 * vp_c3.data[7].x;
    // 0x000D98: 0x49A007180C870C0E Ffma
    temp_537 = fma(temp_472, vp_c6.data[50].x, temp_514);
    // 0x000DA8: 0x4C98079803070009 Mov
    // 0x000DB0: 0x49A0010C02970302 Ffma
    temp_538 = fma(temp_531, vp_c3.data[10].y, temp_533);
    // 0x000DB8: 0x49A0020C02570304 Ffma
    temp_539 = fma(temp_531, vp_c3.data[9].y, temp_534);
    // 0x000DC8: 0x49A0030C02170306 Ffma
    temp_540 = fma(temp_531, vp_c3.data[8].y, temp_535);
    // 0x000DD0: 0x49A0028C01D70303 Ffma
    temp_541 = fma(temp_531, vp_c3.data[7].y, temp_536);
    // 0x000DD8: 0x4C6810180BB70E0E Fmul
    temp_542 = temp_537 * vp_c6.data[46].w;
    // 0x000DE8: 0x5C68100000070D0D Fmul
    temp_543 = temp_518 * temp_436;
    // 0x000DF0: 0xEFF07F801287FF0E Ast
    out_attr10.z = temp_542;
    // 0x000DF8: 0x49A0010C02A70102 Ffma
    temp_544 = fma(temp_530, vp_c3.data[10].z, temp_538);
    // 0x000E08: 0xEFF07F800A07FF0D Ast
    out_attr2.x = temp_543;
    // 0x000E10: 0x49A0020C02670104 Ffma
    temp_545 = fma(temp_530, vp_c3.data[9].z, temp_539);
    // 0x000E18: 0x49A0030C02270106 Ffma
    temp_546 = fma(temp_530, vp_c3.data[8].z, temp_540);
    // 0x000E28: 0x49A0018C01E70103 Ffma
    temp_547 = fma(temp_530, vp_c3.data[7].z, temp_541);
    // 0x000E30: 0x5C68100000070A0A Fmul
    temp_548 = temp_527 * temp_436;
    // 0x000E38: 0x5C68100000070707 Fmul
    temp_549 = temp_529 * temp_436;
    // 0x000E48: 0xEFF07F800A47FF0A Ast
    out_attr2.y = temp_548;
    // 0x000E50: 0x51A0049802F70808 Ffma
    temp_550 = fma(temp_532, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000E58: 0xEFF07F800A87FF07 Ast
    out_attr2.z = temp_549;
    // 0x000E68: 0x4C58100C02B70202 Fadd
    temp_551 = temp_544 + vp_c3.data[10].w;
    // 0x000E70: 0xEFF07F801107FF08 Ast
    out_attr9.x = temp_550;
    // 0x000E78: 0x4C58100C02770404 Fadd
    temp_552 = temp_545 + vp_c3.data[9].w;
    // 0x000E88: 0xEFF07F8007C7FF02 Ast
    gl_Position.w = temp_551;
    // 0x000E90: 0x4C58100C02370606 Fadd
    temp_553 = temp_546 + vp_c3.data[8].w;
    // 0x000E98: 0xEFF07F800787FF04 Ast
    gl_Position.z = temp_552;
    // 0x000EA8: 0x4C58100C01F70303 Fadd
    temp_554 = temp_547 + vp_c3.data[7].w;
    // 0x000EB0: 0xEFF07F800747FF06 Ast
    gl_Position.y = temp_553;
    // 0x000EB8: 0xEFF07F800707FF03 Ast
    gl_Position.x = temp_554;
    // 0x000EC8: 0xE30000000007000F Exit
    return;
}
