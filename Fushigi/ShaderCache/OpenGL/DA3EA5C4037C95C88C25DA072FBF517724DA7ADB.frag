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
    uint temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    int temp_208;
    precise float temp_209;
    int temp_210;
    uint temp_211;
    uint temp_212;
    int temp_213;
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
    int temp_303;
    bool temp_304;
    int temp_305;
    int temp_306;
    int temp_307;
    int temp_308;
    uint temp_309;
    uint temp_310;
    int temp_311;
    precise float temp_312;
    int temp_313;
    int temp_314;
    uint temp_315;
    uint temp_316;
    int temp_317;
    precise float temp_318;
    int temp_319;
    uint temp_320;
    int temp_321;
    precise float temp_322;
    int temp_323;
    uint temp_324;
    uint temp_325;
    int temp_326;
    precise float temp_327;
    int temp_328;
    uint temp_329;
    int temp_330;
    precise float temp_331;
    int temp_332;
    uint temp_333;
    uint temp_334;
    int temp_335;
    precise float temp_336;
    int temp_337;
    uint temp_338;
    int temp_339;
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
    int temp_361;
    uint temp_362;
    uint temp_363;
    int temp_364;
    precise float temp_365;
    precise float temp_366;
    precise float temp_367;
    int temp_368;
    uint temp_369;
    uint temp_370;
    int temp_371;
    precise float temp_372;
    int temp_373;
    uint temp_374;
    int temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    precise float temp_381;
    int temp_382;
    uint temp_383;
    uint temp_384;
    int temp_385;
    precise float temp_386;
    int temp_387;
    uint temp_388;
    int temp_389;
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
    uint temp_402;
    int temp_403;
    bool temp_404;
    uint temp_405;
    precise float temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    precise float temp_412;
    uint temp_413;
    precise float temp_414;
    bool temp_415;
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
    int temp_443;
    uint temp_444;
    uint temp_445;
    int temp_446;
    precise float temp_447;
    precise float temp_448;
    int temp_449;
    uint temp_450;
    uint temp_451;
    int temp_452;
    precise float temp_453;
    precise float temp_454;
    precise float temp_455;
    precise float temp_456;
    precise float temp_457;
    precise float temp_458;
    uint temp_459;
    uint temp_460;
    int temp_461;
    precise float temp_462;
    int temp_463;
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
    int temp_521;
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
    precise vec3 temp_541;
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
    precise vec3 temp_553;
    precise float temp_554;
    precise float temp_555;
    precise float temp_556;
    precise vec3 temp_557;
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
    // 0x000008: 0x4C98079406770015 Mov
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
    // 0x000048: 0xD8240360D0E70B1E Texs
    temp_5 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    // 0x000050: 0xD822024000E70B22 Texs
    temp_9 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    temp_12 = temp_9.z;
    // 0x000058: 0xE043FF8A00C7FF01 Ipa
    temp_13 = in_attr2.x;
    // 0x000068: 0xE043FF8900C7FF07 Ipa
    temp_14 = in_attr1.x;
    // 0x000070: 0xE043FF8A40C7FF04 Ipa
    temp_15 = in_attr2.y;
    // 0x000078: 0xE043FF8940C7FF08 Ipa
    temp_16 = in_attr1.y;
    // 0x000088: 0xE043FF8A80C7FF05 Ipa
    temp_17 = in_attr2.z;
    // 0x000090: 0xE043FF8800C7FF0F Ipa
    temp_18 = in_attr0.x;
    // 0x000098: 0xE043FF8980C7FF09 Ipa
    temp_19 = in_attr1.z;
    // 0x0000A8: 0xE043FF8840C7FF10 Ipa
    temp_20 = in_attr0.y;
    // 0x0000B0: 0xE043FF8880C7FF0E Ipa
    temp_21 = in_attr0.z;
    // 0x0000B8: 0x5C68100000170106 Fmul
    temp_22 = temp_13 * temp_13;
    // 0x0000C8: 0x5C6810000077070A Fmul
    temp_23 = temp_14 * temp_14;
    // 0x0000D0: 0x5C68100000F70F0B Fmul
    temp_24 = temp_18 * temp_18;
    // 0x0000D8: 0x59A0030000470406 Ffma
    temp_25 = fma(temp_15, temp_15, temp_22);
    // 0x0000E8: 0x59A005000087080A Ffma
    temp_26 = fma(temp_16, temp_16, temp_23);
    // 0x0000F0: 0x59A0058001071011 Ffma
    temp_27 = fma(temp_20, temp_20, temp_24);
    // 0x0000F8: 0x59A0030000570506 Ffma
    temp_28 = fma(temp_17, temp_17, temp_25);
    // 0x000108: 0x59A005000097090A Ffma
    temp_29 = fma(temp_19, temp_19, temp_26);
    // 0x000110: 0x5080000000570606 Mufu
    temp_30 = inversesqrt(temp_28);
    // 0x000118: 0x59A0088000E70E11 Ffma
    temp_31 = fma(temp_21, temp_21, temp_27);
    // 0x000128: 0x5080000000570A0A Mufu
    temp_32 = inversesqrt(temp_29);
    // 0x000130: 0x5C68100000670101 Fmul
    temp_33 = temp_13 * temp_30;
    // 0x000138: 0x5080000000571111 Mufu
    temp_34 = inversesqrt(temp_31);
    // 0x000148: 0x5C68100000670404 Fmul
    temp_35 = temp_15 * temp_30;
    // 0x000150: 0x5C68100000670505 Fmul
    temp_36 = temp_17 * temp_30;
    // 0x000158: 0x5C68100000A70707 Fmul
    temp_37 = temp_14 * temp_32;
    // 0x000168: 0x5C68100000A70808 Fmul
    temp_38 = temp_16 * temp_32;
    // 0x000170: 0x5C68100000A70909 Fmul
    temp_39 = temp_19 * temp_32;
    // 0x000178: 0x5C68100001171010 Fmul
    temp_40 = temp_20 * temp_34;
    // 0x000188: 0x5C68100001170E0E Fmul
    temp_41 = temp_21 * temp_34;
    // 0x000190: 0xF0F0000034270000 Depbar
    // 0x000198: 0x5C6810000037030B Fmul
    temp_42 = temp_4 * temp_4;
    // 0x0001A8: 0x5C68100000370101 Fmul
    temp_43 = temp_33 * temp_4;
    // 0x0001B0: 0x59A005800027020B Ffma
    temp_44 = fma(temp_3, temp_3, temp_42);
    // 0x0001B8: 0x59A0008000270707 Ffma
    temp_45 = fma(temp_37, temp_3, temp_43);
    // 0x0001C8: 0x5C68100000370401 Fmul
    temp_46 = temp_35 * temp_4;
    // 0x0001D0: 0x5C68100001170F04 Fmul
    temp_47 = temp_18 * temp_34;
    // 0x0001D8: 0x5C68100000370503 Fmul
    temp_48 = temp_36 * temp_4;
    // 0x0001E8: 0x385D103F80070B0B Fadd
    temp_49 = 0.0 - temp_44;
    temp_50 = temp_49 + 1.0;
    temp_51 = clamp(temp_50, 0.0, 1.0);
    // 0x0001F0: 0x5080000000870B06 Mufu
    temp_52 = sqrt(temp_51);
    // 0x0001F8: 0x59A0008000270801 Ffma
    temp_53 = fma(temp_38, temp_3, temp_46);
    // 0x000208: 0xE003FF870FF7FF08 Ipa
    temp_54 = gl_FragCoord.x;
    temp_55 = support_buffer.render_scale[0];
    temp_56 = temp_54 / temp_55;
    // 0x000210: 0x59A0018000270903 Ffma
    temp_57 = fma(temp_39, temp_3, temp_48);
    // 0x000218: 0xE003FF874FF7FF09 Ipa
    temp_58 = gl_FragCoord.y;
    temp_59 = support_buffer.render_scale[0];
    temp_60 = temp_58 / temp_59;
    // 0x000228: 0x59A0038000670404 Ffma
    temp_61 = fma(temp_47, temp_52, temp_45);
    // 0x000230: 0x59A0008000671001 Ffma
    temp_62 = fma(temp_40, temp_52, temp_53);
    // 0x000238: 0x59A0018000670E03 Ffma
    temp_63 = fma(temp_41, temp_52, temp_57);
    // 0x000248: 0x5C68100000470402 Fmul
    temp_64 = temp_61 * temp_61;
    // 0x000250: 0x59A0010000170102 Ffma
    temp_65 = fma(temp_62, temp_62, temp_64);
    // 0x000258: 0x59A0010000370302 Ffma
    temp_66 = fma(temp_63, temp_63, temp_65);
    // 0x000268: 0x4C68100C04A70808 Fmul
    temp_67 = temp_56 * fp_c3.data[18].z;
    // 0x000270: 0x5080000000570202 Mufu
    temp_68 = inversesqrt(temp_66);
    // 0x000278: 0x4C68100C04B70909 Fmul
    temp_69 = temp_60 * fp_c3.data[18].w;
    // 0x000288: 0x5C68100000270316 Fmul
    temp_70 = temp_63 * temp_68;
    // 0x000290: 0x5C68100000270101 Fmul
    temp_71 = temp_62 * temp_68;
    // 0x000298: 0x5C6810000027040E Fmul
    temp_72 = temp_61 * temp_68;
    // 0x0002A8: 0x4C68100C00671606 Fmul
    temp_73 = temp_70 * fp_c3.data[1].z;
    // 0x0002B0: 0x4C68100C00271603 Fmul
    temp_74 = temp_70 * fp_c3.data[0].z;
    // 0x0002B8: 0x49A0030C00570104 Ffma
    temp_75 = fma(temp_71, fp_c3.data[1].y, temp_73);
    // 0x0002C8: 0x49A0018C00170103 Ffma
    temp_76 = fma(temp_71, fp_c3.data[0].y, temp_74);
    // 0x0002D0: 0x0103F8000007F006 Mov32i
    // 0x0002D8: 0x49A0020C00470E04 Ffma
    temp_77 = fma(temp_72, fp_c3.data[1].x, temp_75);
    // 0x0002E8: 0x49A0018C00070E03 Ffma
    temp_78 = fma(temp_72, fp_c3.data[0].x, temp_76);
    // 0x0002F0: 0x4C69100C03E70404 Fmul
    temp_79 = 0.0 - fp_c3.data[15].z;
    temp_80 = temp_77 * temp_79;
    // 0x0002F8: 0x4C68101808B70303 Fmul
    temp_81 = temp_78 * fp_c6.data[34].w;
    // 0x000308: 0x4C68101808B70404 Fmul
    temp_82 = temp_80 * fp_c6.data[34].w;
    // 0x000310: 0x49A0040400270320 Ffma
    temp_83 = fma(temp_81, fp_c1.data[0].z, temp_67);
    // 0x000318: 0x49A0048400270421 Ffma
    temp_84 = fma(temp_82, fp_c1.data[0].z, temp_69);
    // 0x000328: 0xD832022242172020 Texs
    temp_85 = texture(fp_t_tcb_22, vec2(temp_83, temp_84)).xyzw;
    temp_86 = temp_85.x;
    temp_87 = temp_85.y;
    temp_88 = temp_85.z;
    temp_89 = temp_85.w;
    // 0x000330: 0xD86201EFF0670810 Texs
    temp_90 = textureLod(fp_t_tcb_1E, vec2(temp_67, temp_69), 1.0).x;
    // 0x000338: 0xD822020020970826 Texs
    temp_91 = texture(fp_t_tcb_20, vec2(temp_67, temp_69)).xyz;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x000348: 0xE043FF8B00C7FF19 Ipa
    temp_95 = in_attr3.x;
    // 0x000350: 0xE043FF8B40C7FF12 Ipa
    temp_96 = in_attr3.y;
    // 0x000358: 0xE043FF8B80C7FF18 Ipa
    temp_97 = in_attr3.z;
    // 0x000368: 0xF0F0000034470000 Depbar
    // 0x000370: 0x4C6810180A071E1E Fmul
    temp_98 = temp_6 * fp_c6.data[40].x;
    // 0x000378: 0xE2900000BD000000 Ssy
    // 0x000388: 0x0103F0000007F031 Mov32i
    // 0x000390: 0x5C9807800FF70029 Mov
    // 0x000398: 0x5C68100001971903 Fmul
    temp_99 = temp_95 * temp_95;
    // 0x0003A8: 0x59A0018001271203 Ffma
    temp_100 = fma(temp_96, temp_96, temp_99);
    // 0x0003B0: 0x59A0018001871803 Ffma
    temp_101 = fma(temp_97, temp_97, temp_100);
    // 0x0003B8: 0x5080000000570303 Mufu
    temp_102 = inversesqrt(temp_101);
    // 0x0003C8: 0x5C69100000371919 Fmul
    temp_103 = 0.0 - temp_102;
    temp_104 = temp_95 * temp_103;
    // 0x0003D0: 0x5C69100000371212 Fmul
    temp_105 = 0.0 - temp_102;
    temp_106 = temp_96 * temp_105;
    // 0x0003D8: 0x5C69100000371818 Fmul
    temp_107 = 0.0 - temp_102;
    temp_108 = temp_97 * temp_107;
    // 0x0003E8: 0x4C58301805C71904 Fadd
    temp_109 = 0.0 - fp_c6.data[23].x;
    temp_110 = temp_104 + temp_109;
    // 0x0003F0: 0x4C58301805D71205 Fadd
    temp_111 = 0.0 - fp_c6.data[23].y;
    temp_112 = temp_106 + temp_111;
    // 0x0003F8: 0x5C68100001970E03 Fmul
    temp_113 = temp_72 * temp_104;
    // 0x000408: 0x5C68100000470407 Fmul
    temp_114 = temp_110 * temp_110;
    // 0x000410: 0x4C58301805E71806 Fadd
    temp_115 = 0.0 - fp_c6.data[23].z;
    temp_116 = temp_108 + temp_115;
    // 0x000418: 0x59A0018001270103 Ffma
    temp_117 = fma(temp_71, temp_106, temp_113);
    // 0x000428: 0x59A0038000570507 Ffma
    temp_118 = fma(temp_112, temp_112, temp_114);
    // 0x000430: 0x59A4018001871603 Ffma
    temp_119 = fma(temp_70, temp_108, temp_117);
    temp_120 = clamp(temp_119, 0.0, 1.0);
    // 0x000438: 0x59A0038000670607 Ffma
    temp_121 = fma(temp_116, temp_116, temp_118);
    // 0x000448: 0x5080000000570707 Mufu
    temp_122 = inversesqrt(temp_121);
    // 0x000450: 0x3859103F8007030F Fadd
    temp_123 = 0.0 - temp_120;
    temp_124 = temp_123 + 1.0;
    // 0x000458: 0x5C68100000770404 Fmul
    temp_125 = temp_110 * temp_122;
    // 0x000468: 0x5C6810000077050B Fmul
    temp_126 = temp_112 * temp_122;
    // 0x000470: 0x5C68100000770605 Fmul
    temp_127 = temp_116 * temp_122;
    // 0x000478: 0x5C68100000471911 Fmul
    temp_128 = temp_104 * temp_125;
    // 0x000488: 0x4C69101805C7040A Fmul
    temp_129 = 0.0 - fp_c6.data[23].x;
    temp_130 = temp_125 * temp_129;
    // 0x000490: 0x5C68100000470E04 Fmul
    temp_131 = temp_72 * temp_125;
    // 0x000498: 0x59A0088000B71206 Ffma
    temp_132 = fma(temp_106, temp_126, temp_128);
    // 0x0004A8: 0x4C68101406970F11 Fmul
    temp_133 = temp_124 * fp_c5.data[26].y;
    // 0x0004B0: 0x49A1051805D70B0A Ffma
    temp_134 = 0.0 - fp_c6.data[23].y;
    temp_135 = fma(temp_126, temp_134, temp_130);
    // 0x0004B8: 0x5080400000371111 Mufu
    temp_136 = abs(temp_133);
    temp_137 = log2(temp_136);
    // 0x0004C8: 0x59A0020000B70104 Ffma
    temp_138 = fma(temp_71, temp_126, temp_131);
    // 0x0004D0: 0x01040DF760C7F00F Mov32i
    // 0x0004D8: 0x59A4030000571806 Ffma
    temp_139 = fma(temp_108, temp_127, temp_132);
    temp_140 = clamp(temp_139, 0.0, 1.0);
    // 0x0004E8: 0x49A5051805E7050A Ffma
    temp_141 = 0.0 - fp_c6.data[23].z;
    temp_142 = fma(temp_127, temp_141, temp_135);
    temp_143 = clamp(temp_142, 0.0, 1.0);
    // 0x0004F0: 0x49A2078400370A07 Ffma
    temp_144 = fma(temp_143, fp_c1.data[0].w, -6.98316002);
    // 0x0004F8: 0x4C68101406871113 Fmul
    temp_145 = temp_137 * fp_c5.data[26].x;
    // 0x000508: 0x59A4020000571611 Ffma
    temp_146 = fma(temp_70, temp_127, temp_138);
    temp_147 = clamp(temp_146, 0.0, 1.0);
    // 0x000510: 0x49A207840037060F Ffma
    temp_148 = fma(temp_140, fp_c1.data[0].w, -6.98316002);
    // 0x000518: 0x386013BF80071E04 Fmnmx
    temp_149 = min(temp_98, 1.0);
    // 0x000528: 0x5C68100000770A0A Fmul
    temp_150 = temp_143 * temp_144;
    // 0x000530: 0x5C90008001370005 Rro
    // 0x000538: 0x5084000000270505 Mufu
    temp_151 = exp2(temp_145);
    temp_152 = clamp(temp_151, 0.0, 1.0);
    // 0x000548: 0x5C68100000F7060B Fmul
    temp_153 = temp_140 * temp_148;
    // 0x000550: 0x4C69101805C70E06 Fmul
    temp_154 = 0.0 - fp_c6.data[23].x;
    temp_155 = temp_72 * temp_154;
    // 0x000558: 0x4C60178400070404 Fmnmx
    temp_156 = max(temp_149, fp_c1.data[0].x);
    // 0x000568: 0x3868104110070909 Fmul
    temp_157 = temp_69 * 9.0;
    // 0x000570: 0x5C90008000A7001C Rro
    // 0x000578: 0x5CA8148000970A09 F2f
    temp_158 = floor(temp_157);
    // 0x000588: 0x49A1031805D7010F Ffma
    temp_159 = 0.0 - fp_c6.data[23].y;
    temp_160 = fma(temp_71, temp_159, temp_155);
    // 0x000590: 0x5C90008000B7001B Rro
    // 0x000598: 0x5080000000271C0B Mufu
    temp_161 = exp2(temp_150);
    // 0x0005A8: 0x51A402040007043A Ffma
    temp_162 = fma(temp_156, temp_156, fp_c1.data[0].x);
    temp_163 = clamp(temp_162, 0.0, 1.0);
    // 0x0005B0: 0x5080000000271B1B Mufu
    temp_164 = exp2(temp_153);
    // 0x0005B8: 0x32A018BF00070431 Ffma
    temp_165 = fma(temp_156, 0.5, 0.5);
    // 0x0005C8: 0x4C68101404970513 Fmul
    temp_166 = temp_152 * fp_c5.data[18].y;
    // 0x0005D0: 0x4C68101404A70514 Fmul
    temp_167 = temp_152 * fp_c5.data[18].z;
    // 0x0005D8: 0x4C68101404870507 Fmul
    temp_168 = temp_152 * fp_c5.data[18].x;
    // 0x0005E8: 0xF0F0000034370000 Depbar
    // 0x0005F0: 0x4C58301407B7220A Fadd
    temp_169 = 0.0 - fp_c5.data[30].w;
    temp_170 = temp_10 + temp_169;
    // 0x0005F8: 0x5C68100003A73A2A Fmul
    temp_171 = temp_163 * temp_163;
    // 0x000608: 0x5C68120003173131 Fmul
    temp_172 = temp_165 * 0.5;
    temp_173 = temp_172 * temp_165;
    // 0x000610: 0x51A00A9402D71305 Ffma
    temp_174 = fma(temp_166, fp_c5.data[25].w, fp_c5.data[11].y);
    // 0x000618: 0x51A00A9402E71406 Ffma
    temp_175 = fma(temp_167, fp_c5.data[25].w, fp_c5.data[11].z);
    // 0x000628: 0x51A00A9402C70707 Ffma
    temp_176 = fma(temp_168, fp_c5.data[25].w, fp_c5.data[11].x);
    // 0x000630: 0x3868104180070815 Fmul
    temp_177 = temp_67 * 16.0;
    // 0x000638: 0x59A2088002A71113 Ffma
    temp_178 = 0.0 - temp_147;
    temp_179 = fma(temp_147, temp_171, temp_178);
    // 0x000648: 0x5CA8148001570A17 F2f
    temp_180 = floor(temp_177);
    // 0x000650: 0x49A5079805E71608 Ffma
    temp_181 = 0.0 - fp_c6.data[23].z;
    temp_182 = fma(temp_70, temp_181, temp_160);
    temp_183 = clamp(temp_182, 0.0, 1.0);
    // 0x000658: 0x59A1018000373114 Ffma
    temp_184 = 0.0 - temp_120;
    temp_185 = fma(temp_173, temp_184, temp_120);
    // 0x000668: 0x51A0098400171113 Ffma
    temp_186 = fma(temp_147, temp_179, fp_c1.data[0].y);
    // 0x000670: 0x59A104000317080F Ffma
    temp_187 = 0.0 - temp_173;
    temp_188 = fma(temp_183, temp_187, temp_183);
    // 0x000678: 0x5080000000471313 Mufu
    temp_189 = 1.0 / temp_186;
    // 0x000688: 0x5C58100001473114 Fadd
    temp_190 = temp_173 + temp_185;
    // 0x000690: 0x4C58301407B70015 Fadd
    temp_191 = 0.0 - fp_c5.data[30].w;
    temp_192 = temp_12 + temp_191;
    // 0x000698: 0x5080000000471414 Mufu
    temp_193 = 1.0 / temp_190;
    // 0x0006A8: 0x4C6810180167081A Fmul
    temp_194 = temp_183 * fp_c6.data[5].z;
    // 0x0006B0: 0x32A00BC18007092B Ffma
    temp_195 = fma(temp_158, 16.0, temp_180);
    // 0x0006B8: 0x5C58100000F7310F Fadd
    temp_196 = temp_173 + temp_188;
    // 0x0006C8: 0x5CB0118002B70A2B F2i
    temp_197 = trunc(temp_195);
    temp_198 = max(temp_197, 0.0);
    temp_199 = uint(temp_198);
    // 0x0006D0: 0x1E23EA2F98371A28 Fmul32i
    temp_200 = temp_194 * 0.318309873;
    // 0x0006D8: 0x5080000000470F11 Mufu
    temp_201 = 1.0 / temp_196;
    // 0x0006E8: 0x5C68100001373A09 Fmul
    temp_202 = temp_163 * temp_189;
    // 0x0006F0: 0x4C68101801470813 Fmul
    temp_203 = temp_183 * fp_c6.data[5].x;
    // 0x0006F8: 0x3868103F00071433 Fmul
    temp_204 = temp_193 * 0.5;
    // 0x000708: 0x4C58301407B72314 Fadd
    temp_205 = 0.0 - fp_c5.data[30].w;
    temp_206 = temp_11 + temp_205;
    // 0x000710: 0x5C68100000970909 Fmul
    temp_207 = temp_202 * temp_202;
    // 0x000718: 0x3848000000872B34 Shl
    temp_208 = int(temp_199) << 8;
    // 0x000728: 0x1E23EA2F9837131D Fmul32i
    temp_209 = temp_203 * 0.318309873;
    // 0x000730: 0xEF94008200473434 Ldc
    temp_210 = temp_208 + 0x2004;
    temp_211 = uint(temp_210) >> 2;
    temp_212 = temp_211 >> 2;
    temp_213 = int(temp_211) & 3;
    temp_214 = fp_c8.data[int(temp_212)][temp_213];
    // 0x000738: 0x5C68100001173317 Fmul
    temp_215 = temp_204 * temp_201;
    // 0x000748: 0x4C98079808A70011 Mov
    // 0x000750: 0x5C68100001770909 Fmul
    temp_216 = temp_207 * temp_215;
    // 0x000758: 0x4C6810180877110F Fmul
    temp_217 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x000768: 0x4C68101801570817 Fmul
    temp_218 = temp_183 * fp_c6.data[5].y;
    // 0x000770: 0x5C68100000970811 Fmul
    temp_219 = temp_183 * temp_216;
    // 0x000778: 0x51A0051407B71F08 Ffma
    temp_220 = fma(temp_7, temp_170, fp_c5.data[30].w);
    // 0x000788: 0x51A00A1407B71F09 Ffma
    temp_221 = fma(temp_7, temp_206, fp_c5.data[30].w);
    // 0x000790: 0x51A00A9407B71F0A Ffma
    temp_222 = fma(temp_7, temp_192, fp_c5.data[30].w);
    // 0x000798: 0x1E23EA2F9837171E Fmul32i
    temp_223 = temp_218 * 0.318309873;
    // 0x0007A8: 0x59A1058000B70813 Ffma
    temp_224 = 0.0 - temp_161;
    temp_225 = fma(temp_220, temp_224, temp_161);
    // 0x0007B0: 0x59A1058000B70914 Ffma
    temp_226 = 0.0 - temp_161;
    temp_227 = fma(temp_221, temp_226, temp_161);
    // 0x0007B8: 0x59A1058000B70A0B Ffma
    temp_228 = 0.0 - temp_161;
    temp_229 = fma(temp_222, temp_228, temp_161);
    // 0x0007C8: 0x59A10D8001B70817 Ffma
    temp_230 = 0.0 - temp_164;
    temp_231 = fma(temp_220, temp_230, temp_164);
    // 0x0007D0: 0x59A10D8001B7091C Ffma
    temp_232 = 0.0 - temp_164;
    temp_233 = fma(temp_221, temp_232, temp_164);
    // 0x0007D8: 0x59A10D8001B70A1B Ffma
    temp_234 = 0.0 - temp_164;
    temp_235 = fma(temp_222, temp_234, temp_164);
    // 0x0007E8: 0x5C58100001370815 Fadd
    temp_236 = temp_220 + temp_225;
    // 0x0007F0: 0x5C58100001470914 Fadd
    temp_237 = temp_221 + temp_227;
    // 0x0007F8: 0x5C58100000B70A1A Fadd
    temp_238 = temp_222 + temp_229;
    // 0x000808: 0x5C58100001770817 Fadd
    temp_239 = temp_220 + temp_231;
    // 0x000810: 0x5C58100001C7091C Fadd
    temp_240 = temp_221 + temp_233;
    // 0x000818: 0x5C58100001B70A1B Fadd
    temp_241 = temp_222 + temp_235;
    // 0x000828: 0x5B6603800FF73407 Isetp
    temp_242 = floatBitsToUint(temp_214) <= 0u;
    // 0x000830: 0xF0F0000034170000 Depbar
    // 0x000838: 0x51A0101801470F0B Ffma
    temp_243 = fma(temp_217, temp_86, fp_c6.data[5].x);
    // 0x000848: 0x51A0109801570F13 Ffma
    temp_244 = fma(temp_217, temp_87, fp_c6.data[5].y);
    // 0x000850: 0x51A0121801670F0F Ffma
    temp_245 = fma(temp_217, temp_88, fp_c6.data[5].z);
    // 0x000858: 0x51A5080400170D0D Ffma
    temp_246 = 0.0 - temp_90;
    temp_247 = fma(temp_8, temp_246, fp_c1.data[0].y);
    temp_248 = clamp(temp_247, 0.0, 1.0);
    // 0x000868: 0x5C68100000370E10 Fmul
    temp_249 = temp_72 * temp_120;
    // 0x000870: 0x5C68100001570B30 Fmul
    temp_250 = temp_243 * temp_236;
    // 0x000878: 0x5C68100001471314 Fmul
    temp_251 = temp_244 * temp_237;
    // 0x000888: 0x5C68100001A70F1A Fmul
    temp_252 = temp_245 * temp_238;
    // 0x000890: 0x49A206980AE70D15 Ffma
    temp_253 = 0.0 - temp_248;
    temp_254 = fma(temp_248, fp_c6.data[43].z, temp_253);
    // 0x000898: 0x59A1140001B72813 Ffma
    temp_255 = 0.0 - temp_241;
    temp_256 = fma(temp_200, temp_255, temp_200);
    // 0x0008A8: 0x5C6810000037161B Fmul
    temp_257 = temp_70 * temp_120;
    // 0x0008B0: 0x5C68100003071130 Fmul
    temp_258 = temp_219 * temp_250;
    // 0x0008B8: 0x5C6810000147112F Fmul
    temp_259 = temp_219 * temp_251;
    // 0x0008C8: 0x5C68100001A71132 Fmul
    temp_260 = temp_219 * temp_252;
    // 0x0008D0: 0x49A206980AC70D11 Ffma
    temp_261 = 0.0 - temp_248;
    temp_262 = fma(temp_248, fp_c6.data[43].x, temp_261);
    // 0x0008D8: 0x49A206980AD70D14 Ffma
    temp_263 = 0.0 - temp_248;
    temp_264 = fma(temp_248, fp_c6.data[43].y, temp_263);
    // 0x0008E8: 0x5C6810000037010D Fmul
    temp_265 = temp_71 * temp_120;
    // 0x0008F0: 0x3858103F80071515 Fadd
    temp_266 = temp_254 + 1.0;
    // 0x0008F8: 0x59A10E8001771D0B Ffma
    temp_267 = 0.0 - temp_239;
    temp_268 = fma(temp_209, temp_267, temp_209);
    // 0x000908: 0x59A10F0001C71E0F Ffma
    temp_269 = 0.0 - temp_240;
    temp_270 = fma(temp_223, temp_269, temp_223);
    // 0x000910: 0x3858103F80071111 Fadd
    temp_271 = temp_262 + 1.0;
    // 0x000918: 0x3858103F80071414 Fadd
    temp_272 = temp_264 + 1.0;
    // 0x000928: 0x5C9807800FF70017 Mov
    // 0x000930: 0x5C9807800FF7001C Mov
    // 0x000938: 0x5C9807800FF7001D Mov
    // 0x000948: 0x5C9807800FF7001E Mov
    // 0x000950: 0x5C9807800FF70028 Mov
    // 0x000958: 0x32A20CC000071035 Ffma
    temp_273 = 0.0 - temp_104;
    temp_274 = fma(temp_249, 2.0, temp_273);
    // 0x000968: 0x32A2094000070D1A Ffma
    temp_275 = 0.0 - temp_106;
    temp_276 = fma(temp_265, 2.0, temp_275);
    // 0x000970: 0x32A20C4000071B1B Ffma
    temp_277 = 0.0 - temp_108;
    temp_278 = fma(temp_257, 2.0, temp_277);
    // 0x000978: 0x59A408800117222C Ffma
    temp_279 = fma(temp_10, temp_271, temp_271);
    temp_280 = clamp(temp_279, 0.0, 1.0);
    // 0x000988: 0x59A40A000147232D Ffma
    temp_281 = fma(temp_11, temp_272, temp_272);
    temp_282 = clamp(temp_281, 0.0, 1.0);
    // 0x000990: 0x59A40A800157002E Ffma
    temp_283 = fma(temp_12, temp_266, temp_266);
    temp_284 = clamp(temp_283, 0.0, 1.0);
    // 0x000998: 0x1E23E22F98373030 Fmul32i
    temp_285 = temp_258 * 0.159154937;
    // 0x0009A8: 0x1E23E22F98372F2F Fmul32i
    temp_286 = temp_259 * 0.159154937;
    // 0x0009B0: 0x1E23E22F98373232 Fmul32i
    temp_287 = temp_260 * 0.159154937;
    // 0x0009B8: 0xF0F800000000000F Sync
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
    temp_298 = 0.0;
    temp_299 = 0.0;
    if (!temp_242)
    {
        // 0x0009C8: 0x5C9807800FF7003D Mov
        // 0x0009D0: 0xE043FF8D00C7FF36 Ipa
        temp_300 = in_attr5.x;
        // 0x0009D8: 0xE043FF8D40C7FF37 Ipa
        temp_301 = in_attr5.y;
        // 0x0009E8: 0xE043FF8D80C7FF39 Ipa
        temp_302 = in_attr5.z;
        temp_303 = 0;
        do
        {
            // 0x0009F0: 0x5C18020003D72B3F Iscadd
            temp_305 = int(temp_199) << 4;
            temp_306 = temp_305 + temp_303;
            // 0x0009F8: 0xE290000052000000 Ssy
            // 0x000A08: 0x3848000000473F3F Shl
            temp_307 = temp_306 << 4;
            // 0x000A10: 0xEF94008200073F38 Ldc
            temp_308 = temp_307 + 0x2000;
            temp_309 = uint(temp_308) >> 2;
            temp_310 = temp_309 >> 2;
            temp_311 = int(temp_309) & 3;
            temp_312 = fp_c8.data[int(temp_310)][temp_311];
            // 0x000A18: 0x3848000000673838 Shl
            temp_313 = floatBitsToInt(temp_312) << 6;
            // 0x000A28: 0xEF9500800107380C Ldc
            temp_314 = temp_313 + 16;
            temp_315 = uint(temp_314) >> 2;
            temp_316 = temp_315 >> 2;
            temp_317 = int(temp_315) & 3;
            temp_318 = fp_c8.data[int(temp_316)][temp_317];
            temp_319 = int(temp_315) + 1;
            temp_320 = uint(temp_319) >> 2;
            temp_321 = temp_319 & 3;
            temp_322 = fp_c8.data[int(temp_320)][temp_321];
            // 0x000A30: 0xEF95008001873810 Ldc
            temp_323 = temp_313 + 24;
            temp_324 = uint(temp_323) >> 2;
            temp_325 = temp_324 >> 2;
            temp_326 = int(temp_324) & 3;
            temp_327 = fp_c8.data[int(temp_325)][temp_326];
            temp_328 = int(temp_324) + 1;
            temp_329 = uint(temp_328) >> 2;
            temp_330 = temp_328 & 3;
            temp_331 = fp_c8.data[int(temp_329)][temp_330];
            // 0x000A38: 0xEF95008002073814 Ldc
            temp_332 = temp_313 + 32;
            temp_333 = uint(temp_332) >> 2;
            temp_334 = temp_333 >> 2;
            temp_335 = int(temp_333) & 3;
            temp_336 = fp_c8.data[int(temp_334)][temp_335];
            temp_337 = int(temp_333) + 1;
            temp_338 = uint(temp_337) >> 2;
            temp_339 = temp_337 & 3;
            temp_340 = fp_c8.data[int(temp_338)][temp_339];
            // 0x000A48: 0x5C58300003670C3B Fadd
            temp_341 = 0.0 - temp_300;
            temp_342 = temp_318 + temp_341;
            // 0x000A50: 0x5C58300003770D3C Fadd
            temp_343 = 0.0 - temp_301;
            temp_344 = temp_322 + temp_343;
            // 0x000A58: 0x5C58300003971010 Fadd
            temp_345 = 0.0 - temp_302;
            temp_346 = temp_327 + temp_345;
            // 0x000A68: 0x5C68100003B73B3E Fmul
            temp_347 = temp_342 * temp_342;
            // 0x000A70: 0x59A108000107110C Ffma
            temp_348 = 0.0 - temp_346;
            temp_349 = fma(temp_331, temp_348, temp_346);
            // 0x000A78: 0x59A01F0003C73C3E Ffma
            temp_350 = fma(temp_344, temp_344, temp_347);
            // 0x000A88: 0x59A01F0000C70C11 Ffma
            temp_351 = fma(temp_349, temp_349, temp_350);
            // 0x000A90: 0x508000000057110D Mufu
            temp_352 = inversesqrt(temp_351);
            // 0x000A98: 0x5C68100000D73B3F Fmul
            temp_353 = temp_342 * temp_352;
            // 0x000AA8: 0x5C68100000D70C0C Fmul
            temp_354 = temp_349 * temp_352;
            // 0x000AB0: 0x5C68100000D73C0D Fmul
            temp_355 = temp_344 * temp_352;
            // 0x000AB8: 0x5C69100001473F14 Fmul
            temp_356 = 0.0 - temp_336;
            temp_357 = temp_353 * temp_356;
            // 0x000AC8: 0x508000000087113F Mufu
            temp_358 = sqrt(temp_351);
            // 0x000AD0: 0x59A10A0001570D14 Ffma
            temp_359 = 0.0 - temp_340;
            temp_360 = fma(temp_355, temp_359, temp_357);
            // 0x000AD8: 0xEF9400800287380D Ldc
            temp_361 = temp_313 + 40;
            temp_362 = uint(temp_361) >> 2;
            temp_363 = temp_362 >> 2;
            temp_364 = int(temp_362) & 3;
            temp_365 = fp_c8.data[int(temp_363)][temp_364];
            // 0x000AE8: 0x59A10A0000D70C14 Ffma
            temp_366 = 0.0 - temp_365;
            temp_367 = fma(temp_354, temp_366, temp_360);
            // 0x000AF0: 0xEF9500800387380C Ldc
            temp_368 = temp_313 + 56;
            temp_369 = uint(temp_368) >> 2;
            temp_370 = temp_369 >> 2;
            temp_371 = int(temp_369) & 3;
            temp_372 = fp_c8.data[int(temp_370)][temp_371];
            temp_373 = int(temp_369) + 1;
            temp_374 = uint(temp_373) >> 2;
            temp_375 = temp_373 & 3;
            temp_376 = fp_c8.data[int(temp_374)][temp_375];
            // 0x000AF8: 0x59A4068000C7140D Ffma
            temp_377 = fma(temp_367, temp_372, temp_376);
            temp_378 = clamp(temp_377, 0.0, 1.0);
            // 0x000B08: 0x010404000007F014 Mov32i
            // 0x000B10: 0x5C68100000D70D15 Fmul
            temp_379 = temp_378 * temp_378;
            // 0x000B18: 0x33A00A4000070D0C Ffma
            temp_380 = fma(temp_378, -2.0, 3.0);
            // 0x000B28: 0x5C68100000C71515 Fmul
            temp_381 = temp_379 * temp_380;
            // 0x000B30: 0xEF9500800307380C Ldc
            temp_382 = temp_313 + 48;
            temp_383 = uint(temp_382) >> 2;
            temp_384 = temp_383 >> 2;
            temp_385 = int(temp_383) & 3;
            temp_386 = fp_c8.data[int(temp_384)][temp_385];
            temp_387 = int(temp_383) + 1;
            temp_388 = uint(temp_387) >> 2;
            temp_389 = temp_387 & 3;
            temp_390 = fp_c8.data[int(temp_388)][temp_389];
            // 0x000B38: 0x59A4068003F70C3F Ffma
            temp_391 = fma(temp_386, temp_358, temp_390);
            temp_392 = clamp(temp_391, 0.0, 1.0);
            // 0x000B48: 0x33A00A4000073F14 Ffma
            temp_393 = fma(temp_392, -2.0, 3.0);
            // 0x000B50: 0x5C68100003F73F3F Fmul
            temp_394 = temp_392 * temp_392;
            // 0x000B58: 0x5C68100003F71414 Fmul
            temp_395 = temp_393 * temp_394;
            // 0x000B68: 0x5C68100001471515 Fmul
            temp_396 = temp_381 * temp_395;
            // 0x000B70: 0x39585042F0071014 Fadd
            temp_397 = abs(temp_346);
            temp_398 = temp_397 + -120.0;
            // 0x000B78: 0x1EABD4CCCCD71414 Fmul32i
            temp_399 = temp_398 * -0.0500000007;
            temp_400 = clamp(temp_399, 0.0, 1.0);
            // 0x000B88: 0x5C6810000157143F Fmul
            temp_401 = temp_400 * temp_396;
            // 0x000B90: 0x36247F9000171414 Xmad
            temp_402 = floatBitsToUint(temp_400) >> 16;
            temp_403 = int(temp_402) << 16;
            // 0x000B98: 0x5BB383800FF73F07 Fsetp
            temp_404 = temp_401 <= 0.0;
            // 0x000BA8: 0x7A05083C0F00FF14 Hadd2
            temp_405 = uint(temp_403);
            temp_406 = temp_288;
            temp_407 = temp_289;
            temp_408 = temp_290;
            temp_409 = temp_291;
            temp_410 = temp_292;
            temp_411 = temp_293;
            if (temp_404)
            {
                temp_412 = unpackHalf2x16(uint(temp_403)).y;
                temp_413 = packHalf2x16(vec2(1.0, temp_412));
                temp_405 = temp_413;
            }
            // 0x000BB0: 0x5D2103902FF71407 Hsetp2
            temp_414 = unpackHalf2x16(temp_405).x;
            temp_415 = temp_414 == 0.0;
            // 0x000BB8: 0xF0F800000008000F Sync
            if (temp_415)
            {
                // 0x000BC8: 0x5080000000470C0C Mufu
                temp_416 = 1.0 / temp_386;
                // 0x000BD0: 0x5C69100000C70D0D Fmul
                temp_417 = 0.0 - temp_416;
                temp_418 = temp_390 * temp_417;
                // 0x000BD8: 0x5C60138000D71010 Fmnmx
                temp_419 = min(temp_346, temp_418);
                // 0x000BE8: 0x5C61178001070D0D Fmnmx
                temp_420 = 0.0 - temp_418;
                temp_421 = max(temp_420, temp_419);
                // 0x000BF0: 0x59A01F0000D70D3E Ffma
                temp_422 = fma(temp_421, temp_421, temp_350);
                // 0x000BF8: 0x5080000000573E10 Mufu
                temp_423 = inversesqrt(temp_422);
                // 0x000C08: 0x5080000000873E3E Mufu
                temp_424 = sqrt(temp_422);
                // 0x000C10: 0x5C68100001073B3B Fmul
                temp_425 = temp_342 * temp_423;
                // 0x000C18: 0x5C68100001073C3C Fmul
                temp_426 = temp_344 * temp_423;
                // 0x000C28: 0x5C68100001070D0D Fmul
                temp_427 = temp_421 * temp_423;
                // 0x000C30: 0x5C58100003B71910 Fadd
                temp_428 = temp_104 + temp_425;
                // 0x000C38: 0x5C58100003C71214 Fadd
                temp_429 = temp_106 + temp_426;
                // 0x000C48: 0x5C58100000D7180C Fadd
                temp_430 = temp_108 + temp_427;
                // 0x000C50: 0x5C68100001071011 Fmul
                temp_431 = temp_428 * temp_428;
                // 0x000C58: 0x59A0088001471411 Ffma
                temp_432 = fma(temp_429, temp_429, temp_431);
                // 0x000C68: 0x59A0088000C70C15 Ffma
                temp_433 = fma(temp_430, temp_430, temp_432);
                // 0x000C70: 0x5080000000571511 Mufu
                temp_434 = inversesqrt(temp_433);
                // 0x000C78: 0x5C68100001171010 Fmul
                temp_435 = temp_428 * temp_434;
                // 0x000C88: 0x5C68100001171414 Fmul
                temp_436 = temp_429 * temp_434;
                // 0x000C90: 0x5C68100001170C0C Fmul
                temp_437 = temp_430 * temp_434;
                // 0x000C98: 0x5C68100001073B11 Fmul
                temp_438 = temp_425 * temp_435;
                // 0x000CA8: 0x5C68100001070E15 Fmul
                temp_439 = temp_72 * temp_435;
                // 0x000CB0: 0x5C68100003B70E3B Fmul
                temp_440 = temp_72 * temp_425;
                // 0x000CB8: 0x59A0088001473C10 Ffma
                temp_441 = fma(temp_426, temp_436, temp_438);
                // 0x000CC8: 0x59A00A8001470111 Ffma
                temp_442 = fma(temp_71, temp_436, temp_439);
                // 0x000CD0: 0xEF94008000873815 Ldc
                temp_443 = temp_313 + 8;
                temp_444 = uint(temp_443) >> 2;
                temp_445 = temp_444 >> 2;
                temp_446 = int(temp_444) & 3;
                temp_447 = fp_c8.data[int(temp_445)][temp_446];
                // 0x000CD8: 0x59A01D8003C70114 Ffma
                temp_448 = fma(temp_71, temp_426, temp_440);
                // 0x000CE8: 0xEF94008002C7383C Ldc
                temp_449 = temp_313 + 44;
                temp_450 = uint(temp_449) >> 2;
                temp_451 = temp_450 >> 2;
                temp_452 = int(temp_450) & 3;
                temp_453 = fp_c8.data[int(temp_451)][temp_452];
                // 0x000CF0: 0x59A4080000C70D10 Ffma
                temp_454 = fma(temp_427, temp_437, temp_441);
                temp_455 = clamp(temp_454, 0.0, 1.0);
                // 0x000CF8: 0x59A4088000C71611 Ffma
                temp_456 = fma(temp_70, temp_437, temp_442);
                temp_457 = clamp(temp_456, 0.0, 1.0);
                // 0x000D08: 0x59A00A0000D71614 Ffma
                temp_458 = fma(temp_70, temp_427, temp_448);
                // 0x000D10: 0xEF9500800007380C Ldc
                temp_459 = uint(temp_313) >> 2;
                temp_460 = temp_459 >> 2;
                temp_461 = int(temp_459) & 3;
                temp_462 = fp_c8.data[int(temp_460)][temp_461];
                temp_463 = int(temp_459) + 1;
                temp_464 = uint(temp_463) >> 2;
                temp_465 = temp_463 & 3;
                temp_466 = fp_c8.data[int(temp_464)][temp_465];
                // 0x000D18: 0x5C68100000C73F0C Fmul
                temp_467 = temp_401 * temp_462;
                // 0x000D28: 0x5C68100000D73F0D Fmul
                temp_468 = temp_401 * temp_466;
                // 0x000D30: 0x5C68100001573F3F Fmul
                temp_469 = temp_401 * temp_447;
                // 0x000D38: 0x5080000000473C15 Mufu
                temp_470 = 1.0 / temp_453;
                // 0x000D48: 0x51A01F0400471515 Ffma
                temp_471 = fma(temp_470, temp_424, fp_c1.data[1].x);
                // 0x000D50: 0x5080000000471515 Mufu
                temp_472 = 1.0 / temp_471;
                // 0x000D58: 0x1E23FB333337153B Fmul32i
                temp_473 = temp_472 * 1.39999998;
                // 0x000D68: 0x5C68100003B73B15 Fmul
                temp_474 = temp_473 * temp_473;
                // 0x000D70: 0x59A2088001172A3B Ffma
                temp_475 = 0.0 - temp_457;
                temp_476 = fma(temp_171, temp_457, temp_475);
                // 0x000D78: 0x51A01D840017113C Ffma
                temp_477 = fma(temp_457, temp_476, fp_c1.data[0].y);
                // 0x000D88: 0x59A10A8001571411 Ffma
                temp_478 = 0.0 - temp_474;
                temp_479 = fma(temp_458, temp_478, temp_474);
                // 0x000D90: 0x5080000000473C3C Mufu
                temp_480 = 1.0 / temp_477;
                // 0x000D98: 0x5C5C30000FF7143B Fadd
                temp_481 = temp_458 + -0.0;
                temp_482 = clamp(temp_481, 0.0, 1.0);
                // 0x000DA8: 0x5C5C100001171414 Fadd
                temp_483 = temp_458 + temp_479;
                temp_484 = clamp(temp_483, 0.0, 1.0);
                // 0x000DB0: 0x59A11D8003B73111 Ffma
                temp_485 = 0.0 - temp_482;
                temp_486 = fma(temp_173, temp_485, temp_482);
                // 0x000DB8: 0x5C5810000117313E Fadd
                temp_487 = temp_173 + temp_486;
                // 0x000DC8: 0x5C68100003C73A11 Fmul
                temp_488 = temp_163 * temp_480;
                // 0x000DD0: 0x5080000000473E15 Mufu
                temp_489 = 1.0 / temp_487;
                // 0x000DD8: 0x5C68100001171111 Fmul
                temp_490 = temp_488 * temp_488;
                // 0x000DE8: 0x5C68100001573315 Fmul
                temp_491 = temp_204 * temp_489;
                // 0x000DF0: 0x5C68100001571111 Fmul
                temp_492 = temp_490 * temp_491;
                // 0x000DF8: 0x01040DF760C7F015 Mov32i
                // 0x000E08: 0x5C68100001173B11 Fmul
                temp_493 = temp_482 * temp_492;
                // 0x000E10: 0x49A20A8400371015 Ffma
                temp_494 = fma(temp_455, fp_c1.data[0].w, -6.98316002);
                // 0x000E18: 0x5C68100001571015 Fmul
                temp_495 = temp_455 * temp_494;
                // 0x000E28: 0x5C90008001570038 Rro
                // 0x000E30: 0x508000000027383B Mufu
                temp_496 = exp2(temp_495);
                // 0x000E38: 0x59A11D8003B70815 Ffma
                temp_497 = 0.0 - temp_496;
                temp_498 = fma(temp_220, temp_497, temp_496);
                // 0x000E48: 0x5C58100001570815 Fadd
                temp_499 = temp_220 + temp_498;
                // 0x000E50: 0x5C68100001570C10 Fmul
                temp_500 = temp_467 * temp_499;
                // 0x000E58: 0x5C68100001470C0C Fmul
                temp_501 = temp_467 * temp_484;
                // 0x000E68: 0x5C68100001171010 Fmul
                temp_502 = temp_500 * temp_493;
                // 0x000E70: 0x49A00F0400670C1E Ffma
                temp_503 = fma(temp_501, fp_c1.data[1].z, temp_288);
                // 0x000E78: 0x49A00B8400571017 Ffma
                temp_504 = fma(temp_502, fp_c1.data[1].y, temp_289);
                // 0x000E88: 0x59A11D8003B70910 Ffma
                temp_505 = 0.0 - temp_496;
                temp_506 = fma(temp_221, temp_505, temp_496);
                // 0x000E90: 0x59A11D8003B70A3B Ffma
                temp_507 = 0.0 - temp_496;
                temp_508 = fma(temp_222, temp_507, temp_496);
                // 0x000E98: 0x5C58100001070910 Fadd
                temp_509 = temp_221 + temp_506;
                // 0x000EA8: 0x5C58100003B70A15 Fadd
                temp_510 = temp_222 + temp_508;
                // 0x000EB0: 0x5C68100001070D10 Fmul
                temp_511 = temp_468 * temp_509;
                // 0x000EB8: 0x5C68100001573F38 Fmul
                temp_512 = temp_469 * temp_510;
                // 0x000EC8: 0x5C68100001470D0D Fmul
                temp_513 = temp_468 * temp_484;
                // 0x000ED0: 0x5C68100001473F14 Fmul
                temp_514 = temp_469 * temp_484;
                // 0x000ED8: 0x5C68100001171015 Fmul
                temp_515 = temp_511 * temp_493;
                // 0x000EE8: 0x5C68100001173838 Fmul
                temp_516 = temp_512 * temp_493;
                // 0x000EF0: 0x49A0140400670D28 Ffma
                temp_517 = fma(temp_513, fp_c1.data[1].z, temp_290);
                // 0x000EF8: 0x49A0148400671429 Ffma
                temp_518 = fma(temp_514, fp_c1.data[1].z, temp_291);
                // 0x000F08: 0x49A00E040057151C Ffma
                temp_519 = fma(temp_515, fp_c1.data[1].y, temp_292);
                // 0x000F10: 0x49A00E840057381D Ffma
                temp_520 = fma(temp_516, fp_c1.data[1].y, temp_293);
                // 0x000F18: 0xF0F800000007000F Sync
                temp_406 = temp_503;
                temp_407 = temp_504;
                temp_408 = temp_517;
                temp_409 = temp_518;
                temp_410 = temp_519;
                temp_411 = temp_520;
            }
            // 0x000F28: 0x1C00000000173D3D Iadd32i
            temp_521 = temp_303 + 1;
            // 0x000F30: 0x5B6C038003473D07 Isetp
            temp_304 = uint(temp_521) >= floatBitsToUint(temp_214);
            // 0x000F38: 0xE2400FFFAB08000F Bra
            temp_303 = temp_521;
            temp_288 = temp_406;
            temp_289 = temp_407;
            temp_290 = temp_408;
            temp_291 = temp_409;
            temp_292 = temp_410;
            temp_293 = temp_411;
            temp_294 = temp_408;
            temp_295 = temp_406;
            temp_296 = temp_411;
            temp_297 = temp_410;
            temp_298 = temp_407;
            temp_299 = temp_409;
        }
        while (!temp_304);
        // 0x000F48: 0xF0F800000007000F Sync
    }
    // 0x000F50: 0x5C62578000170E0C Fmnmx
    temp_522 = abs(temp_72);
    temp_523 = abs(temp_71);
    temp_524 = max(temp_522, temp_523);
    // 0x000F58: 0xE003FF87CFF7FF31 Ipa
    // 0x000F68: 0x38681040E0070434 Fmul
    temp_525 = temp_156 * 7.0;
    // 0x000F70: 0x5C62578001A7350D Fmnmx
    temp_526 = abs(temp_274);
    temp_527 = abs(temp_276);
    temp_528 = max(temp_526, temp_527);
    // 0x000F78: 0x010000000017F018 Mov32i
    // 0x000F88: 0x386810408007042B Fmul
    temp_529 = temp_156 * 4.0;
    // 0x000F90: 0x4C98079C02070037 Mov
    // 0x000F98: 0x5C60578000C7160C Fmnmx
    temp_530 = abs(temp_70);
    temp_531 = max(temp_530, temp_524);
    // 0x000FA8: 0x5080000000470C0C Mufu
    temp_532 = 1.0 / temp_531;
    // 0x000FB0: 0x5C60578000D71B0D Fmnmx
    temp_533 = abs(temp_278);
    temp_534 = max(temp_533, temp_528);
    // 0x000FB8: 0x5080000000470D10 Mufu
    temp_535 = 1.0 / temp_534;
    // 0x000FC8: 0x5C69100000C71616 Fmul
    temp_536 = 0.0 - temp_532;
    temp_537 = temp_70 * temp_536;
    // 0x000FD0: 0x5C68100000C70E14 Fmul
    temp_538 = temp_72 * temp_532;
    // 0x000FD8: 0x5080000000473131 Mufu
    // 0x000FE8: 0x5C68100000C70115 Fmul
    temp_539 = temp_71 * temp_532;
    // 0x000FF0: 0x5C68100001073519 Fmul
    temp_540 = temp_274 * temp_535;
    // 0x000FF8: 0xC0BA0163EFF7140C Tex
    temp_541 = textureLod(fp_t_tcb_16, vec3(temp_538, temp_539, temp_537), 0.0).xyz;
    temp_542 = temp_541.x;
    temp_543 = temp_541.y;
    temp_544 = temp_541.z;
    // 0x001008: 0x5C68100001071A1A Fmul
    temp_545 = temp_276 * temp_535;
    // 0x001010: 0x5C69100001071B1B Fmul
    temp_546 = 0.0 - temp_535;
    temp_547 = temp_278 * temp_546;
    // 0x001018: 0xE043FF910317FF10 Ipa
    temp_548 = in_attr9.x;
    // 0x001028: 0x5C9807800167002A Mov
    // 0x001030: 0xE043FF914317FF11 Ipa
    temp_549 = in_attr9.y;
    // 0x001038: 0x3859103F80070404 Fadd
    temp_550 = 0.0 - temp_156;
    temp_551 = temp_550 + 1.0;
    // 0x001048: 0xE043FF918317FF12 Ipa
    temp_552 = in_attr9.z;
    // 0x001050: 0xC1BA0143F3471818 Tex
    temp_553 = textureLod(fp_t_tcb_14, vec4(temp_540, temp_545, temp_547, float(1)), temp_525).xyz;
    temp_554 = temp_553.x;
    temp_555 = temp_553.y;
    temp_556 = temp_553.z;
    // 0x001058: 0xD9A2018332A7142A Texs
    temp_557 = textureLod(fp_t_tcb_18, vec3(temp_538, temp_539, temp_537), temp_529).xyz;
    temp_558 = temp_557.x;
    temp_559 = temp_557.y;
    temp_560 = temp_557.z;
    // 0x001068: 0xDEBA0000C3771010 TexB
    temp_561 = texture(fp_t_cb7_20, vec3(temp_548, temp_549, temp_552)).x;
    // 0x001070: 0x010410676C97F035 Mov32i
    // 0x001078: 0xE04BFF904317FF14 Ipa
    temp_562 = in_attr8.y;
    temp_563 = clamp(temp_562, 0.0, 1.0);
    // 0x001088: 0x5C68100000470404 Fmul
    temp_564 = temp_551 * temp_551;
    // 0x001090: 0x0103E2CD9E87F036 Mov32i
    // 0x001098: 0x3859103F80070338 Fadd
    temp_565 = 0.0 - temp_120;
    temp_566 = temp_565 + 1.0;
    // 0x0010A8: 0x1E23E468DB970316 Fmul32i
    temp_567 = temp_120 * 0.193900004;
    // 0x0010B0: 0x49A007980A17280F Ffma
    temp_568 = fma(temp_294, fp_c6.data[40].y, temp_270);
    // 0x0010B8: 0x49A01A8400B70335 Ffma
    temp_569 = fma(temp_120, fp_c1.data[2].w, 8.40400028);
    // 0x0010C8: 0x5C68100000470404 Fmul
    temp_570 = temp_564 * temp_564;
    // 0x0010D0: 0x0103F0000007F028 Mov32i
    // 0x0010D8: 0x5080000000373812 Mufu
    temp_571 = log2(temp_566);
    // 0x0010E8: 0x51A01A8400C70335 Ffma
    temp_572 = fma(temp_120, temp_569, fp_c1.data[3].x);
    // 0x0010F0: 0x49A21B0400E7041B Ffma
    temp_573 = fma(temp_570, fp_c1.data[3].z, -0.168799996);
    // 0x0010F8: 0x4C68101809073815 Fmul
    temp_574 = temp_566 * fp_c6.data[36].x;
    // 0x001108: 0x49A00B0400770411 Ffma
    temp_575 = fma(temp_570, fp_c1.data[1].w, temp_567);
    // 0x001110: 0x5080400000371516 Mufu
    temp_576 = abs(temp_574);
    temp_577 = log2(temp_576);
    // 0x001118: 0x49A005980A171E0B Ffma
    temp_578 = fma(temp_295, fp_c6.data[40].y, temp_268);
    // 0x001128: 0x51A01A8400D70335 Ffma
    temp_579 = fma(temp_120, temp_572, fp_c1.data[3].y);
    // 0x001130: 0x5C68100001B7041B Fmul
    temp_580 = temp_570 * temp_573;
    // 0x001138: 0x49A019180A171D32 Ffma
    temp_581 = fma(temp_296, fp_c6.data[40].y, temp_287);
    // 0x001148: 0x4C9807980097001D Mov
    // 0x001150: 0x088BF05D6397111E Fadd32i
    temp_582 = temp_575 + -0.522800028;
    // 0x001158: 0x32A0143F00070111 Ffma
    temp_583 = fma(temp_71, 0.5, 0.5);
    // 0x001168: 0x4C68101808971212 Fmul
    temp_584 = temp_571 * fp_c6.data[34].y;
    // 0x001170: 0x49A017980A171C2F Ffma
    temp_585 = fma(temp_297, fp_c6.data[40].y, temp_286);
    // 0x001178: 0x5C60138001B73501 Fmnmx
    temp_586 = min(temp_579, temp_580);
    // 0x001188: 0x0104066978D7F01B Mov32i
    // 0x001190: 0x5C68100001E70315 Fmul
    temp_587 = temp_120 * temp_582;
    // 0x001198: 0x4C68101809171616 Fmul
    temp_588 = temp_577 * fp_c6.data[36].y;
    // 0x0011A8: 0x4C98079800A7001E Mov
    // 0x0011B0: 0x49A018180A171730 Ffma
    temp_589 = fma(temp_298, fp_c6.data[40].y, temp_285);
    // 0x0011B8: 0x5C90008001270017 Rro
    // 0x0011C8: 0x49A20D840087041B Ffma
    temp_590 = fma(temp_570, fp_c1.data[2].x, -3.60299993);
    // 0x0011D0: 0x5084000000271717 Mufu
    temp_591 = exp2(temp_584);
    temp_592 = clamp(temp_591, 0.0, 1.0);
    // 0x0011D8: 0x5C9000800167001C Rro
    // 0x0011E8: 0x4C59101800671E16 Fadd
    temp_593 = 0.0 - fp_c6.data[2].z;
    temp_594 = temp_593 + fp_c6.data[1].z;
    // 0x0011F0: 0x5084000000271C1C Mufu
    temp_595 = exp2(temp_588);
    temp_596 = clamp(temp_595, 0.0, 1.0);
    // 0x0011F8: 0x4C98079800870003 Mov
    // 0x001208: 0x4C59101800571D12 Fadd
    temp_597 = 0.0 - fp_c6.data[2].y;
    temp_598 = temp_597 + fp_c6.data[1].y;
    // 0x001210: 0x51A00D840097041E Ffma
    temp_599 = fma(temp_570, temp_590, fp_c1.data[2].y);
    // 0x001218: 0x010404000007F01D Mov32i
    // 0x001228: 0x4C98079809570028 Mov
    // 0x001230: 0x49A009980A172913 Ffma
    temp_600 = fma(temp_299, fp_c6.data[40].y, temp_256);
    // 0x001238: 0x4C59101800470303 Fadd
    temp_601 = 0.0 - fp_c6.data[2].x;
    temp_602 = temp_601 + fp_c6.data[1].x;
    // 0x001248: 0x51A0089800971212 Ffma
    temp_603 = fma(temp_598, temp_583, fp_c6.data[2].y);
    // 0x001250: 0x59A00A8001E70415 Ffma
    temp_604 = fma(temp_570, temp_599, temp_587);
    // 0x001258: 0x33A00EC00007141E Ffma
    temp_605 = fma(temp_563, -2.0, 3.0);
    // 0x001268: 0x4C5810140817281B Fadd
    temp_606 = fp_c6.data[37].y + fp_c5.data[32].y;
    // 0x001270: 0x5C68100001471414 Fmul
    temp_607 = temp_563 * temp_563;
    // 0x001278: 0x51A0089800870303 Ffma
    temp_608 = fma(temp_602, temp_583, fp_c6.data[2].x);
    // 0x001288: 0x51A0089800A71611 Ffma
    temp_609 = fma(temp_594, temp_583, fp_c6.data[2].z);
    // 0x001290: 0x5C5C30000FF7011D Fadd
    temp_610 = temp_586 + -0.0;
    temp_611 = clamp(temp_610, 0.0, 1.0);
    // 0x001298: 0x4C68101808871716 Fmul
    temp_612 = temp_592 * fp_c6.data[34].x;
    // 0x0012A8: 0x5C68100001C71B1B Fmul
    temp_613 = temp_606 * temp_596;
    // 0x0012B0: 0x5C68100001E71401 Fmul
    temp_614 = temp_607 * temp_605;
    // 0x0012B8: 0x386C104248070917 Fmul
    temp_615 = temp_221 * 50.0;
    temp_616 = clamp(temp_615, 0.0, 1.0);
    // 0x0012C8: 0x4C5C100400A71514 Fadd
    temp_617 = temp_604 + fp_c1.data[2].z;
    temp_618 = clamp(temp_617, 0.0, 1.0);
    // 0x0012D0: 0x4C9807980867001C Mov
    // 0x0012D8: 0x4C68101808C71B15 Fmul
    temp_619 = temp_613 * fp_c6.data[35].x;
    // 0x0012E8: 0x4C68101808D71B04 Fmul
    temp_620 = temp_613 * fp_c6.data[35].y;
    // 0x0012F0: 0x5C68100001D71717 Fmul
    temp_621 = temp_616 * temp_611;
    // 0x0012F8: 0x5C58300001D7141E Fadd
    temp_622 = 0.0 - temp_611;
    temp_623 = temp_618 + temp_622;
    // 0x001308: 0x51A00E1808671616 Ffma
    temp_624 = fma(temp_612, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001310: 0x4C68101808E71B1B Fmul
    temp_625 = temp_613 * fp_c6.data[35].z;
    // 0x001318: 0x49A0181408271530 Ffma
    temp_626 = fma(temp_619, fp_c5.data[32].z, temp_589);
    // 0x001328: 0x49A10A9408271514 Ffma
    temp_627 = 0.0 - fp_c5.data[32].z;
    temp_628 = fma(temp_619, temp_627, temp_619);
    // 0x001330: 0x49A017940827042F Ffma
    temp_629 = fma(temp_620, fp_c5.data[32].z, temp_585);
    // 0x001338: 0x59A00B8001E70815 Ffma
    temp_630 = fma(temp_220, temp_623, temp_621);
    // 0x001348: 0x49A102140827041C Ffma
    temp_631 = 0.0 - fp_c5.data[32].z;
    temp_632 = fma(temp_620, temp_631, temp_620);
    // 0x001350: 0x59A00B8001E70A04 Ffma
    temp_633 = fma(temp_222, temp_623, temp_621);
    // 0x001358: 0x4C6810180877250A Fmul
    temp_634 = temp_89 * fp_c6.data[33].w;
    // 0x001368: 0x49A10D9408271B1D Ffma
    temp_635 = 0.0 - fp_c5.data[32].z;
    temp_636 = fma(temp_625, temp_635, temp_625);
    // 0x001370: 0x5C58100001470B0B Fadd
    temp_637 = temp_578 + temp_628;
    // 0x001378: 0x59A00B8001E70909 Ffma
    temp_638 = fma(temp_221, temp_623, temp_621);
    // 0x001388: 0x5C58100001C70F0F Fadd
    temp_639 = temp_568 + temp_632;
    // 0x001390: 0x49A0191408271B32 Ffma
    temp_640 = fma(temp_625, fp_c5.data[32].z, temp_581);
    // 0x001398: 0x4C9807980B470014 Mov
    // 0x0013A8: 0x5C58100001D71313 Fadd
    temp_641 = temp_600 + temp_636;
    // 0x0013B0: 0x4C68101803770101 Fmul
    temp_642 = temp_614 * fp_c6.data[13].w;
    // 0x0013B8: 0xF0F0000034370000 Depbar
    // 0x0013C8: 0x51A20A180B472727 Ffma
    temp_643 = 0.0 - fp_c6.data[45].x;
    temp_644 = fma(temp_93, fp_c6.data[45].x, temp_643);
    // 0x0013D0: 0x51A20A180B470202 Ffma
    temp_645 = 0.0 - fp_c6.data[45].x;
    temp_646 = fma(temp_94, fp_c6.data[45].x, temp_645);
    // 0x0013D8: 0x51A20A180B472626 Ffma
    temp_647 = 0.0 - fp_c6.data[45].x;
    temp_648 = fma(temp_92, fp_c6.data[45].x, temp_647);
    // 0x0013E8: 0xF0F0000034270000 Depbar
    // 0x0013F0: 0x49A0060400670303 Ffma
    temp_649 = fma(temp_608, fp_c1.data[1].z, temp_542);
    // 0x0013F8: 0x49A0068400671208 Ffma
    temp_650 = fma(temp_603, fp_c1.data[1].z, temp_543);
    // 0x001408: 0xE043FF900317FF0D Ipa
    temp_651 = in_attr8.x;
    // 0x001410: 0x49A0070400671111 Ffma
    temp_652 = fma(temp_609, fp_c1.data[1].z, temp_544);
    // 0x001418: 0xE043FF8C8317FF31 Ipa
    temp_653 = in_attr4.z;
    // 0x001428: 0x59A2018001672020 Ffma
    temp_654 = 0.0 - temp_649;
    temp_655 = fma(temp_86, temp_624, temp_654);
    // 0x001430: 0x59A2040001672121 Ffma
    temp_656 = 0.0 - temp_650;
    temp_657 = fma(temp_87, temp_624, temp_656);
    // 0x001438: 0xF0F0000034170000 Depbar
    // 0x001448: 0x49A015180857182A Ffma
    temp_658 = fma(temp_554, fp_c6.data[33].y, temp_558);
    // 0x001450: 0x59A2088001672416 Ffma
    temp_659 = 0.0 - temp_652;
    temp_660 = fma(temp_88, temp_624, temp_659);
    // 0x001458: 0x59A0018000A72020 Ffma
    temp_661 = fma(temp_655, temp_634, temp_649);
    // 0x001468: 0x59A0040000A72121 Ffma
    temp_662 = fma(temp_657, temp_634, temp_650);
    // 0x001470: 0x49A0159808571908 Ffma
    temp_663 = fma(temp_555, fp_c6.data[33].y, temp_559);
    // 0x001478: 0x49A0199808571A03 Ffma
    temp_664 = fma(temp_556, fp_c6.data[33].y, temp_560);
    // 0x001488: 0x59A0180002A71515 Ffma
    temp_665 = fma(temp_630, temp_658, temp_626);
    // 0x001490: 0x59A0088000A71616 Ffma
    temp_666 = fma(temp_660, temp_634, temp_652);
    // 0x001498: 0x5C58100000B72020 Fadd
    temp_667 = temp_661 + temp_637;
    // 0x0014A8: 0x5C58100000F72121 Fadd
    temp_668 = temp_662 + temp_639;
    // 0x0014B0: 0x59A0178000870908 Ffma
    temp_669 = fma(temp_638, temp_663, temp_629);
    // 0x0014B8: 0x59A0190000370403 Ffma
    temp_670 = fma(temp_633, temp_664, temp_640);
    // 0x0014C8: 0x4C9807980297000A Mov
    // 0x0014D0: 0x5C58100001371616 Fadd
    temp_671 = temp_666 + temp_641;
    // 0x0014D8: 0x59A1100002071F20 Ffma
    temp_672 = 0.0 - temp_667;
    temp_673 = fma(temp_7, temp_672, temp_667);
    // 0x0014E8: 0x59A1108002171F21 Ffma
    temp_674 = 0.0 - temp_668;
    temp_675 = fma(temp_7, temp_674, temp_668);
    // 0x0014F0: 0x4C98079802870009 Mov
    // 0x0014F8: 0x51A0051802972727 Ffma
    temp_676 = fma(temp_644, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001508: 0x59A10B0001671F16 Ffma
    temp_677 = 0.0 - temp_671;
    temp_678 = fma(temp_7, temp_677, temp_671);
    // 0x001510: 0x59A00A8002072215 Ffma
    temp_679 = fma(temp_10, temp_673, temp_665);
    // 0x001518: 0x59A0040002172308 Ffma
    temp_680 = fma(temp_11, temp_675, temp_669);
    // 0x001528: 0x51A0049802872626 Ffma
    temp_681 = fma(temp_648, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001530: 0x49A2009803470109 Ffma
    temp_682 = 0.0 - temp_642;
    temp_683 = fma(temp_642, fp_c6.data[13].x, temp_682);
    // 0x001538: 0x59A0018001670003 Ffma
    temp_684 = fma(temp_12, temp_678, temp_670);
    // 0x001548: 0x5C68100001572C2C Fmul
    temp_685 = temp_280 * temp_679;
    // 0x001550: 0x5C68100000872D00 Fmul
    temp_686 = temp_282 * temp_680;
    // 0x001558: 0x49A506980BC7100D Ffma
    temp_687 = 0.0 - fp_c6.data[47].x;
    temp_688 = fma(temp_561, temp_687, temp_651);
    temp_689 = clamp(temp_688, 0.0, 1.0);
    // 0x001568: 0x4C98079802A70008 Mov
    // 0x001570: 0x5080000000370D0D Mufu
    temp_690 = log2(temp_689);
    // 0x001578: 0x5C68100000372E03 Fmul
    temp_691 = temp_284 * temp_684;
    // 0x001588: 0x49A0161406C70707 Ffma
    temp_692 = fma(temp_176, fp_c5.data[27].x, temp_685);
    // 0x001590: 0x49A0001406C70505 Ffma
    temp_693 = fma(temp_174, fp_c5.data[27].x, temp_686);
    // 0x001598: 0x51A0041802A70200 Ffma
    temp_694 = fma(temp_646, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0015A8: 0x49A0019406C70606 Ffma
    temp_695 = fma(temp_175, fp_c5.data[27].x, temp_691);
    // 0x0015B0: 0x5C58300002670704 Fadd
    temp_696 = 0.0 - temp_681;
    temp_697 = temp_692 + temp_696;
    // 0x0015B8: 0x5C58300002770502 Fadd
    temp_698 = 0.0 - temp_676;
    temp_699 = temp_693 + temp_698;
    // 0x0015C8: 0x5C58300000070603 Fadd
    temp_700 = 0.0 - temp_694;
    temp_701 = temp_695 + temp_700;
    // 0x0015D0: 0x4C68101803170D08 Fmul
    temp_702 = temp_690 * fp_c6.data[12].y;
    // 0x0015D8: 0x49A013980BF70202 Ffma
    temp_703 = fma(temp_699, fp_c6.data[47].w, temp_676);
    // 0x0015E8: 0x49A013180BF70404 Ffma
    temp_704 = fma(temp_697, fp_c6.data[47].w, temp_681);
    // 0x0015F0: 0x49A000180BF70303 Ffma
    temp_705 = fma(temp_701, fp_c6.data[47].w, temp_694);
    // 0x0015F8: 0x5C9000800087000A Rro
    // 0x001608: 0x49A2009803570108 Ffma
    temp_706 = 0.0 - temp_642;
    temp_707 = fma(temp_642, fp_c6.data[13].y, temp_706);
    // 0x001610: 0x5080000000270A0A Mufu
    temp_708 = exp2(temp_702);
    // 0x001618: 0x5C60178000272702 Fmnmx
    temp_709 = max(temp_676, temp_703);
    // 0x001628: 0x49A2009803670101 Ffma
    temp_710 = 0.0 - temp_642;
    temp_711 = fma(temp_642, fp_c6.data[13].z, temp_710);
    // 0x001630: 0x5C60178000472604 Fmnmx
    temp_712 = max(temp_681, temp_704);
    // 0x001638: 0x5C60178000370003 Fmnmx
    temp_713 = max(temp_694, temp_705);
    // 0x001648: 0x59A0010000870202 Ffma
    temp_714 = fma(temp_709, temp_707, temp_709);
    // 0x001650: 0x4C58100C03873108 Fadd
    temp_715 = temp_653 + fp_c3.data[14].x;
    // 0x001658: 0x59A0020000970400 Ffma
    temp_716 = fma(temp_712, temp_683, temp_712);
    // 0x001668: 0x59A0018000170303 Ffma
    temp_717 = fma(temp_713, temp_711, temp_713);
    // 0x001670: 0x4C68101802B70A04 Fmul
    temp_718 = temp_708 * fp_c6.data[10].w;
    // 0x001678: 0x5C59100000270502 Fadd
    temp_719 = 0.0 - temp_693;
    temp_720 = temp_719 + temp_714;
    // 0x001688: 0x5C59100000070700 Fadd
    temp_721 = 0.0 - temp_692;
    temp_722 = temp_721 + temp_716;
    // 0x001690: 0x5C59100000370603 Fadd
    temp_723 = 0.0 - temp_695;
    temp_724 = temp_723 + temp_717;
    // 0x001698: 0x59A0028000470201 Ffma
    temp_725 = fma(temp_720, temp_718, temp_693);
    // 0x0016A8: 0x59A0038000470000 Ffma
    temp_726 = fma(temp_722, temp_718, temp_692);
    // 0x0016B0: 0x0103E8000007F005 Mov32i
    // 0x0016B8: 0x59A0030000470302 Ffma
    temp_727 = fma(temp_724, temp_718, temp_695);
    // 0x0016C8: 0x0103F8000007F003 Mov32i
    // 0x0016D0: 0x5C9807800FF70006 Mov
    // 0x0016D8: 0x0103F8000007F007 Mov32i
    // 0x0016E8: 0x49A37F8C03C70804 Ffma
    temp_728 = 0.0 - fp_c3.data[15].x;
    temp_729 = fma(temp_715, temp_728, -0.0);
    // 0x0016F0: 0xE30000000007000F Exit
    out_attr0.x = temp_726;
    out_attr0.y = temp_725;
    out_attr0.z = temp_727;
    out_attr0.w = 1.0;
    out_attr1.x = temp_729;
    out_attr1.y = 0.25;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
