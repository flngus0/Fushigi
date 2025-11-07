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
layout (binding = 2) uniform sampler2D fp_t_tcb_36;
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
    precise vec4 temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise vec2 temp_10;
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
    uint temp_174;
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
    int temp_188;
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
    int temp_221;
    uint temp_222;
    uint temp_223;
    int temp_224;
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
    bool temp_260;
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
    int temp_316;
    bool temp_317;
    int temp_318;
    int temp_319;
    int temp_320;
    int temp_321;
    uint temp_322;
    uint temp_323;
    int temp_324;
    precise float temp_325;
    int temp_326;
    int temp_327;
    uint temp_328;
    uint temp_329;
    int temp_330;
    precise float temp_331;
    int temp_332;
    uint temp_333;
    int temp_334;
    precise float temp_335;
    int temp_336;
    uint temp_337;
    uint temp_338;
    int temp_339;
    precise float temp_340;
    int temp_341;
    uint temp_342;
    int temp_343;
    precise float temp_344;
    int temp_345;
    uint temp_346;
    uint temp_347;
    int temp_348;
    precise float temp_349;
    int temp_350;
    uint temp_351;
    int temp_352;
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
    precise float temp_365;
    precise float temp_366;
    precise float temp_367;
    precise float temp_368;
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
    precise float temp_379;
    precise float temp_380;
    int temp_381;
    uint temp_382;
    uint temp_383;
    int temp_384;
    precise float temp_385;
    int temp_386;
    uint temp_387;
    int temp_388;
    precise float temp_389;
    precise float temp_390;
    precise float temp_391;
    precise float temp_392;
    precise float temp_393;
    precise float temp_394;
    int temp_395;
    uint temp_396;
    uint temp_397;
    int temp_398;
    precise float temp_399;
    int temp_400;
    uint temp_401;
    int temp_402;
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
    uint temp_415;
    int temp_416;
    bool temp_417;
    uint temp_418;
    precise float temp_419;
    precise float temp_420;
    precise float temp_421;
    precise float temp_422;
    precise float temp_423;
    precise float temp_424;
    precise float temp_425;
    uint temp_426;
    precise float temp_427;
    bool temp_428;
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
    precise float temp_454;
    int temp_455;
    uint temp_456;
    uint temp_457;
    int temp_458;
    precise float temp_459;
    precise float temp_460;
    int temp_461;
    uint temp_462;
    uint temp_463;
    int temp_464;
    precise float temp_465;
    precise float temp_466;
    precise float temp_467;
    precise float temp_468;
    precise float temp_469;
    precise float temp_470;
    precise float temp_471;
    uint temp_472;
    uint temp_473;
    int temp_474;
    precise float temp_475;
    int temp_476;
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
    precise float temp_533;
    precise float temp_534;
    precise float temp_535;
    precise float temp_536;
    int temp_537;
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
    precise vec3 temp_573;
    precise float temp_574;
    precise float temp_575;
    precise float temp_576;
    precise vec3 temp_577;
    precise float temp_578;
    precise float temp_579;
    precise float temp_580;
    precise vec3 temp_581;
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
    precise float temp_757;
    precise float temp_758;
    precise float temp_759;
    precise float temp_760;
    precise float temp_761;
    precise float temp_762;
    precise float temp_763;
    precise float temp_764;
    precise float temp_765;
    // 0x000008: 0x0103F0000007F019 Mov32i
    // 0x000010: 0xE003FF87CFF7FF0C Ipa
    // 0x000018: 0x5080000000470C0C Mufu
    // 0x000028: 0xE043FF8E00C7FF0F Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E40C7FF10 Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xD830026FF1070F00 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xD8300240A1070F08 Texs
    temp_5 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyzw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    temp_9 = temp_5.w;
    // 0x000050: 0xD83A036FF1070F26 Texs
    temp_10 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).yw;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000058: 0xE043FF8A00C7FF02 Ipa
    temp_13 = in_attr2.x;
    // 0x000068: 0xE043FF8A40C7FF03 Ipa
    temp_14 = in_attr2.y;
    // 0x000070: 0xE043FF8900C7FF06 Ipa
    temp_15 = in_attr1.x;
    // 0x000078: 0xE043FF8A80C7FF04 Ipa
    temp_16 = in_attr2.z;
    // 0x000088: 0xE043FF8940C7FF07 Ipa
    temp_17 = in_attr1.y;
    // 0x000090: 0xE043FF8800C7FF11 Ipa
    temp_18 = in_attr0.x;
    // 0x000098: 0xE043FF8980C7FF0D Ipa
    temp_19 = in_attr1.z;
    // 0x0000A8: 0xE043FF8840C7FF12 Ipa
    temp_20 = in_attr0.y;
    // 0x0000B0: 0xE043FF8880C7FF13 Ipa
    temp_21 = in_attr0.z;
    // 0x0000B8: 0x5C68100000270205 Fmul
    temp_22 = temp_13 * temp_13;
    // 0x0000C8: 0x5C6810000067060E Fmul
    temp_23 = temp_15 * temp_15;
    // 0x0000D0: 0x59A0028000370305 Ffma
    temp_24 = fma(temp_14, temp_14, temp_22);
    // 0x0000D8: 0x59A007000077070E Ffma
    temp_25 = fma(temp_17, temp_17, temp_23);
    // 0x0000E8: 0x59A0028000470405 Ffma
    temp_26 = fma(temp_16, temp_16, temp_24);
    // 0x0000F0: 0x5080000000570505 Mufu
    temp_27 = inversesqrt(temp_26);
    // 0x0000F8: 0x5C6810000117110F Fmul
    temp_28 = temp_18 * temp_18;
    // 0x000108: 0x59A0070000D70D0E Ffma
    temp_29 = fma(temp_19, temp_19, temp_25);
    // 0x000110: 0x5080000000570E10 Mufu
    temp_30 = inversesqrt(temp_29);
    // 0x000118: 0x59A0078001271214 Ffma
    temp_31 = fma(temp_20, temp_20, temp_28);
    // 0x000128: 0xE003FF870FF7FF0E Ipa
    temp_32 = gl_FragCoord.x;
    temp_33 = support_buffer.render_scale[0];
    temp_34 = temp_32 / temp_33;
    // 0x000130: 0x5C68100000570202 Fmul
    temp_35 = temp_13 * temp_27;
    // 0x000138: 0x5C68100000570303 Fmul
    temp_36 = temp_14 * temp_27;
    // 0x000148: 0x5C68100000570404 Fmul
    temp_37 = temp_16 * temp_27;
    // 0x000150: 0x5C6810000107060F Fmul
    temp_38 = temp_15 * temp_30;
    // 0x000158: 0x59A00A0001371314 Ffma
    temp_39 = fma(temp_21, temp_21, temp_31);
    // 0x000168: 0x5C68100001070706 Fmul
    temp_40 = temp_17 * temp_30;
    // 0x000170: 0x5080000000571414 Mufu
    temp_41 = inversesqrt(temp_39);
    // 0x000178: 0x5C68100001070D07 Fmul
    temp_42 = temp_19 * temp_30;
    // 0x000188: 0x0103F8000007F00D Mov32i
    // 0x000190: 0x5C68100001471111 Fmul
    temp_43 = temp_18 * temp_41;
    // 0x000198: 0x5C68100001471212 Fmul
    temp_44 = temp_20 * temp_41;
    // 0x0001A8: 0x5C68100001471313 Fmul
    temp_45 = temp_21 * temp_41;
    // 0x0001B0: 0x4C68100C04A70E0E Fmul
    temp_46 = temp_34 * fp_c3.data[18].z;
    // 0x0001B8: 0xF0F0000034270000 Depbar
    // 0x0001C8: 0x5C68100000170105 Fmul
    temp_47 = temp_4 * temp_4;
    // 0x0001D0: 0x5C68100000170202 Fmul
    temp_48 = temp_35 * temp_4;
    // 0x0001D8: 0x5C68100000170303 Fmul
    temp_49 = temp_36 * temp_4;
    // 0x0001E8: 0x5C68100000170401 Fmul
    temp_50 = temp_37 * temp_4;
    // 0x0001F0: 0x59A0028000070005 Ffma
    temp_51 = fma(temp_3, temp_3, temp_47);
    // 0x0001F8: 0x59A0010000F70002 Ffma
    temp_52 = fma(temp_3, temp_38, temp_48);
    // 0x000208: 0xE003FF874FF7FF0F Ipa
    temp_53 = gl_FragCoord.y;
    temp_54 = support_buffer.render_scale[0];
    temp_55 = temp_53 / temp_54;
    // 0x000210: 0x59A0018000670003 Ffma
    temp_56 = fma(temp_3, temp_40, temp_49);
    // 0x000218: 0x59A0008000770001 Ffma
    temp_57 = fma(temp_3, temp_42, temp_50);
    // 0x000228: 0x385D103F80070505 Fadd
    temp_58 = 0.0 - temp_51;
    temp_59 = temp_58 + 1.0;
    temp_60 = clamp(temp_59, 0.0, 1.0);
    // 0x000230: 0x5080000000870510 Mufu
    temp_61 = sqrt(temp_60);
    // 0x000238: 0x59A0010001071102 Ffma
    temp_62 = fma(temp_43, temp_61, temp_52);
    // 0x000248: 0x59A0018001071203 Ffma
    temp_63 = fma(temp_44, temp_61, temp_56);
    // 0x000250: 0x59A0008001071301 Ffma
    temp_64 = fma(temp_45, temp_61, temp_57);
    // 0x000258: 0x5C68100000270200 Fmul
    temp_65 = temp_62 * temp_62;
    // 0x000268: 0x4C68100C04B70F0F Fmul
    temp_66 = temp_55 * fp_c3.data[18].w;
    // 0x000270: 0x59A0000000370300 Ffma
    temp_67 = fma(temp_63, temp_63, temp_65);
    // 0x000278: 0x59A0000000170104 Ffma
    temp_68 = fma(temp_64, temp_64, temp_67);
    // 0x000288: 0x5080000000570404 Mufu
    temp_69 = inversesqrt(temp_68);
    // 0x000290: 0x5C68100000470133 Fmul
    temp_70 = temp_64 * temp_69;
    // 0x000298: 0x5C68100000470300 Fmul
    temp_71 = temp_63 * temp_69;
    // 0x0002A8: 0x5C68100000470235 Fmul
    temp_72 = temp_62 * temp_69;
    // 0x0002B0: 0x4C68100C00673303 Fmul
    temp_73 = temp_70 * fp_c3.data[1].z;
    // 0x0002B8: 0x4C68100C00273301 Fmul
    temp_74 = temp_70 * fp_c3.data[0].z;
    // 0x0002C8: 0x49A0018C00570003 Ffma
    temp_75 = fma(temp_71, fp_c3.data[1].y, temp_73);
    // 0x0002D0: 0x49A0008C00170002 Ffma
    temp_76 = fma(temp_71, fp_c3.data[0].y, temp_74);
    // 0x0002D8: 0x49A0018C00473503 Ffma
    temp_77 = fma(temp_72, fp_c3.data[1].x, temp_75);
    // 0x0002E8: 0x49A0010C00073502 Ffma
    temp_78 = fma(temp_72, fp_c3.data[0].x, temp_76);
    // 0x0002F0: 0x4C69100C03E70303 Fmul
    temp_79 = 0.0 - fp_c3.data[15].z;
    temp_80 = temp_77 * temp_79;
    // 0x0002F8: 0x4C68101808B70201 Fmul
    temp_81 = temp_78 * fp_c6.data[34].w;
    // 0x000308: 0x4C68101808B70302 Fmul
    temp_82 = temp_80 * fp_c6.data[34].w;
    // 0x000310: 0x49A0070400270122 Ffma
    temp_83 = fma(temp_81, fp_c1.data[0].z, temp_46);
    // 0x000318: 0x49A0078400270223 Ffma
    temp_84 = fma(temp_82, fp_c1.data[0].z, temp_66);
    // 0x000328: 0xD832022222372224 Texs
    temp_85 = texture(fp_t_tcb_22, vec2(temp_83, temp_84)).xyzw;
    temp_86 = temp_85.x;
    temp_87 = temp_85.y;
    temp_88 = temp_85.z;
    temp_89 = temp_85.w;
    // 0x000330: 0xD86201EFF0D70E0D Texs
    temp_90 = textureLod(fp_t_tcb_1E, vec2(temp_46, temp_66), 1.0).x;
    // 0x000338: 0xD822020010F70E20 Texs
    temp_91 = texture(fp_t_tcb_20, vec2(temp_46, temp_66)).xyz;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x000348: 0xE043FF8B00C7FF2B Ipa
    temp_95 = in_attr3.x;
    // 0x000350: 0xE043FF8B40C7FF2A Ipa
    temp_96 = in_attr3.y;
    // 0x000358: 0xE043FF8B80C7FF29 Ipa
    temp_97 = in_attr3.z;
    // 0x000368: 0xF0F0000034370000 Depbar
    // 0x000370: 0x4C5C101406370B0B Fadd
    temp_98 = temp_9 + fp_c5.data[24].w;
    temp_99 = clamp(temp_98, 0.0, 1.0);
    // 0x000378: 0xE2900000C6000000 Ssy
    // 0x000388: 0x3868104180070E12 Fmul
    temp_100 = temp_46 * 16.0;
    // 0x000390: 0x4C68101402D70909 Fmul
    temp_101 = temp_7 * fp_c5.data[11].y;
    // 0x000398: 0x5CA8148001270A12 F2f
    temp_102 = floor(temp_100);
    // 0x0003A8: 0x4C68101402E70A0A Fmul
    temp_103 = temp_8 * fp_c5.data[11].z;
    // 0x0003B0: 0x4C98079808A7001C Mov
    // 0x0003B8: 0x4C6810180A070B0B Fmul
    temp_104 = temp_99 * fp_c6.data[40].x;
    // 0x0003C8: 0x4C68101403072727 Fmul
    temp_105 = temp_12 * fp_c5.data[12].x;
    // 0x0003D0: 0x5C9807800FF70032 Mov
    // 0x0003D8: 0x5C9807800FF70034 Mov
    // 0x0003E8: 0x5C68100002B72B03 Fmul
    temp_106 = temp_95 * temp_95;
    // 0x0003F0: 0x59A0018002A72A03 Ffma
    temp_107 = fma(temp_96, temp_96, temp_106);
    // 0x0003F8: 0x59A0018002972903 Ffma
    temp_108 = fma(temp_97, temp_97, temp_107);
    // 0x000408: 0x5080000000570304 Mufu
    temp_109 = inversesqrt(temp_108);
    // 0x000410: 0x5C69100000472B2B Fmul
    temp_110 = 0.0 - temp_109;
    temp_111 = temp_95 * temp_110;
    // 0x000418: 0x5C69100000472A2A Fmul
    temp_112 = 0.0 - temp_109;
    temp_113 = temp_96 * temp_112;
    // 0x000428: 0x5C69100000472929 Fmul
    temp_114 = 0.0 - temp_109;
    temp_115 = temp_97 * temp_114;
    // 0x000430: 0x4C58301805C72B02 Fadd
    temp_116 = 0.0 - fp_c6.data[23].x;
    temp_117 = temp_111 + temp_116;
    // 0x000438: 0x4C58301805D72A04 Fadd
    temp_118 = 0.0 - fp_c6.data[23].y;
    temp_119 = temp_113 + temp_118;
    // 0x000448: 0x4C58301805E72905 Fadd
    temp_120 = 0.0 - fp_c6.data[23].z;
    temp_121 = temp_115 + temp_120;
    // 0x000450: 0x5C68100002B73503 Fmul
    temp_122 = temp_72 * temp_111;
    // 0x000458: 0x5C68100000270206 Fmul
    temp_123 = temp_117 * temp_117;
    // 0x000468: 0x59A0030000470406 Ffma
    temp_124 = fma(temp_119, temp_119, temp_123);
    // 0x000470: 0x59A0030000570506 Ffma
    temp_125 = fma(temp_121, temp_121, temp_124);
    // 0x000478: 0x5080000000570607 Mufu
    temp_126 = inversesqrt(temp_125);
    // 0x000488: 0x01040DF760C7F006 Mov32i
    // 0x000490: 0x5C68100000770210 Fmul
    temp_127 = temp_117 * temp_126;
    // 0x000498: 0x59A0018002A70002 Ffma
    temp_128 = fma(temp_71, temp_113, temp_122);
    // 0x0004A8: 0x5C68100000770411 Fmul
    temp_129 = temp_119 * temp_126;
    // 0x0004B0: 0x5C68100000770504 Fmul
    temp_130 = temp_121 * temp_126;
    // 0x0004B8: 0x4C69101805C71003 Fmul
    temp_131 = 0.0 - fp_c6.data[23].x;
    temp_132 = temp_127 * temp_131;
    // 0x0004C8: 0x59A4010002973302 Ffma
    temp_133 = fma(temp_70, temp_115, temp_128);
    temp_134 = clamp(temp_133, 0.0, 1.0);
    // 0x0004D0: 0x5C68100001072B13 Fmul
    temp_135 = temp_111 * temp_127;
    // 0x0004D8: 0x49A1019805D71103 Ffma
    temp_136 = 0.0 - fp_c6.data[23].y;
    temp_137 = fma(temp_129, temp_136, temp_132);
    // 0x0004E8: 0x3859103F80070207 Fadd
    temp_138 = 0.0 - temp_134;
    temp_139 = temp_138 + 1.0;
    // 0x0004F0: 0x59A0098001172A13 Ffma
    temp_140 = fma(temp_113, temp_129, temp_135);
    // 0x0004F8: 0x5080000000370707 Mufu
    temp_141 = log2(temp_139);
    // 0x000508: 0x3868104110070F0F Fmul
    temp_142 = temp_66 * 9.0;
    // 0x000510: 0x5C6810000027353A Fmul
    temp_143 = temp_72 * temp_134;
    // 0x000518: 0x5CA8148000F70A0F F2f
    temp_144 = floor(temp_142);
    // 0x000528: 0x49A5019805E70405 Ffma
    temp_145 = 0.0 - fp_c6.data[23].z;
    temp_146 = fma(temp_130, temp_145, temp_137);
    temp_147 = clamp(temp_146, 0.0, 1.0);
    // 0x000530: 0x5C68100001073503 Fmul
    temp_148 = temp_72 * temp_127;
    // 0x000538: 0x59A4098000472913 Ffma
    temp_149 = fma(temp_115, temp_130, temp_140);
    temp_150 = clamp(temp_149, 0.0, 1.0);
    // 0x000548: 0x32A215C000073A3A Ffma
    temp_151 = 0.0 - temp_111;
    temp_152 = fma(temp_143, 2.0, temp_151);
    // 0x000550: 0x49A2030400370510 Ffma
    temp_153 = fma(temp_147, fp_c1.data[0].w, -6.98316002);
    // 0x000558: 0x59A0018001170011 Ffma
    temp_154 = fma(temp_71, temp_129, temp_148);
    // 0x000568: 0x49A2030400371306 Ffma
    temp_155 = fma(temp_150, fp_c1.data[0].w, -6.98316002);
    // 0x000570: 0x4C68101406270703 Fmul
    temp_156 = temp_141 * fp_c5.data[24].z;
    // 0x000578: 0x4C98079403A70007 Mov
    // 0x000588: 0x5C68100001070510 Fmul
    temp_157 = temp_147 * temp_153;
    // 0x000590: 0x59A4088000473311 Ffma
    temp_158 = fma(temp_70, temp_130, temp_154);
    temp_159 = clamp(temp_158, 0.0, 1.0);
    // 0x000598: 0x5C68100000671313 Fmul
    temp_160 = temp_150 * temp_155;
    // 0x0005A8: 0x386013BF80070B04 Fmnmx
    temp_161 = min(temp_104, 1.0);
    // 0x0005B0: 0x4C98079403970005 Mov
    // 0x0005B8: 0x5C90008000370006 Rro
    // 0x0005C8: 0x4C98079403870003 Mov
    // 0x0005D0: 0x5084000000270606 Mufu
    temp_162 = exp2(temp_156);
    temp_163 = clamp(temp_162, 0.0, 1.0);
    // 0x0005D8: 0x4C59101403670707 Fadd
    temp_164 = 0.0 - fp_c5.data[14].z;
    temp_165 = temp_164 + fp_c5.data[13].z;
    // 0x0005E8: 0x4C60178400070404 Fmnmx
    temp_166 = max(temp_161, fp_c1.data[0].x);
    // 0x0005F0: 0x4C59101403570505 Fadd
    temp_167 = 0.0 - fp_c5.data[14].y;
    temp_168 = temp_167 + fp_c5.data[13].y;
    // 0x0005F8: 0x32A0094180070F18 Ffma
    temp_169 = fma(temp_144, 16.0, temp_102);
    // 0x000608: 0x4C59101403470303 Fadd
    temp_170 = 0.0 - fp_c5.data[14].x;
    temp_171 = temp_170 + fp_c5.data[13].x;
    // 0x000610: 0x5CB0118001870A18 F2i
    temp_172 = trunc(temp_169);
    temp_173 = max(temp_172, 0.0);
    temp_174 = uint(temp_173);
    // 0x000618: 0x5C9000800107001B Rro
    // 0x000628: 0x51A4020400070428 Ffma
    temp_175 = fma(temp_166, temp_166, fp_c1.data[0].x);
    temp_176 = clamp(temp_175, 0.0, 1.0);
    // 0x000630: 0x32A00CBF00070419 Ffma
    temp_177 = fma(temp_166, 0.5, 0.5);
    // 0x000638: 0x51A0019403870603 Ffma
    temp_178 = fma(temp_163, temp_171, fp_c5.data[14].x);
    // 0x000648: 0x5C6810000287281A Fmul
    temp_179 = temp_176 * temp_176;
    // 0x000650: 0x51A0029403970605 Ffma
    temp_180 = fma(temp_163, temp_168, fp_c5.data[14].y);
    // 0x000658: 0x51A0039403A70606 Ffma
    temp_181 = fma(temp_163, temp_165, fp_c5.data[14].z);
    // 0x000668: 0x4C69101805C73507 Fmul
    temp_182 = 0.0 - fp_c6.data[23].x;
    temp_183 = temp_72 * temp_182;
    // 0x000670: 0x5C68120001971919 Fmul
    temp_184 = temp_177 * 0.5;
    temp_185 = temp_184 * temp_177;
    // 0x000678: 0x59A2088001A7110B Ffma
    temp_186 = 0.0 - temp_159;
    temp_187 = fma(temp_159, temp_179, temp_186);
    // 0x000688: 0x384800000087181E Shl
    temp_188 = int(temp_174) << 8;
    // 0x000690: 0x49A1039805D7000E Ffma
    temp_189 = 0.0 - fp_c6.data[23].y;
    temp_190 = fma(temp_71, temp_189, temp_183);
    // 0x000698: 0x4C68101402C70807 Fmul
    temp_191 = temp_6 * fp_c5.data[11].x;
    // 0x0006A8: 0x59A1010001970208 Ffma
    temp_192 = 0.0 - temp_185;
    temp_193 = fma(temp_134, temp_192, temp_134);
    // 0x0006B0: 0x51A005840017110B Ffma
    temp_194 = fma(temp_159, temp_187, fp_c1.data[0].y);
    // 0x0006B8: 0x5C90008001370011 Rro
    // 0x0006C8: 0x5080000000470B0B Mufu
    temp_195 = 1.0 / temp_194;
    // 0x0006D0: 0x49A5071805E7330E Ffma
    temp_196 = 0.0 - fp_c6.data[23].z;
    temp_197 = fma(temp_70, temp_196, temp_190);
    temp_198 = clamp(temp_197, 0.0, 1.0);
    // 0x0006D8: 0x5080000000271111 Mufu
    temp_199 = exp2(temp_160);
    // 0x0006E8: 0x4C58301407B70713 Fadd
    temp_200 = 0.0 - fp_c5.data[30].w;
    temp_201 = temp_191 + temp_200;
    // 0x0006F0: 0x5C58100000871912 Fadd
    temp_202 = temp_185 + temp_193;
    // 0x0006F8: 0x5080000000471212 Mufu
    temp_203 = 1.0 / temp_202;
    // 0x000708: 0x59A1070001970E0F Ffma
    temp_204 = 0.0 - temp_185;
    temp_205 = fma(temp_198, temp_204, temp_198);
    // 0x000710: 0x51A0099407B72608 Ffma
    temp_206 = fma(temp_11, temp_201, fp_c5.data[30].w);
    // 0x000718: 0x4C68101801470E10 Fmul
    temp_207 = temp_198 * fp_c6.data[5].x;
    // 0x000728: 0x4C68101801670E1D Fmul
    temp_208 = temp_198 * fp_c6.data[5].z;
    // 0x000730: 0x5C58100000F71913 Fadd
    temp_209 = temp_185 + temp_205;
    // 0x000738: 0x59A1088001170815 Ffma
    temp_210 = 0.0 - temp_199;
    temp_211 = fma(temp_206, temp_210, temp_199);
    // 0x000748: 0x5080000000471313 Mufu
    temp_212 = 1.0 / temp_209;
    // 0x000750: 0x5C68100000B7280F Fmul
    temp_213 = temp_176 * temp_195;
    // 0x000758: 0x1E23EA2F98371017 Fmul32i
    temp_214 = temp_207 * 0.318309873;
    // 0x000768: 0x3868103F00071216 Fmul
    temp_215 = temp_203 * 0.5;
    // 0x000770: 0x5080000000271B12 Mufu
    temp_216 = exp2(temp_157);
    // 0x000778: 0x4C58301407B7090B Fadd
    temp_217 = 0.0 - fp_c5.data[30].w;
    temp_218 = temp_101 + temp_217;
    // 0x000788: 0x1E23EA2F98371D1D Fmul32i
    temp_219 = temp_208 * 0.318309873;
    // 0x000790: 0x5C58100001570814 Fadd
    temp_220 = temp_206 + temp_211;
    // 0x000798: 0xEF94008200471E15 Ldc
    temp_221 = temp_188 + 0x2004;
    temp_222 = uint(temp_221) >> 2;
    temp_223 = temp_222 >> 2;
    temp_224 = int(temp_222) & 3;
    temp_225 = fp_c8.data[int(temp_223)][temp_224];
    // 0x0007A8: 0x5C68100000F70F0F Fmul
    temp_226 = temp_213 * temp_213;
    // 0x0007B0: 0x51A0059407B7260B Ffma
    temp_227 = fma(temp_11, temp_218, fp_c5.data[30].w);
    // 0x0007B8: 0x4C68101808771C1B Fmul
    temp_228 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x0007C8: 0x4C68101406471414 Fmul
    temp_229 = temp_220 * fp_c5.data[25].x;
    // 0x0007D0: 0x5C68100001371610 Fmul
    temp_230 = temp_215 * temp_212;
    // 0x0007D8: 0x4C58301407B70A13 Fadd
    temp_231 = 0.0 - fp_c5.data[30].w;
    temp_232 = temp_103 + temp_231;
    // 0x0007E8: 0x4C68101801570E1C Fmul
    temp_233 = temp_198 * fp_c6.data[5].y;
    // 0x0007F0: 0x59A10B8001471717 Ffma
    temp_234 = 0.0 - temp_229;
    temp_235 = fma(temp_214, temp_234, temp_214);
    // 0x0007F8: 0x5C68100001070F10 Fmul
    temp_236 = temp_226 * temp_230;
    // 0x000808: 0x51A0099407B7260F Ffma
    temp_237 = fma(temp_11, temp_232, fp_c5.data[30].w);
    // 0x000810: 0x59A1090000871213 Ffma
    temp_238 = 0.0 - temp_206;
    temp_239 = fma(temp_216, temp_238, temp_216);
    // 0x000818: 0x59A1090000B71214 Ffma
    temp_240 = 0.0 - temp_227;
    temp_241 = fma(temp_216, temp_240, temp_216);
    // 0x000828: 0x1E23EA2F98371C1C Fmul32i
    temp_242 = temp_233 * 0.318309873;
    // 0x000830: 0x5C68100001070E10 Fmul
    temp_243 = temp_198 * temp_236;
    // 0x000838: 0x59A1090000F71212 Ffma
    temp_244 = 0.0 - temp_237;
    temp_245 = fma(temp_216, temp_244, temp_216);
    // 0x000848: 0x59A1088001170B0E Ffma
    temp_246 = 0.0 - temp_199;
    temp_247 = fma(temp_227, temp_246, temp_199);
    // 0x000850: 0x59A1088001170F11 Ffma
    temp_248 = 0.0 - temp_199;
    temp_249 = fma(temp_237, temp_248, temp_199);
    // 0x000858: 0x5C58100001370813 Fadd
    temp_250 = temp_206 + temp_239;
    // 0x000868: 0x5C58100001470B14 Fadd
    temp_251 = temp_227 + temp_241;
    // 0x000870: 0x5C58100001270F12 Fadd
    temp_252 = temp_237 + temp_245;
    // 0x000878: 0x5C58100000E70B1E Fadd
    temp_253 = temp_227 + temp_247;
    // 0x000888: 0x5C58100001170F1F Fadd
    temp_254 = temp_237 + temp_249;
    // 0x000890: 0x4C68101406471313 Fmul
    temp_255 = temp_250 * fp_c5.data[25].x;
    // 0x000898: 0x4C68101406471414 Fmul
    temp_256 = temp_251 * fp_c5.data[25].x;
    // 0x0008A8: 0x4C68101406471212 Fmul
    temp_257 = temp_252 * fp_c5.data[25].x;
    // 0x0008B0: 0x4C68101406471E1E Fmul
    temp_258 = temp_253 * fp_c5.data[25].x;
    // 0x0008B8: 0x4C68101406471F1F Fmul
    temp_259 = temp_254 * fp_c5.data[25].x;
    // 0x0008C8: 0x5B6603800FF71507 Isetp
    temp_260 = floatBitsToUint(temp_225) <= 0u;
    // 0x0008D0: 0xF0F0000034170000 Depbar
    // 0x0008D8: 0x51A00D980147240E Ffma
    temp_261 = fma(temp_86, temp_228, fp_c6.data[5].x);
    // 0x0008E8: 0x51A00D9801572511 Ffma
    temp_262 = fma(temp_87, temp_228, fp_c6.data[5].y);
    // 0x0008F0: 0x51A00D980167221B Ffma
    temp_263 = fma(temp_88, temp_228, fp_c6.data[5].z);
    // 0x0008F8: 0x51A5138400170D0D Ffma
    temp_264 = 0.0 - temp_105;
    temp_265 = fma(temp_90, temp_264, fp_c1.data[0].y);
    temp_266 = clamp(temp_265, 0.0, 1.0);
    // 0x000908: 0x5C9807800FF70027 Mov
    // 0x000910: 0x5C68100000E7130E Fmul
    temp_267 = temp_255 * temp_261;
    // 0x000918: 0x5C68100001171411 Fmul
    temp_268 = temp_256 * temp_262;
    // 0x000928: 0x5C68100001B71212 Fmul
    temp_269 = temp_257 * temp_263;
    // 0x000930: 0x5C68100000270014 Fmul
    temp_270 = temp_71 * temp_134;
    // 0x000938: 0x59A10E0001E71C1B Ffma
    temp_271 = 0.0 - temp_258;
    temp_272 = fma(temp_242, temp_271, temp_242);
    // 0x000948: 0x59A10E8001F71D1C Ffma
    temp_273 = 0.0 - temp_259;
    temp_274 = fma(temp_219, temp_273, temp_219);
    // 0x000950: 0x5C68100001070E2F Fmul
    temp_275 = temp_267 * temp_243;
    // 0x000958: 0x5C68100001071130 Fmul
    temp_276 = temp_268 * temp_243;
    // 0x000968: 0x5C68100001071212 Fmul
    temp_277 = temp_269 * temp_243;
    // 0x000970: 0x49A206980AC70D10 Ffma
    temp_278 = 0.0 - temp_266;
    temp_279 = fma(temp_266, fp_c6.data[43].x, temp_278);
    // 0x000978: 0x49A206980AD70D11 Ffma
    temp_280 = 0.0 - temp_266;
    temp_281 = fma(temp_266, fp_c6.data[43].y, temp_280);
    // 0x000988: 0x49A206980AE70D0D Ffma
    temp_282 = 0.0 - temp_266;
    temp_283 = fma(temp_266, fp_c6.data[43].z, temp_282);
    // 0x000990: 0x5C6810000027330E Fmul
    temp_284 = temp_70 * temp_134;
    // 0x000998: 0x5C9807800FF7001D Mov
    // 0x0009A8: 0x5C9807800FF7001E Mov
    // 0x0009B0: 0x3858103F80071010 Fadd
    temp_285 = temp_279 + 1.0;
    // 0x0009B8: 0x3858103F80071113 Fadd
    temp_286 = temp_281 + 1.0;
    // 0x0009C8: 0x3858103F80070D0D Fadd
    temp_287 = temp_283 + 1.0;
    // 0x0009D0: 0x5C9807800FF7001F Mov
    // 0x0009D8: 0x32A2154000071414 Ffma
    temp_288 = 0.0 - temp_113;
    temp_289 = fma(temp_270, 2.0, temp_288);
    // 0x0009E8: 0x32A214C000070E0E Ffma
    temp_290 = 0.0 - temp_115;
    temp_291 = fma(temp_284, 2.0, temp_290);
    // 0x0009F0: 0x59A408000107072C Ffma
    temp_292 = fma(temp_191, temp_285, temp_285);
    temp_293 = clamp(temp_292, 0.0, 1.0);
    // 0x0009F8: 0x59A409800137092D Ffma
    temp_294 = fma(temp_101, temp_286, temp_286);
    temp_295 = clamp(temp_294, 0.0, 1.0);
    // 0x000A08: 0x59A4068000D70A2E Ffma
    temp_296 = fma(temp_103, temp_287, temp_287);
    temp_297 = clamp(temp_296, 0.0, 1.0);
    // 0x000A10: 0x1E23E22F98372F2F Fmul32i
    temp_298 = temp_275 * 0.159154937;
    // 0x000A18: 0x1E23E22F98373030 Fmul32i
    temp_299 = temp_276 * 0.159154937;
    // 0x000A28: 0x1E23E22F98371231 Fmul32i
    temp_300 = temp_277 * 0.159154937;
    // 0x000A30: 0xF0F800000000000F Sync
    temp_301 = 0.0;
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
    if (!temp_260)
    {
        // 0x000A38: 0x5C9807800FF7003B Mov
        // 0x000A48: 0xE043FF8D00C7FF36 Ipa
        temp_313 = in_attr5.x;
        // 0x000A50: 0xE043FF8D40C7FF37 Ipa
        temp_314 = in_attr5.y;
        // 0x000A58: 0xE043FF8D80C7FF39 Ipa
        temp_315 = in_attr5.z;
        temp_316 = 0;
        do
        {
            // 0x000A68: 0x5C18020003B71813 Iscadd
            temp_318 = int(temp_174) << 4;
            temp_319 = temp_318 + temp_316;
            // 0x000A70: 0xE290000054000000 Ssy
            // 0x000A78: 0x3848000000471313 Shl
            temp_320 = temp_319 << 4;
            // 0x000A88: 0xEF94008200071313 Ldc
            temp_321 = temp_320 + 0x2000;
            temp_322 = uint(temp_321) >> 2;
            temp_323 = temp_322 >> 2;
            temp_324 = int(temp_322) & 3;
            temp_325 = fp_c8.data[int(temp_323)][temp_324];
            // 0x000A90: 0x3848000000671338 Shl
            temp_326 = floatBitsToInt(temp_325) << 6;
            // 0x000A98: 0xEF9500800107380C Ldc
            temp_327 = temp_326 + 16;
            temp_328 = uint(temp_327) >> 2;
            temp_329 = temp_328 >> 2;
            temp_330 = int(temp_328) & 3;
            temp_331 = fp_c8.data[int(temp_329)][temp_330];
            temp_332 = int(temp_328) + 1;
            temp_333 = uint(temp_332) >> 2;
            temp_334 = temp_332 & 3;
            temp_335 = fp_c8.data[int(temp_333)][temp_334];
            // 0x000AA8: 0xEF95008001873810 Ldc
            temp_336 = temp_326 + 24;
            temp_337 = uint(temp_336) >> 2;
            temp_338 = temp_337 >> 2;
            temp_339 = int(temp_337) & 3;
            temp_340 = fp_c8.data[int(temp_338)][temp_339];
            temp_341 = int(temp_337) + 1;
            temp_342 = uint(temp_341) >> 2;
            temp_343 = temp_341 & 3;
            temp_344 = fp_c8.data[int(temp_342)][temp_343];
            // 0x000AB0: 0xEF95008002073812 Ldc
            temp_345 = temp_326 + 32;
            temp_346 = uint(temp_345) >> 2;
            temp_347 = temp_346 >> 2;
            temp_348 = int(temp_346) & 3;
            temp_349 = fp_c8.data[int(temp_347)][temp_348];
            temp_350 = int(temp_346) + 1;
            temp_351 = uint(temp_350) >> 2;
            temp_352 = temp_350 & 3;
            temp_353 = fp_c8.data[int(temp_351)][temp_352];
            // 0x000AB8: 0x5C58300003670C3C Fadd
            temp_354 = 0.0 - temp_313;
            temp_355 = temp_331 + temp_354;
            // 0x000AC8: 0x5C58300003770D3D Fadd
            temp_356 = 0.0 - temp_314;
            temp_357 = temp_335 + temp_356;
            // 0x000AD0: 0x5C58300003971010 Fadd
            temp_358 = 0.0 - temp_315;
            temp_359 = temp_340 + temp_358;
            // 0x000AD8: 0x5C68100003C73C3E Fmul
            temp_360 = temp_355 * temp_355;
            // 0x000AE8: 0x59A108000107110C Ffma
            temp_361 = 0.0 - temp_359;
            temp_362 = fma(temp_344, temp_361, temp_359);
            // 0x000AF0: 0x59A01F0003D73D3E Ffma
            temp_363 = fma(temp_357, temp_357, temp_360);
            // 0x000AF8: 0x59A01F0000C70C11 Ffma
            temp_364 = fma(temp_362, temp_362, temp_363);
            // 0x000B08: 0x508000000057113F Mufu
            temp_365 = inversesqrt(temp_364);
            // 0x000B10: 0x5C68100003F73C0D Fmul
            temp_366 = temp_355 * temp_365;
            // 0x000B18: 0x5C68100003F70C0C Fmul
            temp_367 = temp_362 * temp_365;
            // 0x000B28: 0x5C69100001270D12 Fmul
            temp_368 = 0.0 - temp_349;
            temp_369 = temp_366 * temp_368;
            // 0x000B30: 0x5C68100003F73D0D Fmul
            temp_370 = temp_357 * temp_365;
            // 0x000B38: 0x508000000087113F Mufu
            temp_371 = sqrt(temp_364);
            // 0x000B48: 0x59A1090001370D12 Ffma
            temp_372 = 0.0 - temp_353;
            temp_373 = fma(temp_370, temp_372, temp_369);
            // 0x000B50: 0xEF9400800287380D Ldc
            temp_374 = temp_326 + 40;
            temp_375 = uint(temp_374) >> 2;
            temp_376 = temp_375 >> 2;
            temp_377 = int(temp_375) & 3;
            temp_378 = fp_c8.data[int(temp_376)][temp_377];
            // 0x000B58: 0x59A1090000D70C12 Ffma
            temp_379 = 0.0 - temp_378;
            temp_380 = fma(temp_367, temp_379, temp_373);
            // 0x000B68: 0xEF9500800387380C Ldc
            temp_381 = temp_326 + 56;
            temp_382 = uint(temp_381) >> 2;
            temp_383 = temp_382 >> 2;
            temp_384 = int(temp_382) & 3;
            temp_385 = fp_c8.data[int(temp_383)][temp_384];
            temp_386 = int(temp_382) + 1;
            temp_387 = uint(temp_386) >> 2;
            temp_388 = temp_386 & 3;
            temp_389 = fp_c8.data[int(temp_387)][temp_388];
            // 0x000B70: 0x59A4068000C7120C Ffma
            temp_390 = fma(temp_380, temp_385, temp_389);
            temp_391 = clamp(temp_390, 0.0, 1.0);
            // 0x000B78: 0x010404000007F012 Mov32i
            // 0x000B88: 0x5C68100000C70C13 Fmul
            temp_392 = temp_391 * temp_391;
            // 0x000B90: 0x33A0094000070C0C Ffma
            temp_393 = fma(temp_391, -2.0, 3.0);
            // 0x000B98: 0x5C68100000C71313 Fmul
            temp_394 = temp_392 * temp_393;
            // 0x000BA8: 0xEF9500800307380C Ldc
            temp_395 = temp_326 + 48;
            temp_396 = uint(temp_395) >> 2;
            temp_397 = temp_396 >> 2;
            temp_398 = int(temp_396) & 3;
            temp_399 = fp_c8.data[int(temp_397)][temp_398];
            temp_400 = int(temp_396) + 1;
            temp_401 = uint(temp_400) >> 2;
            temp_402 = temp_400 & 3;
            temp_403 = fp_c8.data[int(temp_401)][temp_402];
            // 0x000BB0: 0x59A4068003F70C3F Ffma
            temp_404 = fma(temp_399, temp_371, temp_403);
            temp_405 = clamp(temp_404, 0.0, 1.0);
            // 0x000BB8: 0x33A0094000073F12 Ffma
            temp_406 = fma(temp_405, -2.0, 3.0);
            // 0x000BC8: 0x5C68100003F73F3F Fmul
            temp_407 = temp_405 * temp_405;
            // 0x000BD0: 0x5C68100001273F12 Fmul
            temp_408 = temp_407 * temp_406;
            // 0x000BD8: 0x5C68100001271313 Fmul
            temp_409 = temp_394 * temp_408;
            // 0x000BE8: 0x39585042F0071012 Fadd
            temp_410 = abs(temp_359);
            temp_411 = temp_410 + -120.0;
            // 0x000BF0: 0x1EABD4CCCCD71212 Fmul32i
            temp_412 = temp_411 * -0.0500000007;
            temp_413 = clamp(temp_412, 0.0, 1.0);
            // 0x000BF8: 0x5C68100001271312 Fmul
            temp_414 = temp_409 * temp_413;
            // 0x000C08: 0x36247F9000171313 Xmad
            temp_415 = floatBitsToUint(temp_409) >> 16;
            temp_416 = int(temp_415) << 16;
            // 0x000C10: 0x5BB383800FF71207 Fsetp
            temp_417 = temp_414 <= 0.0;
            // 0x000C18: 0x7A05083C0F00FF13 Hadd2
            temp_418 = uint(temp_416);
            temp_419 = temp_301;
            temp_420 = temp_302;
            temp_421 = temp_303;
            temp_422 = temp_304;
            temp_423 = temp_305;
            temp_424 = temp_306;
            if (temp_417)
            {
                temp_425 = unpackHalf2x16(uint(temp_416)).y;
                temp_426 = packHalf2x16(vec2(1.0, temp_425));
                temp_418 = temp_426;
            }
            // 0x000C28: 0x5D2103902FF71307 Hsetp2
            temp_427 = unpackHalf2x16(temp_418).x;
            temp_428 = temp_427 == 0.0;
            // 0x000C30: 0xF0F800000008000F Sync
            if (temp_428)
            {
                // 0x000C38: 0x5080000000470C0C Mufu
                temp_429 = 1.0 / temp_399;
                // 0x000C48: 0x5C69100000C70D0D Fmul
                temp_430 = 0.0 - temp_429;
                temp_431 = temp_403 * temp_430;
                // 0x000C50: 0x5C60138000D71010 Fmnmx
                temp_432 = min(temp_359, temp_431);
                // 0x000C58: 0x5C61178001070D0D Fmnmx
                temp_433 = 0.0 - temp_431;
                temp_434 = max(temp_433, temp_432);
                // 0x000C68: 0x59A01F0000D70D3E Ffma
                temp_435 = fma(temp_434, temp_434, temp_363);
                // 0x000C70: 0x5080000000573E13 Mufu
                temp_436 = inversesqrt(temp_435);
                // 0x000C78: 0x5080000000873E3E Mufu
                temp_437 = sqrt(temp_435);
                // 0x000C88: 0x5C68100001373C3C Fmul
                temp_438 = temp_355 * temp_436;
                // 0x000C90: 0x5C68100001373D3D Fmul
                temp_439 = temp_357 * temp_436;
                // 0x000C98: 0x5C68100001370D0D Fmul
                temp_440 = temp_434 * temp_436;
                // 0x000CA8: 0x5C58100003C72B10 Fadd
                temp_441 = temp_111 + temp_438;
                // 0x000CB0: 0x5C58100003D72A13 Fadd
                temp_442 = temp_113 + temp_439;
                // 0x000CB8: 0x5C6810000107100C Fmul
                temp_443 = temp_441 * temp_441;
                // 0x000CC8: 0x59A0060001371311 Ffma
                temp_444 = fma(temp_442, temp_442, temp_443);
                // 0x000CD0: 0x5C58100000D7290C Fadd
                temp_445 = temp_115 + temp_440;
                // 0x000CD8: 0x59A0088000C70C3F Ffma
                temp_446 = fma(temp_445, temp_445, temp_444);
                // 0x000CE8: 0x5080000000573F11 Mufu
                temp_447 = inversesqrt(temp_446);
                // 0x000CF0: 0x5C68100001171010 Fmul
                temp_448 = temp_441 * temp_447;
                // 0x000CF8: 0x5C68100001170C0C Fmul
                temp_449 = temp_445 * temp_447;
                // 0x000D08: 0x5C68100001171313 Fmul
                temp_450 = temp_442 * temp_447;
                // 0x000D10: 0x5C68100001073C11 Fmul
                temp_451 = temp_438 * temp_448;
                // 0x000D18: 0x5C6810000107353F Fmul
                temp_452 = temp_72 * temp_448;
                // 0x000D28: 0x59A0088001373D10 Ffma
                temp_453 = fma(temp_439, temp_450, temp_451);
                // 0x000D30: 0x59A01F8001370011 Ffma
                temp_454 = fma(temp_71, temp_450, temp_452);
                // 0x000D38: 0xEF94008002C7383F Ldc
                temp_455 = temp_326 + 44;
                temp_456 = uint(temp_455) >> 2;
                temp_457 = temp_456 >> 2;
                temp_458 = int(temp_456) & 3;
                temp_459 = fp_c8.data[int(temp_457)][temp_458];
                // 0x000D48: 0x5C68100003C73513 Fmul
                temp_460 = temp_72 * temp_438;
                // 0x000D50: 0xEF9400800087383C Ldc
                temp_461 = temp_326 + 8;
                temp_462 = uint(temp_461) >> 2;
                temp_463 = temp_462 >> 2;
                temp_464 = int(temp_462) & 3;
                temp_465 = fp_c8.data[int(temp_463)][temp_464];
                // 0x000D58: 0x59A4080000C70D10 Ffma
                temp_466 = fma(temp_440, temp_449, temp_453);
                temp_467 = clamp(temp_466, 0.0, 1.0);
                // 0x000D68: 0x59A4088000C73311 Ffma
                temp_468 = fma(temp_70, temp_449, temp_454);
                temp_469 = clamp(temp_468, 0.0, 1.0);
                // 0x000D70: 0x59A0098003D7000C Ffma
                temp_470 = fma(temp_71, temp_439, temp_460);
                // 0x000D78: 0x59A0060000D73313 Ffma
                temp_471 = fma(temp_70, temp_440, temp_470);
                // 0x000D88: 0xEF9500800007380C Ldc
                temp_472 = uint(temp_326) >> 2;
                temp_473 = temp_472 >> 2;
                temp_474 = int(temp_472) & 3;
                temp_475 = fp_c8.data[int(temp_473)][temp_474];
                temp_476 = int(temp_472) + 1;
                temp_477 = uint(temp_476) >> 2;
                temp_478 = temp_476 & 3;
                temp_479 = fp_c8.data[int(temp_477)][temp_478];
                // 0x000D90: 0x5080000000473F3D Mufu
                temp_480 = 1.0 / temp_459;
                // 0x000D98: 0x51A01F0400473D3D Ffma
                temp_481 = fma(temp_480, temp_437, fp_c1.data[1].x);
                // 0x000DA8: 0x5C68100000C7120C Fmul
                temp_482 = temp_414 * temp_475;
                // 0x000DB0: 0x5080000000473D3D Mufu
                temp_483 = 1.0 / temp_481;
                // 0x000DB8: 0x5C68100000D7120D Fmul
                temp_484 = temp_414 * temp_479;
                // 0x000DC8: 0x5C68100003C71212 Fmul
                temp_485 = temp_414 * temp_465;
                // 0x000DD0: 0x59A2088001171A3C Ffma
                temp_486 = 0.0 - temp_469;
                temp_487 = fma(temp_179, temp_469, temp_486);
                // 0x000DD8: 0x51A01E0400171111 Ffma
                temp_488 = fma(temp_469, temp_487, fp_c1.data[0].y);
                // 0x000DE8: 0x5C5C30000FF7133C Fadd
                temp_489 = temp_471 + -0.0;
                temp_490 = clamp(temp_489, 0.0, 1.0);
                // 0x000DF0: 0x5080000000471111 Mufu
                temp_491 = 1.0 / temp_488;
                // 0x000DF8: 0x1E23FB3333373D3D Fmul32i
                temp_492 = temp_483 * 1.39999998;
                // 0x000E08: 0x59A11E0003C7193F Ffma
                temp_493 = 0.0 - temp_490;
                temp_494 = fma(temp_185, temp_493, temp_490);
                // 0x000E10: 0x5C68100003D73D3D Fmul
                temp_495 = temp_492 * temp_492;
                // 0x000E18: 0x5C58100003F7193E Fadd
                temp_496 = temp_185 + temp_494;
                // 0x000E28: 0x5C6810000117283F Fmul
                temp_497 = temp_176 * temp_491;
                // 0x000E30: 0x5080000000473E3E Mufu
                temp_498 = 1.0 / temp_496;
                // 0x000E38: 0x59A11E8003D7133D Ffma
                temp_499 = 0.0 - temp_495;
                temp_500 = fma(temp_471, temp_499, temp_495);
                // 0x000E48: 0x5C68100003F73F3F Fmul
                temp_501 = temp_497 * temp_497;
                // 0x000E50: 0x5C5C100003D71313 Fadd
                temp_502 = temp_471 + temp_500;
                temp_503 = clamp(temp_502, 0.0, 1.0);
                // 0x000E58: 0x01040DF760C7F03D Mov32i
                // 0x000E68: 0x5C68100003E71611 Fmul
                temp_504 = temp_215 * temp_498;
                // 0x000E70: 0x49A21E840037103D Ffma
                temp_505 = fma(temp_467, fp_c1.data[0].w, -6.98316002);
                // 0x000E78: 0x5C68100001173F3F Fmul
                temp_506 = temp_501 * temp_504;
                // 0x000E88: 0x5C68100003D7103D Fmul
                temp_507 = temp_467 * temp_505;
                // 0x000E90: 0x5C68100003F73C11 Fmul
                temp_508 = temp_490 * temp_506;
                // 0x000E98: 0x5C90008003D70038 Rro
                // 0x000EA8: 0x5C68100001370D3C Fmul
                temp_509 = temp_484 * temp_503;
                // 0x000EB0: 0x508000000027383D Mufu
                temp_510 = exp2(temp_507);
                // 0x000EB8: 0x49A00E8400673C1D Ffma
                temp_511 = fma(temp_509, fp_c1.data[1].z, temp_301);
                // 0x000EC8: 0x59A11E8003D7083E Ffma
                temp_512 = 0.0 - temp_510;
                temp_513 = fma(temp_206, temp_512, temp_510);
                // 0x000ED0: 0x59A11E8003D70B10 Ffma
                temp_514 = 0.0 - temp_510;
                temp_515 = fma(temp_227, temp_514, temp_510);
                // 0x000ED8: 0x59A11E8003D70F3D Ffma
                temp_516 = 0.0 - temp_510;
                temp_517 = fma(temp_237, temp_516, temp_510);
                // 0x000EE8: 0x5C58100003E7083E Fadd
                temp_518 = temp_206 + temp_513;
                // 0x000EF0: 0x5C58100001070B10 Fadd
                temp_519 = temp_227 + temp_515;
                // 0x000EF8: 0x5C58100003D70F3D Fadd
                temp_520 = temp_237 + temp_517;
                // 0x000F08: 0x4C68101406473E3E Fmul
                temp_521 = temp_518 * fp_c5.data[25].x;
                // 0x000F10: 0x4C68101406471010 Fmul
                temp_522 = temp_519 * fp_c5.data[25].x;
                // 0x000F18: 0x4C68101406473D3D Fmul
                temp_523 = temp_520 * fp_c5.data[25].x;
                // 0x000F28: 0x5C68100000C73E3E Fmul
                temp_524 = temp_521 * temp_482;
                // 0x000F30: 0x5C68100000D71010 Fmul
                temp_525 = temp_522 * temp_484;
                // 0x000F38: 0x5C68100001273D38 Fmul
                temp_526 = temp_523 * temp_485;
                // 0x000F48: 0x5C68100001370C0C Fmul
                temp_527 = temp_482 * temp_503;
                // 0x000F50: 0x5C68100001371213 Fmul
                temp_528 = temp_485 * temp_503;
                // 0x000F58: 0x5C68100001173E3E Fmul
                temp_529 = temp_524 * temp_508;
                // 0x000F68: 0x5C68100001171010 Fmul
                temp_530 = temp_525 * temp_508;
                // 0x000F70: 0x5C68100001173838 Fmul
                temp_531 = temp_526 * temp_508;
                // 0x000F78: 0x49A0190400670C32 Ffma
                temp_532 = fma(temp_527, fp_c1.data[1].z, temp_302);
                // 0x000F88: 0x49A00F040067131E Ffma
                temp_533 = fma(temp_528, fp_c1.data[1].z, temp_303);
                // 0x000F90: 0x49A01A0400573E34 Ffma
                temp_534 = fma(temp_529, fp_c1.data[1].y, temp_304);
                // 0x000F98: 0x49A00F840057101F Ffma
                temp_535 = fma(temp_530, fp_c1.data[1].y, temp_305);
                // 0x000FA8: 0x49A0138400573827 Ffma
                temp_536 = fma(temp_531, fp_c1.data[1].y, temp_306);
                // 0x000FB0: 0xF0F800000007000F Sync
                temp_419 = temp_511;
                temp_420 = temp_532;
                temp_421 = temp_533;
                temp_422 = temp_534;
                temp_423 = temp_535;
                temp_424 = temp_536;
            }
            // 0x000FB8: 0x1C00000000173B3B Iadd32i
            temp_537 = temp_316 + 1;
            // 0x000FC8: 0x5B6C038001573B07 Isetp
            temp_317 = uint(temp_537) >= floatBitsToUint(temp_225);
            // 0x000FD0: 0xE2400FFFA888000F Bra
            temp_316 = temp_537;
            temp_301 = temp_419;
            temp_302 = temp_420;
            temp_303 = temp_421;
            temp_304 = temp_422;
            temp_305 = temp_423;
            temp_306 = temp_424;
            temp_307 = temp_419;
            temp_308 = temp_420;
            temp_309 = temp_421;
            temp_310 = temp_422;
            temp_311 = temp_423;
            temp_312 = temp_424;
        }
        while (!temp_317);
        // 0x000FD8: 0xF0F800000007000F Sync
    }
    // 0x000FE8: 0x4C58101405473535 Fadd
    temp_538 = temp_72 + fp_c5.data[21].x;
    // 0x000FF0: 0xE003FF87CFF7FF19 Ipa
    // 0x000FF8: 0x4C5810140557000C Fadd
    temp_539 = temp_71 + fp_c5.data[21].y;
    // 0x001008: 0x4C59101405673333 Fadd
    temp_540 = 0.0 - temp_70;
    temp_541 = temp_540 + fp_c5.data[21].z;
    // 0x001010: 0x5C62578001473A11 Fmnmx
    temp_542 = abs(temp_152);
    temp_543 = abs(temp_289);
    temp_544 = max(temp_542, temp_543);
    // 0x001018: 0x386810408007042B Fmul
    temp_545 = temp_166 * 4.0;
    // 0x001028: 0x4C98079C0207003B Mov
    // 0x001030: 0x5C6810000357350D Fmul
    temp_546 = temp_538 * temp_538;
    // 0x001038: 0x5C60578001170E18 Fmnmx
    temp_547 = abs(temp_291);
    temp_548 = max(temp_547, temp_544);
    // 0x001048: 0x5080000000471813 Mufu
    temp_549 = 1.0 / temp_548;
    // 0x001050: 0x59A0068000C70C0D Ffma
    temp_550 = fma(temp_539, temp_539, temp_546);
    // 0x001058: 0x59A006800337330D Ffma
    temp_551 = fma(temp_541, temp_541, temp_550);
    // 0x001068: 0x5080000000570D12 Mufu
    temp_552 = inversesqrt(temp_551);
    // 0x001070: 0x5C68100001373A11 Fmul
    temp_553 = temp_152 * temp_549;
    // 0x001078: 0x5C68100001273535 Fmul
    temp_554 = temp_538 * temp_552;
    // 0x001088: 0x5C68100001270C10 Fmul
    temp_555 = temp_539 * temp_552;
    // 0x001090: 0x5C68100001273315 Fmul
    temp_556 = temp_541 * temp_552;
    // 0x001098: 0x5080000000471933 Mufu
    // 0x0010A8: 0x5C68100001371412 Fmul
    temp_557 = temp_289 * temp_549;
    // 0x0010B0: 0x5C69100001370E13 Fmul
    temp_558 = 0.0 - temp_549;
    temp_559 = temp_291 * temp_558;
    // 0x0010B8: 0x5C6257800107350C Fmnmx
    temp_560 = abs(temp_554);
    temp_561 = abs(temp_555);
    temp_562 = max(temp_560, temp_561);
    // 0x0010C8: 0xE043FF910337FF14 Ipa
    temp_563 = in_attr9.x;
    // 0x0010D0: 0x5C60578000C71516 Fmnmx
    temp_564 = abs(temp_556);
    temp_565 = max(temp_564, temp_562);
    // 0x0010D8: 0x5080000000471616 Mufu
    temp_566 = 1.0 / temp_565;
    // 0x0010E8: 0x5C6810000167350C Fmul
    temp_567 = temp_554 * temp_566;
    // 0x0010F0: 0x5C6810000167100D Fmul
    temp_568 = temp_555 * temp_566;
    // 0x0010F8: 0x5C6810000167150E Fmul
    temp_569 = temp_556 * temp_566;
    // 0x001108: 0xE043FF914337FF15 Ipa
    temp_570 = in_attr9.y;
    // 0x001110: 0x38681040E0070435 Fmul
    temp_571 = temp_166 * 7.0;
    // 0x001118: 0xE043FF918337FF16 Ipa
    temp_572 = in_attr9.z;
    // 0x001128: 0xC0BA0163EFF70C18 Tex
    temp_573 = textureLod(fp_t_tcb_16, vec3(temp_567, temp_568, temp_569), 0.0).xyz;
    temp_574 = temp_573.x;
    temp_575 = temp_573.y;
    temp_576 = temp_573.z;
    // 0x001130: 0x010000000017F010 Mov32i
    // 0x001138: 0x5C98078000E7002A Mov
    // 0x001148: 0xD9A20182A2A70C28 Texs
    temp_577 = textureLod(fp_t_tcb_18, vec3(temp_567, temp_568, temp_569), temp_545).xyz;
    temp_578 = temp_577.x;
    temp_579 = temp_577.y;
    temp_580 = temp_577.z;
    // 0x001150: 0xC1BA0143F3571010 Tex
    temp_581 = textureLod(fp_t_tcb_14, vec4(temp_553, temp_557, temp_559, float(1)), temp_571).xyz;
    temp_582 = temp_581.x;
    temp_583 = temp_581.y;
    temp_584 = temp_581.z;
    // 0x001158: 0xDEBA0000C3B71414 TexB
    temp_585 = texture(fp_t_cb7_20, vec3(temp_563, temp_570, temp_572)).x;
    // 0x001168: 0x3859103F80070404 Fadd
    temp_586 = 0.0 - temp_166;
    temp_587 = temp_586 + 1.0;
    // 0x001170: 0x49A00D980A171D1B Ffma
    temp_588 = fma(temp_307, fp_c6.data[40].y, temp_272);
    // 0x001178: 0x3859103F8007021D Fadd
    temp_589 = 0.0 - temp_134;
    temp_590 = temp_589 + 1.0;
    // 0x001188: 0x49A00B980A173217 Ffma
    temp_591 = fma(temp_308, fp_c6.data[40].y, temp_235);
    // 0x001190: 0x010410676C97F037 Mov32i
    // 0x001198: 0x49A00E180A171E1C Ffma
    temp_592 = fma(temp_309, fp_c6.data[40].y, temp_274);
    // 0x0011A8: 0x5C68100000470432 Fmul
    temp_593 = temp_587 * temp_587;
    // 0x0011B0: 0x1E23E468DB97020D Fmul32i
    temp_594 = temp_134 * 0.193900004;
    // 0x0011B8: 0x4C68101809071D0C Fmul
    temp_595 = temp_590 * fp_c6.data[36].x;
    // 0x0011C8: 0x5080000000371D1D Mufu
    temp_596 = log2(temp_590);
    // 0x0011D0: 0x0103E2CD9E87F00E Mov32i
    // 0x0011D8: 0x5080400000370C0C Mufu
    temp_597 = abs(temp_595);
    temp_598 = log2(temp_597);
    // 0x0011E8: 0x49A017980A173404 Ffma
    temp_599 = fma(temp_310, fp_c6.data[40].y, temp_298);
    // 0x0011F0: 0x5C68100003273213 Fmul
    temp_600 = temp_593 * temp_593;
    // 0x0011F8: 0x49A018180A171F30 Ffma
    temp_601 = fma(temp_311, fp_c6.data[40].y, temp_299);
    // 0x001208: 0x0103F0000007F01E Mov32i
    // 0x001210: 0x49A018980A172731 Ffma
    temp_602 = fma(temp_312, fp_c6.data[40].y, temp_300);
    // 0x001218: 0x49A01B8400B70215 Ffma
    temp_603 = fma(temp_134, fp_c1.data[2].w, 8.40400028);
    // 0x001228: 0x4C9807980B470016 Mov
    // 0x001230: 0x49A006840077130D Ffma
    temp_604 = fma(temp_600, fp_c1.data[1].w, temp_594);
    // 0x001238: 0x49A2070400D7130E Ffma
    temp_605 = fma(temp_600, fp_c1.data[3].y, -0.168799996);
    // 0x001248: 0x32A00F3F00070000 Ffma
    temp_606 = fma(temp_71, 0.5, 0.5);
    // 0x001250: 0x4C98079408270027 Mov
    // 0x001258: 0x51A00A8400C70215 Ffma
    temp_607 = fma(temp_134, temp_603, fp_c1.data[3].x);
    // 0x001268: 0x4C68101809170C0C Fmul
    temp_608 = temp_598 * fp_c6.data[36].y;
    // 0x001270: 0x088BF05D63970D0D Fadd32i
    temp_609 = temp_604 + -0.522800028;
    // 0x001278: 0x5C68100000E7130E Fmul
    temp_610 = temp_600 * temp_605;
    // 0x001288: 0xF0F0000034470000 Depbar
    // 0x001290: 0x51A20B180B472121 Ffma
    temp_611 = 0.0 - fp_c6.data[45].x;
    temp_612 = fma(temp_93, fp_c6.data[45].x, temp_611);
    // 0x001298: 0x51A20B180B470101 Ffma
    temp_613 = 0.0 - fp_c6.data[45].x;
    temp_614 = fma(temp_94, fp_c6.data[45].x, temp_613);
    // 0x0012A8: 0x51A00A8400E70215 Ffma
    temp_615 = fma(temp_134, temp_607, fp_c1.data[3].z);
    // 0x0012B0: 0x51A20B180B472020 Ffma
    temp_616 = 0.0 - fp_c6.data[45].x;
    temp_617 = fma(temp_92, fp_c6.data[45].x, temp_616);
    // 0x0012B8: 0x0104066978D7F016 Mov32i
    // 0x0012C8: 0x5C68100000D70234 Fmul
    temp_618 = temp_134 * temp_609;
    // 0x0012D0: 0x4C9807980087000D Mov
    // 0x0012D8: 0x4C68101406472727 Fmul
    temp_619 = fp_c5.data[32].z * fp_c5.data[25].x;
    // 0x0012E8: 0x5C60138001570E02 Fmnmx
    temp_620 = min(temp_610, temp_615);
    // 0x0012F0: 0x4C9807980097000E Mov
    // 0x0012F8: 0x5C90008000C7001F Rro
    // 0x001308: 0x4C98079800A70015 Mov
    // 0x001310: 0x5084000000271F1F Mufu
    temp_621 = exp2(temp_608);
    temp_622 = clamp(temp_621, 0.0, 1.0);
    // 0x001318: 0x49A20B040087130C Ffma
    temp_623 = fma(temp_600, fp_c1.data[2].x, -3.60299993);
    // 0x001328: 0x4C98079809470016 Mov
    // 0x001330: 0x4C59101800470D0D Fadd
    temp_624 = 0.0 - fp_c6.data[2].x;
    temp_625 = temp_624 + fp_c6.data[1].x;
    // 0x001338: 0x4C59101800570E0E Fadd
    temp_626 = 0.0 - fp_c6.data[2].y;
    temp_627 = temp_626 + fp_c6.data[1].y;
    // 0x001348: 0x4C68101808772323 Fmul
    temp_628 = temp_89 * fp_c6.data[33].w;
    // 0x001350: 0x4C59101800671515 Fadd
    temp_629 = 0.0 - fp_c6.data[2].z;
    temp_630 = temp_629 + fp_c6.data[1].z;
    // 0x001358: 0x51A006040097131E Ffma
    temp_631 = fma(temp_600, temp_623, fp_c1.data[2].y);
    // 0x001368: 0x4C58101408171616 Fadd
    temp_632 = fp_c6.data[37].x + fp_c5.data[32].y;
    // 0x001370: 0x51A0001800870D0C Ffma
    temp_633 = fma(temp_625, temp_606, fp_c6.data[2].x);
    // 0x001378: 0x51A0001800970E0D Ffma
    temp_634 = fma(temp_627, temp_606, fp_c6.data[2].y);
    // 0x001388: 0x51A0001800A7150E Ffma
    temp_635 = fma(temp_630, temp_606, fp_c6.data[2].z);
    // 0x001390: 0x4C68101808971D00 Fmul
    temp_636 = temp_596 * fp_c6.data[34].y;
    // 0x001398: 0x5C68100001F71616 Fmul
    temp_637 = temp_632 * temp_622;
    // 0x0013A8: 0x386C104248070B15 Fmul
    temp_638 = temp_227 * 50.0;
    temp_639 = clamp(temp_638, 0.0, 1.0);
    // 0x0013B0: 0x5C5C30000FF7021F Fadd
    temp_640 = temp_620 + -0.0;
    temp_641 = clamp(temp_640, 0.0, 1.0);
    // 0x0013B8: 0x59A01A0001E7131E Ffma
    temp_642 = fma(temp_600, temp_631, temp_618);
    // 0x0013C8: 0xE04BFF904337FF13 Ipa
    temp_643 = in_attr8.y;
    temp_644 = clamp(temp_643, 0.0, 1.0);
    // 0x0013D0: 0x5C9000800007002B Rro
    // 0x0013D8: 0x4C68101808D7161D Fmul
    temp_645 = temp_637 * fp_c6.data[35].y;
    // 0x0013E8: 0x5C68100001F71532 Fmul
    temp_646 = temp_639 * temp_641;
    // 0x0013F0: 0x5084000000272B15 Mufu
    temp_647 = exp2(temp_636);
    temp_648 = clamp(temp_647, 0.0, 1.0);
    // 0x0013F8: 0x4C5C100400A71E02 Fadd
    temp_649 = temp_642 + fp_c1.data[2].z;
    temp_650 = clamp(temp_649, 0.0, 1.0);
    // 0x001408: 0x4C68101808E7161E Fmul
    temp_651 = temp_637 * fp_c6.data[35].z;
    // 0x001410: 0x4C68101808C71616 Fmul
    temp_652 = temp_637 * fp_c6.data[35].x;
    // 0x001418: 0x59A0180002771D00 Ffma
    temp_653 = fma(temp_645, temp_619, temp_601);
    // 0x001428: 0x49A10E9408271D1D Ffma
    temp_654 = 0.0 - fp_c5.data[32].z;
    temp_655 = fma(temp_645, temp_654, temp_645);
    // 0x001430: 0x5C58300001F70235 Fadd
    temp_656 = 0.0 - temp_641;
    temp_657 = temp_650 + temp_656;
    // 0x001438: 0x4C9807980867001F Mov
    // 0x001448: 0x59A0020002771604 Ffma
    temp_658 = fma(temp_652, temp_619, temp_599);
    // 0x001450: 0x49A10B1408271616 Ffma
    temp_659 = 0.0 - fp_c5.data[32].z;
    temp_660 = fma(temp_652, temp_659, temp_652);
    // 0x001458: 0x5C58100001D71B1B Fadd
    temp_661 = temp_588 + temp_655;
    // 0x001468: 0x59A0188002771E02 Ffma
    temp_662 = fma(temp_651, temp_619, temp_602);
    // 0x001470: 0x4C6810180887151D Fmul
    temp_663 = temp_648 * fp_c6.data[34].x;
    // 0x001478: 0x59A0190003570808 Ffma
    temp_664 = fma(temp_206, temp_657, temp_646);
    // 0x001488: 0x49A10F1408271E1E Ffma
    temp_665 = 0.0 - fp_c5.data[32].z;
    temp_666 = fma(temp_651, temp_665, temp_651);
    // 0x001490: 0x5C58100001671717 Fadd
    temp_667 = temp_591 + temp_660;
    // 0x001498: 0x59A0190003570B0B Ffma
    temp_668 = fma(temp_227, temp_657, temp_646);
    // 0x0014A8: 0x59A0190003570F0F Ffma
    temp_669 = fma(temp_237, temp_657, temp_646);
    // 0x0014B0: 0x51A00F9808671D1F Ffma
    temp_670 = fma(temp_663, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x0014B8: 0x5C58100001E71C1C Fadd
    temp_671 = temp_592 + temp_666;
    // 0x0014C8: 0x4C68101406470B0B Fmul
    temp_672 = temp_668 * fp_c5.data[25].x;
    // 0x0014D0: 0x4C68101406470F0F Fmul
    temp_673 = temp_669 * fp_c5.data[25].x;
    // 0x0014D8: 0xF0F0000034370000 Depbar
    // 0x0014E8: 0x4C68101407871815 Fmul
    temp_674 = temp_574 * fp_c5.data[30].x;
    // 0x0014F0: 0x4C68101407871916 Fmul
    temp_675 = temp_575 * fp_c5.data[30].x;
    // 0x0014F8: 0x4C68101407871A18 Fmul
    temp_676 = temp_576 * fp_c5.data[30].x;
    // 0x001508: 0x010404000007F019 Mov32i
    // 0x001510: 0x49A00A8400670C15 Ffma
    temp_677 = fma(temp_633, fp_c1.data[1].z, temp_674);
    // 0x001518: 0x49A00B0400670D16 Ffma
    temp_678 = fma(temp_634, fp_c1.data[1].z, temp_675);
    // 0x001528: 0xE043FF900337FF0D Ipa
    temp_679 = in_attr8.x;
    // 0x001530: 0x49A00C0400670E18 Ffma
    temp_680 = fma(temp_635, fp_c1.data[1].z, temp_676);
    // 0x001538: 0xE043FF8C8337FF33 Ipa
    temp_681 = in_attr4.z;
    // 0x001548: 0x59A20A8001F72424 Ffma
    temp_682 = 0.0 - temp_677;
    temp_683 = fma(temp_86, temp_670, temp_682);
    // 0x001550: 0x33A00CC00007130C Ffma
    temp_684 = fma(temp_644, -2.0, 3.0);
    // 0x001558: 0xF0F0000034170000 Depbar
    // 0x001568: 0x4C6810140787280E Fmul
    temp_685 = temp_578 * fp_c5.data[30].x;
    // 0x001570: 0x5C68100001371313 Fmul
    temp_686 = temp_644 * temp_644;
    // 0x001578: 0x59A20B0001F72525 Ffma
    temp_687 = 0.0 - temp_678;
    temp_688 = fma(temp_87, temp_670, temp_687);
    // 0x001588: 0x59A20C0001F72222 Ffma
    temp_689 = 0.0 - temp_680;
    temp_690 = fma(temp_88, temp_670, temp_689);
    // 0x001590: 0x59A00A8002472324 Ffma
    temp_691 = fma(temp_628, temp_683, temp_677);
    // 0x001598: 0x49A0071808571015 Ffma
    temp_692 = fma(temp_582, fp_c6.data[33].y, temp_685);
    // 0x0015A8: 0x5C68100001370C0C Fmul
    temp_693 = temp_684 * temp_686;
    // 0x0015B0: 0x4C6810140647080E Fmul
    temp_694 = temp_664 * fp_c5.data[25].x;
    // 0x0015B8: 0x4C68101407872913 Fmul
    temp_695 = temp_579 * fp_c5.data[30].x;
    // 0x0015C8: 0x59A00B0002572325 Ffma
    temp_696 = fma(temp_628, temp_688, temp_678);
    // 0x0015D0: 0x5C58100001772417 Fadd
    temp_697 = temp_691 + temp_667;
    // 0x0015D8: 0x59A00C0002272322 Ffma
    temp_698 = fma(temp_628, temp_690, temp_680);
    // 0x0015E8: 0x4C68101407872A08 Fmul
    temp_699 = temp_580 * fp_c5.data[30].x;
    // 0x0015F0: 0x59A0020001570E04 Ffma
    temp_700 = fma(temp_694, temp_692, temp_658);
    // 0x0015F8: 0x49A0099808571111 Ffma
    temp_701 = fma(temp_583, fp_c6.data[33].y, temp_695);
    // 0x001608: 0x5C58100001B7251B Fadd
    temp_702 = temp_696 + temp_661;
    // 0x001610: 0x59A10B800177260E Ffma
    temp_703 = 0.0 - temp_697;
    temp_704 = fma(temp_11, temp_703, temp_697);
    // 0x001618: 0x5C58100001C7221C Fadd
    temp_705 = temp_698 + temp_671;
    // 0x001628: 0x49A0041808571208 Ffma
    temp_706 = fma(temp_584, fp_c6.data[33].y, temp_699);
    // 0x001630: 0x49A506980BC7140D Ffma
    temp_707 = 0.0 - fp_c6.data[47].x;
    temp_708 = fma(temp_585, temp_707, temp_679);
    temp_709 = clamp(temp_708, 0.0, 1.0);
    // 0x001638: 0x59A0000001170B00 Ffma
    temp_710 = fma(temp_672, temp_701, temp_653);
    // 0x001648: 0x5080000000370D0D Mufu
    temp_711 = log2(temp_709);
    // 0x001650: 0x59A10D8001B7261B Ffma
    temp_712 = 0.0 - temp_702;
    temp_713 = fma(temp_11, temp_712, temp_702);
    // 0x001658: 0x59A0020000E7070E Ffma
    temp_714 = fma(temp_191, temp_704, temp_700);
    // 0x001668: 0x4C98079802970004 Mov
    // 0x001670: 0x59A10E0001C7261C Ffma
    temp_715 = 0.0 - temp_705;
    temp_716 = fma(temp_11, temp_715, temp_705);
    // 0x001678: 0x59A0010000870F0F Ffma
    temp_717 = fma(temp_673, temp_706, temp_662);
    // 0x001688: 0x4C98079802870007 Mov
    // 0x001690: 0x59A0000001B70900 Ffma
    temp_718 = fma(temp_101, temp_713, temp_710);
    // 0x001698: 0x5C68100000E72C2C Fmul
    temp_719 = temp_293 * temp_714;
    // 0x0016A8: 0x51A0021802972102 Ffma
    temp_720 = fma(temp_612, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0016B0: 0x4C98079802A70008 Mov
    // 0x0016B8: 0x59A0078001C70A04 Ffma
    temp_721 = fma(temp_103, temp_716, temp_717);
    // 0x0016C8: 0x51A0039802872020 Ffma
    temp_722 = fma(temp_617, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0016D0: 0x5C68100000072D00 Fmul
    temp_723 = temp_295 * temp_718;
    // 0x0016D8: 0x49A0161406C70303 Ffma
    temp_724 = fma(temp_178, fp_c5.data[27].x, temp_719);
    // 0x0016E8: 0x4C68101803770C0C Fmul
    temp_725 = temp_693 * fp_c6.data[13].w;
    // 0x0016F0: 0x51A0041802A70101 Ffma
    temp_726 = fma(temp_614, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0016F8: 0x5C68100000472E04 Fmul
    temp_727 = temp_297 * temp_721;
    // 0x001708: 0x4C68101803170D08 Fmul
    temp_728 = temp_711 * fp_c6.data[12].y;
    // 0x001710: 0x49A0001406C70505 Ffma
    temp_729 = fma(temp_180, fp_c5.data[27].x, temp_723);
    // 0x001718: 0x5C58300002070307 Fadd
    temp_730 = 0.0 - temp_722;
    temp_731 = temp_724 + temp_730;
    // 0x001728: 0x49A2061803570C09 Ffma
    temp_732 = 0.0 - temp_725;
    temp_733 = fma(temp_725, fp_c6.data[13].y, temp_732);
    // 0x001730: 0x49A0021406C70606 Ffma
    temp_734 = fma(temp_181, fp_c5.data[27].x, temp_727);
    // 0x001738: 0x5C9000800087000A Rro
    // 0x001748: 0x5C58300000270500 Fadd
    temp_735 = 0.0 - temp_720;
    temp_736 = temp_729 + temp_735;
    // 0x001750: 0x5080000000270A0A Mufu
    temp_737 = exp2(temp_728);
    // 0x001758: 0x49A010180BF70707 Ffma
    temp_738 = fma(temp_731, fp_c6.data[47].w, temp_722);
    // 0x001768: 0x5C58300000170604 Fadd
    temp_739 = 0.0 - temp_726;
    temp_740 = temp_734 + temp_739;
    // 0x001770: 0x49A001180BF70000 Ffma
    temp_741 = fma(temp_736, fp_c6.data[47].w, temp_720);
    // 0x001778: 0x5C60178000772007 Fmnmx
    temp_742 = max(temp_722, temp_738);
    // 0x001788: 0x49A000980BF70404 Ffma
    temp_743 = fma(temp_740, fp_c6.data[47].w, temp_726);
    // 0x001790: 0x5C60178000070200 Fmnmx
    temp_744 = max(temp_720, temp_741);
    // 0x001798: 0x49A2061803470C02 Ffma
    temp_745 = 0.0 - temp_725;
    temp_746 = fma(temp_725, fp_c6.data[13].x, temp_745);
    // 0x0017A8: 0x5C60178000470104 Fmnmx
    temp_747 = max(temp_726, temp_743);
    // 0x0017B0: 0x49A2061803670C01 Ffma
    temp_748 = 0.0 - temp_725;
    temp_749 = fma(temp_725, fp_c6.data[13].z, temp_748);
    // 0x0017B8: 0x59A0000000970008 Ffma
    temp_750 = fma(temp_744, temp_733, temp_744);
    // 0x0017C8: 0x59A0038000270702 Ffma
    temp_751 = fma(temp_742, temp_746, temp_742);
    // 0x0017D0: 0x4C68101802B70A07 Fmul
    temp_752 = temp_737 * fp_c6.data[10].w;
    // 0x0017D8: 0x59A0020000170404 Ffma
    temp_753 = fma(temp_747, temp_749, temp_747);
    // 0x0017E8: 0x5C59100000270300 Fadd
    temp_754 = 0.0 - temp_724;
    temp_755 = temp_754 + temp_751;
    // 0x0017F0: 0x5C59100000870502 Fadd
    temp_756 = 0.0 - temp_729;
    temp_757 = temp_756 + temp_750;
    // 0x0017F8: 0x4C58100C03873308 Fadd
    temp_758 = temp_681 + fp_c3.data[14].x;
    // 0x001808: 0x5C59100000470604 Fadd
    temp_759 = 0.0 - temp_734;
    temp_760 = temp_759 + temp_753;
    // 0x001810: 0x59A0018000770000 Ffma
    temp_761 = fma(temp_755, temp_752, temp_724);
    // 0x001818: 0x59A0028000770201 Ffma
    temp_762 = fma(temp_757, temp_752, temp_729);
    // 0x001828: 0x0103F8000007F003 Mov32i
    // 0x001830: 0x59A0030000770402 Ffma
    temp_763 = fma(temp_760, temp_752, temp_734);
    // 0x001838: 0x0103E0000007F005 Mov32i
    // 0x001848: 0x5C9807800FF70006 Mov
    // 0x001850: 0x0103F8000007F007 Mov32i
    // 0x001858: 0x49A37F8C03C70804 Ffma
    temp_764 = 0.0 - fp_c3.data[15].x;
    temp_765 = fma(temp_758, temp_764, -0.0);
    // 0x001868: 0xE30000000007000F Exit
    out_attr0.x = temp_761;
    out_attr0.y = temp_762;
    out_attr0.z = temp_763;
    out_attr0.w = 1.0;
    out_attr1.x = temp_765;
    out_attr1.y = 0.125;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
