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

uint local_memory[16];
layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_36;
layout (binding = 2) uniform sampler2D fp_t_tcb_24;
layout (binding = 3) uniform sampler2D fp_t_tcb_28;
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
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise vec2 temp_10;
    precise float temp_11;
    precise float temp_12;
    precise vec3 temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise vec3 temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise vec3 temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise vec3 temp_25;
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
    uint temp_153;
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
    bool temp_244;
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
    int temp_288;
    bool temp_289;
    int temp_290;
    int temp_291;
    int temp_292;
    int temp_293;
    int temp_294;
    uint temp_295;
    uint temp_296;
    int temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    int temp_302;
    int temp_303;
    uint temp_304;
    uint temp_305;
    int temp_306;
    precise float temp_307;
    int temp_308;
    uint temp_309;
    int temp_310;
    precise float temp_311;
    int temp_312;
    uint temp_313;
    uint temp_314;
    int temp_315;
    precise float temp_316;
    int temp_317;
    uint temp_318;
    int temp_319;
    precise float temp_320;
    int temp_321;
    uint temp_322;
    uint temp_323;
    int temp_324;
    precise float temp_325;
    int temp_326;
    uint temp_327;
    int temp_328;
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
    precise float temp_340;
    precise float temp_341;
    precise float temp_342;
    precise float temp_343;
    precise float temp_344;
    precise float temp_345;
    precise float temp_346;
    precise float temp_347;
    int temp_348;
    uint temp_349;
    uint temp_350;
    int temp_351;
    precise float temp_352;
    precise float temp_353;
    precise float temp_354;
    int temp_355;
    uint temp_356;
    uint temp_357;
    int temp_358;
    precise float temp_359;
    int temp_360;
    uint temp_361;
    int temp_362;
    precise float temp_363;
    precise float temp_364;
    precise float temp_365;
    int temp_366;
    uint temp_367;
    uint temp_368;
    int temp_369;
    precise float temp_370;
    int temp_371;
    uint temp_372;
    int temp_373;
    precise float temp_374;
    precise float temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    precise float temp_381;
    precise float temp_382;
    precise float temp_383;
    precise float temp_384;
    precise float temp_385;
    precise float temp_386;
    precise float temp_387;
    precise float temp_388;
    precise float temp_389;
    uint temp_390;
    int temp_391;
    precise float temp_392;
    bool temp_393;
    uint temp_394;
    precise float temp_395;
    precise float temp_396;
    precise float temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    uint temp_402;
    precise float temp_403;
    bool temp_404;
    precise float temp_405;
    int temp_406;
    uint temp_407;
    uint temp_408;
    int temp_409;
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
    precise float temp_436;
    precise float temp_437;
    precise float temp_438;
    uint temp_439;
    uint temp_440;
    int temp_441;
    precise float temp_442;
    int temp_443;
    uint temp_444;
    int temp_445;
    precise float temp_446;
    precise float temp_447;
    int temp_448;
    uint temp_449;
    uint temp_450;
    int temp_451;
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
    precise vec3 temp_534;
    precise float temp_535;
    precise float temp_536;
    precise float temp_537;
    precise vec3 temp_538;
    precise float temp_539;
    precise float temp_540;
    precise float temp_541;
    precise vec3 temp_542;
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
    // 0x000008: 0x0103F0000007F02C Mov32i
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0x5C9807800FF70027 Mov
    // 0x000028: 0xE003FF870FF7FF04 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000030: 0xE003FF874FF7FF05 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000038: 0x5080000000471010 Mufu
    // 0x000048: 0x4C68100C04A70404 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000050: 0x4C68100C04B70505 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000058: 0xE043FF8E0107FF06 Ipa
    temp_8 = in_attr6.x;
    // 0x000068: 0xE043FF8E4107FF09 Ipa
    temp_9 = in_attr6.y;
    // 0x000070: 0xD830026FF0970602 Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000078: 0xD8240360F0970622 Texs
    temp_13 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    temp_16 = temp_13.z;
    // 0x000088: 0xD82202413097060A Texs
    temp_17 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyz;
    temp_18 = temp_17.x;
    temp_19 = temp_17.y;
    temp_20 = temp_17.z;
    // 0x000090: 0xD82202811097060C Texs
    temp_21 = texture(fp_t_tcb_28, vec2(temp_8, temp_9)).xyz;
    temp_22 = temp_21.x;
    temp_23 = temp_21.y;
    temp_24 = temp_21.z;
    // 0x000098: 0xD82202000057041E Texs
    temp_25 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_26 = temp_25.x;
    temp_27 = temp_25.y;
    temp_28 = temp_25.z;
    // 0x0000A8: 0xE043FF8B0107FF28 Ipa
    temp_29 = in_attr3.x;
    // 0x0000B0: 0xE043FF8A0107FF01 Ipa
    temp_30 = in_attr2.x;
    // 0x0000B8: 0xE043FF890107FF12 Ipa
    temp_31 = in_attr1.x;
    // 0x0000C8: 0xE043FF8B4107FF21 Ipa
    temp_32 = in_attr3.y;
    // 0x0000D0: 0xE043FF8A4107FF07 Ipa
    temp_33 = in_attr2.y;
    // 0x0000D8: 0xE043FF894107FF14 Ipa
    temp_34 = in_attr1.y;
    // 0x0000E8: 0xE043FF8B8107FF20 Ipa
    temp_35 = in_attr3.z;
    // 0x0000F0: 0xE043FF8A8107FF08 Ipa
    temp_36 = in_attr2.z;
    // 0x0000F8: 0xE043FF898107FF15 Ipa
    temp_37 = in_attr1.z;
    // 0x000108: 0xE043FF880107FF1A Ipa
    temp_38 = in_attr0.x;
    // 0x000110: 0xE043FF884107FF1B Ipa
    temp_39 = in_attr0.y;
    // 0x000118: 0xE043FF888107FF1C Ipa
    temp_40 = in_attr0.z;
    // 0x000128: 0xE2900000DD000000 Ssy
    // 0x000130: 0x5C68100002872806 Fmul
    temp_41 = temp_29 * temp_29;
    // 0x000138: 0x5C68100000170109 Fmul
    temp_42 = temp_30 * temp_30;
    // 0x000148: 0x5C6810000127120E Fmul
    temp_43 = temp_31 * temp_31;
    // 0x000150: 0x59A0030002172106 Ffma
    temp_44 = fma(temp_32, temp_32, temp_41);
    // 0x000158: 0x59A0048000770709 Ffma
    temp_45 = fma(temp_33, temp_33, temp_42);
    // 0x000168: 0x59A0070001471416 Ffma
    temp_46 = fma(temp_34, temp_34, temp_43);
    // 0x000170: 0x5C68100001A71A18 Fmul
    temp_47 = temp_38 * temp_38;
    // 0x000178: 0x59A0030002072006 Ffma
    temp_48 = fma(temp_35, temp_35, temp_44);
    // 0x000188: 0x59A0048000870809 Ffma
    temp_49 = fma(temp_36, temp_36, temp_45);
    // 0x000190: 0x5080000000570606 Mufu
    temp_50 = inversesqrt(temp_48);
    // 0x000198: 0x59A00B0001571516 Ffma
    temp_51 = fma(temp_37, temp_37, temp_46);
    // 0x0001A8: 0x508000000057090E Mufu
    temp_52 = inversesqrt(temp_49);
    // 0x0001B0: 0x59A00C0001B71B19 Ffma
    temp_53 = fma(temp_39, temp_39, temp_47);
    // 0x0001B8: 0x5080000000571617 Mufu
    temp_54 = inversesqrt(temp_51);
    // 0x0001C8: 0x59A00C8001C71C1D Ffma
    temp_55 = fma(temp_40, temp_40, temp_53);
    // 0x0001D0: 0x5080000000571D1D Mufu
    temp_56 = inversesqrt(temp_55);
    // 0x0001D8: 0x5C69100000672828 Fmul
    temp_57 = 0.0 - temp_50;
    temp_58 = temp_29 * temp_57;
    // 0x0001E8: 0x5C69100000672121 Fmul
    temp_59 = 0.0 - temp_50;
    temp_60 = temp_32 * temp_59;
    // 0x0001F0: 0x5C68100000E70118 Fmul
    temp_61 = temp_30 * temp_52;
    // 0x0001F8: 0x5C68100000E70719 Fmul
    temp_62 = temp_33 * temp_52;
    // 0x000208: 0x5C68100001771209 Fmul
    temp_63 = temp_31 * temp_54;
    // 0x000210: 0x5C68100001771414 Fmul
    temp_64 = temp_34 * temp_54;
    // 0x000218: 0x5C68100001771515 Fmul
    temp_65 = temp_37 * temp_54;
    // 0x000228: 0x4C58301805C72801 Fadd
    temp_66 = 0.0 - fp_c6.data[23].x;
    temp_67 = temp_58 + temp_66;
    // 0x000230: 0x5C68100000E7080E Fmul
    temp_68 = temp_36 * temp_52;
    // 0x000238: 0x5C69100000672020 Fmul
    temp_69 = 0.0 - temp_50;
    temp_70 = temp_35 * temp_69;
    // 0x000248: 0x4C58301805D72106 Fadd
    temp_71 = 0.0 - fp_c6.data[23].y;
    temp_72 = temp_60 + temp_71;
    // 0x000250: 0x5C68100001D71A1A Fmul
    temp_73 = temp_38 * temp_56;
    // 0x000258: 0x5C68100000170108 Fmul
    temp_74 = temp_67 * temp_67;
    // 0x000268: 0x5C68100001D71B1B Fmul
    temp_75 = temp_39 * temp_56;
    // 0x000270: 0x4C58301805E72007 Fadd
    temp_76 = 0.0 - fp_c6.data[23].z;
    temp_77 = temp_70 + temp_76;
    // 0x000278: 0x5C68100001D71C1C Fmul
    temp_78 = temp_40 * temp_56;
    // 0x000288: 0x59A0040000670608 Ffma
    temp_79 = fma(temp_72, temp_72, temp_74);
    // 0x000290: 0x59A0040000770708 Ffma
    temp_80 = fma(temp_77, temp_77, temp_79);
    // 0x000298: 0x5080000000570808 Mufu
    temp_81 = inversesqrt(temp_80);
    // 0x0002A8: 0x5C68100000870606 Fmul
    temp_82 = temp_72 * temp_81;
    // 0x0002B0: 0x3868104110070505 Fmul
    temp_83 = temp_7 * 9.0;
    // 0x0002B8: 0x5CA8148000570A05 F2f
    temp_84 = floor(temp_83);
    // 0x0002C8: 0xF0F0000034170000 Depbar
    // 0x0002D0: 0x5C68100000370317 Fmul
    temp_85 = temp_12 * temp_12;
    // 0x0002D8: 0x5C68100000371818 Fmul
    temp_86 = temp_61 * temp_12;
    // 0x0002E8: 0x5C68100000371919 Fmul
    temp_87 = temp_62 * temp_12;
    // 0x0002F0: 0x4C5C101406272222 Fadd
    temp_88 = temp_14 + fp_c5.data[24].z;
    temp_89 = clamp(temp_88, 0.0, 1.0);
    // 0x0002F8: 0x49A0061403470A0C Ffma
    temp_90 = fma(temp_18, fp_c5.data[13].x, temp_22);
    // 0x000308: 0x49A0069403570B0D Ffma
    temp_91 = fma(temp_19, fp_c5.data[13].y, temp_23);
    // 0x000310: 0x59A00B8000270217 Ffma
    temp_92 = fma(temp_11, temp_11, temp_85);
    // 0x000318: 0x59A00C0000270909 Ffma
    temp_93 = fma(temp_63, temp_11, temp_86);
    // 0x000328: 0x59A00C8000271414 Ffma
    temp_94 = fma(temp_64, temp_11, temp_87);
    // 0x000330: 0x4C6810180A072222 Fmul
    temp_95 = temp_89 * fp_c6.data[40].x;
    // 0x000338: 0x4C98079403170019 Mov
    // 0x000348: 0x49A0089403671311 Ffma
    temp_96 = fma(temp_20, fp_c5.data[13].z, temp_24);
    // 0x000350: 0x385D103F80071712 Fadd
    temp_97 = 0.0 - temp_92;
    temp_98 = temp_97 + 1.0;
    temp_99 = clamp(temp_98, 0.0, 1.0);
    // 0x000358: 0x5C68100000370E17 Fmul
    temp_100 = temp_68 * temp_12;
    // 0x000368: 0x5080000000871212 Mufu
    temp_101 = sqrt(temp_99);
    // 0x000370: 0x5C68100000870703 Fmul
    temp_102 = temp_77 * temp_81;
    // 0x000378: 0x386013BF80072222 Fmnmx
    temp_103 = min(temp_95, 1.0);
    // 0x000388: 0x59A00B8000271515 Ffma
    temp_104 = fma(temp_65, temp_11, temp_100);
    // 0x000390: 0x01040DF760C7F017 Mov32i
    // 0x000398: 0x59A0048001271A1A Ffma
    temp_105 = fma(temp_73, temp_101, temp_93);
    // 0x0003A8: 0x5C68100000870109 Fmul
    temp_106 = temp_67 * temp_81;
    // 0x0003B0: 0x59A00A0001271B14 Ffma
    temp_107 = fma(temp_75, temp_101, temp_94);
    // 0x0003B8: 0x59A00A8001271C12 Ffma
    temp_108 = fma(temp_78, temp_101, temp_104);
    // 0x0003C8: 0x5C68100001A71A01 Fmul
    temp_109 = temp_105 * temp_105;
    // 0x0003D0: 0x5C68100000972807 Fmul
    temp_110 = temp_58 * temp_106;
    // 0x0003D8: 0x59A0008001471408 Ffma
    temp_111 = fma(temp_107, temp_107, temp_109);
    // 0x0003E8: 0x59A0038000672101 Ffma
    temp_112 = fma(temp_60, temp_82, temp_110);
    // 0x0003F0: 0x4C69101805C70907 Fmul
    temp_113 = 0.0 - fp_c6.data[23].x;
    temp_114 = temp_106 * temp_113;
    // 0x0003F8: 0x59A0040001271208 Ffma
    temp_115 = fma(temp_108, temp_108, temp_111);
    // 0x000408: 0x59A4008000372001 Ffma
    temp_116 = fma(temp_70, temp_102, temp_112);
    temp_117 = clamp(temp_116, 0.0, 1.0);
    // 0x000410: 0x5080000000570815 Mufu
    temp_118 = inversesqrt(temp_115);
    // 0x000418: 0x49A1039805D70602 Ffma
    temp_119 = 0.0 - fp_c6.data[23].y;
    temp_120 = fma(temp_82, temp_119, temp_114);
    // 0x000428: 0x49A20B8400070107 Ffma
    temp_121 = fma(temp_117, fp_c1.data[0].x, -6.98316002);
    // 0x000430: 0x49A5011805E70302 Ffma
    temp_122 = 0.0 - fp_c6.data[23].z;
    temp_123 = fma(temp_102, temp_122, temp_120);
    temp_124 = clamp(temp_123, 0.0, 1.0);
    // 0x000438: 0x5C68100000770107 Fmul
    temp_125 = temp_117 * temp_121;
    // 0x000448: 0x5C68100001571A0E Fmul
    temp_126 = temp_105 * temp_118;
    // 0x000450: 0x5C68100001571401 Fmul
    temp_127 = temp_107 * temp_118;
    // 0x000458: 0x49A20B8400070217 Ffma
    temp_128 = fma(temp_124, fp_c1.data[0].x, -6.98316002);
    // 0x000468: 0x5C68100001571212 Fmul
    temp_129 = temp_108 * temp_118;
    // 0x000470: 0x4C9807940327001A Mov
    // 0x000478: 0x5C68100000E70914 Fmul
    temp_130 = temp_106 * temp_126;
    // 0x000488: 0x5C68100001770208 Fmul
    temp_131 = temp_124 * temp_128;
    // 0x000490: 0x4C60178400372202 Fmnmx
    temp_132 = max(temp_103, fp_c1.data[0].w);
    // 0x000498: 0x3868104180070417 Fmul
    temp_133 = temp_6 * 16.0;
    // 0x0004A8: 0x1E23E990AFE70A04 Fmul32i
    temp_134 = temp_18 * 0.298911989;
    // 0x0004B0: 0x5CA8148001770A17 F2f
    temp_135 = floor(temp_133);
    // 0x0004B8: 0x59A00A0000170614 Ffma
    temp_136 = fma(temp_82, temp_127, temp_130);
    // 0x0004C8: 0x5C68100000E72806 Fmul
    temp_137 = temp_58 * temp_126;
    // 0x0004D0: 0x51A401040037022E Ffma
    temp_138 = fma(temp_132, temp_132, fp_c1.data[0].w);
    temp_139 = clamp(temp_138, 0.0, 1.0);
    // 0x0004D8: 0x32A0163F0007022C Ffma
    temp_140 = fma(temp_132, 0.5, 0.5);
    // 0x0004E8: 0x5C9807800FF7000A Mov
    // 0x0004F0: 0x5C90008000870022 Rro
    // 0x0004F8: 0x59A40A0001270314 Ffma
    temp_141 = fma(temp_102, temp_129, temp_136);
    temp_142 = clamp(temp_141, 0.0, 1.0);
    // 0x000508: 0x5080000000272222 Mufu
    temp_143 = exp2(temp_131);
    // 0x000510: 0x4C69101805C70E03 Fmul
    temp_144 = 0.0 - fp_c6.data[23].x;
    temp_145 = temp_126 * temp_144;
    // 0x000518: 0x59A0030000172115 Ffma
    temp_146 = fma(temp_60, temp_127, temp_137);
    // 0x000528: 0x5C68100002E72E2D Fmul
    temp_147 = temp_139 * temp_139;
    // 0x000530: 0x5C68120002C72C2C Fmul
    temp_148 = temp_140 * 0.5;
    temp_149 = temp_148 * temp_140;
    // 0x000538: 0x32A00BC18007052B Ffma
    temp_150 = fma(temp_84, 16.0, temp_135);
    // 0x000548: 0x4C98079403070017 Mov
    // 0x000550: 0x5CB0118002B70A2B F2i
    temp_151 = trunc(temp_150);
    temp_152 = max(temp_151, 0.0);
    temp_153 = uint(temp_152);
    // 0x000558: 0x49A1019805D70109 Ffma
    temp_154 = 0.0 - fp_c6.data[23].y;
    temp_155 = fma(temp_127, temp_154, temp_145);
    // 0x000568: 0x59A40A8001272003 Ffma
    temp_156 = fma(temp_70, temp_129, temp_146);
    temp_157 = clamp(temp_156, 0.0, 1.0);
    // 0x000570: 0x59A20A0002D71406 Ffma
    temp_158 = 0.0 - temp_142;
    temp_159 = fma(temp_142, temp_147, temp_158);
    // 0x000578: 0x49A0020400170B05 Ffma
    temp_160 = fma(temp_19, fp_c1.data[0].y, temp_134);
    // 0x000588: 0x5C9807800FF7000B Mov
    // 0x000590: 0x4C58301402C71704 Fadd
    temp_161 = 0.0 - fp_c5.data[11].x;
    temp_162 = fp_c5.data[12].x + temp_161;
    // 0x000598: 0x49A5049805E71209 Ffma
    temp_163 = 0.0 - fp_c6.data[23].z;
    temp_164 = fma(temp_129, temp_163, temp_155);
    temp_165 = clamp(temp_164, 0.0, 1.0);
    // 0x0005A8: 0x59A1018000372C15 Ffma
    temp_166 = 0.0 - temp_157;
    temp_167 = fma(temp_149, temp_166, temp_157);
    // 0x0005B0: 0x51A0030400471406 Ffma
    temp_168 = fma(temp_142, temp_159, fp_c1.data[1].x);
    // 0x0005B8: 0x49A0028400271317 Ffma
    temp_169 = fma(temp_20, fp_c1.data[0].z, temp_160);
    // 0x0005C8: 0x5080000000470614 Mufu
    temp_170 = 1.0 / temp_168;
    // 0x0005D0: 0x4C58301402D71905 Fadd
    temp_171 = 0.0 - fp_c5.data[11].y;
    temp_172 = fp_c5.data[12].y + temp_171;
    // 0x0005D8: 0x59A1048002C70916 Ffma
    temp_173 = 0.0 - temp_149;
    temp_174 = fma(temp_165, temp_173, temp_165);
    // 0x0005E8: 0x5C58100001572C15 Fadd
    temp_175 = temp_149 + temp_167;
    // 0x0005F0: 0x3848000000872B29 Shl
    temp_176 = int(temp_153) << 8;
    // 0x0005F8: 0x5080000000471515 Mufu
    temp_177 = 1.0 / temp_175;
    // 0x000608: 0x51A00B9402C70404 Ffma
    temp_178 = fma(temp_162, temp_169, fp_c5.data[11].x);
    // 0x000610: 0x51A00B9402D70505 Ffma
    temp_179 = fma(temp_172, temp_169, fp_c5.data[11].y);
    // 0x000618: 0x5C58100001672C16 Fadd
    temp_180 = temp_149 + temp_174;
    // 0x000628: 0xEF94008200472929 Ldc
    temp_181 = temp_176 + 0x2004;
    temp_182 = uint(temp_181) >> 2;
    temp_183 = temp_182 >> 2;
    temp_184 = int(temp_182) & 3;
    temp_185 = fp_c8.data[int(temp_183)][temp_184];
    // 0x000630: 0x4C58301402E71A06 Fadd
    temp_186 = 0.0 - fp_c5.data[11].z;
    temp_187 = fp_c5.data[12].z + temp_186;
    // 0x000638: 0x5080000000471618 Mufu
    temp_188 = 1.0 / temp_180;
    // 0x000648: 0x4C58301407B70408 Fadd
    temp_189 = 0.0 - fp_c5.data[30].w;
    temp_190 = temp_178 + temp_189;
    // 0x000650: 0x5C68100001472E14 Fmul
    temp_191 = temp_139 * temp_170;
    // 0x000658: 0x4C6810180167091A Fmul
    temp_192 = temp_165 * fp_c6.data[5].z;
    // 0x000668: 0x4C68101801570919 Fmul
    temp_193 = temp_165 * fp_c6.data[5].y;
    // 0x000670: 0x5C68100000370E2F Fmul
    temp_194 = temp_126 * temp_157;
    // 0x000678: 0x51A00B9402E70606 Ffma
    temp_195 = fma(temp_187, temp_169, fp_c5.data[11].z);
    // 0x000688: 0x3868103F0007152A Fmul
    temp_196 = temp_177 * 0.5;
    // 0x000690: 0x5C68100001471414 Fmul
    temp_197 = temp_191 * temp_191;
    // 0x000698: 0x4C68101801470917 Fmul
    temp_198 = temp_165 * fp_c6.data[5].x;
    // 0x0006A8: 0x5C90008000770016 Rro
    // 0x0006B0: 0x51A0041407B72307 Ffma
    temp_199 = fma(temp_15, temp_190, fp_c5.data[30].w);
    // 0x0006B8: 0x5080000000271616 Mufu
    temp_200 = exp2(temp_125);
    // 0x0006C8: 0x5C68100001872A15 Fmul
    temp_201 = temp_196 * temp_188;
    // 0x0006D0: 0x4C58301407B70618 Fadd
    temp_202 = 0.0 - fp_c5.data[30].w;
    temp_203 = temp_195 + temp_202;
    // 0x0006D8: 0x1E23EA2F98371A1B Fmul32i
    temp_204 = temp_192 * 0.318309873;
    // 0x0006E8: 0x1E23EA2F98371919 Fmul32i
    temp_205 = temp_193 * 0.318309873;
    // 0x0006F0: 0x5C9807800FF70013 Mov
    // 0x0006F8: 0x59A111000227071A Ffma
    temp_206 = 0.0 - temp_143;
    temp_207 = fma(temp_199, temp_206, temp_143);
    // 0x000708: 0x5C68100001571414 Fmul
    temp_208 = temp_197 * temp_201;
    // 0x000710: 0x4C58301407B70515 Fadd
    temp_209 = 0.0 - fp_c5.data[30].w;
    temp_210 = temp_179 + temp_209;
    // 0x000718: 0x32A2144000072F2F Ffma
    temp_211 = 0.0 - temp_58;
    temp_212 = fma(temp_194, 2.0, temp_211);
    // 0x000728: 0x5C58100001A7071A Fadd
    temp_213 = temp_199 + temp_207;
    // 0x000730: 0x5C68100001470914 Fmul
    temp_214 = temp_165 * temp_208;
    // 0x000738: 0x51A00A9407B72308 Ffma
    temp_215 = fma(temp_15, temp_210, fp_c5.data[30].w);
    // 0x000748: 0x51A00C1407B72309 Ffma
    temp_216 = fma(temp_15, temp_203, fp_c5.data[30].w);
    // 0x000750: 0x1E23EA2F98371718 Fmul32i
    temp_217 = temp_198 * 0.318309873;
    // 0x000758: 0x59A10B0000771615 Ffma
    temp_218 = 0.0 - temp_199;
    temp_219 = fma(temp_200, temp_218, temp_200);
    // 0x000768: 0x4C68101801471A1A Fmul
    temp_220 = temp_213 * fp_c6.data[5].x;
    // 0x000770: 0x59A111000227081D Ffma
    temp_221 = 0.0 - temp_143;
    temp_222 = fma(temp_215, temp_221, temp_143);
    // 0x000778: 0x59A1110002270922 Ffma
    temp_223 = 0.0 - temp_143;
    temp_224 = fma(temp_216, temp_223, temp_143);
    // 0x000788: 0x59A10B0000871617 Ffma
    temp_225 = 0.0 - temp_215;
    temp_226 = fma(temp_200, temp_225, temp_200);
    // 0x000790: 0x59A10B0000971616 Ffma
    temp_227 = 0.0 - temp_216;
    temp_228 = fma(temp_200, temp_227, temp_200);
    // 0x000798: 0x5C58100001570715 Fadd
    temp_229 = temp_199 + temp_219;
    // 0x0007A8: 0x5C68100001471A24 Fmul
    temp_230 = temp_220 * temp_214;
    // 0x0007B0: 0x5C58100001D7081D Fadd
    temp_231 = temp_215 + temp_222;
    // 0x0007B8: 0x5C58100002270922 Fadd
    temp_232 = temp_216 + temp_224;
    // 0x0007C8: 0x5C58100001770817 Fadd
    temp_233 = temp_215 + temp_226;
    // 0x0007D0: 0x5C58100001670916 Fadd
    temp_234 = temp_216 + temp_228;
    // 0x0007D8: 0x59A10C0001871518 Ffma
    temp_235 = 0.0 - temp_217;
    temp_236 = fma(temp_229, temp_235, temp_217);
    // 0x0007E8: 0x4C68101403170D1A Fmul
    temp_237 = temp_91 * fp_c5.data[12].y;
    // 0x0007F0: 0xEF5400000047FF18 Stl
    local_memory[1] = floatBitsToUint(temp_236);
    // 0x0007F8: 0x4C68101801571D1D Fmul
    temp_238 = temp_231 * fp_c6.data[5].y;
    // 0x000808: 0x4C68101801672222 Fmul
    temp_239 = temp_232 * fp_c6.data[5].z;
    // 0x000810: 0x59A10C8001971715 Ffma
    temp_240 = 0.0 - temp_205;
    temp_241 = fma(temp_233, temp_240, temp_205);
    // 0x000818: 0x59A10D8001B71632 Ffma
    temp_242 = 0.0 - temp_204;
    temp_243 = fma(temp_234, temp_242, temp_204);
    // 0x000828: 0xEF5400000007FF15 Stl
    local_memory[0] = floatBitsToUint(temp_241);
    // 0x000830: 0x5B6603800FF72907 Isetp
    temp_244 = floatBitsToUint(temp_185) <= 0u;
    // 0x000838: 0x5C68100001471D25 Fmul
    temp_245 = temp_238 * temp_214;
    // 0x000848: 0x5C68100001472226 Fmul
    temp_246 = temp_239 * temp_214;
    // 0x000850: 0x385D103F80070F14 Fadd
    temp_247 = 0.0 - temp_16;
    temp_248 = temp_247 + 1.0;
    temp_249 = clamp(temp_248, 0.0, 1.0);
    // 0x000858: 0x4C68101403070C19 Fmul
    temp_250 = temp_90 * fp_c5.data[12].x;
    // 0x000868: 0x5C68100000371217 Fmul
    temp_251 = temp_129 * temp_157;
    // 0x000870: 0x5C9807800FF70018 Mov
    // 0x000878: 0x5C9807800FF7000F Mov
    // 0x000888: 0x4C6810140327111B Fmul
    temp_252 = temp_96 * fp_c5.data[12].z;
    // 0x000890: 0x49A20A180AD71416 Ffma
    temp_253 = 0.0 - temp_249;
    temp_254 = fma(temp_249, fp_c6.data[43].y, temp_253);
    // 0x000898: 0x49A20A180AC71415 Ffma
    temp_255 = 0.0 - temp_249;
    temp_256 = fma(temp_249, fp_c6.data[43].x, temp_255);
    // 0x0008A8: 0x49A20A180AE71414 Ffma
    temp_257 = 0.0 - temp_249;
    temp_258 = fma(temp_249, fp_c6.data[43].z, temp_257);
    // 0x0008B0: 0x32A2104000071717 Ffma
    temp_259 = 0.0 - temp_70;
    temp_260 = fma(temp_251, 2.0, temp_259);
    // 0x0008B8: 0x1E23E22F98372424 Fmul32i
    temp_261 = temp_230 * 0.159154937;
    // 0x0008C8: 0x1E23E22F98372525 Fmul32i
    temp_262 = temp_245 * 0.159154937;
    // 0x0008D0: 0x3858103F8007160C Fadd
    temp_263 = temp_254 + 1.0;
    // 0x0008D8: 0x3858103F80071515 Fadd
    temp_264 = temp_256 + 1.0;
    // 0x0008E8: 0x3858103F80071414 Fadd
    temp_265 = temp_258 + 1.0;
    // 0x0008F0: 0x5C68100000370116 Fmul
    temp_266 = temp_127 * temp_157;
    // 0x0008F8: 0x1E23E22F98372626 Fmul32i
    temp_267 = temp_246 * 0.159154937;
    // 0x000908: 0x59A4060000C7051D Ffma
    temp_268 = fma(temp_179, temp_263, temp_263);
    temp_269 = clamp(temp_268, 0.0, 1.0);
    // 0x000910: 0x59A40A800157041C Ffma
    temp_270 = fma(temp_178, temp_264, temp_264);
    temp_271 = clamp(temp_270, 0.0, 1.0);
    // 0x000918: 0x59A40A0001470622 Ffma
    temp_272 = fma(temp_195, temp_265, temp_265);
    temp_273 = clamp(temp_272, 0.0, 1.0);
    // 0x000928: 0x32A210C000071616 Ffma
    temp_274 = 0.0 - temp_60;
    temp_275 = fma(temp_266, 2.0, temp_274);
    // 0x000930: 0xF0F800000000000F Sync
    temp_276 = 0.0;
    temp_277 = 0.0;
    temp_278 = 0.0;
    temp_279 = 0.0;
    temp_280 = 0.0;
    temp_281 = 0.0;
    temp_282 = 0.0;
    temp_283 = 0.0;
    temp_284 = 0.0;
    temp_285 = 0.0;
    temp_286 = 0.0;
    temp_287 = 0.0;
    if (!temp_244)
    {
        // 0x000938: 0x5C9807800FF70030 Mov
        temp_288 = 0;
        do
        {
            // 0x000948: 0x5C18020003072B15 Iscadd
            temp_290 = int(temp_153) << 4;
            temp_291 = temp_290 + temp_288;
            // 0x000950: 0xE003FF87CFF7FF33 Ipa
            // 0x000958: 0x1C00000000173030 Iadd32i
            temp_292 = temp_288 + 1;
            // 0x000968: 0xE003FF87CFF7FF35 Ipa
            // 0x000970: 0x3848000000471515 Shl
            temp_293 = temp_291 << 4;
            // 0x000978: 0xE003FF87CFF7FF34 Ipa
            // 0x000988: 0x5B6C03800297300F Isetp
            temp_289 = uint(temp_292) >= floatBitsToUint(temp_185);
            // 0x000990: 0xE290000055800000 Ssy
            // 0x000998: 0xEF94008200071515 Ldc
            temp_294 = temp_293 + 0x2000;
            temp_295 = uint(temp_294) >> 2;
            temp_296 = temp_295 >> 2;
            temp_297 = int(temp_295) & 3;
            temp_298 = fp_c8.data[int(temp_296)][temp_297];
            // 0x0009A8: 0x5080000000473333 Mufu
            // 0x0009B0: 0x5080000000473535 Mufu
            // 0x0009B8: 0x5080000000473434 Mufu
            // 0x0009C8: 0xE043FF8D0337FF33 Ipa
            temp_299 = in_attr5.x;
            // 0x0009D0: 0xE043FF8D8357FF35 Ipa
            temp_300 = in_attr5.z;
            // 0x0009D8: 0xE043FF8D4347FF34 Ipa
            temp_301 = in_attr5.y;
            // 0x0009E8: 0x3848000000671531 Shl
            temp_302 = floatBitsToInt(temp_298) << 6;
            // 0x0009F0: 0xEF9500800107310C Ldc
            temp_303 = temp_302 + 16;
            temp_304 = uint(temp_303) >> 2;
            temp_305 = temp_304 >> 2;
            temp_306 = int(temp_304) & 3;
            temp_307 = fp_c8.data[int(temp_305)][temp_306];
            temp_308 = int(temp_304) + 1;
            temp_309 = uint(temp_308) >> 2;
            temp_310 = temp_308 & 3;
            temp_311 = fp_c8.data[int(temp_309)][temp_310];
            // 0x0009F8: 0xEF95008001873110 Ldc
            temp_312 = temp_302 + 24;
            temp_313 = uint(temp_312) >> 2;
            temp_314 = temp_313 >> 2;
            temp_315 = int(temp_313) & 3;
            temp_316 = fp_c8.data[int(temp_314)][temp_315];
            temp_317 = int(temp_313) + 1;
            temp_318 = uint(temp_317) >> 2;
            temp_319 = temp_317 & 3;
            temp_320 = fp_c8.data[int(temp_318)][temp_319];
            // 0x000A08: 0xEF95008002073114 Ldc
            temp_321 = temp_302 + 32;
            temp_322 = uint(temp_321) >> 2;
            temp_323 = temp_322 >> 2;
            temp_324 = int(temp_322) & 3;
            temp_325 = fp_c8.data[int(temp_323)][temp_324];
            temp_326 = int(temp_322) + 1;
            temp_327 = uint(temp_326) >> 2;
            temp_328 = temp_326 & 3;
            temp_329 = fp_c8.data[int(temp_327)][temp_328];
            // 0x000A10: 0x5C58300003370C33 Fadd
            temp_330 = 0.0 - temp_299;
            temp_331 = temp_307 + temp_330;
            // 0x000A18: 0x5C58300003470D34 Fadd
            temp_332 = 0.0 - temp_301;
            temp_333 = temp_311 + temp_332;
            // 0x000A28: 0x5C58300003571035 Fadd
            temp_334 = 0.0 - temp_300;
            temp_335 = temp_316 + temp_334;
            // 0x000A30: 0x5C68100003373336 Fmul
            temp_336 = temp_331 * temp_331;
            // 0x000A38: 0x59A11A8003571111 Ffma
            temp_337 = 0.0 - temp_335;
            temp_338 = fma(temp_320, temp_337, temp_335);
            // 0x000A48: 0x59A01B0003473436 Ffma
            temp_339 = fma(temp_333, temp_333, temp_336);
            // 0x000A50: 0x59A01B0001171137 Ffma
            temp_340 = fma(temp_338, temp_338, temp_339);
            // 0x000A58: 0x508000000057370C Mufu
            temp_341 = inversesqrt(temp_340);
            // 0x000A68: 0x5080000000873737 Mufu
            temp_342 = sqrt(temp_340);
            // 0x000A70: 0x5C68100000C7330D Fmul
            temp_343 = temp_331 * temp_341;
            // 0x000A78: 0x5C68100000C73410 Fmul
            temp_344 = temp_333 * temp_341;
            // 0x000A88: 0x5C68100000C7110C Fmul
            temp_345 = temp_338 * temp_341;
            // 0x000A90: 0x5C69100001470D0D Fmul
            temp_346 = 0.0 - temp_325;
            temp_347 = temp_343 * temp_346;
            // 0x000A98: 0xEF94008002873114 Ldc
            temp_348 = temp_302 + 40;
            temp_349 = uint(temp_348) >> 2;
            temp_350 = temp_349 >> 2;
            temp_351 = int(temp_349) & 3;
            temp_352 = fp_c8.data[int(temp_350)][temp_351];
            // 0x000AA8: 0x59A106800157100D Ffma
            temp_353 = 0.0 - temp_329;
            temp_354 = fma(temp_344, temp_353, temp_347);
            // 0x000AB0: 0xEF95008003873110 Ldc
            temp_355 = temp_302 + 56;
            temp_356 = uint(temp_355) >> 2;
            temp_357 = temp_356 >> 2;
            temp_358 = int(temp_356) & 3;
            temp_359 = fp_c8.data[int(temp_357)][temp_358];
            temp_360 = int(temp_356) + 1;
            temp_361 = uint(temp_360) >> 2;
            temp_362 = temp_360 & 3;
            temp_363 = fp_c8.data[int(temp_361)][temp_362];
            // 0x000AB8: 0x010404000007F015 Mov32i
            // 0x000AC8: 0x59A1068001470C14 Ffma
            temp_364 = 0.0 - temp_352;
            temp_365 = fma(temp_345, temp_364, temp_354);
            // 0x000AD0: 0xEF9500800307310C Ldc
            temp_366 = temp_302 + 48;
            temp_367 = uint(temp_366) >> 2;
            temp_368 = temp_367 >> 2;
            temp_369 = int(temp_367) & 3;
            temp_370 = fp_c8.data[int(temp_368)][temp_369];
            temp_371 = int(temp_367) + 1;
            temp_372 = uint(temp_371) >> 2;
            temp_373 = temp_371 & 3;
            temp_374 = fp_c8.data[int(temp_372)][temp_373];
            // 0x000AD8: 0x59A4088001071410 Ffma
            temp_375 = fma(temp_365, temp_359, temp_363);
            temp_376 = clamp(temp_375, 0.0, 1.0);
            // 0x000AE8: 0x59A4068003770C37 Ffma
            temp_377 = fma(temp_370, temp_342, temp_374);
            temp_378 = clamp(temp_377, 0.0, 1.0);
            // 0x000AF0: 0x33A00AC000073714 Ffma
            temp_379 = fma(temp_378, -2.0, 3.0);
            // 0x000AF8: 0x5C68100003773711 Fmul
            temp_380 = temp_378 * temp_378;
            // 0x000B08: 0x33A00AC000071015 Ffma
            temp_381 = fma(temp_376, -2.0, 3.0);
            // 0x000B10: 0x5C68100001071010 Fmul
            temp_382 = temp_376 * temp_376;
            // 0x000B18: 0x5C68100001171411 Fmul
            temp_383 = temp_379 * temp_380;
            // 0x000B28: 0x39585042F0073514 Fadd
            temp_384 = abs(temp_335);
            temp_385 = temp_384 + -120.0;
            // 0x000B30: 0x5C68100001571010 Fmul
            temp_386 = temp_382 * temp_381;
            // 0x000B38: 0x1EABD4CCCCD71414 Fmul32i
            temp_387 = temp_385 * -0.0500000007;
            temp_388 = clamp(temp_387, 0.0, 1.0);
            // 0x000B48: 0x5C68100001171010 Fmul
            temp_389 = temp_386 * temp_383;
            // 0x000B50: 0x36247F9000171111 Xmad
            temp_390 = floatBitsToUint(temp_383) >> 16;
            temp_391 = int(temp_390) << 16;
            // 0x000B58: 0x5C68100001071410 Fmul
            temp_392 = temp_388 * temp_389;
            // 0x000B68: 0x5BB383800FF71007 Fsetp
            temp_393 = temp_392 <= 0.0;
            // 0x000B70: 0x7A05083C0F00FF11 Hadd2
            temp_288 = temp_292;
            temp_394 = uint(temp_391);
            temp_395 = temp_276;
            temp_396 = temp_277;
            temp_397 = temp_278;
            temp_398 = temp_279;
            temp_399 = temp_280;
            temp_400 = temp_281;
            if (temp_393)
            {
                temp_401 = unpackHalf2x16(uint(temp_391)).y;
                temp_402 = packHalf2x16(vec2(1.0, temp_401));
                temp_394 = temp_402;
            }
            // 0x000B78: 0x5D2103902FF71107 Hsetp2
            temp_403 = unpackHalf2x16(temp_394).x;
            temp_404 = temp_403 == 0.0;
            // 0x000B88: 0xF0F800000008000F Sync
            if (temp_404)
            {
                // 0x000B90: 0x5080000000470C0C Mufu
                temp_405 = 1.0 / temp_370;
                // 0x000B98: 0xEF94008002C73115 Ldc
                temp_406 = temp_302 + 44;
                temp_407 = uint(temp_406) >> 2;
                temp_408 = temp_407 >> 2;
                temp_409 = int(temp_407) & 3;
                temp_410 = fp_c8.data[int(temp_408)][temp_409];
                // 0x000BA8: 0x5C69100000C70D14 Fmul
                temp_411 = 0.0 - temp_405;
                temp_412 = temp_374 * temp_411;
                // 0x000BB0: 0x5C60138001473511 Fmnmx
                temp_413 = min(temp_335, temp_412);
                // 0x000BB8: 0x5C61178001171411 Fmnmx
                temp_414 = 0.0 - temp_412;
                temp_415 = max(temp_414, temp_413);
                // 0x000BC8: 0x59A01B000117110C Ffma
                temp_416 = fma(temp_415, temp_415, temp_339);
                // 0x000BD0: 0x5080000000570C0D Mufu
                temp_417 = inversesqrt(temp_416);
                // 0x000BD8: 0x5C68100000D73333 Fmul
                temp_418 = temp_331 * temp_417;
                // 0x000BE8: 0x5080000000471515 Mufu
                temp_419 = 1.0 / temp_410;
                // 0x000BF0: 0x5C68100000D73435 Fmul
                temp_420 = temp_333 * temp_417;
                // 0x000BF8: 0x5C68100000D71111 Fmul
                temp_421 = temp_415 * temp_417;
                // 0x000C08: 0x5C58100003372837 Fadd
                temp_422 = temp_58 + temp_418;
                // 0x000C10: 0x5C5810000357210D Fadd
                temp_423 = temp_60 + temp_420;
                // 0x000C18: 0x5C58100001172014 Fadd
                temp_424 = temp_70 + temp_421;
                // 0x000C28: 0x5C68100003773734 Fmul
                temp_425 = temp_422 * temp_422;
                // 0x000C30: 0x59A01A0000D70D34 Ffma
                temp_426 = fma(temp_423, temp_423, temp_425);
                // 0x000C38: 0x59A01A0001471434 Ffma
                temp_427 = fma(temp_424, temp_424, temp_426);
                // 0x000C48: 0x5080000000573434 Mufu
                temp_428 = inversesqrt(temp_427);
                // 0x000C50: 0x5C68100003473737 Fmul
                temp_429 = temp_422 * temp_428;
                // 0x000C58: 0x5C68100003470D0D Fmul
                temp_430 = temp_423 * temp_428;
                // 0x000C68: 0x5C68100003471414 Fmul
                temp_431 = temp_424 * temp_428;
                // 0x000C70: 0x5C68100003370E34 Fmul
                temp_432 = temp_126 * temp_418;
                // 0x000C78: 0x5C68100003773336 Fmul
                temp_433 = temp_418 * temp_429;
                // 0x000C88: 0x5080000000870C33 Mufu
                temp_434 = sqrt(temp_416);
                // 0x000C90: 0x5C68100003770E37 Fmul
                temp_435 = temp_126 * temp_429;
                // 0x000C98: 0x59A01A0003570134 Ffma
                temp_436 = fma(temp_127, temp_420, temp_432);
                // 0x000CA8: 0x59A01B0000D73536 Ffma
                temp_437 = fma(temp_420, temp_430, temp_433);
                // 0x000CB0: 0x59A01B8000D70137 Ffma
                temp_438 = fma(temp_127, temp_430, temp_435);
                // 0x000CB8: 0xEF9500800007310C Ldc
                temp_439 = uint(temp_302) >> 2;
                temp_440 = temp_439 >> 2;
                temp_441 = int(temp_439) & 3;
                temp_442 = fp_c8.data[int(temp_440)][temp_441];
                temp_443 = int(temp_439) + 1;
                temp_444 = uint(temp_443) >> 2;
                temp_445 = temp_443 & 3;
                temp_446 = fp_c8.data[int(temp_444)][temp_445];
                // 0x000CC8: 0x59A01A0001171234 Ffma
                temp_447 = fma(temp_129, temp_421, temp_436);
                // 0x000CD0: 0xEF94008000873131 Ldc
                temp_448 = temp_302 + 8;
                temp_449 = uint(temp_448) >> 2;
                temp_450 = temp_449 >> 2;
                temp_451 = int(temp_449) & 3;
                temp_452 = fp_c8.data[int(temp_450)][temp_451];
                // 0x000CD8: 0x59A41B0001471136 Ffma
                temp_453 = fma(temp_421, temp_431, temp_437);
                temp_454 = clamp(temp_453, 0.0, 1.0);
                // 0x000CE8: 0x01040DF760C7F011 Mov32i
                // 0x000CF0: 0x51A0198400571515 Ffma
                temp_455 = fma(temp_419, temp_434, fp_c1.data[1].y);
                // 0x000CF8: 0x59A41B8001471237 Ffma
                temp_456 = fma(temp_129, temp_431, temp_438);
                temp_457 = clamp(temp_456, 0.0, 1.0);
                // 0x000D08: 0x5080000000471515 Mufu
                temp_458 = 1.0 / temp_455;
                // 0x000D10: 0x49A2088400073611 Ffma
                temp_459 = fma(temp_454, fp_c1.data[0].x, -6.98316002);
                // 0x000D18: 0x59A21B8003772D14 Ffma
                temp_460 = 0.0 - temp_457;
                temp_461 = fma(temp_147, temp_457, temp_460);
                // 0x000D28: 0x5C68100001173636 Fmul
                temp_462 = temp_454 * temp_459;
                // 0x000D30: 0x5C5C30000FF73411 Fadd
                temp_463 = temp_447 + -0.0;
                temp_464 = clamp(temp_463, 0.0, 1.0);
                // 0x000D38: 0x51A00A0400473737 Ffma
                temp_465 = fma(temp_457, temp_461, fp_c1.data[1].x);
                // 0x000D48: 0x1E23FB3333371515 Fmul32i
                temp_466 = temp_458 * 1.39999998;
                // 0x000D50: 0x5080000000473737 Mufu
                temp_467 = 1.0 / temp_465;
                // 0x000D58: 0x5C90008003670033 Rro
                // 0x000D68: 0x59A1088001172C14 Ffma
                temp_468 = 0.0 - temp_464;
                temp_469 = fma(temp_149, temp_468, temp_464);
                // 0x000D70: 0x5080000000273333 Mufu
                temp_470 = exp2(temp_462);
                // 0x000D78: 0x5C68100001571515 Fmul
                temp_471 = temp_466 * temp_466;
                // 0x000D88: 0x5C58100001472C14 Fadd
                temp_472 = temp_149 + temp_469;
                // 0x000D90: 0x5080000000471414 Mufu
                temp_473 = 1.0 / temp_472;
                // 0x000D98: 0x59A10A8001573415 Ffma
                temp_474 = 0.0 - temp_471;
                temp_475 = fma(temp_447, temp_474, temp_471);
                // 0x000DA8: 0x5C68100003772E37 Fmul
                temp_476 = temp_139 * temp_467;
                // 0x000DB0: 0x5C5C100001573415 Fadd
                temp_477 = temp_447 + temp_475;
                temp_478 = clamp(temp_477, 0.0, 1.0);
                // 0x000DB8: 0x59A1198003370834 Ffma
                temp_479 = 0.0 - temp_470;
                temp_480 = fma(temp_215, temp_479, temp_470);
                // 0x000DC8: 0x5C68100003773737 Fmul
                temp_481 = temp_476 * temp_476;
                // 0x000DD0: 0x5C68100000C7100C Fmul
                temp_482 = temp_392 * temp_442;
                // 0x000DD8: 0x5C68100000D7100D Fmul
                temp_483 = temp_392 * temp_446;
                // 0x000DE8: 0x5C68100001472A14 Fmul
                temp_484 = temp_196 * temp_473;
                // 0x000DF0: 0x5C58100003470834 Fadd
                temp_485 = temp_215 + temp_480;
                // 0x000DF8: 0x5C68100003171031 Fmul
                temp_486 = temp_392 * temp_452;
                // 0x000E08: 0x59A1198003370710 Ffma
                temp_487 = 0.0 - temp_470;
                temp_488 = fma(temp_199, temp_487, temp_470);
                // 0x000E10: 0x59A1198003370933 Ffma
                temp_489 = 0.0 - temp_470;
                temp_490 = fma(temp_216, temp_489, temp_470);
                // 0x000E18: 0x5C68100001473714 Fmul
                temp_491 = temp_481 * temp_484;
                // 0x000E28: 0x5C68100003470D34 Fmul
                temp_492 = temp_483 * temp_485;
                // 0x000E30: 0x5C68100001570D0D Fmul
                temp_493 = temp_483 * temp_478;
                // 0x000E38: 0x5C58100001070710 Fadd
                temp_494 = temp_199 + temp_488;
                // 0x000E48: 0x5C58100003370933 Fadd
                temp_495 = temp_216 + temp_490;
                // 0x000E50: 0x5C68100001471114 Fmul
                temp_496 = temp_464 * temp_491;
                // 0x000E58: 0x49A0078400770D0F Ffma
                temp_497 = fma(temp_493, fp_c1.data[1].w, temp_276);
                // 0x000E68: 0x5C68100001070C10 Fmul
                temp_498 = temp_482 * temp_494;
                // 0x000E70: 0x5C68100003373133 Fmul
                temp_499 = temp_486 * temp_495;
                // 0x000E78: 0x5C68100001570C0C Fmul
                temp_500 = temp_482 * temp_478;
                // 0x000E88: 0x5C68100001573115 Fmul
                temp_501 = temp_486 * temp_478;
                // 0x000E90: 0x5C68100001473411 Fmul
                temp_502 = temp_492 * temp_496;
                // 0x000E98: 0x5C68100001471010 Fmul
                temp_503 = temp_498 * temp_496;
                // 0x000EA8: 0x5C68100001473333 Fmul
                temp_504 = temp_499 * temp_496;
                // 0x000EB0: 0x49A0138400770C27 Ffma
                temp_505 = fma(temp_500, fp_c1.data[1].w, temp_277);
                // 0x000EB8: 0x49A0098400771513 Ffma
                temp_506 = fma(temp_501, fp_c1.data[1].w, temp_278);
                // 0x000EC8: 0x49A00C0400671118 Ffma
                temp_507 = fma(temp_502, fp_c1.data[1].z, temp_279);
                // 0x000ED0: 0x49A005840067100B Ffma
                temp_508 = fma(temp_503, fp_c1.data[1].z, temp_280);
                // 0x000ED8: 0x49A005040067330A Ffma
                temp_509 = fma(temp_504, fp_c1.data[1].z, temp_281);
                // 0x000EE8: 0xF0F800000007000F Sync
                temp_395 = temp_497;
                temp_396 = temp_505;
                temp_397 = temp_506;
                temp_398 = temp_507;
                temp_399 = temp_508;
                temp_400 = temp_509;
            }
            // 0x000EF0: 0xE2400FFFA489000F Bra
            temp_276 = temp_395;
            temp_277 = temp_396;
            temp_278 = temp_397;
            temp_279 = temp_398;
            temp_280 = temp_399;
            temp_281 = temp_400;
            temp_282 = temp_399;
            temp_283 = temp_397;
            temp_284 = temp_400;
            temp_285 = temp_398;
            temp_286 = temp_396;
            temp_287 = temp_395;
        }
        while (!temp_289);
        // 0x000EF8: 0xF0F800000007000F Sync
    }
    // 0x000F08: 0x5C62578000170E0C Fmnmx
    temp_510 = abs(temp_126);
    temp_511 = abs(temp_127);
    temp_512 = max(temp_510, temp_511);
    // 0x000F10: 0xE003FF87CFF7FF28 Ipa
    // 0x000F18: 0x5C62578001672F0D Fmnmx
    temp_513 = abs(temp_212);
    temp_514 = abs(temp_275);
    temp_515 = max(temp_513, temp_514);
    // 0x000F28: 0xEF4410000047FF33 Ldl
    temp_516 = uintBitsToFloat(local_memory[1]);
    // 0x000F30: 0x5C60578000C7120C Fmnmx
    temp_517 = abs(temp_129);
    temp_518 = max(temp_517, temp_512);
    // 0x000F38: 0xEF4410000007FF31 Ldl
    temp_519 = uintBitsToFloat(local_memory[0]);
    // 0x000F48: 0x38681040E007022A Fmul
    temp_520 = temp_132 * 7.0;
    // 0x000F50: 0x5080000000470C0C Mufu
    temp_521 = 1.0 / temp_518;
    // 0x000F58: 0x5C60578000D7170D Fmnmx
    temp_522 = abs(temp_260);
    temp_523 = max(temp_522, temp_515);
    // 0x000F68: 0x010000000017F014 Mov32i
    // 0x000F70: 0x5080000000470D0D Mufu
    temp_524 = 1.0 / temp_523;
    // 0x000F78: 0x3868104080070221 Fmul
    temp_525 = temp_132 * 4.0;
    // 0x000F88: 0x4C98079C0207002B Mov
    // 0x000F90: 0x5C69100000C71212 Fmul
    temp_526 = 0.0 - temp_521;
    temp_527 = temp_129 * temp_526;
    // 0x000F98: 0x5C68100000C70E10 Fmul
    temp_528 = temp_126 * temp_521;
    // 0x000FA8: 0x5080000000472828 Mufu
    // 0x000FB0: 0x5C68100000C70111 Fmul
    temp_529 = temp_127 * temp_521;
    // 0x000FB8: 0x5C68100000D72F15 Fmul
    temp_530 = temp_212 * temp_524;
    // 0x000FC8: 0x5C68100000D71616 Fmul
    temp_531 = temp_275 * temp_524;
    // 0x000FD0: 0x5C69100000D71717 Fmul
    temp_532 = 0.0 - temp_524;
    temp_533 = temp_260 * temp_532;
    // 0x000FD8: 0xC0BA0163EFF7100C Tex
    temp_534 = textureLod(fp_t_tcb_16, vec3(temp_528, temp_529, temp_527), 0.0).xyz;
    temp_535 = temp_534.x;
    temp_536 = temp_534.y;
    temp_537 = temp_534.z;
    // 0x000FE8: 0x5C98078001270020 Mov
    // 0x000FF0: 0xC1BA0143F2A71414 Tex
    temp_538 = textureLod(fp_t_tcb_14, vec4(temp_530, temp_531, temp_533, float(1)), temp_520).xyz;
    temp_539 = temp_538.x;
    temp_540 = temp_538.y;
    temp_541 = temp_538.z;
    // 0x000FF8: 0xD9A2018202071010 Texs
    temp_542 = textureLod(fp_t_tcb_18, vec3(temp_528, temp_529, temp_527), temp_525).xyz;
    temp_543 = temp_542.x;
    temp_544 = temp_542.y;
    temp_545 = temp_542.z;
    // 0x001008: 0xE043FF910287FF2C Ipa
    temp_546 = in_attr9.x;
    // 0x001010: 0xE043FF914287FF2D Ipa
    temp_547 = in_attr9.y;
    // 0x001018: 0xE043FF918287FF2E Ipa
    temp_548 = in_attr9.z;
    // 0x001028: 0xDEBA0000C2B72C2C TexB
    temp_549 = texture(fp_t_cb7_20, vec3(temp_546, temp_547, temp_548)).x;
    // 0x001030: 0x3859103F80070202 Fadd
    temp_550 = 0.0 - temp_132;
    temp_551 = temp_550 + 1.0;
    // 0x001038: 0x3859103F80070329 Fadd
    temp_552 = 0.0 - temp_157;
    temp_553 = temp_552 + 1.0;
    // 0x001048: 0x010410676C97F030 Mov32i
    // 0x001050: 0x1E23E468DB97032F Fmul32i
    temp_554 = temp_157 * 0.193900004;
    // 0x001058: 0x49A012180A170B24 Ffma
    temp_555 = fma(temp_282, fp_c6.data[40].y, temp_261);
    // 0x001068: 0x49A019180A171332 Ffma
    temp_556 = fma(temp_283, fp_c6.data[40].y, temp_243);
    // 0x001070: 0x5C68100000270202 Fmul
    temp_557 = temp_551 * temp_551;
    // 0x001078: 0x4C68101809072929 Fmul
    temp_558 = temp_553 * fp_c6.data[36].x;
    // 0x001088: 0x49A0180400C70312 Ffma
    temp_559 = fma(temp_157, fp_c1.data[3].x, 8.40400028);
    // 0x001090: 0x5080400000372929 Mufu
    temp_560 = abs(temp_558);
    temp_561 = log2(temp_560);
    // 0x001098: 0x0103F0000007F00B Mov32i
    // 0x0010A8: 0x49A013180A170A26 Ffma
    temp_562 = fma(temp_284, fp_c6.data[40].y, temp_267);
    // 0x0010B0: 0xE04BFF904287FF0A Ipa
    temp_563 = in_attr8.y;
    temp_564 = clamp(temp_563, 0.0, 1.0);
    // 0x0010B8: 0x5C68100000270202 Fmul
    temp_565 = temp_557 * temp_557;
    // 0x0010C8: 0x0103E2CD9E87F013 Mov32i
    // 0x0010D0: 0x49A012980A171825 Ffma
    temp_566 = fma(temp_285, fp_c6.data[40].y, temp_262);
    // 0x0010D8: 0x51A0090400D70318 Ffma
    temp_567 = fma(temp_157, temp_559, fp_c1.data[3].y);
    // 0x0010E8: 0x32A005BF0007010B Ffma
    temp_568 = fma(temp_127, 0.5, 0.5);
    // 0x0010F0: 0x49A017840087022F Ffma
    temp_569 = fma(temp_565, fp_c1.data[2].x, temp_554);
    // 0x0010F8: 0x0104066978D7F02B Mov32i
    // 0x001108: 0x49A2098400F70201 Ffma
    temp_570 = fma(temp_565, fp_c1.data[3].w, -0.168799996);
    // 0x001110: 0x51A00C0400E70317 Ffma
    temp_571 = fma(temp_157, temp_567, fp_c1.data[3].z);
    // 0x001118: 0x4C68101809172929 Fmul
    temp_572 = temp_561 * fp_c6.data[36].y;
    // 0x001128: 0x4C9807980B47002D Mov
    // 0x001130: 0x088BF05D63972F12 Fadd32i
    temp_573 = temp_569 + -0.522800028;
    // 0x001138: 0x4C98079809670021 Mov
    // 0x001148: 0x4C9807980087002A Mov
    // 0x001150: 0x5C90008002970029 Rro
    // 0x001158: 0xF0F0000034570000 Depbar
    // 0x001168: 0x51A216980B471E1E Ffma
    temp_574 = 0.0 - fp_c6.data[45].x;
    temp_575 = fma(temp_26, fp_c6.data[45].x, temp_574);
    // 0x001170: 0x5C68100001270313 Fmul
    temp_576 = temp_157 * temp_573;
    // 0x001178: 0x49A2158400970203 Ffma
    temp_577 = fma(temp_565, fp_c1.data[2].y, -3.60299993);
    // 0x001188: 0x5C68100000170212 Fmul
    temp_578 = temp_565 * temp_570;
    // 0x001190: 0x5084000000272901 Mufu
    temp_579 = exp2(temp_572);
    temp_580 = clamp(temp_579, 0.0, 1.0);
    // 0x001198: 0x51A216980B471F1F Ffma
    temp_581 = 0.0 - fp_c6.data[45].x;
    temp_582 = fma(temp_27, fp_c6.data[45].x, temp_581);
    // 0x0011A8: 0x51A216980B470000 Ffma
    temp_583 = 0.0 - fp_c6.data[45].x;
    temp_584 = fma(temp_28, fp_c6.data[45].x, temp_583);
    // 0x0011B0: 0x51A0018400A70218 Ffma
    temp_585 = fma(temp_565, temp_577, fp_c1.data[2].z);
    // 0x0011B8: 0x5C6013800127172D Fmnmx
    temp_586 = min(temp_571, temp_578);
    // 0x0011C8: 0x4C58101408172103 Fadd
    temp_587 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x0011D0: 0x4C98079800970017 Mov
    // 0x0011D8: 0x010404000007F029 Mov32i
    // 0x0011E8: 0x5C68100000A70A2B Fmul
    temp_588 = temp_564 * temp_564;
    // 0x0011F0: 0x59A0098001870213 Ffma
    temp_589 = fma(temp_565, temp_585, temp_576);
    // 0x0011F8: 0x4C59101800472A02 Fadd
    temp_590 = 0.0 - fp_c6.data[2].x;
    temp_591 = temp_590 + fp_c6.data[1].x;
    // 0x001208: 0x5C68100000370112 Fmul
    temp_592 = temp_580 * temp_587;
    // 0x001210: 0x4C59101800571718 Fadd
    temp_593 = 0.0 - fp_c6.data[2].y;
    temp_594 = temp_593 + fp_c6.data[1].y;
    // 0x001218: 0x386C104248070817 Fmul
    temp_595 = temp_215 * 50.0;
    temp_596 = clamp(temp_595, 0.0, 1.0);
    // 0x001228: 0x4C98079800A70021 Mov
    // 0x001230: 0x51A0011800870B01 Ffma
    temp_597 = fma(temp_568, temp_591, fp_c6.data[2].x);
    // 0x001238: 0x33A014C000070A02 Ffma
    temp_598 = fma(temp_564, -2.0, 3.0);
    // 0x001248: 0x51A00C1800970B03 Ffma
    temp_599 = fma(temp_568, temp_594, fp_c6.data[2].y);
    // 0x001250: 0x5C5C30000FF72D29 Fadd
    temp_600 = temp_586 + -0.0;
    temp_601 = clamp(temp_600, 0.0, 1.0);
    // 0x001258: 0x4C68101808C7120A Fmul
    temp_602 = temp_592 * fp_c6.data[35].x;
    // 0x001268: 0x4C5C100400B71318 Fadd
    temp_603 = temp_589 + fp_c1.data[2].w;
    temp_604 = clamp(temp_603, 0.0, 1.0);
    // 0x001270: 0x4C68101808D71213 Fmul
    temp_605 = temp_592 * fp_c6.data[35].y;
    // 0x001278: 0x4C59101800672121 Fadd
    temp_606 = 0.0 - fp_c6.data[2].z;
    temp_607 = temp_606 + fp_c6.data[1].z;
    // 0x001288: 0x5C68100002B70202 Fmul
    temp_608 = temp_598 * temp_588;
    // 0x001290: 0x5C6810000177292A Fmul
    temp_609 = temp_601 * temp_596;
    // 0x001298: 0x49A0121408270A24 Ffma
    temp_610 = fma(temp_602, fp_c5.data[32].z, temp_555);
    // 0x0012A8: 0x4C68101808E71217 Fmul
    temp_611 = temp_592 * fp_c6.data[35].z;
    // 0x0012B0: 0x5C58300002971818 Fadd
    temp_612 = 0.0 - temp_601;
    temp_613 = temp_604 + temp_612;
    // 0x0012B8: 0x49A1051408270A0A Ffma
    temp_614 = 0.0 - fp_c5.data[32].z;
    temp_615 = fma(temp_602, temp_614, temp_602);
    // 0x0012C8: 0x49A0129408271325 Ffma
    temp_616 = fma(temp_605, fp_c5.data[32].z, temp_566);
    // 0x0012D0: 0x49A1099408271312 Ffma
    temp_617 = 0.0 - fp_c5.data[32].z;
    temp_618 = fma(temp_605, temp_617, temp_605);
    // 0x0012D8: 0x51A0109800A70B0B Ffma
    temp_619 = fma(temp_568, temp_607, fp_c6.data[2].z);
    // 0x0012E8: 0x49A0131408271726 Ffma
    temp_620 = fma(temp_611, fp_c5.data[32].z, temp_562);
    // 0x0012F0: 0x59A0150001870713 Ffma
    temp_621 = fma(temp_199, temp_613, temp_609);
    // 0x0012F8: 0xE043FF900287FF07 Ipa
    temp_622 = in_attr8.x;
    // 0x001308: 0x49A10B9408271717 Ffma
    temp_623 = 0.0 - fp_c5.data[32].z;
    temp_624 = fma(temp_611, temp_623, temp_611);
    // 0x001310: 0xE043FF8C8287FF28 Ipa
    temp_625 = in_attr4.z;
    // 0x001318: 0x59A0150001870808 Ffma
    temp_626 = fma(temp_215, temp_613, temp_609);
    // 0x001328: 0x59A0150001870909 Ffma
    temp_627 = fma(temp_216, temp_613, temp_609);
    // 0x001330: 0x4C68101803770202 Fmul
    temp_628 = temp_608 * fp_c6.data[13].w;
    // 0x001338: 0x5C58100001773217 Fadd
    temp_629 = temp_556 + temp_624;
    // 0x001348: 0xF0F0000034370000 Depbar
    // 0x001350: 0x49A019980A172727 Ffma
    temp_630 = fma(temp_286, fp_c6.data[40].y, temp_516);
    // 0x001358: 0x49A018980A170F0F Ffma
    temp_631 = fma(temp_287, fp_c6.data[40].y, temp_519);
    // 0x001368: 0x5C58100000A7270A Fadd
    temp_632 = temp_630 + temp_615;
    // 0x001370: 0x5C58100001270F0F Fadd
    temp_633 = temp_631 + temp_618;
    // 0x001378: 0xF0F0000034170000 Depbar
    // 0x001388: 0x49A0060400770101 Ffma
    temp_634 = fma(temp_597, fp_c1.data[1].w, temp_535);
    // 0x001390: 0x49A006840077030D Ffma
    temp_635 = fma(temp_599, fp_c1.data[1].w, temp_536);
    // 0x001398: 0x49A0070400770B0E Ffma
    temp_636 = fma(temp_619, fp_c1.data[1].w, temp_537);
    // 0x0013A8: 0x49A0081808571412 Ffma
    temp_637 = fma(temp_539, fp_c6.data[33].y, temp_543);
    // 0x0013B0: 0x49A0089808571503 Ffma
    temp_638 = fma(temp_540, fp_c6.data[33].y, temp_544);
    // 0x0013B8: 0x5C58100000170A01 Fadd
    temp_639 = temp_632 + temp_634;
    // 0x0013C8: 0x5C58100000D70F0D Fadd
    temp_640 = temp_633 + temp_635;
    // 0x0013D0: 0x5C58100000E7170E Fadd
    temp_641 = temp_629 + temp_636;
    // 0x0013D8: 0x49A0101808571620 Ffma
    temp_642 = fma(temp_541, fp_c6.data[33].y, temp_545);
    // 0x0013E8: 0x59A0120001271313 Ffma
    temp_643 = fma(temp_621, temp_637, temp_610);
    // 0x0013F0: 0x59A0128000370808 Ffma
    temp_644 = fma(temp_626, temp_638, temp_616);
    // 0x0013F8: 0x59A1008000172301 Ffma
    temp_645 = 0.0 - temp_639;
    temp_646 = fma(temp_15, temp_645, temp_639);
    // 0x001408: 0x59A1068000D72303 Ffma
    temp_647 = 0.0 - temp_640;
    temp_648 = fma(temp_15, temp_647, temp_640);
    // 0x001410: 0x59A1070000E72323 Ffma
    temp_649 = 0.0 - temp_641;
    temp_650 = fma(temp_15, temp_649, temp_641);
    // 0x001418: 0x59A0130002070909 Ffma
    temp_651 = fma(temp_627, temp_642, temp_620);
    // 0x001428: 0x4C9807980297000A Mov
    // 0x001430: 0x59A0098000170401 Ffma
    temp_652 = fma(temp_178, temp_646, temp_643);
    // 0x001438: 0x4C98079802870004 Mov
    // 0x001448: 0x59A0040000370503 Ffma
    temp_653 = fma(temp_179, temp_648, temp_644);
    // 0x001450: 0x59A0048002370609 Ffma
    temp_654 = fma(temp_195, temp_650, temp_651);
    // 0x001458: 0x51A0051802971F1F Ffma
    temp_655 = fma(temp_582, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001468: 0x49A2011803570206 Ffma
    temp_656 = 0.0 - temp_628;
    temp_657 = fma(temp_628, fp_c6.data[13].y, temp_656);
    // 0x001470: 0x5C68100000171C1C Fmul
    temp_658 = temp_271 * temp_652;
    // 0x001478: 0x51A0021802871E1E Ffma
    temp_659 = fma(temp_575, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001488: 0x5C68100000371D1D Fmul
    temp_660 = temp_269 * temp_653;
    // 0x001490: 0x4C98079802A70003 Mov
    // 0x001498: 0x5C68100000972222 Fmul
    temp_661 = temp_273 * temp_654;
    // 0x0014A8: 0x49A00E1406C71919 Ffma
    temp_662 = fma(temp_250, fp_c5.data[27].x, temp_658);
    // 0x0014B0: 0x49A00E9406C71A1A Ffma
    temp_663 = fma(temp_237, fp_c5.data[27].x, temp_660);
    // 0x0014B8: 0x51A0019802A70000 Ffma
    temp_664 = fma(temp_584, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0014C8: 0x49A0111406C71B1B Ffma
    temp_665 = fma(temp_252, fp_c5.data[27].x, temp_661);
    // 0x0014D0: 0x5C58300001E71901 Fadd
    temp_666 = 0.0 - temp_659;
    temp_667 = temp_662 + temp_666;
    // 0x0014D8: 0x5C58300001F71A04 Fadd
    temp_668 = 0.0 - temp_655;
    temp_669 = temp_663 + temp_668;
    // 0x0014E8: 0x49A503980BC72C07 Ffma
    temp_670 = 0.0 - fp_c6.data[47].x;
    temp_671 = fma(temp_549, temp_670, temp_622);
    temp_672 = clamp(temp_671, 0.0, 1.0);
    // 0x0014F0: 0x49A00F180BF70103 Ffma
    temp_673 = fma(temp_667, fp_c6.data[47].w, temp_659);
    // 0x0014F8: 0x5080000000370707 Mufu
    temp_674 = log2(temp_672);
    // 0x001508: 0x5C58300000071B01 Fadd
    temp_675 = 0.0 - temp_664;
    temp_676 = temp_665 + temp_675;
    // 0x001510: 0x49A00F980BF70404 Ffma
    temp_677 = fma(temp_669, fp_c6.data[47].w, temp_655);
    // 0x001518: 0x5C60178000371E03 Fmnmx
    temp_678 = max(temp_659, temp_673);
    // 0x001528: 0x49A000180BF70101 Ffma
    temp_679 = fma(temp_676, fp_c6.data[47].w, temp_664);
    // 0x001530: 0x5C60178000471F04 Fmnmx
    temp_680 = max(temp_655, temp_677);
    // 0x001538: 0x4C68101803170705 Fmul
    temp_681 = temp_674 * fp_c6.data[12].y;
    // 0x001548: 0x5C60178000170001 Fmnmx
    temp_682 = max(temp_664, temp_679);
    // 0x001550: 0x59A0020000670404 Ffma
    temp_683 = fma(temp_680, temp_657, temp_680);
    // 0x001558: 0x5C9807800FF70006 Mov
    // 0x001568: 0x5C90008000570007 Rro
    // 0x001570: 0x49A2011803470205 Ffma
    temp_684 = 0.0 - temp_628;
    temp_685 = fma(temp_628, fp_c6.data[13].x, temp_684);
    // 0x001578: 0x5080000000270707 Mufu
    temp_686 = exp2(temp_681);
    // 0x001588: 0x49A2011803670202 Ffma
    temp_687 = 0.0 - temp_628;
    temp_688 = fma(temp_628, fp_c6.data[13].z, temp_687);
    // 0x001590: 0x59A0018000570300 Ffma
    temp_689 = fma(temp_678, temp_685, temp_678);
    // 0x001598: 0x59A0008000270102 Ffma
    temp_690 = fma(temp_682, temp_688, temp_682);
    // 0x0015A8: 0x5C59100000471A01 Fadd
    temp_691 = 0.0 - temp_663;
    temp_692 = temp_691 + temp_683;
    // 0x0015B0: 0x4C58100C03872804 Fadd
    temp_693 = temp_625 + fp_c3.data[14].x;
    // 0x0015B8: 0x0103EC000007F005 Mov32i
    // 0x0015C8: 0x5C59100000071900 Fadd
    temp_694 = 0.0 - temp_662;
    temp_695 = temp_694 + temp_689;
    // 0x0015D0: 0x4C68101802B70703 Fmul
    temp_696 = temp_686 * fp_c6.data[10].w;
    // 0x0015D8: 0x5C59100000271B02 Fadd
    temp_697 = 0.0 - temp_665;
    temp_698 = temp_697 + temp_690;
    // 0x0015E8: 0x0103F8000007F007 Mov32i
    // 0x0015F0: 0x49A37F8C03C70404 Ffma
    temp_699 = 0.0 - fp_c3.data[15].x;
    temp_700 = fma(temp_693, temp_699, -0.0);
    // 0x0015F8: 0x59A00C8000370000 Ffma
    temp_701 = fma(temp_695, temp_696, temp_662);
    // 0x001608: 0x59A00D0000370101 Ffma
    temp_702 = fma(temp_692, temp_696, temp_663);
    // 0x001610: 0x59A00D8000370202 Ffma
    temp_703 = fma(temp_698, temp_696, temp_665);
    // 0x001618: 0x0103F8000007F003 Mov32i
    // 0x001628: 0xE30000000007000F Exit
    out_attr0.x = temp_701;
    out_attr0.y = temp_702;
    out_attr0.z = temp_703;
    out_attr0.w = 1.0;
    out_attr1.x = temp_700;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
