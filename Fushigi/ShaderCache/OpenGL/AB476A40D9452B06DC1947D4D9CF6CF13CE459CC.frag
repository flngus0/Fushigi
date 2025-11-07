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
layout (binding = 2) uniform sampler2D fp_t_tcb_30;
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
    precise vec3 temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise vec3 temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise vec4 temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise vec3 temp_96;
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
    uint temp_112;
    precise float temp_113;
    precise float temp_114;
    int temp_115;
    int temp_116;
    uint temp_117;
    uint temp_118;
    int temp_119;
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
    bool temp_151;
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
    int temp_315;
    bool temp_316;
    int temp_317;
    int temp_318;
    int temp_319;
    int temp_320;
    int temp_321;
    uint temp_322;
    uint temp_323;
    int temp_324;
    precise float temp_325;
    precise float temp_326;
    precise float temp_327;
    int temp_328;
    int temp_329;
    uint temp_330;
    uint temp_331;
    int temp_332;
    precise float temp_333;
    int temp_334;
    uint temp_335;
    int temp_336;
    precise float temp_337;
    int temp_338;
    uint temp_339;
    uint temp_340;
    int temp_341;
    precise float temp_342;
    int temp_343;
    uint temp_344;
    int temp_345;
    precise float temp_346;
    int temp_347;
    uint temp_348;
    uint temp_349;
    int temp_350;
    precise float temp_351;
    int temp_352;
    uint temp_353;
    int temp_354;
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
    int temp_376;
    uint temp_377;
    uint temp_378;
    int temp_379;
    precise float temp_380;
    precise float temp_381;
    precise float temp_382;
    int temp_383;
    uint temp_384;
    uint temp_385;
    int temp_386;
    precise float temp_387;
    int temp_388;
    uint temp_389;
    int temp_390;
    precise float temp_391;
    precise float temp_392;
    precise float temp_393;
    precise float temp_394;
    precise float temp_395;
    precise float temp_396;
    int temp_397;
    uint temp_398;
    uint temp_399;
    int temp_400;
    precise float temp_401;
    int temp_402;
    uint temp_403;
    int temp_404;
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
    uint temp_417;
    int temp_418;
    bool temp_419;
    uint temp_420;
    precise float temp_421;
    precise float temp_422;
    precise float temp_423;
    precise float temp_424;
    precise float temp_425;
    precise float temp_426;
    precise float temp_427;
    uint temp_428;
    precise float temp_429;
    bool temp_430;
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
    int temp_458;
    uint temp_459;
    uint temp_460;
    int temp_461;
    precise float temp_462;
    precise float temp_463;
    precise float temp_464;
    precise float temp_465;
    precise float temp_466;
    precise float temp_467;
    precise float temp_468;
    uint temp_469;
    uint temp_470;
    int temp_471;
    precise float temp_472;
    int temp_473;
    uint temp_474;
    int temp_475;
    precise float temp_476;
    int temp_477;
    uint temp_478;
    uint temp_479;
    int temp_480;
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
    precise vec3 temp_560;
    precise float temp_561;
    precise float temp_562;
    precise float temp_563;
    precise float temp_564;
    precise float temp_565;
    precise float temp_566;
    precise float temp_567;
    precise float temp_568;
    precise vec3 temp_569;
    precise float temp_570;
    precise float temp_571;
    precise float temp_572;
    precise vec3 temp_573;
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
    // 0x000008: 0x4C98079407E70013 Mov
    // 0x000010: 0xE003FF87CFF7FF0C Ipa
    // 0x000018: 0x5080000000470C0C Mufu
    // 0x000028: 0xE043FF8E00C7FF06 Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E40C7FF07 Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xD830026FF0770600 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xE043FF8A00C7FF02 Ipa
    temp_5 = in_attr2.x;
    // 0x000050: 0xE043FF8A40C7FF03 Ipa
    temp_6 = in_attr2.y;
    // 0x000058: 0xE043FF8A80C7FF04 Ipa
    temp_7 = in_attr2.z;
    // 0x000068: 0xE043FF8900C7FF08 Ipa
    temp_8 = in_attr1.x;
    // 0x000070: 0xE043FF8940C7FF09 Ipa
    temp_9 = in_attr1.y;
    // 0x000078: 0xE043FF8800C7FF0E Ipa
    temp_10 = in_attr0.x;
    // 0x000088: 0xE043FF8980C7FF0A Ipa
    temp_11 = in_attr1.z;
    // 0x000090: 0xE043FF8840C7FF0F Ipa
    temp_12 = in_attr0.y;
    // 0x000098: 0xE043FF8880C7FF10 Ipa
    temp_13 = in_attr0.z;
    // 0x0000A8: 0x5C68100000270205 Fmul
    temp_14 = temp_5 * temp_5;
    // 0x0000B0: 0x5C6810000087080B Fmul
    temp_15 = temp_8 * temp_8;
    // 0x0000B8: 0x5C68100000E70E0D Fmul
    temp_16 = temp_10 * temp_10;
    // 0x0000C8: 0x59A0028000370305 Ffma
    temp_17 = fma(temp_6, temp_6, temp_14);
    // 0x0000D0: 0x59A005800097090B Ffma
    temp_18 = fma(temp_9, temp_9, temp_15);
    // 0x0000D8: 0x59A0068000F70F11 Ffma
    temp_19 = fma(temp_12, temp_12, temp_16);
    // 0x0000E8: 0x59A0028000470405 Ffma
    temp_20 = fma(temp_7, temp_7, temp_17);
    // 0x0000F0: 0x5080000000570505 Mufu
    temp_21 = inversesqrt(temp_20);
    // 0x0000F8: 0x59A0058000A70A0B Ffma
    temp_22 = fma(temp_11, temp_11, temp_18);
    // 0x000108: 0x5080000000570B0B Mufu
    temp_23 = inversesqrt(temp_22);
    // 0x000110: 0x59A0088001071011 Ffma
    temp_24 = fma(temp_13, temp_13, temp_19);
    // 0x000118: 0x5080000000571111 Mufu
    temp_25 = inversesqrt(temp_24);
    // 0x000128: 0x5C68100000570202 Fmul
    temp_26 = temp_5 * temp_21;
    // 0x000130: 0x5C68100000570303 Fmul
    temp_27 = temp_6 * temp_21;
    // 0x000138: 0x5C68100000570404 Fmul
    temp_28 = temp_7 * temp_21;
    // 0x000148: 0x5C68100000B7080D Fmul
    temp_29 = temp_8 * temp_23;
    // 0x000150: 0x5C68100000B70909 Fmul
    temp_30 = temp_9 * temp_23;
    // 0x000158: 0x5C68100000B70A0A Fmul
    temp_31 = temp_11 * temp_23;
    // 0x000168: 0x5C68100001170E0B Fmul
    temp_32 = temp_10 * temp_25;
    // 0x000170: 0x5C68100001170F08 Fmul
    temp_33 = temp_12 * temp_25;
    // 0x000178: 0x5C68100001171010 Fmul
    temp_34 = temp_13 * temp_25;
    // 0x000188: 0x5C68100000170105 Fmul
    temp_35 = temp_4 * temp_4;
    // 0x000190: 0x5C68100000170202 Fmul
    temp_36 = temp_26 * temp_4;
    // 0x000198: 0x5C68100000170303 Fmul
    temp_37 = temp_27 * temp_4;
    // 0x0001A8: 0x5C68100000170401 Fmul
    temp_38 = temp_28 * temp_4;
    // 0x0001B0: 0x59A0028000070005 Ffma
    temp_39 = fma(temp_3, temp_3, temp_35);
    // 0x0001B8: 0x59A0010000D70002 Ffma
    temp_40 = fma(temp_3, temp_29, temp_36);
    // 0x0001C8: 0x59A0018000970003 Ffma
    temp_41 = fma(temp_3, temp_30, temp_37);
    // 0x0001D0: 0xE003FF870FF7FF09 Ipa
    temp_42 = gl_FragCoord.x;
    temp_43 = support_buffer.render_scale[0];
    temp_44 = temp_42 / temp_43;
    // 0x0001D8: 0x59A0008000A70001 Ffma
    temp_45 = fma(temp_3, temp_31, temp_38);
    // 0x0001E8: 0xE003FF874FF7FF0A Ipa
    temp_46 = gl_FragCoord.y;
    temp_47 = support_buffer.render_scale[0];
    temp_48 = temp_46 / temp_47;
    // 0x0001F0: 0x385D103F80070505 Fadd
    temp_49 = 0.0 - temp_39;
    temp_50 = temp_49 + 1.0;
    temp_51 = clamp(temp_50, 0.0, 1.0);
    // 0x0001F8: 0x5080000000870505 Mufu
    temp_52 = sqrt(temp_51);
    // 0x000208: 0x59A0010000570B02 Ffma
    temp_53 = fma(temp_32, temp_52, temp_40);
    // 0x000210: 0x59A0018000570803 Ffma
    temp_54 = fma(temp_33, temp_52, temp_41);
    // 0x000218: 0x59A0008000571001 Ffma
    temp_55 = fma(temp_34, temp_52, temp_45);
    // 0x000228: 0x4C98079400270005 Mov
    // 0x000230: 0x4C9807940037000B Mov
    // 0x000238: 0x5C68100000270200 Fmul
    temp_56 = temp_53 * temp_53;
    // 0x000248: 0x4C68100C04A70909 Fmul
    temp_57 = temp_44 * fp_c3.data[18].z;
    // 0x000250: 0x59A0000000370300 Ffma
    temp_58 = fma(temp_54, temp_54, temp_56);
    // 0x000258: 0x4C68100C04B70A0A Fmul
    temp_59 = temp_48 * fp_c3.data[18].w;
    // 0x000268: 0x59A0000000170104 Ffma
    temp_60 = fma(temp_55, temp_55, temp_58);
    // 0x000270: 0x5080000000570404 Mufu
    temp_61 = inversesqrt(temp_60);
    // 0x000278: 0x5C68100000470112 Fmul
    temp_62 = temp_55 * temp_61;
    // 0x000288: 0x5C68100000470300 Fmul
    temp_63 = temp_54 * temp_61;
    // 0x000290: 0x5C68100000470210 Fmul
    temp_64 = temp_53 * temp_61;
    // 0x000298: 0x0103F0000007F002 Mov32i
    // 0x0002A8: 0x4C68100C00671201 Fmul
    temp_65 = temp_62 * fp_c3.data[1].z;
    // 0x0002B0: 0x49A0008C00570003 Ffma
    temp_66 = fma(temp_63, fp_c3.data[1].y, temp_65);
    // 0x0002B8: 0x4C68100C00271201 Fmul
    temp_67 = temp_62 * fp_c3.data[0].z;
    // 0x0002C8: 0x49A0018C00471003 Ffma
    temp_68 = fma(temp_64, fp_c3.data[1].x, temp_66);
    // 0x0002D0: 0x49A0008C00170001 Ffma
    temp_69 = fma(temp_63, fp_c3.data[0].y, temp_67);
    // 0x0002D8: 0x33A0013F00070304 Ffma
    temp_70 = fma(temp_68, -0.5, 0.5);
    // 0x0002E8: 0x4C69100C03E70303 Fmul
    temp_71 = 0.0 - fp_c3.data[15].z;
    temp_72 = temp_68 * temp_71;
    // 0x0002F0: 0x49A0008C00071001 Ffma
    temp_73 = fma(temp_64, fp_c3.data[0].x, temp_69);
    // 0x0002F8: 0x51A0029400470408 Ffma
    temp_74 = fma(temp_70, fp_c5.data[0].z, fp_c5.data[1].x);
    // 0x000308: 0x4C68101808B70303 Fmul
    temp_75 = temp_72 * fp_c6.data[34].w;
    // 0x000310: 0x51A005940057040B Ffma
    temp_76 = fma(temp_70, fp_c5.data[0].w, fp_c5.data[1].y);
    // 0x000318: 0x32A0013F00070105 Ffma
    temp_77 = fma(temp_73, 0.5, 0.5);
    // 0x000328: 0x4C68101808B70104 Fmul
    temp_78 = temp_73 * fp_c6.data[34].w;
    // 0x000330: 0x49A005040037031F Ffma
    temp_79 = fma(temp_75, fp_c1.data[0].w, temp_59);
    // 0x000338: 0xD822024030770606 Texs
    temp_80 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_81 = temp_80.x;
    temp_82 = temp_80.y;
    temp_83 = temp_80.z;
    // 0x000348: 0x49A005940017050D Ffma
    temp_84 = fma(temp_77, fp_c5.data[0].y, temp_76);
    // 0x000350: 0x49A0041400070508 Ffma
    temp_85 = fma(temp_77, fp_c5.data[0].x, temp_74);
    // 0x000358: 0x49A004840037041E Ffma
    temp_86 = fma(temp_78, fp_c1.data[0].w, temp_57);
    // 0x000368: 0xD822030080D70804 Texs
    temp_87 = texture(fp_t_tcb_30, vec2(temp_85, temp_84)).xyz;
    temp_88 = temp_87.x;
    temp_89 = temp_87.y;
    temp_90 = temp_87.z;
    // 0x000370: 0xD832022201F71E1E Texs
    temp_91 = texture(fp_t_tcb_22, vec2(temp_86, temp_79)).xyzw;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    temp_95 = temp_91.w;
    // 0x000378: 0xD822020010A7091C Texs
    temp_96 = texture(fp_t_tcb_20, vec2(temp_57, temp_59)).xyz;
    temp_97 = temp_96.x;
    temp_98 = temp_96.y;
    temp_99 = temp_96.z;
    // 0x000388: 0xE043FF8B00C7FF2E Ipa
    temp_100 = in_attr3.x;
    // 0x000390: 0xE043FF8B40C7FF2D Ipa
    temp_101 = in_attr3.y;
    // 0x000398: 0xE043FF8B80C7FF2C Ipa
    temp_102 = in_attr3.z;
    // 0x0003A8: 0x4C98079402C70017 Mov
    // 0x0003B0: 0xE2900000CA800000 Ssy
    // 0x0003B8: 0x3868104180070919 Fmul
    temp_103 = temp_57 * 16.0;
    // 0x0003C8: 0x3868104110070A1A Fmul
    temp_104 = temp_59 * 9.0;
    // 0x0003D0: 0x5CA8148001970A19 F2f
    temp_105 = floor(temp_103);
    // 0x0003D8: 0x4C98079402D70018 Mov
    // 0x0003E8: 0x5CA8148001A70A1A F2f
    temp_106 = floor(temp_104);
    // 0x0003F0: 0x4C59101403471715 Fadd
    temp_107 = 0.0 - fp_c5.data[11].x;
    temp_108 = temp_107 + fp_c5.data[13].x;
    // 0x0003F8: 0x4C98079402E70022 Mov
    // 0x000408: 0x01040DF760C7F01B Mov32i
    // 0x000410: 0x5C9807800FF70025 Mov
    // 0x000418: 0x5C9807800FF70026 Mov
    // 0x000428: 0x32A00CC180071A27 Ffma
    temp_109 = fma(temp_106, 16.0, temp_105);
    // 0x000430: 0x5CB0118002770A27 F2i
    temp_110 = trunc(temp_109);
    temp_111 = max(temp_110, 0.0);
    temp_112 = uint(temp_111);
    // 0x000438: 0x5C68100002E72E0B Fmul
    temp_113 = temp_100 * temp_100;
    // 0x000448: 0x59A0058002D72D0B Ffma
    temp_114 = fma(temp_101, temp_101, temp_113);
    // 0x000450: 0x3848000000872723 Shl
    temp_115 = int(temp_112) << 8;
    // 0x000458: 0xEF94008200472323 Ldc
    temp_116 = temp_115 + 0x2004;
    temp_117 = uint(temp_116) >> 2;
    temp_118 = temp_117 >> 2;
    temp_119 = int(temp_117) & 3;
    temp_120 = fp_c8.data[int(temp_118)][temp_119];
    // 0x000468: 0x59A0058002C72C0B Ffma
    temp_121 = fma(temp_102, temp_102, temp_114);
    // 0x000470: 0x5080000000570B0B Mufu
    temp_122 = inversesqrt(temp_121);
    // 0x000478: 0x5C69100000B72E2E Fmul
    temp_123 = 0.0 - temp_122;
    temp_124 = temp_100 * temp_123;
    // 0x000488: 0x5C69100000B72D2D Fmul
    temp_125 = 0.0 - temp_122;
    temp_126 = temp_101 * temp_125;
    // 0x000490: 0x5C69100000B72C2C Fmul
    temp_127 = 0.0 - temp_122;
    temp_128 = temp_102 * temp_127;
    // 0x000498: 0x4C6810180A07130B Fmul
    temp_129 = fp_c5.data[31].z * fp_c6.data[40].x;
    // 0x0004A8: 0x4C58301805C72E0D Fadd
    temp_130 = 0.0 - fp_c6.data[23].x;
    temp_131 = temp_124 + temp_130;
    // 0x0004B0: 0x4C58301805D72D0E Fadd
    temp_132 = 0.0 - fp_c6.data[23].y;
    temp_133 = temp_126 + temp_132;
    // 0x0004B8: 0x4C58301805E72C0F Fadd
    temp_134 = 0.0 - fp_c6.data[23].z;
    temp_135 = temp_128 + temp_134;
    // 0x0004C8: 0x386013BF80070B0B Fmnmx
    temp_136 = min(temp_129, 1.0);
    // 0x0004D0: 0x5C68100000D70D11 Fmul
    temp_137 = temp_131 * temp_131;
    // 0x0004D8: 0x4C60178400070B2B Fmnmx
    temp_138 = max(temp_136, fp_c1.data[0].x);
    // 0x0004E8: 0x49A00B940697150B Ffma
    temp_139 = fma(temp_108, fp_c5.data[26].y, fp_c5.data[11].x);
    // 0x0004F0: 0x59A0088000E70E11 Ffma
    temp_140 = fma(temp_133, temp_133, temp_137);
    // 0x0004F8: 0x32A0013F00072B2A Ffma
    temp_141 = fma(temp_138, 0.5, 0.5);
    // 0x000508: 0x4C69101805C71002 Fmul
    temp_142 = 0.0 - fp_c6.data[23].x;
    temp_143 = temp_64 * temp_142;
    // 0x000510: 0x51A4158400072B2B Ffma
    temp_144 = fma(temp_138, temp_138, fp_c1.data[0].x);
    temp_145 = clamp(temp_144, 0.0, 1.0);
    // 0x000518: 0x59A0088000F70F11 Ffma
    temp_146 = fma(temp_135, temp_135, temp_140);
    // 0x000528: 0x5080000000571114 Mufu
    temp_147 = inversesqrt(temp_146);
    // 0x000530: 0x5C68120002A72A2A Fmul
    temp_148 = temp_141 * 0.5;
    temp_149 = temp_148 * temp_141;
    // 0x000538: 0x5C68100002B72B29 Fmul
    temp_150 = temp_145 * temp_145;
    // 0x000548: 0x5B6603800FF72307 Isetp
    temp_151 = floatBitsToUint(temp_120) <= 0u;
    // 0x000550: 0x5C68100001470D13 Fmul
    temp_152 = temp_131 * temp_147;
    // 0x000558: 0x5C68100001470E16 Fmul
    temp_153 = temp_133 * temp_147;
    // 0x000568: 0x5C68100002E7100E Fmul
    temp_154 = temp_64 * temp_124;
    // 0x000570: 0x5C68100001470F0F Fmul
    temp_155 = temp_135 * temp_147;
    // 0x000578: 0x49A1011805D70014 Ffma
    temp_156 = 0.0 - fp_c6.data[23].y;
    temp_157 = fma(temp_63, temp_156, temp_143);
    // 0x000588: 0x5C6810000137100D Fmul
    temp_158 = temp_64 * temp_152;
    // 0x000590: 0x59A0068001670011 Ffma
    temp_159 = fma(temp_63, temp_153, temp_158);
    // 0x000598: 0x59A0070002D7000D Ffma
    temp_160 = fma(temp_63, temp_126, temp_154);
    // 0x0005A8: 0x4C5910140357180E Fadd
    temp_161 = 0.0 - fp_c5.data[11].y;
    temp_162 = temp_161 + fp_c5.data[13].y;
    // 0x0005B0: 0x59A4088000F71217 Ffma
    temp_163 = fma(temp_62, temp_155, temp_159);
    temp_164 = clamp(temp_163, 0.0, 1.0);
    // 0x0005B8: 0x59A4068002C71202 Ffma
    temp_165 = fma(temp_62, temp_128, temp_160);
    temp_166 = clamp(temp_165, 0.0, 1.0);
    // 0x0005C8: 0x4C69101805C71311 Fmul
    temp_167 = 0.0 - fp_c6.data[23].x;
    temp_168 = temp_152 * temp_167;
    // 0x0005D0: 0x49A50A1805E7120D Ffma
    temp_169 = 0.0 - fp_c6.data[23].z;
    temp_170 = fma(temp_62, temp_169, temp_157);
    temp_171 = clamp(temp_170, 0.0, 1.0);
    // 0x0005D8: 0x5C68100001372E13 Fmul
    temp_172 = temp_124 * temp_152;
    // 0x0005E8: 0x49A00C1406970E0E Ffma
    temp_173 = fma(temp_162, fp_c5.data[26].y, fp_c5.data[11].y);
    // 0x0005F0: 0x59A20B8002971715 Ffma
    temp_174 = 0.0 - temp_164;
    temp_175 = fma(temp_164, temp_150, temp_174);
    // 0x0005F8: 0x59A1010002A70214 Ffma
    temp_176 = 0.0 - temp_149;
    temp_177 = fma(temp_166, temp_176, temp_166);
    // 0x000608: 0x49A1089805D71611 Ffma
    temp_178 = 0.0 - fp_c6.data[23].y;
    temp_179 = fma(temp_153, temp_178, temp_168);
    // 0x000610: 0x59A0098001672D16 Ffma
    temp_180 = fma(temp_126, temp_153, temp_172);
    // 0x000618: 0x59A1068002A70D13 Ffma
    temp_181 = 0.0 - temp_149;
    temp_182 = fma(temp_171, temp_181, temp_171);
    // 0x000628: 0x51A00A8400171715 Ffma
    temp_183 = fma(temp_164, temp_175, fp_c1.data[0].y);
    // 0x000630: 0x5C58100001472A14 Fadd
    temp_184 = temp_149 + temp_177;
    // 0x000638: 0x5080000000471515 Mufu
    temp_185 = 1.0 / temp_183;
    // 0x000648: 0x3859103F80070217 Fadd
    temp_186 = 0.0 - temp_166;
    temp_187 = temp_186 + 1.0;
    // 0x000650: 0x5080000000471414 Mufu
    temp_188 = 1.0 / temp_184;
    // 0x000658: 0x5C58100001372A13 Fadd
    temp_189 = temp_149 + temp_182;
    // 0x000668: 0x49A5089805E70F11 Ffma
    temp_190 = 0.0 - fp_c6.data[23].z;
    temp_191 = fma(temp_155, temp_190, temp_179);
    temp_192 = clamp(temp_191, 0.0, 1.0);
    // 0x000670: 0x5080000000471313 Mufu
    temp_193 = 1.0 / temp_189;
    // 0x000678: 0x59A40B0000F72C16 Ffma
    temp_194 = fma(temp_128, temp_155, temp_180);
    temp_195 = clamp(temp_194, 0.0, 1.0);
    // 0x000688: 0x5C68100001771718 Fmul
    temp_196 = temp_187 * temp_187;
    // 0x000690: 0x49A20D840027110F Ffma
    temp_197 = fma(temp_192, fp_c1.data[0].z, -6.98316002);
    // 0x000698: 0x5C68100001572B09 Fmul
    temp_198 = temp_145 * temp_185;
    // 0x0006A8: 0x49A20D8400271615 Ffma
    temp_199 = fma(temp_195, fp_c1.data[0].z, -6.98316002);
    // 0x0006B0: 0x3868103F00071428 Fmul
    temp_200 = temp_188 * 0.5;
    // 0x0006B8: 0x4C59101403672214 Fadd
    temp_201 = 0.0 - fp_c5.data[11].z;
    temp_202 = temp_201 + fp_c5.data[13].z;
    // 0x0006C8: 0x5C6C100001871718 Fmul
    temp_203 = temp_187 * temp_196;
    temp_204 = clamp(temp_203, 0.0, 1.0);
    // 0x0006D0: 0x5C68100000F7110F Fmul
    temp_205 = temp_192 * temp_197;
    // 0x0006D8: 0x5C6810000097090A Fmul
    temp_206 = temp_198 * temp_198;
    // 0x0006E8: 0x5C68100001571611 Fmul
    temp_207 = temp_195 * temp_199;
    // 0x0006F0: 0x5C68100001372813 Fmul
    temp_208 = temp_200 * temp_193;
    // 0x0006F8: 0x49A0111406971409 Ffma
    temp_209 = fma(temp_202, fp_c5.data[26].y, fp_c5.data[11].z);
    // 0x000708: 0x4C98079406270014 Mov
    // 0x000710: 0x4C68101403071819 Fmul
    temp_210 = temp_204 * fp_c5.data[12].x;
    // 0x000718: 0x4C6810140317181B Fmul
    temp_211 = temp_204 * fp_c5.data[12].y;
    // 0x000728: 0x4C6810140327181A Fmul
    temp_212 = temp_204 * fp_c5.data[12].z;
    // 0x000730: 0x5C68100001370A0A Fmul
    temp_213 = temp_206 * temp_208;
    // 0x000738: 0x5C90008001170024 Rro
    // 0x000748: 0x4C68101801670D18 Fmul
    temp_214 = temp_171 * fp_c6.data[5].z;
    // 0x000750: 0x5080000000272424 Mufu
    temp_215 = exp2(temp_207);
    // 0x000758: 0x1E23EA2F98371818 Fmul32i
    temp_216 = temp_214 * 0.318309873;
    // 0x000768: 0xF0F0000034370000 Depbar
    // 0x000770: 0x4C68101402C70606 Fmul
    temp_217 = temp_81 * fp_c5.data[11].x;
    // 0x000778: 0x4C68101402D70707 Fmul
    temp_218 = temp_82 * fp_c5.data[11].y;
    // 0x000788: 0x4C68101402E70303 Fmul
    temp_219 = temp_83 * fp_c5.data[11].z;
    // 0x000790: 0x4C68101406270615 Fmul
    temp_220 = temp_217 * fp_c5.data[24].z;
    // 0x000798: 0x51A10A1403470606 Ffma
    temp_221 = 0.0 - fp_c5.data[24].z;
    temp_222 = fma(temp_217, temp_221, fp_c5.data[13].x);
    // 0x0007A8: 0x51A10A1403570713 Ffma
    temp_223 = 0.0 - fp_c5.data[24].z;
    temp_224 = fma(temp_218, temp_223, fp_c5.data[13].y);
    // 0x0007B0: 0x4C68101406270716 Fmul
    temp_225 = temp_218 * fp_c5.data[24].z;
    // 0x0007B8: 0x51A10A1403670314 Ffma
    temp_226 = 0.0 - fp_c5.data[24].z;
    temp_227 = fma(temp_219, temp_226, fp_c5.data[13].z);
    // 0x0007C8: 0x4C68101406270317 Fmul
    temp_228 = temp_219 * fp_c5.data[24].z;
    // 0x0007D0: 0xF0F0000034270000 Depbar
    // 0x0007D8: 0x59A00C8000B70403 Ffma
    temp_229 = fma(temp_88, temp_139, temp_210);
    // 0x0007E8: 0x59A00D8000E70504 Ffma
    temp_230 = fma(temp_89, temp_173, temp_211);
    // 0x0007F0: 0x59A00D0000970805 Ffma
    temp_231 = fma(temp_90, temp_209, temp_212);
    // 0x0007F8: 0x49A00A9406970606 Ffma
    temp_232 = fma(temp_222, fp_c5.data[26].y, temp_220);
    // 0x000808: 0x49A00B1406971307 Ffma
    temp_233 = fma(temp_224, fp_c5.data[26].y, temp_225);
    // 0x000810: 0x49A00B9406971408 Ffma
    temp_234 = fma(temp_227, fp_c5.data[26].y, temp_228);
    // 0x000818: 0x4C98079407C70016 Mov
    // 0x000828: 0x5C90008000F70014 Rro
    // 0x000830: 0x5C68100000A70D0E Fmul
    temp_235 = temp_171 * temp_213;
    // 0x000838: 0x5080000000271414 Mufu
    temp_236 = exp2(temp_205);
    // 0x000848: 0x4C58301407B70609 Fadd
    temp_237 = 0.0 - fp_c5.data[30].w;
    temp_238 = temp_232 + temp_237;
    // 0x000850: 0x4C58301407B7070B Fadd
    temp_239 = 0.0 - fp_c5.data[30].w;
    temp_240 = temp_233 + temp_239;
    // 0x000858: 0x4C58301407B7080F Fadd
    temp_241 = 0.0 - fp_c5.data[30].w;
    temp_242 = temp_234 + temp_241;
    // 0x000868: 0x4C98079808A70017 Mov
    // 0x000870: 0x4C68101801470D13 Fmul
    temp_243 = temp_171 * fp_c6.data[5].x;
    // 0x000878: 0x4C68101801570D15 Fmul
    temp_244 = temp_171 * fp_c6.data[5].y;
    // 0x000888: 0x51A00B1407B70909 Ffma
    temp_245 = fma(temp_238, fp_c5.data[31].x, fp_c5.data[30].w);
    // 0x000890: 0x51A00B1407B70B0A Ffma
    temp_246 = fma(temp_240, fp_c5.data[31].x, fp_c5.data[30].w);
    // 0x000898: 0x51A00B1407B70F0B Ffma
    temp_247 = fma(temp_242, fp_c5.data[31].x, fp_c5.data[30].w);
    // 0x0008A8: 0x4C68101808771711 Fmul
    temp_248 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x0008B0: 0x1E23EA2F9837130F Fmul32i
    temp_249 = temp_243 * 0.318309873;
    // 0x0008B8: 0x1E23EA2F98371513 Fmul32i
    temp_250 = temp_244 * 0.318309873;
    // 0x0008C8: 0x59A10A0001470916 Ffma
    temp_251 = 0.0 - temp_236;
    temp_252 = fma(temp_245, temp_251, temp_236);
    // 0x0008D0: 0x59A10A0001470A0D Ffma
    temp_253 = 0.0 - temp_236;
    temp_254 = fma(temp_246, temp_253, temp_236);
    // 0x0008D8: 0x59A10A0001470B14 Ffma
    temp_255 = 0.0 - temp_236;
    temp_256 = fma(temp_247, temp_255, temp_236);
    // 0x0008E8: 0xF0F0000034170000 Depbar
    // 0x0008F0: 0x51A0089801471E15 Ffma
    temp_257 = fma(temp_92, temp_248, fp_c6.data[5].x);
    // 0x0008F8: 0x51A0089801571F17 Ffma
    temp_258 = fma(temp_93, temp_248, fp_c6.data[5].y);
    // 0x000908: 0x51A0089801672011 Ffma
    temp_259 = fma(temp_94, temp_248, fp_c6.data[5].z);
    // 0x000910: 0x5C58100001670916 Fadd
    temp_260 = temp_245 + temp_252;
    // 0x000918: 0x5C58100000D70A0D Fadd
    temp_261 = temp_246 + temp_254;
    // 0x000928: 0x5C58100001470B14 Fadd
    temp_262 = temp_247 + temp_256;
    // 0x000930: 0x59A112000247091A Ffma
    temp_263 = 0.0 - temp_215;
    temp_264 = fma(temp_245, temp_263, temp_215);
    // 0x000938: 0x59A1120002470A19 Ffma
    temp_265 = 0.0 - temp_215;
    temp_266 = fma(temp_246, temp_265, temp_215);
    // 0x000948: 0x59A1120002470B24 Ffma
    temp_267 = 0.0 - temp_215;
    temp_268 = fma(temp_247, temp_267, temp_215);
    // 0x000950: 0x5C68100001571615 Fmul
    temp_269 = temp_260 * temp_257;
    // 0x000958: 0x5C68100001770D0D Fmul
    temp_270 = temp_261 * temp_258;
    // 0x000968: 0x5C68100001171411 Fmul
    temp_271 = temp_262 * temp_259;
    // 0x000970: 0x5C68100000271216 Fmul
    temp_272 = temp_62 * temp_166;
    // 0x000978: 0x5C58100001A7091A Fadd
    temp_273 = temp_245 + temp_264;
    // 0x000988: 0x5C58100001970A19 Fadd
    temp_274 = temp_246 + temp_266;
    // 0x000990: 0x5C68100001570E15 Fmul
    temp_275 = temp_235 * temp_269;
    // 0x000998: 0x5C68100000D70E0D Fmul
    temp_276 = temp_235 * temp_270;
    // 0x0009A8: 0x5C68100001170E32 Fmul
    temp_277 = temp_235 * temp_271;
    // 0x0009B0: 0x5C68100000271011 Fmul
    temp_278 = temp_64 * temp_166;
    // 0x0009B8: 0x5C6810000027000E Fmul
    temp_279 = temp_63 * temp_166;
    // 0x0009C8: 0x5C58100002470B1B Fadd
    temp_280 = temp_247 + temp_268;
    // 0x0009D0: 0x385C103F80070614 Fadd
    temp_281 = temp_232 + 1.0;
    temp_282 = clamp(temp_281, 0.0, 1.0);
    // 0x0009D8: 0x385C103F80070717 Fadd
    temp_283 = temp_233 + 1.0;
    temp_284 = clamp(temp_283, 0.0, 1.0);
    // 0x0009E8: 0xEF54000000C7FF14 Stl
    local_memory[3] = floatBitsToUint(temp_282);
    // 0x0009F0: 0x32A2174000071122 Ffma
    temp_285 = 0.0 - temp_124;
    temp_286 = fma(temp_278, 2.0, temp_285);
    // 0x0009F8: 0xEF5400000087FF17 Stl
    local_memory[2] = floatBitsToUint(temp_284);
    // 0x000A08: 0x32A216C000070E11 Ffma
    temp_287 = 0.0 - temp_126;
    temp_288 = fma(temp_279, 2.0, temp_287);
    // 0x000A10: 0x32A216400007160E Ffma
    temp_289 = 0.0 - temp_128;
    temp_290 = fma(temp_272, 2.0, temp_289);
    // 0x000A18: 0x385C103F80070816 Fadd
    temp_291 = temp_234 + 1.0;
    temp_292 = clamp(temp_291, 0.0, 1.0);
    // 0x000A28: 0x59A1078001A70F0F Ffma
    temp_293 = 0.0 - temp_273;
    temp_294 = fma(temp_249, temp_293, temp_249);
    // 0x000A30: 0xEF5400000047FF16 Stl
    local_memory[1] = floatBitsToUint(temp_292);
    // 0x000A38: 0x59A1098001971313 Ffma
    temp_295 = 0.0 - temp_274;
    temp_296 = fma(temp_250, temp_295, temp_250);
    // 0x000A48: 0x59A10C0001B71818 Ffma
    temp_297 = 0.0 - temp_280;
    temp_298 = fma(temp_216, temp_297, temp_216);
    // 0x000A50: 0x5C9807800FF70019 Mov
    // 0x000A58: 0x1E23E22F98371514 Fmul32i
    temp_299 = temp_275 * 0.159154937;
    // 0x000A68: 0x5C9807800FF7001A Mov
    // 0x000A70: 0xEF5400000007FF14 Stl
    local_memory[0] = floatBitsToUint(temp_299);
    // 0x000A78: 0x5C9807800FF7001B Mov
    // 0x000A88: 0x5C9807800FF70024 Mov
    // 0x000A90: 0x1E23E22F98370D36 Fmul32i
    temp_300 = temp_276 * 0.159154937;
    // 0x000A98: 0x1E23E22F98373232 Fmul32i
    temp_301 = temp_277 * 0.159154937;
    // 0x000AA8: 0xF0F800000000000F Sync
    temp_302 = 0.0;
    temp_303 = 0.0;
    temp_304 = 0.0;
    temp_305 = 0.0;
    temp_306 = 0.0;
    temp_307 = 0.0;
    temp_308 = 0.0;
    temp_309 = 0.0;
    temp_310 = 0.0;
    temp_311 = 0.0;
    temp_312 = 0.0;
    temp_313 = 0.0;
    if (!temp_151)
    {
        // 0x000AB0: 0x5C9807800FF70030 Mov
        // 0x000AB8: 0xE043FF8D80C7FF2F Ipa
        temp_314 = in_attr5.z;
        temp_315 = 0;
        do
        {
            // 0x000AC8: 0x5C18020003072717 Iscadd
            temp_317 = int(temp_112) << 4;
            temp_318 = temp_317 + temp_315;
            // 0x000AD0: 0xE003FF87CFF7FF33 Ipa
            // 0x000AD8: 0x1C00000000173030 Iadd32i
            temp_319 = temp_315 + 1;
            // 0x000AE8: 0xE003FF87CFF7FF34 Ipa
            // 0x000AF0: 0x3848000000471717 Shl
            temp_320 = temp_318 << 4;
            // 0x000AF8: 0xE290000055000000 Ssy
            // 0x000B08: 0x5B6C03800237300F Isetp
            temp_316 = uint(temp_319) >= floatBitsToUint(temp_120);
            // 0x000B10: 0xEF94008200071717 Ldc
            temp_321 = temp_320 + 0x2000;
            temp_322 = uint(temp_321) >> 2;
            temp_323 = temp_322 >> 2;
            temp_324 = int(temp_322) & 3;
            temp_325 = fp_c8.data[int(temp_323)][temp_324];
            // 0x000B18: 0x5080000000473333 Mufu
            // 0x000B28: 0x5080000000473434 Mufu
            // 0x000B30: 0xE043FF8D0337FF33 Ipa
            temp_326 = in_attr5.x;
            // 0x000B38: 0xE043FF8D4347FF34 Ipa
            temp_327 = in_attr5.y;
            // 0x000B48: 0x3848000000671731 Shl
            temp_328 = floatBitsToInt(temp_325) << 6;
            // 0x000B50: 0xEF9500800107310C Ldc
            temp_329 = temp_328 + 16;
            temp_330 = uint(temp_329) >> 2;
            temp_331 = temp_330 >> 2;
            temp_332 = int(temp_330) & 3;
            temp_333 = fp_c8.data[int(temp_331)][temp_332];
            temp_334 = int(temp_330) + 1;
            temp_335 = uint(temp_334) >> 2;
            temp_336 = temp_334 & 3;
            temp_337 = fp_c8.data[int(temp_335)][temp_336];
            // 0x000B58: 0xEF95008001873114 Ldc
            temp_338 = temp_328 + 24;
            temp_339 = uint(temp_338) >> 2;
            temp_340 = temp_339 >> 2;
            temp_341 = int(temp_339) & 3;
            temp_342 = fp_c8.data[int(temp_340)][temp_341];
            temp_343 = int(temp_339) + 1;
            temp_344 = uint(temp_343) >> 2;
            temp_345 = temp_343 & 3;
            temp_346 = fp_c8.data[int(temp_344)][temp_345];
            // 0x000B68: 0xEF95008002073116 Ldc
            temp_347 = temp_328 + 32;
            temp_348 = uint(temp_347) >> 2;
            temp_349 = temp_348 >> 2;
            temp_350 = int(temp_348) & 3;
            temp_351 = fp_c8.data[int(temp_349)][temp_350];
            temp_352 = int(temp_348) + 1;
            temp_353 = uint(temp_352) >> 2;
            temp_354 = temp_352 & 3;
            temp_355 = fp_c8.data[int(temp_353)][temp_354];
            // 0x000B70: 0x5C58300003370C33 Fadd
            temp_356 = 0.0 - temp_326;
            temp_357 = temp_333 + temp_356;
            // 0x000B78: 0x5C58300003470D34 Fadd
            temp_358 = 0.0 - temp_327;
            temp_359 = temp_337 + temp_358;
            // 0x000B88: 0x5C58300002F71414 Fadd
            temp_360 = 0.0 - temp_314;
            temp_361 = temp_342 + temp_360;
            // 0x000B90: 0x5C6810000337330D Fmul
            temp_362 = temp_357 * temp_357;
            // 0x000B98: 0x59A10A000147150C Ffma
            temp_363 = 0.0 - temp_361;
            temp_364 = fma(temp_346, temp_363, temp_361);
            // 0x000BA8: 0x59A0068003473415 Ffma
            temp_365 = fma(temp_359, temp_359, temp_362);
            // 0x000BB0: 0x59A00A8000C70C35 Ffma
            temp_366 = fma(temp_364, temp_364, temp_365);
            // 0x000BB8: 0x508000000057350D Mufu
            temp_367 = inversesqrt(temp_366);
            // 0x000BC8: 0x5080000000873535 Mufu
            temp_368 = sqrt(temp_366);
            // 0x000BD0: 0x5C68100000D73337 Fmul
            temp_369 = temp_357 * temp_367;
            // 0x000BD8: 0x5C68100000D70C0C Fmul
            temp_370 = temp_364 * temp_367;
            // 0x000BE8: 0x5C68100000D7340D Fmul
            temp_371 = temp_359 * temp_367;
            // 0x000BF0: 0x5C69100001673716 Fmul
            temp_372 = 0.0 - temp_351;
            temp_373 = temp_369 * temp_372;
            // 0x000BF8: 0x59A10B0001770D0D Ffma
            temp_374 = 0.0 - temp_355;
            temp_375 = fma(temp_371, temp_374, temp_373);
            // 0x000C08: 0xEF94008002873116 Ldc
            temp_376 = temp_328 + 40;
            temp_377 = uint(temp_376) >> 2;
            temp_378 = temp_377 >> 2;
            temp_379 = int(temp_377) & 3;
            temp_380 = fp_c8.data[int(temp_378)][temp_379];
            // 0x000C10: 0x010404000007F017 Mov32i
            // 0x000C18: 0x59A1068001670C16 Ffma
            temp_381 = 0.0 - temp_380;
            temp_382 = fma(temp_370, temp_381, temp_375);
            // 0x000C28: 0xEF9500800387310C Ldc
            temp_383 = temp_328 + 56;
            temp_384 = uint(temp_383) >> 2;
            temp_385 = temp_384 >> 2;
            temp_386 = int(temp_384) & 3;
            temp_387 = fp_c8.data[int(temp_385)][temp_386];
            temp_388 = int(temp_384) + 1;
            temp_389 = uint(temp_388) >> 2;
            temp_390 = temp_388 & 3;
            temp_391 = fp_c8.data[int(temp_389)][temp_390];
            // 0x000C30: 0x59A4068000C7160C Ffma
            temp_392 = fma(temp_382, temp_387, temp_391);
            temp_393 = clamp(temp_392, 0.0, 1.0);
            // 0x000C38: 0x5C68100000C70C16 Fmul
            temp_394 = temp_393 * temp_393;
            // 0x000C48: 0x33A00BC000070C0C Ffma
            temp_395 = fma(temp_393, -2.0, 3.0);
            // 0x000C50: 0x5C68100000C71616 Fmul
            temp_396 = temp_394 * temp_395;
            // 0x000C58: 0xEF9500800307310C Ldc
            temp_397 = temp_328 + 48;
            temp_398 = uint(temp_397) >> 2;
            temp_399 = temp_398 >> 2;
            temp_400 = int(temp_398) & 3;
            temp_401 = fp_c8.data[int(temp_399)][temp_400];
            temp_402 = int(temp_398) + 1;
            temp_403 = uint(temp_402) >> 2;
            temp_404 = temp_402 & 3;
            temp_405 = fp_c8.data[int(temp_403)][temp_404];
            // 0x000C68: 0x59A4068003570C35 Ffma
            temp_406 = fma(temp_401, temp_368, temp_405);
            temp_407 = clamp(temp_406, 0.0, 1.0);
            // 0x000C70: 0x33A00BC000073517 Ffma
            temp_408 = fma(temp_407, -2.0, 3.0);
            // 0x000C78: 0x5C68100003573535 Fmul
            temp_409 = temp_407 * temp_407;
            // 0x000C88: 0x5C68100001773517 Fmul
            temp_410 = temp_409 * temp_408;
            // 0x000C90: 0x5C68100001771616 Fmul
            temp_411 = temp_396 * temp_410;
            // 0x000C98: 0x39585042F0071417 Fadd
            temp_412 = abs(temp_361);
            temp_413 = temp_412 + -120.0;
            // 0x000CA8: 0x1EABD4CCCCD71717 Fmul32i
            temp_414 = temp_413 * -0.0500000007;
            temp_415 = clamp(temp_414, 0.0, 1.0);
            // 0x000CB0: 0x5C68100001671716 Fmul
            temp_416 = temp_415 * temp_411;
            // 0x000CB8: 0x36247F9000171717 Xmad
            temp_417 = floatBitsToUint(temp_415) >> 16;
            temp_418 = int(temp_417) << 16;
            // 0x000CC8: 0x5BB383800FF71607 Fsetp
            temp_419 = temp_416 <= 0.0;
            // 0x000CD0: 0x7A05083C0F00FF17 Hadd2
            temp_315 = temp_319;
            temp_420 = uint(temp_418);
            temp_421 = temp_302;
            temp_422 = temp_303;
            temp_423 = temp_304;
            temp_424 = temp_305;
            temp_425 = temp_306;
            temp_426 = temp_307;
            if (temp_419)
            {
                temp_427 = unpackHalf2x16(uint(temp_418)).y;
                temp_428 = packHalf2x16(vec2(1.0, temp_427));
                temp_420 = temp_428;
            }
            // 0x000CD8: 0x5D2103902FF71707 Hsetp2
            temp_429 = unpackHalf2x16(temp_420).x;
            temp_430 = temp_429 == 0.0;
            // 0x000CE8: 0xF0F800000008000F Sync
            if (temp_430)
            {
                // 0x000CF0: 0x5080000000470C0C Mufu
                temp_431 = 1.0 / temp_401;
                // 0x000CF8: 0x5C69100000C70D0C Fmul
                temp_432 = 0.0 - temp_431;
                temp_433 = temp_405 * temp_432;
                // 0x000D08: 0x5C60138000C71414 Fmnmx
                temp_434 = min(temp_361, temp_433);
                // 0x000D10: 0x5C61178001470C0C Fmnmx
                temp_435 = 0.0 - temp_433;
                temp_436 = max(temp_435, temp_434);
                // 0x000D18: 0x59A00A8000C70C15 Ffma
                temp_437 = fma(temp_436, temp_436, temp_365);
                // 0x000D28: 0x508000000057150D Mufu
                temp_438 = inversesqrt(temp_437);
                // 0x000D30: 0x5080000000871515 Mufu
                temp_439 = sqrt(temp_437);
                // 0x000D38: 0x5C68100000D73333 Fmul
                temp_440 = temp_357 * temp_438;
                // 0x000D48: 0x5C68100000D73434 Fmul
                temp_441 = temp_359 * temp_438;
                // 0x000D50: 0x5C68100000D70C0C Fmul
                temp_442 = temp_436 * temp_438;
                // 0x000D58: 0x5C58100003372E0D Fadd
                temp_443 = temp_124 + temp_440;
                // 0x000D68: 0x5C58100003472D17 Fadd
                temp_444 = temp_126 + temp_441;
                // 0x000D70: 0x5C58100000C72C14 Fadd
                temp_445 = temp_128 + temp_442;
                // 0x000D78: 0x5C68100000D70D35 Fmul
                temp_446 = temp_443 * temp_443;
                // 0x000D88: 0x59A01A8001771735 Ffma
                temp_447 = fma(temp_444, temp_444, temp_446);
                // 0x000D90: 0x59A01A8001471435 Ffma
                temp_448 = fma(temp_445, temp_445, temp_447);
                // 0x000D98: 0x5080000000573535 Mufu
                temp_449 = inversesqrt(temp_448);
                // 0x000DA8: 0x5C68100003570D0D Fmul
                temp_450 = temp_443 * temp_449;
                // 0x000DB0: 0x5C68100003571717 Fmul
                temp_451 = temp_444 * temp_449;
                // 0x000DB8: 0x5C68100003571414 Fmul
                temp_452 = temp_445 * temp_449;
                // 0x000DC8: 0x5C68100000D73335 Fmul
                temp_453 = temp_440 * temp_450;
                // 0x000DD0: 0x5C68100000D7100D Fmul
                temp_454 = temp_64 * temp_450;
                // 0x000DD8: 0x5C68100003371033 Fmul
                temp_455 = temp_64 * temp_440;
                // 0x000DE8: 0x59A01A8001773435 Ffma
                temp_456 = fma(temp_441, temp_451, temp_453);
                // 0x000DF0: 0x59A006800177000D Ffma
                temp_457 = fma(temp_63, temp_451, temp_454);
                // 0x000DF8: 0xEF94008002C73117 Ldc
                temp_458 = temp_328 + 44;
                temp_459 = uint(temp_458) >> 2;
                temp_460 = temp_459 >> 2;
                temp_461 = int(temp_459) & 3;
                temp_462 = fp_c8.data[int(temp_460)][temp_461];
                // 0x000E08: 0x59A0198003470033 Ffma
                temp_463 = fma(temp_63, temp_441, temp_455);
                // 0x000E10: 0x59A41A8001470C35 Ffma
                temp_464 = fma(temp_442, temp_452, temp_456);
                temp_465 = clamp(temp_464, 0.0, 1.0);
                // 0x000E18: 0x59A4068001471214 Ffma
                temp_466 = fma(temp_62, temp_452, temp_457);
                temp_467 = clamp(temp_466, 0.0, 1.0);
                // 0x000E28: 0x59A0198000C71233 Ffma
                temp_468 = fma(temp_62, temp_442, temp_463);
                // 0x000E30: 0xEF9500800007310C Ldc
                temp_469 = uint(temp_328) >> 2;
                temp_470 = temp_469 >> 2;
                temp_471 = int(temp_469) & 3;
                temp_472 = fp_c8.data[int(temp_470)][temp_471];
                temp_473 = int(temp_469) + 1;
                temp_474 = uint(temp_473) >> 2;
                temp_475 = temp_473 & 3;
                temp_476 = fp_c8.data[int(temp_474)][temp_475];
                // 0x000E38: 0xEF94008000873131 Ldc
                temp_477 = temp_328 + 8;
                temp_478 = uint(temp_477) >> 2;
                temp_479 = temp_478 >> 2;
                temp_480 = int(temp_478) & 3;
                temp_481 = fp_c8.data[int(temp_479)][temp_480];
                // 0x000E48: 0x5080000000471717 Mufu
                temp_482 = 1.0 / temp_462;
                // 0x000E50: 0x5C68100000C7160C Fmul
                temp_483 = temp_416 * temp_472;
                // 0x000E58: 0x5C68100000D7160D Fmul
                temp_484 = temp_416 * temp_476;
                // 0x000E68: 0x51A00A8400471715 Ffma
                temp_485 = fma(temp_482, temp_439, fp_c1.data[1].x);
                // 0x000E70: 0x59A20A0001472917 Ffma
                temp_486 = 0.0 - temp_467;
                temp_487 = fma(temp_150, temp_467, temp_486);
                // 0x000E78: 0x5080000000471515 Mufu
                temp_488 = 1.0 / temp_485;
                // 0x000E88: 0x5C68100003171631 Fmul
                temp_489 = temp_416 * temp_481;
                // 0x000E90: 0x01040DF760C7F016 Mov32i
                // 0x000E98: 0x51A00B8400171417 Ffma
                temp_490 = fma(temp_467, temp_487, fp_c1.data[0].y);
                // 0x000EA8: 0x49A20B0400273514 Ffma
                temp_491 = fma(temp_465, fp_c1.data[0].z, -6.98316002);
                // 0x000EB0: 0x5080000000471717 Mufu
                temp_492 = 1.0 / temp_490;
                // 0x000EB8: 0x1E23FB3333371515 Fmul32i
                temp_493 = temp_488 * 1.39999998;
                // 0x000EC8: 0x5C68100001473535 Fmul
                temp_494 = temp_465 * temp_491;
                // 0x000ED0: 0x5C68100001571515 Fmul
                temp_495 = temp_493 * temp_493;
                // 0x000ED8: 0x5C68100001772B17 Fmul
                temp_496 = temp_145 * temp_492;
                // 0x000EE8: 0x59A10A8001573315 Ffma
                temp_497 = 0.0 - temp_495;
                temp_498 = fma(temp_468, temp_497, temp_495);
                // 0x000EF0: 0x5C68100001771717 Fmul
                temp_499 = temp_496 * temp_496;
                // 0x000EF8: 0x5C5C100001573315 Fadd
                temp_500 = temp_468 + temp_498;
                temp_501 = clamp(temp_500, 0.0, 1.0);
                // 0x000F08: 0x5C5C30000FF73333 Fadd
                temp_502 = temp_468 + -0.0;
                temp_503 = clamp(temp_502, 0.0, 1.0);
                // 0x000F10: 0x59A1198003372A16 Ffma
                temp_504 = 0.0 - temp_503;
                temp_505 = fma(temp_149, temp_504, temp_503);
                // 0x000F18: 0x5C58100001672A14 Fadd
                temp_506 = temp_149 + temp_505;
                // 0x000F28: 0x5C90008003570016 Rro
                // 0x000F30: 0x5080000000471414 Mufu
                temp_507 = 1.0 / temp_506;
                // 0x000F38: 0x5080000000271616 Mufu
                temp_508 = exp2(temp_494);
                // 0x000F48: 0x5C68100001472814 Fmul
                temp_509 = temp_200 * temp_507;
                // 0x000F50: 0x59A10B0001670934 Ffma
                temp_510 = 0.0 - temp_508;
                temp_511 = fma(temp_245, temp_510, temp_508);
                // 0x000F58: 0x5C68100001471714 Fmul
                temp_512 = temp_499 * temp_509;
                // 0x000F68: 0x59A10B0001670A17 Ffma
                temp_513 = 0.0 - temp_508;
                temp_514 = fma(temp_246, temp_513, temp_508);
                // 0x000F70: 0x59A10B0001670B16 Ffma
                temp_515 = 0.0 - temp_508;
                temp_516 = fma(temp_247, temp_515, temp_508);
                // 0x000F78: 0x5C58100003470934 Fadd
                temp_517 = temp_245 + temp_511;
                // 0x000F88: 0x5C68100001473314 Fmul
                temp_518 = temp_503 * temp_512;
                // 0x000F90: 0x5C58100001770A17 Fadd
                temp_519 = temp_246 + temp_514;
                // 0x000F98: 0x5C58100001670B16 Fadd
                temp_520 = temp_247 + temp_516;
                // 0x000FA8: 0x5C68100003470C34 Fmul
                temp_521 = temp_483 * temp_517;
                // 0x000FB0: 0x5C68100001570C0C Fmul
                temp_522 = temp_483 * temp_501;
                // 0x000FB8: 0x5C68100001770D17 Fmul
                temp_523 = temp_484 * temp_519;
                // 0x000FC8: 0x5C68100001673116 Fmul
                temp_524 = temp_489 * temp_520;
                // 0x000FD0: 0x5C68100001570D0D Fmul
                temp_525 = temp_484 * temp_501;
                // 0x000FD8: 0x5C68100001573115 Fmul
                temp_526 = temp_489 * temp_501;
                // 0x000FE8: 0x5C68100001473434 Fmul
                temp_527 = temp_521 * temp_518;
                // 0x000FF0: 0x49A00C8400670C19 Ffma
                temp_528 = fma(temp_522, fp_c1.data[1].z, temp_302);
                // 0x000FF8: 0x5C68100001471717 Fmul
                temp_529 = temp_523 * temp_518;
                // 0x001008: 0x5C68100001471616 Fmul
                temp_530 = temp_524 * temp_518;
                // 0x001010: 0x49A00D0400670D1A Ffma
                temp_531 = fma(temp_525, fp_c1.data[1].z, temp_303);
                // 0x001018: 0x49A00D840067151B Ffma
                temp_532 = fma(temp_526, fp_c1.data[1].z, temp_304);
                // 0x001028: 0x49A0120400573424 Ffma
                temp_533 = fma(temp_527, fp_c1.data[1].y, temp_305);
                // 0x001030: 0x49A0128400571725 Ffma
                temp_534 = fma(temp_529, fp_c1.data[1].y, temp_306);
                // 0x001038: 0x49A0130400571626 Ffma
                temp_535 = fma(temp_530, fp_c1.data[1].y, temp_307);
                // 0x001048: 0xF0F800000007000F Sync
                temp_421 = temp_528;
                temp_422 = temp_531;
                temp_423 = temp_532;
                temp_424 = temp_533;
                temp_425 = temp_534;
                temp_426 = temp_535;
            }
            // 0x001050: 0xE2400FFFA689000F Bra
            temp_302 = temp_421;
            temp_303 = temp_422;
            temp_304 = temp_423;
            temp_305 = temp_424;
            temp_306 = temp_425;
            temp_307 = temp_426;
            temp_308 = temp_422;
            temp_309 = temp_421;
            temp_310 = temp_423;
            temp_311 = temp_426;
            temp_312 = temp_424;
            temp_313 = temp_425;
        }
        while (!temp_316);
        // 0x001058: 0xF0F800000007000F Sync
    }
    // 0x001068: 0x5C6257800117220D Fmnmx
    temp_536 = abs(temp_286);
    temp_537 = abs(temp_288);
    temp_538 = max(temp_536, temp_537);
    // 0x001070: 0xEF4410000007FF31 Ldl
    temp_539 = uintBitsToFloat(local_memory[0]);
    // 0x001078: 0x4C98079407E70015 Mov
    // 0x001088: 0xE003FF87CFF7FF27 Ipa
    // 0x001090: 0x5C6257800007100C Fmnmx
    temp_540 = abs(temp_64);
    temp_541 = abs(temp_63);
    temp_542 = max(temp_540, temp_541);
    // 0x001098: 0x4C98079C0207002B Mov
    // 0x0010A8: 0x5C60578000D70E14 Fmnmx
    temp_543 = abs(temp_290);
    temp_544 = max(temp_543, temp_538);
    // 0x0010B0: 0x4C6810180A071515 Fmul
    temp_545 = fp_c5.data[31].z * fp_c6.data[40].x;
    // 0x0010B8: 0x5080000000471414 Mufu
    temp_546 = 1.0 / temp_544;
    // 0x0010C8: 0x5C60578000C7120C Fmnmx
    temp_547 = abs(temp_62);
    temp_548 = max(temp_547, temp_542);
    // 0x0010D0: 0x5080000000470C0D Mufu
    temp_549 = 1.0 / temp_548;
    // 0x0010D8: 0x386013BF80071515 Fmnmx
    temp_550 = min(temp_545, 1.0);
    // 0x0010E8: 0x4C60178400071528 Fmnmx
    temp_551 = max(temp_550, fp_c1.data[0].x);
    // 0x0010F0: 0x5C68100001471116 Fmul
    temp_552 = temp_288 * temp_546;
    // 0x0010F8: 0x5C69100001470E17 Fmul
    temp_553 = 0.0 - temp_546;
    temp_554 = temp_290 * temp_553;
    // 0x001108: 0x5C68100001472215 Fmul
    temp_555 = temp_286 * temp_546;
    // 0x001110: 0x5080000000472727 Mufu
    // 0x001118: 0x5C69100000D71212 Fmul
    temp_556 = 0.0 - temp_549;
    temp_557 = temp_62 * temp_556;
    // 0x001128: 0x5C68100000D71010 Fmul
    temp_558 = temp_64 * temp_549;
    // 0x001130: 0x5C68100000D70011 Fmul
    temp_559 = temp_63 * temp_549;
    // 0x001138: 0x010000000017F014 Mov32i
    // 0x001148: 0xC0BA0163EFF7100C Tex
    temp_560 = textureLod(fp_t_tcb_16, vec3(temp_558, temp_559, temp_557), 0.0).xyz;
    temp_561 = temp_560.x;
    temp_562 = temp_560.y;
    temp_563 = temp_560.z;
    // 0x001150: 0x38681040E0072829 Fmul
    temp_564 = temp_551 * 7.0;
    // 0x001158: 0xE043FF910277FF2C Ipa
    temp_565 = in_attr9.x;
    // 0x001168: 0x3868104080072823 Fmul
    temp_566 = temp_551 * 4.0;
    // 0x001170: 0xE043FF914277FF2D Ipa
    temp_567 = in_attr9.y;
    // 0x001178: 0x5C98078001270022 Mov
    // 0x001188: 0xE043FF918277FF2E Ipa
    temp_568 = in_attr9.z;
    // 0x001190: 0xC1BA0143F2971414 Tex
    temp_569 = textureLod(fp_t_tcb_14, vec4(temp_555, temp_552, temp_554, float(1)), temp_564).xyz;
    temp_570 = temp_569.x;
    temp_571 = temp_569.y;
    temp_572 = temp_569.z;
    // 0x001198: 0xD9A2018232271010 Texs
    temp_573 = textureLod(fp_t_tcb_18, vec3(temp_558, temp_559, temp_557), temp_566).xyz;
    temp_574 = temp_573.x;
    temp_575 = temp_573.y;
    temp_576 = temp_573.z;
    // 0x0011A8: 0xDEBA0000C2B72C2B TexB
    temp_577 = texture(fp_t_cb7_20, vec3(temp_565, temp_567, temp_568)).x;
    // 0x0011B0: 0xEF44100000C7FF33 Ldl
    temp_578 = uintBitsToFloat(local_memory[3]);
    // 0x0011B8: 0xEF4410000047FF30 Ldl
    temp_579 = uintBitsToFloat(local_memory[1]);
    // 0x0011C8: 0x3859103F8007022A Fadd
    temp_580 = 0.0 - temp_166;
    temp_581 = temp_580 + 1.0;
    // 0x0011D0: 0x49A009980A171A13 Ffma
    temp_582 = fma(temp_308, fp_c6.data[40].y, temp_296);
    // 0x0011D8: 0x5080000000372A22 Mufu
    temp_583 = log2(temp_581);
    // 0x0011E8: 0x49A007980A17190F Ffma
    temp_584 = fma(temp_309, fp_c6.data[40].y, temp_294);
    // 0x0011F0: 0x49A00C180A171B18 Ffma
    temp_585 = fma(temp_310, fp_c6.data[40].y, temp_298);
    // 0x0011F8: 0x4C68101809072A1A Fmul
    temp_586 = temp_581 * fp_c6.data[36].x;
    // 0x001208: 0x5080400000371A1A Mufu
    temp_587 = abs(temp_586);
    temp_588 = log2(temp_587);
    // 0x001210: 0x49A019180A172632 Ffma
    temp_589 = fma(temp_311, fp_c6.data[40].y, temp_301);
    // 0x001218: 0x0103F0000007F012 Mov32i
    // 0x001228: 0x4C9807980B470026 Mov
    // 0x001230: 0x4C98079800870019 Mov
    // 0x001238: 0x4C98079800970017 Mov
    // 0x001248: 0xF0F0000034470000 Depbar
    // 0x001250: 0x49A018980A172424 Ffma
    temp_590 = fma(temp_312, fp_c6.data[40].y, temp_539);
    // 0x001258: 0xEF4410000087FF31 Ldl
    temp_591 = uintBitsToFloat(local_memory[2]);
    // 0x001268: 0x4C98079800A7001B Mov
    // 0x001270: 0x3859103F80072828 Fadd
    temp_592 = 0.0 - temp_551;
    temp_593 = temp_592 + 1.0;
    // 0x001278: 0x32A0093F00070000 Ffma
    temp_594 = fma(temp_63, 0.5, 0.5);
    // 0x001288: 0x51A213180B470112 Ffma
    temp_595 = 0.0 - fp_c6.data[45].x;
    temp_596 = fma(temp_99, fp_c6.data[45].x, temp_595);
    // 0x001290: 0x4C68101809171A01 Fmul
    temp_597 = temp_588 * fp_c6.data[36].y;
    // 0x001298: 0x4C59101800471919 Fadd
    temp_598 = 0.0 - fp_c6.data[2].x;
    temp_599 = temp_598 + fp_c6.data[1].x;
    // 0x0012A8: 0x4C59101800571717 Fadd
    temp_600 = 0.0 - fp_c6.data[2].y;
    temp_601 = temp_600 + fp_c6.data[1].y;
    // 0x0012B0: 0x4C59101800671B1B Fadd
    temp_602 = 0.0 - fp_c6.data[2].z;
    temp_603 = temp_602 + fp_c6.data[1].z;
    // 0x0012B8: 0x5C68100002872828 Fmul
    temp_604 = temp_593 * temp_593;
    // 0x0012C8: 0x5C9000800017002E Rro
    // 0x0012D0: 0x51A00C9800870019 Ffma
    temp_605 = fma(temp_594, temp_599, fp_c6.data[2].x);
    // 0x0012D8: 0x51A00B9800970017 Ffma
    temp_606 = fma(temp_594, temp_601, fp_c6.data[2].y);
    // 0x0012E8: 0x4C68101808972201 Fmul
    temp_607 = temp_583 * fp_c6.data[34].y;
    // 0x0012F0: 0x5084000000272E22 Mufu
    temp_608 = exp2(temp_597);
    temp_609 = clamp(temp_608, 0.0, 1.0);
    // 0x0012F8: 0x49A01B180A172536 Ffma
    temp_610 = fma(temp_313, fp_c6.data[40].y, temp_300);
    // 0x001308: 0x51A00D9800A70000 Ffma
    temp_611 = fma(temp_594, temp_603, fp_c6.data[2].z);
    // 0x001310: 0x010410676C97F02C Mov32i
    // 0x001318: 0x1E23E468DB970225 Fmul32i
    temp_612 = temp_166 * 0.193900004;
    // 0x001328: 0x4C98079809670029 Mov
    // 0x001330: 0x4C98079406B7001B Mov
    // 0x001338: 0x5C6810000287281A Fmul
    temp_613 = temp_604 * temp_604;
    // 0x001348: 0x51A213180B471D1D Ffma
    temp_614 = 0.0 - fp_c6.data[45].x;
    temp_615 = fma(temp_98, fp_c6.data[45].x, temp_614);
    // 0x001350: 0x51A213180B471C1C Ffma
    temp_616 = 0.0 - fp_c6.data[45].x;
    temp_617 = fma(temp_97, fp_c6.data[45].x, temp_616);
    // 0x001358: 0x49A0160400A7022C Ffma
    temp_618 = fma(temp_166, fp_c1.data[2].z, 8.40400028);
    // 0x001368: 0x4C58101408172929 Fadd
    temp_619 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001370: 0x4C68101809D71B2A Fmul
    temp_620 = fp_c5.data[26].w * fp_c6.data[39].y;
    // 0x001378: 0x49A0128400771A26 Ffma
    temp_621 = fma(temp_613, fp_c1.data[1].w, temp_612);
    // 0x001388: 0x0103E2CD9E87F028 Mov32i
    // 0x001390: 0x0104066978D7F02F Mov32i
    // 0x001398: 0x5C90008000170025 Rro
    // 0x0013A8: 0x51A0160400B7022D Ffma
    temp_622 = fma(temp_166, temp_618, fp_c1.data[2].w);
    // 0x0013B0: 0x5084000000272525 Mufu
    temp_623 = exp2(temp_607);
    temp_624 = clamp(temp_623, 0.0, 1.0);
    // 0x0013B8: 0x088BF05D6397262C Fadd32i
    temp_625 = temp_621 + -0.522800028;
    // 0x0013C8: 0x5C68100002A70401 Fmul
    temp_626 = temp_230 * temp_620;
    // 0x0013D0: 0x5C68100002272922 Fmul
    temp_627 = temp_619 * temp_609;
    // 0x0013D8: 0x49A2140400C71A04 Ffma
    temp_628 = fma(temp_613, fp_c1.data[3].x, -0.168799996);
    // 0x0013E8: 0x49A2178400871A29 Ffma
    temp_629 = fma(temp_613, fp_c1.data[2].x, -3.60299993);
    // 0x0013F0: 0x51A0168400D70226 Ffma
    temp_630 = fma(temp_166, temp_622, fp_c1.data[3].y);
    // 0x0013F8: 0x5C68100002C70228 Fmul
    temp_631 = temp_166 * temp_625;
    // 0x001408: 0x5C68100000471A2C Fmul
    temp_632 = temp_613 * temp_628;
    // 0x001410: 0xE04BFF904277FF04 Ipa
    temp_633 = in_attr8.y;
    temp_634 = clamp(temp_633, 0.0, 1.0);
    // 0x001418: 0x51A0148400971A29 Ffma
    temp_635 = fma(temp_613, temp_629, fp_c1.data[2].y);
    // 0x001428: 0x4C68101809E71B02 Fmul
    temp_636 = fp_c5.data[26].w * fp_c6.data[39].z;
    // 0x001430: 0x4C9807980867002E Mov
    // 0x001438: 0x4C68101808872525 Fmul
    temp_637 = temp_624 * fp_c6.data[34].x;
    // 0x001448: 0x5C60138002C7262C Fmnmx
    temp_638 = min(temp_630, temp_632);
    // 0x001450: 0x59A0140002971A28 Ffma
    temp_639 = fma(temp_613, temp_635, temp_631);
    // 0x001458: 0x4C68101809C71B2A Fmul
    temp_640 = fp_c5.data[26].w * fp_c6.data[39].x;
    // 0x001468: 0x5C68100000270502 Fmul
    temp_641 = temp_231 * temp_636;
    // 0x001470: 0x4C68101808D7221B Fmul
    temp_642 = temp_627 * fp_c6.data[35].y;
    // 0x001478: 0x51A0171808672505 Ffma
    temp_643 = fma(temp_637, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001488: 0x4C68101808E72225 Fmul
    temp_644 = temp_627 * fp_c6.data[35].z;
    // 0x001490: 0x386C104248070A26 Fmul
    temp_645 = temp_246 * 50.0;
    temp_646 = clamp(temp_645, 0.0, 1.0);
    // 0x001498: 0x5C5C30000FF72C29 Fadd
    temp_647 = temp_638 + -0.0;
    temp_648 = clamp(temp_647, 0.0, 1.0);
    // 0x0014A8: 0x4C5C100400E72828 Fadd
    temp_649 = temp_639 + fp_c1.data[3].z;
    temp_650 = clamp(temp_649, 0.0, 1.0);
    // 0x0014B0: 0x4C68101808C7221A Fmul
    temp_651 = temp_627 * fp_c6.data[35].x;
    // 0x0014B8: 0x49A01B1408271B36 Ffma
    temp_652 = fma(temp_642, fp_c5.data[32].z, temp_610);
    // 0x0014C8: 0x49A10D9408271B22 Ffma
    temp_653 = 0.0 - fp_c5.data[32].z;
    temp_654 = fma(temp_642, temp_653, temp_642);
    // 0x0014D0: 0x49A112940827251B Ffma
    temp_655 = 0.0 - fp_c5.data[32].z;
    temp_656 = fma(temp_644, temp_655, temp_644);
    // 0x0014D8: 0x5C68100002972626 Fmul
    temp_657 = temp_646 * temp_648;
    // 0x0014E8: 0x5C59100002872928 Fadd
    temp_658 = 0.0 - temp_648;
    temp_659 = temp_658 + temp_650;
    // 0x0014F0: 0xF0F0000034470000 Depbar
    // 0x0014F8: 0x49A006040067190C Ffma
    temp_660 = fma(temp_605, fp_c1.data[1].z, temp_561);
    // 0x001508: 0x5C58100001871B18 Fadd
    temp_661 = temp_656 + temp_585;
    // 0x001510: 0x59A0130002870A1B Ffma
    temp_662 = fma(temp_246, temp_659, temp_657);
    // 0x001518: 0x49A006840067170A Ffma
    temp_663 = fma(temp_606, fp_c1.data[1].z, temp_562);
    // 0x001528: 0x49A0121408271A24 Ffma
    temp_664 = fma(temp_651, fp_c5.data[32].z, temp_590);
    // 0x001530: 0x49A10D1408271A1A Ffma
    temp_665 = 0.0 - fp_c5.data[32].z;
    temp_666 = fma(temp_651, temp_665, temp_651);
    // 0x001538: 0x4C68101808772121 Fmul
    temp_667 = temp_95 * fp_c6.data[33].w;
    // 0x001548: 0x59A2060000571E1E Ffma
    temp_668 = 0.0 - temp_660;
    temp_669 = fma(temp_92, temp_643, temp_668);
    // 0x001550: 0x49A007040067000E Ffma
    temp_670 = fma(temp_611, fp_c1.data[1].z, temp_563);
    // 0x001558: 0xE043FF900277FF00 Ipa
    temp_671 = in_attr8.x;
    // 0x001568: 0x59A2050000571F1F Ffma
    temp_672 = 0.0 - temp_663;
    temp_673 = fma(temp_93, temp_643, temp_672);
    // 0x001570: 0xE043FF8C8277FF27 Ipa
    temp_674 = in_attr4.z;
    // 0x001578: 0x5C58100000F71A0F Fadd
    temp_675 = temp_666 + temp_584;
    // 0x001588: 0x010404000007F01A Mov32i
    // 0x001590: 0x59A0060002171E1E Ffma
    temp_676 = fma(temp_669, temp_667, temp_660);
    // 0x001598: 0x59A2070000572005 Ffma
    temp_677 = 0.0 - temp_670;
    temp_678 = fma(temp_94, temp_643, temp_677);
    // 0x0015A8: 0x5C58100001372213 Fadd
    temp_679 = temp_654 + temp_582;
    // 0x0015B0: 0x59A0050002171F0A Ffma
    temp_680 = fma(temp_673, temp_667, temp_663);
    // 0x0015B8: 0x59A0130002870909 Ffma
    temp_681 = fma(temp_245, temp_659, temp_657);
    // 0x0015C8: 0x33A00D400007040D Ffma
    temp_682 = fma(temp_634, -2.0, 3.0);
    // 0x0015D0: 0x5C68100000470404 Fmul
    temp_683 = temp_634 * temp_634;
    // 0x0015D8: 0xF0F0000034370000 Depbar
    // 0x0015E8: 0x49A0081808571417 Ffma
    temp_684 = fma(temp_570, fp_c6.data[33].y, temp_574);
    // 0x0015F0: 0x5C58100000F71E0F Fadd
    temp_685 = temp_676 + temp_675;
    // 0x0015F8: 0x59A0070002170505 Ffma
    temp_686 = fma(temp_678, temp_667, temp_670);
    // 0x001608: 0x5C58100001370A0A Fadd
    temp_687 = temp_680 + temp_679;
    // 0x001610: 0x49A008980857150C Ffma
    temp_688 = fma(temp_571, fp_c6.data[33].y, temp_575);
    // 0x001618: 0x5C68100000470D04 Fmul
    temp_689 = temp_682 * temp_683;
    // 0x001628: 0x59A0120001770909 Ffma
    temp_690 = fma(temp_681, temp_684, temp_664);
    // 0x001630: 0x49A1079407C70F0F Ffma
    temp_691 = 0.0 - fp_c5.data[31].x;
    temp_692 = fma(temp_685, temp_691, temp_685);
    // 0x001638: 0x49A0191408272532 Ffma
    temp_693 = fma(temp_644, fp_c5.data[32].z, temp_589);
    // 0x001648: 0x59A0130002870B0B Ffma
    temp_694 = fma(temp_247, temp_659, temp_657);
    // 0x001650: 0x49A011980857160D Ffma
    temp_695 = fma(temp_572, fp_c6.data[33].y, temp_576);
    // 0x001658: 0x5C58100001870505 Fadd
    temp_696 = temp_686 + temp_661;
    // 0x001668: 0x59A01B0000C71B0C Ffma
    temp_697 = fma(temp_662, temp_688, temp_652);
    // 0x001670: 0x49A1051407C70A0A Ffma
    temp_698 = 0.0 - fp_c5.data[31].x;
    temp_699 = fma(temp_687, temp_698, temp_687);
    // 0x001678: 0x59A0048000F70606 Ffma
    temp_700 = fma(temp_232, temp_692, temp_690);
    // 0x001688: 0x59A0190000D70B0B Ffma
    temp_701 = fma(temp_694, temp_695, temp_693);
    // 0x001690: 0x49A1029407C70505 Ffma
    temp_702 = 0.0 - fp_c5.data[31].x;
    temp_703 = fma(temp_696, temp_702, temp_696);
    // 0x001698: 0x59A0060000A70707 Ffma
    temp_704 = fma(temp_233, temp_699, temp_697);
    // 0x0016A8: 0x5C68100002A70303 Fmul
    temp_705 = temp_229 * temp_640;
    // 0x0016B0: 0xF0F0000034170000 Depbar
    // 0x0016B8: 0x5C68100000673306 Fmul
    temp_706 = temp_578 * temp_700;
    // 0x0016C8: 0x4C98079802870009 Mov
    // 0x0016D0: 0x59A0058000570805 Ffma
    temp_707 = fma(temp_234, temp_703, temp_701);
    // 0x0016D8: 0x4C9807980297000E Mov
    // 0x0016E8: 0x49A500180BC72B2B Ffma
    temp_708 = 0.0 - fp_c6.data[47].x;
    temp_709 = fma(temp_577, temp_708, temp_671);
    temp_710 = clamp(temp_709, 0.0, 1.0);
    // 0x0016F0: 0x49A0031406C70300 Ffma
    temp_711 = fma(temp_705, fp_c5.data[27].x, temp_706);
    // 0x0016F8: 0x5080000000372B2B Mufu
    temp_712 = log2(temp_710);
    // 0x001708: 0x51A0049802871C09 Ffma
    temp_713 = fma(temp_617, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001710: 0x5C68100000573003 Fmul
    temp_714 = temp_579 * temp_707;
    // 0x001718: 0x51A0071802971D0A Ffma
    temp_715 = fma(temp_615, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001728: 0x4C98079802A70008 Mov
    // 0x001730: 0x5C58300000970006 Fadd
    temp_716 = 0.0 - temp_713;
    temp_717 = temp_711 + temp_716;
    // 0x001738: 0x49A0019406C70202 Ffma
    temp_718 = fma(temp_641, fp_c5.data[27].x, temp_714);
    // 0x001748: 0x51A0041802A71205 Ffma
    temp_719 = fma(temp_596, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001750: 0x4C68101803770404 Fmul
    temp_720 = temp_689 * fp_c6.data[13].w;
    // 0x001758: 0x4C68101803172B08 Fmul
    temp_721 = temp_712 * fp_c6.data[12].y;
    // 0x001768: 0x5C9000800087000B Rro
    // 0x001770: 0x49A2021803470408 Ffma
    temp_722 = 0.0 - temp_720;
    temp_723 = fma(temp_720, fp_c6.data[13].x, temp_722);
    // 0x001778: 0x5C68100000773107 Fmul
    temp_724 = temp_591 * temp_704;
    // 0x001788: 0x49A0039406C70101 Ffma
    temp_725 = fma(temp_626, fp_c5.data[27].x, temp_724);
    // 0x001790: 0x5C58300000A70103 Fadd
    temp_726 = 0.0 - temp_715;
    temp_727 = temp_725 + temp_726;
    // 0x001798: 0x49A004980BF70607 Ffma
    temp_728 = fma(temp_717, fp_c6.data[47].w, temp_713);
    // 0x0017A8: 0x5C58300000570206 Fadd
    temp_729 = 0.0 - temp_719;
    temp_730 = temp_718 + temp_729;
    // 0x0017B0: 0x49A005180BF70303 Ffma
    temp_731 = fma(temp_727, fp_c6.data[47].w, temp_715);
    // 0x0017B8: 0x5C60178000770907 Fmnmx
    temp_732 = max(temp_713, temp_728);
    // 0x0017C8: 0x49A002980BF70606 Ffma
    temp_733 = fma(temp_730, fp_c6.data[47].w, temp_719);
    // 0x0017D0: 0x49A2021803570409 Ffma
    temp_734 = 0.0 - temp_720;
    temp_735 = fma(temp_720, fp_c6.data[13].y, temp_734);
    // 0x0017D8: 0x5C60178000370A03 Fmnmx
    temp_736 = max(temp_715, temp_731);
    // 0x0017E8: 0x5080000000270B0A Mufu
    temp_737 = exp2(temp_721);
    // 0x0017F0: 0x49A2021803670404 Ffma
    temp_738 = 0.0 - temp_720;
    temp_739 = fma(temp_720, fp_c6.data[13].z, temp_738);
    // 0x0017F8: 0x5C60178000670506 Fmnmx
    temp_740 = max(temp_719, temp_733);
    // 0x001808: 0x59A0038000870707 Ffma
    temp_741 = fma(temp_732, temp_723, temp_732);
    // 0x001810: 0x59A0018000970308 Ffma
    temp_742 = fma(temp_736, temp_735, temp_736);
    // 0x001818: 0x59A0030000470605 Ffma
    temp_743 = fma(temp_740, temp_739, temp_740);
    // 0x001828: 0x5C59100000870104 Fadd
    temp_744 = 0.0 - temp_725;
    temp_745 = temp_744 + temp_742;
    // 0x001830: 0x4C68101802B70A06 Fmul
    temp_746 = temp_737 * fp_c6.data[10].w;
    // 0x001838: 0x5C59100000770003 Fadd
    temp_747 = 0.0 - temp_711;
    temp_748 = temp_747 + temp_741;
    // 0x001848: 0x5C59100000570205 Fadd
    temp_749 = 0.0 - temp_718;
    temp_750 = temp_749 + temp_743;
    // 0x001850: 0x59A0008000670401 Ffma
    temp_751 = fma(temp_745, temp_746, temp_725);
    // 0x001858: 0x4C58100C03872704 Fadd
    temp_752 = temp_674 + fp_c3.data[14].x;
    // 0x001868: 0x59A0000000670300 Ffma
    temp_753 = fma(temp_748, temp_746, temp_711);
    // 0x001870: 0x59A0010000670502 Ffma
    temp_754 = fma(temp_750, temp_746, temp_718);
    // 0x001878: 0x0103F8000007F003 Mov32i
    // 0x001888: 0x0103EC000007F005 Mov32i
    // 0x001890: 0x5C9807800FF70006 Mov
    // 0x001898: 0x0103F8000007F007 Mov32i
    // 0x0018A8: 0x49A37F8C03C70404 Ffma
    temp_755 = 0.0 - fp_c3.data[15].x;
    temp_756 = fma(temp_752, temp_755, -0.0);
    // 0x0018B0: 0xE30000000007000F Exit
    out_attr0.x = temp_753;
    out_attr0.y = temp_751;
    out_attr0.z = temp_754;
    out_attr0.w = 1.0;
    out_attr1.x = temp_756;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
