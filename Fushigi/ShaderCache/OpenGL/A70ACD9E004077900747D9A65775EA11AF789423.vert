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
    precise float temp_19;
    int temp_20;
    int temp_21;
    int temp_22;
    uint temp_23;
    uint temp_24;
    int temp_25;
    precise float temp_26;
    int temp_27;
    uint temp_28;
    int temp_29;
    precise float temp_30;
    uint temp_31;
    int temp_32;
    int temp_33;
    int temp_34;
    int temp_35;
    uint temp_36;
    uint temp_37;
    int temp_38;
    precise float temp_39;
    int temp_40;
    uint temp_41;
    int temp_42;
    precise float temp_43;
    uint temp_44;
    int temp_45;
    int temp_46;
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
    precise float temp_61;
    int temp_62;
    uint temp_63;
    uint temp_64;
    int temp_65;
    precise float temp_66;
    int temp_67;
    uint temp_68;
    int temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    uint temp_75;
    uint temp_76;
    int temp_77;
    precise float temp_78;
    int temp_79;
    uint temp_80;
    int temp_81;
    precise float temp_82;
    precise float temp_83;
    int temp_84;
    uint temp_85;
    uint temp_86;
    int temp_87;
    precise float temp_88;
    int temp_89;
    uint temp_90;
    int temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    int temp_95;
    uint temp_96;
    uint temp_97;
    int temp_98;
    precise float temp_99;
    int temp_100;
    uint temp_101;
    int temp_102;
    precise float temp_103;
    int temp_104;
    uint temp_105;
    uint temp_106;
    int temp_107;
    precise float temp_108;
    int temp_109;
    uint temp_110;
    int temp_111;
    precise float temp_112;
    int temp_113;
    uint temp_114;
    uint temp_115;
    int temp_116;
    precise float temp_117;
    int temp_118;
    uint temp_119;
    int temp_120;
    precise float temp_121;
    int temp_122;
    uint temp_123;
    uint temp_124;
    int temp_125;
    precise float temp_126;
    int temp_127;
    uint temp_128;
    int temp_129;
    precise float temp_130;
    uint temp_131;
    uint temp_132;
    int temp_133;
    precise float temp_134;
    int temp_135;
    uint temp_136;
    int temp_137;
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
    int temp_155;
    uint temp_156;
    uint temp_157;
    int temp_158;
    precise float temp_159;
    int temp_160;
    uint temp_161;
    int temp_162;
    precise float temp_163;
    precise float temp_164;
    int temp_165;
    uint temp_166;
    uint temp_167;
    int temp_168;
    precise float temp_169;
    int temp_170;
    uint temp_171;
    int temp_172;
    precise float temp_173;
    precise float temp_174;
    int temp_175;
    uint temp_176;
    uint temp_177;
    int temp_178;
    precise float temp_179;
    int temp_180;
    uint temp_181;
    int temp_182;
    precise float temp_183;
    precise float temp_184;
    int temp_185;
    uint temp_186;
    uint temp_187;
    int temp_188;
    precise float temp_189;
    int temp_190;
    uint temp_191;
    int temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    int temp_197;
    uint temp_198;
    uint temp_199;
    int temp_200;
    precise float temp_201;
    int temp_202;
    uint temp_203;
    int temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    int temp_226;
    uint temp_227;
    uint temp_228;
    int temp_229;
    precise float temp_230;
    int temp_231;
    uint temp_232;
    int temp_233;
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
    int temp_250;
    uint temp_251;
    uint temp_252;
    int temp_253;
    precise float temp_254;
    int temp_255;
    uint temp_256;
    int temp_257;
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
    int temp_268;
    uint temp_269;
    uint temp_270;
    int temp_271;
    precise float temp_272;
    int temp_273;
    uint temp_274;
    int temp_275;
    precise float temp_276;
    precise float temp_277;
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
    precise float temp_291;
    int temp_292;
    uint temp_293;
    uint temp_294;
    int temp_295;
    precise float temp_296;
    int temp_297;
    uint temp_298;
    int temp_299;
    precise float temp_300;
    precise float temp_301;
    int temp_302;
    uint temp_303;
    uint temp_304;
    int temp_305;
    precise float temp_306;
    int temp_307;
    uint temp_308;
    int temp_309;
    precise float temp_310;
    precise float temp_311;
    int temp_312;
    uint temp_313;
    uint temp_314;
    int temp_315;
    precise float temp_316;
    int temp_317;
    uint temp_318;
    int temp_319;
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
    int temp_368;
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
    int temp_388;
    precise float temp_389;
    int temp_390;
    uint temp_391;
    uint temp_392;
    int temp_393;
    precise float temp_394;
    precise float temp_395;
    int temp_396;
    uint temp_397;
    uint temp_398;
    int temp_399;
    precise float temp_400;
    int temp_401;
    uint temp_402;
    int temp_403;
    precise float temp_404;
    precise float temp_405;
    precise float temp_406;
    int temp_407;
    uint temp_408;
    uint temp_409;
    int temp_410;
    precise float temp_411;
    precise float temp_412;
    precise float temp_413;
    int temp_414;
    uint temp_415;
    uint temp_416;
    int temp_417;
    precise float temp_418;
    int temp_419;
    uint temp_420;
    int temp_421;
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
    precise float temp_555;
    precise float temp_556;
    precise float temp_557;
    precise float temp_558;
    precise float temp_559;
    precise float temp_560;
    precise float temp_561;
    precise float temp_562;
    precise float temp_563;
    precise float temp_564;
    precise float temp_565;
    precise float temp_566;
    precise float temp_567;
    precise float temp_568;
    precise float temp_569;
    precise float temp_570;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x010000000207F007 Mov32i
    // 0x000010: 0xEFD87F800E87FF03 Ald
    temp_0 = in_attr6.z;
    // 0x000018: 0x4C98079400270009 Mov
    // 0x000028: 0xEFD87F800E47FF01 Ald
    temp_1 = in_attr6.y;
    // 0x000030: 0x4C9807940037000D Mov
    // 0x000038: 0xEFD87F800E07FF02 Ald
    temp_2 = in_attr6.x;
    // 0x000048: 0xEFD87F800EC7FF00 Ald
    temp_3 = in_attr6.w;
    // 0x000050: 0xEFD87F800987FF0B Ald
    temp_4 = in_attr1.z;
    // 0x000058: 0xEFD87F800A47FF06 Ald
    temp_5 = in_attr2.y;
    // 0x000068: 0x36007F8003070330 Xmad
    temp_6 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_7 = temp_6 * 48;
    // 0x000070: 0xEFD87F800907FF13 Ald
    temp_8 = in_attr1.x;
    // 0x000078: 0x36007F8003070128 Xmad
    temp_9 = floatBitsToInt(temp_1) & 0xFFFF;
    temp_10 = temp_9 * 48;
    // 0x000088: 0xEFD87F800A87FF04 Ald
    temp_11 = in_attr2.z;
    // 0x000090: 0x3620181003070330 Xmad
    temp_12 = floatBitsToUint(temp_0) >> 16;
    temp_13 = int(temp_12) * 48;
    temp_14 = temp_13 << 16;
    temp_15 = temp_14 + temp_7;
    // 0x000098: 0xEFD87F800A07FF11 Ald
    temp_16 = in_attr2.x;
    // 0x0000A8: 0x36007F800307022C Xmad
    temp_17 = floatBitsToInt(temp_2) & 0xFFFF;
    temp_18 = temp_17 * 48;
    // 0x0000B0: 0xEFD87F800947FF03 Ald
    temp_19 = in_attr1.y;
    // 0x0000B8: 0x3600038003070007 Xmad
    temp_20 = floatBitsToInt(temp_3) & 0xFFFF;
    temp_21 = temp_20 * 48;
    temp_22 = temp_21 + 32;
    // 0x0000C8: 0xEF9500800007302E Ldc
    temp_23 = uint(temp_15) >> 2;
    temp_24 = temp_23 >> 2;
    temp_25 = int(temp_23) & 3;
    temp_26 = vp_c8.data[int(temp_24)][temp_25];
    temp_27 = int(temp_23) + 1;
    temp_28 = uint(temp_27) >> 2;
    temp_29 = temp_27 & 3;
    temp_30 = vp_c8.data[int(temp_28)][temp_29];
    // 0x0000D0: 0x3620141003070128 Xmad
    temp_31 = floatBitsToUint(temp_1) >> 16;
    temp_32 = int(temp_31) * 48;
    temp_33 = temp_32 << 16;
    temp_34 = temp_33 + temp_10;
    // 0x0000D8: 0xEF9500800107302A Ldc
    temp_35 = temp_15 + 16;
    temp_36 = uint(temp_35) >> 2;
    temp_37 = temp_36 >> 2;
    temp_38 = int(temp_36) & 3;
    temp_39 = vp_c8.data[int(temp_37)][temp_38];
    temp_40 = int(temp_36) + 1;
    temp_41 = uint(temp_40) >> 2;
    temp_42 = temp_40 & 3;
    temp_43 = vp_c8.data[int(temp_41)][temp_42];
    // 0x0000E8: 0x362016100307022C Xmad
    temp_44 = floatBitsToUint(temp_2) >> 16;
    temp_45 = int(temp_44) * 48;
    temp_46 = temp_45 << 16;
    temp_47 = temp_46 + temp_18;
    // 0x0000F0: 0xEFD87F801047FF08 Ald
    temp_48 = in_attr8.y;
    // 0x0000F8: 0x3620039003070007 Xmad
    temp_49 = floatBitsToUint(temp_3) >> 16;
    temp_50 = int(temp_49) * 48;
    temp_51 = temp_50 << 16;
    temp_52 = temp_51 + temp_22;
    // 0x000108: 0xEF9500800007283A Ldc
    temp_53 = uint(temp_34) >> 2;
    temp_54 = temp_53 >> 2;
    temp_55 = int(temp_53) & 3;
    temp_56 = vp_c8.data[int(temp_54)][temp_55];
    temp_57 = int(temp_53) + 1;
    temp_58 = uint(temp_57) >> 2;
    temp_59 = temp_57 & 3;
    temp_60 = vp_c8.data[int(temp_58)][temp_59];
    // 0x000110: 0x5C68100000670B01 Fmul
    temp_61 = temp_4 * temp_5;
    // 0x000118: 0xEF95008002073016 Ldc
    temp_62 = temp_15 + 32;
    temp_63 = uint(temp_62) >> 2;
    temp_64 = temp_63 >> 2;
    temp_65 = int(temp_63) & 3;
    temp_66 = vp_c8.data[int(temp_64)][temp_65];
    temp_67 = int(temp_63) + 1;
    temp_68 = uint(temp_67) >> 2;
    temp_69 = temp_67 & 3;
    temp_70 = vp_c8.data[int(temp_68)][temp_69];
    // 0x000128: 0x5C68100000471302 Fmul
    temp_71 = temp_8 * temp_11;
    // 0x000130: 0xEFD87F801007FF0A Ald
    temp_72 = in_attr8.x;
    // 0x000138: 0x59A2008000370401 Ffma
    temp_73 = 0.0 - temp_61;
    temp_74 = fma(temp_11, temp_19, temp_73);
    // 0x000148: 0xEF95008000072C36 Ldc
    temp_75 = uint(temp_47) >> 2;
    temp_76 = temp_75 >> 2;
    temp_77 = int(temp_75) & 3;
    temp_78 = vp_c8.data[int(temp_76)][temp_77];
    temp_79 = int(temp_75) + 1;
    temp_80 = uint(temp_79) >> 2;
    temp_81 = temp_79 & 3;
    temp_82 = vp_c8.data[int(temp_80)][temp_81];
    // 0x000150: 0x5C68100001170305 Fmul
    temp_83 = temp_19 * temp_16;
    // 0x000158: 0xEF95008FFE070732 Ldc
    temp_84 = temp_52 + -32;
    temp_85 = uint(temp_84) >> 2;
    temp_86 = temp_85 >> 2;
    temp_87 = int(temp_85) & 3;
    temp_88 = vp_c8.data[int(temp_86)][temp_87];
    temp_89 = int(temp_85) + 1;
    temp_90 = uint(temp_89) >> 2;
    temp_91 = temp_89 & 3;
    temp_92 = vp_c8.data[int(temp_90)][temp_91];
    // 0x000168: 0x59A2028001370605 Ffma
    temp_93 = 0.0 - temp_83;
    temp_94 = fma(temp_5, temp_8, temp_93);
    // 0x000170: 0xEF95008002072C0E Ldc
    temp_95 = temp_47 + 32;
    temp_96 = uint(temp_95) >> 2;
    temp_97 = temp_96 >> 2;
    temp_98 = int(temp_96) & 3;
    temp_99 = vp_c8.data[int(temp_97)][temp_98];
    temp_100 = int(temp_96) + 1;
    temp_101 = uint(temp_100) >> 2;
    temp_102 = temp_100 & 3;
    temp_103 = vp_c8.data[int(temp_101)][temp_102];
    // 0x000178: 0xEF95008001072818 Ldc
    temp_104 = temp_34 + 16;
    temp_105 = uint(temp_104) >> 2;
    temp_106 = temp_105 >> 2;
    temp_107 = int(temp_105) & 3;
    temp_108 = vp_c8.data[int(temp_106)][temp_107];
    temp_109 = int(temp_105) + 1;
    temp_110 = uint(temp_109) >> 2;
    temp_111 = temp_109 & 3;
    temp_112 = vp_c8.data[int(temp_110)][temp_111];
    // 0x000188: 0xEF95008001072C1E Ldc
    temp_113 = temp_47 + 16;
    temp_114 = uint(temp_113) >> 2;
    temp_115 = temp_114 >> 2;
    temp_116 = int(temp_114) & 3;
    temp_117 = vp_c8.data[int(temp_115)][temp_116];
    temp_118 = int(temp_114) + 1;
    temp_119 = uint(temp_118) >> 2;
    temp_120 = temp_118 & 3;
    temp_121 = vp_c8.data[int(temp_119)][temp_120];
    // 0x000190: 0xEF9500800207281A Ldc
    temp_122 = temp_34 + 32;
    temp_123 = uint(temp_122) >> 2;
    temp_124 = temp_123 >> 2;
    temp_125 = int(temp_123) & 3;
    temp_126 = vp_c8.data[int(temp_124)][temp_125];
    temp_127 = int(temp_123) + 1;
    temp_128 = uint(temp_127) >> 2;
    temp_129 = temp_127 & 3;
    temp_130 = vp_c8.data[int(temp_128)][temp_129];
    // 0x000198: 0xEF95008000070722 Ldc
    temp_131 = uint(temp_52) >> 2;
    temp_132 = temp_131 >> 2;
    temp_133 = int(temp_131) & 3;
    temp_134 = vp_c8.data[int(temp_132)][temp_133];
    temp_135 = int(temp_131) + 1;
    temp_136 = uint(temp_135) >> 2;
    temp_137 = temp_135 & 3;
    temp_138 = vp_c8.data[int(temp_136)][temp_137];
    // 0x0001A8: 0xEF95008FFF070726 Ldc
    temp_139 = temp_52 + -16;
    temp_140 = uint(temp_139) >> 2;
    temp_141 = temp_140 >> 2;
    temp_142 = int(temp_140) & 3;
    temp_143 = vp_c8.data[int(temp_141)][temp_142];
    temp_144 = int(temp_140) + 1;
    temp_145 = uint(temp_144) >> 2;
    temp_146 = temp_144 & 3;
    temp_147 = vp_c8.data[int(temp_145)][temp_146];
    // 0x0001B0: 0xEFD87F800AC7FF00 Ald
    temp_148 = in_attr2.w;
    // 0x0001B8: 0x51A0049400470803 Ffma
    temp_149 = fma(temp_48, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0001C8: 0xEFD87F800807FF2D Ald
    temp_150 = in_attr0.x;
    // 0x0001D0: 0x51A0069400570808 Ffma
    temp_151 = fma(temp_48, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0001D8: 0xEFD87F800887FF4D Ald
    temp_152 = in_attr0.z;
    // 0x0001E8: 0x59A2010001170B09 Ffma
    temp_153 = 0.0 - temp_71;
    temp_154 = fma(temp_4, temp_16, temp_153);
    // 0x0001F0: 0xEF9500800087281C Ldc
    temp_155 = temp_34 + 8;
    temp_156 = uint(temp_155) >> 2;
    temp_157 = temp_156 >> 2;
    temp_158 = int(temp_156) & 3;
    temp_159 = vp_c8.data[int(temp_157)][temp_158];
    temp_160 = int(temp_156) + 1;
    temp_161 = uint(temp_160) >> 2;
    temp_162 = temp_160 & 3;
    temp_163 = vp_c8.data[int(temp_161)][temp_162];
    // 0x0001F8: 0x49A0019400070A02 Ffma
    temp_164 = fma(temp_72, vp_c5.data[0].x, temp_149);
    // 0x000208: 0xEF95008000872C4E Ldc
    temp_165 = temp_47 + 8;
    temp_166 = uint(temp_165) >> 2;
    temp_167 = temp_166 >> 2;
    temp_168 = int(temp_166) & 3;
    temp_169 = vp_c8.data[int(temp_167)][temp_168];
    temp_170 = int(temp_166) + 1;
    temp_171 = uint(temp_170) >> 2;
    temp_172 = temp_170 & 3;
    temp_173 = vp_c8.data[int(temp_171)][temp_172];
    // 0x000210: 0x5C68100001172E3D Fmul
    temp_174 = temp_26 * temp_16;
    // 0x000218: 0xEF9500800087304A Ldc
    temp_175 = temp_15 + 8;
    temp_176 = uint(temp_175) >> 2;
    temp_177 = temp_176 >> 2;
    temp_178 = int(temp_176) & 3;
    temp_179 = vp_c8.data[int(temp_177)][temp_178];
    temp_180 = int(temp_176) + 1;
    temp_181 = uint(temp_180) >> 2;
    temp_182 = temp_180 & 3;
    temp_183 = vp_c8.data[int(temp_181)][temp_182];
    // 0x000228: 0x5C68100001172A21 Fmul
    temp_184 = temp_39 * temp_16;
    // 0x000230: 0xEF95008FFE870746 Ldc
    temp_185 = temp_52 + -24;
    temp_186 = uint(temp_185) >> 2;
    temp_187 = temp_186 >> 2;
    temp_188 = int(temp_186) & 3;
    temp_189 = vp_c8.data[int(temp_187)][temp_188];
    temp_190 = int(temp_186) + 1;
    temp_191 = uint(temp_190) >> 2;
    temp_192 = temp_190 & 3;
    temp_193 = vp_c8.data[int(temp_191)][temp_192];
    // 0x000238: 0x49A0041400170A03 Ffma
    temp_194 = fma(temp_72, vp_c5.data[0].y, temp_151);
    // 0x000248: 0xEFD87F800847FF08 Ald
    temp_195 = in_attr0.y;
    // 0x000250: 0x5C68100001173A31 Fmul
    temp_196 = temp_56 * temp_16;
    // 0x000258: 0xEF95008001873042 Ldc
    temp_197 = temp_15 + 24;
    temp_198 = uint(temp_197) >> 2;
    temp_199 = temp_198 >> 2;
    temp_200 = int(temp_198) & 3;
    temp_201 = vp_c8.data[int(temp_199)][temp_200];
    temp_202 = int(temp_198) + 1;
    temp_203 = uint(temp_202) >> 2;
    temp_204 = temp_202 & 3;
    temp_205 = vp_c8.data[int(temp_203)][temp_204];
    // 0x000268: 0x59A01E8000672F3D Ffma
    temp_206 = fma(temp_30, temp_5, temp_174);
    // 0x000270: 0x5C6810000117160C Fmul
    temp_207 = temp_66 * temp_16;
    // 0x000278: 0x59A0108000672B49 Ffma
    temp_208 = fma(temp_43, temp_5, temp_184);
    // 0x000288: 0x5C6810000007013F Fmul
    temp_209 = temp_74 * temp_148;
    // 0x000290: 0x5C68100000070901 Fmul
    temp_210 = temp_154 * temp_148;
    // 0x000298: 0x59A006000067170C Ffma
    temp_211 = fma(temp_70, temp_5, temp_207);
    // 0x0002A8: 0x5C68100000070505 Fmul
    temp_212 = temp_94 * temp_148;
    // 0x0002B0: 0x5C68100002D73A35 Fmul
    temp_213 = temp_56 * temp_150;
    // 0x0002B8: 0x5C68100002D71625 Fmul
    temp_214 = temp_66 * temp_150;
    // 0x0002C8: 0x5C68100002E73F3C Fmul
    temp_215 = temp_209 * temp_26;
    // 0x0002D0: 0x5C68100002D72E2E Fmul
    temp_216 = temp_26 * temp_150;
    // 0x0002D8: 0x5C68100003F73A38 Fmul
    temp_217 = temp_56 * temp_209;
    // 0x0002E8: 0x5C68100002A73F20 Fmul
    temp_218 = temp_209 * temp_39;
    // 0x0002F0: 0x5C68100002D72A2A Fmul
    temp_219 = temp_39 * temp_150;
    // 0x0002F8: 0x5C68100001173639 Fmul
    temp_220 = temp_78 * temp_16;
    // 0x000308: 0x5C68100003673F34 Fmul
    temp_221 = temp_209 * temp_78;
    // 0x000310: 0x5C68100001173241 Fmul
    temp_222 = temp_88 * temp_16;
    // 0x000318: 0x5C68100003273F44 Fmul
    temp_223 = temp_209 * temp_88;
    // 0x000328: 0x59A01E0002F7013C Ffma
    temp_224 = fma(temp_210, temp_30, temp_215);
    // 0x000330: 0x59A0170000872F40 Ffma
    temp_225 = fma(temp_30, temp_195, temp_216);
    // 0x000338: 0xEF95008002872C2E Ldc
    temp_226 = temp_47 + 40;
    temp_227 = uint(temp_226) >> 2;
    temp_228 = temp_227 >> 2;
    temp_229 = int(temp_227) & 3;
    temp_230 = vp_c8.data[int(temp_228)][temp_229];
    temp_231 = int(temp_227) + 1;
    temp_232 = uint(temp_231) >> 2;
    temp_233 = temp_231 & 3;
    temp_234 = vp_c8.data[int(temp_232)][temp_233];
    // 0x000348: 0x5C68100002D73636 Fmul
    temp_235 = temp_78 * temp_150;
    // 0x000350: 0x5C68100002D73232 Fmul
    temp_236 = temp_88 * temp_150;
    // 0x000358: 0x5C68100001170E09 Fmul
    temp_237 = temp_99 * temp_16;
    // 0x000368: 0x5C68100001673F0B Fmul
    temp_238 = temp_209 * temp_66;
    // 0x000370: 0x5C68100001171814 Fmul
    temp_239 = temp_108 * temp_16;
    // 0x000378: 0x5C68100001171E0D Fmul
    temp_240 = temp_117 * temp_16;
    // 0x000388: 0x5C68100001171A15 Fmul
    temp_241 = temp_126 * temp_16;
    // 0x000390: 0x5C68100001172229 Fmul
    temp_242 = temp_134 * temp_16;
    // 0x000398: 0x5C68100000E73F0A Fmul
    temp_243 = temp_209 * temp_99;
    // 0x0003A8: 0x5C68100001172611 Fmul
    temp_244 = temp_143 * temp_16;
    // 0x0003B0: 0x5C68100003F71813 Fmul
    temp_245 = temp_108 * temp_209;
    // 0x0003B8: 0x5C68100001E73F24 Fmul
    temp_246 = temp_209 * temp_117;
    // 0x0003C8: 0x5C68100003F71A12 Fmul
    temp_247 = temp_126 * temp_209;
    // 0x0003D0: 0x5C68100002673F16 Fmul
    temp_248 = temp_209 * temp_143;
    // 0x0003D8: 0x5C68100003F72210 Fmul
    temp_249 = temp_134 * temp_209;
    // 0x0003E8: 0xEF9500800287303E Ldc
    temp_250 = temp_15 + 40;
    temp_251 = uint(temp_250) >> 2;
    temp_252 = temp_251 >> 2;
    temp_253 = int(temp_251) & 3;
    temp_254 = vp_c8.data[int(temp_252)][temp_253];
    temp_255 = int(temp_251) + 1;
    temp_256 = uint(temp_255) >> 2;
    temp_257 = temp_255 & 3;
    temp_258 = vp_c8.data[int(temp_256)][temp_257];
    // 0x0003F0: 0x5C68100002D70E0E Fmul
    temp_259 = temp_99 * temp_150;
    // 0x0003F8: 0x5C68100002D72626 Fmul
    temp_260 = temp_143 * temp_150;
    // 0x000408: 0x5C68100002D72222 Fmul
    temp_261 = temp_134 * temp_150;
    // 0x000410: 0x5C68100002D71E1E Fmul
    temp_262 = temp_117 * temp_150;
    // 0x000418: 0x5C68100002D71A1A Fmul
    temp_263 = temp_126 * temp_150;
    // 0x000428: 0x5C68100002D71818 Fmul
    temp_264 = temp_108 * temp_150;
    // 0x000430: 0x59A0188000673B2D Ffma
    temp_265 = fma(temp_60, temp_5, temp_196);
    // 0x000438: 0x59A01C0000173B31 Ffma
    temp_266 = fma(temp_60, temp_210, temp_217);
    // 0x000448: 0x59A01A8000873B35 Ffma
    temp_267 = fma(temp_60, temp_195, temp_213);
    // 0x000450: 0xEF9500800087073A Ldc
    temp_268 = temp_52 + 8;
    temp_269 = uint(temp_268) >> 2;
    temp_270 = temp_269 >> 2;
    temp_271 = int(temp_269) & 3;
    temp_272 = vp_c8.data[int(temp_270)][temp_271];
    temp_273 = int(temp_269) + 1;
    temp_274 = uint(temp_273) >> 2;
    temp_275 = temp_273 & 3;
    temp_276 = vp_c8.data[int(temp_274)][temp_275];
    // 0x000458: 0x59A01C8000673739 Ffma
    temp_277 = fma(temp_82, temp_5, temp_220);
    // 0x000468: 0x59A01A0003770134 Ffma
    temp_278 = fma(temp_210, temp_82, temp_221);
    // 0x000470: 0x59A01B0000873738 Ffma
    temp_279 = fma(temp_82, temp_195, temp_235);
    // 0x000478: 0xEF95008001872C36 Ldc
    temp_280 = temp_47 + 24;
    temp_281 = uint(temp_280) >> 2;
    temp_282 = temp_281 >> 2;
    temp_283 = int(temp_281) & 3;
    temp_284 = vp_c8.data[int(temp_282)][temp_283];
    temp_285 = int(temp_281) + 1;
    temp_286 = uint(temp_285) >> 2;
    temp_287 = temp_285 & 3;
    temp_288 = vp_c8.data[int(temp_286)][temp_287];
    // 0x000488: 0x59A0208000673341 Ffma
    temp_289 = fma(temp_92, temp_5, temp_222);
    // 0x000490: 0x59A0220003370144 Ffma
    temp_290 = fma(temp_210, temp_92, temp_223);
    // 0x000498: 0x59A0190000873345 Ffma
    temp_291 = fma(temp_92, temp_195, temp_236);
    // 0x0004A8: 0xEF95008001872832 Ldc
    temp_292 = temp_34 + 24;
    temp_293 = uint(temp_292) >> 2;
    temp_294 = temp_293 >> 2;
    temp_295 = int(temp_293) & 3;
    temp_296 = vp_c8.data[int(temp_294)][temp_295];
    temp_297 = int(temp_293) + 1;
    temp_298 = uint(temp_297) >> 2;
    temp_299 = temp_297 & 3;
    temp_300 = vp_c8.data[int(temp_298)][temp_299];
    // 0x0004B0: 0x59A0100002B70148 Ffma
    temp_301 = fma(temp_210, temp_43, temp_218);
    // 0x0004B8: 0xEF95008FFF870720 Ldc
    temp_302 = temp_52 + -8;
    temp_303 = uint(temp_302) >> 2;
    temp_304 = temp_303 >> 2;
    temp_305 = int(temp_303) & 3;
    temp_306 = vp_c8.data[int(temp_304)][temp_305];
    temp_307 = int(temp_303) + 1;
    temp_308 = uint(temp_307) >> 2;
    temp_309 = temp_307 & 3;
    temp_310 = vp_c8.data[int(temp_308)][temp_309];
    // 0x0004C8: 0x59A0150000872B4C Ffma
    temp_311 = fma(temp_43, temp_195, temp_219);
    // 0x0004D0: 0xEF9500800287282A Ldc
    temp_312 = temp_34 + 40;
    temp_313 = uint(temp_312) >> 2;
    temp_314 = temp_313 >> 2;
    temp_315 = int(temp_313) & 3;
    temp_316 = vp_c8.data[int(temp_314)][temp_315];
    temp_317 = int(temp_313) + 1;
    temp_318 = uint(temp_317) >> 2;
    temp_319 = temp_317 & 3;
    temp_320 = vp_c8.data[int(temp_318)][temp_319];
    // 0x0004D8: 0x59A005800177010B Ffma
    temp_321 = fma(temp_210, temp_70, temp_238);
    // 0x0004E8: 0xEFD87F800C07FF07 Ald
    temp_322 = in_attr4.x;
    // 0x0004F0: 0x59A0128000871717 Ffma
    temp_323 = fma(temp_70, temp_195, temp_214);
    // 0x0004F8: 0x59A0048000670F09 Ffma
    temp_324 = fma(temp_103, temp_5, temp_237);
    // 0x000508: 0x59A00A0000671925 Ffma
    temp_325 = fma(temp_112, temp_5, temp_239);
    // 0x000510: 0x59A0068000671F0D Ffma
    temp_326 = fma(temp_121, temp_5, temp_240);
    // 0x000518: 0x59A00A8000671B15 Ffma
    temp_327 = fma(temp_130, temp_5, temp_241);
    // 0x000528: 0x59A0148000672329 Ffma
    temp_328 = fma(temp_138, temp_5, temp_242);
    // 0x000530: 0x59A0088000672711 Ffma
    temp_329 = fma(temp_147, temp_5, temp_244);
    // 0x000538: 0xEFD87F800C47FF06 Ald
    temp_330 = in_attr4.y;
    // 0x000548: 0x59A0050000F7010A Ffma
    temp_331 = fma(temp_210, temp_103, temp_243);
    // 0x000550: 0x59A0070000870F0F Ffma
    temp_332 = fma(temp_103, temp_195, temp_259);
    // 0x000558: 0xEFD87F800C87FF0E Ald
    temp_333 = in_attr4.z;
    // 0x000568: 0x59A0048000472E09 Ffma
    temp_334 = fma(temp_230, temp_11, temp_324);
    // 0x000570: 0x59A0168000471C2D Ffma
    temp_335 = fma(temp_159, temp_11, temp_265);
    // 0x000578: 0x59A0050002E7050A Ffma
    temp_336 = fma(temp_212, temp_230, temp_331);
    // 0x000588: 0x59A0098000171913 Ffma
    temp_337 = fma(temp_112, temp_210, temp_245);
    // 0x000590: 0x59A0120001F70124 Ffma
    temp_338 = fma(temp_210, temp_121, temp_246);
    // 0x000598: 0x59A0078004D72E2E Ffma
    temp_339 = fma(temp_230, temp_152, temp_332);
    // 0x0005A8: 0xEFD87F800CC7FF0F Ald
    temp_340 = in_attr4.w;
    // 0x0005B0: 0x59A0090000171B14 Ffma
    temp_341 = fma(temp_130, temp_210, temp_247);
    // 0x0005B8: 0xEFF07F800E07FF02 Ast
    out_attr6.x = temp_164;
    // 0x0005C8: 0x59A00B0002770116 Ffma
    temp_342 = fma(temp_210, temp_147, temp_248);
    // 0x0005D0: 0xEFF07F800E47FF03 Ast
    out_attr6.y = temp_194;
    // 0x0005D8: 0x59A0080000172310 Ffma
    temp_343 = fma(temp_138, temp_210, temp_249);
    // 0x0005E8: 0x59A01C8000474E39 Ffma
    temp_344 = fma(temp_169, temp_11, temp_277);
    // 0x0005F0: 0x59A01E8000474A3D Ffma
    temp_345 = fma(temp_179, temp_11, temp_206);
    // 0x0005F8: 0x59A0208000474641 Ffma
    temp_346 = fma(temp_189, temp_11, temp_289);
    // 0x000608: 0x59A0248000474249 Ffma
    temp_347 = fma(temp_201, temp_11, temp_208);
    // 0x000610: 0x59A0060000473E0C Ffma
    temp_348 = fma(temp_254, temp_11, temp_211);
    // 0x000618: 0x59A00D0000871B1B Ffma
    temp_349 = fma(temp_130, temp_195, temp_263);
    // 0x000628: 0x59A0148000473A29 Ffma
    temp_350 = fma(temp_272, temp_11, temp_328);
    // 0x000630: 0x59A0188000571C31 Ffma
    temp_351 = fma(temp_159, temp_212, temp_266);
    // 0x000638: 0x59A01A0004E70534 Ffma
    temp_352 = fma(temp_212, temp_169, temp_278);
    // 0x000648: 0x59A006800047360D Ffma
    temp_353 = fma(temp_284, temp_11, temp_326);
    // 0x000650: 0x59A01E0004A7053C Ffma
    temp_354 = fma(temp_212, temp_179, temp_224);
    // 0x000658: 0x59A0220004670544 Ffma
    temp_355 = fma(temp_212, temp_189, temp_290);
    // 0x000668: 0x59A0128000473225 Ffma
    temp_356 = fma(temp_296, temp_11, temp_325);
    // 0x000670: 0x59A0088000472011 Ffma
    temp_357 = fma(temp_306, temp_11, temp_329);
    // 0x000678: 0x59A00A8000472A15 Ffma
    temp_358 = fma(temp_316, temp_11, temp_327);
    // 0x000688: 0x5C68100000672D04 Fmul
    temp_359 = temp_335 * temp_330;
    // 0x000690: 0x59A0240004270548 Ffma
    temp_360 = fma(temp_212, temp_201, temp_301);
    // 0x000698: 0x59A0058003E7050B Ffma
    temp_361 = fma(temp_212, temp_254, temp_321);
    // 0x0006A8: 0x59A0098000573213 Ffma
    temp_362 = fma(temp_296, temp_212, temp_337);
    // 0x0006B0: 0x59A0120003670524 Ffma
    temp_363 = fma(temp_212, temp_284, temp_338);
    // 0x0006B8: 0x59A00A0000572A14 Ffma
    temp_364 = fma(temp_316, temp_212, temp_341);
    // 0x0006C8: 0x59A00B0002070516 Ffma
    temp_365 = fma(temp_212, temp_306, temp_342);
    // 0x0006D0: 0x59A0080000573A10 Ffma
    temp_366 = fma(temp_272, temp_212, temp_343);
    // 0x0006D8: 0x4CB0119002371A05 F2i
    temp_367 = trunc(vp_c4.data[8].w);
    temp_368 = int(temp_367);
    // 0x0006E8: 0x59A0130000872726 Ffma
    temp_369 = fma(temp_147, temp_195, temp_260);
    // 0x0006F0: 0x59A0110000872323 Ffma
    temp_370 = fma(temp_138, temp_195, temp_261);
    // 0x0006F8: 0x59A00F0000871F1F Ffma
    temp_371 = fma(temp_121, temp_195, temp_262);
    // 0x000708: 0x59A00C0000871918 Ffma
    temp_372 = fma(temp_112, temp_195, temp_264);
    // 0x000710: 0x59A00B8004D73E3E Ffma
    temp_373 = fma(temp_254, temp_152, temp_323);
    // 0x000718: 0x5C68100000672508 Fmul
    temp_374 = temp_356 * temp_330;
    // 0x000728: 0x59A0020000773917 Ffma
    temp_375 = fma(temp_344, temp_322, temp_359);
    // 0x000730: 0x59A01A8004D71C1C Ffma
    temp_376 = fma(temp_159, temp_152, temp_267);
    // 0x000738: 0x5C68100000671504 Fmul
    temp_377 = temp_358 * temp_330;
    // 0x000748: 0x59A00D8004D72A2A Ffma
    temp_378 = fma(temp_316, temp_152, temp_349);
    // 0x000750: 0x59A00C0004D73218 Ffma
    temp_379 = fma(temp_296, temp_152, temp_372);
    // 0x000758: 0x59A0040000770D08 Ffma
    temp_380 = fma(temp_353, temp_322, temp_374);
    // 0x000768: 0x59A00B8000E73D12 Ffma
    temp_381 = fma(temp_345, temp_333, temp_375);
    // 0x000770: 0x5C58100001C71D1C Fadd
    temp_382 = temp_163 + temp_376;
    // 0x000778: 0x59A0020000770909 Ffma
    temp_383 = fma(temp_334, temp_322, temp_377);
    // 0x000788: 0x5C58100002A72B2B Fadd
    temp_384 = temp_320 + temp_378;
    // 0x000790: 0x59A01C0004D74E38 Ffma
    temp_385 = fma(temp_169, temp_152, temp_279);
    // 0x000798: 0x5C58100001873318 Fadd
    temp_386 = temp_300 + temp_379;
    // 0x0007A8: 0x59A0040000E74908 Ffma
    temp_387 = fma(temp_347, temp_333, temp_380);
    // 0x0007B0: 0x3848000000470515 Shl
    temp_388 = temp_368 << 4;
    // 0x0007B8: 0x59A0090000F74141 Ffma
    temp_389 = fma(temp_346, temp_340, temp_381);
    // 0x0007C8: 0xEF94007048871517 Ldc
    temp_390 = temp_388 + 0x488;
    temp_391 = uint(temp_390) >> 2;
    temp_392 = temp_391 >> 2;
    temp_393 = int(temp_391) & 3;
    temp_394 = vp_c7.data[int(temp_392)][temp_393];
    // 0x0007D0: 0x59A00F8004D73636 Ffma
    temp_395 = fma(temp_284, temp_152, temp_371);
    // 0x0007D8: 0xEF95007068071504 Ldc
    temp_396 = temp_388 + 0x680;
    temp_397 = uint(temp_396) >> 2;
    temp_398 = temp_397 >> 2;
    temp_399 = int(temp_397) & 3;
    temp_400 = vp_c7.data[int(temp_398)][temp_399];
    temp_401 = int(temp_397) + 1;
    temp_402 = uint(temp_401) >> 2;
    temp_403 = temp_401 & 3;
    temp_404 = vp_c7.data[int(temp_402)][temp_403];
    // 0x0007E8: 0x5C68100000671C19 Fmul
    temp_405 = temp_382 * temp_330;
    // 0x0007F0: 0x59A0048000E70C0C Ffma
    temp_406 = fma(temp_348, temp_333, temp_383);
    // 0x0007F8: 0xEF94007068871509 Ldc
    temp_407 = temp_388 + 0x688;
    temp_408 = uint(temp_407) >> 2;
    temp_409 = temp_408 >> 2;
    temp_410 = int(temp_408) & 3;
    temp_411 = vp_c7.data[int(temp_409)][temp_410];
    // 0x000808: 0x5C58100002E72F2E Fadd
    temp_412 = temp_234 + temp_339;
    // 0x000810: 0x5C6810000067130D Fmul
    temp_413 = temp_362 * temp_330;
    // 0x000818: 0xEF95007048071512 Ldc
    temp_414 = temp_388 + 0x480;
    temp_415 = uint(temp_414) >> 2;
    temp_416 = temp_415 >> 2;
    temp_417 = int(temp_415) & 3;
    temp_418 = vp_c7.data[int(temp_416)][temp_417];
    temp_419 = int(temp_415) + 1;
    temp_420 = uint(temp_419) >> 2;
    temp_421 = temp_419 & 3;
    temp_422 = vp_c7.data[int(temp_420)][temp_421];
    // 0x000828: 0x5C68100000672B1C Fmul
    temp_423 = temp_384 * temp_330;
    // 0x000830: 0x59A0200004D74A40 Ffma
    temp_424 = fma(temp_179, temp_152, temp_225);
    // 0x000838: 0x5C58100003874F38 Fadd
    temp_425 = temp_173 + temp_385;
    // 0x000848: 0x5C68100000673131 Fmul
    temp_426 = temp_351 * temp_330;
    // 0x000850: 0x5C68100000671414 Fmul
    temp_427 = temp_364 * temp_330;
    // 0x000858: 0x5C68100000671818 Fmul
    temp_428 = temp_386 * temp_330;
    // 0x000868: 0x59A0040000F71108 Ffma
    temp_429 = fma(temp_357, temp_340, temp_387);
    // 0x000870: 0x5C68100004174106 Fmul
    temp_430 = temp_389 * temp_389;
    // 0x000878: 0x59A0260004D7424C Ffma
    temp_431 = fma(temp_201, temp_152, temp_311);
    // 0x000888: 0x5C58100003673736 Fadd
    temp_432 = temp_288 + temp_395;
    // 0x000890: 0x59A0118004D73A01 Ffma
    temp_433 = fma(temp_272, temp_152, temp_370);
    // 0x000898: 0x5C58100003E73F3F Fadd
    temp_434 = temp_258 + temp_373;
    // 0x0008A8: 0x59A00E0000772E1C Ffma
    temp_435 = fma(temp_412, temp_322, temp_423);
    // 0x0008B0: 0x59A0228004D74645 Ffma
    temp_436 = fma(temp_189, temp_152, temp_291);
    // 0x0008B8: 0x5C58100004074B40 Fadd
    temp_437 = temp_183 + temp_424;
    // 0x0008C8: 0x59A00C8000773819 Ffma
    temp_438 = fma(temp_425, temp_322, temp_405);
    // 0x0008D0: 0x59A0060000F7290C Ffma
    temp_439 = fma(temp_350, temp_340, temp_406);
    // 0x0008D8: 0x59A0030000870806 Ffma
    temp_440 = fma(temp_429, temp_429, temp_430);
    // 0x0008E8: 0x59A0130004D72026 Ffma
    temp_441 = fma(temp_306, temp_152, temp_369);
    // 0x0008F0: 0x5C58100004C74343 Fadd
    temp_442 = temp_205 + temp_431;
    // 0x0008F8: 0x59A00C0000773618 Ffma
    temp_443 = fma(temp_432, temp_322, temp_428);
    // 0x000908: 0x5C58100000173B01 Fadd
    temp_444 = temp_276 + temp_433;
    // 0x000910: 0x59A00E0000E73F1C Ffma
    temp_445 = fma(temp_434, temp_333, temp_435);
    // 0x000918: 0x5C58100004574745 Fadd
    temp_446 = temp_193 + temp_436;
    // 0x000928: 0x59A00C8000E74040 Ffma
    temp_447 = fma(temp_437, temp_333, temp_438);
    // 0x000930: 0x59A0030000C70C06 Ffma
    temp_448 = fma(temp_439, temp_439, temp_440);
    // 0x000938: 0x5C58100002672121 Fadd
    temp_449 = temp_310 + temp_441;
    // 0x000948: 0x5080000000570606 Mufu
    temp_450 = inversesqrt(temp_448);
    // 0x000950: 0x59A00C0000E74318 Ffma
    temp_451 = fma(temp_442, temp_333, temp_443);
    // 0x000958: 0x59A00E0000F7011C Ffma
    temp_452 = fma(temp_444, temp_340, temp_445);
    // 0x000968: 0x59A0200000F74545 Ffma
    temp_453 = fma(temp_446, temp_340, temp_447);
    // 0x000970: 0x59A0188000773431 Ffma
    temp_454 = fma(temp_352, temp_322, temp_426);
    // 0x000978: 0x59A006800077240D Ffma
    temp_455 = fma(temp_363, temp_322, temp_413);
    // 0x000988: 0x59A00A0000770A14 Ffma
    temp_456 = fma(temp_336, temp_322, temp_427);
    // 0x000990: 0x59A00C0000F72118 Ffma
    temp_457 = fma(temp_449, temp_340, temp_451);
    // 0x000998: 0x59A0048001771C09 Ffma
    temp_458 = fma(temp_452, temp_394, temp_411);
    // 0x0009A8: 0x59A0020001274512 Ffma
    temp_459 = fma(temp_453, temp_418, temp_400);
    // 0x0009B0: 0xEFF07F800D87FF09 Ast
    out_attr5.z = temp_458;
    // 0x0009B8: 0x59A0188000E73C31 Ffma
    temp_460 = fma(temp_354, temp_333, temp_454);
    // 0x0009C8: 0xEFF07F800D07FF12 Ast
    out_attr5.x = temp_459;
    // 0x0009D0: 0x59A0068000E7480D Ffma
    temp_461 = fma(temp_360, temp_333, temp_455);
    // 0x0009D8: 0x59A00A0000E70B0E Ffma
    temp_462 = fma(temp_361, temp_333, temp_456);
    // 0x0009E8: 0x59A0028001371813 Ffma
    temp_463 = fma(temp_457, temp_422, temp_404);
    // 0x0009F0: 0x5C68100000674104 Fmul
    temp_464 = temp_389 * temp_450;
    // 0x0009F8: 0xEFF07F800D47FF13 Ast
    out_attr5.y = temp_463;
    // 0x000A08: 0x5C68100000670801 Fmul
    temp_465 = temp_429 * temp_450;
    // 0x000A10: 0xEFF07F800907FF04 Ast
    out_attr1.x = temp_464;
    // 0x000A18: 0x5C68100000670C05 Fmul
    temp_466 = temp_439 * temp_450;
    // 0x000A28: 0xEFF07F800947FF01 Ast
    out_attr1.y = temp_465;
    // 0x000A30: 0x4C5810180BA70907 Fadd
    temp_467 = temp_458 + vp_c6.data[46].z;
    // 0x000A38: 0xEFF07F800987FF05 Ast
    out_attr1.z = temp_466;
    // 0x000A48: 0x4C68100C00071206 Fmul
    temp_468 = temp_459 * vp_c3.data[0].x;
    // 0x000A50: 0x59A0068000F71616 Ffma
    temp_469 = fma(temp_365, temp_340, temp_461);
    // 0x000A58: 0x59A0070000F7100E Ffma
    temp_470 = fma(temp_366, temp_340, temp_462);
    // 0x000A68: 0x4C5830180B07120A Fadd
    temp_471 = 0.0 - vp_c6.data[44].x;
    temp_472 = temp_459 + temp_471;
    // 0x000A70: 0x4C5810180B97130B Fadd
    temp_473 = temp_463 + vp_c6.data[46].y;
    // 0x000A78: 0x4C6810180C27070C Fmul
    temp_474 = temp_467 * vp_c6.data[48].z;
    // 0x000A88: 0x4C6810180C67070D Fmul
    temp_475 = temp_467 * vp_c6.data[49].z;
    // 0x000A90: 0x4C6810180CA70710 Fmul
    temp_476 = temp_467 * vp_c6.data[50].z;
    // 0x000A98: 0x49A0030C00171307 Ffma
    temp_477 = fma(temp_463, vp_c3.data[0].y, temp_468);
    // 0x000AA8: 0x4C68100C00471208 Fmul
    temp_478 = temp_459 * vp_c3.data[1].x;
    // 0x000AB0: 0x4C68101803870A11 Fmul
    temp_479 = temp_472 * vp_c6.data[14].x;
    // 0x000AB8: 0x4C5810180B87120A Fadd
    temp_480 = temp_459 + vp_c6.data[46].x;
    // 0x000AC8: 0x49A006180C170B0C Ffma
    temp_481 = fma(temp_473, vp_c6.data[48].y, temp_474);
    // 0x000AD0: 0x49A006980C570B0D Ffma
    temp_482 = fma(temp_473, vp_c6.data[49].y, temp_475);
    // 0x000AD8: 0x49A008180C970B10 Ffma
    temp_483 = fma(temp_473, vp_c6.data[50].y, temp_476);
    // 0x000AE8: 0x49A0038C00270906 Ffma
    temp_484 = fma(temp_458, vp_c3.data[0].z, temp_477);
    // 0x000AF0: 0x59A0188000F74444 Ffma
    temp_485 = fma(temp_355, temp_340, temp_460);
    // 0x000AF8: 0x4C5830180B17130F Fadd
    temp_486 = 0.0 - vp_c6.data[44].y;
    temp_487 = temp_463 + temp_486;
    // 0x000B08: 0x49A0040C0057130B Ffma
    temp_488 = fma(temp_463, vp_c3.data[1].y, temp_478);
    // 0x000B10: 0x49A006180C070A0C Ffma
    temp_489 = fma(temp_480, vp_c6.data[48].x, temp_481);
    // 0x000B18: 0x49A006980C470A0D Ffma
    temp_490 = fma(temp_480, vp_c6.data[49].x, temp_482);
    // 0x000B28: 0x49A008180C870A10 Ffma
    temp_491 = fma(temp_480, vp_c6.data[50].x, temp_483);
    // 0x000B30: 0x4C68100C00871208 Fmul
    temp_492 = temp_459 * vp_c3.data[2].x;
    // 0x000B38: 0x4C58100C0037060A Fadd
    temp_493 = temp_484 + vp_c3.data[0].w;
    // 0x000B48: 0x4C58101002070906 Fadd
    temp_494 = temp_458 + vp_c4.data[8].x;
    // 0x000B50: 0x49A0089803970F14 Ffma
    temp_495 = fma(temp_487, vp_c6.data[14].y, temp_479);
    // 0x000B58: 0x49A0058C0067090F Ffma
    temp_496 = fma(temp_458, vp_c3.data[1].z, temp_488);
    // 0x000B68: 0x5C68100001670503 Fmul
    temp_497 = temp_466 * temp_469;
    // 0x000B70: 0x49A0040C00971308 Ffma
    temp_498 = fma(temp_463, vp_c3.data[2].y, temp_492);
    // 0x000B78: 0x4C68101802C70A0A Fmul
    temp_499 = temp_493 * vp_c6.data[11].x;
    // 0x000B88: 0x49A0038C00270602 Ffma
    temp_500 = fma(temp_494, vp_c3.data[0].z, temp_477);
    // 0x000B90: 0x49A0058C0067060B Ffma
    temp_501 = fma(temp_494, vp_c3.data[1].z, temp_488);
    // 0x000B98: 0x4C58100C00770F0F Fadd
    temp_502 = temp_496 + vp_c3.data[1].w;
    // 0x000BA8: 0x4C5830180B270911 Fadd
    temp_503 = 0.0 - vp_c6.data[44].z;
    temp_504 = temp_458 + temp_503;
    // 0x000BB0: 0x49A0040C00A70606 Ffma
    temp_505 = fma(temp_494, vp_c3.data[2].z, temp_498);
    // 0x000BB8: 0x49A0040C00A70908 Ffma
    temp_506 = fma(temp_458, vp_c3.data[2].z, temp_498);
    // 0x000BC8: 0x4C58100C00370202 Fadd
    temp_507 = temp_500 + vp_c3.data[0].w;
    // 0x000BD0: 0x59A2018000E70103 Ffma
    temp_508 = 0.0 - temp_497;
    temp_509 = fma(temp_465, temp_470, temp_508);
    // 0x000BD8: 0x49A0051802D70F0F Ffma
    temp_510 = fma(temp_502, vp_c6.data[11].y, temp_499);
    // 0x000BE8: 0x4C58100C00770B0B Fadd
    temp_511 = temp_501 + vp_c3.data[1].w;
    // 0x000BF0: 0x5C68100000E7040E Fmul
    temp_512 = temp_464 * temp_470;
    // 0x000BF8: 0x4C58100C00B7080A Fadd
    temp_513 = temp_506 + vp_c3.data[2].w;
    // 0x000C08: 0x4C68100C02470208 Fmul
    temp_514 = temp_507 * vp_c3.data[9].x;
    // 0x000C10: 0xEFF07F800C87FF0A Ast
    out_attr4.z = temp_513;
    // 0x000C18: 0x4C58300C02F71215 Fadd
    temp_515 = 0.0 - vp_c3.data[11].w;
    temp_516 = temp_459 + temp_515;
    // 0x000C28: 0x49A00A1803A71111 Ffma
    temp_517 = fma(temp_504, vp_c6.data[14].z, temp_495);
    // 0x000C30: 0xEFF07F800B07FF15 Ast
    out_attr3.x = temp_516;
    // 0x000C38: 0x4C98079803C70012 Mov
    // 0x000C48: 0x4C58100C00B70606 Fadd
    temp_518 = temp_505 + vp_c3.data[2].w;
    // 0x000C50: 0x49A0040C02570B08 Ffma
    temp_519 = fma(temp_511, vp_c3.data[9].y, temp_514);
    // 0x000C58: 0x5C68100004470107 Fmul
    temp_520 = temp_465 * temp_485;
    // 0x000C68: 0x59A207000447050E Ffma
    temp_521 = 0.0 - temp_512;
    temp_522 = fma(temp_466, temp_485, temp_521);
    // 0x000C70: 0x5C68100000070303 Fmul
    temp_523 = temp_509 * temp_148;
    // 0x000C78: 0x51A0091803B71112 Ffma
    temp_524 = fma(temp_517, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000C88: 0x4C58300C03770915 Fadd
    temp_525 = 0.0 - vp_c3.data[13].w;
    temp_526 = temp_458 + temp_525;
    // 0x000C90: 0xEFF07F801047FF12 Ast
    out_attr8.y = temp_524;
    // 0x000C98: 0x49A0079802E70A0F Ffma
    temp_527 = fma(temp_513, vp_c6.data[11].z, temp_510);
    // 0x000CA8: 0xEFF07F800B87FF15 Ast
    out_attr3.z = temp_526;
    // 0x000CB0: 0x4C6810180BB70D11 Fmul
    temp_528 = temp_490 * vp_c6.data[46].w;
    // 0x000CB8: 0x4C68100C01C70209 Fmul
    temp_529 = temp_507 * vp_c3.data[7].x;
    // 0x000CC8: 0xEFF07F801147FF11 Ast
    out_attr9.y = temp_528;
    // 0x000CD0: 0x4C68100C0287020A Fmul
    temp_530 = temp_507 * vp_c3.data[10].x;
    // 0x000CD8: 0x4C68100C0207020D Fmul
    temp_531 = temp_507 * vp_c3.data[8].x;
    // 0x000CE8: 0x49A0040C02670602 Ffma
    temp_532 = fma(temp_518, vp_c3.data[9].z, temp_519);
    // 0x000CF0: 0x59A2038001670407 Ffma
    temp_533 = 0.0 - temp_520;
    temp_534 = fma(temp_464, temp_469, temp_533);
    // 0x000CF8: 0x5C68100000070E0E Fmul
    temp_535 = temp_522 * temp_148;
    // 0x000D08: 0x5C68100000370308 Fmul
    temp_536 = temp_523 * temp_523;
    // 0x000D10: 0x4C6810180BB70C0C Fmul
    temp_537 = temp_489 * vp_c6.data[46].w;
    // 0x000D18: 0x49A0048C01D70B09 Ffma
    temp_538 = fma(temp_511, vp_c3.data[7].y, temp_529);
    // 0x000D28: 0xEFF07F801107FF0C Ast
    out_attr9.x = temp_537;
    // 0x000D30: 0x5C68100000070707 Fmul
    temp_539 = temp_534 * temp_148;
    // 0x000D38: 0x59A0040000E70E08 Ffma
    temp_540 = fma(temp_535, temp_535, temp_536);
    // 0x000D48: 0x49A0068C02170B0D Ffma
    temp_541 = fma(temp_511, vp_c3.data[8].y, temp_531);
    // 0x000D50: 0x4C58100C02770202 Fadd
    temp_542 = temp_532 + vp_c3.data[9].w;
    // 0x000D58: 0x4C98079803070016 Mov
    // 0x000D68: 0xEFF07F800787FF02 Ast
    gl_Position.z = temp_542;
    // 0x000D70: 0x59A0040000770708 Ffma
    temp_543 = fma(temp_539, temp_539, temp_540);
    // 0x000D78: 0x49A0050C02970B0C Ffma
    temp_544 = fma(temp_511, vp_c3.data[10].y, temp_530);
    // 0x000D88: 0x5080000000570808 Mufu
    temp_545 = inversesqrt(temp_543);
    // 0x000D90: 0x49A0048C01E70609 Ffma
    temp_546 = fma(temp_518, vp_c3.data[7].z, temp_538);
    // 0x000D98: 0x49A0068C0227060D Ffma
    temp_547 = fma(temp_518, vp_c3.data[8].z, temp_541);
    // 0x000DA8: 0x4C58300C03371314 Fadd
    temp_548 = 0.0 - vp_c3.data[12].w;
    temp_549 = temp_463 + temp_548;
    // 0x000DB0: 0x51A00B1802F70F0F Ffma
    temp_550 = fma(temp_527, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000DB8: 0xEFF07F800B47FF14 Ast
    out_attr3.y = temp_549;
    // 0x000DC8: 0x49A0060C02A7060C Ffma
    temp_551 = fma(temp_518, vp_c3.data[10].z, temp_544);
    // 0x000DD0: 0xEFF07F801007FF0F Ast
    out_attr8.x = temp_550;
    // 0x000DD8: 0x4C6810180BB71010 Fmul
    temp_552 = temp_491 * vp_c6.data[46].w;
    // 0x000DE8: 0x5C68100000870707 Fmul
    temp_553 = temp_539 * temp_545;
    // 0x000DF0: 0xEFF07F801187FF10 Ast
    out_attr9.z = temp_552;
    // 0x000DF8: 0x5C68100000870303 Fmul
    temp_554 = temp_523 * temp_545;
    // 0x000E08: 0xEFF07F800887FF07 Ast
    out_attr0.z = temp_553;
    // 0x000E10: 0x5C68100000870E0E Fmul
    temp_555 = temp_535 * temp_545;
    // 0x000E18: 0xEFF07F800807FF03 Ast
    out_attr0.x = temp_554;
    // 0x000E28: 0x5C6810000077010B Fmul
    temp_556 = temp_465 * temp_553;
    // 0x000E30: 0xEFF07F800847FF0E Ast
    out_attr0.y = temp_555;
    // 0x000E38: 0x5C68100000370502 Fmul
    temp_557 = temp_466 * temp_554;
    // 0x000E48: 0x5C68100000E70406 Fmul
    temp_558 = temp_464 * temp_555;
    // 0x000E50: 0x4C58100C01F70909 Fadd
    temp_559 = temp_546 + vp_c3.data[7].w;
    // 0x000E58: 0x4C58100C02B70C0C Fadd
    temp_560 = temp_551 + vp_c3.data[10].w;
    // 0x000E68: 0xEFF07F800707FF09 Ast
    gl_Position.x = temp_559;
    // 0x000E70: 0x59A2058000E7050B Ffma
    temp_561 = 0.0 - temp_556;
    temp_562 = fma(temp_466, temp_555, temp_561);
    // 0x000E78: 0xEFF07F8007C7FF0C Ast
    gl_Position.w = temp_560;
    // 0x000E88: 0x59A2010000770402 Ffma
    temp_563 = 0.0 - temp_557;
    temp_564 = fma(temp_464, temp_553, temp_563);
    // 0x000E90: 0x59A2030000370106 Ffma
    temp_565 = 0.0 - temp_558;
    temp_566 = fma(temp_465, temp_554, temp_565);
    // 0x000E98: 0x4C58100C02370D0D Fadd
    temp_567 = temp_547 + vp_c3.data[8].w;
    // 0x000EA8: 0x5C68100000070B0B Fmul
    temp_568 = temp_562 * temp_148;
    // 0x000EB0: 0xEFF07F800747FF0D Ast
    gl_Position.y = temp_567;
    // 0x000EB8: 0x5C68100000070202 Fmul
    temp_569 = temp_564 * temp_148;
    // 0x000EC8: 0xEFF07F800A07FF0B Ast
    out_attr2.x = temp_568;
    // 0x000ED0: 0x5C68100000070606 Fmul
    temp_570 = temp_566 * temp_148;
    // 0x000ED8: 0xEFF07F800A47FF02 Ast
    out_attr2.y = temp_569;
    // 0x000EE8: 0xEFF07F800A87FF06 Ast
    out_attr2.z = temp_570;
    // 0x000EF0: 0xE30000000007000F Exit
    return;
}
