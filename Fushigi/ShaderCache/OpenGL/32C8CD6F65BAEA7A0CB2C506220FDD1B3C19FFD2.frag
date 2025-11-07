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
    precise vec3 temp_90;
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
    uint temp_186;
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
    int temp_197;
    precise float temp_198;
    int temp_199;
    uint temp_200;
    uint temp_201;
    int temp_202;
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
    bool temp_249;
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
    int temp_294;
    bool temp_295;
    int temp_296;
    int temp_297;
    int temp_298;
    int temp_299;
    int temp_300;
    uint temp_301;
    uint temp_302;
    int temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    precise float temp_307;
    int temp_308;
    int temp_309;
    uint temp_310;
    uint temp_311;
    int temp_312;
    precise float temp_313;
    int temp_314;
    uint temp_315;
    int temp_316;
    precise float temp_317;
    int temp_318;
    uint temp_319;
    uint temp_320;
    int temp_321;
    precise float temp_322;
    int temp_323;
    uint temp_324;
    int temp_325;
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
    int temp_361;
    uint temp_362;
    uint temp_363;
    int temp_364;
    precise float temp_365;
    int temp_366;
    uint temp_367;
    int temp_368;
    precise float temp_369;
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
    uint temp_396;
    int temp_397;
    precise float temp_398;
    bool temp_399;
    uint temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    precise float temp_405;
    precise float temp_406;
    precise float temp_407;
    uint temp_408;
    precise float temp_409;
    bool temp_410;
    precise float temp_411;
    int temp_412;
    uint temp_413;
    uint temp_414;
    int temp_415;
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
    uint temp_447;
    uint temp_448;
    int temp_449;
    precise float temp_450;
    int temp_451;
    uint temp_452;
    int temp_453;
    precise float temp_454;
    precise float temp_455;
    int temp_456;
    uint temp_457;
    uint temp_458;
    int temp_459;
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
    precise vec3 temp_546;
    precise float temp_547;
    precise float temp_548;
    precise float temp_549;
    precise float temp_550;
    precise float temp_551;
    precise float temp_552;
    precise float temp_553;
    precise float temp_554;
    precise float temp_555;
    precise vec3 temp_556;
    precise float temp_557;
    precise float temp_558;
    precise float temp_559;
    precise vec3 temp_560;
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
    // 0x000008: 0x0103F0000007F02E Mov32i
    // 0x000010: 0xE003FF87CFF7FF0C Ipa
    // 0x000018: 0x5080000000470C0C Mufu
    // 0x000028: 0xE043FF8E00C7FF0E Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E40C7FF10 Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xD830026FF1070E02 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xD8240360D1070E04 Texs
    temp_5 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    // 0x000050: 0xD822024001070E1E Texs
    temp_9 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    temp_12 = temp_9.z;
    // 0x000058: 0xE043FF8A00C7FF01 Ipa
    temp_13 = in_attr2.x;
    // 0x000068: 0xE043FF8900C7FF09 Ipa
    temp_14 = in_attr1.x;
    // 0x000070: 0xE043FF8A40C7FF06 Ipa
    temp_15 = in_attr2.y;
    // 0x000078: 0xE043FF8940C7FF0A Ipa
    temp_16 = in_attr1.y;
    // 0x000088: 0xE043FF8A80C7FF07 Ipa
    temp_17 = in_attr2.z;
    // 0x000090: 0xE043FF8980C7FF0B Ipa
    temp_18 = in_attr1.z;
    // 0x000098: 0xE043FF8800C7FF11 Ipa
    temp_19 = in_attr0.x;
    // 0x0000A8: 0xE043FF8840C7FF12 Ipa
    temp_20 = in_attr0.y;
    // 0x0000B0: 0xE043FF8880C7FF13 Ipa
    temp_21 = in_attr0.z;
    // 0x0000B8: 0x5C68100000170108 Fmul
    temp_22 = temp_13 * temp_13;
    // 0x0000C8: 0x5C6810000097090F Fmul
    temp_23 = temp_14 * temp_14;
    // 0x0000D0: 0x59A0040000670608 Ffma
    temp_24 = fma(temp_15, temp_15, temp_22);
    // 0x0000D8: 0x59A0078000A70A0E Ffma
    temp_25 = fma(temp_16, temp_16, temp_23);
    // 0x0000E8: 0x5C6810000117110F Fmul
    temp_26 = temp_19 * temp_19;
    // 0x0000F0: 0x59A0040000770708 Ffma
    temp_27 = fma(temp_17, temp_17, temp_24);
    // 0x0000F8: 0x59A0070000B70B0E Ffma
    temp_28 = fma(temp_18, temp_18, temp_25);
    // 0x000108: 0x5080000000570808 Mufu
    temp_29 = inversesqrt(temp_27);
    // 0x000110: 0x59A0078001271215 Ffma
    temp_30 = fma(temp_20, temp_20, temp_26);
    // 0x000118: 0x5080000000570E14 Mufu
    temp_31 = inversesqrt(temp_28);
    // 0x000128: 0x59A00A8001371315 Ffma
    temp_32 = fma(temp_21, temp_21, temp_30);
    // 0x000130: 0x5C68100000870710 Fmul
    temp_33 = temp_17 * temp_29;
    // 0x000138: 0x5C68100000870101 Fmul
    temp_34 = temp_13 * temp_29;
    // 0x000148: 0x5C6810000147090F Fmul
    temp_35 = temp_14 * temp_31;
    // 0x000150: 0x5C68100001470A09 Fmul
    temp_36 = temp_16 * temp_31;
    // 0x000158: 0x5C68100001470B0B Fmul
    temp_37 = temp_18 * temp_31;
    // 0x000168: 0x5080000000571514 Mufu
    temp_38 = inversesqrt(temp_32);
    // 0x000170: 0x5C68100000870606 Fmul
    temp_39 = temp_15 * temp_29;
    // 0x000178: 0x5C68100001471212 Fmul
    temp_40 = temp_20 * temp_38;
    // 0x000188: 0x5C6810000147130A Fmul
    temp_41 = temp_21 * temp_38;
    // 0x000190: 0x5C68100001471114 Fmul
    temp_42 = temp_19 * temp_38;
    // 0x000198: 0xF0F0000034270000 Depbar
    // 0x0001A8: 0x5C68100000370307 Fmul
    temp_43 = temp_4 * temp_4;
    // 0x0001B0: 0x5C68100000370101 Fmul
    temp_44 = temp_34 * temp_4;
    // 0x0001B8: 0x5C68100000371010 Fmul
    temp_45 = temp_33 * temp_4;
    // 0x0001C8: 0x59A0038000270207 Ffma
    temp_46 = fma(temp_3, temp_3, temp_43);
    // 0x0001D0: 0x59A0008000F70201 Ffma
    temp_47 = fma(temp_3, temp_35, temp_44);
    // 0x0001D8: 0x59A0080000B7020B Ffma
    temp_48 = fma(temp_3, temp_37, temp_45);
    // 0x0001E8: 0x385D103F80070708 Fadd
    temp_49 = 0.0 - temp_46;
    temp_50 = temp_49 + 1.0;
    temp_51 = clamp(temp_50, 0.0, 1.0);
    // 0x0001F0: 0x5C68100000370607 Fmul
    temp_52 = temp_39 * temp_4;
    // 0x0001F8: 0x5080000000870808 Mufu
    temp_53 = sqrt(temp_51);
    // 0x000208: 0x59A0038000970207 Ffma
    temp_54 = fma(temp_3, temp_36, temp_52);
    // 0x000210: 0x59A0008000871414 Ffma
    temp_55 = fma(temp_42, temp_53, temp_47);
    // 0x000218: 0x59A0038000871207 Ffma
    temp_56 = fma(temp_40, temp_53, temp_54);
    // 0x000228: 0x59A0058000870A0A Ffma
    temp_57 = fma(temp_41, temp_53, temp_48);
    // 0x000230: 0xE003FF870FF7FF08 Ipa
    temp_58 = gl_FragCoord.x;
    temp_59 = support_buffer.render_scale[0];
    temp_60 = temp_58 / temp_59;
    // 0x000238: 0x5C68100001471401 Fmul
    temp_61 = temp_55 * temp_55;
    // 0x000248: 0xE003FF874FF7FF0B Ipa
    temp_62 = gl_FragCoord.y;
    temp_63 = support_buffer.render_scale[0];
    temp_64 = temp_62 / temp_63;
    // 0x000250: 0x59A0008000770701 Ffma
    temp_65 = fma(temp_56, temp_56, temp_61);
    // 0x000258: 0x59A0008000A70A02 Ffma
    temp_66 = fma(temp_57, temp_57, temp_65);
    // 0x000268: 0x5080000000570209 Mufu
    temp_67 = inversesqrt(temp_66);
    // 0x000270: 0x5C68100000970A12 Fmul
    temp_68 = temp_57 * temp_67;
    // 0x000278: 0x5C68100000970701 Fmul
    temp_69 = temp_56 * temp_67;
    // 0x000288: 0x5C6810000097140E Fmul
    temp_70 = temp_55 * temp_67;
    // 0x000290: 0x4C68100C00671206 Fmul
    temp_71 = temp_68 * fp_c3.data[1].z;
    // 0x000298: 0x4C68100C00271203 Fmul
    temp_72 = temp_68 * fp_c3.data[0].z;
    // 0x0002A8: 0x49A0030C00570107 Ffma
    temp_73 = fma(temp_69, fp_c3.data[1].y, temp_71);
    // 0x0002B0: 0x49A0018C00170103 Ffma
    temp_74 = fma(temp_69, fp_c3.data[0].y, temp_72);
    // 0x0002B8: 0x4C68100C04B70B06 Fmul
    temp_75 = temp_64 * fp_c3.data[18].w;
    // 0x0002C8: 0x49A0038C00470E07 Ffma
    temp_76 = fma(temp_70, fp_c3.data[1].x, temp_73);
    // 0x0002D0: 0x49A0018C00070E03 Ffma
    temp_77 = fma(temp_70, fp_c3.data[0].x, temp_74);
    // 0x0002D8: 0x4C69100C03E70702 Fmul
    temp_78 = 0.0 - fp_c3.data[15].z;
    temp_79 = temp_76 * temp_78;
    // 0x0002E8: 0x4C68100C04A70807 Fmul
    temp_80 = temp_60 * fp_c3.data[18].z;
    // 0x0002F0: 0x4C68101808B70308 Fmul
    temp_81 = temp_77 * fp_c6.data[34].w;
    // 0x0002F8: 0x4C68101808B70203 Fmul
    temp_82 = temp_79 * fp_c6.data[34].w;
    // 0x000308: 0x49A003840037081A Ffma
    temp_83 = fma(temp_81, fp_c1.data[0].w, temp_80);
    // 0x000310: 0x49A003040037031B Ffma
    temp_84 = fma(temp_82, fp_c1.data[0].w, temp_75);
    // 0x000318: 0xD8320221A1B71A20 Texs
    temp_85 = texture(fp_t_tcb_22, vec2(temp_83, temp_84)).xyzw;
    temp_86 = temp_85.x;
    temp_87 = temp_85.y;
    temp_88 = temp_85.z;
    temp_89 = temp_85.w;
    // 0x000328: 0xD82202002067071C Texs
    temp_90 = texture(fp_t_tcb_20, vec2(temp_80, temp_75)).xyz;
    temp_91 = temp_90.x;
    temp_92 = temp_90.y;
    temp_93 = temp_90.z;
    // 0x000330: 0xE043FF8B00C7FF31 Ipa
    temp_94 = in_attr3.x;
    // 0x000338: 0xE043FF8B40C7FF30 Ipa
    temp_95 = in_attr3.y;
    // 0x000348: 0xE043FF8B80C7FF2F Ipa
    temp_96 = in_attr3.z;
    // 0x000350: 0xF0F0000034370000 Depbar
    // 0x000358: 0x4C5C101406470404 Fadd
    temp_97 = temp_6 + fp_c5.data[25].x;
    temp_98 = clamp(temp_97, 0.0, 1.0);
    // 0x000368: 0xE2900000C1000000 Ssy
    // 0x000370: 0x4C68101406370505 Fmul
    temp_99 = temp_7 * fp_c5.data[24].w;
    // 0x000378: 0x385D103F80070D0D Fadd
    temp_100 = 0.0 - temp_8;
    temp_101 = temp_100 + 1.0;
    temp_102 = clamp(temp_101, 0.0, 1.0);
    // 0x000388: 0x4C6810180A070404 Fmul
    temp_103 = temp_98 * fp_c6.data[40].x;
    // 0x000390: 0x5C68100003173103 Fmul
    temp_104 = temp_94 * temp_94;
    // 0x000398: 0x59A0018003073008 Ffma
    temp_105 = fma(temp_95, temp_95, temp_104);
    // 0x0003A8: 0x59A0040002F72F08 Ffma
    temp_106 = fma(temp_96, temp_96, temp_105);
    // 0x0003B0: 0x508000000057080A Mufu
    temp_107 = inversesqrt(temp_106);
    // 0x0003B8: 0x5C69100000A73131 Fmul
    temp_108 = 0.0 - temp_107;
    temp_109 = temp_94 * temp_108;
    // 0x0003C8: 0x5C69100000A73030 Fmul
    temp_110 = 0.0 - temp_107;
    temp_111 = temp_95 * temp_110;
    // 0x0003D0: 0x5C69100000A72F2F Fmul
    temp_112 = 0.0 - temp_107;
    temp_113 = temp_96 * temp_112;
    // 0x0003D8: 0x4C58301805C73103 Fadd
    temp_114 = 0.0 - fp_c6.data[23].x;
    temp_115 = temp_109 + temp_114;
    // 0x0003E8: 0x4C58301805D73009 Fadd
    temp_116 = 0.0 - fp_c6.data[23].y;
    temp_117 = temp_111 + temp_116;
    // 0x0003F0: 0x4C58301805E72F0A Fadd
    temp_118 = 0.0 - fp_c6.data[23].z;
    temp_119 = temp_113 + temp_118;
    // 0x0003F8: 0x5C68100003170E13 Fmul
    temp_120 = temp_70 * temp_109;
    // 0x000408: 0x5C6810000037030B Fmul
    temp_121 = temp_115 * temp_115;
    // 0x000410: 0x59A0098003070111 Ffma
    temp_122 = fma(temp_69, temp_111, temp_120);
    // 0x000418: 0x3868104110070606 Fmul
    temp_123 = temp_75 * 9.0;
    // 0x000428: 0x4C98079808A70013 Mov
    // 0x000430: 0x5CA8148000670A06 F2f
    temp_124 = floor(temp_123);
    // 0x000438: 0x59A005800097090B Ffma
    temp_125 = fma(temp_117, temp_117, temp_121);
    // 0x000448: 0x59A0058000A70A0B Ffma
    temp_126 = fma(temp_119, temp_119, temp_125);
    // 0x000450: 0x5080000000570B10 Mufu
    temp_127 = inversesqrt(temp_126);
    // 0x000458: 0x01040DF760C7F00B Mov32i
    // 0x000468: 0x5C68100001070303 Fmul
    temp_128 = temp_115 * temp_127;
    // 0x000470: 0x5C6810000107090F Fmul
    temp_129 = temp_117 * temp_127;
    // 0x000478: 0x5C68100001070A10 Fmul
    temp_130 = temp_119 * temp_127;
    // 0x000488: 0x4C69101805C70308 Fmul
    temp_131 = 0.0 - fp_c6.data[23].x;
    temp_132 = temp_128 * temp_131;
    // 0x000490: 0x5C68100000373109 Fmul
    temp_133 = temp_109 * temp_128;
    // 0x000498: 0x5C68100000370E14 Fmul
    temp_134 = temp_70 * temp_128;
    // 0x0004A8: 0x49A1041805D70F03 Ffma
    temp_135 = 0.0 - fp_c6.data[23].y;
    temp_136 = fma(temp_129, temp_135, temp_132);
    // 0x0004B0: 0x59A0048000F73009 Ffma
    temp_137 = fma(temp_111, temp_129, temp_133);
    // 0x0004B8: 0x59A00A0000F7010F Ffma
    temp_138 = fma(temp_69, temp_129, temp_134);
    // 0x0004C8: 0x49A5019805E71008 Ffma
    temp_139 = 0.0 - fp_c6.data[23].z;
    temp_140 = fma(temp_130, temp_139, temp_136);
    temp_141 = clamp(temp_140, 0.0, 1.0);
    // 0x0004D0: 0x386013BF80070403 Fmnmx
    temp_142 = min(temp_103, 1.0);
    // 0x0004D8: 0x59A4048001072F0A Ffma
    temp_143 = fma(temp_113, temp_130, temp_137);
    temp_144 = clamp(temp_143, 0.0, 1.0);
    // 0x0004E8: 0x59A407800107120F Ffma
    temp_145 = fma(temp_68, temp_130, temp_138);
    temp_146 = clamp(temp_145, 0.0, 1.0);
    // 0x0004F0: 0x49A2058400270809 Ffma
    temp_147 = fma(temp_141, fp_c1.data[0].z, -6.98316002);
    // 0x0004F8: 0x4C60178400070303 Fmnmx
    temp_148 = max(temp_142, fp_c1.data[0].x);
    // 0x000508: 0x49A2058400270A04 Ffma
    temp_149 = fma(temp_144, fp_c1.data[0].z, -6.98316002);
    // 0x000510: 0x5C68100000970808 Fmul
    temp_150 = temp_141 * temp_147;
    // 0x000518: 0x51A401840007030B Ffma
    temp_151 = fma(temp_148, temp_148, fp_c1.data[0].x);
    temp_152 = clamp(temp_151, 0.0, 1.0);
    // 0x000528: 0x5C68100000470A0A Fmul
    temp_153 = temp_144 * temp_149;
    // 0x000530: 0x4C69101805C70E04 Fmul
    temp_154 = 0.0 - fp_c6.data[23].x;
    temp_155 = temp_70 * temp_154;
    // 0x000538: 0x32A0173F0007032E Ffma
    temp_156 = fma(temp_148, 0.5, 0.5);
    // 0x000548: 0x5C68100000B70B10 Fmul
    temp_157 = temp_152 * temp_152;
    // 0x000550: 0x5C90008000A70015 Rro
    // 0x000558: 0x49A1021805D70109 Ffma
    temp_158 = 0.0 - fp_c6.data[23].y;
    temp_159 = fma(temp_69, temp_158, temp_155);
    // 0x000568: 0x5080000000271515 Mufu
    temp_160 = exp2(temp_153);
    // 0x000570: 0x59A4088002F71204 Ffma
    temp_161 = fma(temp_68, temp_113, temp_122);
    temp_162 = clamp(temp_161, 0.0, 1.0);
    // 0x000578: 0x3868104180070711 Fmul
    temp_163 = temp_80 * 16.0;
    // 0x000588: 0x59A2078001070F10 Ffma
    temp_164 = 0.0 - temp_146;
    temp_165 = fma(temp_146, temp_157, temp_164);
    // 0x000590: 0x5CA8148001170A11 F2f
    temp_166 = floor(temp_163);
    // 0x000598: 0x5C68120002E72E2E Fmul
    temp_167 = temp_156 * 0.5;
    temp_168 = temp_167 * temp_156;
    // 0x0005A8: 0x49A5049805E71209 Ffma
    temp_169 = 0.0 - fp_c6.data[23].z;
    temp_170 = fma(temp_68, temp_169, temp_159);
    temp_171 = clamp(temp_170, 0.0, 1.0);
    // 0x0005B0: 0x5C68100000470E2A Fmul
    temp_172 = temp_70 * temp_162;
    // 0x0005B8: 0x51A0080400170F10 Ffma
    temp_173 = fma(temp_146, temp_165, fp_c1.data[0].y);
    // 0x0005C8: 0x59A1020000472E0F Ffma
    temp_174 = 0.0 - temp_162;
    temp_175 = fma(temp_168, temp_174, temp_162);
    // 0x0005D0: 0x5080000000471010 Mufu
    temp_176 = 1.0 / temp_173;
    // 0x0005D8: 0x59A1048002E70907 Ffma
    temp_177 = 0.0 - temp_168;
    temp_178 = fma(temp_171, temp_177, temp_171);
    // 0x0005E8: 0x4C68101801570937 Fmul
    temp_179 = temp_171 * fp_c6.data[5].y;
    // 0x0005F0: 0x32A218C000072A2A Ffma
    temp_180 = 0.0 - temp_109;
    temp_181 = fma(temp_172, 2.0, temp_180);
    // 0x0005F8: 0x32A008C18007062D Ffma
    temp_182 = fma(temp_124, 16.0, temp_166);
    // 0x000608: 0x5C58100000F72E0F Fadd
    temp_183 = temp_168 + temp_175;
    // 0x000610: 0x5CB0118002D70A2D F2i
    temp_184 = trunc(temp_182);
    temp_185 = max(temp_184, 0.0);
    temp_186 = uint(temp_185);
    // 0x000618: 0x5C58100000772E07 Fadd
    temp_187 = temp_168 + temp_178;
    // 0x000628: 0x5080000000470F0F Mufu
    temp_188 = 1.0 / temp_183;
    // 0x000630: 0x5C90008000870011 Rro
    // 0x000638: 0xF0F0000034270000 Depbar
    // 0x000648: 0x5080000000470707 Mufu
    temp_189 = 1.0 / temp_187;
    // 0x000650: 0x4C58301407B71F08 Fadd
    temp_190 = 0.0 - fp_c5.data[30].w;
    temp_191 = temp_11 + temp_190;
    // 0x000658: 0x5080000000271111 Mufu
    temp_192 = exp2(temp_150);
    // 0x000668: 0x5C68100001070B0B Fmul
    temp_193 = temp_152 * temp_176;
    // 0x000670: 0x4C68101801470910 Fmul
    temp_194 = temp_171 * fp_c6.data[5].x;
    // 0x000678: 0x1E23EA2F98373737 Fmul32i
    temp_195 = temp_179 * 0.318309873;
    // 0x000688: 0x51A0041407B70508 Ffma
    temp_196 = fma(temp_99, temp_191, fp_c5.data[30].w);
    // 0x000690: 0x3848000000872D2B Shl
    temp_197 = int(temp_186) << 8;
    // 0x000698: 0x5C68100000B70B0B Fmul
    temp_198 = temp_193 * temp_193;
    // 0x0006A8: 0xEF94008200472B2B Ldc
    temp_199 = temp_197 + 0x2004;
    temp_200 = uint(temp_199) >> 2;
    temp_201 = temp_200 >> 2;
    temp_202 = int(temp_200) & 3;
    temp_203 = fp_c8.data[int(temp_201)][temp_202];
    // 0x0006B0: 0x3868103F00070F2C Fmul
    temp_204 = temp_188 * 0.5;
    // 0x0006B8: 0x4C58301407B7000F Fadd
    temp_205 = 0.0 - fp_c5.data[30].w;
    temp_206 = temp_12 + temp_205;
    // 0x0006C8: 0x59A10A8001570816 Ffma
    temp_207 = 0.0 - temp_160;
    temp_208 = fma(temp_196, temp_207, temp_160);
    // 0x0006D0: 0x5C68100000772C06 Fmul
    temp_209 = temp_204 * temp_189;
    // 0x0006D8: 0x4C58301407B71E07 Fadd
    temp_210 = 0.0 - fp_c5.data[30].w;
    temp_211 = temp_10 + temp_210;
    // 0x0006E8: 0x5C58100001670816 Fadd
    temp_212 = temp_196 + temp_208;
    // 0x0006F0: 0x5C68100000670B06 Fmul
    temp_213 = temp_198 * temp_209;
    // 0x0006F8: 0x4C6810180877130B Fmul
    temp_214 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x000708: 0x4C68101406271616 Fmul
    temp_215 = temp_212 * fp_c5.data[24].z;
    // 0x000710: 0x5C6810000067090A Fmul
    temp_216 = temp_171 * temp_213;
    // 0x000718: 0x51A0039407B70506 Ffma
    temp_217 = fma(temp_99, temp_211, fp_c5.data[30].w);
    // 0x000728: 0x51A0079407B70507 Ffma
    temp_218 = fma(temp_99, temp_206, fp_c5.data[30].w);
    // 0x000730: 0x1E23EA2F9837100F Fmul32i
    temp_219 = temp_194 * 0.318309873;
    // 0x000738: 0x4C68101801670909 Fmul
    temp_220 = temp_171 * fp_c6.data[5].z;
    // 0x000748: 0x59A11B8003771637 Ffma
    temp_221 = 0.0 - temp_195;
    temp_222 = fma(temp_215, temp_221, temp_195);
    // 0x000750: 0x5C68100000470116 Fmul
    temp_223 = temp_69 * temp_162;
    // 0x000758: 0x59A1088000671110 Ffma
    temp_224 = 0.0 - temp_217;
    temp_225 = fma(temp_192, temp_224, temp_192);
    // 0x000768: 0x59A1088000771114 Ffma
    temp_226 = 0.0 - temp_218;
    temp_227 = fma(temp_192, temp_226, temp_192);
    // 0x000770: 0x59A1088000871111 Ffma
    temp_228 = 0.0 - temp_196;
    temp_229 = fma(temp_192, temp_228, temp_192);
    // 0x000778: 0x59A10A8001570613 Ffma
    temp_230 = 0.0 - temp_160;
    temp_231 = fma(temp_217, temp_230, temp_160);
    // 0x000788: 0x59A10A8001570715 Ffma
    temp_232 = 0.0 - temp_160;
    temp_233 = fma(temp_218, temp_232, temp_160);
    // 0x000790: 0x1E23EA2F98370909 Fmul32i
    temp_234 = temp_220 * 0.318309873;
    // 0x000798: 0x5C58100001070610 Fadd
    temp_235 = temp_217 + temp_225;
    // 0x0007A8: 0x5C58100001470714 Fadd
    temp_236 = temp_218 + temp_227;
    // 0x0007B0: 0x5C58100001170811 Fadd
    temp_237 = temp_196 + temp_229;
    // 0x0007B8: 0x5C58100001370617 Fadd
    temp_238 = temp_217 + temp_231;
    // 0x0007C8: 0x5C58100001570718 Fadd
    temp_239 = temp_218 + temp_233;
    // 0x0007D0: 0x32A2184000071616 Ffma
    temp_240 = 0.0 - temp_111;
    temp_241 = fma(temp_223, 2.0, temp_240);
    // 0x0007D8: 0x4C68101406271013 Fmul
    temp_242 = temp_235 * fp_c5.data[24].z;
    // 0x0007E8: 0x4C68101406271415 Fmul
    temp_243 = temp_236 * fp_c5.data[24].z;
    // 0x0007F0: 0x4C68101406271114 Fmul
    temp_244 = temp_237 * fp_c5.data[24].z;
    // 0x0007F8: 0x4C68101406271719 Fmul
    temp_245 = temp_238 * fp_c5.data[24].z;
    // 0x000808: 0x4C68101406271818 Fmul
    temp_246 = temp_239 * fp_c5.data[24].z;
    // 0x000810: 0x59A1078000F7190F Ffma
    temp_247 = 0.0 - temp_219;
    temp_248 = fma(temp_245, temp_247, temp_219);
    // 0x000818: 0x5B6603800FF72B07 Isetp
    temp_249 = floatBitsToUint(temp_203) <= 0u;
    // 0x000828: 0xEF5400000007FF0F Stl
    local_memory[0] = floatBitsToUint(temp_248);
    // 0x000830: 0x59A1048000971809 Ffma
    temp_250 = 0.0 - temp_234;
    temp_251 = fma(temp_246, temp_250, temp_234);
    // 0x000838: 0x5C9807800FF70018 Mov
    // 0x000848: 0x5C9807800FF70019 Mov
    // 0x000850: 0x5C9807800FF7000F Mov
    // 0x000858: 0xF0F0000034170000 Depbar
    // 0x000868: 0x51A0059801472010 Ffma
    temp_252 = fma(temp_86, temp_214, fp_c6.data[5].x);
    // 0x000870: 0x51A0059801572111 Ffma
    temp_253 = fma(temp_87, temp_214, fp_c6.data[5].y);
    // 0x000878: 0x51A0059801671A0B Ffma
    temp_254 = fma(temp_88, temp_214, fp_c6.data[5].z);
    // 0x000888: 0x5C68100001371010 Fmul
    temp_255 = temp_252 * temp_242;
    // 0x000890: 0x5C68100001471111 Fmul
    temp_256 = temp_253 * temp_244;
    // 0x000898: 0x5C68100001570B0B Fmul
    temp_257 = temp_254 * temp_243;
    // 0x0008A8: 0x49A206980AE70D14 Ffma
    temp_258 = 0.0 - temp_102;
    temp_259 = fma(temp_102, fp_c6.data[43].z, temp_258);
    // 0x0008B0: 0x5C9807800FF70013 Mov
    // 0x0008B8: 0x5C68100001070A27 Fmul
    temp_260 = temp_216 * temp_255;
    // 0x0008C8: 0x5C68100001170A28 Fmul
    temp_261 = temp_216 * temp_256;
    // 0x0008D0: 0x49A206980AC70D10 Ffma
    temp_262 = 0.0 - temp_102;
    temp_263 = fma(temp_102, fp_c6.data[43].x, temp_262);
    // 0x0008D8: 0x49A206980AD70D11 Ffma
    temp_264 = 0.0 - temp_102;
    temp_265 = fma(temp_102, fp_c6.data[43].y, temp_264);
    // 0x0008E8: 0x5C68100000B70A29 Fmul
    temp_266 = temp_216 * temp_257;
    // 0x0008F0: 0x5C6810000047120D Fmul
    temp_267 = temp_68 * temp_162;
    // 0x0008F8: 0x3858103F80071426 Fadd
    temp_268 = temp_259 + 1.0;
    // 0x000908: 0x5C9807800FF7000A Mov
    // 0x000910: 0x3858103F80071010 Fadd
    temp_269 = temp_263 + 1.0;
    // 0x000918: 0x3858103F80071111 Fadd
    temp_270 = temp_265 + 1.0;
    // 0x000928: 0x5C9807800FF7000B Mov
    // 0x000930: 0x32A217C000070D17 Ffma
    temp_271 = 0.0 - temp_113;
    temp_272 = fma(temp_267, 2.0, temp_271);
    // 0x000938: 0x59A4130002670026 Ffma
    temp_273 = fma(temp_12, temp_268, temp_268);
    temp_274 = clamp(temp_273, 0.0, 1.0);
    // 0x000948: 0x1E23E22F98372727 Fmul32i
    temp_275 = temp_260 * 0.159154937;
    // 0x000950: 0x59A4080001071E24 Ffma
    temp_276 = fma(temp_10, temp_269, temp_269);
    temp_277 = clamp(temp_276, 0.0, 1.0);
    // 0x000958: 0x59A4088001171F25 Ffma
    temp_278 = fma(temp_11, temp_270, temp_270);
    temp_279 = clamp(temp_278, 0.0, 1.0);
    // 0x000968: 0x1E23E22F98372828 Fmul32i
    temp_280 = temp_261 * 0.159154937;
    // 0x000970: 0x1E23E22F98372929 Fmul32i
    temp_281 = temp_266 * 0.159154937;
    // 0x000978: 0xF0F800000000000F Sync
    temp_282 = 0.0;
    temp_283 = 0.0;
    temp_284 = 0.0;
    temp_285 = 0.0;
    temp_286 = 0.0;
    temp_287 = 0.0;
    temp_288 = 0.0;
    temp_289 = 0.0;
    temp_290 = 0.0;
    temp_291 = 0.0;
    temp_292 = 0.0;
    temp_293 = 0.0;
    if (!temp_249)
    {
        // 0x000988: 0x5C9807800FF70023 Mov
        temp_294 = 0;
        do
        {
            // 0x000990: 0x5C18020002372D15 Iscadd
            temp_296 = int(temp_186) << 4;
            temp_297 = temp_296 + temp_294;
            // 0x000998: 0xE003FF87CFF7FF32 Ipa
            // 0x0009A8: 0x1C00000000172323 Iadd32i
            temp_298 = temp_294 + 1;
            // 0x0009B0: 0xE003FF87CFF7FF34 Ipa
            // 0x0009B8: 0x3848000000471515 Shl
            temp_299 = temp_297 << 4;
            // 0x0009C8: 0xE003FF87CFF7FF33 Ipa
            // 0x0009D0: 0x5B6C038002B7230F Isetp
            temp_295 = uint(temp_298) >= floatBitsToUint(temp_203);
            // 0x0009D8: 0xE290000059000000 Ssy
            // 0x0009E8: 0xEF94008200071515 Ldc
            temp_300 = temp_299 + 0x2000;
            temp_301 = uint(temp_300) >> 2;
            temp_302 = temp_301 >> 2;
            temp_303 = int(temp_301) & 3;
            temp_304 = fp_c8.data[int(temp_302)][temp_303];
            // 0x0009F0: 0x5080000000473232 Mufu
            // 0x0009F8: 0x5080000000473434 Mufu
            // 0x000A08: 0x5080000000473333 Mufu
            // 0x000A10: 0xE043FF8D0327FF32 Ipa
            temp_305 = in_attr5.x;
            // 0x000A18: 0xE043FF8D8347FF34 Ipa
            temp_306 = in_attr5.z;
            // 0x000A28: 0xE043FF8D4337FF33 Ipa
            temp_307 = in_attr5.y;
            // 0x000A30: 0x3848000000671522 Shl
            temp_308 = floatBitsToInt(temp_304) << 6;
            // 0x000A38: 0xEF9500800107220C Ldc
            temp_309 = temp_308 + 16;
            temp_310 = uint(temp_309) >> 2;
            temp_311 = temp_310 >> 2;
            temp_312 = int(temp_310) & 3;
            temp_313 = fp_c8.data[int(temp_311)][temp_312];
            temp_314 = int(temp_310) + 1;
            temp_315 = uint(temp_314) >> 2;
            temp_316 = temp_314 & 3;
            temp_317 = fp_c8.data[int(temp_315)][temp_316];
            // 0x000A48: 0xEF95008001872210 Ldc
            temp_318 = temp_308 + 24;
            temp_319 = uint(temp_318) >> 2;
            temp_320 = temp_319 >> 2;
            temp_321 = int(temp_319) & 3;
            temp_322 = fp_c8.data[int(temp_320)][temp_321];
            temp_323 = int(temp_319) + 1;
            temp_324 = uint(temp_323) >> 2;
            temp_325 = temp_323 & 3;
            temp_326 = fp_c8.data[int(temp_324)][temp_325];
            // 0x000A50: 0xEF95008002072214 Ldc
            temp_327 = temp_308 + 32;
            temp_328 = uint(temp_327) >> 2;
            temp_329 = temp_328 >> 2;
            temp_330 = int(temp_328) & 3;
            temp_331 = fp_c8.data[int(temp_329)][temp_330];
            temp_332 = int(temp_328) + 1;
            temp_333 = uint(temp_332) >> 2;
            temp_334 = temp_332 & 3;
            temp_335 = fp_c8.data[int(temp_333)][temp_334];
            // 0x000A58: 0x5C58300003270C32 Fadd
            temp_336 = 0.0 - temp_305;
            temp_337 = temp_313 + temp_336;
            // 0x000A68: 0xEF9400800287220C Ldc
            temp_338 = temp_308 + 40;
            temp_339 = uint(temp_338) >> 2;
            temp_340 = temp_339 >> 2;
            temp_341 = int(temp_339) & 3;
            temp_342 = fp_c8.data[int(temp_340)][temp_341];
            // 0x000A70: 0x5C58300003370D33 Fadd
            temp_343 = 0.0 - temp_307;
            temp_344 = temp_317 + temp_343;
            // 0x000A78: 0x5C58300003471034 Fadd
            temp_345 = 0.0 - temp_306;
            temp_346 = temp_322 + temp_345;
            // 0x000A88: 0x5C68100003273235 Fmul
            temp_347 = temp_337 * temp_337;
            // 0x000A90: 0x59A11A0003471111 Ffma
            temp_348 = 0.0 - temp_346;
            temp_349 = fma(temp_326, temp_348, temp_346);
            // 0x000A98: 0x59A01A8003373335 Ffma
            temp_350 = fma(temp_344, temp_344, temp_347);
            // 0x000AA8: 0x59A01A8001171136 Ffma
            temp_351 = fma(temp_349, temp_349, temp_350);
            // 0x000AB0: 0x508000000057360D Mufu
            temp_352 = inversesqrt(temp_351);
            // 0x000AB8: 0x5080000000873636 Mufu
            temp_353 = sqrt(temp_351);
            // 0x000AC8: 0x5C68100000D73210 Fmul
            temp_354 = temp_337 * temp_352;
            // 0x000AD0: 0x5C69100001471010 Fmul
            temp_355 = 0.0 - temp_331;
            temp_356 = temp_354 * temp_355;
            // 0x000AD8: 0x5C68100000D73314 Fmul
            temp_357 = temp_344 * temp_352;
            // 0x000AE8: 0x5C68100000D7110D Fmul
            temp_358 = temp_349 * temp_352;
            // 0x000AF0: 0x59A1080001571414 Ffma
            temp_359 = 0.0 - temp_335;
            temp_360 = fma(temp_357, temp_359, temp_356);
            // 0x000AF8: 0xEF95008003872210 Ldc
            temp_361 = temp_308 + 56;
            temp_362 = uint(temp_361) >> 2;
            temp_363 = temp_362 >> 2;
            temp_364 = int(temp_362) & 3;
            temp_365 = fp_c8.data[int(temp_363)][temp_364];
            temp_366 = int(temp_362) + 1;
            temp_367 = uint(temp_366) >> 2;
            temp_368 = temp_366 & 3;
            temp_369 = fp_c8.data[int(temp_367)][temp_368];
            // 0x000B08: 0x010404000007F015 Mov32i
            // 0x000B10: 0x59A10A0000C70D14 Ffma
            temp_370 = 0.0 - temp_342;
            temp_371 = fma(temp_358, temp_370, temp_360);
            // 0x000B18: 0xEF9500800307220C Ldc
            temp_372 = temp_308 + 48;
            temp_373 = uint(temp_372) >> 2;
            temp_374 = temp_373 >> 2;
            temp_375 = int(temp_373) & 3;
            temp_376 = fp_c8.data[int(temp_374)][temp_375];
            temp_377 = int(temp_373) + 1;
            temp_378 = uint(temp_377) >> 2;
            temp_379 = temp_377 & 3;
            temp_380 = fp_c8.data[int(temp_378)][temp_379];
            // 0x000B28: 0x59A4088001071410 Ffma
            temp_381 = fma(temp_371, temp_365, temp_369);
            temp_382 = clamp(temp_381, 0.0, 1.0);
            // 0x000B30: 0x59A4068003670C36 Ffma
            temp_383 = fma(temp_376, temp_353, temp_380);
            temp_384 = clamp(temp_383, 0.0, 1.0);
            // 0x000B38: 0x33A00AC000073611 Ffma
            temp_385 = fma(temp_384, -2.0, 3.0);
            // 0x000B48: 0x5C68100003673614 Fmul
            temp_386 = temp_384 * temp_384;
            // 0x000B50: 0x33A00AC000071015 Ffma
            temp_387 = fma(temp_382, -2.0, 3.0);
            // 0x000B58: 0x5C68100001071010 Fmul
            temp_388 = temp_382 * temp_382;
            // 0x000B68: 0x5C68100001171411 Fmul
            temp_389 = temp_386 * temp_385;
            // 0x000B70: 0x39585042F0073414 Fadd
            temp_390 = abs(temp_346);
            temp_391 = temp_390 + -120.0;
            // 0x000B78: 0x5C68100001571010 Fmul
            temp_392 = temp_388 * temp_387;
            // 0x000B88: 0x1EABD4CCCCD71414 Fmul32i
            temp_393 = temp_391 * -0.0500000007;
            temp_394 = clamp(temp_393, 0.0, 1.0);
            // 0x000B90: 0x5C68100001171010 Fmul
            temp_395 = temp_392 * temp_389;
            // 0x000B98: 0x36247F9000171111 Xmad
            temp_396 = floatBitsToUint(temp_389) >> 16;
            temp_397 = int(temp_396) << 16;
            // 0x000BA8: 0x5C68100001471010 Fmul
            temp_398 = temp_395 * temp_394;
            // 0x000BB0: 0x5BB383800FF71007 Fsetp
            temp_399 = temp_398 <= 0.0;
            // 0x000BB8: 0x7A05083C0F00FF11 Hadd2
            temp_294 = temp_298;
            temp_400 = uint(temp_397);
            temp_401 = temp_282;
            temp_402 = temp_283;
            temp_403 = temp_284;
            temp_404 = temp_285;
            temp_405 = temp_286;
            temp_406 = temp_287;
            if (temp_399)
            {
                temp_407 = unpackHalf2x16(uint(temp_397)).y;
                temp_408 = packHalf2x16(vec2(1.0, temp_407));
                temp_400 = temp_408;
            }
            // 0x000BC8: 0x5D2103902FF71107 Hsetp2
            temp_409 = unpackHalf2x16(temp_400).x;
            temp_410 = temp_409 == 0.0;
            // 0x000BD0: 0xF0F800000008000F Sync
            if (temp_410)
            {
                // 0x000BD8: 0x5080000000470C0C Mufu
                temp_411 = 1.0 / temp_376;
                // 0x000BE8: 0xEF94008002C72214 Ldc
                temp_412 = temp_308 + 44;
                temp_413 = uint(temp_412) >> 2;
                temp_414 = temp_413 >> 2;
                temp_415 = int(temp_413) & 3;
                temp_416 = fp_c8.data[int(temp_414)][temp_415];
                // 0x000BF0: 0x5C69100000C70D0D Fmul
                temp_417 = 0.0 - temp_411;
                temp_418 = temp_380 * temp_417;
                // 0x000BF8: 0x5C60138000D73434 Fmnmx
                temp_419 = min(temp_346, temp_418);
                // 0x000C08: 0x5C61178003470D11 Fmnmx
                temp_420 = 0.0 - temp_418;
                temp_421 = max(temp_420, temp_419);
                // 0x000C10: 0x59A01A800117110D Ffma
                temp_422 = fma(temp_421, temp_421, temp_350);
                // 0x000C18: 0x5080000000570D15 Mufu
                temp_423 = inversesqrt(temp_422);
                // 0x000C28: 0x5C6810000157320C Fmul
                temp_424 = temp_337 * temp_423;
                // 0x000C30: 0x5080000000471414 Mufu
                temp_425 = 1.0 / temp_416;
                // 0x000C38: 0x5C68100001573334 Fmul
                temp_426 = temp_344 * temp_423;
                // 0x000C48: 0x5C68100001571111 Fmul
                temp_427 = temp_421 * temp_423;
                // 0x000C50: 0x5C58100000C73133 Fadd
                temp_428 = temp_109 + temp_424;
                // 0x000C58: 0x5C58100003473015 Fadd
                temp_429 = temp_111 + temp_426;
                // 0x000C68: 0x5C58100001172F35 Fadd
                temp_430 = temp_113 + temp_427;
                // 0x000C70: 0x5C68100003373332 Fmul
                temp_431 = temp_428 * temp_428;
                // 0x000C78: 0x59A0190001571532 Ffma
                temp_432 = fma(temp_429, temp_429, temp_431);
                // 0x000C88: 0x59A0190003573532 Ffma
                temp_433 = fma(temp_430, temp_430, temp_432);
                // 0x000C90: 0x5080000000573236 Mufu
                temp_434 = inversesqrt(temp_433);
                // 0x000C98: 0x5080000000870D32 Mufu
                temp_435 = sqrt(temp_422);
                // 0x000CA8: 0x5C68100000C70E0D Fmul
                temp_436 = temp_70 * temp_424;
                // 0x000CB0: 0x5C68100003673333 Fmul
                temp_437 = temp_428 * temp_434;
                // 0x000CB8: 0x5C68100003671515 Fmul
                temp_438 = temp_429 * temp_434;
                // 0x000CC8: 0x5C68100003673535 Fmul
                temp_439 = temp_430 * temp_434;
                // 0x000CD0: 0x59A0068003470136 Ffma
                temp_440 = fma(temp_69, temp_426, temp_436);
                // 0x000CD8: 0x51A0190400471414 Ffma
                temp_441 = fma(temp_425, temp_435, fp_c1.data[1].x);
                // 0x000CE8: 0x5C68100003370C0C Fmul
                temp_442 = temp_424 * temp_437;
                // 0x000CF0: 0x5080000000471414 Mufu
                temp_443 = 1.0 / temp_441;
                // 0x000CF8: 0x5C68100003370E33 Fmul
                temp_444 = temp_70 * temp_437;
                // 0x000D08: 0x59A01B0001171236 Ffma
                temp_445 = fma(temp_68, temp_427, temp_440);
                // 0x000D10: 0x59A0060001573434 Ffma
                temp_446 = fma(temp_426, temp_438, temp_442);
                // 0x000D18: 0xEF9500800007220C Ldc
                temp_447 = uint(temp_308) >> 2;
                temp_448 = temp_447 >> 2;
                temp_449 = int(temp_447) & 3;
                temp_450 = fp_c8.data[int(temp_448)][temp_449];
                temp_451 = int(temp_447) + 1;
                temp_452 = uint(temp_451) >> 2;
                temp_453 = temp_451 & 3;
                temp_454 = fp_c8.data[int(temp_452)][temp_453];
                // 0x000D28: 0x59A0198001570133 Ffma
                temp_455 = fma(temp_69, temp_438, temp_444);
                // 0x000D30: 0xEF94008000872222 Ldc
                temp_456 = temp_308 + 8;
                temp_457 = uint(temp_456) >> 2;
                temp_458 = temp_457 >> 2;
                temp_459 = int(temp_457) & 3;
                temp_460 = fp_c8.data[int(temp_458)][temp_459];
                // 0x000D38: 0x59A41A0003571134 Ffma
                temp_461 = fma(temp_427, temp_439, temp_446);
                temp_462 = clamp(temp_461, 0.0, 1.0);
                // 0x000D48: 0x51A4018400070311 Ffma
                temp_463 = fma(temp_148, temp_148, fp_c1.data[0].x);
                temp_464 = clamp(temp_463, 0.0, 1.0);
                // 0x000D50: 0x01040DF760C7F015 Mov32i
                // 0x000D58: 0x1E23FB3333371414 Fmul32i
                temp_465 = temp_443 * 1.39999998;
                // 0x000D68: 0x59A4198003571233 Ffma
                temp_466 = fma(temp_68, temp_439, temp_455);
                temp_467 = clamp(temp_466, 0.0, 1.0);
                // 0x000D70: 0x5C68100001171132 Fmul
                temp_468 = temp_464 * temp_464;
                // 0x000D78: 0x49A20A8400273415 Ffma
                temp_469 = fma(temp_462, fp_c1.data[0].z, -6.98316002);
                // 0x000D88: 0x5C68100001471414 Fmul
                temp_470 = temp_465 * temp_465;
                // 0x000D90: 0x59A2198003373232 Ffma
                temp_471 = 0.0 - temp_467;
                temp_472 = fma(temp_468, temp_467, temp_471);
                // 0x000D98: 0x5C68100001573434 Fmul
                temp_473 = temp_462 * temp_469;
                // 0x000DA8: 0x5C5C30000FF73615 Fadd
                temp_474 = temp_445 + -0.0;
                temp_475 = clamp(temp_474, 0.0, 1.0);
                // 0x000DB0: 0x59A10A0001473614 Ffma
                temp_476 = 0.0 - temp_470;
                temp_477 = fma(temp_445, temp_476, temp_470);
                // 0x000DB8: 0x51A0190400173332 Ffma
                temp_478 = fma(temp_467, temp_472, fp_c1.data[0].y);
                // 0x000DC8: 0x5C90008003470034 Rro
                // 0x000DD0: 0x5080000000473232 Mufu
                temp_479 = 1.0 / temp_478;
                // 0x000DD8: 0x59A10A8001572E33 Ffma
                temp_480 = 0.0 - temp_475;
                temp_481 = fma(temp_168, temp_480, temp_475);
                // 0x000DE8: 0x5080000000273434 Mufu
                temp_482 = exp2(temp_473);
                // 0x000DF0: 0x5C5C100001473614 Fadd
                temp_483 = temp_445 + temp_477;
                temp_484 = clamp(temp_483, 0.0, 1.0);
                // 0x000DF8: 0x5C58100003372E33 Fadd
                temp_485 = temp_168 + temp_481;
                // 0x000E08: 0x5080000000473333 Mufu
                temp_486 = 1.0 / temp_485;
                // 0x000E10: 0x5C68100003271132 Fmul
                temp_487 = temp_464 * temp_479;
                // 0x000E18: 0x59A11A0003470611 Ffma
                temp_488 = 0.0 - temp_482;
                temp_489 = fma(temp_217, temp_488, temp_482);
                // 0x000E28: 0x5C68100000C7100C Fmul
                temp_490 = temp_398 * temp_450;
                // 0x000E30: 0x5C68100000D7100D Fmul
                temp_491 = temp_398 * temp_454;
                // 0x000E38: 0x5C68100003273232 Fmul
                temp_492 = temp_487 * temp_487;
                // 0x000E48: 0x5C58100001170611 Fadd
                temp_493 = temp_217 + temp_489;
                // 0x000E50: 0x5C68100003372C33 Fmul
                temp_494 = temp_204 * temp_486;
                // 0x000E58: 0x5C68100002271022 Fmul
                temp_495 = temp_398 * temp_460;
                // 0x000E68: 0x59A11A0003470810 Ffma
                temp_496 = 0.0 - temp_482;
                temp_497 = fma(temp_196, temp_496, temp_482);
                // 0x000E70: 0x59A11A0003470734 Ffma
                temp_498 = 0.0 - temp_482;
                temp_499 = fma(temp_218, temp_498, temp_482);
                // 0x000E78: 0x5C68100003373232 Fmul
                temp_500 = temp_492 * temp_494;
                // 0x000E88: 0x4C68101406271111 Fmul
                temp_501 = temp_493 * fp_c5.data[24].z;
                // 0x000E90: 0x5C58100001070810 Fadd
                temp_502 = temp_196 + temp_497;
                // 0x000E98: 0x5C58100003470734 Fadd
                temp_503 = temp_218 + temp_499;
                // 0x000EA8: 0x5C68100003271532 Fmul
                temp_504 = temp_475 * temp_500;
                // 0x000EB0: 0x5C68100001170C11 Fmul
                temp_505 = temp_490 * temp_501;
                // 0x000EB8: 0x5C68100001470C0C Fmul
                temp_506 = temp_490 * temp_484;
                // 0x000EC8: 0x4C68101406271010 Fmul
                temp_507 = temp_502 * fp_c5.data[24].z;
                // 0x000ED0: 0x4C68101406273434 Fmul
                temp_508 = temp_503 * fp_c5.data[24].z;
                // 0x000ED8: 0x5C68100003271111 Fmul
                temp_509 = temp_505 * temp_504;
                // 0x000EE8: 0x49A0098400670C13 Ffma
                temp_510 = fma(temp_506, fp_c1.data[1].z, temp_282);
                // 0x000EF0: 0x5C68100001070D10 Fmul
                temp_511 = temp_491 * temp_507;
                // 0x000EF8: 0x5C68100003472234 Fmul
                temp_512 = temp_495 * temp_508;
                // 0x000F08: 0x5C68100001470D0D Fmul
                temp_513 = temp_491 * temp_484;
                // 0x000F10: 0x5C68100001472214 Fmul
                temp_514 = temp_495 * temp_484;
                // 0x000F18: 0x49A005040057110A Ffma
                temp_515 = fma(temp_509, fp_c1.data[1].y, temp_283);
                // 0x000F28: 0x5C68100003271010 Fmul
                temp_516 = temp_511 * temp_504;
                // 0x000F30: 0x5C68100003273434 Fmul
                temp_517 = temp_512 * temp_504;
                // 0x000F38: 0x49A00C0400670D18 Ffma
                temp_518 = fma(temp_513, fp_c1.data[1].z, temp_284);
                // 0x000F48: 0x49A00C8400671419 Ffma
                temp_519 = fma(temp_514, fp_c1.data[1].z, temp_285);
                // 0x000F50: 0x49A005840057100B Ffma
                temp_520 = fma(temp_516, fp_c1.data[1].y, temp_286);
                // 0x000F58: 0x49A007840057340F Ffma
                temp_521 = fma(temp_517, fp_c1.data[1].y, temp_287);
                // 0x000F68: 0xF0F800000007000F Sync
                temp_401 = temp_510;
                temp_402 = temp_515;
                temp_403 = temp_518;
                temp_404 = temp_519;
                temp_405 = temp_520;
                temp_406 = temp_521;
            }
            // 0x000F70: 0xE2400FFFA189000F Bra
            temp_282 = temp_401;
            temp_283 = temp_402;
            temp_284 = temp_403;
            temp_285 = temp_404;
            temp_286 = temp_405;
            temp_287 = temp_406;
            temp_288 = temp_402;
            temp_289 = temp_403;
            temp_290 = temp_405;
            temp_291 = temp_404;
            temp_292 = temp_406;
            temp_293 = temp_401;
        }
        while (!temp_295);
        // 0x000F78: 0xF0F800000007000F Sync
    }
    // 0x000F88: 0x5C62578000170E0C Fmnmx
    temp_522 = abs(temp_70);
    temp_523 = abs(temp_69);
    temp_524 = max(temp_522, temp_523);
    // 0x000F90: 0xE003FF87CFF7FF2B Ipa
    // 0x000F98: 0x5C62578001672A0D Fmnmx
    temp_525 = abs(temp_181);
    temp_526 = abs(temp_241);
    temp_527 = max(temp_525, temp_526);
    // 0x000FA8: 0xEF4410000007FF32 Ldl
    temp_528 = uintBitsToFloat(local_memory[0]);
    // 0x000FB0: 0x010000000017F014 Mov32i
    // 0x000FB8: 0x3868104080070323 Fmul
    temp_529 = temp_148 * 4.0;
    // 0x000FC8: 0x4C98079C0207002F Mov
    // 0x000FD0: 0x5C60578000C7120C Fmnmx
    temp_530 = abs(temp_68);
    temp_531 = max(temp_530, temp_524);
    // 0x000FD8: 0x5C60578000D7170D Fmnmx
    temp_532 = abs(temp_272);
    temp_533 = max(temp_532, temp_527);
    // 0x000FE8: 0x5080000000470C0C Mufu
    temp_534 = 1.0 / temp_531;
    // 0x000FF0: 0x3859103F80070430 Fadd
    temp_535 = 0.0 - temp_162;
    temp_536 = temp_535 + 1.0;
    // 0x000FF8: 0x5080000000470D0D Mufu
    temp_537 = 1.0 / temp_533;
    // 0x001008: 0x5C69100000C71212 Fmul
    temp_538 = 0.0 - temp_534;
    temp_539 = temp_68 * temp_538;
    // 0x001010: 0x5C68100000C70E10 Fmul
    temp_540 = temp_70 * temp_534;
    // 0x001018: 0x5080000000472B2B Mufu
    // 0x001028: 0x5C68100000C70111 Fmul
    temp_541 = temp_69 * temp_534;
    // 0x001030: 0x5C68100000D72A15 Fmul
    temp_542 = temp_181 * temp_537;
    // 0x001038: 0x5C68100000D71616 Fmul
    temp_543 = temp_241 * temp_537;
    // 0x001048: 0x5C69100000D71717 Fmul
    temp_544 = 0.0 - temp_537;
    temp_545 = temp_272 * temp_544;
    // 0x001050: 0xC0BA0163EFF7100C Tex
    temp_546 = textureLod(fp_t_tcb_16, vec3(temp_540, temp_541, temp_539), 0.0).xyz;
    temp_547 = temp_546.x;
    temp_548 = temp_546.y;
    temp_549 = temp_546.z;
    // 0x001058: 0x38681040E007032A Fmul
    temp_550 = temp_148 * 7.0;
    // 0x001068: 0xE043FF9102B7FF2C Ipa
    temp_551 = in_attr9.x;
    // 0x001070: 0x5C98078001270022 Mov
    // 0x001078: 0xE043FF9142B7FF2D Ipa
    temp_552 = in_attr9.y;
    // 0x001088: 0x3859103F80070303 Fadd
    temp_553 = 0.0 - temp_148;
    temp_554 = temp_553 + 1.0;
    // 0x001090: 0xE043FF9182B7FF2E Ipa
    temp_555 = in_attr9.z;
    // 0x001098: 0xC1BA0143F2A71414 Tex
    temp_556 = textureLod(fp_t_tcb_14, vec4(temp_542, temp_543, temp_545, float(1)), temp_550).xyz;
    temp_557 = temp_556.x;
    temp_558 = temp_556.y;
    temp_559 = temp_556.z;
    // 0x0010A8: 0xD9A2018232271010 Texs
    temp_560 = textureLod(fp_t_tcb_18, vec3(temp_540, temp_541, temp_539), temp_529).xyz;
    temp_561 = temp_560.x;
    temp_562 = temp_560.y;
    temp_563 = temp_560.z;
    // 0x0010B0: 0xDEBA0000C2F72C2C TexB
    temp_564 = texture(fp_t_cb7_20, vec3(temp_551, temp_552, temp_555)).x;
    // 0x0010B8: 0x010410676C97F031 Mov32i
    // 0x0010C8: 0x5C68100000370303 Fmul
    temp_565 = temp_554 * temp_554;
    // 0x0010D0: 0x49A013980A170A27 Ffma
    temp_566 = fma(temp_288, fp_c6.data[40].y, temp_275);
    // 0x0010D8: 0x49A01B980A171837 Ffma
    temp_567 = fma(temp_289, fp_c6.data[40].y, temp_222);
    // 0x0010E8: 0x4C6810180907300A Fmul
    temp_568 = temp_536 * fp_c6.data[36].x;
    // 0x0010F0: 0x0103E2CD9E87F018 Mov32i
    // 0x0010F8: 0x5080400000370A0A Mufu
    temp_569 = abs(temp_568);
    temp_570 = log2(temp_569);
    // 0x001108: 0x49A0188400A70417 Ffma
    temp_571 = fma(temp_162, fp_c1.data[2].z, 8.40400028);
    // 0x001110: 0x5C68100000370303 Fmul
    temp_572 = temp_565 * temp_565;
    // 0x001118: 0x1E23E468DB970412 Fmul32i
    temp_573 = temp_162 * 0.193900004;
    // 0x001128: 0x49A014180A170B28 Ffma
    temp_574 = fma(temp_290, fp_c6.data[40].y, temp_280);
    // 0x001130: 0x49A004980A171909 Ffma
    temp_575 = fma(temp_291, fp_c6.data[40].y, temp_251);
    // 0x001138: 0x49A014980A170F29 Ffma
    temp_576 = fma(temp_292, fp_c6.data[40].y, temp_281);
    // 0x001148: 0x51A00B8400B70417 Ffma
    temp_577 = fma(temp_162, temp_571, fp_c1.data[2].w);
    // 0x001150: 0x49A20C0400C70318 Ffma
    temp_578 = fma(temp_572, fp_c1.data[3].x, -0.168799996);
    // 0x001158: 0x49A009040077030B Ffma
    temp_579 = fma(temp_572, fp_c1.data[1].w, temp_573);
    // 0x001168: 0x5080000000373012 Mufu
    temp_580 = log2(temp_536);
    // 0x001170: 0x0103F0000007F022 Mov32i
    // 0x001178: 0x4C98079800A7002A Mov
    // 0x001188: 0x4C68101808771B1B Fmul
    temp_581 = temp_89 * fp_c6.data[33].w;
    // 0x001190: 0x51A00B8400D70419 Ffma
    temp_582 = fma(temp_162, temp_577, fp_c1.data[3].y);
    // 0x001198: 0x5C6810000187030F Fmul
    temp_583 = temp_572 * temp_578;
    // 0x0011A8: 0x088BF05D63970B17 Fadd32i
    temp_584 = temp_579 + -0.522800028;
    // 0x0011B0: 0x4C68101809170A0A Fmul
    temp_585 = temp_570 * fp_c6.data[36].y;
    // 0x0011B8: 0x32A0113F0007010B Ffma
    temp_586 = fma(temp_69, 0.5, 0.5);
    // 0x0011C8: 0x4C98079800970022 Mov
    // 0x0011D0: 0x4C9807980967002E Mov
    // 0x0011D8: 0x5C60138001970F0F Fmnmx
    temp_587 = min(temp_583, temp_582);
    // 0x0011E8: 0x5C68100001770418 Fmul
    temp_588 = temp_162 * temp_584;
    // 0x0011F0: 0x0104066978D7F019 Mov32i
    // 0x0011F8: 0x4C68101808971204 Fmul
    temp_589 = temp_580 * fp_c6.data[34].y;
    // 0x001208: 0x5C90008000A70017 Rro
    // 0x001210: 0x4C98079408270012 Mov
    // 0x001218: 0x5084000000271717 Mufu
    temp_590 = exp2(temp_585);
    temp_591 = clamp(temp_590, 0.0, 1.0);
    // 0x001228: 0x4C98079800870001 Mov
    // 0x001230: 0x49A20C840087030A Ffma
    temp_592 = fma(temp_572, fp_c1.data[2].x, -3.60299993);
    // 0x001238: 0x4C9807980B47002F Mov
    // 0x001248: 0x5C90008000470019 Rro
    // 0x001250: 0x4C59101800572204 Fadd
    temp_593 = 0.0 - fp_c6.data[2].y;
    temp_594 = temp_593 + fp_c6.data[1].y;
    // 0x001258: 0x5084000000271919 Mufu
    temp_595 = exp2(temp_589);
    temp_596 = clamp(temp_595, 0.0, 1.0);
    // 0x001268: 0x4C59101800672A22 Fadd
    temp_597 = 0.0 - fp_c6.data[2].z;
    temp_598 = temp_597 + fp_c6.data[1].z;
    // 0x001270: 0x4C58101408172E2A Fadd
    temp_599 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001278: 0x51A005040097032D Ffma
    temp_600 = fma(temp_572, temp_592, fp_c1.data[2].y);
    // 0x001288: 0xE04BFF9042B7FF0A Ipa
    temp_601 = in_attr8.y;
    temp_602 = clamp(temp_601, 0.0, 1.0);
    // 0x001290: 0x4C59101800470101 Fadd
    temp_603 = 0.0 - fp_c6.data[2].x;
    temp_604 = temp_603 + fp_c6.data[1].x;
    // 0x001298: 0x4C9807980867002E Mov
    // 0x0012A8: 0x51A0021800970B04 Ffma
    temp_605 = fma(temp_586, temp_594, fp_c6.data[2].y);
    // 0x0012B0: 0xF0F0000034470000 Depbar
    // 0x0012B8: 0x51A217980B471D1D Ffma
    temp_606 = 0.0 - fp_c6.data[45].x;
    temp_607 = fma(temp_92, fp_c6.data[45].x, temp_606);
    // 0x0012C8: 0x5C68100001772A17 Fmul
    temp_608 = temp_599 * temp_591;
    // 0x0012D0: 0x4C6810140627122A Fmul
    temp_609 = fp_c5.data[32].z * fp_c5.data[24].z;
    // 0x0012D8: 0x59A00C0002D70318 Ffma
    temp_610 = fma(temp_572, temp_600, temp_588);
    // 0x0012E8: 0x5C5C30000FF70F2D Fadd
    temp_611 = temp_587 + -0.0;
    temp_612 = clamp(temp_611, 0.0, 1.0);
    // 0x0012F0: 0x51A0009800870B01 Ffma
    temp_613 = fma(temp_586, temp_604, fp_c6.data[2].x);
    // 0x0012F8: 0x4C68101808871903 Fmul
    temp_614 = temp_596 * fp_c6.data[34].x;
    // 0x001308: 0x4C68101808C71712 Fmul
    temp_615 = temp_608 * fp_c6.data[35].x;
    // 0x001310: 0x4C68101808E7170F Fmul
    temp_616 = temp_608 * fp_c6.data[35].z;
    // 0x001318: 0x51A0111800A70B0B Ffma
    temp_617 = fma(temp_586, temp_598, fp_c6.data[2].z);
    // 0x001328: 0x386C104248070822 Fmul
    temp_618 = temp_196 * 50.0;
    temp_619 = clamp(temp_618, 0.0, 1.0);
    // 0x001330: 0x4C5C100400E71818 Fadd
    temp_620 = temp_610 + fp_c1.data[3].z;
    temp_621 = clamp(temp_620, 0.0, 1.0);
    // 0x001338: 0x51A0171808670303 Ffma
    temp_622 = fma(temp_614, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001348: 0x59A0138002A71227 Ffma
    temp_623 = fma(temp_615, temp_609, temp_566);
    // 0x001350: 0x49A1091408271212 Ffma
    temp_624 = 0.0 - fp_c5.data[32].z;
    temp_625 = fma(temp_615, temp_624, temp_615);
    // 0x001358: 0x59A0148002A70F29 Ffma
    temp_626 = fma(temp_616, temp_609, temp_576);
    // 0x001368: 0x49A1079408270F0F Ffma
    temp_627 = 0.0 - fp_c5.data[32].z;
    temp_628 = fma(temp_616, temp_627, temp_616);
    // 0x001370: 0x4C68101808D71719 Fmul
    temp_629 = temp_608 * fp_c6.data[35].y;
    // 0x001378: 0x5C68100002D72222 Fmul
    temp_630 = temp_619 * temp_612;
    // 0x001388: 0x5C59100001872D2D Fadd
    temp_631 = 0.0 - temp_612;
    temp_632 = temp_631 + temp_621;
    // 0x001390: 0x010404000007F017 Mov32i
    // 0x001398: 0x51A217980B471C1C Ffma
    temp_633 = 0.0 - fp_c6.data[45].x;
    temp_634 = fma(temp_91, fp_c6.data[45].x, temp_633);
    // 0x0013A8: 0x5C58100000F7090F Fadd
    temp_635 = temp_575 + temp_628;
    // 0x0013B0: 0xE043FF9002B7FF09 Ipa
    temp_636 = in_attr8.x;
    // 0x0013B8: 0x59A0140002A71928 Ffma
    temp_637 = fma(temp_629, temp_609, temp_574);
    // 0x0013C8: 0x49A10C9408271919 Ffma
    temp_638 = 0.0 - fp_c5.data[32].z;
    temp_639 = fma(temp_629, temp_638, temp_629);
    // 0x0013D0: 0x59A0110002D70606 Ffma
    temp_640 = fma(temp_217, temp_632, temp_630);
    // 0x0013D8: 0x59A0110002D70808 Ffma
    temp_641 = fma(temp_196, temp_632, temp_630);
    // 0x0013E8: 0x59A0110002D70707 Ffma
    temp_642 = fma(temp_218, temp_632, temp_630);
    // 0x0013F0: 0x51A217980B470202 Ffma
    temp_643 = 0.0 - fp_c6.data[45].x;
    temp_644 = fma(temp_93, fp_c6.data[45].x, temp_643);
    // 0x0013F8: 0x5C58100001973737 Fadd
    temp_645 = temp_567 + temp_639;
    // 0x001408: 0x4C68101406270606 Fmul
    temp_646 = temp_640 * fp_c5.data[24].z;
    // 0x001410: 0x4C68101406270707 Fmul
    temp_647 = temp_642 * fp_c5.data[24].z;
    // 0x001418: 0xF0F0000034370000 Depbar
    // 0x001428: 0x49A019180A171313 Ffma
    temp_648 = fma(temp_293, fp_c6.data[40].y, temp_528);
    // 0x001430: 0x5C58100001271313 Fadd
    temp_649 = temp_648 + temp_625;
    // 0x001438: 0xF0F0000034270000 Depbar
    // 0x001448: 0x49A0060400670112 Ffma
    temp_650 = fma(temp_613, fp_c1.data[1].z, temp_547);
    // 0x001450: 0x49A0068400670404 Ffma
    temp_651 = fma(temp_605, fp_c1.data[1].z, temp_548);
    // 0x001458: 0x49A0070400670B0C Ffma
    temp_652 = fma(temp_617, fp_c1.data[1].z, temp_549);
    // 0x001468: 0x33A00BC000070A01 Ffma
    temp_653 = fma(temp_602, -2.0, 3.0);
    // 0x001470: 0x5C68100000A70A0A Fmul
    temp_654 = temp_602 * temp_602;
    // 0x001478: 0x59A2090000372020 Ffma
    temp_655 = 0.0 - temp_650;
    temp_656 = fma(temp_86, temp_622, temp_655);
    // 0x001488: 0x59A2020000372121 Ffma
    temp_657 = 0.0 - temp_651;
    temp_658 = fma(temp_87, temp_622, temp_657);
    // 0x001490: 0x59A2060000371A03 Ffma
    temp_659 = 0.0 - temp_652;
    temp_660 = fma(temp_88, temp_622, temp_659);
    // 0x001498: 0x5C68100000A70101 Fmul
    temp_661 = temp_653 * temp_654;
    // 0x0014A8: 0x4C9807980287000A Mov
    // 0x0014B0: 0x59A0090001B72020 Ffma
    temp_662 = fma(temp_656, temp_581, temp_650);
    // 0x0014B8: 0x59A0020001B72121 Ffma
    temp_663 = fma(temp_658, temp_581, temp_651);
    // 0x0014C8: 0xF0F0000034170000 Depbar
    // 0x0014D0: 0x49A0081808571410 Ffma
    temp_664 = fma(temp_557, fp_c6.data[33].y, temp_561);
    // 0x0014D8: 0x59A0060001B7030C Ffma
    temp_665 = fma(temp_660, temp_581, temp_652);
    // 0x0014E8: 0x49A0089808571511 Ffma
    temp_666 = fma(temp_558, fp_c6.data[33].y, temp_562);
    // 0x0014F0: 0x4C68101406270803 Fmul
    temp_667 = temp_641 * fp_c5.data[24].z;
    // 0x0014F8: 0x5C58100001372013 Fadd
    temp_668 = temp_662 + temp_649;
    // 0x001508: 0x5C58100003772137 Fadd
    temp_669 = temp_663 + temp_645;
    // 0x001510: 0x59A0138001070627 Ffma
    temp_670 = fma(temp_646, temp_664, temp_623);
    // 0x001518: 0x5C58100000F70C0C Fadd
    temp_671 = temp_665 + temp_635;
    // 0x001528: 0x49A0119808571616 Ffma
    temp_672 = fma(temp_559, fp_c6.data[33].y, temp_563);
    // 0x001530: 0x4C98079802970008 Mov
    // 0x001538: 0x59A1098001370504 Ffma
    temp_673 = 0.0 - temp_668;
    temp_674 = fma(temp_99, temp_673, temp_668);
    // 0x001548: 0x59A0140001170328 Ffma
    temp_675 = fma(temp_667, temp_666, temp_637);
    // 0x001550: 0x59A11B8003770506 Ffma
    temp_676 = 0.0 - temp_669;
    temp_677 = fma(temp_99, temp_676, temp_669);
    // 0x001558: 0x59A1060000C70505 Ffma
    temp_678 = 0.0 - temp_671;
    temp_679 = fma(temp_99, temp_678, temp_671);
    // 0x001568: 0x59A0148001670707 Ffma
    temp_680 = fma(temp_647, temp_672, temp_626);
    // 0x001570: 0x51A0051802871C03 Ffma
    temp_681 = fma(temp_634, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001578: 0x59A0138000471E27 Ffma
    temp_682 = fma(temp_10, temp_674, temp_670);
    // 0x001588: 0x51A0041802971D04 Ffma
    temp_683 = fma(temp_607, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001590: 0x59A0140000671F06 Ffma
    temp_684 = fma(temp_11, temp_677, temp_675);
    // 0x001598: 0x4C98079802A70008 Mov
    // 0x0015A8: 0x59A0038000570007 Ffma
    temp_685 = fma(temp_12, temp_679, temp_680);
    // 0x0015B0: 0x4C68101803770101 Fmul
    temp_686 = temp_661 * fp_c6.data[13].w;
    // 0x0015B8: 0x5C68100002772424 Fmul
    temp_687 = temp_277 * temp_682;
    // 0x0015C8: 0x5C68100000672525 Fmul
    temp_688 = temp_279 * temp_684;
    // 0x0015D0: 0x51A0041802A70200 Ffma
    temp_689 = fma(temp_644, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0015D8: 0xE043FF8C82B7FF08 Ipa
    temp_690 = in_attr4.z;
    // 0x0015E8: 0x5C68100000772626 Fmul
    temp_691 = temp_274 * temp_685;
    // 0x0015F0: 0x49A504980BC72C09 Ffma
    temp_692 = 0.0 - fp_c6.data[47].x;
    temp_693 = fma(temp_564, temp_692, temp_636);
    temp_694 = clamp(temp_693, 0.0, 1.0);
    // 0x0015F8: 0x5C58300000372405 Fadd
    temp_695 = 0.0 - temp_681;
    temp_696 = temp_687 + temp_695;
    // 0x001608: 0x5080000000370909 Mufu
    temp_697 = log2(temp_694);
    // 0x001610: 0x5C58300000472502 Fadd
    temp_698 = 0.0 - temp_683;
    temp_699 = temp_688 + temp_698;
    // 0x001618: 0x49A001980BF70506 Ffma
    temp_700 = fma(temp_696, fp_c6.data[47].w, temp_681);
    // 0x001628: 0x5C58300000072605 Fadd
    temp_701 = 0.0 - temp_689;
    temp_702 = temp_691 + temp_701;
    // 0x001630: 0x49A002180BF70202 Ffma
    temp_703 = fma(temp_699, fp_c6.data[47].w, temp_683);
    // 0x001638: 0x5C60178000670306 Fmnmx
    temp_704 = max(temp_681, temp_700);
    // 0x001648: 0x4C68101803170907 Fmul
    temp_705 = temp_697 * fp_c6.data[12].y;
    // 0x001650: 0x49A000180BF70505 Ffma
    temp_706 = fma(temp_702, fp_c6.data[47].w, temp_689);
    // 0x001658: 0x49A2009803470103 Ffma
    temp_707 = 0.0 - temp_686;
    temp_708 = fma(temp_686, fp_c6.data[13].x, temp_707);
    // 0x001668: 0x5C60178000270402 Fmnmx
    temp_709 = max(temp_683, temp_703);
    // 0x001670: 0x49A2009803570104 Ffma
    temp_710 = 0.0 - temp_686;
    temp_711 = fma(temp_686, fp_c6.data[13].y, temp_710);
    // 0x001678: 0x5C90008000770007 Rro
    // 0x001688: 0x5080000000270707 Mufu
    temp_712 = exp2(temp_705);
    // 0x001690: 0x5C60178000570005 Fmnmx
    temp_713 = max(temp_689, temp_706);
    // 0x001698: 0x49A2009803670100 Ffma
    temp_714 = 0.0 - temp_686;
    temp_715 = fma(temp_686, fp_c6.data[13].z, temp_714);
    // 0x0016A8: 0x59A0030000370601 Ffma
    temp_716 = fma(temp_704, temp_708, temp_704);
    // 0x0016B0: 0x59A0010000470202 Ffma
    temp_717 = fma(temp_709, temp_711, temp_709);
    // 0x0016B8: 0x4C58100C03870808 Fadd
    temp_718 = temp_690 + fp_c3.data[14].x;
    // 0x0016C8: 0x5C9807800FF70006 Mov
    // 0x0016D0: 0x59A0028000070500 Ffma
    temp_719 = fma(temp_713, temp_715, temp_713);
    // 0x0016D8: 0x5C59100000172401 Fadd
    temp_720 = 0.0 - temp_687;
    temp_721 = temp_720 + temp_716;
    // 0x0016E8: 0x5C59100000272502 Fadd
    temp_722 = 0.0 - temp_688;
    temp_723 = temp_722 + temp_717;
    // 0x0016F0: 0x0103EC000007F005 Mov32i
    // 0x0016F8: 0x4C68101802B70704 Fmul
    temp_724 = temp_712 * fp_c6.data[10].w;
    // 0x001708: 0x5C59100000072603 Fadd
    temp_725 = 0.0 - temp_691;
    temp_726 = temp_725 + temp_719;
    // 0x001710: 0x0103F8000007F007 Mov32i
    // 0x001718: 0x59A0120000470100 Ffma
    temp_727 = fma(temp_721, temp_724, temp_687);
    // 0x001728: 0x59A0128000470201 Ffma
    temp_728 = fma(temp_723, temp_724, temp_688);
    // 0x001730: 0x59A0130000470302 Ffma
    temp_729 = fma(temp_726, temp_724, temp_691);
    // 0x001738: 0x0103F8000007F003 Mov32i
    // 0x001748: 0x49A37F8C03C70804 Ffma
    temp_730 = 0.0 - fp_c3.data[15].x;
    temp_731 = fma(temp_718, temp_730, -0.0);
    // 0x001750: 0xE30000000007000F Exit
    out_attr0.x = temp_727;
    out_attr0.y = temp_728;
    out_attr0.z = temp_729;
    out_attr0.w = 1.0;
    out_attr1.x = temp_731;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
