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

layout (binding = 8, std140) uniform _fp_c7
{
    precise vec4 data[4096];
} fp_c7;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 0) uniform sampler2D fp_t_tcb_36;
layout (binding = 1) uniform sampler2D fp_t_tcb_26;
layout (binding = 2) uniform sampler2D fp_t_tcb_34;
layout (binding = 3) uniform sampler2D fp_t_tcb_32;
layout (binding = 4) uniform sampler2D fp_t_tcb_38;
layout (binding = 5) uniform sampler2D fp_t_tcb_24;
layout (binding = 6) uniform samplerCube fp_t_tcb_18;
layout (binding = 7) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 8) uniform samplerCube fp_t_tcb_16;
layout (binding = 9) uniform sampler2D fp_t_tcb_3A;
layout (binding = 10) uniform sampler2D fp_t_tcb_30;
layout (binding = 11) uniform sampler2D fp_t_tcb_20;
layout (binding = 12) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
layout (location = 7) in vec4 in_attr7;
layout (location = 8) in vec4 in_attr8;

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
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise vec2 temp_11;
    precise float temp_12;
    precise float temp_13;
    precise vec2 temp_14;
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
    precise vec3 temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise vec3 temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise vec3 temp_161;
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
    precise float temp_283;
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
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    precise float temp_307;
    precise float temp_308;
    precise float temp_309;
    precise float temp_310;
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
    precise vec3 temp_426;
    precise float temp_427;
    precise float temp_428;
    precise float temp_429;
    precise float temp_430;
    precise float temp_431;
    precise float temp_432;
    precise vec3 temp_433;
    precise float temp_434;
    precise float temp_435;
    precise float temp_436;
    precise float temp_437;
    precise float temp_438;
    precise float temp_439;
    precise float temp_440;
    precise float temp_441;
    precise vec3 temp_442;
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
    // 0x000008: 0x4C98079C23070009 Mov
    // 0x000010: 0xE003FF87CFF7FF01 Ipa
    // 0x000018: 0x5080000000470101 Mufu
    // 0x000028: 0xE043FF8D8017FF00 Ipa
    temp_0 = in_attr5.z;
    // 0x000030: 0xE043FF8DC017FF02 Ipa
    temp_1 = in_attr5.w;
    // 0x000038: 0x49A0000400070908 Ffma
    temp_2 = fma(fp_c7.data[140].x, fp_c1.data[0].x, temp_0);
    // 0x000048: 0x49A0010400070909 Ffma
    temp_3 = fma(fp_c7.data[140].x, fp_c1.data[0].x, temp_1);
    // 0x000050: 0xD820036FF0970800 Texs
    temp_4 = texture(fp_t_tcb_36, vec2(temp_2, temp_3)).x;
    // 0x000058: 0xE043FF8D0017FF02 Ipa
    temp_5 = in_attr5.x;
    // 0x000068: 0xE043FF8D4017FF03 Ipa
    temp_6 = in_attr5.y;
    // 0x000070: 0xE043FF8E8017FF16 Ipa
    temp_7 = in_attr6.z;
    // 0x000078: 0xE043FF8EC017FF0F Ipa
    temp_8 = in_attr6.w;
    // 0x000088: 0x49A001040017001C Ffma
    temp_9 = fma(temp_4, fp_c1.data[0].y, temp_5);
    // 0x000090: 0x49A0018400270003 Ffma
    temp_10 = fma(temp_4, fp_c1.data[0].z, temp_6);
    // 0x000098: 0xD830026FF0371C06 Texs
    temp_11 = texture(fp_t_tcb_26, vec2(temp_9, temp_10)).xy;
    temp_12 = temp_11.x;
    temp_13 = temp_11.y;
    // 0x0000A8: 0xD830034FF0970804 Texs
    temp_14 = texture(fp_t_tcb_34, vec2(temp_2, temp_3)).xy;
    temp_15 = temp_14.x;
    temp_16 = temp_14.y;
    // 0x0000B0: 0xD820032FF0371C02 Texs
    temp_17 = texture(fp_t_tcb_32, vec2(temp_9, temp_10)).x;
    // 0x0000B8: 0xD822038FF0F71616 Texs
    temp_18 = texture(fp_t_tcb_38, vec2(temp_7, temp_8)).x;
    // 0x0000C8: 0xE043FF8A0017FF12 Ipa
    temp_19 = in_attr2.x;
    // 0x0000D0: 0xE043FF880017FF0E Ipa
    temp_20 = in_attr0.x;
    // 0x0000D8: 0xE043FF8A4017FF0A Ipa
    temp_21 = in_attr2.y;
    // 0x0000E8: 0xE043FF8B0017FF19 Ipa
    temp_22 = in_attr3.x;
    // 0x0000F0: 0xE043FF884017FF0D Ipa
    temp_23 = in_attr0.y;
    // 0x0000F8: 0xE043FF8A8017FF0C Ipa
    temp_24 = in_attr2.z;
    // 0x000108: 0xE043FF8B4017FF1A Ipa
    temp_25 = in_attr3.y;
    // 0x000110: 0xE043FF888017FF0B Ipa
    temp_26 = in_attr0.z;
    // 0x000118: 0xE043FF8B8017FF18 Ipa
    temp_27 = in_attr3.z;
    // 0x000128: 0x5C68100001271210 Fmul
    temp_28 = temp_19 * temp_19;
    // 0x000130: 0x5C68100000E70E08 Fmul
    temp_29 = temp_20 * temp_20;
    // 0x000138: 0x5C68100001971909 Fmul
    temp_30 = temp_22 * temp_22;
    // 0x000148: 0x59A0080000A70A0F Ffma
    temp_31 = fma(temp_21, temp_21, temp_28);
    // 0x000150: 0x59A0040000D70D08 Ffma
    temp_32 = fma(temp_23, temp_23, temp_29);
    // 0x000158: 0x59A0048001A71A09 Ffma
    temp_33 = fma(temp_25, temp_25, temp_30);
    // 0x000168: 0x59A0078000C70C14 Ffma
    temp_34 = fma(temp_24, temp_24, temp_31);
    // 0x000170: 0x59A0040000B70B10 Ffma
    temp_35 = fma(temp_26, temp_26, temp_32);
    // 0x000178: 0x508000000057140F Mufu
    temp_36 = inversesqrt(temp_34);
    // 0x000188: 0x59A0048001871811 Ffma
    temp_37 = fma(temp_27, temp_27, temp_33);
    // 0x000190: 0xE043FF890017FF09 Ipa
    temp_38 = in_attr1.x;
    // 0x000198: 0x4C9807940307001E Mov
    // 0x0001A8: 0x5080000000571010 Mufu
    temp_39 = inversesqrt(temp_35);
    // 0x0001B0: 0x5080000000571113 Mufu
    temp_40 = inversesqrt(temp_37);
    // 0x0001B8: 0x5C68100000F71208 Fmul
    temp_41 = temp_19 * temp_36;
    // 0x0001C8: 0x5C68100000F70A0A Fmul
    temp_42 = temp_21 * temp_36;
    // 0x0001D0: 0x5C68100000F70C0C Fmul
    temp_43 = temp_24 * temp_36;
    // 0x0001D8: 0xE043FF894017FF0F Ipa
    temp_44 = in_attr1.y;
    // 0x0001E8: 0x5C68100001070E0E Fmul
    temp_45 = temp_20 * temp_39;
    // 0x0001F0: 0x5C68100001070D0D Fmul
    temp_46 = temp_23 * temp_39;
    // 0x0001F8: 0x5C68100001070B0B Fmul
    temp_47 = temp_26 * temp_39;
    // 0x000208: 0xE043FF898017FF10 Ipa
    temp_48 = in_attr1.z;
    // 0x000210: 0x5C69100001371919 Fmul
    temp_49 = 0.0 - temp_40;
    temp_50 = temp_22 * temp_49;
    // 0x000218: 0x5C69100001371A1A Fmul
    temp_51 = 0.0 - temp_40;
    temp_52 = temp_25 * temp_51;
    // 0x000228: 0x5C69100001371818 Fmul
    temp_53 = 0.0 - temp_40;
    temp_54 = temp_27 * temp_53;
    // 0x000230: 0x5C68100000970912 Fmul
    temp_55 = temp_38 * temp_38;
    // 0x000238: 0x59A0090000F70F12 Ffma
    temp_56 = fma(temp_44, temp_44, temp_55);
    // 0x000248: 0x59A0090001071012 Ffma
    temp_57 = fma(temp_48, temp_48, temp_56);
    // 0x000250: 0x5080000000571212 Mufu
    temp_58 = inversesqrt(temp_57);
    // 0x000258: 0x5C68100001270909 Fmul
    temp_59 = temp_38 * temp_58;
    // 0x000268: 0x5C68100001270F0F Fmul
    temp_60 = temp_44 * temp_58;
    // 0x000270: 0x5C68100000770711 Fmul
    temp_61 = temp_13 * temp_13;
    // 0x000278: 0x5080000000871616 Mufu
    temp_62 = sqrt(temp_18);
    // 0x000288: 0x49A0031407F70404 Ffma
    temp_63 = fma(temp_15, fp_c5.data[31].w, temp_12);
    // 0x000290: 0x49A0039407F70507 Ffma
    temp_64 = fma(temp_16, fp_c5.data[31].w, temp_13);
    // 0x000298: 0x59A0088000670611 Ffma
    temp_65 = fma(temp_12, temp_12, temp_61);
    // 0x0002A8: 0x5C68100000470406 Fmul
    temp_66 = temp_63 * temp_63;
    // 0x0002B0: 0x385D103F80071111 Fadd
    temp_67 = 0.0 - temp_65;
    temp_68 = temp_67 + 1.0;
    temp_69 = clamp(temp_68, 0.0, 1.0);
    // 0x0002B8: 0x59A0030000770706 Ffma
    temp_70 = fma(temp_64, temp_64, temp_66);
    // 0x0002C8: 0x5080000000871105 Mufu
    temp_71 = sqrt(temp_69);
    // 0x0002D0: 0x5C68100001271011 Fmul
    temp_72 = temp_48 * temp_58;
    // 0x0002D8: 0x59A0030000570506 Ffma
    temp_73 = fma(temp_71, temp_71, temp_70);
    // 0x0002E8: 0x5080000000570606 Mufu
    temp_74 = inversesqrt(temp_73);
    // 0x0002F0: 0x5C68100000670707 Fmul
    temp_75 = temp_64 * temp_74;
    // 0x0002F8: 0x5C68100000670404 Fmul
    temp_76 = temp_63 * temp_74;
    // 0x000308: 0x5C68100000870713 Fmul
    temp_77 = temp_75 * temp_41;
    // 0x000310: 0x5C68100000670508 Fmul
    temp_78 = temp_71 * temp_74;
    // 0x000318: 0x5C68100000A7070A Fmul
    temp_79 = temp_75 * temp_42;
    // 0x000328: 0x5C68100000C70706 Fmul
    temp_80 = temp_75 * temp_43;
    // 0x000330: 0x5C68100001970E07 Fmul
    temp_81 = temp_45 * temp_50;
    // 0x000338: 0x59A0098000970409 Ffma
    temp_82 = fma(temp_76, temp_59, temp_77);
    // 0x000348: 0x59A0050000F7040A Ffma
    temp_83 = fma(temp_76, temp_60, temp_79);
    // 0x000350: 0x59A0030001170406 Ffma
    temp_84 = fma(temp_76, temp_72, temp_80);
    // 0x000358: 0x59A0038001A70D05 Ffma
    temp_85 = fma(temp_46, temp_52, temp_81);
    // 0x000368: 0x395C103F40070211 Fadd
    temp_86 = temp_17 + -0.75;
    temp_87 = clamp(temp_86, 0.0, 1.0);
    // 0x000370: 0x59A0048000870E09 Ffma
    temp_88 = fma(temp_45, temp_78, temp_82);
    // 0x000378: 0x59A0050000870D0A Ffma
    temp_89 = fma(temp_46, temp_78, temp_83);
    // 0x000388: 0x59A0030000870B06 Ffma
    temp_90 = fma(temp_47, temp_78, temp_84);
    // 0x000390: 0x59A4028001870B05 Ffma
    temp_91 = fma(temp_47, temp_54, temp_85);
    temp_92 = clamp(temp_91, 0.0, 1.0);
    // 0x000398: 0x4C98079406270008 Mov
    // 0x0003A8: 0x5C68100000970904 Fmul
    temp_93 = temp_88 * temp_88;
    // 0x0003B0: 0x51A1041406270508 Ffma
    temp_94 = 0.0 - fp_c5.data[24].z;
    temp_95 = fma(temp_92, temp_94, fp_c5.data[24].z);
    // 0x0003B8: 0x59A0020000A70A04 Ffma
    temp_96 = fma(temp_89, temp_89, temp_93);
    // 0x0003C8: 0x5080400000370808 Mufu
    temp_97 = abs(temp_95);
    temp_98 = log2(temp_97);
    // 0x0003D0: 0x59A002000067060B Ffma
    temp_99 = fma(temp_90, temp_90, temp_96);
    // 0x0003D8: 0x5080000000570B0B Mufu
    temp_100 = inversesqrt(temp_99);
    // 0x0003E8: 0x4C68101406370807 Fmul
    temp_101 = temp_98 * fp_c5.data[24].w;
    // 0x0003F0: 0x5C9000800077000E Rro
    // 0x0003F8: 0x5C68100000B70904 Fmul
    temp_102 = temp_88 * temp_100;
    // 0x000408: 0x5C68100000B70A05 Fmul
    temp_103 = temp_89 * temp_100;
    // 0x000410: 0x5C68100000B70606 Fmul
    temp_104 = temp_90 * temp_100;
    // 0x000418: 0x5084000000270E0B Mufu
    temp_105 = exp2(temp_101);
    temp_106 = clamp(temp_105, 0.0, 1.0);
    // 0x000428: 0x5C6810000047190C Fmul
    temp_107 = temp_50 * temp_102;
    // 0x000430: 0x59A0060000571A09 Ffma
    temp_108 = fma(temp_52, temp_103, temp_107);
    // 0x000438: 0x59A4048000671807 Ffma
    temp_109 = fma(temp_54, temp_104, temp_108);
    temp_110 = clamp(temp_109, 0.0, 1.0);
    // 0x000448: 0x3859103F80070209 Fadd
    temp_111 = 0.0 - temp_17;
    temp_112 = temp_111 + 1.0;
    // 0x000450: 0x5C6810000077060D Fmul
    temp_113 = temp_104 * temp_110;
    // 0x000458: 0x0983F19999A70908 Fadd32i
    temp_114 = 0.0 - temp_112;
    temp_115 = temp_114 + 0.600000024;
    // 0x000468: 0x5C6810000077040A Fmul
    temp_116 = temp_102 * temp_110;
    // 0x000470: 0x5C6810000077050C Fmul
    temp_117 = temp_103 * temp_110;
    // 0x000478: 0x32A20C4000070D0F Ffma
    temp_118 = 0.0 - temp_54;
    temp_119 = fma(temp_113, 2.0, temp_118);
    // 0x000488: 0x5C6257800057040D Fmnmx
    temp_120 = abs(temp_102);
    temp_121 = abs(temp_103);
    temp_122 = max(temp_120, temp_121);
    // 0x000490: 0x59A0048000870B08 Ffma
    temp_123 = fma(temp_106, temp_115, temp_112);
    // 0x000498: 0x32A20CC000070A0A Ffma
    temp_124 = 0.0 - temp_50;
    temp_125 = fma(temp_116, 2.0, temp_124);
    // 0x0004A8: 0x32A20D4000070C0C Ffma
    temp_126 = 0.0 - temp_52;
    temp_127 = fma(temp_117, 2.0, temp_126);
    // 0x0004B0: 0x5C60578000D70615 Fmnmx
    temp_128 = abs(temp_104);
    temp_129 = max(temp_128, temp_122);
    // 0x0004B8: 0x4C5C101406770808 Fadd
    temp_130 = temp_123 + fp_c5.data[25].w;
    temp_131 = clamp(temp_130, 0.0, 1.0);
    // 0x0004C8: 0x5080000000471517 Mufu
    temp_132 = 1.0 / temp_129;
    // 0x0004D0: 0x5C62578000C70A09 Fmnmx
    temp_133 = abs(temp_125);
    temp_134 = abs(temp_127);
    temp_135 = max(temp_133, temp_134);
    // 0x0004D8: 0x4C6810180A070808 Fmul
    temp_136 = temp_131 * fp_c6.data[40].x;
    // 0x0004E8: 0x5C60578000970F09 Fmnmx
    temp_137 = abs(temp_119);
    temp_138 = max(temp_137, temp_135);
    // 0x0004F0: 0x5080000000470909 Mufu
    temp_139 = 1.0 / temp_138;
    // 0x0004F8: 0x386013BF80070808 Fmnmx
    temp_140 = min(temp_136, 1.0);
    // 0x000508: 0x5C68100001770412 Fmul
    temp_141 = temp_102 * temp_132;
    // 0x000510: 0x5C68100001770513 Fmul
    temp_142 = temp_103 * temp_132;
    // 0x000518: 0x5C69100001770614 Fmul
    temp_143 = 0.0 - temp_132;
    temp_144 = temp_104 * temp_143;
    // 0x000528: 0xD822024FF0371C17 Texs
    temp_145 = texture(fp_t_tcb_24, vec2(temp_9, temp_10)).x;
    // 0x000530: 0x4C60178400470810 Fmnmx
    temp_146 = max(temp_140, fp_c1.data[1].x);
    // 0x000538: 0x5C98078001270008 Mov
    // 0x000548: 0x5C68100000970A0D Fmul
    temp_147 = temp_125 * temp_139;
    // 0x000550: 0x5C68100000970C0E Fmul
    temp_148 = temp_127 * temp_139;
    // 0x000558: 0x5C69100000970F0F Fmul
    temp_149 = 0.0 - temp_139;
    temp_150 = temp_119 * temp_149;
    // 0x000568: 0x3868104080071015 Fmul
    temp_151 = temp_146 * 4.0;
    // 0x000570: 0x010000000017F00C Mov32i
    // 0x000578: 0x38681040E007101B Fmul
    temp_152 = temp_146 * 7.0;
    // 0x000588: 0x5C98078001370009 Mov
    // 0x000590: 0xD9A2018151471212 Texs
    temp_153 = textureLod(fp_t_tcb_18, vec3(temp_141, temp_142, temp_144), temp_151).xyz;
    temp_154 = temp_153.x;
    temp_155 = temp_153.y;
    temp_156 = temp_153.z;
    // 0x000598: 0xC1BA0143F1B70C0C Tex
    temp_157 = textureLod(fp_t_tcb_14, vec4(temp_147, temp_148, temp_150, float(1)), temp_152).xyz;
    temp_158 = temp_157.x;
    temp_159 = temp_157.y;
    temp_160 = temp_157.z;
    // 0x0005A8: 0x5C9807800147000A Mov
    // 0x0005B0: 0xC0BA0163EFF70808 Tex
    temp_161 = textureLod(fp_t_tcb_16, vec3(temp_141, temp_142, temp_144), 0.0).xyz;
    temp_162 = temp_161.x;
    temp_163 = temp_161.y;
    temp_164 = temp_161.z;
    // 0x0005B8: 0x386C1041A0071111 Fmul
    temp_165 = temp_87 * 20.0;
    temp_166 = clamp(temp_165, 0.0, 1.0);
    // 0x0005C8: 0x4C5C10140647021F Fadd
    temp_167 = temp_17 + fp_c5.data[25].x;
    temp_168 = clamp(temp_167, 0.0, 1.0);
    // 0x0005D0: 0x4C9807940327000F Mov
    // 0x0005D8: 0xF0F0000034270000 Depbar
    // 0x0005E8: 0x5C58300001671717 Fadd
    temp_169 = 0.0 - temp_62;
    temp_170 = temp_145 + temp_169;
    // 0x0005F0: 0x59A00B0001771111 Ffma
    temp_171 = fma(temp_166, temp_170, temp_62);
    // 0x0005F8: 0x0103F8000007F017 Mov32i
    // 0x000608: 0x5C58100000B7111D Fadd
    temp_172 = temp_171 + temp_106;
    // 0x000610: 0xF0F0000034170000 Depbar
    // 0x000618: 0x49A0091808570C0C Ffma
    temp_173 = fma(temp_158, fp_c6.data[33].y, temp_154);
    // 0x000628: 0x49A0099808570D13 Ffma
    temp_174 = fma(temp_159, fp_c6.data[33].y, temp_155);
    // 0x000630: 0x49A00A9808570E0E Ffma
    temp_175 = fma(temp_160, fp_c6.data[33].y, temp_156);
    // 0x000638: 0x5C5C30000FF71D11 Fadd
    temp_176 = temp_172 + -0.0;
    temp_177 = clamp(temp_176, 0.0, 1.0);
    // 0x000648: 0x49A00E940667001D Ffma
    temp_178 = fma(temp_4, fp_c5.data[25].z, temp_172);
    // 0x000650: 0x32A20BC000071116 Ffma
    temp_179 = fma(temp_177, 2.0, -1.0);
    // 0x000658: 0x33A40BC00007111B Ffma
    temp_180 = fma(temp_177, -2.0, 1.0);
    temp_181 = clamp(temp_180, 0.0, 1.0);
    // 0x000668: 0x5C5970000FF7161C Fadd
    temp_182 = abs(temp_179);
    temp_183 = 0.0 - temp_182;
    temp_184 = temp_183 + -0.0;
    // 0x000670: 0x4C98079403170016 Mov
    // 0x000678: 0x51A00F1403071C14 Ffma
    temp_185 = fma(temp_184, fp_c5.data[12].x, fp_c5.data[12].x);
    // 0x000688: 0x51A00B1403171C16 Ffma
    temp_186 = fma(temp_184, fp_c5.data[12].y, fp_c5.data[12].y);
    // 0x000690: 0x51A0079403271C1C Ffma
    temp_187 = fma(temp_184, fp_c5.data[12].z, fp_c5.data[12].z);
    // 0x000698: 0x32A60BC00007110F Ffma
    temp_188 = fma(temp_177, 2.0, -1.0);
    temp_189 = clamp(temp_188, 0.0, 1.0);
    // 0x0006A8: 0x4C58301805D71A17 Fadd
    temp_190 = 0.0 - fp_c6.data[23].y;
    temp_191 = temp_52 + temp_190;
    // 0x0006B0: 0x49A00A1403471B11 Ffma
    temp_192 = fma(temp_181, fp_c5.data[13].x, temp_185);
    // 0x0006B8: 0x49A00B1403571B14 Ffma
    temp_193 = fma(temp_181, fp_c5.data[13].y, temp_186);
    // 0x0006C8: 0x49A00E1403671B16 Ffma
    temp_194 = fma(temp_181, fp_c5.data[13].z, temp_187);
    // 0x0006D0: 0x4C58301805C7191C Fadd
    temp_195 = 0.0 - fp_c6.data[23].x;
    temp_196 = temp_50 + temp_195;
    // 0x0006D8: 0x4C58301805E7181B Fadd
    temp_197 = 0.0 - fp_c6.data[23].z;
    temp_198 = temp_54 + temp_197;
    // 0x0006E8: 0x49A0089402C70F11 Ffma
    temp_199 = fma(temp_189, fp_c5.data[11].x, temp_192);
    // 0x0006F0: 0x49A00A1402D70F14 Ffma
    temp_200 = fma(temp_189, fp_c5.data[11].y, temp_193);
    // 0x0006F8: 0x49A00B1402E70F0F Ffma
    temp_201 = fma(temp_189, fp_c5.data[11].z, temp_194);
    // 0x000708: 0x5C68100001C71C16 Fmul
    temp_202 = temp_196 * temp_196;
    // 0x000710: 0x4C58301403871111 Fadd
    temp_203 = 0.0 - fp_c5.data[14].x;
    temp_204 = temp_199 + temp_203;
    // 0x000718: 0x59A00B000177171E Ffma
    temp_205 = fma(temp_191, temp_191, temp_202);
    // 0x000728: 0x5080000000371F16 Mufu
    temp_206 = log2(temp_168);
    // 0x000730: 0x59A00F0001B71B1E Ffma
    temp_207 = fma(temp_198, temp_198, temp_205);
    // 0x000738: 0x5080000000571E1E Mufu
    temp_208 = inversesqrt(temp_207);
    // 0x000748: 0x4C68101406571616 Fmul
    temp_209 = temp_206 * fp_c5.data[25].y;
    // 0x000750: 0x5C9000800167001F Rro
    // 0x000758: 0x5C68100001E71C16 Fmul
    temp_210 = temp_196 * temp_208;
    // 0x000768: 0x5080000000271F1C Mufu
    temp_211 = exp2(temp_209);
    // 0x000770: 0x5C68100001E71717 Fmul
    temp_212 = temp_191 * temp_208;
    // 0x000778: 0x5C68100001E71B1B Fmul
    temp_213 = temp_198 * temp_208;
    // 0x000788: 0x4C69101805C7041E Fmul
    temp_214 = 0.0 - fp_c6.data[23].x;
    temp_215 = temp_102 * temp_214;
    // 0x000790: 0x5C68100001671919 Fmul
    temp_216 = temp_50 * temp_210;
    // 0x000798: 0x0104066978D7F01F Mov32i
    // 0x0007A8: 0x59A00C8001771A1A Ffma
    temp_217 = fma(temp_52, temp_212, temp_216);
    // 0x0007B0: 0x5C5C100001D71C1C Fadd
    temp_218 = temp_211 + temp_178;
    temp_219 = clamp(temp_218, 0.0, 1.0);
    // 0x0007B8: 0x4C58301403971419 Fadd
    temp_220 = 0.0 - fp_c5.data[14].y;
    temp_221 = temp_200 + temp_220;
    // 0x0007C8: 0x5C68100000B70B1D Fmul
    temp_222 = temp_106 * temp_106;
    // 0x0007D0: 0x59A40D0001B71818 Ffma
    temp_223 = fma(temp_54, temp_213, temp_217);
    temp_224 = clamp(temp_223, 0.0, 1.0);
    // 0x0007D8: 0x4C58301403A70F1A Fadd
    temp_225 = 0.0 - fp_c5.data[14].z;
    temp_226 = temp_201 + temp_225;
    // 0x0007E8: 0x51A00E140387110F Ffma
    temp_227 = fma(temp_204, temp_219, fp_c5.data[14].x);
    // 0x0007F0: 0x51A00E1403971911 Ffma
    temp_228 = fma(temp_221, temp_219, fp_c5.data[14].y);
    // 0x0007F8: 0x51A00E1403A71A14 Ffma
    temp_229 = fma(temp_226, temp_219, fp_c5.data[14].z);
    // 0x000808: 0x5C68100001D70B1A Fmul
    temp_230 = temp_106 * temp_222;
    // 0x000810: 0x4C59101404070F19 Fadd
    temp_231 = 0.0 - temp_227;
    temp_232 = temp_231 + fp_c5.data[16].x;
    // 0x000818: 0x4C5910140417111C Fadd
    temp_233 = 0.0 - temp_228;
    temp_234 = temp_233 + fp_c5.data[16].y;
    // 0x000828: 0x5C5C100000B7020B Fadd
    temp_235 = temp_17 + temp_106;
    temp_236 = clamp(temp_235, 0.0, 1.0);
    // 0x000830: 0x01040DF760C7F002 Mov32i
    // 0x000838: 0x4C5910140427141D Fadd
    temp_237 = 0.0 - temp_229;
    temp_238 = temp_237 + fp_c5.data[16].z;
    // 0x000848: 0x59A0078001A7190F Ffma
    temp_239 = fma(temp_232, temp_230, temp_227);
    // 0x000850: 0x4C69101805C71619 Fmul
    temp_240 = 0.0 - fp_c6.data[23].x;
    temp_241 = temp_210 * temp_240;
    // 0x000858: 0x59A0088001A71C11 Ffma
    temp_242 = fma(temp_234, temp_230, temp_228);
    // 0x000868: 0x5C68100000471616 Fmul
    temp_243 = temp_210 * temp_102;
    // 0x000870: 0x59A00A0001A71D14 Ffma
    temp_244 = fma(temp_238, temp_230, temp_229);
    // 0x000878: 0x3859103F8007101A Fadd
    temp_245 = 0.0 - temp_146;
    temp_246 = temp_245 + 1.0;
    // 0x000888: 0x49A10C9805D71719 Ffma
    temp_247 = 0.0 - fp_c6.data[23].y;
    temp_248 = fma(temp_212, temp_247, temp_241);
    // 0x000890: 0x4C58301407B71112 Fadd
    temp_249 = 0.0 - fp_c5.data[30].w;
    temp_250 = temp_242 + temp_249;
    // 0x000898: 0x59A00B000057171C Ffma
    temp_251 = fma(temp_212, temp_103, temp_243);
    // 0x0008A8: 0x49A10F1805D70517 Ffma
    temp_252 = 0.0 - fp_c6.data[23].y;
    temp_253 = fma(temp_103, temp_252, temp_215);
    // 0x0008B0: 0x5C68100001A71A1A Fmul
    temp_254 = temp_246 * temp_246;
    // 0x0008B8: 0x49A50C9805E71B19 Ffma
    temp_255 = 0.0 - fp_c6.data[23].z;
    temp_256 = fma(temp_213, temp_255, temp_248);
    temp_257 = clamp(temp_256, 0.0, 1.0);
    // 0x0008C8: 0x59A40E0000671B1B Ffma
    temp_258 = fma(temp_213, temp_104, temp_251);
    temp_259 = clamp(temp_258, 0.0, 1.0);
    // 0x0008D0: 0x49A50B9805E70606 Ffma
    temp_260 = 0.0 - fp_c6.data[23].z;
    temp_261 = fma(temp_104, temp_260, temp_253);
    temp_262 = clamp(temp_261, 0.0, 1.0);
    // 0x0008D8: 0x51A4080400471017 Ffma
    temp_263 = fma(temp_146, temp_146, fp_c1.data[1].x);
    temp_264 = clamp(temp_263, 0.0, 1.0);
    // 0x0008E8: 0x49A2010400371902 Ffma
    temp_265 = fma(temp_257, fp_c1.data[0].w, -6.98316002);
    // 0x0008F0: 0x5C68100000271902 Fmul
    temp_266 = temp_257 * temp_265;
    // 0x0008F8: 0x5C68100001A71A19 Fmul
    temp_267 = temp_254 * temp_254;
    // 0x000908: 0x1E23E468DB97071A Fmul32i
    temp_268 = temp_110 * 0.193900004;
    // 0x000910: 0x49A20F8400671904 Ffma
    temp_269 = fma(temp_267, fp_c1.data[1].z, -3.60299993);
    // 0x000918: 0x49A00D040057191A Ffma
    temp_270 = fma(temp_267, fp_c1.data[1].y, temp_268);
    // 0x000928: 0x51A0020400771904 Ffma
    temp_271 = fma(temp_267, temp_269, fp_c1.data[1].w);
    // 0x000930: 0x088BF05D63971A1A Fadd32i
    temp_272 = temp_270 + -0.522800028;
    // 0x000938: 0x5C68100001A70716 Fmul
    temp_273 = temp_110 * temp_272;
    // 0x000948: 0x0103F0000007F01A Mov32i
    // 0x000950: 0x59A00B0000471916 Ffma
    temp_274 = fma(temp_267, temp_271, temp_273);
    // 0x000958: 0x32A00D3F0007101D Ffma
    temp_275 = fma(temp_146, 0.5, 0.5);
    // 0x000968: 0x0103E2CD9E87F004 Mov32i
    // 0x000970: 0x5C68100001771710 Fmul
    temp_276 = temp_264 * temp_264;
    // 0x000978: 0x32A00D3F00070505 Ffma
    temp_277 = fma(temp_103, 0.5, 0.5);
    // 0x000988: 0x4C9807980907001A Mov
    // 0x000990: 0x4C5C100400871616 Fadd
    temp_278 = temp_274 + fp_c1.data[2].x;
    temp_279 = clamp(temp_278, 0.0, 1.0);
    // 0x000998: 0x49A2020400971904 Ffma
    temp_280 = fma(temp_267, fp_c1.data[2].y, -0.168799996);
    // 0x0009A8: 0x59A20D8001071B1C Ffma
    temp_281 = 0.0 - temp_259;
    temp_282 = fma(temp_259, temp_276, temp_281);
    // 0x0009B0: 0x5C68120001D71D10 Fmul
    temp_283 = temp_275 * 0.5;
    temp_284 = temp_283 * temp_275;
    // 0x0009B8: 0x51A10D180907071F Ffma
    temp_285 = 0.0 - fp_c6.data[36].x;
    temp_286 = fma(temp_110, temp_285, fp_c6.data[36].x);
    // 0x0009C8: 0x010410676C97F01D Mov32i
    // 0x0009D0: 0x5080400000371F1A Mufu
    temp_287 = abs(temp_286);
    temp_288 = log2(temp_287);
    // 0x0009D8: 0x5C68100000471904 Fmul
    temp_289 = temp_267 * temp_280;
    // 0x0009E8: 0x51A00E0400D71B1B Ffma
    temp_290 = fma(temp_259, temp_282, fp_c1.data[3].y);
    // 0x0009F0: 0x59A1038001070719 Ffma
    temp_291 = 0.0 - temp_284;
    temp_292 = fma(temp_110, temp_291, temp_110);
    // 0x0009F8: 0x59A103000067101E Ffma
    temp_293 = 0.0 - temp_262;
    temp_294 = fma(temp_284, temp_293, temp_262);
    // 0x000A08: 0x49A00E8400A7071D Ffma
    temp_295 = fma(temp_110, fp_c1.data[2].z, 8.40400028);
    // 0x000A10: 0x5C5810000197101C Fadd
    temp_296 = temp_284 + temp_292;
    // 0x000A18: 0x5C58100001E7101E Fadd
    temp_297 = temp_284 + temp_294;
    // 0x000A28: 0x5080000000471B10 Mufu
    temp_298 = 1.0 / temp_290;
    // 0x000A30: 0x51A00E8400B7071D Ffma
    temp_299 = fma(temp_110, temp_295, fp_c1.data[2].w);
    // 0x000A38: 0x5080000000471C19 Mufu
    temp_300 = 1.0 / temp_296;
    // 0x000A48: 0x4C68101809171A1B Fmul
    temp_301 = temp_288 * fp_c6.data[36].y;
    // 0x000A50: 0x5080000000471E1E Mufu
    temp_302 = 1.0 / temp_297;
    // 0x000A58: 0x51A00E8400C7071A Ffma
    temp_303 = fma(temp_110, temp_299, fp_c1.data[3].x);
    // 0x000A68: 0x4C98079809A7001C Mov
    // 0x000A70: 0x5C6810000107171D Fmul
    temp_304 = temp_264 * temp_298;
    // 0x000A78: 0x5C90008001B70007 Rro
    // 0x000A88: 0x4C58301407B7141B Fadd
    temp_305 = 0.0 - fp_c5.data[30].w;
    temp_306 = temp_244 + temp_305;
    // 0x000A90: 0x5084000000270707 Mufu
    temp_307 = exp2(temp_301);
    temp_308 = clamp(temp_307, 0.0, 1.0);
    // 0x000A98: 0x5C90008000270017 Rro
    // 0x000AA8: 0x4C58301407B70F02 Fadd
    temp_309 = 0.0 - fp_c5.data[30].w;
    temp_310 = temp_239 + temp_309;
    // 0x000AB0: 0x5080000000271717 Mufu
    temp_311 = exp2(temp_266);
    // 0x000AB8: 0x4C58101408171C1C Fadd
    temp_312 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x000AC8: 0x5C68120001E71910 Fmul
    temp_313 = temp_300 * 0.5;
    temp_314 = temp_313 * temp_302;
    // 0x000AD0: 0x4C98079407C70019 Mov
    // 0x000AD8: 0x5C60138001A7041A Fmnmx
    temp_315 = min(temp_289, temp_303);
    // 0x000AE8: 0x5C68100001D71D1D Fmul
    temp_316 = temp_304 * temp_304;
    // 0x000AF0: 0x51A00C9407B70202 Ffma
    temp_317 = fma(temp_310, fp_c5.data[31].x, fp_c5.data[30].w);
    // 0x000AF8: 0x5C68100000771C04 Fmul
    temp_318 = temp_312 * temp_308;
    // 0x000B08: 0x4C68101406870B07 Fmul
    temp_319 = temp_236 * fp_c5.data[26].x;
    // 0x000B10: 0x5C68100001071D10 Fmul
    temp_320 = temp_316 * temp_314;
    // 0x000B18: 0x51A00C9407B7120B Ffma
    temp_321 = fma(temp_250, fp_c5.data[31].x, fp_c5.data[30].w);
    // 0x000B28: 0x5C5C30000FF71A1D Fadd
    temp_322 = temp_315 + -0.0;
    temp_323 = clamp(temp_322, 0.0, 1.0);
    // 0x000B30: 0x59A10B800177021C Ffma
    temp_324 = 0.0 - temp_311;
    temp_325 = fma(temp_317, temp_324, temp_311);
    // 0x000B38: 0x51A00C9407B71B19 Ffma
    temp_326 = fma(temp_306, fp_c5.data[31].x, fp_c5.data[30].w);
    // 0x000B48: 0x4C68101808C7041A Fmul
    temp_327 = temp_318 * fp_c6.data[35].x;
    // 0x000B50: 0x5C68100001070612 Fmul
    temp_328 = temp_262 * temp_320;
    // 0x000B58: 0x386C104248070B1B Fmul
    temp_329 = temp_321 * 50.0;
    temp_330 = clamp(temp_329, 0.0, 1.0);
    // 0x000B68: 0x5C58300001D7160D Fadd
    temp_331 = 0.0 - temp_323;
    temp_332 = temp_279 + temp_331;
    // 0x000B70: 0x5C58100001C7021C Fadd
    temp_333 = temp_317 + temp_325;
    // 0x000B78: 0x5C68100001B71D1B Fmul
    temp_334 = temp_323 * temp_330;
    // 0x000B88: 0x5C68100001C7071C Fmul
    temp_335 = temp_319 * temp_333;
    // 0x000B90: 0x4C68101801471C10 Fmul
    temp_336 = temp_335 * fp_c6.data[5].x;
    // 0x000B98: 0x4C6810140827071C Fmul
    temp_337 = temp_319 * fp_c5.data[32].z;
    // 0x000BA8: 0x5C68100001271016 Fmul
    temp_338 = temp_336 * temp_328;
    // 0x000BB0: 0x5C68100001A71C10 Fmul
    temp_339 = temp_337 * temp_327;
    // 0x000BB8: 0x49A0080400E7161D Ffma
    temp_340 = fma(temp_338, fp_c1.data[3].z, temp_339);
    // 0x000BC8: 0x59A00D8000D70210 Ffma
    temp_341 = fma(temp_317, temp_332, temp_334);
    // 0x000BD0: 0x5C68100000771016 Fmul
    temp_342 = temp_341 * temp_319;
    // 0x000BD8: 0x59A00E8000C71610 Ffma
    temp_343 = fma(temp_342, temp_173, temp_340);
    // 0x000BE8: 0x59A10B8001770B0C Ffma
    temp_344 = 0.0 - temp_311;
    temp_345 = fma(temp_321, temp_344, temp_311);
    // 0x000BF0: 0x59A10B8001771917 Ffma
    temp_346 = 0.0 - temp_311;
    temp_347 = fma(temp_326, temp_346, temp_311);
    // 0x000BF8: 0x5C58100000C70B0C Fadd
    temp_348 = temp_321 + temp_345;
    // 0x000C08: 0x5C58100001771916 Fadd
    temp_349 = temp_326 + temp_347;
    // 0x000C10: 0x5C68100000C7070C Fmul
    temp_350 = temp_319 * temp_348;
    // 0x000C18: 0x5C68100001670716 Fmul
    temp_351 = temp_319 * temp_349;
    // 0x000C28: 0x4C68101801570C0C Fmul
    temp_352 = temp_350 * fp_c6.data[5].y;
    // 0x000C30: 0x4C68101801671617 Fmul
    temp_353 = temp_351 * fp_c6.data[5].z;
    // 0x000C38: 0x4C68101808D70416 Fmul
    temp_354 = temp_318 * fp_c6.data[35].y;
    // 0x000C48: 0x5C68100001270C0C Fmul
    temp_355 = temp_352 * temp_328;
    // 0x000C50: 0x5C68100001271717 Fmul
    temp_356 = temp_353 * temp_328;
    // 0x000C58: 0x5C68100001671C12 Fmul
    temp_357 = temp_337 * temp_354;
    // 0x000C68: 0x49A0090400E70C12 Ffma
    temp_358 = fma(temp_355, fp_c1.data[3].z, temp_357);
    // 0x000C70: 0x59A00D8000D70B0C Ffma
    temp_359 = fma(temp_321, temp_332, temp_334);
    // 0x000C78: 0x59A00D8000D7190D Ffma
    temp_360 = fma(temp_326, temp_332, temp_334);
    // 0x000C88: 0x01040DF760C7F01B Mov32i
    // 0x000C90: 0x49A20D840037181B Ffma
    temp_361 = fma(temp_224, fp_c1.data[0].w, -6.98316002);
    // 0x000C98: 0x5C68100001B7181B Fmul
    temp_362 = temp_224 * temp_361;
    // 0x000CA8: 0x5C90008001B7001E Rro
    // 0x000CB0: 0x5080000000271E18 Mufu
    temp_363 = exp2(temp_362);
    // 0x000CB8: 0x4C98079800A7001E Mov
    // 0x000CC8: 0x59A10C000187021B Ffma
    temp_364 = 0.0 - temp_363;
    temp_365 = fma(temp_317, temp_364, temp_363);
    // 0x000CD0: 0x59A10C0001870B1D Ffma
    temp_366 = 0.0 - temp_363;
    temp_367 = fma(temp_321, temp_366, temp_363);
    // 0x000CD8: 0x4C59101800671E1E Fadd
    temp_368 = 0.0 - fp_c6.data[2].z;
    temp_369 = temp_368 + fp_c6.data[1].z;
    // 0x000CE8: 0x5C58100001B70202 Fadd
    temp_370 = temp_317 + temp_365;
    // 0x000CF0: 0x59A10C000187191B Ffma
    temp_371 = 0.0 - temp_363;
    temp_372 = fma(temp_326, temp_371, temp_363);
    // 0x000CF8: 0x5C58100001D70B18 Fadd
    temp_373 = temp_321 + temp_367;
    // 0x000D08: 0x4C6810180147060B Fmul
    temp_374 = temp_262 * fp_c6.data[5].x;
    // 0x000D10: 0x49A10D1408271A1D Ffma
    temp_375 = 0.0 - fp_c5.data[32].z;
    temp_376 = fma(temp_327, temp_375, temp_327);
    // 0x000D18: 0x5C68100000270702 Fmul
    temp_377 = temp_319 * temp_370;
    // 0x000D28: 0x5C58100001B71919 Fadd
    temp_378 = temp_326 + temp_372;
    // 0x000D30: 0x4C6810180157061B Fmul
    temp_379 = temp_262 * fp_c6.data[5].y;
    // 0x000D38: 0x4C68101801670606 Fmul
    temp_380 = temp_262 * fp_c6.data[5].z;
    // 0x000D48: 0x1E23EA2F98370B0B Fmul32i
    temp_381 = temp_374 * 0.318309873;
    // 0x000D50: 0x5C68100001870718 Fmul
    temp_382 = temp_319 * temp_373;
    // 0x000D58: 0x5C68100001970719 Fmul
    temp_383 = temp_319 * temp_378;
    // 0x000D68: 0x1E23EA2F98371B1B Fmul32i
    temp_384 = temp_379 * 0.318309873;
    // 0x000D70: 0x1E23EA2F98370606 Fmul32i
    temp_385 = temp_380 * 0.318309873;
    // 0x000D78: 0x59A1058000B70202 Ffma
    temp_386 = 0.0 - temp_381;
    temp_387 = fma(temp_377, temp_386, temp_381);
    // 0x000D88: 0x4C9807980097000B Mov
    // 0x000D90: 0x59A10D8001B7181B Ffma
    temp_388 = 0.0 - temp_384;
    temp_389 = fma(temp_382, temp_388, temp_384);
    // 0x000D98: 0x59A1030000671918 Ffma
    temp_390 = 0.0 - temp_385;
    temp_391 = fma(temp_383, temp_390, temp_385);
    // 0x000DA8: 0x4C98079800870006 Mov
    // 0x000DB0: 0x4C59101800570B0B Fadd
    temp_392 = 0.0 - fp_c6.data[2].y;
    temp_393 = temp_392 + fp_c6.data[1].y;
    // 0x000DB8: 0x5C58100000271D02 Fadd
    temp_394 = temp_376 + temp_387;
    // 0x000DC8: 0x4C68101808E7041D Fmul
    temp_395 = temp_318 * fp_c6.data[35].z;
    // 0x000DD0: 0x49A10B1408271604 Ffma
    temp_396 = 0.0 - fp_c5.data[32].z;
    temp_397 = fma(temp_354, temp_396, temp_354);
    // 0x000DD8: 0x4C59101800470606 Fadd
    temp_398 = 0.0 - fp_c6.data[2].x;
    temp_399 = temp_398 + fp_c6.data[1].x;
    // 0x000DE8: 0x51A005980097051A Ffma
    temp_400 = fma(temp_277, temp_393, fp_c6.data[2].y);
    // 0x000DF0: 0x51A00F1800A7050B Ffma
    temp_401 = fma(temp_277, temp_369, fp_c6.data[2].z);
    // 0x000DF8: 0x49A10E9408271D16 Ffma
    temp_402 = 0.0 - fp_c5.data[32].z;
    temp_403 = fma(temp_395, temp_402, temp_395);
    // 0x000E08: 0x5C58100001B70404 Fadd
    temp_404 = temp_397 + temp_389;
    // 0x000E10: 0xE043FF8D0017FF1B Ipa
    temp_405 = in_attr5.x;
    // 0x000E18: 0x5C68100001D71C1C Fmul
    temp_406 = temp_337 * temp_395;
    // 0x000E28: 0x51A0031800870519 Ffma
    temp_407 = fma(temp_277, temp_399, fp_c6.data[2].x);
    // 0x000E30: 0xE043FF8E0017FF05 Ipa
    temp_408 = in_attr6.x;
    // 0x000E38: 0x5C58100001871616 Fadd
    temp_409 = temp_403 + temp_391;
    // 0x000E48: 0xE043FF8E4017FF06 Ipa
    temp_410 = in_attr6.y;
    // 0x000E50: 0x4C98079C23070018 Mov
    // 0x000E58: 0x49A0040400F71919 Ffma
    temp_411 = fma(temp_407, fp_c1.data[3].w, temp_162);
    // 0x000E68: 0x49A0048400F71A1A Ffma
    temp_412 = fma(temp_400, fp_c1.data[3].w, temp_163);
    // 0x000E70: 0x49A0050400F70B15 Ffma
    temp_413 = fma(temp_401, fp_c1.data[3].w, temp_164);
    // 0x000E78: 0x5C58100001970219 Fadd
    temp_414 = temp_394 + temp_411;
    // 0x000E88: 0x5C58100001A7041A Fadd
    temp_415 = temp_404 + temp_412;
    // 0x000E90: 0xE043FF900017FF04 Ipa
    temp_416 = in_attr8.x;
    // 0x000E98: 0x49A002840107181D Ffma
    temp_417 = fma(fp_c7.data[140].x, fp_c1.data[4].x, temp_408);
    // 0x000EA8: 0xE003FF870FF7FF05 Ipa
    temp_418 = gl_FragCoord.x;
    temp_419 = support_buffer.render_scale[0];
    temp_420 = temp_418 / temp_419;
    // 0x000EB0: 0x49A003040117181E Ffma
    temp_421 = fma(fp_c7.data[140].x, fp_c1.data[4].y, temp_410);
    // 0x000EB8: 0xE003FF874FF7FF06 Ipa
    temp_422 = gl_FragCoord.y;
    temp_423 = support_buffer.render_scale[0];
    temp_424 = temp_422 / temp_423;
    // 0x000EC8: 0x49A00D8400170018 Ffma
    temp_425 = fma(temp_4, fp_c1.data[0].y, temp_405);
    // 0x000ED0: 0xD82203A180371802 Texs
    temp_426 = texture(fp_t_tcb_3A, vec2(temp_425, temp_10)).xyz;
    temp_427 = temp_426.x;
    temp_428 = temp_426.y;
    temp_429 = temp_426.z;
    // 0x000ED8: 0x49A00E8401270008 Ffma
    temp_430 = fma(temp_4, fp_c1.data[4].z, temp_417);
    // 0x000EE8: 0x49A00F0401370009 Ffma
    temp_431 = fma(temp_4, fp_c1.data[4].w, temp_421);
    // 0x000EF0: 0x49A00E0400E71700 Ffma
    temp_432 = fma(temp_356, fp_c1.data[3].z, temp_406);
    // 0x000EF8: 0xD8220301B0970808 Texs
    temp_433 = texture(fp_t_tcb_30, vec2(temp_430, temp_431)).xyz;
    temp_434 = temp_433.x;
    temp_435 = temp_433.y;
    temp_436 = temp_433.z;
    // 0x000F08: 0x4C98079C02070017 Mov
    // 0x000F10: 0x4C68100C04A7050A Fmul
    temp_437 = temp_420 * fp_c3.data[18].z;
    // 0x000F18: 0xE043FF904017FF05 Ipa
    temp_438 = in_attr8.y;
    // 0x000F28: 0x4C68100C04B7060B Fmul
    temp_439 = temp_424 * fp_c3.data[18].w;
    // 0x000F30: 0xE043FF908017FF06 Ipa
    temp_440 = in_attr8.z;
    // 0x000F38: 0xDEBA0000C1770404 TexB
    temp_441 = texture(fp_t_cb7_20, vec3(temp_416, temp_438, temp_440)).x;
    // 0x000F48: 0xD8220201C0B70A0A Texs
    temp_442 = texture(fp_t_tcb_20, vec2(temp_437, temp_439)).xyz;
    temp_443 = temp_442.x;
    temp_444 = temp_442.y;
    temp_445 = temp_442.z;
    // 0x000F50: 0x5C58100001571616 Fadd
    temp_446 = temp_409 + temp_413;
    // 0x000F58: 0xE04BFF8F4017FF15 Ipa
    temp_447 = in_attr7.y;
    temp_448 = clamp(temp_447, 0.0, 1.0);
    // 0x000F68: 0x5C68100000770C0C Fmul
    temp_449 = temp_359 * temp_319;
    // 0x000F70: 0x5C68100000770D0D Fmul
    temp_450 = temp_360 * temp_319;
    // 0x000F78: 0x49A10D1407C71A1A Ffma
    temp_451 = 0.0 - fp_c5.data[31].x;
    temp_452 = fma(temp_415, temp_451, temp_415);
    // 0x000F88: 0x49A10C9407C71919 Ffma
    temp_453 = 0.0 - fp_c5.data[31].x;
    temp_454 = fma(temp_414, temp_453, temp_414);
    // 0x000F90: 0x49A10B1407C71616 Ffma
    temp_455 = 0.0 - fp_c5.data[31].x;
    temp_456 = fma(temp_446, temp_455, temp_446);
    // 0x000F98: 0x59A0090001370C0C Ffma
    temp_457 = fma(temp_449, temp_174, temp_358);
    // 0x000FA8: 0x59A0000000E70D0D Ffma
    temp_458 = fma(temp_450, temp_175, temp_432);
    // 0x000FB0: 0x59A0080001970F10 Ffma
    temp_459 = fma(temp_239, temp_454, temp_343);
    // 0x000FB8: 0x59A0060001A71100 Ffma
    temp_460 = fma(temp_242, temp_452, temp_457);
    // 0x000FC8: 0x010404000007F00C Mov32i
    // 0x000FD0: 0x59A0068001671406 Ffma
    temp_461 = fma(temp_244, temp_456, temp_458);
    // 0x000FD8: 0x33A006400007150D Ffma
    temp_462 = fma(temp_448, -2.0, 3.0);
    // 0x000FE8: 0x5C6810000157150E Fmul
    temp_463 = temp_448 * temp_448;
    // 0x000FF0: 0xF0F0000034270000 Depbar
    // 0x000FF8: 0x4C5C101406970205 Fadd
    temp_464 = temp_427 + fp_c5.data[26].y;
    temp_465 = clamp(temp_464, 0.0, 1.0);
    // 0x001008: 0x4C68101403D70909 Fmul
    temp_466 = temp_435 * fp_c5.data[15].y;
    // 0x001010: 0x385D103F8007050C Fadd
    temp_467 = 0.0 - temp_465;
    temp_468 = temp_467 + 1.0;
    temp_469 = clamp(temp_468, 0.0, 1.0);
    // 0x001018: 0x5C68100000E70D05 Fmul
    temp_470 = temp_462 * temp_463;
    // 0x001028: 0xE043FF8F0017FF0D Ipa
    temp_471 = in_attr7.x;
    // 0x001030: 0x4C68101403C70812 Fmul
    temp_472 = temp_434 * fp_c5.data[15].x;
    // 0x001038: 0x5C68100000970715 Fmul
    temp_473 = temp_319 * temp_466;
    // 0x001048: 0x49A206180AC70C0E Ffma
    temp_474 = 0.0 - temp_469;
    temp_475 = fma(temp_469, fp_c6.data[43].x, temp_474);
    // 0x001050: 0x49A206180AD70C08 Ffma
    temp_476 = 0.0 - temp_469;
    temp_477 = fma(temp_469, fp_c6.data[43].y, temp_476);
    // 0x001058: 0x5C68100001270713 Fmul
    temp_478 = temp_319 * temp_472;
    // 0x001068: 0x49A206180AE70C0C Ffma
    temp_479 = 0.0 - temp_469;
    temp_480 = fma(temp_469, fp_c6.data[43].z, temp_479);
    // 0x001070: 0x4C68101403E71B12 Fmul
    temp_481 = temp_436 * fp_c5.data[15].z;
    // 0x001078: 0x5C68100001570303 Fmul
    temp_482 = temp_428 * temp_473;
    // 0x001088: 0x3858103F80070E0E Fadd
    temp_483 = temp_475 + 1.0;
    // 0x001090: 0x3858103F80070808 Fadd
    temp_484 = temp_477 + 1.0;
    // 0x001098: 0x5C68100001370213 Fmul
    temp_485 = temp_427 * temp_478;
    // 0x0010A8: 0x4C9807980B470015 Mov
    // 0x0010B0: 0x3858103F80070C09 Fadd
    temp_486 = temp_480 + 1.0;
    // 0x0010B8: 0xE043FF8C8017FF0C Ipa
    temp_487 = in_attr4.z;
    // 0x0010C8: 0x5C68100001270712 Fmul
    temp_488 = temp_319 * temp_481;
    // 0x0010D0: 0x59A4070000E70F0E Ffma
    temp_489 = fma(temp_239, temp_483, temp_483);
    temp_490 = clamp(temp_489, 0.0, 1.0);
    // 0x0010D8: 0x59A4040000871111 Ffma
    temp_491 = fma(temp_242, temp_484, temp_484);
    temp_492 = clamp(temp_491, 0.0, 1.0);
    // 0x0010E8: 0x4C68101801570302 Fmul
    temp_493 = temp_482 * fp_c6.data[5].y;
    // 0x0010F0: 0x4C68101801471313 Fmul
    temp_494 = temp_485 * fp_c6.data[5].x;
    // 0x0010F8: 0x4C98079802870003 Mov
    // 0x001108: 0x59A4048000971409 Ffma
    temp_495 = fma(temp_244, temp_486, temp_486);
    temp_496 = clamp(temp_495, 0.0, 1.0);
    // 0x001110: 0x5C68100001070E0E Fmul
    temp_497 = temp_490 * temp_459;
    // 0x001118: 0x5C68100001271812 Fmul
    temp_498 = temp_429 * temp_488;
    // 0x001128: 0x5C68100000071111 Fmul
    temp_499 = temp_492 * temp_460;
    // 0x001130: 0x4C98079802970008 Mov
    // 0x001138: 0x4C98079802A70007 Mov
    // 0x001148: 0x5C68100000670906 Fmul
    temp_500 = temp_496 * temp_461;
    // 0x001150: 0x49A0071406C71300 Ffma
    temp_501 = fma(temp_494, fp_c5.data[27].x, temp_497);
    // 0x001158: 0x4C68101803770505 Fmul
    temp_502 = temp_470 * fp_c6.data[13].w;
    // 0x001168: 0x49A0089406C70202 Ffma
    temp_503 = fma(temp_493, fp_c5.data[27].x, temp_499);
    // 0x001170: 0x49A2029803470509 Ffma
    temp_504 = 0.0 - temp_502;
    temp_505 = fma(temp_502, fp_c6.data[13].x, temp_504);
    // 0x001178: 0x49A506980BC7040D Ffma
    temp_506 = 0.0 - fp_c6.data[47].x;
    temp_507 = fma(temp_441, temp_506, temp_471);
    temp_508 = clamp(temp_507, 0.0, 1.0);
    // 0x001188: 0x51A20A980B470A0A Ffma
    temp_509 = 0.0 - fp_c6.data[45].x;
    temp_510 = fma(temp_443, fp_c6.data[45].x, temp_509);
    // 0x001190: 0x5080000000370D0D Mufu
    temp_511 = log2(temp_508);
    // 0x001198: 0x51A20A980B470B0B Ffma
    temp_512 = 0.0 - fp_c6.data[45].x;
    temp_513 = fma(temp_444, fp_c6.data[45].x, temp_512);
    // 0x0011A8: 0x51A20A980B471C1C Ffma
    temp_514 = 0.0 - fp_c6.data[45].x;
    temp_515 = fma(temp_445, fp_c6.data[45].x, temp_514);
    // 0x0011B0: 0x51A0019802870A0A Ffma
    temp_516 = fma(temp_510, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0011B8: 0x4C68101801671203 Fmul
    temp_517 = temp_498 * fp_c6.data[5].z;
    // 0x0011C8: 0x51A0041802970B0B Ffma
    temp_518 = fma(temp_513, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0011D0: 0x51A0039802A71C1C Ffma
    temp_519 = fma(temp_515, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0011D8: 0x5C58300000A70004 Fadd
    temp_520 = 0.0 - temp_516;
    temp_521 = temp_501 + temp_520;
    // 0x0011E8: 0x49A0031406C70303 Ffma
    temp_522 = fma(temp_517, fp_c5.data[27].x, temp_500);
    // 0x0011F0: 0x5C58300000B70206 Fadd
    temp_523 = 0.0 - temp_518;
    temp_524 = temp_503 + temp_523;
    // 0x0011F8: 0x4C68101803170D08 Fmul
    temp_525 = temp_511 * fp_c6.data[12].y;
    // 0x001208: 0x49A005180BF70404 Ffma
    temp_526 = fma(temp_521, fp_c6.data[47].w, temp_516);
    // 0x001210: 0x5C58300001C70307 Fadd
    temp_527 = 0.0 - temp_519;
    temp_528 = temp_522 + temp_527;
    // 0x001218: 0x49A005980BF70606 Ffma
    temp_529 = fma(temp_524, fp_c6.data[47].w, temp_518);
    // 0x001228: 0x5C60178000470A04 Fmnmx
    temp_530 = max(temp_516, temp_526);
    // 0x001230: 0x49A00E180BF70707 Ffma
    temp_531 = fma(temp_528, fp_c6.data[47].w, temp_519);
    // 0x001238: 0x5C9000800087000A Rro
    // 0x001248: 0x49A2029803570508 Ffma
    temp_532 = 0.0 - temp_502;
    temp_533 = fma(temp_502, fp_c6.data[13].y, temp_532);
    // 0x001250: 0x5080000000270A0A Mufu
    temp_534 = exp2(temp_525);
    // 0x001258: 0x5C60178000670B06 Fmnmx
    temp_535 = max(temp_518, temp_529);
    // 0x001268: 0x59A0020000970401 Ffma
    temp_536 = fma(temp_530, temp_505, temp_530);
    // 0x001270: 0x5C60178000771C07 Fmnmx
    temp_537 = max(temp_519, temp_531);
    // 0x001278: 0x49A2029803670505 Ffma
    temp_538 = 0.0 - temp_502;
    temp_539 = fma(temp_502, fp_c6.data[13].z, temp_538);
    // 0x001288: 0x59A0030000870604 Ffma
    temp_540 = fma(temp_535, temp_533, temp_535);
    // 0x001290: 0x5C59100000170001 Fadd
    temp_541 = 0.0 - temp_501;
    temp_542 = temp_541 + temp_536;
    // 0x001298: 0x59A0038000570705 Ffma
    temp_543 = fma(temp_537, temp_539, temp_537);
    // 0x0012A8: 0x0103F8000007F007 Mov32i
    // 0x0012B0: 0x4C68101802B70A06 Fmul
    temp_544 = temp_534 * fp_c6.data[10].w;
    // 0x0012B8: 0x5C59100000470204 Fadd
    temp_545 = 0.0 - temp_503;
    temp_546 = temp_545 + temp_540;
    // 0x0012C8: 0x5C59100000570305 Fadd
    temp_547 = 0.0 - temp_522;
    temp_548 = temp_547 + temp_543;
    // 0x0012D0: 0x59A0000000670100 Ffma
    temp_549 = fma(temp_542, temp_544, temp_501);
    // 0x0012D8: 0x59A0010000670401 Ffma
    temp_550 = fma(temp_546, temp_544, temp_503);
    // 0x0012E8: 0x4C58100C03870C04 Fadd
    temp_551 = temp_487 + fp_c3.data[14].x;
    // 0x0012F0: 0x59A0018000670502 Ffma
    temp_552 = fma(temp_548, temp_544, temp_522);
    // 0x0012F8: 0x0103F8000007F003 Mov32i
    // 0x001308: 0x0103F6000007F005 Mov32i
    // 0x001310: 0x5C9807800FF70006 Mov
    // 0x001318: 0x49A37F8C03C70404 Ffma
    temp_553 = 0.0 - fp_c3.data[15].x;
    temp_554 = fma(temp_551, temp_553, -0.0);
    // 0x001328: 0xE30000000007000F Exit
    out_attr0.x = temp_549;
    out_attr0.y = temp_550;
    out_attr0.z = temp_552;
    out_attr0.w = 1.0;
    out_attr1.x = temp_554;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
