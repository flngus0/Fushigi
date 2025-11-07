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
layout (binding = 3) uniform sampler2D fp_t_tcb_22;
layout (binding = 4) uniform sampler2D fp_t_tcb_1E;
layout (binding = 5) uniform sampler2D fp_t_tcb_20;
layout (binding = 6) uniform samplerCube fp_t_tcb_16;
layout (binding = 7) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 8) uniform samplerCube fp_t_tcb_18;
layout (binding = 9) uniform sampler3D fp_t_cb7_20;
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
    precise vec2 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise vec3 temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise vec3 temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
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
    precise vec4 temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise vec3 temp_91;
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
    uint temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    int temp_213;
    precise float temp_214;
    int temp_215;
    uint temp_216;
    uint temp_217;
    int temp_218;
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
    int temp_298;
    bool temp_299;
    int temp_300;
    int temp_301;
    int temp_302;
    int temp_303;
    int temp_304;
    uint temp_305;
    uint temp_306;
    int temp_307;
    precise float temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    int temp_312;
    int temp_313;
    uint temp_314;
    uint temp_315;
    int temp_316;
    precise float temp_317;
    int temp_318;
    uint temp_319;
    int temp_320;
    precise float temp_321;
    int temp_322;
    uint temp_323;
    uint temp_324;
    int temp_325;
    precise float temp_326;
    int temp_327;
    uint temp_328;
    int temp_329;
    precise float temp_330;
    int temp_331;
    uint temp_332;
    uint temp_333;
    int temp_334;
    precise float temp_335;
    int temp_336;
    uint temp_337;
    int temp_338;
    precise float temp_339;
    precise float temp_340;
    precise float temp_341;
    int temp_342;
    uint temp_343;
    uint temp_344;
    int temp_345;
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
    int temp_365;
    uint temp_366;
    uint temp_367;
    int temp_368;
    precise float temp_369;
    int temp_370;
    uint temp_371;
    int temp_372;
    precise float temp_373;
    precise float temp_374;
    precise float temp_375;
    int temp_376;
    uint temp_377;
    uint temp_378;
    int temp_379;
    precise float temp_380;
    int temp_381;
    uint temp_382;
    int temp_383;
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
    uint temp_400;
    int temp_401;
    precise float temp_402;
    bool temp_403;
    uint temp_404;
    precise float temp_405;
    precise float temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    uint temp_412;
    precise float temp_413;
    bool temp_414;
    precise float temp_415;
    int temp_416;
    uint temp_417;
    uint temp_418;
    int temp_419;
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
    uint temp_452;
    uint temp_453;
    int temp_454;
    precise float temp_455;
    int temp_456;
    uint temp_457;
    int temp_458;
    precise float temp_459;
    precise float temp_460;
    precise float temp_461;
    int temp_462;
    uint temp_463;
    uint temp_464;
    int temp_465;
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
    precise vec3 temp_547;
    precise float temp_548;
    precise float temp_549;
    precise float temp_550;
    precise vec3 temp_551;
    precise float temp_552;
    precise float temp_553;
    precise float temp_554;
    precise vec3 temp_555;
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
    precise float temp_679;
    precise float temp_680;
    precise float temp_681;
    precise float temp_682;
    precise float temp_683;
    precise float temp_684;
    precise float temp_685;
    precise float temp_686;
    precise float temp_687;
    precise float temp_688;
    precise float temp_689;
    precise float temp_690;
    precise float temp_691;
    precise float temp_692;
    precise float temp_693;
    precise float temp_694;
    precise float temp_695;
    precise float temp_696;
    precise float temp_697;
    precise float temp_698;
    precise float temp_699;
    precise float temp_700;
    precise float temp_701;
    precise float temp_702;
    precise float temp_703;
    precise float temp_704;
    precise float temp_705;
    precise float temp_706;
    precise float temp_707;
    precise float temp_708;
    precise float temp_709;
    precise float temp_710;
    precise float temp_711;
    precise float temp_712;
    precise float temp_713;
    precise float temp_714;
    precise float temp_715;
    precise float temp_716;
    precise float temp_717;
    precise float temp_718;
    precise float temp_719;
    precise float temp_720;
    precise float temp_721;
    precise float temp_722;
    precise float temp_723;
    precise float temp_724;
    precise float temp_725;
    precise float temp_726;
    precise float temp_727;
    precise float temp_728;
    precise float temp_729;
    precise float temp_730;
    precise float temp_731;
    precise float temp_732;
    precise float temp_733;
    precise float temp_734;
    precise float temp_735;
    precise float temp_736;
    precise float temp_737;
    precise float temp_738;
    precise float temp_739;
    precise float temp_740;
    // 0x000008: 0x0103F0000007F031 Mov32i
    // 0x000010: 0xE003FF87CFF7FF0C Ipa
    // 0x000018: 0x5080000000470C0C Mufu
    // 0x000028: 0xE043FF8E00C7FF04 Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E40C7FF05 Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xD830026FF0570400 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xD824036060570424 Texs
    temp_5 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    // 0x000050: 0xD822024080570402 Texs
    temp_9 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    temp_12 = temp_9.z;
    // 0x000058: 0xE043FF8A00C7FF07 Ipa
    temp_13 = in_attr2.x;
    // 0x000068: 0xE043FF8A40C7FF09 Ipa
    temp_14 = in_attr2.y;
    // 0x000070: 0xE043FF8A80C7FF0A Ipa
    temp_15 = in_attr2.z;
    // 0x000078: 0xE043FF8900C7FF0D Ipa
    temp_16 = in_attr1.x;
    // 0x000088: 0xE043FF8940C7FF0F Ipa
    temp_17 = in_attr1.y;
    // 0x000090: 0xE043FF8800C7FF11 Ipa
    temp_18 = in_attr0.x;
    // 0x000098: 0xE043FF8980C7FF10 Ipa
    temp_19 = in_attr1.z;
    // 0x0000A8: 0xE043FF8840C7FF13 Ipa
    temp_20 = in_attr0.y;
    // 0x0000B0: 0xE043FF8880C7FF14 Ipa
    temp_21 = in_attr0.z;
    // 0x0000B8: 0x5C6810000077070B Fmul
    temp_22 = temp_13 * temp_13;
    // 0x0000C8: 0x5C68100000D70D0E Fmul
    temp_23 = temp_16 * temp_16;
    // 0x0000D0: 0x5C68100001171115 Fmul
    temp_24 = temp_18 * temp_18;
    // 0x0000D8: 0x59A005800097090B Ffma
    temp_25 = fma(temp_14, temp_14, temp_22);
    // 0x0000E8: 0x59A0070000F70F0E Ffma
    temp_26 = fma(temp_17, temp_17, temp_23);
    // 0x0000F0: 0x59A00A8001371315 Ffma
    temp_27 = fma(temp_20, temp_20, temp_24);
    // 0x0000F8: 0x59A0058000A70A0B Ffma
    temp_28 = fma(temp_15, temp_15, temp_25);
    // 0x000108: 0x5080000000570B04 Mufu
    temp_29 = inversesqrt(temp_28);
    // 0x000110: 0x59A0070001071005 Ffma
    temp_30 = fma(temp_19, temp_19, temp_26);
    // 0x000118: 0x5080000000570512 Mufu
    temp_31 = inversesqrt(temp_30);
    // 0x000128: 0x59A00A8001471415 Ffma
    temp_32 = fma(temp_21, temp_21, temp_27);
    // 0x000130: 0x5C6810000047090E Fmul
    temp_33 = temp_14 * temp_29;
    // 0x000138: 0x5C68100000470707 Fmul
    temp_34 = temp_13 * temp_29;
    // 0x000148: 0x5C68100000470A04 Fmul
    temp_35 = temp_15 * temp_29;
    // 0x000150: 0x508000000057150A Mufu
    temp_36 = inversesqrt(temp_32);
    // 0x000158: 0x5C68100001270D0D Fmul
    temp_37 = temp_16 * temp_31;
    // 0x000168: 0x5C68100001270F0F Fmul
    temp_38 = temp_17 * temp_31;
    // 0x000170: 0x5C68100001271012 Fmul
    temp_39 = temp_19 * temp_31;
    // 0x000178: 0x5C68100000A71111 Fmul
    temp_40 = temp_18 * temp_36;
    // 0x000188: 0x5C68100000A71313 Fmul
    temp_41 = temp_20 * temp_36;
    // 0x000190: 0x5C68100000A7140A Fmul
    temp_42 = temp_21 * temp_36;
    // 0x000198: 0xF0F0000034270000 Depbar
    // 0x0001A8: 0x5C68100000170109 Fmul
    temp_43 = temp_4 * temp_4;
    // 0x0001B0: 0x5C68100000770107 Fmul
    temp_44 = temp_4 * temp_34;
    // 0x0001B8: 0x5C68100000E7010E Fmul
    temp_45 = temp_4 * temp_33;
    // 0x0001C8: 0x5C68100000470101 Fmul
    temp_46 = temp_4 * temp_35;
    // 0x0001D0: 0x59A0048000070009 Ffma
    temp_47 = fma(temp_3, temp_3, temp_43);
    // 0x0001D8: 0x59A0038000D70007 Ffma
    temp_48 = fma(temp_3, temp_37, temp_44);
    // 0x0001E8: 0x59A0070000F7000E Ffma
    temp_49 = fma(temp_3, temp_38, temp_45);
    // 0x0001F0: 0x59A0008001270001 Ffma
    temp_50 = fma(temp_3, temp_39, temp_46);
    // 0x0001F8: 0x385D103F80070909 Fadd
    temp_51 = 0.0 - temp_47;
    temp_52 = temp_51 + 1.0;
    temp_53 = clamp(temp_52, 0.0, 1.0);
    // 0x000208: 0x5080000000870910 Mufu
    temp_54 = sqrt(temp_53);
    // 0x000210: 0xE003FF870FF7FF09 Ipa
    temp_55 = gl_FragCoord.x;
    temp_56 = support_buffer.render_scale[0];
    temp_57 = temp_55 / temp_56;
    // 0x000218: 0x59A0038001071107 Ffma
    temp_58 = fma(temp_40, temp_54, temp_48);
    // 0x000228: 0x59A007000107130E Ffma
    temp_59 = fma(temp_41, temp_54, temp_49);
    // 0x000230: 0x59A0008001070A01 Ffma
    temp_60 = fma(temp_42, temp_54, temp_50);
    // 0x000238: 0xE003FF874FF7FF0A Ipa
    temp_61 = gl_FragCoord.y;
    temp_62 = support_buffer.render_scale[0];
    temp_63 = temp_61 / temp_62;
    // 0x000248: 0x5C68100000770700 Fmul
    temp_64 = temp_58 * temp_58;
    // 0x000250: 0x59A0000000E70E00 Ffma
    temp_65 = fma(temp_59, temp_59, temp_64);
    // 0x000258: 0x59A0000000170104 Ffma
    temp_66 = fma(temp_60, temp_60, temp_65);
    // 0x000268: 0x5080000000570404 Mufu
    temp_67 = inversesqrt(temp_66);
    // 0x000270: 0x5C68100000470112 Fmul
    temp_68 = temp_60 * temp_67;
    // 0x000278: 0x5C68100000470E00 Fmul
    temp_69 = temp_59 * temp_67;
    // 0x000288: 0x5C6810000047070E Fmul
    temp_70 = temp_58 * temp_67;
    // 0x000290: 0x4C68100C04A70904 Fmul
    temp_71 = temp_57 * fp_c3.data[18].z;
    // 0x000298: 0x4C68100C00671205 Fmul
    temp_72 = temp_68 * fp_c3.data[1].z;
    // 0x0002A8: 0x4C68100C00271201 Fmul
    temp_73 = temp_68 * fp_c3.data[0].z;
    // 0x0002B0: 0x49A0028C00570005 Ffma
    temp_74 = fma(temp_69, fp_c3.data[1].y, temp_72);
    // 0x0002B8: 0x49A0008C00170001 Ffma
    temp_75 = fma(temp_69, fp_c3.data[0].y, temp_73);
    // 0x0002C8: 0x49A0028C00470E05 Ffma
    temp_76 = fma(temp_70, fp_c3.data[1].x, temp_74);
    // 0x0002D0: 0x49A0008C00070E01 Ffma
    temp_77 = fma(temp_70, fp_c3.data[0].x, temp_75);
    // 0x0002D8: 0x4C69100C03E70507 Fmul
    temp_78 = 0.0 - fp_c3.data[15].z;
    temp_79 = temp_76 * temp_78;
    // 0x0002E8: 0x4C68100C04B70A05 Fmul
    temp_80 = temp_63 * fp_c3.data[18].w;
    // 0x0002F0: 0x4C68101808B70101 Fmul
    temp_81 = temp_77 * fp_c6.data[34].w;
    // 0x0002F8: 0x4C68101808B70707 Fmul
    temp_82 = temp_79 * fp_c6.data[34].w;
    // 0x000308: 0x49A002040037011E Ffma
    temp_83 = fma(temp_81, fp_c1.data[0].w, temp_71);
    // 0x000310: 0x49A002840037071F Ffma
    temp_84 = fma(temp_82, fp_c1.data[0].w, temp_80);
    // 0x000318: 0x0103F8000007F007 Mov32i
    // 0x000328: 0xD832022201F71E1E Texs
    temp_85 = texture(fp_t_tcb_22, vec2(temp_83, temp_84)).xyzw;
    temp_86 = temp_85.x;
    temp_87 = temp_85.y;
    temp_88 = temp_85.z;
    temp_89 = temp_85.w;
    // 0x000330: 0xD86201EFF0770407 Texs
    temp_90 = textureLod(fp_t_tcb_1E, vec2(temp_71, temp_80), 1.0).x;
    // 0x000338: 0xD82202001057041C Texs
    temp_91 = texture(fp_t_tcb_20, vec2(temp_71, temp_80)).xyz;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x000348: 0xE043FF8B00C7FF23 Ipa
    temp_95 = in_attr3.x;
    // 0x000350: 0xE043FF8B40C7FF22 Ipa
    temp_96 = in_attr3.y;
    // 0x000358: 0xE043FF8B80C7FF16 Ipa
    temp_97 = in_attr3.z;
    // 0x000368: 0xF0F0000034370000 Depbar
    // 0x000370: 0x4C6810180A072424 Fmul
    temp_98 = temp_6 * fp_c6.data[40].x;
    // 0x000378: 0xE2900000C2000000 Ssy
    // 0x000388: 0x4C98079402C70014 Mov
    // 0x000390: 0x4C98079402E7001B Mov
    // 0x000398: 0x386013BF80072424 Fmnmx
    temp_99 = min(temp_98, 1.0);
    // 0x0003A8: 0x51A10A1403470226 Ffma
    temp_100 = 0.0 - fp_c5.data[11].x;
    temp_101 = fma(temp_10, temp_100, fp_c5.data[13].x);
    // 0x0003B0: 0x51A10D940367081B Ffma
    temp_102 = 0.0 - fp_c5.data[11].z;
    temp_103 = fma(temp_12, temp_102, fp_c5.data[13].z);
    // 0x0003B8: 0x4C68101402E70808 Fmul
    temp_104 = temp_12 * fp_c5.data[11].z;
    // 0x0003C8: 0x4C60178400172428 Fmnmx
    temp_105 = max(temp_99, fp_c1.data[0].y);
    // 0x0003D0: 0x4C98079402D70024 Mov
    // 0x0003D8: 0x49A0041403771B1B Ffma
    temp_106 = fma(temp_103, fp_c5.data[13].w, temp_104);
    // 0x0003E8: 0x32A018BF00072831 Ffma
    temp_107 = fma(temp_105, 0.5, 0.5);
    // 0x0003F0: 0x51A1121403570324 Ffma
    temp_108 = 0.0 - fp_c5.data[11].y;
    temp_109 = fma(temp_11, temp_108, fp_c5.data[13].y);
    // 0x0003F8: 0x4C68101402D70303 Fmul
    temp_110 = temp_11 * fp_c5.data[11].y;
    // 0x000408: 0x4C58301407B71B18 Fadd
    temp_111 = 0.0 - fp_c5.data[30].w;
    temp_112 = temp_106 + temp_111;
    // 0x000410: 0x5C68120003173131 Fmul
    temp_113 = temp_107 * 0.5;
    temp_114 = temp_113 * temp_107;
    // 0x000418: 0x49A0019403772424 Ffma
    temp_115 = fma(temp_109, fp_c5.data[13].w, temp_110);
    // 0x000428: 0x5C68100002372309 Fmul
    temp_116 = temp_95 * temp_95;
    // 0x000430: 0x51A00C1407B72518 Ffma
    temp_117 = fma(temp_7, temp_112, fp_c5.data[30].w);
    // 0x000438: 0x4C58301407B72403 Fadd
    temp_118 = 0.0 - fp_c5.data[30].w;
    temp_119 = temp_115 + temp_118;
    // 0x000448: 0x59A0048002272209 Ffma
    temp_120 = fma(temp_96, temp_96, temp_116);
    // 0x000450: 0x51A0019407B72519 Ffma
    temp_121 = fma(temp_7, temp_119, fp_c5.data[30].w);
    // 0x000458: 0x59A0048001671609 Ffma
    temp_122 = fma(temp_97, temp_97, temp_120);
    // 0x000468: 0x5080000000570909 Mufu
    temp_123 = inversesqrt(temp_122);
    // 0x000470: 0x5C69100000972323 Fmul
    temp_124 = 0.0 - temp_123;
    temp_125 = temp_95 * temp_124;
    // 0x000478: 0x5C69100000972222 Fmul
    temp_126 = 0.0 - temp_123;
    temp_127 = temp_96 * temp_126;
    // 0x000488: 0x5C69100000971616 Fmul
    temp_128 = 0.0 - temp_123;
    temp_129 = temp_97 * temp_128;
    // 0x000490: 0x4C58301805C7230A Fadd
    temp_130 = 0.0 - fp_c6.data[23].x;
    temp_131 = temp_125 + temp_130;
    // 0x000498: 0x4C58301805D7220B Fadd
    temp_132 = 0.0 - fp_c6.data[23].y;
    temp_133 = temp_127 + temp_132;
    // 0x0004A8: 0x4C58301805E7160D Fadd
    temp_134 = 0.0 - fp_c6.data[23].z;
    temp_135 = temp_129 + temp_134;
    // 0x0004B0: 0x5C68100000A70A10 Fmul
    temp_136 = temp_131 * temp_131;
    // 0x0004B8: 0x59A0080000B70B10 Ffma
    temp_137 = fma(temp_133, temp_133, temp_136);
    // 0x0004C8: 0x59A0080000D70D10 Ffma
    temp_138 = fma(temp_135, temp_135, temp_137);
    // 0x0004D0: 0x5080000000571010 Mufu
    temp_139 = inversesqrt(temp_138);
    // 0x0004D8: 0x5C68100001070A09 Fmul
    temp_140 = temp_131 * temp_139;
    // 0x0004E8: 0x5C68100001070B0B Fmul
    temp_141 = temp_133 * temp_139;
    // 0x0004F0: 0x5C68100001070D0D Fmul
    temp_142 = temp_135 * temp_139;
    // 0x0004F8: 0x4C69101805C7090A Fmul
    temp_143 = 0.0 - fp_c6.data[23].x;
    temp_144 = temp_140 * temp_143;
    // 0x000508: 0x5C68100000972311 Fmul
    temp_145 = temp_125 * temp_140;
    // 0x000510: 0x5C68100000E70909 Fmul
    temp_146 = temp_140 * temp_70;
    // 0x000518: 0x49A1051805D70B0A Ffma
    temp_147 = 0.0 - fp_c6.data[23].y;
    temp_148 = fma(temp_141, temp_147, temp_144);
    // 0x000528: 0x59A0088000B7220F Ffma
    temp_149 = fma(temp_127, temp_141, temp_145);
    // 0x000530: 0x01040DF760C7F011 Mov32i
    // 0x000538: 0x59A0048000070B0B Ffma
    temp_150 = fma(temp_141, temp_69, temp_146);
    // 0x000548: 0x49A5051805E70D0A Ffma
    temp_151 = 0.0 - fp_c6.data[23].z;
    temp_152 = fma(temp_142, temp_151, temp_148);
    temp_153 = clamp(temp_152, 0.0, 1.0);
    // 0x000550: 0x59A4078000D7160F Ffma
    temp_154 = fma(temp_129, temp_142, temp_149);
    temp_155 = clamp(temp_154, 0.0, 1.0);
    // 0x000558: 0x59A4058001270D10 Ffma
    temp_156 = fma(temp_142, temp_68, temp_150);
    temp_157 = clamp(temp_156, 0.0, 1.0);
    // 0x000568: 0x5C68100000E7230D Fmul
    temp_158 = temp_125 * temp_70;
    // 0x000570: 0x49A2088400070A09 Ffma
    temp_159 = fma(temp_153, fp_c1.data[0].x, -6.98316002);
    // 0x000578: 0x59A0068000072227 Ffma
    temp_160 = fma(temp_127, temp_69, temp_158);
    // 0x000588: 0x5C68100000970A09 Fmul
    temp_161 = temp_153 * temp_159;
    // 0x000590: 0x49A2088400070F0A Ffma
    temp_162 = fma(temp_155, fp_c1.data[0].x, -6.98316002);
    // 0x000598: 0x59A4138001271627 Ffma
    temp_163 = fma(temp_129, temp_68, temp_160);
    temp_164 = clamp(temp_163, 0.0, 1.0);
    // 0x0005A8: 0x5C90008000970009 Rro
    // 0x0005B0: 0x5C68100000A70F0B Fmul
    temp_165 = temp_155 * temp_162;
    // 0x0005B8: 0x51A414040017280F Ffma
    temp_166 = fma(temp_105, temp_105, fp_c1.data[0].y);
    temp_167 = clamp(temp_166, 0.0, 1.0);
    // 0x0005C8: 0x4C69101805C70E0A Fmul
    temp_168 = 0.0 - fp_c6.data[23].x;
    temp_169 = temp_70 * temp_168;
    // 0x0005D0: 0x59A1138002773113 Ffma
    temp_170 = 0.0 - temp_164;
    temp_171 = fma(temp_114, temp_170, temp_164);
    // 0x0005D8: 0x5C68100002770E2D Fmul
    temp_172 = temp_70 * temp_164;
    // 0x0005E8: 0x5C68100002771217 Fmul
    temp_173 = temp_68 * temp_164;
    // 0x0005F0: 0x5C68100000F70F11 Fmul
    temp_174 = temp_167 * temp_167;
    // 0x0005F8: 0x49A1051805D7000D Ffma
    temp_175 = 0.0 - fp_c6.data[23].y;
    temp_176 = fma(temp_69, temp_175, temp_169);
    // 0x000608: 0x5C58100001373113 Fadd
    temp_177 = temp_114 + temp_171;
    // 0x000610: 0x32A211C000072D2D Ffma
    temp_178 = 0.0 - temp_125;
    temp_179 = fma(temp_172, 2.0, temp_178);
    // 0x000618: 0x5080000000471313 Mufu
    temp_180 = 1.0 / temp_177;
    // 0x000628: 0x32A20B4000071717 Ffma
    temp_181 = 0.0 - temp_129;
    temp_182 = fma(temp_173, 2.0, temp_181);
    // 0x000630: 0x59A2080001171011 Ffma
    temp_183 = 0.0 - temp_157;
    temp_184 = fma(temp_157, temp_174, temp_183);
    // 0x000638: 0x49A5069805E7120A Ffma
    temp_185 = 0.0 - fp_c6.data[23].z;
    temp_186 = fma(temp_68, temp_185, temp_176);
    temp_187 = clamp(temp_186, 0.0, 1.0);
    // 0x000648: 0x386810411007050D Fmul
    temp_188 = temp_80 * 9.0;
    // 0x000650: 0x3868104180070405 Fmul
    temp_189 = temp_71 * 16.0;
    // 0x000658: 0x5CA8148000D70A0D F2f
    temp_190 = floor(temp_188);
    // 0x000668: 0x51A0088400271011 Ffma
    temp_191 = fma(temp_157, temp_184, fp_c1.data[0].z);
    // 0x000670: 0x5CA8148000570A10 F2f
    temp_192 = floor(temp_189);
    // 0x000678: 0x59A1050003170A04 Ffma
    temp_193 = 0.0 - temp_114;
    temp_194 = fma(temp_187, temp_193, temp_187);
    // 0x000688: 0x5080000000471111 Mufu
    temp_195 = 1.0 / temp_191;
    // 0x000690: 0x4C68101801570A08 Fmul
    temp_196 = temp_187 * fp_c6.data[5].y;
    // 0x000698: 0x3868103F00071330 Fmul
    temp_197 = temp_180 * 0.5;
    // 0x0006A8: 0x5C90008000B70013 Rro
    // 0x0006B0: 0x508000000027090B Mufu
    temp_198 = exp2(temp_161);
    // 0x0006B8: 0x5C58100000473104 Fadd
    temp_199 = temp_114 + temp_194;
    // 0x0006C8: 0x5080000000271313 Mufu
    temp_200 = exp2(temp_165);
    // 0x0006D0: 0x32A0084180070D10 Ffma
    temp_201 = fma(temp_190, 16.0, temp_192);
    // 0x0006D8: 0x5080000000470415 Mufu
    temp_202 = 1.0 / temp_199;
    // 0x0006E8: 0x5C68100001170F0F Fmul
    temp_203 = temp_167 * temp_195;
    // 0x0006F0: 0x5CB0118001070A2F F2i
    temp_204 = trunc(temp_201);
    temp_205 = max(temp_204, 0.0);
    temp_206 = uint(temp_205);
    // 0x0006F8: 0x1E23EA2F98370811 Fmul32i
    temp_207 = temp_196 * 0.318309873;
    // 0x000708: 0x4C68101402C70204 Fmul
    temp_208 = temp_10 * fp_c5.data[11].x;
    // 0x000710: 0x5C68100000F70F0F Fmul
    temp_209 = temp_203 * temp_203;
    // 0x000718: 0x5C68100001573005 Fmul
    temp_210 = temp_197 * temp_202;
    // 0x000728: 0x49A0021403772626 Ffma
    temp_211 = fma(temp_101, fp_c5.data[13].w, temp_208);
    // 0x000730: 0x4C68101801470A04 Fmul
    temp_212 = temp_187 * fp_c6.data[5].x;
    // 0x000738: 0x3848000000872F2E Shl
    temp_213 = int(temp_206) << 8;
    // 0x000748: 0x5C68100000570F0F Fmul
    temp_214 = temp_209 * temp_210;
    // 0x000750: 0xEF94008200472E2E Ldc
    temp_215 = temp_213 + 0x2004;
    temp_216 = uint(temp_215) >> 2;
    temp_217 = temp_216 >> 2;
    temp_218 = int(temp_216) & 3;
    temp_219 = fp_c8.data[int(temp_217)][temp_218];
    // 0x000758: 0x4C58301407B7261A Fadd
    temp_220 = 0.0 - fp_c5.data[30].w;
    temp_221 = temp_211 + temp_220;
    // 0x000768: 0x4C98079808A70005 Mov
    // 0x000770: 0x1E23EA2F98370410 Fmul32i
    temp_222 = temp_212 * 0.318309873;
    // 0x000778: 0x59A1058000B71904 Ffma
    temp_223 = 0.0 - temp_198;
    temp_224 = fma(temp_121, temp_223, temp_198);
    // 0x000788: 0x5C68100000F70A02 Fmul
    temp_225 = temp_187 * temp_214;
    // 0x000790: 0x51A00D1407B7251A Ffma
    temp_226 = fma(temp_7, temp_221, fp_c5.data[30].w);
    // 0x000798: 0x4C68101808770505 Fmul
    temp_227 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x0007A8: 0x4C68101801670A0A Fmul
    temp_228 = temp_187 * fp_c6.data[5].z;
    // 0x0007B0: 0x5C58100000471904 Fadd
    temp_229 = temp_121 + temp_224;
    // 0x0007B8: 0x59A1058000B71A03 Ffma
    temp_230 = 0.0 - temp_198;
    temp_231 = fma(temp_226, temp_230, temp_198);
    // 0x0007C8: 0x59A1058000B7180B Ffma
    temp_232 = 0.0 - temp_198;
    temp_233 = fma(temp_117, temp_232, temp_198);
    // 0x0007D0: 0x59A1098001371A0D Ffma
    temp_234 = 0.0 - temp_200;
    temp_235 = fma(temp_226, temp_234, temp_200);
    // 0x0007D8: 0x1E23EA2F98370A14 Fmul32i
    temp_236 = temp_228 * 0.318309873;
    // 0x0007E8: 0x59A109800137180A Ffma
    temp_237 = 0.0 - temp_200;
    temp_238 = fma(temp_117, temp_237, temp_200);
    // 0x0007F0: 0x59A1098001371913 Ffma
    temp_239 = 0.0 - temp_200;
    temp_240 = fma(temp_121, temp_239, temp_200);
    // 0x0007F8: 0x5C58100000371A03 Fadd
    temp_241 = temp_226 + temp_231;
    // 0x000808: 0x5C58100000B7180B Fadd
    temp_242 = temp_117 + temp_233;
    // 0x000810: 0x5C58100000D71A0D Fadd
    temp_243 = temp_226 + temp_235;
    // 0x000818: 0x5C58100000A7180A Fadd
    temp_244 = temp_117 + temp_238;
    // 0x000828: 0x5C5810000137190F Fadd
    temp_245 = temp_121 + temp_240;
    // 0x000830: 0x59A1080001070D13 Ffma
    temp_246 = 0.0 - temp_222;
    temp_247 = fma(temp_243, temp_246, temp_222);
    // 0x000838: 0x5C68100002770010 Fmul
    temp_248 = temp_69 * temp_164;
    // 0x000848: 0x59A1088001170F0F Ffma
    temp_249 = 0.0 - temp_207;
    temp_250 = fma(temp_245, temp_249, temp_207);
    // 0x000850: 0x32A211400007102A Ffma
    temp_251 = 0.0 - temp_127;
    temp_252 = fma(temp_248, 2.0, temp_251);
    // 0x000858: 0x5B6603800FF72E07 Isetp
    temp_253 = floatBitsToUint(temp_219) <= 0u;
    // 0x000868: 0xF0F0000034270000 Depbar
    // 0x000870: 0x51A00F1801470508 Ffma
    temp_254 = fma(temp_227, temp_86, fp_c6.data[5].x);
    // 0x000878: 0x51A00F9801570509 Ffma
    temp_255 = fma(temp_227, temp_87, fp_c6.data[5].y);
    // 0x000888: 0x51A0101801670505 Ffma
    temp_256 = fma(temp_227, temp_88, fp_c6.data[5].z);
    // 0x000890: 0x5C68100000870303 Fmul
    temp_257 = temp_241 * temp_254;
    // 0x000898: 0x5C68100000970404 Fmul
    temp_258 = temp_229 * temp_255;
    // 0x0008A8: 0x5C68100000570B05 Fmul
    temp_259 = temp_242 * temp_256;
    // 0x0008B0: 0x59A10A0001470A0B Ffma
    temp_260 = 0.0 - temp_236;
    temp_261 = fma(temp_244, temp_260, temp_236);
    // 0x0008B8: 0x5C9807800FF7000A Mov
    // 0x0008C8: 0x5C9807800FF70009 Mov
    // 0x0008D0: 0x5C6810000027030D Fmul
    temp_262 = temp_257 * temp_225;
    // 0x0008D8: 0x5C68100000270437 Fmul
    temp_263 = temp_258 * temp_225;
    // 0x0008E8: 0x5C68100000270529 Fmul
    temp_264 = temp_259 * temp_225;
    // 0x0008F0: 0xF0F0000034170000 Depbar
    // 0x0008F8: 0x51A5038400270602 Ffma
    temp_265 = 0.0 - temp_90;
    temp_266 = fma(temp_8, temp_265, fp_c1.data[0].z);
    temp_267 = clamp(temp_266, 0.0, 1.0);
    // 0x000908: 0x5C9807800FF70008 Mov
    // 0x000910: 0x5C9807800FF70007 Mov
    // 0x000918: 0x1E23E22F98370D0D Fmul32i
    temp_268 = temp_262 * 0.159154937;
    // 0x000928: 0x5C9807800FF70006 Mov
    // 0x000930: 0xEF5400000007FF0D Stl
    local_memory[0] = floatBitsToUint(temp_268);
    // 0x000938: 0x49A201180AC70203 Ffma
    temp_269 = 0.0 - temp_267;
    temp_270 = fma(temp_267, fp_c6.data[43].x, temp_269);
    // 0x000948: 0x49A201180AD70204 Ffma
    temp_271 = 0.0 - temp_267;
    temp_272 = fma(temp_267, fp_c6.data[43].y, temp_271);
    // 0x000950: 0x49A201180AE70202 Ffma
    temp_273 = 0.0 - temp_267;
    temp_274 = fma(temp_267, fp_c6.data[43].z, temp_273);
    // 0x000958: 0x5C9807800FF70005 Mov
    // 0x000968: 0x1E23E22F98373737 Fmul32i
    temp_275 = temp_263 * 0.159154937;
    // 0x000970: 0x1E23E22F98372929 Fmul32i
    temp_276 = temp_264 * 0.159154937;
    // 0x000978: 0x3858103F80070303 Fadd
    temp_277 = temp_270 + 1.0;
    // 0x000988: 0x3858103F80070411 Fadd
    temp_278 = temp_272 + 1.0;
    // 0x000990: 0x3858103F80070202 Fadd
    temp_279 = temp_274 + 1.0;
    // 0x000998: 0x59A4018000372604 Ffma
    temp_280 = fma(temp_211, temp_277, temp_277);
    temp_281 = clamp(temp_280, 0.0, 1.0);
    // 0x0009A8: 0x59A4088001172403 Ffma
    temp_282 = fma(temp_115, temp_278, temp_278);
    temp_283 = clamp(temp_282, 0.0, 1.0);
    // 0x0009B0: 0x59A4010000271B02 Ffma
    temp_284 = fma(temp_106, temp_279, temp_279);
    temp_285 = clamp(temp_284, 0.0, 1.0);
    // 0x0009B8: 0xF0F800000000000F Sync
    temp_286 = 0.0;
    temp_287 = 0.0;
    temp_288 = 0.0;
    temp_289 = 0.0;
    temp_290 = 0.0;
    temp_291 = 0.0;
    temp_292 = 0.0;
    temp_293 = 0.0;
    temp_294 = 0.0;
    temp_295 = 0.0;
    temp_296 = 0.0;
    temp_297 = 0.0;
    if (!temp_253)
    {
        // 0x0009C8: 0x5C9807800FF7002C Mov
        temp_298 = 0;
        do
        {
            // 0x0009D0: 0x5C18020002C72F15 Iscadd
            temp_300 = int(temp_206) << 4;
            temp_301 = temp_300 + temp_298;
            // 0x0009D8: 0xE003FF87CFF7FF32 Ipa
            // 0x0009E8: 0x1C00000000172C2C Iadd32i
            temp_302 = temp_298 + 1;
            // 0x0009F0: 0xE003FF87CFF7FF34 Ipa
            // 0x0009F8: 0x3848000000471515 Shl
            temp_303 = temp_301 << 4;
            // 0x000A08: 0xE003FF87CFF7FF33 Ipa
            // 0x000A10: 0x5B6C038002E72C0F Isetp
            temp_299 = uint(temp_302) >= floatBitsToUint(temp_219);
            // 0x000A18: 0xE290000057000000 Ssy
            // 0x000A28: 0xEF94008200071515 Ldc
            temp_304 = temp_303 + 0x2000;
            temp_305 = uint(temp_304) >> 2;
            temp_306 = temp_305 >> 2;
            temp_307 = int(temp_305) & 3;
            temp_308 = fp_c8.data[int(temp_306)][temp_307];
            // 0x000A30: 0x5080000000473232 Mufu
            // 0x000A38: 0x5080000000473434 Mufu
            // 0x000A48: 0x5080000000473333 Mufu
            // 0x000A50: 0xE043FF8D0327FF32 Ipa
            temp_309 = in_attr5.x;
            // 0x000A58: 0xE043FF8D8347FF34 Ipa
            temp_310 = in_attr5.z;
            // 0x000A68: 0xE043FF8D4337FF33 Ipa
            temp_311 = in_attr5.y;
            // 0x000A70: 0x384800000067152B Shl
            temp_312 = floatBitsToInt(temp_308) << 6;
            // 0x000A78: 0xEF95008001072B0C Ldc
            temp_313 = temp_312 + 16;
            temp_314 = uint(temp_313) >> 2;
            temp_315 = temp_314 >> 2;
            temp_316 = int(temp_314) & 3;
            temp_317 = fp_c8.data[int(temp_315)][temp_316];
            temp_318 = int(temp_314) + 1;
            temp_319 = uint(temp_318) >> 2;
            temp_320 = temp_318 & 3;
            temp_321 = fp_c8.data[int(temp_319)][temp_320];
            // 0x000A88: 0xEF95008001872B10 Ldc
            temp_322 = temp_312 + 24;
            temp_323 = uint(temp_322) >> 2;
            temp_324 = temp_323 >> 2;
            temp_325 = int(temp_323) & 3;
            temp_326 = fp_c8.data[int(temp_324)][temp_325];
            temp_327 = int(temp_323) + 1;
            temp_328 = uint(temp_327) >> 2;
            temp_329 = temp_327 & 3;
            temp_330 = fp_c8.data[int(temp_328)][temp_329];
            // 0x000A90: 0xEF95008002072B14 Ldc
            temp_331 = temp_312 + 32;
            temp_332 = uint(temp_331) >> 2;
            temp_333 = temp_332 >> 2;
            temp_334 = int(temp_332) & 3;
            temp_335 = fp_c8.data[int(temp_333)][temp_334];
            temp_336 = int(temp_332) + 1;
            temp_337 = uint(temp_336) >> 2;
            temp_338 = temp_336 & 3;
            temp_339 = fp_c8.data[int(temp_337)][temp_338];
            // 0x000A98: 0x5C58300003270C32 Fadd
            temp_340 = 0.0 - temp_309;
            temp_341 = temp_317 + temp_340;
            // 0x000AA8: 0xEF94008002872B0C Ldc
            temp_342 = temp_312 + 40;
            temp_343 = uint(temp_342) >> 2;
            temp_344 = temp_343 >> 2;
            temp_345 = int(temp_343) & 3;
            temp_346 = fp_c8.data[int(temp_344)][temp_345];
            // 0x000AB0: 0x5C58300003370D33 Fadd
            temp_347 = 0.0 - temp_311;
            temp_348 = temp_321 + temp_347;
            // 0x000AB8: 0x5C58300003471034 Fadd
            temp_349 = 0.0 - temp_310;
            temp_350 = temp_326 + temp_349;
            // 0x000AC8: 0x5C68100003273235 Fmul
            temp_351 = temp_341 * temp_341;
            // 0x000AD0: 0x59A11A0003471111 Ffma
            temp_352 = 0.0 - temp_350;
            temp_353 = fma(temp_330, temp_352, temp_350);
            // 0x000AD8: 0x59A01A8003373335 Ffma
            temp_354 = fma(temp_348, temp_348, temp_351);
            // 0x000AE8: 0x59A01A8001171136 Ffma
            temp_355 = fma(temp_353, temp_353, temp_354);
            // 0x000AF0: 0x508000000057360D Mufu
            temp_356 = inversesqrt(temp_355);
            // 0x000AF8: 0x5080000000873636 Mufu
            temp_357 = sqrt(temp_355);
            // 0x000B08: 0x5C68100000D73210 Fmul
            temp_358 = temp_341 * temp_356;
            // 0x000B10: 0x5C69100001471010 Fmul
            temp_359 = 0.0 - temp_335;
            temp_360 = temp_358 * temp_359;
            // 0x000B18: 0x5C68100000D73314 Fmul
            temp_361 = temp_348 * temp_356;
            // 0x000B28: 0x5C68100000D7110D Fmul
            temp_362 = temp_353 * temp_356;
            // 0x000B30: 0x59A1080001571414 Ffma
            temp_363 = 0.0 - temp_339;
            temp_364 = fma(temp_361, temp_363, temp_360);
            // 0x000B38: 0xEF95008003872B10 Ldc
            temp_365 = temp_312 + 56;
            temp_366 = uint(temp_365) >> 2;
            temp_367 = temp_366 >> 2;
            temp_368 = int(temp_366) & 3;
            temp_369 = fp_c8.data[int(temp_367)][temp_368];
            temp_370 = int(temp_366) + 1;
            temp_371 = uint(temp_370) >> 2;
            temp_372 = temp_370 & 3;
            temp_373 = fp_c8.data[int(temp_371)][temp_372];
            // 0x000B48: 0x010404000007F015 Mov32i
            // 0x000B50: 0x59A10A0000C70D14 Ffma
            temp_374 = 0.0 - temp_346;
            temp_375 = fma(temp_362, temp_374, temp_364);
            // 0x000B58: 0xEF95008003072B0C Ldc
            temp_376 = temp_312 + 48;
            temp_377 = uint(temp_376) >> 2;
            temp_378 = temp_377 >> 2;
            temp_379 = int(temp_377) & 3;
            temp_380 = fp_c8.data[int(temp_378)][temp_379];
            temp_381 = int(temp_377) + 1;
            temp_382 = uint(temp_381) >> 2;
            temp_383 = temp_381 & 3;
            temp_384 = fp_c8.data[int(temp_382)][temp_383];
            // 0x000B68: 0x59A4088001071410 Ffma
            temp_385 = fma(temp_375, temp_369, temp_373);
            temp_386 = clamp(temp_385, 0.0, 1.0);
            // 0x000B70: 0x59A4068003670C36 Ffma
            temp_387 = fma(temp_380, temp_357, temp_384);
            temp_388 = clamp(temp_387, 0.0, 1.0);
            // 0x000B78: 0x33A00AC000073614 Ffma
            temp_389 = fma(temp_388, -2.0, 3.0);
            // 0x000B88: 0x5C68100003673611 Fmul
            temp_390 = temp_388 * temp_388;
            // 0x000B90: 0x33A00AC000071015 Ffma
            temp_391 = fma(temp_386, -2.0, 3.0);
            // 0x000B98: 0x5C68100001071010 Fmul
            temp_392 = temp_386 * temp_386;
            // 0x000BA8: 0x5C68100001171411 Fmul
            temp_393 = temp_389 * temp_390;
            // 0x000BB0: 0x39585042F0073414 Fadd
            temp_394 = abs(temp_350);
            temp_395 = temp_394 + -120.0;
            // 0x000BB8: 0x5C68100001571010 Fmul
            temp_396 = temp_392 * temp_391;
            // 0x000BC8: 0x1EABD4CCCCD71414 Fmul32i
            temp_397 = temp_395 * -0.0500000007;
            temp_398 = clamp(temp_397, 0.0, 1.0);
            // 0x000BD0: 0x5C68100001171010 Fmul
            temp_399 = temp_396 * temp_393;
            // 0x000BD8: 0x36247F9000171111 Xmad
            temp_400 = floatBitsToUint(temp_393) >> 16;
            temp_401 = int(temp_400) << 16;
            // 0x000BE8: 0x5C68100001071410 Fmul
            temp_402 = temp_398 * temp_399;
            // 0x000BF0: 0x5BB383800FF71007 Fsetp
            temp_403 = temp_402 <= 0.0;
            // 0x000BF8: 0x7A05083C0F00FF11 Hadd2
            temp_298 = temp_302;
            temp_404 = uint(temp_401);
            temp_405 = temp_286;
            temp_406 = temp_287;
            temp_407 = temp_288;
            temp_408 = temp_289;
            temp_409 = temp_290;
            temp_410 = temp_291;
            if (temp_403)
            {
                temp_411 = unpackHalf2x16(uint(temp_401)).y;
                temp_412 = packHalf2x16(vec2(1.0, temp_411));
                temp_404 = temp_412;
            }
            // 0x000C08: 0x5D2103902FF71107 Hsetp2
            temp_413 = unpackHalf2x16(temp_404).x;
            temp_414 = temp_413 == 0.0;
            // 0x000C10: 0xF0F800000008000F Sync
            if (temp_414)
            {
                // 0x000C18: 0x5080000000470C0C Mufu
                temp_415 = 1.0 / temp_380;
                // 0x000C28: 0xEF94008002C72B15 Ldc
                temp_416 = temp_312 + 44;
                temp_417 = uint(temp_416) >> 2;
                temp_418 = temp_417 >> 2;
                temp_419 = int(temp_417) & 3;
                temp_420 = fp_c8.data[int(temp_418)][temp_419];
                // 0x000C30: 0x5C69100000C70D0D Fmul
                temp_421 = 0.0 - temp_415;
                temp_422 = temp_384 * temp_421;
                // 0x000C38: 0x5C60138000D73434 Fmnmx
                temp_423 = min(temp_350, temp_422);
                // 0x000C48: 0x5C61178003470D11 Fmnmx
                temp_424 = 0.0 - temp_422;
                temp_425 = max(temp_424, temp_423);
                // 0x000C50: 0x59A01A800117110C Ffma
                temp_426 = fma(temp_425, temp_425, temp_354);
                // 0x000C58: 0x5080000000570C14 Mufu
                temp_427 = inversesqrt(temp_426);
                // 0x000C68: 0x5080000000870C0C Mufu
                temp_428 = sqrt(temp_426);
                // 0x000C70: 0x5C68100001473232 Fmul
                temp_429 = temp_341 * temp_427;
                // 0x000C78: 0x5080000000471515 Mufu
                temp_430 = 1.0 / temp_420;
                // 0x000C88: 0x5C68100001473333 Fmul
                temp_431 = temp_348 * temp_427;
                // 0x000C90: 0x5C68100001471111 Fmul
                temp_432 = temp_425 * temp_427;
                // 0x000C98: 0x5C5810000327230D Fadd
                temp_433 = temp_125 + temp_429;
                // 0x000CA8: 0x5C58100003372214 Fadd
                temp_434 = temp_127 + temp_431;
                // 0x000CB0: 0x5C58100001171634 Fadd
                temp_435 = temp_129 + temp_432;
                // 0x000CB8: 0x5C68100003270E36 Fmul
                temp_436 = temp_70 * temp_429;
                // 0x000CC8: 0x5C68100000D70D35 Fmul
                temp_437 = temp_433 * temp_433;
                // 0x000CD0: 0x51A0060400471515 Ffma
                temp_438 = fma(temp_430, temp_428, fp_c1.data[1].x);
                // 0x000CD8: 0x59A01B0003370036 Ffma
                temp_439 = fma(temp_69, temp_431, temp_436);
                // 0x000CE8: 0x59A01A8001471435 Ffma
                temp_440 = fma(temp_434, temp_434, temp_437);
                // 0x000CF0: 0x59A01B0001171236 Ffma
                temp_441 = fma(temp_68, temp_432, temp_439);
                // 0x000CF8: 0x59A01A8003473435 Ffma
                temp_442 = fma(temp_435, temp_435, temp_440);
                // 0x000D08: 0x5080000000573535 Mufu
                temp_443 = inversesqrt(temp_442);
                // 0x000D10: 0x5C68100003570D0D Fmul
                temp_444 = temp_433 * temp_443;
                // 0x000D18: 0x5C68100003571414 Fmul
                temp_445 = temp_434 * temp_443;
                // 0x000D28: 0x5C68100003573434 Fmul
                temp_446 = temp_435 * temp_443;
                // 0x000D30: 0x01040DF760C7F035 Mov32i
                // 0x000D38: 0x5C68100000D73232 Fmul
                temp_447 = temp_429 * temp_444;
                // 0x000D48: 0x5C68100000D70E0D Fmul
                temp_448 = temp_70 * temp_444;
                // 0x000D50: 0x59A0190001473332 Ffma
                temp_449 = fma(temp_431, temp_445, temp_447);
                // 0x000D58: 0x5080000000471533 Mufu
                temp_450 = 1.0 / temp_438;
                // 0x000D68: 0x59A0068001470014 Ffma
                temp_451 = fma(temp_69, temp_445, temp_448);
                // 0x000D70: 0xEF95008000072B0C Ldc
                temp_452 = uint(temp_312) >> 2;
                temp_453 = temp_452 >> 2;
                temp_454 = int(temp_452) & 3;
                temp_455 = fp_c8.data[int(temp_453)][temp_454];
                temp_456 = int(temp_452) + 1;
                temp_457 = uint(temp_456) >> 2;
                temp_458 = temp_456 & 3;
                temp_459 = fp_c8.data[int(temp_457)][temp_458];
                // 0x000D78: 0x59A4190003471132 Ffma
                temp_460 = fma(temp_432, temp_446, temp_449);
                temp_461 = clamp(temp_460, 0.0, 1.0);
                // 0x000D88: 0xEF94008000872B2B Ldc
                temp_462 = temp_312 + 8;
                temp_463 = uint(temp_462) >> 2;
                temp_464 = temp_463 >> 2;
                temp_465 = int(temp_463) & 3;
                temp_466 = fp_c8.data[int(temp_464)][temp_465];
                // 0x000D90: 0x51A4140400172811 Ffma
                temp_467 = fma(temp_105, temp_105, fp_c1.data[0].y);
                temp_468 = clamp(temp_467, 0.0, 1.0);
                // 0x000D98: 0x59A40A0003471214 Ffma
                temp_469 = fma(temp_68, temp_446, temp_451);
                temp_470 = clamp(temp_469, 0.0, 1.0);
                // 0x000DA8: 0x1E23FB3333373333 Fmul32i
                temp_471 = temp_450 * 1.39999998;
                // 0x000DB0: 0x49A21A8400073215 Ffma
                temp_472 = fma(temp_461, fp_c1.data[0].x, -6.98316002);
                // 0x000DB8: 0x5C68100001171134 Fmul
                temp_473 = temp_468 * temp_468;
                // 0x000DC8: 0x5C68100003373333 Fmul
                temp_474 = temp_471 * temp_471;
                // 0x000DD0: 0x5C68100001573232 Fmul
                temp_475 = temp_461 * temp_472;
                // 0x000DD8: 0x59A20A0001473434 Ffma
                temp_476 = 0.0 - temp_470;
                temp_477 = fma(temp_473, temp_470, temp_476);
                // 0x000DE8: 0x5C5C30000FF73615 Fadd
                temp_478 = temp_441 + -0.0;
                temp_479 = clamp(temp_478, 0.0, 1.0);
                // 0x000DF0: 0x59A1198003373633 Ffma
                temp_480 = 0.0 - temp_474;
                temp_481 = fma(temp_441, temp_480, temp_474);
                // 0x000DF8: 0x5C90008003270032 Rro
                // 0x000E08: 0x51A01A0400271414 Ffma
                temp_482 = fma(temp_470, temp_477, fp_c1.data[0].z);
                // 0x000E10: 0x5080000000273232 Mufu
                temp_483 = exp2(temp_475);
                // 0x000E18: 0x59A10A8001573134 Ffma
                temp_484 = 0.0 - temp_479;
                temp_485 = fma(temp_114, temp_484, temp_479);
                // 0x000E28: 0x5080000000471414 Mufu
                temp_486 = 1.0 / temp_482;
                // 0x000E30: 0x5C5C100003373633 Fadd
                temp_487 = temp_441 + temp_481;
                temp_488 = clamp(temp_487, 0.0, 1.0);
                // 0x000E38: 0x5C58100003473134 Fadd
                temp_489 = temp_114 + temp_485;
                // 0x000E48: 0x5080000000473434 Mufu
                temp_490 = 1.0 / temp_489;
                // 0x000E50: 0x5C68100001471114 Fmul
                temp_491 = temp_468 * temp_486;
                // 0x000E58: 0x59A1190003271911 Ffma
                temp_492 = 0.0 - temp_483;
                temp_493 = fma(temp_121, temp_492, temp_483);
                // 0x000E68: 0x5C68100000C7100C Fmul
                temp_494 = temp_402 * temp_455;
                // 0x000E70: 0x5C68100000D7100D Fmul
                temp_495 = temp_402 * temp_459;
                // 0x000E78: 0x5C68100001471414 Fmul
                temp_496 = temp_491 * temp_491;
                // 0x000E88: 0x5C68100003473034 Fmul
                temp_497 = temp_197 * temp_490;
                // 0x000E90: 0x5C58100001171911 Fadd
                temp_498 = temp_121 + temp_493;
                // 0x000E98: 0x5C68100002B7102B Fmul
                temp_499 = temp_402 * temp_466;
                // 0x000EA8: 0x59A1190003271A10 Ffma
                temp_500 = 0.0 - temp_483;
                temp_501 = fma(temp_226, temp_500, temp_483);
                // 0x000EB0: 0x59A1190003271832 Ffma
                temp_502 = 0.0 - temp_483;
                temp_503 = fma(temp_117, temp_502, temp_483);
                // 0x000EB8: 0x5C68100003471414 Fmul
                temp_504 = temp_496 * temp_497;
                // 0x000EC8: 0x5C68100000D71111 Fmul
                temp_505 = temp_498 * temp_495;
                // 0x000ED0: 0x5C68100003370D0D Fmul
                temp_506 = temp_495 * temp_488;
                // 0x000ED8: 0x5C58100001071A10 Fadd
                temp_507 = temp_226 + temp_501;
                // 0x000EE8: 0x5C58100003271832 Fadd
                temp_508 = temp_117 + temp_503;
                // 0x000EF0: 0x5C68100001471514 Fmul
                temp_509 = temp_479 * temp_504;
                // 0x000EF8: 0x49A0030400670D06 Ffma
                temp_510 = fma(temp_506, fp_c1.data[1].z, temp_286);
                // 0x000F08: 0x5C68100000C71015 Fmul
                temp_511 = temp_507 * temp_494;
                // 0x000F10: 0x5C68100002B73232 Fmul
                temp_512 = temp_508 * temp_499;
                // 0x000F18: 0x5C68100003370C0C Fmul
                temp_513 = temp_494 * temp_488;
                // 0x000F28: 0x5C68100003372B2B Fmul
                temp_514 = temp_499 * temp_488;
                // 0x000F30: 0x5C68100001471110 Fmul
                temp_515 = temp_505 * temp_509;
                // 0x000F38: 0x5C68100001471515 Fmul
                temp_516 = temp_511 * temp_509;
                // 0x000F48: 0x5C68100001473232 Fmul
                temp_517 = temp_512 * temp_509;
                // 0x000F50: 0x49A0038400670C07 Ffma
                temp_518 = fma(temp_513, fp_c1.data[1].z, temp_287);
                // 0x000F58: 0x49A0028400672B05 Ffma
                temp_519 = fma(temp_514, fp_c1.data[1].z, temp_288);
                // 0x000F68: 0x49A0048400571009 Ffma
                temp_520 = fma(temp_515, fp_c1.data[1].y, temp_289);
                // 0x000F70: 0x49A005040057150A Ffma
                temp_521 = fma(temp_516, fp_c1.data[1].y, temp_290);
                // 0x000F78: 0x49A0040400573208 Ffma
                temp_522 = fma(temp_517, fp_c1.data[1].y, temp_291);
                // 0x000F88: 0xF0F800000007000F Sync
                temp_405 = temp_510;
                temp_406 = temp_518;
                temp_407 = temp_519;
                temp_408 = temp_520;
                temp_409 = temp_521;
                temp_410 = temp_522;
            }
            // 0x000F90: 0xE2400FFFA389000F Bra
            temp_286 = temp_405;
            temp_287 = temp_406;
            temp_288 = temp_407;
            temp_289 = temp_408;
            temp_290 = temp_409;
            temp_291 = temp_410;
            temp_292 = temp_406;
            temp_293 = temp_405;
            temp_294 = temp_408;
            temp_295 = temp_407;
            temp_296 = temp_410;
            temp_297 = temp_409;
        }
        while (!temp_299);
        // 0x000F98: 0xF0F800000007000F Sync
    }
    // 0x000FA8: 0x5C62578002A72D0D Fmnmx
    temp_523 = abs(temp_179);
    temp_524 = abs(temp_252);
    temp_525 = max(temp_523, temp_524);
    // 0x000FB0: 0xE003FF87CFF7FF2B Ipa
    // 0x000FB8: 0x5C62578000070E0C Fmnmx
    temp_526 = abs(temp_70);
    temp_527 = abs(temp_69);
    temp_528 = max(temp_526, temp_527);
    // 0x000FC8: 0xEF4410000007FF32 Ldl
    temp_529 = uintBitsToFloat(local_memory[0]);
    // 0x000FD0: 0x010000000017F014 Mov32i
    // 0x000FD8: 0x3868104080072823 Fmul
    temp_530 = temp_105 * 4.0;
    // 0x000FE8: 0x4C98079C0207002F Mov
    // 0x000FF0: 0x5C60578000D7170D Fmnmx
    temp_531 = abs(temp_182);
    temp_532 = max(temp_531, temp_525);
    // 0x000FF8: 0x5C60578000C7120C Fmnmx
    temp_533 = abs(temp_68);
    temp_534 = max(temp_533, temp_528);
    // 0x001008: 0x5080000000470D10 Mufu
    temp_535 = 1.0 / temp_532;
    // 0x001010: 0x49A009980A170713 Ffma
    temp_536 = fma(temp_292, fp_c6.data[40].y, temp_247);
    // 0x001018: 0x5080000000470C11 Mufu
    temp_537 = 1.0 / temp_534;
    // 0x001028: 0x5C68100001072D15 Fmul
    temp_538 = temp_179 * temp_535;
    // 0x001030: 0x5C68100001072A16 Fmul
    temp_539 = temp_252 * temp_535;
    // 0x001038: 0x5080000000472B2B Mufu
    // 0x001048: 0x5C69100001071717 Fmul
    temp_540 = 0.0 - temp_535;
    temp_541 = temp_182 * temp_540;
    // 0x001050: 0x5C69100001171212 Fmul
    temp_542 = 0.0 - temp_537;
    temp_543 = temp_68 * temp_542;
    // 0x001058: 0x5C68100001170E10 Fmul
    temp_544 = temp_70 * temp_537;
    // 0x001068: 0x5C68100001170011 Fmul
    temp_545 = temp_69 * temp_537;
    // 0x001070: 0x38681040E007282A Fmul
    temp_546 = temp_105 * 7.0;
    // 0x001078: 0xC0BA0163EFF7100C Tex
    temp_547 = textureLod(fp_t_tcb_16, vec3(temp_544, temp_545, temp_543), 0.0).xyz;
    temp_548 = temp_547.x;
    temp_549 = temp_547.y;
    temp_550 = temp_547.z;
    // 0x001088: 0x5C98078001270022 Mov
    // 0x001090: 0xC1BA0143F2A71414 Tex
    temp_551 = textureLod(fp_t_tcb_14, vec4(temp_538, temp_539, temp_541, float(1)), temp_546).xyz;
    temp_552 = temp_551.x;
    temp_553 = temp_551.y;
    temp_554 = temp_551.z;
    // 0x001098: 0xD9A2018232271010 Texs
    temp_555 = textureLod(fp_t_tcb_18, vec3(temp_544, temp_545, temp_543), temp_530).xyz;
    temp_556 = temp_555.x;
    temp_557 = temp_555.y;
    temp_558 = temp_555.z;
    // 0x0010A8: 0xE043FF9102B7FF2C Ipa
    temp_559 = in_attr9.x;
    // 0x0010B0: 0xE043FF9142B7FF2D Ipa
    temp_560 = in_attr9.y;
    // 0x0010B8: 0xE043FF9182B7FF2E Ipa
    temp_561 = in_attr9.z;
    // 0x0010C8: 0xDEBA0000C2F72C2C TexB
    temp_562 = texture(fp_t_cb7_20, vec3(temp_559, temp_560, temp_561)).x;
    // 0x0010D0: 0x3859103F80072828 Fadd
    temp_563 = 0.0 - temp_105;
    temp_564 = temp_563 + 1.0;
    // 0x0010D8: 0x3859103F80072707 Fadd
    temp_565 = 0.0 - temp_164;
    temp_566 = temp_565 + 1.0;
    // 0x0010E8: 0x49A007980A17060F Ffma
    temp_567 = fma(temp_293, fp_c6.data[40].y, temp_250);
    // 0x0010F0: 0x49A01B980A170937 Ffma
    temp_568 = fma(temp_294, fp_c6.data[40].y, temp_275);
    // 0x0010F8: 0x49A005980A17050B Ffma
    temp_569 = fma(temp_295, fp_c6.data[40].y, temp_261);
    // 0x001108: 0x010410676C97F012 Mov32i
    // 0x001110: 0x5C68100002872806 Fmul
    temp_570 = temp_564 * temp_564;
    // 0x001118: 0x4C68101809070709 Fmul
    temp_571 = temp_566 * fp_c6.data[36].x;
    // 0x001128: 0x5080000000370707 Mufu
    temp_572 = log2(temp_566);
    // 0x001130: 0x1E23E468DB972705 Fmul32i
    temp_573 = temp_164 * 0.193900004;
    // 0x001138: 0x5080400000370909 Mufu
    temp_574 = abs(temp_571);
    temp_575 = log2(temp_574);
    // 0x001148: 0x4C9807980B470017 Mov
    // 0x001150: 0x49A014980A170829 Ffma
    temp_576 = fma(temp_296, fp_c6.data[40].y, temp_276);
    // 0x001158: 0x5C68100000670606 Fmul
    temp_577 = temp_570 * temp_570;
    // 0x001168: 0x49A0090400B72712 Ffma
    temp_578 = fma(temp_164, fp_c1.data[2].w, 8.40400028);
    // 0x001170: 0x0103E2CD9E87F028 Mov32i
    // 0x001178: 0x0103F0000007F031 Mov32i
    // 0x001188: 0xF0F0000034470000 Depbar
    // 0x001190: 0x51A20B980B471C1C Ffma
    temp_579 = 0.0 - fp_c6.data[45].x;
    temp_580 = fma(temp_92, fp_c6.data[45].x, temp_579);
    // 0x001198: 0x51A20B980B471D1D Ffma
    temp_581 = 0.0 - fp_c6.data[45].x;
    temp_582 = fma(temp_93, fp_c6.data[45].x, temp_581);
    // 0x0011A8: 0x49A0028400770608 Ffma
    temp_583 = fma(temp_577, fp_c1.data[1].w, temp_573);
    // 0x0011B0: 0x51A20B980B470105 Ffma
    temp_584 = 0.0 - fp_c6.data[45].x;
    temp_585 = fma(temp_94, fp_c6.data[45].x, temp_584);
    // 0x0011B8: 0x51A0090400C72712 Ffma
    temp_586 = fma(temp_164, temp_578, fp_c1.data[3].x);
    // 0x0011C8: 0x4C68101808970707 Fmul
    temp_587 = temp_572 * fp_c6.data[34].y;
    // 0x0011D0: 0x4C68101809170909 Fmul
    temp_588 = temp_575 * fp_c6.data[36].y;
    // 0x0011D8: 0x0104066978D7F001 Mov32i
    // 0x0011E8: 0x088BF05D63970808 Fadd32i
    temp_589 = temp_583 + -0.522800028;
    // 0x0011F0: 0x49A2140400E70628 Ffma
    temp_590 = fma(temp_577, fp_c1.data[3].z, -0.168799996);
    // 0x0011F8: 0x51A0090400D72722 Ffma
    temp_591 = fma(temp_164, temp_586, fp_c1.data[3].y);
    // 0x001208: 0x5C90008000770007 Rro
    // 0x001210: 0x4C98079809570012 Mov
    // 0x001218: 0x5C90008000970009 Rro
    // 0x001228: 0x49A2008400870601 Ffma
    temp_592 = fma(temp_577, fp_c1.data[2].x, -3.60299993);
    // 0x001230: 0x5084000000270917 Mufu
    temp_593 = exp2(temp_588);
    temp_594 = clamp(temp_593, 0.0, 1.0);
    // 0x001238: 0x5C68100000872727 Fmul
    temp_595 = temp_164 * temp_589;
    // 0x001248: 0x5084000000270708 Mufu
    temp_596 = exp2(temp_587);
    temp_597 = clamp(temp_596, 0.0, 1.0);
    // 0x001250: 0x4C9807980097002D Mov
    // 0x001258: 0x4C58101408171212 Fadd
    temp_598 = fp_c6.data[37].y + fp_c5.data[32].y;
    // 0x001268: 0x32A018BF00070000 Ffma
    temp_599 = fma(temp_69, 0.5, 0.5);
    // 0x001270: 0x5C68100002870628 Fmul
    temp_600 = temp_577 * temp_590;
    // 0x001278: 0x51A0008400970601 Ffma
    temp_601 = fma(temp_577, temp_592, fp_c1.data[2].y);
    // 0x001288: 0x4C9807980087002A Mov
    // 0x001290: 0x4C98079800A7002E Mov
    // 0x001298: 0x4C68101808772121 Fmul
    temp_602 = temp_89 * fp_c6.data[33].w;
    // 0x0012A8: 0x5C60138002872222 Fmnmx
    temp_603 = min(temp_591, temp_600);
    // 0x0012B0: 0x59A0138000170627 Ffma
    temp_604 = fma(temp_577, temp_601, temp_595);
    // 0x0012B8: 0x4C59101800572D01 Fadd
    temp_605 = 0.0 - fp_c6.data[2].y;
    temp_606 = temp_605 + fp_c6.data[1].y;
    // 0x0012C8: 0x5C68100001771212 Fmul
    temp_607 = temp_598 * temp_594;
    // 0x0012D0: 0x4C98079808670017 Mov
    // 0x0012D8: 0x4C68101808870806 Fmul
    temp_608 = temp_597 * fp_c6.data[34].x;
    // 0x0012E8: 0x4C59101800472A09 Fadd
    temp_609 = 0.0 - fp_c6.data[2].x;
    temp_610 = temp_609 + fp_c6.data[1].x;
    // 0x0012F0: 0x4C59101800672E07 Fadd
    temp_611 = 0.0 - fp_c6.data[2].z;
    temp_612 = temp_611 + fp_c6.data[1].z;
    // 0x0012F8: 0x51A0001800970108 Ffma
    temp_613 = fma(temp_606, temp_599, fp_c6.data[2].y);
    // 0x001308: 0x5C5C30000FF7222A Fadd
    temp_614 = temp_603 + -0.0;
    temp_615 = clamp(temp_614, 0.0, 1.0);
    // 0x001310: 0x4C68101808D71222 Fmul
    temp_616 = temp_607 * fp_c6.data[35].y;
    // 0x001318: 0x51A00B9808670601 Ffma
    temp_617 = fma(temp_608, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001328: 0xE04BFF9042B7FF06 Ipa
    temp_618 = in_attr8.y;
    temp_619 = clamp(temp_618, 0.0, 1.0);
    // 0x001330: 0x51A0001800870909 Ffma
    temp_620 = fma(temp_610, temp_599, fp_c6.data[2].x);
    // 0x001338: 0x51A0001800A70707 Ffma
    temp_621 = fma(temp_612, temp_599, fp_c6.data[2].z);
    // 0x001348: 0x386C104248071900 Fmul
    temp_622 = temp_121 * 50.0;
    temp_623 = clamp(temp_622, 0.0, 1.0);
    // 0x001350: 0x4C68101808C71217 Fmul
    temp_624 = temp_607 * fp_c6.data[35].x;
    // 0x001358: 0x49A1111408272228 Ffma
    temp_625 = 0.0 - fp_c5.data[32].z;
    temp_626 = fma(temp_616, temp_625, temp_616);
    // 0x001368: 0x4C5C100400A72727 Fadd
    temp_627 = temp_604 + fp_c1.data[2].z;
    temp_628 = clamp(temp_627, 0.0, 1.0);
    // 0x001370: 0x4C68101808E71212 Fmul
    temp_629 = temp_607 * fp_c6.data[35].z;
    // 0x001378: 0x5C68100002A7002F Fmul
    temp_630 = temp_623 * temp_615;
    // 0x001388: 0x49A01B9408272200 Ffma
    temp_631 = fma(temp_616, fp_c5.data[32].z, temp_568);
    // 0x001390: 0x49A10B9408271722 Ffma
    temp_632 = 0.0 - fp_c5.data[32].z;
    temp_633 = fma(temp_624, temp_632, temp_624);
    // 0x001398: 0x5C58300002A7272A Fadd
    temp_634 = 0.0 - temp_615;
    temp_635 = temp_628 + temp_634;
    // 0x0013A8: 0x49A0149408271229 Ffma
    temp_636 = fma(temp_629, fp_c5.data[32].z, temp_576);
    // 0x0013B0: 0x49A1091408271212 Ffma
    temp_637 = 0.0 - fp_c5.data[32].z;
    temp_638 = fma(temp_629, temp_637, temp_629);
    // 0x0013B8: 0x5C58100002870F0F Fadd
    temp_639 = temp_567 + temp_626;
    // 0x0013C8: 0x5C58100002271313 Fadd
    temp_640 = temp_536 + temp_633;
    // 0x0013D0: 0x59A0178002A71919 Ffma
    temp_641 = fma(temp_121, temp_635, temp_630);
    // 0x0013D8: 0x59A0178002A71818 Ffma
    temp_642 = fma(temp_117, temp_635, temp_630);
    // 0x0013E8: 0x5C58100001270B0B Fadd
    temp_643 = temp_569 + temp_638;
    // 0x0013F0: 0xF0F0000034370000 Depbar
    // 0x0013F8: 0x49A019180A170A0A Ffma
    temp_644 = fma(temp_297, fp_c6.data[40].y, temp_529);
    // 0x001408: 0x49A005140827170A Ffma
    temp_645 = fma(temp_624, fp_c5.data[32].z, temp_644);
    // 0x001410: 0x59A0178002A71A17 Ffma
    temp_646 = fma(temp_226, temp_635, temp_630);
    // 0x001418: 0xF0F0000034270000 Depbar
    // 0x001428: 0x49A006040067090C Ffma
    temp_647 = fma(temp_620, fp_c1.data[1].z, temp_548);
    // 0x001430: 0x49A0068400670808 Ffma
    temp_648 = fma(temp_613, fp_c1.data[1].z, temp_549);
    // 0x001438: 0xE043FF9002B7FF0D Ipa
    temp_649 = in_attr8.x;
    // 0x001448: 0x49A0070400670707 Ffma
    temp_650 = fma(temp_621, fp_c1.data[1].z, temp_550);
    // 0x001450: 0xE043FF8C82B7FF2B Ipa
    temp_651 = in_attr4.z;
    // 0x001458: 0x59A2060000171E1E Ffma
    temp_652 = 0.0 - temp_647;
    temp_653 = fma(temp_86, temp_617, temp_652);
    // 0x001468: 0x59A2040000171F1F Ffma
    temp_654 = 0.0 - temp_648;
    temp_655 = fma(temp_87, temp_617, temp_654);
    // 0x001470: 0x010404000007F009 Mov32i
    // 0x001478: 0xF0F0000034170000 Depbar
    // 0x001488: 0x49A0081808571410 Ffma
    temp_656 = fma(temp_552, fp_c6.data[33].y, temp_556);
    // 0x001490: 0x49A0119808571616 Ffma
    temp_657 = fma(temp_554, fp_c6.data[33].y, temp_558);
    // 0x001498: 0x59A2038000172001 Ffma
    temp_658 = 0.0 - temp_650;
    temp_659 = fma(temp_88, temp_617, temp_658);
    // 0x0014A8: 0x59A0060002171E1E Ffma
    temp_660 = fma(temp_653, temp_602, temp_647);
    // 0x0014B0: 0x59A0040002171F08 Ffma
    temp_661 = fma(temp_655, temp_602, temp_648);
    // 0x0014B8: 0x33A004C000070609 Ffma
    temp_662 = fma(temp_619, -2.0, 3.0);
    // 0x0014C8: 0x5C68100000670606 Fmul
    temp_663 = temp_619 * temp_619;
    // 0x0014D0: 0x59A0148001671818 Ffma
    temp_664 = fma(temp_642, temp_657, temp_636);
    // 0x0014D8: 0x59A0038002170101 Ffma
    temp_665 = fma(temp_659, temp_602, temp_650);
    // 0x0014E8: 0x5C58100001371E13 Fadd
    temp_666 = temp_660 + temp_640;
    // 0x0014F0: 0x5C58100000F70808 Fadd
    temp_667 = temp_661 + temp_639;
    // 0x0014F8: 0x49A0089808571507 Ffma
    temp_668 = fma(temp_553, fp_c6.data[33].y, temp_557);
    // 0x001508: 0x5C68100000670906 Fmul
    temp_669 = temp_662 * temp_663;
    // 0x001510: 0x59A0050001071709 Ffma
    temp_670 = fma(temp_646, temp_656, temp_645);
    // 0x001518: 0x5C58100000B7010B Fadd
    temp_671 = temp_665 + temp_643;
    // 0x001528: 0x59A1098001372513 Ffma
    temp_672 = 0.0 - temp_666;
    temp_673 = fma(temp_7, temp_672, temp_666);
    // 0x001530: 0x59A1040000872501 Ffma
    temp_674 = 0.0 - temp_667;
    temp_675 = fma(temp_7, temp_674, temp_667);
    // 0x001538: 0x59A0000000771907 Ffma
    temp_676 = fma(temp_641, temp_668, temp_631);
    // 0x001548: 0x4C9807980297000A Mov
    // 0x001550: 0x4C68101803770606 Fmul
    temp_677 = temp_669 * fp_c6.data[13].w;
    // 0x001558: 0x59A1058000B72525 Ffma
    temp_678 = 0.0 - temp_671;
    temp_679 = fma(temp_7, temp_678, temp_671);
    // 0x001568: 0x59A0048001372609 Ffma
    temp_680 = fma(temp_211, temp_673, temp_670);
    // 0x001570: 0x4C98079802A7000B Mov
    // 0x001578: 0x59A0038000172401 Ffma
    temp_681 = fma(temp_115, temp_675, temp_676);
    // 0x001588: 0x4C98079802870007 Mov
    // 0x001590: 0x51A0051802971D0A Ffma
    temp_682 = fma(temp_582, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001598: 0x59A00C0002571B18 Ffma
    temp_683 = fma(temp_106, temp_679, temp_664);
    // 0x0015A8: 0x5C68100000970404 Fmul
    temp_684 = temp_281 * temp_680;
    // 0x0015B0: 0x4C98079406C70009 Mov
    // 0x0015B8: 0x5C68100000170303 Fmul
    temp_685 = temp_283 * temp_681;
    // 0x0015C8: 0x49A506980BC72C0D Ffma
    temp_686 = 0.0 - fp_c6.data[47].x;
    temp_687 = fma(temp_562, temp_686, temp_649);
    temp_688 = clamp(temp_687, 0.0, 1.0);
    // 0x0015D0: 0x51A0039802871C07 Ffma
    temp_689 = fma(temp_580, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0015D8: 0x5080000000370D0D Mufu
    temp_690 = log2(temp_688);
    // 0x0015E8: 0x5C68100001870202 Fmul
    temp_691 = temp_285 * temp_683;
    // 0x0015F0: 0x49A0021403070904 Ffma
    temp_692 = fma(fp_c5.data[27].x, fp_c5.data[12].x, temp_684);
    // 0x0015F8: 0x49A0019403170903 Ffma
    temp_693 = fma(fp_c5.data[27].x, fp_c5.data[12].y, temp_685);
    // 0x001608: 0x51A0059802A70505 Ffma
    temp_694 = fma(temp_585, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001610: 0x49A0011403270902 Ffma
    temp_695 = fma(fp_c5.data[27].x, fp_c5.data[12].z, temp_691);
    // 0x001618: 0x4C59101402C70401 Fadd
    temp_696 = 0.0 - temp_692;
    temp_697 = temp_696 + fp_c5.data[11].x;
    // 0x001628: 0x4C59101402D70308 Fadd
    temp_698 = 0.0 - temp_693;
    temp_699 = temp_698 + fp_c5.data[11].y;
    // 0x001630: 0x4C68101803170D09 Fmul
    temp_700 = temp_690 * fp_c6.data[12].y;
    // 0x001638: 0x49A0021406F70100 Ffma
    temp_701 = fma(temp_697, fp_c5.data[27].w, temp_692);
    // 0x001648: 0x49A0019406F70801 Ffma
    temp_702 = fma(temp_699, fp_c5.data[27].w, temp_693);
    // 0x001650: 0x4C59101402E70204 Fadd
    temp_703 = 0.0 - temp_695;
    temp_704 = temp_703 + fp_c5.data[11].z;
    // 0x001658: 0x5C9000800097000B Rro
    // 0x001668: 0x5C58300000770008 Fadd
    temp_705 = 0.0 - temp_689;
    temp_706 = temp_701 + temp_705;
    // 0x001670: 0x5C58300000A70103 Fadd
    temp_707 = 0.0 - temp_682;
    temp_708 = temp_702 + temp_707;
    // 0x001678: 0x49A0011406F70402 Ffma
    temp_709 = fma(temp_704, fp_c5.data[27].w, temp_695);
    // 0x001688: 0x49A2031803570609 Ffma
    temp_710 = 0.0 - temp_677;
    temp_711 = fma(temp_677, fp_c6.data[13].y, temp_710);
    // 0x001690: 0x49A003980BF70808 Ffma
    temp_712 = fma(temp_706, fp_c6.data[47].w, temp_689);
    // 0x001698: 0x49A005180BF70303 Ffma
    temp_713 = fma(temp_708, fp_c6.data[47].w, temp_682);
    // 0x0016A8: 0x5C58300000570204 Fadd
    temp_714 = 0.0 - temp_694;
    temp_715 = temp_709 + temp_714;
    // 0x0016B0: 0x5C60178000870708 Fmnmx
    temp_716 = max(temp_689, temp_712);
    // 0x0016B8: 0x49A2031803470607 Ffma
    temp_717 = 0.0 - temp_677;
    temp_718 = fma(temp_677, fp_c6.data[13].x, temp_717);
    // 0x0016C8: 0x5C60178000370A03 Fmnmx
    temp_719 = max(temp_682, temp_713);
    // 0x0016D0: 0x5080000000270B0A Mufu
    temp_720 = exp2(temp_700);
    // 0x0016D8: 0x49A002980BF70404 Ffma
    temp_721 = fma(temp_715, fp_c6.data[47].w, temp_694);
    // 0x0016E8: 0x49A2031803670606 Ffma
    temp_722 = 0.0 - temp_677;
    temp_723 = fma(temp_677, fp_c6.data[13].z, temp_722);
    // 0x0016F0: 0x59A0040000770807 Ffma
    temp_724 = fma(temp_716, temp_718, temp_716);
    // 0x0016F8: 0x59A0018000970308 Ffma
    temp_725 = fma(temp_719, temp_711, temp_719);
    // 0x001708: 0x5C60178000470504 Fmnmx
    temp_726 = max(temp_694, temp_721);
    // 0x001710: 0x5C59100000770003 Fadd
    temp_727 = 0.0 - temp_701;
    temp_728 = temp_727 + temp_724;
    // 0x001718: 0x0103F8000007F007 Mov32i
    // 0x001728: 0x59A0020000670405 Ffma
    temp_729 = fma(temp_726, temp_723, temp_726);
    // 0x001730: 0x4C68101802B70A06 Fmul
    temp_730 = temp_720 * fp_c6.data[10].w;
    // 0x001738: 0x5C59100000870104 Fadd
    temp_731 = 0.0 - temp_702;
    temp_732 = temp_731 + temp_725;
    // 0x001748: 0x5C59100000570205 Fadd
    temp_733 = 0.0 - temp_709;
    temp_734 = temp_733 + temp_729;
    // 0x001750: 0x59A0000000670300 Ffma
    temp_735 = fma(temp_728, temp_730, temp_701);
    // 0x001758: 0x59A0008000670401 Ffma
    temp_736 = fma(temp_732, temp_730, temp_702);
    // 0x001768: 0x4C58100C03872B04 Fadd
    temp_737 = temp_651 + fp_c3.data[14].x;
    // 0x001770: 0x0103F8000007F003 Mov32i
    // 0x001778: 0x59A0010000670502 Ffma
    temp_738 = fma(temp_734, temp_730, temp_709);
    // 0x001788: 0x0103E8000007F005 Mov32i
    // 0x001790: 0x5C9807800FF70006 Mov
    // 0x001798: 0x49A37F8C03C70404 Ffma
    temp_739 = 0.0 - fp_c3.data[15].x;
    temp_740 = fma(temp_737, temp_739, -0.0);
    // 0x0017A8: 0xE30000000007000F Exit
    out_attr0.x = temp_735;
    out_attr0.y = temp_736;
    out_attr0.z = temp_738;
    out_attr0.w = 1.0;
    out_attr1.x = temp_740;
    out_attr1.y = 0.25;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
