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
layout (binding = 7) uniform samplerCube fp_t_tcb_18;
layout (binding = 8) uniform samplerCubeArray fp_t_tcb_14;
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
    uint temp_180;
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
    int temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    int temp_208;
    uint temp_209;
    uint temp_210;
    int temp_211;
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
    bool temp_269;
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
    int temp_322;
    bool temp_323;
    int temp_324;
    int temp_325;
    int temp_326;
    int temp_327;
    uint temp_328;
    uint temp_329;
    int temp_330;
    precise float temp_331;
    int temp_332;
    int temp_333;
    uint temp_334;
    uint temp_335;
    int temp_336;
    precise float temp_337;
    int temp_338;
    uint temp_339;
    int temp_340;
    precise float temp_341;
    int temp_342;
    uint temp_343;
    uint temp_344;
    int temp_345;
    precise float temp_346;
    int temp_347;
    uint temp_348;
    int temp_349;
    precise float temp_350;
    int temp_351;
    uint temp_352;
    uint temp_353;
    int temp_354;
    precise float temp_355;
    int temp_356;
    uint temp_357;
    int temp_358;
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
    int temp_380;
    uint temp_381;
    uint temp_382;
    int temp_383;
    precise float temp_384;
    precise float temp_385;
    precise float temp_386;
    int temp_387;
    uint temp_388;
    uint temp_389;
    int temp_390;
    precise float temp_391;
    int temp_392;
    uint temp_393;
    int temp_394;
    precise float temp_395;
    precise float temp_396;
    precise float temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    int temp_401;
    uint temp_402;
    uint temp_403;
    int temp_404;
    precise float temp_405;
    int temp_406;
    uint temp_407;
    int temp_408;
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
    uint temp_421;
    int temp_422;
    bool temp_423;
    uint temp_424;
    precise float temp_425;
    precise float temp_426;
    precise float temp_427;
    precise float temp_428;
    precise float temp_429;
    precise float temp_430;
    precise float temp_431;
    uint temp_432;
    precise float temp_433;
    bool temp_434;
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
    uint temp_462;
    uint temp_463;
    int temp_464;
    precise float temp_465;
    int temp_466;
    uint temp_467;
    int temp_468;
    precise float temp_469;
    precise float temp_470;
    int temp_471;
    uint temp_472;
    uint temp_473;
    int temp_474;
    precise float temp_475;
    precise float temp_476;
    precise float temp_477;
    precise float temp_478;
    precise float temp_479;
    int temp_480;
    uint temp_481;
    uint temp_482;
    int temp_483;
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
    int temp_543;
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
    precise vec3 temp_579;
    precise float temp_580;
    precise float temp_581;
    precise float temp_582;
    precise vec3 temp_583;
    precise float temp_584;
    precise float temp_585;
    precise float temp_586;
    precise vec3 temp_587;
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
    // 0x000008: 0x0103F0000007F029 Mov32i
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0x5080000000471010 Mufu
    // 0x000028: 0xE043FF8E0107FF0A Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E4107FF0B Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xD830026FF0B70A00 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xD8240360E0B70A20 Texs
    temp_5 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    // 0x000050: 0xD8220241C0B70A0C Texs
    temp_9 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    temp_12 = temp_9.z;
    // 0x000058: 0xE043FF8A0107FF02 Ipa
    temp_13 = in_attr2.x;
    // 0x000068: 0xE043FF890107FF06 Ipa
    temp_14 = in_attr1.x;
    // 0x000070: 0xE043FF8A4107FF03 Ipa
    temp_15 = in_attr2.y;
    // 0x000078: 0xE043FF894107FF07 Ipa
    temp_16 = in_attr1.y;
    // 0x000088: 0xE043FF8A8107FF04 Ipa
    temp_17 = in_attr2.z;
    // 0x000090: 0xE043FF898107FF08 Ipa
    temp_18 = in_attr1.z;
    // 0x000098: 0xE043FF880107FF0F Ipa
    temp_19 = in_attr0.x;
    // 0x0000A8: 0xE043FF884107FF11 Ipa
    temp_20 = in_attr0.y;
    // 0x0000B0: 0xE043FF888107FF0A Ipa
    temp_21 = in_attr0.z;
    // 0x0000B8: 0x5C68100000270205 Fmul
    temp_22 = temp_13 * temp_13;
    // 0x0000C8: 0x5C68100000670609 Fmul
    temp_23 = temp_14 * temp_14;
    // 0x0000D0: 0x59A0028000370305 Ffma
    temp_24 = fma(temp_15, temp_15, temp_22);
    // 0x0000D8: 0x59A0048000770709 Ffma
    temp_25 = fma(temp_16, temp_16, temp_23);
    // 0x0000E8: 0x5C68100000F70F0B Fmul
    temp_26 = temp_19 * temp_19;
    // 0x0000F0: 0x59A0028000470405 Ffma
    temp_27 = fma(temp_17, temp_17, temp_24);
    // 0x0000F8: 0x59A0048000870809 Ffma
    temp_28 = fma(temp_18, temp_18, temp_25);
    // 0x000108: 0x5080000000570505 Mufu
    temp_29 = inversesqrt(temp_27);
    // 0x000110: 0x59A0058001171113 Ffma
    temp_30 = fma(temp_20, temp_20, temp_26);
    // 0x000118: 0x5080000000570909 Mufu
    temp_31 = inversesqrt(temp_28);
    // 0x000128: 0x59A0098000A70A13 Ffma
    temp_32 = fma(temp_21, temp_21, temp_30);
    // 0x000130: 0x5C68100000570202 Fmul
    temp_33 = temp_13 * temp_29;
    // 0x000138: 0x5C68100000570303 Fmul
    temp_34 = temp_15 * temp_29;
    // 0x000148: 0x5C68100000570404 Fmul
    temp_35 = temp_17 * temp_29;
    // 0x000150: 0x5C6810000097060B Fmul
    temp_36 = temp_14 * temp_31;
    // 0x000158: 0x5C68100000970706 Fmul
    temp_37 = temp_16 * temp_31;
    // 0x000168: 0x5C68100000970807 Fmul
    temp_38 = temp_18 * temp_31;
    // 0x000170: 0x5080000000571308 Mufu
    temp_39 = inversesqrt(temp_32);
    // 0x000178: 0x5C68100000871111 Fmul
    temp_40 = temp_20 * temp_39;
    // 0x000188: 0x5C68100000870A0A Fmul
    temp_41 = temp_21 * temp_39;
    // 0x000190: 0x5C68100000870F08 Fmul
    temp_42 = temp_19 * temp_39;
    // 0x000198: 0xF0F0000034270000 Depbar
    // 0x0001A8: 0x5C68100000170105 Fmul
    temp_43 = temp_4 * temp_4;
    // 0x0001B0: 0x5C68100000170202 Fmul
    temp_44 = temp_33 * temp_4;
    // 0x0001B8: 0x5C68100000170303 Fmul
    temp_45 = temp_34 * temp_4;
    // 0x0001C8: 0x5C68100000170401 Fmul
    temp_46 = temp_35 * temp_4;
    // 0x0001D0: 0x59A0028000070005 Ffma
    temp_47 = fma(temp_3, temp_3, temp_43);
    // 0x0001D8: 0x59A0010000B70002 Ffma
    temp_48 = fma(temp_3, temp_36, temp_44);
    // 0x0001E8: 0x59A0018000670003 Ffma
    temp_49 = fma(temp_3, temp_37, temp_45);
    // 0x0001F0: 0xE003FF874FF7FF06 Ipa
    temp_50 = gl_FragCoord.y;
    temp_51 = support_buffer.render_scale[0];
    temp_52 = temp_50 / temp_51;
    // 0x0001F8: 0x59A0008000770001 Ffma
    temp_53 = fma(temp_3, temp_38, temp_46);
    // 0x000208: 0x385D103F80070505 Fadd
    temp_54 = 0.0 - temp_47;
    temp_55 = temp_54 + 1.0;
    temp_56 = clamp(temp_55, 0.0, 1.0);
    // 0x000210: 0x5080000000870514 Mufu
    temp_57 = sqrt(temp_56);
    // 0x000218: 0xE003FF870FF7FF05 Ipa
    temp_58 = gl_FragCoord.x;
    temp_59 = support_buffer.render_scale[0];
    temp_60 = temp_58 / temp_59;
    // 0x000228: 0x59A0010001470802 Ffma
    temp_61 = fma(temp_42, temp_57, temp_48);
    // 0x000230: 0x59A0018001471103 Ffma
    temp_62 = fma(temp_40, temp_57, temp_49);
    // 0x000238: 0x59A0008001470A01 Ffma
    temp_63 = fma(temp_41, temp_57, temp_53);
    // 0x000248: 0x5C68100000270200 Fmul
    temp_64 = temp_61 * temp_61;
    // 0x000250: 0x59A0000000370300 Ffma
    temp_65 = fma(temp_62, temp_62, temp_64);
    // 0x000258: 0x59A0000000170104 Ffma
    temp_66 = fma(temp_63, temp_63, temp_65);
    // 0x000268: 0x5080000000570404 Mufu
    temp_67 = inversesqrt(temp_66);
    // 0x000270: 0x5C68100000470128 Fmul
    temp_68 = temp_63 * temp_67;
    // 0x000278: 0x5C68100000470300 Fmul
    temp_69 = temp_62 * temp_67;
    // 0x000288: 0x5C68100000470219 Fmul
    temp_70 = temp_61 * temp_67;
    // 0x000290: 0x4C68100C04A70504 Fmul
    temp_71 = temp_60 * fp_c3.data[18].z;
    // 0x000298: 0x4C68100C04B70605 Fmul
    temp_72 = temp_52 * fp_c3.data[18].w;
    // 0x0002A8: 0x0103F8000007F006 Mov32i
    // 0x0002B0: 0x4C68100C00672803 Fmul
    temp_73 = temp_68 * fp_c3.data[1].z;
    // 0x0002B8: 0x4C68100C00272801 Fmul
    temp_74 = temp_68 * fp_c3.data[0].z;
    // 0x0002C8: 0x49A0018C00570003 Ffma
    temp_75 = fma(temp_69, fp_c3.data[1].y, temp_73);
    // 0x0002D0: 0x49A0008C00170002 Ffma
    temp_76 = fma(temp_69, fp_c3.data[0].y, temp_74);
    // 0x0002D8: 0x49A0018C00471903 Ffma
    temp_77 = fma(temp_70, fp_c3.data[1].x, temp_75);
    // 0x0002E8: 0x49A0010C00071902 Ffma
    temp_78 = fma(temp_70, fp_c3.data[0].x, temp_76);
    // 0x0002F0: 0x4C69100C03E70303 Fmul
    temp_79 = 0.0 - fp_c3.data[15].z;
    temp_80 = temp_77 * temp_79;
    // 0x0002F8: 0x4C68101808B70202 Fmul
    temp_81 = temp_78 * fp_c6.data[34].w;
    // 0x000308: 0x4C68101808B70303 Fmul
    temp_82 = temp_80 * fp_c6.data[34].w;
    // 0x000310: 0x49A0020400270202 Ffma
    temp_83 = fma(temp_81, fp_c1.data[0].z, temp_71);
    // 0x000318: 0x49A0028400270324 Ffma
    temp_84 = fma(temp_82, fp_c1.data[0].z, temp_72);
    // 0x000328: 0xD832022242470226 Texs
    temp_85 = texture(fp_t_tcb_22, vec2(temp_83, temp_84)).xyzw;
    temp_86 = temp_85.x;
    temp_87 = temp_85.y;
    temp_88 = temp_85.z;
    temp_89 = temp_85.w;
    // 0x000330: 0xD86201EFF0670411 Texs
    temp_90 = textureLod(fp_t_tcb_1E, vec2(temp_71, temp_72), 1.0).x;
    // 0x000338: 0xD822020010570422 Texs
    temp_91 = texture(fp_t_tcb_20, vec2(temp_71, temp_72)).xyz;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x000348: 0xE043FF8B0107FF18 Ipa
    temp_95 = in_attr3.x;
    // 0x000350: 0xE043FF8B4107FF16 Ipa
    temp_96 = in_attr3.y;
    // 0x000358: 0xE043FF8B8107FF15 Ipa
    temp_97 = in_attr3.z;
    // 0x000368: 0xF0F0000034470000 Depbar
    // 0x000370: 0x4C5C101406372020 Fadd
    temp_98 = temp_6 + fp_c5.data[24].w;
    temp_99 = clamp(temp_98, 0.0, 1.0);
    // 0x000378: 0xE2900000CB000000 Ssy
    // 0x000388: 0x4C98079403470017 Mov
    // 0x000390: 0x4C98079403670013 Mov
    // 0x000398: 0x4C9807980877002E Mov
    // 0x0003A8: 0x4C68101403070E0E Fmul
    temp_100 = temp_8 * fp_c5.data[12].x;
    // 0x0003B0: 0x5C9807800FF70034 Mov
    // 0x0003B8: 0x4C6810180A072020 Fmul
    temp_101 = temp_99 * fp_c6.data[40].x;
    // 0x0003C8: 0x4C58301403871717 Fadd
    temp_102 = 0.0 - fp_c5.data[14].x;
    temp_103 = fp_c5.data[13].x + temp_102;
    // 0x0003D0: 0x4C58301403A71313 Fadd
    temp_104 = 0.0 - fp_c5.data[14].z;
    temp_105 = fp_c5.data[13].z + temp_104;
    // 0x0003D8: 0x5C9807800FF70031 Mov
    // 0x0003E8: 0x5C68100001871803 Fmul
    temp_106 = temp_95 * temp_95;
    // 0x0003F0: 0x59A0018001671603 Ffma
    temp_107 = fma(temp_96, temp_96, temp_106);
    // 0x0003F8: 0x59A0018001571503 Ffma
    temp_108 = fma(temp_97, temp_97, temp_107);
    // 0x000408: 0x5080000000570303 Mufu
    temp_109 = inversesqrt(temp_108);
    // 0x000410: 0x5C69100000371818 Fmul
    temp_110 = 0.0 - temp_109;
    temp_111 = temp_95 * temp_110;
    // 0x000418: 0x5C69100000371616 Fmul
    temp_112 = 0.0 - temp_109;
    temp_113 = temp_96 * temp_112;
    // 0x000428: 0x5C69100000371515 Fmul
    temp_114 = 0.0 - temp_109;
    temp_115 = temp_97 * temp_114;
    // 0x000430: 0x4C58301805C71802 Fadd
    temp_116 = 0.0 - fp_c6.data[23].x;
    temp_117 = temp_111 + temp_116;
    // 0x000438: 0x4C58301805D71606 Fadd
    temp_118 = 0.0 - fp_c6.data[23].y;
    temp_119 = temp_113 + temp_118;
    // 0x000448: 0x4C58301805E71507 Fadd
    temp_120 = 0.0 - fp_c6.data[23].z;
    temp_121 = temp_115 + temp_120;
    // 0x000450: 0x5C68100001871909 Fmul
    temp_122 = temp_70 * temp_111;
    // 0x000458: 0x5C68100000270208 Fmul
    temp_123 = temp_117 * temp_117;
    // 0x000468: 0x59A0040000670608 Ffma
    temp_124 = fma(temp_119, temp_119, temp_123);
    // 0x000470: 0x59A0040000770708 Ffma
    temp_125 = fma(temp_121, temp_121, temp_124);
    // 0x000478: 0x5080000000570808 Mufu
    temp_126 = inversesqrt(temp_125);
    // 0x000488: 0x5C68100000870203 Fmul
    temp_127 = temp_117 * temp_126;
    // 0x000490: 0x59A0048001670002 Ffma
    temp_128 = fma(temp_69, temp_113, temp_122);
    // 0x000498: 0x5C68100000870609 Fmul
    temp_129 = temp_119 * temp_126;
    // 0x0004A8: 0x5C68100000870706 Fmul
    temp_130 = temp_121 * temp_126;
    // 0x0004B0: 0x4C69101805C7030A Fmul
    temp_131 = 0.0 - fp_c6.data[23].x;
    temp_132 = temp_127 * temp_131;
    // 0x0004B8: 0x5C6810000037180B Fmul
    temp_133 = temp_111 * temp_127;
    // 0x0004C8: 0x59A4010001572802 Ffma
    temp_134 = fma(temp_68, temp_115, temp_128);
    temp_135 = clamp(temp_134, 0.0, 1.0);
    // 0x0004D0: 0x5C68100000371903 Fmul
    temp_136 = temp_70 * temp_127;
    // 0x0004D8: 0x49A1051805D70907 Ffma
    temp_137 = 0.0 - fp_c6.data[23].y;
    temp_138 = fma(temp_129, temp_137, temp_132);
    // 0x0004E8: 0x59A005800097160B Ffma
    temp_139 = fma(temp_113, temp_129, temp_133);
    // 0x0004F0: 0x01040DF760C7F00A Mov32i
    // 0x0004F8: 0x3859103F8007020F Fadd
    temp_140 = 0.0 - temp_135;
    temp_141 = temp_140 + 1.0;
    // 0x000508: 0x59A0018000970003 Ffma
    temp_142 = fma(temp_69, temp_129, temp_136);
    // 0x000510: 0x5080000000370F0F Mufu
    temp_143 = log2(temp_141);
    // 0x000518: 0x49A5039805E70607 Ffma
    temp_144 = 0.0 - fp_c6.data[23].z;
    temp_145 = fma(temp_130, temp_144, temp_138);
    temp_146 = clamp(temp_145, 0.0, 1.0);
    // 0x000528: 0x59A405800067150B Ffma
    temp_147 = fma(temp_115, temp_130, temp_139);
    temp_148 = clamp(temp_147, 0.0, 1.0);
    // 0x000530: 0x3868104180070404 Fmul
    temp_149 = temp_71 * 16.0;
    // 0x000538: 0x5C68100000271935 Fmul
    temp_150 = temp_70 * temp_135;
    // 0x000548: 0x5CA8148000470A04 F2f
    temp_151 = floor(temp_149);
    // 0x000550: 0x49A2050400370708 Ffma
    temp_152 = fma(temp_146, fp_c1.data[0].w, -6.98316002);
    // 0x000558: 0x49A2050400370B0A Ffma
    temp_153 = fma(temp_148, fp_c1.data[0].w, -6.98316002);
    // 0x000568: 0x32A20C4000073535 Ffma
    temp_154 = 0.0 - temp_111;
    temp_155 = fma(temp_150, 2.0, temp_154);
    // 0x000570: 0x5C68100000870707 Fmul
    temp_156 = temp_146 * temp_152;
    // 0x000578: 0x59A4018000672808 Ffma
    temp_157 = fma(temp_68, temp_130, temp_142);
    temp_158 = clamp(temp_157, 0.0, 1.0);
    // 0x000588: 0x5C68100000A70B09 Fmul
    temp_159 = temp_148 * temp_153;
    // 0x000590: 0x386013BF80072003 Fmnmx
    temp_160 = min(temp_101, 1.0);
    // 0x000598: 0x386810411007050A Fmul
    temp_161 = temp_72 * 9.0;
    // 0x0005A8: 0x4C68101406270F12 Fmul
    temp_162 = temp_143 * fp_c5.data[24].z;
    // 0x0005B0: 0x5CA8148000A70A0A F2f
    temp_163 = floor(temp_161);
    // 0x0005B8: 0x4C69101805C71905 Fmul
    temp_164 = 0.0 - fp_c6.data[23].x;
    temp_165 = temp_70 * temp_164;
    // 0x0005C8: 0x5C9000800097000F Rro
    // 0x0005D0: 0x4C60178400070303 Fmnmx
    temp_166 = max(temp_160, fp_c1.data[0].x);
    // 0x0005D8: 0x5080000000270F0F Mufu
    temp_167 = exp2(temp_159);
    // 0x0005E8: 0x5C90008001270014 Rro
    // 0x0005F0: 0x4C98079403570012 Mov
    // 0x0005F8: 0x5084000000271414 Mufu
    temp_168 = exp2(temp_162);
    temp_169 = clamp(temp_168, 0.0, 1.0);
    // 0x000608: 0x49A1029805D70005 Ffma
    temp_170 = 0.0 - fp_c6.data[23].y;
    temp_171 = fma(temp_69, temp_170, temp_165);
    // 0x000610: 0x51A401840007033A Ffma
    temp_172 = fma(temp_166, temp_166, fp_c1.data[0].x);
    temp_173 = clamp(temp_172, 0.0, 1.0);
    // 0x000618: 0x32A014BF00070329 Ffma
    temp_174 = fma(temp_166, 0.5, 0.5);
    // 0x000628: 0x5C9000800077002C Rro
    // 0x000630: 0x32A0024180070A2A Ffma
    temp_175 = fma(temp_163, 16.0, temp_151);
    // 0x000638: 0x4C58301403971212 Fadd
    temp_176 = 0.0 - fp_c5.data[14].y;
    temp_177 = fp_c5.data[13].y + temp_176;
    // 0x000648: 0x5CB0118002A70A2A F2i
    temp_178 = trunc(temp_175);
    temp_179 = max(temp_178, 0.0);
    temp_180 = uint(temp_179);
    // 0x000650: 0x5C68100003A73A1A Fmul
    temp_181 = temp_173 * temp_173;
    // 0x000658: 0x5C68120002972929 Fmul
    temp_182 = temp_174 * 0.5;
    temp_183 = temp_182 * temp_174;
    // 0x000668: 0xF0F0000034370000 Depbar
    // 0x000670: 0x4C68101402C70C04 Fmul
    temp_184 = temp_10 * fp_c5.data[11].x;
    // 0x000678: 0x49A5029805E7280B Ffma
    temp_185 = 0.0 - fp_c6.data[23].z;
    temp_186 = fma(temp_68, temp_185, temp_171);
    temp_187 = clamp(temp_186, 0.0, 1.0);
    // 0x000688: 0x4C68101402E71C07 Fmul
    temp_188 = temp_12 * fp_c5.data[11].z;
    // 0x000690: 0x51A00A1403871717 Ffma
    temp_189 = fma(temp_103, temp_169, fp_c5.data[14].x);
    // 0x000698: 0x59A2040001A70806 Ffma
    temp_190 = 0.0 - temp_158;
    temp_191 = fma(temp_158, temp_181, temp_190);
    // 0x0006A8: 0x59A101000027290A Ffma
    temp_192 = 0.0 - temp_135;
    temp_193 = fma(temp_183, temp_192, temp_135);
    // 0x0006B0: 0x51A00A1403971212 Ffma
    temp_194 = fma(temp_177, temp_169, fp_c5.data[14].y);
    // 0x0006B8: 0x51A00A1403A71313 Ffma
    temp_195 = fma(temp_105, temp_169, fp_c5.data[14].z);
    // 0x0006C8: 0x4C58301407B70414 Fadd
    temp_196 = 0.0 - fp_c5.data[30].w;
    temp_197 = temp_184 + temp_196;
    // 0x0006D0: 0x4C68101801470B1B Fmul
    temp_198 = temp_187 * fp_c6.data[5].x;
    // 0x0006D8: 0x51A0030400170808 Ffma
    temp_199 = fma(temp_158, temp_191, fp_c1.data[0].y);
    // 0x0006E8: 0x59A1058002970B06 Ffma
    temp_200 = 0.0 - temp_183;
    temp_201 = fma(temp_187, temp_200, temp_187);
    // 0x0006F0: 0x5080000000470809 Mufu
    temp_202 = 1.0 / temp_199;
    // 0x0006F8: 0x5C58100000A7290A Fadd
    temp_203 = temp_183 + temp_193;
    // 0x000708: 0x3848000000872A33 Shl
    temp_204 = int(temp_180) << 8;
    // 0x000710: 0x5080000000470A0A Mufu
    temp_205 = 1.0 / temp_203;
    // 0x000718: 0x51A00A1407B72105 Ffma
    temp_206 = fma(temp_7, temp_197, fp_c5.data[30].w);
    // 0x000728: 0x1E23EA2F98371B20 Fmul32i
    temp_207 = temp_198 * 0.318309873;
    // 0x000730: 0xEF94008200473333 Ldc
    temp_208 = temp_204 + 0x2004;
    temp_209 = uint(temp_208) >> 2;
    temp_210 = temp_209 >> 2;
    temp_211 = int(temp_209) & 3;
    temp_212 = fp_c8.data[int(temp_210)][temp_211];
    // 0x000738: 0x5C58100000672914 Fadd
    temp_213 = temp_183 + temp_201;
    // 0x000748: 0x4C68101402D70D06 Fmul
    temp_214 = temp_11 * fp_c5.data[11].y;
    // 0x000750: 0x5080000000471414 Mufu
    temp_215 = 1.0 / temp_213;
    // 0x000758: 0x59A1078000F7051E Ffma
    temp_216 = 0.0 - temp_167;
    temp_217 = fma(temp_206, temp_216, temp_167);
    // 0x000768: 0x4C58301407B7071B Fadd
    temp_218 = 0.0 - fp_c5.data[30].w;
    temp_219 = temp_188 + temp_218;
    // 0x000770: 0x5C68100000973A09 Fmul
    temp_220 = temp_173 * temp_202;
    // 0x000778: 0x49A00B9406570C17 Ffma
    temp_221 = fma(temp_10, fp_c5.data[25].y, temp_189);
    // 0x000788: 0x49A0091406570D12 Ffma
    temp_222 = fma(temp_11, fp_c5.data[25].y, temp_194);
    // 0x000790: 0x4C58301407B70608 Fadd
    temp_223 = 0.0 - fp_c5.data[30].w;
    temp_224 = temp_214 + temp_223;
    // 0x000798: 0x5C58100001E7051E Fadd
    temp_225 = temp_206 + temp_217;
    // 0x0007A8: 0x3868103F00070A2B Fmul
    temp_226 = temp_205 * 0.5;
    // 0x0007B0: 0x5C6810000097090A Fmul
    temp_227 = temp_220 * temp_220;
    // 0x0007B8: 0x51A00D9407B72109 Ffma
    temp_228 = fma(temp_7, temp_219, fp_c5.data[30].w);
    // 0x0007C8: 0x4C68101801570B1B Fmul
    temp_229 = temp_187 * fp_c6.data[5].y;
    // 0x0007D0: 0x51A0041407B72108 Ffma
    temp_230 = fma(temp_7, temp_224, fp_c5.data[30].w);
    // 0x0007D8: 0x4C68101406471E1F Fmul
    temp_231 = temp_225 * fp_c5.data[25].x;
    // 0x0007E8: 0x5080000000272C1E Mufu
    temp_232 = exp2(temp_156);
    // 0x0007F0: 0x5C68100001472B14 Fmul
    temp_233 = temp_226 * temp_215;
    // 0x0007F8: 0x49A00B9808470C17 Ffma
    temp_234 = fma(temp_10, fp_c6.data[33].x, temp_221);
    // 0x000808: 0x49A0099406571C13 Ffma
    temp_235 = fma(temp_12, fp_c5.data[25].y, temp_195);
    // 0x000810: 0x59A1078000F7081D Ffma
    temp_236 = 0.0 - temp_167;
    temp_237 = fma(temp_230, temp_236, temp_167);
    // 0x000818: 0x59A1078000F7090F Ffma
    temp_238 = 0.0 - temp_167;
    temp_239 = fma(temp_228, temp_238, temp_167);
    // 0x000828: 0x5C68100001470A14 Fmul
    temp_240 = temp_227 * temp_233;
    // 0x000830: 0x59A1100002071F0A Ffma
    temp_241 = 0.0 - temp_207;
    temp_242 = fma(temp_231, temp_241, temp_207);
    // 0x000838: 0x1E23EA2F98371B2C Fmul32i
    temp_243 = temp_229 * 0.318309873;
    // 0x000848: 0x49A0099808471C1C Ffma
    temp_244 = fma(temp_12, fp_c6.data[33].x, temp_235);
    // 0x000850: 0x5C58100001D7081F Fadd
    temp_245 = temp_230 + temp_237;
    // 0x000858: 0x4C68101801670B1D Fmul
    temp_246 = temp_187 * fp_c6.data[5].z;
    // 0x000868: 0x5C68100001470B14 Fmul
    temp_247 = temp_187 * temp_240;
    // 0x000870: 0x5C58100000F7091B Fadd
    temp_248 = temp_228 + temp_239;
    // 0x000878: 0x59A10F0001E7050B Ffma
    temp_249 = 0.0 - temp_232;
    temp_250 = fma(temp_206, temp_249, temp_232);
    // 0x000888: 0x59A10F0001E7080F Ffma
    temp_251 = 0.0 - temp_232;
    temp_252 = fma(temp_230, temp_251, temp_232);
    // 0x000890: 0x4C68101406471F1F Fmul
    temp_253 = temp_245 * fp_c5.data[25].x;
    // 0x000898: 0x59A10F0001E7091E Ffma
    temp_254 = 0.0 - temp_232;
    temp_255 = fma(temp_228, temp_254, temp_232);
    // 0x0008A8: 0x1E23EA2F98371D2D Fmul32i
    temp_256 = temp_246 * 0.318309873;
    // 0x0008B0: 0x4C68101406471B20 Fmul
    temp_257 = temp_248 * fp_c5.data[25].x;
    // 0x0008B8: 0x5C58100000B7051B Fadd
    temp_258 = temp_206 + temp_250;
    // 0x0008C8: 0x4C68101808A72E1D Fmul
    temp_259 = fp_c6.data[33].w * fp_c6.data[34].z;
    // 0x0008D0: 0x59A1160002C71F0B Ffma
    temp_260 = 0.0 - temp_243;
    temp_261 = fma(temp_253, temp_260, temp_243);
    // 0x0008D8: 0x5C58100000F7081F Fadd
    temp_262 = temp_230 + temp_252;
    // 0x0008E8: 0x5C58100001E7091E Fadd
    temp_263 = temp_228 + temp_255;
    // 0x0008F0: 0x59A1168002D7200F Ffma
    temp_264 = 0.0 - temp_256;
    temp_265 = fma(temp_257, temp_264, temp_256);
    // 0x0008F8: 0x4C68101406471B1B Fmul
    temp_266 = temp_258 * fp_c5.data[25].x;
    // 0x000908: 0x4C68101406471F1F Fmul
    temp_267 = temp_262 * fp_c5.data[25].x;
    // 0x000910: 0x4C68101406471E1E Fmul
    temp_268 = temp_263 * fp_c5.data[25].x;
    // 0x000918: 0x5B6603800FF73307 Isetp
    temp_269 = floatBitsToUint(temp_212) <= 0u;
    // 0x000928: 0xF0F0000034170000 Depbar
    // 0x000930: 0x51A00E9801472620 Ffma
    temp_270 = fma(temp_86, temp_259, fp_c6.data[5].x);
    // 0x000938: 0x51A00E980157272C Ffma
    temp_271 = fma(temp_87, temp_259, fp_c6.data[5].y);
    // 0x000948: 0x51A00E980167241D Ffma
    temp_272 = fma(temp_88, temp_259, fp_c6.data[5].z);
    // 0x000950: 0x51A507040017110E Ffma
    temp_273 = 0.0 - temp_100;
    temp_274 = fma(temp_90, temp_273, fp_c1.data[0].y);
    temp_275 = clamp(temp_274, 0.0, 1.0);
    // 0x000958: 0x5C68100002071B2F Fmul
    temp_276 = temp_266 * temp_270;
    // 0x000968: 0x5C68100002C71F1F Fmul
    temp_277 = temp_267 * temp_271;
    // 0x000970: 0x5C68100001D71E1D Fmul
    temp_278 = temp_268 * temp_272;
    // 0x000978: 0x49A0091808470D1B Ffma
    temp_279 = fma(temp_11, fp_c6.data[33].x, temp_222);
    // 0x000988: 0x49A207180AC70E0C Ffma
    temp_280 = 0.0 - temp_275;
    temp_281 = fma(temp_275, fp_c6.data[43].x, temp_280);
    // 0x000990: 0x49A207180AD70E0D Ffma
    temp_282 = 0.0 - temp_275;
    temp_283 = fma(temp_275, fp_c6.data[43].y, temp_282);
    // 0x000998: 0x49A207180AE70E11 Ffma
    temp_284 = 0.0 - temp_275;
    temp_285 = fma(temp_275, fp_c6.data[43].z, temp_284);
    // 0x0009A8: 0x5C68100001472F2F Fmul
    temp_286 = temp_276 * temp_247;
    // 0x0009B0: 0x5C68100001471F30 Fmul
    temp_287 = temp_277 * temp_247;
    // 0x0009B8: 0x5C68100001471D32 Fmul
    temp_288 = temp_278 * temp_247;
    // 0x0009C8: 0x5C68100000270014 Fmul
    temp_289 = temp_69 * temp_135;
    // 0x0009D0: 0x5C6810000027280E Fmul
    temp_290 = temp_68 * temp_135;
    // 0x0009D8: 0x3858103F80070C12 Fadd
    temp_291 = temp_281 + 1.0;
    // 0x0009E8: 0x3858103F80070D0D Fadd
    temp_292 = temp_283 + 1.0;
    // 0x0009F0: 0x3858103F80071111 Fadd
    temp_293 = temp_285 + 1.0;
    // 0x0009F8: 0x5C9807800FF7001F Mov
    // 0x000A08: 0x5C9807800FF7001D Mov
    // 0x000A10: 0x5C9807800FF7001E Mov
    // 0x000A18: 0x5C9807800FF70020 Mov
    // 0x000A28: 0x32A20B4000071414 Ffma
    temp_294 = 0.0 - temp_113;
    temp_295 = fma(temp_289, 2.0, temp_294);
    // 0x000A30: 0x32A20AC000070E0E Ffma
    temp_296 = 0.0 - temp_115;
    temp_297 = fma(temp_290, 2.0, temp_296);
    // 0x000A38: 0x59A409000127042C Ffma
    temp_298 = fma(temp_184, temp_291, temp_291);
    temp_299 = clamp(temp_298, 0.0, 1.0);
    // 0x000A48: 0x59A4068000D7062D Ffma
    temp_300 = fma(temp_214, temp_292, temp_292);
    temp_301 = clamp(temp_300, 0.0, 1.0);
    // 0x000A50: 0x59A408800117072E Ffma
    temp_302 = fma(temp_188, temp_293, temp_293);
    temp_303 = clamp(temp_302, 0.0, 1.0);
    // 0x000A58: 0x1E23E22F98372F2F Fmul32i
    temp_304 = temp_286 * 0.159154937;
    // 0x000A68: 0x1E23E22F98373030 Fmul32i
    temp_305 = temp_287 * 0.159154937;
    // 0x000A70: 0x1E23E22F98373232 Fmul32i
    temp_306 = temp_288 * 0.159154937;
    // 0x000A78: 0xF0F800000000000F Sync
    temp_307 = 0.0;
    temp_308 = 0.0;
    temp_309 = 0.0;
    temp_310 = 0.0;
    temp_311 = 0.0;
    temp_312 = 0.0;
    temp_313 = 0.0;
    temp_314 = 0.0;
    temp_315 = 0.0;
    temp_316 = 0.0;
    temp_317 = 0.0;
    temp_318 = 0.0;
    if (!temp_269)
    {
        // 0x000A88: 0x5C9807800FF7003C Mov
        // 0x000A90: 0xE043FF8D0107FF36 Ipa
        temp_319 = in_attr5.x;
        // 0x000A98: 0xE043FF8D4107FF37 Ipa
        temp_320 = in_attr5.y;
        // 0x000AA8: 0xE043FF8D8107FF39 Ipa
        temp_321 = in_attr5.z;
        temp_322 = 0;
        do
        {
            // 0x000AB0: 0x5C18020003C72A3F Iscadd
            temp_324 = int(temp_180) << 4;
            temp_325 = temp_324 + temp_322;
            // 0x000AB8: 0xE290000054000000 Ssy
            // 0x000AC8: 0x3848000000473F3F Shl
            temp_326 = temp_325 << 4;
            // 0x000AD0: 0xEF94008200073F38 Ldc
            temp_327 = temp_326 + 0x2000;
            temp_328 = uint(temp_327) >> 2;
            temp_329 = temp_328 >> 2;
            temp_330 = int(temp_328) & 3;
            temp_331 = fp_c8.data[int(temp_329)][temp_330];
            // 0x000AD8: 0x3848000000673838 Shl
            temp_332 = floatBitsToInt(temp_331) << 6;
            // 0x000AE8: 0xEF9500800107380C Ldc
            temp_333 = temp_332 + 16;
            temp_334 = uint(temp_333) >> 2;
            temp_335 = temp_334 >> 2;
            temp_336 = int(temp_334) & 3;
            temp_337 = fp_c8.data[int(temp_335)][temp_336];
            temp_338 = int(temp_334) + 1;
            temp_339 = uint(temp_338) >> 2;
            temp_340 = temp_338 & 3;
            temp_341 = fp_c8.data[int(temp_339)][temp_340];
            // 0x000AF0: 0xEF95008001873810 Ldc
            temp_342 = temp_332 + 24;
            temp_343 = uint(temp_342) >> 2;
            temp_344 = temp_343 >> 2;
            temp_345 = int(temp_343) & 3;
            temp_346 = fp_c8.data[int(temp_344)][temp_345];
            temp_347 = int(temp_343) + 1;
            temp_348 = uint(temp_347) >> 2;
            temp_349 = temp_347 & 3;
            temp_350 = fp_c8.data[int(temp_348)][temp_349];
            // 0x000AF8: 0xEF95008002073812 Ldc
            temp_351 = temp_332 + 32;
            temp_352 = uint(temp_351) >> 2;
            temp_353 = temp_352 >> 2;
            temp_354 = int(temp_352) & 3;
            temp_355 = fp_c8.data[int(temp_353)][temp_354];
            temp_356 = int(temp_352) + 1;
            temp_357 = uint(temp_356) >> 2;
            temp_358 = temp_356 & 3;
            temp_359 = fp_c8.data[int(temp_357)][temp_358];
            // 0x000B08: 0x5C58300003670C3B Fadd
            temp_360 = 0.0 - temp_319;
            temp_361 = temp_337 + temp_360;
            // 0x000B10: 0x5C58300003770D3D Fadd
            temp_362 = 0.0 - temp_320;
            temp_363 = temp_341 + temp_362;
            // 0x000B18: 0x5C58300003971010 Fadd
            temp_364 = 0.0 - temp_321;
            temp_365 = temp_346 + temp_364;
            // 0x000B28: 0x5C68100003B73B3E Fmul
            temp_366 = temp_361 * temp_361;
            // 0x000B30: 0x59A108000107110D Ffma
            temp_367 = 0.0 - temp_365;
            temp_368 = fma(temp_350, temp_367, temp_365);
            // 0x000B38: 0x59A01F0003D73D3E Ffma
            temp_369 = fma(temp_363, temp_363, temp_366);
            // 0x000B48: 0x59A01F0000D70D11 Ffma
            temp_370 = fma(temp_368, temp_368, temp_369);
            // 0x000B50: 0x508000000057110C Mufu
            temp_371 = inversesqrt(temp_370);
            // 0x000B58: 0x5C68100000C73B3F Fmul
            temp_372 = temp_361 * temp_371;
            // 0x000B68: 0x5C68100000C70D0D Fmul
            temp_373 = temp_368 * temp_371;
            // 0x000B70: 0x5C68100000C73D0C Fmul
            temp_374 = temp_363 * temp_371;
            // 0x000B78: 0x5C69100001273F12 Fmul
            temp_375 = 0.0 - temp_355;
            temp_376 = temp_372 * temp_375;
            // 0x000B88: 0x508000000087113F Mufu
            temp_377 = sqrt(temp_370);
            // 0x000B90: 0x59A1090001370C12 Ffma
            temp_378 = 0.0 - temp_359;
            temp_379 = fma(temp_374, temp_378, temp_376);
            // 0x000B98: 0xEF9400800287380C Ldc
            temp_380 = temp_332 + 40;
            temp_381 = uint(temp_380) >> 2;
            temp_382 = temp_381 >> 2;
            temp_383 = int(temp_381) & 3;
            temp_384 = fp_c8.data[int(temp_382)][temp_383];
            // 0x000BA8: 0x59A1090000C70D12 Ffma
            temp_385 = 0.0 - temp_384;
            temp_386 = fma(temp_373, temp_385, temp_379);
            // 0x000BB0: 0xEF9500800387380C Ldc
            temp_387 = temp_332 + 56;
            temp_388 = uint(temp_387) >> 2;
            temp_389 = temp_388 >> 2;
            temp_390 = int(temp_388) & 3;
            temp_391 = fp_c8.data[int(temp_389)][temp_390];
            temp_392 = int(temp_388) + 1;
            temp_393 = uint(temp_392) >> 2;
            temp_394 = temp_392 & 3;
            temp_395 = fp_c8.data[int(temp_393)][temp_394];
            // 0x000BB8: 0x59A4068000C7120C Ffma
            temp_396 = fma(temp_386, temp_391, temp_395);
            temp_397 = clamp(temp_396, 0.0, 1.0);
            // 0x000BC8: 0x010404000007F012 Mov32i
            // 0x000BD0: 0x5C68100000C70C13 Fmul
            temp_398 = temp_397 * temp_397;
            // 0x000BD8: 0x33A0094000070C0C Ffma
            temp_399 = fma(temp_397, -2.0, 3.0);
            // 0x000BE8: 0x5C68100000C71313 Fmul
            temp_400 = temp_398 * temp_399;
            // 0x000BF0: 0xEF9500800307380C Ldc
            temp_401 = temp_332 + 48;
            temp_402 = uint(temp_401) >> 2;
            temp_403 = temp_402 >> 2;
            temp_404 = int(temp_402) & 3;
            temp_405 = fp_c8.data[int(temp_403)][temp_404];
            temp_406 = int(temp_402) + 1;
            temp_407 = uint(temp_406) >> 2;
            temp_408 = temp_406 & 3;
            temp_409 = fp_c8.data[int(temp_407)][temp_408];
            // 0x000BF8: 0x59A4068003F70C3F Ffma
            temp_410 = fma(temp_405, temp_377, temp_409);
            temp_411 = clamp(temp_410, 0.0, 1.0);
            // 0x000C08: 0x33A0094000073F12 Ffma
            temp_412 = fma(temp_411, -2.0, 3.0);
            // 0x000C10: 0x5C68100003F73F3F Fmul
            temp_413 = temp_411 * temp_411;
            // 0x000C18: 0x5C68100001273F12 Fmul
            temp_414 = temp_413 * temp_412;
            // 0x000C28: 0x5C68100001271313 Fmul
            temp_415 = temp_400 * temp_414;
            // 0x000C30: 0x39585042F0071012 Fadd
            temp_416 = abs(temp_365);
            temp_417 = temp_416 + -120.0;
            // 0x000C38: 0x1EABD4CCCCD71212 Fmul32i
            temp_418 = temp_417 * -0.0500000007;
            temp_419 = clamp(temp_418, 0.0, 1.0);
            // 0x000C48: 0x5C68100001271312 Fmul
            temp_420 = temp_415 * temp_419;
            // 0x000C50: 0x36247F9000171313 Xmad
            temp_421 = floatBitsToUint(temp_415) >> 16;
            temp_422 = int(temp_421) << 16;
            // 0x000C58: 0x5BB383800FF71207 Fsetp
            temp_423 = temp_420 <= 0.0;
            // 0x000C68: 0x7A05083C0F00FF13 Hadd2
            temp_424 = uint(temp_422);
            temp_425 = temp_307;
            temp_426 = temp_308;
            temp_427 = temp_309;
            temp_428 = temp_310;
            temp_429 = temp_311;
            temp_430 = temp_312;
            if (temp_423)
            {
                temp_431 = unpackHalf2x16(uint(temp_422)).y;
                temp_432 = packHalf2x16(vec2(1.0, temp_431));
                temp_424 = temp_432;
            }
            // 0x000C70: 0x5D2103902FF71307 Hsetp2
            temp_433 = unpackHalf2x16(temp_424).x;
            temp_434 = temp_433 == 0.0;
            // 0x000C78: 0xF0F800000008000F Sync
            if (temp_434)
            {
                // 0x000C88: 0x5080000000470C0C Mufu
                temp_435 = 1.0 / temp_405;
                // 0x000C90: 0x5C69100000C70D0D Fmul
                temp_436 = 0.0 - temp_435;
                temp_437 = temp_409 * temp_436;
                // 0x000C98: 0x5C60138000D71010 Fmnmx
                temp_438 = min(temp_365, temp_437);
                // 0x000CA8: 0x5C61178001070D10 Fmnmx
                temp_439 = 0.0 - temp_437;
                temp_440 = max(temp_439, temp_438);
                // 0x000CB0: 0x59A01F000107103E Ffma
                temp_441 = fma(temp_440, temp_440, temp_369);
                // 0x000CB8: 0x5080000000573E13 Mufu
                temp_442 = inversesqrt(temp_441);
                // 0x000CC8: 0x5080000000873E3E Mufu
                temp_443 = sqrt(temp_441);
                // 0x000CD0: 0x5C68100001373B3B Fmul
                temp_444 = temp_361 * temp_442;
                // 0x000CD8: 0x5C68100001373D3D Fmul
                temp_445 = temp_363 * temp_442;
                // 0x000CE8: 0x5C68100001371013 Fmul
                temp_446 = temp_440 * temp_442;
                // 0x000CF0: 0x5C58100003B7180D Fadd
                temp_447 = temp_111 + temp_444;
                // 0x000CF8: 0x5C58100003D7163F Fadd
                temp_448 = temp_113 + temp_445;
                // 0x000D08: 0x5C58100001371511 Fadd
                temp_449 = temp_115 + temp_446;
                // 0x000D10: 0x5C68100000D70D0C Fmul
                temp_450 = temp_447 * temp_447;
                // 0x000D18: 0x59A0060003F73F0C Ffma
                temp_451 = fma(temp_448, temp_448, temp_450);
                // 0x000D28: 0x59A006000117110C Ffma
                temp_452 = fma(temp_449, temp_449, temp_451);
                // 0x000D30: 0x5080000000570C0C Mufu
                temp_453 = inversesqrt(temp_452);
                // 0x000D38: 0x5C68100000C70D10 Fmul
                temp_454 = temp_447 * temp_453;
                // 0x000D48: 0x5C68100000C71111 Fmul
                temp_455 = temp_449 * temp_453;
                // 0x000D50: 0x5C68100000C73F3F Fmul
                temp_456 = temp_448 * temp_453;
                // 0x000D58: 0x5C68100001073B0D Fmul
                temp_457 = temp_444 * temp_454;
                // 0x000D68: 0x5C6810000107190C Fmul
                temp_458 = temp_70 * temp_454;
                // 0x000D70: 0x5C68100003B7193B Fmul
                temp_459 = temp_70 * temp_444;
                // 0x000D78: 0x59A0068003F73D10 Ffma
                temp_460 = fma(temp_445, temp_456, temp_457);
                // 0x000D88: 0x59A0060003F7003F Ffma
                temp_461 = fma(temp_69, temp_456, temp_458);
                // 0x000D90: 0xEF9500800007380C Ldc
                temp_462 = uint(temp_332) >> 2;
                temp_463 = temp_462 >> 2;
                temp_464 = int(temp_462) & 3;
                temp_465 = fp_c8.data[int(temp_463)][temp_464];
                temp_466 = int(temp_462) + 1;
                temp_467 = uint(temp_466) >> 2;
                temp_468 = temp_466 & 3;
                temp_469 = fp_c8.data[int(temp_467)][temp_468];
                // 0x000D98: 0x59A01D8003D7003D Ffma
                temp_470 = fma(temp_69, temp_445, temp_459);
                // 0x000DA8: 0xEF9400800087383B Ldc
                temp_471 = temp_332 + 8;
                temp_472 = uint(temp_471) >> 2;
                temp_473 = temp_472 >> 2;
                temp_474 = int(temp_472) & 3;
                temp_475 = fp_c8.data[int(temp_473)][temp_474];
                // 0x000DB0: 0x59A4080001171310 Ffma
                temp_476 = fma(temp_446, temp_455, temp_460);
                temp_477 = clamp(temp_476, 0.0, 1.0);
                // 0x000DB8: 0x59A41F8001172811 Ffma
                temp_478 = fma(temp_68, temp_455, temp_461);
                temp_479 = clamp(temp_478, 0.0, 1.0);
                // 0x000DC8: 0xEF94008002C7383F Ldc
                temp_480 = temp_332 + 44;
                temp_481 = uint(temp_480) >> 2;
                temp_482 = temp_481 >> 2;
                temp_483 = int(temp_481) & 3;
                temp_484 = fp_c8.data[int(temp_482)][temp_483];
                // 0x000DD0: 0x59A01E8001372813 Ffma
                temp_485 = fma(temp_68, temp_446, temp_470);
                // 0x000DD8: 0x5C68100000C7120C Fmul
                temp_486 = temp_420 * temp_465;
                // 0x000DE8: 0x5080000000473F3D Mufu
                temp_487 = 1.0 / temp_484;
                // 0x000DF0: 0x5C68100000D7120D Fmul
                temp_488 = temp_420 * temp_469;
                // 0x000DF8: 0x5C68100003B71212 Fmul
                temp_489 = temp_420 * temp_475;
                // 0x000E08: 0x59A2088001171A3B Ffma
                temp_490 = 0.0 - temp_479;
                temp_491 = fma(temp_181, temp_479, temp_490);
                // 0x000E10: 0x51A01D8400171111 Ffma
                temp_492 = fma(temp_479, temp_491, fp_c1.data[0].y);
                // 0x000E18: 0x5C5C30000FF7133B Fadd
                temp_493 = temp_485 + -0.0;
                temp_494 = clamp(temp_493, 0.0, 1.0);
                // 0x000E28: 0x5080000000471111 Mufu
                temp_495 = 1.0 / temp_492;
                // 0x000E30: 0x51A01F0400473D3D Ffma
                temp_496 = fma(temp_487, temp_443, fp_c1.data[1].x);
                // 0x000E38: 0x5080000000473D3D Mufu
                temp_497 = 1.0 / temp_496;
                // 0x000E48: 0x59A11D8003B7293F Ffma
                temp_498 = 0.0 - temp_494;
                temp_499 = fma(temp_183, temp_498, temp_494);
                // 0x000E50: 0x5C58100003F7293E Fadd
                temp_500 = temp_183 + temp_499;
                // 0x000E58: 0x5C68100001173A3F Fmul
                temp_501 = temp_173 * temp_495;
                // 0x000E68: 0x5080000000473E3E Mufu
                temp_502 = 1.0 / temp_500;
                // 0x000E70: 0x1E23FB3333373D3D Fmul32i
                temp_503 = temp_497 * 1.39999998;
                // 0x000E78: 0x5C68100003F73F3F Fmul
                temp_504 = temp_501 * temp_501;
                // 0x000E88: 0x5C68100003D73D3D Fmul
                temp_505 = temp_503 * temp_503;
                // 0x000E90: 0x5C68100003E72B11 Fmul
                temp_506 = temp_226 * temp_502;
                // 0x000E98: 0x59A11E8003D7133D Ffma
                temp_507 = 0.0 - temp_505;
                temp_508 = fma(temp_485, temp_507, temp_505);
                // 0x000EA8: 0x5C68100001173F3F Fmul
                temp_509 = temp_504 * temp_506;
                // 0x000EB0: 0x5C5C100003D71313 Fadd
                temp_510 = temp_485 + temp_508;
                temp_511 = clamp(temp_510, 0.0, 1.0);
                // 0x000EB8: 0x5C68100003F73B11 Fmul
                temp_512 = temp_494 * temp_509;
                // 0x000EC8: 0x01040DF760C7F03B Mov32i
                // 0x000ED0: 0x49A21D840037103B Ffma
                temp_513 = fma(temp_477, fp_c1.data[0].w, -6.98316002);
                // 0x000ED8: 0x5C68100003B7103B Fmul
                temp_514 = temp_477 * temp_513;
                // 0x000EE8: 0x5C90008003B70038 Rro
                // 0x000EF0: 0x508000000027383B Mufu
                temp_515 = exp2(temp_514);
                // 0x000EF8: 0x59A11D8003B70510 Ffma
                temp_516 = 0.0 - temp_515;
                temp_517 = fma(temp_206, temp_516, temp_515);
                // 0x000F08: 0x5C58100001070510 Fadd
                temp_518 = temp_206 + temp_517;
                // 0x000F10: 0x4C6810140647103D Fmul
                temp_519 = temp_518 * fp_c5.data[25].x;
                // 0x000F18: 0x5C68100000C73D10 Fmul
                temp_520 = temp_519 * temp_486;
                // 0x000F28: 0x5C68100001370C0C Fmul
                temp_521 = temp_486 * temp_511;
                // 0x000F30: 0x5C6810000117103D Fmul
                temp_522 = temp_520 * temp_512;
                // 0x000F38: 0x49A0188400670C31 Ffma
                temp_523 = fma(temp_521, fp_c1.data[1].z, temp_307);
                // 0x000F48: 0x49A01A0400573D34 Ffma
                temp_524 = fma(temp_522, fp_c1.data[1].y, temp_308);
                // 0x000F50: 0x59A11D8003B7083D Ffma
                temp_525 = 0.0 - temp_515;
                temp_526 = fma(temp_230, temp_525, temp_515);
                // 0x000F58: 0x59A11D8003B7093B Ffma
                temp_527 = 0.0 - temp_515;
                temp_528 = fma(temp_228, temp_527, temp_515);
                // 0x000F68: 0x5C58100003D7083D Fadd
                temp_529 = temp_230 + temp_526;
                // 0x000F70: 0x5C58100003B7093B Fadd
                temp_530 = temp_228 + temp_528;
                // 0x000F78: 0x4C68101406473D10 Fmul
                temp_531 = temp_529 * fp_c5.data[25].x;
                // 0x000F88: 0x4C68101406473B3B Fmul
                temp_532 = temp_530 * fp_c5.data[25].x;
                // 0x000F90: 0x5C68100000D71010 Fmul
                temp_533 = temp_531 * temp_488;
                // 0x000F98: 0x5C68100001273B3B Fmul
                temp_534 = temp_532 * temp_489;
                // 0x000FA8: 0x5C68100001370D0D Fmul
                temp_535 = temp_488 * temp_511;
                // 0x000FB0: 0x5C68100001371212 Fmul
                temp_536 = temp_489 * temp_511;
                // 0x000FB8: 0x5C68100001171010 Fmul
                temp_537 = temp_533 * temp_512;
                // 0x000FC8: 0x5C68100001173B3B Fmul
                temp_538 = temp_534 * temp_512;
                // 0x000FD0: 0x49A00F0400670D1E Ffma
                temp_539 = fma(temp_535, fp_c1.data[1].z, temp_309);
                // 0x000FD8: 0x49A0100400671220 Ffma
                temp_540 = fma(temp_536, fp_c1.data[1].z, temp_310);
                // 0x000FE8: 0x49A00F840057101F Ffma
                temp_541 = fma(temp_537, fp_c1.data[1].y, temp_311);
                // 0x000FF0: 0x49A00E8400573B1D Ffma
                temp_542 = fma(temp_538, fp_c1.data[1].y, temp_312);
                // 0x000FF8: 0xF0F800000007000F Sync
                temp_425 = temp_523;
                temp_426 = temp_524;
                temp_427 = temp_539;
                temp_428 = temp_540;
                temp_429 = temp_541;
                temp_430 = temp_542;
            }
            // 0x001008: 0x1C00000000173C3C Iadd32i
            temp_543 = temp_322 + 1;
            // 0x001010: 0x5B6C038003373C07 Isetp
            temp_323 = uint(temp_543) >= floatBitsToUint(temp_212);
            // 0x001018: 0xE2400FFFA908000F Bra
            temp_322 = temp_543;
            temp_307 = temp_425;
            temp_308 = temp_426;
            temp_309 = temp_427;
            temp_310 = temp_428;
            temp_311 = temp_429;
            temp_312 = temp_430;
            temp_313 = temp_427;
            temp_314 = temp_425;
            temp_315 = temp_428;
            temp_316 = temp_430;
            temp_317 = temp_429;
            temp_318 = temp_426;
        }
        while (!temp_323);
        // 0x001028: 0xF0F800000007000F Sync
    }
    // 0x001030: 0x4C58101405471919 Fadd
    temp_544 = temp_70 + fp_c5.data[21].x;
    // 0x001038: 0xE003FF87CFF7FF33 Ipa
    // 0x001048: 0x4C5810140557000C Fadd
    temp_545 = temp_69 + fp_c5.data[21].y;
    // 0x001050: 0x4C59101405672828 Fadd
    temp_546 = 0.0 - temp_68;
    temp_547 = temp_546 + fp_c5.data[21].z;
    // 0x001058: 0x386810408007032B Fmul
    temp_548 = temp_166 * 4.0;
    // 0x001068: 0x4C98079C02070037 Mov
    // 0x001070: 0x5C6810000197190D Fmul
    temp_549 = temp_544 * temp_544;
    // 0x001078: 0x59A0068000C70C0D Ffma
    temp_550 = fma(temp_545, temp_545, temp_549);
    // 0x001088: 0x59A006800287280D Ffma
    temp_551 = fma(temp_547, temp_547, temp_550);
    // 0x001090: 0x5080000000570D12 Mufu
    temp_552 = inversesqrt(temp_551);
    // 0x001098: 0x5080000000473333 Mufu
    // 0x0010A8: 0x5C68100001271919 Fmul
    temp_553 = temp_544 * temp_552;
    // 0x0010B0: 0x5C68100001270C10 Fmul
    temp_554 = temp_545 * temp_552;
    // 0x0010B8: 0x5C68100001272828 Fmul
    temp_555 = temp_547 * temp_552;
    // 0x0010C8: 0x5C6257800147350C Fmnmx
    temp_556 = abs(temp_155);
    temp_557 = abs(temp_295);
    temp_558 = max(temp_556, temp_557);
    // 0x0010D0: 0x5C62578001071911 Fmnmx
    temp_559 = abs(temp_553);
    temp_560 = abs(temp_554);
    temp_561 = max(temp_559, temp_560);
    // 0x0010D8: 0x5C60578000C70E18 Fmnmx
    temp_562 = abs(temp_297);
    temp_563 = max(temp_562, temp_558);
    // 0x0010E8: 0x5080000000471813 Mufu
    temp_564 = 1.0 / temp_563;
    // 0x0010F0: 0x5C60578001172815 Fmnmx
    temp_565 = abs(temp_555);
    temp_566 = max(temp_565, temp_561);
    // 0x0010F8: 0x5080000000471516 Mufu
    temp_567 = 1.0 / temp_566;
    // 0x001108: 0xE043FF914337FF15 Ipa
    temp_568 = in_attr9.y;
    // 0x001110: 0x5C68100001373511 Fmul
    temp_569 = temp_155 * temp_564;
    // 0x001118: 0x5C68100001371412 Fmul
    temp_570 = temp_295 * temp_564;
    // 0x001128: 0xE043FF910337FF14 Ipa
    temp_571 = in_attr9.x;
    // 0x001130: 0x5C69100001370E13 Fmul
    temp_572 = 0.0 - temp_564;
    temp_573 = temp_297 * temp_572;
    // 0x001138: 0x38681040E0070335 Fmul
    temp_574 = temp_166 * 7.0;
    // 0x001148: 0x5C6810000167190C Fmul
    temp_575 = temp_553 * temp_567;
    // 0x001150: 0x5C6810000167100D Fmul
    temp_576 = temp_554 * temp_567;
    // 0x001158: 0x5C6810000167280E Fmul
    temp_577 = temp_555 * temp_567;
    // 0x001168: 0xE043FF918337FF16 Ipa
    temp_578 = in_attr9.z;
    // 0x001170: 0x010000000017F010 Mov32i
    // 0x001178: 0xC0BA0163EFF70C18 Tex
    temp_579 = textureLod(fp_t_tcb_16, vec3(temp_575, temp_576, temp_577), 0.0).xyz;
    temp_580 = temp_579.x;
    temp_581 = temp_579.y;
    temp_582 = temp_579.z;
    // 0x001188: 0x5C98078000E7002A Mov
    // 0x001190: 0xD9A20182A2A70C28 Texs
    temp_583 = textureLod(fp_t_tcb_18, vec3(temp_575, temp_576, temp_577), temp_548).xyz;
    temp_584 = temp_583.x;
    temp_585 = temp_583.y;
    temp_586 = temp_583.z;
    // 0x001198: 0xC1BA0143F3571010 Tex
    temp_587 = textureLod(fp_t_tcb_14, vec4(temp_569, temp_570, temp_573, float(1)), temp_574).xyz;
    temp_588 = temp_587.x;
    temp_589 = temp_587.y;
    temp_590 = temp_587.z;
    // 0x0011A8: 0xDEBA0000C3771414 TexB
    temp_591 = texture(fp_t_cb7_20, vec3(temp_571, temp_568, temp_578)).x;
    // 0x0011B0: 0x3859103F80070303 Fadd
    temp_592 = 0.0 - temp_166;
    temp_593 = temp_592 + 1.0;
    // 0x0011B8: 0x49A005980A171E0B Ffma
    temp_594 = fma(temp_313, fp_c6.data[40].y, temp_261);
    // 0x0011C8: 0x49A005180A17310A Ffma
    temp_595 = fma(temp_314, fp_c6.data[40].y, temp_242);
    // 0x0011D0: 0x3859103F8007021E Fadd
    temp_596 = 0.0 - temp_135;
    temp_597 = temp_596 + 1.0;
    // 0x0011D8: 0x49A007980A17200F Ffma
    temp_598 = fma(temp_315, fp_c6.data[40].y, temp_265);
    // 0x0011E8: 0x010410676C97F020 Mov32i
    // 0x0011F0: 0x5C68100000370331 Fmul
    temp_599 = temp_593 * temp_593;
    // 0x0011F8: 0x1E23E468DB97020D Fmul32i
    temp_600 = temp_135 * 0.193900004;
    // 0x001208: 0x0103E2CD9E87F00E Mov32i
    // 0x001210: 0x4C68101809071E0C Fmul
    temp_601 = temp_597 * fp_c6.data[36].x;
    // 0x001218: 0x5080000000371E1E Mufu
    temp_602 = log2(temp_597);
    // 0x001228: 0x49A019180A171D32 Ffma
    temp_603 = fma(temp_316, fp_c6.data[40].y, temp_306);
    // 0x001230: 0x5080400000370C0C Mufu
    temp_604 = abs(temp_601);
    temp_605 = log2(temp_604);
    // 0x001238: 0x5C68100003173113 Fmul
    temp_606 = temp_599 * temp_599;
    // 0x001248: 0x49A018180A171F30 Ffma
    temp_607 = fma(temp_317, fp_c6.data[40].y, temp_305);
    // 0x001250: 0x4C9807940827001F Mov
    // 0x001258: 0x49A017980A173403 Ffma
    temp_608 = fma(temp_318, fp_c6.data[40].y, temp_304);
    // 0x001268: 0x49A0100400B70215 Ffma
    temp_609 = fma(temp_135, fp_c1.data[2].w, 8.40400028);
    // 0x001270: 0x0103F0000007F016 Mov32i
    // 0x001278: 0x49A006840077130D Ffma
    temp_610 = fma(temp_606, fp_c1.data[1].w, temp_600);
    // 0x001288: 0x49A2070400D7130E Ffma
    temp_611 = fma(temp_606, fp_c1.data[3].y, -0.168799996);
    // 0x001290: 0x4C9807980B470020 Mov
    // 0x001298: 0x4C68101808772525 Fmul
    temp_612 = temp_89 * fp_c6.data[33].w;
    // 0x0012A8: 0x51A00A8400C70215 Ffma
    temp_613 = fma(temp_135, temp_609, fp_c1.data[3].x);
    // 0x0012B0: 0x32A00B3F00070000 Ffma
    temp_614 = fma(temp_69, 0.5, 0.5);
    // 0x0012B8: 0x088BF05D63970D0D Fadd32i
    temp_615 = temp_610 + -0.522800028;
    // 0x0012C8: 0x5C68100000E7130E Fmul
    temp_616 = temp_606 * temp_611;
    // 0x0012D0: 0x4C68101809170C0C Fmul
    temp_617 = temp_605 * fp_c6.data[36].y;
    // 0x0012D8: 0x0104066978D7F016 Mov32i
    // 0x0012E8: 0x51A00A8400E70215 Ffma
    temp_618 = fma(temp_135, temp_613, fp_c1.data[3].z);
    // 0x0012F0: 0xF0F0000034470000 Depbar
    // 0x0012F8: 0x51A210180B472323 Ffma
    temp_619 = 0.0 - fp_c6.data[45].x;
    temp_620 = fma(temp_93, fp_c6.data[45].x, temp_619);
    // 0x001308: 0x5C68100000D70231 Fmul
    temp_621 = temp_135 * temp_615;
    // 0x001310: 0x4C9807980087000D Mov
    // 0x001318: 0x51A210180B470101 Ffma
    temp_622 = 0.0 - fp_c6.data[45].x;
    temp_623 = fma(temp_94, fp_c6.data[45].x, temp_622);
    // 0x001328: 0x5C90008000C7001D Rro
    // 0x001330: 0x49A20B040087130C Ffma
    temp_624 = fma(temp_606, fp_c1.data[2].x, -3.60299993);
    // 0x001338: 0x5084000000271D1D Mufu
    temp_625 = exp2(temp_617);
    temp_626 = clamp(temp_625, 0.0, 1.0);
    // 0x001348: 0x5C60138001570E02 Fmnmx
    temp_627 = min(temp_616, temp_618);
    // 0x001350: 0x4C9807980097000E Mov
    // 0x001358: 0x4C98079800A70015 Mov
    // 0x001368: 0x4C98079809470016 Mov
    // 0x001370: 0x4C59101800470D0D Fadd
    temp_628 = 0.0 - fp_c6.data[2].x;
    temp_629 = temp_628 + fp_c6.data[1].x;
    // 0x001378: 0x51A210180B472222 Ffma
    temp_630 = 0.0 - fp_c6.data[45].x;
    temp_631 = fma(temp_92, fp_c6.data[45].x, temp_630);
    // 0x001388: 0x51A0060400971320 Ffma
    temp_632 = fma(temp_606, temp_624, fp_c1.data[2].y);
    // 0x001390: 0x4C59101800570E0E Fadd
    temp_633 = 0.0 - fp_c6.data[2].y;
    temp_634 = temp_633 + fp_c6.data[1].y;
    // 0x001398: 0x4C59101800671515 Fadd
    temp_635 = 0.0 - fp_c6.data[2].z;
    temp_636 = temp_635 + fp_c6.data[1].z;
    // 0x0013A8: 0x4C58101408171616 Fadd
    temp_637 = fp_c6.data[37].x + fp_c5.data[32].y;
    // 0x0013B0: 0x51A0001800870D0C Ffma
    temp_638 = fma(temp_629, temp_614, fp_c6.data[2].x);
    // 0x0013B8: 0x5C5C30000FF70202 Fadd
    temp_639 = temp_627 + -0.0;
    temp_640 = clamp(temp_639, 0.0, 1.0);
    // 0x0013C8: 0x59A0188002071320 Ffma
    temp_641 = fma(temp_606, temp_632, temp_621);
    // 0x0013D0: 0xE04BFF904337FF13 Ipa
    temp_642 = in_attr8.y;
    temp_643 = clamp(temp_642, 0.0, 1.0);
    // 0x0013D8: 0x51A0001800970E0D Ffma
    temp_644 = fma(temp_634, temp_614, fp_c6.data[2].y);
    // 0x0013E8: 0x51A0001800A7150E Ffma
    temp_645 = fma(temp_636, temp_614, fp_c6.data[2].z);
    // 0x0013F0: 0x4C68101808971E00 Fmul
    temp_646 = temp_602 * fp_c6.data[34].y;
    // 0x0013F8: 0x5C68100001D71616 Fmul
    temp_647 = temp_637 * temp_626;
    // 0x001408: 0x386C104248070815 Fmul
    temp_648 = temp_230 * 50.0;
    temp_649 = clamp(temp_648, 0.0, 1.0);
    // 0x001410: 0x4C68101406471F31 Fmul
    temp_650 = fp_c5.data[32].z * fp_c5.data[25].x;
    // 0x001418: 0x4C5C100400A72020 Fadd
    temp_651 = temp_641 + fp_c1.data[2].z;
    temp_652 = clamp(temp_651, 0.0, 1.0);
    // 0x001428: 0x5C9000800007002F Rro
    // 0x001430: 0x4C68101808D7161D Fmul
    temp_653 = temp_647 * fp_c6.data[35].y;
    // 0x001438: 0x5C6810000027151E Fmul
    temp_654 = temp_649 * temp_640;
    // 0x001448: 0x5084000000272F15 Mufu
    temp_655 = exp2(temp_646);
    temp_656 = clamp(temp_655, 0.0, 1.0);
    // 0x001450: 0x4C68101808E7161F Fmul
    temp_657 = temp_647 * fp_c6.data[35].z;
    // 0x001458: 0x4C68101808C71616 Fmul
    temp_658 = temp_647 * fp_c6.data[35].x;
    // 0x001468: 0x5C5830000027202B Fadd
    temp_659 = 0.0 - temp_640;
    temp_660 = temp_652 + temp_659;
    // 0x001470: 0x59A0180003171D00 Ffma
    temp_661 = fma(temp_653, temp_650, temp_607);
    // 0x001478: 0x49A10E9408271D1D Ffma
    temp_662 = 0.0 - fp_c5.data[32].z;
    temp_663 = fma(temp_653, temp_662, temp_653);
    // 0x001488: 0x59A0190003171F02 Ffma
    temp_664 = fma(temp_657, temp_650, temp_603);
    // 0x001490: 0x59A0018003171603 Ffma
    temp_665 = fma(temp_658, temp_650, temp_608);
    // 0x001498: 0x49A10B1408271620 Ffma
    temp_666 = 0.0 - fp_c5.data[32].z;
    temp_667 = fma(temp_658, temp_666, temp_658);
    // 0x0014A8: 0x49A10F9408271F16 Ffma
    temp_668 = 0.0 - fp_c5.data[32].z;
    temp_669 = fma(temp_657, temp_668, temp_657);
    // 0x0014B0: 0x59A00F0002B70505 Ffma
    temp_670 = fma(temp_206, temp_660, temp_654);
    // 0x0014B8: 0x5C58100001D70B0B Fadd
    temp_671 = temp_594 + temp_663;
    // 0x0014C8: 0x59A00F0002B70808 Ffma
    temp_672 = fma(temp_230, temp_660, temp_654);
    // 0x0014D0: 0x59A00F0002B70909 Ffma
    temp_673 = fma(temp_228, temp_660, temp_654);
    // 0x0014D8: 0x4C6810180887151D Fmul
    temp_674 = temp_656 * fp_c6.data[34].x;
    // 0x0014E8: 0x4C9807980867001E Mov
    // 0x0014F0: 0x5C58100001670F0F Fadd
    temp_675 = temp_598 + temp_669;
    // 0x0014F8: 0x5C58100002070A0A Fadd
    temp_676 = temp_595 + temp_667;
    // 0x001508: 0x4C68101406470909 Fmul
    temp_677 = temp_673 * fp_c5.data[25].x;
    // 0x001510: 0x51A00F1808671D1D Ffma
    temp_678 = fma(temp_674, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001518: 0xF0F0000034370000 Depbar
    // 0x001528: 0x4C68101407871815 Fmul
    temp_679 = temp_580 * fp_c5.data[30].x;
    // 0x001530: 0x4C68101407871916 Fmul
    temp_680 = temp_581 * fp_c5.data[30].x;
    // 0x001538: 0x010404000007F019 Mov32i
    // 0x001548: 0x4C68101407871A18 Fmul
    temp_681 = temp_582 * fp_c5.data[30].x;
    // 0x001550: 0x49A00A8400670C1F Ffma
    temp_682 = fma(temp_638, fp_c1.data[1].z, temp_679);
    // 0x001558: 0x49A00B0400670D16 Ffma
    temp_683 = fma(temp_644, fp_c1.data[1].z, temp_680);
    // 0x001568: 0xE043FF900337FF0D Ipa
    temp_684 = in_attr8.x;
    // 0x001570: 0x33A00CC00007130C Ffma
    temp_685 = fma(temp_643, -2.0, 3.0);
    // 0x001578: 0xE043FF8C8337FF33 Ipa
    temp_686 = in_attr4.z;
    // 0x001588: 0x5C68100001371313 Fmul
    temp_687 = temp_643 * temp_643;
    // 0x001590: 0x49A00C0400670E0E Ffma
    temp_688 = fma(temp_645, fp_c1.data[1].z, temp_681);
    // 0x001598: 0x59A20F8001D72626 Ffma
    temp_689 = 0.0 - temp_682;
    temp_690 = fma(temp_86, temp_678, temp_689);
    // 0x0015A8: 0x59A20B0001D72727 Ffma
    temp_691 = 0.0 - temp_683;
    temp_692 = fma(temp_87, temp_678, temp_691);
    // 0x0015B0: 0xF0F0000034270000 Depbar
    // 0x0015B8: 0x4C68101407872918 Fmul
    temp_693 = temp_585 * fp_c5.data[30].x;
    // 0x0015C8: 0x5C68100001370C0C Fmul
    temp_694 = temp_685 * temp_687;
    // 0x0015D0: 0x59A2070001D72424 Ffma
    temp_695 = 0.0 - temp_688;
    temp_696 = fma(temp_88, temp_678, temp_695);
    // 0x0015D8: 0x59A00F800267251F Ffma
    temp_697 = fma(temp_612, temp_690, temp_682);
    // 0x0015E8: 0x4C68101407872813 Fmul
    temp_698 = temp_584 * fp_c5.data[30].x;
    // 0x0015F0: 0x59A00B0002772516 Ffma
    temp_699 = fma(temp_612, temp_692, temp_683);
    // 0x0015F8: 0x4C68101803770C0C Fmul
    temp_700 = temp_694 * fp_c6.data[13].w;
    // 0x001608: 0x59A0070002472524 Ffma
    temp_701 = fma(temp_612, temp_696, temp_688);
    // 0x001610: 0x5C58100000A71F0A Fadd
    temp_702 = temp_697 + temp_676;
    // 0x001618: 0xF0F0000034170000 Depbar
    // 0x001628: 0x49A0099808571010 Ffma
    temp_703 = fma(temp_588, fp_c6.data[33].y, temp_698);
    // 0x001630: 0x4C6810140647050E Fmul
    temp_704 = temp_670 * fp_c5.data[25].x;
    // 0x001638: 0x4C68101407872A05 Fmul
    temp_705 = temp_586 * fp_c5.data[30].x;
    // 0x001648: 0x49A00C1808571113 Ffma
    temp_706 = fma(temp_589, fp_c6.data[33].y, temp_693);
    // 0x001650: 0x4C68101406470811 Fmul
    temp_707 = temp_672 * fp_c5.data[25].x;
    // 0x001658: 0x5C58100000B7160B Fadd
    temp_708 = temp_699 + temp_671;
    // 0x001668: 0x59A1050000A7210A Ffma
    temp_709 = 0.0 - temp_702;
    temp_710 = fma(temp_7, temp_709, temp_702);
    // 0x001670: 0x59A0018001070E03 Ffma
    temp_711 = fma(temp_704, temp_703, temp_665);
    // 0x001678: 0x5C58100000F7240F Fadd
    temp_712 = temp_701 + temp_675;
    // 0x001688: 0x49A0029808571208 Ffma
    temp_713 = fma(temp_590, fp_c6.data[33].y, temp_705);
    // 0x001690: 0x59A0000001371100 Ffma
    temp_714 = fma(temp_707, temp_706, temp_661);
    // 0x001698: 0x59A1058000B7210B Ffma
    temp_715 = 0.0 - temp_708;
    temp_716 = fma(temp_7, temp_715, temp_708);
    // 0x0016A8: 0x4C98079802970005 Mov
    // 0x0016B0: 0x59A0018000A70403 Ffma
    temp_717 = fma(temp_184, temp_710, temp_711);
    // 0x0016B8: 0x59A1078000F72121 Ffma
    temp_718 = 0.0 - temp_712;
    temp_719 = fma(temp_7, temp_718, temp_712);
    // 0x0016C8: 0x59A0010000870902 Ffma
    temp_720 = fma(temp_677, temp_713, temp_664);
    // 0x0016D0: 0x4C98079802870004 Mov
    // 0x0016D8: 0x59A0000000B7060B Ffma
    temp_721 = fma(temp_214, temp_716, temp_714);
    // 0x0016E8: 0x49A506980BC7140D Ffma
    temp_722 = 0.0 - fp_c6.data[47].x;
    temp_723 = fma(temp_591, temp_722, temp_684);
    temp_724 = clamp(temp_723, 0.0, 1.0);
    // 0x0016F0: 0x5C68100000372C2C Fmul
    temp_725 = temp_299 * temp_717;
    // 0x0016F8: 0x5080000000370D0D Mufu
    temp_726 = log2(temp_724);
    // 0x001708: 0x59A0010002170721 Ffma
    temp_727 = fma(temp_188, temp_719, temp_720);
    // 0x001710: 0x51A0021802872222 Ffma
    temp_728 = fma(temp_631, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001718: 0x5C68100000B72D2D Fmul
    temp_729 = temp_301 * temp_721;
    // 0x001728: 0x4C98079802A70002 Mov
    // 0x001730: 0x51A0029802972300 Ffma
    temp_730 = fma(temp_620, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001738: 0x49A0161406C71717 Ffma
    temp_731 = fma(temp_234, fp_c5.data[27].x, temp_725);
    // 0x001748: 0x5C68100002172E2E Fmul
    temp_732 = temp_303 * temp_727;
    // 0x001750: 0x0103F8000007F007 Mov32i
    // 0x001758: 0x49A0169406C71B1B Ffma
    temp_733 = fma(temp_279, fp_c5.data[27].x, temp_729);
    // 0x001768: 0x51A0011802A70101 Ffma
    temp_734 = fma(temp_623, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001770: 0x5C58300002271703 Fadd
    temp_735 = 0.0 - temp_728;
    temp_736 = temp_731 + temp_735;
    // 0x001778: 0x49A0171406C71C1C Ffma
    temp_737 = fma(temp_244, fp_c5.data[27].x, temp_732);
    // 0x001788: 0x4C68101803170D05 Fmul
    temp_738 = temp_726 * fp_c6.data[12].y;
    // 0x001790: 0x5C58300000071B02 Fadd
    temp_739 = 0.0 - temp_730;
    temp_740 = temp_733 + temp_739;
    // 0x001798: 0x49A011180BF70304 Ffma
    temp_741 = fma(temp_736, fp_c6.data[47].w, temp_728);
    // 0x0017A8: 0x5C58300000171C03 Fadd
    temp_742 = 0.0 - temp_734;
    temp_743 = temp_737 + temp_742;
    // 0x0017B0: 0x49A000180BF70202 Ffma
    temp_744 = fma(temp_740, fp_c6.data[47].w, temp_730);
    // 0x0017B8: 0x5C90008000570006 Rro
    // 0x0017C8: 0x49A2061803470C05 Ffma
    temp_745 = 0.0 - temp_700;
    temp_746 = fma(temp_700, fp_c6.data[13].x, temp_745);
    // 0x0017D0: 0x5080000000270606 Mufu
    temp_747 = exp2(temp_738);
    // 0x0017D8: 0x49A000980BF70303 Ffma
    temp_748 = fma(temp_743, fp_c6.data[47].w, temp_734);
    // 0x0017E8: 0x5C60178000472204 Fmnmx
    temp_749 = max(temp_728, temp_741);
    // 0x0017F0: 0x5C60178000270002 Fmnmx
    temp_750 = max(temp_730, temp_744);
    // 0x0017F8: 0x49A2061803570C00 Ffma
    temp_751 = 0.0 - temp_700;
    temp_752 = fma(temp_700, fp_c6.data[13].y, temp_751);
    // 0x001808: 0x49A2061803670C0C Ffma
    temp_753 = 0.0 - temp_700;
    temp_754 = fma(temp_700, fp_c6.data[13].z, temp_753);
    // 0x001810: 0x5C60178000370103 Fmnmx
    temp_755 = max(temp_734, temp_748);
    // 0x001818: 0x59A0020000570404 Ffma
    temp_756 = fma(temp_749, temp_746, temp_749);
    // 0x001828: 0x59A0010000070201 Ffma
    temp_757 = fma(temp_750, temp_752, temp_750);
    // 0x001830: 0x4C68101802B70605 Fmul
    temp_758 = temp_747 * fp_c6.data[10].w;
    // 0x001838: 0x59A0018000C70302 Ffma
    temp_759 = fma(temp_755, temp_754, temp_755);
    // 0x001848: 0x5C59100000471700 Fadd
    temp_760 = 0.0 - temp_731;
    temp_761 = temp_760 + temp_756;
    // 0x001850: 0x4C58100C03873304 Fadd
    temp_762 = temp_686 + fp_c3.data[14].x;
    // 0x001858: 0x5C59100000171B01 Fadd
    temp_763 = 0.0 - temp_733;
    temp_764 = temp_763 + temp_757;
    // 0x001868: 0x0103F8000007F003 Mov32i
    // 0x001870: 0x5C9807800FF70006 Mov
    // 0x001878: 0x5C59100000271C02 Fadd
    temp_765 = 0.0 - temp_737;
    temp_766 = temp_765 + temp_759;
    // 0x001888: 0x59A00B8000570000 Ffma
    temp_767 = fma(temp_761, temp_758, temp_731);
    // 0x001890: 0x49A37F8C03C70404 Ffma
    temp_768 = 0.0 - fp_c3.data[15].x;
    temp_769 = fma(temp_762, temp_768, -0.0);
    // 0x001898: 0x59A00D8000570101 Ffma
    temp_770 = fma(temp_764, temp_758, temp_733);
    // 0x0018A8: 0x59A00E0000570202 Ffma
    temp_771 = fma(temp_766, temp_758, temp_737);
    // 0x0018B0: 0x0103E0000007F005 Mov32i
    // 0x0018B8: 0xE30000000007000F Exit
    out_attr0.x = temp_767;
    out_attr0.y = temp_770;
    out_attr0.z = temp_771;
    out_attr0.w = 1.0;
    out_attr1.x = temp_769;
    out_attr1.y = 0.125;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
