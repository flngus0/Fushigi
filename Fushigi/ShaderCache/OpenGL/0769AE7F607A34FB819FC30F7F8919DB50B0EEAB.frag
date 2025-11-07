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
    precise vec3 temp_90;
    precise float temp_91;
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
    uint temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    int temp_202;
    precise float temp_203;
    int temp_204;
    uint temp_205;
    uint temp_206;
    int temp_207;
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
    bool temp_253;
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
    int temp_291;
    bool temp_292;
    int temp_293;
    int temp_294;
    int temp_295;
    int temp_296;
    int temp_297;
    uint temp_298;
    uint temp_299;
    int temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    int temp_305;
    int temp_306;
    uint temp_307;
    uint temp_308;
    int temp_309;
    precise float temp_310;
    int temp_311;
    uint temp_312;
    int temp_313;
    precise float temp_314;
    int temp_315;
    uint temp_316;
    uint temp_317;
    int temp_318;
    precise float temp_319;
    int temp_320;
    uint temp_321;
    int temp_322;
    precise float temp_323;
    int temp_324;
    uint temp_325;
    uint temp_326;
    int temp_327;
    precise float temp_328;
    int temp_329;
    uint temp_330;
    int temp_331;
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
    int temp_353;
    uint temp_354;
    uint temp_355;
    int temp_356;
    precise float temp_357;
    precise float temp_358;
    precise float temp_359;
    int temp_360;
    uint temp_361;
    uint temp_362;
    int temp_363;
    precise float temp_364;
    int temp_365;
    uint temp_366;
    int temp_367;
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
    int temp_379;
    uint temp_380;
    int temp_381;
    precise float temp_382;
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
    uint temp_393;
    int temp_394;
    precise float temp_395;
    bool temp_396;
    uint temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    uint temp_405;
    precise float temp_406;
    bool temp_407;
    precise float temp_408;
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
    int temp_434;
    uint temp_435;
    uint temp_436;
    int temp_437;
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
    uint temp_448;
    uint temp_449;
    int temp_450;
    precise float temp_451;
    int temp_452;
    uint temp_453;
    int temp_454;
    precise float temp_455;
    precise float temp_456;
    precise float temp_457;
    precise float temp_458;
    int temp_459;
    uint temp_460;
    uint temp_461;
    int temp_462;
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
    precise vec3 temp_539;
    precise float temp_540;
    precise float temp_541;
    precise float temp_542;
    precise float temp_543;
    precise float temp_544;
    precise float temp_545;
    precise float temp_546;
    precise float temp_547;
    precise float temp_548;
    precise vec3 temp_549;
    precise float temp_550;
    precise float temp_551;
    precise float temp_552;
    precise vec3 temp_553;
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
    precise float temp_723;
    precise float temp_724;
    precise float temp_725;
    precise float temp_726;
    // 0x000008: 0x0103F0000007F02C Mov32i
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0x5080000000471010 Mufu
    // 0x000028: 0xE043FF8E0107FF0B Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E4107FF0C Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xD830026FF0C70B00 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xD8240360D0C70B24 Texs
    temp_5 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    // 0x000050: 0xD822024020C70B1E Texs
    temp_9 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    temp_12 = temp_9.z;
    // 0x000058: 0xE043FF8A0107FF03 Ipa
    temp_13 = in_attr2.x;
    // 0x000068: 0xE043FF8A4107FF04 Ipa
    temp_14 = in_attr2.y;
    // 0x000070: 0xE043FF8A8107FF05 Ipa
    temp_15 = in_attr2.z;
    // 0x000078: 0xE043FF890107FF07 Ipa
    temp_16 = in_attr1.x;
    // 0x000088: 0xE043FF894107FF08 Ipa
    temp_17 = in_attr1.y;
    // 0x000090: 0xE043FF880107FF0F Ipa
    temp_18 = in_attr0.x;
    // 0x000098: 0xE043FF898107FF09 Ipa
    temp_19 = in_attr1.z;
    // 0x0000A8: 0xE043FF884107FF11 Ipa
    temp_20 = in_attr0.y;
    // 0x0000B0: 0xE043FF888107FF0C Ipa
    temp_21 = in_attr0.z;
    // 0x0000B8: 0x5C68100000370306 Fmul
    temp_22 = temp_13 * temp_13;
    // 0x0000C8: 0x5C6810000077070A Fmul
    temp_23 = temp_16 * temp_16;
    // 0x0000D0: 0x5C68100000F70F0E Fmul
    temp_24 = temp_18 * temp_18;
    // 0x0000D8: 0x59A0030000470406 Ffma
    temp_25 = fma(temp_14, temp_14, temp_22);
    // 0x0000E8: 0x59A005000087080A Ffma
    temp_26 = fma(temp_17, temp_17, temp_23);
    // 0x0000F0: 0x59A0070001171112 Ffma
    temp_27 = fma(temp_20, temp_20, temp_24);
    // 0x0000F8: 0x59A0030000570506 Ffma
    temp_28 = fma(temp_15, temp_15, temp_25);
    // 0x000108: 0x5080000000570606 Mufu
    temp_29 = inversesqrt(temp_28);
    // 0x000110: 0x59A005000097090A Ffma
    temp_30 = fma(temp_19, temp_19, temp_26);
    // 0x000118: 0x5080000000570A0A Mufu
    temp_31 = inversesqrt(temp_30);
    // 0x000128: 0x59A0090000C70C12 Ffma
    temp_32 = fma(temp_21, temp_21, temp_27);
    // 0x000130: 0x5080000000571212 Mufu
    temp_33 = inversesqrt(temp_32);
    // 0x000138: 0x5C6810000067050B Fmul
    temp_34 = temp_15 * temp_29;
    // 0x000148: 0x5C68100000670303 Fmul
    temp_35 = temp_13 * temp_29;
    // 0x000150: 0x5C68100000670404 Fmul
    temp_36 = temp_14 * temp_29;
    // 0x000158: 0x5C68100000A7070E Fmul
    temp_37 = temp_16 * temp_31;
    // 0x000168: 0x5C68100000A70807 Fmul
    temp_38 = temp_17 * temp_31;
    // 0x000170: 0x5C68100000A70909 Fmul
    temp_39 = temp_19 * temp_31;
    // 0x000178: 0x5C68100001270F0A Fmul
    temp_40 = temp_18 * temp_33;
    // 0x000188: 0x5C68100001271108 Fmul
    temp_41 = temp_20 * temp_33;
    // 0x000190: 0x5C68100001270C0C Fmul
    temp_42 = temp_21 * temp_33;
    // 0x000198: 0xF0F0000034270000 Depbar
    // 0x0001A8: 0x5C68100000170105 Fmul
    temp_43 = temp_4 * temp_4;
    // 0x0001B0: 0x5C68100000170303 Fmul
    temp_44 = temp_35 * temp_4;
    // 0x0001B8: 0x5C68100000170B0B Fmul
    temp_45 = temp_34 * temp_4;
    // 0x0001C8: 0x59A0028000070005 Ffma
    temp_46 = fma(temp_3, temp_3, temp_43);
    // 0x0001D0: 0x59A0018000E70003 Ffma
    temp_47 = fma(temp_3, temp_37, temp_44);
    // 0x0001D8: 0x59A0058000970009 Ffma
    temp_48 = fma(temp_3, temp_39, temp_45);
    // 0x0001E8: 0x385D103F80070506 Fadd
    temp_49 = 0.0 - temp_46;
    temp_50 = temp_49 + 1.0;
    temp_51 = clamp(temp_50, 0.0, 1.0);
    // 0x0001F0: 0x5C68100000170405 Fmul
    temp_52 = temp_36 * temp_4;
    // 0x0001F8: 0x5080000000870606 Mufu
    temp_53 = sqrt(temp_51);
    // 0x000208: 0x59A0028000770005 Ffma
    temp_54 = fma(temp_3, temp_38, temp_52);
    // 0x000210: 0xE003FF874FF7FF07 Ipa
    temp_55 = gl_FragCoord.y;
    temp_56 = support_buffer.render_scale[0];
    temp_57 = temp_55 / temp_56;
    // 0x000218: 0x59A0018000670A03 Ffma
    temp_58 = fma(temp_40, temp_53, temp_47);
    // 0x000228: 0x59A0028000670805 Ffma
    temp_59 = fma(temp_41, temp_53, temp_54);
    // 0x000230: 0x59A0048000670C09 Ffma
    temp_60 = fma(temp_42, temp_53, temp_48);
    // 0x000238: 0xE003FF870FF7FF06 Ipa
    temp_61 = gl_FragCoord.x;
    temp_62 = support_buffer.render_scale[0];
    temp_63 = temp_61 / temp_62;
    // 0x000248: 0x5C68100000370300 Fmul
    temp_64 = temp_58 * temp_58;
    // 0x000250: 0x59A0000000570500 Ffma
    temp_65 = fma(temp_59, temp_59, temp_64);
    // 0x000258: 0x59A0000000970900 Ffma
    temp_66 = fma(temp_60, temp_60, temp_65);
    // 0x000268: 0x5080000000570000 Mufu
    temp_67 = inversesqrt(temp_66);
    // 0x000270: 0x5C68100000070912 Fmul
    temp_68 = temp_60 * temp_67;
    // 0x000278: 0x5C68100000070501 Fmul
    temp_69 = temp_59 * temp_67;
    // 0x000288: 0x5C6810000007030C Fmul
    temp_70 = temp_58 * temp_67;
    // 0x000290: 0x4C68100C00671204 Fmul
    temp_71 = temp_68 * fp_c3.data[1].z;
    // 0x000298: 0x4C68100C00271203 Fmul
    temp_72 = temp_68 * fp_c3.data[0].z;
    // 0x0002A8: 0x49A0020C00570105 Ffma
    temp_73 = fma(temp_69, fp_c3.data[1].y, temp_71);
    // 0x0002B0: 0x49A0018C00170103 Ffma
    temp_74 = fma(temp_69, fp_c3.data[0].y, temp_72);
    // 0x0002B8: 0x49A0028C00470C05 Ffma
    temp_75 = fma(temp_70, fp_c3.data[1].x, temp_73);
    // 0x0002C8: 0x49A0018C00070C03 Ffma
    temp_76 = fma(temp_70, fp_c3.data[0].x, temp_74);
    // 0x0002D0: 0x4C69100C03E70500 Fmul
    temp_77 = 0.0 - fp_c3.data[15].z;
    temp_78 = temp_75 * temp_77;
    // 0x0002D8: 0x4C68100C04A70605 Fmul
    temp_79 = temp_63 * fp_c3.data[18].z;
    // 0x0002E8: 0x4C68100C04B70706 Fmul
    temp_80 = temp_57 * fp_c3.data[18].w;
    // 0x0002F0: 0x4C68101808B70303 Fmul
    temp_81 = temp_76 * fp_c6.data[34].w;
    // 0x0002F8: 0x4C68101808B70000 Fmul
    temp_82 = temp_78 * fp_c6.data[34].w;
    // 0x000308: 0x49A0028400270303 Ffma
    temp_83 = fma(temp_81, fp_c1.data[0].z, temp_79);
    // 0x000310: 0x49A003040027001A Ffma
    temp_84 = fma(temp_82, fp_c1.data[0].z, temp_80);
    // 0x000318: 0xD8320221A1A70320 Texs
    temp_85 = texture(fp_t_tcb_22, vec2(temp_83, temp_84)).xyzw;
    temp_86 = temp_85.x;
    temp_87 = temp_85.y;
    temp_88 = temp_85.z;
    temp_89 = temp_85.w;
    // 0x000328: 0xD82202000067051C Texs
    temp_90 = texture(fp_t_tcb_20, vec2(temp_79, temp_80)).xyz;
    temp_91 = temp_90.x;
    temp_92 = temp_90.y;
    temp_93 = temp_90.z;
    // 0x000330: 0xE043FF8B0107FF28 Ipa
    temp_94 = in_attr3.x;
    // 0x000338: 0xE043FF8B4107FF23 Ipa
    temp_95 = in_attr3.y;
    // 0x000348: 0xE043FF8B8107FF22 Ipa
    temp_96 = in_attr3.z;
    // 0x000350: 0xF0F0000034370000 Depbar
    // 0x000358: 0x4C6810180A072424 Fmul
    temp_97 = temp_6 * fp_c6.data[40].x;
    // 0x000368: 0xE2900000BF000000 Ssy
    // 0x000370: 0x386810418007050E Fmul
    temp_98 = temp_79 * 16.0;
    // 0x000378: 0x385D103F80070D0D Fadd
    temp_99 = 0.0 - temp_8;
    temp_100 = temp_99 + 1.0;
    temp_101 = clamp(temp_100, 0.0, 1.0);
    // 0x000388: 0x5CA8148000E70A0E F2f
    temp_102 = floor(temp_98);
    // 0x000390: 0x5C9807800FF70019 Mov
    // 0x000398: 0x49A206980AE70D17 Ffma
    temp_103 = 0.0 - temp_101;
    temp_104 = fma(temp_101, fp_c6.data[43].z, temp_103);
    // 0x0003A8: 0x3858103F80071717 Fadd
    temp_105 = temp_104 + 1.0;
    // 0x0003B0: 0xF0F0000034270000 Depbar
    // 0x0003B8: 0x59A40B8001770227 Ffma
    temp_106 = fma(temp_12, temp_105, temp_105);
    temp_107 = clamp(temp_106, 0.0, 1.0);
    // 0x0003C8: 0x5C68100002872804 Fmul
    temp_108 = temp_94 * temp_94;
    // 0x0003D0: 0x59A0020002372304 Ffma
    temp_109 = fma(temp_95, temp_95, temp_108);
    // 0x0003D8: 0x59A0020002272204 Ffma
    temp_110 = fma(temp_96, temp_96, temp_109);
    // 0x0003E8: 0x5080000000570409 Mufu
    temp_111 = inversesqrt(temp_110);
    // 0x0003F0: 0x5C69100000972828 Fmul
    temp_112 = 0.0 - temp_111;
    temp_113 = temp_94 * temp_112;
    // 0x0003F8: 0x5C69100000972323 Fmul
    temp_114 = 0.0 - temp_111;
    temp_115 = temp_95 * temp_114;
    // 0x000408: 0x5C69100000972222 Fmul
    temp_116 = 0.0 - temp_111;
    temp_117 = temp_96 * temp_116;
    // 0x000410: 0x4C58301805C72803 Fadd
    temp_118 = 0.0 - fp_c6.data[23].x;
    temp_119 = temp_113 + temp_118;
    // 0x000418: 0x4C58301805D72307 Fadd
    temp_120 = 0.0 - fp_c6.data[23].y;
    temp_121 = temp_115 + temp_120;
    // 0x000428: 0x4C58301805E72208 Fadd
    temp_122 = 0.0 - fp_c6.data[23].z;
    temp_123 = temp_117 + temp_122;
    // 0x000430: 0x5C68100000370309 Fmul
    temp_124 = temp_119 * temp_119;
    // 0x000438: 0x59A0048000770709 Ffma
    temp_125 = fma(temp_121, temp_121, temp_124);
    // 0x000448: 0x59A0048000870809 Ffma
    temp_126 = fma(temp_123, temp_123, temp_125);
    // 0x000450: 0x5080000000570909 Mufu
    temp_127 = inversesqrt(temp_126);
    // 0x000458: 0x5C68100000970303 Fmul
    temp_128 = temp_119 * temp_127;
    // 0x000468: 0x5C68100000970704 Fmul
    temp_129 = temp_121 * temp_127;
    // 0x000470: 0x5C6810000097080B Fmul
    temp_130 = temp_123 * temp_127;
    // 0x000478: 0x4C69101805C70307 Fmul
    temp_131 = 0.0 - fp_c6.data[23].x;
    temp_132 = temp_128 * temp_131;
    // 0x000488: 0x5C6810000037280A Fmul
    temp_133 = temp_113 * temp_128;
    // 0x000490: 0x5C68100000370C03 Fmul
    temp_134 = temp_70 * temp_128;
    // 0x000498: 0x49A1039805D70408 Ffma
    temp_135 = 0.0 - fp_c6.data[23].y;
    temp_136 = fma(temp_129, temp_135, temp_132);
    // 0x0004A8: 0x59A0050000472311 Ffma
    temp_137 = fma(temp_115, temp_129, temp_133);
    // 0x0004B0: 0x01040DF760C7F00A Mov32i
    // 0x0004B8: 0x59A0018000470104 Ffma
    temp_138 = fma(temp_69, temp_129, temp_134);
    // 0x0004C8: 0x386013BF80072403 Fmnmx
    temp_139 = min(temp_97, 1.0);
    // 0x0004D0: 0x49A5041805E70B08 Ffma
    temp_140 = 0.0 - fp_c6.data[23].z;
    temp_141 = fma(temp_130, temp_140, temp_136);
    temp_142 = clamp(temp_141, 0.0, 1.0);
    // 0x0004D8: 0x59A4088000B72211 Ffma
    temp_143 = fma(temp_117, temp_130, temp_137);
    temp_144 = clamp(temp_143, 0.0, 1.0);
    // 0x0004E8: 0x59A4020000B7120B Ffma
    temp_145 = fma(temp_68, temp_130, temp_138);
    temp_146 = clamp(temp_145, 0.0, 1.0);
    // 0x0004F0: 0x4C69101805C70C04 Fmul
    temp_147 = 0.0 - fp_c6.data[23].x;
    temp_148 = temp_70 * temp_147;
    // 0x0004F8: 0x49A2050400370807 Ffma
    temp_149 = fma(temp_142, fp_c1.data[0].w, -6.98316002);
    // 0x000508: 0x49A205040037110A Ffma
    temp_150 = fma(temp_144, fp_c1.data[0].w, -6.98316002);
    // 0x000510: 0x4C60178400070303 Fmnmx
    temp_151 = max(temp_139, fp_c1.data[0].x);
    // 0x000518: 0x49A1021805D70109 Ffma
    temp_152 = 0.0 - fp_c6.data[23].y;
    temp_153 = fma(temp_69, temp_152, temp_148);
    // 0x000528: 0x5C68100000770808 Fmul
    temp_154 = temp_142 * temp_149;
    // 0x000530: 0x5C68100000A71107 Fmul
    temp_155 = temp_144 * temp_150;
    // 0x000538: 0x5C68100002870C0A Fmul
    temp_156 = temp_70 * temp_113;
    // 0x000548: 0x51A401840007032E Ffma
    temp_157 = fma(temp_151, temp_151, fp_c1.data[0].x);
    temp_158 = clamp(temp_157, 0.0, 1.0);
    // 0x000550: 0x32A0163F0007032C Ffma
    temp_159 = fma(temp_151, 0.5, 0.5);
    // 0x000558: 0x49A5049805E71209 Ffma
    temp_160 = 0.0 - fp_c6.data[23].z;
    temp_161 = fma(temp_68, temp_160, temp_153);
    temp_162 = clamp(temp_161, 0.0, 1.0);
    // 0x000568: 0x5C90008000870014 Rro
    // 0x000570: 0x59A005000237010F Ffma
    temp_163 = fma(temp_69, temp_115, temp_156);
    // 0x000578: 0x5080000000271414 Mufu
    temp_164 = exp2(temp_154);
    // 0x000588: 0x5C68100002E72E2D Fmul
    temp_165 = temp_158 * temp_158;
    // 0x000590: 0x5C68120002C72C2C Fmul
    temp_166 = temp_159 * 0.5;
    temp_167 = temp_166 * temp_159;
    // 0x000598: 0x4C58301407B70208 Fadd
    temp_168 = 0.0 - fp_c5.data[30].w;
    temp_169 = temp_12 + temp_168;
    // 0x0005A8: 0x5C90008000770018 Rro
    // 0x0005B0: 0x4C58301407B71F07 Fadd
    temp_170 = 0.0 - fp_c5.data[30].w;
    temp_171 = temp_11 + temp_170;
    // 0x0005B8: 0x5080000000271818 Mufu
    temp_172 = exp2(temp_155);
    // 0x0005C8: 0x59A4078002271204 Ffma
    temp_173 = fma(temp_68, temp_117, temp_163);
    temp_174 = clamp(temp_173, 0.0, 1.0);
    // 0x0005D0: 0x386810411007060F Fmul
    temp_175 = temp_80 * 9.0;
    // 0x0005D8: 0x59A2058002D70B0A Ffma
    temp_176 = 0.0 - temp_146;
    temp_177 = fma(temp_146, temp_165, temp_176);
    // 0x0005E8: 0x5CA8148000F70A0F F2f
    temp_178 = floor(temp_175);
    // 0x0005F0: 0x59A1048002C70905 Ffma
    temp_179 = 0.0 - temp_167;
    temp_180 = fma(temp_162, temp_179, temp_162);
    // 0x0005F8: 0x4C68101801470932 Fmul
    temp_181 = temp_162 * fp_c6.data[5].x;
    // 0x000608: 0x5C68100000470C2F Fmul
    temp_182 = temp_70 * temp_174;
    // 0x000610: 0x51A0050400170B0A Ffma
    temp_183 = fma(temp_146, temp_177, fp_c1.data[0].y);
    // 0x000618: 0x59A1020000472C0B Ffma
    temp_184 = 0.0 - temp_174;
    temp_185 = fma(temp_167, temp_184, temp_174);
    // 0x000628: 0x5080000000470A11 Mufu
    temp_186 = 1.0 / temp_183;
    // 0x000630: 0x5C58100000572C06 Fadd
    temp_187 = temp_167 + temp_180;
    // 0x000638: 0x1E23EA2F98373232 Fmul32i
    temp_188 = temp_181 * 0.318309873;
    // 0x000648: 0x5080000000470613 Mufu
    temp_189 = 1.0 / temp_187;
    // 0x000650: 0x32A2144000072F2F Ffma
    temp_190 = 0.0 - temp_113;
    temp_191 = fma(temp_182, 2.0, temp_190);
    // 0x000658: 0x32A0074180070F2B Ffma
    temp_192 = fma(temp_178, 16.0, temp_102);
    // 0x000668: 0x5C58100000B72C0B Fadd
    temp_193 = temp_167 + temp_185;
    // 0x000670: 0x5CB0118002B70A2B F2i
    temp_194 = trunc(temp_192);
    temp_195 = max(temp_194, 0.0);
    temp_196 = uint(temp_195);
    // 0x000678: 0x4C98079808A7000F Mov
    // 0x000688: 0x5080000000470B0B Mufu
    temp_197 = 1.0 / temp_193;
    // 0x000690: 0x4C58301407B71E06 Fadd
    temp_198 = 0.0 - fp_c5.data[30].w;
    temp_199 = temp_10 + temp_198;
    // 0x000698: 0x5C68100001172E05 Fmul
    temp_200 = temp_158 * temp_186;
    // 0x0006A8: 0x5C68100000570505 Fmul
    temp_201 = temp_200 * temp_200;
    // 0x0006B0: 0x3848000000872B29 Shl
    temp_202 = int(temp_196) << 8;
    // 0x0006B8: 0x3868103F00070B2A Fmul
    temp_203 = temp_197 * 0.5;
    // 0x0006C8: 0xEF94008200472929 Ldc
    temp_204 = temp_202 + 0x2004;
    temp_205 = uint(temp_204) >> 2;
    temp_206 = temp_205 >> 2;
    temp_207 = int(temp_205) & 3;
    temp_208 = fp_c8.data[int(temp_206)][temp_207];
    // 0x0006D0: 0x4C68101808770F0B Fmul
    temp_209 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x0006D8: 0x5C68100001372A0E Fmul
    temp_210 = temp_203 * temp_189;
    // 0x0006E8: 0x5C68100000E7050A Fmul
    temp_211 = temp_201 * temp_210;
    // 0x0006F0: 0x51A0031407B72505 Ffma
    temp_212 = fma(temp_7, temp_199, fp_c5.data[30].w);
    // 0x0006F8: 0x51A0039407B72506 Ffma
    temp_213 = fma(temp_7, temp_171, fp_c5.data[30].w);
    // 0x000708: 0x4C6810180157090E Fmul
    temp_214 = temp_162 * fp_c6.data[5].y;
    // 0x000710: 0x51A0041407B72507 Ffma
    temp_215 = fma(temp_7, temp_169, fp_c5.data[30].w);
    // 0x000718: 0x5C68100000A7090A Fmul
    temp_216 = temp_162 * temp_211;
    // 0x000728: 0x59A10C0001870513 Ffma
    temp_217 = 0.0 - temp_172;
    temp_218 = fma(temp_212, temp_217, temp_172);
    // 0x000730: 0x59A10A000147060F Ffma
    temp_219 = 0.0 - temp_164;
    temp_220 = fma(temp_213, temp_219, temp_164);
    // 0x000738: 0x1E23EA2F98370E08 Fmul32i
    temp_221 = temp_214 * 0.318309873;
    // 0x000748: 0x59A10A000147050E Ffma
    temp_222 = 0.0 - temp_164;
    temp_223 = fma(temp_212, temp_222, temp_164);
    // 0x000750: 0x59A10C0001870611 Ffma
    temp_224 = 0.0 - temp_172;
    temp_225 = fma(temp_213, temp_224, temp_172);
    // 0x000758: 0x59A10A0001470714 Ffma
    temp_226 = 0.0 - temp_164;
    temp_227 = fma(temp_215, temp_226, temp_164);
    // 0x000768: 0x59A10C0001870718 Ffma
    temp_228 = 0.0 - temp_172;
    temp_229 = fma(temp_215, temp_228, temp_172);
    // 0x000770: 0x5C58100000F7060F Fadd
    temp_230 = temp_213 + temp_220;
    // 0x000778: 0x4C68101801670909 Fmul
    temp_231 = temp_162 * fp_c6.data[5].z;
    // 0x000788: 0x5C58100000E7050E Fadd
    temp_232 = temp_212 + temp_223;
    // 0x000790: 0x5C58100001170616 Fadd
    temp_233 = temp_213 + temp_225;
    // 0x000798: 0x5C58100001470714 Fadd
    temp_234 = temp_215 + temp_227;
    // 0x0007A8: 0x5C58100001370513 Fadd
    temp_235 = temp_212 + temp_218;
    // 0x0007B0: 0x4C68101406270F0F Fmul
    temp_236 = temp_230 * fp_c5.data[24].z;
    // 0x0007B8: 0x5C58100001870718 Fadd
    temp_237 = temp_215 + temp_229;
    // 0x0007C8: 0x4C68101406270E0E Fmul
    temp_238 = temp_232 * fp_c5.data[24].z;
    // 0x0007D0: 0x4C68101406271616 Fmul
    temp_239 = temp_233 * fp_c5.data[24].z;
    // 0x0007D8: 0x4C68101406271414 Fmul
    temp_240 = temp_234 * fp_c5.data[24].z;
    // 0x0007E8: 0x1E23EA2F98370909 Fmul32i
    temp_241 = temp_231 * 0.318309873;
    // 0x0007F0: 0x4C68101406271313 Fmul
    temp_242 = temp_235 * fp_c5.data[24].z;
    // 0x0007F8: 0x4C68101406271818 Fmul
    temp_243 = temp_237 * fp_c5.data[24].z;
    // 0x000808: 0x59A1040001670808 Ffma
    temp_244 = 0.0 - temp_239;
    temp_245 = fma(temp_221, temp_244, temp_221);
    // 0x000810: 0x49A206980AD70D16 Ffma
    temp_246 = 0.0 - temp_101;
    temp_247 = fma(temp_101, fp_c6.data[43].y, temp_246);
    // 0x000818: 0x59A1190001373232 Ffma
    temp_248 = 0.0 - temp_242;
    temp_249 = fma(temp_188, temp_248, temp_188);
    // 0x000828: 0x59A1048001870909 Ffma
    temp_250 = 0.0 - temp_243;
    temp_251 = fma(temp_241, temp_250, temp_241);
    // 0x000830: 0x5C9807800FF70013 Mov
    // 0x000838: 0x5C9807800FF70018 Mov
    // 0x000848: 0x3858103F80071616 Fadd
    temp_252 = temp_247 + 1.0;
    // 0x000850: 0x5B6603800FF72907 Isetp
    temp_253 = floatBitsToUint(temp_208) <= 0u;
    // 0x000858: 0x59A40B0001671F26 Ffma
    temp_254 = fma(temp_11, temp_252, temp_252);
    temp_255 = clamp(temp_254, 0.0, 1.0);
    // 0x000868: 0xF0F0000034170000 Depbar
    // 0x000870: 0x51A0059801572115 Ffma
    temp_256 = fma(temp_87, temp_209, fp_c6.data[5].y);
    // 0x000878: 0x51A0059801472011 Ffma
    temp_257 = fma(temp_86, temp_209, fp_c6.data[5].x);
    // 0x000888: 0x51A0059801671A0B Ffma
    temp_258 = fma(temp_88, temp_209, fp_c6.data[5].z);
    // 0x000890: 0x5C68100001570F0F Fmul
    temp_259 = temp_236 * temp_256;
    // 0x000898: 0x49A206980AC70D15 Ffma
    temp_260 = 0.0 - temp_101;
    temp_261 = fma(temp_101, fp_c6.data[43].x, temp_260);
    // 0x0008A8: 0x5C68100001170E11 Fmul
    temp_262 = temp_238 * temp_257;
    // 0x0008B0: 0x5C68100000B7140B Fmul
    temp_263 = temp_240 * temp_258;
    // 0x0008B8: 0x5C6810000047010E Fmul
    temp_264 = temp_69 * temp_174;
    // 0x0008C8: 0x5C6810000047120D Fmul
    temp_265 = temp_68 * temp_174;
    // 0x0008D0: 0x5C68100000F70A14 Fmul
    temp_266 = temp_216 * temp_259;
    // 0x0008D8: 0x3858103F80071515 Fadd
    temp_267 = temp_261 + 1.0;
    // 0x0008E8: 0x5C68100001170A11 Fmul
    temp_268 = temp_216 * temp_262;
    // 0x0008F0: 0x5C68100000B70A36 Fmul
    temp_269 = temp_216 * temp_263;
    // 0x0008F8: 0x5C9807800FF7000A Mov
    // 0x000908: 0x5C9807800FF7000B Mov
    // 0x000910: 0x5C9807800FF7000F Mov
    // 0x000918: 0x59A40A8001571E24 Ffma
    temp_270 = fma(temp_10, temp_267, temp_267);
    temp_271 = clamp(temp_270, 0.0, 1.0);
    // 0x000928: 0x1E23E22F98371115 Fmul32i
    temp_272 = temp_268 * 0.159154937;
    // 0x000930: 0x1E23E22F98371411 Fmul32i
    temp_273 = temp_266 * 0.159154937;
    // 0x000938: 0xEF5400000047FF15 Stl
    local_memory[1] = floatBitsToUint(temp_272);
    // 0x000948: 0x32A211C000070E0E Ffma
    temp_274 = 0.0 - temp_115;
    temp_275 = fma(temp_264, 2.0, temp_274);
    // 0x000950: 0xEF5400000007FF11 Stl
    local_memory[0] = floatBitsToUint(temp_273);
    // 0x000958: 0x32A2114000070D0D Ffma
    temp_276 = 0.0 - temp_117;
    temp_277 = fma(temp_265, 2.0, temp_276);
    // 0x000968: 0x1E23E22F98373636 Fmul32i
    temp_278 = temp_269 * 0.159154937;
    // 0x000970: 0xF0F800000000000F Sync
    temp_279 = 0.0;
    temp_280 = 0.0;
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
    if (!temp_253)
    {
        // 0x000978: 0x5C9807800FF70030 Mov
        temp_291 = 0;
        do
        {
            // 0x000988: 0x5C18020003072B17 Iscadd
            temp_293 = int(temp_196) << 4;
            temp_294 = temp_293 + temp_291;
            // 0x000990: 0xE003FF87CFF7FF33 Ipa
            // 0x000998: 0x1C00000000173030 Iadd32i
            temp_295 = temp_291 + 1;
            // 0x0009A8: 0xE003FF87CFF7FF35 Ipa
            // 0x0009B0: 0x3848000000471717 Shl
            temp_296 = temp_294 << 4;
            // 0x0009B8: 0xE003FF87CFF7FF34 Ipa
            // 0x0009C8: 0x5B6C03800297300F Isetp
            temp_292 = uint(temp_295) >= floatBitsToUint(temp_208);
            // 0x0009D0: 0xE290000057800000 Ssy
            // 0x0009D8: 0xEF94008200071717 Ldc
            temp_297 = temp_296 + 0x2000;
            temp_298 = uint(temp_297) >> 2;
            temp_299 = temp_298 >> 2;
            temp_300 = int(temp_298) & 3;
            temp_301 = fp_c8.data[int(temp_299)][temp_300];
            // 0x0009E8: 0x5080000000473333 Mufu
            // 0x0009F0: 0x5080000000473535 Mufu
            // 0x0009F8: 0x5080000000473434 Mufu
            // 0x000A08: 0xE043FF8D0337FF33 Ipa
            temp_302 = in_attr5.x;
            // 0x000A10: 0xE043FF8D8357FF35 Ipa
            temp_303 = in_attr5.z;
            // 0x000A18: 0xE043FF8D4347FF34 Ipa
            temp_304 = in_attr5.y;
            // 0x000A28: 0x3848000000671731 Shl
            temp_305 = floatBitsToInt(temp_301) << 6;
            // 0x000A30: 0xEF95008001073110 Ldc
            temp_306 = temp_305 + 16;
            temp_307 = uint(temp_306) >> 2;
            temp_308 = temp_307 >> 2;
            temp_309 = int(temp_307) & 3;
            temp_310 = fp_c8.data[int(temp_308)][temp_309];
            temp_311 = int(temp_307) + 1;
            temp_312 = uint(temp_311) >> 2;
            temp_313 = temp_311 & 3;
            temp_314 = fp_c8.data[int(temp_312)][temp_313];
            // 0x000A38: 0xEF95008001873114 Ldc
            temp_315 = temp_305 + 24;
            temp_316 = uint(temp_315) >> 2;
            temp_317 = temp_316 >> 2;
            temp_318 = int(temp_316) & 3;
            temp_319 = fp_c8.data[int(temp_317)][temp_318];
            temp_320 = int(temp_316) + 1;
            temp_321 = uint(temp_320) >> 2;
            temp_322 = temp_320 & 3;
            temp_323 = fp_c8.data[int(temp_321)][temp_322];
            // 0x000A48: 0xEF95008002073116 Ldc
            temp_324 = temp_305 + 32;
            temp_325 = uint(temp_324) >> 2;
            temp_326 = temp_325 >> 2;
            temp_327 = int(temp_325) & 3;
            temp_328 = fp_c8.data[int(temp_326)][temp_327];
            temp_329 = int(temp_325) + 1;
            temp_330 = uint(temp_329) >> 2;
            temp_331 = temp_329 & 3;
            temp_332 = fp_c8.data[int(temp_330)][temp_331];
            // 0x000A50: 0x5C58300003371033 Fadd
            temp_333 = 0.0 - temp_302;
            temp_334 = temp_310 + temp_333;
            // 0x000A58: 0x5C58300003471134 Fadd
            temp_335 = 0.0 - temp_304;
            temp_336 = temp_314 + temp_335;
            // 0x000A68: 0x5C58300003571414 Fadd
            temp_337 = 0.0 - temp_303;
            temp_338 = temp_319 + temp_337;
            // 0x000A70: 0x5C68100003373311 Fmul
            temp_339 = temp_334 * temp_334;
            // 0x000A78: 0x59A10A0001471510 Ffma
            temp_340 = 0.0 - temp_338;
            temp_341 = fma(temp_323, temp_340, temp_338);
            // 0x000A88: 0x59A0088003473415 Ffma
            temp_342 = fma(temp_336, temp_336, temp_339);
            // 0x000A90: 0x59A00A8001071035 Ffma
            temp_343 = fma(temp_341, temp_341, temp_342);
            // 0x000A98: 0x5080000000573511 Mufu
            temp_344 = inversesqrt(temp_343);
            // 0x000AA8: 0x5080000000873535 Mufu
            temp_345 = sqrt(temp_343);
            // 0x000AB0: 0x5C68100001173337 Fmul
            temp_346 = temp_334 * temp_344;
            // 0x000AB8: 0x5C68100001171010 Fmul
            temp_347 = temp_341 * temp_344;
            // 0x000AC8: 0x5C68100001173411 Fmul
            temp_348 = temp_336 * temp_344;
            // 0x000AD0: 0x5C69100001673716 Fmul
            temp_349 = 0.0 - temp_328;
            temp_350 = temp_346 * temp_349;
            // 0x000AD8: 0x59A10B0001771111 Ffma
            temp_351 = 0.0 - temp_332;
            temp_352 = fma(temp_348, temp_351, temp_350);
            // 0x000AE8: 0xEF94008002873116 Ldc
            temp_353 = temp_305 + 40;
            temp_354 = uint(temp_353) >> 2;
            temp_355 = temp_354 >> 2;
            temp_356 = int(temp_354) & 3;
            temp_357 = fp_c8.data[int(temp_355)][temp_356];
            // 0x000AF0: 0x010404000007F017 Mov32i
            // 0x000AF8: 0x59A1088001671016 Ffma
            temp_358 = 0.0 - temp_357;
            temp_359 = fma(temp_347, temp_358, temp_352);
            // 0x000B08: 0xEF95008003873110 Ldc
            temp_360 = temp_305 + 56;
            temp_361 = uint(temp_360) >> 2;
            temp_362 = temp_361 >> 2;
            temp_363 = int(temp_361) & 3;
            temp_364 = fp_c8.data[int(temp_362)][temp_363];
            temp_365 = int(temp_361) + 1;
            temp_366 = uint(temp_365) >> 2;
            temp_367 = temp_365 & 3;
            temp_368 = fp_c8.data[int(temp_366)][temp_367];
            // 0x000B10: 0x59A4088001071610 Ffma
            temp_369 = fma(temp_359, temp_364, temp_368);
            temp_370 = clamp(temp_369, 0.0, 1.0);
            // 0x000B18: 0x5C68100001071016 Fmul
            temp_371 = temp_370 * temp_370;
            // 0x000B28: 0x33A00BC000071010 Ffma
            temp_372 = fma(temp_370, -2.0, 3.0);
            // 0x000B30: 0x5C68100001071616 Fmul
            temp_373 = temp_371 * temp_372;
            // 0x000B38: 0xEF95008003073110 Ldc
            temp_374 = temp_305 + 48;
            temp_375 = uint(temp_374) >> 2;
            temp_376 = temp_375 >> 2;
            temp_377 = int(temp_375) & 3;
            temp_378 = fp_c8.data[int(temp_376)][temp_377];
            temp_379 = int(temp_375) + 1;
            temp_380 = uint(temp_379) >> 2;
            temp_381 = temp_379 & 3;
            temp_382 = fp_c8.data[int(temp_380)][temp_381];
            // 0x000B48: 0x59A4088003571035 Ffma
            temp_383 = fma(temp_378, temp_345, temp_382);
            temp_384 = clamp(temp_383, 0.0, 1.0);
            // 0x000B50: 0x33A00BC000073517 Ffma
            temp_385 = fma(temp_384, -2.0, 3.0);
            // 0x000B58: 0x5C68100003573535 Fmul
            temp_386 = temp_384 * temp_384;
            // 0x000B68: 0x5C68100001773517 Fmul
            temp_387 = temp_386 * temp_385;
            // 0x000B70: 0x39585042F0071435 Fadd
            temp_388 = abs(temp_338);
            temp_389 = temp_388 + -120.0;
            // 0x000B78: 0x5C68100001771616 Fmul
            temp_390 = temp_373 * temp_387;
            // 0x000B88: 0x1EABD4CCCCD73535 Fmul32i
            temp_391 = temp_389 * -0.0500000007;
            temp_392 = clamp(temp_391, 0.0, 1.0);
            // 0x000B90: 0x36247F9000171717 Xmad
            temp_393 = floatBitsToUint(temp_387) >> 16;
            temp_394 = int(temp_393) << 16;
            // 0x000B98: 0x5C68100003571616 Fmul
            temp_395 = temp_390 * temp_392;
            // 0x000BA8: 0x5BB383800FF71607 Fsetp
            temp_396 = temp_395 <= 0.0;
            // 0x000BB0: 0x7A05083C0F00FF17 Hadd2
            temp_291 = temp_295;
            temp_397 = uint(temp_394);
            temp_398 = temp_279;
            temp_399 = temp_280;
            temp_400 = temp_281;
            temp_401 = temp_282;
            temp_402 = temp_283;
            temp_403 = temp_284;
            if (temp_396)
            {
                temp_404 = unpackHalf2x16(uint(temp_394)).y;
                temp_405 = packHalf2x16(vec2(1.0, temp_404));
                temp_397 = temp_405;
            }
            // 0x000BB8: 0x5D2103902FF71707 Hsetp2
            temp_406 = unpackHalf2x16(temp_397).x;
            temp_407 = temp_406 == 0.0;
            // 0x000BC8: 0xF0F800000008000F Sync
            if (temp_407)
            {
                // 0x000BD0: 0x5080000000471010 Mufu
                temp_408 = 1.0 / temp_378;
                // 0x000BD8: 0x5C69100001071110 Fmul
                temp_409 = 0.0 - temp_408;
                temp_410 = temp_382 * temp_409;
                // 0x000BE8: 0x5C60138001071414 Fmnmx
                temp_411 = min(temp_338, temp_410);
                // 0x000BF0: 0x5C61178001471014 Fmnmx
                temp_412 = 0.0 - temp_410;
                temp_413 = max(temp_412, temp_411);
                // 0x000BF8: 0x59A00A8001471415 Ffma
                temp_414 = fma(temp_413, temp_413, temp_342);
                // 0x000C08: 0x5080000000571511 Mufu
                temp_415 = inversesqrt(temp_414);
                // 0x000C10: 0x5080000000871515 Mufu
                temp_416 = sqrt(temp_414);
                // 0x000C18: 0x5C68100001173333 Fmul
                temp_417 = temp_334 * temp_415;
                // 0x000C28: 0x5C68100001173434 Fmul
                temp_418 = temp_336 * temp_415;
                // 0x000C30: 0x5C68100001171414 Fmul
                temp_419 = temp_413 * temp_415;
                // 0x000C38: 0x5C58100003372810 Fadd
                temp_420 = temp_113 + temp_417;
                // 0x000C48: 0x5C58100003472311 Fadd
                temp_421 = temp_115 + temp_418;
                // 0x000C50: 0x5C58100001472217 Fadd
                temp_422 = temp_117 + temp_419;
                // 0x000C58: 0x5C68100001071035 Fmul
                temp_423 = temp_420 * temp_420;
                // 0x000C68: 0x59A01A8001171135 Ffma
                temp_424 = fma(temp_421, temp_421, temp_423);
                // 0x000C70: 0x59A01A8001771735 Ffma
                temp_425 = fma(temp_422, temp_422, temp_424);
                // 0x000C78: 0x5080000000573535 Mufu
                temp_426 = inversesqrt(temp_425);
                // 0x000C88: 0x5C68100003571010 Fmul
                temp_427 = temp_420 * temp_426;
                // 0x000C90: 0x5C68100003571717 Fmul
                temp_428 = temp_422 * temp_426;
                // 0x000C98: 0x5C68100003571111 Fmul
                temp_429 = temp_421 * temp_426;
                // 0x000CA8: 0x5C68100003370C35 Fmul
                temp_430 = temp_70 * temp_417;
                // 0x000CB0: 0x5C68100001073337 Fmul
                temp_431 = temp_417 * temp_427;
                // 0x000CB8: 0x5C68100001070C10 Fmul
                temp_432 = temp_70 * temp_427;
                // 0x000CC8: 0x59A01A8003470133 Ffma
                temp_433 = fma(temp_69, temp_418, temp_430);
                // 0x000CD0: 0xEF94008002C73135 Ldc
                temp_434 = temp_305 + 44;
                temp_435 = uint(temp_434) >> 2;
                temp_436 = temp_435 >> 2;
                temp_437 = int(temp_435) & 3;
                temp_438 = fp_c8.data[int(temp_436)][temp_437];
                // 0x000CD8: 0x59A01B8001173434 Ffma
                temp_439 = fma(temp_418, temp_429, temp_431);
                // 0x000CE8: 0x59A0198001471233 Ffma
                temp_440 = fma(temp_68, temp_419, temp_433);
                // 0x000CF0: 0x59A41A0001771434 Ffma
                temp_441 = fma(temp_419, temp_428, temp_439);
                temp_442 = clamp(temp_441, 0.0, 1.0);
                // 0x000CF8: 0x5C5C30000FF73314 Fadd
                temp_443 = temp_440 + -0.0;
                temp_444 = clamp(temp_443, 0.0, 1.0);
                // 0x000D08: 0x5080000000473535 Mufu
                temp_445 = 1.0 / temp_438;
                // 0x000D10: 0x51A00A8400473515 Ffma
                temp_446 = fma(temp_445, temp_416, fp_c1.data[1].x);
                // 0x000D18: 0x59A0080001170135 Ffma
                temp_447 = fma(temp_69, temp_429, temp_432);
                // 0x000D28: 0xEF95008000073110 Ldc
                temp_448 = uint(temp_305) >> 2;
                temp_449 = temp_448 >> 2;
                temp_450 = int(temp_448) & 3;
                temp_451 = fp_c8.data[int(temp_449)][temp_450];
                temp_452 = int(temp_448) + 1;
                temp_453 = uint(temp_452) >> 2;
                temp_454 = temp_452 & 3;
                temp_455 = fp_c8.data[int(temp_453)][temp_454];
                // 0x000D30: 0x59A41A8001771235 Ffma
                temp_456 = fma(temp_68, temp_428, temp_447);
                temp_457 = clamp(temp_456, 0.0, 1.0);
                // 0x000D38: 0x5080000000471515 Mufu
                temp_458 = 1.0 / temp_446;
                // 0x000D48: 0x01040DF760C7F017 Mov32i
                // 0x000D50: 0xEF94008000873131 Ldc
                temp_459 = temp_305 + 8;
                temp_460 = uint(temp_459) >> 2;
                temp_461 = temp_460 >> 2;
                temp_462 = int(temp_460) & 3;
                temp_463 = fp_c8.data[int(temp_461)][temp_462];
                // 0x000D58: 0x49A20B8400373417 Ffma
                temp_464 = fma(temp_442, fp_c1.data[0].w, -6.98316002);
                // 0x000D68: 0x1E23FB3333371515 Fmul32i
                temp_465 = temp_458 * 1.39999998;
                // 0x000D70: 0x5C68100001773417 Fmul
                temp_466 = temp_442 * temp_464;
                // 0x000D78: 0x59A21A8003572D34 Ffma
                temp_467 = 0.0 - temp_457;
                temp_468 = fma(temp_165, temp_457, temp_467);
                // 0x000D88: 0x5C68100001571515 Fmul
                temp_469 = temp_465 * temp_465;
                // 0x000D90: 0x5C90008001770017 Rro
                // 0x000D98: 0x51A01A0400173535 Ffma
                temp_470 = fma(temp_457, temp_468, fp_c1.data[0].y);
                // 0x000DA8: 0x5080000000271717 Mufu
                temp_471 = exp2(temp_466);
                // 0x000DB0: 0x59A10A0001472C34 Ffma
                temp_472 = 0.0 - temp_444;
                temp_473 = fma(temp_167, temp_472, temp_444);
                // 0x000DB8: 0x5080000000473535 Mufu
                temp_474 = 1.0 / temp_470;
                // 0x000DC8: 0x59A10A8001573315 Ffma
                temp_475 = 0.0 - temp_469;
                temp_476 = fma(temp_440, temp_475, temp_469);
                // 0x000DD0: 0x5C58100003472C34 Fadd
                temp_477 = temp_167 + temp_473;
                // 0x000DD8: 0x5C5C100001573315 Fadd
                temp_478 = temp_440 + temp_476;
                temp_479 = clamp(temp_478, 0.0, 1.0);
                // 0x000DE8: 0x5080000000473434 Mufu
                temp_480 = 1.0 / temp_477;
                // 0x000DF0: 0x59A10B8001770533 Ffma
                temp_481 = 0.0 - temp_471;
                temp_482 = fma(temp_212, temp_481, temp_471);
                // 0x000DF8: 0x5C68100003572E35 Fmul
                temp_483 = temp_158 * temp_474;
                // 0x000E08: 0x5C58100003370533 Fadd
                temp_484 = temp_212 + temp_482;
                // 0x000E10: 0x5C68100001071610 Fmul
                temp_485 = temp_395 * temp_451;
                // 0x000E18: 0x5C68100001171611 Fmul
                temp_486 = temp_395 * temp_455;
                // 0x000E28: 0x5C68100003573535 Fmul
                temp_487 = temp_483 * temp_483;
                // 0x000E30: 0x5C68100003472A34 Fmul
                temp_488 = temp_203 * temp_480;
                // 0x000E38: 0x4C68101406273333 Fmul
                temp_489 = temp_484 * fp_c5.data[24].z;
                // 0x000E48: 0x5C68100003171631 Fmul
                temp_490 = temp_395 * temp_463;
                // 0x000E50: 0x59A10B8001770616 Ffma
                temp_491 = 0.0 - temp_471;
                temp_492 = fma(temp_213, temp_491, temp_471);
                // 0x000E58: 0x59A10B8001770717 Ffma
                temp_493 = 0.0 - temp_471;
                temp_494 = fma(temp_215, temp_493, temp_471);
                // 0x000E68: 0x5C68100003473534 Fmul
                temp_495 = temp_487 * temp_488;
                // 0x000E70: 0x5C68100001073333 Fmul
                temp_496 = temp_489 * temp_485;
                // 0x000E78: 0x5C68100001571010 Fmul
                temp_497 = temp_485 * temp_479;
                // 0x000E88: 0x5C58100001670616 Fadd
                temp_498 = temp_213 + temp_492;
                // 0x000E90: 0x5C58100001770717 Fadd
                temp_499 = temp_215 + temp_494;
                // 0x000E98: 0x5C68100003471434 Fmul
                temp_500 = temp_444 * temp_495;
                // 0x000EA8: 0x49A007840067100F Ffma
                temp_501 = fma(temp_497, fp_c1.data[1].z, temp_279);
                // 0x000EB0: 0x4C68101406271616 Fmul
                temp_502 = temp_498 * fp_c5.data[24].z;
                // 0x000EB8: 0x4C68101406271717 Fmul
                temp_503 = temp_499 * fp_c5.data[24].z;
                // 0x000EC8: 0x5C68100003473333 Fmul
                temp_504 = temp_496 * temp_500;
                // 0x000ED0: 0x5C68100001171616 Fmul
                temp_505 = temp_502 * temp_486;
                // 0x000ED8: 0x5C68100003171717 Fmul
                temp_506 = temp_503 * temp_490;
                // 0x000EE8: 0x5C68100001571111 Fmul
                temp_507 = temp_486 * temp_479;
                // 0x000EF0: 0x5C68100001573115 Fmul
                temp_508 = temp_490 * temp_479;
                // 0x000EF8: 0x49A005040057330A Ffma
                temp_509 = fma(temp_504, fp_c1.data[1].y, temp_280);
                // 0x000F08: 0x5C68100003471616 Fmul
                temp_510 = temp_505 * temp_500;
                // 0x000F10: 0x5C68100003471717 Fmul
                temp_511 = temp_506 * temp_500;
                // 0x000F18: 0x49A0098400671113 Ffma
                temp_512 = fma(temp_507, fp_c1.data[1].z, temp_281);
                // 0x000F28: 0x49A00C0400671518 Ffma
                temp_513 = fma(temp_508, fp_c1.data[1].z, temp_282);
                // 0x000F30: 0x49A005840057160B Ffma
                temp_514 = fma(temp_510, fp_c1.data[1].y, temp_283);
                // 0x000F38: 0x49A00C8400571719 Ffma
                temp_515 = fma(temp_511, fp_c1.data[1].y, temp_284);
                // 0x000F48: 0xF0F800000007000F Sync
                temp_398 = temp_501;
                temp_399 = temp_509;
                temp_400 = temp_512;
                temp_401 = temp_513;
                temp_402 = temp_514;
                temp_403 = temp_515;
            }
            // 0x000F50: 0xE2400FFFA289000F Bra
            temp_279 = temp_398;
            temp_280 = temp_399;
            temp_281 = temp_400;
            temp_282 = temp_401;
            temp_283 = temp_402;
            temp_284 = temp_403;
            temp_285 = temp_400;
            temp_286 = temp_401;
            temp_287 = temp_398;
            temp_288 = temp_403;
            temp_289 = temp_399;
            temp_290 = temp_402;
        }
        while (!temp_292);
        // 0x000F58: 0xF0F800000007000F Sync
    }
    // 0x000F68: 0x5C62578000170C10 Fmnmx
    temp_516 = abs(temp_70);
    temp_517 = abs(temp_69);
    temp_518 = max(temp_516, temp_517);
    // 0x000F70: 0xE003FF87CFF7FF28 Ipa
    // 0x000F78: 0x5C62578000E72F14 Fmnmx
    temp_519 = abs(temp_191);
    temp_520 = abs(temp_275);
    temp_521 = max(temp_519, temp_520);
    // 0x000F88: 0xEF4410000047FF34 Ldl
    temp_522 = uintBitsToFloat(local_memory[1]);
    // 0x000F90: 0x5C60578001071210 Fmnmx
    temp_523 = abs(temp_68);
    temp_524 = max(temp_523, temp_518);
    // 0x000F98: 0xEF4410000007FF31 Ldl
    temp_525 = uintBitsToFloat(local_memory[0]);
    // 0x000FA8: 0x38681040E0070329 Fmul
    temp_526 = temp_151 * 7.0;
    // 0x000FB0: 0x5080000000471033 Mufu
    temp_527 = 1.0 / temp_524;
    // 0x000FB8: 0x5C60578001470D14 Fmnmx
    temp_528 = abs(temp_277);
    temp_529 = max(temp_528, temp_521);
    // 0x000FC8: 0x3868104080070323 Fmul
    temp_530 = temp_151 * 4.0;
    // 0x000FD0: 0x5080000000471414 Mufu
    temp_531 = 1.0 / temp_529;
    // 0x000FD8: 0x4C98079C0207002B Mov
    // 0x000FE8: 0x5C69100003371212 Fmul
    temp_532 = 0.0 - temp_527;
    temp_533 = temp_68 * temp_532;
    // 0x000FF0: 0x5C68100003370C10 Fmul
    temp_534 = temp_70 * temp_527;
    // 0x000FF8: 0x5080000000472828 Mufu
    // 0x001008: 0x5C68100003370111 Fmul
    temp_535 = temp_69 * temp_527;
    // 0x001010: 0x5C68100001470E16 Fmul
    temp_536 = temp_275 * temp_531;
    // 0x001018: 0x5C69100001470D17 Fmul
    temp_537 = 0.0 - temp_531;
    temp_538 = temp_277 * temp_537;
    // 0x001028: 0xC0BA0163EFF7100C Tex
    temp_539 = textureLod(fp_t_tcb_16, vec3(temp_534, temp_535, temp_533), 0.0).xyz;
    temp_540 = temp_539.x;
    temp_541 = temp_539.y;
    temp_542 = temp_539.z;
    // 0x001030: 0x5C68100001472F15 Fmul
    temp_543 = temp_191 * temp_531;
    // 0x001038: 0x010000000017F014 Mov32i
    // 0x001048: 0xE043FF910287FF2C Ipa
    temp_544 = in_attr9.x;
    // 0x001050: 0x5C98078001270022 Mov
    // 0x001058: 0xE043FF914287FF2D Ipa
    temp_545 = in_attr9.y;
    // 0x001068: 0x3859103F80070303 Fadd
    temp_546 = 0.0 - temp_151;
    temp_547 = temp_546 + 1.0;
    // 0x001070: 0xE043FF918287FF2E Ipa
    temp_548 = in_attr9.z;
    // 0x001078: 0xC1BA0143F2971414 Tex
    temp_549 = textureLod(fp_t_tcb_14, vec4(temp_543, temp_536, temp_538, float(1)), temp_526).xyz;
    temp_550 = temp_549.x;
    temp_551 = temp_549.y;
    temp_552 = temp_549.z;
    // 0x001088: 0xD9A2018232271010 Texs
    temp_553 = textureLod(fp_t_tcb_18, vec3(temp_534, temp_535, temp_533), temp_530).xyz;
    temp_554 = temp_553.x;
    temp_555 = temp_553.y;
    temp_556 = temp_553.z;
    // 0x001090: 0xDEBA0000C2B72C2C TexB
    temp_557 = texture(fp_t_cb7_20, vec3(temp_544, temp_545, temp_548)).x;
    // 0x001098: 0x49A004180A171308 Ffma
    temp_558 = fma(temp_285, fp_c6.data[40].y, temp_245);
    // 0x0010A8: 0x010410676C97F013 Mov32i
    // 0x0010B0: 0x5C68100000370303 Fmul
    temp_559 = temp_547 * temp_547;
    // 0x0010B8: 0x3859103F8007042F Fadd
    temp_560 = 0.0 - temp_174;
    temp_561 = temp_560 + 1.0;
    // 0x0010C8: 0x49A004980A171809 Ffma
    temp_562 = fma(temp_286, fp_c6.data[40].y, temp_251);
    // 0x0010D0: 0x5080000000372F17 Mufu
    temp_563 = log2(temp_561);
    // 0x0010D8: 0x49A019180A170F32 Ffma
    temp_564 = fma(temp_287, fp_c6.data[40].y, temp_249);
    // 0x0010E8: 0x0103E2CD9E87F018 Mov32i
    // 0x0010F0: 0x49A0098400A70413 Ffma
    temp_565 = fma(temp_174, fp_c1.data[2].z, 8.40400028);
    // 0x0010F8: 0x5C68100000370303 Fmul
    temp_566 = temp_559 * temp_559;
    // 0x001108: 0x1E23E468DB970412 Fmul32i
    temp_567 = temp_174 * 0.193900004;
    // 0x001110: 0x4C68101809072F0F Fmul
    temp_568 = temp_561 * fp_c6.data[36].x;
    // 0x001118: 0x4C9807980B47002A Mov
    // 0x001128: 0x5080400000370F0F Mufu
    temp_569 = abs(temp_568);
    temp_570 = log2(temp_569);
    // 0x001130: 0x51A0098400B70413 Ffma
    temp_571 = fma(temp_174, temp_565, fp_c1.data[2].w);
    // 0x001138: 0x49A20C0400C70318 Ffma
    temp_572 = fma(temp_566, fp_c1.data[3].x, -0.168799996);
    // 0x001148: 0x49A0090400770312 Ffma
    temp_573 = fma(temp_566, fp_c1.data[1].w, temp_567);
    // 0x001150: 0x49A01B180A171936 Ffma
    temp_574 = fma(temp_288, fp_c6.data[40].y, temp_278);
    // 0x001158: 0x4C98079800970029 Mov
    // 0x001168: 0xF0F0000034570000 Depbar
    // 0x001170: 0x51A215180B471D1D Ffma
    temp_575 = 0.0 - fp_c6.data[45].x;
    temp_576 = fma(temp_92, fp_c6.data[45].x, temp_575);
    // 0x001178: 0x51A0098400D70422 Ffma
    temp_577 = fma(temp_174, temp_571, fp_c1.data[3].y);
    // 0x001188: 0x5C68100001870318 Fmul
    temp_578 = temp_566 * temp_572;
    // 0x001190: 0x088BF05D63971219 Fadd32i
    temp_579 = temp_573 + -0.522800028;
    // 0x001198: 0x51A215180B470000 Ffma
    temp_580 = 0.0 - fp_c6.data[45].x;
    temp_581 = fma(temp_93, fp_c6.data[45].x, temp_580);
    // 0x0011A8: 0x51A215180B471C1C Ffma
    temp_582 = 0.0 - fp_c6.data[45].x;
    temp_583 = fma(temp_91, fp_c6.data[45].x, temp_582);
    // 0x0011B0: 0x0104066978D7F02A Mov32i
    // 0x0011B8: 0x4C68101809170F0F Fmul
    temp_584 = temp_570 * fp_c6.data[36].y;
    // 0x0011C8: 0x5C60138002271812 Fmnmx
    temp_585 = min(temp_578, temp_577);
    // 0x0011D0: 0x5C68100001970418 Fmul
    temp_586 = temp_174 * temp_579;
    // 0x0011D8: 0x4C68101808971704 Fmul
    temp_587 = temp_563 * fp_c6.data[34].y;
    // 0x0011E8: 0x4C9807980967002E Mov
    // 0x0011F0: 0x49A215040087032A Ffma
    temp_588 = fma(temp_566, fp_c1.data[2].x, -3.60299993);
    // 0x0011F8: 0x0103F0000007F02B Mov32i
    // 0x001208: 0x5C90008000F70019 Rro
    // 0x001210: 0xE04BFF904287FF0F Ipa
    temp_589 = in_attr8.y;
    temp_590 = clamp(temp_589, 0.0, 1.0);
    // 0x001218: 0x4C98079408270017 Mov
    // 0x001228: 0x5084000000271919 Mufu
    temp_591 = exp2(temp_584);
    temp_592 = clamp(temp_591, 0.0, 1.0);
    // 0x001230: 0x5C90008000470022 Rro
    // 0x001238: 0x51A015040097032D Ffma
    temp_593 = fma(temp_566, temp_588, fp_c1.data[2].y);
    // 0x001248: 0x5084000000272222 Mufu
    temp_594 = exp2(temp_587);
    temp_595 = clamp(temp_594, 0.0, 1.0);
    // 0x001250: 0x4C58101408172E2A Fadd
    temp_596 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001258: 0x32A015BF00070113 Ffma
    temp_597 = fma(temp_69, 0.5, 0.5);
    // 0x001268: 0x4C98079800870001 Mov
    // 0x001270: 0x4C68101406271730 Fmul
    temp_598 = fp_c5.data[32].z * fp_c5.data[24].z;
    // 0x001278: 0x4C98079800A7002B Mov
    // 0x001288: 0x59A00C0002D70318 Ffma
    temp_599 = fma(temp_566, temp_593, temp_586);
    // 0x001290: 0x4C59101800572904 Fadd
    temp_600 = 0.0 - fp_c6.data[2].y;
    temp_601 = temp_600 + fp_c6.data[1].y;
    // 0x001298: 0x4C59101800470101 Fadd
    temp_602 = 0.0 - fp_c6.data[2].x;
    temp_603 = temp_602 + fp_c6.data[1].x;
    // 0x0012A8: 0x5C68100001972A19 Fmul
    temp_604 = temp_596 * temp_592;
    // 0x0012B0: 0x4C59101800672B29 Fadd
    temp_605 = 0.0 - fp_c6.data[2].z;
    temp_606 = temp_605 + fp_c6.data[1].z;
    // 0x0012B8: 0x4C9807980867002A Mov
    // 0x0012C8: 0x4C68101808872203 Fmul
    temp_607 = temp_595 * fp_c6.data[34].x;
    // 0x0012D0: 0x5C5C30000FF71222 Fadd
    temp_608 = temp_585 + -0.0;
    temp_609 = clamp(temp_608, 0.0, 1.0);
    // 0x0012D8: 0x51A0099800870101 Ffma
    temp_610 = fma(temp_603, temp_597, fp_c6.data[2].x);
    // 0x0012E8: 0x4C68101808D71912 Fmul
    temp_611 = temp_604 * fp_c6.data[35].y;
    // 0x0012F0: 0x4C68101808E71917 Fmul
    temp_612 = temp_604 * fp_c6.data[35].z;
    // 0x0012F8: 0x4C68101808C71919 Fmul
    temp_613 = temp_604 * fp_c6.data[35].x;
    // 0x001308: 0x51A0099800970404 Ffma
    temp_614 = fma(temp_601, temp_597, fp_c6.data[2].y);
    // 0x001310: 0x51A0099800A72913 Ffma
    temp_615 = fma(temp_606, temp_597, fp_c6.data[2].z);
    // 0x001318: 0x386C104248070629 Fmul
    temp_616 = temp_213 * 50.0;
    temp_617 = clamp(temp_616, 0.0, 1.0);
    // 0x001328: 0x4C5C100400E71818 Fadd
    temp_618 = temp_599 + fp_c1.data[3].z;
    temp_619 = clamp(temp_618, 0.0, 1.0);
    // 0x001330: 0x59A01B0003071736 Ffma
    temp_620 = fma(temp_612, temp_598, temp_574);
    // 0x001338: 0x49A10B9408271717 Ffma
    temp_621 = 0.0 - fp_c5.data[32].z;
    temp_622 = fma(temp_612, temp_621, temp_612);
    // 0x001348: 0x51A0151808670303 Ffma
    temp_623 = fma(temp_607, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001350: 0x5C68100002272929 Fmul
    temp_624 = temp_617 * temp_609;
    // 0x001358: 0x5C59100001872218 Fadd
    temp_625 = 0.0 - temp_609;
    temp_626 = temp_625 + temp_619;
    // 0x001368: 0x010404000007F022 Mov32i
    // 0x001370: 0x59A0148001870505 Ffma
    temp_627 = fma(temp_212, temp_626, temp_624);
    // 0x001378: 0x59A0148001870606 Ffma
    temp_628 = fma(temp_213, temp_626, temp_624);
    // 0x001388: 0x59A0148001870707 Ffma
    temp_629 = fma(temp_215, temp_626, temp_624);
    // 0x001390: 0x4C68101406270505 Fmul
    temp_630 = temp_627 * fp_c5.data[24].z;
    // 0x001398: 0x4C68101406270606 Fmul
    temp_631 = temp_628 * fp_c5.data[24].z;
    // 0x0013A8: 0x4C68101406270707 Fmul
    temp_632 = temp_629 * fp_c5.data[24].z;
    // 0x0013B0: 0xF0F0000034370000 Depbar
    // 0x0013B8: 0x49A01A180A170A0A Ffma
    temp_633 = fma(temp_289, fp_c6.data[40].y, temp_522);
    // 0x0013C8: 0x49A018980A170B0B Ffma
    temp_634 = fma(temp_290, fp_c6.data[40].y, temp_525);
    // 0x0013D0: 0x59A005000307190A Ffma
    temp_635 = fma(temp_613, temp_598, temp_633);
    // 0x0013D8: 0x49A10C9408271919 Ffma
    temp_636 = 0.0 - fp_c5.data[32].z;
    temp_637 = fma(temp_613, temp_636, temp_613);
    // 0x0013E8: 0x59A005800307120B Ffma
    temp_638 = fma(temp_611, temp_598, temp_634);
    // 0x0013F0: 0x49A1091408271212 Ffma
    temp_639 = 0.0 - fp_c5.data[32].z;
    temp_640 = fma(temp_611, temp_639, temp_611);
    // 0x0013F8: 0x5C58100001973232 Fadd
    temp_641 = temp_564 + temp_637;
    // 0x001408: 0x5C58100001270808 Fadd
    temp_642 = temp_558 + temp_640;
    // 0x001410: 0x5C58100001770912 Fadd
    temp_643 = temp_562 + temp_622;
    // 0x001418: 0xE043FF900287FF09 Ipa
    temp_644 = in_attr8.x;
    // 0x001428: 0xF0F0000034270000 Depbar
    // 0x001430: 0x49A0060400670119 Ffma
    temp_645 = fma(temp_610, fp_c1.data[1].z, temp_540);
    // 0x001438: 0x49A007040067130C Ffma
    temp_646 = fma(temp_615, fp_c1.data[1].z, temp_542);
    // 0x001448: 0x49A0068400670404 Ffma
    temp_647 = fma(temp_614, fp_c1.data[1].z, temp_541);
    // 0x001450: 0x4C68101808771B0E Fmul
    temp_648 = temp_89 * fp_c6.data[33].w;
    // 0x001458: 0x33A0114000070F01 Ffma
    temp_649 = fma(temp_590, -2.0, 3.0);
    // 0x001468: 0x5C68100000F70F0F Fmul
    temp_650 = temp_590 * temp_590;
    // 0x001470: 0x59A20C8000372020 Ffma
    temp_651 = 0.0 - temp_645;
    temp_652 = fma(temp_86, temp_623, temp_651);
    // 0x001478: 0x59A2020000372121 Ffma
    temp_653 = 0.0 - temp_647;
    temp_654 = fma(temp_87, temp_623, temp_653);
    // 0x001488: 0x59A2060000371A03 Ffma
    temp_655 = 0.0 - temp_646;
    temp_656 = fma(temp_88, temp_623, temp_655);
    // 0x001490: 0x5C68100000F70101 Fmul
    temp_657 = temp_649 * temp_650;
    // 0x001498: 0x59A00C8000E72020 Ffma
    temp_658 = fma(temp_652, temp_648, temp_645);
    // 0x0014A8: 0x59A0020000E72121 Ffma
    temp_659 = fma(temp_654, temp_648, temp_647);
    // 0x0014B0: 0xF0F0000034170000 Depbar
    // 0x0014B8: 0x49A0081808571410 Ffma
    temp_660 = fma(temp_550, fp_c6.data[33].y, temp_554);
    // 0x0014C8: 0x59A0060000E70303 Ffma
    temp_661 = fma(temp_656, temp_648, temp_646);
    // 0x0014D0: 0x49A0089808571511 Ffma
    temp_662 = fma(temp_551, fp_c6.data[33].y, temp_555);
    // 0x0014D8: 0x5C58100003272020 Fadd
    temp_663 = temp_658 + temp_641;
    // 0x0014E8: 0x49A0119808571604 Ffma
    temp_664 = fma(temp_552, fp_c6.data[33].y, temp_556);
    // 0x0014F0: 0x5C58100000872108 Fadd
    temp_665 = temp_659 + temp_642;
    // 0x0014F8: 0x59A0050001070505 Ffma
    temp_666 = fma(temp_630, temp_660, temp_635);
    // 0x001508: 0x5C58100001270303 Fadd
    temp_667 = temp_661 + temp_643;
    // 0x001510: 0x4C9807980287000A Mov
    // 0x001518: 0x59A1100002072520 Ffma
    temp_668 = 0.0 - temp_663;
    temp_669 = fma(temp_7, temp_668, temp_663);
    // 0x001528: 0x59A0058001170606 Ffma
    temp_670 = fma(temp_631, temp_662, temp_638);
    // 0x001530: 0x59A1040000872508 Ffma
    temp_671 = 0.0 - temp_665;
    temp_672 = fma(temp_7, temp_671, temp_665);
    // 0x001538: 0x59A01B0000470707 Ffma
    temp_673 = fma(temp_632, temp_664, temp_620);
    // 0x001548: 0x59A1018000372525 Ffma
    temp_674 = 0.0 - temp_667;
    temp_675 = fma(temp_7, temp_674, temp_667);
    // 0x001550: 0x4C9807980297000C Mov
    // 0x001558: 0x59A0028002071E05 Ffma
    temp_676 = fma(temp_10, temp_669, temp_666);
    // 0x001568: 0x51A0051802871C0A Ffma
    temp_677 = fma(temp_583, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001570: 0x59A0030000871F08 Ffma
    temp_678 = fma(temp_11, temp_672, temp_670);
    // 0x001578: 0x4C68101803770101 Fmul
    temp_679 = temp_657 * fp_c6.data[13].w;
    // 0x001588: 0x59A0038002570225 Ffma
    temp_680 = fma(temp_12, temp_675, temp_673);
    // 0x001590: 0x51A0061802971D1D Ffma
    temp_681 = fma(temp_576, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001598: 0x5C68100000572424 Fmul
    temp_682 = temp_271 * temp_676;
    // 0x0015A8: 0x4C98079802A70005 Mov
    // 0x0015B0: 0x5C68100000872626 Fmul
    temp_683 = temp_255 * temp_678;
    // 0x0015B8: 0xE043FF8C8287FF08 Ipa
    temp_684 = in_attr4.z;
    // 0x0015C8: 0x49A2009803570107 Ffma
    temp_685 = 0.0 - temp_679;
    temp_686 = fma(temp_679, fp_c6.data[13].y, temp_685);
    // 0x0015D0: 0x5C68100002572727 Fmul
    temp_687 = temp_107 * temp_680;
    // 0x0015D8: 0x49A504980BC72C09 Ffma
    temp_688 = 0.0 - fp_c6.data[47].x;
    temp_689 = fma(temp_557, temp_688, temp_644);
    temp_690 = clamp(temp_689, 0.0, 1.0);
    // 0x0015E8: 0x5C58300000A72403 Fadd
    temp_691 = 0.0 - temp_677;
    temp_692 = temp_682 + temp_691;
    // 0x0015F0: 0x5080000000370909 Mufu
    temp_693 = log2(temp_690);
    // 0x0015F8: 0x51A0029802A70000 Ffma
    temp_694 = fma(temp_581, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001608: 0x5C58300001D72602 Fadd
    temp_695 = 0.0 - temp_681;
    temp_696 = temp_683 + temp_695;
    // 0x001610: 0x49A005180BF70304 Ffma
    temp_697 = fma(temp_692, fp_c6.data[47].w, temp_677);
    // 0x001618: 0x5C58300000072703 Fadd
    temp_698 = 0.0 - temp_694;
    temp_699 = temp_687 + temp_698;
    // 0x001628: 0x49A00E980BF70202 Ffma
    temp_700 = fma(temp_696, fp_c6.data[47].w, temp_681);
    // 0x001630: 0x5C60178000470A04 Fmnmx
    temp_701 = max(temp_677, temp_697);
    // 0x001638: 0x4C68101803170905 Fmul
    temp_702 = temp_693 * fp_c6.data[12].y;
    // 0x001648: 0x49A000180BF70303 Ffma
    temp_703 = fma(temp_699, fp_c6.data[47].w, temp_694);
    // 0x001650: 0x5C60178000271D02 Fmnmx
    temp_704 = max(temp_681, temp_700);
    // 0x001658: 0x5C90008000570006 Rro
    // 0x001668: 0x49A2009803470105 Ffma
    temp_705 = 0.0 - temp_679;
    temp_706 = fma(temp_679, fp_c6.data[13].x, temp_705);
    // 0x001670: 0x5080000000270606 Mufu
    temp_707 = exp2(temp_702);
    // 0x001678: 0x5C60178000370003 Fmnmx
    temp_708 = max(temp_694, temp_703);
    // 0x001688: 0x49A2009803670101 Ffma
    temp_709 = 0.0 - temp_679;
    temp_710 = fma(temp_679, fp_c6.data[13].z, temp_709);
    // 0x001690: 0x59A0010000770207 Ffma
    temp_711 = fma(temp_704, temp_686, temp_704);
    // 0x001698: 0x4C58100C03870808 Fadd
    temp_712 = temp_684 + fp_c3.data[14].x;
    // 0x0016A8: 0x59A0020000570405 Ffma
    temp_713 = fma(temp_701, temp_706, temp_701);
    // 0x0016B0: 0x59A0018000170302 Ffma
    temp_714 = fma(temp_708, temp_710, temp_708);
    // 0x0016B8: 0x5C59100000772603 Fadd
    temp_715 = 0.0 - temp_683;
    temp_716 = temp_715 + temp_711;
    // 0x0016C8: 0x0103F8000007F007 Mov32i
    // 0x0016D0: 0x5C59100000572401 Fadd
    temp_717 = 0.0 - temp_682;
    temp_718 = temp_717 + temp_713;
    // 0x0016D8: 0x4C68101802B70604 Fmul
    temp_719 = temp_707 * fp_c6.data[10].w;
    // 0x0016E8: 0x5C59100000272702 Fadd
    temp_720 = 0.0 - temp_687;
    temp_721 = temp_720 + temp_714;
    // 0x0016F0: 0x0103EC000007F005 Mov32i
    // 0x0016F8: 0x5C9807800FF70006 Mov
    // 0x001708: 0x59A0120000470100 Ffma
    temp_722 = fma(temp_718, temp_719, temp_682);
    // 0x001710: 0x59A0130000470301 Ffma
    temp_723 = fma(temp_716, temp_719, temp_683);
    // 0x001718: 0x59A0138000470202 Ffma
    temp_724 = fma(temp_721, temp_719, temp_687);
    // 0x001728: 0x0103F8000007F003 Mov32i
    // 0x001730: 0x49A37F8C03C70804 Ffma
    temp_725 = 0.0 - fp_c3.data[15].x;
    temp_726 = fma(temp_712, temp_725, -0.0);
    // 0x001738: 0xE30000000007000F Exit
    out_attr0.x = temp_722;
    out_attr0.y = temp_723;
    out_attr0.z = temp_724;
    out_attr0.w = 1.0;
    out_attr1.x = temp_726;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
