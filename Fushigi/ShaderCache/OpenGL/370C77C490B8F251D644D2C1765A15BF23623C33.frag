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
layout (binding = 0) uniform sampler2DArray fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_2C;
layout (binding = 2) uniform sampler2D fp_t_tcb_2E;
layout (binding = 3) uniform sampler2DArray fp_t_tcb_2A;
layout (binding = 4) uniform sampler2D fp_t_tcb_1E;
layout (binding = 5) uniform sampler2DArray fp_t_tcb_36;
layout (binding = 6) uniform sampler2DArray fp_t_tcb_24;
layout (binding = 7) uniform sampler2D fp_t_tcb_30;
layout (binding = 8) uniform sampler2D fp_t_tcb_20;
layout (binding = 9) uniform samplerCube fp_t_tcb_16;
layout (binding = 10) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 11) uniform samplerCube fp_t_tcb_18;
layout (binding = 12) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
layout (location = 7) in vec4 in_attr7;
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
    precise float temp_15;
    precise float temp_16;
    uint temp_17;
    uint temp_18;
    precise vec2 temp_19;
    precise float temp_20;
    precise float temp_21;
    precise vec2 temp_22;
    precise float temp_23;
    precise float temp_24;
    precise vec2 temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise vec3 temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise vec3 temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise vec3 temp_39;
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
    bool temp_58;
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
    uint temp_136;
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
    int temp_148;
    precise float temp_149;
    int temp_150;
    uint temp_151;
    uint temp_152;
    int temp_153;
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
    bool temp_233;
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
    int temp_311;
    bool temp_312;
    int temp_313;
    int temp_314;
    int temp_315;
    int temp_316;
    int temp_317;
    uint temp_318;
    uint temp_319;
    int temp_320;
    precise float temp_321;
    precise float temp_322;
    precise float temp_323;
    precise float temp_324;
    int temp_325;
    int temp_326;
    uint temp_327;
    uint temp_328;
    int temp_329;
    precise float temp_330;
    int temp_331;
    uint temp_332;
    int temp_333;
    precise float temp_334;
    int temp_335;
    uint temp_336;
    uint temp_337;
    int temp_338;
    precise float temp_339;
    int temp_340;
    uint temp_341;
    int temp_342;
    precise float temp_343;
    int temp_344;
    uint temp_345;
    uint temp_346;
    int temp_347;
    precise float temp_348;
    int temp_349;
    uint temp_350;
    int temp_351;
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
    precise float temp_365;
    precise float temp_366;
    precise float temp_367;
    precise float temp_368;
    precise float temp_369;
    precise float temp_370;
    int temp_371;
    uint temp_372;
    uint temp_373;
    int temp_374;
    precise float temp_375;
    int temp_376;
    uint temp_377;
    int temp_378;
    precise float temp_379;
    precise float temp_380;
    precise float temp_381;
    int temp_382;
    uint temp_383;
    uint temp_384;
    int temp_385;
    precise float temp_386;
    int temp_387;
    uint temp_388;
    uint temp_389;
    int temp_390;
    precise float temp_391;
    int temp_392;
    uint temp_393;
    int temp_394;
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
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    precise float temp_412;
    precise float temp_413;
    uint temp_414;
    int temp_415;
    bool temp_416;
    uint temp_417;
    precise float temp_418;
    precise float temp_419;
    precise float temp_420;
    precise float temp_421;
    precise float temp_422;
    precise float temp_423;
    precise float temp_424;
    uint temp_425;
    precise float temp_426;
    bool temp_427;
    precise float temp_428;
    int temp_429;
    uint temp_430;
    uint temp_431;
    int temp_432;
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
    precise vec3 temp_558;
    precise float temp_559;
    precise float temp_560;
    precise float temp_561;
    precise float temp_562;
    precise float temp_563;
    precise float temp_564;
    precise float temp_565;
    precise float temp_566;
    precise float temp_567;
    precise vec3 temp_568;
    precise float temp_569;
    precise float temp_570;
    precise float temp_571;
    precise vec3 temp_572;
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
    // 0x000008: 0x0103F8000007F01A Mov32i
    // 0x000010: 0xE003FF87CFF7FF0C Ipa
    // 0x000018: 0xE003FF870FF7FF04 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000028: 0xE003FF874FF7FF05 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000030: 0x5080000000470C0C Mufu
    // 0x000038: 0x4C68100C04A70404 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000048: 0x4C68100C04B70505 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000050: 0xE043FF91C0C7FF00 Ipa
    temp_8 = in_attr9.w;
    // 0x000058: 0xE043FF8F40C7FF01 Ipa
    temp_9 = in_attr7.y;
    // 0x000068: 0xE043FF8F00C7FF0F Ipa
    temp_10 = in_attr7.x;
    // 0x000070: 0xE043FF8E80C7FF02 Ipa
    temp_11 = in_attr6.z;
    // 0x000078: 0xE043FF8EC0C7FF14 Ipa
    temp_12 = in_attr6.w;
    // 0x000088: 0xE043FF8E40C7FF17 Ipa
    temp_13 = in_attr6.y;
    // 0x000090: 0xE043FF8E00C7FF1D Ipa
    temp_14 = in_attr6.x;
    // 0x000098: 0x5CB010000007090E F2i
    temp_15 = roundEven(temp_8);
    temp_16 = max(temp_15, 0.0);
    temp_17 = uint(temp_16);
    temp_18 = clamp(temp_17, 0u, 0xFFFFu);
    // 0x0000A8: 0xD8F0026FF0170E12 Texs
    temp_19 = texture(fp_t_tcb_26, vec3(temp_10, temp_9, float(int(temp_18)))).xy;
    temp_20 = temp_19.x;
    temp_21 = temp_19.y;
    // 0x0000B0: 0xD83002CFF1470214 Texs
    temp_22 = texture(fp_t_tcb_2C, vec2(temp_11, temp_12)).xy;
    temp_23 = temp_22.x;
    temp_24 = temp_22.y;
    // 0x0000B8: 0xD83002EFF1771D08 Texs
    temp_25 = texture(fp_t_tcb_2E, vec2(temp_14, temp_13)).xy;
    temp_26 = temp_25.x;
    temp_27 = temp_25.y;
    // 0x0000C8: 0xD8EC02AFF0170E03 Texs
    temp_28 = texture(fp_t_tcb_2A, vec3(temp_10, temp_9, float(int(temp_18)))).w;
    // 0x0000D0: 0xD86201EFF1A7040D Texs
    temp_29 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x0000D8: 0x5C98078000E7001C Mov
    // 0x0000E8: 0xD8E40360B1771C22 Texs
    temp_30 = texture(fp_t_tcb_36, vec3(temp_14, temp_13, float(int(temp_18)))).xyw;
    temp_31 = temp_30.x;
    temp_32 = temp_30.y;
    temp_33 = temp_30.z;
    // 0x0000F0: 0xD8E2024FF0170E10 Texs
    temp_34 = texture(fp_t_tcb_24, vec3(temp_10, temp_9, float(int(temp_18)))).x;
    // 0x0000F8: 0xD8220300A1771D06 Texs
    temp_35 = texture(fp_t_tcb_30, vec2(temp_14, temp_13)).xyz;
    temp_36 = temp_35.x;
    temp_37 = temp_35.y;
    temp_38 = temp_35.z;
    // 0x000108: 0xD82202000057041E Texs
    temp_39 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_40 = temp_39.x;
    temp_41 = temp_39.y;
    temp_42 = temp_39.z;
    // 0x000110: 0xE043FF8A00C7FF19 Ipa
    temp_43 = in_attr2.x;
    // 0x000118: 0xE043FF8B00C7FF21 Ipa
    temp_44 = in_attr3.x;
    // 0x000128: 0xE043FF8B40C7FF20 Ipa
    temp_45 = in_attr3.y;
    // 0x000130: 0xE043FF8940C7FF01 Ipa
    temp_46 = in_attr1.y;
    // 0x000138: 0xE043FF8980C7FF0E Ipa
    temp_47 = in_attr1.z;
    // 0x000148: 0xE043FF8840C7FF0F Ipa
    temp_48 = in_attr0.y;
    // 0x000150: 0x3868104110070505 Fmul
    temp_49 = temp_7 * 9.0;
    // 0x000158: 0x3868104180070404 Fmul
    temp_50 = temp_6 * 16.0;
    // 0x000168: 0x5CA8148000570A05 F2f
    temp_51 = floor(temp_49);
    // 0x000170: 0x5CA8148000470A04 F2f
    temp_52 = floor(temp_50);
    // 0x000178: 0x32A002418007052E Ffma
    temp_53 = fma(temp_51, 16.0, temp_52);
    // 0x000188: 0xF0F0000034570000 Depbar
    // 0x000190: 0x5C68100001371311 Fmul
    temp_54 = temp_21 * temp_21;
    // 0x000198: 0x49A0091407C71416 Ffma
    temp_55 = fma(temp_23, fp_c5.data[31].x, temp_20);
    // 0x0001A8: 0x49A0099407C71515 Ffma
    temp_56 = fma(temp_24, fp_c5.data[31].x, temp_21);
    // 0x0001B0: 0xE043FF8A40C7FF13 Ipa
    temp_57 = in_attr2.y;
    // 0x0001B8: 0x4BB1839406070307 Fsetp
    temp_58 = temp_28 < fp_c5.data[24].x;
    // 0x0001C8: 0x59A0088001271211 Ffma
    temp_59 = fma(temp_20, temp_20, temp_54);
    // 0x0001D0: 0xE043FF8900C7FF12 Ipa
    temp_60 = in_attr1.x;
    // 0x0001D8: 0x5C68100001671602 Fmul
    temp_61 = temp_55 * temp_55;
    // 0x0001E8: 0x385D103F80071114 Fadd
    temp_62 = 0.0 - temp_59;
    temp_63 = temp_62 + 1.0;
    temp_64 = clamp(temp_63, 0.0, 1.0);
    // 0x0001F0: 0xE043FF8A80C7FF11 Ipa
    temp_65 = in_attr2.z;
    // 0x0001F8: 0x59A0010001571502 Ffma
    temp_66 = fma(temp_56, temp_56, temp_61);
    // 0x000208: 0x5080000000871414 Mufu
    temp_67 = sqrt(temp_64);
    // 0x000210: 0x59A0010001471417 Ffma
    temp_68 = fma(temp_67, temp_67, temp_66);
    // 0x000218: 0xE043FF8800C7FF02 Ipa
    temp_69 = in_attr0.x;
    // 0x000228: 0x5C6810000127121A Fmul
    temp_70 = temp_60 * temp_60;
    // 0x000230: 0x5080000000571717 Mufu
    temp_71 = inversesqrt(temp_68);
    // 0x000238: 0x5C68100001771616 Fmul
    temp_72 = temp_55 * temp_71;
    // 0x000248: 0x5C68100001771518 Fmul
    temp_73 = temp_56 * temp_71;
    // 0x000250: 0x5C68100001771414 Fmul
    temp_74 = temp_67 * temp_71;
    // 0x000258: 0x49A00B1407D70815 Ffma
    temp_75 = fma(temp_26, fp_c5.data[31].y, temp_72);
    // 0x000268: 0xE043FF8880C7FF08 Ipa
    temp_76 = in_attr0.z;
    // 0x000270: 0x49A00C1407D70918 Ffma
    temp_77 = fma(temp_27, fp_c5.data[31].y, temp_73);
    // 0x000278: 0x5C68100001971909 Fmul
    temp_78 = temp_43 * temp_43;
    // 0x000288: 0x5C6810000027021C Fmul
    temp_79 = temp_69 * temp_69;
    // 0x000290: 0x5C68100001571517 Fmul
    temp_80 = temp_75 * temp_75;
    // 0x000298: 0x59A0048001371316 Ffma
    temp_81 = fma(temp_57, temp_57, temp_78);
    // 0x0002A8: 0x59A00D0000170109 Ffma
    temp_82 = fma(temp_46, temp_46, temp_70);
    // 0x0002B0: 0x59A00E0000F70F1D Ffma
    temp_83 = fma(temp_48, temp_48, temp_79);
    // 0x0002B8: 0x59A00B8001871817 Ffma
    temp_84 = fma(temp_77, temp_77, temp_80);
    // 0x0002C8: 0x59A00B0001171116 Ffma
    temp_85 = fma(temp_65, temp_65, temp_81);
    // 0x0002D0: 0x59A0048000E70E09 Ffma
    temp_86 = fma(temp_47, temp_47, temp_82);
    // 0x0002D8: 0x508000000057161A Mufu
    temp_87 = inversesqrt(temp_85);
    // 0x0002E8: 0x59A00B8001471417 Ffma
    temp_88 = fma(temp_74, temp_74, temp_84);
    // 0x0002F0: 0x508000000057091B Mufu
    temp_89 = inversesqrt(temp_86);
    // 0x0002F8: 0x5C68100002172109 Fmul
    temp_90 = temp_44 * temp_44;
    // 0x000308: 0x5080000000571717 Mufu
    temp_91 = inversesqrt(temp_88);
    // 0x000310: 0x5C68100001A71919 Fmul
    temp_92 = temp_43 * temp_87;
    // 0x000318: 0xE043FF8B80C7FF16 Ipa
    temp_93 = in_attr3.z;
    // 0x000328: 0x59A00E800087081D Ffma
    temp_94 = fma(temp_76, temp_76, temp_83);
    // 0x000330: 0x5C68100001A71313 Fmul
    temp_95 = temp_57 * temp_87;
    // 0x000338: 0x5080000000571D1D Mufu
    temp_96 = inversesqrt(temp_94);
    // 0x000348: 0x5C68100001B71212 Fmul
    temp_97 = temp_60 * temp_89;
    // 0x000350: 0x5C68100001A71111 Fmul
    temp_98 = temp_65 * temp_87;
    // 0x000358: 0x5C68100001B70E0E Fmul
    temp_99 = temp_47 * temp_89;
    // 0x000368: 0x59A0048002072009 Ffma
    temp_100 = fma(temp_45, temp_45, temp_90);
    // 0x000370: 0x5C68100001771818 Fmul
    temp_101 = temp_77 * temp_91;
    // 0x000378: 0x5C68100001771515 Fmul
    temp_102 = temp_75 * temp_91;
    // 0x000388: 0x5C68100001771414 Fmul
    temp_103 = temp_74 * temp_91;
    // 0x000390: 0x5C68100001B70117 Fmul
    temp_104 = temp_46 * temp_89;
    // 0x000398: 0x5C6810000197181C Fmul
    temp_105 = temp_101 * temp_92;
    // 0x0003A8: 0x5C6810000137181A Fmul
    temp_106 = temp_101 * temp_95;
    // 0x0003B0: 0x5C68100001D70201 Fmul
    temp_107 = temp_69 * temp_96;
    // 0x0003B8: 0x5C68100001171818 Fmul
    temp_108 = temp_101 * temp_98;
    // 0x0003C8: 0x5C68100001D70F02 Fmul
    temp_109 = temp_48 * temp_96;
    // 0x0003D0: 0x5C68100001D7081D Fmul
    temp_110 = temp_76 * temp_96;
    // 0x0003D8: 0x59A00E0001271512 Ffma
    temp_111 = fma(temp_102, temp_97, temp_105);
    // 0x0003E8: 0x59A00D0001771517 Ffma
    temp_112 = fma(temp_102, temp_104, temp_106);
    // 0x0003F0: 0x59A00C0000E7150E Ffma
    temp_113 = fma(temp_102, temp_99, temp_108);
    // 0x0003F8: 0x59A0090000171401 Ffma
    temp_114 = fma(temp_103, temp_107, temp_111);
    // 0x000408: 0x59A00B8000271402 Ffma
    temp_115 = fma(temp_103, temp_109, temp_112);
    // 0x000410: 0x59A0048001671609 Ffma
    temp_116 = fma(temp_93, temp_93, temp_100);
    // 0x000418: 0x59A0070001D7141D Ffma
    temp_117 = fma(temp_103, temp_110, temp_113);
    // 0x000428: 0x508000000057090F Mufu
    temp_118 = inversesqrt(temp_116);
    // 0x000430: 0x5C68100000170108 Fmul
    temp_119 = temp_114 * temp_114;
    // 0x000438: 0x59A0040000270208 Ffma
    temp_120 = fma(temp_115, temp_115, temp_119);
    // 0x000448: 0x5C69100000F72121 Fmul
    temp_121 = 0.0 - temp_118;
    temp_122 = temp_44 * temp_121;
    // 0x000450: 0x59A0040001D71D08 Ffma
    temp_123 = fma(temp_117, temp_117, temp_120);
    // 0x000458: 0x5C69100000F72020 Fmul
    temp_124 = 0.0 - temp_118;
    temp_125 = temp_45 * temp_124;
    // 0x000468: 0x5080000000570808 Mufu
    temp_126 = inversesqrt(temp_123);
    // 0x000470: 0x5C69100000F71616 Fmul
    temp_127 = 0.0 - temp_118;
    temp_128 = temp_93 * temp_127;
    // 0x000478: 0x5C6810000087010E Fmul
    temp_129 = temp_114 * temp_126;
    // 0x000488: 0x5C68100000870201 Fmul
    temp_130 = temp_115 * temp_126;
    // 0x000490: 0x5C68100000871D12 Fmul
    temp_131 = temp_117 * temp_126;
    // 0x000498: 0xE24000000708000F Bra
    if (temp_58)
    {
        // 0x0004A8: 0x5C9807800FF70000 Mov
        // 0x0004B0: 0xE33000000007000F Kil
        discard;
    }
    // 0x000510: 0x4C58301805C72102 Fadd
    temp_132 = 0.0 - fp_c6.data[23].x;
    temp_133 = temp_122 + temp_132;
    // 0x000518: 0x5CB0118002E70A2E F2i
    temp_134 = trunc(temp_53);
    temp_135 = max(temp_134, 0.0);
    temp_136 = uint(temp_135);
    // 0x000528: 0x4C58301805D72004 Fadd
    temp_137 = 0.0 - fp_c6.data[23].y;
    temp_138 = temp_125 + temp_137;
    // 0x000530: 0xE2900000B5800000 Ssy
    // 0x000538: 0x4C58301805E71605 Fadd
    temp_139 = 0.0 - fp_c6.data[23].z;
    temp_140 = temp_128 + temp_139;
    // 0x000548: 0x01040DF760C7F015 Mov32i
    // 0x000550: 0xF0F0000034270000 Depbar
    // 0x000558: 0x4C6810180A072222 Fmul
    temp_141 = temp_31 * fp_c6.data[40].x;
    // 0x000568: 0x5C68100001070B10 Fmul
    temp_142 = temp_33 * temp_34;
    // 0x000570: 0x5C68100000270209 Fmul
    temp_143 = temp_133 * temp_133;
    // 0x000578: 0x0103F0000007F02F Mov32i
    // 0x000588: 0x5C9807800FF70027 Mov
    // 0x000590: 0x51A5068400271010 Ffma
    temp_144 = 0.0 - temp_29;
    temp_145 = fma(temp_142, temp_144, fp_c1.data[0].z);
    temp_146 = clamp(temp_145, 0.0, 1.0);
    // 0x000598: 0x59A0048000470408 Ffma
    temp_147 = fma(temp_138, temp_138, temp_143);
    // 0x0005A8: 0x3848000000872E2D Shl
    temp_148 = int(temp_136) << 8;
    // 0x0005B0: 0x59A0040000570508 Ffma
    temp_149 = fma(temp_140, temp_140, temp_147);
    // 0x0005B8: 0xEF94008200472D2D Ldc
    temp_150 = temp_148 + 0x2004;
    temp_151 = uint(temp_150) >> 2;
    temp_152 = temp_151 >> 2;
    temp_153 = int(temp_151) & 3;
    temp_154 = fp_c8.data[int(temp_152)][temp_153];
    // 0x0005C8: 0x508000000057080F Mufu
    temp_155 = inversesqrt(temp_149);
    // 0x0005D0: 0x5C68100000F70213 Fmul
    temp_156 = temp_133 * temp_155;
    // 0x0005D8: 0x5C68100000F70417 Fmul
    temp_157 = temp_138 * temp_155;
    // 0x0005E8: 0x5C68100000F70505 Fmul
    temp_158 = temp_140 * temp_155;
    // 0x0005F0: 0x5C68100001372102 Fmul
    temp_159 = temp_122 * temp_156;
    // 0x0005F8: 0x4C69101805C71311 Fmul
    temp_160 = 0.0 - fp_c6.data[23].x;
    temp_161 = temp_156 * temp_160;
    // 0x000608: 0x5C68100001370E14 Fmul
    temp_162 = temp_129 * temp_156;
    // 0x000610: 0x59A0010001772004 Ffma
    temp_163 = fma(temp_125, temp_157, temp_159);
    // 0x000618: 0x49A1089805D71708 Ffma
    temp_164 = 0.0 - fp_c6.data[23].y;
    temp_165 = fma(temp_157, temp_164, temp_161);
    // 0x000628: 0x59A00A0001770114 Ffma
    temp_166 = fma(temp_130, temp_157, temp_162);
    // 0x000630: 0x386013BF80072202 Fmnmx
    temp_167 = min(temp_141, 1.0);
    // 0x000638: 0x59A4020000571604 Ffma
    temp_168 = fma(temp_128, temp_158, temp_163);
    temp_169 = clamp(temp_168, 0.0, 1.0);
    // 0x000648: 0x49A5041805E70508 Ffma
    temp_170 = 0.0 - fp_c6.data[23].z;
    temp_171 = fma(temp_158, temp_170, temp_165);
    temp_172 = clamp(temp_171, 0.0, 1.0);
    // 0x000650: 0x59A40A000057120F Ffma
    temp_173 = fma(temp_131, temp_158, temp_166);
    temp_174 = clamp(temp_173, 0.0, 1.0);
    // 0x000658: 0x4C60178400170202 Fmnmx
    temp_175 = max(temp_167, fp_c1.data[0].y);
    // 0x000668: 0x4C69101805C70E14 Fmul
    temp_176 = 0.0 - fp_c6.data[23].x;
    temp_177 = temp_129 * temp_176;
    // 0x000670: 0x49A20A8400070409 Ffma
    temp_178 = fma(temp_169, fp_c1.data[0].x, -6.98316002);
    // 0x000678: 0x51A4010400170231 Ffma
    temp_179 = fma(temp_175, temp_175, fp_c1.data[0].y);
    temp_180 = clamp(temp_179, 0.0, 1.0);
    // 0x000688: 0x32A017BF0007022F Ffma
    temp_181 = fma(temp_175, 0.5, 0.5);
    // 0x000690: 0x49A10A1805D70111 Ffma
    temp_182 = 0.0 - fp_c6.data[23].y;
    temp_183 = fma(temp_130, temp_182, temp_177);
    // 0x000698: 0x5C68100000970409 Fmul
    temp_184 = temp_169 * temp_178;
    // 0x0006A8: 0xF0F0000034170000 Depbar
    // 0x0006B0: 0x4C68101403070604 Fmul
    temp_185 = temp_36 * fp_c5.data[12].x;
    // 0x0006B8: 0x5C68100002170E06 Fmul
    temp_186 = temp_129 * temp_122;
    // 0x0006C8: 0x5C68100003173130 Fmul
    temp_187 = temp_180 * temp_180;
    // 0x0006D0: 0x5C68120002F72F2F Fmul
    temp_188 = temp_181 * 0.5;
    temp_189 = temp_188 * temp_181;
    // 0x0006D8: 0x49A5089805E71211 Ffma
    temp_190 = 0.0 - fp_c6.data[23].z;
    temp_191 = fma(temp_131, temp_190, temp_183);
    temp_192 = clamp(temp_191, 0.0, 1.0);
    // 0x0006E8: 0x5C9000800097000B Rro
    // 0x0006F0: 0x49A20A8400070809 Ffma
    temp_193 = fma(temp_172, fp_c1.data[0].x, -6.98316002);
    // 0x0006F8: 0x5080000000270B0B Mufu
    temp_194 = exp2(temp_184);
    // 0x000708: 0x4C58301407870405 Fadd
    temp_195 = 0.0 - fp_c5.data[30].x;
    temp_196 = temp_185 + temp_195;
    // 0x000710: 0x59A2078003070F15 Ffma
    temp_197 = 0.0 - temp_174;
    temp_198 = fma(temp_174, temp_187, temp_197);
    // 0x000718: 0x59A1088002F71119 Ffma
    temp_199 = 0.0 - temp_189;
    temp_200 = fma(temp_192, temp_199, temp_192);
    // 0x000728: 0x4C68101801471114 Fmul
    temp_201 = temp_192 * fp_c6.data[5].x;
    // 0x000730: 0x5C68100000970813 Fmul
    temp_202 = temp_172 * temp_193;
    // 0x000738: 0x59A0030002070108 Ffma
    temp_203 = fma(temp_130, temp_125, temp_186);
    // 0x000748: 0x51A0029407872305 Ffma
    temp_204 = fma(temp_32, temp_196, fp_c5.data[30].x);
    // 0x000750: 0x51A00A8400270F15 Ffma
    temp_205 = fma(temp_174, temp_198, fp_c1.data[0].z);
    // 0x000758: 0x4C68101403170706 Fmul
    temp_206 = temp_37 * fp_c5.data[12].y;
    // 0x000768: 0x508000000047151C Mufu
    temp_207 = 1.0 / temp_205;
    // 0x000770: 0x4C68101403270A07 Fmul
    temp_208 = temp_38 * fp_c5.data[12].z;
    // 0x000778: 0x59A4040001671208 Ffma
    temp_209 = fma(temp_131, temp_128, temp_203);
    temp_210 = clamp(temp_209, 0.0, 1.0);
    // 0x000788: 0x59A1058000B7050F Ffma
    temp_211 = 0.0 - temp_194;
    temp_212 = fma(temp_204, temp_211, temp_194);
    // 0x000790: 0x5C90008001370013 Rro
    // 0x000798: 0x5C58100001972F1B Fadd
    temp_213 = temp_189 + temp_200;
    // 0x0007A8: 0x5080000000271313 Mufu
    temp_214 = exp2(temp_202);
    // 0x0007B0: 0x4C58301407870609 Fadd
    temp_215 = 0.0 - fp_c5.data[30].x;
    temp_216 = temp_206 + temp_215;
    // 0x0007B8: 0x5080000000471B1B Mufu
    temp_217 = 1.0 / temp_213;
    // 0x0007C8: 0x59A1040002F70818 Ffma
    temp_218 = 0.0 - temp_189;
    temp_219 = fma(temp_210, temp_218, temp_210);
    // 0x0007D0: 0x5C58100000F7050F Fadd
    temp_220 = temp_204 + temp_212;
    // 0x0007D8: 0x4C5830140787070A Fadd
    temp_221 = 0.0 - fp_c5.data[30].x;
    temp_222 = temp_208 + temp_221;
    // 0x0007E8: 0x1E23EA2F98371414 Fmul32i
    temp_223 = temp_201 * 0.318309873;
    // 0x0007F0: 0x5C68100001C73115 Fmul
    temp_224 = temp_180 * temp_207;
    // 0x0007F8: 0x51A0049407872309 Ffma
    temp_225 = fma(temp_32, temp_216, fp_c5.data[30].x);
    // 0x000808: 0x5C58100001872F1A Fadd
    temp_226 = temp_189 + temp_219;
    // 0x000810: 0x4C68101406270F0F Fmul
    temp_227 = temp_220 * fp_c5.data[24].z;
    // 0x000818: 0x5080000000471A1A Mufu
    temp_228 = 1.0 / temp_226;
    // 0x000828: 0x51A005140787230A Ffma
    temp_229 = fma(temp_32, temp_222, fp_c5.data[30].x);
    // 0x000830: 0x5C6810000087010D Fmul
    temp_230 = temp_130 * temp_210;
    // 0x000838: 0x59A1098001370917 Ffma
    temp_231 = 0.0 - temp_214;
    temp_232 = fma(temp_225, temp_231, temp_214);
    // 0x000848: 0x5B6603800FF72D07 Isetp
    temp_233 = floatBitsToUint(temp_154) <= 0u;
    // 0x000850: 0x5C68100000870E2B Fmul
    temp_234 = temp_129 * temp_210;
    // 0x000858: 0x59A10A0001470F14 Ffma
    temp_235 = 0.0 - temp_223;
    temp_236 = fma(temp_227, temp_235, temp_223);
    // 0x000868: 0x59A1098001370A18 Ffma
    temp_237 = 0.0 - temp_214;
    temp_238 = fma(temp_229, temp_237, temp_214);
    // 0x000870: 0xEF5400000007FF14 Stl
    local_memory[0] = floatBitsToUint(temp_236);
    // 0x000878: 0x5C58100001770917 Fadd
    temp_239 = temp_225 + temp_232;
    // 0x000888: 0x59A1058000B7090F Ffma
    temp_240 = 0.0 - temp_194;
    temp_241 = fma(temp_225, temp_240, temp_194);
    // 0x000890: 0x59A1058000B70A0B Ffma
    temp_242 = 0.0 - temp_194;
    temp_243 = fma(temp_229, temp_242, temp_194);
    // 0x000898: 0x32A2104000070D28 Ffma
    temp_244 = 0.0 - temp_125;
    temp_245 = fma(temp_230, 2.0, temp_244);
    // 0x0008A8: 0x3868103F00071A2C Fmul
    temp_246 = temp_228 * 0.5;
    // 0x0008B0: 0x5C6810000157151A Fmul
    temp_247 = temp_224 * temp_224;
    // 0x0008B8: 0x5C58100001870A18 Fadd
    temp_248 = temp_229 + temp_238;
    // 0x0008C8: 0x4C68101406271717 Fmul
    temp_249 = temp_239 * fp_c5.data[24].z;
    // 0x0008D0: 0x5C58100000F7090F Fadd
    temp_250 = temp_225 + temp_241;
    // 0x0008D8: 0x5C58100000B70A0B Fadd
    temp_251 = temp_229 + temp_243;
    // 0x0008E8: 0x59A1098001370514 Ffma
    temp_252 = 0.0 - temp_214;
    temp_253 = fma(temp_204, temp_252, temp_214);
    // 0x0008F0: 0x5C68100001B72C1B Fmul
    temp_254 = temp_246 * temp_217;
    // 0x0008F8: 0x4C68101406271818 Fmul
    temp_255 = temp_248 * fp_c5.data[24].z;
    // 0x000908: 0x4C68101801571113 Fmul
    temp_256 = temp_192 * fp_c6.data[5].y;
    // 0x000910: 0x49A2081402C7100D Ffma
    temp_257 = 0.0 - temp_146;
    temp_258 = fma(temp_146, fp_c5.data[11].x, temp_257);
    // 0x000918: 0x4C68101801571725 Fmul
    temp_259 = temp_249 * fp_c6.data[5].y;
    // 0x000928: 0x5C58100001470519 Fadd
    temp_260 = temp_204 + temp_253;
    // 0x000930: 0x5C68100001B71A1A Fmul
    temp_261 = temp_247 * temp_254;
    // 0x000938: 0x4C68101801671114 Fmul
    temp_262 = temp_192 * fp_c6.data[5].z;
    // 0x000948: 0x4C68101801671818 Fmul
    temp_263 = temp_255 * fp_c6.data[5].z;
    // 0x000950: 0x4C68101406270F0F Fmul
    temp_264 = temp_250 * fp_c5.data[24].z;
    // 0x000958: 0x1E23EA2F98371315 Fmul32i
    temp_265 = temp_256 * 0.318309873;
    // 0x000968: 0x4C68101406271919 Fmul
    temp_266 = temp_260 * fp_c5.data[24].z;
    // 0x000970: 0x5C68100001A7111A Fmul
    temp_267 = temp_192 * temp_261;
    // 0x000978: 0x49A2081402D71011 Ffma
    temp_268 = 0.0 - temp_146;
    temp_269 = fma(temp_146, fp_c5.data[11].y, temp_268);
    // 0x000988: 0x49A2081402E71010 Ffma
    temp_270 = 0.0 - temp_146;
    temp_271 = fma(temp_146, fp_c5.data[11].z, temp_270);
    // 0x000990: 0x4C68101406270B13 Fmul
    temp_272 = temp_251 * fp_c5.data[24].z;
    // 0x000998: 0x1E23EA2F98371414 Fmul32i
    temp_273 = temp_262 * 0.318309873;
    // 0x0009A8: 0x4C68101801471919 Fmul
    temp_274 = temp_266 * fp_c6.data[5].x;
    // 0x0009B0: 0x5C68100000871217 Fmul
    temp_275 = temp_131 * temp_210;
    // 0x0009B8: 0x5C68100001A72525 Fmul
    temp_276 = temp_259 * temp_267;
    // 0x0009C8: 0x5C68100001A71826 Fmul
    temp_277 = temp_263 * temp_267;
    // 0x0009D0: 0x3858103F80070D0D Fadd
    temp_278 = temp_258 + 1.0;
    // 0x0009D8: 0x3858103F80071111 Fadd
    temp_279 = temp_269 + 1.0;
    // 0x0009E8: 0x5C68100001A71924 Fmul
    temp_280 = temp_274 * temp_267;
    // 0x0009F0: 0x3858103F80071010 Fadd
    temp_281 = temp_271 + 1.0;
    // 0x0009F8: 0x59A10A8001570F0B Ffma
    temp_282 = 0.0 - temp_265;
    temp_283 = fma(temp_264, temp_282, temp_265);
    // 0x000A08: 0x59A10A000147130F Ffma
    temp_284 = 0.0 - temp_273;
    temp_285 = fma(temp_272, temp_284, temp_273);
    // 0x000A10: 0x32A210C000072B2B Ffma
    temp_286 = 0.0 - temp_122;
    temp_287 = fma(temp_234, 2.0, temp_286);
    // 0x000A18: 0x32A20B4000071717 Ffma
    temp_288 = 0.0 - temp_128;
    temp_289 = fma(temp_275, 2.0, temp_288);
    // 0x000A28: 0x5C9807800FF70013 Mov
    // 0x000A30: 0x5C9807800FF70018 Mov
    // 0x000A38: 0x5C9807800FF7001B Mov
    // 0x000A48: 0x5C9807800FF70019 Mov
    // 0x000A50: 0x5C9807800FF7001A Mov
    // 0x000A58: 0x59A4068000D7041C Ffma
    temp_290 = fma(temp_185, temp_278, temp_278);
    temp_291 = clamp(temp_290, 0.0, 1.0);
    // 0x000A68: 0x59A408800117061D Ffma
    temp_292 = fma(temp_206, temp_279, temp_279);
    temp_293 = clamp(temp_292, 0.0, 1.0);
    // 0x000A70: 0x59A4080001070722 Ffma
    temp_294 = fma(temp_208, temp_281, temp_281);
    temp_295 = clamp(temp_294, 0.0, 1.0);
    // 0x000A78: 0x1E23E22F98372424 Fmul32i
    temp_296 = temp_280 * 0.159154937;
    // 0x000A88: 0x1E23E22F98372525 Fmul32i
    temp_297 = temp_276 * 0.159154937;
    // 0x000A90: 0x1E23E22F98372626 Fmul32i
    temp_298 = temp_277 * 0.159154937;
    // 0x000A98: 0xF0F800000000000F Sync
    temp_299 = 0.0;
    temp_300 = 0.0;
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
    if (!temp_233)
    {
        // 0x000AA8: 0x5C9807800FF7002A Mov
        temp_311 = 0;
        do
        {
            // 0x000AB0: 0x5C18020002A72E29 Iscadd
            temp_313 = int(temp_136) << 4;
            temp_314 = temp_313 + temp_311;
            // 0x000AB8: 0xE003FF87CFF7FF32 Ipa
            // 0x000AC8: 0x1C00000000172A2A Iadd32i
            temp_315 = temp_311 + 1;
            // 0x000AD0: 0xE003FF87CFF7FF34 Ipa
            // 0x000AD8: 0x3848000000472929 Shl
            temp_316 = temp_314 << 4;
            // 0x000AE8: 0xE003FF87CFF7FF33 Ipa
            // 0x000AF0: 0x5B6C038002D72A0F Isetp
            temp_312 = uint(temp_315) >= floatBitsToUint(temp_154);
            // 0x000AF8: 0xE290000057800000 Ssy
            // 0x000B08: 0xEF94008200072929 Ldc
            temp_317 = temp_316 + 0x2000;
            temp_318 = uint(temp_317) >> 2;
            temp_319 = temp_318 >> 2;
            temp_320 = int(temp_318) & 3;
            temp_321 = fp_c8.data[int(temp_319)][temp_320];
            // 0x000B10: 0x5080000000473232 Mufu
            // 0x000B18: 0x5080000000473434 Mufu
            // 0x000B28: 0x5080000000473333 Mufu
            // 0x000B30: 0xE043FF8D0327FF32 Ipa
            temp_322 = in_attr5.x;
            // 0x000B38: 0xE043FF8D4347FF34 Ipa
            temp_323 = in_attr5.y;
            // 0x000B48: 0xE043FF8D8337FF33 Ipa
            temp_324 = in_attr5.z;
            // 0x000B50: 0x3848000000672929 Shl
            temp_325 = floatBitsToInt(temp_321) << 6;
            // 0x000B58: 0xEF9500800107290C Ldc
            temp_326 = temp_325 + 16;
            temp_327 = uint(temp_326) >> 2;
            temp_328 = temp_327 >> 2;
            temp_329 = int(temp_327) & 3;
            temp_330 = fp_c8.data[int(temp_328)][temp_329];
            temp_331 = int(temp_327) + 1;
            temp_332 = uint(temp_331) >> 2;
            temp_333 = temp_331 & 3;
            temp_334 = fp_c8.data[int(temp_332)][temp_333];
            // 0x000B68: 0xEF95008001872910 Ldc
            temp_335 = temp_325 + 24;
            temp_336 = uint(temp_335) >> 2;
            temp_337 = temp_336 >> 2;
            temp_338 = int(temp_336) & 3;
            temp_339 = fp_c8.data[int(temp_337)][temp_338];
            temp_340 = int(temp_336) + 1;
            temp_341 = uint(temp_340) >> 2;
            temp_342 = temp_340 & 3;
            temp_343 = fp_c8.data[int(temp_341)][temp_342];
            // 0x000B70: 0xEF95008002072914 Ldc
            temp_344 = temp_325 + 32;
            temp_345 = uint(temp_344) >> 2;
            temp_346 = temp_345 >> 2;
            temp_347 = int(temp_345) & 3;
            temp_348 = fp_c8.data[int(temp_346)][temp_347];
            temp_349 = int(temp_345) + 1;
            temp_350 = uint(temp_349) >> 2;
            temp_351 = temp_349 & 3;
            temp_352 = fp_c8.data[int(temp_350)][temp_351];
            // 0x000B78: 0x5C58300003270C32 Fadd
            temp_353 = 0.0 - temp_322;
            temp_354 = temp_330 + temp_353;
            // 0x000B88: 0x5C58300003470D35 Fadd
            temp_355 = 0.0 - temp_323;
            temp_356 = temp_334 + temp_355;
            // 0x000B90: 0x5C58300003371033 Fadd
            temp_357 = 0.0 - temp_324;
            temp_358 = temp_339 + temp_357;
            // 0x000B98: 0x5C68100003273234 Fmul
            temp_359 = temp_354 * temp_354;
            // 0x000BA8: 0x59A1198003371111 Ffma
            temp_360 = 0.0 - temp_358;
            temp_361 = fma(temp_343, temp_360, temp_358);
            // 0x000BB0: 0x59A01A0003573534 Ffma
            temp_362 = fma(temp_356, temp_356, temp_359);
            // 0x000BB8: 0x59A01A0001171136 Ffma
            temp_363 = fma(temp_361, temp_361, temp_362);
            // 0x000BC8: 0x508000000057360C Mufu
            temp_364 = inversesqrt(temp_363);
            // 0x000BD0: 0x5080000000873636 Mufu
            temp_365 = sqrt(temp_363);
            // 0x000BD8: 0x5C68100000C7320D Fmul
            temp_366 = temp_354 * temp_364;
            // 0x000BE8: 0x5C68100000C73537 Fmul
            temp_367 = temp_356 * temp_364;
            // 0x000BF0: 0x5C69100001470D0D Fmul
            temp_368 = 0.0 - temp_348;
            temp_369 = temp_366 * temp_368;
            // 0x000BF8: 0x5C68100000C71114 Fmul
            temp_370 = temp_361 * temp_364;
            // 0x000C08: 0xEF95008003872910 Ldc
            temp_371 = temp_325 + 56;
            temp_372 = uint(temp_371) >> 2;
            temp_373 = temp_372 >> 2;
            temp_374 = int(temp_372) & 3;
            temp_375 = fp_c8.data[int(temp_373)][temp_374];
            temp_376 = int(temp_372) + 1;
            temp_377 = uint(temp_376) >> 2;
            temp_378 = temp_376 & 3;
            temp_379 = fp_c8.data[int(temp_377)][temp_378];
            // 0x000C10: 0x59A1068001573737 Ffma
            temp_380 = 0.0 - temp_352;
            temp_381 = fma(temp_367, temp_380, temp_369);
            // 0x000C18: 0xEF94008002872915 Ldc
            temp_382 = temp_325 + 40;
            temp_383 = uint(temp_382) >> 2;
            temp_384 = temp_383 >> 2;
            temp_385 = int(temp_383) & 3;
            temp_386 = fp_c8.data[int(temp_384)][temp_385];
            // 0x000C28: 0xEF9500800307290C Ldc
            temp_387 = temp_325 + 48;
            temp_388 = uint(temp_387) >> 2;
            temp_389 = temp_388 >> 2;
            temp_390 = int(temp_388) & 3;
            temp_391 = fp_c8.data[int(temp_389)][temp_390];
            temp_392 = int(temp_388) + 1;
            temp_393 = uint(temp_392) >> 2;
            temp_394 = temp_392 & 3;
            temp_395 = fp_c8.data[int(temp_393)][temp_394];
            // 0x000C30: 0x59A11B8001571414 Ffma
            temp_396 = 0.0 - temp_386;
            temp_397 = fma(temp_370, temp_396, temp_381);
            // 0x000C38: 0x59A4068003670C36 Ffma
            temp_398 = fma(temp_391, temp_365, temp_395);
            temp_399 = clamp(temp_398, 0.0, 1.0);
            // 0x000C48: 0x010404000007F015 Mov32i
            // 0x000C50: 0x59A4088001071410 Ffma
            temp_400 = fma(temp_397, temp_375, temp_379);
            temp_401 = clamp(temp_400, 0.0, 1.0);
            // 0x000C58: 0x5C68100003673611 Fmul
            temp_402 = temp_399 * temp_399;
            // 0x000C68: 0x33A00AC000073614 Ffma
            temp_403 = fma(temp_399, -2.0, 3.0);
            // 0x000C70: 0x33A00AC000071015 Ffma
            temp_404 = fma(temp_401, -2.0, 3.0);
            // 0x000C78: 0x5C68100001071010 Fmul
            temp_405 = temp_401 * temp_401;
            // 0x000C88: 0x5C68100001171411 Fmul
            temp_406 = temp_403 * temp_402;
            // 0x000C90: 0x39585042F0073314 Fadd
            temp_407 = abs(temp_358);
            temp_408 = temp_407 + -120.0;
            // 0x000C98: 0x5C68100001571010 Fmul
            temp_409 = temp_405 * temp_404;
            // 0x000CA8: 0x5C68100001171010 Fmul
            temp_410 = temp_409 * temp_406;
            // 0x000CB0: 0x1EABD4CCCCD71411 Fmul32i
            temp_411 = temp_408 * -0.0500000007;
            temp_412 = clamp(temp_411, 0.0, 1.0);
            // 0x000CB8: 0x5C68100001071110 Fmul
            temp_413 = temp_412 * temp_410;
            // 0x000CC8: 0x36247F9000171111 Xmad
            temp_414 = floatBitsToUint(temp_412) >> 16;
            temp_415 = int(temp_414) << 16;
            // 0x000CD0: 0x5BB383800FF71007 Fsetp
            temp_416 = temp_413 <= 0.0;
            // 0x000CD8: 0x7A05083C0F00FF11 Hadd2
            temp_311 = temp_315;
            temp_417 = uint(temp_415);
            temp_418 = temp_299;
            temp_419 = temp_300;
            temp_420 = temp_301;
            temp_421 = temp_302;
            temp_422 = temp_303;
            temp_423 = temp_304;
            if (temp_416)
            {
                temp_424 = unpackHalf2x16(uint(temp_415)).y;
                temp_425 = packHalf2x16(vec2(1.0, temp_424));
                temp_417 = temp_425;
            }
            // 0x000CE8: 0x5D2103902FF71107 Hsetp2
            temp_426 = unpackHalf2x16(temp_417).x;
            temp_427 = temp_426 == 0.0;
            // 0x000CF0: 0xF0F800000008000F Sync
            if (temp_427)
            {
                // 0x000CF8: 0x5080000000470C0C Mufu
                temp_428 = 1.0 / temp_391;
                // 0x000D08: 0xEF94008002C72936 Ldc
                temp_429 = temp_325 + 44;
                temp_430 = uint(temp_429) >> 2;
                temp_431 = temp_430 >> 2;
                temp_432 = int(temp_430) & 3;
                temp_433 = fp_c8.data[int(temp_431)][temp_432];
                // 0x000D10: 0xEF94008000872937 Ldc
                temp_434 = temp_325 + 8;
                temp_435 = uint(temp_434) >> 2;
                temp_436 = temp_435 >> 2;
                temp_437 = int(temp_435) & 3;
                temp_438 = fp_c8.data[int(temp_436)][temp_437];
                // 0x000D18: 0x5C69100000C70D0D Fmul
                temp_439 = 0.0 - temp_428;
                temp_440 = temp_395 * temp_439;
                // 0x000D28: 0x5C60138000D73333 Fmnmx
                temp_441 = min(temp_358, temp_440);
                // 0x000D30: 0x5C61178003370D33 Fmnmx
                temp_442 = 0.0 - temp_440;
                temp_443 = max(temp_442, temp_441);
                // 0x000D38: 0x59A01A0003373315 Ffma
                temp_444 = fma(temp_443, temp_443, temp_362);
                // 0x000D48: 0x508000000057150C Mufu
                temp_445 = inversesqrt(temp_444);
                // 0x000D50: 0x5080000000871515 Mufu
                temp_446 = sqrt(temp_444);
                // 0x000D58: 0x5C68100000C73211 Fmul
                temp_447 = temp_354 * temp_445;
                // 0x000D68: 0x5080000000473636 Mufu
                temp_448 = 1.0 / temp_433;
                // 0x000D70: 0x5C68100000C73535 Fmul
                temp_449 = temp_356 * temp_445;
                // 0x000D78: 0x5C68100000C73333 Fmul
                temp_450 = temp_443 * temp_445;
                // 0x000D88: 0x5C68100003771037 Fmul
                temp_451 = temp_413 * temp_438;
                // 0x000D90: 0x5C58100001172114 Fadd
                temp_452 = temp_122 + temp_447;
                // 0x000D98: 0x5C58100003572034 Fadd
                temp_453 = temp_125 + temp_449;
                // 0x000DA8: 0x5C58100003371632 Fadd
                temp_454 = temp_128 + temp_450;
                // 0x000DB0: 0x5C6810000147140C Fmul
                temp_455 = temp_452 * temp_452;
                // 0x000DB8: 0x51A00A8400373615 Ffma
                temp_456 = fma(temp_448, temp_446, fp_c1.data[0].w);
                // 0x000DC8: 0x5080000000471515 Mufu
                temp_457 = 1.0 / temp_456;
                // 0x000DD0: 0x59A006000347340C Ffma
                temp_458 = fma(temp_453, temp_453, temp_455);
                // 0x000DD8: 0x59A006000327320C Ffma
                temp_459 = fma(temp_454, temp_454, temp_458);
                // 0x000DE8: 0x5080000000570C0C Mufu
                temp_460 = inversesqrt(temp_459);
                // 0x000DF0: 0x1E23FB3333371515 Fmul32i
                temp_461 = temp_457 * 1.39999998;
                // 0x000DF8: 0x5C68100001571515 Fmul
                temp_462 = temp_461 * temp_461;
                // 0x000E08: 0x5C68100000C71414 Fmul
                temp_463 = temp_452 * temp_460;
                // 0x000E10: 0x5C68100000C73434 Fmul
                temp_464 = temp_453 * temp_460;
                // 0x000E18: 0x5C68100000C73232 Fmul
                temp_465 = temp_454 * temp_460;
                // 0x000E28: 0xEF9500800007290C Ldc
                temp_466 = uint(temp_325) >> 2;
                temp_467 = temp_466 >> 2;
                temp_468 = int(temp_466) & 3;
                temp_469 = fp_c8.data[int(temp_467)][temp_468];
                temp_470 = int(temp_466) + 1;
                temp_471 = uint(temp_470) >> 2;
                temp_472 = temp_470 & 3;
                temp_473 = fp_c8.data[int(temp_471)][temp_472];
                // 0x000E30: 0x5C68100001471129 Fmul
                temp_474 = temp_447 * temp_463;
                // 0x000E38: 0x5C68100001470E14 Fmul
                temp_475 = temp_129 * temp_463;
                // 0x000E48: 0x5C68100001170E11 Fmul
                temp_476 = temp_129 * temp_447;
                // 0x000E50: 0x59A0148003473529 Ffma
                temp_477 = fma(temp_449, temp_464, temp_474);
                // 0x000E58: 0x59A00A0003470114 Ffma
                temp_478 = fma(temp_130, temp_464, temp_475);
                // 0x000E68: 0x01040DF760C7F034 Mov32i
                // 0x000E70: 0x59A0088003570111 Ffma
                temp_479 = fma(temp_130, temp_449, temp_476);
                // 0x000E78: 0x59A4148003273329 Ffma
                temp_480 = fma(temp_450, temp_465, temp_477);
                temp_481 = clamp(temp_480, 0.0, 1.0);
                // 0x000E88: 0x59A40A0003271214 Ffma
                temp_482 = fma(temp_131, temp_465, temp_478);
                temp_483 = clamp(temp_482, 0.0, 1.0);
                // 0x000E90: 0x59A0088003371211 Ffma
                temp_484 = fma(temp_131, temp_450, temp_479);
                // 0x000E98: 0x49A21A0400072932 Ffma
                temp_485 = fma(temp_481, fp_c1.data[0].x, -6.98316002);
                // 0x000EA8: 0x59A20A0001473033 Ffma
                temp_486 = 0.0 - temp_483;
                temp_487 = fma(temp_187, temp_483, temp_486);
                // 0x000EB0: 0x59A10A8001571115 Ffma
                temp_488 = 0.0 - temp_462;
                temp_489 = fma(temp_484, temp_488, temp_462);
                // 0x000EB8: 0x5C68100003272932 Fmul
                temp_490 = temp_481 * temp_485;
                // 0x000EC8: 0x5C5C30000FF71129 Fadd
                temp_491 = temp_484 + -0.0;
                temp_492 = clamp(temp_491, 0.0, 1.0);
                // 0x000ED0: 0x51A0198400271433 Ffma
                temp_493 = fma(temp_483, temp_487, fp_c1.data[0].z);
                // 0x000ED8: 0x5C5C100001571115 Fadd
                temp_494 = temp_484 + temp_489;
                temp_495 = clamp(temp_494, 0.0, 1.0);
                // 0x000EE8: 0x5080000000473333 Mufu
                temp_496 = 1.0 / temp_493;
                // 0x000EF0: 0x5C90008003270032 Rro
                // 0x000EF8: 0x59A1148002972F14 Ffma
                temp_497 = 0.0 - temp_492;
                temp_498 = fma(temp_189, temp_497, temp_492);
                // 0x000F08: 0x5080000000273232 Mufu
                temp_499 = exp2(temp_490);
                // 0x000F10: 0x5C58100001472F14 Fadd
                temp_500 = temp_189 + temp_498;
                // 0x000F18: 0x5080000000471414 Mufu
                temp_501 = 1.0 / temp_500;
                // 0x000F28: 0x5C68100000C7100C Fmul
                temp_502 = temp_413 * temp_469;
                // 0x000F30: 0x5C68100000D7100D Fmul
                temp_503 = temp_413 * temp_473;
                // 0x000F38: 0x5C68100003373133 Fmul
                temp_504 = temp_180 * temp_496;
                // 0x000F48: 0x59A1190003270511 Ffma
                temp_505 = 0.0 - temp_499;
                temp_506 = fma(temp_204, temp_505, temp_499);
                // 0x000F50: 0x59A1190003270910 Ffma
                temp_507 = 0.0 - temp_499;
                temp_508 = fma(temp_225, temp_507, temp_499);
                // 0x000F58: 0x59A1190003270A32 Ffma
                temp_509 = 0.0 - temp_499;
                temp_510 = fma(temp_229, temp_509, temp_499);
                // 0x000F68: 0x5C68100003373333 Fmul
                temp_511 = temp_504 * temp_504;
                // 0x000F70: 0x5C58100001170511 Fadd
                temp_512 = temp_204 + temp_506;
                // 0x000F78: 0x5C58100001070910 Fadd
                temp_513 = temp_225 + temp_508;
                // 0x000F88: 0x5C68100001472C14 Fmul
                temp_514 = temp_246 * temp_501;
                // 0x000F90: 0x5C58100003270A32 Fadd
                temp_515 = temp_229 + temp_510;
                // 0x000F98: 0x4C68101406271111 Fmul
                temp_516 = temp_512 * fp_c5.data[24].z;
                // 0x000FA8: 0x4C68101406271010 Fmul
                temp_517 = temp_513 * fp_c5.data[24].z;
                // 0x000FB0: 0x5C68100001473314 Fmul
                temp_518 = temp_511 * temp_514;
                // 0x000FB8: 0x4C68101406273232 Fmul
                temp_519 = temp_515 * fp_c5.data[24].z;
                // 0x000FC8: 0x5C68100001170C11 Fmul
                temp_520 = temp_502 * temp_516;
                // 0x000FD0: 0x5C68100001570C0C Fmul
                temp_521 = temp_502 * temp_495;
                // 0x000FD8: 0x5C68100001472914 Fmul
                temp_522 = temp_492 * temp_518;
                // 0x000FE8: 0x5C68100001070D29 Fmul
                temp_523 = temp_503 * temp_517;
                // 0x000FF0: 0x5C68100003273732 Fmul
                temp_524 = temp_451 * temp_519;
                // 0x000FF8: 0x5C68100001570D0D Fmul
                temp_525 = temp_503 * temp_495;
                // 0x001008: 0x5C68100001573715 Fmul
                temp_526 = temp_451 * temp_495;
                // 0x001010: 0x49A0138400570C27 Ffma
                temp_527 = fma(temp_521, fp_c1.data[1].y, temp_299);
                // 0x001018: 0x5C68100001471110 Fmul
                temp_528 = temp_520 * temp_522;
                // 0x001028: 0x5C68100001472929 Fmul
                temp_529 = temp_523 * temp_522;
                // 0x001030: 0x5C68100001473232 Fmul
                temp_530 = temp_524 * temp_522;
                // 0x001038: 0x49A0098400570D13 Ffma
                temp_531 = fma(temp_525, fp_c1.data[1].y, temp_300);
                // 0x001048: 0x49A00C0400571518 Ffma
                temp_532 = fma(temp_526, fp_c1.data[1].y, temp_301);
                // 0x001050: 0x49A00C8400471019 Ffma
                temp_533 = fma(temp_528, fp_c1.data[1].x, temp_302);
                // 0x001058: 0x49A00D040047291A Ffma
                temp_534 = fma(temp_529, fp_c1.data[1].x, temp_303);
                // 0x001068: 0x49A00D840047321B Ffma
                temp_535 = fma(temp_530, fp_c1.data[1].x, temp_304);
                // 0x001070: 0xF0F800000007000F Sync
                temp_418 = temp_527;
                temp_419 = temp_531;
                temp_420 = temp_532;
                temp_421 = temp_533;
                temp_422 = temp_534;
                temp_423 = temp_535;
            }
            // 0x001078: 0xE2400FFFA309000F Bra
            temp_299 = temp_418;
            temp_300 = temp_419;
            temp_301 = temp_420;
            temp_302 = temp_421;
            temp_303 = temp_422;
            temp_304 = temp_423;
            temp_305 = temp_422;
            temp_306 = temp_421;
            temp_307 = temp_419;
            temp_308 = temp_420;
            temp_309 = temp_423;
            temp_310 = temp_418;
        }
        while (!temp_312);
        // 0x001088: 0xF0F800000007000F Sync
    }
    // 0x001090: 0x5C62578002872B0D Fmnmx
    temp_536 = abs(temp_287);
    temp_537 = abs(temp_245);
    temp_538 = max(temp_536, temp_537);
    // 0x001098: 0xE003FF87CFF7FF2C Ipa
    // 0x0010A8: 0x5C62578000170E0C Fmnmx
    temp_539 = abs(temp_129);
    temp_540 = abs(temp_130);
    temp_541 = max(temp_539, temp_540);
    // 0x0010B0: 0xEF4410000007FF32 Ldl
    temp_542 = uintBitsToFloat(local_memory[0]);
    // 0x0010B8: 0x010000000017F014 Mov32i
    // 0x0010C8: 0x3868104080070221 Fmul
    temp_543 = temp_175 * 4.0;
    // 0x0010D0: 0x4C98079C0207002F Mov
    // 0x0010D8: 0x5C60578000D7170D Fmnmx
    temp_544 = abs(temp_289);
    temp_545 = max(temp_544, temp_538);
    // 0x0010E8: 0x5080000000470D0D Mufu
    temp_546 = 1.0 / temp_545;
    // 0x0010F0: 0x5C60578000C7120C Fmnmx
    temp_547 = abs(temp_131);
    temp_548 = max(temp_547, temp_541);
    // 0x0010F8: 0x5080000000470C0C Mufu
    temp_549 = 1.0 / temp_548;
    // 0x001108: 0x5C68100000D72816 Fmul
    temp_550 = temp_245 * temp_546;
    // 0x001110: 0x5C68100000D72B15 Fmul
    temp_551 = temp_287 * temp_546;
    // 0x001118: 0x5080000000472C2C Mufu
    // 0x001128: 0x5C69100000C71212 Fmul
    temp_552 = 0.0 - temp_549;
    temp_553 = temp_131 * temp_552;
    // 0x001130: 0x5C68100000C70E10 Fmul
    temp_554 = temp_129 * temp_549;
    // 0x001138: 0x5C68100000C70111 Fmul
    temp_555 = temp_130 * temp_549;
    // 0x001148: 0x5C69100000D71717 Fmul
    temp_556 = 0.0 - temp_546;
    temp_557 = temp_289 * temp_556;
    // 0x001150: 0xC0BA0163EFF7100C Tex
    temp_558 = textureLod(fp_t_tcb_16, vec3(temp_554, temp_555, temp_553), 0.0).xyz;
    temp_559 = temp_558.x;
    temp_560 = temp_558.y;
    temp_561 = temp_558.z;
    // 0x001158: 0x38681040E007022B Fmul
    temp_562 = temp_175 * 7.0;
    // 0x001168: 0xE043FF9202C7FF28 Ipa
    temp_563 = in_attr10.x;
    // 0x001170: 0x5C98078001270020 Mov
    // 0x001178: 0xE043FF9242C7FF29 Ipa
    temp_564 = in_attr10.y;
    // 0x001188: 0x3859103F80070202 Fadd
    temp_565 = 0.0 - temp_175;
    temp_566 = temp_565 + 1.0;
    // 0x001190: 0xE043FF9282C7FF2A Ipa
    temp_567 = in_attr10.z;
    // 0x001198: 0xC1BA0143F2B71414 Tex
    temp_568 = textureLod(fp_t_tcb_14, vec4(temp_551, temp_550, temp_557, float(1)), temp_562).xyz;
    temp_569 = temp_568.x;
    temp_570 = temp_568.y;
    temp_571 = temp_568.z;
    // 0x0011A8: 0xD9A2018202071010 Texs
    temp_572 = textureLod(fp_t_tcb_18, vec3(temp_554, temp_555, temp_553), temp_543).xyz;
    temp_573 = temp_572.x;
    temp_574 = temp_572.y;
    temp_575 = temp_572.z;
    // 0x0011B0: 0xDEBA0000C2F72828 TexB
    temp_576 = texture(fp_t_cb7_20, vec3(temp_563, temp_564, temp_567)).x;
    // 0x0011B8: 0x5C68100000270202 Fmul
    temp_577 = temp_566 * temp_566;
    // 0x0011C8: 0x49A012980A171A25 Ffma
    temp_578 = fma(temp_305, fp_c6.data[40].y, temp_297);
    // 0x0011D0: 0x3859103F8007081A Fadd
    temp_579 = 0.0 - temp_210;
    temp_580 = temp_579 + 1.0;
    // 0x0011D8: 0x49A012180A171924 Ffma
    temp_581 = fma(temp_306, fp_c6.data[40].y, temp_296);
    // 0x0011E8: 0x010410676C97F019 Mov32i
    // 0x0011F0: 0x49A005980A17130B Ffma
    temp_582 = fma(temp_307, fp_c6.data[40].y, temp_283);
    // 0x0011F8: 0x1E23E468DB970813 Fmul32i
    temp_583 = temp_210 * 0.193900004;
    // 0x001208: 0x5C68100000270212 Fmul
    temp_584 = temp_577 * temp_577;
    // 0x001210: 0x4C68101809071A02 Fmul
    temp_585 = temp_580 * fp_c6.data[36].x;
    // 0x001218: 0x49A007980A17180F Ffma
    temp_586 = fma(temp_308, fp_c6.data[40].y, temp_285);
    // 0x001228: 0x5080400000370202 Mufu
    temp_587 = abs(temp_585);
    temp_588 = log2(temp_587);
    // 0x001230: 0x0103E2CD9E87F018 Mov32i
    // 0x001238: 0x49A00C8400A70817 Ffma
    temp_589 = fma(temp_210, fp_c1.data[2].z, 8.40400028);
    // 0x001248: 0x49A0098400671213 Ffma
    temp_590 = fma(temp_584, fp_c1.data[1].z, temp_583);
    // 0x001250: 0x4C9807980B470021 Mov
    // 0x001258: 0x49A013180A171B26 Ffma
    temp_591 = fma(temp_309, fp_c6.data[40].y, temp_298);
    // 0x001268: 0x49A20C0400D7121B Ffma
    temp_592 = fma(temp_584, fp_c1.data[3].y, -0.168799996);
    // 0x001270: 0x51A00B8400B7081A Ffma
    temp_593 = fma(temp_210, temp_589, fp_c1.data[2].w);
    // 0x001278: 0x088BF05D63971319 Fadd32i
    temp_594 = temp_590 + -0.522800028;
    // 0x001288: 0xF0F0000034470000 Depbar
    // 0x001290: 0xE04BFF9042C7FF13 Ipa
    temp_595 = in_attr8.y;
    temp_596 = clamp(temp_595, 0.0, 1.0);
    // 0x001298: 0x51A210980B471E1E Ffma
    temp_597 = 0.0 - fp_c6.data[45].x;
    temp_598 = fma(temp_40, fp_c6.data[45].x, temp_597);
    // 0x0012A8: 0x51A210980B471F1F Ffma
    temp_599 = 0.0 - fp_c6.data[45].x;
    temp_600 = fma(temp_41, fp_c6.data[45].x, temp_599);
    // 0x0012B0: 0x51A210980B470000 Ffma
    temp_601 = 0.0 - fp_c6.data[45].x;
    temp_602 = fma(temp_42, fp_c6.data[45].x, temp_601);
    // 0x0012B8: 0x0104066978D7F021 Mov32i
    // 0x0012C8: 0x51A00D0400C70818 Ffma
    temp_603 = fma(temp_210, temp_593, fp_c1.data[3].x);
    // 0x0012D0: 0x5C68100001B7121B Fmul
    temp_604 = temp_584 * temp_592;
    // 0x0012D8: 0x4C68101809170202 Fmul
    temp_605 = temp_588 * fp_c6.data[36].y;
    // 0x0012E8: 0x0103F0000007F02A Mov32i
    // 0x0012F0: 0x4C9807980977001A Mov
    // 0x0012F8: 0x49A2108400771221 Ffma
    temp_606 = fma(temp_584, fp_c1.data[1].w, -3.60299993);
    // 0x001308: 0x5C68100001970819 Fmul
    temp_607 = temp_210 * temp_594;
    // 0x001310: 0x4C98079800970008 Mov
    // 0x001318: 0x5C60138001B71818 Fmnmx
    temp_608 = min(temp_603, temp_604);
    // 0x001328: 0x4C98079800A70029 Mov
    // 0x001330: 0x5C9000800027001B Rro
    // 0x001338: 0x51A010840087122B Ffma
    temp_609 = fma(temp_584, temp_606, fp_c1.data[2].x);
    // 0x001348: 0x5084000000271B1B Mufu
    temp_610 = exp2(temp_605);
    temp_611 = clamp(temp_610, 0.0, 1.0);
    // 0x001350: 0x32A0153F00070117 Ffma
    temp_612 = fma(temp_130, 0.5, 0.5);
    // 0x001358: 0x4C98079800870001 Mov
    // 0x001368: 0x4C58101407E71A1A Fadd
    temp_613 = fp_c6.data[37].w + fp_c5.data[31].z;
    // 0x001370: 0x4C59101800570802 Fadd
    temp_614 = 0.0 - fp_c6.data[2].y;
    temp_615 = temp_614 + fp_c6.data[1].y;
    // 0x001378: 0x4C59101800672908 Fadd
    temp_616 = 0.0 - fp_c6.data[2].z;
    temp_617 = temp_616 + fp_c6.data[1].z;
    // 0x001388: 0x59A00C8002B71219 Ffma
    temp_618 = fma(temp_584, temp_609, temp_607);
    // 0x001390: 0x010404000007F029 Mov32i
    // 0x001398: 0x4C98079407F7002A Mov
    // 0x0013A8: 0x4C59101800470101 Fadd
    temp_619 = 0.0 - fp_c6.data[2].x;
    temp_620 = temp_619 + fp_c6.data[1].x;
    // 0x0013B0: 0x5C5C30000FF71818 Fadd
    temp_621 = temp_608 + -0.0;
    temp_622 = clamp(temp_621, 0.0, 1.0);
    // 0x0013B8: 0x51A0011800971702 Ffma
    temp_623 = fma(temp_612, temp_615, fp_c6.data[2].y);
    // 0x0013C8: 0x4C5C100400971919 Fadd
    temp_624 = temp_618 + fp_c1.data[2].y;
    temp_625 = clamp(temp_624, 0.0, 1.0);
    // 0x0013D0: 0x5C68100001B71A1A Fmul
    temp_626 = temp_613 * temp_611;
    // 0x0013D8: 0x386C10424807091B Fmul
    temp_627 = temp_225 * 50.0;
    temp_628 = clamp(temp_627, 0.0, 1.0);
    // 0x0013E8: 0x33A014C000071329 Ffma
    temp_629 = fma(temp_596, -2.0, 3.0);
    // 0x0013F0: 0x5C68100001371312 Fmul
    temp_630 = temp_596 * temp_596;
    // 0x0013F8: 0x51A0009800871701 Ffma
    temp_631 = fma(temp_612, temp_620, fp_c6.data[2].x);
    // 0x001408: 0x51A0041800A71708 Ffma
    temp_632 = fma(temp_612, temp_617, fp_c6.data[2].z);
    // 0x001410: 0x4C68101406272A21 Fmul
    temp_633 = fp_c5.data[31].w * fp_c5.data[24].z;
    // 0x001418: 0x4C68101808D71A13 Fmul
    temp_634 = temp_626 * fp_c6.data[35].y;
    // 0x001428: 0x4C68101808E71A17 Fmul
    temp_635 = temp_626 * fp_c6.data[35].z;
    // 0x001430: 0x5C68100001B7181B Fmul
    temp_636 = temp_622 * temp_628;
    // 0x001438: 0x5C58300001871930 Fadd
    temp_637 = 0.0 - temp_622;
    temp_638 = temp_625 + temp_637;
    // 0x001448: 0x4C68101808C71A1A Fmul
    temp_639 = temp_626 * fp_c6.data[35].x;
    // 0x001450: 0x5C68100002971212 Fmul
    temp_640 = temp_630 * temp_629;
    // 0x001458: 0x59A0128002171325 Ffma
    temp_641 = fma(temp_634, temp_633, temp_578);
    // 0x001468: 0x49A1099407F71318 Ffma
    temp_642 = 0.0 - fp_c5.data[31].w;
    temp_643 = fma(temp_634, temp_642, temp_634);
    // 0x001470: 0x49A10B9407F71719 Ffma
    temp_644 = 0.0 - fp_c5.data[31].w;
    temp_645 = fma(temp_635, temp_644, temp_635);
    // 0x001478: 0x59A00D8003070513 Ffma
    temp_646 = fma(temp_204, temp_638, temp_636);
    // 0x001488: 0xE043FF9002C7FF05 Ipa
    temp_647 = in_attr8.x;
    // 0x001490: 0x59A0120002171A24 Ffma
    temp_648 = fma(temp_639, temp_633, temp_581);
    // 0x001498: 0x49A10D1407F71A1A Ffma
    temp_649 = 0.0 - fp_c5.data[31].w;
    temp_650 = fma(temp_639, temp_649, temp_639);
    // 0x0014A8: 0x59A00D8003070909 Ffma
    temp_651 = fma(temp_225, temp_638, temp_636);
    // 0x0014B0: 0x5C58100001870B0B Fadd
    temp_652 = temp_582 + temp_643;
    // 0x0014B8: 0x59A00D8003070A0A Ffma
    temp_653 = fma(temp_229, temp_638, temp_636);
    // 0x0014C8: 0x4C68101406271313 Fmul
    temp_654 = temp_646 * fp_c5.data[24].z;
    // 0x0014D0: 0x5C58100001970F0F Fadd
    temp_655 = temp_586 + temp_645;
    // 0x0014D8: 0x59A0130002171726 Ffma
    temp_656 = fma(temp_635, temp_633, temp_591);
    // 0x0014E8: 0x4C68101803771212 Fmul
    temp_657 = temp_640 * fp_c6.data[13].w;
    // 0x0014F0: 0xF0F0000034370000 Depbar
    // 0x0014F8: 0x49A019180A172727 Ffma
    temp_658 = fma(temp_310, fp_c6.data[40].y, temp_542);
    // 0x001508: 0x5C58100001A7271A Fadd
    temp_659 = temp_658 + temp_650;
    // 0x001510: 0xF0F0000034270000 Depbar
    // 0x001518: 0x49A0068400570202 Ffma
    temp_660 = fma(temp_623, fp_c1.data[1].y, temp_560);
    // 0x001528: 0x49A0060400570101 Ffma
    temp_661 = fma(temp_631, fp_c1.data[1].y, temp_559);
    // 0x001530: 0x49A0070400570808 Ffma
    temp_662 = fma(temp_632, fp_c1.data[1].y, temp_561);
    // 0x001538: 0x4C9807980297000E Mov
    // 0x001548: 0x5C58100000270B02 Fadd
    temp_663 = temp_652 + temp_660;
    // 0x001550: 0x5C58100000171A01 Fadd
    temp_664 = temp_659 + temp_661;
    // 0x001558: 0x4C6810140627090B Fmul
    temp_665 = temp_651 * fp_c5.data[24].z;
    // 0x001568: 0x5C58100000870F08 Fadd
    temp_666 = temp_655 + temp_662;
    // 0x001570: 0x51A0071802971F1F Ffma
    temp_667 = fma(temp_600, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001578: 0xF0F0000034170000 Depbar
    // 0x001588: 0x49A008180857140D Ffma
    temp_668 = fma(temp_569, fp_c6.data[33].y, temp_573);
    // 0x001590: 0x49A008980857150C Ffma
    temp_669 = fma(temp_570, fp_c6.data[33].y, temp_574);
    // 0x001598: 0x59A1008000172301 Ffma
    temp_670 = 0.0 - temp_664;
    temp_671 = fma(temp_32, temp_670, temp_664);
    // 0x0015A8: 0x49A0101808571620 Ffma
    temp_672 = fma(temp_571, fp_c6.data[33].y, temp_575);
    // 0x0015B0: 0x59A1010000272309 Ffma
    temp_673 = 0.0 - temp_663;
    temp_674 = fma(temp_32, temp_673, temp_663);
    // 0x0015B8: 0x59A1040000872308 Ffma
    temp_675 = 0.0 - temp_666;
    temp_676 = fma(temp_32, temp_675, temp_666);
    // 0x0015C8: 0x59A0120000D71313 Ffma
    temp_677 = fma(temp_654, temp_668, temp_648);
    // 0x0015D0: 0x59A0128000C70B0C Ffma
    temp_678 = fma(temp_665, temp_669, temp_641);
    // 0x0015D8: 0x4C68101406270A0B Fmul
    temp_679 = temp_653 * fp_c5.data[24].z;
    // 0x0015E8: 0x4C9807980287000D Mov
    // 0x0015F0: 0x4C98079802A70002 Mov
    // 0x0015F8: 0x59A0098000170401 Ffma
    temp_680 = fma(temp_185, temp_671, temp_677);
    // 0x001608: 0x59A006000097060C Ffma
    temp_681 = fma(temp_206, temp_674, temp_678);
    // 0x001610: 0x59A0130002070B26 Ffma
    temp_682 = fma(temp_679, temp_672, temp_656);
    // 0x001618: 0x51A0069802871E1E Ffma
    temp_683 = fma(temp_598, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001628: 0x51A0011802A70000 Ffma
    temp_684 = fma(temp_602, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001630: 0x5C68100000171C1C Fmul
    temp_685 = temp_291 * temp_680;
    // 0x001638: 0x5C68100000C71D1D Fmul
    temp_686 = temp_293 * temp_681;
    // 0x001648: 0x59A0130000870708 Ffma
    temp_687 = fma(temp_208, temp_676, temp_682);
    // 0x001650: 0x49A2091803571207 Ffma
    temp_688 = 0.0 - temp_657;
    temp_689 = fma(temp_657, fp_c6.data[13].y, temp_688);
    // 0x001658: 0x5C58300001E71C01 Fadd
    temp_690 = 0.0 - temp_683;
    temp_691 = temp_685 + temp_690;
    // 0x001668: 0x5C58300001F71D02 Fadd
    temp_692 = 0.0 - temp_667;
    temp_693 = temp_686 + temp_692;
    // 0x001670: 0x5C68100000872222 Fmul
    temp_694 = temp_295 * temp_687;
    // 0x001678: 0xE043FF8C82C7FF08 Ipa
    temp_695 = in_attr4.z;
    // 0x001688: 0x49A502980BC72805 Ffma
    temp_696 = 0.0 - fp_c6.data[47].x;
    temp_697 = fma(temp_576, temp_696, temp_647);
    temp_698 = clamp(temp_697, 0.0, 1.0);
    // 0x001690: 0x5080000000370505 Mufu
    temp_699 = log2(temp_698);
    // 0x001698: 0x49A00F180BF70104 Ffma
    temp_700 = fma(temp_691, fp_c6.data[47].w, temp_683);
    // 0x0016A8: 0x5C58300000072201 Fadd
    temp_701 = 0.0 - temp_684;
    temp_702 = temp_694 + temp_701;
    // 0x0016B0: 0x49A00F980BF70202 Ffma
    temp_703 = fma(temp_693, fp_c6.data[47].w, temp_667);
    // 0x0016B8: 0x5C60178000471E04 Fmnmx
    temp_704 = max(temp_683, temp_700);
    // 0x0016C8: 0x49A000180BF70101 Ffma
    temp_705 = fma(temp_702, fp_c6.data[47].w, temp_684);
    // 0x0016D0: 0x5C60178000271F02 Fmnmx
    temp_706 = max(temp_667, temp_703);
    // 0x0016D8: 0x4C68101803170506 Fmul
    temp_707 = temp_699 * fp_c6.data[12].y;
    // 0x0016E8: 0x49A2091803471205 Ffma
    temp_708 = 0.0 - temp_657;
    temp_709 = fma(temp_657, fp_c6.data[13].x, temp_708);
    // 0x0016F0: 0x49A2091803671212 Ffma
    temp_710 = 0.0 - temp_657;
    temp_711 = fma(temp_657, fp_c6.data[13].z, temp_710);
    // 0x0016F8: 0x5C60178000170001 Fmnmx
    temp_712 = max(temp_684, temp_705);
    // 0x001708: 0x59A0010000770202 Ffma
    temp_713 = fma(temp_706, temp_689, temp_706);
    // 0x001710: 0x5C90008000670006 Rro
    // 0x001718: 0x59A0020000570405 Ffma
    temp_714 = fma(temp_704, temp_709, temp_704);
    // 0x001728: 0x5080000000270606 Mufu
    temp_715 = exp2(temp_707);
    // 0x001730: 0x59A0008001270104 Ffma
    temp_716 = fma(temp_712, temp_711, temp_712);
    // 0x001738: 0x5C59100000271D02 Fadd
    temp_717 = 0.0 - temp_686;
    temp_718 = temp_717 + temp_713;
    // 0x001748: 0x4C58100C03870808 Fadd
    temp_719 = temp_695 + fp_c3.data[14].x;
    // 0x001750: 0x5C59100000571C01 Fadd
    temp_720 = 0.0 - temp_685;
    temp_721 = temp_720 + temp_714;
    // 0x001758: 0x5C59100000472204 Fadd
    temp_722 = 0.0 - temp_694;
    temp_723 = temp_722 + temp_716;
    // 0x001768: 0x0103F0000007F005 Mov32i
    // 0x001770: 0x4C68101802B70607 Fmul
    temp_724 = temp_715 * fp_c6.data[10].w;
    // 0x001778: 0x5C9807800FF70006 Mov
    // 0x001788: 0x59A00E0000770100 Ffma
    temp_725 = fma(temp_721, temp_724, temp_685);
    // 0x001790: 0x59A00E8000770201 Ffma
    temp_726 = fma(temp_718, temp_724, temp_686);
    // 0x001798: 0x59A0110000770402 Ffma
    temp_727 = fma(temp_723, temp_724, temp_694);
    // 0x0017A8: 0x5C98078000370007 Mov
    // 0x0017B0: 0x49A37F8C03C70804 Ffma
    temp_728 = 0.0 - fp_c3.data[15].x;
    temp_729 = fma(temp_719, temp_728, -0.0);
    // 0x0017B8: 0xE30000000007000F Exit
    out_attr0.x = temp_725;
    out_attr0.y = temp_726;
    out_attr0.z = temp_727;
    out_attr0.w = temp_28;
    out_attr1.x = temp_729;
    out_attr1.y = 0.5;
    out_attr1.z = 0.0;
    out_attr1.w = temp_28;
    return;
}
