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

layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_24;
layout (binding = 2) uniform sampler2D fp_t_tcb_28;
layout (binding = 3) uniform sampler2D fp_t_tcb_36;
layout (binding = 4) uniform sampler2D fp_t_tcb_20;
layout (binding = 5) uniform sampler2DShadow fp_t_tcb_1A;
layout (binding = 6) uniform sampler2D fp_t_tcb_1E;
layout (binding = 7) uniform samplerCube fp_t_tcb_16;
layout (binding = 8) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 9) uniform samplerCube fp_t_tcb_18;
layout (binding = 10) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
layout (location = 8) in vec4 in_attr8;
layout (location = 9) in vec4 in_attr9;
layout (location = 10) in vec4 in_attr10;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec2 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
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
    precise vec4 temp_54;
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
    precise vec3 temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise vec3 temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise vec3 temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    bool temp_94;
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
    uint temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    int temp_142;
    precise float temp_143;
    int temp_144;
    uint temp_145;
    uint temp_146;
    int temp_147;
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
    bool temp_178;
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
    int temp_357;
    bool temp_358;
    int temp_359;
    int temp_360;
    int temp_361;
    int temp_362;
    uint temp_363;
    uint temp_364;
    int temp_365;
    precise float temp_366;
    int temp_367;
    int temp_368;
    uint temp_369;
    uint temp_370;
    int temp_371;
    precise float temp_372;
    int temp_373;
    uint temp_374;
    int temp_375;
    precise float temp_376;
    int temp_377;
    uint temp_378;
    uint temp_379;
    int temp_380;
    precise float temp_381;
    int temp_382;
    uint temp_383;
    int temp_384;
    precise float temp_385;
    int temp_386;
    uint temp_387;
    uint temp_388;
    int temp_389;
    precise float temp_390;
    int temp_391;
    uint temp_392;
    int temp_393;
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
    int temp_415;
    uint temp_416;
    uint temp_417;
    int temp_418;
    precise float temp_419;
    precise float temp_420;
    precise float temp_421;
    int temp_422;
    uint temp_423;
    uint temp_424;
    int temp_425;
    precise float temp_426;
    int temp_427;
    uint temp_428;
    int temp_429;
    precise float temp_430;
    precise float temp_431;
    precise float temp_432;
    precise float temp_433;
    precise float temp_434;
    precise float temp_435;
    int temp_436;
    uint temp_437;
    uint temp_438;
    int temp_439;
    precise float temp_440;
    int temp_441;
    uint temp_442;
    int temp_443;
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
    uint temp_456;
    int temp_457;
    bool temp_458;
    uint temp_459;
    precise float temp_460;
    precise float temp_461;
    precise float temp_462;
    precise float temp_463;
    precise float temp_464;
    precise float temp_465;
    precise float temp_466;
    uint temp_467;
    precise float temp_468;
    bool temp_469;
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
    int temp_498;
    uint temp_499;
    uint temp_500;
    int temp_501;
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
    uint temp_514;
    uint temp_515;
    int temp_516;
    precise float temp_517;
    int temp_518;
    uint temp_519;
    int temp_520;
    precise float temp_521;
    precise float temp_522;
    precise float temp_523;
    precise float temp_524;
    precise float temp_525;
    precise float temp_526;
    precise float temp_527;
    int temp_528;
    uint temp_529;
    uint temp_530;
    int temp_531;
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
    int temp_578;
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
    precise vec3 temp_606;
    precise float temp_607;
    precise float temp_608;
    precise float temp_609;
    precise vec3 temp_610;
    precise float temp_611;
    precise float temp_612;
    precise float temp_613;
    precise vec3 temp_614;
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
    precise float temp_741;
    precise float temp_742;
    precise float temp_743;
    precise float temp_744;
    precise float temp_745;
    precise float temp_746;
    precise float temp_747;
    precise float temp_748;
    precise float temp_749;
    precise float temp_750;
    precise float temp_751;
    precise float temp_752;
    precise float temp_753;
    precise float temp_754;
    precise float temp_755;
    precise float temp_756;
    precise float temp_757;
    precise float temp_758;
    precise float temp_759;
    precise float temp_760;
    precise float temp_761;
    precise float temp_762;
    precise float temp_763;
    precise float temp_764;
    precise float temp_765;
    precise float temp_766;
    precise float temp_767;
    precise float temp_768;
    precise float temp_769;
    precise float temp_770;
    precise float temp_771;
    precise float temp_772;
    precise float temp_773;
    precise float temp_774;
    precise float temp_775;
    precise float temp_776;
    precise float temp_777;
    precise float temp_778;
    precise float temp_779;
    precise float temp_780;
    precise float temp_781;
    precise float temp_782;
    precise float temp_783;
    precise float temp_784;
    precise float temp_785;
    precise float temp_786;
    precise float temp_787;
    // 0x000008: 0xE003FF87CFF7FF00 Ipa
    // 0x000010: 0x5080000000470000 Mufu
    // 0x000018: 0xE043FF8E0007FF07 Ipa
    temp_0 = in_attr6.x;
    // 0x000028: 0xE043FF8E4007FF06 Ipa
    temp_1 = in_attr6.y;
    // 0x000030: 0xD830026FF0670702 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000038: 0xE043FF8A0007FF01 Ipa
    temp_5 = in_attr2.x;
    // 0x000048: 0xE043FF8A4007FF04 Ipa
    temp_6 = in_attr2.y;
    // 0x000050: 0xE043FF890007FF0B Ipa
    temp_7 = in_attr1.x;
    // 0x000058: 0xE043FF8A8007FF05 Ipa
    temp_8 = in_attr2.z;
    // 0x000068: 0xE043FF894007FF0C Ipa
    temp_9 = in_attr1.y;
    // 0x000070: 0xE043FF880007FF0F Ipa
    temp_10 = in_attr0.x;
    // 0x000078: 0xE043FF898007FF0D Ipa
    temp_11 = in_attr1.z;
    // 0x000088: 0xE043FF884007FF10 Ipa
    temp_12 = in_attr0.y;
    // 0x000090: 0x5C68100000170109 Fmul
    temp_13 = temp_5 * temp_5;
    // 0x000098: 0x5C68100000B70B0A Fmul
    temp_14 = temp_7 * temp_7;
    // 0x0000A8: 0x5C68100000F70F11 Fmul
    temp_15 = temp_10 * temp_10;
    // 0x0000B0: 0x59A0048000470408 Ffma
    temp_16 = fma(temp_6, temp_6, temp_13);
    // 0x0000B8: 0xE043FF888007FF09 Ipa
    temp_17 = in_attr0.z;
    // 0x0000C8: 0x59A0050000C70C0E Ffma
    temp_18 = fma(temp_9, temp_9, temp_14);
    // 0x0000D0: 0x59A0040000570508 Ffma
    temp_19 = fma(temp_8, temp_8, temp_16);
    // 0x0000D8: 0x508000000057080A Mufu
    temp_20 = inversesqrt(temp_19);
    // 0x0000E8: 0x59A0070000D70D0E Ffma
    temp_21 = fma(temp_11, temp_11, temp_18);
    // 0x0000F0: 0x5080000000570E0E Mufu
    temp_22 = inversesqrt(temp_21);
    // 0x0000F8: 0x5C68100000A70101 Fmul
    temp_23 = temp_5 * temp_20;
    // 0x000108: 0x5C68100000A70404 Fmul
    temp_24 = temp_6 * temp_20;
    // 0x000110: 0x5C68100000A70505 Fmul
    temp_25 = temp_8 * temp_20;
    // 0x000118: 0x59A008800107100A Ffma
    temp_26 = fma(temp_12, temp_12, temp_15);
    // 0x000128: 0xE003FF874FF7FF11 Ipa
    temp_27 = gl_FragCoord.y;
    temp_28 = support_buffer.render_scale[0];
    temp_29 = temp_27 / temp_28;
    // 0x000130: 0x5C68100000E70B0B Fmul
    temp_30 = temp_7 * temp_22;
    // 0x000138: 0x5C68100000E70C0C Fmul
    temp_31 = temp_9 * temp_22;
    // 0x000148: 0x5C68100000E70D0D Fmul
    temp_32 = temp_11 * temp_22;
    // 0x000150: 0x59A005000097090A Ffma
    temp_33 = fma(temp_17, temp_17, temp_26);
    // 0x000158: 0x5080000000570A0A Mufu
    temp_34 = inversesqrt(temp_33);
    // 0x000168: 0x5C68100000A71010 Fmul
    temp_35 = temp_12 * temp_34;
    // 0x000170: 0x5C68100000A70909 Fmul
    temp_36 = temp_17 * temp_34;
    // 0x000178: 0x4C68100C04B71111 Fmul
    temp_37 = temp_29 * fp_c3.data[18].w;
    // 0x000188: 0x5C68100000370308 Fmul
    temp_38 = temp_4 * temp_4;
    // 0x000190: 0x5C68100000370101 Fmul
    temp_39 = temp_23 * temp_4;
    // 0x000198: 0x59A0040000270208 Ffma
    temp_40 = fma(temp_3, temp_3, temp_38);
    // 0x0001A8: 0x59A0008000270B0B Ffma
    temp_41 = fma(temp_30, temp_3, temp_39);
    // 0x0001B0: 0x5C68100000370401 Fmul
    temp_42 = temp_24 * temp_4;
    // 0x0001B8: 0x5C68100000A70F04 Fmul
    temp_43 = temp_10 * temp_34;
    // 0x0001C8: 0x5C68100000370503 Fmul
    temp_44 = temp_25 * temp_4;
    // 0x0001D0: 0x385D103F80070808 Fadd
    temp_45 = 0.0 - temp_40;
    temp_46 = temp_45 + 1.0;
    temp_47 = clamp(temp_46, 0.0, 1.0);
    // 0x0001D8: 0x508000000087080E Mufu
    temp_48 = sqrt(temp_47);
    // 0x0001E8: 0x59A0008000270C01 Ffma
    temp_49 = fma(temp_31, temp_3, temp_42);
    // 0x0001F0: 0x59A0018000270D03 Ffma
    temp_50 = fma(temp_32, temp_3, temp_44);
    // 0x0001F8: 0x59A0058000E70404 Ffma
    temp_51 = fma(temp_43, temp_48, temp_41);
    // 0x000208: 0x59A0008000E71010 Ffma
    temp_52 = fma(temp_35, temp_48, temp_49);
    // 0x000210: 0x59A0018000E70903 Ffma
    temp_53 = fma(temp_36, temp_48, temp_50);
    // 0x000218: 0xD83002420067070E Texs
    temp_54 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyzw;
    temp_55 = temp_54.x;
    temp_56 = temp_54.y;
    temp_57 = temp_54.z;
    temp_58 = temp_54.w;
    // 0x000228: 0x5C68100000470401 Fmul
    temp_59 = temp_51 * temp_51;
    // 0x000230: 0x59A0008001071001 Ffma
    temp_60 = fma(temp_52, temp_52, temp_59);
    // 0x000238: 0x59A0008000370305 Ffma
    temp_61 = fma(temp_53, temp_53, temp_60);
    // 0x000248: 0x5080000000570505 Mufu
    temp_62 = inversesqrt(temp_61);
    // 0x000250: 0x5C68100000570301 Fmul
    temp_63 = temp_53 * temp_62;
    // 0x000258: 0x5C68100000571002 Fmul
    temp_64 = temp_52 * temp_62;
    // 0x000268: 0xE003FF870FF7FF10 Ipa
    temp_65 = gl_FragCoord.x;
    temp_66 = support_buffer.render_scale[0];
    temp_67 = temp_65 / temp_66;
    // 0x000270: 0x5C68100000570404 Fmul
    temp_68 = temp_51 * temp_62;
    // 0x000278: 0x4C98079400370005 Mov
    // 0x000288: 0x4C68100C00670103 Fmul
    temp_69 = temp_63 * fp_c3.data[1].z;
    // 0x000290: 0x4C68100C00270108 Fmul
    temp_70 = temp_63 * fp_c3.data[0].z;
    // 0x000298: 0x49A0018C0057020A Ffma
    temp_71 = fma(temp_64, fp_c3.data[1].y, temp_69);
    // 0x0002A8: 0x0103F0000007F003 Mov32i
    // 0x0002B0: 0x49A0040C00170209 Ffma
    temp_72 = fma(temp_64, fp_c3.data[0].y, temp_70);
    // 0x0002B8: 0x4C98079400270008 Mov
    // 0x0002C8: 0x49A0050C0047040A Ffma
    temp_73 = fma(temp_68, fp_c3.data[1].x, temp_71);
    // 0x0002D0: 0x49A0048C00070409 Ffma
    temp_74 = fma(temp_68, fp_c3.data[0].x, temp_72);
    // 0x0002D8: 0x33A001BF00070A0A Ffma
    temp_75 = fma(temp_73, -0.5, 0.5);
    // 0x0002E8: 0x32A001BF00070909 Ffma
    temp_76 = fma(temp_74, 0.5, 0.5);
    // 0x0002F0: 0x51A0041400470A08 Ffma
    temp_77 = fma(temp_75, fp_c5.data[0].z, fp_c5.data[1].x);
    // 0x0002F8: 0x51A0029400570A0A Ffma
    temp_78 = fma(temp_75, fp_c5.data[0].w, fp_c5.data[1].y);
    // 0x000308: 0x4C68100C04A71010 Fmul
    temp_79 = temp_67 * fp_c3.data[18].z;
    // 0x000310: 0x49A0041400070908 Ffma
    temp_80 = fma(temp_76, fp_c5.data[0].x, temp_77);
    // 0x000318: 0x49A005140017090A Ffma
    temp_81 = fma(temp_76, fp_c5.data[0].y, temp_78);
    // 0x000328: 0xD8220280A0A7080C Texs
    temp_82 = texture(fp_t_tcb_28, vec2(temp_80, temp_81)).xyz;
    temp_83 = temp_82.x;
    temp_84 = temp_82.y;
    temp_85 = temp_82.z;
    // 0x000330: 0xD824036120670728 Texs
    temp_86 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_87 = temp_86.x;
    temp_88 = temp_86.y;
    temp_89 = temp_86.z;
    // 0x000338: 0xD82202005117101E Texs
    temp_90 = texture(fp_t_tcb_20, vec2(temp_79, temp_37)).xyz;
    temp_91 = temp_90.x;
    temp_92 = temp_90.y;
    temp_93 = temp_90.z;
    // 0x000348: 0xF0F0000034370000 Depbar
    // 0x000350: 0x4BB1839406072107 Fsetp
    temp_94 = temp_58 < fp_c5.data[24].x;
    // 0x000358: 0xE24000000708000F Bra
    if (temp_94)
    {
        // 0x000368: 0x5C9807800FF70000 Mov
        // 0x000370: 0xE33000000007000F Kil
        discard;
    }
    // 0x0003D0: 0x0103F8000007F007 Mov32i
    // 0x0003D8: 0xE003FF91CFF7FF13 Ipa
    temp_95 = in_attr9.w;
    temp_96 = gl_FragCoord.w;
    temp_97 = temp_95 * temp_96;
    // 0x0003E8: 0x5080000000471313 Mufu
    temp_98 = 1.0 / temp_97;
    // 0x0003F0: 0xE043FF918137FF16 Ipa
    temp_99 = in_attr9.z;
    temp_100 = gl_FragCoord.w;
    temp_101 = temp_99 * temp_100;
    temp_102 = temp_101 * temp_98;
    // 0x0003F8: 0xE043FF910137FF2C Ipa
    temp_103 = in_attr9.x;
    temp_104 = gl_FragCoord.w;
    temp_105 = temp_103 * temp_104;
    temp_106 = temp_105 * temp_98;
    // 0x000408: 0xE043FF914137FF2D Ipa
    temp_107 = in_attr9.y;
    temp_108 = gl_FragCoord.w;
    temp_109 = temp_107 * temp_108;
    temp_110 = temp_109 * temp_98;
    // 0x000410: 0xD88001AFF1672C2D Texs
    temp_111 = texture(fp_t_tcb_1A, vec3(temp_106, temp_110, temp_102));
    // 0x000418: 0xD86201EFF0771007 Texs
    temp_112 = textureLod(fp_t_tcb_1E, vec2(temp_79, temp_37), 1.0).x;
    // 0x000428: 0xE043FF8B0007FF06 Ipa
    temp_113 = in_attr3.x;
    // 0x000430: 0xE043FF8B4007FF08 Ipa
    temp_114 = in_attr3.y;
    // 0x000438: 0xE043FF8B8007FF09 Ipa
    temp_115 = in_attr3.z;
    // 0x000448: 0xF0F0000034370000 Depbar
    // 0x000450: 0x4C68101403070C0C Fmul
    temp_116 = temp_83 * fp_c5.data[12].x;
    // 0x000458: 0xE2900000CF800000 Ssy
    // 0x000468: 0x4C68101403270A0A Fmul
    temp_117 = temp_85 * fp_c5.data[12].z;
    // 0x000470: 0x4C68101403170D0D Fmul
    temp_118 = temp_84 * fp_c5.data[12].y;
    // 0x000478: 0x4C68101402D70F1D Fmul
    temp_119 = temp_56 * fp_c5.data[11].y;
    // 0x000488: 0x4C6C101406972828 Fmul
    temp_120 = temp_87 * fp_c5.data[26].y;
    temp_121 = clamp(temp_120, 0.0, 1.0);
    // 0x000490: 0x386810418007101C Fmul
    temp_122 = temp_79 * 16.0;
    // 0x000498: 0x4C68101801470C0C Fmul
    temp_123 = temp_116 * fp_c6.data[5].x;
    // 0x0004A8: 0x5CA8148001C70A1C F2f
    temp_124 = floor(temp_122);
    // 0x0004B0: 0x4C68101801570D0D Fmul
    temp_125 = temp_118 * fp_c6.data[5].y;
    // 0x0004B8: 0x3868104110071124 Fmul
    temp_126 = temp_37 * 9.0;
    // 0x0004C8: 0x4C6810180A072828 Fmul
    temp_127 = temp_121 * fp_c6.data[40].x;
    // 0x0004D0: 0x5CA8148002470A26 F2f
    temp_128 = floor(temp_126);
    // 0x0004D8: 0x4C68101406871D1D Fmul
    temp_129 = temp_119 * fp_c5.data[26].x;
    // 0x0004E8: 0x5C68100000C7120C Fmul
    temp_130 = temp_89 * temp_123;
    // 0x0004F0: 0x5C68100000D7120D Fmul
    temp_131 = temp_89 * temp_125;
    // 0x0004F8: 0x5C9807800FF70037 Mov
    // 0x000508: 0x5C9807800FF70034 Mov
    // 0x000510: 0x386013BF80072828 Fmnmx
    temp_132 = min(temp_127, 1.0);
    // 0x000518: 0x5C9807800FF70035 Mov
    // 0x000528: 0x5C9807800FF70033 Mov
    // 0x000530: 0x5C9807800FF70032 Mov
    // 0x000538: 0x5C9807800FF70031 Mov
    // 0x000548: 0x32A00E418007262B Ffma
    temp_133 = fma(temp_128, 16.0, temp_124);
    // 0x000550: 0x4C68101402E7201C Fmul
    temp_134 = temp_57 * fp_c5.data[11].z;
    // 0x000558: 0x5CB0118002B70A2B F2i
    temp_135 = trunc(temp_133);
    temp_136 = max(temp_135, 0.0);
    temp_137 = uint(temp_136);
    // 0x000568: 0x5C6810000067060B Fmul
    temp_138 = temp_113 * temp_113;
    // 0x000570: 0x4C68101406871C1C Fmul
    temp_139 = temp_134 * fp_c5.data[26].x;
    // 0x000578: 0x59A005800087080B Ffma
    temp_140 = fma(temp_114, temp_114, temp_138);
    // 0x000588: 0x59A005800097090B Ffma
    temp_141 = fma(temp_115, temp_115, temp_140);
    // 0x000590: 0x3848000000872B2A Shl
    temp_142 = int(temp_137) << 8;
    // 0x000598: 0x5080000000570B0B Mufu
    temp_143 = inversesqrt(temp_141);
    // 0x0005A8: 0xEF94008200472A2A Ldc
    temp_144 = temp_142 + 0x2004;
    temp_145 = uint(temp_144) >> 2;
    temp_146 = temp_145 >> 2;
    temp_147 = int(temp_145) & 3;
    temp_148 = fp_c8.data[int(temp_146)][temp_147];
    // 0x0005B0: 0x5C69100000B70625 Fmul
    temp_149 = 0.0 - temp_143;
    temp_150 = temp_113 * temp_149;
    // 0x0005B8: 0x5C69100000B70823 Fmul
    temp_151 = 0.0 - temp_143;
    temp_152 = temp_114 * temp_151;
    // 0x0005C8: 0x5C69100000B70922 Fmul
    temp_153 = 0.0 - temp_143;
    temp_154 = temp_115 * temp_153;
    // 0x0005D0: 0x5C68100002570414 Fmul
    temp_155 = temp_68 * temp_150;
    // 0x0005D8: 0x59A00A0002370213 Ffma
    temp_156 = fma(temp_64, temp_152, temp_155);
    // 0x0005E8: 0x4C68101805C70414 Fmul
    temp_157 = temp_68 * fp_c6.data[23].x;
    // 0x0005F0: 0x59A4098002270113 Ffma
    temp_158 = fma(temp_63, temp_154, temp_156);
    temp_159 = clamp(temp_158, 0.0, 1.0);
    // 0x0005F8: 0x49A00A1805D70214 Ffma
    temp_160 = fma(temp_64, fp_c6.data[23].y, temp_157);
    // 0x000608: 0x3859103F80071315 Fadd
    temp_161 = 0.0 - temp_159;
    temp_162 = temp_161 + 1.0;
    // 0x000610: 0x49A40A1805E70114 Ffma
    temp_163 = fma(temp_63, fp_c6.data[23].z, temp_160);
    temp_164 = clamp(temp_163, 0.0, 1.0);
    // 0x000618: 0x5C6810000137043A Fmul
    temp_165 = temp_68 * temp_159;
    // 0x000628: 0x5C68100001370224 Fmul
    temp_166 = temp_64 * temp_159;
    // 0x000630: 0x4C68101406471516 Fmul
    temp_167 = temp_162 * fp_c5.data[25].x;
    // 0x000638: 0x3859503F80071414 Fadd
    temp_168 = abs(temp_164);
    temp_169 = 0.0 - temp_168;
    temp_170 = temp_169 + 1.0;
    // 0x000648: 0x5080400000371616 Mufu
    temp_171 = abs(temp_167);
    temp_172 = log2(temp_171);
    // 0x000650: 0x32A212C000073A3A Ffma
    temp_173 = 0.0 - temp_150;
    temp_174 = fma(temp_165, 2.0, temp_173);
    // 0x000658: 0x5080000000371414 Mufu
    temp_175 = log2(temp_170);
    // 0x000668: 0x32A211C000072424 Ffma
    temp_176 = 0.0 - temp_152;
    temp_177 = fma(temp_166, 2.0, temp_176);
    // 0x000670: 0x5B6603800FF72A07 Isetp
    temp_178 = floatBitsToUint(temp_148) <= 0u;
    // 0x000678: 0x4C68101406571617 Fmul
    temp_179 = temp_172 * fp_c5.data[25].y;
    // 0x000688: 0x4C68101406671415 Fmul
    temp_180 = temp_175 * fp_c5.data[25].z;
    // 0x000690: 0x4C68101801670A14 Fmul
    temp_181 = temp_117 * fp_c6.data[5].z;
    // 0x000698: 0x5C90008001770018 Rro
    // 0x0006A8: 0x5084000000271817 Mufu
    temp_182 = exp2(temp_179);
    temp_183 = clamp(temp_182, 0.0, 1.0);
    // 0x0006B0: 0x5C90008001570015 Rro
    // 0x0006B8: 0x5080000000271515 Mufu
    temp_184 = exp2(temp_180);
    // 0x0006C8: 0x4C68101406371717 Fmul
    temp_185 = temp_183 * fp_c5.data[24].w;
    // 0x0006D0: 0x49A00B9406771517 Ffma
    temp_186 = fma(temp_184, fp_c5.data[25].w, temp_185);
    // 0x0006D8: 0x5C68100001471215 Fmul
    temp_187 = temp_89 * temp_181;
    // 0x0006E8: 0x4C68101801471719 Fmul
    temp_188 = temp_186 * fp_c6.data[5].x;
    // 0x0006F0: 0x4C68101801571714 Fmul
    temp_189 = temp_186 * fp_c6.data[5].y;
    // 0x0006F8: 0x4C68101801671717 Fmul
    temp_190 = temp_186 * fp_c6.data[5].z;
    // 0x000708: 0x59A0060000E7190A Ffma
    temp_191 = fma(temp_188, temp_55, temp_130);
    // 0x000710: 0x59A0068000F7140C Ffma
    temp_192 = fma(temp_189, temp_56, temp_131);
    // 0x000718: 0x4C68101402C70E14 Fmul
    temp_193 = temp_55 * fp_c5.data[11].x;
    // 0x000728: 0x4C58301805C7250E Fadd
    temp_194 = 0.0 - fp_c6.data[23].x;
    temp_195 = temp_150 + temp_194;
    // 0x000730: 0x4C58301805D7230F Fadd
    temp_196 = 0.0 - fp_c6.data[23].y;
    temp_197 = temp_152 + temp_196;
    // 0x000738: 0x59A00A800207170D Ffma
    temp_198 = fma(temp_190, temp_57, temp_187);
    // 0x000748: 0x4C58301805E72215 Fadd
    temp_199 = 0.0 - fp_c6.data[23].z;
    temp_200 = temp_154 + temp_199;
    // 0x000750: 0x5C68100000E70E16 Fmul
    temp_201 = temp_195 * temp_195;
    // 0x000758: 0x59A00B0000F70F16 Ffma
    temp_202 = fma(temp_197, temp_197, temp_201);
    // 0x000768: 0x59A00B0001571516 Ffma
    temp_203 = fma(temp_200, temp_200, temp_202);
    // 0x000770: 0x5080000000571618 Mufu
    temp_204 = inversesqrt(temp_203);
    // 0x000778: 0x5C68100001870E17 Fmul
    temp_205 = temp_195 * temp_204;
    // 0x000788: 0x4C6017840017280E Fmnmx
    temp_206 = max(temp_132, fp_c1.data[0].y);
    // 0x000790: 0x5C68100001870F19 Fmul
    temp_207 = temp_197 * temp_204;
    // 0x000798: 0x5C68100001871518 Fmul
    temp_208 = temp_200 * temp_204;
    // 0x0007A8: 0x5C6810000177041B Fmul
    temp_209 = temp_68 * temp_205;
    // 0x0007B0: 0x51A4070400170E0F Ffma
    temp_210 = fma(temp_206, temp_206, fp_c1.data[0].y);
    temp_211 = clamp(temp_210, 0.0, 1.0);
    // 0x0007B8: 0x32A001BF00070E27 Ffma
    temp_212 = fma(temp_206, 0.5, 0.5);
    // 0x0007C8: 0x4C69101805C70403 Fmul
    temp_213 = 0.0 - fp_c6.data[23].x;
    temp_214 = temp_68 * temp_213;
    // 0x0007D0: 0x59A00D800197021B Ffma
    temp_215 = fma(temp_64, temp_207, temp_209);
    // 0x0007D8: 0x5C68100000F70F15 Fmul
    temp_216 = temp_211 * temp_211;
    // 0x0007E8: 0x5C68120002772727 Fmul
    temp_217 = temp_212 * 0.5;
    temp_218 = temp_217 * temp_212;
    // 0x0007F0: 0x49A1019805D70203 Ffma
    temp_219 = 0.0 - fp_c6.data[23].y;
    temp_220 = fma(temp_64, temp_219, temp_214);
    // 0x0007F8: 0x59A40D800187011B Ffma
    temp_221 = fma(temp_63, temp_208, temp_215);
    temp_222 = clamp(temp_221, 0.0, 1.0);
    // 0x000808: 0x5C68100001772510 Fmul
    temp_223 = temp_150 * temp_205;
    // 0x000810: 0x59A109800277131A Ffma
    temp_224 = 0.0 - temp_218;
    temp_225 = fma(temp_159, temp_224, temp_159);
    // 0x000818: 0x4C69101805C71717 Fmul
    temp_226 = 0.0 - fp_c6.data[23].x;
    temp_227 = temp_205 * temp_226;
    // 0x000828: 0x59A20D8001571B16 Ffma
    temp_228 = 0.0 - temp_222;
    temp_229 = fma(temp_222, temp_216, temp_228);
    // 0x000830: 0x49A5019805E70115 Ffma
    temp_230 = 0.0 - fp_c6.data[23].z;
    temp_231 = fma(temp_63, temp_230, temp_220);
    temp_232 = clamp(temp_231, 0.0, 1.0);
    // 0x000838: 0x5C58100001A7271A Fadd
    temp_233 = temp_218 + temp_225;
    // 0x000848: 0x59A0080001972303 Ffma
    temp_234 = fma(temp_152, temp_207, temp_223);
    // 0x000850: 0x5080000000471A1A Mufu
    temp_235 = 1.0 / temp_233;
    // 0x000858: 0x49A10B9805D71917 Ffma
    temp_236 = 0.0 - fp_c6.data[23].y;
    temp_237 = fma(temp_207, temp_236, temp_227);
    // 0x000868: 0x51A00B0400271B16 Ffma
    temp_238 = fma(temp_222, temp_229, fp_c1.data[0].z);
    // 0x000870: 0x59A10A8002771511 Ffma
    temp_239 = 0.0 - temp_218;
    temp_240 = fma(temp_232, temp_239, temp_232);
    // 0x000878: 0x5080000000471616 Mufu
    temp_241 = 1.0 / temp_238;
    // 0x000888: 0x59A4018001872210 Ffma
    temp_242 = fma(temp_154, temp_208, temp_234);
    temp_243 = clamp(temp_242, 0.0, 1.0);
    // 0x000890: 0x49A50B9805E71817 Ffma
    temp_244 = 0.0 - fp_c6.data[23].z;
    temp_245 = fma(temp_208, temp_244, temp_237);
    temp_246 = clamp(temp_245, 0.0, 1.0);
    // 0x000898: 0x4C68101406871403 Fmul
    temp_247 = temp_193 * fp_c5.data[26].x;
    // 0x0008A8: 0x5C5810000117271B Fadd
    temp_248 = temp_218 + temp_240;
    // 0x0008B0: 0x01040DF760C7F011 Mov32i
    // 0x0008B8: 0x5080000000471B1B Mufu
    temp_249 = 1.0 / temp_248;
    // 0x0008C8: 0x3868103F00071A26 Fmul
    temp_250 = temp_235 * 0.5;
    // 0x0008D0: 0x4C58301407B71D1A Fadd
    temp_251 = 0.0 - fp_c5.data[30].w;
    temp_252 = temp_129 + temp_251;
    // 0x0008D8: 0x5C68100001670F18 Fmul
    temp_253 = temp_211 * temp_241;
    // 0x0008E8: 0x49A208840007100F Ffma
    temp_254 = fma(temp_243, fp_c1.data[0].x, -6.98316002);
    // 0x0008F0: 0x49A2088400071711 Ffma
    temp_255 = fma(temp_246, fp_c1.data[0].x, -6.98316002);
    // 0x0008F8: 0x51A00D1407B7291A Ffma
    temp_256 = fma(temp_88, temp_252, fp_c5.data[30].w);
    // 0x000908: 0x5C68100001871818 Fmul
    temp_257 = temp_253 * temp_253;
    // 0x000910: 0x5C68100000F7100F Fmul
    temp_258 = temp_243 * temp_254;
    // 0x000918: 0x5C68100001171711 Fmul
    temp_259 = temp_246 * temp_255;
    // 0x000928: 0x5C68100001B72616 Fmul
    temp_260 = temp_250 * temp_249;
    // 0x000930: 0x4C58301407B7031B Fadd
    temp_261 = 0.0 - fp_c5.data[30].w;
    temp_262 = temp_247 + temp_261;
    // 0x000938: 0x4C68101801571517 Fmul
    temp_263 = temp_232 * fp_c6.data[5].y;
    // 0x000948: 0x5C90008000F70010 Rro
    // 0x000950: 0x5C90008001170014 Rro
    // 0x000958: 0x5080000000271010 Mufu
    temp_264 = exp2(temp_258);
    // 0x000968: 0x5C68100001671818 Fmul
    temp_265 = temp_257 * temp_260;
    // 0x000970: 0x5080000000271414 Mufu
    temp_266 = exp2(temp_259);
    // 0x000978: 0x4C58301407B71C16 Fadd
    temp_267 = 0.0 - fp_c5.data[30].w;
    temp_268 = temp_139 + temp_267;
    // 0x000988: 0x4C68101801471511 Fmul
    temp_269 = temp_232 * fp_c6.data[5].x;
    // 0x000990: 0x51A00D9407B7291B Ffma
    temp_270 = fma(temp_88, temp_262, fp_c5.data[30].w);
    // 0x000998: 0x1E23EA2F98371720 Fmul32i
    temp_271 = temp_263 * 0.318309873;
    // 0x0009A8: 0x5C6810000187150F Fmul
    temp_272 = temp_232 * temp_265;
    // 0x0009B0: 0x4C68101801671515 Fmul
    temp_273 = temp_232 * fp_c6.data[5].z;
    // 0x0009B8: 0x51A00B1407B72919 Ffma
    temp_274 = fma(temp_88, temp_268, fp_c5.data[30].w);
    // 0x0009C8: 0x1E23EA2F98371118 Fmul32i
    temp_275 = temp_269 * 0.318309873;
    // 0x0009D0: 0x59A1080001A71017 Ffma
    temp_276 = 0.0 - temp_256;
    temp_277 = fma(temp_264, temp_276, temp_264);
    // 0x0009D8: 0x59A1080001B71016 Ffma
    temp_278 = 0.0 - temp_270;
    temp_279 = fma(temp_264, temp_278, temp_264);
    // 0x0009E8: 0x1E23EA2F9837152E Fmul32i
    temp_280 = temp_273 * 0.318309873;
    // 0x0009F0: 0x59A10A0001B71411 Ffma
    temp_281 = 0.0 - temp_270;
    temp_282 = fma(temp_266, temp_281, temp_266);
    // 0x0009F8: 0x59A10A0001A71415 Ffma
    temp_283 = 0.0 - temp_256;
    temp_284 = fma(temp_266, temp_283, temp_266);
    // 0x000A08: 0x59A10A0001971414 Ffma
    temp_285 = 0.0 - temp_274;
    temp_286 = fma(temp_266, temp_285, temp_266);
    // 0x000A10: 0x59A1080001971010 Ffma
    temp_287 = 0.0 - temp_274;
    temp_288 = fma(temp_264, temp_287, temp_264);
    // 0x000A18: 0x5C58100001771A17 Fadd
    temp_289 = temp_256 + temp_277;
    // 0x000A28: 0x5C58100001671B16 Fadd
    temp_290 = temp_270 + temp_279;
    // 0x000A30: 0x5C58100001171B11 Fadd
    temp_291 = temp_270 + temp_282;
    // 0x000A38: 0x5C58100001571A15 Fadd
    temp_292 = temp_256 + temp_284;
    // 0x000A48: 0x5C58100001471914 Fadd
    temp_293 = temp_274 + temp_286;
    // 0x000A50: 0x5C58100001071910 Fadd
    temp_294 = temp_274 + temp_288;
    // 0x000A58: 0x59A1100002071717 Ffma
    temp_295 = 0.0 - temp_271;
    temp_296 = fma(temp_289, temp_295, temp_271);
    // 0x000A68: 0x59A10C0001871618 Ffma
    temp_297 = 0.0 - temp_275;
    temp_298 = fma(temp_290, temp_297, temp_275);
    // 0x000A70: 0x4C68101801471111 Fmul
    temp_299 = temp_291 * fp_c6.data[5].x;
    // 0x000A78: 0x4C68101801571515 Fmul
    temp_300 = temp_292 * fp_c6.data[5].y;
    // 0x000A88: 0x4C68101801671414 Fmul
    temp_301 = temp_293 * fp_c6.data[5].z;
    // 0x000A90: 0x59A1170002E71010 Ffma
    temp_302 = 0.0 - temp_280;
    temp_303 = fma(temp_294, temp_302, temp_280);
    // 0x000A98: 0x5C68100001170F11 Fmul
    temp_304 = temp_272 * temp_299;
    // 0x000AA8: 0x5C68100001570F15 Fmul
    temp_305 = temp_272 * temp_300;
    // 0x000AB0: 0x5C68100001470F14 Fmul
    temp_306 = temp_272 * temp_301;
    // 0x000AB8: 0x385D103F80072D2D Fadd
    temp_307 = 0.0 - temp_111;
    temp_308 = temp_307 + 1.0;
    temp_309 = clamp(temp_308, 0.0, 1.0);
    // 0x000AC8: 0x51A5038400271220 Ffma
    temp_310 = 0.0 - temp_112;
    temp_311 = fma(temp_89, temp_310, fp_c1.data[0].z);
    temp_312 = clamp(temp_311, 0.0, 1.0);
    // 0x000AD0: 0x5C68100001370107 Fmul
    temp_313 = temp_63 * temp_159;
    // 0x000AD8: 0x3859103F80072D16 Fadd
    temp_314 = 0.0 - temp_309;
    temp_315 = temp_314 + 1.0;
    // 0x000AE8: 0x32A2114000070712 Ffma
    temp_316 = 0.0 - temp_154;
    temp_317 = fma(temp_313, 2.0, temp_316);
    // 0x000AF0: 0x49A210180AC72007 Ffma
    temp_318 = 0.0 - temp_312;
    temp_319 = fma(temp_312, fp_c6.data[43].x, temp_318);
    // 0x000AF8: 0x5C6810000167100F Fmul
    temp_320 = temp_303 * temp_315;
    // 0x000B08: 0x49A210180AD72010 Ffma
    temp_321 = 0.0 - temp_312;
    temp_322 = fma(temp_312, fp_c6.data[43].y, temp_321);
    // 0x000B10: 0x49A210180AE72020 Ffma
    temp_323 = 0.0 - temp_312;
    temp_324 = fma(temp_312, fp_c6.data[43].z, temp_323);
    // 0x000B18: 0x5C68100001671818 Fmul
    temp_325 = temp_298 * temp_315;
    // 0x000B28: 0x5C68100001671713 Fmul
    temp_326 = temp_296 * temp_315;
    // 0x000B30: 0x5C68100001671111 Fmul
    temp_327 = temp_304 * temp_315;
    // 0x000B38: 0x5C68100001671515 Fmul
    temp_328 = temp_305 * temp_315;
    // 0x000B48: 0x5C68100001671414 Fmul
    temp_329 = temp_306 * temp_315;
    // 0x000B50: 0x3858103F80070716 Fadd
    temp_330 = temp_319 + 1.0;
    // 0x000B58: 0x3858103F80071010 Fadd
    temp_331 = temp_322 + 1.0;
    // 0x000B68: 0x3858103F80072017 Fadd
    temp_332 = temp_324 + 1.0;
    // 0x000B70: 0x1E23E22F9837112E Fmul32i
    temp_333 = temp_327 * 0.159154937;
    // 0x000B78: 0x1E23E22F9837152F Fmul32i
    temp_334 = temp_328 * 0.159154937;
    // 0x000B88: 0x1E23E22F98371430 Fmul32i
    temp_335 = temp_329 * 0.159154937;
    // 0x000B90: 0x59A40B0001670307 Ffma
    temp_336 = fma(temp_247, temp_330, temp_330);
    temp_337 = clamp(temp_336, 0.0, 1.0);
    // 0x000B98: 0x59A4080001071D20 Ffma
    temp_338 = fma(temp_129, temp_331, temp_331);
    temp_339 = clamp(temp_338, 0.0, 1.0);
    // 0x000BA8: 0x59A40B8001771C28 Ffma
    temp_340 = fma(temp_139, temp_332, temp_332);
    temp_341 = clamp(temp_340, 0.0, 1.0);
    // 0x000BB0: 0xF0F800000000000F Sync
    temp_342 = 0.0;
    temp_343 = 0.0;
    temp_344 = 0.0;
    temp_345 = 0.0;
    temp_346 = 0.0;
    temp_347 = 0.0;
    temp_348 = 0.0;
    temp_349 = 0.0;
    temp_350 = 0.0;
    temp_351 = 0.0;
    temp_352 = 0.0;
    temp_353 = 0.0;
    if (!temp_178)
    {
        // 0x000BB8: 0x5C9807800FF7003C Mov
        // 0x000BC8: 0xE043FF8D0007FF36 Ipa
        temp_354 = in_attr5.x;
        // 0x000BD0: 0xE043FF8D4007FF2C Ipa
        temp_355 = in_attr5.y;
        // 0x000BD8: 0xE043FF8D8007FF39 Ipa
        temp_356 = in_attr5.z;
        temp_357 = 0;
        do
        {
            // 0x000BE8: 0x5C18020003C72B3F Iscadd
            temp_359 = int(temp_137) << 4;
            temp_360 = temp_359 + temp_357;
            // 0x000BF0: 0xE290000053800000 Ssy
            // 0x000BF8: 0x3848000000473F3F Shl
            temp_361 = temp_360 << 4;
            // 0x000C08: 0xEF94008200073F38 Ldc
            temp_362 = temp_361 + 0x2000;
            temp_363 = uint(temp_362) >> 2;
            temp_364 = temp_363 >> 2;
            temp_365 = int(temp_363) & 3;
            temp_366 = fp_c8.data[int(temp_364)][temp_365];
            // 0x000C10: 0x3848000000673838 Shl
            temp_367 = floatBitsToInt(temp_366) << 6;
            // 0x000C18: 0xEF95008001073810 Ldc
            temp_368 = temp_367 + 16;
            temp_369 = uint(temp_368) >> 2;
            temp_370 = temp_369 >> 2;
            temp_371 = int(temp_369) & 3;
            temp_372 = fp_c8.data[int(temp_370)][temp_371];
            temp_373 = int(temp_369) + 1;
            temp_374 = uint(temp_373) >> 2;
            temp_375 = temp_373 & 3;
            temp_376 = fp_c8.data[int(temp_374)][temp_375];
            // 0x000C28: 0xEF95008001873814 Ldc
            temp_377 = temp_367 + 24;
            temp_378 = uint(temp_377) >> 2;
            temp_379 = temp_378 >> 2;
            temp_380 = int(temp_378) & 3;
            temp_381 = fp_c8.data[int(temp_379)][temp_380];
            temp_382 = int(temp_378) + 1;
            temp_383 = uint(temp_382) >> 2;
            temp_384 = temp_382 & 3;
            temp_385 = fp_c8.data[int(temp_383)][temp_384];
            // 0x000C30: 0xEF95008002073816 Ldc
            temp_386 = temp_367 + 32;
            temp_387 = uint(temp_386) >> 2;
            temp_388 = temp_387 >> 2;
            temp_389 = int(temp_387) & 3;
            temp_390 = fp_c8.data[int(temp_388)][temp_389];
            temp_391 = int(temp_387) + 1;
            temp_392 = uint(temp_391) >> 2;
            temp_393 = temp_391 & 3;
            temp_394 = fp_c8.data[int(temp_392)][temp_393];
            // 0x000C38: 0x5C5830000367103B Fadd
            temp_395 = 0.0 - temp_354;
            temp_396 = temp_372 + temp_395;
            // 0x000C48: 0x5C58300002C7113D Fadd
            temp_397 = 0.0 - temp_355;
            temp_398 = temp_376 + temp_397;
            // 0x000C50: 0x5C58300003971414 Fadd
            temp_399 = 0.0 - temp_356;
            temp_400 = temp_381 + temp_399;
            // 0x000C58: 0x5C68100003B73B3E Fmul
            temp_401 = temp_396 * temp_396;
            // 0x000C68: 0x59A10A0001471511 Ffma
            temp_402 = 0.0 - temp_400;
            temp_403 = fma(temp_385, temp_402, temp_400);
            // 0x000C70: 0x59A01F0003D73D3E Ffma
            temp_404 = fma(temp_398, temp_398, temp_401);
            // 0x000C78: 0x59A01F0001171115 Ffma
            temp_405 = fma(temp_403, temp_403, temp_404);
            // 0x000C88: 0x5080000000571510 Mufu
            temp_406 = inversesqrt(temp_405);
            // 0x000C90: 0x5C68100001073B3F Fmul
            temp_407 = temp_396 * temp_406;
            // 0x000C98: 0x5C68100001071111 Fmul
            temp_408 = temp_403 * temp_406;
            // 0x000CA8: 0x5C68100001073D10 Fmul
            temp_409 = temp_398 * temp_406;
            // 0x000CB0: 0x5C69100001673F16 Fmul
            temp_410 = 0.0 - temp_390;
            temp_411 = temp_407 * temp_410;
            // 0x000CB8: 0x508000000087153F Mufu
            temp_412 = sqrt(temp_405);
            // 0x000CC8: 0x59A10B0001771016 Ffma
            temp_413 = 0.0 - temp_394;
            temp_414 = fma(temp_409, temp_413, temp_411);
            // 0x000CD0: 0xEF94008002873810 Ldc
            temp_415 = temp_367 + 40;
            temp_416 = uint(temp_415) >> 2;
            temp_417 = temp_416 >> 2;
            temp_418 = int(temp_416) & 3;
            temp_419 = fp_c8.data[int(temp_417)][temp_418];
            // 0x000CD8: 0x59A10B0001071116 Ffma
            temp_420 = 0.0 - temp_419;
            temp_421 = fma(temp_408, temp_420, temp_414);
            // 0x000CE8: 0xEF95008003873810 Ldc
            temp_422 = temp_367 + 56;
            temp_423 = uint(temp_422) >> 2;
            temp_424 = temp_423 >> 2;
            temp_425 = int(temp_423) & 3;
            temp_426 = fp_c8.data[int(temp_424)][temp_425];
            temp_427 = int(temp_423) + 1;
            temp_428 = uint(temp_427) >> 2;
            temp_429 = temp_427 & 3;
            temp_430 = fp_c8.data[int(temp_428)][temp_429];
            // 0x000CF0: 0x59A4088001071610 Ffma
            temp_431 = fma(temp_421, temp_426, temp_430);
            temp_432 = clamp(temp_431, 0.0, 1.0);
            // 0x000CF8: 0x010404000007F016 Mov32i
            // 0x000D08: 0x5C68100001071017 Fmul
            temp_433 = temp_432 * temp_432;
            // 0x000D10: 0x33A00B4000071010 Ffma
            temp_434 = fma(temp_432, -2.0, 3.0);
            // 0x000D18: 0x5C68100001071717 Fmul
            temp_435 = temp_433 * temp_434;
            // 0x000D28: 0xEF95008003073810 Ldc
            temp_436 = temp_367 + 48;
            temp_437 = uint(temp_436) >> 2;
            temp_438 = temp_437 >> 2;
            temp_439 = int(temp_437) & 3;
            temp_440 = fp_c8.data[int(temp_438)][temp_439];
            temp_441 = int(temp_437) + 1;
            temp_442 = uint(temp_441) >> 2;
            temp_443 = temp_441 & 3;
            temp_444 = fp_c8.data[int(temp_442)][temp_443];
            // 0x000D30: 0x59A4088003F7103F Ffma
            temp_445 = fma(temp_440, temp_412, temp_444);
            temp_446 = clamp(temp_445, 0.0, 1.0);
            // 0x000D38: 0x33A00B4000073F16 Ffma
            temp_447 = fma(temp_446, -2.0, 3.0);
            // 0x000D48: 0x5C68100003F73F3F Fmul
            temp_448 = temp_446 * temp_446;
            // 0x000D50: 0x5C68100003F71616 Fmul
            temp_449 = temp_447 * temp_448;
            // 0x000D58: 0x5C68100001671717 Fmul
            temp_450 = temp_435 * temp_449;
            // 0x000D68: 0x39585042F0071416 Fadd
            temp_451 = abs(temp_400);
            temp_452 = temp_451 + -120.0;
            // 0x000D70: 0x1EABD4CCCCD71616 Fmul32i
            temp_453 = temp_452 * -0.0500000007;
            temp_454 = clamp(temp_453, 0.0, 1.0);
            // 0x000D78: 0x5C68100001771616 Fmul
            temp_455 = temp_454 * temp_450;
            // 0x000D88: 0x36247F9000171717 Xmad
            temp_456 = floatBitsToUint(temp_450) >> 16;
            temp_457 = int(temp_456) << 16;
            // 0x000D90: 0x5BB383800FF71607 Fsetp
            temp_458 = temp_455 <= 0.0;
            // 0x000D98: 0x7A05083C0F00FF17 Hadd2
            temp_459 = uint(temp_457);
            temp_460 = temp_342;
            temp_461 = temp_343;
            temp_462 = temp_344;
            temp_463 = temp_345;
            temp_464 = temp_346;
            temp_465 = temp_347;
            if (temp_458)
            {
                temp_466 = unpackHalf2x16(uint(temp_457)).y;
                temp_467 = packHalf2x16(vec2(1.0, temp_466));
                temp_459 = temp_467;
            }
            // 0x000DA8: 0x5D2103902FF71707 Hsetp2
            temp_468 = unpackHalf2x16(temp_459).x;
            temp_469 = temp_468 == 0.0;
            // 0x000DB0: 0xF0F800000008000F Sync
            if (temp_469)
            {
                // 0x000DB8: 0x5080000000471010 Mufu
                temp_470 = 1.0 / temp_440;
                // 0x000DC8: 0x5C69100001071111 Fmul
                temp_471 = 0.0 - temp_470;
                temp_472 = temp_444 * temp_471;
                // 0x000DD0: 0x5C60138001171414 Fmnmx
                temp_473 = min(temp_400, temp_472);
                // 0x000DD8: 0x5C61178001471114 Fmnmx
                temp_474 = 0.0 - temp_472;
                temp_475 = max(temp_474, temp_473);
                // 0x000DE8: 0x59A01F000147143E Ffma
                temp_476 = fma(temp_475, temp_475, temp_404);
                // 0x000DF0: 0x5080000000573E17 Mufu
                temp_477 = inversesqrt(temp_476);
                // 0x000DF8: 0x5080000000873E3E Mufu
                temp_478 = sqrt(temp_476);
                // 0x000E08: 0x5C68100001773B3B Fmul
                temp_479 = temp_396 * temp_477;
                // 0x000E10: 0x5C68100001773D3D Fmul
                temp_480 = temp_398 * temp_477;
                // 0x000E18: 0x5C68100001771417 Fmul
                temp_481 = temp_475 * temp_477;
                // 0x000E28: 0x5C58100003B7253F Fadd
                temp_482 = temp_150 + temp_479;
                // 0x000E30: 0x5C58100003D72314 Fadd
                temp_483 = temp_152 + temp_480;
                // 0x000E38: 0x5C58100001772210 Fadd
                temp_484 = temp_154 + temp_481;
                // 0x000E48: 0x5C68100003F73F11 Fmul
                temp_485 = temp_482 * temp_482;
                // 0x000E50: 0x59A0088001471411 Ffma
                temp_486 = fma(temp_483, temp_483, temp_485);
                // 0x000E58: 0x59A0088001071011 Ffma
                temp_487 = fma(temp_484, temp_484, temp_486);
                // 0x000E68: 0x5080000000571111 Mufu
                temp_488 = inversesqrt(temp_487);
                // 0x000E70: 0x5C68100001173F15 Fmul
                temp_489 = temp_482 * temp_488;
                // 0x000E78: 0x5C68100001171414 Fmul
                temp_490 = temp_483 * temp_488;
                // 0x000E88: 0x5C68100001171010 Fmul
                temp_491 = temp_484 * temp_488;
                // 0x000E90: 0x5C68100001573B3F Fmul
                temp_492 = temp_479 * temp_489;
                // 0x000E98: 0x5C68100001570411 Fmul
                temp_493 = temp_68 * temp_489;
                // 0x000EA8: 0x5C68100003B7043B Fmul
                temp_494 = temp_68 * temp_479;
                // 0x000EB0: 0x59A01F8001473D15 Ffma
                temp_495 = fma(temp_480, temp_490, temp_492);
                // 0x000EB8: 0x59A008800147023F Ffma
                temp_496 = fma(temp_64, temp_490, temp_493);
                // 0x000EC8: 0x59A01D8003D7023B Ffma
                temp_497 = fma(temp_64, temp_480, temp_494);
                // 0x000ED0: 0xEF9400800087383D Ldc
                temp_498 = temp_367 + 8;
                temp_499 = uint(temp_498) >> 2;
                temp_500 = temp_499 >> 2;
                temp_501 = int(temp_499) & 3;
                temp_502 = fp_c8.data[int(temp_500)][temp_501];
                // 0x000ED8: 0x59A40A8001071714 Ffma
                temp_503 = fma(temp_481, temp_491, temp_495);
                temp_504 = clamp(temp_503, 0.0, 1.0);
                // 0x000EE8: 0x59A41F8001070110 Ffma
                temp_505 = fma(temp_63, temp_491, temp_496);
                temp_506 = clamp(temp_505, 0.0, 1.0);
                // 0x000EF0: 0x51A4070400170E3F Ffma
                temp_507 = fma(temp_206, temp_206, fp_c1.data[0].y);
                temp_508 = clamp(temp_507, 0.0, 1.0);
                // 0x000EF8: 0x59A01D8001770117 Ffma
                temp_509 = fma(temp_63, temp_481, temp_497);
                // 0x000F08: 0x5C68100003F73F11 Fmul
                temp_510 = temp_508 * temp_508;
                // 0x000F10: 0x59A2080001071111 Ffma
                temp_511 = 0.0 - temp_506;
                temp_512 = fma(temp_510, temp_506, temp_511);
                // 0x000F18: 0x51A008840027103B Ffma
                temp_513 = fma(temp_506, temp_512, fp_c1.data[0].z);
                // 0x000F28: 0xEF95008000073810 Ldc
                temp_514 = uint(temp_367) >> 2;
                temp_515 = temp_514 >> 2;
                temp_516 = int(temp_514) & 3;
                temp_517 = fp_c8.data[int(temp_515)][temp_516];
                temp_518 = int(temp_514) + 1;
                temp_519 = uint(temp_518) >> 2;
                temp_520 = temp_518 & 3;
                temp_521 = fp_c8.data[int(temp_519)][temp_520];
                // 0x000F30: 0x5080000000473B15 Mufu
                temp_522 = 1.0 / temp_513;
                // 0x000F38: 0x5C68100001573F15 Fmul
                temp_523 = temp_508 * temp_522;
                // 0x000F48: 0x5C68100001571515 Fmul
                temp_524 = temp_523 * temp_523;
                // 0x000F50: 0x5C68100001071610 Fmul
                temp_525 = temp_455 * temp_517;
                // 0x000F58: 0x5C68100001171611 Fmul
                temp_526 = temp_455 * temp_521;
                // 0x000F68: 0x5C68100003D71616 Fmul
                temp_527 = temp_455 * temp_502;
                // 0x000F70: 0xEF94008002C7383D Ldc
                temp_528 = temp_367 + 44;
                temp_529 = uint(temp_528) >> 2;
                temp_530 = temp_529 >> 2;
                temp_531 = int(temp_529) & 3;
                temp_532 = fp_c8.data[int(temp_530)][temp_531];
                // 0x000F78: 0x5080000000473D3D Mufu
                temp_533 = 1.0 / temp_532;
                // 0x000F88: 0x51A01F0400373D3F Ffma
                temp_534 = fma(temp_533, temp_478, fp_c1.data[0].w);
                // 0x000F90: 0x5C5C30000FF7173D Fadd
                temp_535 = temp_509 + -0.0;
                temp_536 = clamp(temp_535, 0.0, 1.0);
                // 0x000F98: 0x5080000000473F3F Mufu
                temp_537 = 1.0 / temp_534;
                // 0x000FA8: 0x59A11E8003D7273B Ffma
                temp_538 = 0.0 - temp_536;
                temp_539 = fma(temp_218, temp_538, temp_536);
                // 0x000FB0: 0x5C58100003B7273B Fadd
                temp_540 = temp_218 + temp_539;
                // 0x000FB8: 0x5080000000473B3E Mufu
                temp_541 = 1.0 / temp_540;
                // 0x000FC8: 0x1E23FB3333373F3B Fmul32i
                temp_542 = temp_537 * 1.39999998;
                // 0x000FD0: 0x5C68100003E7263E Fmul
                temp_543 = temp_250 * temp_541;
                // 0x000FD8: 0x5C68100003B73B3B Fmul
                temp_544 = temp_542 * temp_542;
                // 0x000FE8: 0x5C68100001573E3E Fmul
                temp_545 = temp_543 * temp_524;
                // 0x000FF0: 0x59A11D8003B71715 Ffma
                temp_546 = 0.0 - temp_544;
                temp_547 = fma(temp_509, temp_546, temp_544);
                // 0x000FF8: 0x5C5C100001571717 Fadd
                temp_548 = temp_509 + temp_547;
                temp_549 = clamp(temp_548, 0.0, 1.0);
                // 0x001008: 0x5C68100003E73D15 Fmul
                temp_550 = temp_536 * temp_545;
                // 0x001010: 0x01040DF760C7F03D Mov32i
                // 0x001018: 0x49A21E840007143B Ffma
                temp_551 = fma(temp_504, fp_c1.data[0].x, -6.98316002);
                // 0x001028: 0x5C68100003B7143B Fmul
                temp_552 = temp_504 * temp_551;
                // 0x001030: 0x5C90008003B7003D Rro
                // 0x001038: 0x5080000000273D14 Mufu
                temp_553 = exp2(temp_552);
                // 0x001048: 0x59A10A0001471A38 Ffma
                temp_554 = 0.0 - temp_553;
                temp_555 = fma(temp_256, temp_554, temp_553);
                // 0x001050: 0x5C58100003871A38 Fadd
                temp_556 = temp_256 + temp_555;
                // 0x001058: 0x5C68100001173838 Fmul
                temp_557 = temp_556 * temp_526;
                // 0x001068: 0x5C68100001771111 Fmul
                temp_558 = temp_526 * temp_549;
                // 0x001070: 0x5C6810000157383B Fmul
                temp_559 = temp_557 * temp_550;
                // 0x001078: 0x59A10A0001471B38 Ffma
                temp_560 = 0.0 - temp_553;
                temp_561 = fma(temp_270, temp_560, temp_553);
                // 0x001088: 0x59A10A0001471914 Ffma
                temp_562 = 0.0 - temp_553;
                temp_563 = fma(temp_274, temp_562, temp_553);
                // 0x001090: 0x49A0190400571132 Ffma
                temp_564 = fma(temp_558, fp_c1.data[1].y, temp_342);
                // 0x001098: 0x49A01A0400473B34 Ffma
                temp_565 = fma(temp_559, fp_c1.data[1].x, temp_343);
                // 0x0010A8: 0x5C58100003871B3B Fadd
                temp_566 = temp_270 + temp_561;
                // 0x0010B0: 0x5C58100001471914 Fadd
                temp_567 = temp_274 + temp_563;
                // 0x0010B8: 0x5C68100001771038 Fmul
                temp_568 = temp_525 * temp_549;
                // 0x0010C8: 0x5C68100001073B3B Fmul
                temp_569 = temp_566 * temp_525;
                // 0x0010D0: 0x5C68100001671414 Fmul
                temp_570 = temp_567 * temp_527;
                // 0x0010D8: 0x5C68100001771616 Fmul
                temp_571 = temp_527 * temp_549;
                // 0x0010E8: 0x49A0198400573833 Ffma
                temp_572 = fma(temp_568, fp_c1.data[1].y, temp_344);
                // 0x0010F0: 0x5C68100001573B10 Fmul
                temp_573 = temp_569 * temp_550;
                // 0x0010F8: 0x5C68100001571414 Fmul
                temp_574 = temp_570 * temp_550;
                // 0x001108: 0x49A0188400571631 Ffma
                temp_575 = fma(temp_571, fp_c1.data[1].y, temp_345);
                // 0x001110: 0x49A01B8400471037 Ffma
                temp_576 = fma(temp_573, fp_c1.data[1].x, temp_346);
                // 0x001118: 0x49A01A8400471435 Ffma
                temp_577 = fma(temp_574, fp_c1.data[1].x, temp_347);
                // 0x001128: 0xF0F800000007000F Sync
                temp_460 = temp_564;
                temp_461 = temp_565;
                temp_462 = temp_572;
                temp_463 = temp_575;
                temp_464 = temp_576;
                temp_465 = temp_577;
            }
            // 0x001130: 0x1C00000000173C3C Iadd32i
            temp_578 = temp_357 + 1;
            // 0x001138: 0x5B6C038002A73C07 Isetp
            temp_358 = uint(temp_578) >= floatBitsToUint(temp_148);
            // 0x001148: 0xE2400FFFA908000F Bra
            temp_357 = temp_578;
            temp_342 = temp_460;
            temp_343 = temp_461;
            temp_344 = temp_462;
            temp_345 = temp_463;
            temp_346 = temp_464;
            temp_347 = temp_465;
            temp_348 = temp_465;
            temp_349 = temp_462;
            temp_350 = temp_464;
            temp_351 = temp_460;
            temp_352 = temp_463;
            temp_353 = temp_461;
        }
        while (!temp_358);
        // 0x001150: 0xF0F800000007000F Sync
    }
    // 0x001158: 0x5C62578002473A11 Fmnmx
    temp_579 = abs(temp_174);
    temp_580 = abs(temp_177);
    temp_581 = max(temp_579, temp_580);
    // 0x001168: 0x38681040E0070E36 Fmul
    temp_582 = temp_206 * 7.0;
    // 0x001170: 0x5C62578000270410 Fmnmx
    temp_583 = abs(temp_68);
    temp_584 = abs(temp_64);
    temp_585 = max(temp_583, temp_584);
    // 0x001178: 0x010000000017F014 Mov32i
    // 0x001188: 0x3868104080070E25 Fmul
    temp_586 = temp_206 * 4.0;
    // 0x001190: 0x4C98079C0207003B Mov
    // 0x001198: 0x5C60578001171222 Fmnmx
    temp_587 = abs(temp_317);
    temp_588 = max(temp_587, temp_581);
    // 0x0011A8: 0x5C60578001070111 Fmnmx
    temp_589 = abs(temp_63);
    temp_590 = max(temp_589, temp_585);
    // 0x0011B0: 0x5080000000472217 Mufu
    temp_591 = 1.0 / temp_588;
    // 0x0011B8: 0x5C68100000670606 Fmul
    temp_592 = temp_113 * temp_113;
    // 0x0011C8: 0xE043FF920007FF10 Ipa
    temp_593 = in_attr10.x;
    // 0x0011D0: 0x59A0030000870806 Ffma
    temp_594 = fma(temp_114, temp_114, temp_592);
    // 0x0011D8: 0x5080000000471123 Mufu
    temp_595 = 1.0 / temp_590;
    // 0x0011E8: 0x5C68100001773A15 Fmul
    temp_596 = temp_174 * temp_591;
    // 0x0011F0: 0xE043FF924007FF11 Ipa
    temp_597 = in_attr10.y;
    // 0x0011F8: 0x5C68100001772416 Fmul
    temp_598 = temp_177 * temp_591;
    // 0x001208: 0x5C69100001771217 Fmul
    temp_599 = 0.0 - temp_591;
    temp_600 = temp_317 * temp_599;
    // 0x001210: 0xE043FF928007FF12 Ipa
    temp_601 = in_attr10.z;
    // 0x001218: 0x5C6910000237012C Fmul
    temp_602 = 0.0 - temp_595;
    temp_603 = temp_63 * temp_602;
    // 0x001228: 0x5C68100002370422 Fmul
    temp_604 = temp_68 * temp_595;
    // 0x001230: 0x5C68100002370223 Fmul
    temp_605 = temp_64 * temp_595;
    // 0x001238: 0xD9A20162D2C72226 Texs
    temp_606 = textureLod(fp_t_tcb_16, vec3(temp_604, temp_605, temp_603), temp_309).xyz;
    temp_607 = temp_606.x;
    temp_608 = temp_606.y;
    temp_609 = temp_606.z;
    // 0x001248: 0xC1BA0143F3671414 Tex
    temp_610 = textureLod(fp_t_tcb_14, vec4(temp_596, temp_598, temp_600, float(1)), temp_582).xyz;
    temp_611 = temp_610.x;
    temp_612 = temp_610.y;
    temp_613 = temp_610.z;
    // 0x001250: 0x5C98078002C70024 Mov
    // 0x001258: 0xD9A201824247222A Texs
    temp_614 = textureLod(fp_t_tcb_18, vec3(temp_604, temp_605, temp_603), temp_586).xyz;
    temp_615 = temp_614.x;
    temp_616 = temp_614.y;
    temp_617 = temp_614.z;
    // 0x001268: 0xDEBA0000C3B71010 TexB
    temp_618 = texture(fp_t_cb7_20, vec3(temp_593, temp_597, temp_601)).x;
    // 0x001270: 0xE043FF8B0007FF38 Ipa
    temp_619 = in_attr3.x;
    // 0x001278: 0xE043FF8B4007FF39 Ipa
    temp_620 = in_attr3.y;
    // 0x001288: 0xE043FF8B8007FF3A Ipa
    temp_621 = in_attr3.z;
    // 0x001290: 0x59A0030000970906 Ffma
    temp_622 = fma(temp_115, temp_115, temp_594);
    // 0x001298: 0x3859103F80070E0E Fadd
    temp_623 = 0.0 - temp_206;
    temp_624 = temp_623 + 1.0;
    // 0x0012A8: 0x5080000000570608 Mufu
    temp_625 = inversesqrt(temp_622);
    // 0x0012B0: 0x0103F0000007F009 Mov32i
    // 0x0012B8: 0x49A018180A173530 Ffma
    temp_626 = fma(temp_348, fp_c6.data[40].y, temp_335);
    // 0x0012C8: 0x49A00C180A173318 Ffma
    temp_627 = fma(temp_349, fp_c6.data[40].y, temp_325);
    // 0x0012D0: 0x49A017180A17372E Ffma
    temp_628 = fma(temp_350, fp_c6.data[40].y, temp_333);
    // 0x0012D8: 0x49A009980A173213 Ffma
    temp_629 = fma(temp_351, fp_c6.data[40].y, temp_326);
    // 0x0012E8: 0x49A007980A17310F Ffma
    temp_630 = fma(temp_352, fp_c6.data[40].y, temp_320);
    // 0x0012F0: 0x49A017980A17342F Ffma
    temp_631 = fma(temp_353, fp_c6.data[40].y, temp_334);
    // 0x0012F8: 0x5C68100000E70E06 Fmul
    temp_632 = temp_624 * temp_624;
    // 0x001308: 0x5C68100000670606 Fmul
    temp_633 = temp_632 * temp_632;
    // 0x001310: 0x5C69100000B7380B Fmul
    temp_634 = 0.0 - temp_143;
    temp_635 = temp_619 * temp_634;
    // 0x001318: 0x5C69100000873939 Fmul
    temp_636 = 0.0 - temp_625;
    temp_637 = temp_620 * temp_636;
    // 0x001328: 0x5C69100000873A3A Fmul
    temp_638 = 0.0 - temp_625;
    temp_639 = temp_621 * temp_638;
    // 0x001330: 0x5C68100000B7040B Fmul
    temp_640 = temp_68 * temp_635;
    // 0x001338: 0x59A005800397020B Ffma
    temp_641 = fma(temp_64, temp_637, temp_640);
    // 0x001348: 0x32A004BF00070202 Ffma
    temp_642 = fma(temp_64, 0.5, 0.5);
    // 0x001350: 0x59A4058003A70101 Ffma
    temp_643 = fma(temp_63, temp_639, temp_641);
    temp_644 = clamp(temp_643, 0.0, 1.0);
    // 0x001358: 0x010410676C97F00B Mov32i
    // 0x001368: 0x3859103F80070104 Fadd
    temp_645 = 0.0 - temp_644;
    temp_646 = temp_645 + 1.0;
    // 0x001370: 0x1E23E468DB970108 Fmul32i
    temp_647 = temp_644 * 0.193900004;
    // 0x001378: 0x49A0058400A7010B Ffma
    temp_648 = fma(temp_644, fp_c1.data[2].z, 8.40400028);
    // 0x001388: 0x4C68101809070404 Fmul
    temp_649 = temp_646 * fp_c6.data[36].x;
    // 0x001390: 0x49A0040400670609 Ffma
    temp_650 = fma(temp_633, fp_c1.data[1].z, temp_647);
    // 0x001398: 0x5080400000370404 Mufu
    temp_651 = abs(temp_649);
    temp_652 = log2(temp_651);
    // 0x0013A8: 0x0104066978D7F017 Mov32i
    // 0x0013B0: 0x0103E2CD9E87F011 Mov32i
    // 0x0013B8: 0x51A0058400B7010E Ffma
    temp_653 = fma(temp_644, temp_648, fp_c1.data[2].w);
    // 0x0013C8: 0x4C98079809A70012 Mov
    // 0x0013D0: 0x4C9807980B47002C Mov
    // 0x0013D8: 0x088BF05D6397090B Fadd32i
    temp_654 = temp_650 + -0.522800028;
    // 0x0013E8: 0x49A20B8400770609 Ffma
    temp_655 = fma(temp_633, fp_c1.data[1].w, -3.60299993);
    // 0x0013F0: 0x49A2088400D70611 Ffma
    temp_656 = fma(temp_633, fp_c1.data[3].y, -0.168799996);
    // 0x0013F8: 0x51A0070400C7010E Ffma
    temp_657 = fma(temp_644, temp_653, fp_c1.data[3].x);
    // 0x001408: 0x010404000007F017 Mov32i
    // 0x001410: 0x51A216180B471E1E Ffma
    temp_658 = 0.0 - fp_c6.data[45].x;
    temp_659 = fma(temp_91, fp_c6.data[45].x, temp_658);
    // 0x001418: 0x5C68100000B7010B Fmul
    temp_660 = temp_644 * temp_654;
    // 0x001428: 0x4C68101809170408 Fmul
    temp_661 = temp_652 * fp_c6.data[36].y;
    // 0x001430: 0xE04BFF904007FF04 Ipa
    temp_662 = in_attr8.y;
    temp_663 = clamp(temp_662, 0.0, 1.0);
    // 0x001438: 0x51A0048400870609 Ffma
    temp_664 = fma(temp_633, temp_655, fp_c1.data[2].x);
    // 0x001448: 0x5C68100001170611 Fmul
    temp_665 = temp_633 * temp_656;
    // 0x001450: 0x4C58101408171201 Fadd
    temp_666 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x001458: 0x4C98079800A70012 Mov
    // 0x001468: 0x51A216180B471F1F Ffma
    temp_667 = 0.0 - fp_c6.data[45].x;
    temp_668 = fma(temp_92, fp_c6.data[45].x, temp_667);
    // 0x001470: 0x51A216180B470505 Ffma
    temp_669 = 0.0 - fp_c6.data[45].x;
    temp_670 = fma(temp_93, fp_c6.data[45].x, temp_669);
    // 0x001478: 0x5C90008000870008 Rro
    // 0x001488: 0x59A0058000970609 Ffma
    temp_671 = fma(temp_633, temp_664, temp_660);
    // 0x001490: 0x5084000000270808 Mufu
    temp_672 = exp2(temp_661);
    temp_673 = clamp(temp_672, 0.0, 1.0);
    // 0x001498: 0x5C60138001170E11 Fmnmx
    temp_674 = min(temp_657, temp_665);
    // 0x0014A8: 0x4C98079800870006 Mov
    // 0x0014B0: 0x386C104248071A0E Fmul
    temp_675 = temp_256 * 50.0;
    temp_676 = clamp(temp_675, 0.0, 1.0);
    // 0x0014B8: 0x4C9807980097000B Mov
    // 0x0014C8: 0x5C5C30000FF71111 Fadd
    temp_677 = temp_674 + -0.0;
    temp_678 = clamp(temp_677, 0.0, 1.0);
    // 0x0014D0: 0x5C68100000170808 Fmul
    temp_679 = temp_673 * temp_666;
    // 0x0014D8: 0x4C59101800470601 Fadd
    temp_680 = 0.0 - fp_c6.data[2].x;
    temp_681 = temp_680 + fp_c6.data[1].x;
    // 0x0014E8: 0x4C5C100400970906 Fadd
    temp_682 = temp_671 + fp_c1.data[2].y;
    temp_683 = clamp(temp_682, 0.0, 1.0);
    // 0x0014F0: 0x5C68100000E7112C Fmul
    temp_684 = temp_678 * temp_676;
    // 0x0014F8: 0x4C59101800570B09 Fadd
    temp_685 = 0.0 - fp_c6.data[2].y;
    temp_686 = temp_685 + fp_c6.data[1].y;
    // 0x001508: 0x4C5910180067120B Fadd
    temp_687 = 0.0 - fp_c6.data[2].z;
    temp_688 = temp_687 + fp_c6.data[1].z;
    // 0x001510: 0x33A00BC000070417 Ffma
    temp_689 = fma(temp_663, -2.0, 3.0);
    // 0x001518: 0x5C68100000470404 Fmul
    temp_690 = temp_663 * temp_663;
    // 0x001528: 0x5C5830000117060E Fadd
    temp_691 = 0.0 - temp_678;
    temp_692 = temp_683 + temp_691;
    // 0x001530: 0x51A0009800870211 Ffma
    temp_693 = fma(temp_642, temp_681, fp_c6.data[2].x);
    // 0x001538: 0x51A0049800970212 Ffma
    temp_694 = fma(temp_642, temp_686, fp_c6.data[2].y);
    // 0x001548: 0x51A0059800A7020B Ffma
    temp_695 = fma(temp_642, temp_688, fp_c6.data[2].z);
    // 0x001550: 0x4C68101808E70806 Fmul
    temp_696 = temp_679 * fp_c6.data[35].z;
    // 0x001558: 0x5C68100001770401 Fmul
    temp_697 = temp_690 * temp_689;
    // 0x001568: 0x4C68101808C70804 Fmul
    temp_698 = temp_679 * fp_c6.data[35].x;
    // 0x001570: 0x4C68101808D70802 Fmul
    temp_699 = temp_679 * fp_c6.data[35].y;
    // 0x001578: 0x59A0160000E71B1B Ffma
    temp_700 = fma(temp_270, temp_692, temp_684);
    // 0x001588: 0x59A0160000E71A1A Ffma
    temp_701 = fma(temp_256, temp_692, temp_684);
    // 0x001590: 0x59A0160000E71919 Ffma
    temp_702 = fma(temp_274, temp_692, temp_684);
    // 0x001598: 0x49A103140827060E Ffma
    temp_703 = 0.0 - fp_c5.data[32].z;
    temp_704 = fma(temp_696, temp_703, temp_696);
    // 0x0015A8: 0x49A1021408270409 Ffma
    temp_705 = 0.0 - fp_c5.data[32].z;
    temp_706 = fma(temp_698, temp_705, temp_698);
    // 0x0015B0: 0x49A0181408270630 Ffma
    temp_707 = fma(temp_696, fp_c5.data[32].z, temp_626);
    // 0x0015B8: 0xE043FF900007FF06 Ipa
    temp_708 = in_attr8.x;
    // 0x0015C8: 0x49A1011408270208 Ffma
    temp_709 = 0.0 - fp_c5.data[32].z;
    temp_710 = fma(temp_699, temp_709, temp_699);
    // 0x0015D0: 0x49A017140827042E Ffma
    temp_711 = fma(temp_698, fp_c5.data[32].z, temp_628);
    // 0x0015D8: 0x49A017940827022F Ffma
    temp_712 = fma(temp_699, fp_c5.data[32].z, temp_631);
    // 0x0015E8: 0x5C58100000E70F0E Fadd
    temp_713 = temp_630 + temp_704;
    // 0x0015F0: 0x5C58100000971809 Fadd
    temp_714 = temp_627 + temp_706;
    // 0x0015F8: 0x4C68101803770101 Fmul
    temp_715 = temp_697 * fp_c6.data[13].w;
    // 0x001608: 0x5C58100000871308 Fadd
    temp_716 = temp_629 + temp_710;
    // 0x001610: 0xF0F0000034170000 Depbar
    // 0x001618: 0x49A0130400571126 Ffma
    temp_717 = fma(temp_693, fp_c1.data[1].y, temp_607);
    // 0x001628: 0x49A0138400571212 Ffma
    temp_718 = fma(temp_694, fp_c1.data[1].y, temp_608);
    // 0x001630: 0x49A0168400570B0B Ffma
    temp_719 = fma(temp_695, fp_c1.data[1].y, temp_609);
    // 0x001638: 0x49A0151808571404 Ffma
    temp_720 = fma(temp_611, fp_c6.data[33].y, temp_615);
    // 0x001648: 0x49A0159808571515 Ffma
    temp_721 = fma(temp_612, fp_c6.data[33].y, temp_616);
    // 0x001650: 0x5C58100002670926 Fadd
    temp_722 = temp_714 + temp_717;
    // 0x001658: 0x5C58100001270808 Fadd
    temp_723 = temp_716 + temp_718;
    // 0x001668: 0x5C58100000B70E0B Fadd
    temp_724 = temp_713 + temp_719;
    // 0x001670: 0x49A0121808571616 Ffma
    temp_725 = fma(temp_613, fp_c6.data[33].y, temp_617);
    // 0x001678: 0x59A0170000471B04 Ffma
    temp_726 = fma(temp_700, temp_720, temp_711);
    // 0x001688: 0x59A0178001571A1A Ffma
    temp_727 = fma(temp_701, temp_721, temp_712);
    // 0x001690: 0x59A1130002672926 Ffma
    temp_728 = 0.0 - temp_722;
    temp_729 = fma(temp_88, temp_728, temp_722);
    // 0x001698: 0x59A1040000872908 Ffma
    temp_730 = 0.0 - temp_723;
    temp_731 = fma(temp_88, temp_730, temp_723);
    // 0x0016A8: 0x59A1058000B7290B Ffma
    temp_732 = 0.0 - temp_724;
    temp_733 = fma(temp_88, temp_732, temp_724);
    // 0x0016B0: 0x59A0180001671919 Ffma
    temp_734 = fma(temp_702, temp_725, temp_707);
    // 0x0016B8: 0x4C98079802970009 Mov
    // 0x0016C8: 0x59A0020002670304 Ffma
    temp_735 = fma(temp_247, temp_729, temp_726);
    // 0x0016D0: 0x4C98079802870003 Mov
    // 0x0016D8: 0x59A00D0000871D02 Ffma
    temp_736 = fma(temp_129, temp_731, temp_727);
    // 0x0016E8: 0x59A00C8000B71C0B Ffma
    temp_737 = fma(temp_139, temp_733, temp_734);
    // 0x0016F0: 0x51A0049802971F1F Ffma
    temp_738 = fma(temp_668, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0016F8: 0xE043FF8C8007FF09 Ipa
    temp_739 = in_attr4.z;
    // 0x001708: 0x49A503180BC71010 Ffma
    temp_740 = 0.0 - fp_c6.data[47].x;
    temp_741 = fma(temp_618, temp_740, temp_708);
    temp_742 = clamp(temp_741, 0.0, 1.0);
    // 0x001710: 0x5C68100000470707 Fmul
    temp_743 = temp_337 * temp_735;
    // 0x001718: 0x5080000000371010 Mufu
    temp_744 = log2(temp_742);
    // 0x001728: 0x51A0019802871E03 Ffma
    temp_745 = fma(temp_659, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001730: 0x5C68100000272002 Fmul
    temp_746 = temp_339 * temp_736;
    // 0x001738: 0x4C98079802A70006 Mov
    // 0x001748: 0x5C68100000B72828 Fmul
    temp_747 = temp_341 * temp_737;
    // 0x001750: 0x49A0039406C70A0A Ffma
    temp_748 = fma(temp_191, fp_c5.data[27].x, temp_743);
    // 0x001758: 0x49A0011406C70C0C Ffma
    temp_749 = fma(temp_192, fp_c5.data[27].x, temp_746);
    // 0x001768: 0x51A0031802A70502 Ffma
    temp_750 = fma(temp_670, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001770: 0x49A0141406C70D0D Ffma
    temp_751 = fma(temp_198, fp_c5.data[27].x, temp_747);
    // 0x001778: 0x5C58300000370A04 Fadd
    temp_752 = 0.0 - temp_745;
    temp_753 = temp_748 + temp_752;
    // 0x001788: 0x4C68101803171007 Fmul
    temp_754 = temp_744 * fp_c6.data[12].y;
    // 0x001790: 0x5C58300001F70C05 Fadd
    temp_755 = 0.0 - temp_738;
    temp_756 = temp_749 + temp_755;
    // 0x001798: 0x49A001980BF70406 Ffma
    temp_757 = fma(temp_753, fp_c6.data[47].w, temp_745);
    // 0x0017A8: 0x5C58300000270D04 Fadd
    temp_758 = 0.0 - temp_750;
    temp_759 = temp_751 + temp_758;
    // 0x0017B0: 0x49A00F980BF70505 Ffma
    temp_760 = fma(temp_756, fp_c6.data[47].w, temp_738);
    // 0x0017B8: 0x5C90008000770008 Rro
    // 0x0017C8: 0x49A2009803570107 Ffma
    temp_761 = 0.0 - temp_715;
    temp_762 = fma(temp_715, fp_c6.data[13].y, temp_761);
    // 0x0017D0: 0x5080000000270808 Mufu
    temp_763 = exp2(temp_754);
    // 0x0017D8: 0x5C60178000670306 Fmnmx
    temp_764 = max(temp_745, temp_757);
    // 0x0017E8: 0x49A001180BF70404 Ffma
    temp_765 = fma(temp_759, fp_c6.data[47].w, temp_750);
    // 0x0017F0: 0x49A2009803470103 Ffma
    temp_766 = 0.0 - temp_715;
    temp_767 = fma(temp_715, fp_c6.data[13].x, temp_766);
    // 0x0017F8: 0x49A2009803670101 Ffma
    temp_768 = 0.0 - temp_715;
    temp_769 = fma(temp_715, fp_c6.data[13].z, temp_768);
    // 0x001808: 0x5C60178000571F05 Fmnmx
    temp_770 = max(temp_738, temp_760);
    // 0x001810: 0x5C60178000470204 Fmnmx
    temp_771 = max(temp_750, temp_765);
    // 0x001818: 0x59A0030000370600 Ffma
    temp_772 = fma(temp_764, temp_767, temp_764);
    // 0x001828: 0x5C9807800FF70006 Mov
    // 0x001830: 0x59A0028000770507 Ffma
    temp_773 = fma(temp_770, temp_762, temp_770);
    // 0x001838: 0x0103F6000007F005 Mov32i
    // 0x001848: 0x4C68101802B70803 Fmul
    temp_774 = temp_763 * fp_c6.data[10].w;
    // 0x001850: 0x59A0020000170402 Ffma
    temp_775 = fma(temp_771, temp_769, temp_771);
    // 0x001858: 0x5C59100000070A00 Fadd
    temp_776 = 0.0 - temp_748;
    temp_777 = temp_776 + temp_772;
    // 0x001868: 0x4C58100C03870904 Fadd
    temp_778 = temp_739 + fp_c3.data[14].x;
    // 0x001870: 0x5C59100000770C01 Fadd
    temp_779 = 0.0 - temp_749;
    temp_780 = temp_779 + temp_773;
    // 0x001878: 0x5C98078002170007 Mov
    // 0x001888: 0x5C59100000270D02 Fadd
    temp_781 = 0.0 - temp_751;
    temp_782 = temp_781 + temp_775;
    // 0x001890: 0x59A0050000370000 Ffma
    temp_783 = fma(temp_777, temp_774, temp_748);
    // 0x001898: 0x49A37F8C03C70404 Ffma
    temp_784 = 0.0 - fp_c3.data[15].x;
    temp_785 = fma(temp_778, temp_784, -0.0);
    // 0x0018A8: 0x59A0060000370101 Ffma
    temp_786 = fma(temp_780, temp_774, temp_749);
    // 0x0018B0: 0x59A0068000370202 Ffma
    temp_787 = fma(temp_782, temp_774, temp_751);
    // 0x0018B8: 0x5C98078002170003 Mov
    // 0x0018C8: 0xE30000000007000F Exit
    out_attr0.x = temp_783;
    out_attr0.y = temp_786;
    out_attr0.z = temp_787;
    out_attr0.w = temp_58;
    out_attr1.x = temp_785;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_58;
    return;
}
