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
layout (binding = 1) uniform sampler2D fp_t_tcb_2C;
layout (binding = 2) uniform sampler2D fp_t_tcb_22;
layout (binding = 3) uniform sampler2D fp_t_tcb_36;
layout (binding = 4) uniform sampler2D fp_t_tcb_24;
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
    precise vec3 temp_93;
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
    bool temp_113;
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
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    uint temp_211;
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
    int temp_229;
    precise float temp_230;
    int temp_231;
    uint temp_232;
    uint temp_233;
    int temp_234;
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
    bool temp_288;
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
    int temp_309;
    bool temp_310;
    int temp_311;
    int temp_312;
    int temp_313;
    int temp_314;
    uint temp_315;
    uint temp_316;
    int temp_317;
    precise float temp_318;
    int temp_319;
    int temp_320;
    uint temp_321;
    uint temp_322;
    int temp_323;
    precise float temp_324;
    int temp_325;
    uint temp_326;
    int temp_327;
    precise float temp_328;
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
    precise float temp_370;
    precise float temp_371;
    precise float temp_372;
    precise float temp_373;
    int temp_374;
    uint temp_375;
    uint temp_376;
    int temp_377;
    precise float temp_378;
    int temp_379;
    uint temp_380;
    int temp_381;
    precise float temp_382;
    precise float temp_383;
    precise float temp_384;
    precise float temp_385;
    precise float temp_386;
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
    precise float temp_406;
    precise float temp_407;
    uint temp_408;
    int temp_409;
    bool temp_410;
    uint temp_411;
    precise float temp_412;
    precise float temp_413;
    precise float temp_414;
    precise float temp_415;
    precise float temp_416;
    precise float temp_417;
    precise float temp_418;
    uint temp_419;
    precise float temp_420;
    bool temp_421;
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
    precise float temp_452;
    precise float temp_453;
    int temp_454;
    uint temp_455;
    uint temp_456;
    int temp_457;
    precise float temp_458;
    precise float temp_459;
    precise float temp_460;
    precise float temp_461;
    precise float temp_462;
    precise float temp_463;
    precise float temp_464;
    precise float temp_465;
    uint temp_466;
    uint temp_467;
    int temp_468;
    precise float temp_469;
    int temp_470;
    uint temp_471;
    int temp_472;
    precise float temp_473;
    precise float temp_474;
    int temp_475;
    uint temp_476;
    uint temp_477;
    int temp_478;
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
    int temp_533;
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
    precise vec3 temp_552;
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
    precise vec3 temp_563;
    precise float temp_564;
    precise float temp_565;
    precise float temp_566;
    precise vec3 temp_567;
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
    precise float temp_741;
    precise float temp_742;
    precise float temp_743;
    precise float temp_744;
    precise float temp_745;
    // 0x000008: 0xE003FF87CFF7FF0C Ipa
    // 0x000010: 0x5080000000470C0C Mufu
    // 0x000018: 0xE043FF8E00C7FF04 Ipa
    temp_0 = in_attr6.x;
    // 0x000028: 0xE043FF8E40C7FF03 Ipa
    temp_1 = in_attr6.y;
    // 0x000030: 0xD830026FF0370400 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000038: 0xE043FF8A00C7FF02 Ipa
    temp_5 = in_attr2.x;
    // 0x000048: 0xE043FF8A40C7FF05 Ipa
    temp_6 = in_attr2.y;
    // 0x000050: 0xE043FF8A80C7FF06 Ipa
    temp_7 = in_attr2.z;
    // 0x000058: 0xE043FF8900C7FF08 Ipa
    temp_8 = in_attr1.x;
    // 0x000068: 0xE043FF8940C7FF09 Ipa
    temp_9 = in_attr1.y;
    // 0x000070: 0xE043FF8800C7FF0F Ipa
    temp_10 = in_attr0.x;
    // 0x000078: 0xE043FF8980C7FF0A Ipa
    temp_11 = in_attr1.z;
    // 0x000088: 0xE043FF8840C7FF10 Ipa
    temp_12 = in_attr0.y;
    // 0x000090: 0xE043FF8880C7FF11 Ipa
    temp_13 = in_attr0.z;
    // 0x000098: 0x5C68100000270207 Fmul
    temp_14 = temp_5 * temp_5;
    // 0x0000A8: 0x5C6810000087080B Fmul
    temp_15 = temp_8 * temp_8;
    // 0x0000B0: 0x5C68100000F70F0D Fmul
    temp_16 = temp_10 * temp_10;
    // 0x0000B8: 0x59A0038000570507 Ffma
    temp_17 = fma(temp_6, temp_6, temp_14);
    // 0x0000C8: 0x59A005800097090B Ffma
    temp_18 = fma(temp_9, temp_9, temp_15);
    // 0x0000D0: 0x59A0068001071012 Ffma
    temp_19 = fma(temp_12, temp_12, temp_16);
    // 0x0000D8: 0x59A0038000670607 Ffma
    temp_20 = fma(temp_7, temp_7, temp_17);
    // 0x0000E8: 0x5080000000570707 Mufu
    temp_21 = inversesqrt(temp_20);
    // 0x0000F0: 0x59A0058000A70A0B Ffma
    temp_22 = fma(temp_11, temp_11, temp_18);
    // 0x0000F8: 0x5080000000570B0B Mufu
    temp_23 = inversesqrt(temp_22);
    // 0x000108: 0x59A0090001171112 Ffma
    temp_24 = fma(temp_13, temp_13, temp_19);
    // 0x000110: 0x5080000000571212 Mufu
    temp_25 = inversesqrt(temp_24);
    // 0x000118: 0x5C68100000770202 Fmul
    temp_26 = temp_5 * temp_21;
    // 0x000128: 0x5C6810000077050E Fmul
    temp_27 = temp_6 * temp_21;
    // 0x000130: 0x5C68100000770606 Fmul
    temp_28 = temp_7 * temp_21;
    // 0x000138: 0x5C68100000B70805 Fmul
    temp_29 = temp_8 * temp_23;
    // 0x000148: 0xE003FF870FF7FF08 Ipa
    temp_30 = gl_FragCoord.x;
    temp_31 = support_buffer.render_scale[0];
    temp_32 = temp_30 / temp_31;
    // 0x000150: 0x5C68100000B70909 Fmul
    temp_33 = temp_9 * temp_23;
    // 0x000158: 0x5C68100000B70A0D Fmul
    temp_34 = temp_11 * temp_23;
    // 0x000168: 0xE003FF874FF7FF0A Ipa
    temp_35 = gl_FragCoord.y;
    temp_36 = support_buffer.render_scale[0];
    temp_37 = temp_35 / temp_36;
    // 0x000170: 0x5C68100001270F0F Fmul
    temp_38 = temp_10 * temp_25;
    // 0x000178: 0x5C68100001271010 Fmul
    temp_39 = temp_12 * temp_25;
    // 0x000188: 0x5C68100001271111 Fmul
    temp_40 = temp_13 * temp_25;
    // 0x000190: 0x5C68100000170107 Fmul
    temp_41 = temp_4 * temp_4;
    // 0x000198: 0x5C68100000170202 Fmul
    temp_42 = temp_26 * temp_4;
    // 0x0001A8: 0x5C68100000170E0E Fmul
    temp_43 = temp_27 * temp_4;
    // 0x0001B0: 0x5C68100000170606 Fmul
    temp_44 = temp_28 * temp_4;
    // 0x0001B8: 0x59A0038000070007 Ffma
    temp_45 = fma(temp_3, temp_3, temp_41);
    // 0x0001C8: 0x59A0010000570002 Ffma
    temp_46 = fma(temp_3, temp_29, temp_42);
    // 0x0001D0: 0xE043FF8EC0C7FF05 Ipa
    temp_47 = in_attr6.w;
    // 0x0001D8: 0x59A0070000970009 Ffma
    temp_48 = fma(temp_3, temp_33, temp_43);
    // 0x0001E8: 0x59A0030000D70006 Ffma
    temp_49 = fma(temp_3, temp_34, temp_44);
    // 0x0001F0: 0x385D103F80070707 Fadd
    temp_50 = 0.0 - temp_45;
    temp_51 = temp_50 + 1.0;
    temp_52 = clamp(temp_51, 0.0, 1.0);
    // 0x0001F8: 0x5080000000870707 Mufu
    temp_53 = sqrt(temp_52);
    // 0x000208: 0x59A0010000770F02 Ffma
    temp_54 = fma(temp_38, temp_53, temp_46);
    // 0x000210: 0x59A0048000771009 Ffma
    temp_55 = fma(temp_39, temp_53, temp_48);
    // 0x000218: 0x59A0030000771106 Ffma
    temp_56 = fma(temp_40, temp_53, temp_49);
    // 0x000228: 0x5C68100000270200 Fmul
    temp_57 = temp_54 * temp_54;
    // 0x000230: 0x59A0000000970900 Ffma
    temp_58 = fma(temp_55, temp_55, temp_57);
    // 0x000238: 0x59A0000000670601 Ffma
    temp_59 = fma(temp_56, temp_56, temp_58);
    // 0x000248: 0x5080000000570107 Mufu
    temp_60 = inversesqrt(temp_59);
    // 0x000250: 0x5C68100000770633 Fmul
    temp_61 = temp_56 * temp_60;
    // 0x000258: 0xE043FF8E80C7FF06 Ipa
    temp_62 = in_attr6.z;
    // 0x000268: 0x5C68100000770900 Fmul
    temp_63 = temp_55 * temp_60;
    // 0x000270: 0x5C6810000077022A Fmul
    temp_64 = temp_54 * temp_60;
    // 0x000278: 0x4C68100C04A70807 Fmul
    temp_65 = temp_32 * fp_c3.data[18].z;
    // 0x000288: 0x4C68100C04B70A08 Fmul
    temp_66 = temp_37 * fp_c3.data[18].w;
    // 0x000290: 0x4C68100C00673309 Fmul
    temp_67 = temp_61 * fp_c3.data[1].z;
    // 0x000298: 0x4C68100C00273302 Fmul
    temp_68 = temp_61 * fp_c3.data[0].z;
    // 0x0002A8: 0x49A0048C00570009 Ffma
    temp_69 = fma(temp_63, fp_c3.data[1].y, temp_67);
    // 0x0002B0: 0x49A0010C00170001 Ffma
    temp_70 = fma(temp_63, fp_c3.data[0].y, temp_68);
    // 0x0002B8: 0x49A0048C00472A09 Ffma
    temp_71 = fma(temp_64, fp_c3.data[1].x, temp_69);
    // 0x0002C8: 0x49A0008C00072A01 Ffma
    temp_72 = fma(temp_64, fp_c3.data[0].x, temp_70);
    // 0x0002D0: 0x4C69100C03E70909 Fmul
    temp_73 = 0.0 - fp_c3.data[15].z;
    temp_74 = temp_71 * temp_73;
    // 0x0002D8: 0x4C68101808B70101 Fmul
    temp_75 = temp_72 * fp_c6.data[34].w;
    // 0x0002E8: 0xD82002CFF0570605 Texs
    temp_76 = texture(fp_t_tcb_2C, vec2(temp_62, temp_47)).x;
    // 0x0002F0: 0x4C68101808B70909 Fmul
    temp_77 = temp_74 * fp_c6.data[34].w;
    // 0x0002F8: 0x49A0038400370124 Ffma
    temp_78 = fma(temp_75, fp_c1.data[0].w, temp_65);
    // 0x000308: 0x49A0040400370925 Ffma
    temp_79 = fma(temp_77, fp_c1.data[0].w, temp_66);
    // 0x000310: 0xD832022262572424 Texs
    temp_80 = texture(fp_t_tcb_22, vec2(temp_78, temp_79)).xyzw;
    temp_81 = temp_80.x;
    temp_82 = temp_80.y;
    temp_83 = temp_80.z;
    temp_84 = temp_80.w;
    // 0x000318: 0xD8240360D0370428 Texs
    temp_85 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_86 = temp_85.x;
    temp_87 = temp_85.y;
    temp_88 = temp_85.z;
    // 0x000328: 0xD822024010370420 Texs
    temp_89 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_90 = temp_89.x;
    temp_91 = temp_89.y;
    temp_92 = temp_89.z;
    // 0x000330: 0xD822020020870722 Texs
    temp_93 = texture(fp_t_tcb_20, vec2(temp_65, temp_66)).xyz;
    temp_94 = temp_93.x;
    temp_95 = temp_93.y;
    temp_96 = temp_93.z;
    // 0x000338: 0xE043FF8B00C7FF38 Ipa
    temp_97 = in_attr3.x;
    // 0x000348: 0xE043FF8B40C7FF37 Ipa
    temp_98 = in_attr3.y;
    // 0x000350: 0xE043FF8B80C7FF35 Ipa
    temp_99 = in_attr3.z;
    // 0x000358: 0x5C68100003873809 Fmul
    temp_100 = temp_97 * temp_97;
    // 0x000368: 0x59A004800377370A Ffma
    temp_101 = fma(temp_98, temp_98, temp_100);
    // 0x000370: 0x59A005000357350A Ffma
    temp_102 = fma(temp_99, temp_99, temp_101);
    // 0x000378: 0x5080000000570A0A Mufu
    temp_103 = inversesqrt(temp_102);
    // 0x000388: 0x5C69100000A73838 Fmul
    temp_104 = 0.0 - temp_103;
    temp_105 = temp_97 * temp_104;
    // 0x000390: 0x5C69100000A73737 Fmul
    temp_106 = 0.0 - temp_103;
    temp_107 = temp_98 * temp_106;
    // 0x000398: 0x5C69100000A73535 Fmul
    temp_108 = 0.0 - temp_103;
    temp_109 = temp_99 * temp_108;
    // 0x0003A8: 0xF0F0000034470000 Depbar
    // 0x0003B0: 0x4C58101406270503 Fadd
    temp_110 = temp_76 + fp_c5.data[24].z;
    // 0x0003B8: 0x395C103F80070303 Fadd
    temp_111 = temp_110 + -1.0;
    temp_112 = clamp(temp_111, 0.0, 1.0);
    // 0x0003C8: 0x4BB1839406070307 Fsetp
    temp_113 = temp_112 < fp_c5.data[24].x;
    // 0x0003D0: 0xE24000000688000F Bra
    if (temp_113)
    {
        // 0x0003D8: 0x5C9807800FF70000 Mov
        // 0x0003E8: 0xE33000000007000F Kil
        discard;
    }
    // 0x000448: 0x4C58301805C73804 Fadd
    temp_114 = 0.0 - fp_c6.data[23].x;
    temp_115 = temp_105 + temp_114;
    // 0x000450: 0xE2900000BB800000 Ssy
    // 0x000458: 0x4C58301805D73705 Fadd
    temp_116 = 0.0 - fp_c6.data[23].y;
    temp_117 = temp_107 + temp_116;
    // 0x000468: 0x4C58301805E73506 Fadd
    temp_118 = 0.0 - fp_c6.data[23].z;
    temp_119 = temp_109 + temp_118;
    // 0x000470: 0xF0F0000034270000 Depbar
    // 0x000478: 0x4C6810180A072828 Fmul
    temp_120 = temp_86 * fp_c6.data[40].x;
    // 0x000488: 0x0103F0000007F02B Mov32i
    // 0x000490: 0x4C69101805C72A15 Fmul
    temp_121 = 0.0 - fp_c6.data[23].x;
    temp_122 = temp_64 * temp_121;
    // 0x000498: 0x5C6810000047040A Fmul
    temp_123 = temp_115 * temp_115;
    // 0x0004A8: 0x4C98079808A70017 Mov
    // 0x0004B0: 0x385D103F80070D0D Fadd
    temp_124 = 0.0 - temp_88;
    temp_125 = temp_124 + 1.0;
    temp_126 = clamp(temp_125, 0.0, 1.0);
    // 0x0004B8: 0x5C9807800FF7001D Mov
    // 0x0004C8: 0x5C9807800FF7001F Mov
    // 0x0004D0: 0x5C9807800FF70032 Mov
    // 0x0004D8: 0x59A0050000570509 Ffma
    temp_127 = fma(temp_117, temp_117, temp_123);
    // 0x0004E8: 0x4C68101808771717 Fmul
    temp_128 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x0004F0: 0x59A0048000670609 Ffma
    temp_129 = fma(temp_119, temp_119, temp_127);
    // 0x0004F8: 0x508000000057090B Mufu
    temp_130 = inversesqrt(temp_129);
    // 0x000508: 0x5C68100000B7040F Fmul
    temp_131 = temp_115 * temp_130;
    // 0x000510: 0x5C68100000B70511 Fmul
    temp_132 = temp_117 * temp_130;
    // 0x000518: 0x5C68100000B70610 Fmul
    temp_133 = temp_119 * temp_130;
    // 0x000528: 0x386013BF80072804 Fmnmx
    temp_134 = min(temp_120, 1.0);
    // 0x000530: 0x5C68100003872A05 Fmul
    temp_135 = temp_64 * temp_105;
    // 0x000538: 0x5C9807800FF70028 Mov
    // 0x000548: 0x5C68100000F7380A Fmul
    temp_136 = temp_105 * temp_131;
    // 0x000550: 0x5C68100000F72A06 Fmul
    temp_137 = temp_64 * temp_131;
    // 0x000558: 0x4C69101805C70F0F Fmul
    temp_138 = 0.0 - fp_c6.data[23].x;
    temp_139 = temp_131 * temp_138;
    // 0x000568: 0x4C60178400070404 Fmnmx
    temp_140 = max(temp_134, fp_c1.data[0].x);
    // 0x000570: 0x59A005000117370B Ffma
    temp_141 = fma(temp_107, temp_132, temp_136);
    // 0x000578: 0x01040DF760C7F00A Mov32i
    // 0x000588: 0x59A0030001170009 Ffma
    temp_142 = fma(temp_63, temp_132, temp_137);
    // 0x000590: 0x51A402040007040E Ffma
    temp_143 = fma(temp_140, temp_140, fp_c1.data[0].x);
    temp_144 = clamp(temp_143, 0.0, 1.0);
    // 0x000598: 0x49A1079805D7110F Ffma
    temp_145 = 0.0 - fp_c6.data[23].y;
    temp_146 = fma(temp_132, temp_145, temp_139);
    // 0x0005A8: 0x59A0028003770006 Ffma
    temp_147 = fma(temp_63, temp_107, temp_135);
    // 0x0005B0: 0x59A4058001073513 Ffma
    temp_148 = fma(temp_109, temp_133, temp_141);
    temp_149 = clamp(temp_148, 0.0, 1.0);
    // 0x0005B8: 0x32A015BF0007042B Ffma
    temp_150 = fma(temp_140, 0.5, 0.5);
    // 0x0005C8: 0x59A404800107330B Ffma
    temp_151 = fma(temp_61, temp_133, temp_142);
    temp_152 = clamp(temp_151, 0.0, 1.0);
    // 0x0005D0: 0x5C68100000E70E12 Fmul
    temp_153 = temp_144 * temp_144;
    // 0x0005D8: 0x49A5079805E7100F Ffma
    temp_154 = 0.0 - fp_c6.data[23].z;
    temp_155 = fma(temp_133, temp_154, temp_146);
    temp_156 = clamp(temp_155, 0.0, 1.0);
    // 0x0005E8: 0x3868104180070710 Fmul
    temp_157 = temp_65 * 16.0;
    // 0x0005F0: 0x49A2050400271314 Ffma
    temp_158 = fma(temp_149, fp_c1.data[0].z, -6.98316002);
    // 0x0005F8: 0x5CA8148001070A10 F2f
    temp_159 = floor(temp_157);
    // 0x000608: 0x59A4030003573305 Ffma
    temp_160 = fma(temp_61, temp_109, temp_147);
    temp_161 = clamp(temp_160, 0.0, 1.0);
    // 0x000610: 0x59A2058001270B12 Ffma
    temp_162 = 0.0 - temp_152;
    temp_163 = fma(temp_152, temp_153, temp_162);
    // 0x000618: 0x49A10A9805D70009 Ffma
    temp_164 = 0.0 - fp_c6.data[23].y;
    temp_165 = fma(temp_63, temp_164, temp_122);
    // 0x000628: 0x5C68120002B72B2B Fmul
    temp_166 = temp_150 * 0.5;
    temp_167 = temp_166 * temp_150;
    // 0x000630: 0xF0F0000034170000 Depbar
    // 0x000638: 0x4C58301407B72006 Fadd
    temp_168 = 0.0 - fp_c5.data[30].w;
    temp_169 = temp_90 + temp_168;
    // 0x000648: 0x5C68100001471313 Fmul
    temp_170 = temp_149 * temp_158;
    // 0x000650: 0x49A2050400270F0A Ffma
    temp_171 = fma(temp_156, fp_c1.data[0].z, -6.98316002);
    // 0x000658: 0x51A0090400170B12 Ffma
    temp_172 = fma(temp_152, temp_163, fp_c1.data[0].y);
    // 0x000668: 0x49A5049805E73309 Ffma
    temp_173 = 0.0 - fp_c6.data[23].z;
    temp_174 = fma(temp_61, temp_173, temp_165);
    temp_175 = clamp(temp_174, 0.0, 1.0);
    // 0x000670: 0x5080000000471215 Mufu
    temp_176 = 1.0 / temp_172;
    // 0x000678: 0x59A1028002B70514 Ffma
    temp_177 = 0.0 - temp_167;
    temp_178 = fma(temp_161, temp_177, temp_161);
    // 0x000688: 0x5C90008001370013 Rro
    // 0x000690: 0x51A0031407B72906 Ffma
    temp_179 = fma(temp_87, temp_169, fp_c5.data[30].w);
    // 0x000698: 0x508000000027130B Mufu
    temp_180 = exp2(temp_170);
    // 0x0006A8: 0x5C68100000A70F0A Fmul
    temp_181 = temp_156 * temp_171;
    // 0x0006B0: 0x59A1048002B70911 Ffma
    temp_182 = 0.0 - temp_167;
    temp_183 = fma(temp_175, temp_182, temp_175);
    // 0x0006B8: 0x5C58100001472B14 Fadd
    temp_184 = temp_167 + temp_178;
    // 0x0006C8: 0x4C68101801470907 Fmul
    temp_185 = temp_175 * fp_c6.data[5].x;
    // 0x0006D0: 0x5080000000471414 Mufu
    temp_186 = 1.0 / temp_184;
    // 0x0006D8: 0x3859103F8007050F Fadd
    temp_187 = 0.0 - temp_161;
    temp_188 = temp_187 + 1.0;
    // 0x0006E8: 0x5C68100000570036 Fmul
    temp_189 = temp_63 * temp_161;
    // 0x0006F0: 0x3868104110070813 Fmul
    temp_190 = temp_66 * 9.0;
    // 0x0006F8: 0x5C58100001172B11 Fadd
    temp_191 = temp_167 + temp_183;
    // 0x000708: 0x5CA8148001370A13 F2f
    temp_192 = floor(temp_190);
    // 0x000710: 0x5C68100001570E0E Fmul
    temp_193 = temp_144 * temp_176;
    // 0x000718: 0x5080000000471111 Mufu
    temp_194 = 1.0 / temp_191;
    // 0x000728: 0x59A1058000B70608 Ffma
    temp_195 = 0.0 - temp_180;
    temp_196 = fma(temp_179, temp_195, temp_180);
    // 0x000730: 0x1E23EA2F98370712 Fmul32i
    temp_197 = temp_185 * 0.318309873;
    // 0x000738: 0x51A0131801671715 Ffma
    temp_198 = fma(temp_128, temp_83, fp_c6.data[5].z);
    // 0x000748: 0x5C6C100000F70F0F Fmul
    temp_199 = temp_188 * temp_188;
    temp_200 = clamp(temp_199, 0.0, 1.0);
    // 0x000750: 0x5C68100000573334 Fmul
    temp_201 = temp_61 * temp_161;
    // 0x000758: 0x3868103F0007141B Fmul
    temp_202 = temp_186 * 0.5;
    // 0x000768: 0x5C58100000870608 Fadd
    temp_203 = temp_179 + temp_196;
    // 0x000770: 0x5C68100000E70E0E Fmul
    temp_204 = temp_193 * temp_193;
    // 0x000778: 0x51A0129801571714 Ffma
    temp_205 = fma(temp_128, temp_82, fp_c6.data[5].y);
    // 0x000788: 0x32A21BC000073636 Ffma
    temp_206 = 0.0 - temp_107;
    temp_207 = fma(temp_189, 2.0, temp_206);
    // 0x000790: 0x32A008418007131A Ffma
    temp_208 = fma(temp_192, 16.0, temp_159);
    // 0x000798: 0x5C90008000A70013 Rro
    // 0x0007A8: 0x5CB0118001A70A1A F2i
    temp_209 = trunc(temp_208);
    temp_210 = max(temp_209, 0.0);
    temp_211 = uint(temp_210);
    // 0x0007B0: 0x5C68100001171B07 Fmul
    temp_212 = temp_202 * temp_194;
    // 0x0007B8: 0x5080000000271313 Mufu
    temp_213 = exp2(temp_181);
    // 0x0007C8: 0x4C68101406270808 Fmul
    temp_214 = temp_203 * fp_c5.data[24].z;
    // 0x0007D0: 0x4C58301407B7010A Fadd
    temp_215 = 0.0 - fp_c5.data[30].w;
    temp_216 = temp_92 + temp_215;
    // 0x0007D8: 0x4C68101801570910 Fmul
    temp_217 = temp_175 * fp_c6.data[5].y;
    // 0x0007E8: 0x4C68101801670911 Fmul
    temp_218 = temp_175 * fp_c6.data[5].z;
    // 0x0007F0: 0x32A21AC000073434 Ffma
    temp_219 = 0.0 - temp_109;
    temp_220 = fma(temp_201, 2.0, temp_219);
    // 0x0007F8: 0x5C68100000770E0E Fmul
    temp_221 = temp_204 * temp_212;
    // 0x000808: 0x59A1090001270807 Ffma
    temp_222 = 0.0 - temp_197;
    temp_223 = fma(temp_214, temp_222, temp_197);
    // 0x000810: 0x4C58301407B72108 Fadd
    temp_224 = 0.0 - fp_c5.data[30].w;
    temp_225 = temp_91 + temp_224;
    // 0x000818: 0x1E23EA2F9837101C Fmul32i
    temp_226 = temp_217 * 0.318309873;
    // 0x000828: 0x1E23EA2F9837111E Fmul32i
    temp_227 = temp_218 * 0.318309873;
    // 0x000830: 0x51A0121801471712 Ffma
    temp_228 = fma(temp_128, temp_81, fp_c6.data[5].x);
    // 0x000838: 0x3848000000871A18 Shl
    temp_229 = int(temp_211) << 8;
    // 0x000848: 0x5C68100000E7090E Fmul
    temp_230 = temp_175 * temp_221;
    // 0x000850: 0xEF94008200471818 Ldc
    temp_231 = temp_229 + 0x2004;
    temp_232 = uint(temp_231) >> 2;
    temp_233 = temp_232 >> 2;
    temp_234 = int(temp_232) & 3;
    temp_235 = fp_c8.data[int(temp_233)][temp_234];
    // 0x000858: 0x51A0041407B72908 Ffma
    temp_236 = fma(temp_87, temp_225, fp_c5.data[30].w);
    // 0x000868: 0x51A0051407B72909 Ffma
    temp_237 = fma(temp_87, temp_216, fp_c5.data[30].w);
    // 0x000870: 0x4C68101406370F17 Fmul
    temp_238 = temp_200 * fp_c5.data[24].w;
    // 0x000878: 0x59A1058000B70811 Ffma
    temp_239 = 0.0 - temp_180;
    temp_240 = fma(temp_236, temp_239, temp_180);
    // 0x000888: 0x59A1058000B70910 Ffma
    temp_241 = 0.0 - temp_180;
    temp_242 = fma(temp_237, temp_241, temp_180);
    // 0x000890: 0x59A109800137060B Ffma
    temp_243 = 0.0 - temp_213;
    temp_244 = fma(temp_179, temp_243, temp_213);
    // 0x000898: 0x59A109800137080A Ffma
    temp_245 = 0.0 - temp_213;
    temp_246 = fma(temp_236, temp_245, temp_213);
    // 0x0008A8: 0x59A1098001370913 Ffma
    temp_247 = 0.0 - temp_213;
    temp_248 = fma(temp_237, temp_247, temp_213);
    // 0x0008B0: 0x4C68101402C7170F Fmul
    temp_249 = temp_238 * fp_c5.data[11].x;
    // 0x0008B8: 0x5C58100001170811 Fadd
    temp_250 = temp_236 + temp_240;
    // 0x0008C8: 0x5C58100001070910 Fadd
    temp_251 = temp_237 + temp_242;
    // 0x0008D0: 0x5C58100000B7060B Fadd
    temp_252 = temp_179 + temp_244;
    // 0x0008D8: 0x5C58100000A7080A Fadd
    temp_253 = temp_236 + temp_246;
    // 0x0008E8: 0x5C58100001370913 Fadd
    temp_254 = temp_237 + temp_248;
    // 0x0008F0: 0x4C68101406271116 Fmul
    temp_255 = temp_250 * fp_c5.data[24].z;
    // 0x0008F8: 0x4C68101406271019 Fmul
    temp_256 = temp_251 * fp_c5.data[24].z;
    // 0x000908: 0x4C68101406270B10 Fmul
    temp_257 = temp_252 * fp_c5.data[24].z;
    // 0x000910: 0x4C68101406270A11 Fmul
    temp_258 = temp_253 * fp_c5.data[24].z;
    // 0x000918: 0x4C68101406271313 Fmul
    temp_259 = temp_254 * fp_c5.data[24].z;
    // 0x000928: 0x59A10E0001C7160A Ffma
    temp_260 = 0.0 - temp_226;
    temp_261 = fma(temp_255, temp_260, temp_226);
    // 0x000930: 0x59A10F0001E7190B Ffma
    temp_262 = 0.0 - temp_227;
    temp_263 = fma(temp_256, temp_262, temp_227);
    // 0x000938: 0x5C68100001271010 Fmul
    temp_264 = temp_257 * temp_228;
    // 0x000948: 0x5C68100001471111 Fmul
    temp_265 = temp_258 * temp_205;
    // 0x000950: 0x5C68100001571313 Fmul
    temp_266 = temp_259 * temp_198;
    // 0x000958: 0x49A206980AD70D12 Ffma
    temp_267 = 0.0 - temp_126;
    temp_268 = fma(temp_126, fp_c6.data[43].y, temp_267);
    // 0x000968: 0x5C68100000572A19 Fmul
    temp_269 = temp_64 * temp_161;
    // 0x000970: 0x5C9807800FF7001C Mov
    // 0x000978: 0x5C68100000E71010 Fmul
    temp_270 = temp_264 * temp_230;
    // 0x000988: 0x5C68100000E71111 Fmul
    temp_271 = temp_265 * temp_230;
    // 0x000990: 0x5C68100000E71331 Fmul
    temp_272 = temp_266 * temp_230;
    // 0x000998: 0x49A206980AC70D0E Ffma
    temp_273 = 0.0 - temp_126;
    temp_274 = fma(temp_126, fp_c6.data[43].x, temp_273);
    // 0x0009A8: 0x49A206980AE70D0D Ffma
    temp_275 = 0.0 - temp_126;
    temp_276 = fma(temp_126, fp_c6.data[43].z, temp_275);
    // 0x0009B0: 0x3858103F80071212 Fadd
    temp_277 = temp_268 + 1.0;
    // 0x0009B8: 0x4C68101402D71713 Fmul
    temp_278 = temp_238 * fp_c5.data[11].y;
    // 0x0009C8: 0x32A21C4000071919 Ffma
    temp_279 = 0.0 - temp_105;
    temp_280 = fma(temp_269, 2.0, temp_279);
    // 0x0009D0: 0x4C68101402E71717 Fmul
    temp_281 = temp_238 * fp_c5.data[11].z;
    // 0x0009D8: 0x3858103F80070E0E Fadd
    temp_282 = temp_274 + 1.0;
    // 0x0009E8: 0x3858103F80070D2E Fadd
    temp_283 = temp_276 + 1.0;
    // 0x0009F0: 0x5C9807800FF7001E Mov
    // 0x0009F8: 0x59A409000127212D Ffma
    temp_284 = fma(temp_91, temp_277, temp_277);
    temp_285 = clamp(temp_284, 0.0, 1.0);
    // 0x000A08: 0x1E23E22F9837102F Fmul32i
    temp_286 = temp_270 * 0.159154937;
    // 0x000A10: 0x1E23E22F98371130 Fmul32i
    temp_287 = temp_271 * 0.159154937;
    // 0x000A18: 0x5B6603800FF71807 Isetp
    temp_288 = floatBitsToUint(temp_235) <= 0u;
    // 0x000A28: 0x59A4070000E7202C Ffma
    temp_289 = fma(temp_90, temp_282, temp_282);
    temp_290 = clamp(temp_289, 0.0, 1.0);
    // 0x000A30: 0x59A4170002E7012E Ffma
    temp_291 = fma(temp_92, temp_283, temp_283);
    temp_292 = clamp(temp_291, 0.0, 1.0);
    // 0x000A38: 0x1E23E22F98373131 Fmul32i
    temp_293 = temp_272 * 0.159154937;
    // 0x000A48: 0xF0F800000000000F Sync
    temp_294 = 0.0;
    temp_295 = 0.0;
    temp_296 = 0.0;
    temp_297 = 0.0;
    temp_298 = 0.0;
    temp_299 = 0.0;
    temp_300 = 0.0;
    temp_301 = 0.0;
    temp_302 = 0.0;
    temp_303 = 0.0;
    temp_304 = 0.0;
    temp_305 = 0.0;
    if (!temp_288)
    {
        // 0x000A50: 0x5C9807800FF7003B Mov
        // 0x000A58: 0xE043FF8D00C7FF16 Ipa
        temp_306 = in_attr5.x;
        // 0x000A68: 0xE043FF8D40C7FF12 Ipa
        temp_307 = in_attr5.y;
        // 0x000A70: 0xE043FF8D80C7FF0E Ipa
        temp_308 = in_attr5.z;
        temp_309 = 0;
        do
        {
            // 0x000A78: 0x5C18020003B71A3E Iscadd
            temp_311 = int(temp_211) << 4;
            temp_312 = temp_311 + temp_309;
            // 0x000A88: 0xE290000055000000 Ssy
            // 0x000A90: 0x3848000000473E3E Shl
            temp_313 = temp_312 << 4;
            // 0x000A98: 0xEF94008200073E39 Ldc
            temp_314 = temp_313 + 0x2000;
            temp_315 = uint(temp_314) >> 2;
            temp_316 = temp_315 >> 2;
            temp_317 = int(temp_315) & 3;
            temp_318 = fp_c8.data[int(temp_316)][temp_317];
            // 0x000AA8: 0x3848000000673939 Shl
            temp_319 = floatBitsToInt(temp_318) << 6;
            // 0x000AB0: 0xEF9500800107390C Ldc
            temp_320 = temp_319 + 16;
            temp_321 = uint(temp_320) >> 2;
            temp_322 = temp_321 >> 2;
            temp_323 = int(temp_321) & 3;
            temp_324 = fp_c8.data[int(temp_322)][temp_323];
            temp_325 = int(temp_321) + 1;
            temp_326 = uint(temp_325) >> 2;
            temp_327 = temp_325 & 3;
            temp_328 = fp_c8.data[int(temp_326)][temp_327];
            // 0x000AB8: 0xEF95008001873910 Ldc
            temp_329 = temp_319 + 24;
            temp_330 = uint(temp_329) >> 2;
            temp_331 = temp_330 >> 2;
            temp_332 = int(temp_330) & 3;
            temp_333 = fp_c8.data[int(temp_331)][temp_332];
            temp_334 = int(temp_330) + 1;
            temp_335 = uint(temp_334) >> 2;
            temp_336 = temp_334 & 3;
            temp_337 = fp_c8.data[int(temp_335)][temp_336];
            // 0x000AC8: 0xEF95008002073914 Ldc
            temp_338 = temp_319 + 32;
            temp_339 = uint(temp_338) >> 2;
            temp_340 = temp_339 >> 2;
            temp_341 = int(temp_339) & 3;
            temp_342 = fp_c8.data[int(temp_340)][temp_341];
            temp_343 = int(temp_339) + 1;
            temp_344 = uint(temp_343) >> 2;
            temp_345 = temp_343 & 3;
            temp_346 = fp_c8.data[int(temp_344)][temp_345];
            // 0x000AD0: 0x5C58300001670C3A Fadd
            temp_347 = 0.0 - temp_306;
            temp_348 = temp_324 + temp_347;
            // 0x000AD8: 0x5C58300001270D3C Fadd
            temp_349 = 0.0 - temp_307;
            temp_350 = temp_328 + temp_349;
            // 0x000AE8: 0x5C58300000E71010 Fadd
            temp_351 = 0.0 - temp_308;
            temp_352 = temp_333 + temp_351;
            // 0x000AF0: 0x5C68100003A73A0D Fmul
            temp_353 = temp_348 * temp_348;
            // 0x000AF8: 0x59A108000107110C Ffma
            temp_354 = 0.0 - temp_352;
            temp_355 = fma(temp_337, temp_354, temp_352);
            // 0x000B08: 0x59A0068003C73C11 Ffma
            temp_356 = fma(temp_350, temp_350, temp_353);
            // 0x000B10: 0x59A0088000C70C3D Ffma
            temp_357 = fma(temp_355, temp_355, temp_356);
            // 0x000B18: 0x5080000000573D0D Mufu
            temp_358 = inversesqrt(temp_357);
            // 0x000B28: 0x5080000000873D3E Mufu
            temp_359 = sqrt(temp_357);
            // 0x000B30: 0x5C68100000D73A3F Fmul
            temp_360 = temp_348 * temp_358;
            // 0x000B38: 0x5C68100000D70C0C Fmul
            temp_361 = temp_355 * temp_358;
            // 0x000B48: 0x5C69100001473F3F Fmul
            temp_362 = 0.0 - temp_342;
            temp_363 = temp_360 * temp_362;
            // 0x000B50: 0x5C68100000D73C14 Fmul
            temp_364 = temp_350 * temp_358;
            // 0x000B58: 0xEF9400800287390D Ldc
            temp_365 = temp_319 + 40;
            temp_366 = uint(temp_365) >> 2;
            temp_367 = temp_366 >> 2;
            temp_368 = int(temp_366) & 3;
            temp_369 = fp_c8.data[int(temp_367)][temp_368];
            // 0x000B68: 0x59A11F800157143F Ffma
            temp_370 = 0.0 - temp_346;
            temp_371 = fma(temp_364, temp_370, temp_363);
            // 0x000B70: 0x010404000007F014 Mov32i
            // 0x000B78: 0x59A11F8000D70C3F Ffma
            temp_372 = 0.0 - temp_369;
            temp_373 = fma(temp_361, temp_372, temp_371);
            // 0x000B88: 0xEF9500800387390C Ldc
            temp_374 = temp_319 + 56;
            temp_375 = uint(temp_374) >> 2;
            temp_376 = temp_375 >> 2;
            temp_377 = int(temp_375) & 3;
            temp_378 = fp_c8.data[int(temp_376)][temp_377];
            temp_379 = int(temp_375) + 1;
            temp_380 = uint(temp_379) >> 2;
            temp_381 = temp_379 & 3;
            temp_382 = fp_c8.data[int(temp_380)][temp_381];
            // 0x000B90: 0x59A4068000C73F0D Ffma
            temp_383 = fma(temp_373, temp_378, temp_382);
            temp_384 = clamp(temp_383, 0.0, 1.0);
            // 0x000B98: 0x5C68100000D70D15 Fmul
            temp_385 = temp_384 * temp_384;
            // 0x000BA8: 0x33A00A4000070D0C Ffma
            temp_386 = fma(temp_384, -2.0, 3.0);
            // 0x000BB0: 0x5C68100000C71515 Fmul
            temp_387 = temp_385 * temp_386;
            // 0x000BB8: 0xEF9500800307390C Ldc
            temp_388 = temp_319 + 48;
            temp_389 = uint(temp_388) >> 2;
            temp_390 = temp_389 >> 2;
            temp_391 = int(temp_389) & 3;
            temp_392 = fp_c8.data[int(temp_390)][temp_391];
            temp_393 = int(temp_389) + 1;
            temp_394 = uint(temp_393) >> 2;
            temp_395 = temp_393 & 3;
            temp_396 = fp_c8.data[int(temp_394)][temp_395];
            // 0x000BC8: 0x59A4068003E70C3E Ffma
            temp_397 = fma(temp_392, temp_359, temp_396);
            temp_398 = clamp(temp_397, 0.0, 1.0);
            // 0x000BD0: 0x33A00A4000073E14 Ffma
            temp_399 = fma(temp_398, -2.0, 3.0);
            // 0x000BD8: 0x5C68100003E73E3E Fmul
            temp_400 = temp_398 * temp_398;
            // 0x000BE8: 0x5C68100001473E14 Fmul
            temp_401 = temp_400 * temp_399;
            // 0x000BF0: 0x5C68100001471515 Fmul
            temp_402 = temp_387 * temp_401;
            // 0x000BF8: 0x39585042F0071014 Fadd
            temp_403 = abs(temp_352);
            temp_404 = temp_403 + -120.0;
            // 0x000C08: 0x1EABD4CCCCD71414 Fmul32i
            temp_405 = temp_404 * -0.0500000007;
            temp_406 = clamp(temp_405, 0.0, 1.0);
            // 0x000C10: 0x5C6810000147153E Fmul
            temp_407 = temp_402 * temp_406;
            // 0x000C18: 0x36247F9000171414 Xmad
            temp_408 = floatBitsToUint(temp_406) >> 16;
            temp_409 = int(temp_408) << 16;
            // 0x000C28: 0x5BB383800FF73E07 Fsetp
            temp_410 = temp_407 <= 0.0;
            // 0x000C30: 0x7A05083C0F00FF14 Hadd2
            temp_411 = uint(temp_409);
            temp_412 = temp_294;
            temp_413 = temp_295;
            temp_414 = temp_296;
            temp_415 = temp_297;
            temp_416 = temp_298;
            temp_417 = temp_299;
            if (temp_410)
            {
                temp_418 = unpackHalf2x16(uint(temp_409)).y;
                temp_419 = packHalf2x16(vec2(1.0, temp_418));
                temp_411 = temp_419;
            }
            // 0x000C38: 0x5D2103902FF71407 Hsetp2
            temp_420 = unpackHalf2x16(temp_411).x;
            temp_421 = temp_420 == 0.0;
            // 0x000C48: 0xF0F800000008000F Sync
            if (temp_421)
            {
                // 0x000C50: 0x5080000000470C0C Mufu
                temp_422 = 1.0 / temp_392;
                // 0x000C58: 0x5C69100000C70D0D Fmul
                temp_423 = 0.0 - temp_422;
                temp_424 = temp_396 * temp_423;
                // 0x000C68: 0x5C60138000D71010 Fmnmx
                temp_425 = min(temp_352, temp_424);
                // 0x000C70: 0x5C61178001070D10 Fmnmx
                temp_426 = 0.0 - temp_424;
                temp_427 = max(temp_426, temp_425);
                // 0x000C78: 0x59A0088001071011 Ffma
                temp_428 = fma(temp_427, temp_427, temp_356);
                // 0x000C88: 0x508000000057113D Mufu
                temp_429 = inversesqrt(temp_428);
                // 0x000C90: 0x5080000000871111 Mufu
                temp_430 = sqrt(temp_428);
                // 0x000C98: 0x5C68100003D73A0D Fmul
                temp_431 = temp_348 * temp_429;
                // 0x000CA8: 0x5C68100003D7103A Fmul
                temp_432 = temp_427 * temp_429;
                // 0x000CB0: 0x5C68100003D73C15 Fmul
                temp_433 = temp_350 * temp_429;
                // 0x000CB8: 0x5C58100000D73810 Fadd
                temp_434 = temp_105 + temp_431;
                // 0x000CC8: 0x5C58100003A7350C Fadd
                temp_435 = temp_109 + temp_432;
                // 0x000CD0: 0x5C58100001573714 Fadd
                temp_436 = temp_107 + temp_433;
                // 0x000CD8: 0x5C6810000107103D Fmul
                temp_437 = temp_434 * temp_434;
                // 0x000CE8: 0x59A01E800147143D Ffma
                temp_438 = fma(temp_436, temp_436, temp_437);
                // 0x000CF0: 0x59A01E8000C70C3D Ffma
                temp_439 = fma(temp_435, temp_435, temp_438);
                // 0x000CF8: 0x5080000000573D3D Mufu
                temp_440 = inversesqrt(temp_439);
                // 0x000D08: 0x5C68100003D7103C Fmul
                temp_441 = temp_434 * temp_440;
                // 0x000D10: 0x5C68100003D7143F Fmul
                temp_442 = temp_436 * temp_440;
                // 0x000D18: 0x5C68100000D72A14 Fmul
                temp_443 = temp_64 * temp_431;
                // 0x000D28: 0x5C68100003D70C0C Fmul
                temp_444 = temp_435 * temp_440;
                // 0x000D30: 0x5C68100003C70D10 Fmul
                temp_445 = temp_431 * temp_441;
                // 0x000D38: 0x59A00A0001570014 Ffma
                temp_446 = fma(temp_63, temp_433, temp_443);
                // 0x000D48: 0x59A0080003F7150D Ffma
                temp_447 = fma(temp_433, temp_442, temp_445);
                // 0x000D50: 0x51A4020400070415 Ffma
                temp_448 = fma(temp_140, temp_140, fp_c1.data[0].x);
                temp_449 = clamp(temp_448, 0.0, 1.0);
                // 0x000D58: 0x59A00A0003A73314 Ffma
                temp_450 = fma(temp_61, temp_432, temp_446);
                // 0x000D68: 0x59A4068000C73A10 Ffma
                temp_451 = fma(temp_432, temp_444, temp_447);
                temp_452 = clamp(temp_451, 0.0, 1.0);
                // 0x000D70: 0x5C68100003C72A0D Fmul
                temp_453 = temp_64 * temp_441;
                // 0x000D78: 0xEF9400800087393C Ldc
                temp_454 = temp_319 + 8;
                temp_455 = uint(temp_454) >> 2;
                temp_456 = temp_455 >> 2;
                temp_457 = int(temp_455) & 3;
                temp_458 = fp_c8.data[int(temp_456)][temp_457];
                // 0x000D88: 0x59A0068003F7000D Ffma
                temp_459 = fma(temp_63, temp_442, temp_453);
                // 0x000D90: 0x59A4068000C7330D Ffma
                temp_460 = fma(temp_61, temp_444, temp_459);
                temp_461 = clamp(temp_460, 0.0, 1.0);
                // 0x000D98: 0x5C6810000157150C Fmul
                temp_462 = temp_449 * temp_449;
                // 0x000DA8: 0x59A2068000D70C0C Ffma
                temp_463 = 0.0 - temp_461;
                temp_464 = fma(temp_462, temp_461, temp_463);
                // 0x000DB0: 0x51A0060400170D3A Ffma
                temp_465 = fma(temp_461, temp_464, fp_c1.data[0].y);
                // 0x000DB8: 0xEF9500800007390C Ldc
                temp_466 = uint(temp_319) >> 2;
                temp_467 = temp_466 >> 2;
                temp_468 = int(temp_466) & 3;
                temp_469 = fp_c8.data[int(temp_467)][temp_468];
                temp_470 = int(temp_466) + 1;
                temp_471 = uint(temp_470) >> 2;
                temp_472 = temp_470 & 3;
                temp_473 = fp_c8.data[int(temp_471)][temp_472];
                // 0x000DC8: 0x5080000000473A3A Mufu
                temp_474 = 1.0 / temp_465;
                // 0x000DD0: 0xEF94008002C73939 Ldc
                temp_475 = temp_319 + 44;
                temp_476 = uint(temp_475) >> 2;
                temp_477 = temp_476 >> 2;
                temp_478 = int(temp_476) & 3;
                temp_479 = fp_c8.data[int(temp_477)][temp_478];
                // 0x000DD8: 0x5C68100003A71515 Fmul
                temp_480 = temp_449 * temp_474;
                // 0x000DE8: 0x5C5C30000FF7143A Fadd
                temp_481 = temp_450 + -0.0;
                temp_482 = clamp(temp_481, 0.0, 1.0);
                // 0x000DF0: 0x5C68100001571515 Fmul
                temp_483 = temp_480 * temp_480;
                // 0x000DF8: 0x5C68100000C73E0C Fmul
                temp_484 = temp_407 * temp_469;
                // 0x000E08: 0x5C68100000D73E0D Fmul
                temp_485 = temp_407 * temp_473;
                // 0x000E10: 0x5C68100003C73E3E Fmul
                temp_486 = temp_407 * temp_458;
                // 0x000E18: 0x508000000047393C Mufu
                temp_487 = 1.0 / temp_479;
                // 0x000E28: 0x51A0088400473C3D Ffma
                temp_488 = fma(temp_487, temp_430, fp_c1.data[1].x);
                // 0x000E30: 0x59A11D0003A72B3C Ffma
                temp_489 = 0.0 - temp_482;
                temp_490 = fma(temp_167, temp_489, temp_482);
                // 0x000E38: 0x5080000000473D3D Mufu
                temp_491 = 1.0 / temp_488;
                // 0x000E48: 0x01040DF760C7F011 Mov32i
                // 0x000E50: 0x5C58100003C72B3C Fadd
                temp_492 = temp_167 + temp_490;
                // 0x000E58: 0x49A2088400271011 Ffma
                temp_493 = fma(temp_452, fp_c1.data[0].z, -6.98316002);
                // 0x000E68: 0x5080000000473C3C Mufu
                temp_494 = 1.0 / temp_492;
                // 0x000E70: 0x1E23FB3333373D3F Fmul32i
                temp_495 = temp_491 * 1.39999998;
                // 0x000E78: 0x5C68100001171011 Fmul
                temp_496 = temp_452 * temp_493;
                // 0x000E88: 0x5C68100003F73F3F Fmul
                temp_497 = temp_495 * temp_495;
                // 0x000E90: 0x5C9000800117003D Rro
                // 0x000E98: 0x5C68100003C71B3C Fmul
                temp_498 = temp_202 * temp_494;
                // 0x000EA8: 0x5080000000273D11 Mufu
                temp_499 = exp2(temp_496);
                // 0x000EB0: 0x59A11F8003F7143F Ffma
                temp_500 = 0.0 - temp_497;
                temp_501 = fma(temp_450, temp_500, temp_497);
                // 0x000EB8: 0x5C68100003C71515 Fmul
                temp_502 = temp_483 * temp_498;
                // 0x000EC8: 0x5C5C100003F7143F Fadd
                temp_503 = temp_450 + temp_501;
                temp_504 = clamp(temp_503, 0.0, 1.0);
                // 0x000ED0: 0x5C68100001573A10 Fmul
                temp_505 = temp_482 * temp_502;
                // 0x000ED8: 0x59A1088001170614 Ffma
                temp_506 = 0.0 - temp_499;
                temp_507 = fma(temp_179, temp_506, temp_499);
                // 0x000EE8: 0x59A1088001170815 Ffma
                temp_508 = 0.0 - temp_499;
                temp_509 = fma(temp_236, temp_508, temp_499);
                // 0x000EF0: 0x59A108800117093A Ffma
                temp_510 = 0.0 - temp_499;
                temp_511 = fma(temp_237, temp_510, temp_499);
                // 0x000EF8: 0x5C58100001470614 Fadd
                temp_512 = temp_179 + temp_507;
                // 0x000F08: 0x5C58100001570815 Fadd
                temp_513 = temp_236 + temp_509;
                // 0x000F10: 0x5C58100003A7093A Fadd
                temp_514 = temp_237 + temp_511;
                // 0x000F18: 0x4C68101406271411 Fmul
                temp_515 = temp_512 * fp_c5.data[24].z;
                // 0x000F28: 0x4C68101406271514 Fmul
                temp_516 = temp_513 * fp_c5.data[24].z;
                // 0x000F30: 0x4C68101406273A39 Fmul
                temp_517 = temp_514 * fp_c5.data[24].z;
                // 0x000F38: 0x5C68100003F70C15 Fmul
                temp_518 = temp_484 * temp_504;
                // 0x000F48: 0x5C68100000C7113A Fmul
                temp_519 = temp_515 * temp_484;
                // 0x000F50: 0x5C68100000D71411 Fmul
                temp_520 = temp_516 * temp_485;
                // 0x000F58: 0x5C68100003E73939 Fmul
                temp_521 = temp_517 * temp_486;
                // 0x000F68: 0x5C68100003F70D0D Fmul
                temp_522 = temp_485 * temp_504;
                // 0x000F70: 0x5C68100003F73E3F Fmul
                temp_523 = temp_486 * temp_504;
                // 0x000F78: 0x49A0140400671528 Ffma
                temp_524 = fma(temp_518, fp_c1.data[1].z, temp_294);
                // 0x000F88: 0x5C68100001073A3A Fmul
                temp_525 = temp_519 * temp_505;
                // 0x000F90: 0x5C6810000107110C Fmul
                temp_526 = temp_520 * temp_505;
                // 0x000F98: 0x5C68100001073939 Fmul
                temp_527 = temp_521 * temp_505;
                // 0x000FA8: 0x49A00F8400670D1F Ffma
                temp_528 = fma(temp_522, fp_c1.data[1].z, temp_295);
                // 0x000FB0: 0x49A0190400673F32 Ffma
                temp_529 = fma(temp_523, fp_c1.data[1].z, temp_296);
                // 0x000FB8: 0x49A00E0400573A1C Ffma
                temp_530 = fma(temp_525, fp_c1.data[1].y, temp_297);
                // 0x000FC8: 0x49A00E8400570C1D Ffma
                temp_531 = fma(temp_526, fp_c1.data[1].y, temp_298);
                // 0x000FD0: 0x49A00F040057391E Ffma
                temp_532 = fma(temp_527, fp_c1.data[1].y, temp_299);
                // 0x000FD8: 0xF0F800000007000F Sync
                temp_412 = temp_524;
                temp_413 = temp_528;
                temp_414 = temp_529;
                temp_415 = temp_530;
                temp_416 = temp_531;
                temp_417 = temp_532;
            }
            // 0x000FE8: 0x1C00000000173B3B Iadd32i
            temp_533 = temp_309 + 1;
            // 0x000FF0: 0x5B6C038001873B07 Isetp
            temp_310 = uint(temp_533) >= floatBitsToUint(temp_235);
            // 0x000FF8: 0xE2400FFFA788000F Bra
            temp_309 = temp_533;
            temp_294 = temp_412;
            temp_295 = temp_413;
            temp_296 = temp_414;
            temp_297 = temp_415;
            temp_298 = temp_416;
            temp_299 = temp_417;
            temp_300 = temp_413;
            temp_301 = temp_412;
            temp_302 = temp_417;
            temp_303 = temp_415;
            temp_304 = temp_416;
            temp_305 = temp_414;
        }
        while (!temp_310);
        // 0x001008: 0xF0F800000007000F Sync
    }
    // 0x001010: 0x5C62578000072A0C Fmnmx
    temp_534 = abs(temp_64);
    temp_535 = abs(temp_63);
    temp_536 = max(temp_534, temp_535);
    // 0x001018: 0xE003FF87CFF7FF35 Ipa
    // 0x001028: 0x010000000017F018 Mov32i
    // 0x001030: 0x5C6257800367190D Fmnmx
    temp_537 = abs(temp_280);
    temp_538 = abs(temp_207);
    temp_539 = max(temp_537, temp_538);
    // 0x001038: 0x386810408007042B Fmul
    temp_540 = temp_140 * 4.0;
    // 0x001048: 0x4C98079C02070037 Mov
    // 0x001050: 0x5C60578000C7330C Fmnmx
    temp_541 = abs(temp_61);
    temp_542 = max(temp_541, temp_536);
    // 0x001058: 0x5080000000470C15 Mufu
    temp_543 = 1.0 / temp_542;
    // 0x001068: 0x5C60578000D7340D Fmnmx
    temp_544 = abs(temp_220);
    temp_545 = max(temp_544, temp_539);
    // 0x001070: 0x5080000000470D1B Mufu
    temp_546 = 1.0 / temp_545;
    // 0x001078: 0x5C69100001573316 Fmul
    temp_547 = 0.0 - temp_543;
    temp_548 = temp_61 * temp_547;
    // 0x001088: 0x5C68100001572A14 Fmul
    temp_549 = temp_64 * temp_543;
    // 0x001090: 0x5080000000473535 Mufu
    // 0x001098: 0x5C68100001570015 Fmul
    temp_550 = temp_63 * temp_543;
    // 0x0010A8: 0x5C68100001B71919 Fmul
    temp_551 = temp_280 * temp_546;
    // 0x0010B0: 0xC0BA0163EFF7140C Tex
    temp_552 = textureLod(fp_t_tcb_16, vec3(temp_549, temp_550, temp_548), 0.0).xyz;
    temp_553 = temp_552.x;
    temp_554 = temp_552.y;
    temp_555 = temp_552.z;
    // 0x0010B8: 0x5C68100001B7361A Fmul
    temp_556 = temp_207 * temp_546;
    // 0x0010C8: 0x5C69100001B7341B Fmul
    temp_557 = 0.0 - temp_546;
    temp_558 = temp_220 * temp_557;
    // 0x0010D0: 0xE043FF910357FF10 Ipa
    temp_559 = in_attr9.x;
    // 0x0010D8: 0x38681040E0070434 Fmul
    temp_560 = temp_140 * 7.0;
    // 0x0010E8: 0xE043FF914357FF11 Ipa
    temp_561 = in_attr9.y;
    // 0x0010F0: 0x5C9807800167002A Mov
    // 0x0010F8: 0xE043FF918357FF12 Ipa
    temp_562 = in_attr9.z;
    // 0x001108: 0xC1BA0143F3471818 Tex
    temp_563 = textureLod(fp_t_tcb_14, vec4(temp_551, temp_556, temp_558, float(1)), temp_560).xyz;
    temp_564 = temp_563.x;
    temp_565 = temp_563.y;
    temp_566 = temp_563.z;
    // 0x001110: 0xD9A2018332A7142A Texs
    temp_567 = textureLod(fp_t_tcb_18, vec3(temp_549, temp_550, temp_548), temp_540).xyz;
    temp_568 = temp_567.x;
    temp_569 = temp_567.y;
    temp_570 = temp_567.z;
    // 0x001118: 0xDEBA0000C3771010 TexB
    temp_571 = texture(fp_t_cb7_20, vec3(temp_559, temp_561, temp_562)).x;
    // 0x001128: 0x3859103F80070404 Fadd
    temp_572 = 0.0 - temp_140;
    temp_573 = temp_572 + 1.0;
    // 0x001130: 0x49A005180A171F0A Ffma
    temp_574 = fma(temp_300, fp_c6.data[40].y, temp_261);
    // 0x001138: 0x010410676C97F01F Mov32i
    // 0x001148: 0x49A003980A172807 Ffma
    temp_575 = fma(temp_301, fp_c6.data[40].y, temp_223);
    // 0x001150: 0x3859103F80070528 Fadd
    temp_576 = 0.0 - temp_161;
    temp_577 = temp_576 + 1.0;
    // 0x001158: 0x49A018980A171E31 Ffma
    temp_578 = fma(temp_302, fp_c6.data[40].y, temp_293);
    // 0x001168: 0x5C68100000470404 Fmul
    temp_579 = temp_573 * temp_573;
    // 0x001170: 0x0103E2CD9E87F016 Mov32i
    // 0x001178: 0x49A00F8400A70514 Ffma
    temp_580 = fma(temp_161, fp_c1.data[2].z, 8.40400028);
    // 0x001188: 0x0104066978D7F01E Mov32i
    // 0x001190: 0x4C68101809072815 Fmul
    temp_581 = temp_577 * fp_c6.data[36].x;
    // 0x001198: 0x49A017980A171C2F Ffma
    temp_582 = fma(temp_303, fp_c6.data[40].y, temp_286);
    // 0x0011A8: 0x5C68100000470404 Fmul
    temp_583 = temp_579 * temp_579;
    // 0x0011B0: 0x49A018180A171D30 Ffma
    temp_584 = fma(temp_304, fp_c6.data[40].y, temp_287);
    // 0x0011B8: 0x51A00A0400B70514 Ffma
    temp_585 = fma(temp_161, temp_580, fp_c1.data[2].w);
    // 0x0011C8: 0x4C9807980B47001D Mov
    // 0x0011D0: 0x1E23E468DB970511 Fmul32i
    temp_586 = temp_161 * 0.193900004;
    // 0x0011D8: 0x0103F0000007F01F Mov32i
    // 0x0011E8: 0x49A20B0400C70412 Ffma
    temp_587 = fma(temp_583, fp_c1.data[3].x, -0.168799996);
    // 0x0011F0: 0x5080400000371516 Mufu
    temp_588 = abs(temp_581);
    temp_589 = log2(temp_588);
    // 0x0011F8: 0x49A20F040087041E Ffma
    temp_590 = fma(temp_583, fp_c1.data[2].x, -3.60299993);
    // 0x001208: 0x51A00A0400D7051C Ffma
    temp_591 = fma(temp_161, temp_585, fp_c1.data[3].y);
    // 0x001210: 0xF0F0000034370000 Depbar
    // 0x001218: 0x5080000000372814 Mufu
    temp_592 = log2(temp_577);
    // 0x001228: 0x51A20E980B472323 Ffma
    temp_593 = 0.0 - fp_c6.data[45].x;
    temp_594 = fma(temp_95, fp_c6.data[45].x, temp_593);
    // 0x001230: 0x49A0088400770411 Ffma
    temp_595 = fma(temp_583, fp_c1.data[1].w, temp_586);
    // 0x001238: 0x51A20E980B470202 Ffma
    temp_596 = 0.0 - fp_c6.data[45].x;
    temp_597 = fma(temp_96, fp_c6.data[45].x, temp_596);
    // 0x001248: 0x5C68100001270412 Fmul
    temp_598 = temp_583 * temp_587;
    // 0x001250: 0x51A00F040097041E Ffma
    temp_599 = fma(temp_583, temp_590, fp_c1.data[2].y);
    // 0x001258: 0x51A20E980B472222 Ffma
    temp_600 = 0.0 - fp_c6.data[45].x;
    temp_601 = fma(temp_94, fp_c6.data[45].x, temp_600);
    // 0x001268: 0x49A005980A17320B Ffma
    temp_602 = fma(temp_305, fp_c6.data[40].y, temp_263);
    // 0x001270: 0x088BF05D6397111B Fadd32i
    temp_603 = temp_595 + -0.522800028;
    // 0x001278: 0x32A00FBF00070011 Ffma
    temp_604 = fma(temp_63, 0.5, 0.5);
    // 0x001288: 0x4C98079800870000 Mov
    // 0x001290: 0x4C68101809171616 Fmul
    temp_605 = temp_589 * fp_c6.data[36].y;
    // 0x001298: 0x4C9807980967001F Mov
    // 0x0012A8: 0x5C60138001271C12 Fmnmx
    temp_606 = min(temp_591, temp_598);
    // 0x0012B0: 0x5C68100001B70515 Fmul
    temp_607 = temp_161 * temp_603;
    // 0x0012B8: 0x4C9807980097001B Mov
    // 0x0012C8: 0x4C98079800A7001C Mov
    // 0x0012D0: 0x5C9000800167001D Rro
    // 0x0012D8: 0x4C68101808971405 Fmul
    temp_608 = temp_592 * fp_c6.data[34].y;
    // 0x0012E8: 0x5084000000271D1D Mufu
    temp_609 = exp2(temp_605);
    temp_610 = clamp(temp_609, 0.0, 1.0);
    // 0x0012F0: 0x59A00A8001E70415 Ffma
    temp_611 = fma(temp_583, temp_599, temp_607);
    // 0x0012F8: 0xE04BFF904357FF04 Ipa
    temp_612 = in_attr8.y;
    temp_613 = clamp(temp_612, 0.0, 1.0);
    // 0x001308: 0x4C59101800470000 Fadd
    temp_614 = 0.0 - fp_c6.data[2].x;
    temp_615 = temp_614 + fp_c6.data[1].x;
    // 0x001310: 0x4C59101800571B14 Fadd
    temp_616 = 0.0 - fp_c6.data[2].y;
    temp_617 = temp_616 + fp_c6.data[1].y;
    // 0x001318: 0x4C59101800671C16 Fadd
    temp_618 = 0.0 - fp_c6.data[2].z;
    temp_619 = temp_618 + fp_c6.data[1].z;
    // 0x001328: 0x4C58101408171F1C Fadd
    temp_620 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001330: 0x5C9000800057001B Rro
    // 0x001338: 0x4C5C100400E7151E Fadd
    temp_621 = temp_611 + fp_c1.data[3].z;
    temp_622 = clamp(temp_621, 0.0, 1.0);
    // 0x001348: 0x5084000000271B1B Mufu
    temp_623 = exp2(temp_608);
    temp_624 = clamp(temp_623, 0.0, 1.0);
    // 0x001350: 0x51A0089800870005 Ffma
    temp_625 = fma(temp_615, temp_604, fp_c6.data[2].x);
    // 0x001358: 0x51A0089800971400 Ffma
    temp_626 = fma(temp_617, temp_604, fp_c6.data[2].y);
    // 0x001368: 0x51A0089800A71611 Ffma
    temp_627 = fma(temp_619, temp_604, fp_c6.data[2].z);
    // 0x001370: 0x386C104248070816 Fmul
    temp_628 = temp_236 * 50.0;
    temp_629 = clamp(temp_628, 0.0, 1.0);
    // 0x001378: 0x5C68100001D71C1C Fmul
    temp_630 = temp_620 * temp_610;
    // 0x001388: 0x5C5C30000FF7121D Fadd
    temp_631 = temp_606 + -0.0;
    temp_632 = clamp(temp_631, 0.0, 1.0);
    // 0x001390: 0x4C98079408270032 Mov
    // 0x001398: 0x4C98079808670028 Mov
    // 0x0013A8: 0x4C68101808772727 Fmul
    temp_633 = temp_84 * fp_c6.data[33].w;
    // 0x0013B0: 0x4C68101808D71C12 Fmul
    temp_634 = temp_630 * fp_c6.data[35].y;
    // 0x0013B8: 0x5C68100001D71616 Fmul
    temp_635 = temp_629 * temp_632;
    // 0x0013C8: 0x5C59100001E71D1F Fadd
    temp_636 = 0.0 - temp_632;
    temp_637 = temp_636 + temp_622;
    // 0x0013D0: 0x4C68101406273232 Fmul
    temp_638 = fp_c5.data[32].z * fp_c5.data[24].z;
    // 0x0013D8: 0x4C68101808871B1B Fmul
    temp_639 = temp_624 * fp_c6.data[34].x;
    // 0x0013E8: 0x4C68101808E71C14 Fmul
    temp_640 = temp_630 * fp_c6.data[35].z;
    // 0x0013F0: 0x4C68101808C71C1C Fmul
    temp_641 = temp_630 * fp_c6.data[35].x;
    // 0x0013F8: 0x49A1091408271215 Ffma
    temp_642 = 0.0 - fp_c5.data[32].z;
    temp_643 = fma(temp_634, temp_642, temp_634);
    // 0x001408: 0x59A00B0001F70606 Ffma
    temp_644 = fma(temp_179, temp_637, temp_635);
    // 0x001410: 0x59A00B0001F70808 Ffma
    temp_645 = fma(temp_236, temp_637, temp_635);
    // 0x001418: 0x59A00B0001F70909 Ffma
    temp_646 = fma(temp_237, temp_637, temp_635);
    // 0x001428: 0x59A0180003271230 Ffma
    temp_647 = fma(temp_634, temp_638, temp_584);
    // 0x001430: 0x010404000007F016 Mov32i
    // 0x001438: 0x51A0141808671B1B Ffma
    temp_648 = fma(temp_639, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001448: 0x59A0178003271C2F Ffma
    temp_649 = fma(temp_641, temp_638, temp_582);
    // 0x001450: 0x49A10E1408271C1C Ffma
    temp_650 = 0.0 - fp_c5.data[32].z;
    temp_651 = fma(temp_641, temp_650, temp_641);
    // 0x001458: 0x59A0188003271431 Ffma
    temp_652 = fma(temp_640, temp_638, temp_578);
    // 0x001468: 0x49A10A1408271414 Ffma
    temp_653 = 0.0 - fp_c5.data[32].z;
    temp_654 = fma(temp_640, temp_653, temp_640);
    // 0x001470: 0x5C58100001570A0A Fadd
    temp_655 = temp_574 + temp_643;
    // 0x001478: 0x4C68101406270606 Fmul
    temp_656 = temp_644 * fp_c5.data[24].z;
    // 0x001488: 0x5C58100001C70707 Fadd
    temp_657 = temp_575 + temp_651;
    // 0x001490: 0x5C58100001470B14 Fadd
    temp_658 = temp_602 + temp_654;
    // 0x001498: 0x4C6810140627080B Fmul
    temp_659 = temp_645 * fp_c5.data[24].z;
    // 0x0014A8: 0x4C98079802970008 Mov
    // 0x0014B0: 0xF0F0000034270000 Depbar
    // 0x0014B8: 0x49A0060400670512 Ffma
    temp_660 = fma(temp_625, fp_c1.data[1].z, temp_553);
    // 0x0014C8: 0x49A006840067000C Ffma
    temp_661 = fma(temp_626, fp_c1.data[1].z, temp_554);
    // 0x0014D0: 0x33A00B4000070400 Ffma
    temp_662 = fma(temp_613, -2.0, 3.0);
    // 0x0014D8: 0x5C68100000470405 Fmul
    temp_663 = temp_613 * temp_613;
    // 0x0014E8: 0x49A0070400671111 Ffma
    temp_664 = fma(temp_627, fp_c1.data[1].z, temp_555);
    // 0x0014F0: 0x4C68101406270904 Fmul
    temp_665 = temp_646 * fp_c5.data[24].z;
    // 0x0014F8: 0x59A2090001B72424 Ffma
    temp_666 = 0.0 - temp_660;
    temp_667 = fma(temp_81, temp_648, temp_666);
    // 0x001508: 0x59A2060001B72525 Ffma
    temp_668 = 0.0 - temp_661;
    temp_669 = fma(temp_82, temp_648, temp_668);
    // 0x001510: 0x5C68100000570000 Fmul
    temp_670 = temp_662 * temp_663;
    // 0x001518: 0xE043FF900357FF05 Ipa
    temp_671 = in_attr8.x;
    // 0x001528: 0x59A2088001B7261B Ffma
    temp_672 = 0.0 - temp_664;
    temp_673 = fma(temp_83, temp_648, temp_672);
    // 0x001530: 0xE043FF8C8357FF35 Ipa
    temp_674 = in_attr4.z;
    // 0x001538: 0x59A0090002772424 Ffma
    temp_675 = fma(temp_667, temp_633, temp_660);
    // 0x001548: 0x59A0060002772525 Ffma
    temp_676 = fma(temp_669, temp_633, temp_661);
    // 0x001550: 0xF0F0000034170000 Depbar
    // 0x001558: 0x49A0151808571818 Ffma
    temp_677 = fma(temp_564, fp_c6.data[33].y, temp_568);
    // 0x001568: 0x49A0159808571919 Ffma
    temp_678 = fma(temp_565, fp_c6.data[33].y, temp_569);
    // 0x001570: 0x49A0199808571A1A Ffma
    temp_679 = fma(temp_566, fp_c6.data[33].y, temp_570);
    // 0x001578: 0x59A0088002771B1B Ffma
    temp_680 = fma(temp_673, temp_633, temp_664);
    // 0x001588: 0x5C58100000772407 Fadd
    temp_681 = temp_675 + temp_657;
    // 0x001590: 0x5C58100000A7250A Fadd
    temp_682 = temp_676 + temp_655;
    // 0x001598: 0x59A0178001870606 Ffma
    temp_683 = fma(temp_656, temp_677, temp_649);
    // 0x0015A8: 0x59A0180001970B0B Ffma
    temp_684 = fma(temp_659, temp_678, temp_647);
    // 0x0015B0: 0x59A0188001A70404 Ffma
    temp_685 = fma(temp_665, temp_679, temp_652);
    // 0x0015B8: 0x5C58100001471B14 Fadd
    temp_686 = temp_680 + temp_658;
    // 0x0015C8: 0x59A1038000772907 Ffma
    temp_687 = 0.0 - temp_681;
    temp_688 = fma(temp_87, temp_687, temp_681);
    // 0x0015D0: 0x59A1050000A7290A Ffma
    temp_689 = 0.0 - temp_682;
    temp_690 = fma(temp_87, temp_689, temp_682);
    // 0x0015D8: 0x4C68101803770000 Fmul
    temp_691 = temp_670 * fp_c6.data[13].w;
    // 0x0015E8: 0x59A10A000147290E Ffma
    temp_692 = 0.0 - temp_686;
    temp_693 = fma(temp_87, temp_692, temp_686);
    // 0x0015F0: 0x59A0030000772006 Ffma
    temp_694 = fma(temp_90, temp_688, temp_683);
    // 0x0015F8: 0x59A0058000A7210A Ffma
    temp_695 = fma(temp_91, temp_690, temp_684);
    // 0x001608: 0x4C98079802870007 Mov
    // 0x001610: 0x59A0020000E70104 Ffma
    temp_696 = fma(temp_92, temp_693, temp_685);
    // 0x001618: 0x5C68100000672C2C Fmul
    temp_697 = temp_290 * temp_694;
    // 0x001628: 0x5C68100000A72D2D Fmul
    temp_698 = temp_285 * temp_695;
    // 0x001630: 0x51A0039802872222 Ffma
    temp_699 = fma(temp_601, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001638: 0x49A502980BC71010 Ffma
    temp_700 = 0.0 - fp_c6.data[47].x;
    temp_701 = fma(temp_571, temp_700, temp_671);
    temp_702 = clamp(temp_701, 0.0, 1.0);
    // 0x001648: 0x4C98079802A70005 Mov
    // 0x001650: 0x5080000000371010 Mufu
    temp_703 = log2(temp_702);
    // 0x001658: 0x49A0161406C70F0F Ffma
    temp_704 = fma(temp_249, fp_c5.data[27].x, temp_697);
    // 0x001668: 0x5C68100000472E2E Fmul
    temp_705 = temp_292 * temp_696;
    // 0x001670: 0x51A0041802972306 Ffma
    temp_706 = fma(temp_594, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001678: 0x49A0169406C71313 Ffma
    temp_707 = fma(temp_278, fp_c5.data[27].x, temp_698);
    // 0x001688: 0x51A0029802A70202 Ffma
    temp_708 = fma(temp_597, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001690: 0x5C58300002270F01 Fadd
    temp_709 = 0.0 - temp_699;
    temp_710 = temp_704 + temp_709;
    // 0x001698: 0x49A0171406C71717 Ffma
    temp_711 = fma(temp_281, fp_c5.data[27].x, temp_705);
    // 0x0016A8: 0x5C58300000671304 Fadd
    temp_712 = 0.0 - temp_706;
    temp_713 = temp_707 + temp_712;
    // 0x0016B0: 0x49A011180BF70105 Ffma
    temp_714 = fma(temp_710, fp_c6.data[47].w, temp_699);
    // 0x0016B8: 0x5C58300000271701 Fadd
    temp_715 = 0.0 - temp_708;
    temp_716 = temp_711 + temp_715;
    // 0x0016C8: 0x4C68101803171007 Fmul
    temp_717 = temp_703 * fp_c6.data[12].y;
    // 0x0016D0: 0x49A003180BF70404 Ffma
    temp_718 = fma(temp_713, fp_c6.data[47].w, temp_706);
    // 0x0016D8: 0x5C60178000572205 Fmnmx
    temp_719 = max(temp_699, temp_714);
    // 0x0016E8: 0x49A001180BF70101 Ffma
    temp_720 = fma(temp_716, fp_c6.data[47].w, temp_708);
    // 0x0016F0: 0x5C90008000770008 Rro
    // 0x0016F8: 0x49A2001803570007 Ffma
    temp_721 = 0.0 - temp_691;
    temp_722 = fma(temp_691, fp_c6.data[13].y, temp_721);
    // 0x001708: 0x5080000000270808 Mufu
    temp_723 = exp2(temp_717);
    // 0x001710: 0x5C60178000470604 Fmnmx
    temp_724 = max(temp_706, temp_718);
    // 0x001718: 0x49A2001803470006 Ffma
    temp_725 = 0.0 - temp_691;
    temp_726 = fma(temp_691, fp_c6.data[13].x, temp_725);
    // 0x001728: 0x5C60178000170201 Fmnmx
    temp_727 = max(temp_708, temp_720);
    // 0x001730: 0x49A2001803670000 Ffma
    temp_728 = 0.0 - temp_691;
    temp_729 = fma(temp_691, fp_c6.data[13].z, temp_728);
    // 0x001738: 0x59A0020000770402 Ffma
    temp_730 = fma(temp_724, temp_722, temp_724);
    // 0x001748: 0x59A0028000670506 Ffma
    temp_731 = fma(temp_719, temp_726, temp_719);
    // 0x001750: 0x5C98078000370007 Mov
    // 0x001758: 0x59A0008000070105 Ffma
    temp_732 = fma(temp_727, temp_729, temp_727);
    // 0x001768: 0x5C59100000271301 Fadd
    temp_733 = 0.0 - temp_707;
    temp_734 = temp_733 + temp_730;
    // 0x001770: 0x4C68101802B70804 Fmul
    temp_735 = temp_723 * fp_c6.data[10].w;
    // 0x001778: 0x5C59100000670F00 Fadd
    temp_736 = 0.0 - temp_704;
    temp_737 = temp_736 + temp_731;
    // 0x001788: 0x5C59100000571702 Fadd
    temp_738 = 0.0 - temp_711;
    temp_739 = temp_738 + temp_732;
    // 0x001790: 0x4C58100C03873508 Fadd
    temp_740 = temp_674 + fp_c3.data[14].x;
    // 0x001798: 0x0103EC000007F005 Mov32i
    // 0x0017A8: 0x5C9807800FF70006 Mov
    // 0x0017B0: 0x59A0098000470101 Ffma
    temp_741 = fma(temp_734, temp_735, temp_707);
    // 0x0017B8: 0x59A0078000470000 Ffma
    temp_742 = fma(temp_737, temp_735, temp_704);
    // 0x0017C8: 0x59A00B8000470202 Ffma
    temp_743 = fma(temp_739, temp_735, temp_711);
    // 0x0017D0: 0x49A37F8C03C70804 Ffma
    temp_744 = 0.0 - fp_c3.data[15].x;
    temp_745 = fma(temp_740, temp_744, -0.0);
    // 0x0017D8: 0xE30000000007000F Exit
    out_attr0.x = temp_742;
    out_attr0.y = temp_741;
    out_attr0.z = temp_743;
    out_attr0.w = temp_112;
    out_attr1.x = temp_745;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = temp_112;
    return;
}
