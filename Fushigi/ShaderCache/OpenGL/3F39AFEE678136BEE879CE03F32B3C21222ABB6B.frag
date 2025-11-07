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

layout (binding = 8, std140) uniform _fp_c7
{
    precise vec4 data[4096];
} fp_c7;

uint local_memory[16];
layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_24;
layout (binding = 2) uniform sampler2D fp_t_tcb_22;
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
    precise vec2 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise vec2 temp_5;
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
    precise vec4 temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise vec3 temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise vec3 temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    bool temp_96;
    bool temp_97;
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
    bool temp_202;
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
    uint temp_221;
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
    int temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    int temp_244;
    uint temp_245;
    uint temp_246;
    int temp_247;
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
    bool temp_305;
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
    int temp_355;
    bool temp_356;
    int temp_357;
    int temp_358;
    int temp_359;
    int temp_360;
    int temp_361;
    uint temp_362;
    uint temp_363;
    int temp_364;
    precise float temp_365;
    precise float temp_366;
    precise float temp_367;
    precise float temp_368;
    int temp_369;
    int temp_370;
    uint temp_371;
    uint temp_372;
    int temp_373;
    precise float temp_374;
    int temp_375;
    uint temp_376;
    int temp_377;
    precise float temp_378;
    int temp_379;
    uint temp_380;
    uint temp_381;
    int temp_382;
    precise float temp_383;
    int temp_384;
    uint temp_385;
    int temp_386;
    precise float temp_387;
    int temp_388;
    uint temp_389;
    uint temp_390;
    int temp_391;
    precise float temp_392;
    int temp_393;
    uint temp_394;
    int temp_395;
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
    int temp_406;
    uint temp_407;
    uint temp_408;
    int temp_409;
    precise float temp_410;
    int temp_411;
    uint temp_412;
    int temp_413;
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
    int temp_424;
    uint temp_425;
    uint temp_426;
    int temp_427;
    precise float temp_428;
    precise float temp_429;
    precise float temp_430;
    int temp_431;
    uint temp_432;
    uint temp_433;
    int temp_434;
    precise float temp_435;
    int temp_436;
    uint temp_437;
    int temp_438;
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
    uint temp_458;
    int temp_459;
    bool temp_460;
    uint temp_461;
    precise float temp_462;
    precise float temp_463;
    precise float temp_464;
    precise float temp_465;
    precise float temp_466;
    precise float temp_467;
    precise float temp_468;
    uint temp_469;
    precise float temp_470;
    bool temp_471;
    precise float temp_472;
    precise float temp_473;
    precise float temp_474;
    precise float temp_475;
    precise float temp_476;
    precise float temp_477;
    precise float temp_478;
    int temp_479;
    uint temp_480;
    uint temp_481;
    int temp_482;
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
    uint temp_500;
    uint temp_501;
    int temp_502;
    precise float temp_503;
    int temp_504;
    uint temp_505;
    int temp_506;
    precise float temp_507;
    precise float temp_508;
    int temp_509;
    uint temp_510;
    uint temp_511;
    int temp_512;
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
    precise vec3 temp_600;
    precise float temp_601;
    precise float temp_602;
    precise float temp_603;
    precise vec3 temp_604;
    precise float temp_605;
    precise float temp_606;
    precise float temp_607;
    precise vec3 temp_608;
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
    // 0x000008: 0xE003FF87CFF7FF10 Ipa
    // 0x000010: 0x5080000000471010 Mufu
    // 0x000018: 0xE043FF8E0107FF03 Ipa
    temp_0 = in_attr6.x;
    // 0x000028: 0xE043FF8E4107FF02 Ipa
    temp_1 = in_attr6.y;
    // 0x000030: 0xD830026FF0270300 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000038: 0xD834024FF0270324 Texs
    temp_5 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    // 0x000048: 0xE043FF8A0107FF04 Ipa
    temp_8 = in_attr2.x;
    // 0x000050: 0xE043FF8A4107FF05 Ipa
    temp_9 = in_attr2.y;
    // 0x000058: 0xE043FF890107FF08 Ipa
    temp_10 = in_attr1.x;
    // 0x000068: 0xE043FF8A8107FF06 Ipa
    temp_11 = in_attr2.z;
    // 0x000070: 0xE043FF894107FF09 Ipa
    temp_12 = in_attr1.y;
    // 0x000078: 0xE043FF898107FF0A Ipa
    temp_13 = in_attr1.z;
    // 0x000088: 0xE043FF880107FF0D Ipa
    temp_14 = in_attr0.x;
    // 0x000090: 0xE043FF884107FF0E Ipa
    temp_15 = in_attr0.y;
    // 0x000098: 0xE043FF888107FF0F Ipa
    temp_16 = in_attr0.z;
    // 0x0000A8: 0x5C68100000470407 Fmul
    temp_17 = temp_8 * temp_8;
    // 0x0000B0: 0x5C6810000087080B Fmul
    temp_18 = temp_10 * temp_10;
    // 0x0000B8: 0x59A0038000570507 Ffma
    temp_19 = fma(temp_9, temp_9, temp_17);
    // 0x0000C8: 0x5C68100000D70D11 Fmul
    temp_20 = temp_14 * temp_14;
    // 0x0000D0: 0x59A005800097090B Ffma
    temp_21 = fma(temp_12, temp_12, temp_18);
    // 0x0000D8: 0x59A0038000670607 Ffma
    temp_22 = fma(temp_11, temp_11, temp_19);
    // 0x0000E8: 0x59A0088000E70E11 Ffma
    temp_23 = fma(temp_15, temp_15, temp_20);
    // 0x0000F0: 0x5080000000570707 Mufu
    temp_24 = inversesqrt(temp_22);
    // 0x0000F8: 0x59A0058000A70A0B Ffma
    temp_25 = fma(temp_13, temp_13, temp_21);
    // 0x000108: 0x5080000000570B0B Mufu
    temp_26 = inversesqrt(temp_25);
    // 0x000110: 0x59A0088000F70F11 Ffma
    temp_27 = fma(temp_16, temp_16, temp_23);
    // 0x000118: 0x5C68100000770404 Fmul
    temp_28 = temp_8 * temp_24;
    // 0x000128: 0x5C6810000077050C Fmul
    temp_29 = temp_9 * temp_24;
    // 0x000130: 0x5C68100000770606 Fmul
    temp_30 = temp_11 * temp_24;
    // 0x000138: 0x5C68100000B70805 Fmul
    temp_31 = temp_10 * temp_26;
    // 0x000148: 0x5080000000571108 Mufu
    temp_32 = inversesqrt(temp_27);
    // 0x000150: 0x5C68100000B70909 Fmul
    temp_33 = temp_12 * temp_26;
    // 0x000158: 0x5C68100000B70A0A Fmul
    temp_34 = temp_13 * temp_26;
    // 0x000168: 0x5C68100000870E0E Fmul
    temp_35 = temp_15 * temp_32;
    // 0x000170: 0xF0F0000034170000 Depbar
    // 0x000178: 0x5C68100000170107 Fmul
    temp_36 = temp_4 * temp_4;
    // 0x000188: 0x59A0038000070007 Ffma
    temp_37 = fma(temp_3, temp_3, temp_36);
    // 0x000190: 0x385D103F8007070B Fadd
    temp_38 = 0.0 - temp_37;
    temp_39 = temp_38 + 1.0;
    temp_40 = clamp(temp_39, 0.0, 1.0);
    // 0x000198: 0x5C68100000170407 Fmul
    temp_41 = temp_28 * temp_4;
    // 0x0001A8: 0x5080000000870B0B Mufu
    temp_42 = sqrt(temp_40);
    // 0x0001B0: 0x5C68100000870D04 Fmul
    temp_43 = temp_14 * temp_32;
    // 0x0001B8: 0x5C68100000870F08 Fmul
    temp_44 = temp_16 * temp_32;
    // 0x0001C8: 0x59A0038000070505 Ffma
    temp_45 = fma(temp_31, temp_3, temp_41);
    // 0x0001D0: 0x5C68100000170C07 Fmul
    temp_46 = temp_29 * temp_4;
    // 0x0001D8: 0x5C68100000170601 Fmul
    temp_47 = temp_30 * temp_4;
    // 0x0001E8: 0x59A0038000070907 Ffma
    temp_48 = fma(temp_33, temp_3, temp_46);
    // 0x0001F0: 0xE003FF874FF7FF09 Ipa
    temp_49 = gl_FragCoord.y;
    temp_50 = support_buffer.render_scale[0];
    temp_51 = temp_49 / temp_50;
    // 0x0001F8: 0x59A0028000B70404 Ffma
    temp_52 = fma(temp_43, temp_42, temp_45);
    // 0x000208: 0x59A0008000070A01 Ffma
    temp_53 = fma(temp_34, temp_3, temp_47);
    // 0x000210: 0x59A0038000B70E07 Ffma
    temp_54 = fma(temp_35, temp_42, temp_48);
    // 0x000218: 0x5C68100000470400 Fmul
    temp_55 = temp_52 * temp_52;
    // 0x000228: 0x59A0008000B70801 Ffma
    temp_56 = fma(temp_44, temp_42, temp_53);
    // 0x000230: 0xE003FF870FF7FF08 Ipa
    temp_57 = gl_FragCoord.x;
    temp_58 = support_buffer.render_scale[0];
    temp_59 = temp_57 / temp_58;
    // 0x000238: 0x59A0000000770700 Ffma
    temp_60 = fma(temp_54, temp_54, temp_55);
    // 0x000248: 0x59A0000000170105 Ffma
    temp_61 = fma(temp_56, temp_56, temp_60);
    // 0x000250: 0x5080000000570512 Mufu
    temp_62 = inversesqrt(temp_61);
    // 0x000258: 0x5C68100001270116 Fmul
    temp_63 = temp_56 * temp_62;
    // 0x000268: 0x5C68100001270700 Fmul
    temp_64 = temp_54 * temp_62;
    // 0x000270: 0x5C68100001270412 Fmul
    temp_65 = temp_52 * temp_62;
    // 0x000278: 0x4C68100C04A70805 Fmul
    temp_66 = temp_59 * fp_c3.data[18].z;
    // 0x000288: 0x4C68100C00671606 Fmul
    temp_67 = temp_63 * fp_c3.data[1].z;
    // 0x000290: 0x4C68100C00271601 Fmul
    temp_68 = temp_63 * fp_c3.data[0].z;
    // 0x000298: 0x49A0030C00570004 Ffma
    temp_69 = fma(temp_64, fp_c3.data[1].y, temp_67);
    // 0x0002A8: 0x49A0008C00170001 Ffma
    temp_70 = fma(temp_64, fp_c3.data[0].y, temp_68);
    // 0x0002B0: 0x49A0020C00471204 Ffma
    temp_71 = fma(temp_65, fp_c3.data[1].x, temp_69);
    // 0x0002B8: 0x49A0008C00071201 Ffma
    temp_72 = fma(temp_65, fp_c3.data[0].x, temp_70);
    // 0x0002C8: 0x4C69100C03E70406 Fmul
    temp_73 = 0.0 - fp_c3.data[15].z;
    temp_74 = temp_71 * temp_73;
    // 0x0002D0: 0x4C68100C04B70904 Fmul
    temp_75 = temp_51 * fp_c3.data[18].w;
    // 0x0002D8: 0x4C68101808B70107 Fmul
    temp_76 = temp_72 * fp_c6.data[34].w;
    // 0x0002E8: 0x4C68101808B70606 Fmul
    temp_77 = temp_74 * fp_c6.data[34].w;
    // 0x0002F0: 0x49A002840047071E Ffma
    temp_78 = fma(temp_76, fp_c1.data[1].x, temp_66);
    // 0x0002F8: 0x49A002040047061F Ffma
    temp_79 = fma(temp_77, fp_c1.data[1].x, temp_75);
    // 0x000308: 0xD832022221F71E1E Texs
    temp_80 = texture(fp_t_tcb_22, vec2(temp_78, temp_79)).xyzw;
    temp_81 = temp_80.x;
    temp_82 = temp_80.y;
    temp_83 = temp_80.z;
    temp_84 = temp_80.w;
    // 0x000310: 0xD8240360F0270328 Texs
    temp_85 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_86 = temp_85.x;
    temp_87 = temp_85.y;
    temp_88 = temp_85.z;
    // 0x000318: 0xD822020010470520 Texs
    temp_89 = texture(fp_t_tcb_20, vec2(temp_66, temp_75)).xyz;
    temp_90 = temp_89.x;
    temp_91 = temp_89.y;
    temp_92 = temp_89.z;
    // 0x000328: 0xE043FF8B0107FF27 Ipa
    temp_93 = in_attr3.x;
    // 0x000330: 0xE043FF8B4107FF26 Ipa
    temp_94 = in_attr3.y;
    // 0x000338: 0xE043FF8B8107FF1A Ipa
    temp_95 = in_attr3.z;
    // 0x000348: 0x4C9807940627000B Mov
    // 0x000350: 0xF0F0000034370000 Depbar
    // 0x000358: 0x4BB1839406072507 Fsetp
    temp_96 = temp_7 < fp_c5.data[24].x;
    // 0x000368: 0x4896038400072402 Fset
    temp_97 = temp_6 >= fp_c1.data[0].x;
    temp_98 = temp_97 ? 1.0 : 0.0;
    // 0x000370: 0x4C68101403070B03 Fmul
    temp_99 = fp_c5.data[24].z * fp_c5.data[12].x;
    // 0x000378: 0x59A101000027030A Ffma
    temp_100 = 0.0 - temp_98;
    temp_101 = fma(temp_99, temp_100, temp_98);
    // 0x000388: 0x5C58100000A7030D Fadd
    temp_102 = temp_99 + temp_101;
    // 0x000390: 0x5C68100002772707 Fmul
    temp_103 = temp_93 * temp_93;
    // 0x000398: 0x59A0038002672607 Ffma
    temp_104 = fma(temp_94, temp_94, temp_103);
    // 0x0003A8: 0x59A0038001A71A06 Ffma
    temp_105 = fma(temp_95, temp_95, temp_104);
    // 0x0003B0: 0x4C68101402C70B07 Fmul
    temp_106 = fp_c5.data[24].z * fp_c5.data[11].x;
    // 0x0003B8: 0x5080000000570608 Mufu
    temp_107 = inversesqrt(temp_105);
    // 0x0003C8: 0x59A1010000270709 Ffma
    temp_108 = 0.0 - temp_98;
    temp_109 = fma(temp_106, temp_108, temp_98);
    // 0x0003D0: 0x5C5810000097070E Fadd
    temp_110 = temp_106 + temp_109;
    // 0x0003D8: 0x5C69100000872727 Fmul
    temp_111 = 0.0 - temp_107;
    temp_112 = temp_93 * temp_111;
    // 0x0003E8: 0x5C69100000872626 Fmul
    temp_113 = 0.0 - temp_107;
    temp_114 = temp_94 * temp_113;
    // 0x0003F0: 0x5C69100000871A1A Fmul
    temp_115 = 0.0 - temp_107;
    temp_116 = temp_95 * temp_115;
    // 0x0003F8: 0xE24000000708000F Bra
    if (temp_96)
    {
        // 0x000408: 0x5C9807800FF70000 Mov
        // 0x000410: 0xE33000000007000F Kil
        discard;
    }
    // 0x000470: 0x4C58301805C72713 Fadd
    temp_117 = 0.0 - fp_c6.data[23].x;
    temp_118 = temp_112 + temp_117;
    // 0x000478: 0xE2900000D1000000 Ssy
    // 0x000488: 0x4C58301805D72614 Fadd
    temp_119 = 0.0 - fp_c6.data[23].y;
    temp_120 = temp_114 + temp_119;
    // 0x000490: 0x4C58301805E71A15 Fadd
    temp_121 = 0.0 - fp_c6.data[23].z;
    temp_122 = temp_116 + temp_121;
    // 0x000498: 0x4C68101402D70B03 Fmul
    temp_123 = fp_c5.data[24].z * fp_c5.data[11].y;
    // 0x0004A8: 0x4C68101403170B08 Fmul
    temp_124 = fp_c5.data[24].z * fp_c5.data[12].y;
    // 0x0004B0: 0x4C68101402E70B07 Fmul
    temp_125 = fp_c5.data[24].z * fp_c5.data[11].z;
    // 0x0004B8: 0x5C68100001371311 Fmul
    temp_126 = temp_118 * temp_118;
    // 0x0004C8: 0x4C68101403270B09 Fmul
    temp_127 = fp_c5.data[24].z * fp_c5.data[12].z;
    // 0x0004D0: 0x5C58300000E70D0D Fadd
    temp_128 = 0.0 - temp_110;
    temp_129 = temp_102 + temp_128;
    // 0x0004D8: 0x59A1010000270306 Ffma
    temp_130 = 0.0 - temp_98;
    temp_131 = fma(temp_123, temp_130, temp_98);
    // 0x0004E8: 0x59A101000027080B Ffma
    temp_132 = 0.0 - temp_98;
    temp_133 = fma(temp_124, temp_132, temp_98);
    // 0x0004F0: 0x59A101000027070A Ffma
    temp_134 = 0.0 - temp_98;
    temp_135 = fma(temp_125, temp_134, temp_98);
    // 0x0004F8: 0x59A0088001471417 Ffma
    temp_136 = fma(temp_120, temp_120, temp_126);
    // 0x000508: 0x59A101000027090C Ffma
    temp_137 = 0.0 - temp_98;
    temp_138 = fma(temp_127, temp_137, temp_98);
    // 0x000510: 0xF0F0000034170000 Depbar
    // 0x000518: 0x4C6810180A072828 Fmul
    temp_139 = temp_86 * fp_c6.data[40].x;
    // 0x000528: 0x5C58100000670311 Fadd
    temp_140 = temp_123 + temp_131;
    // 0x000530: 0x5C58100000B7080B Fadd
    temp_141 = temp_124 + temp_133;
    // 0x000538: 0x5C58100000A7070A Fadd
    temp_142 = temp_125 + temp_135;
    // 0x000548: 0x59A00B8001571517 Ffma
    temp_143 = fma(temp_122, temp_122, temp_136);
    // 0x000550: 0x5C58100000C7090C Fadd
    temp_144 = temp_127 + temp_138;
    // 0x000558: 0x508000000057172A Mufu
    temp_145 = inversesqrt(temp_143);
    // 0x000568: 0x49A1011402C70203 Ffma
    temp_146 = 0.0 - fp_c5.data[11].x;
    temp_147 = fma(temp_98, temp_146, temp_98);
    // 0x000570: 0x5C58300001170B07 Fadd
    temp_148 = 0.0 - temp_140;
    temp_149 = temp_141 + temp_148;
    // 0x000578: 0x49A101140307020B Ffma
    temp_150 = 0.0 - fp_c5.data[12].x;
    temp_151 = fma(temp_98, temp_150, temp_98);
    // 0x000588: 0x49A1011402D70209 Ffma
    temp_152 = 0.0 - fp_c5.data[11].y;
    temp_153 = fma(temp_98, temp_152, temp_98);
    // 0x000590: 0x49A0071C23270D06 Ffma
    temp_154 = fma(temp_129, fp_c7.data[140].z, temp_110);
    // 0x000598: 0x5C58300000A70C08 Fadd
    temp_155 = 0.0 - temp_142;
    temp_156 = temp_144 + temp_155;
    // 0x0005A8: 0x49A101140317020C Ffma
    temp_157 = 0.0 - fp_c5.data[12].y;
    temp_158 = fma(temp_98, temp_157, temp_98);
    // 0x0005B0: 0x49A0089C23270707 Ffma
    temp_159 = fma(temp_149, fp_c7.data[140].z, temp_140);
    // 0x0005B8: 0x4C58101402C70303 Fadd
    temp_160 = temp_147 + fp_c5.data[11].x;
    // 0x0005C8: 0x4C58101403070B0E Fadd
    temp_161 = temp_151 + fp_c5.data[12].x;
    // 0x0005D0: 0x4C58101402D7090D Fadd
    temp_162 = temp_153 + fp_c5.data[11].y;
    // 0x0005D8: 0x49A0051C23270808 Ffma
    temp_163 = fma(temp_156, fp_c7.data[140].z, temp_142);
    // 0x0005E8: 0x5C68100002A71318 Fmul
    temp_164 = temp_118 * temp_145;
    // 0x0005F0: 0x49A1011402E7020A Ffma
    temp_165 = 0.0 - fp_c5.data[11].z;
    temp_166 = fma(temp_98, temp_165, temp_98);
    // 0x0005F8: 0x5C68100002A71413 Fmul
    temp_167 = temp_120 * temp_145;
    // 0x000608: 0x49A1011403270202 Ffma
    temp_168 = 0.0 - fp_c5.data[12].z;
    temp_169 = fma(temp_98, temp_168, temp_98);
    // 0x000610: 0x4C58101403170C0C Fadd
    temp_170 = temp_158 + fp_c5.data[12].y;
    // 0x000618: 0x5C68100002A7150B Fmul
    temp_171 = temp_122 * temp_145;
    // 0x000628: 0x5C68100001872711 Fmul
    temp_172 = temp_112 * temp_164;
    // 0x000630: 0x4C58101402E70A0A Fadd
    temp_173 = temp_166 + fp_c5.data[11].z;
    // 0x000638: 0x5C68100001871215 Fmul
    temp_174 = temp_65 * temp_164;
    // 0x000648: 0x5C59100000E70309 Fadd
    temp_175 = 0.0 - temp_160;
    temp_176 = temp_175 + temp_161;
    // 0x000650: 0x5C59100000C70D0E Fadd
    temp_177 = 0.0 - temp_162;
    temp_178 = temp_177 + temp_170;
    // 0x000658: 0x386013BF80072828 Fmnmx
    temp_179 = min(temp_139, 1.0);
    // 0x000668: 0x59A0088001372614 Ffma
    temp_180 = fma(temp_114, temp_167, temp_172);
    // 0x000670: 0x4C58101403270211 Fadd
    temp_181 = temp_169 + fp_c5.data[12].z;
    // 0x000678: 0x4C69101805C71802 Fmul
    temp_182 = 0.0 - fp_c6.data[23].x;
    temp_183 = temp_164 * temp_182;
    // 0x000688: 0x3868104180070518 Fmul
    temp_184 = temp_66 * 16.0;
    // 0x000690: 0x49A0069C23270E0E Ffma
    temp_185 = fma(temp_178, fp_c7.data[140].z, temp_162);
    // 0x000698: 0x5CA8148001870A18 F2f
    temp_186 = floor(temp_184);
    // 0x0006A8: 0x49A0019C23270909 Ffma
    temp_187 = fma(temp_176, fp_c7.data[140].z, temp_160);
    // 0x0006B0: 0x5C59100001170A11 Fadd
    temp_188 = 0.0 - temp_173;
    temp_189 = temp_188 + temp_181;
    // 0x0006B8: 0x01040DF760C7F00C Mov32i
    // 0x0006C8: 0x59A40A0000B71A17 Ffma
    temp_190 = fma(temp_116, temp_171, temp_180);
    temp_191 = clamp(temp_190, 0.0, 1.0);
    // 0x0006D0: 0x49A1011805D7130D Ffma
    temp_192 = 0.0 - fp_c6.data[23].y;
    temp_193 = fma(temp_167, temp_192, temp_183);
    // 0x0006D8: 0x5C68100002771203 Fmul
    temp_194 = temp_65 * temp_112;
    // 0x0006E8: 0x59A00A8001370015 Ffma
    temp_195 = fma(temp_64, temp_167, temp_174);
    // 0x0006F0: 0x49A0051C2327110A Ffma
    temp_196 = fma(temp_189, fp_c7.data[140].z, temp_173);
    // 0x0006F8: 0x3868104110070411 Fmul
    temp_197 = temp_75 * 9.0;
    // 0x000708: 0x4C60178400372802 Fmnmx
    temp_198 = max(temp_179, fp_c1.data[0].w);
    // 0x000710: 0x5CA8148001170A19 F2f
    temp_199 = floor(temp_197);
    // 0x000718: 0x0103F0000007F004 Mov32i
    // 0x000728: 0x49A2060400271714 Ffma
    temp_200 = fma(temp_191, fp_c1.data[0].z, -6.98316002);
    // 0x000730: 0x59A0018002670003 Ffma
    temp_201 = fma(temp_64, temp_114, temp_194);
    // 0x000738: 0x4896038400172424 Fset
    temp_202 = temp_6 >= fp_c1.data[0].y;
    temp_203 = temp_202 ? 1.0 : 0.0;
    // 0x000748: 0x4C69101805C71205 Fmul
    temp_204 = 0.0 - fp_c6.data[23].x;
    temp_205 = temp_65 * temp_204;
    // 0x000750: 0x51A4010400370230 Ffma
    temp_206 = fma(temp_198, temp_198, fp_c1.data[0].w);
    temp_207 = clamp(temp_206, 0.0, 1.0);
    // 0x000758: 0x32A0023F00070232 Ffma
    temp_208 = fma(temp_198, 0.5, 0.5);
    // 0x000768: 0x5C68100001471717 Fmul
    temp_209 = temp_191 * temp_200;
    // 0x000770: 0x59A4018001A71603 Ffma
    temp_210 = fma(temp_63, temp_116, temp_201);
    temp_211 = clamp(temp_210, 0.0, 1.0);
    // 0x000778: 0x5C68100000E72404 Fmul
    temp_212 = temp_203 * temp_185;
    // 0x000788: 0x59A40A8000B71614 Ffma
    temp_213 = fma(temp_63, temp_171, temp_195);
    temp_214 = clamp(temp_213, 0.0, 1.0);
    // 0x000790: 0x5C68100003073031 Fmul
    temp_215 = temp_207 * temp_207;
    // 0x000798: 0x32A00C4180071918 Ffma
    temp_216 = fma(temp_199, 16.0, temp_186);
    // 0x0007A8: 0x49A1029805D70005 Ffma
    temp_217 = 0.0 - fp_c6.data[23].y;
    temp_218 = fma(temp_64, temp_217, temp_205);
    // 0x0007B0: 0x5CB0118001870A33 F2i
    temp_219 = trunc(temp_216);
    temp_220 = max(temp_219, 0.0);
    temp_221 = uint(temp_220);
    // 0x0007B8: 0x5C68120003273232 Fmul
    temp_222 = temp_208 * 0.5;
    temp_223 = temp_222 * temp_208;
    // 0x0007C8: 0x4C58301407B70413 Fadd
    temp_224 = 0.0 - fp_c5.data[30].w;
    temp_225 = temp_212 + temp_224;
    // 0x0007D0: 0x49A5069805E70B0D Ffma
    temp_226 = 0.0 - fp_c6.data[23].z;
    temp_227 = fma(temp_171, temp_226, temp_193);
    temp_228 = clamp(temp_227, 0.0, 1.0);
    // 0x0007D8: 0x59A20A0003171415 Ffma
    temp_229 = 0.0 - temp_214;
    temp_230 = fma(temp_214, temp_215, temp_229);
    // 0x0007E8: 0x5C68100002470606 Fmul
    temp_231 = temp_154 * temp_203;
    // 0x0007F0: 0x49A5029805E71611 Ffma
    temp_232 = 0.0 - fp_c6.data[23].z;
    temp_233 = fma(temp_63, temp_232, temp_218);
    temp_234 = clamp(temp_233, 0.0, 1.0);
    // 0x0007F8: 0xEF5400000007FF06 Stl
    local_memory[0] = floatBitsToUint(temp_231);
    // 0x000808: 0x59A101800327030B Ffma
    temp_235 = 0.0 - temp_223;
    temp_236 = fma(temp_211, temp_235, temp_211);
    // 0x000810: 0x5C9000800177000E Rro
    // 0x000818: 0x51A0099407B72905 Ffma
    temp_237 = fma(temp_87, temp_225, fp_c5.data[30].w);
    // 0x000828: 0x5080000000270E0E Mufu
    temp_238 = exp2(temp_209);
    // 0x000830: 0x51A00A8400571415 Ffma
    temp_239 = fma(temp_214, temp_230, fp_c1.data[1].y);
    // 0x000838: 0x3848000000873335 Shl
    temp_240 = int(temp_221) << 8;
    // 0x000848: 0x5080000000471515 Mufu
    temp_241 = 1.0 / temp_239;
    // 0x000850: 0x59A1088003271113 Ffma
    temp_242 = 0.0 - temp_223;
    temp_243 = fma(temp_234, temp_242, temp_234);
    // 0x000858: 0xEF94008200473535 Ldc
    temp_244 = temp_240 + 0x2004;
    temp_245 = uint(temp_244) >> 2;
    temp_246 = temp_245 >> 2;
    temp_247 = int(temp_245) & 3;
    temp_248 = fp_c8.data[int(temp_246)][temp_247];
    // 0x000868: 0x5C58100000B7320B Fadd
    temp_249 = temp_223 + temp_236;
    // 0x000870: 0x49A2060400270D0C Ffma
    temp_250 = fma(temp_228, fp_c1.data[0].z, -6.98316002);
    // 0x000878: 0x5080000000470B0B Mufu
    temp_251 = 1.0 / temp_249;
    // 0x000888: 0x5C68100002470706 Fmul
    temp_252 = temp_159 * temp_203;
    // 0x000890: 0x5C68100000972407 Fmul
    temp_253 = temp_203 * temp_187;
    // 0x000898: 0x5C58100001373213 Fadd
    temp_254 = temp_223 + temp_243;
    // 0x0008A8: 0x4C68101801571114 Fmul
    temp_255 = temp_234 * fp_c6.data[5].y;
    // 0x0008B0: 0x5080000000471313 Mufu
    temp_256 = 1.0 / temp_254;
    // 0x0008B8: 0x5C68100000C70D0C Fmul
    temp_257 = temp_228 * temp_250;
    // 0x0008C8: 0x59A1070000E70517 Ffma
    temp_258 = 0.0 - temp_238;
    temp_259 = fma(temp_237, temp_258, temp_238);
    // 0x0008D0: 0x5C68100000A72409 Fmul
    temp_260 = temp_203 * temp_196;
    // 0x0008D8: 0x5C6810000157300D Fmul
    temp_261 = temp_207 * temp_241;
    // 0x0008E8: 0x4C68101801671115 Fmul
    temp_262 = temp_234 * fp_c6.data[5].z;
    // 0x0008F0: 0x1E23EA2F98371414 Fmul32i
    temp_263 = temp_255 * 0.318309873;
    // 0x0008F8: 0x385D103F80070F0F Fadd
    temp_264 = 0.0 - temp_88;
    temp_265 = temp_264 + 1.0;
    temp_266 = clamp(temp_265, 0.0, 1.0);
    // 0x000908: 0x5C90008000C7002A Rro
    // 0x000910: 0x3868103F00070B34 Fmul
    temp_267 = temp_251 * 0.5;
    // 0x000918: 0x5080000000272A2A Mufu
    temp_268 = exp2(temp_257);
    // 0x000928: 0x4C58301407B7070B Fadd
    temp_269 = 0.0 - fp_c5.data[30].w;
    temp_270 = temp_253 + temp_269;
    // 0x000930: 0x5C58100001770517 Fadd
    temp_271 = temp_237 + temp_259;
    // 0x000938: 0x4C58301407B7090C Fadd
    temp_272 = 0.0 - fp_c5.data[30].w;
    temp_273 = temp_260 + temp_272;
    // 0x000948: 0x5C68100000D70D0D Fmul
    temp_274 = temp_261 * temp_261;
    // 0x000950: 0x1E23EA2F9837151C Fmul32i
    temp_275 = temp_262 * 0.318309873;
    // 0x000958: 0x5C68100001373413 Fmul
    temp_276 = temp_267 * temp_256;
    // 0x000968: 0x51A0059407B7290B Ffma
    temp_277 = fma(temp_87, temp_270, fp_c5.data[30].w);
    // 0x000970: 0x59A10A000177140A Ffma
    temp_278 = 0.0 - temp_271;
    temp_279 = fma(temp_263, temp_278, temp_263);
    // 0x000978: 0x51A0061407B7290C Ffma
    temp_280 = fma(temp_87, temp_273, fp_c5.data[30].w);
    // 0x000988: 0x4C98079808A70014 Mov
    // 0x000990: 0x4C68101801471117 Fmul
    temp_281 = temp_234 * fp_c6.data[5].x;
    // 0x000998: 0x5C68100001370D1B Fmul
    temp_282 = temp_274 * temp_276;
    // 0x0009A8: 0x59A1150002A70B0D Ffma
    temp_283 = 0.0 - temp_268;
    temp_284 = fma(temp_277, temp_283, temp_268);
    // 0x0009B0: 0x59A1150002A70513 Ffma
    temp_285 = 0.0 - temp_268;
    temp_286 = fma(temp_237, temp_285, temp_268);
    // 0x0009B8: 0x59A1070000E70C15 Ffma
    temp_287 = 0.0 - temp_238;
    temp_288 = fma(temp_280, temp_287, temp_238);
    // 0x0009C8: 0x4C68101808771414 Fmul
    temp_289 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x0009D0: 0x59A1150002A70C2A Ffma
    temp_290 = 0.0 - temp_268;
    temp_291 = fma(temp_280, temp_290, temp_268);
    // 0x0009D8: 0x1E23EA2F98371719 Fmul32i
    temp_292 = temp_281 * 0.318309873;
    // 0x0009E8: 0x5C58100000D70B18 Fadd
    temp_293 = temp_277 + temp_284;
    // 0x0009F0: 0x5C58100001370517 Fadd
    temp_294 = temp_237 + temp_286;
    // 0x0009F8: 0x5C58100001570C0D Fadd
    temp_295 = temp_280 + temp_288;
    // 0x000A08: 0x51A00F1801471413 Ffma
    temp_296 = fma(temp_289, temp_81, fp_c6.data[5].x);
    // 0x000A10: 0x51A00F9801571415 Ffma
    temp_297 = fma(temp_289, temp_82, fp_c6.data[5].y);
    // 0x000A18: 0x5C58100002A70C2A Fadd
    temp_298 = temp_280 + temp_291;
    // 0x000A28: 0x51A0111801671414 Ffma
    temp_299 = fma(temp_289, temp_83, fp_c6.data[5].z);
    // 0x000A30: 0x5C68100001B7112E Fmul
    temp_300 = temp_234 * temp_282;
    // 0x000A38: 0x59A1070000E70B0E Ffma
    temp_301 = 0.0 - temp_238;
    temp_302 = fma(temp_277, temp_301, temp_238);
    // 0x000A48: 0x5C68100001871313 Fmul
    temp_303 = temp_296 * temp_293;
    // 0x000A50: 0x5C68100001771515 Fmul
    temp_304 = temp_297 * temp_294;
    // 0x000A58: 0x5B6603800FF73507 Isetp
    temp_305 = floatBitsToUint(temp_248) <= 0u;
    // 0x000A68: 0x5C68100002A71414 Fmul
    temp_306 = temp_299 * temp_298;
    // 0x000A70: 0x49A207980AC70F11 Ffma
    temp_307 = 0.0 - temp_266;
    temp_308 = fma(temp_266, fp_c6.data[43].x, temp_307);
    // 0x000A78: 0x49A207980AE70F18 Ffma
    temp_309 = 0.0 - temp_266;
    temp_310 = fma(temp_266, fp_c6.data[43].z, temp_309);
    // 0x000A88: 0x5C68100002E7132C Fmul
    temp_311 = temp_303 * temp_300;
    // 0x000A90: 0x5C68100002E71515 Fmul
    temp_312 = temp_304 * temp_300;
    // 0x000A98: 0x5C58100000E70B0E Fadd
    temp_313 = temp_277 + temp_302;
    // 0x000AA8: 0x5C68100002E7142E Fmul
    temp_314 = temp_306 * temp_300;
    // 0x000AB0: 0x49A207980AD70F14 Ffma
    temp_315 = 0.0 - temp_266;
    temp_316 = fma(temp_266, fp_c6.data[43].y, temp_315);
    // 0x000AB8: 0x5C68100000371236 Fmul
    temp_317 = temp_65 * temp_211;
    // 0x000AC8: 0x5C6810000037002F Fmul
    temp_318 = temp_64 * temp_211;
    // 0x000AD0: 0x5C6810000037161B Fmul
    temp_319 = temp_63 * temp_211;
    // 0x000AD8: 0x3858103F80071111 Fadd
    temp_320 = temp_308 + 1.0;
    // 0x000AE8: 0x3858103F80071818 Fadd
    temp_321 = temp_310 + 1.0;
    // 0x000AF0: 0x3858103F8007142A Fadd
    temp_322 = temp_316 + 1.0;
    // 0x000AF8: 0x5C68100002470808 Fmul
    temp_323 = temp_163 * temp_203;
    // 0x000B08: 0x59A10E0000D71C0D Ffma
    temp_324 = 0.0 - temp_295;
    temp_325 = fma(temp_275, temp_324, temp_275);
    // 0x000B10: 0x59A10C8000E7190E Ffma
    temp_326 = 0.0 - temp_313;
    temp_327 = fma(temp_292, temp_326, temp_292);
    // 0x000B18: 0x32A213C000073636 Ffma
    temp_328 = 0.0 - temp_112;
    temp_329 = fma(temp_317, 2.0, temp_328);
    // 0x000B28: 0x32A2134000072F2F Ffma
    temp_330 = 0.0 - temp_114;
    temp_331 = fma(temp_318, 2.0, temp_330);
    // 0x000B30: 0x32A20D4000071B1B Ffma
    temp_332 = 0.0 - temp_116;
    temp_333 = fma(temp_319, 2.0, temp_332);
    // 0x000B38: 0x5C9807800FF7000F Mov
    // 0x000B48: 0x5C9807800FF70013 Mov
    // 0x000B50: 0x5C9807800FF70017 Mov
    // 0x000B58: 0x5C9807800FF7001C Mov
    // 0x000B68: 0x5C9807800FF7001D Mov
    // 0x000B70: 0x5C9807800FF70024 Mov
    // 0x000B78: 0x59A4088001170728 Ffma
    temp_334 = fma(temp_253, temp_320, temp_320);
    temp_335 = clamp(temp_334, 0.0, 1.0);
    // 0x000B88: 0x59A4150002A7042A Ffma
    temp_336 = fma(temp_212, temp_322, temp_322);
    temp_337 = clamp(temp_336, 0.0, 1.0);
    // 0x000B90: 0x59A40C000187092B Ffma
    temp_338 = fma(temp_260, temp_321, temp_321);
    temp_339 = clamp(temp_338, 0.0, 1.0);
    // 0x000B98: 0x1E23E22F98372C2C Fmul32i
    temp_340 = temp_311 * 0.159154937;
    // 0x000BA8: 0x1E23E22F9837152D Fmul32i
    temp_341 = temp_312 * 0.159154937;
    // 0x000BB0: 0x1E23E22F98372E2E Fmul32i
    temp_342 = temp_314 * 0.159154937;
    // 0x000BB8: 0xF0F800000000000F Sync
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
    temp_354 = 0.0;
    if (!temp_305)
    {
        // 0x000BC8: 0x5C9807800FF70037 Mov
        temp_355 = 0;
        do
        {
            // 0x000BD0: 0x5C18020003773338 Iscadd
            temp_357 = int(temp_221) << 4;
            temp_358 = temp_357 + temp_355;
            // 0x000BD8: 0xE003FF87CFF7FF3B Ipa
            // 0x000BE8: 0x1C00000000173737 Iadd32i
            temp_359 = temp_355 + 1;
            // 0x000BF0: 0xE003FF87CFF7FF3A Ipa
            // 0x000BF8: 0x3848000000473838 Shl
            temp_360 = temp_358 << 4;
            // 0x000C08: 0xE003FF87CFF7FF39 Ipa
            // 0x000C10: 0x5B6C03800357370F Isetp
            temp_356 = uint(temp_359) >= floatBitsToUint(temp_248);
            // 0x000C18: 0xE290000055800000 Ssy
            // 0x000C28: 0xEF94008200073838 Ldc
            temp_361 = temp_360 + 0x2000;
            temp_362 = uint(temp_361) >> 2;
            temp_363 = temp_362 >> 2;
            temp_364 = int(temp_362) & 3;
            temp_365 = fp_c8.data[int(temp_363)][temp_364];
            // 0x000C30: 0x5080000000473B3B Mufu
            // 0x000C38: 0x5080000000473A3A Mufu
            // 0x000C48: 0x5080000000473939 Mufu
            // 0x000C50: 0xE043FF8D03B7FF3B Ipa
            temp_366 = in_attr5.x;
            // 0x000C58: 0xE043FF8D43A7FF3A Ipa
            temp_367 = in_attr5.y;
            // 0x000C68: 0xE043FF8D8397FF39 Ipa
            temp_368 = in_attr5.z;
            // 0x000C70: 0x3848000000673838 Shl
            temp_369 = floatBitsToInt(temp_365) << 6;
            // 0x000C78: 0xEF95008001073810 Ldc
            temp_370 = temp_369 + 16;
            temp_371 = uint(temp_370) >> 2;
            temp_372 = temp_371 >> 2;
            temp_373 = int(temp_371) & 3;
            temp_374 = fp_c8.data[int(temp_372)][temp_373];
            temp_375 = int(temp_371) + 1;
            temp_376 = uint(temp_375) >> 2;
            temp_377 = temp_375 & 3;
            temp_378 = fp_c8.data[int(temp_376)][temp_377];
            // 0x000C88: 0xEF95008001873814 Ldc
            temp_379 = temp_369 + 24;
            temp_380 = uint(temp_379) >> 2;
            temp_381 = temp_380 >> 2;
            temp_382 = int(temp_380) & 3;
            temp_383 = fp_c8.data[int(temp_381)][temp_382];
            temp_384 = int(temp_380) + 1;
            temp_385 = uint(temp_384) >> 2;
            temp_386 = temp_384 & 3;
            temp_387 = fp_c8.data[int(temp_385)][temp_386];
            // 0x000C90: 0xEF95008002073818 Ldc
            temp_388 = temp_369 + 32;
            temp_389 = uint(temp_388) >> 2;
            temp_390 = temp_389 >> 2;
            temp_391 = int(temp_389) & 3;
            temp_392 = fp_c8.data[int(temp_390)][temp_391];
            temp_393 = int(temp_389) + 1;
            temp_394 = uint(temp_393) >> 2;
            temp_395 = temp_393 & 3;
            temp_396 = fp_c8.data[int(temp_394)][temp_395];
            // 0x000C98: 0x5C58300003B7103E Fadd
            temp_397 = 0.0 - temp_366;
            temp_398 = temp_374 + temp_397;
            // 0x000CA8: 0x5C58300003A7113C Fadd
            temp_399 = 0.0 - temp_367;
            temp_400 = temp_378 + temp_399;
            // 0x000CB0: 0x5C58300003971439 Fadd
            temp_401 = 0.0 - temp_368;
            temp_402 = temp_383 + temp_401;
            // 0x000CB8: 0x5C68100003E73E3A Fmul
            temp_403 = temp_398 * temp_398;
            // 0x000CC8: 0x59A11C800397153D Ffma
            temp_404 = 0.0 - temp_402;
            temp_405 = fma(temp_387, temp_404, temp_402);
            // 0x000CD0: 0xEF95008003873814 Ldc
            temp_406 = temp_369 + 56;
            temp_407 = uint(temp_406) >> 2;
            temp_408 = temp_407 >> 2;
            temp_409 = int(temp_407) & 3;
            temp_410 = fp_c8.data[int(temp_408)][temp_409];
            temp_411 = int(temp_407) + 1;
            temp_412 = uint(temp_411) >> 2;
            temp_413 = temp_411 & 3;
            temp_414 = fp_c8.data[int(temp_412)][temp_413];
            // 0x000CD8: 0x59A01D0003C73C3A Ffma
            temp_415 = fma(temp_400, temp_400, temp_403);
            // 0x000CE8: 0x59A01D0003D73D3F Ffma
            temp_416 = fma(temp_405, temp_405, temp_415);
            // 0x000CF0: 0x5080000000573F3B Mufu
            temp_417 = inversesqrt(temp_416);
            // 0x000CF8: 0x5080000000873F3F Mufu
            temp_418 = sqrt(temp_416);
            // 0x000D08: 0x5C68100003B73E10 Fmul
            temp_419 = temp_398 * temp_417;
            // 0x000D10: 0x5C68100003B73C11 Fmul
            temp_420 = temp_400 * temp_417;
            // 0x000D18: 0x5C68100003B73D3B Fmul
            temp_421 = temp_405 * temp_417;
            // 0x000D28: 0x5C69100001871010 Fmul
            temp_422 = 0.0 - temp_392;
            temp_423 = temp_419 * temp_422;
            // 0x000D30: 0xEF94008002873818 Ldc
            temp_424 = temp_369 + 40;
            temp_425 = uint(temp_424) >> 2;
            temp_426 = temp_425 >> 2;
            temp_427 = int(temp_425) & 3;
            temp_428 = fp_c8.data[int(temp_426)][temp_427];
            // 0x000D38: 0x59A1080001971119 Ffma
            temp_429 = 0.0 - temp_396;
            temp_430 = fma(temp_420, temp_429, temp_423);
            // 0x000D48: 0xEF95008003073810 Ldc
            temp_431 = temp_369 + 48;
            temp_432 = uint(temp_431) >> 2;
            temp_433 = temp_432 >> 2;
            temp_434 = int(temp_432) & 3;
            temp_435 = fp_c8.data[int(temp_433)][temp_434];
            temp_436 = int(temp_432) + 1;
            temp_437 = uint(temp_436) >> 2;
            temp_438 = temp_436 & 3;
            temp_439 = fp_c8.data[int(temp_437)][temp_438];
            // 0x000D50: 0x59A10C8001873B18 Ffma
            temp_440 = 0.0 - temp_428;
            temp_441 = fma(temp_421, temp_440, temp_430);
            // 0x000D58: 0x010404000007F019 Mov32i
            // 0x000D68: 0x59A4088003F7103F Ffma
            temp_442 = fma(temp_435, temp_418, temp_439);
            temp_443 = clamp(temp_442, 0.0, 1.0);
            // 0x000D70: 0x59A40A8001471814 Ffma
            temp_444 = fma(temp_441, temp_410, temp_414);
            temp_445 = clamp(temp_444, 0.0, 1.0);
            // 0x000D78: 0x33A00CC000073F18 Ffma
            temp_446 = fma(temp_443, -2.0, 3.0);
            // 0x000D88: 0x5C68100003F73F15 Fmul
            temp_447 = temp_443 * temp_443;
            // 0x000D90: 0x33A00CC000071419 Ffma
            temp_448 = fma(temp_445, -2.0, 3.0);
            // 0x000D98: 0x5C68100001471414 Fmul
            temp_449 = temp_445 * temp_445;
            // 0x000DA8: 0x5C68100001571815 Fmul
            temp_450 = temp_446 * temp_447;
            // 0x000DB0: 0x5C68100001971418 Fmul
            temp_451 = temp_449 * temp_448;
            // 0x000DB8: 0x39585042F0073914 Fadd
            temp_452 = abs(temp_402);
            temp_453 = temp_452 + -120.0;
            // 0x000DC8: 0x5C68100001571815 Fmul
            temp_454 = temp_451 * temp_450;
            // 0x000DD0: 0x1EABD4CCCCD71414 Fmul32i
            temp_455 = temp_453 * -0.0500000007;
            temp_456 = clamp(temp_455, 0.0, 1.0);
            // 0x000DD8: 0x5C68100001571414 Fmul
            temp_457 = temp_456 * temp_454;
            // 0x000DE8: 0x36247F9000171515 Xmad
            temp_458 = floatBitsToUint(temp_454) >> 16;
            temp_459 = int(temp_458) << 16;
            // 0x000DF0: 0x5BB383800FF71407 Fsetp
            temp_460 = temp_457 <= 0.0;
            // 0x000DF8: 0x7A05083C0F00FF15 Hadd2
            temp_355 = temp_359;
            temp_461 = uint(temp_459);
            temp_462 = temp_343;
            temp_463 = temp_344;
            temp_464 = temp_345;
            temp_465 = temp_346;
            temp_466 = temp_347;
            temp_467 = temp_348;
            if (temp_460)
            {
                temp_468 = unpackHalf2x16(uint(temp_459)).y;
                temp_469 = packHalf2x16(vec2(1.0, temp_468));
                temp_461 = temp_469;
            }
            // 0x000E08: 0x5D2103902FF71507 Hsetp2
            temp_470 = unpackHalf2x16(temp_461).x;
            temp_471 = temp_470 == 0.0;
            // 0x000E10: 0xF0F800000008000F Sync
            if (temp_471)
            {
                // 0x000E18: 0x5080000000471018 Mufu
                temp_472 = 1.0 / temp_435;
                // 0x000E28: 0x5C69100001871118 Fmul
                temp_473 = 0.0 - temp_472;
                temp_474 = temp_439 * temp_473;
                // 0x000E30: 0x5C60138001873939 Fmnmx
                temp_475 = min(temp_402, temp_474);
                // 0x000E38: 0x5C61178003971839 Fmnmx
                temp_476 = 0.0 - temp_474;
                temp_477 = max(temp_476, temp_475);
                // 0x000E48: 0x59A01D0003973918 Ffma
                temp_478 = fma(temp_477, temp_477, temp_415);
                // 0x000E50: 0xEF94008002C7383A Ldc
                temp_479 = temp_369 + 44;
                temp_480 = uint(temp_479) >> 2;
                temp_481 = temp_480 >> 2;
                temp_482 = int(temp_480) & 3;
                temp_483 = fp_c8.data[int(temp_481)][temp_482];
                // 0x000E58: 0x5080000000571810 Mufu
                temp_484 = inversesqrt(temp_478);
                // 0x000E68: 0x5080000000871818 Mufu
                temp_485 = sqrt(temp_478);
                // 0x000E70: 0x5C68100001073E3E Fmul
                temp_486 = temp_398 * temp_484;
                // 0x000E78: 0x5C68100001073C3C Fmul
                temp_487 = temp_400 * temp_484;
                // 0x000E88: 0x5C68100001073939 Fmul
                temp_488 = temp_477 * temp_484;
                // 0x000E90: 0x5C58100003E72719 Fadd
                temp_489 = temp_112 + temp_486;
                // 0x000E98: 0x5C58100003C7263B Fadd
                temp_490 = temp_114 + temp_487;
                // 0x000EA8: 0x5C58100003971A3D Fadd
                temp_491 = temp_116 + temp_488;
                // 0x000EB0: 0x5C68100003E7123F Fmul
                temp_492 = temp_65 * temp_486;
                // 0x000EB8: 0x5C68100001971910 Fmul
                temp_493 = temp_489 * temp_489;
                // 0x000EC8: 0x59A01F8003C7003F Ffma
                temp_494 = fma(temp_64, temp_487, temp_492);
                // 0x000ED0: 0x59A0080003B73B10 Ffma
                temp_495 = fma(temp_490, temp_490, temp_493);
                // 0x000ED8: 0x59A01F800397163F Ffma
                temp_496 = fma(temp_63, temp_488, temp_494);
                // 0x000EE8: 0x59A0080003D73D10 Ffma
                temp_497 = fma(temp_491, temp_491, temp_495);
                // 0x000EF0: 0x5080000000571015 Mufu
                temp_498 = inversesqrt(temp_497);
                // 0x000EF8: 0x5080000000473A3A Mufu
                temp_499 = 1.0 / temp_483;
                // 0x000F08: 0xEF95008000073810 Ldc
                temp_500 = uint(temp_369) >> 2;
                temp_501 = temp_500 >> 2;
                temp_502 = int(temp_500) & 3;
                temp_503 = fp_c8.data[int(temp_501)][temp_502];
                temp_504 = int(temp_500) + 1;
                temp_505 = uint(temp_504) >> 2;
                temp_506 = temp_504 & 3;
                temp_507 = fp_c8.data[int(temp_505)][temp_506];
                // 0x000F10: 0x5C68100001571919 Fmul
                temp_508 = temp_489 * temp_498;
                // 0x000F18: 0xEF94008000873838 Ldc
                temp_509 = temp_369 + 8;
                temp_510 = uint(temp_509) >> 2;
                temp_511 = temp_510 >> 2;
                temp_512 = int(temp_510) & 3;
                temp_513 = fp_c8.data[int(temp_511)][temp_512];
                // 0x000F28: 0x5C68100001573B3B Fmul
                temp_514 = temp_490 * temp_498;
                // 0x000F30: 0x5C68100001573D15 Fmul
                temp_515 = temp_491 * temp_498;
                // 0x000F38: 0x51A00C0400673A18 Ffma
                temp_516 = fma(temp_499, temp_485, fp_c1.data[1].z);
                // 0x000F48: 0x5C5C30000FF73F3A Fadd
                temp_517 = temp_496 + -0.0;
                temp_518 = clamp(temp_517, 0.0, 1.0);
                // 0x000F50: 0x5080000000471818 Mufu
                temp_519 = 1.0 / temp_516;
                // 0x000F58: 0x5C68100001973E3E Fmul
                temp_520 = temp_486 * temp_508;
                // 0x000F68: 0x5C68100001971219 Fmul
                temp_521 = temp_65 * temp_508;
                // 0x000F70: 0x59A01F0003B73C3E Ffma
                temp_522 = fma(temp_487, temp_514, temp_520);
                // 0x000F78: 0x59A00C8003B70019 Ffma
                temp_523 = fma(temp_64, temp_514, temp_521);
                // 0x000F88: 0x59A41F000157393E Ffma
                temp_524 = fma(temp_488, temp_515, temp_522);
                temp_525 = clamp(temp_524, 0.0, 1.0);
                // 0x000F90: 0x59A40C8001571619 Ffma
                temp_526 = fma(temp_63, temp_515, temp_523);
                temp_527 = clamp(temp_526, 0.0, 1.0);
                // 0x000F98: 0x01040DF760C7F015 Mov32i
                // 0x000FA8: 0x1E23FB333337183B Fmul32i
                temp_528 = temp_519 * 1.39999998;
                // 0x000FB0: 0x59A20C8001973139 Ffma
                temp_529 = 0.0 - temp_527;
                temp_530 = fma(temp_215, temp_527, temp_529);
                // 0x000FB8: 0x49A20A8400273E15 Ffma
                temp_531 = fma(temp_525, fp_c1.data[0].z, -6.98316002);
                // 0x000FC8: 0x5C68100003B73B3C Fmul
                temp_532 = temp_528 * temp_528;
                // 0x000FD0: 0x51A01C8400571939 Ffma
                temp_533 = fma(temp_527, temp_530, fp_c1.data[1].y);
                // 0x000FD8: 0x5C68100001573E15 Fmul
                temp_534 = temp_525 * temp_531;
                // 0x000FE8: 0x5080000000473939 Mufu
                temp_535 = 1.0 / temp_533;
                // 0x000FF0: 0x59A11D0003A73219 Ffma
                temp_536 = 0.0 - temp_518;
                temp_537 = fma(temp_223, temp_536, temp_518);
                // 0x000FF8: 0x59A11E0003C73F3C Ffma
                temp_538 = 0.0 - temp_532;
                temp_539 = fma(temp_496, temp_538, temp_532);
                // 0x001008: 0x5C9000800157003E Rro
                // 0x001010: 0x5C58100001973219 Fadd
                temp_540 = temp_223 + temp_537;
                // 0x001018: 0x5080000000273E3E Mufu
                temp_541 = exp2(temp_534);
                // 0x001028: 0x5C68100001071410 Fmul
                temp_542 = temp_457 * temp_503;
                // 0x001030: 0x5080000000471919 Mufu
                temp_543 = 1.0 / temp_540;
                // 0x001038: 0x5C68100001171411 Fmul
                temp_544 = temp_457 * temp_507;
                // 0x001048: 0x5C5C100003C73F3F Fadd
                temp_545 = temp_496 + temp_539;
                temp_546 = clamp(temp_545, 0.0, 1.0);
                // 0x001050: 0x5C68100003973015 Fmul
                temp_547 = temp_207 * temp_535;
                // 0x001058: 0x5C68100003871438 Fmul
                temp_548 = temp_457 * temp_513;
                // 0x001068: 0x5C68100001571539 Fmul
                temp_549 = temp_547 * temp_547;
                // 0x001070: 0x59A11F0003E70518 Ffma
                temp_550 = 0.0 - temp_541;
                temp_551 = fma(temp_237, temp_550, temp_541);
                // 0x001078: 0x59A11F0003E70B15 Ffma
                temp_552 = 0.0 - temp_541;
                temp_553 = fma(temp_277, temp_552, temp_541);
                // 0x001088: 0x5C68100001973414 Fmul
                temp_554 = temp_267 * temp_543;
                // 0x001090: 0x59A11F0003E70C3E Ffma
                temp_555 = 0.0 - temp_541;
                temp_556 = fma(temp_280, temp_555, temp_541);
                // 0x001098: 0x5C58100001870518 Fadd
                temp_557 = temp_237 + temp_551;
                // 0x0010A8: 0x5C58100001570B15 Fadd
                temp_558 = temp_277 + temp_553;
                // 0x0010B0: 0x5C68100001473914 Fmul
                temp_559 = temp_549 * temp_554;
                // 0x0010B8: 0x5C58100003E70C3E Fadd
                temp_560 = temp_280 + temp_556;
                // 0x0010C8: 0x5C68100001871119 Fmul
                temp_561 = temp_544 * temp_557;
                // 0x0010D0: 0x5C68100001571015 Fmul
                temp_562 = temp_542 * temp_558;
                // 0x0010D8: 0x5C68100001473A14 Fmul
                temp_563 = temp_518 * temp_559;
                // 0x0010E8: 0x5C68100003E7383E Fmul
                temp_564 = temp_548 * temp_560;
                // 0x0010F0: 0x5C68100003F71010 Fmul
                temp_565 = temp_542 * temp_546;
                // 0x0010F8: 0x5C68100003F71111 Fmul
                temp_566 = temp_544 * temp_546;
                // 0x001108: 0x5C68100003F73838 Fmul
                temp_567 = temp_548 * temp_546;
                // 0x001110: 0x5C68100001471919 Fmul
                temp_568 = temp_561 * temp_563;
                // 0x001118: 0x5C68100001471518 Fmul
                temp_569 = temp_562 * temp_563;
                // 0x001128: 0x5C68100001473E3E Fmul
                temp_570 = temp_564 * temp_563;
                // 0x001130: 0x49A007840087100F Ffma
                temp_571 = fma(temp_565, fp_c1.data[2].x, temp_343);
                // 0x001138: 0x49A0098400871113 Ffma
                temp_572 = fma(temp_566, fp_c1.data[2].x, temp_344);
                // 0x001148: 0x49A00B8400873817 Ffma
                temp_573 = fma(temp_567, fp_c1.data[2].x, temp_345);
                // 0x001150: 0x49A0120400771924 Ffma
                temp_574 = fma(temp_568, fp_c1.data[1].w, temp_346);
                // 0x001158: 0x49A00E840077181D Ffma
                temp_575 = fma(temp_569, fp_c1.data[1].w, temp_347);
                // 0x001168: 0x49A00E0400773E1C Ffma
                temp_576 = fma(temp_570, fp_c1.data[1].w, temp_348);
                // 0x001170: 0xF0F800000007000F Sync
                temp_462 = temp_571;
                temp_463 = temp_572;
                temp_464 = temp_573;
                temp_465 = temp_574;
                temp_466 = temp_575;
                temp_467 = temp_576;
            }
            // 0x001178: 0xE2400FFFA509000F Bra
            temp_343 = temp_462;
            temp_344 = temp_463;
            temp_345 = temp_464;
            temp_346 = temp_465;
            temp_347 = temp_466;
            temp_348 = temp_467;
            temp_349 = temp_462;
            temp_350 = temp_464;
            temp_351 = temp_463;
            temp_352 = temp_465;
            temp_353 = temp_466;
            temp_354 = temp_467;
        }
        while (!temp_356);
        // 0x001188: 0xF0F800000007000F Sync
    }
    // 0x001190: 0x5C62578000071210 Fmnmx
    temp_577 = abs(temp_65);
    temp_578 = abs(temp_64);
    temp_579 = max(temp_577, temp_578);
    // 0x001198: 0xE003FF87CFF7FF33 Ipa
    // 0x0011A8: 0x5C62578002F73611 Fmnmx
    temp_580 = abs(temp_329);
    temp_581 = abs(temp_331);
    temp_582 = max(temp_580, temp_581);
    // 0x0011B0: 0xEF4410000007FF38 Ldl
    temp_583 = uintBitsToFloat(local_memory[0]);
    // 0x0011B8: 0x38681040E0070234 Fmul
    temp_584 = temp_198 * 7.0;
    // 0x0011C8: 0x010000000017F018 Mov32i
    // 0x0011D0: 0x3868104080070227 Fmul
    temp_585 = temp_198 * 4.0;
    // 0x0011D8: 0x5C60578001071610 Fmnmx
    temp_586 = abs(temp_63);
    temp_587 = max(temp_586, temp_579);
    // 0x0011E8: 0x4C98079C0207003B Mov
    // 0x0011F0: 0x5080000000471015 Mufu
    temp_588 = 1.0 / temp_587;
    // 0x0011F8: 0x5C60578001171B11 Fmnmx
    temp_589 = abs(temp_333);
    temp_590 = max(temp_589, temp_582);
    // 0x001208: 0x5080000000471111 Mufu
    temp_591 = 1.0 / temp_590;
    // 0x001210: 0x5C69100001571616 Fmul
    temp_592 = 0.0 - temp_588;
    temp_593 = temp_63 * temp_592;
    // 0x001218: 0x5C68100001571214 Fmul
    temp_594 = temp_65 * temp_588;
    // 0x001228: 0x5080000000473333 Mufu
    // 0x001230: 0x5C68100001570015 Fmul
    temp_595 = temp_64 * temp_588;
    // 0x001238: 0x5C68100001173619 Fmul
    temp_596 = temp_329 * temp_591;
    // 0x001248: 0x5C68100001172F1A Fmul
    temp_597 = temp_331 * temp_591;
    // 0x001250: 0x5C69100001171B1B Fmul
    temp_598 = 0.0 - temp_591;
    temp_599 = temp_333 * temp_598;
    // 0x001258: 0xC0BA0163EFF71410 Tex
    temp_600 = textureLod(fp_t_tcb_16, vec3(temp_594, temp_595, temp_593), 0.0).xyz;
    temp_601 = temp_600.x;
    temp_602 = temp_600.y;
    temp_603 = temp_600.z;
    // 0x001268: 0x5C98078001670026 Mov
    // 0x001270: 0xC1BA0143F3471818 Tex
    temp_604 = textureLod(fp_t_tcb_14, vec4(temp_596, temp_597, temp_599, float(1)), temp_584).xyz;
    temp_605 = temp_604.x;
    temp_606 = temp_604.y;
    temp_607 = temp_604.z;
    // 0x001278: 0xD9A2018272671414 Texs
    temp_608 = textureLod(fp_t_tcb_18, vec3(temp_594, temp_595, temp_593), temp_585).xyz;
    temp_609 = temp_608.x;
    temp_610 = temp_608.y;
    temp_611 = temp_608.z;
    // 0x001288: 0xE043FF910337FF30 Ipa
    temp_612 = in_attr9.x;
    // 0x001290: 0xE043FF914337FF31 Ipa
    temp_613 = in_attr9.y;
    // 0x001298: 0xE043FF918337FF32 Ipa
    temp_614 = in_attr9.z;
    // 0x0012A8: 0xDEBA0000C3B73030 TexB
    temp_615 = texture(fp_t_cb7_20, vec3(temp_612, temp_613, temp_614)).x;
    // 0x0012B0: 0x3859103F80070202 Fadd
    temp_616 = 0.0 - temp_198;
    temp_617 = temp_616 + 1.0;
    // 0x0012B8: 0x010410676C97F035 Mov32i
    // 0x0012C8: 0x3859103F80070336 Fadd
    temp_618 = 0.0 - temp_211;
    temp_619 = temp_618 + 1.0;
    // 0x0012D0: 0x0103E2CD9E87F037 Mov32i
    // 0x0012D8: 0x508000000037361B Mufu
    temp_620 = log2(temp_619);
    // 0x0012E8: 0x1E23E468DB97032F Fmul32i
    temp_621 = temp_211 * 0.193900004;
    // 0x0012F0: 0x5C68100000270202 Fmul
    temp_622 = temp_617 * temp_617;
    // 0x0012F8: 0x49A01A8400D70335 Ffma
    temp_623 = fma(temp_211, fp_c1.data[3].y, 8.40400028);
    // 0x001308: 0x4C68101809073616 Fmul
    temp_624 = temp_619 * fp_c6.data[36].x;
    // 0x001310: 0x49A007180A170F0E Ffma
    temp_625 = fma(temp_349, fp_c6.data[40].y, temp_327);
    // 0x001318: 0x5080400000371626 Mufu
    temp_626 = abs(temp_624);
    temp_627 = log2(temp_626);
    // 0x001328: 0x49A006980A17170D Ffma
    temp_628 = fma(temp_350, fp_c6.data[40].y, temp_325);
    // 0x001330: 0x5C68100000270202 Fmul
    temp_629 = temp_622 * temp_622;
    // 0x001338: 0x51A01A8400E70335 Ffma
    temp_630 = fma(temp_211, temp_623, fp_c1.data[3].z);
    // 0x001348: 0x49A005180A17130A Ffma
    temp_631 = fma(temp_351, fp_c6.data[40].y, temp_279);
    // 0x001350: 0xE04BFF904337FF13 Ipa
    temp_632 = in_attr8.y;
    temp_633 = clamp(temp_632, 0.0, 1.0);
    // 0x001358: 0x49A016980A17242D Ffma
    temp_634 = fma(temp_352, fp_c6.data[40].y, temp_341);
    // 0x001368: 0x0103F0000007F032 Mov32i
    // 0x001370: 0x4C68101808971B1B Fmul
    temp_635 = temp_620 * fp_c6.data[34].y;
    // 0x001378: 0x49A21B840107020F Ffma
    temp_636 = fma(temp_629, fp_c1.data[4].x, -0.168799996);
    // 0x001388: 0x49A017840097022F Ffma
    temp_637 = fma(temp_629, fp_c1.data[2].y, temp_621);
    // 0x001390: 0x51A01A8400F70335 Ffma
    temp_638 = fma(temp_211, temp_630, fp_c1.data[3].w);
    // 0x001398: 0x4C98079809670024 Mov
    // 0x0013A8: 0x49A016180A171D2C Ffma
    temp_639 = fma(temp_353, fp_c6.data[40].y, temp_340);
    // 0x0013B0: 0x4C68101809172626 Fmul
    temp_640 = temp_627 * fp_c6.data[36].y;
    // 0x0013B8: 0x5C68100000F70217 Fmul
    temp_641 = temp_629 * temp_636;
    // 0x0013C8: 0x088BF05D63972F31 Fadd32i
    temp_642 = temp_637 + -0.522800028;
    // 0x0013D0: 0x32A0193F0007000F Ffma
    temp_643 = fma(temp_64, 0.5, 0.5);
    // 0x0013D8: 0x4C98079800970000 Mov
    // 0x0013E8: 0x49A017180A171C2E Ffma
    temp_644 = fma(temp_354, fp_c6.data[40].y, temp_342);
    // 0x0013F0: 0x4C98079800A7001D Mov
    // 0x0013F8: 0x5C60138001773516 Fmnmx
    temp_645 = min(temp_638, temp_641);
    // 0x001408: 0x5C68100003170317 Fmul
    temp_646 = temp_211 * temp_642;
    // 0x001410: 0x0104066978D7F003 Mov32i
    // 0x001418: 0x4C9807980047001C Mov
    // 0x001428: 0x5C90008002670026 Rro
    // 0x001430: 0x4C58101408172424 Fadd
    temp_647 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001438: 0x5084000000272626 Mufu
    temp_648 = exp2(temp_640);
    temp_649 = clamp(temp_648, 0.0, 1.0);
    // 0x001448: 0x5C90008001B7001B Rro
    // 0x001450: 0x49A2018400A70203 Ffma
    temp_650 = fma(temp_629, fp_c1.data[2].z, -3.60299993);
    // 0x001458: 0x5084000000271B1B Mufu
    temp_651 = exp2(temp_635);
    temp_652 = clamp(temp_651, 0.0, 1.0);
    // 0x001468: 0x4C59101800570000 Fadd
    temp_653 = 0.0 - fp_c6.data[2].y;
    temp_654 = temp_653 + fp_c6.data[1].y;
    // 0x001470: 0x4C59101800671D1D Fadd
    temp_655 = 0.0 - fp_c6.data[2].z;
    temp_656 = temp_655 + fp_c6.data[1].z;
    // 0x001478: 0x4C58301800871C1C Fadd
    temp_657 = 0.0 - fp_c6.data[2].x;
    temp_658 = fp_c6.data[1].x + temp_657;
    // 0x001488: 0x010404000007F032 Mov32i
    // 0x001490: 0x51A0018400B70231 Ffma
    temp_659 = fma(temp_629, temp_650, fp_c1.data[2].w);
    // 0x001498: 0x51A0079800970003 Ffma
    temp_660 = fma(temp_654, temp_643, fp_c6.data[2].y);
    // 0x0014A8: 0x51A0079800A71D00 Ffma
    temp_661 = fma(temp_656, temp_643, fp_c6.data[2].z);
    // 0x0014B0: 0x51A0079800871C0F Ffma
    temp_662 = fma(temp_658, temp_643, fp_c6.data[2].x);
    // 0x0014B8: 0x5C68100002672424 Fmul
    temp_663 = temp_647 * temp_649;
    // 0x0014C8: 0x386C10424807051D Fmul
    temp_664 = temp_237 * 50.0;
    temp_665 = clamp(temp_664, 0.0, 1.0);
    // 0x0014D0: 0x59A00B8003170217 Ffma
    temp_666 = fma(temp_629, temp_659, temp_646);
    // 0x0014D8: 0x5C5C30000FF71626 Fadd
    temp_667 = temp_645 + -0.0;
    temp_668 = clamp(temp_667, 0.0, 1.0);
    // 0x0014E8: 0x33A019400007131C Ffma
    temp_669 = fma(temp_633, -2.0, 3.0);
    // 0x0014F0: 0x5C68100001371302 Fmul
    temp_670 = temp_633 * temp_633;
    // 0x0014F8: 0x4C68101808C72413 Fmul
    temp_671 = temp_663 * fp_c6.data[35].x;
    // 0x001508: 0x4C98079808670031 Mov
    // 0x001510: 0x4C5C100400C71717 Fadd
    temp_672 = temp_666 + fp_c1.data[3].x;
    temp_673 = clamp(temp_672, 0.0, 1.0);
    // 0x001518: 0x4C68101808871B1B Fmul
    temp_674 = temp_652 * fp_c6.data[34].x;
    // 0x001528: 0x5C68100002671D32 Fmul
    temp_675 = temp_665 * temp_668;
    // 0x001530: 0x5C68100001C70202 Fmul
    temp_676 = temp_670 * temp_669;
    // 0x001538: 0x4C68101808D72416 Fmul
    temp_677 = temp_663 * fp_c6.data[35].y;
    // 0x001548: 0x4C68101808E72424 Fmul
    temp_678 = temp_663 * fp_c6.data[35].z;
    // 0x001550: 0x5C5830000267171D Fadd
    temp_679 = 0.0 - temp_668;
    temp_680 = temp_673 + temp_679;
    // 0x001558: 0x49A1099408271317 Ffma
    temp_681 = 0.0 - fp_c5.data[32].z;
    temp_682 = fma(temp_671, temp_681, temp_671);
    // 0x001568: 0x51A0189808671B1C Ffma
    temp_683 = fma(temp_674, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001570: 0x49A016140827132C Ffma
    temp_684 = fma(temp_671, fp_c5.data[32].z, temp_639);
    // 0x001578: 0x49A10B140827161B Ffma
    temp_685 = 0.0 - fp_c5.data[32].z;
    temp_686 = fma(temp_677, temp_685, temp_677);
    // 0x001588: 0x49A017140827242E Ffma
    temp_687 = fma(temp_678, fp_c5.data[32].z, temp_644);
    // 0x001590: 0x49A1121408272424 Ffma
    temp_688 = 0.0 - fp_c5.data[32].z;
    temp_689 = fma(temp_678, temp_688, temp_678);
    // 0x001598: 0x5C58100001770E17 Fadd
    temp_690 = temp_625 + temp_682;
    // 0x0015A8: 0x4C9807980B47000E Mov
    // 0x0015B0: 0x59A0190001D70513 Ffma
    temp_691 = fma(temp_237, temp_680, temp_675);
    // 0x0015B8: 0x59A0190001D70B0B Ffma
    temp_692 = fma(temp_277, temp_680, temp_675);
    // 0x0015C8: 0x5C58100001B70A0A Fadd
    temp_693 = temp_631 + temp_686;
    // 0x0015D0: 0x5C58100002470D0D Fadd
    temp_694 = temp_628 + temp_689;
    // 0x0015D8: 0x49A016940827162D Ffma
    temp_695 = fma(temp_677, fp_c5.data[32].z, temp_634);
    // 0x0015E8: 0xF0F0000034370000 Depbar
    // 0x0015F0: 0x51A207180B472020 Ffma
    temp_696 = 0.0 - fp_c6.data[45].x;
    temp_697 = fma(temp_90, fp_c6.data[45].x, temp_696);
    // 0x0015F8: 0x51A207180B472121 Ffma
    temp_698 = 0.0 - fp_c6.data[45].x;
    temp_699 = fma(temp_91, fp_c6.data[45].x, temp_698);
    // 0x001608: 0x51A207180B470101 Ffma
    temp_700 = 0.0 - fp_c6.data[45].x;
    temp_701 = fma(temp_92, fp_c6.data[45].x, temp_700);
    // 0x001610: 0xE043FF900337FF0E Ipa
    temp_702 = in_attr8.x;
    // 0x001618: 0x59A0190001D70C0C Ffma
    temp_703 = fma(temp_280, temp_680, temp_675);
    // 0x001628: 0xE043FF8C8337FF33 Ipa
    temp_704 = in_attr4.z;
    // 0x001630: 0x4C68101803770202 Fmul
    temp_705 = temp_676 * fp_c6.data[13].w;
    // 0x001638: 0xF0F0000034170000 Depbar
    // 0x001648: 0x49A0080400870F0F Ffma
    temp_706 = fma(temp_662, fp_c1.data[2].x, temp_601);
    // 0x001650: 0x49A0088400870311 Ffma
    temp_707 = fma(temp_660, fp_c1.data[2].x, temp_602);
    // 0x001658: 0x49A0090400870003 Ffma
    temp_708 = fma(temp_661, fp_c1.data[2].x, temp_603);
    // 0x001668: 0x4C68101808772300 Fmul
    temp_709 = temp_84 * fp_c6.data[33].w;
    // 0x001670: 0x49A00A1808571805 Ffma
    temp_710 = fma(temp_605, fp_c6.data[33].y, temp_609);
    // 0x001678: 0x49A0139808571A27 Ffma
    temp_711 = fma(temp_607, fp_c6.data[33].y, temp_611);
    // 0x001688: 0x59A2078001C71E1E Ffma
    temp_712 = 0.0 - temp_706;
    temp_713 = fma(temp_81, temp_683, temp_712);
    // 0x001690: 0x59A2088001C71F1F Ffma
    temp_714 = 0.0 - temp_707;
    temp_715 = fma(temp_82, temp_683, temp_714);
    // 0x001698: 0x59A2018001C7221C Ffma
    temp_716 = 0.0 - temp_708;
    temp_717 = fma(temp_83, temp_683, temp_716);
    // 0x0016A8: 0x59A0160000570B2C Ffma
    temp_718 = fma(temp_692, temp_710, temp_684);
    // 0x0016B0: 0x59A0170002770C0C Ffma
    temp_719 = fma(temp_703, temp_711, temp_687);
    // 0x0016B8: 0x59A0078000071E1E Ffma
    temp_720 = fma(temp_713, temp_709, temp_706);
    // 0x0016C8: 0x59A0088000071F1F Ffma
    temp_721 = fma(temp_715, temp_709, temp_707);
    // 0x0016D0: 0x59A0018000071C1C Ffma
    temp_722 = fma(temp_717, temp_709, temp_708);
    // 0x0016D8: 0x49A00A9808571900 Ffma
    temp_723 = fma(temp_606, fp_c6.data[33].y, temp_610);
    // 0x0016E8: 0x4C9807980297000B Mov
    // 0x0016F0: 0x5C58100001771E17 Fadd
    temp_724 = temp_720 + temp_690;
    // 0x0016F8: 0x5C58100000A71F0A Fadd
    temp_725 = temp_721 + temp_693;
    // 0x001708: 0x5C58100000D71C1C Fadd
    temp_726 = temp_722 + temp_694;
    // 0x001710: 0x59A0168000071313 Ffma
    temp_727 = fma(temp_691, temp_723, temp_695);
    // 0x001718: 0x51A0059802972121 Ffma
    temp_728 = fma(temp_699, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001728: 0x59A10B8001772905 Ffma
    temp_729 = 0.0 - temp_724;
    temp_730 = fma(temp_87, temp_729, temp_724);
    // 0x001730: 0x59A1050000A7290A Ffma
    temp_731 = 0.0 - temp_725;
    temp_732 = fma(temp_87, temp_731, temp_725);
    // 0x001738: 0x59A10E0001C72903 Ffma
    temp_733 = 0.0 - temp_726;
    temp_734 = fma(temp_87, temp_733, temp_726);
    // 0x001748: 0x59A0160000570705 Ffma
    temp_735 = fma(temp_253, temp_730, temp_718);
    // 0x001750: 0x59A0098000A70413 Ffma
    temp_736 = fma(temp_212, temp_732, temp_727);
    // 0x001758: 0x4C98079802870007 Mov
    // 0x001768: 0x59A006000037090C Ffma
    temp_737 = fma(temp_260, temp_734, temp_719);
    // 0x001770: 0x4C98079802A70004 Mov
    // 0x001778: 0x5C68100000572800 Fmul
    temp_738 = temp_335 * temp_735;
    // 0x001788: 0x5C68100001372A03 Fmul
    temp_739 = temp_337 * temp_736;
    // 0x001790: 0x51A0039802872005 Ffma
    temp_740 = fma(temp_697, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001798: 0x5C68100000C72B2B Fmul
    temp_741 = temp_339 * temp_737;
    // 0x0017A8: 0x51A0021802A70101 Ffma
    temp_742 = fma(temp_701, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0017B0: 0x49A507180BC7300E Ffma
    temp_743 = 0.0 - fp_c6.data[47].x;
    temp_744 = fma(temp_615, temp_743, temp_702);
    temp_745 = clamp(temp_744, 0.0, 1.0);
    // 0x0017B8: 0x49A0001406C73800 Ffma
    temp_746 = fma(temp_583, fp_c5.data[27].x, temp_738);
    // 0x0017C8: 0x5080000000370E0E Mufu
    temp_747 = log2(temp_745);
    // 0x0017D0: 0x49A0019406C70606 Ffma
    temp_748 = fma(temp_252, fp_c5.data[27].x, temp_739);
    // 0x0017D8: 0x49A0159406C70808 Ffma
    temp_749 = fma(temp_323, fp_c5.data[27].x, temp_741);
    // 0x0017E8: 0x5C58300000570003 Fadd
    temp_750 = 0.0 - temp_740;
    temp_751 = temp_746 + temp_750;
    // 0x0017F0: 0x5C58300002170604 Fadd
    temp_752 = 0.0 - temp_728;
    temp_753 = temp_748 + temp_752;
    // 0x0017F8: 0x49A002980BF70307 Ffma
    temp_754 = fma(temp_751, fp_c6.data[47].w, temp_740);
    // 0x001808: 0x5C58300000170803 Fadd
    temp_755 = 0.0 - temp_742;
    temp_756 = temp_749 + temp_755;
    // 0x001810: 0x4C68101803170E09 Fmul
    temp_757 = temp_747 * fp_c6.data[12].y;
    // 0x001818: 0x49A010980BF70404 Ffma
    temp_758 = fma(temp_753, fp_c6.data[47].w, temp_728);
    // 0x001828: 0x5C60178000770507 Fmnmx
    temp_759 = max(temp_740, temp_754);
    // 0x001830: 0x49A000980BF70303 Ffma
    temp_760 = fma(temp_756, fp_c6.data[47].w, temp_742);
    // 0x001838: 0x5C9000800097000A Rro
    // 0x001848: 0x49A2011803470205 Ffma
    temp_761 = 0.0 - temp_705;
    temp_762 = fma(temp_705, fp_c6.data[13].x, temp_761);
    // 0x001850: 0x5080000000270A0A Mufu
    temp_763 = exp2(temp_757);
    // 0x001858: 0x49A2011803570209 Ffma
    temp_764 = 0.0 - temp_705;
    temp_765 = fma(temp_705, fp_c6.data[13].y, temp_764);
    // 0x001868: 0x5C60178000472104 Fmnmx
    temp_766 = max(temp_728, temp_758);
    // 0x001870: 0x49A2011803670202 Ffma
    temp_767 = 0.0 - temp_705;
    temp_768 = fma(temp_705, fp_c6.data[13].z, temp_767);
    // 0x001878: 0x5C60178000370103 Fmnmx
    temp_769 = max(temp_742, temp_760);
    // 0x001888: 0x59A0038000570701 Ffma
    temp_770 = fma(temp_759, temp_762, temp_759);
    // 0x001890: 0x5C98078002570007 Mov
    // 0x001898: 0x59A0020000970409 Ffma
    temp_771 = fma(temp_766, temp_765, temp_766);
    // 0x0018A8: 0x4C58100C03873304 Fadd
    temp_772 = temp_704 + fp_c3.data[14].x;
    // 0x0018B0: 0x59A0018000270302 Ffma
    temp_773 = fma(temp_769, temp_768, temp_769);
    // 0x0018B8: 0x5C59100000170001 Fadd
    temp_774 = 0.0 - temp_746;
    temp_775 = temp_774 + temp_770;
    // 0x0018C8: 0x4C68101802B70A05 Fmul
    temp_776 = temp_763 * fp_c6.data[10].w;
    // 0x0018D0: 0x5C59100000970603 Fadd
    temp_777 = 0.0 - temp_748;
    temp_778 = temp_777 + temp_771;
    // 0x0018D8: 0x49A37F8C03C70404 Ffma
    temp_779 = 0.0 - fp_c3.data[15].x;
    temp_780 = fma(temp_772, temp_779, -0.0);
    // 0x0018E8: 0x5C59100000270802 Fadd
    temp_781 = 0.0 - temp_749;
    temp_782 = temp_781 + temp_773;
    // 0x0018F0: 0x59A0000000570100 Ffma
    temp_783 = fma(temp_775, temp_776, temp_746);
    // 0x0018F8: 0x59A0030000570301 Ffma
    temp_784 = fma(temp_778, temp_776, temp_748);
    // 0x001908: 0x5C98078002570003 Mov
    // 0x001910: 0x59A0040000570202 Ffma
    temp_785 = fma(temp_782, temp_776, temp_749);
    // 0x001918: 0x0103EC000007F005 Mov32i
    // 0x001928: 0x5C9807800FF70006 Mov
    // 0x001930: 0xE30000000007000F Exit
    out_attr0.x = temp_783;
    out_attr0.y = temp_784;
    out_attr0.z = temp_785;
    out_attr0.w = temp_7;
    out_attr1.x = temp_780;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = temp_7;
    return;
}
