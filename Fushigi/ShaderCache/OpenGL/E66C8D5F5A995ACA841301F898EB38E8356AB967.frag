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
    precise vec3 temp_31;
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
    uint temp_157;
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
    int temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    int temp_181;
    uint temp_182;
    uint temp_183;
    int temp_184;
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
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    int temp_295;
    bool temp_296;
    int temp_297;
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
    int temp_460;
    uint temp_461;
    uint temp_462;
    int temp_463;
    precise float temp_464;
    precise float temp_465;
    precise float temp_466;
    uint temp_467;
    uint temp_468;
    int temp_469;
    precise float temp_470;
    int temp_471;
    uint temp_472;
    int temp_473;
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
    precise float temp_541;
    precise float temp_542;
    precise float temp_543;
    precise vec3 temp_544;
    precise float temp_545;
    precise float temp_546;
    precise float temp_547;
    precise vec3 temp_548;
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
    // 0x000008: 0x5C9807800FF70021 Mov
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x5C9807800FF70022 Mov
    // 0x000028: 0xE003FF870FF7FF0B Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000030: 0x5C9807800FF70023 Mov
    // 0x000038: 0xE003FF874FF7FF0A Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000048: 0x4C68100C04A70B0B Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000050: 0x5080000000470000 Mufu
    // 0x000058: 0x4C68100C04B70A0A Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000068: 0xE043FF91C007FF0D Ipa
    temp_8 = in_attr9.w;
    // 0x000070: 0xE043FF8E4007FF0C Ipa
    temp_9 = in_attr6.y;
    // 0x000078: 0xE043FF8E0007FF0F Ipa
    temp_10 = in_attr6.x;
    // 0x000088: 0xE043FF8E8007FF08 Ipa
    temp_11 = in_attr6.z;
    // 0x000090: 0xE043FF8EC007FF09 Ipa
    temp_12 = in_attr6.w;
    // 0x000098: 0x5CB0100000D7090E F2i
    temp_13 = roundEven(temp_8);
    temp_14 = max(temp_13, 0.0);
    temp_15 = uint(temp_14);
    temp_16 = clamp(temp_15, 0u, 0xFFFFu);
    // 0x0000A8: 0xD8F0026FF0C70E06 Texs
    temp_17 = texture(fp_t_tcb_26, vec3(temp_10, temp_9, float(int(temp_16)))).xy;
    temp_18 = temp_17.x;
    temp_19 = temp_17.y;
    // 0x0000B0: 0xD83002CFF0970808 Texs
    temp_20 = texture(fp_t_tcb_2C, vec2(temp_11, temp_12)).xy;
    temp_21 = temp_20.x;
    temp_22 = temp_20.y;
    // 0x0000B8: 0xD8E4036010C70E02 Texs
    temp_23 = texture(fp_t_tcb_36, vec3(temp_10, temp_9, float(int(temp_16)))).xyw;
    temp_24 = temp_23.x;
    temp_25 = temp_23.y;
    temp_26 = temp_23.z;
    // 0x0000C8: 0xD8E20241B0C70E04 Texs
    temp_27 = texture(fp_t_tcb_24, vec3(temp_10, temp_9, float(int(temp_16)))).xyz;
    temp_28 = temp_27.x;
    temp_29 = temp_27.y;
    temp_30 = temp_27.z;
    // 0x0000D0: 0xD822020140A70B10 Texs
    temp_31 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_32 = temp_31.x;
    temp_33 = temp_31.y;
    temp_34 = temp_31.z;
    // 0x0000D8: 0xE043FF890007FF12 Ipa
    temp_35 = in_attr1.x;
    // 0x0000E8: 0xE043FF8A0007FF17 Ipa
    temp_36 = in_attr2.x;
    // 0x0000F0: 0xE043FF894007FF13 Ipa
    temp_37 = in_attr1.y;
    // 0x0000F8: 0xE043FF880007FF1A Ipa
    temp_38 = in_attr0.x;
    // 0x000108: 0xE043FF8A4007FF16 Ipa
    temp_39 = in_attr2.y;
    // 0x000110: 0xE043FF898007FF0D Ipa
    temp_40 = in_attr1.z;
    // 0x000118: 0xE043FF884007FF1D Ipa
    temp_41 = in_attr0.y;
    // 0x000128: 0xE043FF8A8007FF15 Ipa
    temp_42 = in_attr2.z;
    // 0x000130: 0xE043FF888007FF1E Ipa
    temp_43 = in_attr0.z;
    // 0x000138: 0xE043FF8B0007FF30 Ipa
    temp_44 = in_attr3.x;
    // 0x000148: 0xE043FF8B4007FF2F Ipa
    temp_45 = in_attr3.y;
    // 0x000150: 0xE043FF8B8007FF2D Ipa
    temp_46 = in_attr3.z;
    // 0x000158: 0xE2900000DA000000 Ssy
    // 0x000168: 0x5C9807800FF70024 Mov
    // 0x000170: 0x5C9807800FF70025 Mov
    // 0x000178: 0x5C9807800FF70026 Mov
    // 0x000188: 0x5C6810000127120C Fmul
    temp_47 = temp_35 * temp_35;
    // 0x000190: 0x5C6810000177170F Fmul
    temp_48 = temp_36 * temp_36;
    // 0x000198: 0x5C68100001A71A18 Fmul
    temp_49 = temp_38 * temp_38;
    // 0x0001A8: 0x59A006000137130C Ffma
    temp_50 = fma(temp_37, temp_37, temp_47);
    // 0x0001B0: 0x59A007800167160E Ffma
    temp_51 = fma(temp_39, temp_39, temp_48);
    // 0x0001B8: 0x59A0060000D70D0F Ffma
    temp_52 = fma(temp_40, temp_40, temp_50);
    // 0x0001C8: 0x59A00C0001D71D0C Ffma
    temp_53 = fma(temp_41, temp_41, temp_49);
    // 0x0001D0: 0x5080000000570F18 Mufu
    temp_54 = inversesqrt(temp_52);
    // 0x0001D8: 0x59A0070001571519 Ffma
    temp_55 = fma(temp_42, temp_42, temp_51);
    // 0x0001E8: 0x508000000057191C Mufu
    temp_56 = inversesqrt(temp_55);
    // 0x0001F0: 0x59A0060001E71E1F Ffma
    temp_57 = fma(temp_43, temp_43, temp_53);
    // 0x0001F8: 0x5080000000571F1F Mufu
    temp_58 = inversesqrt(temp_57);
    // 0x000208: 0x5C6810000187120E Fmul
    temp_59 = temp_35 * temp_54;
    // 0x000210: 0x5C6810000187130C Fmul
    temp_60 = temp_37 * temp_54;
    // 0x000218: 0x5C68100001870D0D Fmul
    temp_61 = temp_40 * temp_54;
    // 0x000228: 0x5C68100003073018 Fmul
    temp_62 = temp_44 * temp_44;
    // 0x000230: 0x5C68100001C71512 Fmul
    temp_63 = temp_42 * temp_56;
    // 0x000238: 0x5C68100001C71616 Fmul
    temp_64 = temp_39 * temp_56;
    // 0x000248: 0x5C68100001C71717 Fmul
    temp_65 = temp_36 * temp_56;
    // 0x000250: 0x5C68100001F71A15 Fmul
    temp_66 = temp_38 * temp_58;
    // 0x000258: 0x59A00C0002F72F1A Ffma
    temp_67 = fma(temp_45, temp_45, temp_62);
    // 0x000268: 0x5C68100001F71D0F Fmul
    temp_68 = temp_41 * temp_58;
    // 0x000270: 0x5C68100001F71E13 Fmul
    temp_69 = temp_43 * temp_58;
    // 0x000278: 0x59A00D0002D72D1A Ffma
    temp_70 = fma(temp_46, temp_46, temp_67);
    // 0x000288: 0x5080000000571A1A Mufu
    temp_71 = inversesqrt(temp_70);
    // 0x000290: 0x5C69100001A73030 Fmul
    temp_72 = 0.0 - temp_71;
    temp_73 = temp_44 * temp_72;
    // 0x000298: 0x5C69100001A72F2F Fmul
    temp_74 = 0.0 - temp_71;
    temp_75 = temp_45 * temp_74;
    // 0x0002A8: 0x5C69100001A72D2D Fmul
    temp_76 = 0.0 - temp_71;
    temp_77 = temp_46 * temp_76;
    // 0x0002B0: 0x4C58301805C73019 Fadd
    temp_78 = 0.0 - fp_c6.data[23].x;
    temp_79 = temp_73 + temp_78;
    // 0x0002B8: 0x4C58301805D72F1A Fadd
    temp_80 = 0.0 - fp_c6.data[23].y;
    temp_81 = temp_75 + temp_80;
    // 0x0002C8: 0x4C58301805E72D1C Fadd
    temp_82 = 0.0 - fp_c6.data[23].z;
    temp_83 = temp_77 + temp_82;
    // 0x0002D0: 0x3868104110070A0A Fmul
    temp_84 = temp_7 * 9.0;
    // 0x0002D8: 0x5CA8148000A70A0A F2f
    temp_85 = floor(temp_84);
    // 0x0002E8: 0xF0F0000034170000 Depbar
    // 0x0002F0: 0x5C68100000770718 Fmul
    temp_86 = temp_19 * temp_19;
    // 0x0002F8: 0x49A0031407C70808 Ffma
    temp_87 = fma(temp_21, fp_c5.data[31].x, temp_18);
    // 0x000308: 0x49A0039407C70909 Ffma
    temp_88 = fma(temp_22, fp_c5.data[31].x, temp_19);
    // 0x000310: 0x5C68100001971907 Fmul
    temp_89 = temp_79 * temp_79;
    // 0x000318: 0x4C6810180A070202 Fmul
    temp_90 = temp_24 * fp_c6.data[40].x;
    // 0x000328: 0x4C68101403271B1B Fmul
    temp_91 = temp_30 * fp_c5.data[12].z;
    // 0x000330: 0x59A00C0000670618 Ffma
    temp_92 = fma(temp_18, temp_18, temp_86);
    // 0x000338: 0x5C68100000870806 Fmul
    temp_93 = temp_87 * temp_87;
    // 0x000348: 0x385D103F80070101 Fadd
    temp_94 = 0.0 - temp_26;
    temp_95 = temp_94 + 1.0;
    temp_96 = clamp(temp_95, 0.0, 1.0);
    // 0x000350: 0x59A0038001A71A07 Ffma
    temp_97 = fma(temp_81, temp_81, temp_89);
    // 0x000358: 0x386013BF80070202 Fmnmx
    temp_98 = min(temp_90, 1.0);
    // 0x000368: 0x385D103F80071818 Fadd
    temp_99 = 0.0 - temp_92;
    temp_100 = temp_99 + 1.0;
    temp_101 = clamp(temp_100, 0.0, 1.0);
    // 0x000370: 0x59A0030000970906 Ffma
    temp_102 = fma(temp_88, temp_88, temp_93);
    // 0x000378: 0x5080000000871818 Mufu
    temp_103 = sqrt(temp_101);
    // 0x000388: 0x59A0038001C71C1D Ffma
    temp_104 = fma(temp_83, temp_83, temp_97);
    // 0x000390: 0x5080000000571D1F Mufu
    temp_105 = inversesqrt(temp_104);
    // 0x000398: 0x4C58301407871B1D Fadd
    temp_106 = 0.0 - fp_c5.data[30].x;
    temp_107 = temp_91 + temp_106;
    // 0x0003A8: 0x59A0030001871806 Ffma
    temp_108 = fma(temp_103, temp_103, temp_102);
    // 0x0003B0: 0x5080000000570606 Mufu
    temp_109 = inversesqrt(temp_108);
    // 0x0003B8: 0x5C68100001F71919 Fmul
    temp_110 = temp_79 * temp_105;
    // 0x0003C8: 0x5C68100001F71A1A Fmul
    temp_111 = temp_81 * temp_105;
    // 0x0003D0: 0x51A00E940787031D Ffma
    temp_112 = fma(temp_25, temp_107, fp_c5.data[30].x);
    // 0x0003D8: 0x5C68100000670909 Fmul
    temp_113 = temp_88 * temp_109;
    // 0x0003E8: 0x5C68100000670807 Fmul
    temp_114 = temp_87 * temp_109;
    // 0x0003F0: 0x5C68100000671818 Fmul
    temp_115 = temp_103 * temp_109;
    // 0x0003F8: 0x5C68100001F71C06 Fmul
    temp_116 = temp_83 * temp_105;
    // 0x000408: 0x5C68100001770908 Fmul
    temp_117 = temp_113 * temp_65;
    // 0x000410: 0x5C68100001670916 Fmul
    temp_118 = temp_113 * temp_64;
    // 0x000418: 0x5C68100001270912 Fmul
    temp_119 = temp_113 * temp_63;
    // 0x000428: 0x5C68100001973009 Fmul
    temp_120 = temp_73 * temp_110;
    // 0x000430: 0x4C68101403070417 Fmul
    temp_121 = temp_28 * fp_c5.data[12].x;
    // 0x000438: 0x59A0040000E7070E Ffma
    temp_122 = fma(temp_114, temp_59, temp_117);
    // 0x000448: 0x59A00B0000C70716 Ffma
    temp_123 = fma(temp_114, temp_60, temp_118);
    // 0x000450: 0x59A0090000D7070D Ffma
    temp_124 = fma(temp_114, temp_61, temp_119);
    // 0x000458: 0x4C69101805C71907 Fmul
    temp_125 = 0.0 - fp_c6.data[23].x;
    temp_126 = temp_110 * temp_125;
    // 0x000468: 0x59A0048001A72F0C Ffma
    temp_127 = fma(temp_75, temp_111, temp_120);
    // 0x000470: 0x01040DF760C7F009 Mov32i
    // 0x000478: 0x59A007000157180E Ffma
    temp_128 = fma(temp_115, temp_66, temp_122);
    // 0x000488: 0x59A00B0000F7180F Ffma
    temp_129 = fma(temp_115, temp_68, temp_123);
    // 0x000490: 0x59A0068001371813 Ffma
    temp_130 = fma(temp_115, temp_69, temp_124);
    // 0x000498: 0x49A1039805D71A07 Ffma
    temp_131 = 0.0 - fp_c6.data[23].y;
    temp_132 = fma(temp_111, temp_131, temp_126);
    // 0x0004A8: 0x59A4060000672D0C Ffma
    temp_133 = fma(temp_77, temp_116, temp_127);
    temp_134 = clamp(temp_133, 0.0, 1.0);
    // 0x0004B0: 0x4C60178400170216 Fmnmx
    temp_135 = max(temp_98, fp_c1.data[0].y);
    // 0x0004B8: 0x5C68100000E70E08 Fmul
    temp_136 = temp_128 * temp_128;
    // 0x0004C8: 0x49A5039805E70607 Ffma
    temp_137 = 0.0 - fp_c6.data[23].z;
    temp_138 = fma(temp_116, temp_137, temp_132);
    temp_139 = clamp(temp_138, 0.0, 1.0);
    // 0x0004D0: 0x49A2048400070C0D Ffma
    temp_140 = fma(temp_134, fp_c1.data[0].x, -6.98316002);
    // 0x0004D8: 0x59A0040000F70F08 Ffma
    temp_141 = fma(temp_129, temp_129, temp_136);
    // 0x0004E8: 0x49A2048400070709 Ffma
    temp_142 = fma(temp_139, fp_c1.data[0].x, -6.98316002);
    // 0x0004F0: 0x5C68100000D70C0D Fmul
    temp_143 = temp_134 * temp_140;
    // 0x0004F8: 0x59A0040001371308 Ffma
    temp_144 = fma(temp_130, temp_130, temp_141);
    // 0x000508: 0x5080000000570808 Mufu
    temp_145 = inversesqrt(temp_144);
    // 0x000510: 0x5C68100000970707 Fmul
    temp_146 = temp_139 * temp_142;
    // 0x000518: 0x3868104180070B09 Fmul
    temp_147 = temp_6 * 16.0;
    // 0x000528: 0x5CA8148000970A09 F2f
    temp_148 = floor(temp_147);
    // 0x000530: 0x5C68100000870E12 Fmul
    temp_149 = temp_128 * temp_145;
    // 0x000538: 0x5C68100000870F15 Fmul
    temp_150 = temp_129 * temp_145;
    // 0x000548: 0x5C68100000871313 Fmul
    temp_151 = temp_130 * temp_145;
    // 0x000550: 0x5C9000800077000F Rro
    // 0x000558: 0x32A004C180070A0C Ffma
    temp_152 = fma(temp_85, 16.0, temp_148);
    // 0x000568: 0x5080000000270F0F Mufu
    temp_153 = exp2(temp_146);
    // 0x000570: 0x5C6810000197120B Fmul
    temp_154 = temp_149 * temp_110;
    // 0x000578: 0x5CB0118000C70A0C F2i
    temp_155 = trunc(temp_152);
    temp_156 = max(temp_155, 0.0);
    temp_157 = uint(temp_156);
    // 0x000588: 0x5C68100001273002 Fmul
    temp_158 = temp_73 * temp_149;
    // 0x000590: 0x4C69101805C71204 Fmul
    temp_159 = 0.0 - fp_c6.data[23].x;
    temp_160 = temp_149 * temp_159;
    // 0x000598: 0x4C58301407871719 Fadd
    temp_161 = 0.0 - fp_c5.data[30].x;
    temp_162 = temp_121 + temp_161;
    // 0x0005A8: 0x59A0058001A71508 Ffma
    temp_163 = fma(temp_150, temp_111, temp_154);
    // 0x0005B0: 0x0103F0000007F00B Mov32i
    // 0x0005B8: 0x59A0010001572F18 Ffma
    temp_164 = fma(temp_75, temp_150, temp_158);
    // 0x0005C8: 0x5C90008000D70002 Rro
    // 0x0005D0: 0x49A1021805D71504 Ffma
    temp_165 = 0.0 - fp_c6.data[23].y;
    temp_166 = fma(temp_150, temp_165, temp_160);
    // 0x0005D8: 0x5080000000270202 Mufu
    temp_167 = exp2(temp_143);
    // 0x0005E8: 0x59A4040000671308 Ffma
    temp_168 = fma(temp_151, temp_116, temp_163);
    temp_169 = clamp(temp_168, 0.0, 1.0);
    // 0x0005F0: 0x51A40B0400171606 Ffma
    temp_170 = fma(temp_135, temp_135, fp_c1.data[0].y);
    temp_171 = clamp(temp_170, 0.0, 1.0);
    // 0x0005F8: 0x32A005BF0007160E Ffma
    temp_172 = fma(temp_135, 0.5, 0.5);
    // 0x000608: 0x59A40C0001372D18 Ffma
    temp_173 = fma(temp_77, temp_151, temp_164);
    temp_174 = clamp(temp_173, 0.0, 1.0);
    // 0x000610: 0x51A00C9407870319 Ffma
    temp_175 = fma(temp_25, temp_162, fp_c5.data[30].x);
    // 0x000618: 0x3848000000870C0B Shl
    temp_176 = int(temp_157) << 8;
    // 0x000628: 0x49A5021805E71304 Ffma
    temp_177 = 0.0 - fp_c6.data[23].z;
    temp_178 = fma(temp_151, temp_177, temp_166);
    temp_179 = clamp(temp_178, 0.0, 1.0);
    // 0x000630: 0x5C68100000670609 Fmul
    temp_180 = temp_171 * temp_171;
    // 0x000638: 0xEF94008200470B0B Ldc
    temp_181 = temp_176 + 0x2004;
    temp_182 = uint(temp_181) >> 2;
    temp_183 = temp_182 >> 2;
    temp_184 = int(temp_182) & 3;
    temp_185 = fp_c8.data[int(temp_183)][temp_184];
    // 0x000648: 0x5C68120000E70E0E Fmul
    temp_186 = temp_172 * 0.5;
    temp_187 = temp_186 * temp_172;
    // 0x000650: 0x4C6810140317051A Fmul
    temp_188 = temp_29 * fp_c5.data[12].y;
    // 0x000658: 0x59A1010000271907 Ffma
    temp_189 = 0.0 - temp_167;
    temp_190 = fma(temp_175, temp_189, temp_167);
    // 0x000668: 0x4C68101801470405 Fmul
    temp_191 = temp_179 * fp_c6.data[5].x;
    // 0x000670: 0x5C6810000187152E Fmul
    temp_192 = temp_150 * temp_174;
    // 0x000678: 0x59A204000097080A Ffma
    temp_193 = 0.0 - temp_169;
    temp_194 = fma(temp_169, temp_180, temp_193);
    // 0x000688: 0x59A10C0000E71809 Ffma
    temp_195 = 0.0 - temp_187;
    temp_196 = fma(temp_174, temp_195, temp_174);
    // 0x000690: 0x4C58301407871A1C Fadd
    temp_197 = 0.0 - fp_c5.data[30].x;
    temp_198 = temp_188 + temp_197;
    // 0x000698: 0x5C58100000771907 Fadd
    temp_199 = temp_175 + temp_190;
    // 0x0006A8: 0x1E23EA2F98370505 Fmul32i
    temp_200 = temp_191 * 0.318309873;
    // 0x0006B0: 0x32A217C000072E2E Ffma
    temp_201 = 0.0 - temp_75;
    temp_202 = fma(temp_192, 2.0, temp_201);
    // 0x0006B8: 0x51A005040027080A Ffma
    temp_203 = fma(temp_169, temp_194, fp_c1.data[0].z);
    // 0x0006C8: 0x59A1020000E70408 Ffma
    temp_204 = 0.0 - temp_187;
    temp_205 = fma(temp_179, temp_204, temp_179);
    // 0x0006D0: 0x5080000000470A0D Mufu
    temp_206 = 1.0 / temp_203;
    // 0x0006D8: 0x5C58100000970E09 Fadd
    temp_207 = temp_187 + temp_196;
    // 0x0006E8: 0x4C68101406270707 Fmul
    temp_208 = temp_199 * fp_c5.data[24].z;
    // 0x0006F0: 0x5080000000470909 Mufu
    temp_209 = 1.0 / temp_207;
    // 0x0006F8: 0x51A00E140787031C Ffma
    temp_210 = fma(temp_25, temp_198, fp_c5.data[30].x);
    // 0x000708: 0x5C58100000870E08 Fadd
    temp_211 = temp_187 + temp_205;
    // 0x000710: 0x5080000000470808 Mufu
    temp_212 = 1.0 / temp_211;
    // 0x000718: 0x59A102800077051E Ffma
    temp_213 = 0.0 - temp_208;
    temp_214 = fma(temp_200, temp_213, temp_200);
    // 0x000728: 0x59A1010000271C05 Ffma
    temp_215 = 0.0 - temp_167;
    temp_216 = fma(temp_210, temp_215, temp_167);
    // 0x000730: 0x59A1010000271D02 Ffma
    temp_217 = 0.0 - temp_167;
    temp_218 = fma(temp_112, temp_217, temp_167);
    // 0x000738: 0x5C68100000D70606 Fmul
    temp_219 = temp_171 * temp_206;
    // 0x000748: 0x59A1078000F71C0D Ffma
    temp_220 = 0.0 - temp_153;
    temp_221 = fma(temp_210, temp_220, temp_153);
    // 0x000750: 0x3868103F0007090A Fmul
    temp_222 = temp_209 * 0.5;
    // 0x000758: 0x5C68100000670607 Fmul
    temp_223 = temp_219 * temp_219;
    // 0x000768: 0x5C58100000D71C0D Fadd
    temp_224 = temp_210 + temp_221;
    // 0x000770: 0x5C68100000870A06 Fmul
    temp_225 = temp_222 * temp_212;
    // 0x000778: 0x59A1078000F71908 Ffma
    temp_226 = 0.0 - temp_153;
    temp_227 = fma(temp_175, temp_226, temp_153);
    // 0x000788: 0x59A1078000F71D0F Ffma
    temp_228 = 0.0 - temp_153;
    temp_229 = fma(temp_112, temp_228, temp_153);
    // 0x000790: 0x4C68101406270D0D Fmul
    temp_230 = temp_224 * fp_c5.data[24].z;
    // 0x000798: 0x5C68100000770609 Fmul
    temp_231 = temp_225 * temp_223;
    // 0x0007A8: 0x5C58100000271D07 Fadd
    temp_232 = temp_112 + temp_218;
    // 0x0007B0: 0x5C58100000571C06 Fadd
    temp_233 = temp_210 + temp_216;
    // 0x0007B8: 0x4C68101801570402 Fmul
    temp_234 = temp_179 * fp_c6.data[5].y;
    // 0x0007C8: 0x5C58100000F71D0F Fadd
    temp_235 = temp_112 + temp_229;
    // 0x0007D0: 0x5C58100000871908 Fadd
    temp_236 = temp_175 + temp_227;
    // 0x0007D8: 0x4C68101801670405 Fmul
    temp_237 = temp_179 * fp_c6.data[5].z;
    // 0x0007E8: 0x4C68101801570D0D Fmul
    temp_238 = temp_230 * fp_c6.data[5].y;
    // 0x0007F0: 0x4C6810140627061F Fmul
    temp_239 = temp_233 * fp_c5.data[24].z;
    // 0x0007F8: 0x1E23EA2F98370202 Fmul32i
    temp_240 = temp_234 * 0.318309873;
    // 0x000808: 0x4C68101406270F0F Fmul
    temp_241 = temp_235 * fp_c5.data[24].z;
    // 0x000810: 0x4C68101406270808 Fmul
    temp_242 = temp_236 * fp_c5.data[24].z;
    // 0x000818: 0x5C68100000970406 Fmul
    temp_243 = temp_179 * temp_231;
    // 0x000828: 0x49A2009402D70104 Ffma
    temp_244 = 0.0 - temp_96;
    temp_245 = fma(temp_96, fp_c5.data[11].y, temp_244);
    // 0x000830: 0x4C68101406270707 Fmul
    temp_246 = temp_232 * fp_c5.data[24].z;
    // 0x000838: 0x59A1010001F7021F Ffma
    temp_247 = 0.0 - temp_239;
    temp_248 = fma(temp_240, temp_247, temp_240);
    // 0x000848: 0x4C68101801670F0F Fmul
    temp_249 = temp_241 * fp_c6.data[5].z;
    // 0x000850: 0x49A2009402C70102 Ffma
    temp_250 = 0.0 - temp_96;
    temp_251 = fma(temp_96, fp_c5.data[11].x, temp_250);
    // 0x000858: 0x4C68101801470808 Fmul
    temp_252 = temp_242 * fp_c6.data[5].x;
    // 0x000868: 0x5B6603800FF70B07 Isetp
    temp_253 = floatBitsToUint(temp_185) <= 0u;
    // 0x000870: 0x49A2009402E70101 Ffma
    temp_254 = 0.0 - temp_96;
    temp_255 = fma(temp_96, fp_c5.data[11].z, temp_254);
    // 0x000878: 0x5C68100000670D2A Fmul
    temp_256 = temp_238 * temp_243;
    // 0x000888: 0x5C68100000670F2C Fmul
    temp_257 = temp_249 * temp_243;
    // 0x000890: 0x1E23EA2F98370505 Fmul32i
    temp_258 = temp_237 * 0.318309873;
    // 0x000898: 0x5C68100000670808 Fmul
    temp_259 = temp_252 * temp_243;
    // 0x0008A8: 0x3858103F80070202 Fadd
    temp_260 = temp_251 + 1.0;
    // 0x0008B0: 0x3858103F80070404 Fadd
    temp_261 = temp_245 + 1.0;
    // 0x0008B8: 0x3858103F80070101 Fadd
    temp_262 = temp_255 + 1.0;
    // 0x0008C8: 0x5C6810000187120D Fmul
    temp_263 = temp_149 * temp_174;
    // 0x0008D0: 0x5C6810000187130F Fmul
    temp_264 = temp_151 * temp_174;
    // 0x0008D8: 0x59A1028000770520 Ffma
    temp_265 = 0.0 - temp_246;
    temp_266 = fma(temp_258, temp_265, temp_258);
    // 0x0008E8: 0x59A4010000271727 Ffma
    temp_267 = fma(temp_121, temp_260, temp_260);
    temp_268 = clamp(temp_267, 0.0, 1.0);
    // 0x0008F0: 0x59A4020000471A28 Ffma
    temp_269 = fma(temp_188, temp_261, temp_261);
    temp_270 = clamp(temp_269, 0.0, 1.0);
    // 0x0008F8: 0x59A4008000171B29 Ffma
    temp_271 = fma(temp_91, temp_262, temp_262);
    temp_272 = clamp(temp_271, 0.0, 1.0);
    // 0x000908: 0x32A2184000070D0D Ffma
    temp_273 = 0.0 - temp_73;
    temp_274 = fma(temp_263, 2.0, temp_273);
    // 0x000910: 0x32A216C000070F0F Ffma
    temp_275 = 0.0 - temp_77;
    temp_276 = fma(temp_264, 2.0, temp_275);
    // 0x000918: 0x1E23E22F98372A2A Fmul32i
    temp_277 = temp_256 * 0.159154937;
    // 0x000928: 0x1E23E22F9837082B Fmul32i
    temp_278 = temp_259 * 0.159154937;
    // 0x000930: 0x1E23E22F98372C2C Fmul32i
    temp_279 = temp_257 * 0.159154937;
    // 0x000938: 0xF0F800000000000F Sync
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
    if (!temp_253)
    {
        // 0x000948: 0x5C9807800FF70032 Mov
        // 0x000950: 0xE043FF8D0007FF09 Ipa
        temp_292 = in_attr5.x;
        // 0x000958: 0xE043FF8D4007FF08 Ipa
        temp_293 = in_attr5.y;
        // 0x000968: 0xE043FF8D8007FF02 Ipa
        temp_294 = in_attr5.z;
        temp_295 = 0;
        do
        {
            // 0x000970: 0x5C18020003270C36 Iscadd
            temp_297 = int(temp_157) << 4;
            temp_298 = temp_297 + temp_295;
            // 0x000978: 0xE290000057000000 Ssy
            // 0x000988: 0x1C00000000173232 Iadd32i
            temp_299 = temp_295 + 1;
            // 0x000990: 0x3848000000473636 Shl
            temp_300 = temp_298 << 4;
            // 0x000998: 0x5B6C038000B7320F Isetp
            temp_296 = uint(temp_299) >= floatBitsToUint(temp_185);
            // 0x0009A8: 0xEF94008200073631 Ldc
            temp_301 = temp_300 + 0x2000;
            temp_302 = uint(temp_301) >> 2;
            temp_303 = temp_302 >> 2;
            temp_304 = int(temp_302) & 3;
            temp_305 = fp_c8.data[int(temp_303)][temp_304];
            // 0x0009B0: 0x3848000000673131 Shl
            temp_306 = floatBitsToInt(temp_305) << 6;
            // 0x0009B8: 0xEF95008001073100 Ldc
            temp_307 = temp_306 + 16;
            temp_308 = uint(temp_307) >> 2;
            temp_309 = temp_308 >> 2;
            temp_310 = int(temp_308) & 3;
            temp_311 = fp_c8.data[int(temp_309)][temp_310];
            temp_312 = int(temp_308) + 1;
            temp_313 = uint(temp_312) >> 2;
            temp_314 = temp_312 & 3;
            temp_315 = fp_c8.data[int(temp_313)][temp_314];
            // 0x0009C8: 0xEF95008001873104 Ldc
            temp_316 = temp_306 + 24;
            temp_317 = uint(temp_316) >> 2;
            temp_318 = temp_317 >> 2;
            temp_319 = int(temp_317) & 3;
            temp_320 = fp_c8.data[int(temp_318)][temp_319];
            temp_321 = int(temp_317) + 1;
            temp_322 = uint(temp_321) >> 2;
            temp_323 = temp_321 & 3;
            temp_324 = fp_c8.data[int(temp_322)][temp_323];
            // 0x0009D0: 0xEF95008002073106 Ldc
            temp_325 = temp_306 + 32;
            temp_326 = uint(temp_325) >> 2;
            temp_327 = temp_326 >> 2;
            temp_328 = int(temp_326) & 3;
            temp_329 = fp_c8.data[int(temp_327)][temp_328];
            temp_330 = int(temp_326) + 1;
            temp_331 = uint(temp_330) >> 2;
            temp_332 = temp_330 & 3;
            temp_333 = fp_c8.data[int(temp_331)][temp_332];
            // 0x0009D8: 0x5C58300000970033 Fadd
            temp_334 = 0.0 - temp_292;
            temp_335 = temp_311 + temp_334;
            // 0x0009E8: 0x5C58300000870134 Fadd
            temp_336 = 0.0 - temp_293;
            temp_337 = temp_315 + temp_336;
            // 0x0009F0: 0x5C58300000270404 Fadd
            temp_338 = 0.0 - temp_294;
            temp_339 = temp_320 + temp_338;
            // 0x0009F8: 0x5C68100003373301 Fmul
            temp_340 = temp_335 * temp_335;
            // 0x000A08: 0x59A1020000470500 Ffma
            temp_341 = 0.0 - temp_339;
            temp_342 = fma(temp_324, temp_341, temp_339);
            // 0x000A10: 0x59A0008003473405 Ffma
            temp_343 = fma(temp_337, temp_337, temp_340);
            // 0x000A18: 0x59A0028000070035 Ffma
            temp_344 = fma(temp_342, temp_342, temp_343);
            // 0x000A28: 0x5080000000573501 Mufu
            temp_345 = inversesqrt(temp_344);
            // 0x000A30: 0x5080000000873536 Mufu
            temp_346 = sqrt(temp_344);
            // 0x000A38: 0x5C68100000173337 Fmul
            temp_347 = temp_335 * temp_345;
            // 0x000A48: 0x5C68100000170000 Fmul
            temp_348 = temp_342 * temp_345;
            // 0x000A50: 0x5C68100000173401 Fmul
            temp_349 = temp_337 * temp_345;
            // 0x000A58: 0x5C69100000673706 Fmul
            temp_350 = 0.0 - temp_329;
            temp_351 = temp_347 * temp_350;
            // 0x000A68: 0x59A1030000770106 Ffma
            temp_352 = 0.0 - temp_333;
            temp_353 = fma(temp_349, temp_352, temp_351);
            // 0x000A70: 0xEF94008002873101 Ldc
            temp_354 = temp_306 + 40;
            temp_355 = uint(temp_354) >> 2;
            temp_356 = temp_355 >> 2;
            temp_357 = int(temp_355) & 3;
            temp_358 = fp_c8.data[int(temp_356)][temp_357];
            // 0x000A78: 0x59A1030000170006 Ffma
            temp_359 = 0.0 - temp_358;
            temp_360 = fma(temp_348, temp_359, temp_353);
            // 0x000A88: 0xEF95008003873100 Ldc
            temp_361 = temp_306 + 56;
            temp_362 = uint(temp_361) >> 2;
            temp_363 = temp_362 >> 2;
            temp_364 = int(temp_362) & 3;
            temp_365 = fp_c8.data[int(temp_363)][temp_364];
            temp_366 = int(temp_362) + 1;
            temp_367 = uint(temp_366) >> 2;
            temp_368 = temp_366 & 3;
            temp_369 = fp_c8.data[int(temp_367)][temp_368];
            // 0x000A90: 0x59A4008000070600 Ffma
            temp_370 = fma(temp_360, temp_365, temp_369);
            temp_371 = clamp(temp_370, 0.0, 1.0);
            // 0x000A98: 0x010404000007F006 Mov32i
            // 0x000AA8: 0x5C68100000070007 Fmul
            temp_372 = temp_371 * temp_371;
            // 0x000AB0: 0x33A0034000070000 Ffma
            temp_373 = fma(temp_371, -2.0, 3.0);
            // 0x000AB8: 0x5C68100000070707 Fmul
            temp_374 = temp_372 * temp_373;
            // 0x000AC8: 0xEF95008003073100 Ldc
            temp_375 = temp_306 + 48;
            temp_376 = uint(temp_375) >> 2;
            temp_377 = temp_376 >> 2;
            temp_378 = int(temp_376) & 3;
            temp_379 = fp_c8.data[int(temp_377)][temp_378];
            temp_380 = int(temp_376) + 1;
            temp_381 = uint(temp_380) >> 2;
            temp_382 = temp_380 & 3;
            temp_383 = fp_c8.data[int(temp_381)][temp_382];
            // 0x000AD0: 0x59A4008003670037 Ffma
            temp_384 = fma(temp_379, temp_346, temp_383);
            temp_385 = clamp(temp_384, 0.0, 1.0);
            // 0x000AD8: 0x33A0034000073706 Ffma
            temp_386 = fma(temp_385, -2.0, 3.0);
            // 0x000AE8: 0x5C68100003773737 Fmul
            temp_387 = temp_385 * temp_385;
            // 0x000AF0: 0x5C68100000673706 Fmul
            temp_388 = temp_387 * temp_386;
            // 0x000AF8: 0x5C68100000670707 Fmul
            temp_389 = temp_374 * temp_388;
            // 0x000B08: 0x39585042F0070406 Fadd
            temp_390 = abs(temp_339);
            temp_391 = temp_390 + -120.0;
            // 0x000B10: 0x1EABD4CCCCD70606 Fmul32i
            temp_392 = temp_391 * -0.0500000007;
            temp_393 = clamp(temp_392, 0.0, 1.0);
            // 0x000B18: 0x5C68100000670706 Fmul
            temp_394 = temp_389 * temp_393;
            // 0x000B28: 0x36247F9000170707 Xmad
            temp_395 = floatBitsToUint(temp_389) >> 16;
            temp_396 = int(temp_395) << 16;
            // 0x000B30: 0x5BB383800FF70607 Fsetp
            temp_397 = temp_394 <= 0.0;
            // 0x000B38: 0x7A05083C0F00FF07 Hadd2
            temp_295 = temp_299;
            temp_398 = uint(temp_396);
            temp_399 = temp_280;
            temp_400 = temp_281;
            temp_401 = temp_282;
            temp_402 = temp_283;
            temp_403 = temp_284;
            temp_404 = temp_285;
            if (temp_397)
            {
                temp_405 = unpackHalf2x16(uint(temp_396)).y;
                temp_406 = packHalf2x16(vec2(1.0, temp_405));
                temp_398 = temp_406;
            }
            // 0x000B48: 0x5D2103902FF70707 Hsetp2
            temp_407 = unpackHalf2x16(temp_398).x;
            temp_408 = temp_407 == 0.0;
            // 0x000B50: 0xF0F800000008000F Sync
            if (temp_408)
            {
                // 0x000B58: 0x5080000000470000 Mufu
                temp_409 = 1.0 / temp_379;
                // 0x000B68: 0x5C69100000070101 Fmul
                temp_410 = 0.0 - temp_409;
                temp_411 = temp_383 * temp_410;
                // 0x000B70: 0x5C60138000170404 Fmnmx
                temp_412 = min(temp_339, temp_411);
                // 0x000B78: 0x5C61178000470104 Fmnmx
                temp_413 = 0.0 - temp_411;
                temp_414 = max(temp_413, temp_412);
                // 0x000B88: 0x59A0028000470405 Ffma
                temp_415 = fma(temp_414, temp_414, temp_343);
                // 0x000B90: 0x5080000000570536 Mufu
                temp_416 = inversesqrt(temp_415);
                // 0x000B98: 0x5080000000870505 Mufu
                temp_417 = sqrt(temp_415);
                // 0x000BA8: 0x5C68100003673333 Fmul
                temp_418 = temp_335 * temp_416;
                // 0x000BB0: 0x5C68100003673434 Fmul
                temp_419 = temp_337 * temp_416;
                // 0x000BB8: 0x5C68100003670436 Fmul
                temp_420 = temp_414 * temp_416;
                // 0x000BC8: 0x5C58100003373001 Fadd
                temp_421 = temp_73 + temp_418;
                // 0x000BD0: 0x5C58100003472F04 Fadd
                temp_422 = temp_75 + temp_419;
                // 0x000BD8: 0x5C58100003672D00 Fadd
                temp_423 = temp_77 + temp_420;
                // 0x000BE8: 0x5C68100000170107 Fmul
                temp_424 = temp_421 * temp_421;
                // 0x000BF0: 0x59A0038000470407 Ffma
                temp_425 = fma(temp_422, temp_422, temp_424);
                // 0x000BF8: 0x59A0038000070035 Ffma
                temp_426 = fma(temp_423, temp_423, temp_425);
                // 0x000C08: 0x5080000000573537 Mufu
                temp_427 = inversesqrt(temp_426);
                // 0x000C10: 0x5C68100003770101 Fmul
                temp_428 = temp_421 * temp_427;
                // 0x000C18: 0x5C68100003770407 Fmul
                temp_429 = temp_422 * temp_427;
                // 0x000C28: 0x5C68100003770000 Fmul
                temp_430 = temp_423 * temp_427;
                // 0x000C30: 0x5C68100003371237 Fmul
                temp_431 = temp_149 * temp_418;
                // 0x000C38: 0x5C68100000173304 Fmul
                temp_432 = temp_418 * temp_428;
                // 0x000C48: 0x59A0020000773433 Ffma
                temp_433 = fma(temp_419, temp_429, temp_432);
                // 0x000C50: 0x59A01B8003471534 Ffma
                temp_434 = fma(temp_150, temp_419, temp_431);
                // 0x000C58: 0xEF94008002C73137 Ldc
                temp_435 = temp_306 + 44;
                temp_436 = uint(temp_435) >> 2;
                temp_437 = temp_436 >> 2;
                temp_438 = int(temp_436) & 3;
                temp_439 = fp_c8.data[int(temp_437)][temp_438];
                // 0x000C68: 0x5C68100000171204 Fmul
                temp_440 = temp_149 * temp_428;
                // 0x000C70: 0x59A0020000771501 Ffma
                temp_441 = fma(temp_150, temp_429, temp_440);
                // 0x000C78: 0x59A01A0003671307 Ffma
                temp_442 = fma(temp_151, temp_420, temp_434);
                // 0x000C88: 0x59A4198000073634 Ffma
                temp_443 = fma(temp_420, temp_430, temp_433);
                temp_444 = clamp(temp_443, 0.0, 1.0);
                // 0x000C90: 0x51A40B0400171633 Ffma
                temp_445 = fma(temp_135, temp_135, fp_c1.data[0].y);
                temp_446 = clamp(temp_445, 0.0, 1.0);
                // 0x000C98: 0x59A4008000071335 Ffma
                temp_447 = fma(temp_151, temp_430, temp_441);
                temp_448 = clamp(temp_447, 0.0, 1.0);
                // 0x000CA8: 0x01040DF760C7F001 Mov32i
                // 0x000CB0: 0x5C68100003373336 Fmul
                temp_449 = temp_446 * temp_446;
                // 0x000CB8: 0x49A2008400073401 Ffma
                temp_450 = fma(temp_444, fp_c1.data[0].x, -6.98316002);
                // 0x000CC8: 0x59A21A8003573636 Ffma
                temp_451 = 0.0 - temp_448;
                temp_452 = fma(temp_449, temp_448, temp_451);
                // 0x000CD0: 0x5C68100000173434 Fmul
                temp_453 = temp_444 * temp_450;
                // 0x000CD8: 0x51A01B0400273535 Ffma
                temp_454 = fma(temp_448, temp_452, fp_c1.data[0].z);
                // 0x000CE8: 0x5080000000473535 Mufu
                temp_455 = 1.0 / temp_454;
                // 0x000CF0: 0x5C90008003470034 Rro
                // 0x000CF8: 0x5C68100003573333 Fmul
                temp_456 = temp_446 * temp_455;
                // 0x000D08: 0x5080000000473704 Mufu
                temp_457 = 1.0 / temp_439;
                // 0x000D10: 0x5C68100003373335 Fmul
                temp_458 = temp_456 * temp_456;
                // 0x000D18: 0x51A0028400370404 Ffma
                temp_459 = fma(temp_457, temp_417, fp_c1.data[0].w);
                // 0x000D28: 0xEF94008000873105 Ldc
                temp_460 = temp_306 + 8;
                temp_461 = uint(temp_460) >> 2;
                temp_462 = temp_461 >> 2;
                temp_463 = int(temp_461) & 3;
                temp_464 = fp_c8.data[int(temp_462)][temp_463];
                // 0x000D30: 0x5080000000470400 Mufu
                temp_465 = 1.0 / temp_459;
                // 0x000D38: 0x1E23FB3333370036 Fmul32i
                temp_466 = temp_465 * 1.39999998;
                // 0x000D48: 0xEF95008000073100 Ldc
                temp_467 = uint(temp_306) >> 2;
                temp_468 = temp_467 >> 2;
                temp_469 = int(temp_467) & 3;
                temp_470 = fp_c8.data[int(temp_468)][temp_469];
                temp_471 = int(temp_467) + 1;
                temp_472 = uint(temp_471) >> 2;
                temp_473 = temp_471 & 3;
                temp_474 = fp_c8.data[int(temp_472)][temp_473];
                // 0x000D50: 0x5C68100003673636 Fmul
                temp_475 = temp_466 * temp_466;
                // 0x000D58: 0x59A11B0003670704 Ffma
                temp_476 = 0.0 - temp_475;
                temp_477 = fma(temp_442, temp_476, temp_475);
                // 0x000D68: 0x5080000000273436 Mufu
                temp_478 = exp2(temp_453);
                // 0x000D70: 0x5C5C100000470704 Fadd
                temp_479 = temp_442 + temp_477;
                temp_480 = clamp(temp_479, 0.0, 1.0);
                // 0x000D78: 0x5C5C30000FF70707 Fadd
                temp_481 = temp_442 + -0.0;
                temp_482 = clamp(temp_481, 0.0, 1.0);
                // 0x000D88: 0x59A1038000770E37 Ffma
                temp_483 = 0.0 - temp_482;
                temp_484 = fma(temp_187, temp_483, temp_482);
                // 0x000D90: 0x5C58100003770E37 Fadd
                temp_485 = temp_187 + temp_484;
                // 0x000D98: 0x5080000000473737 Mufu
                temp_486 = 1.0 / temp_485;
                // 0x000DA8: 0x5C68100000570605 Fmul
                temp_487 = temp_394 * temp_464;
                // 0x000DB0: 0x5C68100003770A34 Fmul
                temp_488 = temp_222 * temp_486;
                // 0x000DB8: 0x5C68100000070633 Fmul
                temp_489 = temp_394 * temp_470;
                // 0x000DC8: 0x5C68100000170601 Fmul
                temp_490 = temp_394 * temp_474;
                // 0x000DD0: 0x59A11B0003671906 Ffma
                temp_491 = 0.0 - temp_478;
                temp_492 = fma(temp_175, temp_491, temp_478);
                // 0x000DD8: 0x5C68100003473500 Fmul
                temp_493 = temp_458 * temp_488;
                // 0x000DE8: 0x59A11B0003671C35 Ffma
                temp_494 = 0.0 - temp_478;
                temp_495 = fma(temp_210, temp_494, temp_478);
                // 0x000DF0: 0x59A11B0003671D36 Ffma
                temp_496 = 0.0 - temp_478;
                temp_497 = fma(temp_112, temp_496, temp_478);
                // 0x000DF8: 0x5C58100000671906 Fadd
                temp_498 = temp_175 + temp_492;
                // 0x000E08: 0x5C68100000070700 Fmul
                temp_499 = temp_482 * temp_493;
                // 0x000E10: 0x5C58100003571C35 Fadd
                temp_500 = temp_210 + temp_495;
                // 0x000E18: 0x5C58100003671D36 Fadd
                temp_501 = temp_112 + temp_497;
                // 0x000E28: 0x4C68101406270606 Fmul
                temp_502 = temp_498 * fp_c5.data[24].z;
                // 0x000E30: 0x4C68101406273534 Fmul
                temp_503 = temp_500 * fp_c5.data[24].z;
                // 0x000E38: 0x4C68101406273636 Fmul
                temp_504 = temp_501 * fp_c5.data[24].z;
                // 0x000E48: 0x5C68100003370631 Fmul
                temp_505 = temp_502 * temp_489;
                // 0x000E50: 0x5C68100000473333 Fmul
                temp_506 = temp_489 * temp_480;
                // 0x000E58: 0x5C68100000173406 Fmul
                temp_507 = temp_503 * temp_490;
                // 0x000E68: 0x5C68100000573607 Fmul
                temp_508 = temp_504 * temp_487;
                // 0x000E70: 0x5C68100000470101 Fmul
                temp_509 = temp_490 * temp_480;
                // 0x000E78: 0x5C68100000470504 Fmul
                temp_510 = temp_487 * temp_480;
                // 0x000E88: 0x5C68100000073131 Fmul
                temp_511 = temp_505 * temp_499;
                // 0x000E90: 0x49A0108400573321 Ffma
                temp_512 = fma(temp_506, fp_c1.data[1].y, temp_280);
                // 0x000E98: 0x5C68100000070606 Fmul
                temp_513 = temp_507 * temp_499;
                // 0x000EA8: 0x5C68100000070707 Fmul
                temp_514 = temp_508 * temp_499;
                // 0x000EB0: 0x49A0110400570122 Ffma
                temp_515 = fma(temp_509, fp_c1.data[1].y, temp_281);
                // 0x000EB8: 0x49A0118400570423 Ffma
                temp_516 = fma(temp_510, fp_c1.data[1].y, temp_282);
                // 0x000EC8: 0x49A0120400473124 Ffma
                temp_517 = fma(temp_511, fp_c1.data[1].x, temp_283);
                // 0x000ED0: 0x49A0128400470625 Ffma
                temp_518 = fma(temp_513, fp_c1.data[1].x, temp_284);
                // 0x000ED8: 0x49A0130400470726 Ffma
                temp_519 = fma(temp_514, fp_c1.data[1].x, temp_285);
                // 0x000EE8: 0xF0F800000007000F Sync
                temp_399 = temp_512;
                temp_400 = temp_515;
                temp_401 = temp_516;
                temp_402 = temp_517;
                temp_403 = temp_518;
                temp_404 = temp_519;
            }
            // 0x000EF0: 0xE2400FFFA789000F Bra
            temp_280 = temp_399;
            temp_281 = temp_400;
            temp_282 = temp_401;
            temp_283 = temp_402;
            temp_284 = temp_403;
            temp_285 = temp_404;
            temp_286 = temp_399;
            temp_287 = temp_400;
            temp_288 = temp_401;
            temp_289 = temp_402;
            temp_290 = temp_403;
            temp_291 = temp_404;
        }
        while (!temp_296);
        // 0x000EF8: 0xF0F800000007000F Sync
    }
    // 0x000F08: 0x5C62578002E70D01 Fmnmx
    temp_520 = abs(temp_274);
    temp_521 = abs(temp_202);
    temp_522 = max(temp_520, temp_521);
    // 0x000F10: 0xE003FF87CFF7FF07 Ipa
    // 0x000F18: 0x38681040E007162D Fmul
    temp_523 = temp_135 * 7.0;
    // 0x000F28: 0x5C62578001571200 Fmnmx
    temp_524 = abs(temp_149);
    temp_525 = abs(temp_150);
    temp_526 = max(temp_524, temp_525);
    // 0x000F30: 0x010000000017F00C Mov32i
    // 0x000F38: 0x386810408007160B Fmul
    temp_527 = temp_135 * 4.0;
    // 0x000F48: 0x4C98079C0207002F Mov
    // 0x000F50: 0x5C60578000170F02 Fmnmx
    temp_528 = abs(temp_276);
    temp_529 = max(temp_528, temp_522);
    // 0x000F58: 0x5C60578000071301 Fmnmx
    temp_530 = abs(temp_151);
    temp_531 = max(temp_530, temp_526);
    // 0x000F68: 0x5080000000470208 Mufu
    temp_532 = 1.0 / temp_529;
    // 0x000F70: 0x3859103F80071616 Fadd
    temp_533 = 0.0 - temp_135;
    temp_534 = temp_533 + 1.0;
    // 0x000F78: 0x5080000000470104 Mufu
    temp_535 = 1.0 / temp_531;
    // 0x000F88: 0x5C68100000870D0D Fmul
    temp_536 = temp_274 * temp_532;
    // 0x000F90: 0x5C68100000872E0E Fmul
    temp_537 = temp_202 * temp_532;
    // 0x000F98: 0x5080000000470707 Mufu
    // 0x000FA8: 0x5C69100000870F0F Fmul
    temp_538 = 0.0 - temp_532;
    temp_539 = temp_276 * temp_538;
    // 0x000FB0: 0x5C6910000047130A Fmul
    temp_540 = 0.0 - temp_535;
    temp_541 = temp_151 * temp_540;
    // 0x000FB8: 0x5C68100000471208 Fmul
    temp_542 = temp_149 * temp_535;
    // 0x000FC8: 0x5C68100000471509 Fmul
    temp_543 = temp_150 * temp_535;
    // 0x000FD0: 0xC0BA0163EFF70804 Tex
    temp_544 = textureLod(fp_t_tcb_16, vec3(temp_542, temp_543, temp_541), 0.0).xyz;
    temp_545 = temp_544.x;
    temp_546 = temp_544.y;
    temp_547 = temp_544.z;
    // 0x000FD8: 0xC1BA0143F2D70C0C Tex
    temp_548 = textureLod(fp_t_tcb_14, vec4(temp_536, temp_537, temp_539, float(1)), temp_523).xyz;
    temp_549 = temp_548.x;
    temp_550 = temp_548.y;
    temp_551 = temp_548.z;
    // 0x000FE8: 0xD9A20180B0A70812 Texs
    temp_552 = textureLod(fp_t_tcb_18, vec3(temp_542, temp_543, temp_541), temp_527).xyz;
    temp_553 = temp_552.x;
    temp_554 = temp_552.y;
    temp_555 = temp_552.z;
    // 0x000FF0: 0xE043FF920077FF00 Ipa
    temp_556 = in_attr10.x;
    // 0x000FF8: 0xE043FF924077FF01 Ipa
    temp_557 = in_attr10.y;
    // 0x001008: 0xE043FF928077FF02 Ipa
    temp_558 = in_attr10.z;
    // 0x001010: 0xDEBA0000C2F70000 TexB
    temp_559 = texture(fp_t_cb7_20, vec3(temp_556, temp_557, temp_558)).x;
    // 0x001018: 0x3859103F8007180F Fadd
    temp_560 = 0.0 - temp_174;
    temp_561 = temp_560 + 1.0;
    // 0x001028: 0x49A00F180A17211E Ffma
    temp_562 = fma(temp_286, fp_c6.data[40].y, temp_214);
    // 0x001030: 0x5C68100001671616 Fmul
    temp_563 = temp_534 * temp_534;
    // 0x001038: 0x010410676C97F021 Mov32i
    // 0x001048: 0x49A00F980A17221F Ffma
    temp_564 = fma(temp_287, fp_c6.data[40].y, temp_248);
    // 0x001050: 0x1E23E468DB971808 Fmul32i
    temp_565 = temp_174 * 0.193900004;
    // 0x001058: 0x4C9807980B470022 Mov
    // 0x001068: 0x49A010180A172320 Ffma
    temp_566 = fma(temp_288, fp_c6.data[40].y, temp_266);
    // 0x001070: 0x5C68100001671609 Fmul
    temp_567 = temp_563 * temp_563;
    // 0x001078: 0x0103E2CD9E87F016 Mov32i
    // 0x001088: 0x49A010840097180A Ffma
    temp_568 = fma(temp_174, fp_c1.data[2].y, 8.40400028);
    // 0x001090: 0x0103F0000007F023 Mov32i
    // 0x001098: 0xF0F0000034370000 Depbar
    // 0x0010A8: 0x51A211180B471111 Ffma
    temp_569 = 0.0 - fp_c6.data[45].x;
    temp_570 = fma(temp_33, fp_c6.data[45].x, temp_569);
    // 0x0010B0: 0x51A211180B471414 Ffma
    temp_571 = 0.0 - fp_c6.data[45].x;
    temp_572 = fma(temp_34, fp_c6.data[45].x, temp_571);
    // 0x0010B8: 0x51A211180B471010 Ffma
    temp_573 = 0.0 - fp_c6.data[45].x;
    temp_574 = fma(temp_32, fp_c6.data[45].x, temp_573);
    // 0x0010C8: 0x49A20B0400B70916 Ffma
    temp_575 = fma(temp_567, fp_c1.data[2].w, -0.168799996);
    // 0x0010D0: 0x4C68101809070F01 Fmul
    temp_576 = temp_561 * fp_c6.data[36].x;
    // 0x0010D8: 0x51A0050400A7180F Ffma
    temp_577 = fma(temp_174, temp_568, fp_c1.data[2].z);
    // 0x0010E8: 0xE04BFF904077FF0A Ipa
    temp_578 = in_attr8.y;
    temp_579 = clamp(temp_578, 0.0, 1.0);
    // 0x0010F0: 0x49A0040400670902 Ffma
    temp_580 = fma(temp_567, fp_c1.data[1].z, temp_565);
    // 0x0010F8: 0x5080400000370101 Mufu
    temp_581 = abs(temp_576);
    temp_582 = log2(temp_581);
    // 0x001108: 0x0104066978D7F022 Mov32i
    // 0x001110: 0x32A011BF00071508 Ffma
    temp_583 = fma(temp_150, 0.5, 0.5);
    // 0x001118: 0x5C68100001670916 Fmul
    temp_584 = temp_567 * temp_575;
    // 0x001128: 0x4C98079809770015 Mov
    // 0x001130: 0x51A0078400C7180F Ffma
    temp_585 = fma(temp_174, temp_577, fp_c1.data[3].x);
    // 0x001138: 0x088BF05D63970202 Fadd32i
    temp_586 = temp_580 + -0.522800028;
    // 0x001148: 0x49A2110400770922 Ffma
    temp_587 = fma(temp_567, fp_c1.data[1].w, -3.60299993);
    // 0x001150: 0x4C98079800970021 Mov
    // 0x001158: 0x4C98079800A70023 Mov
    // 0x001168: 0x4C58101407E71515 Fadd
    temp_588 = fp_c6.data[37].w + fp_c5.data[31].z;
    // 0x001170: 0x5C60138001670F0F Fmnmx
    temp_589 = min(temp_585, temp_584);
    // 0x001178: 0x5C68100000271818 Fmul
    temp_590 = temp_174 * temp_586;
    // 0x001188: 0x4C68101809170101 Fmul
    temp_591 = temp_582 * fp_c6.data[36].y;
    // 0x001190: 0x4C98079800870002 Mov
    // 0x001198: 0x51A0110400870922 Ffma
    temp_592 = fma(temp_567, temp_587, fp_c1.data[2].x);
    // 0x0011A8: 0x49A015980A17242B Ffma
    temp_593 = fma(temp_289, fp_c6.data[40].y, temp_278);
    // 0x0011B0: 0x4C98079407F70024 Mov
    // 0x0011B8: 0x49A015180A17252A Ffma
    temp_594 = fma(temp_290, fp_c6.data[40].y, temp_277);
    // 0x0011C8: 0x5C90008000170016 Rro
    // 0x0011D0: 0x4C59101800470201 Fadd
    temp_595 = 0.0 - fp_c6.data[2].x;
    temp_596 = temp_595 + fp_c6.data[1].x;
    // 0x0011D8: 0x5084000000271616 Mufu
    temp_597 = exp2(temp_591);
    temp_598 = clamp(temp_597, 0.0, 1.0);
    // 0x0011E8: 0x4C59101800572102 Fadd
    temp_599 = 0.0 - fp_c6.data[2].y;
    temp_600 = temp_599 + fp_c6.data[1].y;
    // 0x0011F0: 0x4C59101800672321 Fadd
    temp_601 = 0.0 - fp_c6.data[2].z;
    temp_602 = temp_601 + fp_c6.data[1].z;
    // 0x0011F8: 0x010404000007F023 Mov32i
    // 0x001208: 0x59A00C0002270918 Ffma
    temp_603 = fma(temp_567, temp_592, temp_590);
    // 0x001210: 0x4C68101406272424 Fmul
    temp_604 = fp_c5.data[31].w * fp_c5.data[24].z;
    // 0x001218: 0x51A0009800870801 Ffma
    temp_605 = fma(temp_583, temp_596, fp_c6.data[2].x);
    // 0x001228: 0x51A0011800970802 Ffma
    temp_606 = fma(temp_583, temp_600, fp_c6.data[2].y);
    // 0x001230: 0x51A0109800A70808 Ffma
    temp_607 = fma(temp_583, temp_602, fp_c6.data[2].z);
    // 0x001238: 0x33A011C000070A09 Ffma
    temp_608 = fma(temp_579, -2.0, 3.0);
    // 0x001248: 0x5C68100000A70A22 Fmul
    temp_609 = temp_579 * temp_579;
    // 0x001250: 0x386C104248071C21 Fmul
    temp_610 = temp_210 * 50.0;
    temp_611 = clamp(temp_610, 0.0, 1.0);
    // 0x001258: 0x4C5C100400D71818 Fadd
    temp_612 = temp_603 + fp_c1.data[3].y;
    temp_613 = clamp(temp_612, 0.0, 1.0);
    // 0x001268: 0x5C68100001671515 Fmul
    temp_614 = temp_588 * temp_598;
    // 0x001270: 0x5C5C30000FF70F16 Fadd
    temp_615 = temp_589 + -0.0;
    temp_616 = clamp(temp_615, 0.0, 1.0);
    // 0x001278: 0x49A016180A17262C Ffma
    temp_617 = fma(temp_291, fp_c6.data[40].y, temp_279);
    // 0x001288: 0x5C68100002270909 Fmul
    temp_618 = temp_608 * temp_609;
    // 0x001290: 0x4C68101808D7150F Fmul
    temp_619 = temp_614 * fp_c6.data[35].y;
    // 0x001298: 0x4C68101808E7150A Fmul
    temp_620 = temp_614 * fp_c6.data[35].z;
    // 0x0012A8: 0x4C68101808C71515 Fmul
    temp_621 = temp_614 * fp_c6.data[35].x;
    // 0x0012B0: 0x5C68100002171622 Fmul
    temp_622 = temp_616 * temp_611;
    // 0x0012B8: 0x5C59100001871623 Fadd
    temp_623 = 0.0 - temp_616;
    temp_624 = temp_623 + temp_613;
    // 0x0012C8: 0x4C68101803770909 Fmul
    temp_625 = temp_618 * fp_c6.data[13].w;
    // 0x0012D0: 0x59A0150002470F2A Ffma
    temp_626 = fma(temp_619, temp_604, temp_594);
    // 0x0012D8: 0x49A1079407F70F16 Ffma
    temp_627 = 0.0 - fp_c5.data[31].w;
    temp_628 = fma(temp_619, temp_627, temp_619);
    // 0x0012E8: 0x59A015800247152B Ffma
    temp_629 = fma(temp_621, temp_604, temp_593);
    // 0x0012F0: 0x59A0160002470A2C Ffma
    temp_630 = fma(temp_620, temp_604, temp_617);
    // 0x0012F8: 0x49A10A9407F71515 Ffma
    temp_631 = 0.0 - fp_c5.data[31].w;
    temp_632 = fma(temp_621, temp_631, temp_621);
    // 0x001308: 0x49A1051407F70A0F Ffma
    temp_633 = 0.0 - fp_c5.data[31].w;
    temp_634 = fma(temp_620, temp_633, temp_620);
    // 0x001310: 0xE043FF900077FF0A Ipa
    temp_635 = in_attr8.x;
    // 0x001318: 0x59A0110002371919 Ffma
    temp_636 = fma(temp_175, temp_624, temp_622);
    // 0x001328: 0xE043FF8C8077FF07 Ipa
    temp_637 = in_attr4.z;
    // 0x001330: 0x5C58100001571E15 Fadd
    temp_638 = temp_562 + temp_632;
    // 0x001338: 0x59A0110002371C1C Ffma
    temp_639 = fma(temp_210, temp_624, temp_622);
    // 0x001348: 0x59A0110002371D1D Ffma
    temp_640 = fma(temp_112, temp_624, temp_622);
    // 0x001350: 0x5C58100001671F16 Fadd
    temp_641 = temp_564 + temp_628;
    // 0x001358: 0x5C58100000F7200F Fadd
    temp_642 = temp_566 + temp_634;
    // 0x001368: 0x4C68101406271919 Fmul
    temp_643 = temp_636 * fp_c5.data[24].z;
    // 0x001370: 0x4C68101406271C1C Fmul
    temp_644 = temp_639 * fp_c5.data[24].z;
    // 0x001378: 0x4C68101406271D1D Fmul
    temp_645 = temp_640 * fp_c5.data[24].z;
    // 0x001388: 0xF0F0000034170000 Depbar
    // 0x001390: 0x49A0020400570104 Ffma
    temp_646 = fma(temp_605, fp_c1.data[1].y, temp_545);
    // 0x001398: 0x49A0028400570205 Ffma
    temp_647 = fma(temp_606, fp_c1.data[1].y, temp_546);
    // 0x0013A8: 0x49A0091808570C0C Ffma
    temp_648 = fma(temp_549, fp_c6.data[33].y, temp_553);
    // 0x0013B0: 0x49A0030400570806 Ffma
    temp_649 = fma(temp_607, fp_c1.data[1].y, temp_547);
    // 0x0013B8: 0x49A0099808570D0D Ffma
    temp_650 = fma(temp_550, fp_c6.data[33].y, temp_554);
    // 0x0013C8: 0x49A0059808570E0B Ffma
    temp_651 = fma(temp_551, fp_c6.data[33].y, temp_555);
    // 0x0013D0: 0x5C58100000471504 Fadd
    temp_652 = temp_638 + temp_646;
    // 0x0013D8: 0x5C58100000571605 Fadd
    temp_653 = temp_641 + temp_647;
    // 0x0013E8: 0x59A0158000C71919 Ffma
    temp_654 = fma(temp_643, temp_648, temp_629);
    // 0x0013F0: 0x5C58100000670F06 Fadd
    temp_655 = temp_642 + temp_649;
    // 0x0013F8: 0x4C98079802870001 Mov
    // 0x001408: 0x4C98079802970002 Mov
    // 0x001410: 0x59A1020000470304 Ffma
    temp_656 = 0.0 - temp_652;
    temp_657 = fma(temp_25, temp_656, temp_652);
    // 0x001418: 0x59A0150000D71C1C Ffma
    temp_658 = fma(temp_644, temp_650, temp_626);
    // 0x001428: 0x59A1028000570305 Ffma
    temp_659 = 0.0 - temp_653;
    temp_660 = fma(temp_25, temp_659, temp_653);
    // 0x001430: 0x59A1030000670306 Ffma
    temp_661 = 0.0 - temp_655;
    temp_662 = fma(temp_25, temp_661, temp_655);
    // 0x001438: 0x59A0160000B71D1D Ffma
    temp_663 = fma(temp_645, temp_651, temp_630);
    // 0x001448: 0x51A0009802871010 Ffma
    temp_664 = fma(temp_574, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001450: 0x59A00C8000471704 Ffma
    temp_665 = fma(temp_121, temp_657, temp_654);
    // 0x001458: 0x51A0011802971111 Ffma
    temp_666 = fma(temp_570, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001468: 0x59A00E0000571A05 Ffma
    temp_667 = fma(temp_188, temp_660, temp_658);
    // 0x001470: 0x4C98079802A70002 Mov
    // 0x001478: 0x59A00E8000671B06 Ffma
    temp_668 = fma(temp_91, temp_662, temp_663);
    // 0x001488: 0x5C68100000472727 Fmul
    temp_669 = temp_268 * temp_665;
    // 0x001490: 0x49A2049803670904 Ffma
    temp_670 = 0.0 - temp_625;
    temp_671 = fma(temp_625, fp_c6.data[13].z, temp_670);
    // 0x001498: 0x5C68100000572828 Fmul
    temp_672 = temp_270 * temp_667;
    // 0x0014A8: 0x51A0011802A71414 Ffma
    temp_673 = fma(temp_572, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0014B0: 0x5C68100000672929 Fmul
    temp_674 = temp_272 * temp_668;
    // 0x0014B8: 0x49A2049803570905 Ffma
    temp_675 = 0.0 - temp_625;
    temp_676 = fma(temp_625, fp_c6.data[13].y, temp_675);
    // 0x0014C8: 0x5C58300001072701 Fadd
    temp_677 = 0.0 - temp_664;
    temp_678 = temp_669 + temp_677;
    // 0x0014D0: 0x49A008180BF70102 Ffma
    temp_679 = fma(temp_678, fp_c6.data[47].w, temp_664);
    // 0x0014D8: 0x5C58300001472901 Fadd
    temp_680 = 0.0 - temp_673;
    temp_681 = temp_674 + temp_680;
    // 0x0014E8: 0x49A505180BC7000A Ffma
    temp_682 = 0.0 - fp_c6.data[47].x;
    temp_683 = fma(temp_559, temp_682, temp_635);
    temp_684 = clamp(temp_683, 0.0, 1.0);
    // 0x0014F0: 0x5C58300001172800 Fadd
    temp_685 = 0.0 - temp_666;
    temp_686 = temp_672 + temp_685;
    // 0x0014F8: 0x5080000000370A0A Mufu
    temp_687 = log2(temp_684);
    // 0x001508: 0x5C60178000271002 Fmnmx
    temp_688 = max(temp_664, temp_679);
    // 0x001510: 0x49A00A180BF70101 Ffma
    temp_689 = fma(temp_681, fp_c6.data[47].w, temp_673);
    // 0x001518: 0x49A008980BF70000 Ffma
    temp_690 = fma(temp_686, fp_c6.data[47].w, temp_666);
    // 0x001528: 0x5C60178000171401 Fmnmx
    temp_691 = max(temp_673, temp_689);
    // 0x001530: 0x5C60178000071100 Fmnmx
    temp_692 = max(temp_666, temp_690);
    // 0x001538: 0x4C68101803170A03 Fmul
    temp_693 = temp_687 * fp_c6.data[12].y;
    // 0x001548: 0x59A0008000470104 Ffma
    temp_694 = fma(temp_691, temp_671, temp_691);
    // 0x001550: 0x59A0000000570005 Ffma
    temp_695 = fma(temp_692, temp_676, temp_692);
    // 0x001558: 0x5C90008000370006 Rro
    // 0x001568: 0x49A2049803470903 Ffma
    temp_696 = 0.0 - temp_625;
    temp_697 = fma(temp_625, fp_c6.data[13].x, temp_696);
    // 0x001570: 0x5080000000270606 Mufu
    temp_698 = exp2(temp_693);
    // 0x001578: 0x5C59100000572801 Fadd
    temp_699 = 0.0 - temp_672;
    temp_700 = temp_699 + temp_695;
    // 0x001588: 0x0103F0000007F005 Mov32i
    // 0x001590: 0x59A0010000370202 Ffma
    temp_701 = fma(temp_688, temp_697, temp_688);
    // 0x001598: 0x5C59100000272700 Fadd
    temp_702 = 0.0 - temp_669;
    temp_703 = temp_702 + temp_701;
    // 0x0015A8: 0x4C68101802B70603 Fmul
    temp_704 = temp_698 * fp_c6.data[10].w;
    // 0x0015B0: 0x5C59100000472902 Fadd
    temp_705 = 0.0 - temp_674;
    temp_706 = temp_705 + temp_694;
    // 0x0015B8: 0x4C58100C03870704 Fadd
    temp_707 = temp_637 + fp_c3.data[14].x;
    // 0x0015C8: 0x5C9807800FF70006 Mov
    // 0x0015D0: 0x0103F8000007F007 Mov32i
    // 0x0015D8: 0x59A0138000370000 Ffma
    temp_708 = fma(temp_703, temp_704, temp_669);
    // 0x0015E8: 0x59A0140000370101 Ffma
    temp_709 = fma(temp_700, temp_704, temp_672);
    // 0x0015F0: 0x59A0148000370202 Ffma
    temp_710 = fma(temp_706, temp_704, temp_674);
    // 0x0015F8: 0x0103F8000007F003 Mov32i
    // 0x001608: 0x49A37F8C03C70404 Ffma
    temp_711 = 0.0 - fp_c3.data[15].x;
    temp_712 = fma(temp_707, temp_711, -0.0);
    // 0x001610: 0xE30000000007000F Exit
    out_attr0.x = temp_708;
    out_attr0.y = temp_709;
    out_attr0.z = temp_710;
    out_attr0.w = 1.0;
    out_attr1.x = temp_712;
    out_attr1.y = 0.5;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
