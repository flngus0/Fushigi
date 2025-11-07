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

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

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

uint local_memory[16];
layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_36;
layout (binding = 2) uniform sampler2D fp_t_tcb_24;
layout (binding = 3) uniform sampler2D fp_t_tcb_1E;
layout (binding = 4) uniform sampler2D fp_t_tcb_20;
layout (binding = 5) uniform samplerCube fp_t_tcb_16;
layout (binding = 6) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 7) uniform samplerCube fp_t_tcb_18;
layout (binding = 8) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
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
    precise float temp_9;
    precise vec2 temp_10;
    precise float temp_11;
    precise float temp_12;
    precise vec3 temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise vec3 temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise vec3 temp_22;
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
    uint temp_154;
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
    int temp_169;
    precise float temp_170;
    precise float temp_171;
    int temp_172;
    uint temp_173;
    uint temp_174;
    int temp_175;
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
    bool temp_226;
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
    int temp_265;
    bool temp_266;
    int temp_267;
    int temp_268;
    int temp_269;
    int temp_270;
    int temp_271;
    uint temp_272;
    uint temp_273;
    int temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    int temp_279;
    int temp_280;
    uint temp_281;
    uint temp_282;
    int temp_283;
    precise float temp_284;
    int temp_285;
    uint temp_286;
    int temp_287;
    precise float temp_288;
    int temp_289;
    uint temp_290;
    uint temp_291;
    int temp_292;
    precise float temp_293;
    int temp_294;
    uint temp_295;
    int temp_296;
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
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    precise float temp_314;
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
    int temp_334;
    uint temp_335;
    uint temp_336;
    int temp_337;
    precise float temp_338;
    precise float temp_339;
    precise float temp_340;
    int temp_341;
    uint temp_342;
    uint temp_343;
    int temp_344;
    precise float temp_345;
    int temp_346;
    uint temp_347;
    int temp_348;
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
    uint temp_368;
    int temp_369;
    bool temp_370;
    uint temp_371;
    precise float temp_372;
    precise float temp_373;
    precise float temp_374;
    precise float temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    uint temp_379;
    precise float temp_380;
    bool temp_381;
    precise float temp_382;
    int temp_383;
    uint temp_384;
    uint temp_385;
    int temp_386;
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
    uint temp_419;
    uint temp_420;
    int temp_421;
    precise float temp_422;
    int temp_423;
    uint temp_424;
    int temp_425;
    precise float temp_426;
    precise float temp_427;
    precise float temp_428;
    int temp_429;
    uint temp_430;
    uint temp_431;
    int temp_432;
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
    precise vec3 temp_510;
    precise float temp_511;
    precise float temp_512;
    precise float temp_513;
    precise vec3 temp_514;
    precise float temp_515;
    precise float temp_516;
    precise float temp_517;
    precise float temp_518;
    precise float temp_519;
    precise vec3 temp_520;
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
    precise float temp_609;
    precise float temp_610;
    precise float temp_611;
    precise float temp_612;
    precise float temp_613;
    precise float temp_614;
    precise float temp_615;
    precise float temp_616;
    precise float temp_617;
    precise float temp_618;
    precise float temp_619;
    precise float temp_620;
    precise float temp_621;
    precise float temp_622;
    precise float temp_623;
    precise float temp_624;
    precise float temp_625;
    precise float temp_626;
    precise float temp_627;
    precise float temp_628;
    precise float temp_629;
    precise float temp_630;
    precise float temp_631;
    precise float temp_632;
    precise float temp_633;
    precise float temp_634;
    precise float temp_635;
    precise float temp_636;
    precise float temp_637;
    precise float temp_638;
    precise float temp_639;
    precise float temp_640;
    precise float temp_641;
    precise float temp_642;
    precise float temp_643;
    precise float temp_644;
    precise float temp_645;
    precise float temp_646;
    precise float temp_647;
    precise float temp_648;
    precise float temp_649;
    precise float temp_650;
    precise float temp_651;
    precise float temp_652;
    precise float temp_653;
    precise float temp_654;
    precise float temp_655;
    precise float temp_656;
    precise float temp_657;
    precise float temp_658;
    precise float temp_659;
    precise float temp_660;
    precise float temp_661;
    precise float temp_662;
    precise float temp_663;
    precise float temp_664;
    precise float temp_665;
    precise float temp_666;
    precise float temp_667;
    precise float temp_668;
    precise float temp_669;
    precise float temp_670;
    precise float temp_671;
    precise float temp_672;
    precise float temp_673;
    precise float temp_674;
    precise float temp_675;
    precise float temp_676;
    // 0x000008: 0x0103F8000007F00B Mov32i
    // 0x000010: 0xE003FF87CFF7FF0C Ipa
    // 0x000018: 0x5C9807800FF70026 Mov
    // 0x000028: 0xE003FF870FF7FF04 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000030: 0xE003FF874FF7FF05 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000038: 0x5080000000470C0C Mufu
    // 0x000048: 0x4C68100C04A70404 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000050: 0x4C68100C04B70505 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000058: 0xE043FF8E00C7FF06 Ipa
    temp_8 = in_attr6.x;
    // 0x000068: 0xE043FF8E40C7FF07 Ipa
    temp_9 = in_attr6.y;
    // 0x000070: 0xD830026FF0770602 Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000078: 0xD8240360A0770622 Texs
    temp_13 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    temp_16 = temp_13.z;
    // 0x000088: 0xD82202401077061E Texs
    temp_17 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyz;
    temp_18 = temp_17.x;
    temp_19 = temp_17.y;
    temp_20 = temp_17.z;
    // 0x000090: 0xD86201EFF0B7040B Texs
    temp_21 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x000098: 0xD82202000057041C Texs
    temp_22 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_23 = temp_22.x;
    temp_24 = temp_22.y;
    temp_25 = temp_22.z;
    // 0x0000A8: 0xE043FF8B00C7FF27 Ipa
    temp_26 = in_attr3.x;
    // 0x0000B0: 0xE043FF8B40C7FF21 Ipa
    temp_27 = in_attr3.y;
    // 0x0000B8: 0xE043FF8B80C7FF20 Ipa
    temp_28 = in_attr3.z;
    // 0x0000C8: 0xE043FF8A00C7FF08 Ipa
    temp_29 = in_attr2.x;
    // 0x0000D0: 0xE043FF8800C7FF13 Ipa
    temp_30 = in_attr0.x;
    // 0x0000D8: 0xE043FF8A40C7FF09 Ipa
    temp_31 = in_attr2.y;
    // 0x0000E8: 0xE043FF8A80C7FF0D Ipa
    temp_32 = in_attr2.z;
    // 0x0000F0: 0xE043FF8900C7FF0F Ipa
    temp_33 = in_attr1.x;
    // 0x0000F8: 0xE043FF8940C7FF10 Ipa
    temp_34 = in_attr1.y;
    // 0x000108: 0xE043FF8980C7FF11 Ipa
    temp_35 = in_attr1.z;
    // 0x000110: 0xE043FF8840C7FF07 Ipa
    temp_36 = in_attr0.y;
    // 0x000118: 0xE043FF8880C7FF06 Ipa
    temp_37 = in_attr0.z;
    // 0x000128: 0xE2900000D2000000 Ssy
    // 0x000130: 0x5C6810000277270E Fmul
    temp_38 = temp_26 * temp_26;
    // 0x000138: 0x5C68100001371314 Fmul
    temp_39 = temp_30 * temp_30;
    // 0x000148: 0x59A0070002172115 Ffma
    temp_40 = fma(temp_27, temp_27, temp_38);
    // 0x000150: 0x5C6810000087080E Fmul
    temp_41 = temp_29 * temp_29;
    // 0x000158: 0x5C68100000F70F12 Fmul
    temp_42 = temp_33 * temp_33;
    // 0x000168: 0x59A00A0000770714 Ffma
    temp_43 = fma(temp_36, temp_36, temp_39);
    // 0x000170: 0x59A00A8002072015 Ffma
    temp_44 = fma(temp_28, temp_28, temp_40);
    // 0x000178: 0x59A007000097090E Ffma
    temp_45 = fma(temp_31, temp_31, temp_41);
    // 0x000188: 0x5080000000571516 Mufu
    temp_46 = inversesqrt(temp_44);
    // 0x000190: 0x59A0090001071012 Ffma
    temp_47 = fma(temp_34, temp_34, temp_42);
    // 0x000198: 0x59A00A0000670614 Ffma
    temp_48 = fma(temp_37, temp_37, temp_43);
    // 0x0001A8: 0x5080000000571414 Mufu
    temp_49 = inversesqrt(temp_48);
    // 0x0001B0: 0x59A0070000D70D0E Ffma
    temp_50 = fma(temp_32, temp_32, temp_45);
    // 0x0001B8: 0x59A0090001171112 Ffma
    temp_51 = fma(temp_35, temp_35, temp_47);
    // 0x0001C8: 0x5080000000570E0E Mufu
    temp_52 = inversesqrt(temp_50);
    // 0x0001D0: 0x5C69100001672727 Fmul
    temp_53 = 0.0 - temp_46;
    temp_54 = temp_26 * temp_53;
    // 0x0001D8: 0x5080000000571212 Mufu
    temp_55 = inversesqrt(temp_51);
    // 0x0001E8: 0x5C69100001672121 Fmul
    temp_56 = 0.0 - temp_46;
    temp_57 = temp_27 * temp_56;
    // 0x0001F0: 0x5C69100001672020 Fmul
    temp_58 = 0.0 - temp_46;
    temp_59 = temp_28 * temp_58;
    // 0x0001F8: 0x5C68100001471313 Fmul
    temp_60 = temp_30 * temp_49;
    // 0x000208: 0x5C68100001470606 Fmul
    temp_61 = temp_37 * temp_49;
    // 0x000210: 0x4C58301805C72717 Fadd
    temp_62 = 0.0 - fp_c6.data[23].x;
    temp_63 = temp_54 + temp_62;
    // 0x000218: 0x4C58301805D72116 Fadd
    temp_64 = 0.0 - fp_c6.data[23].y;
    temp_65 = temp_57 + temp_64;
    // 0x000228: 0x5C68100000E70808 Fmul
    temp_66 = temp_29 * temp_52;
    // 0x000230: 0x5C68100000E70909 Fmul
    temp_67 = temp_31 * temp_52;
    // 0x000238: 0x5C68100000E70D0D Fmul
    temp_68 = temp_32 * temp_52;
    // 0x000248: 0x5C6810000147070E Fmul
    temp_69 = temp_36 * temp_49;
    // 0x000250: 0x5C68100001771715 Fmul
    temp_70 = temp_63 * temp_63;
    // 0x000258: 0x4C58301805E72018 Fadd
    temp_71 = 0.0 - fp_c6.data[23].z;
    temp_72 = temp_59 + temp_71;
    // 0x000268: 0x5C68100001270F0F Fmul
    temp_73 = temp_33 * temp_55;
    // 0x000270: 0x5C68100001271010 Fmul
    temp_74 = temp_34 * temp_55;
    // 0x000278: 0x5C68100001271111 Fmul
    temp_75 = temp_35 * temp_55;
    // 0x000288: 0x59A00A8001671615 Ffma
    temp_76 = fma(temp_65, temp_65, temp_70);
    // 0x000290: 0x59A00A8001871819 Ffma
    temp_77 = fma(temp_72, temp_72, temp_76);
    // 0x000298: 0x5080000000571919 Mufu
    temp_78 = inversesqrt(temp_77);
    // 0x0002A8: 0xF0F0000034370000 Depbar
    // 0x0002B0: 0x5C68100000370307 Fmul
    temp_79 = temp_12 * temp_12;
    // 0x0002B8: 0x5C68100000370814 Fmul
    temp_80 = temp_66 * temp_12;
    // 0x0002C8: 0x5C68100001971708 Fmul
    temp_81 = temp_63 * temp_78;
    // 0x0002D0: 0x4C6810180A072222 Fmul
    temp_82 = temp_14 * fp_c6.data[40].x;
    // 0x0002D8: 0x59A0038000270207 Ffma
    temp_83 = fma(temp_11, temp_11, temp_79);
    // 0x0002E8: 0x59A00A0000270F14 Ffma
    temp_84 = fma(temp_73, temp_11, temp_80);
    // 0x0002F0: 0x5C6810000037090F Fmul
    temp_85 = temp_67 * temp_12;
    // 0x0002F8: 0x5C68100000370D03 Fmul
    temp_86 = temp_68 * temp_12;
    // 0x000308: 0x5C68100001971809 Fmul
    temp_87 = temp_72 * temp_78;
    // 0x000310: 0x4C69101805C7080D Fmul
    temp_88 = 0.0 - fp_c6.data[23].x;
    temp_89 = temp_81 * temp_88;
    // 0x000318: 0x385D103F80070712 Fadd
    temp_90 = 0.0 - temp_83;
    temp_91 = temp_90 + 1.0;
    temp_92 = clamp(temp_91, 0.0, 1.0);
    // 0x000328: 0x5C68100001971607 Fmul
    temp_93 = temp_65 * temp_78;
    // 0x000330: 0x5080000000871215 Mufu
    temp_94 = sqrt(temp_92);
    // 0x000338: 0x59A007800027100F Ffma
    temp_95 = fma(temp_74, temp_11, temp_85);
    // 0x000348: 0x5C68100000872716 Fmul
    temp_96 = temp_54 * temp_81;
    // 0x000350: 0x59A0018000271103 Ffma
    temp_97 = fma(temp_75, temp_11, temp_86);
    // 0x000358: 0x01040DF760C7F011 Mov32i
    // 0x000368: 0x59A00B0000772116 Ffma
    temp_98 = fma(temp_57, temp_93, temp_96);
    // 0x000370: 0x59A00A0001571313 Ffma
    temp_99 = fma(temp_60, temp_94, temp_84);
    // 0x000378: 0x59A0078001570E0F Ffma
    temp_100 = fma(temp_69, temp_94, temp_95);
    // 0x000388: 0x59A0018001570612 Ffma
    temp_101 = fma(temp_61, temp_94, temp_97);
    // 0x000390: 0x59A40B0000972016 Ffma
    temp_102 = fma(temp_59, temp_87, temp_98);
    temp_103 = clamp(temp_102, 0.0, 1.0);
    // 0x000398: 0x49A1069805D7070E Ffma
    temp_104 = 0.0 - fp_c6.data[23].y;
    temp_105 = fma(temp_93, temp_104, temp_89);
    // 0x0003A8: 0x5C68100001371302 Fmul
    temp_106 = temp_99 * temp_99;
    // 0x0003B0: 0x49A208840017160D Ffma
    temp_107 = fma(temp_103, fp_c1.data[0].y, -6.98316002);
    // 0x0003B8: 0x49A5071805E7090E Ffma
    temp_108 = 0.0 - fp_c6.data[23].z;
    temp_109 = fma(temp_87, temp_108, temp_105);
    temp_110 = clamp(temp_109, 0.0, 1.0);
    // 0x0003C8: 0x59A0010000F70F03 Ffma
    temp_111 = fma(temp_100, temp_100, temp_106);
    // 0x0003D0: 0x5C68100000D71606 Fmul
    temp_112 = temp_103 * temp_107;
    // 0x0003D8: 0x49A2088400170E0D Ffma
    temp_113 = fma(temp_110, fp_c1.data[0].y, -6.98316002);
    // 0x0003E8: 0x0103F0000007F011 Mov32i
    // 0x0003F0: 0x59A0018001271210 Ffma
    temp_114 = fma(temp_101, temp_101, temp_111);
    // 0x0003F8: 0x5080000000571010 Mufu
    temp_115 = inversesqrt(temp_114);
    // 0x000408: 0x386013BF80072203 Fmnmx
    temp_116 = min(temp_82, 1.0);
    // 0x000410: 0x5C68100000D70E0D Fmul
    temp_117 = temp_110 * temp_113;
    // 0x000418: 0x5C90008000670018 Rro
    // 0x000428: 0xF0F0000034270000 Depbar
    // 0x000430: 0x4C58301407B71E06 Fadd
    temp_118 = 0.0 - fp_c5.data[30].w;
    temp_119 = temp_18 + temp_118;
    // 0x000438: 0x5080000000271818 Mufu
    temp_120 = exp2(temp_112);
    // 0x000448: 0x4C60178400070303 Fmnmx
    temp_121 = max(temp_116, fp_c1.data[0].x);
    // 0x000450: 0x5C90008000D70014 Rro
    // 0x000458: 0x5080000000271414 Mufu
    temp_122 = exp2(temp_117);
    // 0x000468: 0x5C6810000107130E Fmul
    temp_123 = temp_99 * temp_115;
    // 0x000470: 0x5C68100001070F02 Fmul
    temp_124 = temp_100 * temp_115;
    // 0x000478: 0x5C68100001071212 Fmul
    temp_125 = temp_101 * temp_115;
    // 0x000488: 0x32A008BF0007032F Ffma
    temp_126 = fma(temp_121, 0.5, 0.5);
    // 0x000490: 0x3868104110070510 Fmul
    temp_127 = temp_7 * 9.0;
    // 0x000498: 0x3868104180070411 Fmul
    temp_128 = temp_6 * 16.0;
    // 0x0004A8: 0x5CA8148001070A10 F2f
    temp_129 = floor(temp_127);
    // 0x0004B0: 0x5C68100000870E08 Fmul
    temp_130 = temp_123 * temp_81;
    // 0x0004B8: 0x5CA8148001170A11 F2f
    temp_131 = floor(temp_128);
    // 0x0004C8: 0x5C68100002770E0F Fmul
    temp_132 = temp_123 * temp_54;
    // 0x0004D0: 0x51A4018400070330 Ffma
    temp_133 = fma(temp_121, temp_121, fp_c1.data[0].x);
    temp_134 = clamp(temp_133, 0.0, 1.0);
    // 0x0004D8: 0x4C69101805C70E05 Fmul
    temp_135 = 0.0 - fp_c6.data[23].x;
    temp_136 = temp_123 * temp_135;
    // 0x0004E8: 0x5C68120002F72F2F Fmul
    temp_137 = temp_126 * 0.5;
    temp_138 = temp_137 * temp_126;
    // 0x0004F0: 0x59A0040000770208 Ffma
    temp_139 = fma(temp_124, temp_93, temp_130);
    // 0x0004F8: 0x59A007800217020F Ffma
    temp_140 = fma(temp_124, temp_57, temp_132);
    // 0x000508: 0x5C6810000307302E Fmul
    temp_141 = temp_134 * temp_134;
    // 0x000510: 0x49A1029805D70205 Ffma
    temp_142 = 0.0 - fp_c6.data[23].y;
    temp_143 = fma(temp_124, temp_142, temp_136);
    // 0x000518: 0x59A4040000971208 Ffma
    temp_144 = fma(temp_125, temp_87, temp_139);
    temp_145 = clamp(temp_144, 0.0, 1.0);
    // 0x000528: 0x59A4078002071204 Ffma
    temp_146 = fma(temp_125, temp_59, temp_140);
    temp_147 = clamp(temp_146, 0.0, 1.0);
    // 0x000530: 0x32A008C18007102D Ffma
    temp_148 = fma(temp_129, 16.0, temp_131);
    // 0x000538: 0x49A5029805E71205 Ffma
    temp_149 = 0.0 - fp_c6.data[23].z;
    temp_150 = fma(temp_125, temp_149, temp_143);
    temp_151 = clamp(temp_150, 0.0, 1.0);
    // 0x000548: 0x5CB0118002D70A2D F2i
    temp_152 = trunc(temp_148);
    temp_153 = max(temp_152, 0.0);
    temp_154 = uint(temp_153);
    // 0x000550: 0x59A2040002E70807 Ffma
    temp_155 = 0.0 - temp_145;
    temp_156 = fma(temp_145, temp_141, temp_155);
    // 0x000558: 0x59A1020000472F09 Ffma
    temp_157 = 0.0 - temp_147;
    temp_158 = fma(temp_138, temp_157, temp_147);
    // 0x000568: 0x5C68100000470E2A Fmul
    temp_159 = temp_123 * temp_147;
    // 0x000570: 0x5C68100000471217 Fmul
    temp_160 = temp_125 * temp_147;
    // 0x000578: 0x4C68101801570510 Fmul
    temp_161 = temp_151 * fp_c6.data[5].y;
    // 0x000588: 0x51A0038400270807 Ffma
    temp_162 = fma(temp_145, temp_156, fp_c1.data[0].z);
    // 0x000590: 0x59A1028002F70508 Ffma
    temp_163 = 0.0 - temp_138;
    temp_164 = fma(temp_151, temp_163, temp_151);
    // 0x000598: 0x5080000000470707 Mufu
    temp_165 = 1.0 / temp_162;
    // 0x0005A8: 0x5C58100000972F09 Fadd
    temp_166 = temp_138 + temp_158;
    // 0x0005B0: 0x1E23EA2F98371010 Fmul32i
    temp_167 = temp_161 * 0.318309873;
    // 0x0005B8: 0x5080000000470909 Mufu
    temp_168 = 1.0 / temp_166;
    // 0x0005C8: 0x3848000000872D2B Shl
    temp_169 = int(temp_154) << 8;
    // 0x0005D0: 0x32A213C000072A2A Ffma
    temp_170 = 0.0 - temp_54;
    temp_171 = fma(temp_159, 2.0, temp_170);
    // 0x0005D8: 0xEF94008200472B2B Ldc
    temp_172 = temp_169 + 0x2004;
    temp_173 = uint(temp_172) >> 2;
    temp_174 = temp_173 >> 2;
    temp_175 = int(temp_173) & 3;
    temp_176 = fp_c8.data[int(temp_174)][temp_175];
    // 0x0005E8: 0x5C58100000872F0F Fadd
    temp_177 = temp_138 + temp_164;
    // 0x0005F0: 0x32A2104000071717 Ffma
    temp_178 = 0.0 - temp_59;
    temp_179 = fma(temp_160, 2.0, temp_178);
    // 0x0005F8: 0x5080000000470F0F Mufu
    temp_180 = 1.0 / temp_177;
    // 0x000608: 0x5C68100000773008 Fmul
    temp_181 = temp_134 * temp_165;
    // 0x000610: 0x3868103F0007092C Fmul
    temp_182 = temp_168 * 0.5;
    // 0x000618: 0x4C58301407B70109 Fadd
    temp_183 = 0.0 - fp_c5.data[30].w;
    temp_184 = temp_20 + temp_183;
    // 0x000628: 0x5C68100000870808 Fmul
    temp_185 = temp_181 * temp_181;
    // 0x000630: 0x5C68100000F72C11 Fmul
    temp_186 = temp_182 * temp_180;
    // 0x000638: 0x4C6810180147050F Fmul
    temp_187 = temp_151 * fp_c6.data[5].x;
    // 0x000648: 0x5C68100001170807 Fmul
    temp_188 = temp_185 * temp_186;
    // 0x000650: 0x4C58301407B71F08 Fadd
    temp_189 = 0.0 - fp_c5.data[30].w;
    temp_190 = temp_19 + temp_189;
    // 0x000658: 0x4C68101801670511 Fmul
    temp_191 = temp_151 * fp_c6.data[5].z;
    // 0x000668: 0x1E23EA2F98370F0F Fmul32i
    temp_192 = temp_187 * 0.318309873;
    // 0x000670: 0x5C6810000077050D Fmul
    temp_193 = temp_151 * temp_188;
    // 0x000678: 0x51A0031407B72305 Ffma
    temp_194 = fma(temp_15, temp_119, fp_c5.data[30].w);
    // 0x000688: 0x51A0041407B72306 Ffma
    temp_195 = fma(temp_15, temp_190, fp_c5.data[30].w);
    // 0x000690: 0x51A0049407B72307 Ffma
    temp_196 = fma(temp_15, temp_184, fp_c5.data[30].w);
    // 0x000698: 0x1E23EA2F98371111 Fmul32i
    temp_197 = temp_191 * 0.318309873;
    // 0x0006A8: 0x59A10A0000571416 Ffma
    temp_198 = 0.0 - temp_194;
    temp_199 = fma(temp_122, temp_198, temp_122);
    // 0x0006B0: 0x59A10A0000671413 Ffma
    temp_200 = 0.0 - temp_195;
    temp_201 = fma(temp_122, temp_200, temp_122);
    // 0x0006B8: 0x59A10C0001870508 Ffma
    temp_202 = 0.0 - temp_120;
    temp_203 = fma(temp_194, temp_202, temp_120);
    // 0x0006C8: 0x59A10A0000771414 Ffma
    temp_204 = 0.0 - temp_196;
    temp_205 = fma(temp_122, temp_204, temp_122);
    // 0x0006D0: 0x59A10C0001870609 Ffma
    temp_206 = 0.0 - temp_120;
    temp_207 = fma(temp_195, temp_206, temp_120);
    // 0x0006D8: 0x59A10C0001870718 Ffma
    temp_208 = 0.0 - temp_120;
    temp_209 = fma(temp_196, temp_208, temp_120);
    // 0x0006E8: 0x5C58100001670516 Fadd
    temp_210 = temp_194 + temp_199;
    // 0x0006F0: 0x5C58100001370613 Fadd
    temp_211 = temp_195 + temp_201;
    // 0x0006F8: 0x5C58100000870508 Fadd
    temp_212 = temp_194 + temp_203;
    // 0x000708: 0x5C58100001470714 Fadd
    temp_213 = temp_196 + temp_205;
    // 0x000710: 0x5C58100000970609 Fadd
    temp_214 = temp_195 + temp_207;
    // 0x000718: 0x5C58100001870718 Fadd
    temp_215 = temp_196 + temp_209;
    // 0x000728: 0x4C68101801471616 Fmul
    temp_216 = temp_210 * fp_c6.data[5].x;
    // 0x000730: 0x4C68101801571313 Fmul
    temp_217 = temp_211 * fp_c6.data[5].y;
    // 0x000738: 0x59A1078000F70808 Ffma
    temp_218 = 0.0 - temp_192;
    temp_219 = fma(temp_212, temp_218, temp_192);
    // 0x000748: 0x4C68101801671414 Fmul
    temp_220 = temp_213 * fp_c6.data[5].z;
    // 0x000750: 0xF0F0000034170000 Depbar
    // 0x000758: 0xEF5400000007FF08 Stl
    local_memory[0] = floatBitsToUint(temp_219);
    // 0x000768: 0x51A5058400270A0F Ffma
    temp_221 = 0.0 - temp_21;
    temp_222 = fma(temp_16, temp_221, fp_c1.data[0].z);
    temp_223 = clamp(temp_222, 0.0, 1.0);
    // 0x000770: 0x5C68100001670D24 Fmul
    temp_224 = temp_193 * temp_216;
    // 0x000778: 0x5C68100001370D22 Fmul
    temp_225 = temp_193 * temp_217;
    // 0x000788: 0x5B6603800FF72B07 Isetp
    temp_226 = floatBitsToUint(temp_176) <= 0u;
    // 0x000790: 0x5C68100000470216 Fmul
    temp_227 = temp_124 * temp_147;
    // 0x000798: 0x5C68100001470D14 Fmul
    temp_228 = temp_193 * temp_220;
    // 0x0007A8: 0x49A207980AC70F0D Ffma
    temp_229 = 0.0 - temp_223;
    temp_230 = fma(temp_223, fp_c6.data[43].x, temp_229);
    // 0x0007B0: 0x5C9807800FF7000B Mov
    // 0x0007B8: 0x5C9807800FF7000A Mov
    // 0x0007C8: 0x5C9807800FF70013 Mov
    // 0x0007D0: 0x59A1080001070908 Ffma
    temp_231 = 0.0 - temp_167;
    temp_232 = fma(temp_214, temp_231, temp_167);
    // 0x0007D8: 0x59A1088001171809 Ffma
    temp_233 = 0.0 - temp_197;
    temp_234 = fma(temp_215, temp_233, temp_197);
    // 0x0007E8: 0x49A207980AD70F10 Ffma
    temp_235 = 0.0 - temp_223;
    temp_236 = fma(temp_223, fp_c6.data[43].y, temp_235);
    // 0x0007F0: 0x49A207980AE70F11 Ffma
    temp_237 = 0.0 - temp_223;
    temp_238 = fma(temp_223, fp_c6.data[43].z, temp_237);
    // 0x0007F8: 0x3858103F80070D0D Fadd
    temp_239 = temp_230 + 1.0;
    // 0x000808: 0x5C9807800FF70018 Mov
    // 0x000810: 0x5C9807800FF7000F Mov
    // 0x000818: 0x32A210C000071616 Ffma
    temp_240 = 0.0 - temp_57;
    temp_241 = fma(temp_227, 2.0, temp_240);
    // 0x000828: 0x3858103F80071010 Fadd
    temp_242 = temp_236 + 1.0;
    // 0x000830: 0x3858103F8007111B Fadd
    temp_243 = temp_238 + 1.0;
    // 0x000838: 0x59A4068000D71E19 Ffma
    temp_244 = fma(temp_18, temp_239, temp_239);
    temp_245 = clamp(temp_244, 0.0, 1.0);
    // 0x000848: 0x1E23E22F98372222 Fmul32i
    temp_246 = temp_225 * 0.159154937;
    // 0x000850: 0x1E23E22F98372424 Fmul32i
    temp_247 = temp_224 * 0.159154937;
    // 0x000858: 0x1E23E22F98371425 Fmul32i
    temp_248 = temp_228 * 0.159154937;
    // 0x000868: 0x59A4080001071F1A Ffma
    temp_249 = fma(temp_19, temp_242, temp_242);
    temp_250 = clamp(temp_249, 0.0, 1.0);
    // 0x000870: 0x59A40D8001B7011B Ffma
    temp_251 = fma(temp_20, temp_243, temp_243);
    temp_252 = clamp(temp_251, 0.0, 1.0);
    // 0x000878: 0xF0F800000000000F Sync
    temp_253 = 0.0;
    temp_254 = 0.0;
    temp_255 = 0.0;
    temp_256 = 0.0;
    temp_257 = 0.0;
    temp_258 = 0.0;
    temp_259 = 0.0;
    temp_260 = 0.0;
    temp_261 = 0.0;
    temp_262 = 0.0;
    temp_263 = 0.0;
    temp_264 = 0.0;
    if (!temp_226)
    {
        // 0x000888: 0x5C9807800FF70029 Mov
        temp_265 = 0;
        do
        {
            // 0x000890: 0x5C18020002972D28 Iscadd
            temp_267 = int(temp_154) << 4;
            temp_268 = temp_267 + temp_265;
            // 0x000898: 0xE003FF87CFF7FF31 Ipa
            // 0x0008A8: 0x1C00000000172929 Iadd32i
            temp_269 = temp_265 + 1;
            // 0x0008B0: 0xE003FF87CFF7FF33 Ipa
            // 0x0008B8: 0x3848000000472828 Shl
            temp_270 = temp_268 << 4;
            // 0x0008C8: 0xE003FF87CFF7FF32 Ipa
            // 0x0008D0: 0x5B6C038002B7290F Isetp
            temp_266 = uint(temp_269) >= floatBitsToUint(temp_176);
            // 0x0008D8: 0xE290000055800000 Ssy
            // 0x0008E8: 0xEF94008200072828 Ldc
            temp_271 = temp_270 + 0x2000;
            temp_272 = uint(temp_271) >> 2;
            temp_273 = temp_272 >> 2;
            temp_274 = int(temp_272) & 3;
            temp_275 = fp_c8.data[int(temp_273)][temp_274];
            // 0x0008F0: 0x5080000000473131 Mufu
            // 0x0008F8: 0x5080000000473333 Mufu
            // 0x000908: 0x5080000000473232 Mufu
            // 0x000910: 0xE043FF8D0317FF31 Ipa
            temp_276 = in_attr5.x;
            // 0x000918: 0xE043FF8D8337FF33 Ipa
            temp_277 = in_attr5.z;
            // 0x000928: 0xE043FF8D4327FF32 Ipa
            temp_278 = in_attr5.y;
            // 0x000930: 0x3848000000672828 Shl
            temp_279 = floatBitsToInt(temp_275) << 6;
            // 0x000938: 0xEF9500800107280C Ldc
            temp_280 = temp_279 + 16;
            temp_281 = uint(temp_280) >> 2;
            temp_282 = temp_281 >> 2;
            temp_283 = int(temp_281) & 3;
            temp_284 = fp_c8.data[int(temp_282)][temp_283];
            temp_285 = int(temp_281) + 1;
            temp_286 = uint(temp_285) >> 2;
            temp_287 = temp_285 & 3;
            temp_288 = fp_c8.data[int(temp_286)][temp_287];
            // 0x000948: 0xEF95008001872810 Ldc
            temp_289 = temp_279 + 24;
            temp_290 = uint(temp_289) >> 2;
            temp_291 = temp_290 >> 2;
            temp_292 = int(temp_290) & 3;
            temp_293 = fp_c8.data[int(temp_291)][temp_292];
            temp_294 = int(temp_290) + 1;
            temp_295 = uint(temp_294) >> 2;
            temp_296 = temp_294 & 3;
            temp_297 = fp_c8.data[int(temp_295)][temp_296];
            // 0x000950: 0xEF95008002072814 Ldc
            temp_298 = temp_279 + 32;
            temp_299 = uint(temp_298) >> 2;
            temp_300 = temp_299 >> 2;
            temp_301 = int(temp_299) & 3;
            temp_302 = fp_c8.data[int(temp_300)][temp_301];
            temp_303 = int(temp_299) + 1;
            temp_304 = uint(temp_303) >> 2;
            temp_305 = temp_303 & 3;
            temp_306 = fp_c8.data[int(temp_304)][temp_305];
            // 0x000958: 0x5C58300003170C31 Fadd
            temp_307 = 0.0 - temp_276;
            temp_308 = temp_284 + temp_307;
            // 0x000968: 0x5C58300003270D32 Fadd
            temp_309 = 0.0 - temp_278;
            temp_310 = temp_288 + temp_309;
            // 0x000970: 0x5C58300003371033 Fadd
            temp_311 = 0.0 - temp_277;
            temp_312 = temp_293 + temp_311;
            // 0x000978: 0x5C68100003173134 Fmul
            temp_313 = temp_308 * temp_308;
            // 0x000988: 0x59A1198003371136 Ffma
            temp_314 = 0.0 - temp_312;
            temp_315 = fma(temp_297, temp_314, temp_312);
            // 0x000990: 0xEF95008003872810 Ldc
            temp_316 = temp_279 + 56;
            temp_317 = uint(temp_316) >> 2;
            temp_318 = temp_317 >> 2;
            temp_319 = int(temp_317) & 3;
            temp_320 = fp_c8.data[int(temp_318)][temp_319];
            temp_321 = int(temp_317) + 1;
            temp_322 = uint(temp_321) >> 2;
            temp_323 = temp_321 & 3;
            temp_324 = fp_c8.data[int(temp_322)][temp_323];
            // 0x000998: 0x59A01A0003273234 Ffma
            temp_325 = fma(temp_310, temp_310, temp_313);
            // 0x0009A8: 0x59A01A0003673637 Ffma
            temp_326 = fma(temp_315, temp_315, temp_325);
            // 0x0009B0: 0x5080000000573735 Mufu
            temp_327 = inversesqrt(temp_326);
            // 0x0009B8: 0x5080000000873737 Mufu
            temp_328 = sqrt(temp_326);
            // 0x0009C8: 0x5C6810000357310C Fmul
            temp_329 = temp_308 * temp_327;
            // 0x0009D0: 0x5C6810000357320D Fmul
            temp_330 = temp_310 * temp_327;
            // 0x0009D8: 0x5C68100003573635 Fmul
            temp_331 = temp_315 * temp_327;
            // 0x0009E8: 0x5C69100001470C0C Fmul
            temp_332 = 0.0 - temp_302;
            temp_333 = temp_329 * temp_332;
            // 0x0009F0: 0xEF94008002872814 Ldc
            temp_334 = temp_279 + 40;
            temp_335 = uint(temp_334) >> 2;
            temp_336 = temp_335 >> 2;
            temp_337 = int(temp_335) & 3;
            temp_338 = fp_c8.data[int(temp_336)][temp_337];
            // 0x0009F8: 0x59A1060001570D15 Ffma
            temp_339 = 0.0 - temp_306;
            temp_340 = fma(temp_330, temp_339, temp_333);
            // 0x000A08: 0xEF9500800307280C Ldc
            temp_341 = temp_279 + 48;
            temp_342 = uint(temp_341) >> 2;
            temp_343 = temp_342 >> 2;
            temp_344 = int(temp_342) & 3;
            temp_345 = fp_c8.data[int(temp_343)][temp_344];
            temp_346 = int(temp_342) + 1;
            temp_347 = uint(temp_346) >> 2;
            temp_348 = temp_346 & 3;
            temp_349 = fp_c8.data[int(temp_347)][temp_348];
            // 0x000A10: 0x59A10A8001473514 Ffma
            temp_350 = 0.0 - temp_338;
            temp_351 = fma(temp_331, temp_350, temp_340);
            // 0x000A18: 0x59A4088001071410 Ffma
            temp_352 = fma(temp_351, temp_320, temp_324);
            temp_353 = clamp(temp_352, 0.0, 1.0);
            // 0x000A28: 0x010404000007F011 Mov32i
            // 0x000A30: 0x59A4068003770C37 Ffma
            temp_354 = fma(temp_345, temp_328, temp_349);
            temp_355 = clamp(temp_354, 0.0, 1.0);
            // 0x000A38: 0x33A008C000073715 Ffma
            temp_356 = fma(temp_355, -2.0, 3.0);
            // 0x000A48: 0x33A008C000071011 Ffma
            temp_357 = fma(temp_353, -2.0, 3.0);
            // 0x000A50: 0x5C68100001071010 Fmul
            temp_358 = temp_353 * temp_353;
            // 0x000A58: 0x5C68100003773714 Fmul
            temp_359 = temp_355 * temp_355;
            // 0x000A68: 0x5C68100001171011 Fmul
            temp_360 = temp_358 * temp_357;
            // 0x000A70: 0x5C68100001471514 Fmul
            temp_361 = temp_356 * temp_359;
            // 0x000A78: 0x39585042F0073310 Fadd
            temp_362 = abs(temp_312);
            temp_363 = temp_362 + -120.0;
            // 0x000A88: 0x5C68100001471111 Fmul
            temp_364 = temp_360 * temp_361;
            // 0x000A90: 0x1EABD4CCCCD71010 Fmul32i
            temp_365 = temp_363 * -0.0500000007;
            temp_366 = clamp(temp_365, 0.0, 1.0);
            // 0x000A98: 0x5C68100001171010 Fmul
            temp_367 = temp_366 * temp_364;
            // 0x000AA8: 0x36247F9000171111 Xmad
            temp_368 = floatBitsToUint(temp_364) >> 16;
            temp_369 = int(temp_368) << 16;
            // 0x000AB0: 0x5BB383800FF71007 Fsetp
            temp_370 = temp_367 <= 0.0;
            // 0x000AB8: 0x7A05083C0F00FF11 Hadd2
            temp_265 = temp_269;
            temp_371 = uint(temp_369);
            temp_372 = temp_253;
            temp_373 = temp_254;
            temp_374 = temp_255;
            temp_375 = temp_256;
            temp_376 = temp_257;
            temp_377 = temp_258;
            if (temp_370)
            {
                temp_378 = unpackHalf2x16(uint(temp_369)).y;
                temp_379 = packHalf2x16(vec2(1.0, temp_378));
                temp_371 = temp_379;
            }
            // 0x000AC8: 0x5D2103902FF71107 Hsetp2
            temp_380 = unpackHalf2x16(temp_371).x;
            temp_381 = temp_380 == 0.0;
            // 0x000AD0: 0xF0F800000008000F Sync
            if (temp_381)
            {
                // 0x000AD8: 0x5080000000470C0C Mufu
                temp_382 = 1.0 / temp_345;
                // 0x000AE8: 0xEF94008002C72814 Ldc
                temp_383 = temp_279 + 44;
                temp_384 = uint(temp_383) >> 2;
                temp_385 = temp_384 >> 2;
                temp_386 = int(temp_384) & 3;
                temp_387 = fp_c8.data[int(temp_385)][temp_386];
                // 0x000AF0: 0x5C69100000C70D0D Fmul
                temp_388 = 0.0 - temp_382;
                temp_389 = temp_349 * temp_388;
                // 0x000AF8: 0x5C60138000D73333 Fmnmx
                temp_390 = min(temp_312, temp_389);
                // 0x000B08: 0x5C61178003370D0C Fmnmx
                temp_391 = 0.0 - temp_389;
                temp_392 = max(temp_391, temp_390);
                // 0x000B10: 0x59A01A0000C70C34 Ffma
                temp_393 = fma(temp_392, temp_392, temp_325);
                // 0x000B18: 0x508000000057340D Mufu
                temp_394 = inversesqrt(temp_393);
                // 0x000B28: 0x5080000000873434 Mufu
                temp_395 = sqrt(temp_393);
                // 0x000B30: 0x5C68100000D73115 Fmul
                temp_396 = temp_308 * temp_394;
                // 0x000B38: 0x5080000000471414 Mufu
                temp_397 = 1.0 / temp_387;
                // 0x000B48: 0x5C68100000D73235 Fmul
                temp_398 = temp_310 * temp_394;
                // 0x000B50: 0x5C68100000D70C32 Fmul
                temp_399 = temp_392 * temp_394;
                // 0x000B58: 0x5C58100001572711 Fadd
                temp_400 = temp_54 + temp_396;
                // 0x000B68: 0x5C58100003572133 Fadd
                temp_401 = temp_57 + temp_398;
                // 0x000B70: 0x5C58100003272031 Fadd
                temp_402 = temp_59 + temp_399;
                // 0x000B78: 0x5C68100001570E36 Fmul
                temp_403 = temp_123 * temp_396;
                // 0x000B88: 0x5C6810000117110C Fmul
                temp_404 = temp_400 * temp_400;
                // 0x000B90: 0x51A01A0400371434 Ffma
                temp_405 = fma(temp_397, temp_395, fp_c1.data[0].w);
                // 0x000B98: 0x59A01B0003570236 Ffma
                temp_406 = fma(temp_124, temp_398, temp_403);
                // 0x000BA8: 0x5080000000473434 Mufu
                temp_407 = 1.0 / temp_405;
                // 0x000BB0: 0x59A006000337330C Ffma
                temp_408 = fma(temp_401, temp_401, temp_404);
                // 0x000BB8: 0x59A01B0003271236 Ffma
                temp_409 = fma(temp_125, temp_399, temp_406);
                // 0x000BC8: 0x59A006000317310C Ffma
                temp_410 = fma(temp_402, temp_402, temp_408);
                // 0x000BD0: 0x5080000000570C0C Mufu
                temp_411 = inversesqrt(temp_410);
                // 0x000BD8: 0x5C5C30000FF73614 Fadd
                temp_412 = temp_409 + -0.0;
                temp_413 = clamp(temp_412, 0.0, 1.0);
                // 0x000BE8: 0x1E23FB3333373434 Fmul32i
                temp_414 = temp_407 * 1.39999998;
                // 0x000BF0: 0x5C68100003473434 Fmul
                temp_415 = temp_414 * temp_414;
                // 0x000BF8: 0x5C68100000C71111 Fmul
                temp_416 = temp_400 * temp_411;
                // 0x000C08: 0x5C68100000C73333 Fmul
                temp_417 = temp_401 * temp_411;
                // 0x000C10: 0x5C68100000C73131 Fmul
                temp_418 = temp_402 * temp_411;
                // 0x000C18: 0xEF9500800007280C Ldc
                temp_419 = uint(temp_279) >> 2;
                temp_420 = temp_419 >> 2;
                temp_421 = int(temp_419) & 3;
                temp_422 = fp_c8.data[int(temp_420)][temp_421];
                temp_423 = int(temp_419) + 1;
                temp_424 = uint(temp_423) >> 2;
                temp_425 = temp_423 & 3;
                temp_426 = fp_c8.data[int(temp_424)][temp_425];
                // 0x000C28: 0x59A11A0003473634 Ffma
                temp_427 = 0.0 - temp_415;
                temp_428 = fma(temp_409, temp_427, temp_415);
                // 0x000C30: 0xEF94008000872828 Ldc
                temp_429 = temp_279 + 8;
                temp_430 = uint(temp_429) >> 2;
                temp_431 = temp_430 >> 2;
                temp_432 = int(temp_430) & 3;
                temp_433 = fp_c8.data[int(temp_431)][temp_432];
                // 0x000C38: 0x5C68100001171515 Fmul
                temp_434 = temp_396 * temp_416;
                // 0x000C48: 0x5C68100001170E11 Fmul
                temp_435 = temp_123 * temp_416;
                // 0x000C50: 0x5C5C100003473636 Fadd
                temp_436 = temp_409 + temp_428;
                temp_437 = clamp(temp_436, 0.0, 1.0);
                // 0x000C58: 0x59A00A8003373515 Ffma
                temp_438 = fma(temp_398, temp_417, temp_434);
                // 0x000C68: 0x59A0088003370211 Ffma
                temp_439 = fma(temp_124, temp_417, temp_435);
                // 0x000C70: 0x59A40A8003173215 Ffma
                temp_440 = fma(temp_399, temp_418, temp_438);
                temp_441 = clamp(temp_440, 0.0, 1.0);
                // 0x000C78: 0x59A4088003171211 Ffma
                temp_442 = fma(temp_125, temp_418, temp_439);
                temp_443 = clamp(temp_442, 0.0, 1.0);
                // 0x000C88: 0x01040DF760C7F031 Mov32i
                // 0x000C90: 0x59A2088001172E32 Ffma
                temp_444 = 0.0 - temp_443;
                temp_445 = fma(temp_141, temp_443, temp_444);
                // 0x000C98: 0x49A2188400171531 Ffma
                temp_446 = fma(temp_441, fp_c1.data[0].y, -6.98316002);
                // 0x000CA8: 0x51A0190400271111 Ffma
                temp_447 = fma(temp_443, temp_445, fp_c1.data[0].z);
                // 0x000CB0: 0x5C68100003171515 Fmul
                temp_448 = temp_441 * temp_446;
                // 0x000CB8: 0x5080000000471111 Mufu
                temp_449 = 1.0 / temp_447;
                // 0x000CC8: 0x59A10A0001472F31 Ffma
                temp_450 = 0.0 - temp_413;
                temp_451 = fma(temp_138, temp_450, temp_413);
                // 0x000CD0: 0x5C90008001570015 Rro
                // 0x000CD8: 0x5C58100003172F33 Fadd
                temp_452 = temp_138 + temp_451;
                // 0x000CE8: 0x5080000000271515 Mufu
                temp_453 = exp2(temp_448);
                // 0x000CF0: 0x5C68100000C7100C Fmul
                temp_454 = temp_367 * temp_422;
                // 0x000CF8: 0x5080000000473331 Mufu
                temp_455 = 1.0 / temp_452;
                // 0x000D08: 0x5C68100001173011 Fmul
                temp_456 = temp_134 * temp_449;
                // 0x000D10: 0x5C68100000D7100D Fmul
                temp_457 = temp_367 * temp_426;
                // 0x000D18: 0x5C68100001171132 Fmul
                temp_458 = temp_456 * temp_456;
                // 0x000D28: 0x5C68100002871028 Fmul
                temp_459 = temp_367 * temp_433;
                // 0x000D30: 0x59A10A8001570611 Ffma
                temp_460 = 0.0 - temp_453;
                temp_461 = fma(temp_195, temp_460, temp_453);
                // 0x000D38: 0x59A10A8001570510 Ffma
                temp_462 = 0.0 - temp_453;
                temp_463 = fma(temp_194, temp_462, temp_453);
                // 0x000D48: 0x59A10A8001570715 Ffma
                temp_464 = 0.0 - temp_453;
                temp_465 = fma(temp_196, temp_464, temp_453);
                // 0x000D50: 0x5C68100003172C31 Fmul
                temp_466 = temp_182 * temp_455;
                // 0x000D58: 0x5C58100001570715 Fadd
                temp_467 = temp_196 + temp_465;
                // 0x000D68: 0x5C68100003173231 Fmul
                temp_468 = temp_458 * temp_466;
                // 0x000D70: 0x5C58100001170632 Fadd
                temp_469 = temp_195 + temp_461;
                // 0x000D78: 0x5C58100001070511 Fadd
                temp_470 = temp_194 + temp_463;
                // 0x000D88: 0x5C68100003171431 Fmul
                temp_471 = temp_413 * temp_468;
                // 0x000D90: 0x5C68100003270D32 Fmul
                temp_472 = temp_457 * temp_469;
                // 0x000D98: 0x5C68100001170C10 Fmul
                temp_473 = temp_454 * temp_470;
                // 0x000DA8: 0x5C68100001572814 Fmul
                temp_474 = temp_459 * temp_467;
                // 0x000DB0: 0x5C68100003670C0C Fmul
                temp_475 = temp_454 * temp_437;
                // 0x000DB8: 0x5C68100003670D0D Fmul
                temp_476 = temp_457 * temp_437;
                // 0x000DC8: 0x5C68100003672828 Fmul
                temp_477 = temp_459 * temp_437;
                // 0x000DD0: 0x5C68100003173232 Fmul
                temp_478 = temp_472 * temp_471;
                // 0x000DD8: 0x5C68100003171010 Fmul
                temp_479 = temp_473 * temp_471;
                // 0x000DE8: 0x5C68100003171414 Fmul
                temp_480 = temp_474 * temp_471;
                // 0x000DF0: 0x49A0130400570C26 Ffma
                temp_481 = fma(temp_475, fp_c1.data[1].y, temp_253);
                // 0x000DF8: 0x49A0078400570D0F Ffma
                temp_482 = fma(temp_476, fp_c1.data[1].y, temp_254);
                // 0x000E08: 0x49A0098400572813 Ffma
                temp_483 = fma(temp_477, fp_c1.data[1].y, temp_255);
                // 0x000E10: 0x49A00C0400473218 Ffma
                temp_484 = fma(temp_478, fp_c1.data[1].x, temp_256);
                // 0x000E18: 0x49A005840047100B Ffma
                temp_485 = fma(temp_479, fp_c1.data[1].x, temp_257);
                // 0x000E28: 0x49A005040047140A Ffma
                temp_486 = fma(temp_480, fp_c1.data[1].x, temp_258);
                // 0x000E30: 0xF0F800000007000F Sync
                temp_372 = temp_481;
                temp_373 = temp_482;
                temp_374 = temp_483;
                temp_375 = temp_484;
                temp_376 = temp_485;
                temp_377 = temp_486;
            }
            // 0x000E38: 0xE2400FFFA509000F Bra
            temp_253 = temp_372;
            temp_254 = temp_373;
            temp_255 = temp_374;
            temp_256 = temp_375;
            temp_257 = temp_376;
            temp_258 = temp_377;
            temp_259 = temp_374;
            temp_260 = temp_373;
            temp_261 = temp_376;
            temp_262 = temp_377;
            temp_263 = temp_375;
            temp_264 = temp_372;
        }
        while (!temp_266);
        // 0x000E48: 0xF0F800000007000F Sync
    }
    // 0x000E50: 0x5C62578001672A0D Fmnmx
    temp_487 = abs(temp_171);
    temp_488 = abs(temp_241);
    temp_489 = max(temp_487, temp_488);
    // 0x000E58: 0xE003FF87CFF7FF27 Ipa
    // 0x000E68: 0x5C62578000270E0C Fmnmx
    temp_490 = abs(temp_123);
    temp_491 = abs(temp_124);
    temp_492 = max(temp_490, temp_491);
    // 0x000E70: 0xEF4410000007FF31 Ldl
    temp_493 = uintBitsToFloat(local_memory[0]);
    // 0x000E78: 0x38681040E007032B Fmul
    temp_494 = temp_121 * 7.0;
    // 0x000E88: 0x010000000017F014 Mov32i
    // 0x000E90: 0x3868104080070321 Fmul
    temp_495 = temp_121 * 4.0;
    // 0x000E98: 0x5C60578000D7170D Fmnmx
    temp_496 = abs(temp_179);
    temp_497 = max(temp_496, temp_489);
    // 0x000EA8: 0x4C98079C0207002F Mov
    // 0x000EB0: 0x5080000000470D0D Mufu
    temp_498 = 1.0 / temp_497;
    // 0x000EB8: 0x5C60578000C7120C Fmnmx
    temp_499 = abs(temp_125);
    temp_500 = max(temp_499, temp_492);
    // 0x000EC8: 0x5080000000470C0C Mufu
    temp_501 = 1.0 / temp_500;
    // 0x000ED0: 0x5C68100000D72A15 Fmul
    temp_502 = temp_171 * temp_498;
    // 0x000ED8: 0x5C68100000D71616 Fmul
    temp_503 = temp_241 * temp_498;
    // 0x000EE8: 0x5080000000472727 Mufu
    // 0x000EF0: 0x5C69100000C71212 Fmul
    temp_504 = 0.0 - temp_501;
    temp_505 = temp_125 * temp_504;
    // 0x000EF8: 0x5C68100000C70E10 Fmul
    temp_506 = temp_123 * temp_501;
    // 0x000F08: 0x5C68100000C70211 Fmul
    temp_507 = temp_124 * temp_501;
    // 0x000F10: 0x5C69100000D71717 Fmul
    temp_508 = 0.0 - temp_498;
    temp_509 = temp_179 * temp_508;
    // 0x000F18: 0xC0BA0163EFF7100C Tex
    temp_510 = textureLod(fp_t_tcb_16, vec3(temp_506, temp_507, temp_505), 0.0).xyz;
    temp_511 = temp_510.x;
    temp_512 = temp_510.y;
    temp_513 = temp_510.z;
    // 0x000F28: 0x5C98078001270020 Mov
    // 0x000F30: 0xC1BA0143F2B71414 Tex
    temp_514 = textureLod(fp_t_tcb_14, vec4(temp_502, temp_503, temp_509, float(1)), temp_494).xyz;
    temp_515 = temp_514.x;
    temp_516 = temp_514.y;
    temp_517 = temp_514.z;
    // 0x000F38: 0x3859103F80070303 Fadd
    temp_518 = 0.0 - temp_121;
    temp_519 = temp_518 + 1.0;
    // 0x000F48: 0xD9A2018202071010 Texs
    temp_520 = textureLod(fp_t_tcb_18, vec3(temp_506, temp_507, temp_505), temp_495).xyz;
    temp_521 = temp_520.x;
    temp_522 = temp_520.y;
    temp_523 = temp_520.z;
    // 0x000F50: 0x3859103F8007042C Fadd
    temp_524 = 0.0 - temp_147;
    temp_525 = temp_524 + 1.0;
    // 0x000F58: 0xE043FF910277FF28 Ipa
    temp_526 = in_attr9.x;
    // 0x000F68: 0x49A004980A171309 Ffma
    temp_527 = fma(temp_259, fp_c6.data[40].y, temp_234);
    // 0x000F70: 0xE043FF914277FF29 Ipa
    temp_528 = in_attr9.y;
    // 0x000F78: 0x5C68100000370303 Fmul
    temp_529 = temp_519 * temp_519;
    // 0x000F88: 0xE043FF918277FF2A Ipa
    temp_530 = in_attr9.z;
    // 0x000F90: 0xDEBA0000C2F72828 TexB
    temp_531 = texture(fp_t_cb7_20, vec3(temp_526, temp_528, temp_530)).x;
    // 0x000F98: 0x49A004180A170F08 Ffma
    temp_532 = fma(temp_260, fp_c6.data[40].y, temp_232);
    // 0x000FA8: 0x010410676C97F013 Mov32i
    // 0x000FB0: 0x4C68101809072C0F Fmul
    temp_533 = temp_525 * fp_c6.data[36].x;
    // 0x000FB8: 0x49A012180A170B24 Ffma
    temp_534 = fma(temp_261, fp_c6.data[40].y, temp_247);
    // 0x000FC8: 0x5080400000370F0F Mufu
    temp_535 = abs(temp_533);
    temp_536 = log2(temp_535);
    // 0x000FD0: 0x1E23E468DB970412 Fmul32i
    temp_537 = temp_147 * 0.193900004;
    // 0x000FD8: 0x5C68100000370303 Fmul
    temp_538 = temp_529 * temp_529;
    // 0x000FE8: 0x49A009840097040B Ffma
    temp_539 = fma(temp_147, fp_c1.data[2].y, 8.40400028);
    // 0x000FF0: 0x0103E2CD9E87F021 Mov32i
    // 0x000FF8: 0x49A012980A170A25 Ffma
    temp_540 = fma(temp_262, fp_c6.data[40].y, temp_248);
    // 0x001008: 0xE04BFF904277FF0A Ipa
    temp_541 = in_attr8.y;
    temp_542 = clamp(temp_541, 0.0, 1.0);
    // 0x001010: 0x49A011180A171822 Ffma
    temp_543 = fma(temp_263, fp_c6.data[40].y, temp_246);
    // 0x001018: 0x0103F0000007F017 Mov32i
    // 0x001028: 0x49A0090400670312 Ffma
    temp_544 = fma(temp_538, fp_c1.data[1].z, temp_537);
    // 0x001030: 0x51A0058400A7040B Ffma
    temp_545 = fma(temp_147, temp_539, fp_c1.data[2].z);
    // 0x001038: 0x49A2108400C70318 Ffma
    temp_546 = fma(temp_538, fp_c1.data[3].x, -0.168799996);
    // 0x001048: 0x0104066978D7F021 Mov32i
    // 0x001050: 0x4C68101809170F0F Fmul
    temp_547 = temp_536 * fp_c6.data[36].y;
    // 0x001058: 0x088BF05D63971212 Fadd32i
    temp_548 = temp_544 + -0.522800028;
    // 0x001068: 0x51A0058400B70413 Ffma
    temp_549 = fma(temp_147, temp_545, fp_c1.data[2].w);
    // 0x001070: 0x5C68100001870318 Fmul
    temp_550 = temp_538 * temp_546;
    // 0x001078: 0x32A00BBF0007020B Ffma
    temp_551 = fma(temp_124, 0.5, 0.5);
    // 0x001088: 0x49A2108400770302 Ffma
    temp_552 = fma(temp_538, fp_c1.data[1].w, -3.60299993);
    // 0x001090: 0x4C98079800870017 Mov
    // 0x001098: 0x5C90008000F7000F Rro
    // 0x0010A8: 0x5C68100001270412 Fmul
    temp_553 = temp_147 * temp_548;
    // 0x0010B0: 0x5084000000270F0F Mufu
    temp_554 = exp2(temp_547);
    temp_555 = clamp(temp_554, 0.0, 1.0);
    // 0x0010B8: 0x5C60138001871304 Fmnmx
    temp_556 = min(temp_549, temp_550);
    // 0x0010C8: 0x4C98079809770013 Mov
    // 0x0010D0: 0x51A0010400870318 Ffma
    temp_557 = fma(temp_538, temp_552, fp_c1.data[2].x);
    // 0x0010D8: 0x4C9807980B47002A Mov
    // 0x0010E8: 0x4C98079800970021 Mov
    // 0x0010F0: 0x386C104248070629 Fmul
    temp_558 = temp_195 * 50.0;
    temp_559 = clamp(temp_558, 0.0, 1.0);
    // 0x0010F8: 0x4C58101408171302 Fadd
    temp_560 = fp_c6.data[37].w + fp_c5.data[32].y;
    // 0x001108: 0x59A0090001870313 Ffma
    temp_561 = fma(temp_538, temp_557, temp_553);
    // 0x001110: 0x4C59101800471712 Fadd
    temp_562 = 0.0 - fp_c6.data[2].x;
    temp_563 = temp_562 + fp_c6.data[1].x;
    // 0x001118: 0x010404000007F017 Mov32i
    // 0x001128: 0xF0F0000034470000 Depbar
    // 0x001130: 0x51A215180B471C1C Ffma
    temp_564 = 0.0 - fp_c6.data[45].x;
    temp_565 = fma(temp_23, fp_c6.data[45].x, temp_564);
    // 0x001138: 0x51A215180B471D1D Ffma
    temp_566 = 0.0 - fp_c6.data[45].x;
    temp_567 = fma(temp_24, fp_c6.data[45].x, temp_566);
    // 0x001148: 0x5C68100000F7020F Fmul
    temp_568 = temp_560 * temp_555;
    // 0x001150: 0x51A215180B470000 Ffma
    temp_569 = 0.0 - fp_c6.data[45].x;
    temp_570 = fma(temp_25, fp_c6.data[45].x, temp_569);
    // 0x001158: 0x4C98079800A70003 Mov
    // 0x001168: 0x4C59101800572118 Fadd
    temp_571 = 0.0 - fp_c6.data[2].y;
    temp_572 = temp_571 + fp_c6.data[1].y;
    // 0x001170: 0x51A0091800870B02 Ffma
    temp_573 = fma(temp_551, temp_563, fp_c6.data[2].x);
    // 0x001178: 0x33A00BC000070A2A Ffma
    temp_574 = fma(temp_542, -2.0, 3.0);
    // 0x001188: 0x5C5C30000FF70412 Fadd
    temp_575 = temp_556 + -0.0;
    temp_576 = clamp(temp_575, 0.0, 1.0);
    // 0x001190: 0x4C5C100400D71317 Fadd
    temp_577 = temp_561 + fp_c1.data[3].y;
    temp_578 = clamp(temp_577, 0.0, 1.0);
    // 0x001198: 0x5C68100000A70A2B Fmul
    temp_579 = temp_542 * temp_542;
    // 0x0011A8: 0x4C68101808D70F13 Fmul
    temp_580 = temp_568 * fp_c6.data[35].y;
    // 0x0011B0: 0x4C68101808C70F0A Fmul
    temp_581 = temp_568 * fp_c6.data[35].x;
    // 0x0011B8: 0x4C59101800670321 Fadd
    temp_582 = 0.0 - fp_c6.data[2].z;
    temp_583 = temp_582 + fp_c6.data[1].z;
    // 0x0011C8: 0x51A00C1800970B03 Ffma
    temp_584 = fma(temp_551, temp_572, fp_c6.data[2].y);
    // 0x0011D0: 0x5C68100002971218 Fmul
    temp_585 = temp_576 * temp_559;
    // 0x0011D8: 0x5C59100001771217 Fadd
    temp_586 = 0.0 - temp_576;
    temp_587 = temp_586 + temp_578;
    // 0x0011E8: 0x4C68101808E70F0F Fmul
    temp_588 = temp_568 * fp_c6.data[35].z;
    // 0x0011F0: 0x49A0111408271322 Ffma
    temp_589 = fma(temp_580, fp_c5.data[32].z, temp_543);
    // 0x0011F8: 0x49A1099408271312 Ffma
    temp_590 = 0.0 - fp_c5.data[32].z;
    temp_591 = fma(temp_580, temp_590, temp_580);
    // 0x001208: 0x49A1051408270A13 Ffma
    temp_592 = 0.0 - fp_c5.data[32].z;
    temp_593 = fma(temp_581, temp_592, temp_581);
    // 0x001210: 0x49A0121408270A24 Ffma
    temp_594 = fma(temp_581, fp_c5.data[32].z, temp_534);
    // 0x001218: 0xE043FF900277FF0A Ipa
    temp_595 = in_attr8.x;
    // 0x001228: 0x51A0109800A70B0B Ffma
    temp_596 = fma(temp_551, temp_583, fp_c6.data[2].z);
    // 0x001230: 0xE043FF8C8277FF27 Ipa
    temp_597 = in_attr4.z;
    // 0x001238: 0x49A0129408270F25 Ffma
    temp_598 = fma(temp_588, fp_c5.data[32].z, temp_540);
    // 0x001248: 0x49A1079408270F0F Ffma
    temp_599 = 0.0 - fp_c5.data[32].z;
    temp_600 = fma(temp_588, temp_599, temp_588);
    // 0x001250: 0x59A00C0001770521 Ffma
    temp_601 = fma(temp_194, temp_587, temp_585);
    // 0x001258: 0x5C58100001270808 Fadd
    temp_602 = temp_532 + temp_591;
    // 0x001268: 0x59A00C0001770605 Ffma
    temp_603 = fma(temp_195, temp_587, temp_585);
    // 0x001270: 0x59A00C0001770707 Ffma
    temp_604 = fma(temp_196, temp_587, temp_585);
    // 0x001278: 0x5C68100002B72A04 Fmul
    temp_605 = temp_574 * temp_579;
    // 0x001288: 0x5C58100000F70909 Fadd
    temp_606 = temp_527 + temp_600;
    // 0x001290: 0x4C68101803770404 Fmul
    temp_607 = temp_605 * fp_c6.data[13].w;
    // 0x001298: 0xF0F0000034370000 Depbar
    // 0x0012A8: 0x49A018980A172626 Ffma
    temp_608 = fma(temp_264, fp_c6.data[40].y, temp_493);
    // 0x0012B0: 0x5C58100001372613 Fadd
    temp_609 = temp_608 + temp_593;
    // 0x0012B8: 0xF0F0000034170000 Depbar
    // 0x0012C8: 0x49A0060400570202 Ffma
    temp_610 = fma(temp_573, fp_c1.data[1].y, temp_511);
    // 0x0012D0: 0x49A0068400570303 Ffma
    temp_611 = fma(temp_584, fp_c1.data[1].y, temp_512);
    // 0x0012D8: 0x49A0070400570B0B Ffma
    temp_612 = fma(temp_596, fp_c1.data[1].y, temp_513);
    // 0x0012E8: 0x49A0081808571406 Ffma
    temp_613 = fma(temp_515, fp_c6.data[33].y, temp_521);
    // 0x0012F0: 0x49A0101808571616 Ffma
    temp_614 = fma(temp_517, fp_c6.data[33].y, temp_523);
    // 0x0012F8: 0x5C58100000271302 Fadd
    temp_615 = temp_609 + temp_610;
    // 0x001308: 0x5C58100000370808 Fadd
    temp_616 = temp_602 + temp_611;
    // 0x001310: 0x5C58100000B70909 Fadd
    temp_617 = temp_606 + temp_612;
    // 0x001318: 0x49A008980857150B Ffma
    temp_618 = fma(temp_516, fp_c6.data[33].y, temp_522);
    // 0x001328: 0x59A0120000672121 Ffma
    temp_619 = fma(temp_601, temp_613, temp_594);
    // 0x001330: 0x4C98079802870006 Mov
    // 0x001338: 0x59A1010000272303 Ffma
    temp_620 = 0.0 - temp_615;
    temp_621 = fma(temp_15, temp_620, temp_615);
    // 0x001348: 0x4C98079802970002 Mov
    // 0x001350: 0x59A1040000872308 Ffma
    temp_622 = 0.0 - temp_616;
    temp_623 = fma(temp_15, temp_622, temp_616);
    // 0x001358: 0x59A0110000B70505 Ffma
    temp_624 = fma(temp_603, temp_618, temp_589);
    // 0x001368: 0x59A0128001670707 Ffma
    temp_625 = fma(temp_604, temp_614, temp_598);
    // 0x001370: 0x51A0031802871C1C Ffma
    temp_626 = fma(temp_565, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001378: 0x59A0108000371E03 Ffma
    temp_627 = fma(temp_18, temp_621, temp_619);
    // 0x001388: 0x51A0011802971D1D Ffma
    temp_628 = fma(temp_567, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001390: 0x59A1048000972302 Ffma
    temp_629 = 0.0 - temp_617;
    temp_630 = fma(temp_15, temp_629, temp_617);
    // 0x001398: 0x59A0028000871F05 Ffma
    temp_631 = fma(temp_19, temp_623, temp_624);
    // 0x0013A8: 0x5C68100000371919 Fmul
    temp_632 = temp_245 * temp_627;
    // 0x0013B0: 0x4C98079802A70003 Mov
    // 0x0013B8: 0x59A0038000270102 Ffma
    temp_633 = fma(temp_20, temp_630, temp_625);
    // 0x0013C8: 0x5C68100000571A1A Fmul
    temp_634 = temp_250 * temp_631;
    // 0x0013D0: 0x49A2021803570407 Ffma
    temp_635 = 0.0 - temp_607;
    temp_636 = fma(temp_607, fp_c6.data[13].y, temp_635);
    // 0x0013D8: 0x5C58300001C71901 Fadd
    temp_637 = 0.0 - temp_626;
    temp_638 = temp_632 + temp_637;
    // 0x0013E8: 0x51A0019802A70000 Ffma
    temp_639 = fma(temp_570, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0013F0: 0x5C68100000271B1B Fmul
    temp_640 = temp_252 * temp_633;
    // 0x0013F8: 0x5C58300001D71A02 Fadd
    temp_641 = 0.0 - temp_628;
    temp_642 = temp_634 + temp_641;
    // 0x001408: 0x49A00E180BF70103 Ffma
    temp_643 = fma(temp_638, fp_c6.data[47].w, temp_626);
    // 0x001410: 0x5C58300000071B01 Fadd
    temp_644 = 0.0 - temp_639;
    temp_645 = temp_640 + temp_644;
    // 0x001418: 0x49A00E980BF70202 Ffma
    temp_646 = fma(temp_642, fp_c6.data[47].w, temp_628);
    // 0x001428: 0x49A505180BC7280A Ffma
    temp_647 = 0.0 - fp_c6.data[47].x;
    temp_648 = fma(temp_531, temp_647, temp_595);
    temp_649 = clamp(temp_648, 0.0, 1.0);
    // 0x001430: 0x5080000000370A0A Mufu
    temp_650 = log2(temp_649);
    // 0x001438: 0x5C60178000371C03 Fmnmx
    temp_651 = max(temp_626, temp_643);
    // 0x001448: 0x49A000180BF70101 Ffma
    temp_652 = fma(temp_645, fp_c6.data[47].w, temp_639);
    // 0x001450: 0x5C60178000271D02 Fmnmx
    temp_653 = max(temp_628, temp_646);
    // 0x001458: 0x5C60178000170001 Fmnmx
    temp_654 = max(temp_639, temp_652);
    // 0x001468: 0x59A0010000770207 Ffma
    temp_655 = fma(temp_653, temp_636, temp_653);
    // 0x001470: 0x4C68101803170A05 Fmul
    temp_656 = temp_650 * fp_c6.data[12].y;
    // 0x001478: 0x5C90008000570006 Rro
    // 0x001488: 0x49A2021803470405 Ffma
    temp_657 = 0.0 - temp_607;
    temp_658 = fma(temp_607, fp_c6.data[13].x, temp_657);
    // 0x001490: 0x5080000000270606 Mufu
    temp_659 = exp2(temp_656);
    // 0x001498: 0x49A2021803670404 Ffma
    temp_660 = 0.0 - temp_607;
    temp_661 = fma(temp_607, fp_c6.data[13].z, temp_660);
    // 0x0014A8: 0x59A0018000570300 Ffma
    temp_662 = fma(temp_651, temp_658, temp_651);
    // 0x0014B0: 0x59A0008000470102 Ffma
    temp_663 = fma(temp_654, temp_661, temp_654);
    // 0x0014B8: 0x5C59100000771A01 Fadd
    temp_664 = 0.0 - temp_634;
    temp_665 = temp_664 + temp_655;
    // 0x0014C8: 0x4C58100C03872704 Fadd
    temp_666 = temp_597 + fp_c3.data[14].x;
    // 0x0014D0: 0x0103F0000007F005 Mov32i
    // 0x0014D8: 0x0103F8000007F007 Mov32i
    // 0x0014E8: 0x5C59100000071900 Fadd
    temp_667 = 0.0 - temp_632;
    temp_668 = temp_667 + temp_662;
    // 0x0014F0: 0x4C68101802B70603 Fmul
    temp_669 = temp_659 * fp_c6.data[10].w;
    // 0x0014F8: 0x5C59100000271B02 Fadd
    temp_670 = 0.0 - temp_640;
    temp_671 = temp_670 + temp_663;
    // 0x001508: 0x5C9807800FF70006 Mov
    // 0x001510: 0x49A37F8C03C70404 Ffma
    temp_672 = 0.0 - fp_c3.data[15].x;
    temp_673 = fma(temp_666, temp_672, -0.0);
    // 0x001518: 0x59A00C8000370000 Ffma
    temp_674 = fma(temp_668, temp_669, temp_632);
    // 0x001528: 0x59A00D0000370101 Ffma
    temp_675 = fma(temp_665, temp_669, temp_634);
    // 0x001530: 0x59A00D8000370202 Ffma
    temp_676 = fma(temp_671, temp_669, temp_640);
    // 0x001538: 0x0103F8000007F003 Mov32i
    // 0x001548: 0xE30000000007000F Exit
    out_attr0.x = temp_674;
    out_attr0.y = temp_675;
    out_attr0.z = temp_676;
    out_attr0.w = 1.0;
    out_attr1.x = temp_673;
    out_attr1.y = 0.5;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
