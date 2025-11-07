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
layout (binding = 1) uniform sampler2D fp_t_tcb_24;
layout (binding = 2) uniform sampler2D fp_t_tcb_1E;
layout (binding = 3) uniform sampler2D fp_t_tcb_22;
layout (binding = 4) uniform sampler2D fp_t_tcb_36;
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
    precise vec4 temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise vec3 temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise vec3 temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    bool temp_101;
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
    uint temp_150;
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
    int temp_166;
    precise float temp_167;
    int temp_168;
    uint temp_169;
    uint temp_170;
    int temp_171;
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
    bool temp_274;
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
    int temp_340;
    bool temp_341;
    int temp_342;
    int temp_343;
    int temp_344;
    int temp_345;
    int temp_346;
    uint temp_347;
    uint temp_348;
    int temp_349;
    precise float temp_350;
    precise float temp_351;
    precise float temp_352;
    precise float temp_353;
    int temp_354;
    int temp_355;
    uint temp_356;
    uint temp_357;
    int temp_358;
    precise float temp_359;
    int temp_360;
    uint temp_361;
    int temp_362;
    precise float temp_363;
    int temp_364;
    uint temp_365;
    uint temp_366;
    int temp_367;
    precise float temp_368;
    int temp_369;
    uint temp_370;
    int temp_371;
    precise float temp_372;
    int temp_373;
    uint temp_374;
    uint temp_375;
    int temp_376;
    precise float temp_377;
    int temp_378;
    uint temp_379;
    int temp_380;
    precise float temp_381;
    precise float temp_382;
    precise float temp_383;
    int temp_384;
    uint temp_385;
    uint temp_386;
    int temp_387;
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
    precise float temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    precise float temp_405;
    precise float temp_406;
    int temp_407;
    uint temp_408;
    uint temp_409;
    int temp_410;
    precise float temp_411;
    int temp_412;
    uint temp_413;
    int temp_414;
    precise float temp_415;
    precise float temp_416;
    precise float temp_417;
    int temp_418;
    uint temp_419;
    uint temp_420;
    int temp_421;
    precise float temp_422;
    int temp_423;
    uint temp_424;
    int temp_425;
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
    uint temp_443;
    int temp_444;
    bool temp_445;
    uint temp_446;
    precise float temp_447;
    precise float temp_448;
    precise float temp_449;
    precise float temp_450;
    precise float temp_451;
    precise float temp_452;
    precise float temp_453;
    uint temp_454;
    precise float temp_455;
    bool temp_456;
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
    uint temp_483;
    uint temp_484;
    int temp_485;
    precise float temp_486;
    int temp_487;
    uint temp_488;
    int temp_489;
    precise float temp_490;
    precise float temp_491;
    precise float temp_492;
    int temp_493;
    uint temp_494;
    uint temp_495;
    int temp_496;
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
    precise vec3 temp_599;
    precise float temp_600;
    precise float temp_601;
    precise float temp_602;
    precise float temp_603;
    precise float temp_604;
    precise float temp_605;
    precise float temp_606;
    precise float temp_607;
    precise float temp_608;
    precise vec3 temp_609;
    precise float temp_610;
    precise float temp_611;
    precise float temp_612;
    precise vec3 temp_613;
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
    // 0x000008: 0x0103F8000007F00F Mov32i
    // 0x000010: 0xE003FF87CFF7FF14 Ipa
    // 0x000018: 0x010404000007F017 Mov32i
    // 0x000028: 0xE003FF870FF7FF00 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000030: 0xE003FF874FF7FF01 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000038: 0x5080000000471414 Mufu
    // 0x000048: 0x4C68100C04A70000 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000050: 0x4C68100C04B70101 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000058: 0xE043FF8E0147FF0D Ipa
    temp_8 = in_attr6.x;
    // 0x000068: 0xE043FF8E4147FF24 Ipa
    temp_9 = in_attr6.y;
    // 0x000070: 0xD830026FF2470D02 Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000078: 0xD830024202470D08 Texs
    temp_13 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyzw;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    temp_16 = temp_13.z;
    temp_17 = temp_13.w;
    // 0x000088: 0xD86201EFF0F7000C Texs
    temp_18 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x000090: 0xE043FF8A0147FF04 Ipa
    temp_19 = in_attr2.x;
    // 0x000098: 0xE043FF8A4147FF05 Ipa
    temp_20 = in_attr2.y;
    // 0x0000A8: 0xE043FF890147FF0A Ipa
    temp_21 = in_attr1.x;
    // 0x0000B0: 0xE043FF8A8147FF06 Ipa
    temp_22 = in_attr2.z;
    // 0x0000B8: 0xE043FF894147FF0B Ipa
    temp_23 = in_attr1.y;
    // 0x0000C8: 0xE043FF898147FF0E Ipa
    temp_24 = in_attr1.z;
    // 0x0000D0: 0xE043FF880147FF12 Ipa
    temp_25 = in_attr0.x;
    // 0x0000D8: 0xE043FF884147FF13 Ipa
    temp_26 = in_attr0.y;
    // 0x0000E8: 0xE043FF888147FF15 Ipa
    temp_27 = in_attr0.z;
    // 0x0000F0: 0x5C68100000470407 Fmul
    temp_28 = temp_19 * temp_19;
    // 0x0000F8: 0x5C68100000A70A10 Fmul
    temp_29 = temp_21 * temp_21;
    // 0x000108: 0x59A0038000570507 Ffma
    temp_30 = fma(temp_20, temp_20, temp_28);
    // 0x000110: 0x5C68100001271211 Fmul
    temp_31 = temp_25 * temp_25;
    // 0x000118: 0x59A0080000B70B10 Ffma
    temp_32 = fma(temp_23, temp_23, temp_29);
    // 0x000128: 0x59A0038000670607 Ffma
    temp_33 = fma(temp_22, temp_22, temp_30);
    // 0x000130: 0x59A0088001371316 Ffma
    temp_34 = fma(temp_26, temp_26, temp_31);
    // 0x000138: 0x5080000000570707 Mufu
    temp_35 = inversesqrt(temp_33);
    // 0x000148: 0x59A0080000E70E10 Ffma
    temp_36 = fma(temp_24, temp_24, temp_32);
    // 0x000150: 0x5080000000571010 Mufu
    temp_37 = inversesqrt(temp_36);
    // 0x000158: 0x59A00B0001571516 Ffma
    temp_38 = fma(temp_27, temp_27, temp_34);
    // 0x000168: 0x5C68100000770404 Fmul
    temp_39 = temp_19 * temp_35;
    // 0x000170: 0x5C68100000770505 Fmul
    temp_40 = temp_20 * temp_35;
    // 0x000178: 0x5C68100000770606 Fmul
    temp_41 = temp_22 * temp_35;
    // 0x000188: 0x5C68100001070A0F Fmul
    temp_42 = temp_21 * temp_37;
    // 0x000190: 0x5C68100001070B0B Fmul
    temp_43 = temp_23 * temp_37;
    // 0x000198: 0x5C68100001070E11 Fmul
    temp_44 = temp_24 * temp_37;
    // 0x0001A8: 0x5080000000571610 Mufu
    temp_45 = inversesqrt(temp_38);
    // 0x0001B0: 0x5C68100001071212 Fmul
    temp_46 = temp_25 * temp_45;
    // 0x0001B8: 0x5C68100001071313 Fmul
    temp_47 = temp_26 * temp_45;
    // 0x0001C8: 0x5C68100001071515 Fmul
    temp_48 = temp_27 * temp_45;
    // 0x0001D0: 0xF0F0000034270000 Depbar
    // 0x0001D8: 0x5C68100000370307 Fmul
    temp_49 = temp_12 * temp_12;
    // 0x0001E8: 0x5C68100000370404 Fmul
    temp_50 = temp_39 * temp_12;
    // 0x0001F0: 0x5C68100000370505 Fmul
    temp_51 = temp_40 * temp_12;
    // 0x0001F8: 0x5C68100000370603 Fmul
    temp_52 = temp_41 * temp_12;
    // 0x000208: 0x59A0038000270207 Ffma
    temp_53 = fma(temp_11, temp_11, temp_49);
    // 0x000210: 0x59A0020000F70204 Ffma
    temp_54 = fma(temp_11, temp_42, temp_50);
    // 0x000218: 0x59A0028000B70205 Ffma
    temp_55 = fma(temp_11, temp_43, temp_51);
    // 0x000228: 0x59A0018001170203 Ffma
    temp_56 = fma(temp_11, temp_44, temp_52);
    // 0x000230: 0x385D103F80070707 Fadd
    temp_57 = 0.0 - temp_53;
    temp_58 = temp_57 + 1.0;
    temp_59 = clamp(temp_58, 0.0, 1.0);
    // 0x000238: 0x508000000087070A Mufu
    temp_60 = sqrt(temp_59);
    // 0x000248: 0x59A0020000A71212 Ffma
    temp_61 = fma(temp_46, temp_60, temp_54);
    // 0x000250: 0x59A0028000A71305 Ffma
    temp_62 = fma(temp_47, temp_60, temp_55);
    // 0x000258: 0x59A0018000A71503 Ffma
    temp_63 = fma(temp_48, temp_60, temp_56);
    // 0x000268: 0x5C68100001271202 Fmul
    temp_64 = temp_61 * temp_61;
    // 0x000270: 0x59A0010000570502 Ffma
    temp_65 = fma(temp_62, temp_62, temp_64);
    // 0x000278: 0x59A0010000370302 Ffma
    temp_66 = fma(temp_63, temp_63, temp_65);
    // 0x000288: 0x5080000000570210 Mufu
    temp_67 = inversesqrt(temp_66);
    // 0x000290: 0x5C68100001070316 Fmul
    temp_68 = temp_63 * temp_67;
    // 0x000298: 0x5C68100001070504 Fmul
    temp_69 = temp_62 * temp_67;
    // 0x0002A8: 0x5C68100001071210 Fmul
    temp_70 = temp_61 * temp_67;
    // 0x0002B0: 0x4C68100C00671605 Fmul
    temp_71 = temp_68 * fp_c3.data[1].z;
    // 0x0002B8: 0x4C68100C00271603 Fmul
    temp_72 = temp_68 * fp_c3.data[0].z;
    // 0x0002C8: 0x49A0028C00570405 Ffma
    temp_73 = fma(temp_69, fp_c3.data[1].y, temp_71);
    // 0x0002D0: 0x49A0018C00170403 Ffma
    temp_74 = fma(temp_69, fp_c3.data[0].y, temp_72);
    // 0x0002D8: 0x49A0028C00471005 Ffma
    temp_75 = fma(temp_70, fp_c3.data[1].x, temp_73);
    // 0x0002E8: 0x49A0018C00071003 Ffma
    temp_76 = fma(temp_70, fp_c3.data[0].x, temp_74);
    // 0x0002F0: 0x4C69100C03E70505 Fmul
    temp_77 = 0.0 - fp_c3.data[15].z;
    temp_78 = temp_75 * temp_77;
    // 0x0002F8: 0x4C68101808B70303 Fmul
    temp_79 = temp_76 * fp_c6.data[34].w;
    // 0x000308: 0x4C68101808B70502 Fmul
    temp_80 = temp_78 * fp_c6.data[34].w;
    // 0x000310: 0x49A0000400470326 Ffma
    temp_81 = fma(temp_79, fp_c1.data[1].x, temp_6);
    // 0x000318: 0x49A0008400470227 Ffma
    temp_82 = fma(temp_80, fp_c1.data[1].x, temp_7);
    // 0x000328: 0xD832022282772626 Texs
    temp_83 = texture(fp_t_tcb_22, vec2(temp_81, temp_82)).xyzw;
    temp_84 = temp_83.x;
    temp_85 = temp_83.y;
    temp_86 = temp_83.z;
    temp_87 = temp_83.w;
    // 0x000330: 0xD8240360D2470D24 Texs
    temp_88 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_89 = temp_88.x;
    temp_90 = temp_88.y;
    temp_91 = temp_88.z;
    // 0x000338: 0xD822020030170022 Texs
    temp_92 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_93 = temp_92.x;
    temp_94 = temp_92.y;
    temp_95 = temp_92.z;
    // 0x000348: 0xE043FF8B0147FF3A Ipa
    temp_96 = in_attr3.x;
    // 0x000350: 0xE043FF8B4147FF39 Ipa
    temp_97 = in_attr3.y;
    // 0x000358: 0xE043FF8B8147FF38 Ipa
    temp_98 = in_attr3.z;
    // 0x000368: 0x4C69101805C71005 Fmul
    temp_99 = 0.0 - fp_c6.data[23].x;
    temp_100 = temp_70 * temp_99;
    // 0x000370: 0xF0F0000034470000 Depbar
    // 0x000378: 0x4BB1839406072107 Fsetp
    temp_101 = temp_17 < fp_c5.data[24].x;
    // 0x000388: 0x49A1029805D7041C Ffma
    temp_102 = 0.0 - fp_c6.data[23].y;
    temp_103 = fma(temp_69, temp_102, temp_100);
    // 0x000390: 0x49A50E1805E71605 Ffma
    temp_104 = 0.0 - fp_c6.data[23].z;
    temp_105 = fma(temp_68, temp_104, temp_103);
    temp_106 = clamp(temp_105, 0.0, 1.0);
    // 0x000398: 0x5C68100000570519 Fmul
    temp_107 = temp_106 * temp_106;
    // 0x0003A8: 0x33A00BC000070506 Ffma
    temp_108 = fma(temp_106, -2.0, 3.0);
    // 0x0003B0: 0x5C68100000671919 Fmul
    temp_109 = temp_107 * temp_108;
    // 0x0003B8: 0x5C68100003A73A02 Fmul
    temp_110 = temp_96 * temp_96;
    // 0x0003C8: 0x59A0010003973902 Ffma
    temp_111 = fma(temp_97, temp_97, temp_110);
    // 0x0003D0: 0x59A0010003873802 Ffma
    temp_112 = fma(temp_98, temp_98, temp_111);
    // 0x0003D8: 0x5080000000570207 Mufu
    temp_113 = inversesqrt(temp_112);
    // 0x0003E8: 0x5C69100000773A3A Fmul
    temp_114 = 0.0 - temp_113;
    temp_115 = temp_96 * temp_114;
    // 0x0003F0: 0x5C69100000773939 Fmul
    temp_116 = 0.0 - temp_113;
    temp_117 = temp_97 * temp_116;
    // 0x0003F8: 0x5C69100000773838 Fmul
    temp_118 = 0.0 - temp_113;
    temp_119 = temp_98 * temp_118;
    // 0x000408: 0xE24000000688000F Bra
    if (temp_101)
    {
        // 0x000410: 0x5C9807800FF70000 Mov
        // 0x000418: 0xE33000000007000F Kil
        discard;
    }
    // 0x000478: 0x4C58301805C73A02 Fadd
    temp_120 = 0.0 - fp_c6.data[23].x;
    temp_121 = temp_115 + temp_120;
    // 0x000488: 0xE2900000D9000000 Ssy
    // 0x000490: 0x4C58301805D73905 Fadd
    temp_122 = 0.0 - fp_c6.data[23].y;
    temp_123 = temp_117 + temp_122;
    // 0x000498: 0x4C58301805E73806 Fadd
    temp_124 = 0.0 - fp_c6.data[23].z;
    temp_125 = temp_119 + temp_124;
    // 0x0004A8: 0x386810418007000A Fmul
    temp_126 = temp_6 * 16.0;
    // 0x0004B0: 0x386810411007010E Fmul
    temp_127 = temp_7 * 9.0;
    // 0x0004B8: 0x5CA8148000A70A0A F2f
    temp_128 = floor(temp_126);
    // 0x0004C8: 0x5C68100000270207 Fmul
    temp_129 = temp_121 * temp_121;
    // 0x0004D0: 0x5CA8148000E70A3B F2f
    temp_130 = floor(temp_127);
    // 0x0004D8: 0x0103F0000007F036 Mov32i
    // 0x0004E8: 0x51A4120400272437 Ffma
    temp_131 = fma(temp_89, temp_89, fp_c1.data[0].z);
    temp_132 = clamp(temp_131, 0.0, 1.0);
    // 0x0004F0: 0x49A10E1805E7161C Ffma
    temp_133 = 0.0 - fp_c6.data[23].z;
    temp_134 = fma(temp_68, temp_133, temp_103);
    // 0x0004F8: 0x5C68100002370918 Fmul
    temp_135 = temp_15 * temp_94;
    // 0x000508: 0x5C68100000372032 Fmul
    temp_136 = temp_16 * temp_95;
    // 0x000510: 0x59A0038000570507 Ffma
    temp_137 = fma(temp_123, temp_123, temp_129);
    // 0x000518: 0x32A01B3F00072436 Ffma
    temp_138 = fma(temp_89, 0.5, 0.5);
    // 0x000528: 0x5C68100003773742 Fmul
    temp_139 = temp_132 * temp_132;
    // 0x000530: 0x4C98079808A7001D Mov
    // 0x000538: 0x4C68101406271833 Fmul
    temp_140 = temp_135 * fp_c5.data[24].z;
    // 0x000548: 0x59A10C0001971818 Ffma
    temp_141 = 0.0 - temp_109;
    temp_142 = fma(temp_135, temp_141, temp_135);
    // 0x000550: 0x59A0038000670607 Ffma
    temp_143 = fma(temp_125, temp_125, temp_137);
    // 0x000558: 0x32A0054180073B3B Ffma
    temp_144 = fma(temp_130, 16.0, temp_128);
    // 0x000568: 0x5080000000570707 Mufu
    temp_145 = inversesqrt(temp_143);
    // 0x000570: 0x5C68120003673636 Fmul
    temp_146 = temp_138 * 0.5;
    temp_147 = temp_146 * temp_138;
    // 0x000578: 0x5CB0118003B70A3B F2i
    temp_148 = trunc(temp_144);
    temp_149 = max(temp_148, 0.0);
    temp_150 = uint(temp_149);
    // 0x000588: 0x3858103F8007332B Fadd
    temp_151 = temp_140 + 1.0;
    // 0x000590: 0x4C68101808771D1D Fmul
    temp_152 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x000598: 0x5080000000472B2B Mufu
    temp_153 = 1.0 / temp_151;
    // 0x0005A8: 0x51A5060400370D17 Ffma
    temp_154 = 0.0 - temp_18;
    temp_155 = fma(temp_91, temp_154, fp_c1.data[0].w);
    temp_156 = clamp(temp_155, 0.0, 1.0);
    // 0x0005B0: 0x4C68101801571818 Fmul
    temp_157 = temp_142 * fp_c6.data[5].y;
    // 0x0005B8: 0x5C9807800FF7000C Mov
    // 0x0005C8: 0x5C9807800FF7000D Mov
    // 0x0005D0: 0x51A0139801571D1E Ffma
    temp_158 = fma(temp_152, temp_85, fp_c6.data[5].y);
    // 0x0005D8: 0x49A20B980AE7171B Ffma
    temp_159 = 0.0 - temp_156;
    temp_160 = fma(temp_156, fp_c6.data[43].z, temp_159);
    // 0x0005E8: 0x5C6810000077020B Fmul
    temp_161 = temp_121 * temp_145;
    // 0x0005F0: 0x5C68100000770502 Fmul
    temp_162 = temp_123 * temp_145;
    // 0x0005F8: 0x5C68100000770601 Fmul
    temp_163 = temp_125 * temp_145;
    // 0x000608: 0x01040DF760C7F006 Mov32i
    // 0x000610: 0x5C5C30000FF71C07 Fadd
    temp_164 = temp_134 + -0.0;
    temp_165 = clamp(temp_164, 0.0, 1.0);
    // 0x000618: 0x3848000000873B3E Shl
    temp_166 = int(temp_150) << 8;
    // 0x000628: 0x5C68100000B73A0F Fmul
    temp_167 = temp_115 * temp_161;
    // 0x000630: 0xEF94008200473E3E Ldc
    temp_168 = temp_166 + 0x2004;
    temp_169 = uint(temp_168) >> 2;
    temp_170 = temp_169 >> 2;
    temp_171 = int(temp_169) & 3;
    temp_172 = fp_c8.data[int(temp_170)][temp_171];
    // 0x000638: 0x4C69101805C70B00 Fmul
    temp_173 = 0.0 - fp_c6.data[23].x;
    temp_174 = temp_161 * temp_173;
    // 0x000648: 0x5C68100000B7100B Fmul
    temp_175 = temp_70 * temp_161;
    // 0x000650: 0x3858103F80071B1B Fadd
    temp_176 = temp_160 + 1.0;
    // 0x000658: 0x59A007800027390F Ffma
    temp_177 = fma(temp_117, temp_162, temp_167);
    // 0x000668: 0x49A1001805D70200 Ffma
    temp_178 = 0.0 - fp_c6.data[23].y;
    temp_179 = fma(temp_162, temp_178, temp_174);
    // 0x000670: 0x59A005800027040B Ffma
    temp_180 = fma(temp_69, temp_162, temp_175);
    // 0x000678: 0x5C68100003A71002 Fmul
    temp_181 = temp_70 * temp_115;
    // 0x000688: 0x59A407800017380F Ffma
    temp_182 = fma(temp_119, temp_163, temp_177);
    temp_183 = clamp(temp_182, 0.0, 1.0);
    // 0x000690: 0x49A5001805E70100 Ffma
    temp_184 = 0.0 - fp_c6.data[23].z;
    temp_185 = fma(temp_163, temp_184, temp_179);
    temp_186 = clamp(temp_185, 0.0, 1.0);
    // 0x000698: 0x59A405800017160B Ffma
    temp_187 = fma(temp_68, temp_163, temp_180);
    temp_188 = clamp(temp_187, 0.0, 1.0);
    // 0x0006A8: 0x59A0010003970401 Ffma
    temp_189 = fma(temp_69, temp_117, temp_181);
    // 0x0006B0: 0x49A2030400070F05 Ffma
    temp_190 = fma(temp_183, fp_c1.data[0].x, -6.98316002);
    // 0x0006B8: 0x49A203040007000A Ffma
    temp_191 = fma(temp_186, fp_c1.data[0].x, -6.98316002);
    // 0x0006C8: 0x5C68100002270806 Fmul
    temp_192 = temp_14 * temp_93;
    // 0x0006D0: 0x59A4008003871602 Ffma
    temp_193 = fma(temp_68, temp_119, temp_189);
    temp_194 = clamp(temp_193, 0.0, 1.0);
    // 0x0006D8: 0x59A2058004270B0E Ffma
    temp_195 = 0.0 - temp_188;
    temp_196 = fma(temp_188, temp_139, temp_195);
    // 0x0006E8: 0x4C68101406370801 Fmul
    temp_197 = temp_14 * fp_c5.data[24].w;
    // 0x0006F0: 0x5C68100000570F05 Fmul
    temp_198 = temp_183 * temp_190;
    // 0x0006F8: 0x5C68100000A7000A Fmul
    temp_199 = temp_186 * temp_191;
    // 0x000708: 0x4C68101406270635 Fmul
    temp_200 = temp_192 * fp_c5.data[24].z;
    // 0x000710: 0x59A1010003670208 Ffma
    temp_201 = 0.0 - temp_147;
    temp_202 = fma(temp_194, temp_201, temp_194);
    // 0x000718: 0x51A0070400370B0E Ffma
    temp_203 = fma(temp_188, temp_196, fp_c1.data[0].w);
    // 0x000728: 0x4C68101406370900 Fmul
    temp_204 = temp_15 * fp_c5.data[24].w;
    // 0x000730: 0x5080000000470E0E Mufu
    temp_205 = 1.0 / temp_203;
    // 0x000738: 0x59A103800367070F Ffma
    temp_206 = 0.0 - temp_147;
    temp_207 = fma(temp_165, temp_206, temp_165);
    // 0x000748: 0x3858103F80073534 Fadd
    temp_208 = temp_200 + 1.0;
    // 0x000750: 0x5C5810000087360B Fadd
    temp_209 = temp_147 + temp_202;
    // 0x000758: 0x5080000000473434 Mufu
    temp_210 = 1.0 / temp_208;
    // 0x000768: 0x5C58100001C73509 Fadd
    temp_211 = temp_200 + temp_134;
    // 0x000770: 0x5080000000470B0B Mufu
    temp_212 = 1.0 / temp_209;
    // 0x000778: 0x0103F4A3D717F008 Mov32i
    // 0x000788: 0x5C58100000F7360F Fadd
    temp_213 = temp_147 + temp_207;
    // 0x000790: 0x59A1030001970615 Ffma
    temp_214 = 0.0 - temp_109;
    temp_215 = fma(temp_192, temp_214, temp_192);
    // 0x000798: 0x5080000000470F0F Mufu
    temp_216 = 1.0 / temp_213;
    // 0x0007A8: 0x59A1190001973219 Ffma
    temp_217 = 0.0 - temp_109;
    temp_218 = fma(temp_136, temp_217, temp_136);
    // 0x0007B0: 0x4C68101406273232 Fmul
    temp_219 = temp_136 * fp_c5.data[24].z;
    // 0x0007B8: 0x49A0040400173530 Ffma
    temp_220 = fma(temp_200, fp_c1.data[0].y, 0.790000021);
    // 0x0007C8: 0x5C68100000E73706 Fmul
    temp_221 = temp_132 * temp_205;
    // 0x0007D0: 0x5080000000473030 Mufu
    temp_222 = 1.0 / temp_220;
    // 0x0007D8: 0x5C90008000A70013 Rro
    // 0x0007E8: 0x5C68100003470909 Fmul
    temp_223 = temp_211 * temp_210;
    // 0x0007F0: 0x5080000000271313 Mufu
    temp_224 = exp2(temp_199);
    // 0x0007F8: 0x3868103F00070B31 Fmul
    temp_225 = temp_212 * 0.5;
    // 0x000808: 0x5C9000800057000B Rro
    // 0x000810: 0x5C68100000670605 Fmul
    temp_226 = temp_221 * temp_221;
    // 0x000818: 0x5080000000270B0B Mufu
    temp_227 = exp2(temp_198);
    // 0x000828: 0x3858103F8007322A Fadd
    temp_228 = temp_219 + 1.0;
    // 0x000830: 0x5C6017800097FF09 Fmnmx
    temp_229 = max(0.0, temp_223);
    // 0x000838: 0x5080000000472A2A Mufu
    temp_230 = 1.0 / temp_228;
    // 0x000848: 0x4C58301407B70106 Fadd
    temp_231 = 0.0 - fp_c5.data[30].w;
    temp_232 = temp_197 + temp_231;
    // 0x000850: 0x5C68100000F7310F Fmul
    temp_233 = temp_225 * temp_216;
    // 0x000858: 0x49A004040017333C Ffma
    temp_234 = fma(temp_140, fp_c1.data[0].y, 0.790000021);
    // 0x000868: 0x49A004040017323D Ffma
    temp_235 = fma(temp_219, fp_c1.data[0].y, 0.790000021);
    // 0x000870: 0x5080000000473C3C Mufu
    temp_236 = 1.0 / temp_234;
    // 0x000878: 0x5C6810000097090E Fmul
    temp_237 = temp_229 * temp_229;
    // 0x000888: 0x5080000000473D3D Mufu
    temp_238 = 1.0 / temp_235;
    // 0x000890: 0x5C58100001C73309 Fadd
    temp_239 = temp_140 + temp_134;
    // 0x000898: 0x51A0031407B72506 Ffma
    temp_240 = fma(temp_90, temp_232, fp_c5.data[30].w);
    // 0x0008A8: 0x5C58100001C7321C Fadd
    temp_241 = temp_219 + temp_134;
    // 0x0008B0: 0x5C68100000F7051A Fmul
    temp_242 = temp_226 * temp_233;
    // 0x0008B8: 0x4C68101406372005 Fmul
    temp_243 = temp_16 * fp_c5.data[24].w;
    // 0x0008C8: 0x5C68100000E73011 Fmul
    temp_244 = temp_222 * temp_237;
    // 0x0008D0: 0x5C68100002B7090E Fmul
    temp_245 = temp_239 * temp_153;
    // 0x0008D8: 0x59A1058000B70609 Ffma
    temp_246 = 0.0 - temp_227;
    temp_247 = fma(temp_240, temp_246, temp_227);
    // 0x0008E8: 0x4C58301407B7000F Fadd
    temp_248 = 0.0 - fp_c5.data[30].w;
    temp_249 = temp_204 + temp_248;
    // 0x0008F0: 0x5C68100002A71C1C Fmul
    temp_250 = temp_241 * temp_230;
    // 0x0008F8: 0x4C58301407B7050A Fadd
    temp_251 = 0.0 - fp_c5.data[30].w;
    temp_252 = temp_243 + temp_251;
    // 0x000908: 0x4C68101801471112 Fmul
    temp_253 = temp_244 * fp_c6.data[5].x;
    // 0x000910: 0x5C6810000027103F Fmul
    temp_254 = temp_70 * temp_194;
    // 0x000918: 0x5C58100000970609 Fadd
    temp_255 = temp_240 + temp_247;
    // 0x000928: 0x51A0079407B72508 Ffma
    temp_256 = fma(temp_90, temp_249, fp_c5.data[30].w);
    // 0x000930: 0x5C60178000E7FF11 Fmnmx
    temp_257 = max(0.0, temp_245);
    // 0x000938: 0x5C68100001A7070E Fmul
    temp_258 = temp_165 * temp_242;
    // 0x000948: 0x1E23EA2F98371212 Fmul32i
    temp_259 = temp_253 * 0.318309873;
    // 0x000950: 0x51A0131801471D1A Ffma
    temp_260 = fma(temp_152, temp_84, fp_c6.data[5].x);
    // 0x000958: 0x5C60178001C7FF1C Fmnmx
    temp_261 = max(0.0, temp_250);
    // 0x000968: 0x59A109800137080F Ffma
    temp_262 = 0.0 - temp_224;
    temp_263 = fma(temp_256, temp_262, temp_224);
    // 0x000970: 0x5C68100001171111 Fmul
    temp_264 = temp_257 * temp_257;
    // 0x000978: 0x51A0141801671D1D Ffma
    temp_265 = fma(temp_152, temp_86, fp_c6.data[5].z);
    // 0x000988: 0x59A1090001270907 Ffma
    temp_266 = 0.0 - temp_259;
    temp_267 = fma(temp_255, temp_266, temp_259);
    // 0x000990: 0x51A0051407B72509 Ffma
    temp_268 = fma(temp_90, temp_252, fp_c5.data[30].w);
    // 0x000998: 0x5C68100001C71C1C Fmul
    temp_269 = temp_261 * temp_261;
    // 0x0009A8: 0x5C58100000F7080F Fadd
    temp_270 = temp_256 + temp_263;
    // 0x0009B0: 0x5C68100001173C11 Fmul
    temp_271 = temp_236 * temp_264;
    // 0x0009B8: 0x59A1058000B7080A Ffma
    temp_272 = 0.0 - temp_227;
    temp_273 = fma(temp_256, temp_272, temp_227);
    // 0x0009C8: 0x5B6603800FF73E07 Isetp
    temp_274 = floatBitsToUint(temp_172) <= 0u;
    // 0x0009D0: 0x59A1098001370912 Ffma
    temp_275 = 0.0 - temp_224;
    temp_276 = fma(temp_268, temp_275, temp_224);
    // 0x0009D8: 0x5C68100001C73D1C Fmul
    temp_277 = temp_238 * temp_269;
    // 0x0009E8: 0x59A1098001370613 Ffma
    temp_278 = 0.0 - temp_224;
    temp_279 = fma(temp_240, temp_278, temp_224);
    // 0x0009F0: 0x59A1058000B7090B Ffma
    temp_280 = 0.0 - temp_227;
    temp_281 = fma(temp_268, temp_280, temp_227);
    // 0x0009F8: 0x4C68101801571111 Fmul
    temp_282 = temp_271 * fp_c6.data[5].y;
    // 0x000A08: 0x5C68100001E70F0F Fmul
    temp_283 = temp_270 * temp_158;
    // 0x000A10: 0x5C58100001270912 Fadd
    temp_284 = temp_268 + temp_276;
    // 0x000A18: 0x4C68101801671C1C Fmul
    temp_285 = temp_277 * fp_c6.data[5].z;
    // 0x000A28: 0x5C58100001370613 Fadd
    temp_286 = temp_240 + temp_279;
    // 0x000A30: 0x5C58100000A7080A Fadd
    temp_287 = temp_256 + temp_273;
    // 0x000A38: 0x5C58100000B7090B Fadd
    temp_288 = temp_268 + temp_281;
    // 0x000A48: 0x1E23EA2F98371111 Fmul32i
    temp_289 = temp_282 * 0.318309873;
    // 0x000A50: 0x5C68100000E70F2E Fmul
    temp_290 = temp_283 * temp_258;
    // 0x000A58: 0x1E23EA2F98371C1C Fmul32i
    temp_291 = temp_285 * 0.318309873;
    // 0x000A68: 0x5C68100001A71313 Fmul
    temp_292 = temp_286 * temp_260;
    // 0x000A70: 0x5C68100001D7121D Fmul
    temp_293 = temp_284 * temp_265;
    // 0x000A78: 0x49A20B980AC7170F Ffma
    temp_294 = 0.0 - temp_156;
    temp_295 = fma(temp_156, fp_c6.data[43].x, temp_294);
    // 0x000A88: 0x49A20B980AD7171A Ffma
    temp_296 = 0.0 - temp_156;
    temp_297 = fma(temp_156, fp_c6.data[43].y, temp_296);
    // 0x000A90: 0x59A1088001170A0A Ffma
    temp_298 = 0.0 - temp_289;
    temp_299 = fma(temp_287, temp_298, temp_289);
    // 0x000A98: 0x59A10E0001C70B0B Ffma
    temp_300 = 0.0 - temp_291;
    temp_301 = fma(temp_288, temp_300, temp_291);
    // 0x000AA8: 0x5C68100000270412 Fmul
    temp_302 = temp_69 * temp_194;
    // 0x000AB0: 0x5C68100000271611 Fmul
    temp_303 = temp_68 * temp_194;
    // 0x000AB8: 0x5C68100000E7132D Fmul
    temp_304 = temp_292 * temp_258;
    // 0x000AC8: 0x5C68100000E71D2F Fmul
    temp_305 = temp_293 * temp_258;
    // 0x000AD0: 0x3858103F80070F1C Fadd
    temp_306 = temp_295 + 1.0;
    // 0x000AD8: 0x3858103F80071A1A Fadd
    temp_307 = temp_297 + 1.0;
    // 0x000AE8: 0x4C68101801471515 Fmul
    temp_308 = temp_215 * fp_c6.data[5].x;
    // 0x000AF0: 0x4C68101801671919 Fmul
    temp_309 = temp_218 * fp_c6.data[5].z;
    // 0x000AF8: 0x32A21D4000073F3F Ffma
    temp_310 = 0.0 - temp_115;
    temp_311 = fma(temp_254, 2.0, temp_310);
    // 0x000B08: 0x32A21CC000071212 Ffma
    temp_312 = 0.0 - temp_117;
    temp_313 = fma(temp_302, 2.0, temp_312);
    // 0x000B10: 0x32A21C4000071111 Ffma
    temp_314 = 0.0 - temp_119;
    temp_315 = fma(temp_303, 2.0, temp_314);
    // 0x000B18: 0x5C9807800FF7000E Mov
    // 0x000B28: 0x5C9807800FF7000F Mov
    // 0x000B30: 0x5C9807800FF70013 Mov
    // 0x000B38: 0x5C9807800FF70017 Mov
    // 0x000B48: 0x59A40E0001C7011C Ffma
    temp_316 = fma(temp_197, temp_306, temp_306);
    temp_317 = clamp(temp_316, 0.0, 1.0);
    // 0x000B50: 0x59A40D0001A7001D Ffma
    temp_318 = fma(temp_204, temp_307, temp_307);
    temp_319 = clamp(temp_318, 0.0, 1.0);
    // 0x000B58: 0x59A40D8001B7051E Ffma
    temp_320 = fma(temp_243, temp_176, temp_176);
    temp_321 = clamp(temp_320, 0.0, 1.0);
    // 0x000B68: 0x1E23DCCCCCD7151F Fmul32i
    temp_322 = temp_308 * 0.100000001;
    // 0x000B70: 0x1E23DCCCCCD71820 Fmul32i
    temp_323 = temp_157 * 0.100000001;
    // 0x000B78: 0x1E23DCCCCCD7192C Fmul32i
    temp_324 = temp_309 * 0.100000001;
    // 0x000B88: 0x1E23E22F98372D2D Fmul32i
    temp_325 = temp_304 * 0.159154937;
    // 0x000B90: 0x1E23E22F98372E2E Fmul32i
    temp_326 = temp_290 * 0.159154937;
    // 0x000B98: 0x1E23E22F98372F2F Fmul32i
    temp_327 = temp_305 * 0.159154937;
    // 0x000BA8: 0xF0F800000000000F Sync
    temp_328 = 0.0;
    temp_329 = 0.0;
    temp_330 = 0.0;
    temp_331 = 0.0;
    temp_332 = 0.0;
    temp_333 = 0.0;
    temp_334 = 0.0;
    temp_335 = 0.0;
    temp_336 = 0.0;
    temp_337 = 0.0;
    temp_338 = 0.0;
    temp_339 = 0.0;
    if (!temp_274)
    {
        // 0x000BB0: 0x5C9807800FF70040 Mov
        temp_340 = 0;
        do
        {
            // 0x000BB8: 0x5C18020004073B1B Iscadd
            temp_342 = int(temp_150) << 4;
            temp_343 = temp_342 + temp_340;
            // 0x000BC8: 0xE003FF87CFF7FF43 Ipa
            // 0x000BD0: 0x1C00000000174040 Iadd32i
            temp_344 = temp_340 + 1;
            // 0x000BD8: 0xE003FF87CFF7FF45 Ipa
            // 0x000BE8: 0x3848000000471B1B Shl
            temp_345 = temp_343 << 4;
            // 0x000BF0: 0xE003FF87CFF7FF44 Ipa
            // 0x000BF8: 0x5B6C038003E7400F Isetp
            temp_341 = uint(temp_344) >= floatBitsToUint(temp_172);
            // 0x000C08: 0xE290000060000000 Ssy
            // 0x000C10: 0xEF94008200071B1B Ldc
            temp_346 = temp_345 + 0x2000;
            temp_347 = uint(temp_346) >> 2;
            temp_348 = temp_347 >> 2;
            temp_349 = int(temp_347) & 3;
            temp_350 = fp_c8.data[int(temp_348)][temp_349];
            // 0x000C18: 0x5080000000474343 Mufu
            // 0x000C28: 0x5080000000474545 Mufu
            // 0x000C30: 0x5080000000474444 Mufu
            // 0x000C38: 0xE043FF8D0437FF43 Ipa
            temp_351 = in_attr5.x;
            // 0x000C48: 0xE043FF8D8457FF45 Ipa
            temp_352 = in_attr5.z;
            // 0x000C50: 0xE043FF8D4447FF44 Ipa
            temp_353 = in_attr5.y;
            // 0x000C58: 0x3848000000671B41 Shl
            temp_354 = floatBitsToInt(temp_350) << 6;
            // 0x000C68: 0xEF95008001074114 Ldc
            temp_355 = temp_354 + 16;
            temp_356 = uint(temp_355) >> 2;
            temp_357 = temp_356 >> 2;
            temp_358 = int(temp_356) & 3;
            temp_359 = fp_c8.data[int(temp_357)][temp_358];
            temp_360 = int(temp_356) + 1;
            temp_361 = uint(temp_360) >> 2;
            temp_362 = temp_360 & 3;
            temp_363 = fp_c8.data[int(temp_361)][temp_362];
            // 0x000C70: 0xEF95008001874118 Ldc
            temp_364 = temp_354 + 24;
            temp_365 = uint(temp_364) >> 2;
            temp_366 = temp_365 >> 2;
            temp_367 = int(temp_365) & 3;
            temp_368 = fp_c8.data[int(temp_366)][temp_367];
            temp_369 = int(temp_365) + 1;
            temp_370 = uint(temp_369) >> 2;
            temp_371 = temp_369 & 3;
            temp_372 = fp_c8.data[int(temp_370)][temp_371];
            // 0x000C78: 0xEF9500800207411A Ldc
            temp_373 = temp_354 + 32;
            temp_374 = uint(temp_373) >> 2;
            temp_375 = temp_374 >> 2;
            temp_376 = int(temp_374) & 3;
            temp_377 = fp_c8.data[int(temp_375)][temp_376];
            temp_378 = int(temp_374) + 1;
            temp_379 = uint(temp_378) >> 2;
            temp_380 = temp_378 & 3;
            temp_381 = fp_c8.data[int(temp_379)][temp_380];
            // 0x000C88: 0x5C58300004371443 Fadd
            temp_382 = 0.0 - temp_351;
            temp_383 = temp_359 + temp_382;
            // 0x000C90: 0xEF94008002874114 Ldc
            temp_384 = temp_354 + 40;
            temp_385 = uint(temp_384) >> 2;
            temp_386 = temp_385 >> 2;
            temp_387 = int(temp_385) & 3;
            temp_388 = fp_c8.data[int(temp_386)][temp_387];
            // 0x000C98: 0x5C58300004471544 Fadd
            temp_389 = 0.0 - temp_353;
            temp_390 = temp_363 + temp_389;
            // 0x000CA8: 0x5C58300004571845 Fadd
            temp_391 = 0.0 - temp_352;
            temp_392 = temp_368 + temp_391;
            // 0x000CB0: 0x5C68100004374346 Fmul
            temp_393 = temp_383 * temp_383;
            // 0x000CB8: 0x59A1228004571919 Ffma
            temp_394 = 0.0 - temp_392;
            temp_395 = fma(temp_372, temp_394, temp_392);
            // 0x000CC8: 0x59A0230004474446 Ffma
            temp_396 = fma(temp_390, temp_390, temp_393);
            // 0x000CD0: 0x59A0230001971947 Ffma
            temp_397 = fma(temp_395, temp_395, temp_396);
            // 0x000CD8: 0x5080000000574715 Mufu
            temp_398 = inversesqrt(temp_397);
            // 0x000CE8: 0x5080000000874747 Mufu
            temp_399 = sqrt(temp_397);
            // 0x000CF0: 0x5C68100001574318 Fmul
            temp_400 = temp_383 * temp_398;
            // 0x000CF8: 0x5C69100001A71818 Fmul
            temp_401 = 0.0 - temp_377;
            temp_402 = temp_400 * temp_401;
            // 0x000D08: 0x5C6810000157441A Fmul
            temp_403 = temp_390 * temp_398;
            // 0x000D10: 0x5C68100001571915 Fmul
            temp_404 = temp_395 * temp_398;
            // 0x000D18: 0x59A10C0001B71A1A Ffma
            temp_405 = 0.0 - temp_381;
            temp_406 = fma(temp_403, temp_405, temp_402);
            // 0x000D28: 0xEF95008003874118 Ldc
            temp_407 = temp_354 + 56;
            temp_408 = uint(temp_407) >> 2;
            temp_409 = temp_408 >> 2;
            temp_410 = int(temp_408) & 3;
            temp_411 = fp_c8.data[int(temp_409)][temp_410];
            temp_412 = int(temp_408) + 1;
            temp_413 = uint(temp_412) >> 2;
            temp_414 = temp_412 & 3;
            temp_415 = fp_c8.data[int(temp_413)][temp_414];
            // 0x000D30: 0x010404000007F01B Mov32i
            // 0x000D38: 0x59A10D000147151A Ffma
            temp_416 = 0.0 - temp_388;
            temp_417 = fma(temp_404, temp_416, temp_406);
            // 0x000D48: 0xEF95008003074114 Ldc
            temp_418 = temp_354 + 48;
            temp_419 = uint(temp_418) >> 2;
            temp_420 = temp_419 >> 2;
            temp_421 = int(temp_419) & 3;
            temp_422 = fp_c8.data[int(temp_420)][temp_421];
            temp_423 = int(temp_419) + 1;
            temp_424 = uint(temp_423) >> 2;
            temp_425 = temp_423 & 3;
            temp_426 = fp_c8.data[int(temp_424)][temp_425];
            // 0x000D50: 0x59A40C8001871A18 Ffma
            temp_427 = fma(temp_417, temp_411, temp_415);
            temp_428 = clamp(temp_427, 0.0, 1.0);
            // 0x000D58: 0x59A40A8004771447 Ffma
            temp_429 = fma(temp_422, temp_399, temp_426);
            temp_430 = clamp(temp_429, 0.0, 1.0);
            // 0x000D68: 0x5C68100001871819 Fmul
            temp_431 = temp_428 * temp_428;
            // 0x000D70: 0x5C6810000477471A Fmul
            temp_432 = temp_430 * temp_430;
            // 0x000D78: 0x33A00DC00007471B Ffma
            temp_433 = fma(temp_430, -2.0, 3.0);
            // 0x000D88: 0x010404000007F047 Mov32i
            // 0x000D90: 0x5C68100001B71A1A Fmul
            temp_434 = temp_432 * temp_433;
            // 0x000D98: 0x33A023C000071818 Ffma
            temp_435 = fma(temp_428, -2.0, 3.0);
            // 0x000DA8: 0x5C68100001871918 Fmul
            temp_436 = temp_431 * temp_435;
            // 0x000DB0: 0x39585042F0074519 Fadd
            temp_437 = abs(temp_392);
            temp_438 = temp_437 + -120.0;
            // 0x000DB8: 0x5C68100001A71818 Fmul
            temp_439 = temp_436 * temp_434;
            // 0x000DC8: 0x1EABD4CCCCD71919 Fmul32i
            temp_440 = temp_438 * -0.0500000007;
            temp_441 = clamp(temp_440, 0.0, 1.0);
            // 0x000DD0: 0x5C68100001971818 Fmul
            temp_442 = temp_439 * temp_441;
            // 0x000DD8: 0x36247F9000171919 Xmad
            temp_443 = floatBitsToUint(temp_441) >> 16;
            temp_444 = int(temp_443) << 16;
            // 0x000DE8: 0x5BB383800FF71807 Fsetp
            temp_445 = temp_442 <= 0.0;
            // 0x000DF0: 0x7A05083C0F00FF19 Hadd2
            temp_340 = temp_344;
            temp_446 = uint(temp_444);
            temp_447 = temp_328;
            temp_448 = temp_329;
            temp_449 = temp_330;
            temp_450 = temp_331;
            temp_451 = temp_332;
            temp_452 = temp_333;
            if (temp_445)
            {
                temp_453 = unpackHalf2x16(uint(temp_444)).y;
                temp_454 = packHalf2x16(vec2(1.0, temp_453));
                temp_446 = temp_454;
            }
            // 0x000DF8: 0x5D2103902FF71907 Hsetp2
            temp_455 = unpackHalf2x16(temp_446).x;
            temp_456 = temp_455 == 0.0;
            // 0x000E08: 0xF0F800000008000F Sync
            if (temp_456)
            {
                // 0x000E10: 0x508000000047141B Mufu
                temp_457 = 1.0 / temp_422;
                // 0x000E18: 0xEF94008002C74114 Ldc
                temp_458 = temp_354 + 44;
                temp_459 = uint(temp_458) >> 2;
                temp_460 = temp_459 >> 2;
                temp_461 = int(temp_459) & 3;
                temp_462 = fp_c8.data[int(temp_460)][temp_461];
                // 0x000E28: 0x5C69100001B7151B Fmul
                temp_463 = 0.0 - temp_457;
                temp_464 = temp_426 * temp_463;
                // 0x000E30: 0x5C60138001B74545 Fmnmx
                temp_465 = min(temp_392, temp_464);
                // 0x000E38: 0x5C61178004571B1B Fmnmx
                temp_466 = 0.0 - temp_464;
                temp_467 = max(temp_466, temp_465);
                // 0x000E48: 0x59A0230001B71B15 Ffma
                temp_468 = fma(temp_467, temp_467, temp_396);
                // 0x000E50: 0x5080000000571519 Mufu
                temp_469 = inversesqrt(temp_468);
                // 0x000E58: 0x5080000000871515 Mufu
                temp_470 = sqrt(temp_468);
                // 0x000E68: 0x5C68100001974343 Fmul
                temp_471 = temp_383 * temp_469;
                // 0x000E70: 0x5C68100001974444 Fmul
                temp_472 = temp_390 * temp_469;
                // 0x000E78: 0x5C68100001971B1B Fmul
                temp_473 = temp_467 * temp_469;
                // 0x000E88: 0x5080000000471414 Mufu
                temp_474 = 1.0 / temp_462;
                // 0x000E90: 0x5C58100004373A47 Fadd
                temp_475 = temp_115 + temp_471;
                // 0x000E98: 0x5C5810000447391A Fadd
                temp_476 = temp_117 + temp_472;
                // 0x000EA8: 0x5C58100001B73846 Fadd
                temp_477 = temp_119 + temp_473;
                // 0x000EB0: 0x5C68100004774719 Fmul
                temp_478 = temp_475 * temp_475;
                // 0x000EB8: 0x59A00C8001A71A19 Ffma
                temp_479 = fma(temp_476, temp_476, temp_478);
                // 0x000EC8: 0x59A00C8004674619 Ffma
                temp_480 = fma(temp_477, temp_477, temp_479);
                // 0x000ED0: 0x5080000000571945 Mufu
                temp_481 = inversesqrt(temp_480);
                // 0x000ED8: 0x51A00A8400571419 Ffma
                temp_482 = fma(temp_474, temp_470, fp_c1.data[1].y);
                // 0x000EE8: 0xEF95008000074114 Ldc
                temp_483 = uint(temp_354) >> 2;
                temp_484 = temp_483 >> 2;
                temp_485 = int(temp_483) & 3;
                temp_486 = fp_c8.data[int(temp_484)][temp_485];
                temp_487 = int(temp_483) + 1;
                temp_488 = uint(temp_487) >> 2;
                temp_489 = temp_487 & 3;
                temp_490 = fp_c8.data[int(temp_488)][temp_489];
                // 0x000EF0: 0x5080000000471919 Mufu
                temp_491 = 1.0 / temp_482;
                // 0x000EF8: 0x5C68100004574747 Fmul
                temp_492 = temp_475 * temp_481;
                // 0x000F08: 0xEF94008000874141 Ldc
                temp_493 = temp_354 + 8;
                temp_494 = uint(temp_493) >> 2;
                temp_495 = temp_494 >> 2;
                temp_496 = int(temp_494) & 3;
                temp_497 = fp_c8.data[int(temp_495)][temp_496];
                // 0x000F10: 0x5C68100004571A1A Fmul
                temp_498 = temp_476 * temp_481;
                // 0x000F18: 0x5C68100004574646 Fmul
                temp_499 = temp_477 * temp_481;
                // 0x000F28: 0x5C68100004371045 Fmul
                temp_500 = temp_70 * temp_471;
                // 0x000F30: 0x5C68100004774343 Fmul
                temp_501 = temp_471 * temp_492;
                // 0x000F38: 0x5C68100004771047 Fmul
                temp_502 = temp_70 * temp_492;
                // 0x000F48: 0x1E23FB3333371919 Fmul32i
                temp_503 = temp_491 * 1.39999998;
                // 0x000F50: 0x59A0228004470445 Ffma
                temp_504 = fma(temp_69, temp_472, temp_500);
                // 0x000F58: 0x59A0218001A74443 Ffma
                temp_505 = fma(temp_472, temp_498, temp_501);
                // 0x000F68: 0x59A0238001A70447 Ffma
                temp_506 = fma(temp_69, temp_498, temp_502);
                // 0x000F70: 0x5C68100001971919 Fmul
                temp_507 = temp_503 * temp_503;
                // 0x000F78: 0x59A0228001B71645 Ffma
                temp_508 = fma(temp_68, temp_473, temp_504);
                // 0x000F88: 0x01040DF760C7F044 Mov32i
                // 0x000F90: 0x59A4218004671B43 Ffma
                temp_509 = fma(temp_473, temp_499, temp_505);
                temp_510 = clamp(temp_509, 0.0, 1.0);
                // 0x000F98: 0x59A4238004671647 Ffma
                temp_511 = fma(temp_68, temp_499, temp_506);
                temp_512 = clamp(temp_511, 0.0, 1.0);
                // 0x000FA8: 0x59A10C800457191B Ffma
                temp_513 = 0.0 - temp_508;
                temp_514 = fma(temp_507, temp_513, temp_507);
                // 0x000FB0: 0x5C5C30000FF74519 Fadd
                temp_515 = temp_508 + -0.0;
                temp_516 = clamp(temp_515, 0.0, 1.0);
                // 0x000FB8: 0x49A2220400074344 Ffma
                temp_517 = fma(temp_510, fp_c1.data[0].x, -6.98316002);
                // 0x000FC8: 0x59A223800477421A Ffma
                temp_518 = 0.0 - temp_512;
                temp_519 = fma(temp_139, temp_512, temp_518);
                // 0x000FD0: 0x5C58100001B74545 Fadd
                temp_520 = temp_508 + temp_514;
                // 0x000FD8: 0x5C68100004474344 Fmul
                temp_521 = temp_510 * temp_517;
                // 0x000FE8: 0x51A00D040037471B Ffma
                temp_522 = fma(temp_512, temp_519, fp_c1.data[0].w);
                // 0x000FF0: 0x59A10C800197361A Ffma
                temp_523 = 0.0 - temp_516;
                temp_524 = fma(temp_147, temp_523, temp_516);
                // 0x000FF8: 0x5080000000471B1B Mufu
                temp_525 = 1.0 / temp_522;
                // 0x001008: 0x5C90008004470044 Rro
                // 0x001010: 0x5080000000274444 Mufu
                temp_526 = exp2(temp_521);
                // 0x001018: 0x5C58100001A7361A Fadd
                temp_527 = temp_147 + temp_524;
                // 0x001028: 0x5C68100001471814 Fmul
                temp_528 = temp_442 * temp_486;
                // 0x001030: 0x5080000000471A1A Mufu
                temp_529 = 1.0 / temp_527;
                // 0x001038: 0x5C68100001571815 Fmul
                temp_530 = temp_442 * temp_490;
                // 0x001048: 0x5C68100001B73743 Fmul
                temp_531 = temp_132 * temp_525;
                // 0x001050: 0x5C5810000457331B Fadd
                temp_532 = temp_140 + temp_520;
                // 0x001058: 0x5C68100004171841 Fmul
                temp_533 = temp_442 * temp_497;
                // 0x001068: 0x5C58100004573518 Fadd
                temp_534 = temp_200 + temp_520;
                // 0x001070: 0x5C58100004573245 Fadd
                temp_535 = temp_219 + temp_520;
                // 0x001078: 0x5C68100004374343 Fmul
                temp_536 = temp_531 * temp_531;
                // 0x001088: 0x5C68100001B72B1B Fmul
                temp_537 = temp_153 * temp_532;
                // 0x001090: 0x5C68100001A7311A Fmul
                temp_538 = temp_225 * temp_529;
                // 0x001098: 0x5C68100001873418 Fmul
                temp_539 = temp_210 * temp_534;
                // 0x0010A8: 0x5C68100004572A45 Fmul
                temp_540 = temp_230 * temp_535;
                // 0x0010B0: 0x5C60178001B7FF1B Fmnmx
                temp_541 = max(0.0, temp_537);
                // 0x0010B8: 0x5C68100001A7431A Fmul
                temp_542 = temp_536 * temp_538;
                // 0x0010C8: 0x5C6017800187FF18 Fmnmx
                temp_543 = max(0.0, temp_539);
                // 0x0010D0: 0x59A1220004470643 Ffma
                temp_544 = 0.0 - temp_526;
                temp_545 = fma(temp_240, temp_544, temp_526);
                // 0x0010D8: 0x5C6017800457FF45 Fmnmx
                temp_546 = max(0.0, temp_540);
                // 0x0010E8: 0x5C68100001B71B1B Fmul
                temp_547 = temp_541 * temp_541;
                // 0x0010F0: 0x5C68100001A7191A Fmul
                temp_548 = temp_516 * temp_542;
                // 0x0010F8: 0x5C68100001871818 Fmul
                temp_549 = temp_543 * temp_543;
                // 0x001108: 0x59A1220004470819 Ffma
                temp_550 = 0.0 - temp_526;
                temp_551 = fma(temp_256, temp_550, temp_526);
                // 0x001110: 0x5C58100004370643 Fadd
                temp_552 = temp_240 + temp_545;
                // 0x001118: 0x59A1220004470944 Ffma
                temp_553 = 0.0 - temp_526;
                temp_554 = fma(temp_268, temp_553, temp_526);
                // 0x001128: 0x5C68100001B73C1B Fmul
                temp_555 = temp_236 * temp_547;
                // 0x001130: 0x5C68100001873018 Fmul
                temp_556 = temp_222 * temp_549;
                // 0x001138: 0x5C58100001970819 Fadd
                temp_557 = temp_256 + temp_551;
                // 0x001148: 0x5C68100004371443 Fmul
                temp_558 = temp_528 * temp_552;
                // 0x001150: 0x5C58100004470944 Fadd
                temp_559 = temp_268 + temp_554;
                // 0x001158: 0x5C68100001B7151B Fmul
                temp_560 = temp_530 * temp_555;
                // 0x001168: 0x5C68100001871418 Fmul
                temp_561 = temp_528 * temp_556;
                // 0x001170: 0x5C68100004574514 Fmul
                temp_562 = temp_546 * temp_546;
                // 0x001178: 0x5C68100001971519 Fmul
                temp_563 = temp_530 * temp_557;
                // 0x001188: 0x5C68100004474144 Fmul
                temp_564 = temp_533 * temp_559;
                // 0x001190: 0x5C68100001A74315 Fmul
                temp_565 = temp_558 * temp_548;
                // 0x001198: 0x49A0068400771B0D Ffma
                temp_566 = fma(temp_560, fp_c1.data[1].w, temp_328);
                // 0x0011A8: 0x49A006040077180C Ffma
                temp_567 = fma(temp_561, fp_c1.data[1].w, temp_329);
                // 0x0011B0: 0x5C68100001473D14 Fmul
                temp_568 = temp_238 * temp_562;
                // 0x0011B8: 0x5C68100001A71919 Fmul
                temp_569 = temp_563 * temp_548;
                // 0x0011C8: 0x5C68100001A74444 Fmul
                temp_570 = temp_564 * temp_548;
                // 0x0011D0: 0x49A007840067150F Ffma
                temp_571 = fma(temp_565, fp_c1.data[1].z, temp_330);
                // 0x0011D8: 0x5C68100001474114 Fmul
                temp_572 = temp_533 * temp_568;
                // 0x0011E8: 0x49A0098400671913 Ffma
                temp_573 = fma(temp_569, fp_c1.data[1].z, temp_331);
                // 0x0011F0: 0x49A00B8400674417 Ffma
                temp_574 = fma(temp_570, fp_c1.data[1].z, temp_332);
                // 0x0011F8: 0x49A007040077140E Ffma
                temp_575 = fma(temp_572, fp_c1.data[1].w, temp_333);
                // 0x001208: 0xF0F800000007000F Sync
                temp_447 = temp_566;
                temp_448 = temp_567;
                temp_449 = temp_571;
                temp_450 = temp_573;
                temp_451 = temp_574;
                temp_452 = temp_575;
            }
            // 0x001210: 0xE2400FFF9A09000F Bra
            temp_328 = temp_447;
            temp_329 = temp_448;
            temp_330 = temp_449;
            temp_331 = temp_450;
            temp_332 = temp_451;
            temp_333 = temp_452;
            temp_334 = temp_447;
            temp_335 = temp_448;
            temp_336 = temp_452;
            temp_337 = temp_450;
            temp_338 = temp_449;
            temp_339 = temp_451;
        }
        while (!temp_341);
        // 0x001218: 0xF0F800000007000F Sync
    }
    // 0x001228: 0x5C62578000471014 Fmnmx
    temp_576 = abs(temp_70);
    temp_577 = abs(temp_69);
    temp_578 = max(temp_576, temp_577);
    // 0x001230: 0xE003FF87CFF7FF33 Ipa
    // 0x001238: 0x38681040E0072434 Fmul
    temp_579 = temp_89 * 7.0;
    // 0x001248: 0x5C62578001273F18 Fmnmx
    temp_580 = abs(temp_311);
    temp_581 = abs(temp_313);
    temp_582 = max(temp_580, temp_581);
    // 0x001250: 0x386810408007242B Fmul
    temp_583 = temp_89 * 4.0;
    // 0x001258: 0x4C98079C02070037 Mov
    // 0x001268: 0x5C60578001471614 Fmnmx
    temp_584 = abs(temp_68);
    temp_585 = max(temp_584, temp_578);
    // 0x001270: 0x5C60578001871118 Fmnmx
    temp_586 = abs(temp_315);
    temp_587 = max(temp_586, temp_582);
    // 0x001278: 0x5080000000471415 Mufu
    temp_588 = 1.0 / temp_585;
    // 0x001288: 0x3859103F80072424 Fadd
    temp_589 = 0.0 - temp_89;
    temp_590 = temp_589 + 1.0;
    // 0x001290: 0x5080000000471818 Mufu
    temp_591 = 1.0 / temp_587;
    // 0x001298: 0x5C69100001571616 Fmul
    temp_592 = 0.0 - temp_588;
    temp_593 = temp_68 * temp_592;
    // 0x0012A8: 0x5C68100001571014 Fmul
    temp_594 = temp_70 * temp_588;
    // 0x0012B0: 0x5080000000473333 Mufu
    // 0x0012B8: 0x5C68100001570415 Fmul
    temp_595 = temp_69 * temp_588;
    // 0x0012C8: 0x5C6810000187121A Fmul
    temp_596 = temp_313 * temp_591;
    // 0x0012D0: 0x5C6910000187111B Fmul
    temp_597 = 0.0 - temp_591;
    temp_598 = temp_315 * temp_597;
    // 0x0012D8: 0xC0BA0163EFF71410 Tex
    temp_599 = textureLod(fp_t_tcb_16, vec3(temp_594, temp_595, temp_593), 0.0).xyz;
    temp_600 = temp_599.x;
    temp_601 = temp_599.y;
    temp_602 = temp_599.z;
    // 0x0012E8: 0x5C68100001873F19 Fmul
    temp_603 = temp_311 * temp_591;
    // 0x0012F0: 0x010000000017F018 Mov32i
    // 0x0012F8: 0xE043FF910337FF30 Ipa
    temp_604 = in_attr9.x;
    // 0x001308: 0x5C9807800167002A Mov
    // 0x001310: 0xE043FF914337FF31 Ipa
    temp_605 = in_attr9.y;
    // 0x001318: 0x3859103F80070235 Fadd
    temp_606 = 0.0 - temp_194;
    temp_607 = temp_606 + 1.0;
    // 0x001328: 0xE043FF918337FF32 Ipa
    temp_608 = in_attr9.z;
    // 0x001330: 0xC1BA0143F3471818 Tex
    temp_609 = textureLod(fp_t_tcb_14, vec4(temp_603, temp_596, temp_598, float(1)), temp_579).xyz;
    temp_610 = temp_609.x;
    temp_611 = temp_609.y;
    temp_612 = temp_609.z;
    // 0x001338: 0xD9A20182B2A71414 Texs
    temp_613 = textureLod(fp_t_tcb_18, vec3(temp_594, temp_595, temp_593), temp_583).xyz;
    temp_614 = temp_613.x;
    temp_615 = temp_613.y;
    temp_616 = temp_613.z;
    // 0x001348: 0xDEBA0000C3773030 TexB
    temp_617 = texture(fp_t_cb7_20, vec3(temp_604, temp_605, temp_608)).x;
    // 0x001350: 0x49A005180A170D0A Ffma
    temp_618 = fma(temp_334, fp_c6.data[40].y, temp_299);
    // 0x001358: 0x49A003980A170C07 Ffma
    temp_619 = fma(temp_335, fp_c6.data[40].y, temp_267);
    // 0x001368: 0x0103F0000007F00D Mov32i
    // 0x001370: 0x5C6810000247240C Fmul
    temp_620 = temp_590 * temp_590;
    // 0x001378: 0x49A005980A170E0B Ffma
    temp_621 = fma(temp_336, fp_c6.data[40].y, temp_301);
    // 0x001388: 0x4C6810180907350E Fmul
    temp_622 = temp_607 * fp_c6.data[36].x;
    // 0x001390: 0x49A017180A17132E Ffma
    temp_623 = fma(temp_337, fp_c6.data[40].y, temp_326);
    // 0x001398: 0x5080400000370E0E Mufu
    temp_624 = abs(temp_622);
    temp_625 = log2(temp_624);
    // 0x0013A8: 0x32A006BF00070404 Ffma
    temp_626 = fma(temp_69, 0.5, 0.5);
    // 0x0013B0: 0x508000000037350D Mufu
    temp_627 = log2(temp_607);
    // 0x0013B8: 0x49A016980A170F2D Ffma
    temp_628 = fma(temp_338, fp_c6.data[40].y, temp_325);
    // 0x0013C8: 0x1E23E468DB970213 Fmul32i
    temp_629 = temp_194 * 0.193900004;
    // 0x0013D0: 0x5C68100000C70C0C Fmul
    temp_630 = temp_620 * temp_620;
    // 0x0013D8: 0x010410676C97F00F Mov32i
    // 0x0013E8: 0x0103E2CD9E87F01B Mov32i
    // 0x0013F0: 0x0104066978D7F016 Mov32i
    // 0x0013F8: 0x49A017980A17172F Ffma
    temp_631 = fma(temp_339, fp_c6.data[40].y, temp_327);
    // 0x001408: 0x4C68101808772929 Fmul
    temp_632 = temp_87 * fp_c6.data[33].w;
    // 0x001410: 0x49A0098400A70C13 Ffma
    temp_633 = fma(temp_630, fp_c1.data[2].z, temp_629);
    // 0x001418: 0x49A007840087020F Ffma
    temp_634 = fma(temp_194, fp_c1.data[2].x, 8.40400028);
    // 0x001428: 0x49A20D8400E70C1B Ffma
    temp_635 = fma(temp_630, fp_c1.data[3].z, -0.168799996);
    // 0x001430: 0x4C68101809170E0E Fmul
    temp_636 = temp_625 * fp_c6.data[36].y;
    // 0x001438: 0x4C68101808970D0D Fmul
    temp_637 = temp_627 * fp_c6.data[34].y;
    // 0x001448: 0x49A20B0400C70C16 Ffma
    temp_638 = fma(temp_630, fp_c1.data[3].x, -3.60299993);
    // 0x001450: 0x088BF05D63971313 Fadd32i
    temp_639 = temp_633 + -0.522800028;
    // 0x001458: 0x51A007840097020F Ffma
    temp_640 = fma(temp_194, temp_634, fp_c1.data[2].y);
    // 0x001468: 0x5C68100001B70C24 Fmul
    temp_641 = temp_630 * temp_635;
    // 0x001470: 0x010404000007F041 Mov32i
    // 0x001478: 0x5C90008000E70017 Rro
    // 0x001488: 0x4C98079809570031 Mov
    // 0x001490: 0x5084000000271717 Mufu
    temp_642 = exp2(temp_636);
    temp_643 = clamp(temp_642, 0.0, 1.0);
    // 0x001498: 0x5C6810000137020E Fmul
    temp_644 = temp_194 * temp_639;
    // 0x0014A8: 0x51A0078400B7020F Ffma
    temp_645 = fma(temp_194, temp_640, fp_c1.data[2].w);
    // 0x0014B0: 0x51A00B0400D70C1B Ffma
    temp_646 = fma(temp_630, temp_638, fp_c1.data[3].y);
    // 0x0014B8: 0x5C90008000D70013 Rro
    // 0x0014C8: 0x4C9807980087002A Mov
    // 0x0014D0: 0x5084000000271313 Mufu
    temp_647 = exp2(temp_637);
    temp_648 = clamp(temp_647, 0.0, 1.0);
    // 0x0014D8: 0x4C58101408173102 Fadd
    temp_649 = fp_c6.data[37].y + fp_c5.data[32].y;
    // 0x0014E8: 0x5C60138002470F24 Fmnmx
    temp_650 = min(temp_645, temp_641);
    // 0x0014F0: 0x4C9807980097000D Mov
    // 0x0014F8: 0x4C98079800A7000F Mov
    // 0x001508: 0x59A0070001B70C1B Ffma
    temp_651 = fma(temp_630, temp_646, temp_644);
    // 0x001510: 0x4C59101800472A0E Fadd
    temp_652 = 0.0 - fp_c6.data[2].x;
    temp_653 = temp_652 + fp_c6.data[1].x;
    // 0x001518: 0x5C68100001770217 Fmul
    temp_654 = temp_649 * temp_643;
    // 0x001528: 0xE04BFF904337FF02 Ipa
    temp_655 = in_attr8.y;
    temp_656 = clamp(temp_655, 0.0, 1.0);
    // 0x001530: 0x4C98079808670031 Mov
    // 0x001538: 0x4C59101800570D0D Fadd
    temp_657 = 0.0 - fp_c6.data[2].y;
    temp_658 = temp_657 + fp_c6.data[1].y;
    // 0x001548: 0x4C59101800670F0F Fadd
    temp_659 = 0.0 - fp_c6.data[2].z;
    temp_660 = temp_659 + fp_c6.data[1].z;
    // 0x001550: 0x386C104248070816 Fmul
    temp_661 = temp_256 * 50.0;
    temp_662 = clamp(temp_661, 0.0, 1.0);
    // 0x001558: 0x51A007180087040E Ffma
    temp_663 = fma(temp_626, temp_653, fp_c6.data[2].x);
    // 0x001568: 0x4C68101808871313 Fmul
    temp_664 = temp_648 * fp_c6.data[34].x;
    // 0x001570: 0x5C5C30000FF72424 Fadd
    temp_665 = temp_650 + -0.0;
    temp_666 = clamp(temp_665, 0.0, 1.0);
    // 0x001578: 0x51A006980097040C Ffma
    temp_667 = fma(temp_626, temp_658, fp_c6.data[2].y);
    // 0x001588: 0x51A0079800A7040F Ffma
    temp_668 = fma(temp_626, temp_660, fp_c6.data[2].z);
    // 0x001590: 0x4C68101808C71704 Fmul
    temp_669 = temp_654 * fp_c6.data[35].x;
    // 0x001598: 0x4C5C100400F71B2A Fadd
    temp_670 = temp_651 + fp_c1.data[3].w;
    temp_671 = clamp(temp_670, 0.0, 1.0);
    // 0x0015A8: 0x51A018980867130D Ffma
    temp_672 = fma(temp_664, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x0015B0: 0x5C6810000167241B Fmul
    temp_673 = temp_666 * temp_662;
    // 0x0015B8: 0x4C68101808D71713 Fmul
    temp_674 = temp_654 * fp_c6.data[35].y;
    // 0x0015C8: 0x4C68101808E71716 Fmul
    temp_675 = temp_654 * fp_c6.data[35].z;
    // 0x0015D0: 0x49A016940827042D Ffma
    temp_676 = fma(temp_669, fp_c5.data[32].z, temp_628);
    // 0x0015D8: 0x49A1021408270404 Ffma
    temp_677 = 0.0 - fp_c5.data[32].z;
    temp_678 = fma(temp_669, temp_677, temp_669);
    // 0x0015E8: 0x5C59100002A7242A Fadd
    temp_679 = 0.0 - temp_666;
    temp_680 = temp_679 + temp_671;
    // 0x0015F0: 0x4C9807980B470034 Mov
    // 0x0015F8: 0x49A017140827132E Ffma
    temp_681 = fma(temp_674, fp_c5.data[32].z, temp_623);
    // 0x001608: 0x49A017940827162F Ffma
    temp_682 = fma(temp_675, fp_c5.data[32].z, temp_631);
    // 0x001610: 0x49A1099408271313 Ffma
    temp_683 = 0.0 - fp_c5.data[32].z;
    temp_684 = fma(temp_674, temp_683, temp_674);
    // 0x001618: 0x5C58100000470704 Fadd
    temp_685 = temp_619 + temp_678;
    // 0x001628: 0x49A10B1408271616 Ffma
    temp_686 = 0.0 - fp_c5.data[32].z;
    temp_687 = fma(temp_675, temp_686, temp_675);
    // 0x001630: 0x59A00D8002A70606 Ffma
    temp_688 = fma(temp_240, temp_680, temp_673);
    // 0x001638: 0x59A00D8002A70808 Ffma
    temp_689 = fma(temp_256, temp_680, temp_673);
    // 0x001648: 0x59A00D8002A70909 Ffma
    temp_690 = fma(temp_268, temp_680, temp_673);
    // 0x001650: 0x5C58100001370A0A Fadd
    temp_691 = temp_618 + temp_684;
    // 0x001658: 0x51A21A180B472222 Ffma
    temp_692 = 0.0 - fp_c6.data[45].x;
    temp_693 = fma(temp_93, fp_c6.data[45].x, temp_692);
    // 0x001668: 0x5C58100001670B0B Fadd
    temp_694 = temp_621 + temp_687;
    // 0x001670: 0x33A020C000070207 Ffma
    temp_695 = fma(temp_656, -2.0, 3.0);
    // 0x001678: 0x5C68100000270202 Fmul
    temp_696 = temp_656 * temp_656;
    // 0x001688: 0x51A21A180B472323 Ffma
    temp_697 = 0.0 - fp_c6.data[45].x;
    temp_698 = fma(temp_94, fp_c6.data[45].x, temp_697);
    // 0x001690: 0x51A21A180B470303 Ffma
    temp_699 = 0.0 - fp_c6.data[45].x;
    temp_700 = fma(temp_95, fp_c6.data[45].x, temp_699);
    // 0x001698: 0x5C68100000270702 Fmul
    temp_701 = temp_695 * temp_696;
    // 0x0016A8: 0x4C68101803770202 Fmul
    temp_702 = temp_701 * fp_c6.data[13].w;
    // 0x0016B0: 0xF0F0000034270000 Depbar
    // 0x0016B8: 0x49A0080400770E10 Ffma
    temp_703 = fma(temp_663, fp_c1.data[1].w, temp_600);
    // 0x0016C8: 0xE043FF900337FF0E Ipa
    temp_704 = in_attr8.x;
    // 0x0016D0: 0x49A0088400770C0C Ffma
    temp_705 = fma(temp_667, fp_c1.data[1].w, temp_601);
    // 0x0016D8: 0xE043FF8C8337FF33 Ipa
    temp_706 = in_attr4.z;
    // 0x0016E8: 0x59A2080000D72626 Ffma
    temp_707 = 0.0 - temp_703;
    temp_708 = fma(temp_84, temp_672, temp_707);
    // 0x0016F0: 0x49A0090400770F0F Ffma
    temp_709 = fma(temp_668, fp_c1.data[1].w, temp_602);
    // 0x0016F8: 0x59A2060000D72727 Ffma
    temp_710 = 0.0 - temp_705;
    temp_711 = fma(temp_85, temp_672, temp_710);
    // 0x001708: 0x59A0080002972626 Ffma
    temp_712 = fma(temp_708, temp_632, temp_703);
    // 0x001710: 0x59A2078000D7280D Ffma
    temp_713 = 0.0 - temp_709;
    temp_714 = fma(temp_86, temp_672, temp_713);
    // 0x001718: 0xF0F0000034170000 Depbar
    // 0x001728: 0x49A00A1808571814 Ffma
    temp_715 = fma(temp_610, fp_c6.data[33].y, temp_614);
    // 0x001730: 0x49A00A9808571915 Ffma
    temp_716 = fma(temp_611, fp_c6.data[33].y, temp_615);
    // 0x001738: 0x49A0159808571A1A Ffma
    temp_717 = fma(temp_612, fp_c6.data[33].y, temp_616);
    // 0x001748: 0x59A0060002972727 Ffma
    temp_718 = fma(temp_711, temp_632, temp_705);
    // 0x001750: 0x5C58100000472604 Fadd
    temp_719 = temp_712 + temp_685;
    // 0x001758: 0x59A0078002970D0D Ffma
    temp_720 = fma(temp_714, temp_632, temp_709);
    // 0x001768: 0x59A0168001470606 Ffma
    temp_721 = fma(temp_688, temp_715, temp_676);
    // 0x001770: 0x59A017000157082E Ffma
    temp_722 = fma(temp_689, temp_716, temp_681);
    // 0x001778: 0x59A0178001A7092F Ffma
    temp_723 = fma(temp_690, temp_717, temp_682);
    // 0x001788: 0x5C58100000A7270A Fadd
    temp_724 = temp_718 + temp_691;
    // 0x001790: 0x59A1020000472504 Ffma
    temp_725 = 0.0 - temp_719;
    temp_726 = fma(temp_90, temp_725, temp_719);
    // 0x001798: 0x5C58100000B70D0B Fadd
    temp_727 = temp_720 + temp_694;
    // 0x0017A8: 0x59A1050000A72507 Ffma
    temp_728 = 0.0 - temp_724;
    temp_729 = fma(temp_90, temp_728, temp_724);
    // 0x0017B0: 0x59A0030000470106 Ffma
    temp_730 = fma(temp_197, temp_726, temp_721);
    // 0x0017B8: 0x59A1058000B72508 Ffma
    temp_731 = 0.0 - temp_727;
    temp_732 = fma(temp_90, temp_731, temp_727);
    // 0x0017C8: 0x4C98079802870001 Mov
    // 0x0017D0: 0x4C98079802970004 Mov
    // 0x0017D8: 0x59A0170000770007 Ffma
    temp_733 = fma(temp_204, temp_729, temp_722);
    // 0x0017E8: 0x5C68100000671C1C Fmul
    temp_734 = temp_317 * temp_730;
    // 0x0017F0: 0x59A0178000870508 Ffma
    temp_735 = fma(temp_243, temp_732, temp_723);
    // 0x0017F8: 0x51A0009802872222 Ffma
    temp_736 = fma(temp_693, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001808: 0x49A507180BC7300E Ffma
    temp_737 = 0.0 - fp_c6.data[47].x;
    temp_738 = fma(temp_617, temp_737, temp_704);
    temp_739 = clamp(temp_738, 0.0, 1.0);
    // 0x001810: 0x4C98079802A70001 Mov
    // 0x001818: 0x5080000000370E0E Mufu
    temp_740 = log2(temp_739);
    // 0x001828: 0x49A00E1406C71F1F Ffma
    temp_741 = fma(temp_322, fp_c5.data[27].x, temp_734);
    // 0x001830: 0x5C68100000771D1D Fmul
    temp_742 = temp_319 * temp_733;
    // 0x001838: 0x5C68100000871E1E Fmul
    temp_743 = temp_321 * temp_735;
    // 0x001848: 0x51A0021802972323 Ffma
    temp_744 = fma(temp_698, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001850: 0x49A2011803570206 Ffma
    temp_745 = 0.0 - temp_702;
    temp_746 = fma(temp_702, fp_c6.data[13].y, temp_745);
    // 0x001858: 0x51A0009802A70303 Ffma
    temp_747 = fma(temp_700, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001868: 0x5C58300002271F00 Fadd
    temp_748 = 0.0 - temp_736;
    temp_749 = temp_741 + temp_748;
    // 0x001870: 0x49A00E9406C72020 Ffma
    temp_750 = fma(temp_323, fp_c5.data[27].x, temp_742);
    // 0x001878: 0x49A00F1406C72C2C Ffma
    temp_751 = fma(temp_324, fp_c5.data[27].x, temp_743);
    // 0x001888: 0x49A011180BF70004 Ffma
    temp_752 = fma(temp_749, fp_c6.data[47].w, temp_736);
    // 0x001890: 0x5C58300002372001 Fadd
    temp_753 = 0.0 - temp_744;
    temp_754 = temp_750 + temp_753;
    // 0x001898: 0x5C58300000372C00 Fadd
    temp_755 = 0.0 - temp_747;
    temp_756 = temp_751 + temp_755;
    // 0x0018A8: 0x4C68101803170E05 Fmul
    temp_757 = temp_740 * fp_c6.data[12].y;
    // 0x0018B0: 0x5C60178000472204 Fmnmx
    temp_758 = max(temp_736, temp_752);
    // 0x0018B8: 0x49A011980BF70101 Ffma
    temp_759 = fma(temp_754, fp_c6.data[47].w, temp_744);
    // 0x0018C8: 0x49A001980BF70000 Ffma
    temp_760 = fma(temp_756, fp_c6.data[47].w, temp_747);
    // 0x0018D0: 0x5C90008000570007 Rro
    // 0x0018D8: 0x49A2011803470205 Ffma
    temp_761 = 0.0 - temp_702;
    temp_762 = fma(temp_702, fp_c6.data[13].x, temp_761);
    // 0x0018E8: 0x5080000000270707 Mufu
    temp_763 = exp2(temp_757);
    // 0x0018F0: 0x5C60178000172301 Fmnmx
    temp_764 = max(temp_744, temp_759);
    // 0x0018F8: 0x49A2011803670202 Ffma
    temp_765 = 0.0 - temp_702;
    temp_766 = fma(temp_702, fp_c6.data[13].z, temp_765);
    // 0x001908: 0x5C60178000070300 Fmnmx
    temp_767 = max(temp_747, temp_760);
    // 0x001910: 0x59A0020000570405 Ffma
    temp_768 = fma(temp_758, temp_762, temp_758);
    // 0x001918: 0x59A0008000670101 Ffma
    temp_769 = fma(temp_764, temp_746, temp_764);
    // 0x001928: 0x4C58100C03873304 Fadd
    temp_770 = temp_706 + fp_c3.data[14].x;
    // 0x001930: 0x59A0000000270002 Ffma
    temp_771 = fma(temp_767, temp_766, temp_767);
    // 0x001938: 0x5C9807800FF70006 Mov
    // 0x001948: 0x5C59100000571F00 Fadd
    temp_772 = 0.0 - temp_741;
    temp_773 = temp_772 + temp_768;
    // 0x001950: 0x4C68101802B70703 Fmul
    temp_774 = temp_763 * fp_c6.data[10].w;
    // 0x001958: 0x5C59100000172001 Fadd
    temp_775 = 0.0 - temp_750;
    temp_776 = temp_775 + temp_769;
    // 0x001968: 0x5C59100000272C02 Fadd
    temp_777 = 0.0 - temp_751;
    temp_778 = temp_777 + temp_771;
    // 0x001970: 0x5C98078002170007 Mov
    // 0x001978: 0x0103E8000007F005 Mov32i
    // 0x001988: 0x49A37F8C03C70404 Ffma
    temp_779 = 0.0 - fp_c3.data[15].x;
    temp_780 = fma(temp_770, temp_779, -0.0);
    // 0x001990: 0x59A00F8000370000 Ffma
    temp_781 = fma(temp_773, temp_774, temp_741);
    // 0x001998: 0x59A0100000370101 Ffma
    temp_782 = fma(temp_776, temp_774, temp_750);
    // 0x0019A8: 0x59A0160000370202 Ffma
    temp_783 = fma(temp_778, temp_774, temp_751);
    // 0x0019B0: 0x5C98078002170003 Mov
    // 0x0019B8: 0xE30000000007000F Exit
    out_attr0.x = temp_781;
    out_attr0.y = temp_782;
    out_attr0.z = temp_783;
    out_attr0.w = temp_17;
    out_attr1.x = temp_780;
    out_attr1.y = 0.25;
    out_attr1.z = 0.0;
    out_attr1.w = temp_17;
    return;
}
