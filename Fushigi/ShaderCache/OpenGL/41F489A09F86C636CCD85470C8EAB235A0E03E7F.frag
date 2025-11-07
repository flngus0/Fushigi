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
    precise float temp_181;
    uint temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    int temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    int temp_195;
    uint temp_196;
    uint temp_197;
    int temp_198;
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
    bool temp_241;
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
    int temp_292;
    bool temp_293;
    int temp_294;
    int temp_295;
    int temp_296;
    int temp_297;
    int temp_298;
    uint temp_299;
    uint temp_300;
    int temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
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
    uint temp_394;
    int temp_395;
    precise float temp_396;
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
    int temp_435;
    uint temp_436;
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
    uint temp_449;
    uint temp_450;
    int temp_451;
    precise float temp_452;
    int temp_453;
    uint temp_454;
    int temp_455;
    precise float temp_456;
    precise float temp_457;
    precise float temp_458;
    precise float temp_459;
    int temp_460;
    uint temp_461;
    uint temp_462;
    int temp_463;
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
    precise float temp_539;
    precise vec3 temp_540;
    precise float temp_541;
    precise float temp_542;
    precise float temp_543;
    precise float temp_544;
    precise float temp_545;
    precise float temp_546;
    precise float temp_547;
    precise float temp_548;
    precise float temp_549;
    precise vec3 temp_550;
    precise float temp_551;
    precise float temp_552;
    precise float temp_553;
    precise vec3 temp_554;
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
    precise float temp_727;
    // 0x000008: 0x0103F0000007F02C Mov32i
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0x5080000000471010 Mufu
    // 0x000028: 0xE043FF8E0107FF0C Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E4107FF0D Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xD830026FF0D70C00 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xD8240360A0D70C24 Texs
    temp_5 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    // 0x000050: 0xD822024020D70C1E Texs
    temp_9 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    temp_12 = temp_9.z;
    // 0x000058: 0xE043FF8A0107FF03 Ipa
    temp_13 = in_attr2.x;
    // 0x000068: 0xE043FF890107FF07 Ipa
    temp_14 = in_attr1.x;
    // 0x000070: 0xE043FF8A4107FF04 Ipa
    temp_15 = in_attr2.y;
    // 0x000078: 0xE043FF894107FF08 Ipa
    temp_16 = in_attr1.y;
    // 0x000088: 0xE043FF8A8107FF05 Ipa
    temp_17 = in_attr2.z;
    // 0x000090: 0xE043FF898107FF09 Ipa
    temp_18 = in_attr1.z;
    // 0x000098: 0xE043FF880107FF0F Ipa
    temp_19 = in_attr0.x;
    // 0x0000A8: 0xE043FF884107FF11 Ipa
    temp_20 = in_attr0.y;
    // 0x0000B0: 0xE043FF888107FF12 Ipa
    temp_21 = in_attr0.z;
    // 0x0000B8: 0x5C68100000370306 Fmul
    temp_22 = temp_13 * temp_13;
    // 0x0000C8: 0x5C6810000077070B Fmul
    temp_23 = temp_14 * temp_14;
    // 0x0000D0: 0x59A0030000470406 Ffma
    temp_24 = fma(temp_15, temp_15, temp_22);
    // 0x0000D8: 0x59A005800087080B Ffma
    temp_25 = fma(temp_16, temp_16, temp_23);
    // 0x0000E8: 0x5C68100000F70F13 Fmul
    temp_26 = temp_19 * temp_19;
    // 0x0000F0: 0x59A0030000570506 Ffma
    temp_27 = fma(temp_17, temp_17, temp_24);
    // 0x0000F8: 0x59A005800097090B Ffma
    temp_28 = fma(temp_18, temp_18, temp_25);
    // 0x000108: 0x5080000000570606 Mufu
    temp_29 = inversesqrt(temp_27);
    // 0x000110: 0x59A0098001171113 Ffma
    temp_30 = fma(temp_20, temp_20, temp_26);
    // 0x000118: 0x5080000000570B0E Mufu
    temp_31 = inversesqrt(temp_28);
    // 0x000128: 0x59A0098001271213 Ffma
    temp_32 = fma(temp_21, temp_21, temp_30);
    // 0x000130: 0x5C6810000067050C Fmul
    temp_33 = temp_17 * temp_29;
    // 0x000138: 0x5C68100000670303 Fmul
    temp_34 = temp_13 * temp_29;
    // 0x000148: 0x5C68100000E7070D Fmul
    temp_35 = temp_14 * temp_31;
    // 0x000150: 0x5C68100000E70807 Fmul
    temp_36 = temp_16 * temp_31;
    // 0x000158: 0x5080000000571308 Mufu
    temp_37 = inversesqrt(temp_32);
    // 0x000168: 0x5C68100000670404 Fmul
    temp_38 = temp_15 * temp_29;
    // 0x000170: 0x5C68100000E7090E Fmul
    temp_39 = temp_18 * temp_31;
    // 0x000178: 0x5C6810000087110B Fmul
    temp_40 = temp_20 * temp_37;
    // 0x000188: 0x5C68100000871212 Fmul
    temp_41 = temp_21 * temp_37;
    // 0x000190: 0x5C68100000870F08 Fmul
    temp_42 = temp_19 * temp_37;
    // 0x000198: 0xF0F0000034270000 Depbar
    // 0x0001A8: 0x5C68100000170105 Fmul
    temp_43 = temp_4 * temp_4;
    // 0x0001B0: 0x5C68100000170303 Fmul
    temp_44 = temp_34 * temp_4;
    // 0x0001B8: 0x59A0028000070005 Ffma
    temp_45 = fma(temp_3, temp_3, temp_43);
    // 0x0001C8: 0x59A0018000D70003 Ffma
    temp_46 = fma(temp_3, temp_35, temp_44);
    // 0x0001D0: 0x385D103F80070506 Fadd
    temp_47 = 0.0 - temp_45;
    temp_48 = temp_47 + 1.0;
    temp_49 = clamp(temp_48, 0.0, 1.0);
    // 0x0001D8: 0x5C68100000170405 Fmul
    temp_50 = temp_38 * temp_4;
    // 0x0001E8: 0x5080000000870606 Mufu
    temp_51 = sqrt(temp_49);
    // 0x0001F0: 0x5C68100000170C01 Fmul
    temp_52 = temp_33 * temp_4;
    // 0x0001F8: 0x59A0028000770005 Ffma
    temp_53 = fma(temp_3, temp_36, temp_50);
    // 0x000208: 0xE003FF874FF7FF07 Ipa
    temp_54 = gl_FragCoord.y;
    temp_55 = support_buffer.render_scale[0];
    temp_56 = temp_54 / temp_55;
    // 0x000210: 0x59A0008000E70001 Ffma
    temp_57 = fma(temp_3, temp_39, temp_52);
    // 0x000218: 0x59A0018000670803 Ffma
    temp_58 = fma(temp_42, temp_51, temp_46);
    // 0x000228: 0x59A0028000670B05 Ffma
    temp_59 = fma(temp_40, temp_51, temp_53);
    // 0x000230: 0x59A0008000671212 Ffma
    temp_60 = fma(temp_41, temp_51, temp_57);
    // 0x000238: 0xE003FF870FF7FF06 Ipa
    temp_61 = gl_FragCoord.x;
    temp_62 = support_buffer.render_scale[0];
    temp_63 = temp_61 / temp_62;
    // 0x000248: 0x0103F8000007F008 Mov32i
    // 0x000250: 0x5C68100000370300 Fmul
    temp_64 = temp_58 * temp_58;
    // 0x000258: 0x59A0000000570500 Ffma
    temp_65 = fma(temp_59, temp_59, temp_64);
    // 0x000268: 0x59A0000001271200 Ffma
    temp_66 = fma(temp_60, temp_60, temp_65);
    // 0x000270: 0x5080000000570000 Mufu
    temp_67 = inversesqrt(temp_66);
    // 0x000278: 0x4C68100C04B70707 Fmul
    temp_68 = temp_56 * fp_c3.data[18].w;
    // 0x000288: 0x4C68100C04A70606 Fmul
    temp_69 = temp_63 * fp_c3.data[18].z;
    // 0x000290: 0x5C68100000071212 Fmul
    temp_70 = temp_60 * temp_67;
    // 0x000298: 0x5C68100000070501 Fmul
    temp_71 = temp_59 * temp_67;
    // 0x0002A8: 0x5C6810000007030C Fmul
    temp_72 = temp_58 * temp_67;
    // 0x0002B0: 0x4C68100C00671204 Fmul
    temp_73 = temp_70 * fp_c3.data[1].z;
    // 0x0002B8: 0x4C68100C00271203 Fmul
    temp_74 = temp_70 * fp_c3.data[0].z;
    // 0x0002C8: 0x49A0020C00570105 Ffma
    temp_75 = fma(temp_71, fp_c3.data[1].y, temp_73);
    // 0x0002D0: 0x49A0018C00170103 Ffma
    temp_76 = fma(temp_71, fp_c3.data[0].y, temp_74);
    // 0x0002D8: 0x49A0028C00470C05 Ffma
    temp_77 = fma(temp_72, fp_c3.data[1].x, temp_75);
    // 0x0002E8: 0x49A0018C00070C03 Ffma
    temp_78 = fma(temp_72, fp_c3.data[0].x, temp_76);
    // 0x0002F0: 0x4C69100C03E70505 Fmul
    temp_79 = 0.0 - fp_c3.data[15].z;
    temp_80 = temp_77 * temp_79;
    // 0x0002F8: 0x4C68101808B70303 Fmul
    temp_81 = temp_78 * fp_c6.data[34].w;
    // 0x000308: 0x4C68101808B70505 Fmul
    temp_82 = temp_80 * fp_c6.data[34].w;
    // 0x000310: 0x49A0030400270303 Ffma
    temp_83 = fma(temp_81, fp_c1.data[0].z, temp_69);
    // 0x000318: 0x49A003840027051A Ffma
    temp_84 = fma(temp_82, fp_c1.data[0].z, temp_68);
    // 0x000328: 0xD8320221A1A70320 Texs
    temp_85 = texture(fp_t_tcb_22, vec2(temp_83, temp_84)).xyzw;
    temp_86 = temp_85.x;
    temp_87 = temp_85.y;
    temp_88 = temp_85.z;
    temp_89 = temp_85.w;
    // 0x000330: 0xD86201EFF087060B Texs
    temp_90 = textureLod(fp_t_tcb_1E, vec2(temp_69, temp_68), 1.0).x;
    // 0x000338: 0xD82202000077061C Texs
    temp_91 = texture(fp_t_tcb_20, vec2(temp_69, temp_68)).xyz;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x000348: 0xE043FF8B0107FF28 Ipa
    temp_95 = in_attr3.x;
    // 0x000350: 0xE043FF8B4107FF23 Ipa
    temp_96 = in_attr3.y;
    // 0x000358: 0xE043FF8B8107FF22 Ipa
    temp_97 = in_attr3.z;
    // 0x000368: 0xF0F0000034470000 Depbar
    // 0x000370: 0x4C6810180A072424 Fmul
    temp_98 = temp_6 * fp_c6.data[40].x;
    // 0x000378: 0xE2900000C0000000 Ssy
    // 0x000388: 0x3868104110070711 Fmul
    temp_99 = temp_68 * 9.0;
    // 0x000390: 0x5C9807800FF70019 Mov
    // 0x000398: 0x5CA8148001170A11 F2f
    temp_100 = floor(temp_99);
    // 0x0003A8: 0x5C68100002872804 Fmul
    temp_101 = temp_95 * temp_95;
    // 0x0003B0: 0x59A0020002372304 Ffma
    temp_102 = fma(temp_96, temp_96, temp_101);
    // 0x0003B8: 0x59A0020002272204 Ffma
    temp_103 = fma(temp_97, temp_97, temp_102);
    // 0x0003C8: 0x5080000000570405 Mufu
    temp_104 = inversesqrt(temp_103);
    // 0x0003D0: 0x5C69100000572828 Fmul
    temp_105 = 0.0 - temp_104;
    temp_106 = temp_95 * temp_105;
    // 0x0003D8: 0x5C69100000572323 Fmul
    temp_107 = 0.0 - temp_104;
    temp_108 = temp_96 * temp_107;
    // 0x0003E8: 0x5C69100000572222 Fmul
    temp_109 = 0.0 - temp_104;
    temp_110 = temp_97 * temp_109;
    // 0x0003F0: 0x4C58301805C72803 Fadd
    temp_111 = 0.0 - fp_c6.data[23].x;
    temp_112 = temp_106 + temp_111;
    // 0x0003F8: 0x4C58301805D72305 Fadd
    temp_113 = 0.0 - fp_c6.data[23].y;
    temp_114 = temp_108 + temp_113;
    // 0x000408: 0x5C68100002870C14 Fmul
    temp_115 = temp_72 * temp_106;
    // 0x000410: 0x5C6810000037030E Fmul
    temp_116 = temp_112 * temp_112;
    // 0x000418: 0x4C58301805E72208 Fadd
    temp_117 = 0.0 - fp_c6.data[23].z;
    temp_118 = temp_110 + temp_117;
    // 0x000428: 0x59A00A0002370114 Ffma
    temp_119 = fma(temp_71, temp_108, temp_115);
    // 0x000430: 0x59A007000057050E Ffma
    temp_120 = fma(temp_114, temp_114, temp_116);
    // 0x000438: 0x59A007000087080E Ffma
    temp_121 = fma(temp_118, temp_118, temp_120);
    // 0x000448: 0x5080000000570E0E Mufu
    temp_122 = inversesqrt(temp_121);
    // 0x000450: 0x5C68100000E70303 Fmul
    temp_123 = temp_112 * temp_122;
    // 0x000458: 0x5C68100000E70504 Fmul
    temp_124 = temp_114 * temp_122;
    // 0x000468: 0x5C68100000E70809 Fmul
    temp_125 = temp_118 * temp_122;
    // 0x000470: 0x4C69101805C70305 Fmul
    temp_126 = 0.0 - fp_c6.data[23].x;
    temp_127 = temp_123 * temp_126;
    // 0x000478: 0x5C6810000037280D Fmul
    temp_128 = temp_106 * temp_123;
    // 0x000488: 0x5C68100000370C03 Fmul
    temp_129 = temp_72 * temp_123;
    // 0x000490: 0x49A1029805D70408 Ffma
    temp_130 = 0.0 - fp_c6.data[23].y;
    temp_131 = fma(temp_124, temp_130, temp_127);
    // 0x000498: 0x59A006800047230F Ffma
    temp_132 = fma(temp_108, temp_124, temp_128);
    // 0x0004A8: 0x59A0018000470103 Ffma
    temp_133 = fma(temp_71, temp_124, temp_129);
    // 0x0004B0: 0x01040DF760C7F00D Mov32i
    // 0x0004B8: 0x4C69101805C70C04 Fmul
    temp_134 = 0.0 - fp_c6.data[23].x;
    temp_135 = temp_72 * temp_134;
    // 0x0004C8: 0x49A5041805E70908 Ffma
    temp_136 = 0.0 - fp_c6.data[23].z;
    temp_137 = fma(temp_125, temp_136, temp_131);
    temp_138 = clamp(temp_137, 0.0, 1.0);
    // 0x0004D0: 0x59A407800097220F Ffma
    temp_139 = fma(temp_110, temp_125, temp_132);
    temp_140 = clamp(temp_139, 0.0, 1.0);
    // 0x0004D8: 0x59A401800097120E Ffma
    temp_141 = fma(temp_70, temp_125, temp_133);
    temp_142 = clamp(temp_141, 0.0, 1.0);
    // 0x0004E8: 0x386013BF80072403 Fmnmx
    temp_143 = min(temp_98, 1.0);
    // 0x0004F0: 0x49A1021805D70109 Ffma
    temp_144 = 0.0 - fp_c6.data[23].y;
    temp_145 = fma(temp_71, temp_144, temp_135);
    // 0x0004F8: 0x59A40A0002271204 Ffma
    temp_146 = fma(temp_70, temp_110, temp_119);
    temp_147 = clamp(temp_146, 0.0, 1.0);
    // 0x000508: 0x49A2068400370805 Ffma
    temp_148 = fma(temp_138, fp_c1.data[0].w, -6.98316002);
    // 0x000510: 0x49A2068400370F0D Ffma
    temp_149 = fma(temp_140, fp_c1.data[0].w, -6.98316002);
    // 0x000518: 0x4C60178400070303 Fmnmx
    temp_150 = max(temp_143, fp_c1.data[0].x);
    // 0x000528: 0x5C68100000470C2F Fmul
    temp_151 = temp_72 * temp_147;
    // 0x000530: 0x5C68100000570808 Fmul
    temp_152 = temp_138 * temp_148;
    // 0x000538: 0x5C68100000D70F05 Fmul
    temp_153 = temp_140 * temp_149;
    // 0x000548: 0x386810418007060F Fmul
    temp_154 = temp_69 * 16.0;
    // 0x000550: 0x51A401840007032E Ffma
    temp_155 = fma(temp_150, temp_150, fp_c1.data[0].x);
    temp_156 = clamp(temp_155, 0.0, 1.0);
    // 0x000558: 0x5CA8148000F70A0F F2f
    temp_157 = floor(temp_154);
    // 0x000568: 0x32A0163F0007032C Ffma
    temp_158 = fma(temp_150, 0.5, 0.5);
    // 0x000570: 0x5C90008000870014 Rro
    // 0x000578: 0x49A5049805E71206 Ffma
    temp_159 = 0.0 - fp_c6.data[23].z;
    temp_160 = fma(temp_70, temp_159, temp_145);
    temp_161 = clamp(temp_160, 0.0, 1.0);
    // 0x000588: 0xF0F0000034370000 Depbar
    // 0x000590: 0x5080000000271414 Mufu
    temp_162 = exp2(temp_152);
    // 0x000598: 0x4C58301407B71E08 Fadd
    temp_163 = 0.0 - fp_c5.data[30].w;
    temp_164 = temp_10 + temp_163;
    // 0x0005A8: 0x5C68100002E72E2D Fmul
    temp_165 = temp_156 * temp_156;
    // 0x0005B0: 0x5C68120002C72C2C Fmul
    temp_166 = temp_158 * 0.5;
    temp_167 = temp_166 * temp_158;
    // 0x0005B8: 0x5C90008000570018 Rro
    // 0x0005C8: 0x32A2144000072F2F Ffma
    temp_168 = 0.0 - temp_106;
    temp_169 = fma(temp_151, 2.0, temp_168);
    // 0x0005D0: 0x5080000000271818 Mufu
    temp_170 = exp2(temp_153);
    // 0x0005D8: 0x4C68101801470632 Fmul
    temp_171 = temp_161 * fp_c6.data[5].x;
    // 0x0005E8: 0x59A2070002D70E0D Ffma
    temp_172 = 0.0 - temp_142;
    temp_173 = fma(temp_142, temp_165, temp_172);
    // 0x0005F0: 0x59A1020000472C09 Ffma
    temp_174 = 0.0 - temp_147;
    temp_175 = fma(temp_167, temp_174, temp_147);
    // 0x0005F8: 0x59A1030002C70607 Ffma
    temp_176 = 0.0 - temp_167;
    temp_177 = fma(temp_161, temp_176, temp_161);
    // 0x000608: 0x32A007C18007112B Ffma
    temp_178 = fma(temp_100, 16.0, temp_157);
    // 0x000610: 0x51A0041407B72505 Ffma
    temp_179 = fma(temp_7, temp_164, fp_c5.data[30].w);
    // 0x000618: 0x5CB0118002B70A2B F2i
    temp_180 = trunc(temp_178);
    temp_181 = max(temp_180, 0.0);
    temp_182 = uint(temp_181);
    // 0x000628: 0x51A0068400170E0D Ffma
    temp_183 = fma(temp_142, temp_173, fp_c1.data[0].y);
    // 0x000630: 0x5C58100000972C09 Fadd
    temp_184 = temp_167 + temp_175;
    // 0x000638: 0x5080000000470D0D Mufu
    temp_185 = 1.0 / temp_183;
    // 0x000648: 0x5C58100000772C0E Fadd
    temp_186 = temp_167 + temp_177;
    // 0x000650: 0x5080000000470909 Mufu
    temp_187 = 1.0 / temp_184;
    // 0x000658: 0x4C98079808A7000F Mov
    // 0x000668: 0x5080000000470E13 Mufu
    temp_188 = 1.0 / temp_186;
    // 0x000670: 0x1E23EA2F98373232 Fmul32i
    temp_189 = temp_171 * 0.318309873;
    // 0x000678: 0x3848000000872B29 Shl
    temp_190 = int(temp_182) << 8;
    // 0x000688: 0x4C68101808770F0F Fmul
    temp_191 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x000690: 0x4C58301407B71F0E Fadd
    temp_192 = 0.0 - fp_c5.data[30].w;
    temp_193 = temp_11 + temp_192;
    // 0x000698: 0x5C68100000D72E07 Fmul
    temp_194 = temp_156 * temp_185;
    // 0x0006A8: 0xEF94008200472929 Ldc
    temp_195 = temp_190 + 0x2004;
    temp_196 = uint(temp_195) >> 2;
    temp_197 = temp_196 >> 2;
    temp_198 = int(temp_196) & 3;
    temp_199 = fp_c8.data[int(temp_197)][temp_198];
    // 0x0006B0: 0x3868103F0007092A Fmul
    temp_200 = temp_187 * 0.5;
    // 0x0006B8: 0x4C68101801570609 Fmul
    temp_201 = temp_161 * fp_c6.data[5].y;
    // 0x0006C8: 0x5C68100000770707 Fmul
    temp_202 = temp_194 * temp_194;
    // 0x0006D0: 0x5C68100001372A11 Fmul
    temp_203 = temp_200 * temp_188;
    // 0x0006D8: 0x4C58301407B70213 Fadd
    temp_204 = 0.0 - fp_c5.data[30].w;
    temp_205 = temp_12 + temp_204;
    // 0x0006E8: 0x1E23EA2F98370908 Fmul32i
    temp_206 = temp_201 * 0.318309873;
    // 0x0006F0: 0x5C68100001170707 Fmul
    temp_207 = temp_202 * temp_203;
    // 0x0006F8: 0x4C68101801670611 Fmul
    temp_208 = temp_161 * fp_c6.data[5].z;
    // 0x000708: 0x5C6810000077060D Fmul
    temp_209 = temp_161 * temp_207;
    // 0x000710: 0x51A0071407B72506 Ffma
    temp_210 = fma(temp_7, temp_193, fp_c5.data[30].w);
    // 0x000718: 0x51A0099407B72507 Ffma
    temp_211 = fma(temp_7, temp_205, fp_c5.data[30].w);
    // 0x000728: 0x1E23EA2F98371109 Fmul32i
    temp_212 = temp_208 * 0.318309873;
    // 0x000730: 0x59A10A000147050E Ffma
    temp_213 = 0.0 - temp_162;
    temp_214 = fma(temp_179, temp_213, temp_162);
    // 0x000738: 0x59A10C0001870513 Ffma
    temp_215 = 0.0 - temp_170;
    temp_216 = fma(temp_179, temp_215, temp_170);
    // 0x000748: 0x59A10A0001470611 Ffma
    temp_217 = 0.0 - temp_162;
    temp_218 = fma(temp_210, temp_217, temp_162);
    // 0x000750: 0x59A10A0001470714 Ffma
    temp_219 = 0.0 - temp_162;
    temp_220 = fma(temp_211, temp_219, temp_162);
    // 0x000758: 0x59A10C0001870615 Ffma
    temp_221 = 0.0 - temp_170;
    temp_222 = fma(temp_210, temp_221, temp_170);
    // 0x000768: 0x5C58100000E7050E Fadd
    temp_223 = temp_179 + temp_214;
    // 0x000770: 0x5C58100001370517 Fadd
    temp_224 = temp_179 + temp_216;
    // 0x000778: 0x59A10C0001870718 Ffma
    temp_225 = 0.0 - temp_170;
    temp_226 = fma(temp_211, temp_225, temp_170);
    // 0x000788: 0x5C58100001170611 Fadd
    temp_227 = temp_210 + temp_218;
    // 0x000790: 0x5C58100001470714 Fadd
    temp_228 = temp_211 + temp_220;
    // 0x000798: 0x5C58100001570615 Fadd
    temp_229 = temp_210 + temp_222;
    // 0x0007A8: 0x4C68101406970E0E Fmul
    temp_230 = temp_223 * fp_c5.data[26].y;
    // 0x0007B0: 0x4C68101406971717 Fmul
    temp_231 = temp_224 * fp_c5.data[26].y;
    // 0x0007B8: 0x5C58100001870718 Fadd
    temp_232 = temp_211 + temp_226;
    // 0x0007C8: 0x4C68101406971111 Fmul
    temp_233 = temp_227 * fp_c5.data[26].y;
    // 0x0007D0: 0x4C68101406971414 Fmul
    temp_234 = temp_228 * fp_c5.data[26].y;
    // 0x0007D8: 0x4C68101406971515 Fmul
    temp_235 = temp_229 * fp_c5.data[26].y;
    // 0x0007E8: 0x59A1190003271732 Ffma
    temp_236 = 0.0 - temp_189;
    temp_237 = fma(temp_231, temp_236, temp_189);
    // 0x0007F0: 0x4C68101406971818 Fmul
    temp_238 = temp_232 * fp_c5.data[26].y;
    // 0x0007F8: 0x59A1040000871508 Ffma
    temp_239 = 0.0 - temp_206;
    temp_240 = fma(temp_235, temp_239, temp_206);
    // 0x000808: 0x5B6603800FF72907 Isetp
    temp_241 = floatBitsToUint(temp_199) <= 0u;
    // 0x000810: 0x59A1048000971809 Ffma
    temp_242 = 0.0 - temp_212;
    temp_243 = fma(temp_238, temp_242, temp_212);
    // 0x000818: 0x5C9807800FF70018 Mov
    // 0x000828: 0xF0F0000034270000 Depbar
    // 0x000830: 0x51A0079801472013 Ffma
    temp_244 = fma(temp_86, temp_191, fp_c6.data[5].x);
    // 0x000838: 0x51A0079801572116 Ffma
    temp_245 = fma(temp_87, temp_191, fp_c6.data[5].y);
    // 0x000848: 0x51A0079801671A0F Ffma
    temp_246 = fma(temp_88, temp_191, fp_c6.data[5].z);
    // 0x000850: 0x5C68100001370E0E Fmul
    temp_247 = temp_230 * temp_244;
    // 0x000858: 0x5C68100001671116 Fmul
    temp_248 = temp_233 * temp_245;
    // 0x000868: 0x5C68100000F7140F Fmul
    temp_249 = temp_234 * temp_246;
    // 0x000870: 0x5C9807800FF70013 Mov
    // 0x000878: 0x5C68100000E70D11 Fmul
    temp_250 = temp_209 * temp_247;
    // 0x000888: 0x5C68100001670D14 Fmul
    temp_251 = temp_209 * temp_248;
    // 0x000890: 0x5C68100000F70D36 Fmul
    temp_252 = temp_209 * temp_249;
    // 0x000898: 0xF0F0000034170000 Depbar
    // 0x0008A8: 0x51A5058400170A0D Ffma
    temp_253 = 0.0 - temp_90;
    temp_254 = fma(temp_8, temp_253, fp_c1.data[0].y);
    temp_255 = clamp(temp_254, 0.0, 1.0);
    // 0x0008B0: 0x5C6810000047010E Fmul
    temp_256 = temp_71 * temp_147;
    // 0x0008B8: 0x5C9807800FF7000A Mov
    // 0x0008C8: 0x5C9807800FF7000B Mov
    // 0x0008D0: 0x5C9807800FF7000F Mov
    // 0x0008D8: 0x1E23E22F98373636 Fmul32i
    temp_257 = temp_252 * 0.159154937;
    // 0x0008E8: 0x49A206980AC70D15 Ffma
    temp_258 = 0.0 - temp_255;
    temp_259 = fma(temp_255, fp_c6.data[43].x, temp_258);
    // 0x0008F0: 0x49A206980AD70D16 Ffma
    temp_260 = 0.0 - temp_255;
    temp_261 = fma(temp_255, fp_c6.data[43].y, temp_260);
    // 0x0008F8: 0x49A206980AE70D17 Ffma
    temp_262 = 0.0 - temp_255;
    temp_263 = fma(temp_255, fp_c6.data[43].z, temp_262);
    // 0x000908: 0x5C6810000047120D Fmul
    temp_264 = temp_70 * temp_147;
    // 0x000910: 0x32A211C000070E0E Ffma
    temp_265 = 0.0 - temp_108;
    temp_266 = fma(temp_256, 2.0, temp_265);
    // 0x000918: 0x3858103F80071515 Fadd
    temp_267 = temp_259 + 1.0;
    // 0x000928: 0x3858103F80071616 Fadd
    temp_268 = temp_261 + 1.0;
    // 0x000930: 0x3858103F80071717 Fadd
    temp_269 = temp_263 + 1.0;
    // 0x000938: 0x32A2114000070D0D Ffma
    temp_270 = 0.0 - temp_110;
    temp_271 = fma(temp_264, 2.0, temp_270);
    // 0x000948: 0x59A40A8001571E24 Ffma
    temp_272 = fma(temp_10, temp_267, temp_267);
    temp_273 = clamp(temp_272, 0.0, 1.0);
    // 0x000950: 0x1E23E22F98371115 Fmul32i
    temp_274 = temp_250 * 0.159154937;
    // 0x000958: 0x1E23E22F98371411 Fmul32i
    temp_275 = temp_251 * 0.159154937;
    // 0x000968: 0xEF5400000047FF15 Stl
    local_memory[1] = floatBitsToUint(temp_274);
    // 0x000970: 0x59A40B0001671F26 Ffma
    temp_276 = fma(temp_11, temp_268, temp_268);
    temp_277 = clamp(temp_276, 0.0, 1.0);
    // 0x000978: 0xEF5400000007FF11 Stl
    local_memory[0] = floatBitsToUint(temp_275);
    // 0x000988: 0x59A40B8001770227 Ffma
    temp_278 = fma(temp_12, temp_269, temp_269);
    temp_279 = clamp(temp_278, 0.0, 1.0);
    // 0x000990: 0xF0F800000000000F Sync
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
    temp_291 = 0.0;
    if (!temp_241)
    {
        // 0x000998: 0x5C9807800FF70030 Mov
        temp_292 = 0;
        do
        {
            // 0x0009A8: 0x5C18020003072B17 Iscadd
            temp_294 = int(temp_182) << 4;
            temp_295 = temp_294 + temp_292;
            // 0x0009B0: 0xE003FF87CFF7FF33 Ipa
            // 0x0009B8: 0x1C00000000173030 Iadd32i
            temp_296 = temp_292 + 1;
            // 0x0009C8: 0xE003FF87CFF7FF35 Ipa
            // 0x0009D0: 0x3848000000471717 Shl
            temp_297 = temp_295 << 4;
            // 0x0009D8: 0xE003FF87CFF7FF34 Ipa
            // 0x0009E8: 0x5B6C03800297300F Isetp
            temp_293 = uint(temp_296) >= floatBitsToUint(temp_199);
            // 0x0009F0: 0xE290000057800000 Ssy
            // 0x0009F8: 0xEF94008200071717 Ldc
            temp_298 = temp_297 + 0x2000;
            temp_299 = uint(temp_298) >> 2;
            temp_300 = temp_299 >> 2;
            temp_301 = int(temp_299) & 3;
            temp_302 = fp_c8.data[int(temp_300)][temp_301];
            // 0x000A08: 0x5080000000473333 Mufu
            // 0x000A10: 0x5080000000473535 Mufu
            // 0x000A18: 0x5080000000473434 Mufu
            // 0x000A28: 0xE043FF8D0337FF33 Ipa
            temp_303 = in_attr5.x;
            // 0x000A30: 0xE043FF8D8357FF35 Ipa
            temp_304 = in_attr5.z;
            // 0x000A38: 0xE043FF8D4347FF34 Ipa
            temp_305 = in_attr5.y;
            // 0x000A48: 0x3848000000671731 Shl
            temp_306 = floatBitsToInt(temp_302) << 6;
            // 0x000A50: 0xEF95008001073110 Ldc
            temp_307 = temp_306 + 16;
            temp_308 = uint(temp_307) >> 2;
            temp_309 = temp_308 >> 2;
            temp_310 = int(temp_308) & 3;
            temp_311 = fp_c8.data[int(temp_309)][temp_310];
            temp_312 = int(temp_308) + 1;
            temp_313 = uint(temp_312) >> 2;
            temp_314 = temp_312 & 3;
            temp_315 = fp_c8.data[int(temp_313)][temp_314];
            // 0x000A58: 0xEF95008001873114 Ldc
            temp_316 = temp_306 + 24;
            temp_317 = uint(temp_316) >> 2;
            temp_318 = temp_317 >> 2;
            temp_319 = int(temp_317) & 3;
            temp_320 = fp_c8.data[int(temp_318)][temp_319];
            temp_321 = int(temp_317) + 1;
            temp_322 = uint(temp_321) >> 2;
            temp_323 = temp_321 & 3;
            temp_324 = fp_c8.data[int(temp_322)][temp_323];
            // 0x000A68: 0xEF95008002073116 Ldc
            temp_325 = temp_306 + 32;
            temp_326 = uint(temp_325) >> 2;
            temp_327 = temp_326 >> 2;
            temp_328 = int(temp_326) & 3;
            temp_329 = fp_c8.data[int(temp_327)][temp_328];
            temp_330 = int(temp_326) + 1;
            temp_331 = uint(temp_330) >> 2;
            temp_332 = temp_330 & 3;
            temp_333 = fp_c8.data[int(temp_331)][temp_332];
            // 0x000A70: 0x5C58300003371033 Fadd
            temp_334 = 0.0 - temp_303;
            temp_335 = temp_311 + temp_334;
            // 0x000A78: 0x5C58300003471134 Fadd
            temp_336 = 0.0 - temp_305;
            temp_337 = temp_315 + temp_336;
            // 0x000A88: 0x5C58300003571414 Fadd
            temp_338 = 0.0 - temp_304;
            temp_339 = temp_320 + temp_338;
            // 0x000A90: 0x5C68100003373311 Fmul
            temp_340 = temp_335 * temp_335;
            // 0x000A98: 0x59A10A0001471510 Ffma
            temp_341 = 0.0 - temp_339;
            temp_342 = fma(temp_324, temp_341, temp_339);
            // 0x000AA8: 0x59A0088003473415 Ffma
            temp_343 = fma(temp_337, temp_337, temp_340);
            // 0x000AB0: 0x59A00A8001071035 Ffma
            temp_344 = fma(temp_342, temp_342, temp_343);
            // 0x000AB8: 0x5080000000573511 Mufu
            temp_345 = inversesqrt(temp_344);
            // 0x000AC8: 0x5080000000873535 Mufu
            temp_346 = sqrt(temp_344);
            // 0x000AD0: 0x5C68100001173337 Fmul
            temp_347 = temp_335 * temp_345;
            // 0x000AD8: 0x5C68100001171010 Fmul
            temp_348 = temp_342 * temp_345;
            // 0x000AE8: 0x5C68100001173411 Fmul
            temp_349 = temp_337 * temp_345;
            // 0x000AF0: 0x5C69100001673716 Fmul
            temp_350 = 0.0 - temp_329;
            temp_351 = temp_347 * temp_350;
            // 0x000AF8: 0x59A10B0001771111 Ffma
            temp_352 = 0.0 - temp_333;
            temp_353 = fma(temp_349, temp_352, temp_351);
            // 0x000B08: 0xEF94008002873116 Ldc
            temp_354 = temp_306 + 40;
            temp_355 = uint(temp_354) >> 2;
            temp_356 = temp_355 >> 2;
            temp_357 = int(temp_355) & 3;
            temp_358 = fp_c8.data[int(temp_356)][temp_357];
            // 0x000B10: 0x010404000007F017 Mov32i
            // 0x000B18: 0x59A1088001671016 Ffma
            temp_359 = 0.0 - temp_358;
            temp_360 = fma(temp_348, temp_359, temp_353);
            // 0x000B28: 0xEF95008003873110 Ldc
            temp_361 = temp_306 + 56;
            temp_362 = uint(temp_361) >> 2;
            temp_363 = temp_362 >> 2;
            temp_364 = int(temp_362) & 3;
            temp_365 = fp_c8.data[int(temp_363)][temp_364];
            temp_366 = int(temp_362) + 1;
            temp_367 = uint(temp_366) >> 2;
            temp_368 = temp_366 & 3;
            temp_369 = fp_c8.data[int(temp_367)][temp_368];
            // 0x000B30: 0x59A4088001071610 Ffma
            temp_370 = fma(temp_360, temp_365, temp_369);
            temp_371 = clamp(temp_370, 0.0, 1.0);
            // 0x000B38: 0x5C68100001071016 Fmul
            temp_372 = temp_371 * temp_371;
            // 0x000B48: 0x33A00BC000071010 Ffma
            temp_373 = fma(temp_371, -2.0, 3.0);
            // 0x000B50: 0x5C68100001071616 Fmul
            temp_374 = temp_372 * temp_373;
            // 0x000B58: 0xEF95008003073110 Ldc
            temp_375 = temp_306 + 48;
            temp_376 = uint(temp_375) >> 2;
            temp_377 = temp_376 >> 2;
            temp_378 = int(temp_376) & 3;
            temp_379 = fp_c8.data[int(temp_377)][temp_378];
            temp_380 = int(temp_376) + 1;
            temp_381 = uint(temp_380) >> 2;
            temp_382 = temp_380 & 3;
            temp_383 = fp_c8.data[int(temp_381)][temp_382];
            // 0x000B68: 0x59A4088003571035 Ffma
            temp_384 = fma(temp_379, temp_346, temp_383);
            temp_385 = clamp(temp_384, 0.0, 1.0);
            // 0x000B70: 0x33A00BC000073517 Ffma
            temp_386 = fma(temp_385, -2.0, 3.0);
            // 0x000B78: 0x5C68100003573535 Fmul
            temp_387 = temp_385 * temp_385;
            // 0x000B88: 0x5C68100001773517 Fmul
            temp_388 = temp_387 * temp_386;
            // 0x000B90: 0x39585042F0071435 Fadd
            temp_389 = abs(temp_339);
            temp_390 = temp_389 + -120.0;
            // 0x000B98: 0x5C68100001771616 Fmul
            temp_391 = temp_374 * temp_388;
            // 0x000BA8: 0x1EABD4CCCCD73535 Fmul32i
            temp_392 = temp_390 * -0.0500000007;
            temp_393 = clamp(temp_392, 0.0, 1.0);
            // 0x000BB0: 0x36247F9000171717 Xmad
            temp_394 = floatBitsToUint(temp_388) >> 16;
            temp_395 = int(temp_394) << 16;
            // 0x000BB8: 0x5C68100003571616 Fmul
            temp_396 = temp_391 * temp_393;
            // 0x000BC8: 0x5BB383800FF71607 Fsetp
            temp_397 = temp_396 <= 0.0;
            // 0x000BD0: 0x7A05083C0F00FF17 Hadd2
            temp_292 = temp_296;
            temp_398 = uint(temp_395);
            temp_399 = temp_280;
            temp_400 = temp_281;
            temp_401 = temp_282;
            temp_402 = temp_283;
            temp_403 = temp_284;
            temp_404 = temp_285;
            if (temp_397)
            {
                temp_405 = unpackHalf2x16(uint(temp_395)).y;
                temp_406 = packHalf2x16(vec2(1.0, temp_405));
                temp_398 = temp_406;
            }
            // 0x000BD8: 0x5D2103902FF71707 Hsetp2
            temp_407 = unpackHalf2x16(temp_398).x;
            temp_408 = temp_407 == 0.0;
            // 0x000BE8: 0xF0F800000008000F Sync
            if (temp_408)
            {
                // 0x000BF0: 0x5080000000471010 Mufu
                temp_409 = 1.0 / temp_379;
                // 0x000BF8: 0x5C69100001071110 Fmul
                temp_410 = 0.0 - temp_409;
                temp_411 = temp_383 * temp_410;
                // 0x000C08: 0x5C60138001071414 Fmnmx
                temp_412 = min(temp_339, temp_411);
                // 0x000C10: 0x5C61178001471014 Fmnmx
                temp_413 = 0.0 - temp_411;
                temp_414 = max(temp_413, temp_412);
                // 0x000C18: 0x59A00A8001471415 Ffma
                temp_415 = fma(temp_414, temp_414, temp_343);
                // 0x000C28: 0x5080000000571511 Mufu
                temp_416 = inversesqrt(temp_415);
                // 0x000C30: 0x5080000000871515 Mufu
                temp_417 = sqrt(temp_415);
                // 0x000C38: 0x5C68100001173333 Fmul
                temp_418 = temp_335 * temp_416;
                // 0x000C48: 0x5C68100001173434 Fmul
                temp_419 = temp_337 * temp_416;
                // 0x000C50: 0x5C68100001171414 Fmul
                temp_420 = temp_414 * temp_416;
                // 0x000C58: 0x5C58100003372810 Fadd
                temp_421 = temp_106 + temp_418;
                // 0x000C68: 0x5C58100003472311 Fadd
                temp_422 = temp_108 + temp_419;
                // 0x000C70: 0x5C58100001472217 Fadd
                temp_423 = temp_110 + temp_420;
                // 0x000C78: 0x5C68100001071035 Fmul
                temp_424 = temp_421 * temp_421;
                // 0x000C88: 0x59A01A8001171135 Ffma
                temp_425 = fma(temp_422, temp_422, temp_424);
                // 0x000C90: 0x59A01A8001771735 Ffma
                temp_426 = fma(temp_423, temp_423, temp_425);
                // 0x000C98: 0x5080000000573535 Mufu
                temp_427 = inversesqrt(temp_426);
                // 0x000CA8: 0x5C68100003571010 Fmul
                temp_428 = temp_421 * temp_427;
                // 0x000CB0: 0x5C68100003571717 Fmul
                temp_429 = temp_423 * temp_427;
                // 0x000CB8: 0x5C68100003571111 Fmul
                temp_430 = temp_422 * temp_427;
                // 0x000CC8: 0x5C68100003370C35 Fmul
                temp_431 = temp_72 * temp_418;
                // 0x000CD0: 0x5C68100001073337 Fmul
                temp_432 = temp_418 * temp_428;
                // 0x000CD8: 0x5C68100001070C10 Fmul
                temp_433 = temp_72 * temp_428;
                // 0x000CE8: 0x59A01A8003470133 Ffma
                temp_434 = fma(temp_71, temp_419, temp_431);
                // 0x000CF0: 0xEF94008002C73135 Ldc
                temp_435 = temp_306 + 44;
                temp_436 = uint(temp_435) >> 2;
                temp_437 = temp_436 >> 2;
                temp_438 = int(temp_436) & 3;
                temp_439 = fp_c8.data[int(temp_437)][temp_438];
                // 0x000CF8: 0x59A01B8001173434 Ffma
                temp_440 = fma(temp_419, temp_430, temp_432);
                // 0x000D08: 0x59A0198001471233 Ffma
                temp_441 = fma(temp_70, temp_420, temp_434);
                // 0x000D10: 0x59A41A0001771434 Ffma
                temp_442 = fma(temp_420, temp_429, temp_440);
                temp_443 = clamp(temp_442, 0.0, 1.0);
                // 0x000D18: 0x5C5C30000FF73314 Fadd
                temp_444 = temp_441 + -0.0;
                temp_445 = clamp(temp_444, 0.0, 1.0);
                // 0x000D28: 0x5080000000473535 Mufu
                temp_446 = 1.0 / temp_439;
                // 0x000D30: 0x51A00A8400473515 Ffma
                temp_447 = fma(temp_446, temp_417, fp_c1.data[1].x);
                // 0x000D38: 0x59A0080001170135 Ffma
                temp_448 = fma(temp_71, temp_430, temp_433);
                // 0x000D48: 0xEF95008000073110 Ldc
                temp_449 = uint(temp_306) >> 2;
                temp_450 = temp_449 >> 2;
                temp_451 = int(temp_449) & 3;
                temp_452 = fp_c8.data[int(temp_450)][temp_451];
                temp_453 = int(temp_449) + 1;
                temp_454 = uint(temp_453) >> 2;
                temp_455 = temp_453 & 3;
                temp_456 = fp_c8.data[int(temp_454)][temp_455];
                // 0x000D50: 0x59A41A8001771235 Ffma
                temp_457 = fma(temp_70, temp_429, temp_448);
                temp_458 = clamp(temp_457, 0.0, 1.0);
                // 0x000D58: 0x5080000000471515 Mufu
                temp_459 = 1.0 / temp_447;
                // 0x000D68: 0x01040DF760C7F017 Mov32i
                // 0x000D70: 0xEF94008000873131 Ldc
                temp_460 = temp_306 + 8;
                temp_461 = uint(temp_460) >> 2;
                temp_462 = temp_461 >> 2;
                temp_463 = int(temp_461) & 3;
                temp_464 = fp_c8.data[int(temp_462)][temp_463];
                // 0x000D78: 0x49A20B8400373417 Ffma
                temp_465 = fma(temp_443, fp_c1.data[0].w, -6.98316002);
                // 0x000D88: 0x1E23FB3333371515 Fmul32i
                temp_466 = temp_459 * 1.39999998;
                // 0x000D90: 0x5C68100001773417 Fmul
                temp_467 = temp_443 * temp_465;
                // 0x000D98: 0x59A21A8003572D34 Ffma
                temp_468 = 0.0 - temp_458;
                temp_469 = fma(temp_165, temp_458, temp_468);
                // 0x000DA8: 0x5C68100001571515 Fmul
                temp_470 = temp_466 * temp_466;
                // 0x000DB0: 0x5C90008001770017 Rro
                // 0x000DB8: 0x51A01A0400173535 Ffma
                temp_471 = fma(temp_458, temp_469, fp_c1.data[0].y);
                // 0x000DC8: 0x5080000000271717 Mufu
                temp_472 = exp2(temp_467);
                // 0x000DD0: 0x59A10A0001472C34 Ffma
                temp_473 = 0.0 - temp_445;
                temp_474 = fma(temp_167, temp_473, temp_445);
                // 0x000DD8: 0x5080000000473535 Mufu
                temp_475 = 1.0 / temp_471;
                // 0x000DE8: 0x59A10A8001573315 Ffma
                temp_476 = 0.0 - temp_470;
                temp_477 = fma(temp_441, temp_476, temp_470);
                // 0x000DF0: 0x5C58100003472C34 Fadd
                temp_478 = temp_167 + temp_474;
                // 0x000DF8: 0x5C5C100001573315 Fadd
                temp_479 = temp_441 + temp_477;
                temp_480 = clamp(temp_479, 0.0, 1.0);
                // 0x000E08: 0x5080000000473434 Mufu
                temp_481 = 1.0 / temp_478;
                // 0x000E10: 0x59A10B8001770533 Ffma
                temp_482 = 0.0 - temp_472;
                temp_483 = fma(temp_179, temp_482, temp_472);
                // 0x000E18: 0x5C68100003572E35 Fmul
                temp_484 = temp_156 * temp_475;
                // 0x000E28: 0x5C58100003370533 Fadd
                temp_485 = temp_179 + temp_483;
                // 0x000E30: 0x5C68100001071610 Fmul
                temp_486 = temp_396 * temp_452;
                // 0x000E38: 0x5C68100001171611 Fmul
                temp_487 = temp_396 * temp_456;
                // 0x000E48: 0x5C68100003573535 Fmul
                temp_488 = temp_484 * temp_484;
                // 0x000E50: 0x5C68100003472A34 Fmul
                temp_489 = temp_200 * temp_481;
                // 0x000E58: 0x4C68101406973333 Fmul
                temp_490 = temp_485 * fp_c5.data[26].y;
                // 0x000E68: 0x5C68100003171631 Fmul
                temp_491 = temp_396 * temp_464;
                // 0x000E70: 0x59A10B8001770616 Ffma
                temp_492 = 0.0 - temp_472;
                temp_493 = fma(temp_210, temp_492, temp_472);
                // 0x000E78: 0x59A10B8001770717 Ffma
                temp_494 = 0.0 - temp_472;
                temp_495 = fma(temp_211, temp_494, temp_472);
                // 0x000E88: 0x5C68100003473534 Fmul
                temp_496 = temp_488 * temp_489;
                // 0x000E90: 0x5C68100001073333 Fmul
                temp_497 = temp_490 * temp_486;
                // 0x000E98: 0x5C68100001571010 Fmul
                temp_498 = temp_486 * temp_480;
                // 0x000EA8: 0x5C58100001670616 Fadd
                temp_499 = temp_210 + temp_493;
                // 0x000EB0: 0x5C58100001770717 Fadd
                temp_500 = temp_211 + temp_495;
                // 0x000EB8: 0x5C68100003471434 Fmul
                temp_501 = temp_445 * temp_496;
                // 0x000EC8: 0x49A005040067100A Ffma
                temp_502 = fma(temp_498, fp_c1.data[1].z, temp_280);
                // 0x000ED0: 0x4C68101406971616 Fmul
                temp_503 = temp_499 * fp_c5.data[26].y;
                // 0x000ED8: 0x4C68101406971717 Fmul
                temp_504 = temp_500 * fp_c5.data[26].y;
                // 0x000EE8: 0x5C68100003473333 Fmul
                temp_505 = temp_497 * temp_501;
                // 0x000EF0: 0x5C68100001171616 Fmul
                temp_506 = temp_503 * temp_487;
                // 0x000EF8: 0x5C68100003171717 Fmul
                temp_507 = temp_504 * temp_491;
                // 0x000F08: 0x5C68100001571111 Fmul
                temp_508 = temp_487 * temp_480;
                // 0x000F10: 0x5C68100001573115 Fmul
                temp_509 = temp_491 * temp_480;
                // 0x000F18: 0x49A0098400573313 Ffma
                temp_510 = fma(temp_505, fp_c1.data[1].y, temp_281);
                // 0x000F28: 0x5C68100003471616 Fmul
                temp_511 = temp_506 * temp_501;
                // 0x000F30: 0x5C68100003471717 Fmul
                temp_512 = temp_507 * temp_501;
                // 0x000F38: 0x49A005840067110B Ffma
                temp_513 = fma(temp_508, fp_c1.data[1].z, temp_282);
                // 0x000F48: 0x49A007840067150F Ffma
                temp_514 = fma(temp_509, fp_c1.data[1].z, temp_283);
                // 0x000F50: 0x49A00C0400571618 Ffma
                temp_515 = fma(temp_511, fp_c1.data[1].y, temp_284);
                // 0x000F58: 0x49A00C8400571719 Ffma
                temp_516 = fma(temp_512, fp_c1.data[1].y, temp_285);
                // 0x000F68: 0xF0F800000007000F Sync
                temp_399 = temp_502;
                temp_400 = temp_510;
                temp_401 = temp_513;
                temp_402 = temp_514;
                temp_403 = temp_515;
                temp_404 = temp_516;
            }
            // 0x000F70: 0xE2400FFFA289000F Bra
            temp_280 = temp_399;
            temp_281 = temp_400;
            temp_282 = temp_401;
            temp_283 = temp_402;
            temp_284 = temp_403;
            temp_285 = temp_404;
            temp_286 = temp_401;
            temp_287 = temp_399;
            temp_288 = temp_402;
            temp_289 = temp_404;
            temp_290 = temp_400;
            temp_291 = temp_403;
        }
        while (!temp_293);
        // 0x000F78: 0xF0F800000007000F Sync
    }
    // 0x000F88: 0x5C62578000170C10 Fmnmx
    temp_517 = abs(temp_72);
    temp_518 = abs(temp_71);
    temp_519 = max(temp_517, temp_518);
    // 0x000F90: 0xE003FF87CFF7FF28 Ipa
    // 0x000F98: 0x5C62578000E72F14 Fmnmx
    temp_520 = abs(temp_169);
    temp_521 = abs(temp_266);
    temp_522 = max(temp_520, temp_521);
    // 0x000FA8: 0xEF4410000047FF34 Ldl
    temp_523 = uintBitsToFloat(local_memory[1]);
    // 0x000FB0: 0x5C60578001071210 Fmnmx
    temp_524 = abs(temp_70);
    temp_525 = max(temp_524, temp_519);
    // 0x000FB8: 0xEF4410000007FF31 Ldl
    temp_526 = uintBitsToFloat(local_memory[0]);
    // 0x000FC8: 0x38681040E0070329 Fmul
    temp_527 = temp_150 * 7.0;
    // 0x000FD0: 0x5080000000471033 Mufu
    temp_528 = 1.0 / temp_525;
    // 0x000FD8: 0x5C60578001470D14 Fmnmx
    temp_529 = abs(temp_271);
    temp_530 = max(temp_529, temp_522);
    // 0x000FE8: 0x3868104080070323 Fmul
    temp_531 = temp_150 * 4.0;
    // 0x000FF0: 0x5080000000471414 Mufu
    temp_532 = 1.0 / temp_530;
    // 0x000FF8: 0x4C98079C0207002B Mov
    // 0x001008: 0x5C69100003371212 Fmul
    temp_533 = 0.0 - temp_528;
    temp_534 = temp_70 * temp_533;
    // 0x001010: 0x5C68100003370C10 Fmul
    temp_535 = temp_72 * temp_528;
    // 0x001018: 0x5080000000472828 Mufu
    // 0x001028: 0x5C68100003370111 Fmul
    temp_536 = temp_71 * temp_528;
    // 0x001030: 0x5C68100001470E16 Fmul
    temp_537 = temp_266 * temp_532;
    // 0x001038: 0x5C69100001470D17 Fmul
    temp_538 = 0.0 - temp_532;
    temp_539 = temp_271 * temp_538;
    // 0x001048: 0xC0BA0163EFF7100C Tex
    temp_540 = textureLod(fp_t_tcb_16, vec3(temp_535, temp_536, temp_534), 0.0).xyz;
    temp_541 = temp_540.x;
    temp_542 = temp_540.y;
    temp_543 = temp_540.z;
    // 0x001050: 0x5C68100001472F15 Fmul
    temp_544 = temp_169 * temp_532;
    // 0x001058: 0x010000000017F014 Mov32i
    // 0x001068: 0xE043FF910287FF2C Ipa
    temp_545 = in_attr9.x;
    // 0x001070: 0x5C98078001270022 Mov
    // 0x001078: 0xE043FF914287FF2D Ipa
    temp_546 = in_attr9.y;
    // 0x001088: 0x3859103F80070303 Fadd
    temp_547 = 0.0 - temp_150;
    temp_548 = temp_547 + 1.0;
    // 0x001090: 0xE043FF918287FF2E Ipa
    temp_549 = in_attr9.z;
    // 0x001098: 0xC1BA0143F2971414 Tex
    temp_550 = textureLod(fp_t_tcb_14, vec4(temp_544, temp_537, temp_539, float(1)), temp_527).xyz;
    temp_551 = temp_550.x;
    temp_552 = temp_550.y;
    temp_553 = temp_550.z;
    // 0x0010A8: 0xD9A2018232271010 Texs
    temp_554 = textureLod(fp_t_tcb_18, vec3(temp_535, temp_536, temp_534), temp_531).xyz;
    temp_555 = temp_554.x;
    temp_556 = temp_554.y;
    temp_557 = temp_554.z;
    // 0x0010B0: 0xDEBA0000C2B72C2C TexB
    temp_558 = texture(fp_t_cb7_20, vec3(temp_545, temp_546, temp_549)).x;
    // 0x0010B8: 0x49A004180A170B08 Ffma
    temp_559 = fma(temp_286, fp_c6.data[40].y, temp_240);
    // 0x0010C8: 0x010410676C97F00B Mov32i
    // 0x0010D0: 0x5C68100000370303 Fmul
    temp_560 = temp_548 * temp_548;
    // 0x0010D8: 0x3859103F8007042F Fadd
    temp_561 = 0.0 - temp_147;
    temp_562 = temp_561 + 1.0;
    // 0x0010E8: 0x49A019180A170A32 Ffma
    temp_563 = fma(temp_287, fp_c6.data[40].y, temp_237);
    // 0x0010F0: 0x1E23E468DB970412 Fmul32i
    temp_564 = temp_147 * 0.193900004;
    // 0x0010F8: 0x49A004980A170F09 Ffma
    temp_565 = fma(temp_288, fp_c6.data[40].y, temp_243);
    // 0x001108: 0x49A0058400A7040B Ffma
    temp_566 = fma(temp_147, fp_c1.data[2].z, 8.40400028);
    // 0x001110: 0x5C68100000370303 Fmul
    temp_567 = temp_560 * temp_560;
    // 0x001118: 0x4C68101809072F0A Fmul
    temp_568 = temp_562 * fp_c6.data[36].x;
    // 0x001128: 0x0103E2CD9E87F029 Mov32i
    // 0x001130: 0x5080400000370A0A Mufu
    temp_569 = abs(temp_568);
    temp_570 = log2(temp_569);
    // 0x001138: 0x49A01B180A171936 Ffma
    temp_571 = fma(temp_289, fp_c6.data[40].y, temp_257);
    // 0x001148: 0x51A0058400B7040F Ffma
    temp_572 = fma(temp_147, temp_566, fp_c1.data[2].w);
    // 0x001150: 0x49A009040077030B Ffma
    temp_573 = fma(temp_567, fp_c1.data[1].w, temp_564);
    // 0x001158: 0x5080000000372F12 Mufu
    temp_574 = log2(temp_562);
    // 0x001168: 0x4C9807980B470017 Mov
    // 0x001170: 0x0103F0000007F02A Mov32i
    // 0x001178: 0x49A2148400C70322 Ffma
    temp_575 = fma(temp_567, fp_c1.data[3].x, -0.168799996);
    // 0x001188: 0x4C68101808771B1B Fmul
    temp_576 = temp_89 * fp_c6.data[33].w;
    // 0x001190: 0x51A0078400D70429 Ffma
    temp_577 = fma(temp_147, temp_572, fp_c1.data[3].y);
    // 0x001198: 0x088BF05D63970B19 Fadd32i
    temp_578 = temp_573 + -0.522800028;
    // 0x0011A8: 0xF0F0000034570000 Depbar
    // 0x0011B0: 0x51A20B980B471D1D Ffma
    temp_579 = 0.0 - fp_c6.data[45].x;
    temp_580 = fma(temp_93, fp_c6.data[45].x, temp_579);
    // 0x0011B8: 0x51A20B980B470000 Ffma
    temp_581 = 0.0 - fp_c6.data[45].x;
    temp_582 = fma(temp_94, fp_c6.data[45].x, temp_581);
    // 0x0011C8: 0x5C6810000227030F Fmul
    temp_583 = temp_567 * temp_575;
    // 0x0011D0: 0x4C68101809170A0A Fmul
    temp_584 = temp_570 * fp_c6.data[36].y;
    // 0x0011D8: 0x0104066978D7F022 Mov32i
    // 0x0011E8: 0x5C68100001970419 Fmul
    temp_585 = temp_147 * temp_578;
    // 0x0011F0: 0x4C68101808971204 Fmul
    temp_586 = temp_574 * fp_c6.data[34].y;
    // 0x0011F8: 0x51A20B980B471C1C Ffma
    temp_587 = 0.0 - fp_c6.data[45].x;
    temp_588 = fma(temp_92, fp_c6.data[45].x, temp_587);
    // 0x001208: 0x5C60138002970F0F Fmnmx
    temp_589 = min(temp_583, temp_577);
    // 0x001210: 0x32A0153F0007010B Ffma
    temp_590 = fma(temp_71, 0.5, 0.5);
    // 0x001218: 0x5C90008000A70017 Rro
    // 0x001228: 0x4C98079800970029 Mov
    // 0x001230: 0x5084000000271717 Mufu
    temp_591 = exp2(temp_584);
    temp_592 = clamp(temp_591, 0.0, 1.0);
    // 0x001238: 0x4C98079800A7002A Mov
    // 0x001248: 0x4C9807980997002B Mov
    // 0x001250: 0x49A211040087030A Ffma
    temp_593 = fma(temp_567, fp_c1.data[2].x, -3.60299993);
    // 0x001258: 0x5C90008000470022 Rro
    // 0x001268: 0x4C98079800870001 Mov
    // 0x001270: 0x5084000000272222 Mufu
    temp_594 = exp2(temp_586);
    temp_595 = clamp(temp_594, 0.0, 1.0);
    // 0x001278: 0x4C59101800572904 Fadd
    temp_596 = 0.0 - fp_c6.data[2].y;
    temp_597 = temp_596 + fp_c6.data[1].y;
    // 0x001288: 0x4C59101800672A29 Fadd
    temp_598 = 0.0 - fp_c6.data[2].z;
    temp_599 = temp_598 + fp_c6.data[1].z;
    // 0x001290: 0x4C58101408172B2A Fadd
    temp_600 = fp_c6.data[38].y + fp_c5.data[32].y;
    // 0x001298: 0x51A005040097032E Ffma
    temp_601 = fma(temp_567, temp_593, fp_c1.data[2].y);
    // 0x0012A8: 0xE04BFF904287FF0A Ipa
    temp_602 = in_attr8.y;
    temp_603 = clamp(temp_602, 0.0, 1.0);
    // 0x0012B0: 0x4C98079408270012 Mov
    // 0x0012B8: 0x4C59101800470101 Fadd
    temp_604 = 0.0 - fp_c6.data[2].x;
    temp_605 = temp_604 + fp_c6.data[1].x;
    // 0x0012C8: 0x51A0059800970404 Ffma
    temp_606 = fma(temp_597, temp_590, fp_c6.data[2].y);
    // 0x0012D0: 0x5C68100001772A17 Fmul
    temp_607 = temp_600 * temp_592;
    // 0x0012D8: 0x59A00C8002E70319 Ffma
    temp_608 = fma(temp_567, temp_601, temp_585);
    // 0x0012E8: 0x4C6810140697122D Fmul
    temp_609 = fp_c5.data[32].z * fp_c5.data[26].y;
    // 0x0012F0: 0x51A0059800870101 Ffma
    temp_610 = fma(temp_605, temp_590, fp_c6.data[2].x);
    // 0x0012F8: 0x4C68101808872203 Fmul
    temp_611 = temp_595 * fp_c6.data[34].x;
    // 0x001308: 0x5C5C30000FF70F22 Fadd
    temp_612 = temp_589 + -0.0;
    temp_613 = clamp(temp_612, 0.0, 1.0);
    // 0x001310: 0x4C68101808E7170F Fmul
    temp_614 = temp_607 * fp_c6.data[35].z;
    // 0x001318: 0x4C68101808C71712 Fmul
    temp_615 = temp_607 * fp_c6.data[35].x;
    // 0x001328: 0x4C9807980867002A Mov
    // 0x001330: 0x4C5C100400E7192B Fadd
    temp_616 = temp_608 + fp_c1.data[3].z;
    temp_617 = clamp(temp_616, 0.0, 1.0);
    // 0x001338: 0x4C68101808D71719 Fmul
    temp_618 = temp_607 * fp_c6.data[35].y;
    // 0x001348: 0x51A0059800A7290B Ffma
    temp_619 = fma(temp_599, temp_590, fp_c6.data[2].z);
    // 0x001350: 0x59A01B0002D70F36 Ffma
    temp_620 = fma(temp_614, temp_609, temp_571);
    // 0x001358: 0x49A1091408271217 Ffma
    temp_621 = 0.0 - fp_c5.data[32].z;
    temp_622 = fma(temp_615, temp_621, temp_615);
    // 0x001368: 0x49A1079408270F0F Ffma
    temp_623 = 0.0 - fp_c5.data[32].z;
    temp_624 = fma(temp_614, temp_623, temp_614);
    // 0x001370: 0x386C104248070629 Fmul
    temp_625 = temp_210 * 50.0;
    temp_626 = clamp(temp_625, 0.0, 1.0);
    // 0x001378: 0x51A0151808670303 Ffma
    temp_627 = fma(temp_611, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001388: 0x5C59100002B72230 Fadd
    temp_628 = 0.0 - temp_613;
    temp_629 = temp_628 + temp_617;
    // 0x001390: 0x010404000007F02B Mov32i
    // 0x001398: 0x5C58100001773232 Fadd
    temp_630 = temp_563 + temp_622;
    // 0x0013A8: 0x5C58100000F7090F Fadd
    temp_631 = temp_565 + temp_624;
    // 0x0013B0: 0xE043FF900287FF09 Ipa
    temp_632 = in_attr8.x;
    // 0x0013B8: 0x5C68100002272929 Fmul
    temp_633 = temp_626 * temp_613;
    // 0x0013C8: 0x59A0148003070505 Ffma
    temp_634 = fma(temp_179, temp_629, temp_633);
    // 0x0013D0: 0x59A0148003070606 Ffma
    temp_635 = fma(temp_210, temp_629, temp_633);
    // 0x0013D8: 0x59A0148003070707 Ffma
    temp_636 = fma(temp_211, temp_629, temp_633);
    // 0x0013E8: 0x4C68101406970505 Fmul
    temp_637 = temp_634 * fp_c5.data[26].y;
    // 0x0013F0: 0x4C68101406970606 Fmul
    temp_638 = temp_635 * fp_c5.data[26].y;
    // 0x0013F8: 0x4C68101406970707 Fmul
    temp_639 = temp_636 * fp_c5.data[26].y;
    // 0x001408: 0xF0F0000034370000 Depbar
    // 0x001410: 0x49A01A180A171313 Ffma
    temp_640 = fma(temp_290, fp_c6.data[40].y, temp_523);
    // 0x001418: 0x49A018980A171818 Ffma
    temp_641 = fma(temp_291, fp_c6.data[40].y, temp_526);
    // 0x001428: 0x59A0098002D71213 Ffma
    temp_642 = fma(temp_615, temp_609, temp_640);
    // 0x001430: 0x59A00C0002D71918 Ffma
    temp_643 = fma(temp_618, temp_609, temp_641);
    // 0x001438: 0x49A10C9408271919 Ffma
    temp_644 = 0.0 - fp_c5.data[32].z;
    temp_645 = fma(temp_618, temp_644, temp_618);
    // 0x001448: 0x5C58100001970808 Fadd
    temp_646 = temp_559 + temp_645;
    // 0x001450: 0xF0F0000034270000 Depbar
    // 0x001458: 0x49A0060400670112 Ffma
    temp_647 = fma(temp_610, fp_c1.data[1].z, temp_541);
    // 0x001468: 0x49A0068400670404 Ffma
    temp_648 = fma(temp_606, fp_c1.data[1].z, temp_542);
    // 0x001470: 0x49A0070400670B0C Ffma
    temp_649 = fma(temp_619, fp_c1.data[1].z, temp_543);
    // 0x001478: 0x33A015C000070A01 Ffma
    temp_650 = fma(temp_603, -2.0, 3.0);
    // 0x001488: 0x5C68100000A70A0A Fmul
    temp_651 = temp_603 * temp_603;
    // 0x001490: 0x59A2090000372020 Ffma
    temp_652 = 0.0 - temp_647;
    temp_653 = fma(temp_86, temp_627, temp_652);
    // 0x001498: 0x59A2020000372121 Ffma
    temp_654 = 0.0 - temp_648;
    temp_655 = fma(temp_87, temp_627, temp_654);
    // 0x0014A8: 0x59A2060000371A03 Ffma
    temp_656 = 0.0 - temp_649;
    temp_657 = fma(temp_88, temp_627, temp_656);
    // 0x0014B0: 0x5C68100000A70101 Fmul
    temp_658 = temp_650 * temp_651;
    // 0x0014B8: 0x4C9807980297000A Mov
    // 0x0014C8: 0x59A0090001B72020 Ffma
    temp_659 = fma(temp_653, temp_576, temp_647);
    // 0x0014D0: 0x59A0020001B72121 Ffma
    temp_660 = fma(temp_655, temp_576, temp_648);
    // 0x0014D8: 0xF0F0000034170000 Depbar
    // 0x0014E8: 0x49A0081808571410 Ffma
    temp_661 = fma(temp_551, fp_c6.data[33].y, temp_555);
    // 0x0014F0: 0x59A0060001B7030C Ffma
    temp_662 = fma(temp_657, temp_576, temp_649);
    // 0x0014F8: 0x49A0089808571511 Ffma
    temp_663 = fma(temp_552, fp_c6.data[33].y, temp_556);
    // 0x001508: 0x49A0119808571604 Ffma
    temp_664 = fma(temp_553, fp_c6.data[33].y, temp_557);
    // 0x001510: 0x5C58100003272020 Fadd
    temp_665 = temp_659 + temp_630;
    // 0x001518: 0x5C58100000872108 Fadd
    temp_666 = temp_660 + temp_646;
    // 0x001528: 0x59A0098001070505 Ffma
    temp_667 = fma(temp_637, temp_661, temp_642);
    // 0x001530: 0x5C58100000F70C0C Fadd
    temp_668 = temp_662 + temp_631;
    // 0x001538: 0x4C98079802870003 Mov
    // 0x001548: 0x59A00C0001170606 Ffma
    temp_669 = fma(temp_638, temp_663, temp_643);
    // 0x001550: 0x59A1100002072520 Ffma
    temp_670 = 0.0 - temp_665;
    temp_671 = fma(temp_7, temp_670, temp_665);
    // 0x001558: 0x59A1040000872508 Ffma
    temp_672 = 0.0 - temp_666;
    temp_673 = fma(temp_7, temp_672, temp_666);
    // 0x001568: 0x59A01B0000470707 Ffma
    temp_674 = fma(temp_639, temp_664, temp_620);
    // 0x001570: 0x59A1060000C7250C Ffma
    temp_675 = 0.0 - temp_668;
    temp_676 = fma(temp_7, temp_675, temp_668);
    // 0x001578: 0x51A0019802871C03 Ffma
    temp_677 = fma(temp_588, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001588: 0x51A0051802971D1D Ffma
    temp_678 = fma(temp_580, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001590: 0x59A0028002071E05 Ffma
    temp_679 = fma(temp_10, temp_671, temp_667);
    // 0x001598: 0x59A0030000871F08 Ffma
    temp_680 = fma(temp_11, temp_673, temp_669);
    // 0x0015A8: 0x4C68101803770101 Fmul
    temp_681 = temp_658 * fp_c6.data[13].w;
    // 0x0015B0: 0x59A0038000C7020C Ffma
    temp_682 = fma(temp_12, temp_676, temp_674);
    // 0x0015B8: 0x5C68100000572424 Fmul
    temp_683 = temp_273 * temp_679;
    // 0x0015C8: 0x4C98079802A70005 Mov
    // 0x0015D0: 0x5C68100000872626 Fmul
    temp_684 = temp_277 * temp_680;
    // 0x0015D8: 0xE043FF8C8287FF08 Ipa
    temp_685 = in_attr4.z;
    // 0x0015E8: 0x5C68100000C72727 Fmul
    temp_686 = temp_279 * temp_682;
    // 0x0015F0: 0x49A504980BC72C09 Ffma
    temp_687 = 0.0 - fp_c6.data[47].x;
    temp_688 = fma(temp_558, temp_687, temp_632);
    temp_689 = clamp(temp_688, 0.0, 1.0);
    // 0x0015F8: 0x5C58300000372402 Fadd
    temp_690 = 0.0 - temp_677;
    temp_691 = temp_683 + temp_690;
    // 0x001608: 0x5080000000370909 Mufu
    temp_692 = log2(temp_689);
    // 0x001610: 0x51A0029802A70000 Ffma
    temp_693 = fma(temp_582, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001618: 0x5C58300001D72604 Fadd
    temp_694 = 0.0 - temp_678;
    temp_695 = temp_684 + temp_694;
    // 0x001628: 0x49A001980BF70205 Ffma
    temp_696 = fma(temp_691, fp_c6.data[47].w, temp_677);
    // 0x001630: 0x5C58300000072702 Fadd
    temp_697 = 0.0 - temp_693;
    temp_698 = temp_686 + temp_697;
    // 0x001638: 0x49A00E980BF70404 Ffma
    temp_699 = fma(temp_695, fp_c6.data[47].w, temp_678);
    // 0x001648: 0x5C60178000570305 Fmnmx
    temp_700 = max(temp_677, temp_696);
    // 0x001650: 0x4C68101803170906 Fmul
    temp_701 = temp_692 * fp_c6.data[12].y;
    // 0x001658: 0x49A000180BF70202 Ffma
    temp_702 = fma(temp_698, fp_c6.data[47].w, temp_693);
    // 0x001668: 0x49A2009803470103 Ffma
    temp_703 = 0.0 - temp_681;
    temp_704 = fma(temp_681, fp_c6.data[13].x, temp_703);
    // 0x001670: 0x5C60178000471D04 Fmnmx
    temp_705 = max(temp_678, temp_699);
    // 0x001678: 0x5C90008000670007 Rro
    // 0x001688: 0x49A2009803570106 Ffma
    temp_706 = 0.0 - temp_681;
    temp_707 = fma(temp_681, fp_c6.data[13].y, temp_706);
    // 0x001690: 0x5080000000270707 Mufu
    temp_708 = exp2(temp_701);
    // 0x001698: 0x5C60178000270002 Fmnmx
    temp_709 = max(temp_693, temp_702);
    // 0x0016A8: 0x49A2009803670101 Ffma
    temp_710 = 0.0 - temp_681;
    temp_711 = fma(temp_681, fp_c6.data[13].z, temp_710);
    // 0x0016B0: 0x59A0028000370503 Ffma
    temp_712 = fma(temp_700, temp_704, temp_700);
    // 0x0016B8: 0x4C58100C03870808 Fadd
    temp_713 = temp_685 + fp_c3.data[14].x;
    // 0x0016C8: 0x0103F4000007F005 Mov32i
    // 0x0016D0: 0x59A0020000670400 Ffma
    temp_714 = fma(temp_705, temp_707, temp_705);
    // 0x0016D8: 0x5C9807800FF70006 Mov
    // 0x0016E8: 0x59A0010000170202 Ffma
    temp_715 = fma(temp_709, temp_711, temp_709);
    // 0x0016F0: 0x5C59100000372401 Fadd
    temp_716 = 0.0 - temp_683;
    temp_717 = temp_716 + temp_712;
    // 0x0016F8: 0x5C59100000072603 Fadd
    temp_718 = 0.0 - temp_684;
    temp_719 = temp_718 + temp_714;
    // 0x001708: 0x4C68101802B70704 Fmul
    temp_720 = temp_708 * fp_c6.data[10].w;
    // 0x001710: 0x5C59100000272702 Fadd
    temp_721 = 0.0 - temp_686;
    temp_722 = temp_721 + temp_715;
    // 0x001718: 0x0103F8000007F007 Mov32i
    // 0x001728: 0x59A0120000470100 Ffma
    temp_723 = fma(temp_717, temp_720, temp_683);
    // 0x001730: 0x59A0130000470301 Ffma
    temp_724 = fma(temp_719, temp_720, temp_684);
    // 0x001738: 0x59A0138000470202 Ffma
    temp_725 = fma(temp_722, temp_720, temp_686);
    // 0x001748: 0x0103F8000007F003 Mov32i
    // 0x001750: 0x49A37F8C03C70804 Ffma
    temp_726 = 0.0 - fp_c3.data[15].x;
    temp_727 = fma(temp_713, temp_726, -0.0);
    // 0x001758: 0xE30000000007000F Exit
    out_attr0.x = temp_723;
    out_attr0.y = temp_724;
    out_attr0.z = temp_725;
    out_attr0.w = 1.0;
    out_attr1.x = temp_727;
    out_attr1.y = 0.75;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
