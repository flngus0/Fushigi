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

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 0) uniform sampler2DArray fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_2C;
layout (binding = 2) uniform sampler2DArray fp_t_tcb_36;
layout (binding = 3) uniform sampler2DArray fp_t_tcb_24;
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
layout (location = 10) in vec4 in_attr10;

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
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    uint temp_15;
    uint temp_16;
    precise vec2 temp_17;
    precise float temp_18;
    precise float temp_19;
    precise vec2 temp_20;
    precise float temp_21;
    precise float temp_22;
    precise vec3 temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise vec3 temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise vec3 temp_32;
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
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
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
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    int temp_192;
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
    bool temp_264;
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
    int temp_302;
    uint temp_303;
    uint temp_304;
    int temp_305;
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
    precise float temp_395;
    uint temp_396;
    int temp_397;
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
    int temp_461;
    uint temp_462;
    uint temp_463;
    int temp_464;
    precise float temp_465;
    precise float temp_466;
    precise float temp_467;
    uint temp_468;
    uint temp_469;
    int temp_470;
    precise float temp_471;
    int temp_472;
    uint temp_473;
    int temp_474;
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
    precise float temp_541;
    precise float temp_542;
    precise float temp_543;
    precise float temp_544;
    precise vec3 temp_545;
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
    // 0x000008: 0x0103F8000007F001 Mov32i
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x5C9807800FF70022 Mov
    // 0x000028: 0xE003FF870FF7FF06 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000030: 0x5C9807800FF70023 Mov
    // 0x000038: 0xE003FF874FF7FF07 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000048: 0x4C68100C04A70606 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000050: 0x5080000000470000 Mufu
    // 0x000058: 0x4C68100C04B70707 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000068: 0xE043FF91C007FF0E Ipa
    temp_8 = in_attr9.w;
    // 0x000070: 0xE043FF8E4007FF09 Ipa
    temp_9 = in_attr6.y;
    // 0x000078: 0xE043FF8E0007FF0F Ipa
    temp_10 = in_attr6.x;
    // 0x000088: 0xE043FF8E8007FF0C Ipa
    temp_11 = in_attr6.z;
    // 0x000090: 0xE043FF8EC007FF0D Ipa
    temp_12 = in_attr6.w;
    // 0x000098: 0x5CB0100000E7090E F2i
    temp_13 = roundEven(temp_8);
    temp_14 = max(temp_13, 0.0);
    temp_15 = uint(temp_14);
    temp_16 = clamp(temp_15, 0u, 0xFFFFu);
    // 0x0000A8: 0xD8F0026FF0970E0A Texs
    temp_17 = texture(fp_t_tcb_26, vec3(temp_10, temp_9, float(int(temp_16)))).xy;
    temp_18 = temp_17.x;
    temp_19 = temp_17.y;
    // 0x0000B0: 0xD83002CFF0D70C0C Texs
    temp_20 = texture(fp_t_tcb_2C, vec2(temp_11, temp_12)).xy;
    temp_21 = temp_20.x;
    temp_22 = temp_20.y;
    // 0x0000B8: 0xD8E4036080970E02 Texs
    temp_23 = texture(fp_t_tcb_36, vec3(temp_10, temp_9, float(int(temp_16)))).xyw;
    temp_24 = temp_23.x;
    temp_25 = temp_23.y;
    temp_26 = temp_23.z;
    // 0x0000C8: 0xD8E20241B0970E04 Texs
    temp_27 = texture(fp_t_tcb_24, vec3(temp_10, temp_9, float(int(temp_16)))).xyz;
    temp_28 = temp_27.x;
    temp_29 = temp_27.y;
    temp_30 = temp_27.z;
    // 0x0000D0: 0xD86201EFF0170601 Texs
    temp_31 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x0000D8: 0xD822020140770610 Texs
    temp_32 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_33 = temp_32.x;
    temp_34 = temp_32.y;
    temp_35 = temp_32.z;
    // 0x0000E8: 0xE043FF890007FF12 Ipa
    temp_36 = in_attr1.x;
    // 0x0000F0: 0xE043FF8A0007FF19 Ipa
    temp_37 = in_attr2.x;
    // 0x0000F8: 0xE043FF894007FF13 Ipa
    temp_38 = in_attr1.y;
    // 0x000108: 0xE043FF8A4007FF17 Ipa
    temp_39 = in_attr2.y;
    // 0x000110: 0xE043FF898007FF15 Ipa
    temp_40 = in_attr1.z;
    // 0x000118: 0xE043FF8A8007FF1A Ipa
    temp_41 = in_attr2.z;
    // 0x000128: 0xE043FF880007FF1D Ipa
    temp_42 = in_attr0.x;
    // 0x000130: 0xE043FF884007FF1E Ipa
    temp_43 = in_attr0.y;
    // 0x000138: 0xE043FF8B0007FF30 Ipa
    temp_44 = in_attr3.x;
    // 0x000148: 0xE043FF888007FF1F Ipa
    temp_45 = in_attr0.z;
    // 0x000150: 0xE043FF8B4007FF2F Ipa
    temp_46 = in_attr3.y;
    // 0x000158: 0xE043FF8B8007FF2D Ipa
    temp_47 = in_attr3.z;
    // 0x000168: 0xE2900000DA800000 Ssy
    // 0x000170: 0x5C9807800FF70024 Mov
    // 0x000178: 0x5C9807800FF70025 Mov
    // 0x000188: 0x5C9807800FF70026 Mov
    // 0x000190: 0x5C68100001271209 Fmul
    temp_48 = temp_36 * temp_36;
    // 0x000198: 0x5C68100001971916 Fmul
    temp_49 = temp_37 * temp_37;
    // 0x0001A8: 0x59A004800137130E Ffma
    temp_50 = fma(temp_38, temp_38, temp_48);
    // 0x0001B0: 0x59A00B0001771709 Ffma
    temp_51 = fma(temp_39, temp_39, temp_49);
    // 0x0001B8: 0x5C68100001D71D0F Fmul
    temp_52 = temp_42 * temp_42;
    // 0x0001C8: 0x5C68100003073021 Fmul
    temp_53 = temp_44 * temp_44;
    // 0x0001D0: 0x59A0070001571516 Ffma
    temp_54 = fma(temp_40, temp_40, temp_50);
    // 0x0001D8: 0x59A0048001A71A1C Ffma
    temp_55 = fma(temp_41, temp_41, temp_51);
    // 0x0001E8: 0x5080000000571618 Mufu
    temp_56 = inversesqrt(temp_54);
    // 0x0001F0: 0x59A0078001E71E0E Ffma
    temp_57 = fma(temp_43, temp_43, temp_52);
    // 0x0001F8: 0x5080000000571C1C Mufu
    temp_58 = inversesqrt(temp_55);
    // 0x000208: 0x59A0070001F71F20 Ffma
    temp_59 = fma(temp_45, temp_45, temp_57);
    // 0x000210: 0x5080000000572020 Mufu
    temp_60 = inversesqrt(temp_59);
    // 0x000218: 0x5C68100001871509 Fmul
    temp_61 = temp_40 * temp_56;
    // 0x000228: 0x5C6810000187120E Fmul
    temp_62 = temp_36 * temp_56;
    // 0x000230: 0x5C6810000187130F Fmul
    temp_63 = temp_38 * temp_56;
    // 0x000238: 0x5C68100001C71A15 Fmul
    temp_64 = temp_41 * temp_58;
    // 0x000248: 0x5C68100001C71918 Fmul
    temp_65 = temp_37 * temp_58;
    // 0x000250: 0x59A0108002F72F1A Ffma
    temp_66 = fma(temp_46, temp_46, temp_53);
    // 0x000258: 0x5C68100001C71717 Fmul
    temp_67 = temp_39 * temp_58;
    // 0x000268: 0x5C68100002071D16 Fmul
    temp_68 = temp_42 * temp_60;
    // 0x000270: 0x59A00D0002D72D1A Ffma
    temp_69 = fma(temp_47, temp_47, temp_66);
    // 0x000278: 0x5C68100002071E12 Fmul
    temp_70 = temp_43 * temp_60;
    // 0x000288: 0x5080000000571A1A Mufu
    temp_71 = inversesqrt(temp_69);
    // 0x000290: 0x5C68100002071F13 Fmul
    temp_72 = temp_45 * temp_60;
    // 0x000298: 0x5C69100001A73030 Fmul
    temp_73 = 0.0 - temp_71;
    temp_74 = temp_44 * temp_73;
    // 0x0002A8: 0x5C69100001A72F2F Fmul
    temp_75 = 0.0 - temp_71;
    temp_76 = temp_46 * temp_75;
    // 0x0002B0: 0x5C69100001A72D2D Fmul
    temp_77 = 0.0 - temp_71;
    temp_78 = temp_47 * temp_77;
    // 0x0002B8: 0x4C58301805C7301D Fadd
    temp_79 = 0.0 - fp_c6.data[23].x;
    temp_80 = temp_74 + temp_79;
    // 0x0002C8: 0x4C58301805D72F1E Fadd
    temp_81 = 0.0 - fp_c6.data[23].y;
    temp_82 = temp_76 + temp_81;
    // 0x0002D0: 0x4C58301805E72D1F Fadd
    temp_83 = 0.0 - fp_c6.data[23].z;
    temp_84 = temp_78 + temp_83;
    // 0x0002D8: 0x3868104180070606 Fmul
    temp_85 = temp_6 * 16.0;
    // 0x0002E8: 0x3868104110070707 Fmul
    temp_86 = temp_7 * 9.0;
    // 0x0002F0: 0x5CA8148000670A06 F2f
    temp_87 = floor(temp_85);
    // 0x0002F8: 0x5CA8148000770A07 F2f
    temp_88 = floor(temp_86);
    // 0x000308: 0xF0F0000034170000 Depbar
    // 0x000310: 0x5C68100000B70B19 Fmul
    temp_89 = temp_19 * temp_19;
    // 0x000318: 0x49A0051407C70C0C Ffma
    temp_90 = fma(temp_21, fp_c5.data[31].x, temp_18);
    // 0x000328: 0x49A0059407C70D0D Ffma
    temp_91 = fma(temp_22, fp_c5.data[31].x, temp_19);
    // 0x000330: 0x5C68100001D71D0B Fmul
    temp_92 = temp_80 * temp_80;
    // 0x000338: 0x4C6810180A070202 Fmul
    temp_93 = temp_24 * fp_c6.data[40].x;
    // 0x000348: 0x4C68101403271B1B Fmul
    temp_94 = temp_30 * fp_c5.data[12].z;
    // 0x000350: 0x59A00C8000A70A19 Ffma
    temp_95 = fma(temp_18, temp_18, temp_89);
    // 0x000358: 0x5C68100000C70C0A Fmul
    temp_96 = temp_90 * temp_90;
    // 0x000368: 0x51A5008400270801 Ffma
    temp_97 = 0.0 - temp_31;
    temp_98 = fma(temp_26, temp_97, fp_c1.data[0].z);
    temp_99 = clamp(temp_98, 0.0, 1.0);
    // 0x000370: 0x59A0058001E71E1C Ffma
    temp_100 = fma(temp_82, temp_82, temp_92);
    // 0x000378: 0x386013BF80070202 Fmnmx
    temp_101 = min(temp_93, 1.0);
    // 0x000388: 0x385D103F80071919 Fadd
    temp_102 = 0.0 - temp_95;
    temp_103 = temp_102 + 1.0;
    temp_104 = clamp(temp_103, 0.0, 1.0);
    // 0x000390: 0x59A0050000D70D0A Ffma
    temp_105 = fma(temp_91, temp_91, temp_96);
    // 0x000398: 0x5080000000871919 Mufu
    temp_106 = sqrt(temp_104);
    // 0x0003A8: 0x59A00E0001F71F20 Ffma
    temp_107 = fma(temp_84, temp_84, temp_100);
    // 0x0003B0: 0x5080000000572020 Mufu
    temp_108 = inversesqrt(temp_107);
    // 0x0003B8: 0x59A005000197190A Ffma
    temp_109 = fma(temp_106, temp_106, temp_105);
    // 0x0003C8: 0x5080000000570A0A Mufu
    temp_110 = inversesqrt(temp_109);
    // 0x0003D0: 0x5C68100000A70D1A Fmul
    temp_111 = temp_91 * temp_110;
    // 0x0003D8: 0x5C68100000A70C1C Fmul
    temp_112 = temp_90 * temp_110;
    // 0x0003E8: 0x5C68100000A71919 Fmul
    temp_113 = temp_106 * temp_110;
    // 0x0003F0: 0x5C68100002071F0A Fmul
    temp_114 = temp_84 * temp_108;
    // 0x0003F8: 0x5C68100001871A0B Fmul
    temp_115 = temp_111 * temp_65;
    // 0x000408: 0x5C68100001771A0D Fmul
    temp_116 = temp_111 * temp_67;
    // 0x000410: 0x5C68100001571A1A Fmul
    temp_117 = temp_111 * temp_64;
    // 0x000418: 0x01040DF760C7F015 Mov32i
    // 0x000428: 0x59A0058000E71C0C Ffma
    temp_118 = fma(temp_112, temp_62, temp_115);
    // 0x000430: 0x5C68100002071D0B Fmul
    temp_119 = temp_80 * temp_108;
    // 0x000438: 0x59A0068000F71C0F Ffma
    temp_120 = fma(temp_112, temp_63, temp_116);
    // 0x000448: 0x59A00D0000971C1A Ffma
    temp_121 = fma(temp_112, temp_61, temp_117);
    // 0x000450: 0x4C58301407871B1D Fadd
    temp_122 = 0.0 - fp_c5.data[30].x;
    temp_123 = temp_94 + temp_122;
    // 0x000458: 0x59A0060001671916 Ffma
    temp_124 = fma(temp_113, temp_68, temp_118);
    // 0x000468: 0x5C68100002071E0C Fmul
    temp_125 = temp_82 * temp_108;
    // 0x000470: 0x4C69101805C70B0D Fmul
    temp_126 = 0.0 - fp_c6.data[23].x;
    temp_127 = temp_119 * temp_126;
    // 0x000478: 0x59A007800127190F Ffma
    temp_128 = fma(temp_113, temp_70, temp_120);
    // 0x000488: 0x5C68100000B7300E Fmul
    temp_129 = temp_74 * temp_119;
    // 0x000490: 0x59A00D0001371913 Ffma
    temp_130 = fma(temp_113, temp_72, temp_121);
    // 0x000498: 0x5C68100001671609 Fmul
    temp_131 = temp_124 * temp_124;
    // 0x0004A8: 0x4C6810140317051A Fmul
    temp_132 = temp_29 * fp_c5.data[12].y;
    // 0x0004B0: 0x49A1069805D70C0D Ffma
    temp_133 = 0.0 - fp_c6.data[23].y;
    temp_134 = fma(temp_125, temp_133, temp_127);
    // 0x0004B8: 0x51A00E940787031D Ffma
    temp_135 = fma(temp_25, temp_123, fp_c5.data[30].x);
    // 0x0004C8: 0x59A0070000C72F17 Ffma
    temp_136 = fma(temp_76, temp_125, temp_129);
    // 0x0004D0: 0x59A0048000F70F09 Ffma
    temp_137 = fma(temp_128, temp_128, temp_131);
    // 0x0004D8: 0x4C58301407871A1C Fadd
    temp_138 = 0.0 - fp_c5.data[30].x;
    temp_139 = temp_132 + temp_138;
    // 0x0004E8: 0x49A5069805E70A0E Ffma
    temp_140 = 0.0 - fp_c6.data[23].z;
    temp_141 = fma(temp_114, temp_140, temp_134);
    temp_142 = clamp(temp_141, 0.0, 1.0);
    // 0x0004F0: 0x59A40B8000A72D17 Ffma
    temp_143 = fma(temp_78, temp_114, temp_136);
    temp_144 = clamp(temp_143, 0.0, 1.0);
    // 0x0004F8: 0x59A004800137130D Ffma
    temp_145 = fma(temp_130, temp_130, temp_137);
    // 0x000508: 0x51A00E140787031C Ffma
    temp_146 = fma(temp_25, temp_139, fp_c5.data[30].x);
    // 0x000510: 0x5080000000570D0D Mufu
    temp_147 = inversesqrt(temp_145);
    // 0x000518: 0x49A20A8400070E09 Ffma
    temp_148 = fma(temp_142, fp_c1.data[0].x, -6.98316002);
    // 0x000528: 0x49A20A8400071712 Ffma
    temp_149 = fma(temp_144, fp_c1.data[0].x, -6.98316002);
    // 0x000530: 0x5C68100000970E09 Fmul
    temp_150 = temp_142 * temp_148;
    // 0x000538: 0x5C68100001271719 Fmul
    temp_151 = temp_144 * temp_149;
    // 0x000548: 0x4C68101403070417 Fmul
    temp_152 = temp_28 * fp_c5.data[12].x;
    // 0x000550: 0x5C68100000D71612 Fmul
    temp_153 = temp_124 * temp_147;
    // 0x000558: 0x5C68100000D70F15 Fmul
    temp_154 = temp_128 * temp_147;
    // 0x000568: 0x5C68100000D71313 Fmul
    temp_155 = temp_130 * temp_147;
    // 0x000570: 0x4C60178400170216 Fmnmx
    temp_156 = max(temp_101, fp_c1.data[0].y);
    // 0x000578: 0x0103F0000007F00D Mov32i
    // 0x000588: 0x5C9000800097000F Rro
    // 0x000590: 0x5C68100000B7120B Fmul
    temp_157 = temp_153 * temp_119;
    // 0x000598: 0x5080000000270F0F Mufu
    temp_158 = exp2(temp_150);
    // 0x0005A8: 0x5C68100001273002 Fmul
    temp_159 = temp_74 * temp_153;
    // 0x0005B0: 0x4C69101805C71204 Fmul
    temp_160 = 0.0 - fp_c6.data[23].x;
    temp_161 = temp_153 * temp_160;
    // 0x0005B8: 0x32A006BF0007160E Ffma
    temp_162 = fma(temp_156, 0.5, 0.5);
    // 0x0005C8: 0x59A0058000C7150C Ffma
    temp_163 = fma(temp_154, temp_125, temp_157);
    // 0x0005D0: 0x59A0010001572F18 Ffma
    temp_164 = fma(temp_76, temp_154, temp_159);
    // 0x0005D8: 0x32A003418007070B Ffma
    temp_165 = fma(temp_88, 16.0, temp_87);
    // 0x0005E8: 0x5C68120000E70E0E Fmul
    temp_166 = temp_162 * 0.5;
    temp_167 = temp_166 * temp_162;
    // 0x0005F0: 0x51A40B0400171606 Ffma
    temp_168 = fma(temp_156, temp_156, fp_c1.data[0].y);
    temp_169 = clamp(temp_168, 0.0, 1.0);
    // 0x0005F8: 0x5C90008001970002 Rro
    // 0x000608: 0x59A4060000A7130A Ffma
    temp_170 = fma(temp_155, temp_114, temp_163);
    temp_171 = clamp(temp_170, 0.0, 1.0);
    // 0x000610: 0x5CB0118000B70A0C F2i
    temp_172 = trunc(temp_165);
    temp_173 = max(temp_172, 0.0);
    temp_174 = uint(temp_173);
    // 0x000618: 0x59A40C0001372D18 Ffma
    temp_175 = fma(temp_78, temp_155, temp_164);
    temp_176 = clamp(temp_175, 0.0, 1.0);
    // 0x000628: 0x5080000000270202 Mufu
    temp_177 = exp2(temp_151);
    // 0x000630: 0x49A1021805D71504 Ffma
    temp_178 = 0.0 - fp_c6.data[23].y;
    temp_179 = fma(temp_154, temp_178, temp_161);
    // 0x000638: 0x4C58301407871719 Fadd
    temp_180 = 0.0 - fp_c5.data[30].x;
    temp_181 = temp_152 + temp_180;
    // 0x000648: 0x5C68100000670607 Fmul
    temp_182 = temp_169 * temp_169;
    // 0x000650: 0x5C6810000187152E Fmul
    temp_183 = temp_154 * temp_176;
    // 0x000658: 0x59A10C0000E7180B Ffma
    temp_184 = 0.0 - temp_167;
    temp_185 = fma(temp_176, temp_184, temp_176);
    // 0x000668: 0x49A5021805E71304 Ffma
    temp_186 = 0.0 - fp_c6.data[23].z;
    temp_187 = fma(temp_155, temp_186, temp_179);
    temp_188 = clamp(temp_187, 0.0, 1.0);
    // 0x000670: 0x59A2050000770A07 Ffma
    temp_189 = 0.0 - temp_171;
    temp_190 = fma(temp_171, temp_182, temp_189);
    // 0x000678: 0x51A00C9407870319 Ffma
    temp_191 = fma(temp_25, temp_181, fp_c5.data[30].x);
    // 0x000688: 0x3848000000870C21 Shl
    temp_192 = int(temp_174) << 8;
    // 0x000690: 0x5C58100000B70E0B Fadd
    temp_193 = temp_167 + temp_185;
    // 0x000698: 0x59A1020000E70409 Ffma
    temp_194 = 0.0 - temp_167;
    temp_195 = fma(temp_188, temp_194, temp_188);
    // 0x0006A8: 0x5080000000470B0D Mufu
    temp_196 = 1.0 / temp_193;
    // 0x0006B0: 0x51A0038400270A0A Ffma
    temp_197 = fma(temp_171, temp_190, fp_c1.data[0].z);
    // 0x0006B8: 0x59A1010000271907 Ffma
    temp_198 = 0.0 - temp_177;
    temp_199 = fma(temp_191, temp_198, temp_177);
    // 0x0006C8: 0x5080000000470A1F Mufu
    temp_200 = 1.0 / temp_197;
    // 0x0006D0: 0x4C68101801470405 Fmul
    temp_201 = temp_188 * fp_c6.data[5].x;
    // 0x0006D8: 0x32A217C000072E2E Ffma
    temp_202 = 0.0 - temp_76;
    temp_203 = fma(temp_183, 2.0, temp_202);
    // 0x0006E8: 0xEF9400820047210B Ldc
    temp_204 = temp_192 + 0x2004;
    temp_205 = uint(temp_204) >> 2;
    temp_206 = temp_205 >> 2;
    temp_207 = int(temp_205) & 3;
    temp_208 = fp_c8.data[int(temp_206)][temp_207];
    // 0x0006F0: 0x5C58100000970E09 Fadd
    temp_209 = temp_167 + temp_195;
    // 0x0006F8: 0x5C58100000771907 Fadd
    temp_210 = temp_191 + temp_199;
    // 0x000708: 0x5080000000470909 Mufu
    temp_211 = 1.0 / temp_209;
    // 0x000710: 0x1E23EA2F98370505 Fmul32i
    temp_212 = temp_201 * 0.318309873;
    // 0x000718: 0x3868103F00070D0A Fmul
    temp_213 = temp_196 * 0.5;
    // 0x000728: 0x59A1078000F71C0D Ffma
    temp_214 = 0.0 - temp_158;
    temp_215 = fma(temp_146, temp_214, temp_158);
    // 0x000730: 0x5C68100001F70606 Fmul
    temp_216 = temp_169 * temp_200;
    // 0x000738: 0x4C68101406270707 Fmul
    temp_217 = temp_210 * fp_c5.data[24].z;
    // 0x000748: 0x59A1078000F7191F Ffma
    temp_218 = 0.0 - temp_158;
    temp_219 = fma(temp_191, temp_218, temp_158);
    // 0x000750: 0x59A1078000F71D0F Ffma
    temp_220 = 0.0 - temp_158;
    temp_221 = fma(temp_135, temp_220, temp_158);
    // 0x000758: 0x5C58100000D71C20 Fadd
    temp_222 = temp_146 + temp_215;
    // 0x000768: 0x5C9807800FF70021 Mov
    // 0x000770: 0x59A102800077051E Ffma
    temp_223 = 0.0 - temp_217;
    temp_224 = fma(temp_212, temp_223, temp_212);
    // 0x000778: 0x5C68100000670607 Fmul
    temp_225 = temp_216 * temp_216;
    // 0x000788: 0x5C68100000970A06 Fmul
    temp_226 = temp_213 * temp_211;
    // 0x000790: 0x59A1010000271C05 Ffma
    temp_227 = 0.0 - temp_177;
    temp_228 = fma(temp_146, temp_227, temp_177);
    // 0x000798: 0x59A1010000271D02 Ffma
    temp_229 = 0.0 - temp_177;
    temp_230 = fma(temp_135, temp_229, temp_177);
    // 0x0007A8: 0x5C58100000F71D0F Fadd
    temp_231 = temp_135 + temp_221;
    // 0x0007B0: 0x5C58100001F7190D Fadd
    temp_232 = temp_191 + temp_219;
    // 0x0007B8: 0x4C68101406272020 Fmul
    temp_233 = temp_222 * fp_c5.data[24].z;
    // 0x0007C8: 0x5C68100000770609 Fmul
    temp_234 = temp_226 * temp_225;
    // 0x0007D0: 0x5C58100000571C06 Fadd
    temp_235 = temp_146 + temp_228;
    // 0x0007D8: 0x5C58100000271D07 Fadd
    temp_236 = temp_135 + temp_230;
    // 0x0007E8: 0x4C68101801570402 Fmul
    temp_237 = temp_188 * fp_c6.data[5].y;
    // 0x0007F0: 0x4C68101801670405 Fmul
    temp_238 = temp_188 * fp_c6.data[5].z;
    // 0x0007F8: 0x4C68101406270F0F Fmul
    temp_239 = temp_231 * fp_c5.data[24].z;
    // 0x000808: 0x4C68101406270D0D Fmul
    temp_240 = temp_232 * fp_c5.data[24].z;
    // 0x000810: 0x4C6810140627061F Fmul
    temp_241 = temp_235 * fp_c5.data[24].z;
    // 0x000818: 0x4C68101406270707 Fmul
    temp_242 = temp_236 * fp_c5.data[24].z;
    // 0x000828: 0x1E23EA2F98370202 Fmul32i
    temp_243 = temp_237 * 0.318309873;
    // 0x000830: 0x1E23EA2F98370505 Fmul32i
    temp_244 = temp_238 * 0.318309873;
    // 0x000838: 0x4C68101801572006 Fmul
    temp_245 = temp_233 * fp_c6.data[5].y;
    // 0x000848: 0x5C68100000970409 Fmul
    temp_246 = temp_188 * temp_234;
    // 0x000850: 0x4C68101801670F0F Fmul
    temp_247 = temp_239 * fp_c6.data[5].z;
    // 0x000858: 0x4C68101801470D04 Fmul
    temp_248 = temp_240 * fp_c6.data[5].x;
    // 0x000868: 0x59A1010001F7021F Ffma
    temp_249 = 0.0 - temp_241;
    temp_250 = fma(temp_243, temp_249, temp_243);
    // 0x000870: 0x59A1028000770520 Ffma
    temp_251 = 0.0 - temp_242;
    temp_252 = fma(temp_244, temp_251, temp_244);
    // 0x000878: 0x49A2009402C70102 Ffma
    temp_253 = 0.0 - temp_99;
    temp_254 = fma(temp_99, fp_c5.data[11].x, temp_253);
    // 0x000888: 0x49A2009402D70105 Ffma
    temp_255 = 0.0 - temp_99;
    temp_256 = fma(temp_99, fp_c5.data[11].y, temp_255);
    // 0x000890: 0x49A2009402E70101 Ffma
    temp_257 = 0.0 - temp_99;
    temp_258 = fma(temp_99, fp_c5.data[11].z, temp_257);
    // 0x000898: 0x5C68100000F7092C Fmul
    temp_259 = temp_246 * temp_247;
    // 0x0008A8: 0x5C68100000670906 Fmul
    temp_260 = temp_246 * temp_245;
    // 0x0008B0: 0x5C68100000470904 Fmul
    temp_261 = temp_246 * temp_248;
    // 0x0008B8: 0x3858103F80070202 Fadd
    temp_262 = temp_254 + 1.0;
    // 0x0008C8: 0x3858103F80070505 Fadd
    temp_263 = temp_256 + 1.0;
    // 0x0008D0: 0x5B6603800FF70B07 Isetp
    temp_264 = floatBitsToUint(temp_208) <= 0u;
    // 0x0008D8: 0x3858103F80070101 Fadd
    temp_265 = temp_258 + 1.0;
    // 0x0008E8: 0x5C6810000187120D Fmul
    temp_266 = temp_153 * temp_176;
    // 0x0008F0: 0x5C6810000187130F Fmul
    temp_267 = temp_155 * temp_176;
    // 0x0008F8: 0x59A4010000271727 Ffma
    temp_268 = fma(temp_152, temp_262, temp_262);
    temp_269 = clamp(temp_268, 0.0, 1.0);
    // 0x000908: 0x59A4028000571A28 Ffma
    temp_270 = fma(temp_132, temp_263, temp_263);
    temp_271 = clamp(temp_270, 0.0, 1.0);
    // 0x000910: 0x1E23E22F9837062A Fmul32i
    temp_272 = temp_260 * 0.159154937;
    // 0x000918: 0x59A4008000171B29 Ffma
    temp_273 = fma(temp_94, temp_265, temp_265);
    temp_274 = clamp(temp_273, 0.0, 1.0);
    // 0x000928: 0x32A2184000070D0D Ffma
    temp_275 = 0.0 - temp_74;
    temp_276 = fma(temp_266, 2.0, temp_275);
    // 0x000930: 0x32A216C000070F0F Ffma
    temp_277 = 0.0 - temp_78;
    temp_278 = fma(temp_267, 2.0, temp_277);
    // 0x000938: 0x1E23E22F9837042B Fmul32i
    temp_279 = temp_261 * 0.159154937;
    // 0x000948: 0x1E23E22F98372C2C Fmul32i
    temp_280 = temp_259 * 0.159154937;
    // 0x000950: 0xF0F800000000000F Sync
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
    if (!temp_264)
    {
        // 0x000958: 0x5C9807800FF70032 Mov
        // 0x000968: 0xE043FF8D0007FF09 Ipa
        temp_293 = in_attr5.x;
        // 0x000970: 0xE043FF8D4007FF08 Ipa
        temp_294 = in_attr5.y;
        // 0x000978: 0xE043FF8D8007FF02 Ipa
        temp_295 = in_attr5.z;
        temp_296 = 0;
        do
        {
            // 0x000988: 0x5C18020003270C36 Iscadd
            temp_298 = int(temp_174) << 4;
            temp_299 = temp_298 + temp_296;
            // 0x000990: 0xE290000056800000 Ssy
            // 0x000998: 0x1C00000000173232 Iadd32i
            temp_300 = temp_296 + 1;
            // 0x0009A8: 0x3848000000473636 Shl
            temp_301 = temp_299 << 4;
            // 0x0009B0: 0x5B6C038000B7320F Isetp
            temp_297 = uint(temp_300) >= floatBitsToUint(temp_208);
            // 0x0009B8: 0xEF94008200073631 Ldc
            temp_302 = temp_301 + 0x2000;
            temp_303 = uint(temp_302) >> 2;
            temp_304 = temp_303 >> 2;
            temp_305 = int(temp_303) & 3;
            temp_306 = fp_c8.data[int(temp_304)][temp_305];
            // 0x0009C8: 0x3848000000673131 Shl
            temp_307 = floatBitsToInt(temp_306) << 6;
            // 0x0009D0: 0xEF95008001073100 Ldc
            temp_308 = temp_307 + 16;
            temp_309 = uint(temp_308) >> 2;
            temp_310 = temp_309 >> 2;
            temp_311 = int(temp_309) & 3;
            temp_312 = fp_c8.data[int(temp_310)][temp_311];
            temp_313 = int(temp_309) + 1;
            temp_314 = uint(temp_313) >> 2;
            temp_315 = temp_313 & 3;
            temp_316 = fp_c8.data[int(temp_314)][temp_315];
            // 0x0009D8: 0xEF95008001873104 Ldc
            temp_317 = temp_307 + 24;
            temp_318 = uint(temp_317) >> 2;
            temp_319 = temp_318 >> 2;
            temp_320 = int(temp_318) & 3;
            temp_321 = fp_c8.data[int(temp_319)][temp_320];
            temp_322 = int(temp_318) + 1;
            temp_323 = uint(temp_322) >> 2;
            temp_324 = temp_322 & 3;
            temp_325 = fp_c8.data[int(temp_323)][temp_324];
            // 0x0009E8: 0xEF95008002073106 Ldc
            temp_326 = temp_307 + 32;
            temp_327 = uint(temp_326) >> 2;
            temp_328 = temp_327 >> 2;
            temp_329 = int(temp_327) & 3;
            temp_330 = fp_c8.data[int(temp_328)][temp_329];
            temp_331 = int(temp_327) + 1;
            temp_332 = uint(temp_331) >> 2;
            temp_333 = temp_331 & 3;
            temp_334 = fp_c8.data[int(temp_332)][temp_333];
            // 0x0009F0: 0x5C58300000970033 Fadd
            temp_335 = 0.0 - temp_293;
            temp_336 = temp_312 + temp_335;
            // 0x0009F8: 0x5C58300000870134 Fadd
            temp_337 = 0.0 - temp_294;
            temp_338 = temp_316 + temp_337;
            // 0x000A08: 0x5C58300000270404 Fadd
            temp_339 = 0.0 - temp_295;
            temp_340 = temp_321 + temp_339;
            // 0x000A10: 0x5C68100003373301 Fmul
            temp_341 = temp_336 * temp_336;
            // 0x000A18: 0x59A1020000470500 Ffma
            temp_342 = 0.0 - temp_340;
            temp_343 = fma(temp_325, temp_342, temp_340);
            // 0x000A28: 0x59A0008003473405 Ffma
            temp_344 = fma(temp_338, temp_338, temp_341);
            // 0x000A30: 0x59A0028000070035 Ffma
            temp_345 = fma(temp_343, temp_343, temp_344);
            // 0x000A38: 0x5080000000573501 Mufu
            temp_346 = inversesqrt(temp_345);
            // 0x000A48: 0x5080000000873536 Mufu
            temp_347 = sqrt(temp_345);
            // 0x000A50: 0x5C68100000173337 Fmul
            temp_348 = temp_336 * temp_346;
            // 0x000A58: 0x5C68100000170000 Fmul
            temp_349 = temp_343 * temp_346;
            // 0x000A68: 0x5C68100000173401 Fmul
            temp_350 = temp_338 * temp_346;
            // 0x000A70: 0x5C69100000673706 Fmul
            temp_351 = 0.0 - temp_330;
            temp_352 = temp_348 * temp_351;
            // 0x000A78: 0x59A1030000770106 Ffma
            temp_353 = 0.0 - temp_334;
            temp_354 = fma(temp_350, temp_353, temp_352);
            // 0x000A88: 0xEF94008002873101 Ldc
            temp_355 = temp_307 + 40;
            temp_356 = uint(temp_355) >> 2;
            temp_357 = temp_356 >> 2;
            temp_358 = int(temp_356) & 3;
            temp_359 = fp_c8.data[int(temp_357)][temp_358];
            // 0x000A90: 0x59A1030000170006 Ffma
            temp_360 = 0.0 - temp_359;
            temp_361 = fma(temp_349, temp_360, temp_354);
            // 0x000A98: 0xEF95008003873100 Ldc
            temp_362 = temp_307 + 56;
            temp_363 = uint(temp_362) >> 2;
            temp_364 = temp_363 >> 2;
            temp_365 = int(temp_363) & 3;
            temp_366 = fp_c8.data[int(temp_364)][temp_365];
            temp_367 = int(temp_363) + 1;
            temp_368 = uint(temp_367) >> 2;
            temp_369 = temp_367 & 3;
            temp_370 = fp_c8.data[int(temp_368)][temp_369];
            // 0x000AA8: 0x59A4008000070600 Ffma
            temp_371 = fma(temp_361, temp_366, temp_370);
            temp_372 = clamp(temp_371, 0.0, 1.0);
            // 0x000AB0: 0x010404000007F006 Mov32i
            // 0x000AB8: 0x5C68100000070007 Fmul
            temp_373 = temp_372 * temp_372;
            // 0x000AC8: 0x33A0034000070000 Ffma
            temp_374 = fma(temp_372, -2.0, 3.0);
            // 0x000AD0: 0x5C68100000070707 Fmul
            temp_375 = temp_373 * temp_374;
            // 0x000AD8: 0xEF95008003073100 Ldc
            temp_376 = temp_307 + 48;
            temp_377 = uint(temp_376) >> 2;
            temp_378 = temp_377 >> 2;
            temp_379 = int(temp_377) & 3;
            temp_380 = fp_c8.data[int(temp_378)][temp_379];
            temp_381 = int(temp_377) + 1;
            temp_382 = uint(temp_381) >> 2;
            temp_383 = temp_381 & 3;
            temp_384 = fp_c8.data[int(temp_382)][temp_383];
            // 0x000AE8: 0x59A4008003670037 Ffma
            temp_385 = fma(temp_380, temp_347, temp_384);
            temp_386 = clamp(temp_385, 0.0, 1.0);
            // 0x000AF0: 0x33A0034000073706 Ffma
            temp_387 = fma(temp_386, -2.0, 3.0);
            // 0x000AF8: 0x5C68100003773737 Fmul
            temp_388 = temp_386 * temp_386;
            // 0x000B08: 0x5C68100000673706 Fmul
            temp_389 = temp_388 * temp_387;
            // 0x000B10: 0x5C68100000670707 Fmul
            temp_390 = temp_375 * temp_389;
            // 0x000B18: 0x39585042F0070406 Fadd
            temp_391 = abs(temp_340);
            temp_392 = temp_391 + -120.0;
            // 0x000B28: 0x1EABD4CCCCD70606 Fmul32i
            temp_393 = temp_392 * -0.0500000007;
            temp_394 = clamp(temp_393, 0.0, 1.0);
            // 0x000B30: 0x5C68100000670706 Fmul
            temp_395 = temp_390 * temp_394;
            // 0x000B38: 0x36247F9000170707 Xmad
            temp_396 = floatBitsToUint(temp_390) >> 16;
            temp_397 = int(temp_396) << 16;
            // 0x000B48: 0x5BB383800FF70607 Fsetp
            temp_398 = temp_395 <= 0.0;
            // 0x000B50: 0x7A05083C0F00FF07 Hadd2
            temp_296 = temp_300;
            temp_399 = uint(temp_397);
            temp_400 = temp_281;
            temp_401 = temp_282;
            temp_402 = temp_283;
            temp_403 = temp_284;
            temp_404 = temp_285;
            temp_405 = temp_286;
            if (temp_398)
            {
                temp_406 = unpackHalf2x16(uint(temp_397)).y;
                temp_407 = packHalf2x16(vec2(1.0, temp_406));
                temp_399 = temp_407;
            }
            // 0x000B58: 0x5D2103902FF70707 Hsetp2
            temp_408 = unpackHalf2x16(temp_399).x;
            temp_409 = temp_408 == 0.0;
            // 0x000B68: 0xF0F800000008000F Sync
            if (temp_409)
            {
                // 0x000B70: 0x5080000000470000 Mufu
                temp_410 = 1.0 / temp_380;
                // 0x000B78: 0x5C69100000070101 Fmul
                temp_411 = 0.0 - temp_410;
                temp_412 = temp_384 * temp_411;
                // 0x000B88: 0x5C60138000170404 Fmnmx
                temp_413 = min(temp_340, temp_412);
                // 0x000B90: 0x5C61178000470104 Fmnmx
                temp_414 = 0.0 - temp_412;
                temp_415 = max(temp_414, temp_413);
                // 0x000B98: 0x59A0028000470405 Ffma
                temp_416 = fma(temp_415, temp_415, temp_344);
                // 0x000BA8: 0x5080000000570536 Mufu
                temp_417 = inversesqrt(temp_416);
                // 0x000BB0: 0x5080000000870505 Mufu
                temp_418 = sqrt(temp_416);
                // 0x000BB8: 0x5C68100003673333 Fmul
                temp_419 = temp_336 * temp_417;
                // 0x000BC8: 0x5C68100003673434 Fmul
                temp_420 = temp_338 * temp_417;
                // 0x000BD0: 0x5C68100003670436 Fmul
                temp_421 = temp_415 * temp_417;
                // 0x000BD8: 0x5C58100003373001 Fadd
                temp_422 = temp_74 + temp_419;
                // 0x000BE8: 0x5C58100003472F04 Fadd
                temp_423 = temp_76 + temp_420;
                // 0x000BF0: 0x5C58100003672D00 Fadd
                temp_424 = temp_78 + temp_421;
                // 0x000BF8: 0x5C68100000170107 Fmul
                temp_425 = temp_422 * temp_422;
                // 0x000C08: 0x59A0038000470407 Ffma
                temp_426 = fma(temp_423, temp_423, temp_425);
                // 0x000C10: 0x59A0038000070035 Ffma
                temp_427 = fma(temp_424, temp_424, temp_426);
                // 0x000C18: 0x5080000000573537 Mufu
                temp_428 = inversesqrt(temp_427);
                // 0x000C28: 0x5C68100003770101 Fmul
                temp_429 = temp_422 * temp_428;
                // 0x000C30: 0x5C68100003770407 Fmul
                temp_430 = temp_423 * temp_428;
                // 0x000C38: 0x5C68100003770000 Fmul
                temp_431 = temp_424 * temp_428;
                // 0x000C48: 0x5C68100003371237 Fmul
                temp_432 = temp_153 * temp_419;
                // 0x000C50: 0x5C68100000173304 Fmul
                temp_433 = temp_419 * temp_429;
                // 0x000C58: 0x59A0020000773433 Ffma
                temp_434 = fma(temp_420, temp_430, temp_433);
                // 0x000C68: 0x59A01B8003471534 Ffma
                temp_435 = fma(temp_154, temp_420, temp_432);
                // 0x000C70: 0xEF94008002C73137 Ldc
                temp_436 = temp_307 + 44;
                temp_437 = uint(temp_436) >> 2;
                temp_438 = temp_437 >> 2;
                temp_439 = int(temp_437) & 3;
                temp_440 = fp_c8.data[int(temp_438)][temp_439];
                // 0x000C78: 0x5C68100000171204 Fmul
                temp_441 = temp_153 * temp_429;
                // 0x000C88: 0x59A0020000771501 Ffma
                temp_442 = fma(temp_154, temp_430, temp_441);
                // 0x000C90: 0x59A01A0003671307 Ffma
                temp_443 = fma(temp_155, temp_421, temp_435);
                // 0x000C98: 0x59A4198000073634 Ffma
                temp_444 = fma(temp_421, temp_431, temp_434);
                temp_445 = clamp(temp_444, 0.0, 1.0);
                // 0x000CA8: 0x51A40B0400171633 Ffma
                temp_446 = fma(temp_156, temp_156, fp_c1.data[0].y);
                temp_447 = clamp(temp_446, 0.0, 1.0);
                // 0x000CB0: 0x59A4008000071335 Ffma
                temp_448 = fma(temp_155, temp_431, temp_442);
                temp_449 = clamp(temp_448, 0.0, 1.0);
                // 0x000CB8: 0x01040DF760C7F001 Mov32i
                // 0x000CC8: 0x5C68100003373336 Fmul
                temp_450 = temp_447 * temp_447;
                // 0x000CD0: 0x49A2008400073401 Ffma
                temp_451 = fma(temp_445, fp_c1.data[0].x, -6.98316002);
                // 0x000CD8: 0x59A21A8003573636 Ffma
                temp_452 = 0.0 - temp_449;
                temp_453 = fma(temp_450, temp_449, temp_452);
                // 0x000CE8: 0x5C68100000173434 Fmul
                temp_454 = temp_445 * temp_451;
                // 0x000CF0: 0x51A01B0400273535 Ffma
                temp_455 = fma(temp_449, temp_453, fp_c1.data[0].z);
                // 0x000CF8: 0x5080000000473535 Mufu
                temp_456 = 1.0 / temp_455;
                // 0x000D08: 0x5C90008003470034 Rro
                // 0x000D10: 0x5C68100003573333 Fmul
                temp_457 = temp_447 * temp_456;
                // 0x000D18: 0x5080000000473704 Mufu
                temp_458 = 1.0 / temp_440;
                // 0x000D28: 0x5C68100003373335 Fmul
                temp_459 = temp_457 * temp_457;
                // 0x000D30: 0x51A0028400370404 Ffma
                temp_460 = fma(temp_458, temp_418, fp_c1.data[0].w);
                // 0x000D38: 0xEF94008000873105 Ldc
                temp_461 = temp_307 + 8;
                temp_462 = uint(temp_461) >> 2;
                temp_463 = temp_462 >> 2;
                temp_464 = int(temp_462) & 3;
                temp_465 = fp_c8.data[int(temp_463)][temp_464];
                // 0x000D48: 0x5080000000470400 Mufu
                temp_466 = 1.0 / temp_460;
                // 0x000D50: 0x1E23FB3333370036 Fmul32i
                temp_467 = temp_466 * 1.39999998;
                // 0x000D58: 0xEF95008000073100 Ldc
                temp_468 = uint(temp_307) >> 2;
                temp_469 = temp_468 >> 2;
                temp_470 = int(temp_468) & 3;
                temp_471 = fp_c8.data[int(temp_469)][temp_470];
                temp_472 = int(temp_468) + 1;
                temp_473 = uint(temp_472) >> 2;
                temp_474 = temp_472 & 3;
                temp_475 = fp_c8.data[int(temp_473)][temp_474];
                // 0x000D68: 0x5C68100003673636 Fmul
                temp_476 = temp_467 * temp_467;
                // 0x000D70: 0x59A11B0003670704 Ffma
                temp_477 = 0.0 - temp_476;
                temp_478 = fma(temp_443, temp_477, temp_476);
                // 0x000D78: 0x5080000000273436 Mufu
                temp_479 = exp2(temp_454);
                // 0x000D88: 0x5C5C100000470704 Fadd
                temp_480 = temp_443 + temp_478;
                temp_481 = clamp(temp_480, 0.0, 1.0);
                // 0x000D90: 0x5C5C30000FF70707 Fadd
                temp_482 = temp_443 + -0.0;
                temp_483 = clamp(temp_482, 0.0, 1.0);
                // 0x000D98: 0x59A1038000770E37 Ffma
                temp_484 = 0.0 - temp_483;
                temp_485 = fma(temp_167, temp_484, temp_483);
                // 0x000DA8: 0x5C58100003770E37 Fadd
                temp_486 = temp_167 + temp_485;
                // 0x000DB0: 0x5080000000473737 Mufu
                temp_487 = 1.0 / temp_486;
                // 0x000DB8: 0x5C68100000570605 Fmul
                temp_488 = temp_395 * temp_465;
                // 0x000DC8: 0x5C68100003770A34 Fmul
                temp_489 = temp_213 * temp_487;
                // 0x000DD0: 0x5C68100000070633 Fmul
                temp_490 = temp_395 * temp_471;
                // 0x000DD8: 0x5C68100000170601 Fmul
                temp_491 = temp_395 * temp_475;
                // 0x000DE8: 0x59A11B0003671906 Ffma
                temp_492 = 0.0 - temp_479;
                temp_493 = fma(temp_191, temp_492, temp_479);
                // 0x000DF0: 0x5C68100003473500 Fmul
                temp_494 = temp_459 * temp_489;
                // 0x000DF8: 0x59A11B0003671C35 Ffma
                temp_495 = 0.0 - temp_479;
                temp_496 = fma(temp_146, temp_495, temp_479);
                // 0x000E08: 0x59A11B0003671D36 Ffma
                temp_497 = 0.0 - temp_479;
                temp_498 = fma(temp_135, temp_497, temp_479);
                // 0x000E10: 0x5C58100000671906 Fadd
                temp_499 = temp_191 + temp_493;
                // 0x000E18: 0x5C68100000070700 Fmul
                temp_500 = temp_483 * temp_494;
                // 0x000E28: 0x5C58100003571C35 Fadd
                temp_501 = temp_146 + temp_496;
                // 0x000E30: 0x5C58100003671D36 Fadd
                temp_502 = temp_135 + temp_498;
                // 0x000E38: 0x4C68101406270606 Fmul
                temp_503 = temp_499 * fp_c5.data[24].z;
                // 0x000E48: 0x4C68101406273534 Fmul
                temp_504 = temp_501 * fp_c5.data[24].z;
                // 0x000E50: 0x4C68101406273636 Fmul
                temp_505 = temp_502 * fp_c5.data[24].z;
                // 0x000E58: 0x5C68100003370631 Fmul
                temp_506 = temp_503 * temp_490;
                // 0x000E68: 0x5C68100000473333 Fmul
                temp_507 = temp_490 * temp_481;
                // 0x000E70: 0x5C68100000173406 Fmul
                temp_508 = temp_504 * temp_491;
                // 0x000E78: 0x5C68100000573607 Fmul
                temp_509 = temp_505 * temp_488;
                // 0x000E88: 0x5C68100000470101 Fmul
                temp_510 = temp_491 * temp_481;
                // 0x000E90: 0x5C68100000470504 Fmul
                temp_511 = temp_488 * temp_481;
                // 0x000E98: 0x5C68100000073131 Fmul
                temp_512 = temp_506 * temp_500;
                // 0x000EA8: 0x49A0108400573321 Ffma
                temp_513 = fma(temp_507, fp_c1.data[1].y, temp_281);
                // 0x000EB0: 0x5C68100000070606 Fmul
                temp_514 = temp_508 * temp_500;
                // 0x000EB8: 0x5C68100000070707 Fmul
                temp_515 = temp_509 * temp_500;
                // 0x000EC8: 0x49A0110400570122 Ffma
                temp_516 = fma(temp_510, fp_c1.data[1].y, temp_282);
                // 0x000ED0: 0x49A0118400570423 Ffma
                temp_517 = fma(temp_511, fp_c1.data[1].y, temp_283);
                // 0x000ED8: 0x49A0120400473124 Ffma
                temp_518 = fma(temp_512, fp_c1.data[1].x, temp_284);
                // 0x000EE8: 0x49A0128400470625 Ffma
                temp_519 = fma(temp_514, fp_c1.data[1].x, temp_285);
                // 0x000EF0: 0x49A0130400470726 Ffma
                temp_520 = fma(temp_515, fp_c1.data[1].x, temp_286);
                // 0x000EF8: 0xF0F800000007000F Sync
                temp_400 = temp_513;
                temp_401 = temp_516;
                temp_402 = temp_517;
                temp_403 = temp_518;
                temp_404 = temp_519;
                temp_405 = temp_520;
            }
            // 0x000F08: 0xE2400FFFA709000F Bra
            temp_281 = temp_400;
            temp_282 = temp_401;
            temp_283 = temp_402;
            temp_284 = temp_403;
            temp_285 = temp_404;
            temp_286 = temp_405;
            temp_287 = temp_400;
            temp_288 = temp_401;
            temp_289 = temp_402;
            temp_290 = temp_403;
            temp_291 = temp_404;
            temp_292 = temp_405;
        }
        while (!temp_297);
        // 0x000F10: 0xF0F800000007000F Sync
    }
    // 0x000F18: 0x5C62578002E70D01 Fmnmx
    temp_521 = abs(temp_276);
    temp_522 = abs(temp_203);
    temp_523 = max(temp_521, temp_522);
    // 0x000F28: 0xE003FF87CFF7FF07 Ipa
    // 0x000F30: 0x38681040E007162D Fmul
    temp_524 = temp_156 * 7.0;
    // 0x000F38: 0x5C62578001571200 Fmnmx
    temp_525 = abs(temp_153);
    temp_526 = abs(temp_154);
    temp_527 = max(temp_525, temp_526);
    // 0x000F48: 0x010000000017F00C Mov32i
    // 0x000F50: 0x386810408007160B Fmul
    temp_528 = temp_156 * 4.0;
    // 0x000F58: 0x4C98079C0207002F Mov
    // 0x000F68: 0x5C60578000170F02 Fmnmx
    temp_529 = abs(temp_278);
    temp_530 = max(temp_529, temp_523);
    // 0x000F70: 0x5C60578000071301 Fmnmx
    temp_531 = abs(temp_155);
    temp_532 = max(temp_531, temp_527);
    // 0x000F78: 0x5080000000470208 Mufu
    temp_533 = 1.0 / temp_530;
    // 0x000F88: 0x3859103F80071616 Fadd
    temp_534 = 0.0 - temp_156;
    temp_535 = temp_534 + 1.0;
    // 0x000F90: 0x5080000000470104 Mufu
    temp_536 = 1.0 / temp_532;
    // 0x000F98: 0x5C68100000870D0D Fmul
    temp_537 = temp_276 * temp_533;
    // 0x000FA8: 0x5C68100000872E0E Fmul
    temp_538 = temp_203 * temp_533;
    // 0x000FB0: 0x5080000000470707 Mufu
    // 0x000FB8: 0x5C69100000870F0F Fmul
    temp_539 = 0.0 - temp_533;
    temp_540 = temp_278 * temp_539;
    // 0x000FC8: 0x5C6910000047130A Fmul
    temp_541 = 0.0 - temp_536;
    temp_542 = temp_155 * temp_541;
    // 0x000FD0: 0x5C68100000471208 Fmul
    temp_543 = temp_153 * temp_536;
    // 0x000FD8: 0x5C68100000471509 Fmul
    temp_544 = temp_154 * temp_536;
    // 0x000FE8: 0xC0BA0163EFF70804 Tex
    temp_545 = textureLod(fp_t_tcb_16, vec3(temp_543, temp_544, temp_542), 0.0).xyz;
    temp_546 = temp_545.x;
    temp_547 = temp_545.y;
    temp_548 = temp_545.z;
    // 0x000FF0: 0xC1BA0143F2D70C0C Tex
    temp_549 = textureLod(fp_t_tcb_14, vec4(temp_537, temp_538, temp_540, float(1)), temp_524).xyz;
    temp_550 = temp_549.x;
    temp_551 = temp_549.y;
    temp_552 = temp_549.z;
    // 0x000FF8: 0xD9A20180B0A70812 Texs
    temp_553 = textureLod(fp_t_tcb_18, vec3(temp_543, temp_544, temp_542), temp_528).xyz;
    temp_554 = temp_553.x;
    temp_555 = temp_553.y;
    temp_556 = temp_553.z;
    // 0x001008: 0xE043FF920077FF00 Ipa
    temp_557 = in_attr10.x;
    // 0x001010: 0xE043FF924077FF01 Ipa
    temp_558 = in_attr10.y;
    // 0x001018: 0xE043FF928077FF02 Ipa
    temp_559 = in_attr10.z;
    // 0x001028: 0xDEBA0000C2F70000 TexB
    temp_560 = texture(fp_t_cb7_20, vec3(temp_557, temp_558, temp_559)).x;
    // 0x001030: 0x3859103F8007180F Fadd
    temp_561 = 0.0 - temp_176;
    temp_562 = temp_561 + 1.0;
    // 0x001038: 0x49A00F180A17211E Ffma
    temp_563 = fma(temp_287, fp_c6.data[40].y, temp_224);
    // 0x001048: 0x5C68100001671616 Fmul
    temp_564 = temp_535 * temp_535;
    // 0x001050: 0x010410676C97F021 Mov32i
    // 0x001058: 0x49A00F980A17221F Ffma
    temp_565 = fma(temp_288, fp_c6.data[40].y, temp_250);
    // 0x001068: 0x1E23E468DB971808 Fmul32i
    temp_566 = temp_176 * 0.193900004;
    // 0x001070: 0x4C9807980B470022 Mov
    // 0x001078: 0x49A010180A172320 Ffma
    temp_567 = fma(temp_289, fp_c6.data[40].y, temp_252);
    // 0x001088: 0x5C68100001671609 Fmul
    temp_568 = temp_564 * temp_564;
    // 0x001090: 0x0103E2CD9E87F016 Mov32i
    // 0x001098: 0x49A010840097180A Ffma
    temp_569 = fma(temp_176, fp_c1.data[2].y, 8.40400028);
    // 0x0010A8: 0x0103F0000007F023 Mov32i
    // 0x0010B0: 0xF0F0000034370000 Depbar
    // 0x0010B8: 0x51A211180B471111 Ffma
    temp_570 = 0.0 - fp_c6.data[45].x;
    temp_571 = fma(temp_34, fp_c6.data[45].x, temp_570);
    // 0x0010C8: 0x51A211180B471414 Ffma
    temp_572 = 0.0 - fp_c6.data[45].x;
    temp_573 = fma(temp_35, fp_c6.data[45].x, temp_572);
    // 0x0010D0: 0x51A211180B471010 Ffma
    temp_574 = 0.0 - fp_c6.data[45].x;
    temp_575 = fma(temp_33, fp_c6.data[45].x, temp_574);
    // 0x0010D8: 0x49A20B0400B70916 Ffma
    temp_576 = fma(temp_568, fp_c1.data[2].w, -0.168799996);
    // 0x0010E8: 0x4C68101809070F01 Fmul
    temp_577 = temp_562 * fp_c6.data[36].x;
    // 0x0010F0: 0x51A0050400A7180F Ffma
    temp_578 = fma(temp_176, temp_569, fp_c1.data[2].z);
    // 0x0010F8: 0xE04BFF904077FF0A Ipa
    temp_579 = in_attr8.y;
    temp_580 = clamp(temp_579, 0.0, 1.0);
    // 0x001108: 0x49A0040400670902 Ffma
    temp_581 = fma(temp_568, fp_c1.data[1].z, temp_566);
    // 0x001110: 0x5080400000370101 Mufu
    temp_582 = abs(temp_577);
    temp_583 = log2(temp_582);
    // 0x001118: 0x0104066978D7F022 Mov32i
    // 0x001128: 0x32A011BF00071508 Ffma
    temp_584 = fma(temp_154, 0.5, 0.5);
    // 0x001130: 0x5C68100001670916 Fmul
    temp_585 = temp_568 * temp_576;
    // 0x001138: 0x4C98079809770015 Mov
    // 0x001148: 0x51A0078400C7180F Ffma
    temp_586 = fma(temp_176, temp_578, fp_c1.data[3].x);
    // 0x001150: 0x088BF05D63970202 Fadd32i
    temp_587 = temp_581 + -0.522800028;
    // 0x001158: 0x49A2110400770922 Ffma
    temp_588 = fma(temp_568, fp_c1.data[1].w, -3.60299993);
    // 0x001168: 0x4C98079800970021 Mov
    // 0x001170: 0x4C98079800A70023 Mov
    // 0x001178: 0x4C58101407E71515 Fadd
    temp_589 = fp_c6.data[37].w + fp_c5.data[31].z;
    // 0x001188: 0x5C60138001670F0F Fmnmx
    temp_590 = min(temp_586, temp_585);
    // 0x001190: 0x5C68100000271818 Fmul
    temp_591 = temp_176 * temp_587;
    // 0x001198: 0x4C68101809170101 Fmul
    temp_592 = temp_583 * fp_c6.data[36].y;
    // 0x0011A8: 0x4C98079800870002 Mov
    // 0x0011B0: 0x51A0110400870922 Ffma
    temp_593 = fma(temp_568, temp_588, fp_c1.data[2].x);
    // 0x0011B8: 0x49A015980A17242B Ffma
    temp_594 = fma(temp_290, fp_c6.data[40].y, temp_279);
    // 0x0011C8: 0x4C98079407F70024 Mov
    // 0x0011D0: 0x49A015180A17252A Ffma
    temp_595 = fma(temp_291, fp_c6.data[40].y, temp_272);
    // 0x0011D8: 0x5C90008000170016 Rro
    // 0x0011E8: 0x4C59101800470201 Fadd
    temp_596 = 0.0 - fp_c6.data[2].x;
    temp_597 = temp_596 + fp_c6.data[1].x;
    // 0x0011F0: 0x5084000000271616 Mufu
    temp_598 = exp2(temp_592);
    temp_599 = clamp(temp_598, 0.0, 1.0);
    // 0x0011F8: 0x4C59101800572102 Fadd
    temp_600 = 0.0 - fp_c6.data[2].y;
    temp_601 = temp_600 + fp_c6.data[1].y;
    // 0x001208: 0x4C59101800672321 Fadd
    temp_602 = 0.0 - fp_c6.data[2].z;
    temp_603 = temp_602 + fp_c6.data[1].z;
    // 0x001210: 0x010404000007F023 Mov32i
    // 0x001218: 0x59A00C0002270918 Ffma
    temp_604 = fma(temp_568, temp_593, temp_591);
    // 0x001228: 0x4C68101406272424 Fmul
    temp_605 = fp_c5.data[31].w * fp_c5.data[24].z;
    // 0x001230: 0x51A0009800870801 Ffma
    temp_606 = fma(temp_584, temp_597, fp_c6.data[2].x);
    // 0x001238: 0x51A0011800970802 Ffma
    temp_607 = fma(temp_584, temp_601, fp_c6.data[2].y);
    // 0x001248: 0x51A0109800A70808 Ffma
    temp_608 = fma(temp_584, temp_603, fp_c6.data[2].z);
    // 0x001250: 0x33A011C000070A09 Ffma
    temp_609 = fma(temp_580, -2.0, 3.0);
    // 0x001258: 0x5C68100000A70A22 Fmul
    temp_610 = temp_580 * temp_580;
    // 0x001268: 0x386C104248071C21 Fmul
    temp_611 = temp_146 * 50.0;
    temp_612 = clamp(temp_611, 0.0, 1.0);
    // 0x001270: 0x4C5C100400D71818 Fadd
    temp_613 = temp_604 + fp_c1.data[3].y;
    temp_614 = clamp(temp_613, 0.0, 1.0);
    // 0x001278: 0x5C68100001671515 Fmul
    temp_615 = temp_589 * temp_599;
    // 0x001288: 0x5C5C30000FF70F16 Fadd
    temp_616 = temp_590 + -0.0;
    temp_617 = clamp(temp_616, 0.0, 1.0);
    // 0x001290: 0x49A016180A17262C Ffma
    temp_618 = fma(temp_292, fp_c6.data[40].y, temp_280);
    // 0x001298: 0x5C68100002270909 Fmul
    temp_619 = temp_609 * temp_610;
    // 0x0012A8: 0x4C68101808D7150F Fmul
    temp_620 = temp_615 * fp_c6.data[35].y;
    // 0x0012B0: 0x4C68101808E7150A Fmul
    temp_621 = temp_615 * fp_c6.data[35].z;
    // 0x0012B8: 0x4C68101808C71515 Fmul
    temp_622 = temp_615 * fp_c6.data[35].x;
    // 0x0012C8: 0x5C68100002171622 Fmul
    temp_623 = temp_617 * temp_612;
    // 0x0012D0: 0x5C59100001871623 Fadd
    temp_624 = 0.0 - temp_617;
    temp_625 = temp_624 + temp_614;
    // 0x0012D8: 0x4C68101803770909 Fmul
    temp_626 = temp_619 * fp_c6.data[13].w;
    // 0x0012E8: 0x59A0150002470F2A Ffma
    temp_627 = fma(temp_620, temp_605, temp_595);
    // 0x0012F0: 0x49A1079407F70F16 Ffma
    temp_628 = 0.0 - fp_c5.data[31].w;
    temp_629 = fma(temp_620, temp_628, temp_620);
    // 0x0012F8: 0x59A015800247152B Ffma
    temp_630 = fma(temp_622, temp_605, temp_594);
    // 0x001308: 0x59A0160002470A2C Ffma
    temp_631 = fma(temp_621, temp_605, temp_618);
    // 0x001310: 0x49A10A9407F71515 Ffma
    temp_632 = 0.0 - fp_c5.data[31].w;
    temp_633 = fma(temp_622, temp_632, temp_622);
    // 0x001318: 0x49A1051407F70A0F Ffma
    temp_634 = 0.0 - fp_c5.data[31].w;
    temp_635 = fma(temp_621, temp_634, temp_621);
    // 0x001328: 0xE043FF900077FF0A Ipa
    temp_636 = in_attr8.x;
    // 0x001330: 0x59A0110002371919 Ffma
    temp_637 = fma(temp_191, temp_625, temp_623);
    // 0x001338: 0xE043FF8C8077FF07 Ipa
    temp_638 = in_attr4.z;
    // 0x001348: 0x5C58100001571E15 Fadd
    temp_639 = temp_563 + temp_633;
    // 0x001350: 0x59A0110002371C1C Ffma
    temp_640 = fma(temp_146, temp_625, temp_623);
    // 0x001358: 0x59A0110002371D1D Ffma
    temp_641 = fma(temp_135, temp_625, temp_623);
    // 0x001368: 0x5C58100001671F16 Fadd
    temp_642 = temp_565 + temp_629;
    // 0x001370: 0x5C58100000F7200F Fadd
    temp_643 = temp_567 + temp_635;
    // 0x001378: 0x4C68101406271919 Fmul
    temp_644 = temp_637 * fp_c5.data[24].z;
    // 0x001388: 0x4C68101406271C1C Fmul
    temp_645 = temp_640 * fp_c5.data[24].z;
    // 0x001390: 0x4C68101406271D1D Fmul
    temp_646 = temp_641 * fp_c5.data[24].z;
    // 0x001398: 0xF0F0000034170000 Depbar
    // 0x0013A8: 0x49A0020400570104 Ffma
    temp_647 = fma(temp_606, fp_c1.data[1].y, temp_546);
    // 0x0013B0: 0x49A0028400570205 Ffma
    temp_648 = fma(temp_607, fp_c1.data[1].y, temp_547);
    // 0x0013B8: 0x49A0091808570C0C Ffma
    temp_649 = fma(temp_550, fp_c6.data[33].y, temp_554);
    // 0x0013C8: 0x49A0030400570806 Ffma
    temp_650 = fma(temp_608, fp_c1.data[1].y, temp_548);
    // 0x0013D0: 0x49A0099808570D0D Ffma
    temp_651 = fma(temp_551, fp_c6.data[33].y, temp_555);
    // 0x0013D8: 0x49A0059808570E0B Ffma
    temp_652 = fma(temp_552, fp_c6.data[33].y, temp_556);
    // 0x0013E8: 0x5C58100000471504 Fadd
    temp_653 = temp_639 + temp_647;
    // 0x0013F0: 0x5C58100000571605 Fadd
    temp_654 = temp_642 + temp_648;
    // 0x0013F8: 0x59A0158000C71919 Ffma
    temp_655 = fma(temp_644, temp_649, temp_630);
    // 0x001408: 0x5C58100000670F06 Fadd
    temp_656 = temp_643 + temp_650;
    // 0x001410: 0x4C98079802870001 Mov
    // 0x001418: 0x4C98079802970002 Mov
    // 0x001428: 0x59A1020000470304 Ffma
    temp_657 = 0.0 - temp_653;
    temp_658 = fma(temp_25, temp_657, temp_653);
    // 0x001430: 0x59A0150000D71C1C Ffma
    temp_659 = fma(temp_645, temp_651, temp_627);
    // 0x001438: 0x59A1028000570305 Ffma
    temp_660 = 0.0 - temp_654;
    temp_661 = fma(temp_25, temp_660, temp_654);
    // 0x001448: 0x59A1030000670306 Ffma
    temp_662 = 0.0 - temp_656;
    temp_663 = fma(temp_25, temp_662, temp_656);
    // 0x001450: 0x59A0160000B71D1D Ffma
    temp_664 = fma(temp_646, temp_652, temp_631);
    // 0x001458: 0x51A0009802871010 Ffma
    temp_665 = fma(temp_575, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001468: 0x59A00C8000471704 Ffma
    temp_666 = fma(temp_152, temp_658, temp_655);
    // 0x001470: 0x51A0011802971111 Ffma
    temp_667 = fma(temp_571, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001478: 0x59A00E0000571A05 Ffma
    temp_668 = fma(temp_132, temp_661, temp_659);
    // 0x001488: 0x4C98079802A70002 Mov
    // 0x001490: 0x59A00E8000671B06 Ffma
    temp_669 = fma(temp_94, temp_663, temp_664);
    // 0x001498: 0x5C68100000472727 Fmul
    temp_670 = temp_269 * temp_666;
    // 0x0014A8: 0x49A2049803670904 Ffma
    temp_671 = 0.0 - temp_626;
    temp_672 = fma(temp_626, fp_c6.data[13].z, temp_671);
    // 0x0014B0: 0x5C68100000572828 Fmul
    temp_673 = temp_271 * temp_668;
    // 0x0014B8: 0x51A0011802A71414 Ffma
    temp_674 = fma(temp_573, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0014C8: 0x5C68100000672929 Fmul
    temp_675 = temp_274 * temp_669;
    // 0x0014D0: 0x49A2049803570905 Ffma
    temp_676 = 0.0 - temp_626;
    temp_677 = fma(temp_626, fp_c6.data[13].y, temp_676);
    // 0x0014D8: 0x5C58300001072701 Fadd
    temp_678 = 0.0 - temp_665;
    temp_679 = temp_670 + temp_678;
    // 0x0014E8: 0x49A008180BF70102 Ffma
    temp_680 = fma(temp_679, fp_c6.data[47].w, temp_665);
    // 0x0014F0: 0x5C58300001472901 Fadd
    temp_681 = 0.0 - temp_674;
    temp_682 = temp_675 + temp_681;
    // 0x0014F8: 0x49A505180BC7000A Ffma
    temp_683 = 0.0 - fp_c6.data[47].x;
    temp_684 = fma(temp_560, temp_683, temp_636);
    temp_685 = clamp(temp_684, 0.0, 1.0);
    // 0x001508: 0x5C58300001172800 Fadd
    temp_686 = 0.0 - temp_667;
    temp_687 = temp_673 + temp_686;
    // 0x001510: 0x5080000000370A0A Mufu
    temp_688 = log2(temp_685);
    // 0x001518: 0x5C60178000271002 Fmnmx
    temp_689 = max(temp_665, temp_680);
    // 0x001528: 0x49A00A180BF70101 Ffma
    temp_690 = fma(temp_682, fp_c6.data[47].w, temp_674);
    // 0x001530: 0x49A008980BF70000 Ffma
    temp_691 = fma(temp_687, fp_c6.data[47].w, temp_667);
    // 0x001538: 0x5C60178000171401 Fmnmx
    temp_692 = max(temp_674, temp_690);
    // 0x001548: 0x5C60178000071100 Fmnmx
    temp_693 = max(temp_667, temp_691);
    // 0x001550: 0x4C68101803170A03 Fmul
    temp_694 = temp_688 * fp_c6.data[12].y;
    // 0x001558: 0x59A0008000470104 Ffma
    temp_695 = fma(temp_692, temp_672, temp_692);
    // 0x001568: 0x59A0000000570005 Ffma
    temp_696 = fma(temp_693, temp_677, temp_693);
    // 0x001570: 0x5C90008000370006 Rro
    // 0x001578: 0x49A2049803470903 Ffma
    temp_697 = 0.0 - temp_626;
    temp_698 = fma(temp_626, fp_c6.data[13].x, temp_697);
    // 0x001588: 0x5080000000270606 Mufu
    temp_699 = exp2(temp_694);
    // 0x001590: 0x5C59100000572801 Fadd
    temp_700 = 0.0 - temp_673;
    temp_701 = temp_700 + temp_696;
    // 0x001598: 0x0103F0000007F005 Mov32i
    // 0x0015A8: 0x59A0010000370202 Ffma
    temp_702 = fma(temp_689, temp_698, temp_689);
    // 0x0015B0: 0x5C59100000272700 Fadd
    temp_703 = 0.0 - temp_670;
    temp_704 = temp_703 + temp_702;
    // 0x0015B8: 0x4C68101802B70603 Fmul
    temp_705 = temp_699 * fp_c6.data[10].w;
    // 0x0015C8: 0x5C59100000472902 Fadd
    temp_706 = 0.0 - temp_675;
    temp_707 = temp_706 + temp_695;
    // 0x0015D0: 0x4C58100C03870704 Fadd
    temp_708 = temp_638 + fp_c3.data[14].x;
    // 0x0015D8: 0x5C9807800FF70006 Mov
    // 0x0015E8: 0x0103F8000007F007 Mov32i
    // 0x0015F0: 0x59A0138000370000 Ffma
    temp_709 = fma(temp_704, temp_705, temp_670);
    // 0x0015F8: 0x59A0140000370101 Ffma
    temp_710 = fma(temp_701, temp_705, temp_673);
    // 0x001608: 0x59A0148000370202 Ffma
    temp_711 = fma(temp_707, temp_705, temp_675);
    // 0x001610: 0x0103F8000007F003 Mov32i
    // 0x001618: 0x49A37F8C03C70404 Ffma
    temp_712 = 0.0 - fp_c3.data[15].x;
    temp_713 = fma(temp_708, temp_712, -0.0);
    // 0x001628: 0xE30000000007000F Exit
    out_attr0.x = temp_709;
    out_attr0.y = temp_710;
    out_attr0.z = temp_711;
    out_attr0.w = 1.0;
    out_attr1.x = temp_713;
    out_attr1.y = 0.5;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
