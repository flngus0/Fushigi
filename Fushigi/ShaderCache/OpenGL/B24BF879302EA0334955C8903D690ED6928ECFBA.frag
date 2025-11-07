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
    uint temp_185;
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
    int temp_196;
    precise float temp_197;
    int temp_198;
    uint temp_199;
    uint temp_200;
    int temp_201;
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
    bool temp_242;
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
    int temp_291;
    bool temp_292;
    int temp_293;
    int temp_294;
    int temp_295;
    int temp_296;
    int temp_297;
    uint temp_298;
    uint temp_299;
    int temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    int temp_305;
    int temp_306;
    uint temp_307;
    uint temp_308;
    int temp_309;
    precise float temp_310;
    int temp_311;
    uint temp_312;
    int temp_313;
    precise float temp_314;
    int temp_315;
    uint temp_316;
    uint temp_317;
    int temp_318;
    precise float temp_319;
    int temp_320;
    uint temp_321;
    int temp_322;
    precise float temp_323;
    int temp_324;
    uint temp_325;
    uint temp_326;
    int temp_327;
    precise float temp_328;
    int temp_329;
    uint temp_330;
    int temp_331;
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
    int temp_351;
    uint temp_352;
    uint temp_353;
    int temp_354;
    precise float temp_355;
    precise float temp_356;
    precise float temp_357;
    int temp_358;
    uint temp_359;
    uint temp_360;
    int temp_361;
    precise float temp_362;
    int temp_363;
    uint temp_364;
    int temp_365;
    precise float temp_366;
    precise float temp_367;
    precise float temp_368;
    int temp_369;
    uint temp_370;
    uint temp_371;
    int temp_372;
    precise float temp_373;
    int temp_374;
    uint temp_375;
    int temp_376;
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
    uint temp_393;
    int temp_394;
    precise float temp_395;
    bool temp_396;
    uint temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    uint temp_405;
    precise float temp_406;
    bool temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    int temp_411;
    uint temp_412;
    uint temp_413;
    int temp_414;
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
    uint temp_442;
    uint temp_443;
    int temp_444;
    precise float temp_445;
    int temp_446;
    uint temp_447;
    int temp_448;
    precise float temp_449;
    precise float temp_450;
    int temp_451;
    uint temp_452;
    uint temp_453;
    int temp_454;
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
    precise vec3 temp_540;
    precise float temp_541;
    precise float temp_542;
    precise float temp_543;
    precise float temp_544;
    precise float temp_545;
    precise float temp_546;
    precise float temp_547;
    precise float temp_548;
    precise float temp_549;
    precise vec3 temp_550;
    precise float temp_551;
    precise float temp_552;
    precise float temp_553;
    precise vec3 temp_554;
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
    // 0x000008: 0x0103F0000007F02E Mov32i
    // 0x000010: 0xE003FF87CFF7FF0C Ipa
    // 0x000018: 0x5080000000470C0C Mufu
    // 0x000028: 0xE043FF8E00C7FF0B Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E40C7FF0E Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xD830026FF0E70B02 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xD8240360D0E70B24 Texs
    temp_5 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    // 0x000050: 0xD822024000E70B1A Texs
    temp_9 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    temp_12 = temp_9.z;
    // 0x000058: 0xE043FF8900C7FF07 Ipa
    temp_13 = in_attr1.x;
    // 0x000068: 0xE043FF8940C7FF08 Ipa
    temp_14 = in_attr1.y;
    // 0x000070: 0xE043FF8A00C7FF01 Ipa
    temp_15 = in_attr2.x;
    // 0x000078: 0xE043FF8980C7FF09 Ipa
    temp_16 = in_attr1.z;
    // 0x000088: 0xE043FF8A40C7FF04 Ipa
    temp_17 = in_attr2.y;
    // 0x000090: 0xE043FF8800C7FF0F Ipa
    temp_18 = in_attr0.x;
    // 0x000098: 0xE043FF8A80C7FF05 Ipa
    temp_19 = in_attr2.z;
    // 0x0000A8: 0xE043FF8840C7FF10 Ipa
    temp_20 = in_attr0.y;
    // 0x0000B0: 0xE043FF8880C7FF0E Ipa
    temp_21 = in_attr0.z;
    // 0x0000B8: 0x5C6810000077070A Fmul
    temp_22 = temp_13 * temp_13;
    // 0x0000C8: 0x5C68100000170106 Fmul
    temp_23 = temp_15 * temp_15;
    // 0x0000D0: 0x5C68100000F70F0B Fmul
    temp_24 = temp_18 * temp_18;
    // 0x0000D8: 0x59A005000087080A Ffma
    temp_25 = fma(temp_14, temp_14, temp_22);
    // 0x0000E8: 0x59A0030000470406 Ffma
    temp_26 = fma(temp_17, temp_17, temp_23);
    // 0x0000F0: 0x59A0058001071011 Ffma
    temp_27 = fma(temp_20, temp_20, temp_24);
    // 0x0000F8: 0x59A005000097090A Ffma
    temp_28 = fma(temp_16, temp_16, temp_25);
    // 0x000108: 0x5080000000570A0A Mufu
    temp_29 = inversesqrt(temp_28);
    // 0x000110: 0x59A0030000570506 Ffma
    temp_30 = fma(temp_19, temp_19, temp_26);
    // 0x000118: 0x5080000000570606 Mufu
    temp_31 = inversesqrt(temp_30);
    // 0x000128: 0x59A0088000E70E11 Ffma
    temp_32 = fma(temp_21, temp_21, temp_27);
    // 0x000130: 0x5080000000571111 Mufu
    temp_33 = inversesqrt(temp_32);
    // 0x000138: 0x5C68100000A7080B Fmul
    temp_34 = temp_14 * temp_29;
    // 0x000148: 0x5C68100000A70908 Fmul
    temp_35 = temp_16 * temp_29;
    // 0x000150: 0x5C68100000A70707 Fmul
    temp_36 = temp_13 * temp_29;
    // 0x000158: 0x5C68100000670101 Fmul
    temp_37 = temp_15 * temp_31;
    // 0x000168: 0x5C68100000670404 Fmul
    temp_38 = temp_17 * temp_31;
    // 0x000170: 0x5C68100000670505 Fmul
    temp_39 = temp_19 * temp_31;
    // 0x000178: 0x5C68100001170F0F Fmul
    temp_40 = temp_18 * temp_33;
    // 0x000188: 0x5C68100001171006 Fmul
    temp_41 = temp_20 * temp_33;
    // 0x000190: 0x5C68100001170E0E Fmul
    temp_42 = temp_21 * temp_33;
    // 0x000198: 0xF0F0000034270000 Depbar
    // 0x0001A8: 0x5C68100000370309 Fmul
    temp_43 = temp_4 * temp_4;
    // 0x0001B0: 0x5C68100000370101 Fmul
    temp_44 = temp_37 * temp_4;
    // 0x0001B8: 0x5C68100000370404 Fmul
    temp_45 = temp_38 * temp_4;
    // 0x0001C8: 0x5C68100000370505 Fmul
    temp_46 = temp_39 * temp_4;
    // 0x0001D0: 0x59A0048000270209 Ffma
    temp_47 = fma(temp_3, temp_3, temp_43);
    // 0x0001D8: 0x59A0008000770201 Ffma
    temp_48 = fma(temp_3, temp_36, temp_44);
    // 0x0001E8: 0xE003FF874FF7FF07 Ipa
    temp_49 = gl_FragCoord.y;
    temp_50 = support_buffer.render_scale[0];
    temp_51 = temp_49 / temp_50;
    // 0x0001F0: 0x59A0020000B70204 Ffma
    temp_52 = fma(temp_3, temp_34, temp_45);
    // 0x0001F8: 0x59A0028000870205 Ffma
    temp_53 = fma(temp_3, temp_35, temp_46);
    // 0x000208: 0x385D103F80070909 Fadd
    temp_54 = 0.0 - temp_47;
    temp_55 = temp_54 + 1.0;
    temp_56 = clamp(temp_55, 0.0, 1.0);
    // 0x000210: 0x5080000000870913 Mufu
    temp_57 = sqrt(temp_56);
    // 0x000218: 0x59A0008001370F0F Ffma
    temp_58 = fma(temp_40, temp_57, temp_48);
    // 0x000228: 0x59A0020001370604 Ffma
    temp_59 = fma(temp_41, temp_57, temp_52);
    // 0x000230: 0xE003FF870FF7FF06 Ipa
    temp_60 = gl_FragCoord.x;
    temp_61 = support_buffer.render_scale[0];
    temp_62 = temp_60 / temp_61;
    // 0x000238: 0x59A0028001370E05 Ffma
    temp_63 = fma(temp_42, temp_57, temp_53);
    // 0x000248: 0x5C68100000F70F01 Fmul
    temp_64 = temp_58 * temp_58;
    // 0x000250: 0x59A0008000470402 Ffma
    temp_65 = fma(temp_59, temp_59, temp_64);
    // 0x000258: 0x59A0010000570502 Ffma
    temp_66 = fma(temp_63, temp_63, temp_65);
    // 0x000268: 0x5080000000570202 Mufu
    temp_67 = inversesqrt(temp_66);
    // 0x000270: 0x5C68100000270512 Fmul
    temp_68 = temp_63 * temp_67;
    // 0x000278: 0x5C68100000270401 Fmul
    temp_69 = temp_59 * temp_67;
    // 0x000288: 0x5C68100000270F0E Fmul
    temp_70 = temp_58 * temp_67;
    // 0x000290: 0x4C68100C04A70605 Fmul
    temp_71 = temp_62 * fp_c3.data[18].z;
    // 0x000298: 0x4C68100C04B70706 Fmul
    temp_72 = temp_51 * fp_c3.data[18].w;
    // 0x0002A8: 0x4C68100C00671204 Fmul
    temp_73 = temp_68 * fp_c3.data[1].z;
    // 0x0002B0: 0x4C68100C00271203 Fmul
    temp_74 = temp_68 * fp_c3.data[0].z;
    // 0x0002B8: 0x49A0020C00570104 Ffma
    temp_75 = fma(temp_69, fp_c3.data[1].y, temp_73);
    // 0x0002C8: 0x49A0018C00170103 Ffma
    temp_76 = fma(temp_69, fp_c3.data[0].y, temp_74);
    // 0x0002D0: 0x49A0020C00470E04 Ffma
    temp_77 = fma(temp_70, fp_c3.data[1].x, temp_75);
    // 0x0002D8: 0x49A0018C00070E03 Ffma
    temp_78 = fma(temp_70, fp_c3.data[0].x, temp_76);
    // 0x0002E8: 0x4C69100C03E70404 Fmul
    temp_79 = 0.0 - fp_c3.data[15].z;
    temp_80 = temp_77 * temp_79;
    // 0x0002F0: 0x4C68101808B70303 Fmul
    temp_81 = temp_78 * fp_c6.data[34].w;
    // 0x0002F8: 0x4C68101808B70404 Fmul
    temp_82 = temp_80 * fp_c6.data[34].w;
    // 0x000308: 0x49A0028400270303 Ffma
    temp_83 = fma(temp_81, fp_c1.data[0].z, temp_71);
    // 0x000310: 0x49A003040027041E Ffma
    temp_84 = fma(temp_82, fp_c1.data[0].z, temp_72);
    // 0x000318: 0xD832022201E7031E Texs
    temp_85 = texture(fp_t_tcb_22, vec2(temp_83, temp_84)).xyzw;
    temp_86 = temp_85.x;
    temp_87 = temp_85.y;
    temp_88 = temp_85.z;
    temp_89 = temp_85.w;
    // 0x000328: 0xD82202002067051C Texs
    temp_90 = texture(fp_t_tcb_20, vec2(temp_71, temp_72)).xyz;
    temp_91 = temp_90.x;
    temp_92 = temp_90.y;
    temp_93 = temp_90.z;
    // 0x000330: 0xE043FF8B00C7FF29 Ipa
    temp_94 = in_attr3.x;
    // 0x000338: 0xE043FF8B40C7FF23 Ipa
    temp_95 = in_attr3.y;
    // 0x000348: 0xE043FF8B80C7FF22 Ipa
    temp_96 = in_attr3.z;
    // 0x000350: 0xF0F0000034370000 Depbar
    // 0x000358: 0x4C6810180A072424 Fmul
    temp_97 = temp_6 * fp_c6.data[40].x;
    // 0x000368: 0xE2900000C0000000 Ssy
    // 0x000370: 0x4C98079808770011 Mov
    // 0x000378: 0x385D103F80070D0D Fadd
    temp_98 = 0.0 - temp_8;
    temp_99 = temp_98 + 1.0;
    temp_100 = clamp(temp_99, 0.0, 1.0);
    // 0x000388: 0x5C9807800FF70019 Mov
    // 0x000390: 0x5C68100002972904 Fmul
    temp_101 = temp_94 * temp_94;
    // 0x000398: 0x59A0020002372304 Ffma
    temp_102 = fma(temp_95, temp_95, temp_101);
    // 0x0003A8: 0x59A0020002272204 Ffma
    temp_103 = fma(temp_96, temp_96, temp_102);
    // 0x0003B0: 0x5080000000570404 Mufu
    temp_104 = inversesqrt(temp_103);
    // 0x0003B8: 0x5C69100000472929 Fmul
    temp_105 = 0.0 - temp_104;
    temp_106 = temp_94 * temp_105;
    // 0x0003C8: 0x5C69100000472323 Fmul
    temp_107 = 0.0 - temp_104;
    temp_108 = temp_95 * temp_107;
    // 0x0003D0: 0x5C69100000472222 Fmul
    temp_109 = 0.0 - temp_104;
    temp_110 = temp_96 * temp_109;
    // 0x0003D8: 0x4C58301805C72903 Fadd
    temp_111 = 0.0 - fp_c6.data[23].x;
    temp_112 = temp_106 + temp_111;
    // 0x0003E8: 0x4C58301805D72307 Fadd
    temp_113 = 0.0 - fp_c6.data[23].y;
    temp_114 = temp_108 + temp_113;
    // 0x0003F0: 0x4C58301805E72208 Fadd
    temp_115 = 0.0 - fp_c6.data[23].z;
    temp_116 = temp_110 + temp_115;
    // 0x0003F8: 0x5C68100000370309 Fmul
    temp_117 = temp_112 * temp_112;
    // 0x000408: 0x59A0048000770709 Ffma
    temp_118 = fma(temp_114, temp_114, temp_117);
    // 0x000410: 0x59A0048000870809 Ffma
    temp_119 = fma(temp_116, temp_116, temp_118);
    // 0x000418: 0x5080000000570909 Mufu
    temp_120 = inversesqrt(temp_119);
    // 0x000428: 0x5C68100000970303 Fmul
    temp_121 = temp_112 * temp_120;
    // 0x000430: 0x5C68100000970704 Fmul
    temp_122 = temp_114 * temp_120;
    // 0x000438: 0x5C6810000097080B Fmul
    temp_123 = temp_116 * temp_120;
    // 0x000448: 0x4C69101805C70307 Fmul
    temp_124 = 0.0 - fp_c6.data[23].x;
    temp_125 = temp_121 * temp_124;
    // 0x000450: 0x5C6810000037290A Fmul
    temp_126 = temp_106 * temp_121;
    // 0x000458: 0x5C68100000370E03 Fmul
    temp_127 = temp_70 * temp_121;
    // 0x000468: 0x49A1039805D70408 Ffma
    temp_128 = 0.0 - fp_c6.data[23].y;
    temp_129 = fma(temp_122, temp_128, temp_125);
    // 0x000470: 0x59A0050000472310 Ffma
    temp_130 = fma(temp_108, temp_122, temp_126);
    // 0x000478: 0x59A0018000470104 Ffma
    temp_131 = fma(temp_69, temp_122, temp_127);
    // 0x000488: 0x386013BF80072403 Fmnmx
    temp_132 = min(temp_97, 1.0);
    // 0x000490: 0x01040DF760C7F00A Mov32i
    // 0x000498: 0x5C9807800FF70024 Mov
    // 0x0004A8: 0x49A5041805E70B08 Ffma
    temp_133 = 0.0 - fp_c6.data[23].z;
    temp_134 = fma(temp_123, temp_133, temp_129);
    temp_135 = clamp(temp_134, 0.0, 1.0);
    // 0x0004B0: 0x59A4080000B72210 Ffma
    temp_136 = fma(temp_110, temp_123, temp_130);
    temp_137 = clamp(temp_136, 0.0, 1.0);
    // 0x0004B8: 0x59A4020000B7120B Ffma
    temp_138 = fma(temp_68, temp_123, temp_131);
    temp_139 = clamp(temp_138, 0.0, 1.0);
    // 0x0004C8: 0x4C60178400070303 Fmnmx
    temp_140 = max(temp_132, fp_c1.data[0].x);
    // 0x0004D0: 0x4C69101805C70E04 Fmul
    temp_141 = 0.0 - fp_c6.data[23].x;
    temp_142 = temp_70 * temp_141;
    // 0x0004D8: 0x49A2050400370807 Ffma
    temp_143 = fma(temp_135, fp_c1.data[0].w, -6.98316002);
    // 0x0004E8: 0x49A2050400371009 Ffma
    temp_144 = fma(temp_137, fp_c1.data[0].w, -6.98316002);
    // 0x0004F0: 0x5C68100002970E0A Fmul
    temp_145 = temp_70 * temp_106;
    // 0x0004F8: 0x51A401840007032F Ffma
    temp_146 = fma(temp_140, temp_140, fp_c1.data[0].x);
    temp_147 = clamp(temp_146, 0.0, 1.0);
    // 0x000508: 0x32A0173F0007032E Ffma
    temp_148 = fma(temp_140, 0.5, 0.5);
    // 0x000510: 0x49A1021805D7010F Ffma
    temp_149 = 0.0 - fp_c6.data[23].y;
    temp_150 = fma(temp_69, temp_149, temp_142);
    // 0x000518: 0x5C68100000770808 Fmul
    temp_151 = temp_135 * temp_143;
    // 0x000528: 0x5C68100000971007 Fmul
    temp_152 = temp_137 * temp_144;
    // 0x000530: 0x59A0050002370110 Ffma
    temp_153 = fma(temp_69, temp_108, temp_145);
    // 0x000538: 0x5C68100002F72F09 Fmul
    temp_154 = temp_147 * temp_147;
    // 0x000548: 0x386810418007050A Fmul
    temp_155 = temp_71 * 16.0;
    // 0x000550: 0x5C68120002E72E2E Fmul
    temp_156 = temp_148 * 0.5;
    temp_157 = temp_156 * temp_148;
    // 0x000558: 0x5CA8148000A70A0A F2f
    temp_158 = floor(temp_155);
    // 0x000568: 0x49A5079805E7120F Ffma
    temp_159 = 0.0 - fp_c6.data[23].z;
    temp_160 = fma(temp_68, temp_159, temp_150);
    temp_161 = clamp(temp_160, 0.0, 1.0);
    // 0x000570: 0x59A4080002271204 Ffma
    temp_162 = fma(temp_68, temp_110, temp_153);
    temp_163 = clamp(temp_162, 0.0, 1.0);
    // 0x000578: 0x3868104110070610 Fmul
    temp_164 = temp_72 * 9.0;
    // 0x000588: 0x59A2058000970B09 Ffma
    temp_165 = 0.0 - temp_139;
    temp_166 = fma(temp_139, temp_154, temp_165);
    // 0x000590: 0x5CA8148001070A10 F2f
    temp_167 = floor(temp_164);
    // 0x000598: 0x5C90008000770014 Rro
    // 0x0005A8: 0x59A1078002E70F05 Ffma
    temp_168 = 0.0 - temp_157;
    temp_169 = fma(temp_161, temp_168, temp_161);
    // 0x0005B0: 0xF0F0000034270000 Depbar
    // 0x0005B8: 0x5080000000271414 Mufu
    temp_170 = exp2(temp_152);
    // 0x0005C8: 0x4C58301407B71B07 Fadd
    temp_171 = 0.0 - fp_c5.data[30].w;
    temp_172 = temp_11 + temp_171;
    // 0x0005D0: 0x4C68101801670F13 Fmul
    temp_173 = temp_161 * fp_c6.data[5].z;
    // 0x0005D8: 0x51A0048400170B09 Ffma
    temp_174 = fma(temp_139, temp_166, fp_c1.data[0].y);
    // 0x0005E8: 0x59A1020000472E0B Ffma
    temp_175 = 0.0 - temp_163;
    temp_176 = fma(temp_157, temp_175, temp_163);
    // 0x0005F0: 0x5080000000470909 Mufu
    temp_177 = 1.0 / temp_174;
    // 0x0005F8: 0x5C58100000572E06 Fadd
    temp_178 = temp_157 + temp_169;
    // 0x000608: 0x5C68100000470E2A Fmul
    temp_179 = temp_70 * temp_163;
    // 0x000610: 0x5080000000470606 Mufu
    temp_180 = 1.0 / temp_178;
    // 0x000618: 0x32A005418007102D Ffma
    temp_181 = fma(temp_167, 16.0, temp_158);
    // 0x000628: 0x5C58100000B72E0B Fadd
    temp_182 = temp_157 + temp_176;
    // 0x000630: 0x5CB0118002D70A2D F2i
    temp_183 = trunc(temp_181);
    temp_184 = max(temp_183, 0.0);
    temp_185 = uint(temp_184);
    // 0x000638: 0x5C90008000870010 Rro
    // 0x000648: 0x5080000000470B0B Mufu
    temp_186 = 1.0 / temp_182;
    // 0x000650: 0x4C58301407B70008 Fadd
    temp_187 = 0.0 - fp_c5.data[30].w;
    temp_188 = temp_12 + temp_187;
    // 0x000658: 0x5080000000271010 Mufu
    temp_189 = exp2(temp_151);
    // 0x000668: 0x32A214C000072A2A Ffma
    temp_190 = 0.0 - temp_106;
    temp_191 = fma(temp_179, 2.0, temp_190);
    // 0x000670: 0x5C68100000972F05 Fmul
    temp_192 = temp_147 * temp_177;
    // 0x000678: 0x4C68101808A71109 Fmul
    temp_193 = fp_c6.data[33].w * fp_c6.data[34].z;
    // 0x000688: 0x4C68101801570F11 Fmul
    temp_194 = temp_161 * fp_c6.data[5].y;
    // 0x000690: 0x5C68100000570505 Fmul
    temp_195 = temp_192 * temp_192;
    // 0x000698: 0x3848000000872D2B Shl
    temp_196 = int(temp_185) << 8;
    // 0x0006A8: 0x3868103F00070B2C Fmul
    temp_197 = temp_186 * 0.5;
    // 0x0006B0: 0xEF94008200472B2B Ldc
    temp_198 = temp_196 + 0x2004;
    temp_199 = uint(temp_198) >> 2;
    temp_200 = temp_199 >> 2;
    temp_201 = int(temp_199) & 3;
    temp_202 = fp_c8.data[int(temp_200)][temp_201];
    // 0x0006B8: 0x5C68100000672C0A Fmul
    temp_203 = temp_197 * temp_180;
    // 0x0006C8: 0x4C58301407B71A06 Fadd
    temp_204 = 0.0 - fp_c5.data[30].w;
    temp_205 = temp_10 + temp_204;
    // 0x0006D0: 0x5C68100000A70505 Fmul
    temp_206 = temp_195 * temp_203;
    // 0x0006D8: 0x4C68101801470F0A Fmul
    temp_207 = temp_161 * fp_c6.data[5].x;
    // 0x0006E8: 0x5C68100000570F0B Fmul
    temp_208 = temp_161 * temp_206;
    // 0x0006F0: 0x51A0031407B72505 Ffma
    temp_209 = fma(temp_7, temp_205, fp_c5.data[30].w);
    // 0x0006F8: 0x51A0039407B72506 Ffma
    temp_210 = fma(temp_7, temp_172, fp_c5.data[30].w);
    // 0x000708: 0x51A0041407B72507 Ffma
    temp_211 = fma(temp_7, temp_188, fp_c5.data[30].w);
    // 0x000710: 0x1E23EA2F98370A08 Fmul32i
    temp_212 = temp_207 * 0.318309873;
    // 0x000718: 0x1E23EA2F9837130A Fmul32i
    temp_213 = temp_173 * 0.318309873;
    // 0x000728: 0x1E23EA2F9837110F Fmul32i
    temp_214 = temp_194 * 0.318309873;
    // 0x000730: 0x59A1080001070513 Ffma
    temp_215 = 0.0 - temp_189;
    temp_216 = fma(temp_209, temp_215, temp_189);
    // 0x000738: 0x59A1080001070611 Ffma
    temp_217 = 0.0 - temp_189;
    temp_218 = fma(temp_210, temp_217, temp_189);
    // 0x000748: 0x59A10A0001470516 Ffma
    temp_219 = 0.0 - temp_170;
    temp_220 = fma(temp_209, temp_219, temp_170);
    // 0x000750: 0x59A10A0001470615 Ffma
    temp_221 = 0.0 - temp_170;
    temp_222 = fma(temp_210, temp_221, temp_170);
    // 0x000758: 0x59A1080001070710 Ffma
    temp_223 = 0.0 - temp_189;
    temp_224 = fma(temp_211, temp_223, temp_189);
    // 0x000768: 0x59A10A0001470714 Ffma
    temp_225 = 0.0 - temp_170;
    temp_226 = fma(temp_211, temp_225, temp_170);
    // 0x000770: 0x5C58100001370513 Fadd
    temp_227 = temp_209 + temp_216;
    // 0x000778: 0x5C58100001170611 Fadd
    temp_228 = temp_210 + temp_218;
    // 0x000788: 0x5C58100001670517 Fadd
    temp_229 = temp_209 + temp_220;
    // 0x000790: 0x5C58100001570615 Fadd
    temp_230 = temp_210 + temp_222;
    // 0x000798: 0x5C58100001070710 Fadd
    temp_231 = temp_211 + temp_224;
    // 0x0007A8: 0x5C58100001470718 Fadd
    temp_232 = temp_211 + temp_226;
    // 0x0007B0: 0x4C68101406271313 Fmul
    temp_233 = temp_227 * fp_c5.data[24].z;
    // 0x0007B8: 0x4C68101406271111 Fmul
    temp_234 = temp_228 * fp_c5.data[24].z;
    // 0x0007C8: 0x4C68101406271717 Fmul
    temp_235 = temp_229 * fp_c5.data[24].z;
    // 0x0007D0: 0x4C68101406271515 Fmul
    temp_236 = temp_230 * fp_c5.data[24].z;
    // 0x0007D8: 0x4C68101406271010 Fmul
    temp_237 = temp_231 * fp_c5.data[24].z;
    // 0x0007E8: 0x4C68101406271818 Fmul
    temp_238 = temp_232 * fp_c5.data[24].z;
    // 0x0007F0: 0x59A1040000871708 Ffma
    temp_239 = 0.0 - temp_212;
    temp_240 = fma(temp_235, temp_239, temp_212);
    // 0x0007F8: 0x5C68100000471217 Fmul
    temp_241 = temp_68 * temp_163;
    // 0x000808: 0x5B6603800FF72B07 Isetp
    temp_242 = floatBitsToUint(temp_202) <= 0u;
    // 0x000810: 0x59A1050000A7180A Ffma
    temp_243 = 0.0 - temp_213;
    temp_244 = fma(temp_238, temp_243, temp_213);
    // 0x000818: 0x5C9807800FF70018 Mov
    // 0x000828: 0x32A2114000071717 Ffma
    temp_245 = 0.0 - temp_110;
    temp_246 = fma(temp_241, 2.0, temp_245);
    // 0x000830: 0xF0F0000034170000 Depbar
    // 0x000838: 0x51A0049801471E14 Ffma
    temp_247 = fma(temp_86, temp_193, fp_c6.data[5].x);
    // 0x000848: 0x51A0049801571F16 Ffma
    temp_248 = fma(temp_87, temp_193, fp_c6.data[5].y);
    // 0x000850: 0x51A0049801672009 Ffma
    temp_249 = fma(temp_88, temp_193, fp_c6.data[5].z);
    // 0x000858: 0x5C68100001471314 Fmul
    temp_250 = temp_233 * temp_247;
    // 0x000868: 0x5C68100001671116 Fmul
    temp_251 = temp_234 * temp_248;
    // 0x000870: 0x5C68100000971032 Fmul
    temp_252 = temp_237 * temp_249;
    // 0x000878: 0x59A1078000F71509 Ffma
    temp_253 = 0.0 - temp_214;
    temp_254 = fma(temp_236, temp_253, temp_214);
    // 0x000888: 0x49A206980AD70D15 Ffma
    temp_255 = 0.0 - temp_100;
    temp_256 = fma(temp_100, fp_c6.data[43].y, temp_255);
    // 0x000890: 0x5C9807800FF7000F Mov
    // 0x000898: 0x5C68100001470B11 Fmul
    temp_257 = temp_208 * temp_250;
    // 0x0008A8: 0x49A206980AC70D14 Ffma
    temp_258 = 0.0 - temp_100;
    temp_259 = fma(temp_100, fp_c6.data[43].x, temp_258);
    // 0x0008B0: 0x49A206980AE70D0D Ffma
    temp_260 = 0.0 - temp_100;
    temp_261 = fma(temp_100, fp_c6.data[43].z, temp_260);
    // 0x0008B8: 0x5C68100001670B10 Fmul
    temp_262 = temp_208 * temp_251;
    // 0x0008C8: 0x5C68100003270B32 Fmul
    temp_263 = temp_208 * temp_252;
    // 0x0008D0: 0x5C68100000470116 Fmul
    temp_264 = temp_69 * temp_163;
    // 0x0008D8: 0x3858103F80071515 Fadd
    temp_265 = temp_256 + 1.0;
    // 0x0008E8: 0x3858103F80071414 Fadd
    temp_266 = temp_259 + 1.0;
    // 0x0008F0: 0x3858103F80070D0D Fadd
    temp_267 = temp_261 + 1.0;
    // 0x0008F8: 0x1E23E22F98371111 Fmul32i
    temp_268 = temp_257 * 0.159154937;
    // 0x000908: 0x5C9807800FF7000B Mov
    // 0x000910: 0xEF5400000047FF11 Stl
    local_memory[1] = floatBitsToUint(temp_268);
    // 0x000918: 0x5C9807800FF70013 Mov
    // 0x000928: 0x32A211C000071616 Ffma
    temp_269 = 0.0 - temp_108;
    temp_270 = fma(temp_264, 2.0, temp_269);
    // 0x000930: 0x59A4068000D70028 Ffma
    temp_271 = fma(temp_12, temp_267, temp_267);
    temp_272 = clamp(temp_271, 0.0, 1.0);
    // 0x000938: 0x1E23E22F9837100D Fmul32i
    temp_273 = temp_262 * 0.159154937;
    // 0x000948: 0x59A40A0001471A26 Ffma
    temp_274 = fma(temp_10, temp_266, temp_266);
    temp_275 = clamp(temp_274, 0.0, 1.0);
    // 0x000950: 0xEF5400000007FF0D Stl
    local_memory[0] = floatBitsToUint(temp_273);
    // 0x000958: 0x59A40A8001571B27 Ffma
    temp_276 = fma(temp_11, temp_265, temp_265);
    temp_277 = clamp(temp_276, 0.0, 1.0);
    // 0x000968: 0x1E23E22F98373232 Fmul32i
    temp_278 = temp_263 * 0.159154937;
    // 0x000970: 0xF0F800000000000F Sync
    temp_279 = 0.0;
    temp_280 = 0.0;
    temp_281 = 0.0;
    temp_282 = 0.0;
    temp_283 = 0.0;
    temp_284 = 0.0;
    temp_285 = 0.0;
    temp_286 = 0.0;
    temp_287 = 0.0;
    temp_288 = 0.0;
    temp_289 = 0.0;
    temp_290 = 0.0;
    if (!temp_242)
    {
        // 0x000978: 0x5C9807800FF70030 Mov
        temp_291 = 0;
        do
        {
            // 0x000988: 0x5C18020003072D15 Iscadd
            temp_293 = int(temp_185) << 4;
            temp_294 = temp_293 + temp_291;
            // 0x000990: 0xE003FF87CFF7FF33 Ipa
            // 0x000998: 0x1C00000000173030 Iadd32i
            temp_295 = temp_291 + 1;
            // 0x0009A8: 0xE003FF87CFF7FF35 Ipa
            // 0x0009B0: 0x3848000000471515 Shl
            temp_296 = temp_294 << 4;
            // 0x0009B8: 0xE003FF87CFF7FF34 Ipa
            // 0x0009C8: 0x5B6C038002B7300F Isetp
            temp_292 = uint(temp_295) >= floatBitsToUint(temp_202);
            // 0x0009D0: 0xE290000058000000 Ssy
            // 0x0009D8: 0xEF94008200071515 Ldc
            temp_297 = temp_296 + 0x2000;
            temp_298 = uint(temp_297) >> 2;
            temp_299 = temp_298 >> 2;
            temp_300 = int(temp_298) & 3;
            temp_301 = fp_c8.data[int(temp_299)][temp_300];
            // 0x0009E8: 0x5080000000473333 Mufu
            // 0x0009F0: 0x5080000000473535 Mufu
            // 0x0009F8: 0x5080000000473434 Mufu
            // 0x000A08: 0xE043FF8D0337FF33 Ipa
            temp_302 = in_attr5.x;
            // 0x000A10: 0xE043FF8D8357FF35 Ipa
            temp_303 = in_attr5.z;
            // 0x000A18: 0xE043FF8D4347FF34 Ipa
            temp_304 = in_attr5.y;
            // 0x000A28: 0x3848000000671531 Shl
            temp_305 = floatBitsToInt(temp_301) << 6;
            // 0x000A30: 0xEF9500800107310C Ldc
            temp_306 = temp_305 + 16;
            temp_307 = uint(temp_306) >> 2;
            temp_308 = temp_307 >> 2;
            temp_309 = int(temp_307) & 3;
            temp_310 = fp_c8.data[int(temp_308)][temp_309];
            temp_311 = int(temp_307) + 1;
            temp_312 = uint(temp_311) >> 2;
            temp_313 = temp_311 & 3;
            temp_314 = fp_c8.data[int(temp_312)][temp_313];
            // 0x000A38: 0xEF95008001873110 Ldc
            temp_315 = temp_305 + 24;
            temp_316 = uint(temp_315) >> 2;
            temp_317 = temp_316 >> 2;
            temp_318 = int(temp_316) & 3;
            temp_319 = fp_c8.data[int(temp_317)][temp_318];
            temp_320 = int(temp_316) + 1;
            temp_321 = uint(temp_320) >> 2;
            temp_322 = temp_320 & 3;
            temp_323 = fp_c8.data[int(temp_321)][temp_322];
            // 0x000A48: 0xEF95008002073114 Ldc
            temp_324 = temp_305 + 32;
            temp_325 = uint(temp_324) >> 2;
            temp_326 = temp_325 >> 2;
            temp_327 = int(temp_325) & 3;
            temp_328 = fp_c8.data[int(temp_326)][temp_327];
            temp_329 = int(temp_325) + 1;
            temp_330 = uint(temp_329) >> 2;
            temp_331 = temp_329 & 3;
            temp_332 = fp_c8.data[int(temp_330)][temp_331];
            // 0x000A50: 0x5C58300003370C33 Fadd
            temp_333 = 0.0 - temp_302;
            temp_334 = temp_310 + temp_333;
            // 0x000A58: 0x5C58300003470D34 Fadd
            temp_335 = 0.0 - temp_304;
            temp_336 = temp_314 + temp_335;
            // 0x000A68: 0x5C58300003571035 Fadd
            temp_337 = 0.0 - temp_303;
            temp_338 = temp_319 + temp_337;
            // 0x000A70: 0x5C68100003373336 Fmul
            temp_339 = temp_334 * temp_334;
            // 0x000A78: 0x59A11A8003571111 Ffma
            temp_340 = 0.0 - temp_338;
            temp_341 = fma(temp_323, temp_340, temp_338);
            // 0x000A88: 0x59A01B0003473436 Ffma
            temp_342 = fma(temp_336, temp_336, temp_339);
            // 0x000A90: 0x59A01B0001171137 Ffma
            temp_343 = fma(temp_341, temp_341, temp_342);
            // 0x000A98: 0x508000000057370C Mufu
            temp_344 = inversesqrt(temp_343);
            // 0x000AA8: 0x5080000000873737 Mufu
            temp_345 = sqrt(temp_343);
            // 0x000AB0: 0x5C68100000C7330D Fmul
            temp_346 = temp_334 * temp_344;
            // 0x000AB8: 0x5C68100000C73410 Fmul
            temp_347 = temp_336 * temp_344;
            // 0x000AC8: 0x5C68100000C7110C Fmul
            temp_348 = temp_341 * temp_344;
            // 0x000AD0: 0x5C69100001470D0D Fmul
            temp_349 = 0.0 - temp_328;
            temp_350 = temp_346 * temp_349;
            // 0x000AD8: 0xEF94008002873114 Ldc
            temp_351 = temp_305 + 40;
            temp_352 = uint(temp_351) >> 2;
            temp_353 = temp_352 >> 2;
            temp_354 = int(temp_352) & 3;
            temp_355 = fp_c8.data[int(temp_353)][temp_354];
            // 0x000AE8: 0x59A106800157100D Ffma
            temp_356 = 0.0 - temp_332;
            temp_357 = fma(temp_347, temp_356, temp_350);
            // 0x000AF0: 0xEF95008003873110 Ldc
            temp_358 = temp_305 + 56;
            temp_359 = uint(temp_358) >> 2;
            temp_360 = temp_359 >> 2;
            temp_361 = int(temp_359) & 3;
            temp_362 = fp_c8.data[int(temp_360)][temp_361];
            temp_363 = int(temp_359) + 1;
            temp_364 = uint(temp_363) >> 2;
            temp_365 = temp_363 & 3;
            temp_366 = fp_c8.data[int(temp_364)][temp_365];
            // 0x000AF8: 0x59A1068001470C14 Ffma
            temp_367 = 0.0 - temp_355;
            temp_368 = fma(temp_348, temp_367, temp_357);
            // 0x000B08: 0xEF9500800307310C Ldc
            temp_369 = temp_305 + 48;
            temp_370 = uint(temp_369) >> 2;
            temp_371 = temp_370 >> 2;
            temp_372 = int(temp_370) & 3;
            temp_373 = fp_c8.data[int(temp_371)][temp_372];
            temp_374 = int(temp_370) + 1;
            temp_375 = uint(temp_374) >> 2;
            temp_376 = temp_374 & 3;
            temp_377 = fp_c8.data[int(temp_375)][temp_376];
            // 0x000B10: 0x59A4088001071414 Ffma
            temp_378 = fma(temp_368, temp_362, temp_366);
            temp_379 = clamp(temp_378, 0.0, 1.0);
            // 0x000B18: 0x010404000007F010 Mov32i
            // 0x000B28: 0x5C68100001471411 Fmul
            temp_380 = temp_379 * temp_379;
            // 0x000B30: 0x33A0084000071414 Ffma
            temp_381 = fma(temp_379, -2.0, 3.0);
            // 0x000B38: 0x5C68100001471111 Fmul
            temp_382 = temp_380 * temp_381;
            // 0x000B48: 0x39585042F0073514 Fadd
            temp_383 = abs(temp_338);
            temp_384 = temp_383 + -120.0;
            // 0x000B50: 0x1EABD4CCCCD71414 Fmul32i
            temp_385 = temp_384 * -0.0500000007;
            temp_386 = clamp(temp_385, 0.0, 1.0);
            // 0x000B58: 0x59A4068003770C37 Ffma
            temp_387 = fma(temp_373, temp_345, temp_377);
            temp_388 = clamp(temp_387, 0.0, 1.0);
            // 0x000B68: 0x33A0084000073710 Ffma
            temp_389 = fma(temp_388, -2.0, 3.0);
            // 0x000B70: 0x5C68100003773737 Fmul
            temp_390 = temp_388 * temp_388;
            // 0x000B78: 0x5C68100001073710 Fmul
            temp_391 = temp_390 * temp_389;
            // 0x000B88: 0x5C68100001071110 Fmul
            temp_392 = temp_382 * temp_391;
            // 0x000B90: 0x36247F9000171111 Xmad
            temp_393 = floatBitsToUint(temp_382) >> 16;
            temp_394 = int(temp_393) << 16;
            // 0x000B98: 0x5C68100001471010 Fmul
            temp_395 = temp_392 * temp_386;
            // 0x000BA8: 0x5BB383800FF71007 Fsetp
            temp_396 = temp_395 <= 0.0;
            // 0x000BB0: 0x7A05083C0F00FF11 Hadd2
            temp_291 = temp_295;
            temp_397 = uint(temp_394);
            temp_398 = temp_279;
            temp_399 = temp_280;
            temp_400 = temp_281;
            temp_401 = temp_282;
            temp_402 = temp_283;
            temp_403 = temp_284;
            if (temp_396)
            {
                temp_404 = unpackHalf2x16(uint(temp_394)).y;
                temp_405 = packHalf2x16(vec2(1.0, temp_404));
                temp_397 = temp_405;
            }
            // 0x000BB8: 0x5D2103902FF71107 Hsetp2
            temp_406 = unpackHalf2x16(temp_397).x;
            temp_407 = temp_406 == 0.0;
            // 0x000BC8: 0xF0F800000008000F Sync
            if (temp_407)
            {
                // 0x000BD0: 0x5080000000470C0C Mufu
                temp_408 = 1.0 / temp_373;
                // 0x000BD8: 0x5C69100000C70D14 Fmul
                temp_409 = 0.0 - temp_408;
                temp_410 = temp_377 * temp_409;
                // 0x000BE8: 0xEF94008002C7310C Ldc
                temp_411 = temp_305 + 44;
                temp_412 = uint(temp_411) >> 2;
                temp_413 = temp_412 >> 2;
                temp_414 = int(temp_412) & 3;
                temp_415 = fp_c8.data[int(temp_413)][temp_414];
                // 0x000BF0: 0x5C60138001473511 Fmnmx
                temp_416 = min(temp_338, temp_410);
                // 0x000BF8: 0x5C61178001171411 Fmnmx
                temp_417 = 0.0 - temp_410;
                temp_418 = max(temp_417, temp_416);
                // 0x000C08: 0x59A01B0001171136 Ffma
                temp_419 = fma(temp_418, temp_418, temp_342);
                // 0x000C10: 0x508000000057360D Mufu
                temp_420 = inversesqrt(temp_419);
                // 0x000C18: 0x5080000000873636 Mufu
                temp_421 = sqrt(temp_419);
                // 0x000C28: 0x5C68100000D73333 Fmul
                temp_422 = temp_334 * temp_420;
                // 0x000C30: 0x5C68100000D73434 Fmul
                temp_423 = temp_336 * temp_420;
                // 0x000C38: 0x5C68100000D71111 Fmul
                temp_424 = temp_418 * temp_420;
                // 0x000C48: 0x5C58100003372935 Fadd
                temp_425 = temp_106 + temp_422;
                // 0x000C50: 0x5C5810000347230D Fadd
                temp_426 = temp_108 + temp_423;
                // 0x000C58: 0x5C58100001172214 Fadd
                temp_427 = temp_110 + temp_424;
                // 0x000C68: 0x5C68100003573515 Fmul
                temp_428 = temp_425 * temp_425;
                // 0x000C70: 0x59A00A8000D70D15 Ffma
                temp_429 = fma(temp_426, temp_426, temp_428);
                // 0x000C78: 0x59A00A8001471415 Ffma
                temp_430 = fma(temp_427, temp_427, temp_429);
                // 0x000C88: 0x5080000000571515 Mufu
                temp_431 = inversesqrt(temp_430);
                // 0x000C90: 0x5C68100001573535 Fmul
                temp_432 = temp_425 * temp_431;
                // 0x000C98: 0x5C68100001571414 Fmul
                temp_433 = temp_427 * temp_431;
                // 0x000CA8: 0x5C68100001570D0D Fmul
                temp_434 = temp_426 * temp_431;
                // 0x000CB0: 0x5C68100003370E15 Fmul
                temp_435 = temp_70 * temp_422;
                // 0x000CB8: 0x5C68100003573333 Fmul
                temp_436 = temp_422 * temp_432;
                // 0x000CC8: 0x5C68100003570E35 Fmul
                temp_437 = temp_70 * temp_432;
                // 0x000CD0: 0x59A00A8003470115 Ffma
                temp_438 = fma(temp_69, temp_423, temp_435);
                // 0x000CD8: 0x59A0198000D73433 Ffma
                temp_439 = fma(temp_423, temp_434, temp_436);
                // 0x000CE8: 0x5080000000470C34 Mufu
                temp_440 = 1.0 / temp_415;
                // 0x000CF0: 0x59A01A8000D70135 Ffma
                temp_441 = fma(temp_69, temp_434, temp_437);
                // 0x000CF8: 0xEF9500800007310C Ldc
                temp_442 = uint(temp_305) >> 2;
                temp_443 = temp_442 >> 2;
                temp_444 = int(temp_442) & 3;
                temp_445 = fp_c8.data[int(temp_443)][temp_444];
                temp_446 = int(temp_442) + 1;
                temp_447 = uint(temp_446) >> 2;
                temp_448 = temp_446 & 3;
                temp_449 = fp_c8.data[int(temp_447)][temp_448];
                // 0x000D08: 0x59A00A8001171215 Ffma
                temp_450 = fma(temp_68, temp_424, temp_438);
                // 0x000D10: 0xEF94008000873131 Ldc
                temp_451 = temp_305 + 8;
                temp_452 = uint(temp_451) >> 2;
                temp_453 = temp_452 >> 2;
                temp_454 = int(temp_452) & 3;
                temp_455 = fp_c8.data[int(temp_453)][temp_454];
                // 0x000D18: 0x51A01B0400473434 Ffma
                temp_456 = fma(temp_440, temp_421, fp_c1.data[1].x);
                // 0x000D28: 0x59A4198001471133 Ffma
                temp_457 = fma(temp_424, temp_433, temp_439);
                temp_458 = clamp(temp_457, 0.0, 1.0);
                // 0x000D30: 0x5080000000473411 Mufu
                temp_459 = 1.0 / temp_456;
                // 0x000D38: 0x59A41A8001471235 Ffma
                temp_460 = fma(temp_68, temp_433, temp_441);
                temp_461 = clamp(temp_460, 0.0, 1.0);
                // 0x000D48: 0x01040DF760C7F014 Mov32i
                // 0x000D50: 0x5C68100002F72F34 Fmul
                temp_462 = temp_147 * temp_147;
                // 0x000D58: 0x49A20A0400373314 Ffma
                temp_463 = fma(temp_458, fp_c1.data[0].w, -6.98316002);
                // 0x000D68: 0x1E23FB3333371111 Fmul32i
                temp_464 = temp_459 * 1.39999998;
                // 0x000D70: 0x59A21A8003573434 Ffma
                temp_465 = 0.0 - temp_461;
                temp_466 = fma(temp_462, temp_461, temp_465);
                // 0x000D78: 0x5C68100001473314 Fmul
                temp_467 = temp_458 * temp_463;
                // 0x000D88: 0x5C5C30000FF71533 Fadd
                temp_468 = temp_450 + -0.0;
                temp_469 = clamp(temp_468, 0.0, 1.0);
                // 0x000D90: 0x51A01A0400173534 Ffma
                temp_470 = fma(temp_461, temp_466, fp_c1.data[0].y);
                // 0x000D98: 0x5C68100001171135 Fmul
                temp_471 = temp_464 * temp_464;
                // 0x000DA8: 0x5080000000473434 Mufu
                temp_472 = 1.0 / temp_470;
                // 0x000DB0: 0x59A1198003372E11 Ffma
                temp_473 = 0.0 - temp_469;
                temp_474 = fma(temp_157, temp_473, temp_469);
                // 0x000DB8: 0x5C90008001470014 Rro
                // 0x000DC8: 0x5080000000271414 Mufu
                temp_475 = exp2(temp_467);
                // 0x000DD0: 0x59A11A8003571535 Ffma
                temp_476 = 0.0 - temp_471;
                temp_477 = fma(temp_450, temp_476, temp_471);
                // 0x000DD8: 0x5C58100001172E11 Fadd
                temp_478 = temp_157 + temp_474;
                // 0x000DE8: 0x5080000000471111 Mufu
                temp_479 = 1.0 / temp_478;
                // 0x000DF0: 0x5C5C100003571535 Fadd
                temp_480 = temp_450 + temp_477;
                temp_481 = clamp(temp_480, 0.0, 1.0);
                // 0x000DF8: 0x5C68100003472F34 Fmul
                temp_482 = temp_147 * temp_472;
                // 0x000E08: 0x5C68100000C7100C Fmul
                temp_483 = temp_395 * temp_445;
                // 0x000E10: 0x5C68100000D7100D Fmul
                temp_484 = temp_395 * temp_449;
                // 0x000E18: 0x59A10A0001470515 Ffma
                temp_485 = 0.0 - temp_475;
                temp_486 = fma(temp_209, temp_485, temp_475);
                // 0x000E28: 0x5C68100003473434 Fmul
                temp_487 = temp_482 * temp_482;
                // 0x000E30: 0x5C68100001172C11 Fmul
                temp_488 = temp_197 * temp_479;
                // 0x000E38: 0x5C68100003171031 Fmul
                temp_489 = temp_395 * temp_455;
                // 0x000E48: 0x59A10A0001470610 Ffma
                temp_490 = 0.0 - temp_475;
                temp_491 = fma(temp_210, temp_490, temp_475);
                // 0x000E50: 0x59A10A0001470714 Ffma
                temp_492 = 0.0 - temp_475;
                temp_493 = fma(temp_211, temp_492, temp_475);
                // 0x000E58: 0x5C58100001570515 Fadd
                temp_494 = temp_209 + temp_486;
                // 0x000E68: 0x5C68100001173411 Fmul
                temp_495 = temp_487 * temp_488;
                // 0x000E70: 0x5C58100001070610 Fadd
                temp_496 = temp_210 + temp_491;
                // 0x000E78: 0x5C58100001470714 Fadd
                temp_497 = temp_211 + temp_493;
                // 0x000E88: 0x4C68101406271515 Fmul
                temp_498 = temp_494 * fp_c5.data[24].z;
                // 0x000E90: 0x5C68100001173311 Fmul
                temp_499 = temp_469 * temp_495;
                // 0x000E98: 0x5C68100003573133 Fmul
                temp_500 = temp_489 * temp_481;
                // 0x000EA8: 0x4C68101406271010 Fmul
                temp_501 = temp_496 * fp_c5.data[24].z;
                // 0x000EB0: 0x4C68101406271414 Fmul
                temp_502 = temp_497 * fp_c5.data[24].z;
                // 0x000EB8: 0x5C68100000C71515 Fmul
                temp_503 = temp_498 * temp_483;
                // 0x000EC8: 0x5C68100003570C0C Fmul
                temp_504 = temp_483 * temp_481;
                // 0x000ED0: 0x49A00C8400673319 Ffma
                temp_505 = fma(temp_500, fp_c1.data[1].z, temp_279);
                // 0x000ED8: 0x5C68100000D71010 Fmul
                temp_506 = temp_501 * temp_484;
                // 0x000EE8: 0x5C68100003171414 Fmul
                temp_507 = temp_502 * temp_489;
                // 0x000EF0: 0x5C68100001171515 Fmul
                temp_508 = temp_503 * temp_499;
                // 0x000EF8: 0x5C68100003570D0D Fmul
                temp_509 = temp_484 * temp_481;
                // 0x000F08: 0x49A0098400670C13 Ffma
                temp_510 = fma(temp_504, fp_c1.data[1].z, temp_280);
                // 0x000F10: 0x5C68100001171010 Fmul
                temp_511 = temp_506 * temp_499;
                // 0x000F18: 0x5C68100001171411 Fmul
                temp_512 = temp_507 * temp_499;
                // 0x000F28: 0x49A005840057150B Ffma
                temp_513 = fma(temp_508, fp_c1.data[1].y, temp_281);
                // 0x000F30: 0x49A00C0400670D18 Ffma
                temp_514 = fma(temp_509, fp_c1.data[1].z, temp_282);
                // 0x000F38: 0x49A007840057100F Ffma
                temp_515 = fma(temp_511, fp_c1.data[1].y, temp_283);
                // 0x000F48: 0x49A0120400571124 Ffma
                temp_516 = fma(temp_512, fp_c1.data[1].y, temp_284);
                // 0x000F50: 0xF0F800000007000F Sync
                temp_398 = temp_505;
                temp_399 = temp_510;
                temp_400 = temp_513;
                temp_401 = temp_514;
                temp_402 = temp_515;
                temp_403 = temp_516;
            }
            // 0x000F58: 0xE2400FFFA209000F Bra
            temp_279 = temp_398;
            temp_280 = temp_399;
            temp_281 = temp_400;
            temp_282 = temp_401;
            temp_283 = temp_402;
            temp_284 = temp_403;
            temp_285 = temp_398;
            temp_286 = temp_399;
            temp_287 = temp_401;
            temp_288 = temp_403;
            temp_289 = temp_400;
            temp_290 = temp_402;
        }
        while (!temp_292);
        // 0x000F68: 0xF0F800000007000F Sync
    }
    // 0x000F70: 0x5C62578000170E0C Fmnmx
    temp_517 = abs(temp_70);
    temp_518 = abs(temp_69);
    temp_519 = max(temp_517, temp_518);
    // 0x000F78: 0xE003FF87CFF7FF29 Ipa
    // 0x000F88: 0x5C62578001672A0D Fmnmx
    temp_520 = abs(temp_191);
    temp_521 = abs(temp_270);
    temp_522 = max(temp_520, temp_521);
    // 0x000F90: 0xEF4410000047FF33 Ldl
    temp_523 = uintBitsToFloat(local_memory[1]);
    // 0x000F98: 0x5C60578000C7120C Fmnmx
    temp_524 = abs(temp_68);
    temp_525 = max(temp_524, temp_519);
    // 0x000FA8: 0xEF4410000007FF31 Ldl
    temp_526 = uintBitsToFloat(local_memory[0]);
    // 0x000FB0: 0x010000000017F014 Mov32i
    // 0x000FB8: 0x5080000000470C0C Mufu
    temp_527 = 1.0 / temp_525;
    // 0x000FC8: 0x5C60578000D7170D Fmnmx
    temp_528 = abs(temp_246);
    temp_529 = max(temp_528, temp_522);
    // 0x000FD0: 0x3868104080070323 Fmul
    temp_530 = temp_140 * 4.0;
    // 0x000FD8: 0x5080000000470D0D Mufu
    temp_531 = 1.0 / temp_529;
    // 0x000FE8: 0x4C98079C0207002B Mov
    // 0x000FF0: 0x5C69100000C71212 Fmul
    temp_532 = 0.0 - temp_527;
    temp_533 = temp_68 * temp_532;
    // 0x000FF8: 0x5C68100000C70E10 Fmul
    temp_534 = temp_70 * temp_527;
    // 0x001008: 0x5080000000472929 Mufu
    // 0x001010: 0x5C68100000C70111 Fmul
    temp_535 = temp_69 * temp_527;
    // 0x001018: 0x5C68100000D72A15 Fmul
    temp_536 = temp_191 * temp_531;
    // 0x001028: 0x5C68100000D71616 Fmul
    temp_537 = temp_270 * temp_531;
    // 0x001030: 0x5C69100000D71717 Fmul
    temp_538 = 0.0 - temp_531;
    temp_539 = temp_246 * temp_538;
    // 0x001038: 0xC0BA0163EFF7100C Tex
    temp_540 = textureLod(fp_t_tcb_16, vec3(temp_534, temp_535, temp_533), 0.0).xyz;
    temp_541 = temp_540.x;
    temp_542 = temp_540.y;
    temp_543 = temp_540.z;
    // 0x001048: 0x38681040E007032A Fmul
    temp_544 = temp_140 * 7.0;
    // 0x001050: 0xE043FF910297FF2C Ipa
    temp_545 = in_attr9.x;
    // 0x001058: 0x5C98078001270022 Mov
    // 0x001068: 0xE043FF914297FF2D Ipa
    temp_546 = in_attr9.y;
    // 0x001070: 0x3859103F80070303 Fadd
    temp_547 = 0.0 - temp_140;
    temp_548 = temp_547 + 1.0;
    // 0x001078: 0xE043FF918297FF2E Ipa
    temp_549 = in_attr9.z;
    // 0x001088: 0xC1BA0143F2A71414 Tex
    temp_550 = textureLod(fp_t_tcb_14, vec4(temp_536, temp_537, temp_539, float(1)), temp_544).xyz;
    temp_551 = temp_550.x;
    temp_552 = temp_550.y;
    temp_553 = temp_550.z;
    // 0x001090: 0xD9A2018232271010 Texs
    temp_554 = textureLod(fp_t_tcb_18, vec3(temp_534, temp_535, temp_533), temp_530).xyz;
    temp_555 = temp_554.x;
    temp_556 = temp_554.y;
    temp_557 = temp_554.z;
    // 0x001098: 0xDEBA0000C2B72C2C TexB
    temp_558 = texture(fp_t_cb7_20, vec3(temp_545, temp_546, temp_549)).x;
    // 0x0010A8: 0x3859103F80070422 Fadd
    temp_559 = 0.0 - temp_163;
    temp_560 = temp_559 + 1.0;
    // 0x0010B0: 0x5C68100000370303 Fmul
    temp_561 = temp_548 * temp_548;
    // 0x0010B8: 0x49A005180A17190A Ffma
    temp_562 = fma(temp_285, fp_c6.data[40].y, temp_244);
    // 0x0010C8: 0x49A004180A171308 Ffma
    temp_563 = fma(temp_286, fp_c6.data[40].y, temp_240);
    // 0x0010D0: 0x49A004980A171809 Ffma
    temp_564 = fma(temp_287, fp_c6.data[40].y, temp_254);
    // 0x0010D8: 0x1E23E468DB970418 Fmul32i
    temp_565 = temp_163 * 0.193900004;
    // 0x0010E8: 0x4C68101809072219 Fmul
    temp_566 = temp_560 * fp_c6.data[36].x;
    // 0x0010F0: 0x5080000000372222 Mufu
    temp_567 = log2(temp_560);
    // 0x0010F8: 0x010410676C97F02F Mov32i
    // 0x001108: 0x5080400000371919 Mufu
    temp_568 = abs(temp_566);
    temp_569 = log2(temp_568);
    // 0x001110: 0x5C68100000370313 Fmul
    temp_570 = temp_561 * temp_561;
    // 0x001118: 0x0103F0000007F012 Mov32i
    // 0x001128: 0x49A019180A172432 Ffma
    temp_571 = fma(temp_288, fp_c6.data[40].y, temp_278);
    // 0x001130: 0x4C98079800A70024 Mov
    // 0x001138: 0x4C68101808772121 Fmul
    temp_572 = temp_89 * fp_c6.data[33].w;
    // 0x001148: 0x49A0178400A70403 Ffma
    temp_573 = fma(temp_163, fp_c1.data[2].z, 8.40400028);
    // 0x001150: 0x49A00C0400771318 Ffma
    temp_574 = fma(temp_570, fp_c1.data[1].w, temp_565);
    // 0x001158: 0x4C9807980B47002B Mov
    // 0x001168: 0x0103E2CD9E87F02D Mov32i
    // 0x001170: 0x32A0093F00070112 Ffma
    temp_575 = fma(temp_69, 0.5, 0.5);
    // 0x001178: 0x4C68101808972222 Fmul
    temp_576 = temp_567 * fp_c6.data[34].y;
    // 0x001188: 0x51A0018400B70417 Ffma
    temp_577 = fma(temp_163, temp_573, fp_c1.data[2].w);
    // 0x001190: 0x088BF05D6397182A Fadd32i
    temp_578 = temp_574 + -0.522800028;
    // 0x001198: 0x4C68101809171919 Fmul
    temp_579 = temp_569 * fp_c6.data[36].y;
    // 0x0011A8: 0xF0F0000034570000 Depbar
    // 0x0011B0: 0x51A215980B470203 Ffma
    temp_580 = 0.0 - fp_c6.data[45].x;
    temp_581 = fma(temp_93, fp_c6.data[45].x, temp_580);
    // 0x0011B8: 0x0104066978D7F002 Mov32i
    // 0x0011C8: 0x49A2168400C7132D Ffma
    temp_582 = fma(temp_570, fp_c1.data[3].x, -0.168799996);
    // 0x0011D0: 0x51A00B8400D70417 Ffma
    temp_583 = fma(temp_163, temp_577, fp_c1.data[3].y);
    // 0x0011D8: 0x5C68100002A70418 Fmul
    temp_584 = temp_163 * temp_578;
    // 0x0011E8: 0x4C98079800970004 Mov
    // 0x0011F0: 0x4C9807980967002A Mov
    // 0x0011F8: 0x5C90008001970019 Rro
    // 0x001208: 0x49A2010400871302 Ffma
    temp_585 = fma(temp_570, fp_c1.data[2].x, -3.60299993);
    // 0x001210: 0x5084000000271919 Mufu
    temp_586 = exp2(temp_579);
    temp_587 = clamp(temp_586, 0.0, 1.0);
    // 0x001218: 0x5C90008002270022 Rro
    // 0x001228: 0x4C98079800870001 Mov
    // 0x001230: 0x5084000000272222 Mufu
    temp_588 = exp2(temp_576);
    temp_589 = clamp(temp_588, 0.0, 1.0);
    // 0x001238: 0x4C59101800570404 Fadd
    temp_590 = 0.0 - fp_c6.data[2].y;
    temp_591 = temp_590 + fp_c6.data[1].y;
    // 0x001248: 0x4C59101800672424 Fadd
    temp_592 = 0.0 - fp_c6.data[2].z;
    temp_593 = temp_592 + fp_c6.data[1].z;
    // 0x001250: 0x5C68100002D7132E Fmul
    temp_594 = temp_570 * temp_582;
    // 0x001258: 0x51A001040097132D Ffma
    temp_595 = fma(temp_570, temp_585, fp_c1.data[2].y);
    // 0x001268: 0x4C58101408172A2A Fadd
    temp_596 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001270: 0x4C59101800470101 Fadd
    temp_597 = 0.0 - fp_c6.data[2].x;
    temp_598 = temp_597 + fp_c6.data[1].x;
    // 0x001278: 0x51A0091800970402 Ffma
    temp_599 = fma(temp_591, temp_575, fp_c6.data[2].y);
    // 0x001288: 0x51A0091800A72404 Ffma
    temp_600 = fma(temp_593, temp_575, fp_c6.data[2].z);
    // 0x001290: 0x4C98079408270024 Mov
    // 0x001298: 0x59A00C0002D71318 Ffma
    temp_601 = fma(temp_570, temp_595, temp_584);
    // 0x0012A8: 0x5C68100001972A2A Fmul
    temp_602 = temp_596 * temp_587;
    // 0x0012B0: 0x51A215980B471D1D Ffma
    temp_603 = 0.0 - fp_c6.data[45].x;
    temp_604 = fma(temp_92, fp_c6.data[45].x, temp_603);
    // 0x0012B8: 0x51A215980B471C1C Ffma
    temp_605 = 0.0 - fp_c6.data[45].x;
    temp_606 = fma(temp_91, fp_c6.data[45].x, temp_605);
    // 0x0012C8: 0x51A0091800870101 Ffma
    temp_607 = fma(temp_598, temp_575, fp_c6.data[2].x);
    // 0x0012D0: 0xE04BFF904297FF12 Ipa
    temp_608 = in_attr8.y;
    temp_609 = clamp(temp_608, 0.0, 1.0);
    // 0x0012D8: 0x4C9807980867002B Mov
    // 0x0012E8: 0x5C60138001772E2E Fmnmx
    temp_610 = min(temp_594, temp_583);
    // 0x0012F0: 0x4C68101808872219 Fmul
    temp_611 = temp_589 * fp_c6.data[34].x;
    // 0x0012F8: 0x4C6810140627242D Fmul
    temp_612 = fp_c5.data[32].z * fp_c5.data[24].z;
    // 0x001308: 0x4C5C100400E71824 Fadd
    temp_613 = temp_601 + fp_c1.data[3].z;
    temp_614 = clamp(temp_613, 0.0, 1.0);
    // 0x001310: 0x4C68101808D72A18 Fmul
    temp_615 = temp_602 * fp_c6.data[35].y;
    // 0x001318: 0x4C68101808E72A13 Fmul
    temp_616 = temp_602 * fp_c6.data[35].z;
    // 0x001328: 0x4C68101808C72A2A Fmul
    temp_617 = temp_602 * fp_c6.data[35].x;
    // 0x001330: 0x386C104248070617 Fmul
    temp_618 = temp_210 * 50.0;
    temp_619 = clamp(temp_618, 0.0, 1.0);
    // 0x001338: 0x5C5C30000FF72E22 Fadd
    temp_620 = temp_610 + -0.0;
    temp_621 = clamp(temp_620, 0.0, 1.0);
    // 0x001348: 0x51A0159808671919 Ffma
    temp_622 = fma(temp_611, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001350: 0x59A0190002D71332 Ffma
    temp_623 = fma(temp_616, temp_612, temp_571);
    // 0x001358: 0x49A1099408271313 Ffma
    temp_624 = 0.0 - fp_c5.data[32].z;
    temp_625 = fma(temp_616, temp_624, temp_616);
    // 0x001368: 0x5C68100002271717 Fmul
    temp_626 = temp_619 * temp_621;
    // 0x001370: 0x5C59100002472224 Fadd
    temp_627 = 0.0 - temp_621;
    temp_628 = temp_627 + temp_614;
    // 0x001378: 0x5C58100001370A0A Fadd
    temp_629 = temp_562 + temp_625;
    // 0x001388: 0x59A00B8002470505 Ffma
    temp_630 = fma(temp_209, temp_628, temp_626);
    // 0x001390: 0x59A00B8002470606 Ffma
    temp_631 = fma(temp_210, temp_628, temp_626);
    // 0x001398: 0x59A00B8002470707 Ffma
    temp_632 = fma(temp_211, temp_628, temp_626);
    // 0x0013A8: 0x010404000007F017 Mov32i
    // 0x0013B0: 0x4C68101406270505 Fmul
    temp_633 = temp_630 * fp_c5.data[24].z;
    // 0x0013B8: 0x4C68101406270606 Fmul
    temp_634 = temp_631 * fp_c5.data[24].z;
    // 0x0013C8: 0x4C68101406270707 Fmul
    temp_635 = temp_632 * fp_c5.data[24].z;
    // 0x0013D0: 0xF0F0000034370000 Depbar
    // 0x0013D8: 0x49A019980A170B0B Ffma
    temp_636 = fma(temp_289, fp_c6.data[40].y, temp_523);
    // 0x0013E8: 0x49A018980A170F0F Ffma
    temp_637 = fma(temp_290, fp_c6.data[40].y, temp_526);
    // 0x0013F0: 0x59A0058002D72A0B Ffma
    temp_638 = fma(temp_617, temp_612, temp_636);
    // 0x0013F8: 0x49A1151408272A2A Ffma
    temp_639 = 0.0 - fp_c5.data[32].z;
    temp_640 = fma(temp_617, temp_639, temp_617);
    // 0x001408: 0x59A0078002D7180F Ffma
    temp_641 = fma(temp_615, temp_612, temp_637);
    // 0x001410: 0x49A10C1408271818 Ffma
    temp_642 = 0.0 - fp_c5.data[32].z;
    temp_643 = fma(temp_615, temp_642, temp_615);
    // 0x001418: 0x5C58100002A70808 Fadd
    temp_644 = temp_563 + temp_640;
    // 0x001428: 0x5C58100001870909 Fadd
    temp_645 = temp_564 + temp_643;
    // 0x001430: 0xF0F0000034270000 Depbar
    // 0x001438: 0x49A006040067010C Ffma
    temp_646 = fma(temp_607, fp_c1.data[1].z, temp_541);
    // 0x001448: 0xE043FF900297FF01 Ipa
    temp_647 = in_attr8.x;
    // 0x001450: 0x49A0068400670202 Ffma
    temp_648 = fma(temp_599, fp_c1.data[1].z, temp_542);
    // 0x001458: 0xE043FF8C8297FF29 Ipa
    temp_649 = in_attr4.z;
    // 0x001468: 0x59A2060001971E1E Ffma
    temp_650 = 0.0 - temp_646;
    temp_651 = fma(temp_86, temp_622, temp_650);
    // 0x001470: 0x49A007040067040E Ffma
    temp_652 = fma(temp_600, fp_c1.data[1].z, temp_543);
    // 0x001478: 0x33A00BC000071204 Ffma
    temp_653 = fma(temp_609, -2.0, 3.0);
    // 0x001488: 0x5C68100001271212 Fmul
    temp_654 = temp_609 * temp_609;
    // 0x001490: 0xF0F0000034170000 Depbar
    // 0x001498: 0x49A0081808571410 Ffma
    temp_655 = fma(temp_551, fp_c6.data[33].y, temp_555);
    // 0x0014A8: 0x59A2010001971F1F Ffma
    temp_656 = 0.0 - temp_648;
    temp_657 = fma(temp_87, temp_622, temp_656);
    // 0x0014B0: 0x59A0060002171E1E Ffma
    temp_658 = fma(temp_651, temp_572, temp_646);
    // 0x0014B8: 0x59A2070001972019 Ffma
    temp_659 = 0.0 - temp_652;
    temp_660 = fma(temp_88, temp_622, temp_659);
    // 0x0014C8: 0x49A0089808571511 Ffma
    temp_661 = fma(temp_552, fp_c6.data[33].y, temp_556);
    // 0x0014D0: 0x49A011980857160C Ffma
    temp_662 = fma(temp_553, fp_c6.data[33].y, temp_557);
    // 0x0014D8: 0x59A0058001070505 Ffma
    temp_663 = fma(temp_633, temp_655, temp_638);
    // 0x0014E8: 0x59A0010002171F1F Ffma
    temp_664 = fma(temp_657, temp_572, temp_648);
    // 0x0014F0: 0x5C58100000871E08 Fadd
    temp_665 = temp_658 + temp_644;
    // 0x0014F8: 0x59A0070002171919 Ffma
    temp_666 = fma(temp_660, temp_572, temp_652);
    // 0x001508: 0x4C98079802870002 Mov
    // 0x001510: 0x59A0078001170606 Ffma
    temp_667 = fma(temp_634, temp_661, temp_641);
    // 0x001518: 0x59A0190000C70707 Ffma
    temp_668 = fma(temp_635, temp_662, temp_623);
    // 0x001528: 0x5C58100000971F1F Fadd
    temp_669 = temp_664 + temp_645;
    // 0x001530: 0x59A1040000872508 Ffma
    temp_670 = 0.0 - temp_665;
    temp_671 = fma(temp_7, temp_670, temp_665);
    // 0x001538: 0x5C58100000A7190A Fadd
    temp_672 = temp_666 + temp_629;
    // 0x001548: 0x51A0011802871C1C Ffma
    temp_673 = fma(temp_606, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001550: 0x5C68100001270404 Fmul
    temp_674 = temp_653 * temp_654;
    // 0x001558: 0x59A10F8001F72509 Ffma
    temp_675 = 0.0 - temp_669;
    temp_676 = fma(temp_7, temp_675, temp_669);
    // 0x001568: 0x59A0028000871A05 Ffma
    temp_677 = fma(temp_10, temp_671, temp_663);
    // 0x001570: 0x59A1050000A7250A Ffma
    temp_678 = 0.0 - temp_672;
    temp_679 = fma(temp_7, temp_678, temp_672);
    // 0x001578: 0x4C98079802970008 Mov
    // 0x001588: 0x4C68101803770404 Fmul
    temp_680 = temp_674 * fp_c6.data[13].w;
    // 0x001590: 0x59A0030000971B02 Ffma
    temp_681 = fma(temp_11, temp_676, temp_667);
    // 0x001598: 0x5C68100000572626 Fmul
    temp_682 = temp_275 * temp_677;
    // 0x0015A8: 0x59A0038000A70007 Ffma
    temp_683 = fma(temp_12, temp_679, temp_668);
    // 0x0015B0: 0x4C68101808471A05 Fmul
    temp_684 = temp_10 * fp_c6.data[33].x;
    // 0x0015B8: 0x49A500980BC72C2C Ffma
    temp_685 = 0.0 - fp_c6.data[47].x;
    temp_686 = fma(temp_558, temp_685, temp_647);
    temp_687 = clamp(temp_686, 0.0, 1.0);
    // 0x0015C8: 0x4C68101808471B1B Fmul
    temp_688 = temp_11 * fp_c6.data[33].x;
    // 0x0015D0: 0x5080000000372C2C Mufu
    temp_689 = log2(temp_687);
    // 0x0015D8: 0x5C68100000272702 Fmul
    temp_690 = temp_277 * temp_681;
    // 0x0015E8: 0x5C68100000772828 Fmul
    temp_691 = temp_272 * temp_683;
    // 0x0015F0: 0x49A0131406C70501 Ffma
    temp_692 = fma(temp_684, fp_c5.data[27].x, temp_682);
    // 0x0015F8: 0x4C98079802A70006 Mov
    // 0x001608: 0x4C68101808470007 Fmul
    temp_693 = temp_12 * fp_c6.data[33].x;
    // 0x001610: 0x51A0041802971D1D Ffma
    temp_694 = fma(temp_604, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001618: 0x49A0011406C71B02 Ffma
    temp_695 = fma(temp_688, fp_c5.data[27].x, temp_690);
    // 0x001628: 0x49A2021803570409 Ffma
    temp_696 = 0.0 - temp_680;
    temp_697 = fma(temp_680, fp_c6.data[13].y, temp_696);
    // 0x001630: 0x5C58300001C70105 Fadd
    temp_698 = 0.0 - temp_673;
    temp_699 = temp_692 + temp_698;
    // 0x001638: 0x51A0031802A70300 Ffma
    temp_700 = fma(temp_581, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001648: 0x49A0141406C70703 Ffma
    temp_701 = fma(temp_693, fp_c5.data[27].x, temp_691);
    // 0x001650: 0x5C58300001D70206 Fadd
    temp_702 = 0.0 - temp_694;
    temp_703 = temp_695 + temp_702;
    // 0x001658: 0x4C68101803172C08 Fmul
    temp_704 = temp_689 * fp_c6.data[12].y;
    // 0x001668: 0x49A00E180BF70507 Ffma
    temp_705 = fma(temp_699, fp_c6.data[47].w, temp_673);
    // 0x001670: 0x5C58300000070305 Fadd
    temp_706 = 0.0 - temp_700;
    temp_707 = temp_701 + temp_706;
    // 0x001678: 0x49A00E980BF70606 Ffma
    temp_708 = fma(temp_703, fp_c6.data[47].w, temp_694);
    // 0x001688: 0x5C9000800087000A Rro
    // 0x001690: 0x49A2021803470408 Ffma
    temp_709 = 0.0 - temp_680;
    temp_710 = fma(temp_680, fp_c6.data[13].x, temp_709);
    // 0x001698: 0x5080000000270A0A Mufu
    temp_711 = exp2(temp_704);
    // 0x0016A8: 0x49A000180BF70505 Ffma
    temp_712 = fma(temp_707, fp_c6.data[47].w, temp_700);
    // 0x0016B0: 0x5C60178000771C07 Fmnmx
    temp_713 = max(temp_673, temp_705);
    // 0x0016B8: 0x49A2021803670404 Ffma
    temp_714 = 0.0 - temp_680;
    temp_715 = fma(temp_680, fp_c6.data[13].z, temp_714);
    // 0x0016C8: 0x5C60178000671D06 Fmnmx
    temp_716 = max(temp_694, temp_708);
    // 0x0016D0: 0x5C60178000570005 Fmnmx
    temp_717 = max(temp_700, temp_712);
    // 0x0016D8: 0x59A0038000870700 Ffma
    temp_718 = fma(temp_713, temp_710, temp_713);
    // 0x0016E8: 0x0103F8000007F007 Mov32i
    // 0x0016F0: 0x59A0030000970609 Ffma
    temp_719 = fma(temp_716, temp_697, temp_716);
    // 0x0016F8: 0x59A0028000470505 Ffma
    temp_720 = fma(temp_717, temp_715, temp_717);
    // 0x001708: 0x4C68101802B70A06 Fmul
    temp_721 = temp_711 * fp_c6.data[10].w;
    // 0x001710: 0x5C59100000070100 Fadd
    temp_722 = 0.0 - temp_692;
    temp_723 = temp_722 + temp_718;
    // 0x001718: 0x5C59100000970204 Fadd
    temp_724 = 0.0 - temp_695;
    temp_725 = temp_724 + temp_719;
    // 0x001728: 0x5C59100000570305 Fadd
    temp_726 = 0.0 - temp_701;
    temp_727 = temp_726 + temp_720;
    // 0x001730: 0x59A0008000670000 Ffma
    temp_728 = fma(temp_723, temp_721, temp_692);
    // 0x001738: 0x59A0010000670401 Ffma
    temp_729 = fma(temp_725, temp_721, temp_695);
    // 0x001748: 0x4C58100C03872904 Fadd
    temp_730 = temp_649 + fp_c3.data[14].x;
    // 0x001750: 0x59A0018000670502 Ffma
    temp_731 = fma(temp_727, temp_721, temp_701);
    // 0x001758: 0x0103F8000007F003 Mov32i
    // 0x001768: 0x0103EC000007F005 Mov32i
    // 0x001770: 0x5C9807800FF70006 Mov
    // 0x001778: 0x49A37F8C03C70404 Ffma
    temp_732 = 0.0 - fp_c3.data[15].x;
    temp_733 = fma(temp_730, temp_732, -0.0);
    // 0x001788: 0xE30000000007000F Exit
    out_attr0.x = temp_728;
    out_attr0.y = temp_729;
    out_attr0.z = temp_731;
    out_attr0.w = 1.0;
    out_attr1.x = temp_733;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
