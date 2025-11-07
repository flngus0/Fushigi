#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
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

layout (binding = 9, std140) uniform _fp_c8
{
    precise vec4 data[4096];
} fp_c8;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 8, std140) uniform _fp_c7
{
    precise vec4 data[4096];
} fp_c7;

layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_34;
layout (binding = 2) uniform sampler2D fp_t_tcb_30;
layout (binding = 3) uniform samplerCube fp_t_tcb_16;
layout (binding = 4) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 5) uniform samplerCube fp_t_tcb_18;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
layout (location = 7) in vec4 in_attr7;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise vec2 temp_6;
    precise float temp_7;
    precise float temp_8;
    precise vec3 temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise vec3 temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
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
    uint temp_174;
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
    int temp_187;
    precise float temp_188;
    precise float temp_189;
    int temp_190;
    uint temp_191;
    uint temp_192;
    int temp_193;
    precise float temp_194;
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
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
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
    bool temp_253;
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
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    int temp_286;
    bool temp_287;
    int temp_288;
    int temp_289;
    int temp_290;
    int temp_291;
    int temp_292;
    uint temp_293;
    uint temp_294;
    int temp_295;
    precise float temp_296;
    int temp_297;
    int temp_298;
    uint temp_299;
    uint temp_300;
    int temp_301;
    precise float temp_302;
    int temp_303;
    uint temp_304;
    int temp_305;
    precise float temp_306;
    int temp_307;
    uint temp_308;
    uint temp_309;
    int temp_310;
    precise float temp_311;
    int temp_312;
    uint temp_313;
    int temp_314;
    precise float temp_315;
    int temp_316;
    uint temp_317;
    uint temp_318;
    int temp_319;
    precise float temp_320;
    int temp_321;
    uint temp_322;
    int temp_323;
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
    int temp_344;
    uint temp_345;
    uint temp_346;
    int temp_347;
    precise float temp_348;
    int temp_349;
    uint temp_350;
    int temp_351;
    precise float temp_352;
    precise float temp_353;
    precise float temp_354;
    int temp_355;
    uint temp_356;
    uint temp_357;
    int temp_358;
    precise float temp_359;
    int temp_360;
    uint temp_361;
    int temp_362;
    precise float temp_363;
    precise float temp_364;
    precise float temp_365;
    precise float temp_366;
    precise float temp_367;
    precise float temp_368;
    precise float temp_369;
    int temp_370;
    uint temp_371;
    uint temp_372;
    int temp_373;
    precise float temp_374;
    int temp_375;
    uint temp_376;
    int temp_377;
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
    uint temp_390;
    int temp_391;
    bool temp_392;
    uint temp_393;
    precise float temp_394;
    precise float temp_395;
    precise float temp_396;
    precise float temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    uint temp_401;
    precise float temp_402;
    bool temp_403;
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
    int temp_433;
    uint temp_434;
    uint temp_435;
    int temp_436;
    precise float temp_437;
    precise float temp_438;
    uint temp_439;
    uint temp_440;
    int temp_441;
    precise float temp_442;
    int temp_443;
    uint temp_444;
    int temp_445;
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
    precise vec3 temp_522;
    precise float temp_523;
    precise float temp_524;
    precise float temp_525;
    precise float temp_526;
    precise vec3 temp_527;
    precise float temp_528;
    precise float temp_529;
    precise float temp_530;
    precise vec3 temp_531;
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
    precise float temp_571;
    precise float temp_572;
    precise float temp_573;
    precise float temp_574;
    precise float temp_575;
    precise float temp_576;
    precise float temp_577;
    precise float temp_578;
    precise float temp_579;
    precise float temp_580;
    precise float temp_581;
    precise float temp_582;
    precise float temp_583;
    precise float temp_584;
    precise float temp_585;
    precise float temp_586;
    precise float temp_587;
    precise float temp_588;
    precise float temp_589;
    precise float temp_590;
    precise float temp_591;
    precise float temp_592;
    precise float temp_593;
    precise float temp_594;
    precise float temp_595;
    precise float temp_596;
    precise float temp_597;
    precise float temp_598;
    precise float temp_599;
    precise float temp_600;
    precise float temp_601;
    precise float temp_602;
    precise float temp_603;
    precise float temp_604;
    precise float temp_605;
    precise float temp_606;
    precise float temp_607;
    precise float temp_608;
    // 0x000008: 0xE003FF87CFF7FF10 Ipa
    // 0x000010: 0x5080000000471010 Mufu
    // 0x000018: 0xE043FF8F0107FF04 Ipa
    temp_0 = in_attr7.x;
    // 0x000028: 0xE043FF8F4107FF05 Ipa
    temp_1 = in_attr7.y;
    // 0x000030: 0xE043FF8E8107FF08 Ipa
    temp_2 = in_attr6.z;
    // 0x000038: 0xE043FF8EC107FF09 Ipa
    temp_3 = in_attr6.w;
    // 0x000048: 0xE043FF8E0107FF00 Ipa
    temp_4 = in_attr6.x;
    // 0x000050: 0xE043FF8E4107FF01 Ipa
    temp_5 = in_attr6.y;
    // 0x000058: 0xD830026FF0570404 Texs
    temp_6 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_7 = temp_6.x;
    temp_8 = temp_6.y;
    // 0x000068: 0xD8220340A0970808 Texs
    temp_9 = texture(fp_t_tcb_34, vec2(temp_2, temp_3)).xyz;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    temp_12 = temp_9.z;
    // 0x000070: 0xD822030020170000 Texs
    temp_13 = texture(fp_t_tcb_30, vec2(temp_4, temp_5)).xyz;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    temp_16 = temp_13.z;
    // 0x000078: 0xE043FF8B0107FF28 Ipa
    temp_17 = in_attr3.x;
    // 0x000088: 0xE043FF8B4107FF16 Ipa
    temp_18 = in_attr3.y;
    // 0x000090: 0xE043FF8B8107FF1D Ipa
    temp_19 = in_attr3.z;
    // 0x000098: 0xE043FF8A0107FF0E Ipa
    temp_20 = in_attr2.x;
    // 0x0000A8: 0xE043FF890107FF13 Ipa
    temp_21 = in_attr1.x;
    // 0x0000B0: 0xE043FF880107FF03 Ipa
    temp_22 = in_attr0.x;
    // 0x0000B8: 0xE043FF8A4107FF0F Ipa
    temp_23 = in_attr2.y;
    // 0x0000C8: 0xE043FF894107FF0D Ipa
    temp_24 = in_attr1.y;
    // 0x0000D0: 0xE043FF884107FF07 Ipa
    temp_25 = in_attr0.y;
    // 0x0000D8: 0xE043FF8A8107FF11 Ipa
    temp_26 = in_attr2.z;
    // 0x0000E8: 0xE043FF898107FF0B Ipa
    temp_27 = in_attr1.z;
    // 0x0000F0: 0xE043FF888107FF06 Ipa
    temp_28 = in_attr0.z;
    // 0x0000F8: 0xE2900000DF800000 Ssy
    // 0x000108: 0x5C6810000287280C Fmul
    temp_29 = temp_17 * temp_17;
    // 0x000110: 0x5C68100001371312 Fmul
    temp_30 = temp_21 * temp_21;
    // 0x000118: 0x5C68100000370314 Fmul
    temp_31 = temp_22 * temp_22;
    // 0x000128: 0x59A006000167160C Ffma
    temp_32 = fma(temp_18, temp_18, temp_29);
    // 0x000130: 0x59A0090000D70D15 Ffma
    temp_33 = fma(temp_24, temp_24, temp_30);
    // 0x000138: 0x59A00A0000770717 Ffma
    temp_34 = fma(temp_25, temp_25, temp_31);
    // 0x000148: 0x59A0060001D71D18 Ffma
    temp_35 = fma(temp_19, temp_19, temp_32);
    // 0x000150: 0x5C68100000E70E0C Fmul
    temp_36 = temp_20 * temp_20;
    // 0x000158: 0x508000000057181B Mufu
    temp_37 = inversesqrt(temp_35);
    // 0x000168: 0x59A00A8000B70B15 Ffma
    temp_38 = fma(temp_27, temp_27, temp_33);
    // 0x000170: 0x59A00B8000670617 Ffma
    temp_39 = fma(temp_28, temp_28, temp_34);
    // 0x000178: 0x5080000000571518 Mufu
    temp_40 = inversesqrt(temp_38);
    // 0x000188: 0x59A0060000F70F0C Ffma
    temp_41 = fma(temp_23, temp_23, temp_36);
    // 0x000190: 0x5080000000571719 Mufu
    temp_42 = inversesqrt(temp_39);
    // 0x000198: 0x59A0060001171112 Ffma
    temp_43 = fma(temp_26, temp_26, temp_41);
    // 0x0001A8: 0x5C69100001B72828 Fmul
    temp_44 = 0.0 - temp_37;
    temp_45 = temp_17 * temp_44;
    // 0x0001B0: 0x5080000000571214 Mufu
    temp_46 = inversesqrt(temp_43);
    // 0x0001B8: 0x5C69100001B7160C Fmul
    temp_47 = 0.0 - temp_37;
    temp_48 = temp_18 * temp_47;
    // 0x0001C8: 0x5C69100001B71D1D Fmul
    temp_49 = 0.0 - temp_37;
    temp_50 = temp_19 * temp_49;
    // 0x0001D0: 0x5C68100001871313 Fmul
    temp_51 = temp_21 * temp_40;
    // 0x0001D8: 0x4C58301805C7281A Fadd
    temp_52 = 0.0 - fp_c6.data[23].x;
    temp_53 = temp_45 + temp_52;
    // 0x0001E8: 0x4C58301805D70C1B Fadd
    temp_54 = 0.0 - fp_c6.data[23].y;
    temp_55 = temp_48 + temp_54;
    // 0x0001F0: 0x4C58301805E71D1C Fadd
    temp_56 = 0.0 - fp_c6.data[23].z;
    temp_57 = temp_50 + temp_56;
    // 0x0001F8: 0x5C68100001A71A1E Fmul
    temp_58 = temp_53 * temp_53;
    // 0x000208: 0x5C68100001470E16 Fmul
    temp_59 = temp_20 * temp_46;
    // 0x000210: 0x5C68100001470F12 Fmul
    temp_60 = temp_23 * temp_46;
    // 0x000218: 0x5C68100001471114 Fmul
    temp_61 = temp_26 * temp_46;
    // 0x000228: 0x5C68100001870D11 Fmul
    temp_62 = temp_24 * temp_40;
    // 0x000230: 0x5C68100001870B0F Fmul
    temp_63 = temp_27 * temp_40;
    // 0x000238: 0x59A00F0001B71B1E Ffma
    temp_64 = fma(temp_55, temp_55, temp_58);
    // 0x000248: 0x5C6810000197070D Fmul
    temp_65 = temp_25 * temp_42;
    // 0x000250: 0x5C6810000197060B Fmul
    temp_66 = temp_28 * temp_42;
    // 0x000258: 0x5C68100001970319 Fmul
    temp_67 = temp_22 * temp_42;
    // 0x000268: 0x59A00F0001C71C1E Ffma
    temp_68 = fma(temp_57, temp_57, temp_64);
    // 0x000270: 0x5080000000571E15 Mufu
    temp_69 = inversesqrt(temp_68);
    // 0x000278: 0x5C68100001571A06 Fmul
    temp_70 = temp_53 * temp_69;
    // 0x000288: 0x5C68100001571B0E Fmul
    temp_71 = temp_55 * temp_69;
    // 0x000290: 0x5C68100001571C07 Fmul
    temp_72 = temp_57 * temp_69;
    // 0x000298: 0x4C69101805C70615 Fmul
    temp_73 = 0.0 - fp_c6.data[23].x;
    temp_74 = temp_70 * temp_73;
    // 0x0002A8: 0x5C68100000672817 Fmul
    temp_75 = temp_45 * temp_70;
    // 0x0002B0: 0x49A10A9805D70E15 Ffma
    temp_76 = 0.0 - fp_c6.data[23].y;
    temp_77 = fma(temp_71, temp_76, temp_74);
    // 0x0002B8: 0x49A50A9805E70715 Ffma
    temp_78 = 0.0 - fp_c6.data[23].z;
    temp_79 = fma(temp_72, temp_78, temp_77);
    temp_80 = clamp(temp_79, 0.0, 1.0);
    // 0x0002C8: 0xF0F0000034270000 Depbar
    // 0x0002D0: 0x5C68100000570503 Fmul
    temp_81 = temp_8 * temp_8;
    // 0x0002D8: 0x5C68100000571616 Fmul
    temp_82 = temp_59 * temp_8;
    // 0x0002E8: 0x5C68100000571212 Fmul
    temp_83 = temp_60 * temp_8;
    // 0x0002F0: 0x5C68100000571405 Fmul
    temp_84 = temp_61 * temp_8;
    // 0x0002F8: 0x59A00B8000E70C14 Ffma
    temp_85 = fma(temp_48, temp_71, temp_75);
    // 0x000308: 0x59A0018000470403 Ffma
    temp_86 = fma(temp_7, temp_7, temp_81);
    // 0x000310: 0x59A00B0001370413 Ffma
    temp_87 = fma(temp_7, temp_51, temp_82);
    // 0x000318: 0x59A0090001170412 Ffma
    temp_88 = fma(temp_7, temp_62, temp_83);
    // 0x000328: 0x01040DF760C7F016 Mov32i
    // 0x000330: 0x59A0028000F70405 Ffma
    temp_89 = fma(temp_7, temp_63, temp_84);
    // 0x000338: 0x59A40A0000771D14 Ffma
    temp_90 = fma(temp_50, temp_72, temp_85);
    temp_91 = clamp(temp_90, 0.0, 1.0);
    // 0x000348: 0x385D103F80070303 Fadd
    temp_92 = 0.0 - temp_86;
    temp_93 = temp_92 + 1.0;
    temp_94 = clamp(temp_93, 0.0, 1.0);
    // 0x000350: 0x5080000000870318 Mufu
    temp_95 = sqrt(temp_94);
    // 0x000358: 0x49A20B0400271504 Ffma
    temp_96 = fma(temp_80, fp_c1.data[0].z, -6.98316002);
    // 0x000368: 0x59A0098001871913 Ffma
    temp_97 = fma(temp_67, temp_95, temp_87);
    // 0x000370: 0x59A0090001870D12 Ffma
    temp_98 = fma(temp_65, temp_95, temp_88);
    // 0x000378: 0x59A0028001870B05 Ffma
    temp_99 = fma(temp_66, temp_95, temp_89);
    // 0x000388: 0x5C6810000047150B Fmul
    temp_100 = temp_80 * temp_96;
    // 0x000390: 0xE003FF874FF7FF15 Ipa
    temp_101 = gl_FragCoord.y;
    temp_102 = support_buffer.render_scale[0];
    temp_103 = temp_101 / temp_102;
    // 0x000398: 0x49A20B040027140D Ffma
    temp_104 = fma(temp_91, fp_c1.data[0].z, -6.98316002);
    // 0x0003A8: 0x5C68100001371303 Fmul
    temp_105 = temp_97 * temp_97;
    // 0x0003B0: 0x5C90008000B7000B Rro
    // 0x0003B8: 0x5C68100000D71414 Fmul
    temp_106 = temp_91 * temp_104;
    // 0x0003C8: 0x5080000000270B0B Mufu
    temp_107 = exp2(temp_100);
    // 0x0003D0: 0x59A0018001271203 Ffma
    temp_108 = fma(temp_98, temp_98, temp_105);
    // 0x0003D8: 0x59A0018000570504 Ffma
    temp_109 = fma(temp_99, temp_99, temp_108);
    // 0x0003E8: 0x4C98079406470003 Mov
    // 0x0003F0: 0x5080000000570404 Mufu
    temp_110 = inversesqrt(temp_109);
    // 0x0003F8: 0x49A1059407B70B0B Ffma
    temp_111 = 0.0 - fp_c5.data[30].w;
    temp_112 = fma(temp_107, temp_111, temp_107);
    // 0x000408: 0x4C6810180A070303 Fmul
    temp_113 = fp_c5.data[25].x * fp_c6.data[40].x;
    // 0x000410: 0x4C58101407B70B0B Fadd
    temp_114 = temp_112 + fp_c5.data[30].w;
    // 0x000418: 0x386013BF8007030F Fmnmx
    temp_115 = min(temp_113, 1.0);
    // 0x000428: 0x5C6810000047130D Fmul
    temp_116 = temp_97 * temp_110;
    // 0x000430: 0xE003FF870FF7FF13 Ipa
    temp_117 = gl_FragCoord.x;
    temp_118 = support_buffer.render_scale[0];
    temp_119 = temp_117 / temp_118;
    // 0x000438: 0x5C68100000471203 Fmul
    temp_120 = temp_98 * temp_110;
    // 0x000448: 0x5C68100000470512 Fmul
    temp_121 = temp_99 * temp_110;
    // 0x000450: 0x4C68100C04B71515 Fmul
    temp_122 = temp_103 * fp_c3.data[18].w;
    // 0x000458: 0x0103F0000007F004 Mov32i
    // 0x000468: 0x4C60178400070F0F Fmnmx
    temp_123 = max(temp_115, fp_c1.data[0].x);
    // 0x000470: 0x5C68100000670D11 Fmul
    temp_124 = temp_116 * temp_70;
    // 0x000478: 0x5C68100002870D05 Fmul
    temp_125 = temp_116 * temp_45;
    // 0x000488: 0x386810411007151B Fmul
    temp_126 = temp_122 * 9.0;
    // 0x000490: 0x5CA8148001B70A1B F2f
    temp_127 = floor(temp_126);
    // 0x000498: 0x59A0088000E70311 Ffma
    temp_128 = fma(temp_120, temp_71, temp_124);
    // 0x0004A8: 0x51A4078400070F0E Ffma
    temp_129 = fma(temp_123, temp_123, fp_c1.data[0].x);
    temp_130 = clamp(temp_129, 0.0, 1.0);
    // 0x0004B0: 0x32A0023F00070F1F Ffma
    temp_131 = fma(temp_123, 0.5, 0.5);
    // 0x0004B8: 0x59A0028000C70304 Ffma
    temp_132 = fma(temp_120, temp_48, temp_125);
    // 0x0004C8: 0x59A4088000771211 Ffma
    temp_133 = fma(temp_121, temp_72, temp_128);
    temp_134 = clamp(temp_133, 0.0, 1.0);
    // 0x0004D0: 0x5C90008001470007 Rro
    // 0x0004D8: 0x5C68100000E70E1E Fmul
    temp_135 = temp_130 * temp_130;
    // 0x0004E8: 0x5080000000270707 Mufu
    temp_136 = exp2(temp_106);
    // 0x0004F0: 0x4C69101805C70D14 Fmul
    temp_137 = 0.0 - fp_c6.data[23].x;
    temp_138 = temp_116 * temp_137;
    // 0x0004F8: 0x59A4020001D71204 Ffma
    temp_139 = fma(temp_121, temp_50, temp_132);
    temp_140 = clamp(temp_139, 0.0, 1.0);
    // 0x000508: 0x5C68120001F71F1F Fmul
    temp_141 = temp_131 * 0.5;
    temp_142 = temp_141 * temp_131;
    // 0x000510: 0x59A2088001E71106 Ffma
    temp_143 = 0.0 - temp_134;
    temp_144 = fma(temp_134, temp_135, temp_143);
    // 0x000518: 0x4C68100C04A71313 Fmul
    temp_145 = temp_119 * fp_c3.data[18].z;
    // 0x000528: 0x59A1020001F70405 Ffma
    temp_146 = 0.0 - temp_142;
    temp_147 = fma(temp_140, temp_146, temp_140);
    // 0x000530: 0x51A003040017110F Ffma
    temp_148 = fma(temp_134, temp_144, fp_c1.data[0].y);
    // 0x000538: 0x49A1039407B70707 Ffma
    temp_149 = 0.0 - fp_c5.data[30].w;
    temp_150 = fma(temp_136, temp_149, temp_136);
    // 0x000548: 0x5080000000470F0F Mufu
    temp_151 = 1.0 / temp_148;
    // 0x000550: 0x3868104180071319 Fmul
    temp_152 = temp_145 * 16.0;
    // 0x000558: 0x49A10A1805D70311 Ffma
    temp_153 = 0.0 - fp_c6.data[23].y;
    temp_154 = fma(temp_120, temp_153, temp_138);
    // 0x000568: 0x5CA8148001970A19 F2f
    temp_155 = floor(temp_152);
    // 0x000570: 0x5C58100000571F13 Fadd
    temp_156 = temp_142 + temp_147;
    // 0x000578: 0x4C58101407B7071A Fadd
    temp_157 = temp_150 + fp_c5.data[30].w;
    // 0x000588: 0x5080000000471321 Mufu
    temp_158 = 1.0 / temp_156;
    // 0x000590: 0x3859103F80070407 Fadd
    temp_159 = 0.0 - temp_140;
    temp_160 = temp_159 + 1.0;
    // 0x000598: 0x49A5089805E71211 Ffma
    temp_161 = 0.0 - fp_c6.data[23].z;
    temp_162 = fma(temp_121, temp_161, temp_154);
    temp_163 = clamp(temp_162, 0.0, 1.0);
    // 0x0005A8: 0x4C68101406270715 Fmul
    temp_164 = temp_160 * fp_c5.data[24].z;
    // 0x0005B0: 0x4C68101406770714 Fmul
    temp_165 = temp_160 * fp_c5.data[25].w;
    // 0x0005B8: 0x5080400000371515 Mufu
    temp_166 = abs(temp_164);
    temp_167 = log2(temp_166);
    // 0x0005C8: 0x32A00CC180071B20 Ffma
    temp_168 = fma(temp_127, 16.0, temp_155);
    // 0x0005D0: 0x5080400000371419 Mufu
    temp_169 = abs(temp_165);
    temp_170 = log2(temp_169);
    // 0x0005D8: 0x4C68101801571117 Fmul
    temp_171 = temp_163 * fp_c6.data[5].y;
    // 0x0005E8: 0x5CB0118002070A20 F2i
    temp_172 = trunc(temp_168);
    temp_173 = max(temp_172, 0.0);
    temp_174 = uint(temp_173);
    // 0x0005F0: 0x59A1088001F71106 Ffma
    temp_175 = 0.0 - temp_142;
    temp_176 = fma(temp_163, temp_175, temp_163);
    // 0x0005F8: 0x4C68101801671118 Fmul
    temp_177 = temp_163 * fp_c6.data[5].z;
    // 0x000608: 0x4C68101801471116 Fmul
    temp_178 = temp_163 * fp_c6.data[5].x;
    // 0x000610: 0x3868103F00072121 Fmul
    temp_179 = temp_158 * 0.5;
    // 0x000618: 0x4C98079403D70013 Mov
    // 0x000628: 0x1E23EA2F98371707 Fmul32i
    temp_180 = temp_171 * 0.318309873;
    // 0x000630: 0x5C58100000671F17 Fadd
    temp_181 = temp_142 + temp_176;
    // 0x000638: 0x1E23EA2F98371818 Fmul32i
    temp_182 = temp_177 * 0.318309873;
    // 0x000648: 0x5080000000471717 Mufu
    temp_183 = 1.0 / temp_181;
    // 0x000650: 0x1E23EA2F98371605 Fmul32i
    temp_184 = temp_178 * 0.318309873;
    // 0x000658: 0x4C98079403C70016 Mov
    // 0x000668: 0x59A1038000771A06 Ffma
    temp_185 = 0.0 - temp_180;
    temp_186 = fma(temp_157, temp_185, temp_180);
    // 0x000670: 0x3848000000872022 Shl
    temp_187 = int(temp_174) << 8;
    // 0x000678: 0x4C98079403E70014 Mov
    // 0x000688: 0x59A10C0001871A07 Ffma
    temp_188 = 0.0 - temp_182;
    temp_189 = fma(temp_157, temp_188, temp_182);
    // 0x000690: 0xEF94008200472222 Ldc
    temp_190 = temp_187 + 0x2004;
    temp_191 = uint(temp_190) >> 2;
    temp_192 = temp_191 >> 2;
    temp_193 = int(temp_191) & 3;
    temp_194 = fp_c8.data[int(temp_192)][temp_193];
    // 0x000698: 0x4C68101406371518 Fmul
    temp_195 = temp_167 * fp_c5.data[24].w;
    // 0x0006A8: 0x59A1028000571A05 Ffma
    temp_196 = 0.0 - temp_184;
    temp_197 = fma(temp_157, temp_196, temp_184);
    // 0x0006B0: 0x4C98079C2327001A Mov
    // 0x0006B8: 0x5C68100000F70E15 Fmul
    temp_198 = temp_130 * temp_151;
    // 0x0006C8: 0x386810410007191B Fmul
    temp_199 = temp_170 * 8.0;
    // 0x0006D0: 0x4C58301403871619 Fadd
    temp_200 = 0.0 - fp_c5.data[14].x;
    temp_201 = fp_c5.data[15].x + temp_200;
    // 0x0006D8: 0x4C58301403A7141C Fadd
    temp_202 = 0.0 - fp_c5.data[14].z;
    temp_203 = fp_c5.data[15].z + temp_202;
    // 0x0006E8: 0x5C90008001870023 Rro
    // 0x0006F0: 0x5C68100001772118 Fmul
    temp_204 = temp_179 * temp_183;
    // 0x0006F8: 0x5084000000272317 Mufu
    temp_205 = exp2(temp_195);
    temp_206 = clamp(temp_205, 0.0, 1.0);
    // 0x000708: 0x4C5C101406971A0F Fadd
    temp_207 = fp_c7.data[140].z + fp_c5.data[26].y;
    temp_208 = clamp(temp_207, 0.0, 1.0);
    // 0x000710: 0x4C5830140397131A Fadd
    temp_209 = 0.0 - fp_c5.data[14].y;
    temp_210 = fp_c5.data[15].y + temp_209;
    // 0x000718: 0x5C68100001571515 Fmul
    temp_211 = temp_198 * temp_198;
    // 0x000728: 0x5C90008001B70024 Rro
    // 0x000730: 0x4C6810140687161B Fmul
    temp_212 = fp_c5.data[15].x * fp_c5.data[26].x;
    // 0x000738: 0x4C68101406871313 Fmul
    temp_213 = fp_c5.data[15].y * fp_c5.data[26].x;
    // 0x000748: 0x5C68100000F71919 Fmul
    temp_214 = temp_201 * temp_208;
    // 0x000750: 0x5C68100000F71A1A Fmul
    temp_215 = temp_210 * temp_208;
    // 0x000758: 0x5C68100000F71C1C Fmul
    temp_216 = temp_203 * temp_208;
    // 0x000768: 0x4C68101406670816 Fmul
    temp_217 = temp_10 * fp_c5.data[25].z;
    // 0x000770: 0x5C68100001871518 Fmul
    temp_218 = temp_211 * temp_204;
    // 0x000778: 0x5084000000272415 Mufu
    temp_219 = exp2(temp_199);
    temp_220 = clamp(temp_219, 0.0, 1.0);
    // 0x000788: 0x5C68100000470D23 Fmul
    temp_221 = temp_116 * temp_140;
    // 0x000790: 0x51A00C9403871708 Ffma
    temp_222 = fma(temp_206, temp_214, fp_c5.data[14].x);
    // 0x000798: 0x51A00D140397171A Ffma
    temp_223 = fma(temp_206, temp_215, fp_c5.data[14].y);
    // 0x0007A8: 0x51A00E1403A7171C Ffma
    temp_224 = fma(temp_206, temp_216, fp_c5.data[14].z);
    // 0x0007B0: 0x4C68101406670917 Fmul
    temp_225 = temp_11 * fp_c5.data[25].z;
    // 0x0007B8: 0x4C68101406670A09 Fmul
    temp_226 = temp_12 * fp_c5.data[25].z;
    // 0x0007C8: 0x49A00B1406570000 Ffma
    temp_227 = fma(temp_14, fp_c5.data[25].y, temp_217);
    // 0x0007D0: 0x4C6810140687140A Fmul
    temp_228 = fp_c5.data[15].z * fp_c5.data[26].x;
    // 0x0007D8: 0x5C68100001871111 Fmul
    temp_229 = temp_163 * temp_218;
    // 0x0007E8: 0x32A2144000072323 Ffma
    temp_230 = 0.0 - temp_45;
    temp_231 = fma(temp_221, 2.0, temp_230);
    // 0x0007F0: 0x49A00B9406570101 Ffma
    temp_232 = fma(temp_15, fp_c5.data[25].y, temp_225);
    // 0x0007F8: 0x49A0049406570202 Ffma
    temp_233 = fma(temp_16, fp_c5.data[25].y, temp_226);
    // 0x000808: 0x4C68101402C70000 Fmul
    temp_234 = temp_227 * fp_c5.data[11].x;
    // 0x000810: 0x59A0040001B71508 Ffma
    temp_235 = fma(temp_220, temp_212, temp_222);
    // 0x000818: 0x59A00D0001371513 Ffma
    temp_236 = fma(temp_220, temp_213, temp_223);
    // 0x000828: 0x59A00E0000A7150A Ffma
    temp_237 = fma(temp_220, temp_228, temp_224);
    // 0x000830: 0x4C68101402D70101 Fmul
    temp_238 = temp_232 * fp_c5.data[11].y;
    // 0x000838: 0x4C68101402E70202 Fmul
    temp_239 = temp_233 * fp_c5.data[11].z;
    // 0x000848: 0x59A1000000070F09 Ffma
    temp_240 = 0.0 - temp_234;
    temp_241 = fma(temp_208, temp_240, temp_234);
    // 0x000850: 0x5C68100000070F16 Fmul
    temp_242 = temp_208 * temp_234;
    // 0x000858: 0x4C68101801470B00 Fmul
    temp_243 = temp_114 * fp_c6.data[5].x;
    // 0x000868: 0x5C68100000471217 Fmul
    temp_244 = temp_121 * temp_140;
    // 0x000870: 0x59A1008000170F14 Ffma
    temp_245 = 0.0 - temp_238;
    temp_246 = fma(temp_208, temp_245, temp_238);
    // 0x000878: 0x5C68100000170F15 Fmul
    temp_247 = temp_208 * temp_238;
    // 0x000888: 0x59A1010000270F01 Ffma
    temp_248 = 0.0 - temp_239;
    temp_249 = fma(temp_208, temp_248, temp_239);
    // 0x000890: 0x5C68100000270F0F Fmul
    temp_250 = temp_208 * temp_239;
    // 0x000898: 0x4C68101801570B02 Fmul
    temp_251 = temp_114 * fp_c6.data[5].y;
    // 0x0008A8: 0x4C68101801670B0B Fmul
    temp_252 = temp_114 * fp_c6.data[5].z;
    // 0x0008B0: 0x5B6603800FF72207 Isetp
    temp_253 = floatBitsToUint(temp_194) <= 0u;
    // 0x0008B8: 0x32A00B3F00070909 Ffma
    temp_254 = fma(temp_241, 0.5, temp_242);
    // 0x0008C8: 0x32A00ABF00071414 Ffma
    temp_255 = fma(temp_246, 0.5, temp_247);
    // 0x0008D0: 0x32A007BF0007010F Ffma
    temp_256 = fma(temp_249, 0.5, temp_250);
    // 0x0008D8: 0x5C68100000071118 Fmul
    temp_257 = temp_229 * temp_243;
    // 0x0008E8: 0x5C68100000271119 Fmul
    temp_258 = temp_229 * temp_251;
    // 0x0008F0: 0x5C68100000B7111C Fmul
    temp_259 = temp_229 * temp_252;
    // 0x0008F8: 0x5C68100000470316 Fmul
    temp_260 = temp_120 * temp_140;
    // 0x000908: 0x5C58100000970800 Fadd
    temp_261 = temp_235 + temp_254;
    // 0x000910: 0x5C58100001471301 Fadd
    temp_262 = temp_236 + temp_255;
    // 0x000918: 0x5C58100000F70A02 Fadd
    temp_263 = temp_237 + temp_256;
    // 0x000928: 0x5C9807800FF70008 Mov
    // 0x000930: 0x5C9807800FF70009 Mov
    // 0x000938: 0x5C9807800FF7000A Mov
    // 0x000948: 0x5C9807800FF7000B Mov
    // 0x000950: 0x5C9807800FF7000F Mov
    // 0x000958: 0x5C9807800FF70013 Mov
    // 0x000968: 0x32A2064000071616 Ffma
    temp_264 = 0.0 - temp_48;
    temp_265 = fma(temp_260, 2.0, temp_264);
    // 0x000970: 0x32A20EC000071717 Ffma
    temp_266 = 0.0 - temp_50;
    temp_267 = fma(temp_244, 2.0, temp_266);
    // 0x000978: 0x1E23E22F98371818 Fmul32i
    temp_268 = temp_257 * 0.159154937;
    // 0x000988: 0x1E23E22F98371919 Fmul32i
    temp_269 = temp_258 * 0.159154937;
    // 0x000990: 0x1E23E22F98371C1C Fmul32i
    temp_270 = temp_259 * 0.159154937;
    // 0x000998: 0xF0F800000000000F Sync
    temp_271 = 0.0;
    temp_272 = 0.0;
    temp_273 = 0.0;
    temp_274 = 0.0;
    temp_275 = 0.0;
    temp_276 = 0.0;
    temp_277 = 0.0;
    temp_278 = 0.0;
    temp_279 = 0.0;
    temp_280 = 0.0;
    temp_281 = 0.0;
    temp_282 = 0.0;
    if (!temp_253)
    {
        // 0x0009A8: 0x5C9807800FF70029 Mov
        // 0x0009B0: 0xE043FF8D0107FF25 Ipa
        temp_283 = in_attr5.x;
        // 0x0009B8: 0xE043FF8D4107FF24 Ipa
        temp_284 = in_attr5.y;
        // 0x0009C8: 0xE043FF8D8107FF26 Ipa
        temp_285 = in_attr5.z;
        temp_286 = 0;
        do
        {
            // 0x0009D0: 0x5C1802000297202F Iscadd
            temp_288 = int(temp_174) << 4;
            temp_289 = temp_288 + temp_286;
            // 0x0009D8: 0xE290000050000000 Ssy
            // 0x0009E8: 0x1C00000000172929 Iadd32i
            temp_290 = temp_286 + 1;
            // 0x0009F0: 0x3848000000472F2F Shl
            temp_291 = temp_289 << 4;
            // 0x0009F8: 0x5B6C03800227290F Isetp
            temp_287 = uint(temp_290) >= floatBitsToUint(temp_194);
            // 0x000A08: 0xEF94008200072F27 Ldc
            temp_292 = temp_291 + 0x2000;
            temp_293 = uint(temp_292) >> 2;
            temp_294 = temp_293 >> 2;
            temp_295 = int(temp_293) & 3;
            temp_296 = fp_c8.data[int(temp_294)][temp_295];
            // 0x000A10: 0x3848000000672727 Shl
            temp_297 = floatBitsToInt(temp_296) << 6;
            // 0x000A18: 0xEF95008001072710 Ldc
            temp_298 = temp_297 + 16;
            temp_299 = uint(temp_298) >> 2;
            temp_300 = temp_299 >> 2;
            temp_301 = int(temp_299) & 3;
            temp_302 = fp_c8.data[int(temp_300)][temp_301];
            temp_303 = int(temp_299) + 1;
            temp_304 = uint(temp_303) >> 2;
            temp_305 = temp_303 & 3;
            temp_306 = fp_c8.data[int(temp_304)][temp_305];
            // 0x000A28: 0xEF95008001872714 Ldc
            temp_307 = temp_297 + 24;
            temp_308 = uint(temp_307) >> 2;
            temp_309 = temp_308 >> 2;
            temp_310 = int(temp_308) & 3;
            temp_311 = fp_c8.data[int(temp_309)][temp_310];
            temp_312 = int(temp_308) + 1;
            temp_313 = uint(temp_312) >> 2;
            temp_314 = temp_312 & 3;
            temp_315 = fp_c8.data[int(temp_313)][temp_314];
            // 0x000A30: 0xEF9500800207271A Ldc
            temp_316 = temp_297 + 32;
            temp_317 = uint(temp_316) >> 2;
            temp_318 = temp_317 >> 2;
            temp_319 = int(temp_317) & 3;
            temp_320 = fp_c8.data[int(temp_318)][temp_319];
            temp_321 = int(temp_317) + 1;
            temp_322 = uint(temp_321) >> 2;
            temp_323 = temp_321 & 3;
            temp_324 = fp_c8.data[int(temp_322)][temp_323];
            // 0x000A38: 0x5C5830000257102A Fadd
            temp_325 = 0.0 - temp_283;
            temp_326 = temp_302 + temp_325;
            // 0x000A48: 0x5C5830000247112B Fadd
            temp_327 = 0.0 - temp_284;
            temp_328 = temp_306 + temp_327;
            // 0x000A50: 0x5C5830000267142C Fadd
            temp_329 = 0.0 - temp_285;
            temp_330 = temp_311 + temp_329;
            // 0x000A58: 0x5C68100002A72A2E Fmul
            temp_331 = temp_326 * temp_326;
            // 0x000A68: 0x59A1160002C71515 Ffma
            temp_332 = 0.0 - temp_330;
            temp_333 = fma(temp_315, temp_332, temp_330);
            // 0x000A70: 0x59A0170002B72B2E Ffma
            temp_334 = fma(temp_328, temp_328, temp_331);
            // 0x000A78: 0x59A017000157152D Ffma
            temp_335 = fma(temp_333, temp_333, temp_334);
            // 0x000A88: 0x5080000000572D10 Mufu
            temp_336 = inversesqrt(temp_335);
            // 0x000A90: 0x5C68100001072A11 Fmul
            temp_337 = temp_326 * temp_336;
            // 0x000A98: 0x5C68100001071515 Fmul
            temp_338 = temp_333 * temp_336;
            // 0x000AA8: 0x5C68100001072B10 Fmul
            temp_339 = temp_328 * temp_336;
            // 0x000AB0: 0x5C69100001A71111 Fmul
            temp_340 = 0.0 - temp_320;
            temp_341 = temp_337 * temp_340;
            // 0x000AB8: 0x59A1088001B7101B Ffma
            temp_342 = 0.0 - temp_324;
            temp_343 = fma(temp_339, temp_342, temp_341);
            // 0x000AC8: 0xEF95008002872710 Ldc
            temp_344 = temp_297 + 40;
            temp_345 = uint(temp_344) >> 2;
            temp_346 = temp_345 >> 2;
            temp_347 = int(temp_345) & 3;
            temp_348 = fp_c8.data[int(temp_346)][temp_347];
            temp_349 = int(temp_345) + 1;
            temp_350 = uint(temp_349) >> 2;
            temp_351 = temp_349 & 3;
            temp_352 = fp_c8.data[int(temp_350)][temp_351];
            // 0x000AD0: 0x59A10D800107151B Ffma
            temp_353 = 0.0 - temp_348;
            temp_354 = fma(temp_338, temp_353, temp_343);
            // 0x000AD8: 0xEF95008003872714 Ldc
            temp_355 = temp_297 + 56;
            temp_356 = uint(temp_355) >> 2;
            temp_357 = temp_356 >> 2;
            temp_358 = int(temp_356) & 3;
            temp_359 = fp_c8.data[int(temp_357)][temp_358];
            temp_360 = int(temp_356) + 1;
            temp_361 = uint(temp_360) >> 2;
            temp_362 = temp_360 & 3;
            temp_363 = fp_c8.data[int(temp_361)][temp_362];
            // 0x000AE8: 0x010404000007F010 Mov32i
            // 0x000AF0: 0x59A40A8001471B15 Ffma
            temp_364 = fma(temp_354, temp_359, temp_363);
            temp_365 = clamp(temp_364, 0.0, 1.0);
            // 0x000AF8: 0x5080000000872D1B Mufu
            temp_366 = sqrt(temp_335);
            // 0x000B08: 0x5C6810000157151A Fmul
            temp_367 = temp_365 * temp_365;
            // 0x000B10: 0x33A0084000071515 Ffma
            temp_368 = fma(temp_365, -2.0, 3.0);
            // 0x000B18: 0x5C68100001571A1A Fmul
            temp_369 = temp_367 * temp_368;
            // 0x000B28: 0xEF95008003072714 Ldc
            temp_370 = temp_297 + 48;
            temp_371 = uint(temp_370) >> 2;
            temp_372 = temp_371 >> 2;
            temp_373 = int(temp_371) & 3;
            temp_374 = fp_c8.data[int(temp_372)][temp_373];
            temp_375 = int(temp_371) + 1;
            temp_376 = uint(temp_375) >> 2;
            temp_377 = temp_375 & 3;
            temp_378 = fp_c8.data[int(temp_376)][temp_377];
            // 0x000B30: 0x59A40A8001B7141B Ffma
            temp_379 = fma(temp_374, temp_366, temp_378);
            temp_380 = clamp(temp_379, 0.0, 1.0);
            // 0x000B38: 0x33A0084000071B10 Ffma
            temp_381 = fma(temp_380, -2.0, 3.0);
            // 0x000B48: 0x5C68100001B71B1B Fmul
            temp_382 = temp_380 * temp_380;
            // 0x000B50: 0x5C68100001071B10 Fmul
            temp_383 = temp_382 * temp_381;
            // 0x000B58: 0x5C68100001071A1A Fmul
            temp_384 = temp_369 * temp_383;
            // 0x000B68: 0x39585042F0072C10 Fadd
            temp_385 = abs(temp_330);
            temp_386 = temp_385 + -120.0;
            // 0x000B70: 0x1EABD4CCCCD71010 Fmul32i
            temp_387 = temp_386 * -0.0500000007;
            temp_388 = clamp(temp_387, 0.0, 1.0);
            // 0x000B78: 0x5C68100001A7101A Fmul
            temp_389 = temp_388 * temp_384;
            // 0x000B88: 0x36247F9000171010 Xmad
            temp_390 = floatBitsToUint(temp_388) >> 16;
            temp_391 = int(temp_390) << 16;
            // 0x000B90: 0x5BB383800FF71A07 Fsetp
            temp_392 = temp_389 <= 0.0;
            // 0x000B98: 0x7A05083C0F00FF10 Hadd2
            temp_286 = temp_290;
            temp_393 = uint(temp_391);
            temp_394 = temp_271;
            temp_395 = temp_272;
            temp_396 = temp_273;
            temp_397 = temp_274;
            temp_398 = temp_275;
            temp_399 = temp_276;
            if (temp_392)
            {
                temp_400 = unpackHalf2x16(uint(temp_391)).y;
                temp_401 = packHalf2x16(vec2(1.0, temp_400));
                temp_393 = temp_401;
            }
            // 0x000BA8: 0x5D2103902FF71007 Hsetp2
            temp_402 = unpackHalf2x16(temp_393).x;
            temp_403 = temp_402 == 0.0;
            // 0x000BB0: 0xF0F800000008000F Sync
            if (temp_403)
            {
                // 0x000BB8: 0x5080000000471414 Mufu
                temp_404 = 1.0 / temp_374;
                // 0x000BC8: 0x5080000000471111 Mufu
                temp_405 = 1.0 / temp_352;
                // 0x000BD0: 0x5C69100001471515 Fmul
                temp_406 = 0.0 - temp_404;
                temp_407 = temp_378 * temp_406;
                // 0x000BD8: 0x5C60138001572C2C Fmnmx
                temp_408 = min(temp_330, temp_407);
                // 0x000BE8: 0x5C61178002C7152C Fmnmx
                temp_409 = 0.0 - temp_407;
                temp_410 = max(temp_409, temp_408);
                // 0x000BF0: 0x59A0170002C72C2E Ffma
                temp_411 = fma(temp_410, temp_410, temp_334);
                // 0x000BF8: 0x5080000000572E2D Mufu
                temp_412 = inversesqrt(temp_411);
                // 0x000C08: 0x5080000000872E2E Mufu
                temp_413 = sqrt(temp_411);
                // 0x000C10: 0x5C68100002D72A2A Fmul
                temp_414 = temp_326 * temp_412;
                // 0x000C18: 0x5C68100002D72B15 Fmul
                temp_415 = temp_328 * temp_412;
                // 0x000C28: 0x5C68100002D72C2B Fmul
                temp_416 = temp_410 * temp_412;
                // 0x000C30: 0x5C58100002A72810 Fadd
                temp_417 = temp_45 + temp_414;
                // 0x000C38: 0x5C58100001570C1B Fadd
                temp_418 = temp_48 + temp_415;
                // 0x000C48: 0x5C68100001071014 Fmul
                temp_419 = temp_417 * temp_417;
                // 0x000C50: 0x59A00A0001B71B2D Ffma
                temp_420 = fma(temp_418, temp_418, temp_419);
                // 0x000C58: 0x5C58100002B71D14 Fadd
                temp_421 = temp_50 + temp_416;
                // 0x000C68: 0x59A016800147142D Ffma
                temp_422 = fma(temp_421, temp_421, temp_420);
                // 0x000C70: 0x5080000000572D2D Mufu
                temp_423 = inversesqrt(temp_422);
                // 0x000C78: 0x5C68100002D7102F Fmul
                temp_424 = temp_417 * temp_423;
                // 0x000C88: 0x5C68100002D71B2C Fmul
                temp_425 = temp_418 * temp_423;
                // 0x000C90: 0x5C68100002D71410 Fmul
                temp_426 = temp_421 * temp_423;
                // 0x000C98: 0x5C68100002F72A1B Fmul
                temp_427 = temp_414 * temp_424;
                // 0x000CA8: 0x5C68100002A70D2A Fmul
                temp_428 = temp_116 * temp_414;
                // 0x000CB0: 0x5C68100002F70D2F Fmul
                temp_429 = temp_116 * temp_424;
                // 0x000CB8: 0x59A00D8002C7152D Ffma
                temp_430 = fma(temp_415, temp_425, temp_427);
                // 0x000CC8: 0x59A0150001570315 Ffma
                temp_431 = fma(temp_120, temp_415, temp_428);
                // 0x000CD0: 0x59A0178002C7031B Ffma
                temp_432 = fma(temp_120, temp_425, temp_429);
                // 0x000CD8: 0xEF9400800087272C Ldc
                temp_433 = temp_297 + 8;
                temp_434 = uint(temp_433) >> 2;
                temp_435 = temp_434 >> 2;
                temp_436 = int(temp_434) & 3;
                temp_437 = fp_c8.data[int(temp_435)][temp_436];
                // 0x000CE8: 0x59A00A8002B7122A Ffma
                temp_438 = fma(temp_121, temp_416, temp_431);
                // 0x000CF0: 0xEF95008000072714 Ldc
                temp_439 = uint(temp_297) >> 2;
                temp_440 = temp_439 >> 2;
                temp_441 = int(temp_439) & 3;
                temp_442 = fp_c8.data[int(temp_440)][temp_441];
                temp_443 = int(temp_439) + 1;
                temp_444 = uint(temp_443) >> 2;
                temp_445 = temp_443 & 3;
                temp_446 = fp_c8.data[int(temp_444)][temp_445];
                // 0x000CF8: 0x59A40D800107121B Ffma
                temp_447 = fma(temp_121, temp_426, temp_432);
                temp_448 = clamp(temp_447, 0.0, 1.0);
                // 0x000D08: 0x59A4168001072B2B Ffma
                temp_449 = fma(temp_416, temp_426, temp_430);
                temp_450 = clamp(temp_449, 0.0, 1.0);
                // 0x000D10: 0x01040DF760C7F010 Mov32i
                // 0x000D18: 0x59A20D8001B71E2D Ffma
                temp_451 = 0.0 - temp_448;
                temp_452 = fma(temp_135, temp_448, temp_451);
                // 0x000D28: 0x49A2080400272B10 Ffma
                temp_453 = fma(temp_450, fp_c1.data[0].z, -6.98316002);
                // 0x000D30: 0x51A0168400171B2D Ffma
                temp_454 = fma(temp_448, temp_452, fp_c1.data[0].y);
                // 0x000D38: 0x5C68100001072B2B Fmul
                temp_455 = temp_450 * temp_453;
                // 0x000D48: 0x5080000000472D1B Mufu
                temp_456 = 1.0 / temp_454;
                // 0x000D50: 0x5C5C30000FF72A10 Fadd
                temp_457 = temp_438 + -0.0;
                temp_458 = clamp(temp_457, 0.0, 1.0);
                // 0x000D58: 0x5C90008002B7002F Rro
                // 0x000D68: 0x5C68100001B70E1B Fmul
                temp_459 = temp_130 * temp_456;
                // 0x000D70: 0x5C68100001B71B27 Fmul
                temp_460 = temp_459 * temp_459;
                // 0x000D78: 0x5C68100002C71A2C Fmul
                temp_461 = temp_389 * temp_437;
                // 0x000D88: 0x5C68100001471A14 Fmul
                temp_462 = temp_389 * temp_442;
                // 0x000D90: 0x5C68100001571A15 Fmul
                temp_463 = temp_389 * temp_446;
                // 0x000D98: 0x51A017040037111A Ffma
                temp_464 = fma(temp_405, temp_413, fp_c1.data[0].w);
                // 0x000DA8: 0x59A1080001071F11 Ffma
                temp_465 = 0.0 - temp_458;
                temp_466 = fma(temp_142, temp_465, temp_458);
                // 0x000DB0: 0x5080000000471A1A Mufu
                temp_467 = 1.0 / temp_464;
                // 0x000DB8: 0x5C58100001171F2E Fadd
                temp_468 = temp_142 + temp_466;
                // 0x000DC8: 0x5080000000272F11 Mufu
                temp_469 = exp2(temp_455);
                // 0x000DD0: 0x1E23FB3333371A1B Fmul32i
                temp_470 = temp_467 * 1.39999998;
                // 0x000DD8: 0x5080000000472E2E Mufu
                temp_471 = 1.0 / temp_468;
                // 0x000DE8: 0x5C68100001B71B1B Fmul
                temp_472 = temp_470 * temp_470;
                // 0x000DF0: 0x49A1089407B71111 Ffma
                temp_473 = 0.0 - fp_c5.data[30].w;
                temp_474 = fma(temp_469, temp_473, temp_469);
                // 0x000DF8: 0x59A10D8001B72A1B Ffma
                temp_475 = 0.0 - temp_472;
                temp_476 = fma(temp_438, temp_475, temp_472);
                // 0x000E08: 0x5C68100002E7212B Fmul
                temp_477 = temp_179 * temp_471;
                // 0x000E10: 0x4C58101407B7111A Fadd
                temp_478 = temp_474 + fp_c5.data[30].w;
                // 0x000E18: 0x5C5C100001B72A2A Fadd
                temp_479 = temp_438 + temp_476;
                temp_480 = clamp(temp_479, 0.0, 1.0);
                // 0x000E28: 0x5C68100002B72727 Fmul
                temp_481 = temp_460 * temp_477;
                // 0x000E30: 0x5C68100001471A11 Fmul
                temp_482 = temp_478 * temp_462;
                // 0x000E38: 0x5C68100001571A1B Fmul
                temp_483 = temp_478 * temp_463;
                // 0x000E48: 0x5C68100002C71A1A Fmul
                temp_484 = temp_478 * temp_461;
                // 0x000E50: 0x5C68100002A72C2C Fmul
                temp_485 = temp_461 * temp_480;
                // 0x000E58: 0x5C68100002771010 Fmul
                temp_486 = temp_458 * temp_481;
                // 0x000E68: 0x5C68100002A71427 Fmul
                temp_487 = temp_462 * temp_480;
                // 0x000E70: 0x5C68100002A71514 Fmul
                temp_488 = temp_463 * temp_480;
                // 0x000E78: 0x49A0050400572C0A Ffma
                temp_489 = fma(temp_485, fp_c1.data[1].y, temp_271);
                // 0x000E88: 0x5C68100001071111 Fmul
                temp_490 = temp_482 * temp_486;
                // 0x000E90: 0x5C68100001071B15 Fmul
                temp_491 = temp_483 * temp_486;
                // 0x000E98: 0x5C68100001071A1A Fmul
                temp_492 = temp_484 * temp_486;
                // 0x000EA8: 0x49A0040400572708 Ffma
                temp_493 = fma(temp_487, fp_c1.data[1].y, temp_272);
                // 0x000EB0: 0x49A0048400571409 Ffma
                temp_494 = fma(temp_488, fp_c1.data[1].y, temp_273);
                // 0x000EB8: 0x49A005840047110B Ffma
                temp_495 = fma(temp_490, fp_c1.data[1].x, temp_274);
                // 0x000EC8: 0x49A007840047150F Ffma
                temp_496 = fma(temp_491, fp_c1.data[1].x, temp_275);
                // 0x000ED0: 0x49A0098400471A13 Ffma
                temp_497 = fma(temp_492, fp_c1.data[1].x, temp_276);
                // 0x000ED8: 0xF0F800000007000F Sync
                temp_394 = temp_489;
                temp_395 = temp_493;
                temp_396 = temp_494;
                temp_397 = temp_495;
                temp_398 = temp_496;
                temp_399 = temp_497;
            }
            // 0x000EE8: 0xE2400FFFAE09000F Bra
            temp_271 = temp_394;
            temp_272 = temp_395;
            temp_273 = temp_396;
            temp_274 = temp_397;
            temp_275 = temp_398;
            temp_276 = temp_399;
            temp_277 = temp_395;
            temp_278 = temp_396;
            temp_279 = temp_394;
            temp_280 = temp_398;
            temp_281 = temp_397;
            temp_282 = temp_399;
        }
        while (!temp_287);
        // 0x000EF0: 0xF0F800000007000F Sync
    }
    // 0x000EF8: 0x5C6257800167230E Fmnmx
    temp_498 = abs(temp_231);
    temp_499 = abs(temp_265);
    temp_500 = max(temp_498, temp_499);
    // 0x000F08: 0x4C98079406470010 Mov
    // 0x000F10: 0x5C62578000370D0C Fmnmx
    temp_501 = abs(temp_116);
    temp_502 = abs(temp_120);
    temp_503 = max(temp_501, temp_502);
    // 0x000F18: 0x010000000017F014 Mov32i
    // 0x000F28: 0x5C60578000E7170E Fmnmx
    temp_504 = abs(temp_267);
    temp_505 = max(temp_504, temp_500);
    // 0x000F30: 0x4C6810180A071011 Fmul
    temp_506 = fp_c5.data[25].x * fp_c6.data[40].x;
    // 0x000F38: 0x5080000000470E10 Mufu
    temp_507 = 1.0 / temp_505;
    // 0x000F48: 0x5C60578000C7120C Fmnmx
    temp_508 = abs(temp_121);
    temp_509 = max(temp_508, temp_503);
    // 0x000F50: 0x5080000000470C0C Mufu
    temp_510 = 1.0 / temp_509;
    // 0x000F58: 0x386013BF80071111 Fmnmx
    temp_511 = min(temp_506, 1.0);
    // 0x000F68: 0x4C6017840007111E Fmnmx
    temp_512 = max(temp_511, fp_c1.data[0].x);
    // 0x000F70: 0x5C68100001072315 Fmul
    temp_513 = temp_231 * temp_507;
    // 0x000F78: 0x5C68100001071616 Fmul
    temp_514 = temp_265 * temp_507;
    // 0x000F88: 0x5C69100001071717 Fmul
    temp_515 = 0.0 - temp_507;
    temp_516 = temp_267 * temp_515;
    // 0x000F90: 0x5C69100000C71212 Fmul
    temp_517 = 0.0 - temp_510;
    temp_518 = temp_121 * temp_517;
    // 0x000F98: 0x5C68100000C70D10 Fmul
    temp_519 = temp_116 * temp_510;
    // 0x000FA8: 0x5C68100000C70311 Fmul
    temp_520 = temp_120 * temp_510;
    // 0x000FB0: 0x38681040E0071E21 Fmul
    temp_521 = temp_512 * 7.0;
    // 0x000FB8: 0xC0BA0163EFF7100C Tex
    temp_522 = textureLod(fp_t_tcb_16, vec3(temp_519, temp_520, temp_518), 0.0).xyz;
    temp_523 = temp_522.x;
    temp_524 = temp_522.y;
    temp_525 = temp_522.z;
    // 0x000FC8: 0x3868104080071E1B Fmul
    temp_526 = temp_512 * 4.0;
    // 0x000FD0: 0xC1BA0143F2171414 Tex
    temp_527 = textureLod(fp_t_tcb_14, vec4(temp_513, temp_514, temp_516, float(1)), temp_521).xyz;
    temp_528 = temp_527.x;
    temp_529 = temp_527.y;
    temp_530 = temp_527.z;
    // 0x000FD8: 0x5C9807800127001A Mov
    // 0x000FE8: 0xD9A20181D1A7101A Texs
    temp_531 = textureLod(fp_t_tcb_18, vec3(temp_519, temp_520, temp_518), temp_526).xyz;
    temp_532 = temp_531.x;
    temp_533 = temp_531.y;
    temp_534 = temp_531.z;
    // 0x000FF0: 0x3859103F80071E1E Fadd
    temp_535 = 0.0 - temp_512;
    temp_536 = temp_535 + 1.0;
    // 0x000FF8: 0x1E23E468DB970420 Fmul32i
    temp_537 = temp_140 * 0.193900004;
    // 0x001008: 0x010410676C97F022 Mov32i
    // 0x001010: 0x0103E2CD9E87F024 Mov32i
    // 0x001018: 0x49A002980A170805 Ffma
    temp_538 = fma(temp_277, fp_c6.data[40].y, temp_197);
    // 0x001028: 0x49A003180A170906 Ffma
    temp_539 = fma(temp_278, fp_c6.data[40].y, temp_186);
    // 0x001030: 0x5C68100001E71E1E Fmul
    temp_540 = temp_536 * temp_536;
    // 0x001038: 0x0103F0000007F009 Mov32i
    // 0x001048: 0x49A0110400A70422 Ffma
    temp_541 = fma(temp_140, fp_c1.data[2].z, 8.40400028);
    // 0x001050: 0x49A003980A170A07 Ffma
    temp_542 = fma(temp_279, fp_c6.data[40].y, temp_189);
    // 0x001058: 0x49A00C980A170F19 Ffma
    temp_543 = fma(temp_280, fp_c6.data[40].y, temp_269);
    // 0x001068: 0x49A00C180A170B0B Ffma
    temp_544 = fma(temp_281, fp_c6.data[40].y, temp_268);
    // 0x001070: 0x5C68100001E71E1F Fmul
    temp_545 = temp_540 * temp_540;
    // 0x001078: 0xE003FF87CFF7FF1E Ipa
    // 0x001088: 0x0104066978D7F012 Mov32i
    // 0x001090: 0x51A0110400B70422 Ffma
    temp_546 = fma(temp_140, temp_541, fp_c1.data[2].w);
    // 0x001098: 0x4C98079407B70017 Mov
    // 0x0010A8: 0x32A004BF00070303 Ffma
    temp_547 = fma(temp_120, 0.5, 0.5);
    // 0x0010B0: 0x4C98079800970009 Mov
    // 0x0010B8: 0x49A0100400671F20 Ffma
    temp_548 = fma(temp_545, fp_c1.data[1].z, temp_537);
    // 0x0010C8: 0x49A2120400971F10 Ffma
    temp_549 = fma(temp_545, fp_c1.data[2].y, -0.168799996);
    // 0x0010D0: 0x49A2090400771F08 Ffma
    temp_550 = fma(temp_545, fp_c1.data[1].w, -3.60299993);
    // 0x0010D8: 0x51A0110400C70422 Ffma
    temp_551 = fma(temp_140, temp_546, fp_c1.data[3].x);
    // 0x0010E8: 0x4C98079800A70012 Mov
    // 0x0010F0: 0x49A00E180A171313 Ffma
    temp_552 = fma(temp_282, fp_c6.data[40].y, temp_270);
    // 0x0010F8: 0x088BF05D63972011 Fadd32i
    temp_553 = temp_548 + -0.522800028;
    // 0x001108: 0x5C68100001071F10 Fmul
    temp_554 = temp_545 * temp_549;
    // 0x001110: 0x51A0040400871F08 Ffma
    temp_555 = fma(temp_545, temp_550, fp_c1.data[2].x);
    // 0x001118: 0x5C68100001170411 Fmul
    temp_556 = temp_140 * temp_553;
    // 0x001128: 0x5C6013800227100A Fmnmx
    temp_557 = min(temp_554, temp_551);
    // 0x001130: 0x4C98079800870004 Mov
    // 0x001138: 0x386C104248071710 Fmul
    temp_558 = fp_c5.data[30].w * 50.0;
    temp_559 = clamp(temp_558, 0.0, 1.0);
    // 0x001148: 0x59A0088000871F08 Ffma
    temp_560 = fma(temp_545, temp_555, temp_556);
    // 0x001150: 0x5080000000471E1E Mufu
    // 0x001158: 0x5C5C30000FF70A0A Fadd
    temp_561 = temp_557 + -0.0;
    temp_562 = clamp(temp_561, 0.0, 1.0);
    // 0x001168: 0x4C59101800470404 Fadd
    temp_563 = 0.0 - fp_c6.data[2].x;
    temp_564 = temp_563 + fp_c6.data[1].x;
    // 0x001170: 0x4C5C100400D70811 Fadd
    temp_565 = temp_560 + fp_c1.data[3].y;
    temp_566 = clamp(temp_565, 0.0, 1.0);
    // 0x001178: 0x4C59101800570908 Fadd
    temp_567 = 0.0 - fp_c6.data[2].y;
    temp_568 = temp_567 + fp_c6.data[1].y;
    // 0x001188: 0x5C68100001070A10 Fmul
    temp_569 = temp_562 * temp_559;
    // 0x001190: 0x4C59101800671209 Fadd
    temp_570 = 0.0 - fp_c6.data[2].z;
    temp_571 = temp_570 + fp_c6.data[1].z;
    // 0x001198: 0x5C59100001170A11 Fadd
    temp_572 = 0.0 - temp_562;
    temp_573 = temp_572 + temp_566;
    // 0x0011A8: 0x51A002180087030A Ffma
    temp_574 = fma(temp_547, temp_564, fp_c6.data[2].x);
    // 0x0011B0: 0x51A0041800970308 Ffma
    temp_575 = fma(temp_547, temp_568, fp_c6.data[2].y);
    // 0x0011B8: 0x51A0049800A70309 Ffma
    temp_576 = fma(temp_547, temp_571, fp_c6.data[2].z);
    // 0x0011C8: 0x49A0081407B71110 Ffma
    temp_577 = fma(temp_573, fp_c5.data[30].w, temp_569);
    // 0x0011D0: 0x49A0060400570A0A Ffma
    temp_578 = fma(temp_574, fp_c1.data[1].y, temp_523);
    // 0x0011D8: 0xE043FF8C81E7FF0C Ipa
    temp_579 = in_attr4.z;
    // 0x0011E8: 0x49A0068400570808 Ffma
    temp_580 = fma(temp_575, fp_c1.data[1].y, temp_524);
    // 0x0011F0: 0x49A0070400570909 Ffma
    temp_581 = fma(temp_576, fp_c1.data[1].y, temp_525);
    // 0x0011F8: 0x49A00D980857151B Ffma
    temp_582 = fma(temp_529, fp_c6.data[33].y, temp_533);
    // 0x001208: 0x49A00D180857141A Ffma
    temp_583 = fma(temp_528, fp_c6.data[33].y, temp_532);
    // 0x001210: 0x5C58100000870606 Fadd
    temp_584 = temp_539 + temp_580;
    // 0x001218: 0x49A00E9808571616 Ffma
    temp_585 = fma(temp_530, fp_c6.data[33].y, temp_534);
    // 0x001228: 0x0103F8000007F008 Mov32i
    // 0x001230: 0x5C58100000A70505 Fadd
    temp_586 = temp_538 + temp_578;
    // 0x001238: 0x59A00C8001B71019 Ffma
    temp_587 = fma(temp_577, temp_582, temp_543);
    // 0x001248: 0x59A0058001A7100B Ffma
    temp_588 = fma(temp_577, temp_583, temp_544);
    // 0x001250: 0x5C58100000970707 Fadd
    temp_589 = temp_542 + temp_581;
    // 0x001258: 0x59A0098001671010 Ffma
    temp_590 = fma(temp_577, temp_585, temp_552);
    // 0x001268: 0x4C5C101403570809 Fadd
    temp_591 = 1.0 + fp_c5.data[13].y;
    temp_592 = clamp(temp_591, 0.0, 1.0);
    // 0x001270: 0x49A00C9403570604 Ffma
    temp_593 = fma(temp_584, fp_c5.data[13].y, temp_587);
    // 0x001278: 0x49A0059403470503 Ffma
    temp_594 = fma(temp_586, fp_c5.data[13].x, temp_588);
    // 0x001288: 0x4C5C101403470806 Fadd
    temp_595 = 1.0 + fp_c5.data[13].x;
    temp_596 = clamp(temp_595, 0.0, 1.0);
    // 0x001290: 0x49A0081403670705 Ffma
    temp_597 = fma(temp_589, fp_c5.data[13].z, temp_590);
    // 0x001298: 0x4C5C101403670808 Fadd
    temp_598 = 1.0 + fp_c5.data[13].z;
    temp_599 = clamp(temp_598, 0.0, 1.0);
    // 0x0012A8: 0x0103F8000007F007 Mov32i
    // 0x0012B0: 0x5C68100000470904 Fmul
    temp_600 = temp_592 * temp_593;
    // 0x0012B8: 0x5C68100000370603 Fmul
    temp_601 = temp_596 * temp_594;
    // 0x0012C8: 0x5C9807800FF70006 Mov
    // 0x0012D0: 0x5C68100000570805 Fmul
    temp_602 = temp_599 * temp_597;
    // 0x0012D8: 0x49A0021406C70101 Ffma
    temp_603 = fma(temp_262, fp_c5.data[27].x, temp_600);
    // 0x0012E8: 0x4C58100C03870C04 Fadd
    temp_604 = temp_579 + fp_c3.data[14].x;
    // 0x0012F0: 0x49A0019406C70000 Ffma
    temp_605 = fma(temp_261, fp_c5.data[27].x, temp_601);
    // 0x0012F8: 0x0103F8000007F003 Mov32i
    // 0x001308: 0x49A0029406C70202 Ffma
    temp_606 = fma(temp_263, fp_c5.data[27].x, temp_602);
    // 0x001310: 0x0103EC000007F005 Mov32i
    // 0x001318: 0x49A37F8C03C70404 Ffma
    temp_607 = 0.0 - fp_c3.data[15].x;
    temp_608 = fma(temp_604, temp_607, -0.0);
    // 0x001328: 0xE30000000007000F Exit
    out_attr0.x = temp_605;
    out_attr0.y = temp_603;
    out_attr0.z = temp_606;
    out_attr0.w = 1.0;
    out_attr1.x = temp_608;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
