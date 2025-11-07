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
layout (location = 9) in vec4 in_attr9;

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
    precise vec2 temp_9;
    precise float temp_10;
    precise float temp_11;
    precise vec2 temp_12;
    precise float temp_13;
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
    precise vec3 temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise vec3 temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise vec3 temp_159;
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
    precise float temp_426;
    precise float temp_427;
    precise float temp_428;
    precise float temp_429;
    precise vec3 temp_430;
    precise float temp_431;
    precise float temp_432;
    precise float temp_433;
    precise vec3 temp_434;
    precise float temp_435;
    precise float temp_436;
    precise float temp_437;
    precise float temp_438;
    precise float temp_439;
    precise float temp_440;
    precise vec3 temp_441;
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
    // 0x000008: 0x4C98079C23070003 Mov
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x5080000000470000 Mufu
    // 0x000028: 0xE043FF8E8007FF01 Ipa
    temp_0 = in_attr6.z;
    // 0x000030: 0xE043FF8EC007FF02 Ipa
    temp_1 = in_attr6.w;
    // 0x000038: 0x49A0008400070308 Ffma
    temp_2 = fma(fp_c7.data[140].x, fp_c1.data[0].x, temp_0);
    // 0x000048: 0x49A0010400070309 Ffma
    temp_3 = fma(fp_c7.data[140].x, fp_c1.data[0].x, temp_1);
    // 0x000050: 0xD820036FF0970802 Texs
    temp_4 = texture(fp_t_tcb_36, vec2(temp_2, temp_3)).x;
    // 0x000058: 0xE043FF8E0007FF0F Ipa
    temp_5 = in_attr6.x;
    // 0x000068: 0xE043FF8E4007FF10 Ipa
    temp_6 = in_attr6.y;
    // 0x000070: 0x49A007840017021C Ffma
    temp_7 = fma(temp_4, fp_c1.data[0].y, temp_5);
    // 0x000078: 0x49A0080400270203 Ffma
    temp_8 = fma(temp_4, fp_c1.data[0].z, temp_6);
    // 0x000088: 0xD830026FF0371C04 Texs
    temp_9 = texture(fp_t_tcb_26, vec2(temp_7, temp_8)).xy;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    // 0x000090: 0xD830034FF0970806 Texs
    temp_12 = texture(fp_t_tcb_34, vec2(temp_2, temp_3)).xy;
    temp_13 = temp_12.x;
    temp_14 = temp_12.y;
    // 0x000098: 0xD820032FF0371C01 Texs
    temp_15 = texture(fp_t_tcb_32, vec2(temp_7, temp_8)).x;
    // 0x0000A8: 0xD822038FF1070F16 Texs
    temp_16 = texture(fp_t_tcb_38, vec2(temp_5, temp_6)).x;
    // 0x0000B0: 0xE043FF8A0007FF12 Ipa
    temp_17 = in_attr2.x;
    // 0x0000B8: 0xE043FF880007FF0E Ipa
    temp_18 = in_attr0.x;
    // 0x0000C8: 0xE043FF8A4007FF0A Ipa
    temp_19 = in_attr2.y;
    // 0x0000D0: 0xE043FF8C0007FF19 Ipa
    temp_20 = in_attr4.x;
    // 0x0000D8: 0xE043FF884007FF0D Ipa
    temp_21 = in_attr0.y;
    // 0x0000E8: 0xE043FF8A8007FF0C Ipa
    temp_22 = in_attr2.z;
    // 0x0000F0: 0xE043FF8C4007FF1A Ipa
    temp_23 = in_attr4.y;
    // 0x0000F8: 0xE043FF888007FF0B Ipa
    temp_24 = in_attr0.z;
    // 0x000108: 0xE043FF8C8007FF18 Ipa
    temp_25 = in_attr4.z;
    // 0x000110: 0x5C68100001271211 Fmul
    temp_26 = temp_17 * temp_17;
    // 0x000118: 0x5C68100000E70E08 Fmul
    temp_27 = temp_18 * temp_18;
    // 0x000128: 0x5C68100001971909 Fmul
    temp_28 = temp_20 * temp_20;
    // 0x000130: 0x59A0088000A70A11 Ffma
    temp_29 = fma(temp_19, temp_19, temp_26);
    // 0x000138: 0x59A0040000D70D08 Ffma
    temp_30 = fma(temp_21, temp_21, temp_27);
    // 0x000148: 0x59A0048001A71A09 Ffma
    temp_31 = fma(temp_23, temp_23, temp_28);
    // 0x000150: 0x59A0088000C70C14 Ffma
    temp_32 = fma(temp_22, temp_22, temp_29);
    // 0x000158: 0x508000000057140F Mufu
    temp_33 = inversesqrt(temp_32);
    // 0x000168: 0x59A0040000B70B10 Ffma
    temp_34 = fma(temp_24, temp_24, temp_30);
    // 0x000170: 0x59A0048001871811 Ffma
    temp_35 = fma(temp_25, temp_25, temp_31);
    // 0x000178: 0xE043FF890007FF09 Ipa
    temp_36 = in_attr1.x;
    // 0x000188: 0x4C9807940307001D Mov
    // 0x000190: 0x5080000000571010 Mufu
    temp_37 = inversesqrt(temp_34);
    // 0x000198: 0x5080000000571113 Mufu
    temp_38 = inversesqrt(temp_35);
    // 0x0001A8: 0x5C68100000F71208 Fmul
    temp_39 = temp_17 * temp_33;
    // 0x0001B0: 0x5C68100000F70A0A Fmul
    temp_40 = temp_19 * temp_33;
    // 0x0001B8: 0x5C68100000F70C0C Fmul
    temp_41 = temp_22 * temp_33;
    // 0x0001C8: 0xE043FF894007FF0F Ipa
    temp_42 = in_attr1.y;
    // 0x0001D0: 0x5C68100001070E0E Fmul
    temp_43 = temp_18 * temp_37;
    // 0x0001D8: 0x5C68100001070D0D Fmul
    temp_44 = temp_21 * temp_37;
    // 0x0001E8: 0x5C68100001070B0B Fmul
    temp_45 = temp_24 * temp_37;
    // 0x0001F0: 0xE043FF898007FF10 Ipa
    temp_46 = in_attr1.z;
    // 0x0001F8: 0x5C69100001371919 Fmul
    temp_47 = 0.0 - temp_38;
    temp_48 = temp_20 * temp_47;
    // 0x000208: 0x5C69100001371A1A Fmul
    temp_49 = 0.0 - temp_38;
    temp_50 = temp_23 * temp_49;
    // 0x000210: 0x5C69100001371818 Fmul
    temp_51 = 0.0 - temp_38;
    temp_52 = temp_25 * temp_51;
    // 0x000218: 0x5C68100000570511 Fmul
    temp_53 = temp_11 * temp_11;
    // 0x000228: 0x5080000000871616 Mufu
    temp_54 = sqrt(temp_16);
    // 0x000230: 0x49A0021407F70606 Ffma
    temp_55 = fma(temp_13, fp_c5.data[31].w, temp_10);
    // 0x000238: 0x49A0029407F70707 Ffma
    temp_56 = fma(temp_14, fp_c5.data[31].w, temp_11);
    // 0x000248: 0x59A0088000470411 Ffma
    temp_57 = fma(temp_10, temp_10, temp_53);
    // 0x000250: 0x5C68100000670605 Fmul
    temp_58 = temp_55 * temp_55;
    // 0x000258: 0x385D103F80071104 Fadd
    temp_59 = 0.0 - temp_57;
    temp_60 = temp_59 + 1.0;
    temp_61 = clamp(temp_60, 0.0, 1.0);
    // 0x000268: 0x5C68100000970911 Fmul
    temp_62 = temp_36 * temp_36;
    // 0x000270: 0x5080000000870404 Mufu
    temp_63 = sqrt(temp_61);
    // 0x000278: 0x59A0028000770705 Ffma
    temp_64 = fma(temp_56, temp_56, temp_58);
    // 0x000288: 0x59A0088000F70F11 Ffma
    temp_65 = fma(temp_42, temp_42, temp_62);
    // 0x000290: 0x59A0088001071011 Ffma
    temp_66 = fma(temp_46, temp_46, temp_65);
    // 0x000298: 0x59A0028000470405 Ffma
    temp_67 = fma(temp_63, temp_63, temp_64);
    // 0x0002A8: 0x5080000000571112 Mufu
    temp_68 = inversesqrt(temp_66);
    // 0x0002B0: 0x395C103F40070111 Fadd
    temp_69 = temp_15 + -0.75;
    temp_70 = clamp(temp_69, 0.0, 1.0);
    // 0x0002B8: 0x5080000000570505 Mufu
    temp_71 = inversesqrt(temp_67);
    // 0x0002C8: 0x5C68100001270909 Fmul
    temp_72 = temp_36 * temp_68;
    // 0x0002D0: 0x5C68100001270F0F Fmul
    temp_73 = temp_42 * temp_68;
    // 0x0002D8: 0x5C68100001271010 Fmul
    temp_74 = temp_46 * temp_68;
    // 0x0002E8: 0x5C68100000570707 Fmul
    temp_75 = temp_56 * temp_71;
    // 0x0002F0: 0x5C68100000570606 Fmul
    temp_76 = temp_55 * temp_71;
    // 0x0002F8: 0x5C68100000870713 Fmul
    temp_77 = temp_75 * temp_39;
    // 0x000308: 0x5C68100000570408 Fmul
    temp_78 = temp_63 * temp_71;
    // 0x000310: 0x5C68100000A70714 Fmul
    temp_79 = temp_75 * temp_40;
    // 0x000318: 0x5C68100000E71904 Fmul
    temp_80 = temp_48 * temp_43;
    // 0x000328: 0x5C68100000C70707 Fmul
    temp_81 = temp_75 * temp_41;
    // 0x000330: 0x59A0098000970609 Ffma
    temp_82 = fma(temp_76, temp_72, temp_77);
    // 0x000338: 0x59A00A0000F7060F Ffma
    temp_83 = fma(temp_76, temp_73, temp_79);
    // 0x000348: 0x59A0020000D71A05 Ffma
    temp_84 = fma(temp_50, temp_44, temp_80);
    // 0x000350: 0x59A0038001070606 Ffma
    temp_85 = fma(temp_76, temp_74, temp_81);
    // 0x000358: 0x59A0048000870E09 Ffma
    temp_86 = fma(temp_43, temp_78, temp_82);
    // 0x000368: 0x59A0078000870D0F Ffma
    temp_87 = fma(temp_44, temp_78, temp_83);
    // 0x000370: 0x59A4028000B71805 Ffma
    temp_88 = fma(temp_52, temp_45, temp_84);
    temp_89 = clamp(temp_88, 0.0, 1.0);
    // 0x000378: 0x59A0030000870B06 Ffma
    temp_90 = fma(temp_45, temp_78, temp_85);
    // 0x000388: 0x4C98079406270008 Mov
    // 0x000390: 0x5C68100000970904 Fmul
    temp_91 = temp_86 * temp_86;
    // 0x000398: 0x51A1041406270508 Ffma
    temp_92 = 0.0 - fp_c5.data[24].z;
    temp_93 = fma(temp_89, temp_92, fp_c5.data[24].z);
    // 0x0003A8: 0x59A0020000F70F04 Ffma
    temp_94 = fma(temp_87, temp_87, temp_91);
    // 0x0003B0: 0x5080400000370808 Mufu
    temp_95 = abs(temp_93);
    temp_96 = log2(temp_95);
    // 0x0003B8: 0x59A002000067060A Ffma
    temp_97 = fma(temp_90, temp_90, temp_94);
    // 0x0003C8: 0x5080000000570A0C Mufu
    temp_98 = inversesqrt(temp_97);
    // 0x0003D0: 0x4C68101406370807 Fmul
    temp_99 = temp_96 * fp_c5.data[24].w;
    // 0x0003D8: 0x5C9000800077000E Rro
    // 0x0003E8: 0x5C68100000C70904 Fmul
    temp_100 = temp_86 * temp_98;
    // 0x0003F0: 0x5C68100000C70F05 Fmul
    temp_101 = temp_87 * temp_98;
    // 0x0003F8: 0x5C68100000C70606 Fmul
    temp_102 = temp_90 * temp_98;
    // 0x000408: 0x3859103F80070109 Fadd
    temp_103 = 0.0 - temp_15;
    temp_104 = temp_103 + 1.0;
    // 0x000410: 0x5C6810000047190B Fmul
    temp_105 = temp_48 * temp_100;
    // 0x000418: 0x0983F19999A70908 Fadd32i
    temp_106 = 0.0 - temp_104;
    temp_107 = temp_106 + 0.600000024;
    // 0x000428: 0x59A0058000571A0B Ffma
    temp_108 = fma(temp_50, temp_101, temp_105);
    // 0x000430: 0x59A4058000671807 Ffma
    temp_109 = fma(temp_52, temp_102, temp_108);
    temp_110 = clamp(temp_109, 0.0, 1.0);
    // 0x000438: 0x5084000000270E0B Mufu
    temp_111 = exp2(temp_99);
    temp_112 = clamp(temp_111, 0.0, 1.0);
    // 0x000448: 0x5C6810000077060D Fmul
    temp_113 = temp_102 * temp_110;
    // 0x000450: 0x5C6810000077040A Fmul
    temp_114 = temp_100 * temp_110;
    // 0x000458: 0x5C6810000077050C Fmul
    temp_115 = temp_101 * temp_110;
    // 0x000468: 0x32A20C4000070D0F Ffma
    temp_116 = 0.0 - temp_52;
    temp_117 = fma(temp_113, 2.0, temp_116);
    // 0x000470: 0x5C6257800057040D Fmnmx
    temp_118 = abs(temp_100);
    temp_119 = abs(temp_101);
    temp_120 = max(temp_118, temp_119);
    // 0x000478: 0x59A0048000870B08 Ffma
    temp_121 = fma(temp_112, temp_107, temp_104);
    // 0x000488: 0x32A20CC000070A0A Ffma
    temp_122 = 0.0 - temp_48;
    temp_123 = fma(temp_114, 2.0, temp_122);
    // 0x000490: 0x32A20D4000070C0C Ffma
    temp_124 = 0.0 - temp_50;
    temp_125 = fma(temp_115, 2.0, temp_124);
    // 0x000498: 0x5C60578000D70615 Fmnmx
    temp_126 = abs(temp_102);
    temp_127 = max(temp_126, temp_120);
    // 0x0004A8: 0x4C5C101406770808 Fadd
    temp_128 = temp_121 + fp_c5.data[25].w;
    temp_129 = clamp(temp_128, 0.0, 1.0);
    // 0x0004B0: 0x5080000000471517 Mufu
    temp_130 = 1.0 / temp_127;
    // 0x0004B8: 0x5C62578000C70A09 Fmnmx
    temp_131 = abs(temp_123);
    temp_132 = abs(temp_125);
    temp_133 = max(temp_131, temp_132);
    // 0x0004C8: 0x4C6810180A070808 Fmul
    temp_134 = temp_129 * fp_c6.data[40].x;
    // 0x0004D0: 0x5C60578000970F09 Fmnmx
    temp_135 = abs(temp_117);
    temp_136 = max(temp_135, temp_133);
    // 0x0004D8: 0x5080000000470909 Mufu
    temp_137 = 1.0 / temp_136;
    // 0x0004E8: 0x386013BF80070808 Fmnmx
    temp_138 = min(temp_134, 1.0);
    // 0x0004F0: 0x5C68100001770412 Fmul
    temp_139 = temp_100 * temp_130;
    // 0x0004F8: 0x5C68100001770513 Fmul
    temp_140 = temp_101 * temp_130;
    // 0x000508: 0x5C69100001770614 Fmul
    temp_141 = 0.0 - temp_130;
    temp_142 = temp_102 * temp_141;
    // 0x000510: 0xD822024FF0371C17 Texs
    temp_143 = texture(fp_t_tcb_24, vec2(temp_7, temp_8)).x;
    // 0x000518: 0x4C60178400470810 Fmnmx
    temp_144 = max(temp_138, fp_c1.data[1].x);
    // 0x000528: 0x5C98078001270008 Mov
    // 0x000530: 0x5C68100000970A0D Fmul
    temp_145 = temp_123 * temp_137;
    // 0x000538: 0x5C68100000970C0E Fmul
    temp_146 = temp_125 * temp_137;
    // 0x000548: 0x5C69100000970F0F Fmul
    temp_147 = 0.0 - temp_137;
    temp_148 = temp_117 * temp_147;
    // 0x000550: 0x3868104080071015 Fmul
    temp_149 = temp_144 * 4.0;
    // 0x000558: 0x010000000017F00C Mov32i
    // 0x000568: 0x38681040E007101B Fmul
    temp_150 = temp_144 * 7.0;
    // 0x000570: 0x5C98078001370009 Mov
    // 0x000578: 0xD9A2018151471212 Texs
    temp_151 = textureLod(fp_t_tcb_18, vec3(temp_139, temp_140, temp_142), temp_149).xyz;
    temp_152 = temp_151.x;
    temp_153 = temp_151.y;
    temp_154 = temp_151.z;
    // 0x000588: 0xC1BA0143F1B70C0C Tex
    temp_155 = textureLod(fp_t_tcb_14, vec4(temp_145, temp_146, temp_148, float(1)), temp_150).xyz;
    temp_156 = temp_155.x;
    temp_157 = temp_155.y;
    temp_158 = temp_155.z;
    // 0x000590: 0x5C9807800147000A Mov
    // 0x000598: 0xC0BA0163EFF70808 Tex
    temp_159 = textureLod(fp_t_tcb_16, vec3(temp_139, temp_140, temp_142), 0.0).xyz;
    temp_160 = temp_159.x;
    temp_161 = temp_159.y;
    temp_162 = temp_159.z;
    // 0x0005A8: 0x386C1041A0071111 Fmul
    temp_163 = temp_70 * 20.0;
    temp_164 = clamp(temp_163, 0.0, 1.0);
    // 0x0005B0: 0x4C5C10140647011E Fadd
    temp_165 = temp_15 + fp_c5.data[25].x;
    temp_166 = clamp(temp_165, 0.0, 1.0);
    // 0x0005B8: 0x5080000000371E1E Mufu
    temp_167 = log2(temp_166);
    // 0x0005C8: 0x4C68101406571E0F Fmul
    temp_168 = temp_167 * fp_c5.data[25].y;
    // 0x0005D0: 0x4C9807940327001B Mov
    // 0x0005D8: 0x5C90008000F7000F Rro
    // 0x0005E8: 0x5080000000270F0F Mufu
    temp_169 = exp2(temp_168);
    // 0x0005F0: 0xF0F0000034270000 Depbar
    // 0x0005F8: 0x5C58300001671717 Fadd
    temp_170 = 0.0 - temp_54;
    temp_171 = temp_143 + temp_170;
    // 0x000608: 0x59A00B0001771111 Ffma
    temp_172 = fma(temp_164, temp_171, temp_54);
    // 0x000610: 0x0103F8000007F017 Mov32i
    // 0x000618: 0x5C58100000B7111F Fadd
    temp_173 = temp_172 + temp_112;
    // 0x000628: 0xF0F0000034170000 Depbar
    // 0x000630: 0x49A0091808570C12 Ffma
    temp_174 = fma(temp_156, fp_c6.data[33].y, temp_152);
    // 0x000638: 0x49A0099808570D0D Ffma
    temp_175 = fma(temp_157, fp_c6.data[33].y, temp_153);
    // 0x000648: 0x49A00A9808570E15 Ffma
    temp_176 = fma(temp_158, fp_c6.data[33].y, temp_154);
    // 0x000650: 0x5C5C30000FF71F11 Fadd
    temp_177 = temp_173 + -0.0;
    temp_178 = clamp(temp_177, 0.0, 1.0);
    // 0x000658: 0x49A00F9406670214 Ffma
    temp_179 = fma(temp_4, fp_c5.data[25].z, temp_173);
    // 0x000668: 0x32A20BC000071116 Ffma
    temp_180 = fma(temp_178, 2.0, -1.0);
    // 0x000670: 0x33A40BC00007111C Ffma
    temp_181 = fma(temp_178, -2.0, 1.0);
    temp_182 = clamp(temp_181, 0.0, 1.0);
    // 0x000678: 0x32A60BC000071111 Ffma
    temp_183 = fma(temp_178, 2.0, -1.0);
    temp_184 = clamp(temp_183, 0.0, 1.0);
    // 0x000688: 0x4C98079403170017 Mov
    // 0x000690: 0x5C5C100001470F0F Fadd
    temp_185 = temp_169 + temp_179;
    temp_186 = clamp(temp_185, 0.0, 1.0);
    // 0x000698: 0x5C5970000FF71616 Fadd
    temp_187 = abs(temp_180);
    temp_188 = 0.0 - temp_187;
    temp_189 = temp_188 + -0.0;
    // 0x0006A8: 0x51A00E940307161D Ffma
    temp_190 = fma(temp_189, fp_c5.data[12].x, fp_c5.data[12].x);
    // 0x0006B0: 0x51A00B9403171617 Ffma
    temp_191 = fma(temp_189, fp_c5.data[12].y, fp_c5.data[12].y);
    // 0x0006B8: 0x51A00D940327161B Ffma
    temp_192 = fma(temp_189, fp_c5.data[12].z, fp_c5.data[12].z);
    // 0x0006C8: 0x4C58301805C71916 Fadd
    temp_193 = 0.0 - fp_c6.data[23].x;
    temp_194 = temp_48 + temp_193;
    // 0x0006D0: 0x49A00E9403471C14 Ffma
    temp_195 = fma(temp_182, fp_c5.data[13].x, temp_190);
    // 0x0006D8: 0x49A00B9403571C17 Ffma
    temp_196 = fma(temp_182, fp_c5.data[13].y, temp_191);
    // 0x0006E8: 0x49A00D9403671C1B Ffma
    temp_197 = fma(temp_182, fp_c5.data[13].z, temp_192);
    // 0x0006F0: 0x4C58301805D71A1C Fadd
    temp_198 = 0.0 - fp_c6.data[23].y;
    temp_199 = temp_50 + temp_198;
    // 0x0006F8: 0x5C6810000167161D Fmul
    temp_200 = temp_194 * temp_194;
    // 0x000708: 0x49A00A1402C71114 Ffma
    temp_201 = fma(temp_184, fp_c5.data[11].x, temp_195);
    // 0x000710: 0x49A00D9402E7111B Ffma
    temp_202 = fma(temp_184, fp_c5.data[11].z, temp_197);
    // 0x000718: 0x59A00E8001C71C1E Ffma
    temp_203 = fma(temp_199, temp_199, temp_200);
    // 0x000728: 0x4C58301805E7181D Fadd
    temp_204 = 0.0 - fp_c6.data[23].z;
    temp_205 = temp_52 + temp_204;
    // 0x000730: 0x4C58301403871414 Fadd
    temp_206 = 0.0 - fp_c5.data[14].x;
    temp_207 = temp_201 + temp_206;
    // 0x000738: 0x59A00F0001D71D1E Ffma
    temp_208 = fma(temp_205, temp_205, temp_203);
    // 0x000748: 0x51A0079403871414 Ffma
    temp_209 = fma(temp_207, temp_186, fp_c5.data[14].x);
    // 0x000750: 0x5080000000571E1F Mufu
    temp_210 = inversesqrt(temp_208);
    // 0x000758: 0x5C68100000B70B1E Fmul
    temp_211 = temp_112 * temp_112;
    // 0x000768: 0x5C68100001F71616 Fmul
    temp_212 = temp_194 * temp_210;
    // 0x000770: 0x5C68100001F71C1C Fmul
    temp_213 = temp_199 * temp_210;
    // 0x000778: 0x5C68100001F71D1D Fmul
    temp_214 = temp_205 * temp_210;
    // 0x000788: 0x5C68100001E70B1E Fmul
    temp_215 = temp_112 * temp_211;
    // 0x000790: 0x5C68100001671919 Fmul
    temp_216 = temp_48 * temp_212;
    // 0x000798: 0x59A00C8001C71A1F Ffma
    temp_217 = fma(temp_50, temp_213, temp_216);
    // 0x0007A8: 0x4C69101805C71619 Fmul
    temp_218 = 0.0 - fp_c6.data[23].x;
    temp_219 = temp_212 * temp_218;
    // 0x0007B0: 0x5C6810000047161A Fmul
    temp_220 = temp_212 * temp_100;
    // 0x0007B8: 0x59A40F8001D71818 Ffma
    temp_221 = fma(temp_52, temp_214, temp_217);
    temp_222 = clamp(temp_221, 0.0, 1.0);
    // 0x0007C8: 0x49A10C9805D71C16 Ffma
    temp_223 = 0.0 - fp_c6.data[23].y;
    temp_224 = fma(temp_213, temp_223, temp_219);
    // 0x0007D0: 0x59A00D0000571C1C Ffma
    temp_225 = fma(temp_213, temp_101, temp_220);
    // 0x0007D8: 0x51A4080400471019 Ffma
    temp_226 = fma(temp_144, temp_144, fp_c1.data[1].x);
    temp_227 = clamp(temp_226, 0.0, 1.0);
    // 0x0007E8: 0x4C69101805C7041A Fmul
    temp_228 = 0.0 - fp_c6.data[23].x;
    temp_229 = temp_100 * temp_228;
    // 0x0007F0: 0x49A00B9402D71104 Ffma
    temp_230 = fma(temp_184, fp_c5.data[11].y, temp_196);
    // 0x0007F8: 0x0103F0000007F017 Mov32i
    // 0x000808: 0x49A50B1805E71D16 Ffma
    temp_231 = 0.0 - fp_c6.data[23].z;
    temp_232 = fma(temp_214, temp_231, temp_224);
    temp_233 = clamp(temp_232, 0.0, 1.0);
    // 0x000810: 0x59A40E0000671D1D Ffma
    temp_234 = fma(temp_214, temp_102, temp_225);
    temp_235 = clamp(temp_234, 0.0, 1.0);
    // 0x000818: 0x5C6810000197191C Fmul
    temp_236 = temp_227 * temp_227;
    // 0x000828: 0x49A10D1805D70511 Ffma
    temp_237 = 0.0 - fp_c6.data[23].y;
    temp_238 = fma(temp_101, temp_237, temp_229);
    // 0x000830: 0x4C58301403970404 Fadd
    temp_239 = 0.0 - fp_c5.data[14].y;
    temp_240 = temp_230 + temp_239;
    // 0x000838: 0x59A20E8001C71D1C Ffma
    temp_241 = 0.0 - temp_235;
    temp_242 = fma(temp_235, temp_236, temp_241);
    // 0x000848: 0x49A5089805E70606 Ffma
    temp_243 = 0.0 - fp_c6.data[23].z;
    temp_244 = fma(temp_102, temp_243, temp_238);
    temp_245 = clamp(temp_244, 0.0, 1.0);
    // 0x000850: 0x4C58301403A71B11 Fadd
    temp_246 = 0.0 - fp_c5.data[14].z;
    temp_247 = temp_202 + temp_246;
    // 0x000858: 0x51A0079403970404 Ffma
    temp_248 = fma(temp_240, temp_186, fp_c5.data[14].y);
    // 0x000868: 0x51A00E0400D71D1A Ffma
    temp_249 = fma(temp_235, temp_242, fp_c1.data[3].y);
    // 0x000870: 0x32A00BBF0007101C Ffma
    temp_250 = fma(temp_144, 0.5, 0.5);
    // 0x000878: 0x5080000000471A1A Mufu
    temp_251 = 1.0 / temp_249;
    // 0x000888: 0x51A0079403A71111 Ffma
    temp_252 = fma(temp_247, temp_186, fp_c5.data[14].z);
    // 0x000890: 0x3859103F80071010 Fadd
    temp_253 = 0.0 - temp_144;
    temp_254 = temp_253 + 1.0;
    // 0x000898: 0x1E23E468DB97071D Fmul32i
    temp_255 = temp_110 * 0.193900004;
    // 0x0008A8: 0x5C68120001C71C1C Fmul
    temp_256 = temp_250 * 0.5;
    temp_257 = temp_256 * temp_250;
    // 0x0008B0: 0x5C68100001071010 Fmul
    temp_258 = temp_254 * temp_254;
    // 0x0008B8: 0x59A1038001C7070F Ffma
    temp_259 = 0.0 - temp_257;
    temp_260 = fma(temp_110, temp_259, temp_110);
    // 0x0008C8: 0x5C68100001A71919 Fmul
    temp_261 = temp_227 * temp_251;
    // 0x0008D0: 0x5C68100001071010 Fmul
    temp_262 = temp_258 * temp_258;
    // 0x0008D8: 0x59A1030000671C1B Ffma
    temp_263 = 0.0 - temp_245;
    temp_264 = fma(temp_257, temp_263, temp_245);
    // 0x0008E8: 0x5C58100000F71C1A Fadd
    temp_265 = temp_257 + temp_260;
    // 0x0008F0: 0x4C5910140407140F Fadd
    temp_266 = 0.0 - temp_209;
    temp_267 = temp_266 + fp_c5.data[16].x;
    // 0x0008F8: 0x5080000000471A1A Mufu
    temp_268 = 1.0 / temp_265;
    // 0x000908: 0x49A00E840057101D Ffma
    temp_269 = fma(temp_262, fp_c1.data[1].y, temp_255);
    // 0x000910: 0x5C58100001B71C1B Fadd
    temp_270 = temp_257 + temp_264;
    // 0x000918: 0x5C68100001971919 Fmul
    temp_271 = temp_261 * temp_261;
    // 0x000928: 0x5080000000471B1B Mufu
    temp_272 = 1.0 / temp_270;
    // 0x000930: 0x59A00A0001E70F14 Ffma
    temp_273 = fma(temp_267, temp_215, temp_209);
    // 0x000938: 0x4C5910140417040F Fadd
    temp_274 = 0.0 - temp_248;
    temp_275 = temp_274 + fp_c5.data[16].y;
    // 0x000948: 0x088BF05D63971D1D Fadd32i
    temp_276 = temp_269 + -0.522800028;
    // 0x000950: 0x59A0020001E70F0F Ffma
    temp_277 = fma(temp_275, temp_215, temp_248);
    // 0x000958: 0x4C59101404271104 Fadd
    temp_278 = 0.0 - temp_252;
    temp_279 = temp_278 + fp_c5.data[16].z;
    // 0x000968: 0x5C68100001D7071D Fmul
    temp_280 = temp_110 * temp_276;
    // 0x000970: 0x5C68120001B71A1C Fmul
    temp_281 = temp_268 * 0.5;
    temp_282 = temp_281 * temp_272;
    // 0x000978: 0x4C98079407C7001A Mov
    // 0x000988: 0x59A0088001E70411 Ffma
    temp_283 = fma(temp_279, temp_215, temp_252);
    // 0x000990: 0x0104066978D7F01E Mov32i
    // 0x000998: 0x01040DF760C7F004 Mov32i
    // 0x0009A8: 0x5C68100001971C1C Fmul
    temp_284 = temp_282 * temp_271;
    // 0x0009B0: 0x4C98079809A70019 Mov
    // 0x0009B8: 0x49A20F040067101E Ffma
    temp_285 = fma(temp_262, fp_c1.data[1].z, -3.60299993);
    // 0x0009C8: 0x49A2020400371604 Ffma
    temp_286 = fma(temp_233, fp_c1.data[0].w, -6.98316002);
    // 0x0009D0: 0x4C58101408171919 Fadd
    temp_287 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x0009D8: 0x51A00F040077101E Ffma
    temp_288 = fma(temp_262, temp_285, fp_c1.data[1].w);
    // 0x0009E8: 0x5C68100000471616 Fmul
    temp_289 = temp_233 * temp_286;
    // 0x0009F0: 0x59A00E8001E71004 Ffma
    temp_290 = fma(temp_262, temp_288, temp_280);
    // 0x0009F8: 0x0103E2CD9E87F01D Mov32i
    // 0x000A08: 0x4C9807980907001E Mov
    // 0x000A10: 0x49A20E840097101D Ffma
    temp_291 = fma(temp_262, fp_c1.data[2].y, -0.168799996);
    // 0x000A18: 0x51A10F180907071E Ffma
    temp_292 = 0.0 - fp_c6.data[36].x;
    temp_293 = fma(temp_110, temp_292, fp_c6.data[36].x);
    // 0x000A28: 0x5080400000371E1E Mufu
    temp_294 = abs(temp_293);
    temp_295 = log2(temp_294);
    // 0x000A30: 0x5C68100001D7101D Fmul
    temp_296 = temp_262 * temp_291;
    // 0x000A38: 0x010410676C97F010 Mov32i
    // 0x000A48: 0x49A0080400A70710 Ffma
    temp_297 = fma(temp_110, fp_c1.data[2].z, 8.40400028);
    // 0x000A50: 0x51A0080400B70710 Ffma
    temp_298 = fma(temp_110, temp_297, fp_c1.data[2].w);
    // 0x000A58: 0x51A0080400C7071B Ffma
    temp_299 = fma(temp_110, temp_298, fp_c1.data[3].x);
    // 0x000A68: 0x4C68101809171E07 Fmul
    temp_300 = temp_295 * fp_c6.data[36].y;
    // 0x000A70: 0x32A00BBF00070510 Ffma
    temp_301 = fma(temp_101, 0.5, 0.5);
    // 0x000A78: 0x5C90008001670017 Rro
    // 0x000A88: 0x4C58301407B71405 Fadd
    temp_302 = 0.0 - fp_c5.data[30].w;
    temp_303 = temp_273 + temp_302;
    // 0x000A90: 0x5080000000271717 Mufu
    temp_304 = exp2(temp_289);
    // 0x000A98: 0x5C60138001D71B1B Fmnmx
    temp_305 = min(temp_299, temp_296);
    // 0x000AA8: 0x5C9000800077001D Rro
    // 0x000AB0: 0x5084000000271D07 Mufu
    temp_306 = exp2(temp_300);
    temp_307 = clamp(temp_306, 0.0, 1.0);
    // 0x000AB8: 0x51A00D1407B70516 Ffma
    temp_308 = fma(temp_303, fp_c5.data[31].x, fp_c5.data[30].w);
    // 0x000AC8: 0x59A10B800177160C Ffma
    temp_309 = 0.0 - temp_304;
    temp_310 = fma(temp_308, temp_309, temp_304);
    // 0x000AD0: 0x5C68100001970705 Fmul
    temp_311 = temp_307 * temp_287;
    // 0x000AD8: 0x5C5C100000B70107 Fadd
    temp_312 = temp_15 + temp_112;
    temp_313 = clamp(temp_312, 0.0, 1.0);
    // 0x000AE8: 0x5C58100000C7160C Fadd
    temp_314 = temp_308 + temp_310;
    // 0x000AF0: 0x4C58301407B70F19 Fadd
    temp_315 = 0.0 - fp_c5.data[30].w;
    temp_316 = temp_277 + temp_315;
    // 0x000AF8: 0x4C58301407B7110B Fadd
    temp_317 = 0.0 - fp_c5.data[30].w;
    temp_318 = temp_283 + temp_317;
    // 0x000B08: 0x4C68101808C7051D Fmul
    temp_319 = temp_311 * fp_c6.data[35].x;
    // 0x000B10: 0x4C68101406870707 Fmul
    temp_320 = temp_313 * fp_c5.data[26].x;
    // 0x000B18: 0x51A00D1407B71919 Ffma
    temp_321 = fma(temp_316, fp_c5.data[31].x, fp_c5.data[30].w);
    // 0x000B28: 0x51A00D1407B70B1A Ffma
    temp_322 = fma(temp_318, fp_c5.data[31].x, fp_c5.data[30].w);
    // 0x000B30: 0x5C68100001C7060B Fmul
    temp_323 = temp_245 * temp_284;
    // 0x000B38: 0x4C68101808D7051C Fmul
    temp_324 = temp_311 * fp_c6.data[35].y;
    // 0x000B48: 0x5C68100000770C13 Fmul
    temp_325 = temp_314 * temp_320;
    // 0x000B50: 0x5C5C30000FF71B0C Fadd
    temp_326 = temp_305 + -0.0;
    temp_327 = clamp(temp_326, 0.0, 1.0);
    // 0x000B58: 0x4C5C10040087041B Fadd
    temp_328 = temp_290 + fp_c1.data[2].x;
    temp_329 = clamp(temp_328, 0.0, 1.0);
    // 0x000B68: 0x386C10424807190E Fmul
    temp_330 = temp_321 * 50.0;
    temp_331 = clamp(temp_330, 0.0, 1.0);
    // 0x000B70: 0x4C68101801471304 Fmul
    temp_332 = temp_325 * fp_c6.data[5].x;
    // 0x000B78: 0x4C68101408270713 Fmul
    temp_333 = temp_320 * fp_c5.data[32].z;
    // 0x000B88: 0x5C58300000C71B1B Fadd
    temp_334 = 0.0 - temp_327;
    temp_335 = temp_329 + temp_334;
    // 0x000B90: 0x5C68100000E70C0E Fmul
    temp_336 = temp_327 * temp_331;
    // 0x000B98: 0x5C68100000B70404 Fmul
    temp_337 = temp_332 * temp_323;
    // 0x000BA8: 0x5C68100001D7131E Fmul
    temp_338 = temp_333 * temp_319;
    // 0x000BB0: 0x49A00F0400E7041F Ffma
    temp_339 = fma(temp_337, fp_c1.data[3].z, temp_338);
    // 0x000BB8: 0x59A0070001B71604 Ffma
    temp_340 = fma(temp_308, temp_335, temp_336);
    // 0x000BC8: 0x4C6810180157061E Fmul
    temp_341 = temp_245 * fp_c6.data[5].y;
    // 0x000BD0: 0x5C68100000770404 Fmul
    temp_342 = temp_340 * temp_320;
    // 0x000BD8: 0x1E23EA2F98371E1E Fmul32i
    temp_343 = temp_341 * 0.318309873;
    // 0x000BE8: 0x59A00F8001270412 Ffma
    temp_344 = fma(temp_342, temp_174, temp_339);
    // 0x000BF0: 0x59A10B8001771904 Ffma
    temp_345 = 0.0 - temp_304;
    temp_346 = fma(temp_321, temp_345, temp_304);
    // 0x000BF8: 0x59A10B8001771A17 Ffma
    temp_347 = 0.0 - temp_304;
    temp_348 = fma(temp_322, temp_347, temp_304);
    // 0x000C08: 0x4C98079C0207001F Mov
    // 0x000C10: 0x5C58100000471904 Fadd
    temp_349 = temp_321 + temp_346;
    // 0x000C18: 0x5C58100001771A0C Fadd
    temp_350 = temp_322 + temp_348;
    // 0x000C28: 0x5C68100001C71317 Fmul
    temp_351 = temp_333 * temp_324;
    // 0x000C30: 0x49A10E1408271C1C Ffma
    temp_352 = 0.0 - fp_c5.data[32].z;
    temp_353 = fma(temp_324, temp_352, temp_324);
    // 0x000C38: 0x5C68100000770404 Fmul
    temp_354 = temp_349 * temp_320;
    // 0x000C48: 0x5C68100000770C0C Fmul
    temp_355 = temp_350 * temp_320;
    // 0x000C50: 0x4C68101801570404 Fmul
    temp_356 = temp_354 * fp_c6.data[5].y;
    // 0x000C58: 0x4C68101801670C0C Fmul
    temp_357 = temp_355 * fp_c6.data[5].z;
    // 0x000C68: 0x5C68100000B70404 Fmul
    temp_358 = temp_356 * temp_323;
    // 0x000C70: 0x5C68100000B70C0B Fmul
    temp_359 = temp_357 * temp_323;
    // 0x000C78: 0x59A0070001B7190C Ffma
    temp_360 = fma(temp_321, temp_335, temp_336);
    // 0x000C88: 0x59A0070001B71A0E Ffma
    temp_361 = fma(temp_322, temp_335, temp_336);
    // 0x000C90: 0x49A00B8400E70404 Ffma
    temp_362 = fma(temp_358, fp_c1.data[3].z, temp_351);
    // 0x000C98: 0x01040DF760C7F017 Mov32i
    // 0x000CA8: 0x49A20B8400371817 Ffma
    temp_363 = fma(temp_222, fp_c1.data[0].w, -6.98316002);
    // 0x000CB0: 0x5C68100001771817 Fmul
    temp_364 = temp_222 * temp_363;
    // 0x000CB8: 0x5C9000800177001B Rro
    // 0x000CC8: 0x5080000000271B17 Mufu
    temp_365 = exp2(temp_364);
    // 0x000CD0: 0x59A10B8001771618 Ffma
    temp_366 = 0.0 - temp_365;
    temp_367 = fma(temp_308, temp_366, temp_365);
    // 0x000CD8: 0x5C58100001871616 Fadd
    temp_368 = temp_308 + temp_367;
    // 0x000CE8: 0x59A10B8001771918 Ffma
    temp_369 = 0.0 - temp_365;
    temp_370 = fma(temp_321, temp_369, temp_365);
    // 0x000CF0: 0x59A10B8001771A17 Ffma
    temp_371 = 0.0 - temp_365;
    temp_372 = fma(temp_322, temp_371, temp_365);
    // 0x000CF8: 0x5C68100001670716 Fmul
    temp_373 = temp_320 * temp_368;
    // 0x000D08: 0x5C58100001871919 Fadd
    temp_374 = temp_321 + temp_370;
    // 0x000D10: 0x5C58100001771A1A Fadd
    temp_375 = temp_322 + temp_372;
    // 0x000D18: 0x4C68101801470617 Fmul
    temp_376 = temp_245 * fp_c6.data[5].x;
    // 0x000D28: 0x4C68101801670606 Fmul
    temp_377 = temp_245 * fp_c6.data[5].z;
    // 0x000D30: 0x5C68100001970719 Fmul
    temp_378 = temp_320 * temp_374;
    // 0x000D38: 0x5C68100001A7071B Fmul
    temp_379 = temp_320 * temp_375;
    // 0x000D48: 0xE043FF8F0007FF1A Ipa
    temp_380 = in_attr7.x;
    // 0x000D50: 0x1E23EA2F98371717 Fmul32i
    temp_381 = temp_376 * 0.318309873;
    // 0x000D58: 0x1E23EA2F98370606 Fmul32i
    temp_382 = temp_377 * 0.318309873;
    // 0x000D68: 0x59A10F0001E7191E Ffma
    temp_383 = 0.0 - temp_343;
    temp_384 = fma(temp_378, temp_383, temp_343);
    // 0x000D70: 0x4C98079800A70019 Mov
    // 0x000D78: 0x59A10B8001771618 Ffma
    temp_385 = 0.0 - temp_381;
    temp_386 = fma(temp_373, temp_385, temp_381);
    // 0x000D88: 0x59A1030000671B16 Ffma
    temp_387 = 0.0 - temp_382;
    temp_388 = fma(temp_379, temp_387, temp_382);
    // 0x000D90: 0x4C9807980087001B Mov
    // 0x000D98: 0x4C98079800970017 Mov
    // 0x000DA8: 0x49A10E9408271D06 Ffma
    temp_389 = 0.0 - fp_c5.data[32].z;
    temp_390 = fma(temp_319, temp_389, temp_319);
    // 0x000DB0: 0x4C59101800671919 Fadd
    temp_391 = 0.0 - fp_c6.data[2].z;
    temp_392 = temp_391 + fp_c6.data[1].z;
    // 0x000DB8: 0x4C59101800471B1B Fadd
    temp_393 = 0.0 - fp_c6.data[2].x;
    temp_394 = temp_393 + fp_c6.data[1].x;
    // 0x000DC8: 0x4C59101800571717 Fadd
    temp_395 = 0.0 - fp_c6.data[2].y;
    temp_396 = temp_395 + fp_c6.data[1].y;
    // 0x000DD0: 0x5C58100001870606 Fadd
    temp_397 = temp_390 + temp_386;
    // 0x000DD8: 0xE043FF8F4007FF18 Ipa
    temp_398 = in_attr7.y;
    // 0x000DE8: 0x51A0081800A71919 Ffma
    temp_399 = fma(temp_392, temp_301, fp_c6.data[2].z);
    // 0x000DF0: 0x51A0081800871B1B Ffma
    temp_400 = fma(temp_394, temp_301, fp_c6.data[2].x);
    // 0x000DF8: 0x51A0081800971717 Ffma
    temp_401 = fma(temp_396, temp_301, fp_c6.data[2].y);
    // 0x000E08: 0x4C68101808E70510 Fmul
    temp_402 = temp_311 * fp_c6.data[35].z;
    // 0x000E10: 0x5C68100001071305 Fmul
    temp_403 = temp_333 * temp_402;
    // 0x000E18: 0x49A1081408271013 Ffma
    temp_404 = 0.0 - fp_c5.data[32].z;
    temp_405 = fma(temp_402, temp_404, temp_402);
    // 0x000E28: 0x5C58100001E71C10 Fadd
    temp_406 = temp_353 + temp_384;
    // 0x000E30: 0xE043FF8E0007FF1C Ipa
    temp_407 = in_attr6.x;
    // 0x000E38: 0x49A0040401371B1B Ffma
    temp_408 = fma(temp_400, fp_c1.data[4].w, temp_160);
    // 0x000E48: 0x5C68100000770C1E Fmul
    temp_409 = temp_360 * temp_320;
    // 0x000E50: 0x49A0048401371717 Ffma
    temp_410 = fma(temp_401, fp_c1.data[4].w, temp_161);
    // 0x000E58: 0x49A0050401371919 Ffma
    temp_411 = fma(temp_399, fp_c1.data[4].w, temp_162);
    // 0x000E68: 0x5C58100001671313 Fadd
    temp_412 = temp_405 + temp_388;
    // 0x000E70: 0x49A0028400E70B16 Ffma
    temp_413 = fma(temp_359, fp_c1.data[3].z, temp_403);
    // 0x000E78: 0x4C98079C23070005 Mov
    // 0x000E88: 0x5C58100001B7061B Fadd
    temp_414 = temp_397 + temp_408;
    // 0x000E90: 0xE043FF918007FF06 Ipa
    temp_415 = in_attr9.z;
    // 0x000E98: 0x49A00D0400F7050B Ffma
    temp_416 = fma(fp_c7.data[140].x, fp_c1.data[3].w, temp_380);
    // 0x000EA8: 0xE003FF870FF7FF1A Ipa
    temp_417 = gl_FragCoord.x;
    temp_418 = support_buffer.render_scale[0];
    temp_419 = temp_417 / temp_418;
    // 0x000EB0: 0x49A00C0401070518 Ffma
    temp_420 = fma(fp_c7.data[140].x, fp_c1.data[4].x, temp_398);
    // 0x000EB8: 0xE003FF874FF7FF05 Ipa
    temp_421 = gl_FragCoord.y;
    temp_422 = support_buffer.render_scale[0];
    temp_423 = temp_421 / temp_422;
    // 0x000EC8: 0x49A005840117020B Ffma
    temp_424 = fma(temp_4, fp_c1.data[4].y, temp_416);
    // 0x000ED0: 0x49A00C0401270218 Ffma
    temp_425 = fma(temp_4, fp_c1.data[4].z, temp_420);
    // 0x000ED8: 0x49A00E0400170208 Ffma
    temp_426 = fma(temp_4, fp_c1.data[0].y, temp_407);
    // 0x000EE8: 0x59A0020000D71E02 Ffma
    temp_427 = fma(temp_409, temp_175, temp_362);
    // 0x000EF0: 0xE043FF910007FF04 Ipa
    temp_428 = in_attr9.x;
    // 0x000EF8: 0x4C68100C04A71A0C Fmul
    temp_429 = temp_419 * fp_c3.data[18].z;
    // 0x000F08: 0xD82203A1A0370808 Texs
    temp_430 = texture(fp_t_tcb_3A, vec2(temp_426, temp_8)).xyz;
    temp_431 = temp_430.x;
    temp_432 = temp_430.y;
    temp_433 = temp_430.z;
    // 0x000F10: 0xD822030181870B0A Texs
    temp_434 = texture(fp_t_tcb_30, vec2(temp_424, temp_425)).xyz;
    temp_435 = temp_434.x;
    temp_436 = temp_434.y;
    temp_437 = temp_434.z;
    // 0x000F18: 0x4C68100C04B7050D Fmul
    temp_438 = temp_423 * fp_c3.data[18].w;
    // 0x000F28: 0xE043FF914007FF05 Ipa
    temp_439 = in_attr9.y;
    // 0x000F30: 0xDEBA0000C1F70405 TexB
    temp_440 = texture(fp_t_cb7_20, vec3(temp_428, temp_439, temp_415)).x;
    // 0x000F38: 0xD8220201C0D70C0C Texs
    temp_441 = texture(fp_t_tcb_20, vec2(temp_429, temp_438)).xyz;
    temp_442 = temp_441.x;
    temp_443 = temp_441.y;
    temp_444 = temp_441.z;
    // 0x000F48: 0x5C5810000177101D Fadd
    temp_445 = temp_406 + temp_410;
    // 0x000F50: 0xE04BFF904007FF10 Ipa
    temp_446 = in_attr8.y;
    temp_447 = clamp(temp_446, 0.0, 1.0);
    // 0x000F58: 0x5C68100000770E17 Fmul
    temp_448 = temp_361 * temp_320;
    // 0x000F68: 0x5080400000370101 Mufu
    temp_449 = abs(temp_15);
    temp_450 = log2(temp_449);
    // 0x000F70: 0x5C58100001971313 Fadd
    temp_451 = temp_412 + temp_411;
    // 0x000F78: 0x010404000007F00E Mov32i
    // 0x000F88: 0x49A10D9407C71B1B Ffma
    temp_452 = 0.0 - fp_c5.data[31].x;
    temp_453 = fma(temp_414, temp_452, temp_414);
    // 0x000F90: 0x49A10E9407C71D1D Ffma
    temp_454 = 0.0 - fp_c5.data[31].x;
    temp_455 = fma(temp_445, temp_454, temp_445);
    // 0x000F98: 0x59A00B0001571716 Ffma
    temp_456 = fma(temp_448, temp_176, temp_413);
    // 0x000FA8: 0x49A1099407C71313 Ffma
    temp_457 = 0.0 - fp_c5.data[31].x;
    temp_458 = fma(temp_451, temp_457, temp_451);
    // 0x000FB0: 0x59A0090001B71412 Ffma
    temp_459 = fma(temp_273, temp_453, temp_344);
    // 0x000FB8: 0x59A0010001D70F03 Ffma
    temp_460 = fma(temp_277, temp_455, temp_427);
    // 0x000FC8: 0x59A00B0001371102 Ffma
    temp_461 = fma(temp_283, temp_458, temp_456);
    // 0x000FD0: 0x33A007400007100E Ffma
    temp_462 = fma(temp_447, -2.0, 3.0);
    // 0x000FD8: 0x5C68100001071015 Fmul
    temp_463 = temp_447 * temp_447;
    // 0x000FE8: 0x5C68100001570E0E Fmul
    temp_464 = temp_462 * temp_463;
    // 0x000FF0: 0x4C68101803770E0E Fmul
    temp_465 = temp_464 * fp_c6.data[13].w;
    // 0x000FF8: 0xF0F0000034170000 Depbar
    // 0x001008: 0x4C5C101406970804 Fadd
    temp_466 = temp_431 + fp_c5.data[26].y;
    temp_467 = clamp(temp_466, 0.0, 1.0);
    // 0x001010: 0x4C68101403C70A15 Fmul
    temp_468 = temp_435 * fp_c5.data[15].x;
    // 0x001018: 0x4C68101403E71818 Fmul
    temp_469 = temp_437 * fp_c5.data[15].z;
    // 0x001028: 0x385D103F80070404 Fadd
    temp_470 = 0.0 - temp_467;
    temp_471 = temp_470 + 1.0;
    temp_472 = clamp(temp_471, 0.0, 1.0);
    // 0x001030: 0x5C68100001570715 Fmul
    temp_473 = temp_320 * temp_468;
    // 0x001038: 0x5C68100001870718 Fmul
    temp_474 = temp_320 * temp_469;
    // 0x001048: 0x49A202180AD70410 Ffma
    temp_475 = 0.0 - temp_472;
    temp_476 = fma(temp_472, fp_c6.data[43].y, temp_475);
    // 0x001050: 0x49A202180AC70406 Ffma
    temp_477 = 0.0 - temp_472;
    temp_478 = fma(temp_472, fp_c6.data[43].x, temp_477);
    // 0x001058: 0x49A202180AE70413 Ffma
    temp_479 = 0.0 - temp_472;
    temp_480 = fma(temp_472, fp_c6.data[43].z, temp_479);
    // 0x001068: 0xE043FF900007FF04 Ipa
    temp_481 = in_attr8.x;
    // 0x001070: 0x5C68100001570815 Fmul
    temp_482 = temp_431 * temp_473;
    // 0x001078: 0x5C68100001871A18 Fmul
    temp_483 = temp_433 * temp_474;
    // 0x001088: 0x3858103F80071010 Fadd
    temp_484 = temp_476 + 1.0;
    // 0x001090: 0x3858103F80070606 Fadd
    temp_485 = temp_478 + 1.0;
    // 0x001098: 0x3858103F80071313 Fadd
    temp_486 = temp_480 + 1.0;
    // 0x0010A8: 0x4C68101801471515 Fmul
    temp_487 = temp_482 * fp_c6.data[5].x;
    // 0x0010B0: 0x59A4080001070F0A Ffma
    temp_488 = fma(temp_277, temp_484, temp_484);
    temp_489 = clamp(temp_488, 0.0, 1.0);
    // 0x0010B8: 0x59A4030000671414 Ffma
    temp_490 = fma(temp_273, temp_485, temp_485);
    temp_491 = clamp(temp_490, 0.0, 1.0);
    // 0x0010C8: 0x4C68101403D70B06 Fmul
    temp_492 = temp_436 * fp_c5.data[15].y;
    // 0x0010D0: 0x59A4098001371111 Ffma
    temp_493 = fma(temp_283, temp_486, temp_486);
    temp_494 = clamp(temp_493, 0.0, 1.0);
    // 0x0010D8: 0x4C9807980B47000B Mov
    // 0x0010E8: 0x4C98079802A7000F Mov
    // 0x0010F0: 0x5C68100000370A0A Fmul
    temp_495 = temp_489 * temp_460;
    // 0x0010F8: 0xE043FF8BC007FF03 Ipa
    temp_496 = in_attr3.w;
    // 0x001108: 0x5C68100001271412 Fmul
    temp_497 = temp_491 * temp_459;
    // 0x001110: 0x5C68100000670706 Fmul
    temp_498 = temp_320 * temp_492;
    // 0x001118: 0x5C68100000271108 Fmul
    temp_499 = temp_494 * temp_461;
    // 0x001128: 0x4C68101406970102 Fmul
    temp_500 = temp_450 * fp_c5.data[26].y;
    // 0x001130: 0x51A205980B470C07 Ffma
    temp_501 = 0.0 - fp_c6.data[45].x;
    temp_502 = fma(temp_442, fp_c6.data[45].x, temp_501);
    // 0x001138: 0x51A205980B470D0D Ffma
    temp_503 = 0.0 - fp_c6.data[45].x;
    temp_504 = fma(temp_443, fp_c6.data[45].x, temp_503);
    // 0x001148: 0x51A205980B471C1C Ffma
    temp_505 = 0.0 - fp_c6.data[45].x;
    temp_506 = fma(temp_444, fp_c6.data[45].x, temp_505);
    // 0x001150: 0x5C68100000670906 Fmul
    temp_507 = temp_432 * temp_498;
    // 0x001158: 0x4C98079802870009 Mov
    // 0x001168: 0x4C9807980297000C Mov
    // 0x001170: 0x5C9000800027000B Rro
    // 0x001178: 0x49A0091406C71501 Ffma
    temp_508 = fma(temp_487, fp_c5.data[27].x, temp_497);
    // 0x001188: 0x49A502180BC70505 Ffma
    temp_509 = 0.0 - fp_c6.data[47].x;
    temp_510 = fma(temp_440, temp_509, temp_481);
    temp_511 = clamp(temp_510, 0.0, 1.0);
    // 0x001190: 0x4C68101801570604 Fmul
    temp_512 = temp_507 * fp_c6.data[5].y;
    // 0x001198: 0x5080000000270B06 Mufu
    temp_513 = exp2(temp_500);
    // 0x0011A8: 0x51A0049802870707 Ffma
    temp_514 = fma(temp_502, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0011B0: 0x5080000000370505 Mufu
    temp_515 = log2(temp_511);
    // 0x0011B8: 0x4C68101801671809 Fmul
    temp_516 = temp_483 * fp_c6.data[5].z;
    // 0x0011C8: 0xE043FF8D8007FF0B Ipa
    temp_517 = in_attr5.z;
    // 0x0011D0: 0x49A0051406C70402 Ffma
    temp_518 = fma(temp_512, fp_c5.data[27].x, temp_495);
    // 0x0011D8: 0x51A0061802970D0D Ffma
    temp_519 = fma(temp_504, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0011E8: 0x5C5830000077010A Fadd
    temp_520 = 0.0 - temp_514;
    temp_521 = temp_508 + temp_520;
    // 0x0011F0: 0x49A0041406C70904 Ffma
    temp_522 = fma(temp_516, fp_c5.data[27].x, temp_499);
    // 0x0011F8: 0x51A0079802A71C09 Ffma
    temp_523 = fma(temp_506, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001208: 0x5C58300000D70208 Fadd
    temp_524 = 0.0 - temp_519;
    temp_525 = temp_518 + temp_524;
    // 0x001210: 0x59A67F8000370603 Ffma
    temp_526 = fma(temp_513, temp_496, -0.0);
    temp_527 = clamp(temp_526, 0.0, 1.0);
    // 0x001218: 0x4C68101803170505 Fmul
    temp_528 = temp_515 * fp_c6.data[12].y;
    // 0x001228: 0x49A003980BF70A0A Ffma
    temp_529 = fma(temp_521, fp_c6.data[47].w, temp_514);
    // 0x001230: 0x49A2071803470E00 Ffma
    temp_530 = 0.0 - temp_465;
    temp_531 = fma(temp_465, fp_c6.data[13].x, temp_530);
    // 0x001238: 0x5C58300000970406 Fadd
    temp_532 = 0.0 - temp_523;
    temp_533 = temp_522 + temp_532;
    // 0x001248: 0x49A006980BF70808 Ffma
    temp_534 = fma(temp_525, fp_c6.data[47].w, temp_519);
    // 0x001250: 0x5C9000800057000C Rro
    // 0x001258: 0x49A2071803570E05 Ffma
    temp_535 = 0.0 - temp_465;
    temp_536 = fma(temp_465, fp_c6.data[13].y, temp_535);
    // 0x001268: 0x5C60178000A7070A Fmnmx
    temp_537 = max(temp_514, temp_529);
    // 0x001270: 0x5080000000270C07 Mufu
    temp_538 = exp2(temp_528);
    // 0x001278: 0x49A004980BF70606 Ffma
    temp_539 = fma(temp_533, fp_c6.data[47].w, temp_523);
    // 0x001288: 0x5C60178000870D08 Fmnmx
    temp_540 = max(temp_519, temp_534);
    // 0x001290: 0x49A2071803670E0E Ffma
    temp_541 = 0.0 - temp_465;
    temp_542 = fma(temp_465, fp_c6.data[13].z, temp_541);
    // 0x001298: 0x59A0050000A70000 Ffma
    temp_543 = fma(temp_531, temp_537, temp_537);
    // 0x0012A8: 0x5C60178000670909 Fmnmx
    temp_544 = max(temp_523, temp_539);
    // 0x0012B0: 0x59A0040000870505 Ffma
    temp_545 = fma(temp_536, temp_540, temp_540);
    // 0x0012B8: 0x5C59100000070100 Fadd
    temp_546 = 0.0 - temp_508;
    temp_547 = temp_546 + temp_543;
    // 0x0012C8: 0x59A0048000970E06 Ffma
    temp_548 = fma(temp_542, temp_544, temp_544);
    // 0x0012D0: 0x4C68101802B70707 Fmul
    temp_549 = temp_538 * fp_c6.data[10].w;
    // 0x0012D8: 0x5C59100000570205 Fadd
    temp_550 = 0.0 - temp_518;
    temp_551 = temp_550 + temp_545;
    // 0x0012E8: 0x4C58100C03870B08 Fadd
    temp_552 = temp_517 + fp_c3.data[14].x;
    // 0x0012F0: 0x5C59100000670406 Fadd
    temp_553 = 0.0 - temp_522;
    temp_554 = temp_553 + temp_548;
    // 0x0012F8: 0x59A0008000070700 Ffma
    temp_555 = fma(temp_549, temp_547, temp_508);
    // 0x001308: 0x59A0010000570701 Ffma
    temp_556 = fma(temp_549, temp_551, temp_518);
    // 0x001310: 0x0103F6000007F005 Mov32i
    // 0x001318: 0x59A0020000670702 Ffma
    temp_557 = fma(temp_549, temp_554, temp_522);
    // 0x001328: 0x5C9807800FF70006 Mov
    // 0x001330: 0x49A37F8C03C70804 Ffma
    temp_558 = 0.0 - fp_c3.data[15].x;
    temp_559 = fma(temp_552, temp_558, -0.0);
    // 0x001338: 0x5C98078000370007 Mov
    // 0x001348: 0xE30000000007000F Exit
    out_attr0.x = temp_555;
    out_attr0.y = temp_556;
    out_attr0.z = temp_557;
    out_attr0.w = temp_527;
    out_attr1.x = temp_559;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_527;
    return;
}
