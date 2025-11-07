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

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

uint local_memory[16];
layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_24;
layout (binding = 2) uniform sampler2D fp_t_tcb_1E;
layout (binding = 3) uniform sampler2D fp_t_tcb_36;
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
    precise vec4 temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise vec3 temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise vec3 temp_23;
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
    bool temp_76;
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
    uint temp_90;
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
    int temp_105;
    int temp_106;
    uint temp_107;
    uint temp_108;
    int temp_109;
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
    precise float temp_174;
    precise float temp_175;
    bool temp_176;
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
    int temp_267;
    bool temp_268;
    int temp_269;
    int temp_270;
    int temp_271;
    int temp_272;
    int temp_273;
    uint temp_274;
    uint temp_275;
    int temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    int temp_281;
    int temp_282;
    uint temp_283;
    uint temp_284;
    int temp_285;
    precise float temp_286;
    int temp_287;
    uint temp_288;
    int temp_289;
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
    int temp_300;
    uint temp_301;
    uint temp_302;
    int temp_303;
    precise float temp_304;
    int temp_305;
    uint temp_306;
    int temp_307;
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
    int temp_338;
    uint temp_339;
    uint temp_340;
    int temp_341;
    precise float temp_342;
    int temp_343;
    uint temp_344;
    uint temp_345;
    int temp_346;
    precise float temp_347;
    int temp_348;
    uint temp_349;
    int temp_350;
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
    uint temp_370;
    int temp_371;
    bool temp_372;
    uint temp_373;
    precise float temp_374;
    precise float temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    uint temp_381;
    precise float temp_382;
    bool temp_383;
    precise float temp_384;
    int temp_385;
    uint temp_386;
    uint temp_387;
    int temp_388;
    precise float temp_389;
    precise float temp_390;
    precise float temp_391;
    precise float temp_392;
    precise float temp_393;
    precise float temp_394;
    precise float temp_395;
    int temp_396;
    uint temp_397;
    uint temp_398;
    int temp_399;
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
    uint temp_418;
    uint temp_419;
    int temp_420;
    precise float temp_421;
    int temp_422;
    uint temp_423;
    int temp_424;
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
    precise vec3 temp_512;
    precise float temp_513;
    precise float temp_514;
    precise float temp_515;
    precise vec3 temp_516;
    precise float temp_517;
    precise float temp_518;
    precise float temp_519;
    precise float temp_520;
    precise float temp_521;
    precise float temp_522;
    precise float temp_523;
    precise float temp_524;
    precise float temp_525;
    precise vec3 temp_526;
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
    precise float temp_677;
    precise float temp_678;
    // 0x000008: 0x0103F8000007F00F Mov32i
    // 0x000010: 0xE003FF87CFF7FF0C Ipa
    // 0x000018: 0xE003FF870FF7FF04 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000028: 0xE003FF874FF7FF05 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000030: 0x5080000000470C0C Mufu
    // 0x000038: 0x4C68100C04A70404 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000048: 0x4C68100C04B70505 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000050: 0xE043FF8E00C7FF08 Ipa
    temp_8 = in_attr6.x;
    // 0x000058: 0xE043FF8E40C7FF0E Ipa
    temp_9 = in_attr6.y;
    // 0x000068: 0xD830026FF0E70802 Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000070: 0xD8300241C0E7081E Texs
    temp_13 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyzw;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    temp_16 = temp_13.z;
    temp_17 = temp_13.w;
    // 0x000078: 0xD86201EFF0F70409 Texs
    temp_18 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x000088: 0xD8240360A0E70824 Texs
    temp_19 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_20 = temp_19.x;
    temp_21 = temp_19.y;
    temp_22 = temp_19.z;
    // 0x000090: 0xD822020000570420 Texs
    temp_23 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_24 = temp_23.x;
    temp_25 = temp_23.y;
    temp_26 = temp_23.z;
    // 0x000098: 0xE043FF8A00C7FF01 Ipa
    temp_27 = in_attr2.x;
    // 0x0000A8: 0xE043FF8A40C7FF06 Ipa
    temp_28 = in_attr2.y;
    // 0x0000B0: 0xE043FF8A80C7FF07 Ipa
    temp_29 = in_attr2.z;
    // 0x0000B8: 0xE043FF8800C7FF12 Ipa
    temp_30 = in_attr0.x;
    // 0x0000C8: 0xE043FF8900C7FF0B Ipa
    temp_31 = in_attr1.x;
    // 0x0000D0: 0xE043FF8B00C7FF23 Ipa
    temp_32 = in_attr3.x;
    // 0x0000D8: 0xE043FF8840C7FF13 Ipa
    temp_33 = in_attr0.y;
    // 0x0000E8: 0xE043FF8940C7FF0D Ipa
    temp_34 = in_attr1.y;
    // 0x0000F0: 0xE043FF8B40C7FF22 Ipa
    temp_35 = in_attr3.y;
    // 0x0000F8: 0xE043FF8880C7FF14 Ipa
    temp_36 = in_attr0.z;
    // 0x000108: 0xE043FF8B80C7FF16 Ipa
    temp_37 = in_attr3.z;
    // 0x000110: 0xE043FF8980C7FF0E Ipa
    temp_38 = in_attr1.z;
    // 0x000118: 0x5C68100000170108 Fmul
    temp_39 = temp_27 * temp_27;
    // 0x000128: 0x5C68100001271210 Fmul
    temp_40 = temp_30 * temp_30;
    // 0x000130: 0x5C68100000B70B0F Fmul
    temp_41 = temp_31 * temp_31;
    // 0x000138: 0x5C68100002372315 Fmul
    temp_42 = temp_32 * temp_32;
    // 0x000148: 0x59A0040000670608 Ffma
    temp_43 = fma(temp_28, temp_28, temp_39);
    // 0x000150: 0x59A0080001371311 Ffma
    temp_44 = fma(temp_33, temp_33, temp_40);
    // 0x000158: 0x59A0078000D70D0F Ffma
    temp_45 = fma(temp_34, temp_34, temp_41);
    // 0x000168: 0x59A00A8002272217 Ffma
    temp_46 = fma(temp_35, temp_35, temp_42);
    // 0x000170: 0x59A0040000770708 Ffma
    temp_47 = fma(temp_29, temp_29, temp_43);
    // 0x000178: 0x5080000000570808 Mufu
    temp_48 = inversesqrt(temp_47);
    // 0x000188: 0x59A0088001471415 Ffma
    temp_49 = fma(temp_36, temp_36, temp_44);
    // 0x000190: 0x59A0078000E70E0F Ffma
    temp_50 = fma(temp_38, temp_38, temp_45);
    // 0x000198: 0x5080000000571515 Mufu
    temp_51 = inversesqrt(temp_49);
    // 0x0001A8: 0x59A00B8001671617 Ffma
    temp_52 = fma(temp_37, temp_37, temp_46);
    // 0x0001B0: 0x5080000000570F10 Mufu
    temp_53 = inversesqrt(temp_50);
    // 0x0001B8: 0x3868104110070505 Fmul
    temp_54 = temp_7 * 9.0;
    // 0x0001C8: 0x5080000000571718 Mufu
    temp_55 = inversesqrt(temp_52);
    // 0x0001D0: 0x5C68100000870711 Fmul
    temp_56 = temp_29 * temp_48;
    // 0x0001D8: 0x5CA8148000570A05 F2f
    temp_57 = floor(temp_54);
    // 0x0001E8: 0x5C68100000870101 Fmul
    temp_58 = temp_27 * temp_48;
    // 0x0001F0: 0x5C68100000870606 Fmul
    temp_59 = temp_28 * temp_48;
    // 0x0001F8: 0x3868104180070408 Fmul
    temp_60 = temp_6 * 16.0;
    // 0x000208: 0x5C68100001571212 Fmul
    temp_61 = temp_30 * temp_51;
    // 0x000210: 0x5CA8148000870A08 F2f
    temp_62 = floor(temp_60);
    // 0x000218: 0x5C68100001070B0B Fmul
    temp_63 = temp_31 * temp_53;
    // 0x000228: 0x5C68100001070D0D Fmul
    temp_64 = temp_34 * temp_53;
    // 0x000230: 0x5C68100001571313 Fmul
    temp_65 = temp_33 * temp_51;
    // 0x000238: 0x5C68100001070E10 Fmul
    temp_66 = temp_38 * temp_53;
    // 0x000248: 0x5C68100001571415 Fmul
    temp_67 = temp_36 * temp_51;
    // 0x000250: 0x5C69100001872323 Fmul
    temp_68 = 0.0 - temp_55;
    temp_69 = temp_32 * temp_68;
    // 0x000258: 0x5C69100001872222 Fmul
    temp_70 = 0.0 - temp_55;
    temp_71 = temp_35 * temp_70;
    // 0x000268: 0x5C69100001871616 Fmul
    temp_72 = 0.0 - temp_55;
    temp_73 = temp_37 * temp_72;
    // 0x000270: 0x32A004418007052E Ffma
    temp_74 = fma(temp_57, 16.0, temp_62);
    // 0x000278: 0xF0F0000034370000 Depbar
    // 0x000288: 0x5C68100000370307 Fmul
    temp_75 = temp_12 * temp_12;
    // 0x000290: 0x4BB1839406071D07 Fsetp
    temp_76 = temp_17 < fp_c5.data[24].x;
    // 0x000298: 0x5C68100000370101 Fmul
    temp_77 = temp_58 * temp_12;
    // 0x0002A8: 0x5C68100000370604 Fmul
    temp_78 = temp_59 * temp_12;
    // 0x0002B0: 0x5C68100000371111 Fmul
    temp_79 = temp_56 * temp_12;
    // 0x0002B8: 0x59A0038000270207 Ffma
    temp_80 = fma(temp_11, temp_11, temp_75);
    // 0x0002C8: 0x59A0008000270B01 Ffma
    temp_81 = fma(temp_63, temp_11, temp_77);
    // 0x0002D0: 0x385D103F80070707 Fadd
    temp_82 = 0.0 - temp_80;
    temp_83 = temp_82 + 1.0;
    temp_84 = clamp(temp_83, 0.0, 1.0);
    // 0x0002D8: 0x5080000000870707 Mufu
    temp_85 = sqrt(temp_84);
    // 0x0002E8: 0xE24000000688000F Bra
    if (temp_76)
    {
        // 0x0002F0: 0x5C9807800FF70000 Mov
        // 0x0002F8: 0xE33000000007000F Kil
        discard;
    }
    // 0x000358: 0x4C58301805C72305 Fadd
    temp_86 = 0.0 - fp_c6.data[23].x;
    temp_87 = temp_69 + temp_86;
    // 0x000368: 0x5CB0118002E70A2E F2i
    temp_88 = trunc(temp_74);
    temp_89 = max(temp_88, 0.0);
    temp_90 = uint(temp_89);
    // 0x000370: 0x59A0020000270D04 Ffma
    temp_91 = fma(temp_64, temp_11, temp_78);
    // 0x000378: 0xE2900000B4000000 Ssy
    // 0x000388: 0x59A0008000771201 Ffma
    temp_92 = fma(temp_61, temp_85, temp_81);
    // 0x000390: 0x4C58301805D72206 Fadd
    temp_93 = 0.0 - fp_c6.data[23].y;
    temp_94 = temp_71 + temp_93;
    // 0x000398: 0x59A0088000271010 Ffma
    temp_95 = fma(temp_66, temp_11, temp_79);
    // 0x0003A8: 0x4C58301805E71608 Fadd
    temp_96 = 0.0 - fp_c6.data[23].z;
    temp_97 = temp_73 + temp_96;
    // 0x0003B0: 0x5C68100000570503 Fmul
    temp_98 = temp_87 * temp_87;
    // 0x0003B8: 0x59A0020000771304 Ffma
    temp_99 = fma(temp_65, temp_85, temp_91);
    // 0x0003C8: 0x5C68100000170102 Fmul
    temp_100 = temp_92 * temp_92;
    // 0x0003D0: 0xF0F0000034170000 Depbar
    // 0x0003D8: 0x4C6810180A072424 Fmul
    temp_101 = temp_20 * fp_c6.data[40].x;
    // 0x0003E8: 0x59A0080000771510 Ffma
    temp_102 = fma(temp_67, temp_85, temp_95);
    // 0x0003F0: 0x0103F0000007F02F Mov32i
    // 0x0003F8: 0x59A0018000670603 Ffma
    temp_103 = fma(temp_94, temp_94, temp_98);
    // 0x000408: 0x01040DF760C7F011 Mov32i
    // 0x000410: 0x59A0010000470402 Ffma
    temp_104 = fma(temp_99, temp_99, temp_100);
    // 0x000418: 0x3848000000872E2D Shl
    temp_105 = int(temp_90) << 8;
    // 0x000428: 0x5C9807800FF70018 Mov
    // 0x000430: 0xEF94008200472D2D Ldc
    temp_106 = temp_105 + 0x2004;
    temp_107 = uint(temp_106) >> 2;
    temp_108 = temp_107 >> 2;
    temp_109 = int(temp_107) & 3;
    temp_110 = fp_c8.data[int(temp_108)][temp_109];
    // 0x000438: 0x59A0018000870807 Ffma
    temp_111 = fma(temp_97, temp_97, temp_103);
    // 0x000448: 0x59A0010001071003 Ffma
    temp_112 = fma(temp_102, temp_102, temp_104);
    // 0x000450: 0x5080000000570707 Mufu
    temp_113 = inversesqrt(temp_111);
    // 0x000458: 0x386013BF80072402 Fmnmx
    temp_114 = min(temp_101, 1.0);
    // 0x000468: 0x5080000000570303 Mufu
    temp_115 = inversesqrt(temp_112);
    // 0x000470: 0x4C60178400170202 Fmnmx
    temp_116 = max(temp_114, fp_c1.data[0].y);
    // 0x000478: 0x5C68100000770505 Fmul
    temp_117 = temp_87 * temp_113;
    // 0x000488: 0x51A4010400170231 Ffma
    temp_118 = fma(temp_116, temp_116, fp_c1.data[0].y);
    temp_119 = clamp(temp_118, 0.0, 1.0);
    // 0x000490: 0x5C6810000037010E Fmul
    temp_120 = temp_92 * temp_115;
    // 0x000498: 0x5C68100000370401 Fmul
    temp_121 = temp_99 * temp_115;
    // 0x0004A8: 0x5C68100000770604 Fmul
    temp_122 = temp_94 * temp_113;
    // 0x0004B0: 0x5C68100000770807 Fmul
    temp_123 = temp_97 * temp_113;
    // 0x0004B8: 0x5C6810000057230B Fmul
    temp_124 = temp_69 * temp_117;
    // 0x0004C8: 0x5C68100000371012 Fmul
    temp_125 = temp_102 * temp_115;
    // 0x0004D0: 0x5C68100000570E06 Fmul
    temp_126 = temp_120 * temp_117;
    // 0x0004D8: 0x5C68100002370E03 Fmul
    temp_127 = temp_120 * temp_69;
    // 0x0004E8: 0x4C69101805C70505 Fmul
    temp_128 = 0.0 - fp_c6.data[23].x;
    temp_129 = temp_117 * temp_128;
    // 0x0004F0: 0x32A017BF0007022F Ffma
    temp_130 = fma(temp_116, 0.5, 0.5);
    // 0x0004F8: 0x59A0058000472208 Ffma
    temp_131 = fma(temp_71, temp_122, temp_124);
    // 0x000508: 0x5C68100003173130 Fmul
    temp_132 = temp_119 * temp_119;
    // 0x000510: 0x59A003000047010D Ffma
    temp_133 = fma(temp_121, temp_122, temp_126);
    // 0x000518: 0x59A0018002270103 Ffma
    temp_134 = fma(temp_121, temp_71, temp_127);
    // 0x000528: 0x49A1029805D70404 Ffma
    temp_135 = 0.0 - fp_c6.data[23].y;
    temp_136 = fma(temp_122, temp_135, temp_129);
    // 0x000530: 0x4C69101805C70E06 Fmul
    temp_137 = 0.0 - fp_c6.data[23].x;
    temp_138 = temp_120 * temp_137;
    // 0x000538: 0x59A4040000771608 Ffma
    temp_139 = fma(temp_73, temp_123, temp_131);
    temp_140 = clamp(temp_139, 0.0, 1.0);
    // 0x000548: 0x5C68120002F72F2F Fmul
    temp_141 = temp_130 * 0.5;
    temp_142 = temp_141 * temp_130;
    // 0x000550: 0x59A406800077120D Ffma
    temp_143 = fma(temp_125, temp_123, temp_133);
    temp_144 = clamp(temp_143, 0.0, 1.0);
    // 0x000558: 0x59A4018001671203 Ffma
    temp_145 = fma(temp_125, temp_73, temp_134);
    temp_146 = clamp(temp_145, 0.0, 1.0);
    // 0x000568: 0x49A1031805D7010B Ffma
    temp_147 = 0.0 - fp_c6.data[23].y;
    temp_148 = fma(temp_121, temp_147, temp_138);
    // 0x000570: 0x49A2088400070805 Ffma
    temp_149 = fma(temp_140, fp_c1.data[0].x, -6.98316002);
    // 0x000578: 0x49A5021805E70706 Ffma
    temp_150 = 0.0 - fp_c6.data[23].z;
    temp_151 = fma(temp_123, temp_150, temp_136);
    temp_152 = clamp(temp_151, 0.0, 1.0);
    // 0x000588: 0x59A2068003070D0F Ffma
    temp_153 = 0.0 - temp_144;
    temp_154 = fma(temp_144, temp_132, temp_153);
    // 0x000590: 0x59A1018002F70310 Ffma
    temp_155 = 0.0 - temp_142;
    temp_156 = fma(temp_146, temp_155, temp_146);
    // 0x000598: 0x4C58301407B71E04 Fadd
    temp_157 = 0.0 - fp_c5.data[30].w;
    temp_158 = temp_14 + temp_157;
    // 0x0005A8: 0x5C68100000370128 Fmul
    temp_159 = temp_121 * temp_146;
    // 0x0005B0: 0x5C68100000570805 Fmul
    temp_160 = temp_140 * temp_149;
    // 0x0005B8: 0x49A5059805E71208 Ffma
    temp_161 = 0.0 - fp_c6.data[23].z;
    temp_162 = fma(temp_125, temp_161, temp_148);
    temp_163 = clamp(temp_162, 0.0, 1.0);
    // 0x0005C8: 0x51A0078400270D0F Ffma
    temp_164 = fma(temp_144, temp_154, fp_c1.data[0].z);
    // 0x0005D0: 0x5C58100001072F10 Fadd
    temp_165 = temp_142 + temp_156;
    // 0x0005D8: 0x5080000000470F0F Mufu
    temp_166 = 1.0 / temp_164;
    // 0x0005E8: 0x51A0021407B72504 Ffma
    temp_167 = fma(temp_21, temp_158, fp_c5.data[30].w);
    // 0x0005F0: 0x5080000000471010 Mufu
    temp_168 = 1.0 / temp_165;
    // 0x0005F8: 0x5C90008000570007 Rro
    // 0x000608: 0x49A2088400070605 Ffma
    temp_169 = fma(temp_152, fp_c1.data[0].x, -6.98316002);
    // 0x000610: 0x5080000000270707 Mufu
    temp_170 = exp2(temp_160);
    // 0x000618: 0x59A1040002F7080D Ffma
    temp_171 = 0.0 - temp_142;
    temp_172 = fma(temp_163, temp_171, temp_163);
    // 0x000628: 0x4C58301407B71C0B Fadd
    temp_173 = 0.0 - fp_c5.data[30].w;
    temp_174 = temp_16 + temp_173;
    // 0x000630: 0x5C68100000371217 Fmul
    temp_175 = temp_125 * temp_146;
    // 0x000638: 0x5B6603800FF72D07 Isetp
    temp_176 = floatBitsToUint(temp_110) <= 0u;
    // 0x000648: 0x32A2114000072828 Ffma
    temp_177 = 0.0 - temp_71;
    temp_178 = fma(temp_159, 2.0, temp_177);
    // 0x000650: 0x5C68100000570605 Fmul
    temp_179 = temp_152 * temp_169;
    // 0x000658: 0x5C58100000D72F14 Fadd
    temp_180 = temp_142 + temp_172;
    // 0x000668: 0x4C6810180147080D Fmul
    temp_181 = temp_163 * fp_c6.data[5].x;
    // 0x000670: 0x5080000000471415 Mufu
    temp_182 = 1.0 / temp_180;
    // 0x000678: 0x4C58301407B71F06 Fadd
    temp_183 = 0.0 - fp_c5.data[30].w;
    temp_184 = temp_15 + temp_183;
    // 0x000688: 0x5C68100000F73111 Fmul
    temp_185 = temp_119 * temp_166;
    // 0x000690: 0x3868103F0007102C Fmul
    temp_186 = temp_168 * 0.5;
    // 0x000698: 0x5C90008000570013 Rro
    // 0x0006A8: 0x59A1038000770405 Ffma
    temp_187 = 0.0 - temp_170;
    temp_188 = fma(temp_167, temp_187, temp_170);
    // 0x0006B0: 0x5080000000271313 Mufu
    temp_189 = exp2(temp_179);
    // 0x0006B8: 0x1E23EA2F98370D10 Fmul32i
    temp_190 = temp_181 * 0.318309873;
    // 0x0006C8: 0x4C6810180157080D Fmul
    temp_191 = temp_163 * fp_c6.data[5].y;
    // 0x0006D0: 0x5C68100001171111 Fmul
    temp_192 = temp_185 * temp_185;
    // 0x0006D8: 0x32A20B4000071717 Ffma
    temp_193 = 0.0 - temp_73;
    temp_194 = fma(temp_175, 2.0, temp_193);
    // 0x0006E8: 0x5C5810000057040F Fadd
    temp_195 = temp_167 + temp_188;
    // 0x0006F0: 0x51A0031407B72505 Ffma
    temp_196 = fma(temp_21, temp_184, fp_c5.data[30].w);
    // 0x0006F8: 0x51A0059407B72506 Ffma
    temp_197 = fma(temp_21, temp_174, fp_c5.data[30].w);
    // 0x000708: 0x5C68100001572C14 Fmul
    temp_198 = temp_186 * temp_182;
    // 0x000710: 0x59A1080001070F0B Ffma
    temp_199 = 0.0 - temp_190;
    temp_200 = fma(temp_195, temp_199, temp_190);
    // 0x000718: 0x1E23EA2F98370D10 Fmul32i
    temp_201 = temp_191 * 0.318309873;
    // 0x000728: 0xEF5400000007FF0B Stl
    local_memory[0] = floatBitsToUint(temp_200);
    // 0x000730: 0x59A109800137060D Ffma
    temp_202 = 0.0 - temp_189;
    temp_203 = fma(temp_197, temp_202, temp_189);
    // 0x000738: 0x4C6810180167080F Fmul
    temp_204 = temp_163 * fp_c6.data[5].z;
    // 0x000748: 0x5C68100001471115 Fmul
    temp_205 = temp_192 * temp_198;
    // 0x000750: 0x59A1098001370514 Ffma
    temp_206 = 0.0 - temp_189;
    temp_207 = fma(temp_196, temp_206, temp_189);
    // 0x000758: 0x59A1098001370413 Ffma
    temp_208 = 0.0 - temp_189;
    temp_209 = fma(temp_167, temp_208, temp_189);
    // 0x000768: 0x5C58100000D70611 Fadd
    temp_210 = temp_197 + temp_203;
    // 0x000770: 0x1E23EA2F98370F0F Fmul32i
    temp_211 = temp_204 * 0.318309873;
    // 0x000778: 0x5C6810000157081A Fmul
    temp_212 = temp_163 * temp_205;
    // 0x000788: 0x5C58100001470514 Fadd
    temp_213 = temp_196 + temp_207;
    // 0x000790: 0x59A103800077050B Ffma
    temp_214 = 0.0 - temp_170;
    temp_215 = fma(temp_196, temp_214, temp_170);
    // 0x000798: 0x59A1038000770607 Ffma
    temp_216 = 0.0 - temp_170;
    temp_217 = fma(temp_197, temp_216, temp_170);
    // 0x0007A8: 0x4C68101801671111 Fmul
    temp_218 = temp_210 * fp_c6.data[5].z;
    // 0x0007B0: 0x5C58100001370413 Fadd
    temp_219 = temp_167 + temp_209;
    // 0x0007B8: 0x4C68101801571414 Fmul
    temp_220 = temp_213 * fp_c6.data[5].y;
    // 0x0007C8: 0x5C58100000B7050B Fadd
    temp_221 = temp_196 + temp_215;
    // 0x0007D0: 0x5C5810000077060D Fadd
    temp_222 = temp_197 + temp_217;
    // 0x0007D8: 0x5C68100001A71127 Fmul
    temp_223 = temp_218 * temp_212;
    // 0x0007E8: 0x4C68101801471313 Fmul
    temp_224 = temp_219 * fp_c6.data[5].x;
    // 0x0007F0: 0x5C68100001A71426 Fmul
    temp_225 = temp_220 * temp_212;
    // 0x0007F8: 0x59A1080001070B07 Ffma
    temp_226 = 0.0 - temp_201;
    temp_227 = fma(temp_221, temp_226, temp_201);
    // 0x000808: 0x59A1078000F70D08 Ffma
    temp_228 = 0.0 - temp_211;
    temp_229 = fma(temp_222, temp_228, temp_211);
    // 0x000810: 0x51A5048400270A0D Ffma
    temp_230 = 0.0 - temp_18;
    temp_231 = fma(temp_22, temp_230, fp_c1.data[0].z);
    temp_232 = clamp(temp_231, 0.0, 1.0);
    // 0x000818: 0x5C68100001A71324 Fmul
    temp_233 = temp_224 * temp_212;
    // 0x000828: 0x5C9807800FF70009 Mov
    // 0x000830: 0x5C9807800FF7000A Mov
    // 0x000838: 0x5C9807800FF7000B Mov
    // 0x000848: 0x5C9807800FF7000F Mov
    // 0x000850: 0x49A206980AC70D10 Ffma
    temp_234 = 0.0 - temp_232;
    temp_235 = fma(temp_232, fp_c6.data[43].x, temp_234);
    // 0x000858: 0x49A206980AD70D11 Ffma
    temp_236 = 0.0 - temp_232;
    temp_237 = fma(temp_232, fp_c6.data[43].y, temp_236);
    // 0x000868: 0x49A206980AE70D0D Ffma
    temp_238 = 0.0 - temp_232;
    temp_239 = fma(temp_232, fp_c6.data[43].z, temp_238);
    // 0x000870: 0x5C9807800FF70013 Mov
    // 0x000878: 0x1E23E22F98372424 Fmul32i
    temp_240 = temp_233 * 0.159154937;
    // 0x000888: 0x1E23E22F98372626 Fmul32i
    temp_241 = temp_225 * 0.159154937;
    // 0x000890: 0x3858103F80071010 Fadd
    temp_242 = temp_235 + 1.0;
    // 0x000898: 0x3858103F80071111 Fadd
    temp_243 = temp_237 + 1.0;
    // 0x0008A8: 0x3858103F80070D1B Fadd
    temp_244 = temp_239 + 1.0;
    // 0x0008B0: 0x5C68100000370E0D Fmul
    temp_245 = temp_120 * temp_146;
    // 0x0008B8: 0x1E23E22F98372727 Fmul32i
    temp_246 = temp_223 * 0.159154937;
    // 0x0008C8: 0x59A4080001071E19 Ffma
    temp_247 = fma(temp_14, temp_242, temp_242);
    temp_248 = clamp(temp_247, 0.0, 1.0);
    // 0x0008D0: 0x59A4088001171F1A Ffma
    temp_249 = fma(temp_15, temp_243, temp_243);
    temp_250 = clamp(temp_249, 0.0, 1.0);
    // 0x0008D8: 0x59A40D8001B71C1B Ffma
    temp_251 = fma(temp_16, temp_244, temp_244);
    temp_252 = clamp(temp_251, 0.0, 1.0);
    // 0x0008E8: 0x32A211C000070D2B Ffma
    temp_253 = 0.0 - temp_69;
    temp_254 = fma(temp_245, 2.0, temp_253);
    // 0x0008F0: 0xF0F800000000000F Sync
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
    temp_265 = 0.0;
    temp_266 = 0.0;
    if (!temp_176)
    {
        // 0x0008F8: 0x5C9807800FF7002A Mov
        temp_267 = 0;
        do
        {
            // 0x000908: 0x5C18020002A72E29 Iscadd
            temp_269 = int(temp_90) << 4;
            temp_270 = temp_269 + temp_267;
            // 0x000910: 0xE003FF87CFF7FF32 Ipa
            // 0x000918: 0x1C00000000172A2A Iadd32i
            temp_271 = temp_267 + 1;
            // 0x000928: 0xE003FF87CFF7FF34 Ipa
            // 0x000930: 0x3848000000472929 Shl
            temp_272 = temp_270 << 4;
            // 0x000938: 0xE003FF87CFF7FF33 Ipa
            // 0x000948: 0x5B6C038002D72A0F Isetp
            temp_268 = uint(temp_271) >= floatBitsToUint(temp_110);
            // 0x000950: 0xE290000055800000 Ssy
            // 0x000958: 0xEF94008200072929 Ldc
            temp_273 = temp_272 + 0x2000;
            temp_274 = uint(temp_273) >> 2;
            temp_275 = temp_274 >> 2;
            temp_276 = int(temp_274) & 3;
            temp_277 = fp_c8.data[int(temp_275)][temp_276];
            // 0x000968: 0x5080000000473232 Mufu
            // 0x000970: 0x5080000000473434 Mufu
            // 0x000978: 0x5080000000473333 Mufu
            // 0x000988: 0xE043FF8D0327FF32 Ipa
            temp_278 = in_attr5.x;
            // 0x000990: 0xE043FF8D4347FF34 Ipa
            temp_279 = in_attr5.y;
            // 0x000998: 0xE043FF8D8337FF33 Ipa
            temp_280 = in_attr5.z;
            // 0x0009A8: 0x3848000000672929 Shl
            temp_281 = floatBitsToInt(temp_277) << 6;
            // 0x0009B0: 0xEF9500800107290C Ldc
            temp_282 = temp_281 + 16;
            temp_283 = uint(temp_282) >> 2;
            temp_284 = temp_283 >> 2;
            temp_285 = int(temp_283) & 3;
            temp_286 = fp_c8.data[int(temp_284)][temp_285];
            temp_287 = int(temp_283) + 1;
            temp_288 = uint(temp_287) >> 2;
            temp_289 = temp_287 & 3;
            temp_290 = fp_c8.data[int(temp_288)][temp_289];
            // 0x0009B8: 0xEF95008001872910 Ldc
            temp_291 = temp_281 + 24;
            temp_292 = uint(temp_291) >> 2;
            temp_293 = temp_292 >> 2;
            temp_294 = int(temp_292) & 3;
            temp_295 = fp_c8.data[int(temp_293)][temp_294];
            temp_296 = int(temp_292) + 1;
            temp_297 = uint(temp_296) >> 2;
            temp_298 = temp_296 & 3;
            temp_299 = fp_c8.data[int(temp_297)][temp_298];
            // 0x0009C8: 0xEF95008002072914 Ldc
            temp_300 = temp_281 + 32;
            temp_301 = uint(temp_300) >> 2;
            temp_302 = temp_301 >> 2;
            temp_303 = int(temp_301) & 3;
            temp_304 = fp_c8.data[int(temp_302)][temp_303];
            temp_305 = int(temp_301) + 1;
            temp_306 = uint(temp_305) >> 2;
            temp_307 = temp_305 & 3;
            temp_308 = fp_c8.data[int(temp_306)][temp_307];
            // 0x0009D0: 0x5C58300003270C32 Fadd
            temp_309 = 0.0 - temp_278;
            temp_310 = temp_286 + temp_309;
            // 0x0009D8: 0x5C58300003470D36 Fadd
            temp_311 = 0.0 - temp_279;
            temp_312 = temp_290 + temp_311;
            // 0x0009E8: 0x5C58300003371033 Fadd
            temp_313 = 0.0 - temp_280;
            temp_314 = temp_295 + temp_313;
            // 0x0009F0: 0x5C68100003273234 Fmul
            temp_315 = temp_310 * temp_310;
            // 0x0009F8: 0x59A1198003371111 Ffma
            temp_316 = 0.0 - temp_314;
            temp_317 = fma(temp_299, temp_316, temp_314);
            // 0x000A08: 0x59A01A0003673634 Ffma
            temp_318 = fma(temp_312, temp_312, temp_315);
            // 0x000A10: 0x59A01A0001171135 Ffma
            temp_319 = fma(temp_317, temp_317, temp_318);
            // 0x000A18: 0x508000000057350C Mufu
            temp_320 = inversesqrt(temp_319);
            // 0x000A28: 0x5080000000873535 Mufu
            temp_321 = sqrt(temp_319);
            // 0x000A30: 0x5C68100000C7320D Fmul
            temp_322 = temp_310 * temp_320;
            // 0x000A38: 0x5C68100000C73637 Fmul
            temp_323 = temp_312 * temp_320;
            // 0x000A48: 0x5C69100001470D0D Fmul
            temp_324 = 0.0 - temp_304;
            temp_325 = temp_322 * temp_324;
            // 0x000A50: 0x5C68100000C71114 Fmul
            temp_326 = temp_317 * temp_320;
            // 0x000A58: 0xEF95008003872910 Ldc
            temp_327 = temp_281 + 56;
            temp_328 = uint(temp_327) >> 2;
            temp_329 = temp_328 >> 2;
            temp_330 = int(temp_328) & 3;
            temp_331 = fp_c8.data[int(temp_329)][temp_330];
            temp_332 = int(temp_328) + 1;
            temp_333 = uint(temp_332) >> 2;
            temp_334 = temp_332 & 3;
            temp_335 = fp_c8.data[int(temp_333)][temp_334];
            // 0x000A68: 0x59A1068001573737 Ffma
            temp_336 = 0.0 - temp_308;
            temp_337 = fma(temp_323, temp_336, temp_325);
            // 0x000A70: 0xEF94008002872915 Ldc
            temp_338 = temp_281 + 40;
            temp_339 = uint(temp_338) >> 2;
            temp_340 = temp_339 >> 2;
            temp_341 = int(temp_339) & 3;
            temp_342 = fp_c8.data[int(temp_340)][temp_341];
            // 0x000A78: 0xEF9500800307290C Ldc
            temp_343 = temp_281 + 48;
            temp_344 = uint(temp_343) >> 2;
            temp_345 = temp_344 >> 2;
            temp_346 = int(temp_344) & 3;
            temp_347 = fp_c8.data[int(temp_345)][temp_346];
            temp_348 = int(temp_344) + 1;
            temp_349 = uint(temp_348) >> 2;
            temp_350 = temp_348 & 3;
            temp_351 = fp_c8.data[int(temp_349)][temp_350];
            // 0x000A88: 0x59A11B8001571414 Ffma
            temp_352 = 0.0 - temp_342;
            temp_353 = fma(temp_326, temp_352, temp_337);
            // 0x000A90: 0x59A4068003570C35 Ffma
            temp_354 = fma(temp_347, temp_321, temp_351);
            temp_355 = clamp(temp_354, 0.0, 1.0);
            // 0x000A98: 0x010404000007F015 Mov32i
            // 0x000AA8: 0x59A4088001071410 Ffma
            temp_356 = fma(temp_353, temp_331, temp_335);
            temp_357 = clamp(temp_356, 0.0, 1.0);
            // 0x000AB0: 0x5C68100003573511 Fmul
            temp_358 = temp_355 * temp_355;
            // 0x000AB8: 0x33A00AC000073514 Ffma
            temp_359 = fma(temp_355, -2.0, 3.0);
            // 0x000AC8: 0x33A00AC000071015 Ffma
            temp_360 = fma(temp_357, -2.0, 3.0);
            // 0x000AD0: 0x5C68100001071010 Fmul
            temp_361 = temp_357 * temp_357;
            // 0x000AD8: 0x5C68100001171411 Fmul
            temp_362 = temp_359 * temp_358;
            // 0x000AE8: 0x39585042F0073314 Fadd
            temp_363 = abs(temp_314);
            temp_364 = temp_363 + -120.0;
            // 0x000AF0: 0x5C68100001571010 Fmul
            temp_365 = temp_361 * temp_360;
            // 0x000AF8: 0x5C68100001171010 Fmul
            temp_366 = temp_365 * temp_362;
            // 0x000B08: 0x1EABD4CCCCD71411 Fmul32i
            temp_367 = temp_364 * -0.0500000007;
            temp_368 = clamp(temp_367, 0.0, 1.0);
            // 0x000B10: 0x5C68100001071110 Fmul
            temp_369 = temp_368 * temp_366;
            // 0x000B18: 0x36247F9000171111 Xmad
            temp_370 = floatBitsToUint(temp_368) >> 16;
            temp_371 = int(temp_370) << 16;
            // 0x000B28: 0x5BB383800FF71007 Fsetp
            temp_372 = temp_369 <= 0.0;
            // 0x000B30: 0x7A05083C0F00FF11 Hadd2
            temp_267 = temp_271;
            temp_373 = uint(temp_371);
            temp_374 = temp_255;
            temp_375 = temp_256;
            temp_376 = temp_257;
            temp_377 = temp_258;
            temp_378 = temp_259;
            temp_379 = temp_260;
            if (temp_372)
            {
                temp_380 = unpackHalf2x16(uint(temp_371)).y;
                temp_381 = packHalf2x16(vec2(1.0, temp_380));
                temp_373 = temp_381;
            }
            // 0x000B38: 0x5D2103902FF71107 Hsetp2
            temp_382 = unpackHalf2x16(temp_373).x;
            temp_383 = temp_382 == 0.0;
            // 0x000B48: 0xF0F800000008000F Sync
            if (temp_383)
            {
                // 0x000B50: 0x5080000000470C0C Mufu
                temp_384 = 1.0 / temp_347;
                // 0x000B58: 0xEF94008000872937 Ldc
                temp_385 = temp_281 + 8;
                temp_386 = uint(temp_385) >> 2;
                temp_387 = temp_386 >> 2;
                temp_388 = int(temp_386) & 3;
                temp_389 = fp_c8.data[int(temp_387)][temp_388];
                // 0x000B68: 0x5C69100000C70D0D Fmul
                temp_390 = 0.0 - temp_384;
                temp_391 = temp_351 * temp_390;
                // 0x000B70: 0x5C60138000D73333 Fmnmx
                temp_392 = min(temp_314, temp_391);
                // 0x000B78: 0x5C61178003370D33 Fmnmx
                temp_393 = 0.0 - temp_391;
                temp_394 = max(temp_393, temp_392);
                // 0x000B88: 0x59A01A0003373314 Ffma
                temp_395 = fma(temp_394, temp_394, temp_318);
                // 0x000B90: 0xEF94008002C72934 Ldc
                temp_396 = temp_281 + 44;
                temp_397 = uint(temp_396) >> 2;
                temp_398 = temp_397 >> 2;
                temp_399 = int(temp_397) & 3;
                temp_400 = fp_c8.data[int(temp_398)][temp_399];
                // 0x000B98: 0x508000000057140C Mufu
                temp_401 = inversesqrt(temp_395);
                // 0x000BA8: 0x5080000000871414 Mufu
                temp_402 = sqrt(temp_395);
                // 0x000BB0: 0x5C68100000C73211 Fmul
                temp_403 = temp_310 * temp_401;
                // 0x000BB8: 0x5C68100000C73636 Fmul
                temp_404 = temp_312 * temp_401;
                // 0x000BC8: 0x5C68100000C73333 Fmul
                temp_405 = temp_394 * temp_401;
                // 0x000BD0: 0x5C68100003771037 Fmul
                temp_406 = temp_369 * temp_389;
                // 0x000BD8: 0x5C58100001172315 Fadd
                temp_407 = temp_69 + temp_403;
                // 0x000BE8: 0x5C58100003672235 Fadd
                temp_408 = temp_71 + temp_404;
                // 0x000BF0: 0x5C58100003371632 Fadd
                temp_409 = temp_73 + temp_405;
                // 0x000BF8: 0x5C6810000157150C Fmul
                temp_410 = temp_407 * temp_407;
                // 0x000C08: 0x59A006000357350C Ffma
                temp_411 = fma(temp_408, temp_408, temp_410);
                // 0x000C10: 0x59A006000327320C Ffma
                temp_412 = fma(temp_409, temp_409, temp_411);
                // 0x000C18: 0x5080000000570C0C Mufu
                temp_413 = inversesqrt(temp_412);
                // 0x000C28: 0x5080000000473434 Mufu
                temp_414 = 1.0 / temp_400;
                // 0x000C30: 0x5C68100000C71515 Fmul
                temp_415 = temp_407 * temp_413;
                // 0x000C38: 0x5C68100000C73535 Fmul
                temp_416 = temp_408 * temp_413;
                // 0x000C48: 0x5C68100000C73232 Fmul
                temp_417 = temp_409 * temp_413;
                // 0x000C50: 0xEF9500800007290C Ldc
                temp_418 = uint(temp_281) >> 2;
                temp_419 = temp_418 >> 2;
                temp_420 = int(temp_418) & 3;
                temp_421 = fp_c8.data[int(temp_419)][temp_420];
                temp_422 = int(temp_418) + 1;
                temp_423 = uint(temp_422) >> 2;
                temp_424 = temp_422 & 3;
                temp_425 = fp_c8.data[int(temp_423)][temp_424];
                // 0x000C58: 0x51A00A0400373414 Ffma
                temp_426 = fma(temp_414, temp_402, fp_c1.data[0].w);
                // 0x000C68: 0x5080000000471414 Mufu
                temp_427 = 1.0 / temp_426;
                // 0x000C70: 0x5C68100001170E29 Fmul
                temp_428 = temp_120 * temp_403;
                // 0x000C78: 0x5C68100001571111 Fmul
                temp_429 = temp_403 * temp_415;
                // 0x000C88: 0x5C68100001570E15 Fmul
                temp_430 = temp_120 * temp_415;
                // 0x000C90: 0x59A0148003670129 Ffma
                temp_431 = fma(temp_121, temp_404, temp_428);
                // 0x000C98: 0x59A0088003573611 Ffma
                temp_432 = fma(temp_404, temp_416, temp_429);
                // 0x000CA8: 0x59A00A8003570115 Ffma
                temp_433 = fma(temp_121, temp_416, temp_430);
                // 0x000CB0: 0x59A0148003371229 Ffma
                temp_434 = fma(temp_125, temp_405, temp_431);
                // 0x000CB8: 0x59A4088003273311 Ffma
                temp_435 = fma(temp_405, temp_417, temp_432);
                temp_436 = clamp(temp_435, 0.0, 1.0);
                // 0x000CC8: 0x59A40A8003271215 Ffma
                temp_437 = fma(temp_125, temp_417, temp_433);
                temp_438 = clamp(temp_437, 0.0, 1.0);
                // 0x000CD0: 0x01040DF760C7F032 Mov32i
                // 0x000CD8: 0x1E23FB3333371414 Fmul32i
                temp_439 = temp_427 * 1.39999998;
                // 0x000CE8: 0x5C5C30000FF72934 Fadd
                temp_440 = temp_434 + -0.0;
                temp_441 = clamp(temp_440, 0.0, 1.0);
                // 0x000CF0: 0x59A20A8001573033 Ffma
                temp_442 = 0.0 - temp_438;
                temp_443 = fma(temp_132, temp_438, temp_442);
                // 0x000CF8: 0x49A2190400071132 Ffma
                temp_444 = fma(temp_436, fp_c1.data[0].x, -6.98316002);
                // 0x000D08: 0x5C68100001471414 Fmul
                temp_445 = temp_439 * temp_439;
                // 0x000D10: 0x51A0198400271533 Ffma
                temp_446 = fma(temp_438, temp_443, fp_c1.data[0].z);
                // 0x000D18: 0x5C68100003271132 Fmul
                temp_447 = temp_436 * temp_444;
                // 0x000D28: 0x5080000000473333 Mufu
                temp_448 = 1.0 / temp_446;
                // 0x000D30: 0x59A11A0003472F11 Ffma
                temp_449 = 0.0 - temp_441;
                temp_450 = fma(temp_142, temp_449, temp_441);
                // 0x000D38: 0x59A10A0001472914 Ffma
                temp_451 = 0.0 - temp_445;
                temp_452 = fma(temp_434, temp_451, temp_445);
                // 0x000D48: 0x5C90008003270015 Rro
                // 0x000D50: 0x5C58100001172F11 Fadd
                temp_453 = temp_142 + temp_450;
                // 0x000D58: 0x5080000000271515 Mufu
                temp_454 = exp2(temp_447);
                // 0x000D68: 0x5C5C100001472914 Fadd
                temp_455 = temp_434 + temp_452;
                temp_456 = clamp(temp_455, 0.0, 1.0);
                // 0x000D70: 0x5080000000471111 Mufu
                temp_457 = 1.0 / temp_453;
                // 0x000D78: 0x5C68100000C7100C Fmul
                temp_458 = temp_369 * temp_421;
                // 0x000D88: 0x5C68100003373133 Fmul
                temp_459 = temp_119 * temp_448;
                // 0x000D90: 0x5C68100000D7100D Fmul
                temp_460 = temp_369 * temp_425;
                // 0x000D98: 0x5C68100003373333 Fmul
                temp_461 = temp_459 * temp_459;
                // 0x000DA8: 0x59A10A8001570529 Ffma
                temp_462 = 0.0 - temp_454;
                temp_463 = fma(temp_196, temp_462, temp_454);
                // 0x000DB0: 0x59A10A8001570410 Ffma
                temp_464 = 0.0 - temp_454;
                temp_465 = fma(temp_167, temp_464, temp_454);
                // 0x000DB8: 0x5C68100001172C11 Fmul
                temp_466 = temp_186 * temp_457;
                // 0x000DC8: 0x59A10A8001570615 Ffma
                temp_467 = 0.0 - temp_454;
                temp_468 = fma(temp_197, temp_467, temp_454);
                // 0x000DD0: 0x5C58100002970532 Fadd
                temp_469 = temp_196 + temp_463;
                // 0x000DD8: 0x5C58100001070429 Fadd
                temp_470 = temp_167 + temp_465;
                // 0x000DE8: 0x5C68100001173311 Fmul
                temp_471 = temp_461 * temp_466;
                // 0x000DF0: 0x5C58100001570615 Fadd
                temp_472 = temp_197 + temp_468;
                // 0x000DF8: 0x5C68100000D73232 Fmul
                temp_473 = temp_469 * temp_460;
                // 0x000E08: 0x5C68100000C72910 Fmul
                temp_474 = temp_470 * temp_458;
                // 0x000E10: 0x5C68100001173411 Fmul
                temp_475 = temp_441 * temp_471;
                // 0x000E18: 0x5C68100003771533 Fmul
                temp_476 = temp_472 * temp_406;
                // 0x000E28: 0x5C68100001470C0C Fmul
                temp_477 = temp_458 * temp_456;
                // 0x000E30: 0x5C68100001470D0D Fmul
                temp_478 = temp_460 * temp_456;
                // 0x000E38: 0x5C68100001473714 Fmul
                temp_479 = temp_406 * temp_456;
                // 0x000E48: 0x5C68100001173232 Fmul
                temp_480 = temp_473 * temp_475;
                // 0x000E50: 0x5C68100001171010 Fmul
                temp_481 = temp_474 * temp_475;
                // 0x000E58: 0x5C68100001173333 Fmul
                temp_482 = temp_476 * temp_475;
                // 0x000E68: 0x49A0048400570C09 Ffma
                temp_483 = fma(temp_477, fp_c1.data[1].y, temp_255);
                // 0x000E70: 0x49A0050400570D0A Ffma
                temp_484 = fma(temp_478, fp_c1.data[1].y, temp_256);
                // 0x000E78: 0x49A005840057140B Ffma
                temp_485 = fma(temp_479, fp_c1.data[1].y, temp_257);
                // 0x000E88: 0x49A0098400473213 Ffma
                temp_486 = fma(temp_480, fp_c1.data[1].x, temp_258);
                // 0x000E90: 0x49A007840047100F Ffma
                temp_487 = fma(temp_481, fp_c1.data[1].x, temp_259);
                // 0x000E98: 0x49A00C0400473318 Ffma
                temp_488 = fma(temp_482, fp_c1.data[1].x, temp_260);
                // 0x000EA8: 0xF0F800000007000F Sync
                temp_374 = temp_483;
                temp_375 = temp_484;
                temp_376 = temp_485;
                temp_377 = temp_486;
                temp_378 = temp_487;
                temp_379 = temp_488;
            }
            // 0x000EB0: 0xE2400FFFA489000F Bra
            temp_255 = temp_374;
            temp_256 = temp_375;
            temp_257 = temp_376;
            temp_258 = temp_377;
            temp_259 = temp_378;
            temp_260 = temp_379;
            temp_261 = temp_375;
            temp_262 = temp_376;
            temp_263 = temp_379;
            temp_264 = temp_378;
            temp_265 = temp_377;
            temp_266 = temp_374;
        }
        while (!temp_268);
        // 0x000EB8: 0xF0F800000007000F Sync
    }
    // 0x000EC8: 0x5C62578002872B0D Fmnmx
    temp_489 = abs(temp_254);
    temp_490 = abs(temp_178);
    temp_491 = max(temp_489, temp_490);
    // 0x000ED0: 0xE003FF87CFF7FF2C Ipa
    // 0x000ED8: 0x5C62578000170E0C Fmnmx
    temp_492 = abs(temp_120);
    temp_493 = abs(temp_121);
    temp_494 = max(temp_492, temp_493);
    // 0x000EE8: 0xEF4410000007FF32 Ldl
    temp_495 = uintBitsToFloat(local_memory[0]);
    // 0x000EF0: 0x38681040E007022D Fmul
    temp_496 = temp_116 * 7.0;
    // 0x000EF8: 0x010000000017F014 Mov32i
    // 0x000F08: 0x3868104080070223 Fmul
    temp_497 = temp_116 * 4.0;
    // 0x000F10: 0x5C60578000D7170D Fmnmx
    temp_498 = abs(temp_194);
    temp_499 = max(temp_498, temp_491);
    // 0x000F18: 0x4C98079C0207002F Mov
    // 0x000F28: 0x5080000000470D0D Mufu
    temp_500 = 1.0 / temp_499;
    // 0x000F30: 0x5C60578000C7120C Fmnmx
    temp_501 = abs(temp_125);
    temp_502 = max(temp_501, temp_494);
    // 0x000F38: 0x5080000000470C0C Mufu
    temp_503 = 1.0 / temp_502;
    // 0x000F48: 0x5C68100000D72816 Fmul
    temp_504 = temp_178 * temp_500;
    // 0x000F50: 0x5C68100000D72B15 Fmul
    temp_505 = temp_254 * temp_500;
    // 0x000F58: 0x5080000000472C2C Mufu
    // 0x000F68: 0x5C69100000C71212 Fmul
    temp_506 = 0.0 - temp_503;
    temp_507 = temp_125 * temp_506;
    // 0x000F70: 0x5C68100000C70E10 Fmul
    temp_508 = temp_120 * temp_503;
    // 0x000F78: 0x5C68100000C70111 Fmul
    temp_509 = temp_121 * temp_503;
    // 0x000F88: 0x5C69100000D71717 Fmul
    temp_510 = 0.0 - temp_500;
    temp_511 = temp_194 * temp_510;
    // 0x000F90: 0xC0BA0163EFF7100C Tex
    temp_512 = textureLod(fp_t_tcb_16, vec3(temp_508, temp_509, temp_507), 0.0).xyz;
    temp_513 = temp_512.x;
    temp_514 = temp_512.y;
    temp_515 = temp_512.z;
    // 0x000F98: 0x5C98078001270022 Mov
    // 0x000FA8: 0xC1BA0143F2D71414 Tex
    temp_516 = textureLod(fp_t_tcb_14, vec4(temp_505, temp_504, temp_511, float(1)), temp_496).xyz;
    temp_517 = temp_516.x;
    temp_518 = temp_516.y;
    temp_519 = temp_516.z;
    // 0x000FB0: 0x49A003980A170A07 Ffma
    temp_520 = fma(temp_261, fp_c6.data[40].y, temp_227);
    // 0x000FB8: 0xE043FF9102C7FF28 Ipa
    temp_521 = in_attr9.x;
    // 0x000FC8: 0x010410676C97F00A Mov32i
    // 0x000FD0: 0xE043FF9142C7FF29 Ipa
    temp_522 = in_attr9.y;
    // 0x000FD8: 0x3859103F8007032E Fadd
    temp_523 = 0.0 - temp_146;
    temp_524 = temp_523 + 1.0;
    // 0x000FE8: 0xE043FF9182C7FF2A Ipa
    temp_525 = in_attr9.z;
    // 0x000FF0: 0xD9A2018232271010 Texs
    temp_526 = textureLod(fp_t_tcb_18, vec3(temp_508, temp_509, temp_507), temp_497).xyz;
    temp_527 = temp_526.x;
    temp_528 = temp_526.y;
    temp_529 = temp_526.z;
    // 0x000FF8: 0xDEBA0000C2F72828 TexB
    temp_530 = texture(fp_t_cb7_20, vec3(temp_521, temp_522, temp_525)).x;
    // 0x001008: 0x3859103F80070202 Fadd
    temp_531 = 0.0 - temp_116;
    temp_532 = temp_531 + 1.0;
    // 0x001010: 0x49A0050400A7030A Ffma
    temp_533 = fma(temp_146, fp_c1.data[2].z, 8.40400028);
    // 0x001018: 0x49A004180A170B08 Ffma
    temp_534 = fma(temp_262, fp_c6.data[40].y, temp_229);
    // 0x001028: 0x4C68101809072E0B Fmul
    temp_535 = temp_524 * fp_c6.data[36].x;
    // 0x001030: 0x49A013980A171827 Ffma
    temp_536 = fma(temp_263, fp_c6.data[40].y, temp_246);
    // 0x001038: 0x5080400000370B0B Mufu
    temp_537 = abs(temp_535);
    temp_538 = log2(temp_537);
    // 0x001048: 0x5C68100000270202 Fmul
    temp_539 = temp_532 * temp_532;
    // 0x001050: 0x51A0050400B70318 Ffma
    temp_540 = fma(temp_146, temp_533, fp_c1.data[2].w);
    // 0x001058: 0xE04BFF9042C7FF0A Ipa
    temp_541 = in_attr8.y;
    temp_542 = clamp(temp_541, 0.0, 1.0);
    // 0x001068: 0x49A012180A170F24 Ffma
    temp_543 = fma(temp_264, fp_c6.data[40].y, temp_240);
    // 0x001070: 0x0103E2CD9E87F00F Mov32i
    // 0x001078: 0x49A013180A171326 Ffma
    temp_544 = fma(temp_265, fp_c6.data[40].y, temp_241);
    // 0x001088: 0x1E23E468DB97032B Fmul32i
    temp_545 = temp_146 * 0.193900004;
    // 0x001090: 0x5C68100000270202 Fmul
    temp_546 = temp_539 * temp_539;
    // 0x001098: 0x0103F0000007F02A Mov32i
    // 0x0010A8: 0x0104066978D7F029 Mov32i
    // 0x0010B0: 0x49A2078400D70213 Ffma
    temp_547 = fma(temp_546, fp_c1.data[3].y, -0.168799996);
    // 0x0010B8: 0x4C68101809170B0F Fmul
    temp_548 = temp_538 * fp_c6.data[36].y;
    // 0x0010C8: 0x49A015840067022B Ffma
    temp_549 = fma(temp_546, fp_c1.data[1].z, temp_545);
    // 0x0010D0: 0x51A00C0400C70317 Ffma
    temp_550 = fma(temp_146, temp_540, fp_c1.data[3].x);
    // 0x0010D8: 0x32A0153F0007010B Ffma
    temp_551 = fma(temp_121, 0.5, 0.5);
    // 0x0010E8: 0x4C9807980B47002A Mov
    // 0x0010F0: 0x5C68100001370222 Fmul
    temp_552 = temp_546 * temp_547;
    // 0x0010F8: 0x5C90008000F70001 Rro
    // 0x001108: 0x4C9807980997000F Mov
    // 0x001110: 0x5084000000270101 Mufu
    temp_553 = exp2(temp_548);
    temp_554 = clamp(temp_553, 0.0, 1.0);
    // 0x001118: 0x088BF05D63972B12 Fadd32i
    temp_555 = temp_549 + -0.522800028;
    // 0x001128: 0x49A2148400770213 Ffma
    temp_556 = fma(temp_546, fp_c1.data[1].w, -3.60299993);
    // 0x001130: 0x010404000007F02B Mov32i
    // 0x001138: 0x386C104248070529 Fmul
    temp_557 = temp_196 * 50.0;
    temp_558 = clamp(temp_557, 0.0, 1.0);
    // 0x001148: 0xF0F0000034470000 Depbar
    // 0x001150: 0x51A215180B472020 Ffma
    temp_559 = 0.0 - fp_c6.data[45].x;
    temp_560 = fma(temp_24, fp_c6.data[45].x, temp_559);
    // 0x001158: 0x4C58101408170F0F Fadd
    temp_561 = fp_c6.data[38].y + fp_c5.data[32].y;
    // 0x001168: 0x5C68100001270318 Fmul
    temp_562 = temp_146 * temp_555;
    // 0x001170: 0x51A0098400870213 Ffma
    temp_563 = fma(temp_546, temp_556, fp_c1.data[2].x);
    // 0x001178: 0x4C98079800870012 Mov
    // 0x001188: 0x5C60138002271703 Fmnmx
    temp_564 = min(temp_550, temp_552);
    // 0x001190: 0x4C98079800970017 Mov
    // 0x001198: 0x33A015C000070A2B Ffma
    temp_565 = fma(temp_542, -2.0, 3.0);
    // 0x0011A8: 0x5C68100000A70A0A Fmul
    temp_566 = temp_542 * temp_542;
    // 0x0011B0: 0x5C68100000F7010F Fmul
    temp_567 = temp_554 * temp_561;
    // 0x0011B8: 0x59A00C0001370213 Ffma
    temp_568 = fma(temp_546, temp_563, temp_562);
    // 0x0011C8: 0x4C59101800471202 Fadd
    temp_569 = 0.0 - fp_c6.data[2].x;
    temp_570 = temp_569 + fp_c6.data[1].x;
    // 0x0011D0: 0x4C59101800571712 Fadd
    temp_571 = 0.0 - fp_c6.data[2].y;
    temp_572 = temp_571 + fp_c6.data[1].y;
    // 0x0011D8: 0x5C5C30000FF70322 Fadd
    temp_573 = temp_564 + -0.0;
    temp_574 = clamp(temp_573, 0.0, 1.0);
    // 0x0011E8: 0x4C98079800A70018 Mov
    // 0x0011F0: 0x5C68100002B70A03 Fmul
    temp_575 = temp_566 * temp_565;
    // 0x0011F8: 0x4C68101808C70F0A Fmul
    temp_576 = temp_567 * fp_c6.data[35].x;
    // 0x001208: 0x51A0059800870201 Ffma
    temp_577 = fma(temp_570, temp_551, fp_c6.data[2].x);
    // 0x001210: 0x51A0059800971202 Ffma
    temp_578 = fma(temp_572, temp_551, fp_c6.data[2].y);
    // 0x001218: 0x4C5C100400971317 Fadd
    temp_579 = temp_568 + fp_c1.data[2].y;
    temp_580 = clamp(temp_579, 0.0, 1.0);
    // 0x001228: 0x4C59101800671818 Fadd
    temp_581 = 0.0 - fp_c6.data[2].z;
    temp_582 = temp_581 + fp_c6.data[1].z;
    // 0x001230: 0x4C68101808D70F13 Fmul
    temp_583 = temp_567 * fp_c6.data[35].y;
    // 0x001238: 0x4C68101808E70F12 Fmul
    temp_584 = temp_567 * fp_c6.data[35].z;
    // 0x001248: 0x49A0121408270A24 Ffma
    temp_585 = fma(temp_576, fp_c5.data[32].z, temp_543);
    // 0x001250: 0x49A1051408270A0F Ffma
    temp_586 = 0.0 - fp_c5.data[32].z;
    temp_587 = fma(temp_576, temp_586, temp_576);
    // 0x001258: 0xE043FF9002C7FF0A Ipa
    temp_588 = in_attr8.x;
    // 0x001268: 0x5C6810000297222B Fmul
    temp_589 = temp_574 * temp_558;
    // 0x001270: 0xE043FF8C82C7FF2C Ipa
    temp_590 = in_attr4.z;
    // 0x001278: 0x51A0059800A7180B Ffma
    temp_591 = fma(temp_582, temp_551, fp_c6.data[2].z);
    // 0x001288: 0x5C58300002271722 Fadd
    temp_592 = 0.0 - temp_574;
    temp_593 = temp_580 + temp_592;
    // 0x001290: 0x49A1099408271318 Ffma
    temp_594 = 0.0 - fp_c5.data[32].z;
    temp_595 = fma(temp_583, temp_594, temp_583);
    // 0x001298: 0x49A0139408271227 Ffma
    temp_596 = fma(temp_584, fp_c5.data[32].z, temp_536);
    // 0x0012A8: 0x49A1091408271212 Ffma
    temp_597 = 0.0 - fp_c5.data[32].z;
    temp_598 = fma(temp_584, temp_597, temp_584);
    // 0x0012B0: 0x49A0131408271326 Ffma
    temp_599 = fma(temp_583, fp_c5.data[32].z, temp_544);
    // 0x0012B8: 0x51A215180B472121 Ffma
    temp_600 = 0.0 - fp_c6.data[45].x;
    temp_601 = fma(temp_25, fp_c6.data[45].x, temp_600);
    // 0x0012C8: 0x59A0158002270413 Ffma
    temp_602 = fma(temp_167, temp_593, temp_589);
    // 0x0012D0: 0x5C58100001870707 Fadd
    temp_603 = temp_520 + temp_595;
    // 0x0012D8: 0x59A0158002270505 Ffma
    temp_604 = fma(temp_196, temp_593, temp_589);
    // 0x0012E8: 0x5C58100001270808 Fadd
    temp_605 = temp_534 + temp_598;
    // 0x0012F0: 0x59A0158002270606 Ffma
    temp_606 = fma(temp_197, temp_593, temp_589);
    // 0x0012F8: 0x51A215180B470000 Ffma
    temp_607 = 0.0 - fp_c6.data[45].x;
    temp_608 = fma(temp_26, fp_c6.data[45].x, temp_607);
    // 0x001308: 0x4C68101803770303 Fmul
    temp_609 = temp_575 * fp_c6.data[13].w;
    // 0x001310: 0xF0F0000034370000 Depbar
    // 0x001318: 0x49A019180A170909 Ffma
    temp_610 = fma(temp_266, fp_c6.data[40].y, temp_495);
    // 0x001328: 0x5C58100000F70909 Fadd
    temp_611 = temp_610 + temp_587;
    // 0x001330: 0xF0F0000034270000 Depbar
    // 0x001338: 0x49A006040057010C Ffma
    temp_612 = fma(temp_577, fp_c1.data[1].y, temp_513);
    // 0x001348: 0x49A0068400570202 Ffma
    temp_613 = fma(temp_578, fp_c1.data[1].y, temp_514);
    // 0x001350: 0x49A0070400570B0B Ffma
    temp_614 = fma(temp_591, fp_c1.data[1].y, temp_515);
    // 0x001358: 0x5C58100000C7090C Fadd
    temp_615 = temp_611 + temp_612;
    // 0x001368: 0x5C58100000270702 Fadd
    temp_616 = temp_603 + temp_613;
    // 0x001370: 0x5C58100000B70808 Fadd
    temp_617 = temp_605 + temp_614;
    // 0x001378: 0x4C98079802870007 Mov
    // 0x001388: 0x4C9807980297000B Mov
    // 0x001390: 0xF0F0000034170000 Depbar
    // 0x001398: 0x49A0081808571401 Ffma
    temp_618 = fma(temp_517, fp_c6.data[33].y, temp_527);
    // 0x0013A8: 0x49A0089808571504 Ffma
    temp_619 = fma(temp_518, fp_c6.data[33].y, temp_528);
    // 0x0013B0: 0x59A1060000C7250C Ffma
    temp_620 = 0.0 - temp_615;
    temp_621 = fma(temp_21, temp_620, temp_615);
    // 0x0013B8: 0x59A1010000272502 Ffma
    temp_622 = 0.0 - temp_616;
    temp_623 = fma(temp_21, temp_622, temp_616);
    // 0x0013C8: 0x59A1040000872525 Ffma
    temp_624 = 0.0 - temp_617;
    temp_625 = fma(temp_21, temp_624, temp_617);
    // 0x0013D0: 0x51A0039802872020 Ffma
    temp_626 = fma(temp_560, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0013D8: 0x59A0120000171313 Ffma
    temp_627 = fma(temp_602, temp_618, temp_585);
    // 0x0013E8: 0x49A0119808571601 Ffma
    temp_628 = fma(temp_519, fp_c6.data[33].y, temp_529);
    // 0x0013F0: 0x59A0130000470505 Ffma
    temp_629 = fma(temp_604, temp_619, temp_599);
    // 0x0013F8: 0x51A0059802972121 Ffma
    temp_630 = fma(temp_601, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001408: 0x49A2019803570307 Ffma
    temp_631 = 0.0 - temp_609;
    temp_632 = fma(temp_609, fp_c6.data[13].y, temp_631);
    // 0x001410: 0x59A0098000C71E0C Ffma
    temp_633 = fma(temp_14, temp_621, temp_627);
    // 0x001418: 0x59A0138000170606 Ffma
    temp_634 = fma(temp_606, temp_628, temp_596);
    // 0x001428: 0x59A0028000271F05 Ffma
    temp_635 = fma(temp_15, temp_623, temp_629);
    // 0x001430: 0x4C98079802A70002 Mov
    // 0x001438: 0x5C68100000C71919 Fmul
    temp_636 = temp_248 * temp_633;
    // 0x001448: 0x59A0030002571C06 Ffma
    temp_637 = fma(temp_16, temp_625, temp_634);
    // 0x001450: 0x5C68100000571A1A Fmul
    temp_638 = temp_250 * temp_635;
    // 0x001458: 0x51A0011802A70000 Ffma
    temp_639 = fma(temp_608, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001468: 0x5C58300002071901 Fadd
    temp_640 = 0.0 - temp_626;
    temp_641 = temp_636 + temp_640;
    // 0x001470: 0x5C68100000671B1B Fmul
    temp_642 = temp_252 * temp_637;
    // 0x001478: 0x5C58300002171A02 Fadd
    temp_643 = 0.0 - temp_630;
    temp_644 = temp_638 + temp_643;
    // 0x001488: 0x49A505180BC7280A Ffma
    temp_645 = 0.0 - fp_c6.data[47].x;
    temp_646 = fma(temp_530, temp_645, temp_588);
    temp_647 = clamp(temp_646, 0.0, 1.0);
    // 0x001490: 0x49A010180BF70105 Ffma
    temp_648 = fma(temp_641, fp_c6.data[47].w, temp_626);
    // 0x001498: 0x5080000000370A0A Mufu
    temp_649 = log2(temp_647);
    // 0x0014A8: 0x5C58300000071B01 Fadd
    temp_650 = 0.0 - temp_639;
    temp_651 = temp_642 + temp_650;
    // 0x0014B0: 0x49A010980BF70202 Ffma
    temp_652 = fma(temp_644, fp_c6.data[47].w, temp_630);
    // 0x0014B8: 0x5C60178000572005 Fmnmx
    temp_653 = max(temp_626, temp_648);
    // 0x0014C8: 0x49A000180BF70101 Ffma
    temp_654 = fma(temp_651, fp_c6.data[47].w, temp_639);
    // 0x0014D0: 0x5C60178000272102 Fmnmx
    temp_655 = max(temp_630, temp_652);
    // 0x0014D8: 0x4C68101803170A04 Fmul
    temp_656 = temp_649 * fp_c6.data[12].y;
    // 0x0014E8: 0x5C60178000170001 Fmnmx
    temp_657 = max(temp_639, temp_654);
    // 0x0014F0: 0x59A0010000770207 Ffma
    temp_658 = fma(temp_655, temp_632, temp_655);
    // 0x0014F8: 0x5C90008000470006 Rro
    // 0x001508: 0x49A2019803470304 Ffma
    temp_659 = 0.0 - temp_609;
    temp_660 = fma(temp_609, fp_c6.data[13].x, temp_659);
    // 0x001510: 0x5080000000270606 Mufu
    temp_661 = exp2(temp_656);
    // 0x001518: 0x49A2019803670303 Ffma
    temp_662 = 0.0 - temp_609;
    temp_663 = fma(temp_609, fp_c6.data[13].z, temp_662);
    // 0x001528: 0x59A0028000470500 Ffma
    temp_664 = fma(temp_653, temp_660, temp_653);
    // 0x001530: 0x59A0008000370102 Ffma
    temp_665 = fma(temp_657, temp_663, temp_657);
    // 0x001538: 0x5C59100000771A01 Fadd
    temp_666 = 0.0 - temp_638;
    temp_667 = temp_666 + temp_658;
    // 0x001548: 0x4C58100C03872C04 Fadd
    temp_668 = temp_590 + fp_c3.data[14].x;
    // 0x001550: 0x5C98078001D70007 Mov
    // 0x001558: 0x0103F4000007F005 Mov32i
    // 0x001568: 0x5C59100000071900 Fadd
    temp_669 = 0.0 - temp_636;
    temp_670 = temp_669 + temp_664;
    // 0x001570: 0x4C68101802B70603 Fmul
    temp_671 = temp_661 * fp_c6.data[10].w;
    // 0x001578: 0x5C59100000271B02 Fadd
    temp_672 = 0.0 - temp_642;
    temp_673 = temp_672 + temp_665;
    // 0x001588: 0x5C9807800FF70006 Mov
    // 0x001590: 0x49A37F8C03C70404 Ffma
    temp_674 = 0.0 - fp_c3.data[15].x;
    temp_675 = fma(temp_668, temp_674, -0.0);
    // 0x001598: 0x59A00C8000370000 Ffma
    temp_676 = fma(temp_670, temp_671, temp_636);
    // 0x0015A8: 0x59A00D0000370101 Ffma
    temp_677 = fma(temp_667, temp_671, temp_638);
    // 0x0015B0: 0x59A00D8000370202 Ffma
    temp_678 = fma(temp_673, temp_671, temp_642);
    // 0x0015B8: 0x5C98078001D70003 Mov
    // 0x0015C8: 0xE30000000007000F Exit
    out_attr0.x = temp_676;
    out_attr0.y = temp_677;
    out_attr0.z = temp_678;
    out_attr0.w = temp_17;
    out_attr1.x = temp_675;
    out_attr1.y = 0.75;
    out_attr1.z = 0.0;
    out_attr1.w = temp_17;
    return;
}
