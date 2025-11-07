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
    uint temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    int temp_188;
    precise float temp_189;
    int temp_190;
    uint temp_191;
    uint temp_192;
    int temp_193;
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
    bool temp_237;
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
    int temp_296;
    bool temp_297;
    int temp_298;
    int temp_299;
    int temp_300;
    int temp_301;
    uint temp_302;
    uint temp_303;
    int temp_304;
    precise float temp_305;
    int temp_306;
    int temp_307;
    uint temp_308;
    uint temp_309;
    int temp_310;
    precise float temp_311;
    int temp_312;
    uint temp_313;
    int temp_314;
    precise float temp_315;
    int temp_316;
    uint temp_317;
    uint temp_318;
    int temp_319;
    precise float temp_320;
    int temp_321;
    uint temp_322;
    int temp_323;
    precise float temp_324;
    int temp_325;
    uint temp_326;
    uint temp_327;
    int temp_328;
    precise float temp_329;
    int temp_330;
    uint temp_331;
    int temp_332;
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
    int temp_354;
    uint temp_355;
    uint temp_356;
    int temp_357;
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
    precise float temp_372;
    precise float temp_373;
    precise float temp_374;
    int temp_375;
    uint temp_376;
    uint temp_377;
    int temp_378;
    precise float temp_379;
    int temp_380;
    uint temp_381;
    int temp_382;
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
    uint temp_395;
    int temp_396;
    bool temp_397;
    uint temp_398;
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    precise float temp_405;
    uint temp_406;
    precise float temp_407;
    bool temp_408;
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
    int temp_436;
    uint temp_437;
    uint temp_438;
    int temp_439;
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
    int temp_514;
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
    precise vec3 temp_534;
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
    precise vec3 temp_550;
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
    // 0x000008: 0x4C9807980847001A Mov
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
    // 0x000048: 0xD8240360D0E70B28 Texs
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
    // 0x0001E8: 0xE003FF870FF7FF05 Ipa
    temp_49 = gl_FragCoord.x;
    temp_50 = support_buffer.render_scale[0];
    temp_51 = temp_49 / temp_50;
    // 0x0001F0: 0x385D103F80070B0B Fadd
    temp_52 = 0.0 - temp_44;
    temp_53 = temp_52 + 1.0;
    temp_54 = clamp(temp_53, 0.0, 1.0);
    // 0x0001F8: 0x5080000000870B06 Mufu
    temp_55 = sqrt(temp_54);
    // 0x000208: 0x59A0008000270801 Ffma
    temp_56 = fma(temp_38, temp_3, temp_46);
    // 0x000210: 0x59A0018000270903 Ffma
    temp_57 = fma(temp_39, temp_3, temp_48);
    // 0x000218: 0x59A0038000670404 Ffma
    temp_58 = fma(temp_47, temp_55, temp_45);
    // 0x000228: 0xE003FF874FF7FF07 Ipa
    temp_59 = gl_FragCoord.y;
    temp_60 = support_buffer.render_scale[0];
    temp_61 = temp_59 / temp_60;
    // 0x000230: 0x59A0008000671001 Ffma
    temp_62 = fma(temp_40, temp_55, temp_56);
    // 0x000238: 0x59A0018000670E03 Ffma
    temp_63 = fma(temp_41, temp_55, temp_57);
    // 0x000248: 0x0103F8000007F010 Mov32i
    // 0x000250: 0x5C68100000470402 Fmul
    temp_64 = temp_58 * temp_58;
    // 0x000258: 0x59A0010000170102 Ffma
    temp_65 = fma(temp_62, temp_62, temp_64);
    // 0x000268: 0x59A0010000370302 Ffma
    temp_66 = fma(temp_63, temp_63, temp_65);
    // 0x000270: 0x5080000000570202 Mufu
    temp_67 = inversesqrt(temp_66);
    // 0x000278: 0x4C68100C04B70707 Fmul
    temp_68 = temp_61 * fp_c3.data[18].w;
    // 0x000288: 0x5C68100000270316 Fmul
    temp_69 = temp_63 * temp_67;
    // 0x000290: 0x5C68100000270101 Fmul
    temp_70 = temp_62 * temp_67;
    // 0x000298: 0x5C6810000027040E Fmul
    temp_71 = temp_58 * temp_67;
    // 0x0002A8: 0x4C68100C00671606 Fmul
    temp_72 = temp_69 * fp_c3.data[1].z;
    // 0x0002B0: 0x4C68100C00271603 Fmul
    temp_73 = temp_69 * fp_c3.data[0].z;
    // 0x0002B8: 0x49A0030C00570104 Ffma
    temp_74 = fma(temp_70, fp_c3.data[1].y, temp_72);
    // 0x0002C8: 0x49A0018C00170103 Ffma
    temp_75 = fma(temp_70, fp_c3.data[0].y, temp_73);
    // 0x0002D0: 0x4C68100C04A70506 Fmul
    temp_76 = temp_51 * fp_c3.data[18].z;
    // 0x0002D8: 0x49A0020C00470E04 Ffma
    temp_77 = fma(temp_71, fp_c3.data[1].x, temp_74);
    // 0x0002E8: 0x49A0018C00070E03 Ffma
    temp_78 = fma(temp_71, fp_c3.data[0].x, temp_75);
    // 0x0002F0: 0x4C69100C03E70404 Fmul
    temp_79 = 0.0 - fp_c3.data[15].z;
    temp_80 = temp_77 * temp_79;
    // 0x0002F8: 0x4C68101808B70303 Fmul
    temp_81 = temp_78 * fp_c6.data[34].w;
    // 0x000308: 0x4C68101808B70404 Fmul
    temp_82 = temp_80 * fp_c6.data[34].w;
    // 0x000310: 0x49A0030400270320 Ffma
    temp_83 = fma(temp_81, fp_c1.data[0].z, temp_76);
    // 0x000318: 0x49A0038400270421 Ffma
    temp_84 = fma(temp_82, fp_c1.data[0].z, temp_68);
    // 0x000328: 0xD832022242172020 Texs
    temp_85 = texture(fp_t_tcb_22, vec2(temp_83, temp_84)).xyzw;
    temp_86 = temp_85.x;
    temp_87 = temp_85.y;
    temp_88 = temp_85.z;
    temp_89 = temp_85.w;
    // 0x000330: 0xD86201EFF1070610 Texs
    temp_90 = textureLod(fp_t_tcb_1E, vec2(temp_76, temp_68), 1.0).x;
    // 0x000338: 0xD822020020770626 Texs
    temp_91 = texture(fp_t_tcb_20, vec2(temp_76, temp_68)).xyz;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x000348: 0xE043FF8B00C7FF19 Ipa
    temp_95 = in_attr3.x;
    // 0x000350: 0xE043FF8B40C7FF12 Ipa
    temp_96 = in_attr3.y;
    // 0x000358: 0xE043FF8B80C7FF18 Ipa
    temp_97 = in_attr3.z;
    // 0x000368: 0xF0F0000034370000 Depbar
    // 0x000370: 0x4C6810180A072828 Fmul
    temp_98 = temp_6 * fp_c6.data[40].x;
    // 0x000378: 0xE2900000B9000000 Ssy
    // 0x000388: 0x4C68101406871A1A Fmul
    temp_99 = fp_c6.data[33].x * fp_c5.data[26].x;
    // 0x000390: 0x5C68100000070D13 Fmul
    temp_100 = temp_8 * temp_12;
    // 0x000398: 0x4C98079808770017 Mov
    // 0x0003A8: 0x4C68101808A71717 Fmul
    temp_101 = fp_c6.data[33].w * fp_c6.data[34].z;
    // 0x0003B0: 0x5C68100001971903 Fmul
    temp_102 = temp_95 * temp_95;
    // 0x0003B8: 0x59A0018001271203 Ffma
    temp_103 = fma(temp_96, temp_96, temp_102);
    // 0x0003C8: 0x59A0018001871803 Ffma
    temp_104 = fma(temp_97, temp_97, temp_103);
    // 0x0003D0: 0x5080000000570303 Mufu
    temp_105 = inversesqrt(temp_104);
    // 0x0003D8: 0x5C69100000371919 Fmul
    temp_106 = 0.0 - temp_105;
    temp_107 = temp_95 * temp_106;
    // 0x0003E8: 0x5C69100000371212 Fmul
    temp_108 = 0.0 - temp_105;
    temp_109 = temp_96 * temp_108;
    // 0x0003F0: 0x5C69100000371818 Fmul
    temp_110 = 0.0 - temp_105;
    temp_111 = temp_97 * temp_110;
    // 0x0003F8: 0x4C58301805C71904 Fadd
    temp_112 = 0.0 - fp_c6.data[23].x;
    temp_113 = temp_107 + temp_112;
    // 0x000408: 0x4C58301805D71205 Fadd
    temp_114 = 0.0 - fp_c6.data[23].y;
    temp_115 = temp_109 + temp_114;
    // 0x000410: 0x4C58301805E71808 Fadd
    temp_116 = 0.0 - fp_c6.data[23].z;
    temp_117 = temp_111 + temp_116;
    // 0x000418: 0x5C68100001970E0F Fmul
    temp_118 = temp_71 * temp_107;
    // 0x000428: 0x5C6810000047040A Fmul
    temp_119 = temp_113 * temp_113;
    // 0x000430: 0x59A007800127010F Ffma
    temp_120 = fma(temp_70, temp_109, temp_118);
    // 0x000438: 0x59A005000057050A Ffma
    temp_121 = fma(temp_115, temp_115, temp_119);
    // 0x000448: 0x59A005000087080A Ffma
    temp_122 = fma(temp_117, temp_117, temp_121);
    // 0x000450: 0x5080000000570A0A Mufu
    temp_123 = inversesqrt(temp_122);
    // 0x000458: 0x5C68100000A70404 Fmul
    temp_124 = temp_113 * temp_123;
    // 0x000468: 0x5C68100000A70503 Fmul
    temp_125 = temp_115 * temp_123;
    // 0x000470: 0x5C68100000A70805 Fmul
    temp_126 = temp_117 * temp_123;
    // 0x000478: 0x4C69101805C70409 Fmul
    temp_127 = 0.0 - fp_c6.data[23].x;
    temp_128 = temp_124 * temp_127;
    // 0x000488: 0x5C68100000471911 Fmul
    temp_129 = temp_107 * temp_124;
    // 0x000490: 0x5C68100000470E04 Fmul
    temp_130 = temp_71 * temp_124;
    // 0x000498: 0x49A1049805D70308 Ffma
    temp_131 = 0.0 - fp_c6.data[23].y;
    temp_132 = fma(temp_125, temp_131, temp_128);
    // 0x0004A8: 0x59A008800037120B Ffma
    temp_133 = fma(temp_109, temp_125, temp_129);
    // 0x0004B0: 0x01040DF760C7F011 Mov32i
    // 0x0004B8: 0x59A0020000370104 Ffma
    temp_134 = fma(temp_70, temp_125, temp_130);
    // 0x0004C8: 0x386013BF80072803 Fmnmx
    temp_135 = min(temp_98, 1.0);
    // 0x0004D0: 0x49A5041805E70508 Ffma
    temp_136 = 0.0 - fp_c6.data[23].z;
    temp_137 = fma(temp_126, temp_136, temp_132);
    temp_138 = clamp(temp_137, 0.0, 1.0);
    // 0x0004D8: 0x59A405800057180B Ffma
    temp_139 = fma(temp_111, temp_126, temp_133);
    temp_140 = clamp(temp_139, 0.0, 1.0);
    // 0x0004E8: 0x4C60178400070303 Fmnmx
    temp_141 = max(temp_135, fp_c1.data[0].x);
    // 0x0004F0: 0x49A2088400370809 Ffma
    temp_142 = fma(temp_138, fp_c1.data[0].w, -6.98316002);
    // 0x0004F8: 0x49A2088400370B0A Ffma
    temp_143 = fma(temp_140, fp_c1.data[0].w, -6.98316002);
    // 0x000508: 0x3868104110070707 Fmul
    temp_144 = temp_68 * 9.0;
    // 0x000510: 0x5CA8148000770A07 F2f
    temp_145 = floor(temp_144);
    // 0x000518: 0x51A401840007033A Ffma
    temp_146 = fma(temp_141, temp_141, fp_c1.data[0].x);
    temp_147 = clamp(temp_146, 0.0, 1.0);
    // 0x000528: 0x5C68100000970808 Fmul
    temp_148 = temp_138 * temp_142;
    // 0x000530: 0x5C68100000A70B09 Fmul
    temp_149 = temp_140 * temp_143;
    // 0x000538: 0x59A402000057160B Ffma
    temp_150 = fma(temp_69, temp_126, temp_134);
    temp_151 = clamp(temp_150, 0.0, 1.0);
    // 0x000548: 0x0103F0000007F005 Mov32i
    // 0x000550: 0x4C69101805C70E04 Fmul
    temp_152 = 0.0 - fp_c6.data[23].x;
    temp_153 = temp_71 * temp_152;
    // 0x000558: 0x5C68100003A73A2A Fmul
    temp_154 = temp_147 * temp_147;
    // 0x000568: 0x5C9000800097001B Rro
    // 0x000570: 0x32A002BF0007032B Ffma
    temp_155 = fma(temp_141, 0.5, 0.5);
    // 0x000578: 0x5080000000271B1B Mufu
    temp_156 = exp2(temp_149);
    // 0x000588: 0x49A1021805D70105 Ffma
    temp_157 = 0.0 - fp_c6.data[23].y;
    temp_158 = fma(temp_70, temp_157, temp_153);
    // 0x000590: 0x59A4078001871604 Ffma
    temp_159 = fma(temp_69, temp_111, temp_120);
    temp_160 = clamp(temp_159, 0.0, 1.0);
    // 0x000598: 0x386810418007060F Fmul
    temp_161 = temp_76 * 16.0;
    // 0x0005A8: 0x59A2058002A70B11 Ffma
    temp_162 = 0.0 - temp_151;
    temp_163 = fma(temp_151, temp_154, temp_162);
    // 0x0005B0: 0x5CA8148000F70A15 F2f
    temp_164 = floor(temp_161);
    // 0x0005B8: 0x5C68120002B72B2B Fmul
    temp_165 = temp_155 * 0.5;
    temp_166 = temp_165 * temp_155;
    // 0x0005C8: 0x49A5029805E7160A Ffma
    temp_167 = 0.0 - fp_c6.data[23].z;
    temp_168 = fma(temp_69, temp_167, temp_158);
    temp_169 = clamp(temp_168, 0.0, 1.0);
    // 0x0005D0: 0x51A0088400170B11 Ffma
    temp_170 = fma(temp_151, temp_163, fp_c1.data[0].y);
    // 0x0005D8: 0x59A1020000472B14 Ffma
    temp_171 = 0.0 - temp_160;
    temp_172 = fma(temp_166, temp_171, temp_160);
    // 0x0005E8: 0x5080000000471111 Mufu
    temp_173 = 1.0 / temp_170;
    // 0x0005F0: 0x59A1050002B70A05 Ffma
    temp_174 = 0.0 - temp_166;
    temp_175 = fma(temp_169, temp_174, temp_169);
    // 0x0005F8: 0x5C68100002370D0F Fmul
    temp_176 = temp_8 * temp_11;
    // 0x000608: 0x32A00AC180070715 Ffma
    temp_177 = fma(temp_145, 16.0, temp_164);
    // 0x000610: 0x5C58100001472B14 Fadd
    temp_178 = temp_166 + temp_172;
    // 0x000618: 0x5CB0118001570A33 F2i
    temp_179 = trunc(temp_177);
    temp_180 = max(temp_179, 0.0);
    temp_181 = uint(temp_180);
    // 0x000628: 0x5C58100000572B06 Fadd
    temp_182 = temp_166 + temp_175;
    // 0x000630: 0x5080000000471414 Mufu
    temp_183 = 1.0 / temp_178;
    // 0x000638: 0x5C68100001173A05 Fmul
    temp_184 = temp_147 * temp_173;
    // 0x000648: 0x508000000047060B Mufu
    temp_185 = 1.0 / temp_182;
    // 0x000650: 0x4C68101801570A15 Fmul
    temp_186 = temp_169 * fp_c6.data[5].y;
    // 0x000658: 0x5C68100000570505 Fmul
    temp_187 = temp_184 * temp_184;
    // 0x000668: 0x3848000000873334 Shl
    temp_188 = int(temp_181) << 8;
    // 0x000670: 0x59A0078001A70F06 Ffma
    temp_189 = fma(temp_176, temp_99, temp_176);
    // 0x000678: 0xEF94008200473434 Ldc
    temp_190 = temp_188 + 0x2004;
    temp_191 = uint(temp_190) >> 2;
    temp_192 = temp_191 >> 2;
    temp_193 = int(temp_191) & 3;
    temp_194 = fp_c8.data[int(temp_192)][temp_193];
    // 0x000688: 0x3868103F00071432 Fmul
    temp_195 = temp_183 * 0.5;
    // 0x000690: 0x4C58301407B7000F Fadd
    temp_196 = 0.0 - fp_c5.data[30].w;
    temp_197 = temp_12 + temp_196;
    // 0x000698: 0x4C68101801470A14 Fmul
    temp_198 = temp_169 * fp_c6.data[5].x;
    // 0x0006A8: 0x1E23EA2F9837151F Fmul32i
    temp_199 = temp_186 * 0.318309873;
    // 0x0006B0: 0x5C68100000B73207 Fmul
    temp_200 = temp_195 * temp_185;
    // 0x0006B8: 0x5C68100002270D0B Fmul
    temp_201 = temp_8 * temp_10;
    // 0x0006C8: 0x1E23EA2F9837141E Fmul32i
    temp_202 = temp_198 * 0.318309873;
    // 0x0006D0: 0x5C68100000770511 Fmul
    temp_203 = temp_187 * temp_200;
    // 0x0006D8: 0x59A0098001A71307 Ffma
    temp_204 = fma(temp_100, temp_99, temp_100);
    // 0x0006E8: 0x59A0058001A70B05 Ffma
    temp_205 = fma(temp_201, temp_99, temp_201);
    // 0x0006F0: 0x5C90008000870013 Rro
    // 0x0006F8: 0x4C58301407B72208 Fadd
    temp_206 = 0.0 - fp_c5.data[30].w;
    temp_207 = temp_10 + temp_206;
    // 0x000708: 0x5080000000271313 Mufu
    temp_208 = exp2(temp_148);
    // 0x000710: 0x4C58301407B7230B Fadd
    temp_209 = 0.0 - fp_c5.data[30].w;
    temp_210 = temp_11 + temp_209;
    // 0x000718: 0x5C68100001170A11 Fmul
    temp_211 = temp_169 * temp_203;
    // 0x000728: 0x4C68101801670A1A Fmul
    temp_212 = temp_169 * fp_c6.data[5].z;
    // 0x000730: 0x51A0079407B7290A Ffma
    temp_213 = fma(temp_7, temp_197, fp_c5.data[30].w);
    // 0x000738: 0x51A0041407B72908 Ffma
    temp_214 = fma(temp_7, temp_207, fp_c5.data[30].w);
    // 0x000748: 0x51A0059407B72909 Ffma
    temp_215 = fma(temp_7, temp_210, fp_c5.data[30].w);
    // 0x000750: 0x1E23EA2F98371A28 Fmul32i
    temp_216 = temp_212 * 0.318309873;
    // 0x000758: 0x59A10D8001B7081D Ffma
    temp_217 = 0.0 - temp_156;
    temp_218 = fma(temp_214, temp_217, temp_156);
    // 0x000768: 0x59A109800137080B Ffma
    temp_219 = 0.0 - temp_208;
    temp_220 = fma(temp_214, temp_219, temp_208);
    // 0x000770: 0x59A109800137090F Ffma
    temp_221 = 0.0 - temp_208;
    temp_222 = fma(temp_215, temp_221, temp_208);
    // 0x000778: 0x59A1098001370A13 Ffma
    temp_223 = 0.0 - temp_208;
    temp_224 = fma(temp_213, temp_223, temp_208);
    // 0x000788: 0x59A10D8001B7091C Ffma
    temp_225 = 0.0 - temp_156;
    temp_226 = fma(temp_215, temp_225, temp_156);
    // 0x000790: 0x59A10D8001B70A1B Ffma
    temp_227 = 0.0 - temp_156;
    temp_228 = fma(temp_213, temp_227, temp_156);
    // 0x000798: 0x5C58100001D7081D Fadd
    temp_229 = temp_214 + temp_218;
    // 0x0007A8: 0x5C58100000B70814 Fadd
    temp_230 = temp_214 + temp_220;
    // 0x0007B0: 0x5C58100000F70915 Fadd
    temp_231 = temp_215 + temp_222;
    // 0x0007B8: 0x5C58100001370A1A Fadd
    temp_232 = temp_213 + temp_224;
    // 0x0007C8: 0x5C58100001C7091C Fadd
    temp_233 = temp_215 + temp_226;
    // 0x0007D0: 0x5C58100001B70A13 Fadd
    temp_234 = temp_213 + temp_228;
    // 0x0007D8: 0x59A1140002871313 Ffma
    temp_235 = 0.0 - temp_216;
    temp_236 = fma(temp_234, temp_235, temp_216);
    // 0x0007E8: 0x5B6603800FF73407 Isetp
    temp_237 = floatBitsToUint(temp_194) <= 0u;
    // 0x0007F0: 0x5C9807800FF70028 Mov
    // 0x0007F8: 0xF0F0000034170000 Depbar
    // 0x000808: 0x51A00B980147200B Ffma
    temp_238 = fma(temp_86, temp_101, fp_c6.data[5].x);
    // 0x000810: 0x51A00B980157210F Ffma
    temp_239 = fma(temp_87, temp_101, fp_c6.data[5].y);
    // 0x000818: 0x51A00B9801672417 Ffma
    temp_240 = fma(temp_88, temp_101, fp_c6.data[5].z);
    // 0x000828: 0x51A5080400170D10 Ffma
    temp_241 = 0.0 - temp_90;
    temp_242 = fma(temp_8, temp_241, fp_c1.data[0].y);
    temp_243 = clamp(temp_242, 0.0, 1.0);
    // 0x000830: 0x5C6810000047010D Fmul
    temp_244 = temp_70 * temp_160;
    // 0x000838: 0x5C68100001470B14 Fmul
    temp_245 = temp_238 * temp_230;
    // 0x000848: 0x5C68100001570F1B Fmul
    temp_246 = temp_239 * temp_231;
    // 0x000850: 0x5C68100001A71717 Fmul
    temp_247 = temp_240 * temp_232;
    // 0x000858: 0x49A2081403271015 Ffma
    temp_248 = 0.0 - temp_243;
    temp_249 = fma(temp_243, fp_c5.data[12].z, temp_248);
    // 0x000868: 0x59A10F0001E71D0B Ffma
    temp_250 = 0.0 - temp_202;
    temp_251 = fma(temp_229, temp_250, temp_202);
    // 0x000870: 0x59A10F8001F71C0F Ffma
    temp_252 = 0.0 - temp_199;
    temp_253 = fma(temp_233, temp_252, temp_199);
    // 0x000878: 0x5C68100001471130 Fmul
    temp_254 = temp_211 * temp_245;
    // 0x000888: 0x5C68100001B71131 Fmul
    temp_255 = temp_211 * temp_246;
    // 0x000890: 0x5C6810000177112F Fmul
    temp_256 = temp_211 * temp_247;
    // 0x000898: 0x49A2081403071011 Ffma
    temp_257 = 0.0 - temp_243;
    temp_258 = fma(temp_243, fp_c5.data[12].x, temp_257);
    // 0x0008A8: 0x49A2081403171014 Ffma
    temp_259 = 0.0 - temp_243;
    temp_260 = fma(temp_243, fp_c5.data[12].y, temp_259);
    // 0x0008B0: 0x5C68100000470E10 Fmul
    temp_261 = temp_71 * temp_160;
    // 0x0008B8: 0x5C6810000047161B Fmul
    temp_262 = temp_69 * temp_160;
    // 0x0008C8: 0x3858103F80071515 Fadd
    temp_263 = temp_249 + 1.0;
    // 0x0008D0: 0x5C9807800FF70017 Mov
    // 0x0008D8: 0x3858103F80071111 Fadd
    temp_264 = temp_258 + 1.0;
    // 0x0008E8: 0x3858103F80071414 Fadd
    temp_265 = temp_260 + 1.0;
    // 0x0008F0: 0x5C9807800FF7001C Mov
    // 0x0008F8: 0x5C9807800FF7001D Mov
    // 0x000908: 0x5C9807800FF7001E Mov
    // 0x000910: 0x5C9807800FF7001F Mov
    // 0x000918: 0x32A20CC000071035 Ffma
    temp_266 = 0.0 - temp_107;
    temp_267 = fma(temp_261, 2.0, temp_266);
    // 0x000928: 0x32A2094000070D1A Ffma
    temp_268 = 0.0 - temp_109;
    temp_269 = fma(temp_244, 2.0, temp_268);
    // 0x000930: 0x32A20C4000071B1B Ffma
    temp_270 = 0.0 - temp_111;
    temp_271 = fma(temp_262, 2.0, temp_270);
    // 0x000938: 0x59A408800117222C Ffma
    temp_272 = fma(temp_10, temp_264, temp_264);
    temp_273 = clamp(temp_272, 0.0, 1.0);
    // 0x000948: 0x59A40A000147232D Ffma
    temp_274 = fma(temp_11, temp_265, temp_265);
    temp_275 = clamp(temp_274, 0.0, 1.0);
    // 0x000950: 0x59A40A800157002E Ffma
    temp_276 = fma(temp_12, temp_263, temp_263);
    temp_277 = clamp(temp_276, 0.0, 1.0);
    // 0x000958: 0x1E23E22F98373030 Fmul32i
    temp_278 = temp_254 * 0.159154937;
    // 0x000968: 0x1E23E22F98373131 Fmul32i
    temp_279 = temp_255 * 0.159154937;
    // 0x000970: 0x1E23E22F98372F2F Fmul32i
    temp_280 = temp_256 * 0.159154937;
    // 0x000978: 0xF0F800000000000F Sync
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
    temp_291 = 0.0;
    temp_292 = 0.0;
    if (!temp_237)
    {
        // 0x000988: 0x5C9807800FF7003D Mov
        // 0x000990: 0xE043FF8D00C7FF36 Ipa
        temp_293 = in_attr5.x;
        // 0x000998: 0xE043FF8D40C7FF37 Ipa
        temp_294 = in_attr5.y;
        // 0x0009A8: 0xE043FF8D80C7FF39 Ipa
        temp_295 = in_attr5.z;
        temp_296 = 0;
        do
        {
            // 0x0009B0: 0x5C18020003D7333F Iscadd
            temp_298 = int(temp_181) << 4;
            temp_299 = temp_298 + temp_296;
            // 0x0009B8: 0xE290000052000000 Ssy
            // 0x0009C8: 0x3848000000473F3F Shl
            temp_300 = temp_299 << 4;
            // 0x0009D0: 0xEF94008200073F38 Ldc
            temp_301 = temp_300 + 0x2000;
            temp_302 = uint(temp_301) >> 2;
            temp_303 = temp_302 >> 2;
            temp_304 = int(temp_302) & 3;
            temp_305 = fp_c8.data[int(temp_303)][temp_304];
            // 0x0009D8: 0x3848000000673838 Shl
            temp_306 = floatBitsToInt(temp_305) << 6;
            // 0x0009E8: 0xEF9500800107380C Ldc
            temp_307 = temp_306 + 16;
            temp_308 = uint(temp_307) >> 2;
            temp_309 = temp_308 >> 2;
            temp_310 = int(temp_308) & 3;
            temp_311 = fp_c8.data[int(temp_309)][temp_310];
            temp_312 = int(temp_308) + 1;
            temp_313 = uint(temp_312) >> 2;
            temp_314 = temp_312 & 3;
            temp_315 = fp_c8.data[int(temp_313)][temp_314];
            // 0x0009F0: 0xEF95008001873810 Ldc
            temp_316 = temp_306 + 24;
            temp_317 = uint(temp_316) >> 2;
            temp_318 = temp_317 >> 2;
            temp_319 = int(temp_317) & 3;
            temp_320 = fp_c8.data[int(temp_318)][temp_319];
            temp_321 = int(temp_317) + 1;
            temp_322 = uint(temp_321) >> 2;
            temp_323 = temp_321 & 3;
            temp_324 = fp_c8.data[int(temp_322)][temp_323];
            // 0x0009F8: 0xEF95008002073814 Ldc
            temp_325 = temp_306 + 32;
            temp_326 = uint(temp_325) >> 2;
            temp_327 = temp_326 >> 2;
            temp_328 = int(temp_326) & 3;
            temp_329 = fp_c8.data[int(temp_327)][temp_328];
            temp_330 = int(temp_326) + 1;
            temp_331 = uint(temp_330) >> 2;
            temp_332 = temp_330 & 3;
            temp_333 = fp_c8.data[int(temp_331)][temp_332];
            // 0x000A08: 0x5C58300003670C3B Fadd
            temp_334 = 0.0 - temp_293;
            temp_335 = temp_311 + temp_334;
            // 0x000A10: 0x5C58300003770D3C Fadd
            temp_336 = 0.0 - temp_294;
            temp_337 = temp_315 + temp_336;
            // 0x000A18: 0x5C58300003971010 Fadd
            temp_338 = 0.0 - temp_295;
            temp_339 = temp_320 + temp_338;
            // 0x000A28: 0x5C68100003B73B3E Fmul
            temp_340 = temp_335 * temp_335;
            // 0x000A30: 0x59A108000107110C Ffma
            temp_341 = 0.0 - temp_339;
            temp_342 = fma(temp_324, temp_341, temp_339);
            // 0x000A38: 0x59A01F0003C73C3E Ffma
            temp_343 = fma(temp_337, temp_337, temp_340);
            // 0x000A48: 0x59A01F0000C70C11 Ffma
            temp_344 = fma(temp_342, temp_342, temp_343);
            // 0x000A50: 0x508000000057110D Mufu
            temp_345 = inversesqrt(temp_344);
            // 0x000A58: 0x5C68100000D73B3F Fmul
            temp_346 = temp_335 * temp_345;
            // 0x000A68: 0x5C68100000D70C0C Fmul
            temp_347 = temp_342 * temp_345;
            // 0x000A70: 0x5C68100000D73C0D Fmul
            temp_348 = temp_337 * temp_345;
            // 0x000A78: 0x5C69100001473F14 Fmul
            temp_349 = 0.0 - temp_329;
            temp_350 = temp_346 * temp_349;
            // 0x000A88: 0x508000000087113F Mufu
            temp_351 = sqrt(temp_344);
            // 0x000A90: 0x59A10A0001570D14 Ffma
            temp_352 = 0.0 - temp_333;
            temp_353 = fma(temp_348, temp_352, temp_350);
            // 0x000A98: 0xEF9400800287380D Ldc
            temp_354 = temp_306 + 40;
            temp_355 = uint(temp_354) >> 2;
            temp_356 = temp_355 >> 2;
            temp_357 = int(temp_355) & 3;
            temp_358 = fp_c8.data[int(temp_356)][temp_357];
            // 0x000AA8: 0x59A10A0000D70C14 Ffma
            temp_359 = 0.0 - temp_358;
            temp_360 = fma(temp_347, temp_359, temp_353);
            // 0x000AB0: 0xEF9500800387380C Ldc
            temp_361 = temp_306 + 56;
            temp_362 = uint(temp_361) >> 2;
            temp_363 = temp_362 >> 2;
            temp_364 = int(temp_362) & 3;
            temp_365 = fp_c8.data[int(temp_363)][temp_364];
            temp_366 = int(temp_362) + 1;
            temp_367 = uint(temp_366) >> 2;
            temp_368 = temp_366 & 3;
            temp_369 = fp_c8.data[int(temp_367)][temp_368];
            // 0x000AB8: 0x59A4068000C7140D Ffma
            temp_370 = fma(temp_360, temp_365, temp_369);
            temp_371 = clamp(temp_370, 0.0, 1.0);
            // 0x000AC8: 0x010404000007F014 Mov32i
            // 0x000AD0: 0x5C68100000D70D15 Fmul
            temp_372 = temp_371 * temp_371;
            // 0x000AD8: 0x33A00A4000070D0C Ffma
            temp_373 = fma(temp_371, -2.0, 3.0);
            // 0x000AE8: 0x5C68100000C71515 Fmul
            temp_374 = temp_372 * temp_373;
            // 0x000AF0: 0xEF9500800307380C Ldc
            temp_375 = temp_306 + 48;
            temp_376 = uint(temp_375) >> 2;
            temp_377 = temp_376 >> 2;
            temp_378 = int(temp_376) & 3;
            temp_379 = fp_c8.data[int(temp_377)][temp_378];
            temp_380 = int(temp_376) + 1;
            temp_381 = uint(temp_380) >> 2;
            temp_382 = temp_380 & 3;
            temp_383 = fp_c8.data[int(temp_381)][temp_382];
            // 0x000AF8: 0x59A4068003F70C3F Ffma
            temp_384 = fma(temp_379, temp_351, temp_383);
            temp_385 = clamp(temp_384, 0.0, 1.0);
            // 0x000B08: 0x33A00A4000073F14 Ffma
            temp_386 = fma(temp_385, -2.0, 3.0);
            // 0x000B10: 0x5C68100003F73F3F Fmul
            temp_387 = temp_385 * temp_385;
            // 0x000B18: 0x5C68100003F71414 Fmul
            temp_388 = temp_386 * temp_387;
            // 0x000B28: 0x5C68100001471515 Fmul
            temp_389 = temp_374 * temp_388;
            // 0x000B30: 0x39585042F0071014 Fadd
            temp_390 = abs(temp_339);
            temp_391 = temp_390 + -120.0;
            // 0x000B38: 0x1EABD4CCCCD71414 Fmul32i
            temp_392 = temp_391 * -0.0500000007;
            temp_393 = clamp(temp_392, 0.0, 1.0);
            // 0x000B48: 0x5C6810000157143F Fmul
            temp_394 = temp_393 * temp_389;
            // 0x000B50: 0x36247F9000171414 Xmad
            temp_395 = floatBitsToUint(temp_393) >> 16;
            temp_396 = int(temp_395) << 16;
            // 0x000B58: 0x5BB383800FF73F07 Fsetp
            temp_397 = temp_394 <= 0.0;
            // 0x000B68: 0x7A05083C0F00FF14 Hadd2
            temp_398 = uint(temp_396);
            temp_399 = temp_281;
            temp_400 = temp_282;
            temp_401 = temp_283;
            temp_402 = temp_284;
            temp_403 = temp_285;
            temp_404 = temp_286;
            if (temp_397)
            {
                temp_405 = unpackHalf2x16(uint(temp_396)).y;
                temp_406 = packHalf2x16(vec2(1.0, temp_405));
                temp_398 = temp_406;
            }
            // 0x000B70: 0x5D2103902FF71407 Hsetp2
            temp_407 = unpackHalf2x16(temp_398).x;
            temp_408 = temp_407 == 0.0;
            // 0x000B78: 0xF0F800000008000F Sync
            if (temp_408)
            {
                // 0x000B88: 0x5080000000470C0C Mufu
                temp_409 = 1.0 / temp_379;
                // 0x000B90: 0x5C69100000C70D0D Fmul
                temp_410 = 0.0 - temp_409;
                temp_411 = temp_383 * temp_410;
                // 0x000B98: 0x5C60138000D71010 Fmnmx
                temp_412 = min(temp_339, temp_411);
                // 0x000BA8: 0x5C61178001070D0D Fmnmx
                temp_413 = 0.0 - temp_411;
                temp_414 = max(temp_413, temp_412);
                // 0x000BB0: 0x59A01F0000D70D3E Ffma
                temp_415 = fma(temp_414, temp_414, temp_343);
                // 0x000BB8: 0x5080000000573E10 Mufu
                temp_416 = inversesqrt(temp_415);
                // 0x000BC8: 0x5080000000873E3E Mufu
                temp_417 = sqrt(temp_415);
                // 0x000BD0: 0x5C68100001073B3B Fmul
                temp_418 = temp_335 * temp_416;
                // 0x000BD8: 0x5C68100001073C3C Fmul
                temp_419 = temp_337 * temp_416;
                // 0x000BE8: 0x5C68100001070D0D Fmul
                temp_420 = temp_414 * temp_416;
                // 0x000BF0: 0x5C58100003B71910 Fadd
                temp_421 = temp_107 + temp_418;
                // 0x000BF8: 0x5C58100003C71214 Fadd
                temp_422 = temp_109 + temp_419;
                // 0x000C08: 0x5C58100000D7180C Fadd
                temp_423 = temp_111 + temp_420;
                // 0x000C10: 0x5C68100001071011 Fmul
                temp_424 = temp_421 * temp_421;
                // 0x000C18: 0x59A0088001471411 Ffma
                temp_425 = fma(temp_422, temp_422, temp_424);
                // 0x000C28: 0x59A0088000C70C15 Ffma
                temp_426 = fma(temp_423, temp_423, temp_425);
                // 0x000C30: 0x5080000000571511 Mufu
                temp_427 = inversesqrt(temp_426);
                // 0x000C38: 0x5C68100001171010 Fmul
                temp_428 = temp_421 * temp_427;
                // 0x000C48: 0x5C68100001171414 Fmul
                temp_429 = temp_422 * temp_427;
                // 0x000C50: 0x5C68100001170C0C Fmul
                temp_430 = temp_423 * temp_427;
                // 0x000C58: 0x5C68100001073B11 Fmul
                temp_431 = temp_418 * temp_428;
                // 0x000C68: 0x5C68100001070E15 Fmul
                temp_432 = temp_71 * temp_428;
                // 0x000C70: 0x5C68100003B70E3B Fmul
                temp_433 = temp_71 * temp_418;
                // 0x000C78: 0x59A0088001473C10 Ffma
                temp_434 = fma(temp_419, temp_429, temp_431);
                // 0x000C88: 0x59A00A8001470111 Ffma
                temp_435 = fma(temp_70, temp_429, temp_432);
                // 0x000C90: 0xEF94008000873815 Ldc
                temp_436 = temp_306 + 8;
                temp_437 = uint(temp_436) >> 2;
                temp_438 = temp_437 >> 2;
                temp_439 = int(temp_437) & 3;
                temp_440 = fp_c8.data[int(temp_438)][temp_439];
                // 0x000C98: 0x59A01D8003C70114 Ffma
                temp_441 = fma(temp_70, temp_419, temp_433);
                // 0x000CA8: 0x59A4080000C70D10 Ffma
                temp_442 = fma(temp_420, temp_430, temp_434);
                temp_443 = clamp(temp_442, 0.0, 1.0);
                // 0x000CB0: 0x59A4088000C71611 Ffma
                temp_444 = fma(temp_69, temp_430, temp_435);
                temp_445 = clamp(temp_444, 0.0, 1.0);
                // 0x000CB8: 0x59A00A0000D71614 Ffma
                temp_446 = fma(temp_69, temp_420, temp_441);
                // 0x000CC8: 0xEF9500800007380C Ldc
                temp_447 = uint(temp_306) >> 2;
                temp_448 = temp_447 >> 2;
                temp_449 = int(temp_447) & 3;
                temp_450 = fp_c8.data[int(temp_448)][temp_449];
                temp_451 = int(temp_447) + 1;
                temp_452 = uint(temp_451) >> 2;
                temp_453 = temp_451 & 3;
                temp_454 = fp_c8.data[int(temp_452)][temp_453];
                // 0x000CD0: 0x5C68100000C73F0C Fmul
                temp_455 = temp_394 * temp_450;
                // 0x000CD8: 0x5C68100000D73F0D Fmul
                temp_456 = temp_394 * temp_454;
                // 0x000CE8: 0x5C68100001573F3F Fmul
                temp_457 = temp_394 * temp_440;
                // 0x000CF0: 0xEF94008002C73815 Ldc
                temp_458 = temp_306 + 44;
                temp_459 = uint(temp_458) >> 2;
                temp_460 = temp_459 >> 2;
                temp_461 = int(temp_459) & 3;
                temp_462 = fp_c8.data[int(temp_460)][temp_461];
                // 0x000CF8: 0x5080000000471515 Mufu
                temp_463 = 1.0 / temp_462;
                // 0x000D08: 0x51A01F0400471515 Ffma
                temp_464 = fma(temp_463, temp_417, fp_c1.data[1].x);
                // 0x000D10: 0x5080000000471515 Mufu
                temp_465 = 1.0 / temp_464;
                // 0x000D18: 0x1E23FB333337153B Fmul32i
                temp_466 = temp_465 * 1.39999998;
                // 0x000D28: 0x5C68100003B73B3C Fmul
                temp_467 = temp_466 * temp_466;
                // 0x000D30: 0x59A2088001172A3B Ffma
                temp_468 = 0.0 - temp_445;
                temp_469 = fma(temp_154, temp_445, temp_468);
                // 0x000D38: 0x59A11E0003C7143C Ffma
                temp_470 = 0.0 - temp_467;
                temp_471 = fma(temp_446, temp_470, temp_467);
                // 0x000D48: 0x51A01D840017113B Ffma
                temp_472 = fma(temp_445, temp_469, fp_c1.data[0].y);
                // 0x000D50: 0x5C5C30000FF71411 Fadd
                temp_473 = temp_446 + -0.0;
                temp_474 = clamp(temp_473, 0.0, 1.0);
                // 0x000D58: 0x5080000000473B3B Mufu
                temp_475 = 1.0 / temp_472;
                // 0x000D68: 0x5C5C100003C71414 Fadd
                temp_476 = temp_446 + temp_471;
                temp_477 = clamp(temp_476, 0.0, 1.0);
                // 0x000D70: 0x59A1088001172B3C Ffma
                temp_478 = 0.0 - temp_474;
                temp_479 = fma(temp_166, temp_478, temp_474);
                // 0x000D78: 0x5C58100003C72B3C Fadd
                temp_480 = temp_166 + temp_479;
                // 0x000D88: 0x5C68100003B73A15 Fmul
                temp_481 = temp_147 * temp_475;
                // 0x000D90: 0x5080000000473C3C Mufu
                temp_482 = 1.0 / temp_480;
                // 0x000D98: 0x5C68100001571515 Fmul
                temp_483 = temp_481 * temp_481;
                // 0x000DA8: 0x5C68100003C7323E Fmul
                temp_484 = temp_195 * temp_482;
                // 0x000DB0: 0x5C68100003E7153E Fmul
                temp_485 = temp_483 * temp_484;
                // 0x000DB8: 0x01040DF760C7F015 Mov32i
                // 0x000DC8: 0x5C68100003E71111 Fmul
                temp_486 = temp_474 * temp_485;
                // 0x000DD0: 0x49A20A8400371015 Ffma
                temp_487 = fma(temp_443, fp_c1.data[0].w, -6.98316002);
                // 0x000DD8: 0x5C68100001571015 Fmul
                temp_488 = temp_443 * temp_487;
                // 0x000DE8: 0x5C9000800157003E Rro
                // 0x000DF0: 0x5080000000273E3B Mufu
                temp_489 = exp2(temp_488);
                // 0x000DF8: 0x59A11D8003B70910 Ffma
                temp_490 = 0.0 - temp_489;
                temp_491 = fma(temp_215, temp_490, temp_489);
                // 0x000E08: 0x59A11D8003B70815 Ffma
                temp_492 = 0.0 - temp_489;
                temp_493 = fma(temp_214, temp_492, temp_489);
                // 0x000E10: 0x59A11D8003B70A3B Ffma
                temp_494 = 0.0 - temp_489;
                temp_495 = fma(temp_213, temp_494, temp_489);
                // 0x000E18: 0x5C58100001070910 Fadd
                temp_496 = temp_215 + temp_491;
                // 0x000E28: 0x5C58100001570815 Fadd
                temp_497 = temp_214 + temp_493;
                // 0x000E30: 0x5C68100001070D10 Fmul
                temp_498 = temp_456 * temp_496;
                // 0x000E38: 0x5C68100001570C38 Fmul
                temp_499 = temp_455 * temp_497;
                // 0x000E48: 0x5C68100001470C15 Fmul
                temp_500 = temp_455 * temp_477;
                // 0x000E50: 0x5C68100001470D0C Fmul
                temp_501 = temp_456 * temp_477;
                // 0x000E58: 0x5C68100001473F14 Fmul
                temp_502 = temp_457 * temp_477;
                // 0x000E68: 0x5C68100001171010 Fmul
                temp_503 = temp_498 * temp_486;
                // 0x000E70: 0x5C68100001173838 Fmul
                temp_504 = temp_499 * temp_486;
                // 0x000E78: 0x49A00E040067151C Ffma
                temp_505 = fma(temp_500, fp_c1.data[1].z, temp_281);
                // 0x000E88: 0x49A00E8400670C1D Ffma
                temp_506 = fma(temp_501, fp_c1.data[1].z, temp_282);
                // 0x000E90: 0x49A00F040067141E Ffma
                temp_507 = fma(temp_502, fp_c1.data[1].z, temp_283);
                // 0x000E98: 0x49A00F840057101F Ffma
                temp_508 = fma(temp_503, fp_c1.data[1].y, temp_284);
                // 0x000EA8: 0x5C58100003B70A10 Fadd
                temp_509 = temp_213 + temp_495;
                // 0x000EB0: 0x49A00B8400573817 Ffma
                temp_510 = fma(temp_504, fp_c1.data[1].y, temp_285);
                // 0x000EB8: 0x5C68100001073F10 Fmul
                temp_511 = temp_457 * temp_509;
                // 0x000EC8: 0x5C68100001171011 Fmul
                temp_512 = temp_511 * temp_486;
                // 0x000ED0: 0x49A0140400571128 Ffma
                temp_513 = fma(temp_512, fp_c1.data[1].y, temp_286);
                // 0x000ED8: 0xF0F800000007000F Sync
                temp_399 = temp_505;
                temp_400 = temp_506;
                temp_401 = temp_507;
                temp_402 = temp_508;
                temp_403 = temp_510;
                temp_404 = temp_513;
            }
            // 0x000EE8: 0x1C00000000173D3D Iadd32i
            temp_514 = temp_296 + 1;
            // 0x000EF0: 0x5B6C038003473D07 Isetp
            temp_297 = uint(temp_514) >= floatBitsToUint(temp_194);
            // 0x000EF8: 0xE2400FFFAB08000F Bra
            temp_296 = temp_514;
            temp_281 = temp_399;
            temp_282 = temp_400;
            temp_283 = temp_401;
            temp_284 = temp_402;
            temp_285 = temp_403;
            temp_286 = temp_404;
            temp_287 = temp_399;
            temp_288 = temp_401;
            temp_289 = temp_403;
            temp_290 = temp_400;
            temp_291 = temp_402;
            temp_292 = temp_404;
        }
        while (!temp_297);
        // 0x000F08: 0xF0F800000007000F Sync
    }
    // 0x000F10: 0x5C62578000170E0C Fmnmx
    temp_515 = abs(temp_71);
    temp_516 = abs(temp_70);
    temp_517 = max(temp_515, temp_516);
    // 0x000F18: 0xE003FF87CFF7FF32 Ipa
    // 0x000F28: 0x38681040E0070334 Fmul
    temp_518 = temp_141 * 7.0;
    // 0x000F30: 0x5C62578001A7350D Fmnmx
    temp_519 = abs(temp_267);
    temp_520 = abs(temp_269);
    temp_521 = max(temp_519, temp_520);
    // 0x000F38: 0x010000000017F018 Mov32i
    // 0x000F48: 0x386810408007032B Fmul
    temp_522 = temp_141 * 4.0;
    // 0x000F50: 0x4C98079C02070037 Mov
    // 0x000F58: 0x5C60578000C7160C Fmnmx
    temp_523 = abs(temp_69);
    temp_524 = max(temp_523, temp_517);
    // 0x000F68: 0x5080000000470C0C Mufu
    temp_525 = 1.0 / temp_524;
    // 0x000F70: 0x5C60578000D71B0D Fmnmx
    temp_526 = abs(temp_271);
    temp_527 = max(temp_526, temp_521);
    // 0x000F78: 0x5080000000470D10 Mufu
    temp_528 = 1.0 / temp_527;
    // 0x000F88: 0x5C69100000C71616 Fmul
    temp_529 = 0.0 - temp_525;
    temp_530 = temp_69 * temp_529;
    // 0x000F90: 0x5C68100000C70E14 Fmul
    temp_531 = temp_71 * temp_525;
    // 0x000F98: 0x5080000000473232 Mufu
    // 0x000FA8: 0x5C68100000C70115 Fmul
    temp_532 = temp_70 * temp_525;
    // 0x000FB0: 0x5C68100001073519 Fmul
    temp_533 = temp_267 * temp_528;
    // 0x000FB8: 0xC0BA0163EFF7140C Tex
    temp_534 = textureLod(fp_t_tcb_16, vec3(temp_531, temp_532, temp_530), 0.0).xyz;
    temp_535 = temp_534.x;
    temp_536 = temp_534.y;
    temp_537 = temp_534.z;
    // 0x000FC8: 0x5C68100001071A1A Fmul
    temp_538 = temp_269 * temp_528;
    // 0x000FD0: 0x5C69100001071B1B Fmul
    temp_539 = 0.0 - temp_528;
    temp_540 = temp_271 * temp_539;
    // 0x000FD8: 0xE043FF910327FF10 Ipa
    temp_541 = in_attr9.x;
    // 0x000FE8: 0x5C9807800167002A Mov
    // 0x000FF0: 0xE043FF914327FF11 Ipa
    temp_542 = in_attr9.y;
    // 0x000FF8: 0x3859103F80070303 Fadd
    temp_543 = 0.0 - temp_141;
    temp_544 = temp_543 + 1.0;
    // 0x001008: 0xE043FF918327FF12 Ipa
    temp_545 = in_attr9.z;
    // 0x001010: 0xC1BA0143F3471818 Tex
    temp_546 = textureLod(fp_t_tcb_14, vec4(temp_533, temp_538, temp_540, float(1)), temp_518).xyz;
    temp_547 = temp_546.x;
    temp_548 = temp_546.y;
    temp_549 = temp_546.z;
    // 0x001018: 0xD9A2018332A7142A Texs
    temp_550 = textureLod(fp_t_tcb_18, vec3(temp_531, temp_532, temp_530), temp_522).xyz;
    temp_551 = temp_550.x;
    temp_552 = temp_550.y;
    temp_553 = temp_550.z;
    // 0x001028: 0xDEBA0000C3771010 TexB
    temp_554 = texture(fp_t_cb7_20, vec3(temp_541, temp_542, temp_545)).x;
    // 0x001030: 0x5C68100000370303 Fmul
    temp_555 = temp_544 * temp_544;
    // 0x001038: 0x010410676C97F035 Mov32i
    // 0x001048: 0x3859103F80070438 Fadd
    temp_556 = 0.0 - temp_160;
    temp_557 = temp_556 + 1.0;
    // 0x001050: 0x1E23E468DB970416 Fmul32i
    temp_558 = temp_160 * 0.193900004;
    // 0x001058: 0x0103E2CD9E87F036 Mov32i
    // 0x001068: 0x49A005980A171C0B Ffma
    temp_559 = fma(temp_287, fp_c6.data[40].y, temp_251);
    // 0x001070: 0x5C68100000370303 Fmul
    temp_560 = temp_555 * temp_555;
    // 0x001078: 0x49A01A8400B70435 Ffma
    temp_561 = fma(temp_160, fp_c1.data[2].w, 8.40400028);
    // 0x001088: 0x4C68101809073815 Fmul
    temp_562 = temp_557 * fp_c6.data[36].x;
    // 0x001090: 0xE04BFF904327FF12 Ipa
    temp_563 = in_attr8.y;
    temp_564 = clamp(temp_563, 0.0, 1.0);
    // 0x001098: 0x49A00B0400770314 Ffma
    temp_565 = fma(temp_560, fp_c1.data[1].w, temp_558);
    // 0x0010A8: 0x5080000000373811 Mufu
    temp_566 = log2(temp_557);
    // 0x0010B0: 0x51A01A8400C70435 Ffma
    temp_567 = fma(temp_160, temp_561, fp_c1.data[3].x);
    // 0x0010B8: 0x5080400000371516 Mufu
    temp_568 = abs(temp_562);
    temp_569 = log2(temp_568);
    // 0x0010C8: 0x49A21B0400E7031C Ffma
    temp_570 = fma(temp_560, fp_c1.data[3].z, -0.168799996);
    // 0x0010D0: 0x49A009980A171E13 Ffma
    temp_571 = fma(temp_288, fp_c6.data[40].y, temp_236);
    // 0x0010D8: 0x0103F0000007F01E Mov32i
    // 0x0010E8: 0x49A018180A171730 Ffma
    temp_572 = fma(temp_289, fp_c6.data[40].y, temp_278);
    // 0x0010F0: 0x088BF05D6397141B Fadd32i
    temp_573 = temp_565 + -0.522800028;
    // 0x0010F8: 0x51A01A8400D70435 Ffma
    temp_574 = fma(temp_160, temp_567, fp_c1.data[3].y);
    // 0x001108: 0x5C68100001C7031C Fmul
    temp_575 = temp_560 * temp_570;
    // 0x001110: 0x49A007980A171D0F Ffma
    temp_576 = fma(temp_290, fp_c6.data[40].y, temp_253);
    // 0x001118: 0x32A00F3F00070114 Ffma
    temp_577 = fma(temp_70, 0.5, 0.5);
    // 0x001128: 0x49A018980A171F31 Ffma
    temp_578 = fma(temp_291, fp_c6.data[40].y, temp_279);
    // 0x001130: 0x4C98079800870017 Mov
    // 0x001138: 0x5C68100001B70415 Fmul
    temp_579 = temp_160 * temp_573;
    // 0x001148: 0x4C68101809171616 Fmul
    temp_580 = temp_569 * fp_c6.data[36].y;
    // 0x001150: 0x5C60138001C73501 Fmnmx
    temp_581 = min(temp_574, temp_575);
    // 0x001158: 0x0104066978D7F01C Mov32i
    // 0x001168: 0x4C98079800A7001F Mov
    // 0x001170: 0x4C9807980097001E Mov
    // 0x001178: 0x4C68101808971104 Fmul
    temp_582 = temp_566 * fp_c6.data[34].y;
    // 0x001188: 0x49A017980A17282F Ffma
    temp_583 = fma(temp_292, fp_c6.data[40].y, temp_280);
    // 0x001190: 0x5C9000800167001D Rro
    // 0x001198: 0x49A20E040087031C Ffma
    temp_584 = fma(temp_560, fp_c1.data[2].x, -3.60299993);
    // 0x0011A8: 0x5084000000271D1D Mufu
    temp_585 = exp2(temp_580);
    temp_586 = clamp(temp_585, 0.0, 1.0);
    // 0x0011B0: 0x4C98079809570028 Mov
    // 0x0011B8: 0x4C59101800471711 Fadd
    temp_587 = 0.0 - fp_c6.data[2].x;
    temp_588 = temp_587 + fp_c6.data[1].x;
    // 0x0011C8: 0x4C59101800671F17 Fadd
    temp_589 = 0.0 - fp_c6.data[2].z;
    temp_590 = temp_589 + fp_c6.data[1].z;
    // 0x0011D0: 0x5C9000800047001B Rro
    // 0x0011D8: 0x4C59101800571E16 Fadd
    temp_591 = 0.0 - fp_c6.data[2].y;
    temp_592 = temp_591 + fp_c6.data[1].y;
    // 0x0011E8: 0x5084000000271B1B Mufu
    temp_593 = exp2(temp_582);
    temp_594 = clamp(temp_593, 0.0, 1.0);
    // 0x0011F0: 0x010404000007F01F Mov32i
    // 0x0011F8: 0x51A00E040097031E Ffma
    temp_595 = fma(temp_560, temp_584, fp_c1.data[2].y);
    // 0x001208: 0x4C5810140817281C Fadd
    temp_596 = fp_c6.data[37].y + fp_c5.data[32].y;
    // 0x001210: 0x51A00A1800871111 Ffma
    temp_597 = fma(temp_588, temp_577, fp_c6.data[2].x);
    // 0x001218: 0x51A00A1800971604 Ffma
    temp_598 = fma(temp_592, temp_577, fp_c6.data[2].y);
    // 0x001228: 0x33A00FC00007121F Ffma
    temp_599 = fma(temp_564, -2.0, 3.0);
    // 0x001230: 0x59A00A8001E70315 Ffma
    temp_600 = fma(temp_560, temp_595, temp_579);
    // 0x001238: 0x5C68100001271212 Fmul
    temp_601 = temp_564 * temp_564;
    // 0x001248: 0x5C68100001D71C1C Fmul
    temp_602 = temp_596 * temp_586;
    // 0x001250: 0x51A00A1800A71714 Ffma
    temp_603 = fma(temp_590, temp_577, fp_c6.data[2].z);
    // 0x001258: 0x386C104248070917 Fmul
    temp_604 = temp_215 * 50.0;
    temp_605 = clamp(temp_604, 0.0, 1.0);
    // 0x001268: 0x5C5C30000FF7011E Fadd
    temp_606 = temp_581 + -0.0;
    temp_607 = clamp(temp_606, 0.0, 1.0);
    // 0x001270: 0x4C5C100400A71515 Fadd
    temp_608 = temp_600 + fp_c1.data[2].z;
    temp_609 = clamp(temp_608, 0.0, 1.0);
    // 0x001278: 0x5C68100001F71201 Fmul
    temp_610 = temp_601 * temp_599;
    // 0x001288: 0x4C68101808C71C12 Fmul
    temp_611 = temp_602 * fp_c6.data[35].x;
    // 0x001290: 0x4C9807980867001D Mov
    // 0x001298: 0x4C68101808871B03 Fmul
    temp_612 = temp_594 * fp_c6.data[34].x;
    // 0x0012A8: 0x5C68100001E71717 Fmul
    temp_613 = temp_605 * temp_607;
    // 0x0012B0: 0x5C58300001E7151E Fadd
    temp_614 = 0.0 - temp_607;
    temp_615 = temp_609 + temp_614;
    // 0x0012B8: 0x4C68101808D71C16 Fmul
    temp_616 = temp_602 * fp_c6.data[35].y;
    // 0x0012C8: 0x49A1091408271215 Ffma
    temp_617 = 0.0 - fp_c5.data[32].z;
    temp_618 = fma(temp_611, temp_617, temp_611);
    // 0x0012D0: 0x4C68101808E71C1C Fmul
    temp_619 = temp_602 * fp_c6.data[35].z;
    // 0x0012D8: 0x51A00E9808670303 Ffma
    temp_620 = fma(temp_612, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x0012E8: 0x49A0181408271230 Ffma
    temp_621 = fma(temp_611, fp_c5.data[32].z, temp_572);
    // 0x0012F0: 0x59A00B8001E70812 Ffma
    temp_622 = fma(temp_214, temp_615, temp_613);
    // 0x0012F8: 0x59A00B8001E70908 Ffma
    temp_623 = fma(temp_215, temp_615, temp_613);
    // 0x001308: 0x5C58100001570B15 Fadd
    temp_624 = temp_559 + temp_618;
    // 0x001310: 0x4C6810180877250B Fmul
    temp_625 = temp_89 * fp_c6.data[33].w;
    // 0x001318: 0x49A0189408271631 Ffma
    temp_626 = fma(temp_616, fp_c5.data[32].z, temp_578);
    // 0x001328: 0x4C9807980B470009 Mov
    // 0x001330: 0x49A10B1408271616 Ffma
    temp_627 = 0.0 - fp_c5.data[32].z;
    temp_628 = fma(temp_616, temp_627, temp_616);
    // 0x001338: 0x49A0179408271C2F Ffma
    temp_629 = fma(temp_619, fp_c5.data[32].z, temp_583);
    // 0x001348: 0x49A10E1408271C1C Ffma
    temp_630 = 0.0 - fp_c5.data[32].z;
    temp_631 = fma(temp_619, temp_630, temp_619);
    // 0x001350: 0x59A00B8001E70A0A Ffma
    temp_632 = fma(temp_213, temp_615, temp_613);
    // 0x001358: 0x4C68101803770101 Fmul
    temp_633 = temp_610 * fp_c6.data[13].w;
    // 0x001368: 0xF0F0000034370000 Depbar
    // 0x001370: 0x51A204980B472727 Ffma
    temp_634 = 0.0 - fp_c6.data[45].x;
    temp_635 = fma(temp_93, fp_c6.data[45].x, temp_634);
    // 0x001378: 0x51A204980B470202 Ffma
    temp_636 = 0.0 - fp_c6.data[45].x;
    temp_637 = fma(temp_94, fp_c6.data[45].x, temp_636);
    // 0x001388: 0x51A204980B472626 Ffma
    temp_638 = 0.0 - fp_c6.data[45].x;
    temp_639 = fma(temp_92, fp_c6.data[45].x, temp_638);
    // 0x001390: 0x5C58100001670F0F Fadd
    temp_640 = temp_576 + temp_628;
    // 0x001398: 0x5C58100001C7131C Fadd
    temp_641 = temp_571 + temp_631;
    // 0x0013A8: 0xF0F0000034270000 Depbar
    // 0x0013B0: 0x49A0060400671111 Ffma
    temp_642 = fma(temp_597, fp_c1.data[1].z, temp_535);
    // 0x0013B8: 0x49A0068400670404 Ffma
    temp_643 = fma(temp_598, fp_c1.data[1].z, temp_536);
    // 0x0013C8: 0xE043FF900327FF0D Ipa
    temp_644 = in_attr8.x;
    // 0x0013D0: 0x49A007040067140E Ffma
    temp_645 = fma(temp_603, fp_c1.data[1].z, temp_537);
    // 0x0013D8: 0xE043FF8C8327FF32 Ipa
    temp_646 = in_attr4.z;
    // 0x0013E8: 0x59A2088000372020 Ffma
    temp_647 = 0.0 - temp_642;
    temp_648 = fma(temp_86, temp_620, temp_647);
    // 0x0013F0: 0x59A2020000372121 Ffma
    temp_649 = 0.0 - temp_643;
    temp_650 = fma(temp_87, temp_620, temp_649);
    // 0x0013F8: 0xF0F0000034170000 Depbar
    // 0x001408: 0x49A0151808571809 Ffma
    temp_651 = fma(temp_547, fp_c6.data[33].y, temp_551);
    // 0x001410: 0x59A2070000372403 Ffma
    temp_652 = 0.0 - temp_645;
    temp_653 = fma(temp_88, temp_620, temp_652);
    // 0x001418: 0x59A0088000B72020 Ffma
    temp_654 = fma(temp_648, temp_625, temp_642);
    // 0x001428: 0x59A0020000B72121 Ffma
    temp_655 = fma(temp_650, temp_625, temp_643);
    // 0x001430: 0x49A015980857192B Ffma
    temp_656 = fma(temp_548, fp_c6.data[33].y, temp_552);
    // 0x001438: 0x49A0199808571A0C Ffma
    temp_657 = fma(temp_549, fp_c6.data[33].y, temp_553);
    // 0x001448: 0x59A0180000971209 Ffma
    temp_658 = fma(temp_622, temp_651, temp_621);
    // 0x001450: 0x59A0070000B70303 Ffma
    temp_659 = fma(temp_653, temp_625, temp_645);
    // 0x001458: 0x5C58100001572020 Fadd
    temp_660 = temp_654 + temp_624;
    // 0x001468: 0x5C58100000F7210F Fadd
    temp_661 = temp_655 + temp_640;
    // 0x001470: 0x59A0188002B70831 Ffma
    temp_662 = fma(temp_623, temp_656, temp_626);
    // 0x001478: 0x59A0178000C70A0A Ffma
    temp_663 = fma(temp_632, temp_657, temp_629);
    // 0x001488: 0x4C98079802870008 Mov
    // 0x001490: 0x5C58100001C70303 Fadd
    temp_664 = temp_659 + temp_641;
    // 0x001498: 0x59A1100002072920 Ffma
    temp_665 = 0.0 - temp_660;
    temp_666 = fma(temp_7, temp_665, temp_660);
    // 0x0014A8: 0x59A1078000F72904 Ffma
    temp_667 = 0.0 - temp_661;
    temp_668 = fma(temp_7, temp_667, temp_661);
    // 0x0014B0: 0x4C9807980297000E Mov
    // 0x0014B8: 0x51A0041802872626 Ffma
    temp_669 = fma(temp_639, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0014C8: 0x59A1018000372903 Ffma
    temp_670 = 0.0 - temp_664;
    temp_671 = fma(temp_7, temp_670, temp_664);
    // 0x0014D0: 0x59A0048002072209 Ffma
    temp_672 = fma(temp_10, temp_666, temp_658);
    // 0x0014D8: 0x59A0188000472304 Ffma
    temp_673 = fma(temp_11, temp_668, temp_662);
    // 0x0014E8: 0x51A0071802972727 Ffma
    temp_674 = fma(temp_635, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0014F0: 0x59A0050000370003 Ffma
    temp_675 = fma(temp_12, temp_671, temp_663);
    // 0x0014F8: 0x5C68100000972C2C Fmul
    temp_676 = temp_273 * temp_672;
    // 0x001508: 0x5C68100000472D2D Fmul
    temp_677 = temp_275 * temp_673;
    // 0x001510: 0x49A506980BC7100D Ffma
    temp_678 = 0.0 - fp_c6.data[47].x;
    temp_679 = fma(temp_554, temp_678, temp_644);
    temp_680 = clamp(temp_679, 0.0, 1.0);
    // 0x001518: 0x4C98079802A70004 Mov
    // 0x001528: 0x5080000000370D0D Mufu
    temp_681 = log2(temp_680);
    // 0x001530: 0x5C68100000372E2E Fmul
    temp_682 = temp_277 * temp_675;
    // 0x001538: 0x49A0161406C70505 Ffma
    temp_683 = fma(temp_205, fp_c5.data[27].x, temp_676);
    // 0x001548: 0x49A0169406C70606 Ffma
    temp_684 = fma(temp_189, fp_c5.data[27].x, temp_677);
    // 0x001550: 0x49A2009803570109 Ffma
    temp_685 = 0.0 - temp_633;
    temp_686 = fma(temp_633, fp_c6.data[13].y, temp_685);
    // 0x001558: 0x51A0021802A70202 Ffma
    temp_687 = fma(temp_637, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001568: 0x49A0171406C70707 Ffma
    temp_688 = fma(temp_204, fp_c5.data[27].x, temp_682);
    // 0x001570: 0x5C58300002670500 Fadd
    temp_689 = 0.0 - temp_669;
    temp_690 = temp_683 + temp_689;
    // 0x001578: 0x5C58300002770604 Fadd
    temp_691 = 0.0 - temp_674;
    temp_692 = temp_684 + temp_691;
    // 0x001588: 0x4C68101803170D08 Fmul
    temp_693 = temp_681 * fp_c6.data[12].y;
    // 0x001590: 0x49A013180BF70003 Ffma
    temp_694 = fma(temp_690, fp_c6.data[47].w, temp_669);
    // 0x001598: 0x5C58300000270700 Fadd
    temp_695 = 0.0 - temp_687;
    temp_696 = temp_688 + temp_695;
    // 0x0015A8: 0x49A013980BF70404 Ffma
    temp_697 = fma(temp_692, fp_c6.data[47].w, temp_674);
    // 0x0015B0: 0x5C9000800087000A Rro
    // 0x0015B8: 0x49A2009803470108 Ffma
    temp_698 = 0.0 - temp_633;
    temp_699 = fma(temp_633, fp_c6.data[13].x, temp_698);
    // 0x0015C8: 0x5080000000270A0A Mufu
    temp_700 = exp2(temp_693);
    // 0x0015D0: 0x49A001180BF70000 Ffma
    temp_701 = fma(temp_696, fp_c6.data[47].w, temp_687);
    // 0x0015D8: 0x5C60178000372603 Fmnmx
    temp_702 = max(temp_669, temp_694);
    // 0x0015E8: 0x49A2009803670101 Ffma
    temp_703 = 0.0 - temp_633;
    temp_704 = fma(temp_633, fp_c6.data[13].z, temp_703);
    // 0x0015F0: 0x5C60178000472704 Fmnmx
    temp_705 = max(temp_674, temp_697);
    // 0x0015F8: 0x5C60178000070200 Fmnmx
    temp_706 = max(temp_687, temp_701);
    // 0x001608: 0x59A0018000870308 Ffma
    temp_707 = fma(temp_702, temp_699, temp_702);
    // 0x001610: 0x59A0020000970409 Ffma
    temp_708 = fma(temp_705, temp_686, temp_705);
    // 0x001618: 0x4C58100C03873204 Fadd
    temp_709 = temp_646 + fp_c3.data[14].x;
    // 0x001628: 0x59A0000000170002 Ffma
    temp_710 = fma(temp_706, temp_704, temp_706);
    // 0x001630: 0x4C68101802B70A03 Fmul
    temp_711 = temp_700 * fp_c6.data[10].w;
    // 0x001638: 0x5C59100000870500 Fadd
    temp_712 = 0.0 - temp_683;
    temp_713 = temp_712 + temp_707;
    // 0x001648: 0x5C59100000970601 Fadd
    temp_714 = 0.0 - temp_684;
    temp_715 = temp_714 + temp_708;
    // 0x001650: 0x49A37F8C03C70404 Ffma
    temp_716 = 0.0 - fp_c3.data[15].x;
    temp_717 = fma(temp_709, temp_716, -0.0);
    // 0x001658: 0x5C59100000270702 Fadd
    temp_718 = 0.0 - temp_688;
    temp_719 = temp_718 + temp_710;
    // 0x001668: 0x59A0028000370000 Ffma
    temp_720 = fma(temp_713, temp_711, temp_683);
    // 0x001670: 0x59A0030000370101 Ffma
    temp_721 = fma(temp_715, temp_711, temp_684);
    // 0x001678: 0x0103E8000007F005 Mov32i
    // 0x001688: 0x5C9807800FF70006 Mov
    // 0x001690: 0x59A0038000370202 Ffma
    temp_722 = fma(temp_719, temp_711, temp_688);
    // 0x001698: 0x0103F8000007F003 Mov32i
    // 0x0016A8: 0x0103F8000007F007 Mov32i
    // 0x0016B0: 0xE30000000007000F Exit
    out_attr0.x = temp_720;
    out_attr0.y = temp_721;
    out_attr0.z = temp_722;
    out_attr0.w = 1.0;
    out_attr1.x = temp_717;
    out_attr1.y = 0.25;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
