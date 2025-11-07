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
    precise float temp_2;
    precise float temp_3;
    precise vec2 temp_4;
    precise float temp_5;
    precise float temp_6;
    precise vec3 temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise vec3 temp_11;
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
    precise float temp_85;
    precise float temp_86;
    precise vec4 temp_87;
    precise float temp_88;
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
    uint temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    int temp_204;
    precise float temp_205;
    int temp_206;
    uint temp_207;
    uint temp_208;
    int temp_209;
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
    bool temp_255;
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
    int temp_293;
    bool temp_294;
    int temp_295;
    int temp_296;
    int temp_297;
    int temp_298;
    int temp_299;
    uint temp_300;
    uint temp_301;
    int temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    int temp_307;
    int temp_308;
    uint temp_309;
    uint temp_310;
    int temp_311;
    precise float temp_312;
    int temp_313;
    uint temp_314;
    int temp_315;
    precise float temp_316;
    int temp_317;
    uint temp_318;
    uint temp_319;
    int temp_320;
    precise float temp_321;
    int temp_322;
    uint temp_323;
    int temp_324;
    precise float temp_325;
    int temp_326;
    uint temp_327;
    uint temp_328;
    int temp_329;
    precise float temp_330;
    int temp_331;
    uint temp_332;
    int temp_333;
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
    uint temp_356;
    uint temp_357;
    int temp_358;
    precise float temp_359;
    precise float temp_360;
    precise float temp_361;
    int temp_362;
    uint temp_363;
    uint temp_364;
    int temp_365;
    precise float temp_366;
    int temp_367;
    uint temp_368;
    int temp_369;
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
    int temp_381;
    uint temp_382;
    int temp_383;
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
    precise float temp_397;
    bool temp_398;
    uint temp_399;
    precise float temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    precise float temp_405;
    precise float temp_406;
    uint temp_407;
    precise float temp_408;
    bool temp_409;
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
    precise float temp_447;
    precise float temp_448;
    precise float temp_449;
    uint temp_450;
    uint temp_451;
    int temp_452;
    precise float temp_453;
    int temp_454;
    uint temp_455;
    int temp_456;
    precise float temp_457;
    precise float temp_458;
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
    precise vec3 temp_551;
    precise float temp_552;
    precise float temp_553;
    precise float temp_554;
    precise vec3 temp_555;
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
    // 0x000008: 0x0103F0000007F02C Mov32i
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0x5080000000471010 Mufu
    // 0x000028: 0xE043FF8E0107FF0A Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E4107FF0B Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xE043FF8EC107FF02 Ipa
    temp_2 = in_attr6.w;
    // 0x000048: 0xE043FF8E8107FF1F Ipa
    temp_3 = in_attr6.z;
    // 0x000050: 0xD830026FF0B70A00 Texs
    temp_4 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_5 = temp_4.x;
    temp_6 = temp_4.y;
    // 0x000058: 0xD8240360D0B70A24 Texs
    temp_7 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_8 = temp_7.x;
    temp_9 = temp_7.y;
    temp_10 = temp_7.z;
    // 0x000068: 0xD822024020271F1E Texs
    temp_11 = texture(fp_t_tcb_24, vec2(temp_3, temp_2)).xyz;
    temp_12 = temp_11.x;
    temp_13 = temp_11.y;
    temp_14 = temp_11.z;
    // 0x000070: 0xE043FF8A0107FF03 Ipa
    temp_15 = in_attr2.x;
    // 0x000078: 0xE043FF8A4107FF04 Ipa
    temp_16 = in_attr2.y;
    // 0x000088: 0xE043FF8A8107FF05 Ipa
    temp_17 = in_attr2.z;
    // 0x000090: 0xE043FF890107FF07 Ipa
    temp_18 = in_attr1.x;
    // 0x000098: 0xE043FF894107FF08 Ipa
    temp_19 = in_attr1.y;
    // 0x0000A8: 0xE043FF880107FF0C Ipa
    temp_20 = in_attr0.x;
    // 0x0000B0: 0xE043FF898107FF09 Ipa
    temp_21 = in_attr1.z;
    // 0x0000B8: 0xE043FF884107FF0F Ipa
    temp_22 = in_attr0.y;
    // 0x0000C8: 0xE043FF888107FF11 Ipa
    temp_23 = in_attr0.z;
    // 0x0000D0: 0x5C68100000370306 Fmul
    temp_24 = temp_15 * temp_15;
    // 0x0000D8: 0x5C6810000077070A Fmul
    temp_25 = temp_18 * temp_18;
    // 0x0000E8: 0x5C68100000C70C0E Fmul
    temp_26 = temp_20 * temp_20;
    // 0x0000F0: 0x59A0030000470406 Ffma
    temp_27 = fma(temp_16, temp_16, temp_24);
    // 0x0000F8: 0x59A005000087080A Ffma
    temp_28 = fma(temp_19, temp_19, temp_25);
    // 0x000108: 0x59A0070000F70F12 Ffma
    temp_29 = fma(temp_22, temp_22, temp_26);
    // 0x000110: 0x59A0030000570506 Ffma
    temp_30 = fma(temp_17, temp_17, temp_27);
    // 0x000118: 0x5080000000570606 Mufu
    temp_31 = inversesqrt(temp_30);
    // 0x000128: 0x59A005000097090A Ffma
    temp_32 = fma(temp_21, temp_21, temp_28);
    // 0x000130: 0x5080000000570A0A Mufu
    temp_33 = inversesqrt(temp_32);
    // 0x000138: 0x59A0090001171112 Ffma
    temp_34 = fma(temp_23, temp_23, temp_29);
    // 0x000148: 0x5080000000571212 Mufu
    temp_35 = inversesqrt(temp_34);
    // 0x000150: 0x5C6810000067050B Fmul
    temp_36 = temp_17 * temp_31;
    // 0x000158: 0x5C68100000670303 Fmul
    temp_37 = temp_15 * temp_31;
    // 0x000168: 0x5C68100000670404 Fmul
    temp_38 = temp_16 * temp_31;
    // 0x000170: 0x5C68100000A7070E Fmul
    temp_39 = temp_18 * temp_33;
    // 0x000178: 0x5C68100000A70807 Fmul
    temp_40 = temp_19 * temp_33;
    // 0x000188: 0x5C68100000A70909 Fmul
    temp_41 = temp_21 * temp_33;
    // 0x000190: 0x5C68100001270C0C Fmul
    temp_42 = temp_20 * temp_35;
    // 0x000198: 0x5C68100001270F0F Fmul
    temp_43 = temp_22 * temp_35;
    // 0x0001A8: 0x5C68100001271108 Fmul
    temp_44 = temp_23 * temp_35;
    // 0x0001B0: 0xF0F0000034270000 Depbar
    // 0x0001B8: 0x5C68100000170105 Fmul
    temp_45 = temp_6 * temp_6;
    // 0x0001C8: 0x5C68100000170303 Fmul
    temp_46 = temp_37 * temp_6;
    // 0x0001D0: 0x5C68100000170B0B Fmul
    temp_47 = temp_36 * temp_6;
    // 0x0001D8: 0x59A0028000070005 Ffma
    temp_48 = fma(temp_5, temp_5, temp_45);
    // 0x0001E8: 0x59A0018000E70003 Ffma
    temp_49 = fma(temp_5, temp_39, temp_46);
    // 0x0001F0: 0x59A0058000970009 Ffma
    temp_50 = fma(temp_5, temp_41, temp_47);
    // 0x0001F8: 0x385D103F80070506 Fadd
    temp_51 = 0.0 - temp_48;
    temp_52 = temp_51 + 1.0;
    temp_53 = clamp(temp_52, 0.0, 1.0);
    // 0x000208: 0x5C68100000170405 Fmul
    temp_54 = temp_38 * temp_6;
    // 0x000210: 0x5080000000870606 Mufu
    temp_55 = sqrt(temp_53);
    // 0x000218: 0x59A0028000770005 Ffma
    temp_56 = fma(temp_5, temp_40, temp_54);
    // 0x000228: 0xE003FF874FF7FF07 Ipa
    temp_57 = gl_FragCoord.y;
    temp_58 = support_buffer.render_scale[0];
    temp_59 = temp_57 / temp_58;
    // 0x000230: 0x59A0018000670C0C Ffma
    temp_60 = fma(temp_42, temp_55, temp_49);
    // 0x000238: 0x59A0028000670F05 Ffma
    temp_61 = fma(temp_43, temp_55, temp_56);
    // 0x000248: 0x59A0048000670808 Ffma
    temp_62 = fma(temp_44, temp_55, temp_50);
    // 0x000250: 0xE003FF870FF7FF06 Ipa
    temp_63 = gl_FragCoord.x;
    temp_64 = support_buffer.render_scale[0];
    temp_65 = temp_63 / temp_64;
    // 0x000258: 0x5C68100000C70C00 Fmul
    temp_66 = temp_60 * temp_60;
    // 0x000268: 0x59A0000000570501 Ffma
    temp_67 = fma(temp_61, temp_61, temp_66);
    // 0x000270: 0x59A0008000870800 Ffma
    temp_68 = fma(temp_62, temp_62, temp_67);
    // 0x000278: 0x5080000000570003 Mufu
    temp_69 = inversesqrt(temp_68);
    // 0x000288: 0x5C68100000370812 Fmul
    temp_70 = temp_62 * temp_69;
    // 0x000290: 0x5C68100000370501 Fmul
    temp_71 = temp_61 * temp_69;
    // 0x000298: 0x5C68100000370C0C Fmul
    temp_72 = temp_60 * temp_69;
    // 0x0002A8: 0x4C68100C00671204 Fmul
    temp_73 = temp_70 * fp_c3.data[1].z;
    // 0x0002B0: 0x4C68100C00271203 Fmul
    temp_74 = temp_70 * fp_c3.data[0].z;
    // 0x0002B8: 0x49A0020C00570105 Ffma
    temp_75 = fma(temp_71, fp_c3.data[1].y, temp_73);
    // 0x0002C8: 0x49A0018C00170103 Ffma
    temp_76 = fma(temp_71, fp_c3.data[0].y, temp_74);
    // 0x0002D0: 0x49A0028C00470C05 Ffma
    temp_77 = fma(temp_72, fp_c3.data[1].x, temp_75);
    // 0x0002D8: 0x49A0018C00070C03 Ffma
    temp_78 = fma(temp_72, fp_c3.data[0].x, temp_76);
    // 0x0002E8: 0x4C69100C03E70500 Fmul
    temp_79 = 0.0 - fp_c3.data[15].z;
    temp_80 = temp_77 * temp_79;
    // 0x0002F0: 0x4C68100C04A70605 Fmul
    temp_81 = temp_65 * fp_c3.data[18].z;
    // 0x0002F8: 0x4C68100C04B70706 Fmul
    temp_82 = temp_59 * fp_c3.data[18].w;
    // 0x000308: 0x4C68101808B70303 Fmul
    temp_83 = temp_78 * fp_c6.data[34].w;
    // 0x000310: 0x4C68101808B70000 Fmul
    temp_84 = temp_80 * fp_c6.data[34].w;
    // 0x000318: 0x49A0028400270303 Ffma
    temp_85 = fma(temp_83, fp_c1.data[0].z, temp_81);
    // 0x000328: 0x49A003040027001A Ffma
    temp_86 = fma(temp_84, fp_c1.data[0].z, temp_82);
    // 0x000330: 0xD8320221A1A70320 Texs
    temp_87 = texture(fp_t_tcb_22, vec2(temp_85, temp_86)).xyzw;
    temp_88 = temp_87.x;
    temp_89 = temp_87.y;
    temp_90 = temp_87.z;
    temp_91 = temp_87.w;
    // 0x000338: 0xD82202000067051C Texs
    temp_92 = texture(fp_t_tcb_20, vec2(temp_81, temp_82)).xyz;
    temp_93 = temp_92.x;
    temp_94 = temp_92.y;
    temp_95 = temp_92.z;
    // 0x000348: 0xE043FF8B0107FF28 Ipa
    temp_96 = in_attr3.x;
    // 0x000350: 0xE043FF8B4107FF23 Ipa
    temp_97 = in_attr3.y;
    // 0x000358: 0xE043FF8B8107FF22 Ipa
    temp_98 = in_attr3.z;
    // 0x000368: 0xF0F0000034370000 Depbar
    // 0x000370: 0x4C6810180A072424 Fmul
    temp_99 = temp_8 * fp_c6.data[40].x;
    // 0x000378: 0xE2900000BF800000 Ssy
    // 0x000388: 0x386810418007050E Fmul
    temp_100 = temp_81 * 16.0;
    // 0x000390: 0x385D103F80070D0D Fadd
    temp_101 = 0.0 - temp_10;
    temp_102 = temp_101 + 1.0;
    temp_103 = clamp(temp_102, 0.0, 1.0);
    // 0x000398: 0x5CA8148000E70A0E F2f
    temp_104 = floor(temp_100);
    // 0x0003A8: 0x5C9807800FF70019 Mov
    // 0x0003B0: 0x49A206980AE70D17 Ffma
    temp_105 = 0.0 - temp_103;
    temp_106 = fma(temp_103, fp_c6.data[43].z, temp_105);
    // 0x0003B8: 0x3858103F80071717 Fadd
    temp_107 = temp_106 + 1.0;
    // 0x0003C8: 0x5C68100002872804 Fmul
    temp_108 = temp_96 * temp_96;
    // 0x0003D0: 0x59A0020002372304 Ffma
    temp_109 = fma(temp_97, temp_97, temp_108);
    // 0x0003D8: 0x59A0020002272204 Ffma
    temp_110 = fma(temp_98, temp_98, temp_109);
    // 0x0003E8: 0x5080000000570409 Mufu
    temp_111 = inversesqrt(temp_110);
    // 0x0003F0: 0x5C69100000972828 Fmul
    temp_112 = 0.0 - temp_111;
    temp_113 = temp_96 * temp_112;
    // 0x0003F8: 0x5C69100000972323 Fmul
    temp_114 = 0.0 - temp_111;
    temp_115 = temp_97 * temp_114;
    // 0x000408: 0x5C69100000972222 Fmul
    temp_116 = 0.0 - temp_111;
    temp_117 = temp_98 * temp_116;
    // 0x000410: 0x4C58301805C72803 Fadd
    temp_118 = 0.0 - fp_c6.data[23].x;
    temp_119 = temp_113 + temp_118;
    // 0x000418: 0x4C58301805D72307 Fadd
    temp_120 = 0.0 - fp_c6.data[23].y;
    temp_121 = temp_115 + temp_120;
    // 0x000428: 0x4C58301805E72208 Fadd
    temp_122 = 0.0 - fp_c6.data[23].z;
    temp_123 = temp_117 + temp_122;
    // 0x000430: 0xF0F0000034270000 Depbar
    // 0x000438: 0x59A40B8001770227 Ffma
    temp_124 = fma(temp_14, temp_107, temp_107);
    temp_125 = clamp(temp_124, 0.0, 1.0);
    // 0x000448: 0x5C68100000370309 Fmul
    temp_126 = temp_119 * temp_119;
    // 0x000450: 0x59A0048000770709 Ffma
    temp_127 = fma(temp_121, temp_121, temp_126);
    // 0x000458: 0x59A0048000870809 Ffma
    temp_128 = fma(temp_123, temp_123, temp_127);
    // 0x000468: 0x5080000000570909 Mufu
    temp_129 = inversesqrt(temp_128);
    // 0x000470: 0x5C68100000970303 Fmul
    temp_130 = temp_119 * temp_129;
    // 0x000478: 0x5C68100000970704 Fmul
    temp_131 = temp_121 * temp_129;
    // 0x000488: 0x5C6810000097080B Fmul
    temp_132 = temp_123 * temp_129;
    // 0x000490: 0x4C69101805C70307 Fmul
    temp_133 = 0.0 - fp_c6.data[23].x;
    temp_134 = temp_130 * temp_133;
    // 0x000498: 0x5C6810000037280A Fmul
    temp_135 = temp_113 * temp_130;
    // 0x0004A8: 0x5C68100000370C03 Fmul
    temp_136 = temp_72 * temp_130;
    // 0x0004B0: 0x49A1039805D70408 Ffma
    temp_137 = 0.0 - fp_c6.data[23].y;
    temp_138 = fma(temp_131, temp_137, temp_134);
    // 0x0004B8: 0x59A0050000472311 Ffma
    temp_139 = fma(temp_115, temp_131, temp_135);
    // 0x0004C8: 0x01040DF760C7F00A Mov32i
    // 0x0004D0: 0x59A0018000470104 Ffma
    temp_140 = fma(temp_71, temp_131, temp_136);
    // 0x0004D8: 0x386013BF80072403 Fmnmx
    temp_141 = min(temp_99, 1.0);
    // 0x0004E8: 0x49A5041805E70B08 Ffma
    temp_142 = 0.0 - fp_c6.data[23].z;
    temp_143 = fma(temp_132, temp_142, temp_138);
    temp_144 = clamp(temp_143, 0.0, 1.0);
    // 0x0004F0: 0x59A4088000B72211 Ffma
    temp_145 = fma(temp_117, temp_132, temp_139);
    temp_146 = clamp(temp_145, 0.0, 1.0);
    // 0x0004F8: 0x59A4020000B7120B Ffma
    temp_147 = fma(temp_70, temp_132, temp_140);
    temp_148 = clamp(temp_147, 0.0, 1.0);
    // 0x000508: 0x4C69101805C70C04 Fmul
    temp_149 = 0.0 - fp_c6.data[23].x;
    temp_150 = temp_72 * temp_149;
    // 0x000510: 0x49A2050400370807 Ffma
    temp_151 = fma(temp_144, fp_c1.data[0].w, -6.98316002);
    // 0x000518: 0x49A205040037110A Ffma
    temp_152 = fma(temp_146, fp_c1.data[0].w, -6.98316002);
    // 0x000528: 0x4C60178400070303 Fmnmx
    temp_153 = max(temp_141, fp_c1.data[0].x);
    // 0x000530: 0x49A1021805D70109 Ffma
    temp_154 = 0.0 - fp_c6.data[23].y;
    temp_155 = fma(temp_71, temp_154, temp_150);
    // 0x000538: 0x5C68100000770808 Fmul
    temp_156 = temp_144 * temp_151;
    // 0x000548: 0x5C68100000A71107 Fmul
    temp_157 = temp_146 * temp_152;
    // 0x000550: 0x5C68100002870C0A Fmul
    temp_158 = temp_72 * temp_113;
    // 0x000558: 0x51A401840007032E Ffma
    temp_159 = fma(temp_153, temp_153, fp_c1.data[0].x);
    temp_160 = clamp(temp_159, 0.0, 1.0);
    // 0x000568: 0x32A0163F0007032C Ffma
    temp_161 = fma(temp_153, 0.5, 0.5);
    // 0x000570: 0x49A5049805E71209 Ffma
    temp_162 = 0.0 - fp_c6.data[23].z;
    temp_163 = fma(temp_70, temp_162, temp_155);
    temp_164 = clamp(temp_163, 0.0, 1.0);
    // 0x000578: 0x5C90008000870014 Rro
    // 0x000588: 0x59A005000237010F Ffma
    temp_165 = fma(temp_71, temp_115, temp_158);
    // 0x000590: 0x5080000000271414 Mufu
    temp_166 = exp2(temp_156);
    // 0x000598: 0x5C68100002E72E2D Fmul
    temp_167 = temp_160 * temp_160;
    // 0x0005A8: 0x5C68120002C72C2C Fmul
    temp_168 = temp_161 * 0.5;
    temp_169 = temp_168 * temp_161;
    // 0x0005B0: 0x4C58301407B70208 Fadd
    temp_170 = 0.0 - fp_c5.data[30].w;
    temp_171 = temp_14 + temp_170;
    // 0x0005B8: 0x5C90008000770018 Rro
    // 0x0005C8: 0x4C58301407B71F07 Fadd
    temp_172 = 0.0 - fp_c5.data[30].w;
    temp_173 = temp_13 + temp_172;
    // 0x0005D0: 0x5080000000271818 Mufu
    temp_174 = exp2(temp_157);
    // 0x0005D8: 0x59A4078002271204 Ffma
    temp_175 = fma(temp_70, temp_117, temp_165);
    temp_176 = clamp(temp_175, 0.0, 1.0);
    // 0x0005E8: 0x386810411007060F Fmul
    temp_177 = temp_82 * 9.0;
    // 0x0005F0: 0x59A2058002D70B0A Ffma
    temp_178 = 0.0 - temp_148;
    temp_179 = fma(temp_148, temp_167, temp_178);
    // 0x0005F8: 0x5CA8148000F70A0F F2f
    temp_180 = floor(temp_177);
    // 0x000608: 0x59A1048002C70905 Ffma
    temp_181 = 0.0 - temp_169;
    temp_182 = fma(temp_164, temp_181, temp_164);
    // 0x000610: 0x4C68101801470932 Fmul
    temp_183 = temp_164 * fp_c6.data[5].x;
    // 0x000618: 0x5C68100000470C2F Fmul
    temp_184 = temp_72 * temp_176;
    // 0x000628: 0x51A0050400170B0A Ffma
    temp_185 = fma(temp_148, temp_179, fp_c1.data[0].y);
    // 0x000630: 0x59A1020000472C0B Ffma
    temp_186 = 0.0 - temp_176;
    temp_187 = fma(temp_169, temp_186, temp_176);
    // 0x000638: 0x5080000000470A11 Mufu
    temp_188 = 1.0 / temp_185;
    // 0x000648: 0x5C58100000572C06 Fadd
    temp_189 = temp_169 + temp_182;
    // 0x000650: 0x1E23EA2F98373232 Fmul32i
    temp_190 = temp_183 * 0.318309873;
    // 0x000658: 0x5080000000470613 Mufu
    temp_191 = 1.0 / temp_189;
    // 0x000668: 0x32A2144000072F2F Ffma
    temp_192 = 0.0 - temp_113;
    temp_193 = fma(temp_184, 2.0, temp_192);
    // 0x000670: 0x32A0074180070F2B Ffma
    temp_194 = fma(temp_180, 16.0, temp_104);
    // 0x000678: 0x5C58100000B72C0B Fadd
    temp_195 = temp_169 + temp_187;
    // 0x000688: 0x5CB0118002B70A2B F2i
    temp_196 = trunc(temp_194);
    temp_197 = max(temp_196, 0.0);
    temp_198 = uint(temp_197);
    // 0x000690: 0x4C98079808A7000F Mov
    // 0x000698: 0x5080000000470B0B Mufu
    temp_199 = 1.0 / temp_195;
    // 0x0006A8: 0x4C58301407B71E06 Fadd
    temp_200 = 0.0 - fp_c5.data[30].w;
    temp_201 = temp_12 + temp_200;
    // 0x0006B0: 0x5C68100001172E05 Fmul
    temp_202 = temp_160 * temp_188;
    // 0x0006B8: 0x5C68100000570505 Fmul
    temp_203 = temp_202 * temp_202;
    // 0x0006C8: 0x3848000000872B29 Shl
    temp_204 = int(temp_198) << 8;
    // 0x0006D0: 0x3868103F00070B2A Fmul
    temp_205 = temp_199 * 0.5;
    // 0x0006D8: 0xEF94008200472929 Ldc
    temp_206 = temp_204 + 0x2004;
    temp_207 = uint(temp_206) >> 2;
    temp_208 = temp_207 >> 2;
    temp_209 = int(temp_207) & 3;
    temp_210 = fp_c8.data[int(temp_208)][temp_209];
    // 0x0006E8: 0x4C68101808770F0B Fmul
    temp_211 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x0006F0: 0x5C68100001372A0E Fmul
    temp_212 = temp_205 * temp_191;
    // 0x0006F8: 0x5C68100000E7050A Fmul
    temp_213 = temp_203 * temp_212;
    // 0x000708: 0x51A0031407B72505 Ffma
    temp_214 = fma(temp_9, temp_201, fp_c5.data[30].w);
    // 0x000710: 0x51A0039407B72506 Ffma
    temp_215 = fma(temp_9, temp_173, fp_c5.data[30].w);
    // 0x000718: 0x4C6810180157090E Fmul
    temp_216 = temp_164 * fp_c6.data[5].y;
    // 0x000728: 0x51A0041407B72507 Ffma
    temp_217 = fma(temp_9, temp_171, fp_c5.data[30].w);
    // 0x000730: 0x5C68100000A7090A Fmul
    temp_218 = temp_164 * temp_213;
    // 0x000738: 0x59A10C0001870513 Ffma
    temp_219 = 0.0 - temp_174;
    temp_220 = fma(temp_214, temp_219, temp_174);
    // 0x000748: 0x59A10A000147060F Ffma
    temp_221 = 0.0 - temp_166;
    temp_222 = fma(temp_215, temp_221, temp_166);
    // 0x000750: 0x1E23EA2F98370E08 Fmul32i
    temp_223 = temp_216 * 0.318309873;
    // 0x000758: 0x59A10A000147050E Ffma
    temp_224 = 0.0 - temp_166;
    temp_225 = fma(temp_214, temp_224, temp_166);
    // 0x000768: 0x59A10C0001870611 Ffma
    temp_226 = 0.0 - temp_174;
    temp_227 = fma(temp_215, temp_226, temp_174);
    // 0x000770: 0x59A10A0001470714 Ffma
    temp_228 = 0.0 - temp_166;
    temp_229 = fma(temp_217, temp_228, temp_166);
    // 0x000778: 0x59A10C0001870718 Ffma
    temp_230 = 0.0 - temp_174;
    temp_231 = fma(temp_217, temp_230, temp_174);
    // 0x000788: 0x5C58100000F7060F Fadd
    temp_232 = temp_215 + temp_222;
    // 0x000790: 0x4C68101801670909 Fmul
    temp_233 = temp_164 * fp_c6.data[5].z;
    // 0x000798: 0x5C58100000E7050E Fadd
    temp_234 = temp_214 + temp_225;
    // 0x0007A8: 0x5C58100001170616 Fadd
    temp_235 = temp_215 + temp_227;
    // 0x0007B0: 0x5C58100001470714 Fadd
    temp_236 = temp_217 + temp_229;
    // 0x0007B8: 0x5C58100001370513 Fadd
    temp_237 = temp_214 + temp_220;
    // 0x0007C8: 0x4C68101406270F0F Fmul
    temp_238 = temp_232 * fp_c5.data[24].z;
    // 0x0007D0: 0x5C58100001870718 Fadd
    temp_239 = temp_217 + temp_231;
    // 0x0007D8: 0x4C68101406270E0E Fmul
    temp_240 = temp_234 * fp_c5.data[24].z;
    // 0x0007E8: 0x4C68101406271616 Fmul
    temp_241 = temp_235 * fp_c5.data[24].z;
    // 0x0007F0: 0x4C68101406271414 Fmul
    temp_242 = temp_236 * fp_c5.data[24].z;
    // 0x0007F8: 0x1E23EA2F98370909 Fmul32i
    temp_243 = temp_233 * 0.318309873;
    // 0x000808: 0x4C68101406271313 Fmul
    temp_244 = temp_237 * fp_c5.data[24].z;
    // 0x000810: 0x4C68101406271818 Fmul
    temp_245 = temp_239 * fp_c5.data[24].z;
    // 0x000818: 0x59A1040001670808 Ffma
    temp_246 = 0.0 - temp_241;
    temp_247 = fma(temp_223, temp_246, temp_223);
    // 0x000828: 0x49A206980AD70D16 Ffma
    temp_248 = 0.0 - temp_103;
    temp_249 = fma(temp_103, fp_c6.data[43].y, temp_248);
    // 0x000830: 0x59A1190001373232 Ffma
    temp_250 = 0.0 - temp_244;
    temp_251 = fma(temp_190, temp_250, temp_190);
    // 0x000838: 0x59A1048001870909 Ffma
    temp_252 = 0.0 - temp_245;
    temp_253 = fma(temp_243, temp_252, temp_243);
    // 0x000848: 0x5C9807800FF70013 Mov
    // 0x000850: 0x5C9807800FF70018 Mov
    // 0x000858: 0x3858103F80071616 Fadd
    temp_254 = temp_249 + 1.0;
    // 0x000868: 0x5B6603800FF72907 Isetp
    temp_255 = floatBitsToUint(temp_210) <= 0u;
    // 0x000870: 0x59A40B0001671F26 Ffma
    temp_256 = fma(temp_13, temp_254, temp_254);
    temp_257 = clamp(temp_256, 0.0, 1.0);
    // 0x000878: 0xF0F0000034170000 Depbar
    // 0x000888: 0x51A0059801572115 Ffma
    temp_258 = fma(temp_89, temp_211, fp_c6.data[5].y);
    // 0x000890: 0x51A0059801472011 Ffma
    temp_259 = fma(temp_88, temp_211, fp_c6.data[5].x);
    // 0x000898: 0x51A0059801671A0B Ffma
    temp_260 = fma(temp_90, temp_211, fp_c6.data[5].z);
    // 0x0008A8: 0x5C68100001570F0F Fmul
    temp_261 = temp_238 * temp_258;
    // 0x0008B0: 0x49A206980AC70D15 Ffma
    temp_262 = 0.0 - temp_103;
    temp_263 = fma(temp_103, fp_c6.data[43].x, temp_262);
    // 0x0008B8: 0x5C68100001170E11 Fmul
    temp_264 = temp_240 * temp_259;
    // 0x0008C8: 0x5C68100000B7140B Fmul
    temp_265 = temp_242 * temp_260;
    // 0x0008D0: 0x5C6810000047010E Fmul
    temp_266 = temp_71 * temp_176;
    // 0x0008D8: 0x5C6810000047120D Fmul
    temp_267 = temp_70 * temp_176;
    // 0x0008E8: 0x5C68100000F70A14 Fmul
    temp_268 = temp_218 * temp_261;
    // 0x0008F0: 0x3858103F80071515 Fadd
    temp_269 = temp_263 + 1.0;
    // 0x0008F8: 0x5C68100001170A11 Fmul
    temp_270 = temp_218 * temp_264;
    // 0x000908: 0x5C68100000B70A36 Fmul
    temp_271 = temp_218 * temp_265;
    // 0x000910: 0x5C9807800FF7000A Mov
    // 0x000918: 0x5C9807800FF7000B Mov
    // 0x000928: 0x5C9807800FF7000F Mov
    // 0x000930: 0x59A40A8001571E24 Ffma
    temp_272 = fma(temp_12, temp_269, temp_269);
    temp_273 = clamp(temp_272, 0.0, 1.0);
    // 0x000938: 0x1E23E22F98371115 Fmul32i
    temp_274 = temp_270 * 0.159154937;
    // 0x000948: 0x1E23E22F98371411 Fmul32i
    temp_275 = temp_268 * 0.159154937;
    // 0x000950: 0xEF5400000047FF15 Stl
    local_memory[1] = floatBitsToUint(temp_274);
    // 0x000958: 0x32A211C000070E0E Ffma
    temp_276 = 0.0 - temp_115;
    temp_277 = fma(temp_266, 2.0, temp_276);
    // 0x000968: 0xEF5400000007FF11 Stl
    local_memory[0] = floatBitsToUint(temp_275);
    // 0x000970: 0x32A2114000070D0D Ffma
    temp_278 = 0.0 - temp_117;
    temp_279 = fma(temp_267, 2.0, temp_278);
    // 0x000978: 0x1E23E22F98373636 Fmul32i
    temp_280 = temp_271 * 0.159154937;
    // 0x000988: 0xF0F800000000000F Sync
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
    if (!temp_255)
    {
        // 0x000990: 0x5C9807800FF70030 Mov
        temp_293 = 0;
        do
        {
            // 0x000998: 0x5C18020003072B17 Iscadd
            temp_295 = int(temp_198) << 4;
            temp_296 = temp_295 + temp_293;
            // 0x0009A8: 0xE003FF87CFF7FF33 Ipa
            // 0x0009B0: 0x1C00000000173030 Iadd32i
            temp_297 = temp_293 + 1;
            // 0x0009B8: 0xE003FF87CFF7FF35 Ipa
            // 0x0009C8: 0x3848000000471717 Shl
            temp_298 = temp_296 << 4;
            // 0x0009D0: 0xE003FF87CFF7FF34 Ipa
            // 0x0009D8: 0x5B6C03800297300F Isetp
            temp_294 = uint(temp_297) >= floatBitsToUint(temp_210);
            // 0x0009E8: 0xE290000057000000 Ssy
            // 0x0009F0: 0xEF94008200071717 Ldc
            temp_299 = temp_298 + 0x2000;
            temp_300 = uint(temp_299) >> 2;
            temp_301 = temp_300 >> 2;
            temp_302 = int(temp_300) & 3;
            temp_303 = fp_c8.data[int(temp_301)][temp_302];
            // 0x0009F8: 0x5080000000473333 Mufu
            // 0x000A08: 0x5080000000473535 Mufu
            // 0x000A10: 0x5080000000473434 Mufu
            // 0x000A18: 0xE043FF8D0337FF33 Ipa
            temp_304 = in_attr5.x;
            // 0x000A28: 0xE043FF8D8357FF35 Ipa
            temp_305 = in_attr5.z;
            // 0x000A30: 0xE043FF8D4347FF34 Ipa
            temp_306 = in_attr5.y;
            // 0x000A38: 0x3848000000671731 Shl
            temp_307 = floatBitsToInt(temp_303) << 6;
            // 0x000A48: 0xEF95008001073110 Ldc
            temp_308 = temp_307 + 16;
            temp_309 = uint(temp_308) >> 2;
            temp_310 = temp_309 >> 2;
            temp_311 = int(temp_309) & 3;
            temp_312 = fp_c8.data[int(temp_310)][temp_311];
            temp_313 = int(temp_309) + 1;
            temp_314 = uint(temp_313) >> 2;
            temp_315 = temp_313 & 3;
            temp_316 = fp_c8.data[int(temp_314)][temp_315];
            // 0x000A50: 0xEF95008001873114 Ldc
            temp_317 = temp_307 + 24;
            temp_318 = uint(temp_317) >> 2;
            temp_319 = temp_318 >> 2;
            temp_320 = int(temp_318) & 3;
            temp_321 = fp_c8.data[int(temp_319)][temp_320];
            temp_322 = int(temp_318) + 1;
            temp_323 = uint(temp_322) >> 2;
            temp_324 = temp_322 & 3;
            temp_325 = fp_c8.data[int(temp_323)][temp_324];
            // 0x000A58: 0xEF95008002073116 Ldc
            temp_326 = temp_307 + 32;
            temp_327 = uint(temp_326) >> 2;
            temp_328 = temp_327 >> 2;
            temp_329 = int(temp_327) & 3;
            temp_330 = fp_c8.data[int(temp_328)][temp_329];
            temp_331 = int(temp_327) + 1;
            temp_332 = uint(temp_331) >> 2;
            temp_333 = temp_331 & 3;
            temp_334 = fp_c8.data[int(temp_332)][temp_333];
            // 0x000A68: 0x5C58300003371033 Fadd
            temp_335 = 0.0 - temp_304;
            temp_336 = temp_312 + temp_335;
            // 0x000A70: 0x5C58300003471134 Fadd
            temp_337 = 0.0 - temp_306;
            temp_338 = temp_316 + temp_337;
            // 0x000A78: 0x5C58300003571414 Fadd
            temp_339 = 0.0 - temp_305;
            temp_340 = temp_321 + temp_339;
            // 0x000A88: 0x5C68100003373311 Fmul
            temp_341 = temp_336 * temp_336;
            // 0x000A90: 0x59A10A0001471510 Ffma
            temp_342 = 0.0 - temp_340;
            temp_343 = fma(temp_325, temp_342, temp_340);
            // 0x000A98: 0x59A0088003473415 Ffma
            temp_344 = fma(temp_338, temp_338, temp_341);
            // 0x000AA8: 0x59A00A8001071035 Ffma
            temp_345 = fma(temp_343, temp_343, temp_344);
            // 0x000AB0: 0x5080000000573511 Mufu
            temp_346 = inversesqrt(temp_345);
            // 0x000AB8: 0x5080000000873535 Mufu
            temp_347 = sqrt(temp_345);
            // 0x000AC8: 0x5C68100001173337 Fmul
            temp_348 = temp_336 * temp_346;
            // 0x000AD0: 0x5C68100001171010 Fmul
            temp_349 = temp_343 * temp_346;
            // 0x000AD8: 0x5C68100001173411 Fmul
            temp_350 = temp_338 * temp_346;
            // 0x000AE8: 0x5C69100001673716 Fmul
            temp_351 = 0.0 - temp_330;
            temp_352 = temp_348 * temp_351;
            // 0x000AF0: 0x59A10B0001771111 Ffma
            temp_353 = 0.0 - temp_334;
            temp_354 = fma(temp_350, temp_353, temp_352);
            // 0x000AF8: 0xEF94008002873116 Ldc
            temp_355 = temp_307 + 40;
            temp_356 = uint(temp_355) >> 2;
            temp_357 = temp_356 >> 2;
            temp_358 = int(temp_356) & 3;
            temp_359 = fp_c8.data[int(temp_357)][temp_358];
            // 0x000B08: 0x010404000007F017 Mov32i
            // 0x000B10: 0x59A1088001671016 Ffma
            temp_360 = 0.0 - temp_359;
            temp_361 = fma(temp_349, temp_360, temp_354);
            // 0x000B18: 0xEF95008003873110 Ldc
            temp_362 = temp_307 + 56;
            temp_363 = uint(temp_362) >> 2;
            temp_364 = temp_363 >> 2;
            temp_365 = int(temp_363) & 3;
            temp_366 = fp_c8.data[int(temp_364)][temp_365];
            temp_367 = int(temp_363) + 1;
            temp_368 = uint(temp_367) >> 2;
            temp_369 = temp_367 & 3;
            temp_370 = fp_c8.data[int(temp_368)][temp_369];
            // 0x000B28: 0x59A4088001071610 Ffma
            temp_371 = fma(temp_361, temp_366, temp_370);
            temp_372 = clamp(temp_371, 0.0, 1.0);
            // 0x000B30: 0x5C68100001071016 Fmul
            temp_373 = temp_372 * temp_372;
            // 0x000B38: 0x33A00BC000071010 Ffma
            temp_374 = fma(temp_372, -2.0, 3.0);
            // 0x000B48: 0x5C68100001071616 Fmul
            temp_375 = temp_373 * temp_374;
            // 0x000B50: 0xEF95008003073110 Ldc
            temp_376 = temp_307 + 48;
            temp_377 = uint(temp_376) >> 2;
            temp_378 = temp_377 >> 2;
            temp_379 = int(temp_377) & 3;
            temp_380 = fp_c8.data[int(temp_378)][temp_379];
            temp_381 = int(temp_377) + 1;
            temp_382 = uint(temp_381) >> 2;
            temp_383 = temp_381 & 3;
            temp_384 = fp_c8.data[int(temp_382)][temp_383];
            // 0x000B58: 0x59A4088003571035 Ffma
            temp_385 = fma(temp_380, temp_347, temp_384);
            temp_386 = clamp(temp_385, 0.0, 1.0);
            // 0x000B68: 0x33A00BC000073517 Ffma
            temp_387 = fma(temp_386, -2.0, 3.0);
            // 0x000B70: 0x5C68100003573535 Fmul
            temp_388 = temp_386 * temp_386;
            // 0x000B78: 0x5C68100001773517 Fmul
            temp_389 = temp_388 * temp_387;
            // 0x000B88: 0x39585042F0071435 Fadd
            temp_390 = abs(temp_340);
            temp_391 = temp_390 + -120.0;
            // 0x000B90: 0x5C68100001771616 Fmul
            temp_392 = temp_375 * temp_389;
            // 0x000B98: 0x1EABD4CCCCD73535 Fmul32i
            temp_393 = temp_391 * -0.0500000007;
            temp_394 = clamp(temp_393, 0.0, 1.0);
            // 0x000BA8: 0x36247F9000171717 Xmad
            temp_395 = floatBitsToUint(temp_389) >> 16;
            temp_396 = int(temp_395) << 16;
            // 0x000BB0: 0x5C68100003571616 Fmul
            temp_397 = temp_392 * temp_394;
            // 0x000BB8: 0x5BB383800FF71607 Fsetp
            temp_398 = temp_397 <= 0.0;
            // 0x000BC8: 0x7A05083C0F00FF17 Hadd2
            temp_293 = temp_297;
            temp_399 = uint(temp_396);
            temp_400 = temp_281;
            temp_401 = temp_282;
            temp_402 = temp_283;
            temp_403 = temp_284;
            temp_404 = temp_285;
            temp_405 = temp_286;
            if (temp_398)
            {
                temp_406 = unpackHalf2x16(uint(temp_396)).y;
                temp_407 = packHalf2x16(vec2(1.0, temp_406));
                temp_399 = temp_407;
            }
            // 0x000BD0: 0x5D2103902FF71707 Hsetp2
            temp_408 = unpackHalf2x16(temp_399).x;
            temp_409 = temp_408 == 0.0;
            // 0x000BD8: 0xF0F800000008000F Sync
            if (temp_409)
            {
                // 0x000BE8: 0x5080000000471010 Mufu
                temp_410 = 1.0 / temp_380;
                // 0x000BF0: 0x5C69100001071110 Fmul
                temp_411 = 0.0 - temp_410;
                temp_412 = temp_384 * temp_411;
                // 0x000BF8: 0x5C60138001071414 Fmnmx
                temp_413 = min(temp_340, temp_412);
                // 0x000C08: 0x5C61178001471014 Fmnmx
                temp_414 = 0.0 - temp_412;
                temp_415 = max(temp_414, temp_413);
                // 0x000C10: 0x59A00A8001471415 Ffma
                temp_416 = fma(temp_415, temp_415, temp_344);
                // 0x000C18: 0x5080000000571511 Mufu
                temp_417 = inversesqrt(temp_416);
                // 0x000C28: 0x5080000000871515 Mufu
                temp_418 = sqrt(temp_416);
                // 0x000C30: 0x5C68100001173333 Fmul
                temp_419 = temp_336 * temp_417;
                // 0x000C38: 0x5C68100001173434 Fmul
                temp_420 = temp_338 * temp_417;
                // 0x000C48: 0x5C68100001171414 Fmul
                temp_421 = temp_415 * temp_417;
                // 0x000C50: 0x5C58100003372810 Fadd
                temp_422 = temp_113 + temp_419;
                // 0x000C58: 0x5C58100003472311 Fadd
                temp_423 = temp_115 + temp_420;
                // 0x000C68: 0x5C58100001472217 Fadd
                temp_424 = temp_117 + temp_421;
                // 0x000C70: 0x5C68100001071035 Fmul
                temp_425 = temp_422 * temp_422;
                // 0x000C78: 0x59A01A8001171135 Ffma
                temp_426 = fma(temp_423, temp_423, temp_425);
                // 0x000C88: 0x59A01A8001771735 Ffma
                temp_427 = fma(temp_424, temp_424, temp_426);
                // 0x000C90: 0x5080000000573535 Mufu
                temp_428 = inversesqrt(temp_427);
                // 0x000C98: 0x5C68100003571010 Fmul
                temp_429 = temp_422 * temp_428;
                // 0x000CA8: 0x5C68100003571717 Fmul
                temp_430 = temp_424 * temp_428;
                // 0x000CB0: 0x5C68100003571111 Fmul
                temp_431 = temp_423 * temp_428;
                // 0x000CB8: 0x5C68100003370C35 Fmul
                temp_432 = temp_72 * temp_419;
                // 0x000CC8: 0x5C68100001073337 Fmul
                temp_433 = temp_419 * temp_429;
                // 0x000CD0: 0x5C68100001070C10 Fmul
                temp_434 = temp_72 * temp_429;
                // 0x000CD8: 0x59A01A8003470133 Ffma
                temp_435 = fma(temp_71, temp_420, temp_432);
                // 0x000CE8: 0xEF94008002C73135 Ldc
                temp_436 = temp_307 + 44;
                temp_437 = uint(temp_436) >> 2;
                temp_438 = temp_437 >> 2;
                temp_439 = int(temp_437) & 3;
                temp_440 = fp_c8.data[int(temp_438)][temp_439];
                // 0x000CF0: 0x59A01B8001173434 Ffma
                temp_441 = fma(temp_420, temp_431, temp_433);
                // 0x000CF8: 0x59A0198001471233 Ffma
                temp_442 = fma(temp_70, temp_421, temp_435);
                // 0x000D08: 0x59A41A0001771434 Ffma
                temp_443 = fma(temp_421, temp_430, temp_441);
                temp_444 = clamp(temp_443, 0.0, 1.0);
                // 0x000D10: 0x5C5C30000FF73314 Fadd
                temp_445 = temp_442 + -0.0;
                temp_446 = clamp(temp_445, 0.0, 1.0);
                // 0x000D18: 0x5080000000473535 Mufu
                temp_447 = 1.0 / temp_440;
                // 0x000D28: 0x51A00A8400473515 Ffma
                temp_448 = fma(temp_447, temp_418, fp_c1.data[1].x);
                // 0x000D30: 0x59A0080001170135 Ffma
                temp_449 = fma(temp_71, temp_431, temp_434);
                // 0x000D38: 0xEF95008000073110 Ldc
                temp_450 = uint(temp_307) >> 2;
                temp_451 = temp_450 >> 2;
                temp_452 = int(temp_450) & 3;
                temp_453 = fp_c8.data[int(temp_451)][temp_452];
                temp_454 = int(temp_450) + 1;
                temp_455 = uint(temp_454) >> 2;
                temp_456 = temp_454 & 3;
                temp_457 = fp_c8.data[int(temp_455)][temp_456];
                // 0x000D48: 0x59A41A8001771235 Ffma
                temp_458 = fma(temp_70, temp_430, temp_449);
                temp_459 = clamp(temp_458, 0.0, 1.0);
                // 0x000D50: 0x5080000000471515 Mufu
                temp_460 = 1.0 / temp_448;
                // 0x000D58: 0x01040DF760C7F017 Mov32i
                // 0x000D68: 0xEF94008000873131 Ldc
                temp_461 = temp_307 + 8;
                temp_462 = uint(temp_461) >> 2;
                temp_463 = temp_462 >> 2;
                temp_464 = int(temp_462) & 3;
                temp_465 = fp_c8.data[int(temp_463)][temp_464];
                // 0x000D70: 0x49A20B8400373417 Ffma
                temp_466 = fma(temp_444, fp_c1.data[0].w, -6.98316002);
                // 0x000D78: 0x1E23FB3333371515 Fmul32i
                temp_467 = temp_460 * 1.39999998;
                // 0x000D88: 0x5C68100001773417 Fmul
                temp_468 = temp_444 * temp_466;
                // 0x000D90: 0x59A21A8003572D34 Ffma
                temp_469 = 0.0 - temp_459;
                temp_470 = fma(temp_167, temp_459, temp_469);
                // 0x000D98: 0x5C68100001571515 Fmul
                temp_471 = temp_467 * temp_467;
                // 0x000DA8: 0x5C90008001770017 Rro
                // 0x000DB0: 0x51A01A0400173535 Ffma
                temp_472 = fma(temp_459, temp_470, fp_c1.data[0].y);
                // 0x000DB8: 0x5080000000271717 Mufu
                temp_473 = exp2(temp_468);
                // 0x000DC8: 0x59A10A0001472C34 Ffma
                temp_474 = 0.0 - temp_446;
                temp_475 = fma(temp_169, temp_474, temp_446);
                // 0x000DD0: 0x5080000000473535 Mufu
                temp_476 = 1.0 / temp_472;
                // 0x000DD8: 0x59A10A8001573315 Ffma
                temp_477 = 0.0 - temp_471;
                temp_478 = fma(temp_442, temp_477, temp_471);
                // 0x000DE8: 0x5C58100003472C34 Fadd
                temp_479 = temp_169 + temp_475;
                // 0x000DF0: 0x5C5C100001573315 Fadd
                temp_480 = temp_442 + temp_478;
                temp_481 = clamp(temp_480, 0.0, 1.0);
                // 0x000DF8: 0x5080000000473434 Mufu
                temp_482 = 1.0 / temp_479;
                // 0x000E08: 0x59A10B8001770533 Ffma
                temp_483 = 0.0 - temp_473;
                temp_484 = fma(temp_214, temp_483, temp_473);
                // 0x000E10: 0x5C68100003572E35 Fmul
                temp_485 = temp_160 * temp_476;
                // 0x000E18: 0x5C58100003370533 Fadd
                temp_486 = temp_214 + temp_484;
                // 0x000E28: 0x5C68100001071610 Fmul
                temp_487 = temp_397 * temp_453;
                // 0x000E30: 0x5C68100001171611 Fmul
                temp_488 = temp_397 * temp_457;
                // 0x000E38: 0x5C68100003573535 Fmul
                temp_489 = temp_485 * temp_485;
                // 0x000E48: 0x5C68100003472A34 Fmul
                temp_490 = temp_205 * temp_482;
                // 0x000E50: 0x4C68101406273333 Fmul
                temp_491 = temp_486 * fp_c5.data[24].z;
                // 0x000E58: 0x5C68100003171631 Fmul
                temp_492 = temp_397 * temp_465;
                // 0x000E68: 0x59A10B8001770616 Ffma
                temp_493 = 0.0 - temp_473;
                temp_494 = fma(temp_215, temp_493, temp_473);
                // 0x000E70: 0x59A10B8001770717 Ffma
                temp_495 = 0.0 - temp_473;
                temp_496 = fma(temp_217, temp_495, temp_473);
                // 0x000E78: 0x5C68100003473534 Fmul
                temp_497 = temp_489 * temp_490;
                // 0x000E88: 0x5C68100001073333 Fmul
                temp_498 = temp_491 * temp_487;
                // 0x000E90: 0x5C68100001571010 Fmul
                temp_499 = temp_487 * temp_481;
                // 0x000E98: 0x5C58100001670616 Fadd
                temp_500 = temp_215 + temp_494;
                // 0x000EA8: 0x5C58100001770717 Fadd
                temp_501 = temp_217 + temp_496;
                // 0x000EB0: 0x5C68100003471434 Fmul
                temp_502 = temp_446 * temp_497;
                // 0x000EB8: 0x49A007840067100F Ffma
                temp_503 = fma(temp_499, fp_c1.data[1].z, temp_281);
                // 0x000EC8: 0x4C68101406271616 Fmul
                temp_504 = temp_500 * fp_c5.data[24].z;
                // 0x000ED0: 0x4C68101406271717 Fmul
                temp_505 = temp_501 * fp_c5.data[24].z;
                // 0x000ED8: 0x5C68100003473333 Fmul
                temp_506 = temp_498 * temp_502;
                // 0x000EE8: 0x5C68100001171616 Fmul
                temp_507 = temp_504 * temp_488;
                // 0x000EF0: 0x5C68100003171717 Fmul
                temp_508 = temp_505 * temp_492;
                // 0x000EF8: 0x5C68100001571111 Fmul
                temp_509 = temp_488 * temp_481;
                // 0x000F08: 0x5C68100001573115 Fmul
                temp_510 = temp_492 * temp_481;
                // 0x000F10: 0x49A005040057330A Ffma
                temp_511 = fma(temp_506, fp_c1.data[1].y, temp_282);
                // 0x000F18: 0x5C68100003471616 Fmul
                temp_512 = temp_507 * temp_502;
                // 0x000F28: 0x5C68100003471717 Fmul
                temp_513 = temp_508 * temp_502;
                // 0x000F30: 0x49A0098400671113 Ffma
                temp_514 = fma(temp_509, fp_c1.data[1].z, temp_283);
                // 0x000F38: 0x49A00C0400671518 Ffma
                temp_515 = fma(temp_510, fp_c1.data[1].z, temp_284);
                // 0x000F48: 0x49A005840057160B Ffma
                temp_516 = fma(temp_512, fp_c1.data[1].y, temp_285);
                // 0x000F50: 0x49A00C8400571719 Ffma
                temp_517 = fma(temp_513, fp_c1.data[1].y, temp_286);
                // 0x000F58: 0xF0F800000007000F Sync
                temp_400 = temp_503;
                temp_401 = temp_511;
                temp_402 = temp_514;
                temp_403 = temp_515;
                temp_404 = temp_516;
                temp_405 = temp_517;
            }
            // 0x000F68: 0xE2400FFFA289000F Bra
            temp_281 = temp_400;
            temp_282 = temp_401;
            temp_283 = temp_402;
            temp_284 = temp_403;
            temp_285 = temp_404;
            temp_286 = temp_405;
            temp_287 = temp_402;
            temp_288 = temp_403;
            temp_289 = temp_400;
            temp_290 = temp_405;
            temp_291 = temp_401;
            temp_292 = temp_404;
        }
        while (!temp_294);
        // 0x000F70: 0xF0F800000007000F Sync
    }
    // 0x000F78: 0x5C62578000170C10 Fmnmx
    temp_518 = abs(temp_72);
    temp_519 = abs(temp_71);
    temp_520 = max(temp_518, temp_519);
    // 0x000F88: 0xE003FF87CFF7FF28 Ipa
    // 0x000F90: 0x5C62578000E72F14 Fmnmx
    temp_521 = abs(temp_193);
    temp_522 = abs(temp_277);
    temp_523 = max(temp_521, temp_522);
    // 0x000F98: 0xEF4410000047FF34 Ldl
    temp_524 = uintBitsToFloat(local_memory[1]);
    // 0x000FA8: 0x5C60578001071210 Fmnmx
    temp_525 = abs(temp_70);
    temp_526 = max(temp_525, temp_520);
    // 0x000FB0: 0xEF4410000007FF31 Ldl
    temp_527 = uintBitsToFloat(local_memory[0]);
    // 0x000FB8: 0x38681040E0070329 Fmul
    temp_528 = temp_153 * 7.0;
    // 0x000FC8: 0x5080000000471033 Mufu
    temp_529 = 1.0 / temp_526;
    // 0x000FD0: 0x5C60578001470D14 Fmnmx
    temp_530 = abs(temp_279);
    temp_531 = max(temp_530, temp_523);
    // 0x000FD8: 0x3868104080070323 Fmul
    temp_532 = temp_153 * 4.0;
    // 0x000FE8: 0x5080000000471414 Mufu
    temp_533 = 1.0 / temp_531;
    // 0x000FF0: 0x4C98079C0207002B Mov
    // 0x000FF8: 0x5C69100003371212 Fmul
    temp_534 = 0.0 - temp_529;
    temp_535 = temp_70 * temp_534;
    // 0x001008: 0x5C68100003370C10 Fmul
    temp_536 = temp_72 * temp_529;
    // 0x001010: 0x5080000000472828 Mufu
    // 0x001018: 0x5C68100003370111 Fmul
    temp_537 = temp_71 * temp_529;
    // 0x001028: 0x5C68100001470E16 Fmul
    temp_538 = temp_277 * temp_533;
    // 0x001030: 0x5C69100001470D17 Fmul
    temp_539 = 0.0 - temp_533;
    temp_540 = temp_279 * temp_539;
    // 0x001038: 0xC0BA0163EFF7100C Tex
    temp_541 = textureLod(fp_t_tcb_16, vec3(temp_536, temp_537, temp_535), 0.0).xyz;
    temp_542 = temp_541.x;
    temp_543 = temp_541.y;
    temp_544 = temp_541.z;
    // 0x001048: 0x5C68100001472F15 Fmul
    temp_545 = temp_193 * temp_533;
    // 0x001050: 0x010000000017F014 Mov32i
    // 0x001058: 0xE043FF910287FF2C Ipa
    temp_546 = in_attr9.x;
    // 0x001068: 0x5C98078001270022 Mov
    // 0x001070: 0xE043FF914287FF2D Ipa
    temp_547 = in_attr9.y;
    // 0x001078: 0x3859103F80070303 Fadd
    temp_548 = 0.0 - temp_153;
    temp_549 = temp_548 + 1.0;
    // 0x001088: 0xE043FF918287FF2E Ipa
    temp_550 = in_attr9.z;
    // 0x001090: 0xC1BA0143F2971414 Tex
    temp_551 = textureLod(fp_t_tcb_14, vec4(temp_545, temp_538, temp_540, float(1)), temp_528).xyz;
    temp_552 = temp_551.x;
    temp_553 = temp_551.y;
    temp_554 = temp_551.z;
    // 0x001098: 0xD9A2018232271010 Texs
    temp_555 = textureLod(fp_t_tcb_18, vec3(temp_536, temp_537, temp_535), temp_532).xyz;
    temp_556 = temp_555.x;
    temp_557 = temp_555.y;
    temp_558 = temp_555.z;
    // 0x0010A8: 0xDEBA0000C2B72C2C TexB
    temp_559 = texture(fp_t_cb7_20, vec3(temp_546, temp_547, temp_550)).x;
    // 0x0010B0: 0x49A004180A171308 Ffma
    temp_560 = fma(temp_287, fp_c6.data[40].y, temp_247);
    // 0x0010B8: 0x010410676C97F013 Mov32i
    // 0x0010C8: 0x5C68100000370303 Fmul
    temp_561 = temp_549 * temp_549;
    // 0x0010D0: 0x3859103F8007042F Fadd
    temp_562 = 0.0 - temp_176;
    temp_563 = temp_562 + 1.0;
    // 0x0010D8: 0x49A004980A171809 Ffma
    temp_564 = fma(temp_288, fp_c6.data[40].y, temp_253);
    // 0x0010E8: 0x5080000000372F17 Mufu
    temp_565 = log2(temp_563);
    // 0x0010F0: 0x49A019180A170F32 Ffma
    temp_566 = fma(temp_289, fp_c6.data[40].y, temp_251);
    // 0x0010F8: 0x0103E2CD9E87F018 Mov32i
    // 0x001108: 0x49A0098400A70413 Ffma
    temp_567 = fma(temp_176, fp_c1.data[2].z, 8.40400028);
    // 0x001110: 0x5C68100000370303 Fmul
    temp_568 = temp_561 * temp_561;
    // 0x001118: 0x1E23E468DB970412 Fmul32i
    temp_569 = temp_176 * 0.193900004;
    // 0x001128: 0x4C68101809072F0F Fmul
    temp_570 = temp_563 * fp_c6.data[36].x;
    // 0x001130: 0x4C9807980B47002A Mov
    // 0x001138: 0x5080400000370F0F Mufu
    temp_571 = abs(temp_570);
    temp_572 = log2(temp_571);
    // 0x001148: 0x51A0098400B70413 Ffma
    temp_573 = fma(temp_176, temp_567, fp_c1.data[2].w);
    // 0x001150: 0x49A20C0400C70318 Ffma
    temp_574 = fma(temp_568, fp_c1.data[3].x, -0.168799996);
    // 0x001158: 0x49A0090400770312 Ffma
    temp_575 = fma(temp_568, fp_c1.data[1].w, temp_569);
    // 0x001168: 0x49A01B180A171936 Ffma
    temp_576 = fma(temp_290, fp_c6.data[40].y, temp_280);
    // 0x001170: 0x4C98079800970029 Mov
    // 0x001178: 0xF0F0000034570000 Depbar
    // 0x001188: 0x51A215180B471D1D Ffma
    temp_577 = 0.0 - fp_c6.data[45].x;
    temp_578 = fma(temp_94, fp_c6.data[45].x, temp_577);
    // 0x001190: 0x51A0098400D70422 Ffma
    temp_579 = fma(temp_176, temp_573, fp_c1.data[3].y);
    // 0x001198: 0x5C68100001870318 Fmul
    temp_580 = temp_568 * temp_574;
    // 0x0011A8: 0x088BF05D63971219 Fadd32i
    temp_581 = temp_575 + -0.522800028;
    // 0x0011B0: 0x51A215180B470000 Ffma
    temp_582 = 0.0 - fp_c6.data[45].x;
    temp_583 = fma(temp_95, fp_c6.data[45].x, temp_582);
    // 0x0011B8: 0x51A215180B471C1C Ffma
    temp_584 = 0.0 - fp_c6.data[45].x;
    temp_585 = fma(temp_93, fp_c6.data[45].x, temp_584);
    // 0x0011C8: 0x0104066978D7F02A Mov32i
    // 0x0011D0: 0x4C68101809170F0F Fmul
    temp_586 = temp_572 * fp_c6.data[36].y;
    // 0x0011D8: 0x5C60138002271812 Fmnmx
    temp_587 = min(temp_580, temp_579);
    // 0x0011E8: 0x5C68100001970418 Fmul
    temp_588 = temp_176 * temp_581;
    // 0x0011F0: 0x4C68101808971704 Fmul
    temp_589 = temp_565 * fp_c6.data[34].y;
    // 0x0011F8: 0x4C9807980967002E Mov
    // 0x001208: 0x49A215040087032A Ffma
    temp_590 = fma(temp_568, fp_c1.data[2].x, -3.60299993);
    // 0x001210: 0x0103F0000007F02B Mov32i
    // 0x001218: 0x5C90008000F70019 Rro
    // 0x001228: 0xE04BFF904287FF0F Ipa
    temp_591 = in_attr8.y;
    temp_592 = clamp(temp_591, 0.0, 1.0);
    // 0x001230: 0x4C98079408270017 Mov
    // 0x001238: 0x5084000000271919 Mufu
    temp_593 = exp2(temp_586);
    temp_594 = clamp(temp_593, 0.0, 1.0);
    // 0x001248: 0x5C90008000470022 Rro
    // 0x001250: 0x51A015040097032D Ffma
    temp_595 = fma(temp_568, temp_590, fp_c1.data[2].y);
    // 0x001258: 0x5084000000272222 Mufu
    temp_596 = exp2(temp_589);
    temp_597 = clamp(temp_596, 0.0, 1.0);
    // 0x001268: 0x4C58101408172E2A Fadd
    temp_598 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001270: 0x32A015BF00070113 Ffma
    temp_599 = fma(temp_71, 0.5, 0.5);
    // 0x001278: 0x4C98079800870001 Mov
    // 0x001288: 0x4C68101406271730 Fmul
    temp_600 = fp_c5.data[32].z * fp_c5.data[24].z;
    // 0x001290: 0x4C98079800A7002B Mov
    // 0x001298: 0x59A00C0002D70318 Ffma
    temp_601 = fma(temp_568, temp_595, temp_588);
    // 0x0012A8: 0x4C59101800572904 Fadd
    temp_602 = 0.0 - fp_c6.data[2].y;
    temp_603 = temp_602 + fp_c6.data[1].y;
    // 0x0012B0: 0x4C59101800470101 Fadd
    temp_604 = 0.0 - fp_c6.data[2].x;
    temp_605 = temp_604 + fp_c6.data[1].x;
    // 0x0012B8: 0x5C68100001972A19 Fmul
    temp_606 = temp_598 * temp_594;
    // 0x0012C8: 0x4C59101800672B29 Fadd
    temp_607 = 0.0 - fp_c6.data[2].z;
    temp_608 = temp_607 + fp_c6.data[1].z;
    // 0x0012D0: 0x4C9807980867002A Mov
    // 0x0012D8: 0x4C68101808872203 Fmul
    temp_609 = temp_597 * fp_c6.data[34].x;
    // 0x0012E8: 0x5C5C30000FF71222 Fadd
    temp_610 = temp_587 + -0.0;
    temp_611 = clamp(temp_610, 0.0, 1.0);
    // 0x0012F0: 0x51A0099800870101 Ffma
    temp_612 = fma(temp_605, temp_599, fp_c6.data[2].x);
    // 0x0012F8: 0x4C68101808D71912 Fmul
    temp_613 = temp_606 * fp_c6.data[35].y;
    // 0x001308: 0x4C68101808E71917 Fmul
    temp_614 = temp_606 * fp_c6.data[35].z;
    // 0x001310: 0x4C68101808C71919 Fmul
    temp_615 = temp_606 * fp_c6.data[35].x;
    // 0x001318: 0x51A0099800970404 Ffma
    temp_616 = fma(temp_603, temp_599, fp_c6.data[2].y);
    // 0x001328: 0x51A0099800A72913 Ffma
    temp_617 = fma(temp_608, temp_599, fp_c6.data[2].z);
    // 0x001330: 0x386C104248070629 Fmul
    temp_618 = temp_215 * 50.0;
    temp_619 = clamp(temp_618, 0.0, 1.0);
    // 0x001338: 0x4C5C100400E71818 Fadd
    temp_620 = temp_601 + fp_c1.data[3].z;
    temp_621 = clamp(temp_620, 0.0, 1.0);
    // 0x001348: 0x59A01B0003071736 Ffma
    temp_622 = fma(temp_614, temp_600, temp_576);
    // 0x001350: 0x49A10B9408271717 Ffma
    temp_623 = 0.0 - fp_c5.data[32].z;
    temp_624 = fma(temp_614, temp_623, temp_614);
    // 0x001358: 0x51A0151808670303 Ffma
    temp_625 = fma(temp_609, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001368: 0x5C68100002272929 Fmul
    temp_626 = temp_619 * temp_611;
    // 0x001370: 0x5C59100001872218 Fadd
    temp_627 = 0.0 - temp_611;
    temp_628 = temp_627 + temp_621;
    // 0x001378: 0x010404000007F022 Mov32i
    // 0x001388: 0x59A0148001870505 Ffma
    temp_629 = fma(temp_214, temp_628, temp_626);
    // 0x001390: 0x59A0148001870606 Ffma
    temp_630 = fma(temp_215, temp_628, temp_626);
    // 0x001398: 0x59A0148001870707 Ffma
    temp_631 = fma(temp_217, temp_628, temp_626);
    // 0x0013A8: 0x4C68101406270505 Fmul
    temp_632 = temp_629 * fp_c5.data[24].z;
    // 0x0013B0: 0x4C68101406270606 Fmul
    temp_633 = temp_630 * fp_c5.data[24].z;
    // 0x0013B8: 0x4C68101406270707 Fmul
    temp_634 = temp_631 * fp_c5.data[24].z;
    // 0x0013C8: 0xF0F0000034370000 Depbar
    // 0x0013D0: 0x49A01A180A170A0A Ffma
    temp_635 = fma(temp_291, fp_c6.data[40].y, temp_524);
    // 0x0013D8: 0x49A018980A170B0B Ffma
    temp_636 = fma(temp_292, fp_c6.data[40].y, temp_527);
    // 0x0013E8: 0x59A005000307190A Ffma
    temp_637 = fma(temp_615, temp_600, temp_635);
    // 0x0013F0: 0x49A10C9408271919 Ffma
    temp_638 = 0.0 - fp_c5.data[32].z;
    temp_639 = fma(temp_615, temp_638, temp_615);
    // 0x0013F8: 0x59A005800307120B Ffma
    temp_640 = fma(temp_613, temp_600, temp_636);
    // 0x001408: 0x49A1091408271212 Ffma
    temp_641 = 0.0 - fp_c5.data[32].z;
    temp_642 = fma(temp_613, temp_641, temp_613);
    // 0x001410: 0x5C58100001973232 Fadd
    temp_643 = temp_566 + temp_639;
    // 0x001418: 0x5C58100001270808 Fadd
    temp_644 = temp_560 + temp_642;
    // 0x001428: 0x5C58100001770912 Fadd
    temp_645 = temp_564 + temp_624;
    // 0x001430: 0xE043FF900287FF09 Ipa
    temp_646 = in_attr8.x;
    // 0x001438: 0xF0F0000034270000 Depbar
    // 0x001448: 0x49A0060400670119 Ffma
    temp_647 = fma(temp_612, fp_c1.data[1].z, temp_542);
    // 0x001450: 0x49A007040067130C Ffma
    temp_648 = fma(temp_617, fp_c1.data[1].z, temp_544);
    // 0x001458: 0x49A0068400670404 Ffma
    temp_649 = fma(temp_616, fp_c1.data[1].z, temp_543);
    // 0x001468: 0x4C68101808771B0E Fmul
    temp_650 = temp_91 * fp_c6.data[33].w;
    // 0x001470: 0x33A0114000070F01 Ffma
    temp_651 = fma(temp_592, -2.0, 3.0);
    // 0x001478: 0x5C68100000F70F0F Fmul
    temp_652 = temp_592 * temp_592;
    // 0x001488: 0x59A20C8000372020 Ffma
    temp_653 = 0.0 - temp_647;
    temp_654 = fma(temp_88, temp_625, temp_653);
    // 0x001490: 0x59A2020000372121 Ffma
    temp_655 = 0.0 - temp_649;
    temp_656 = fma(temp_89, temp_625, temp_655);
    // 0x001498: 0x59A2060000371A03 Ffma
    temp_657 = 0.0 - temp_648;
    temp_658 = fma(temp_90, temp_625, temp_657);
    // 0x0014A8: 0x5C68100000F70101 Fmul
    temp_659 = temp_651 * temp_652;
    // 0x0014B0: 0x59A00C8000E72020 Ffma
    temp_660 = fma(temp_654, temp_650, temp_647);
    // 0x0014B8: 0x59A0020000E72121 Ffma
    temp_661 = fma(temp_656, temp_650, temp_649);
    // 0x0014C8: 0xF0F0000034170000 Depbar
    // 0x0014D0: 0x49A0081808571410 Ffma
    temp_662 = fma(temp_552, fp_c6.data[33].y, temp_556);
    // 0x0014D8: 0x59A0060000E70303 Ffma
    temp_663 = fma(temp_658, temp_650, temp_648);
    // 0x0014E8: 0x49A0089808571511 Ffma
    temp_664 = fma(temp_553, fp_c6.data[33].y, temp_557);
    // 0x0014F0: 0x5C58100003272020 Fadd
    temp_665 = temp_660 + temp_643;
    // 0x0014F8: 0x49A0119808571604 Ffma
    temp_666 = fma(temp_554, fp_c6.data[33].y, temp_558);
    // 0x001508: 0x5C58100000872108 Fadd
    temp_667 = temp_661 + temp_644;
    // 0x001510: 0x59A0050001070505 Ffma
    temp_668 = fma(temp_632, temp_662, temp_637);
    // 0x001518: 0x5C58100001270303 Fadd
    temp_669 = temp_663 + temp_645;
    // 0x001528: 0x4C9807980287000A Mov
    // 0x001530: 0x59A1100002072520 Ffma
    temp_670 = 0.0 - temp_665;
    temp_671 = fma(temp_9, temp_670, temp_665);
    // 0x001538: 0x59A0058001170606 Ffma
    temp_672 = fma(temp_633, temp_664, temp_640);
    // 0x001548: 0x59A1040000872508 Ffma
    temp_673 = 0.0 - temp_667;
    temp_674 = fma(temp_9, temp_673, temp_667);
    // 0x001550: 0x59A01B0000470707 Ffma
    temp_675 = fma(temp_634, temp_666, temp_622);
    // 0x001558: 0x59A1018000372525 Ffma
    temp_676 = 0.0 - temp_669;
    temp_677 = fma(temp_9, temp_676, temp_669);
    // 0x001568: 0x4C9807980297000C Mov
    // 0x001570: 0x59A0028002071E05 Ffma
    temp_678 = fma(temp_12, temp_671, temp_668);
    // 0x001578: 0x51A0051802871C0A Ffma
    temp_679 = fma(temp_585, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001588: 0x59A0030000871F08 Ffma
    temp_680 = fma(temp_13, temp_674, temp_672);
    // 0x001590: 0x4C68101803770101 Fmul
    temp_681 = temp_659 * fp_c6.data[13].w;
    // 0x001598: 0x59A0038002570225 Ffma
    temp_682 = fma(temp_14, temp_677, temp_675);
    // 0x0015A8: 0x51A0061802971D1D Ffma
    temp_683 = fma(temp_578, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0015B0: 0x5C68100000572424 Fmul
    temp_684 = temp_273 * temp_678;
    // 0x0015B8: 0x4C98079802A70005 Mov
    // 0x0015C8: 0x5C68100000872626 Fmul
    temp_685 = temp_257 * temp_680;
    // 0x0015D0: 0xE043FF8C8287FF08 Ipa
    temp_686 = in_attr4.z;
    // 0x0015D8: 0x49A2009803570107 Ffma
    temp_687 = 0.0 - temp_681;
    temp_688 = fma(temp_681, fp_c6.data[13].y, temp_687);
    // 0x0015E8: 0x5C68100002572727 Fmul
    temp_689 = temp_125 * temp_682;
    // 0x0015F0: 0x49A504980BC72C09 Ffma
    temp_690 = 0.0 - fp_c6.data[47].x;
    temp_691 = fma(temp_559, temp_690, temp_646);
    temp_692 = clamp(temp_691, 0.0, 1.0);
    // 0x0015F8: 0x5C58300000A72403 Fadd
    temp_693 = 0.0 - temp_679;
    temp_694 = temp_684 + temp_693;
    // 0x001608: 0x5080000000370909 Mufu
    temp_695 = log2(temp_692);
    // 0x001610: 0x51A0029802A70000 Ffma
    temp_696 = fma(temp_583, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001618: 0x5C58300001D72602 Fadd
    temp_697 = 0.0 - temp_683;
    temp_698 = temp_685 + temp_697;
    // 0x001628: 0x49A005180BF70304 Ffma
    temp_699 = fma(temp_694, fp_c6.data[47].w, temp_679);
    // 0x001630: 0x5C58300000072703 Fadd
    temp_700 = 0.0 - temp_696;
    temp_701 = temp_689 + temp_700;
    // 0x001638: 0x49A00E980BF70202 Ffma
    temp_702 = fma(temp_698, fp_c6.data[47].w, temp_683);
    // 0x001648: 0x5C60178000470A04 Fmnmx
    temp_703 = max(temp_679, temp_699);
    // 0x001650: 0x4C68101803170905 Fmul
    temp_704 = temp_695 * fp_c6.data[12].y;
    // 0x001658: 0x49A000180BF70303 Ffma
    temp_705 = fma(temp_701, fp_c6.data[47].w, temp_696);
    // 0x001668: 0x5C60178000271D02 Fmnmx
    temp_706 = max(temp_683, temp_702);
    // 0x001670: 0x5C90008000570006 Rro
    // 0x001678: 0x49A2009803470105 Ffma
    temp_707 = 0.0 - temp_681;
    temp_708 = fma(temp_681, fp_c6.data[13].x, temp_707);
    // 0x001688: 0x5080000000270606 Mufu
    temp_709 = exp2(temp_704);
    // 0x001690: 0x5C60178000370003 Fmnmx
    temp_710 = max(temp_696, temp_705);
    // 0x001698: 0x49A2009803670101 Ffma
    temp_711 = 0.0 - temp_681;
    temp_712 = fma(temp_681, fp_c6.data[13].z, temp_711);
    // 0x0016A8: 0x59A0010000770207 Ffma
    temp_713 = fma(temp_706, temp_688, temp_706);
    // 0x0016B0: 0x4C58100C03870808 Fadd
    temp_714 = temp_686 + fp_c3.data[14].x;
    // 0x0016B8: 0x59A0020000570405 Ffma
    temp_715 = fma(temp_703, temp_708, temp_703);
    // 0x0016C8: 0x59A0018000170302 Ffma
    temp_716 = fma(temp_710, temp_712, temp_710);
    // 0x0016D0: 0x5C59100000772603 Fadd
    temp_717 = 0.0 - temp_685;
    temp_718 = temp_717 + temp_713;
    // 0x0016D8: 0x0103F8000007F007 Mov32i
    // 0x0016E8: 0x5C59100000572401 Fadd
    temp_719 = 0.0 - temp_684;
    temp_720 = temp_719 + temp_715;
    // 0x0016F0: 0x4C68101802B70604 Fmul
    temp_721 = temp_709 * fp_c6.data[10].w;
    // 0x0016F8: 0x5C59100000272702 Fadd
    temp_722 = 0.0 - temp_689;
    temp_723 = temp_722 + temp_716;
    // 0x001708: 0x0103EC000007F005 Mov32i
    // 0x001710: 0x5C9807800FF70006 Mov
    // 0x001718: 0x59A0120000470100 Ffma
    temp_724 = fma(temp_720, temp_721, temp_684);
    // 0x001728: 0x59A0130000470301 Ffma
    temp_725 = fma(temp_718, temp_721, temp_685);
    // 0x001730: 0x59A0138000470202 Ffma
    temp_726 = fma(temp_723, temp_721, temp_689);
    // 0x001738: 0x0103F8000007F003 Mov32i
    // 0x001748: 0x49A37F8C03C70804 Ffma
    temp_727 = 0.0 - fp_c3.data[15].x;
    temp_728 = fma(temp_714, temp_727, -0.0);
    // 0x001750: 0xE30000000007000F Exit
    out_attr0.x = temp_724;
    out_attr0.y = temp_725;
    out_attr0.z = temp_726;
    out_attr0.w = 1.0;
    out_attr1.x = temp_728;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
