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
layout (binding = 1) uniform sampler2D fp_t_tcb_28;
layout (binding = 2) uniform sampler2D fp_t_tcb_24;
layout (binding = 3) uniform sampler2D fp_t_tcb_2A;
layout (binding = 4) uniform sampler2D fp_t_tcb_2E;
layout (binding = 5) uniform sampler2D fp_t_tcb_20;
layout (binding = 6) uniform sampler2D fp_t_tcb_30;
layout (binding = 7) uniform samplerCube fp_t_tcb_16;
layout (binding = 8) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 9) uniform samplerCube fp_t_tcb_18;
layout (binding = 10) uniform sampler3D fp_t_cb7_20;
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
    precise float temp_13;
    precise vec3 temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise vec3 temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise vec3 temp_24;
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
    uint temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    int temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    int temp_179;
    uint temp_180;
    uint temp_181;
    int temp_182;
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
    bool temp_224;
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
    int temp_267;
    bool temp_268;
    int temp_269;
    int temp_270;
    int temp_271;
    int temp_272;
    int temp_273;
    uint temp_274;
    uint temp_275;
    int temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    int temp_281;
    int temp_282;
    uint temp_283;
    uint temp_284;
    int temp_285;
    precise float temp_286;
    int temp_287;
    uint temp_288;
    int temp_289;
    precise float temp_290;
    int temp_291;
    uint temp_292;
    uint temp_293;
    int temp_294;
    precise float temp_295;
    int temp_296;
    uint temp_297;
    int temp_298;
    precise float temp_299;
    int temp_300;
    uint temp_301;
    uint temp_302;
    int temp_303;
    precise float temp_304;
    int temp_305;
    uint temp_306;
    int temp_307;
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
    int temp_327;
    uint temp_328;
    uint temp_329;
    int temp_330;
    precise float temp_331;
    precise float temp_332;
    precise float temp_333;
    int temp_334;
    uint temp_335;
    uint temp_336;
    int temp_337;
    precise float temp_338;
    int temp_339;
    uint temp_340;
    int temp_341;
    precise float temp_342;
    precise float temp_343;
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
    uint temp_369;
    int temp_370;
    precise float temp_371;
    bool temp_372;
    uint temp_373;
    precise float temp_374;
    precise float temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    uint temp_381;
    precise float temp_382;
    bool temp_383;
    precise float temp_384;
    int temp_385;
    uint temp_386;
    uint temp_387;
    int temp_388;
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
    precise float temp_407;
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
    uint temp_418;
    uint temp_419;
    int temp_420;
    precise float temp_421;
    int temp_422;
    uint temp_423;
    int temp_424;
    precise float temp_425;
    precise float temp_426;
    int temp_427;
    uint temp_428;
    uint temp_429;
    int temp_430;
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
    precise vec3 temp_512;
    precise float temp_513;
    precise float temp_514;
    precise float temp_515;
    precise float temp_516;
    precise float temp_517;
    precise float temp_518;
    precise float temp_519;
    precise float temp_520;
    precise float temp_521;
    precise vec3 temp_522;
    precise float temp_523;
    precise float temp_524;
    precise float temp_525;
    precise vec3 temp_526;
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
    // 0x000008: 0x0103F0000007F02A Mov32i
    // 0x000010: 0xE003FF87CFF7FF0C Ipa
    // 0x000018: 0xE003FF870FF7FF09 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000028: 0xE003FF874FF7FF08 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000030: 0x5080000000470C0C Mufu
    // 0x000038: 0x4C68100C04A70909 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000048: 0x4C68100C04B70808 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000050: 0xE043FF8E00C7FF0A Ipa
    temp_8 = in_attr6.x;
    // 0x000058: 0xE043FF8E40C7FF0B Ipa
    temp_9 = in_attr6.y;
    // 0x000068: 0xD830026FF0B70A06 Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000070: 0xD820028FF0B70A05 Texs
    temp_13 = texture(fp_t_tcb_28, vec2(temp_8, temp_9)).x;
    // 0x000078: 0xD822024040B70A20 Texs
    temp_14 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyz;
    temp_15 = temp_14.x;
    temp_16 = temp_14.y;
    temp_17 = temp_14.z;
    // 0x000088: 0xD82202AFF0B70A03 Texs
    temp_18 = texture(fp_t_tcb_2A, vec2(temp_8, temp_9)).x;
    // 0x000090: 0xD82202EFF0B70A0D Texs
    temp_19 = texture(fp_t_tcb_2E, vec2(temp_8, temp_9)).x;
    // 0x000098: 0xD82202002087091C Texs
    temp_20 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_21 = temp_20.x;
    temp_22 = temp_20.y;
    temp_23 = temp_20.z;
    // 0x0000A8: 0xD822030010B70A1E Texs
    temp_24 = texture(fp_t_tcb_30, vec2(temp_8, temp_9)).xyz;
    temp_25 = temp_24.x;
    temp_26 = temp_24.y;
    temp_27 = temp_24.z;
    // 0x0000B0: 0xE043FF8A00C7FF0E Ipa
    temp_28 = in_attr2.x;
    // 0x0000B8: 0xE043FF8900C7FF12 Ipa
    temp_29 = in_attr1.x;
    // 0x0000C8: 0xE043FF8A40C7FF0F Ipa
    temp_30 = in_attr2.y;
    // 0x0000D0: 0xE043FF8940C7FF13 Ipa
    temp_31 = in_attr1.y;
    // 0x0000D8: 0xE043FF8A80C7FF10 Ipa
    temp_32 = in_attr2.z;
    // 0x0000E8: 0xE043FF8B00C7FF2E Ipa
    temp_33 = in_attr3.x;
    // 0x0000F0: 0xE043FF8B40C7FF2D Ipa
    temp_34 = in_attr3.y;
    // 0x0000F8: 0xE043FF8B80C7FF2C Ipa
    temp_35 = in_attr3.z;
    // 0x000108: 0xE043FF8980C7FF14 Ipa
    temp_36 = in_attr1.z;
    // 0x000110: 0xE2900000D3800000 Ssy
    // 0x000118: 0xE043FF8800C7FF0B Ipa
    temp_37 = in_attr0.x;
    // 0x000128: 0x5C68100000E70E00 Fmul
    temp_38 = temp_28 * temp_28;
    // 0x000130: 0x5C68100001271211 Fmul
    temp_39 = temp_29 * temp_29;
    // 0x000138: 0x5C68100002E72E16 Fmul
    temp_40 = temp_33 * temp_33;
    // 0x000148: 0x59A0000000F70F0A Ffma
    temp_41 = fma(temp_30, temp_30, temp_38);
    // 0x000150: 0xE043FF8840C7FF00 Ipa
    temp_42 = in_attr0.y;
    // 0x000158: 0x59A0088001371315 Ffma
    temp_43 = fma(temp_31, temp_31, temp_39);
    // 0x000168: 0x59A00B0002D72D17 Ffma
    temp_44 = fma(temp_34, temp_34, temp_40);
    // 0x000170: 0x59A0050001071011 Ffma
    temp_45 = fma(temp_32, temp_32, temp_41);
    // 0x000178: 0xE043FF8880C7FF0A Ipa
    temp_46 = in_attr0.z;
    // 0x000188: 0x59A00A8001471415 Ffma
    temp_47 = fma(temp_36, temp_36, temp_43);
    // 0x000190: 0x5080000000571111 Mufu
    temp_48 = inversesqrt(temp_45);
    // 0x000198: 0x5C68100000B70B19 Fmul
    temp_49 = temp_37 * temp_37;
    // 0x0001A8: 0x5080000000571515 Mufu
    temp_50 = inversesqrt(temp_47);
    // 0x0001B0: 0x59A00B8002C72C1A Ffma
    temp_51 = fma(temp_35, temp_35, temp_44);
    // 0x0001B8: 0x5080000000571A1B Mufu
    temp_52 = inversesqrt(temp_51);
    // 0x0001C8: 0x5C68100001170F16 Fmul
    temp_53 = temp_30 * temp_48;
    // 0x0001D0: 0x5C68100001170E0E Fmul
    temp_54 = temp_28 * temp_48;
    // 0x0001D8: 0x5C68100001571218 Fmul
    temp_55 = temp_29 * temp_50;
    // 0x0001E8: 0x5C68100001571417 Fmul
    temp_56 = temp_36 * temp_50;
    // 0x0001F0: 0x5C68100001571313 Fmul
    temp_57 = temp_31 * temp_50;
    // 0x0001F8: 0x5C69100001B72E2E Fmul
    temp_58 = 0.0 - temp_52;
    temp_59 = temp_33 * temp_58;
    // 0x000208: 0x5C69100001B72D2D Fmul
    temp_60 = 0.0 - temp_52;
    temp_61 = temp_34 * temp_60;
    // 0x000210: 0x5C68100001171010 Fmul
    temp_62 = temp_32 * temp_48;
    // 0x000218: 0x5C69100001B72C2C Fmul
    temp_63 = 0.0 - temp_52;
    temp_64 = temp_35 * temp_63;
    // 0x000228: 0x59A00C8000070019 Ffma
    temp_65 = fma(temp_42, temp_42, temp_49);
    // 0x000230: 0x4C58301805C72E14 Fadd
    temp_66 = 0.0 - fp_c6.data[23].x;
    temp_67 = temp_59 + temp_66;
    // 0x000238: 0x59A00C8000A70A19 Ffma
    temp_68 = fma(temp_46, temp_46, temp_65);
    // 0x000248: 0x5080000000571919 Mufu
    temp_69 = inversesqrt(temp_68);
    // 0x000250: 0x5C68100001970000 Fmul
    temp_70 = temp_42 * temp_69;
    // 0x000258: 0x5C68100001970A0A Fmul
    temp_71 = temp_46 * temp_69;
    // 0x000268: 0xF0F0000034270000 Depbar
    // 0x000270: 0x5C6810000077070F Fmul
    temp_72 = temp_12 * temp_12;
    // 0x000278: 0x5C68100000771611 Fmul
    temp_73 = temp_53 * temp_12;
    // 0x000288: 0x4C58301805D72D16 Fadd
    temp_74 = 0.0 - fp_c6.data[23].y;
    temp_75 = temp_61 + temp_74;
    // 0x000290: 0x5C68100000771010 Fmul
    temp_76 = temp_62 * temp_12;
    // 0x000298: 0x4C6810180A070505 Fmul
    temp_77 = temp_13 * fp_c6.data[40].x;
    // 0x0002A8: 0x385D103F80070D0D Fadd
    temp_78 = 0.0 - temp_19;
    temp_79 = temp_78 + 1.0;
    temp_80 = clamp(temp_79, 0.0, 1.0);
    // 0x0002B0: 0x59A007800067060F Ffma
    temp_81 = fma(temp_11, temp_11, temp_72);
    // 0x0002B8: 0x59A0088001370611 Ffma
    temp_82 = fma(temp_11, temp_57, temp_73);
    // 0x0002C8: 0x01040DF760C7F013 Mov32i
    // 0x0002D0: 0x59A0080001770610 Ffma
    temp_83 = fma(temp_11, temp_56, temp_76);
    // 0x0002D8: 0x386013BF80070505 Fmnmx
    temp_84 = min(temp_77, 1.0);
    // 0x0002E8: 0x385D103F80070F12 Fadd
    temp_85 = 0.0 - temp_81;
    temp_86 = temp_85 + 1.0;
    temp_87 = clamp(temp_86, 0.0, 1.0);
    // 0x0002F0: 0x5C68100000770E0F Fmul
    temp_88 = temp_54 * temp_12;
    // 0x0002F8: 0x5080000000871215 Mufu
    temp_89 = sqrt(temp_87);
    // 0x000308: 0x5C68100001970B0E Fmul
    temp_90 = temp_37 * temp_69;
    // 0x000310: 0x4C58301805E72C0B Fadd
    temp_91 = 0.0 - fp_c6.data[23].z;
    temp_92 = temp_64 + temp_91;
    // 0x000318: 0x5C9807800FF70019 Mov
    // 0x000328: 0x4C60178400070505 Fmnmx
    temp_93 = max(temp_84, fp_c1.data[0].x);
    // 0x000330: 0x59A007800187060F Ffma
    temp_94 = fma(temp_11, temp_55, temp_88);
    // 0x000338: 0x5C68100001471418 Fmul
    temp_95 = temp_67 * temp_67;
    // 0x000348: 0x51A402840007052B Ffma
    temp_96 = fma(temp_93, temp_93, fp_c1.data[0].x);
    temp_97 = clamp(temp_96, 0.0, 1.0);
    // 0x000350: 0x32A0153F0007052A Ffma
    temp_98 = fma(temp_93, 0.5, 0.5);
    // 0x000358: 0x59A00C0001671618 Ffma
    temp_99 = fma(temp_75, temp_75, temp_95);
    // 0x000368: 0x59A0078001570E0E Ffma
    temp_100 = fma(temp_90, temp_89, temp_94);
    // 0x000370: 0x59A0088001570000 Ffma
    temp_101 = fma(temp_70, temp_89, temp_82);
    // 0x000378: 0x59A0080001570A0A Ffma
    temp_102 = fma(temp_71, temp_89, temp_83);
    // 0x000388: 0x5C68100002B72B29 Fmul
    temp_103 = temp_97 * temp_97;
    // 0x000390: 0x5C68120002A72A2A Fmul
    temp_104 = temp_98 * 0.5;
    temp_105 = temp_104 * temp_98;
    // 0x000398: 0x59A00C0000B70B18 Ffma
    temp_106 = fma(temp_92, temp_92, temp_99);
    // 0x0003A8: 0x5C68100000E70E06 Fmul
    temp_107 = temp_100 * temp_100;
    // 0x0003B0: 0x5080000000571811 Mufu
    temp_108 = inversesqrt(temp_106);
    // 0x0003B8: 0x59A0030000070007 Ffma
    temp_109 = fma(temp_101, temp_101, temp_107);
    // 0x0003C8: 0x5C9807800FF70018 Mov
    // 0x0003D0: 0x59A0038000A70A07 Ffma
    temp_110 = fma(temp_102, temp_102, temp_109);
    // 0x0003D8: 0x5C68100001171414 Fmul
    temp_111 = temp_67 * temp_108;
    // 0x0003E8: 0x5080000000570707 Mufu
    temp_112 = inversesqrt(temp_110);
    // 0x0003F0: 0x5C68100001171616 Fmul
    temp_113 = temp_75 * temp_108;
    // 0x0003F8: 0x5C68100001170B0B Fmul
    temp_114 = temp_92 * temp_108;
    // 0x000408: 0x4C69101805C71410 Fmul
    temp_115 = 0.0 - fp_c6.data[23].x;
    temp_116 = temp_111 * temp_115;
    // 0x000410: 0x5C68100001472E0F Fmul
    temp_117 = temp_59 * temp_111;
    // 0x000418: 0x49A1081805D71610 Ffma
    temp_118 = 0.0 - fp_c6.data[23].y;
    temp_119 = fma(temp_113, temp_118, temp_116);
    // 0x000428: 0x5C68100000770E0E Fmul
    temp_120 = temp_100 * temp_112;
    // 0x000430: 0x59A0078001672D06 Ffma
    temp_121 = fma(temp_61, temp_113, temp_117);
    // 0x000438: 0x5C68100000770000 Fmul
    temp_122 = temp_101 * temp_112;
    // 0x000448: 0x5C68100000770A12 Fmul
    temp_123 = temp_102 * temp_112;
    // 0x000450: 0x49A5081805E70B11 Ffma
    temp_124 = 0.0 - fp_c6.data[23].z;
    temp_125 = fma(temp_114, temp_124, temp_119);
    temp_126 = clamp(temp_125, 0.0, 1.0);
    // 0x000458: 0x5C68100001470E0F Fmul
    temp_127 = temp_120 * temp_111;
    // 0x000468: 0x59A4030000B72C06 Ffma
    temp_128 = fma(temp_64, temp_114, temp_121);
    temp_129 = clamp(temp_128, 0.0, 1.0);
    // 0x000470: 0x4C58301407B70414 Fadd
    temp_130 = 0.0 - fp_c5.data[30].w;
    temp_131 = temp_17 + temp_130;
    // 0x000478: 0x49A209840017110A Ffma
    temp_132 = fma(temp_126, fp_c1.data[0].y, -6.98316002);
    // 0x000488: 0x59A0078001670010 Ffma
    temp_133 = fma(temp_122, temp_113, temp_127);
    // 0x000490: 0x49A2098400170607 Ffma
    temp_134 = fma(temp_129, fp_c1.data[0].y, -6.98316002);
    // 0x000498: 0x3868104180070913 Fmul
    temp_135 = temp_6 * 16.0;
    // 0x0004A8: 0x5CA8148001370A13 F2f
    temp_136 = floor(temp_135);
    // 0x0004B0: 0x5C68100000A7110A Fmul
    temp_137 = temp_126 * temp_132;
    // 0x0004B8: 0x3868104110070811 Fmul
    temp_138 = temp_7 * 9.0;
    // 0x0004C8: 0x59A4080000B71210 Ffma
    temp_139 = fma(temp_123, temp_114, temp_133);
    temp_140 = clamp(temp_139, 0.0, 1.0);
    // 0x0004D0: 0x5CA8148001170A11 F2f
    temp_141 = floor(temp_138);
    // 0x0004D8: 0x5C68100002E70E0B Fmul
    temp_142 = temp_120 * temp_59;
    // 0x0004E8: 0x5C68100000770607 Fmul
    temp_143 = temp_129 * temp_134;
    // 0x0004F0: 0x4C69101805C70E06 Fmul
    temp_144 = 0.0 - fp_c6.data[23].x;
    temp_145 = temp_120 * temp_144;
    // 0x0004F8: 0x5C90008000A7001A Rro
    // 0x000508: 0x59A2080002971009 Ffma
    temp_146 = 0.0 - temp_140;
    temp_147 = fma(temp_140, temp_103, temp_146);
    // 0x000510: 0x5080000000271A1A Mufu
    temp_148 = exp2(temp_137);
    // 0x000518: 0x59A0058002D7000B Ffma
    temp_149 = fma(temp_122, temp_61, temp_142);
    // 0x000528: 0x49A1031805D70008 Ffma
    temp_150 = 0.0 - fp_c6.data[23].y;
    temp_151 = fma(temp_122, temp_150, temp_145);
    // 0x000530: 0x5C90008000770016 Rro
    // 0x000538: 0x51A0048400271009 Ffma
    temp_152 = fma(temp_140, temp_147, fp_c1.data[0].z);
    // 0x000548: 0x5080000000271616 Mufu
    temp_153 = exp2(temp_143);
    // 0x000550: 0x59A4058002C71206 Ffma
    temp_154 = fma(temp_123, temp_64, temp_149);
    temp_155 = clamp(temp_154, 0.0, 1.0);
    // 0x000558: 0x5080000000470909 Mufu
    temp_156 = 1.0 / temp_152;
    // 0x000568: 0x32A009C180071128 Ffma
    temp_157 = fma(temp_141, 16.0, temp_136);
    // 0x000570: 0x49A5041805E71208 Ffma
    temp_158 = 0.0 - fp_c6.data[23].z;
    temp_159 = fma(temp_123, temp_158, temp_151);
    temp_160 = clamp(temp_159, 0.0, 1.0);
    // 0x000578: 0x5CB0118002870A28 F2i
    temp_161 = trunc(temp_157);
    temp_162 = max(temp_161, 0.0);
    temp_163 = uint(temp_162);
    // 0x000588: 0x59A1030002A7060B Ffma
    temp_164 = 0.0 - temp_105;
    temp_165 = fma(temp_155, temp_164, temp_155);
    // 0x000590: 0x5C68100000670E2F Fmul
    temp_166 = temp_120 * temp_155;
    // 0x000598: 0x59A1040002A70810 Ffma
    temp_167 = 0.0 - temp_105;
    temp_168 = fma(temp_160, temp_167, temp_160);
    // 0x0005A8: 0x5C58100000B72A0F Fadd
    temp_169 = temp_105 + temp_165;
    // 0x0005B0: 0x5C68100000972B0B Fmul
    temp_170 = temp_97 * temp_156;
    // 0x0005B8: 0x5080000000470F0F Mufu
    temp_171 = 1.0 / temp_169;
    // 0x0005C8: 0x5C58100001072A10 Fadd
    temp_172 = temp_105 + temp_168;
    // 0x0005D0: 0x3848000000872822 Shl
    temp_173 = int(temp_163) << 8;
    // 0x0005D8: 0x5080000000471010 Mufu
    temp_174 = 1.0 / temp_172;
    // 0x0005E8: 0x4C58301407B72009 Fadd
    temp_175 = 0.0 - fp_c5.data[30].w;
    temp_176 = temp_15 + temp_175;
    // 0x0005F0: 0x32A2174000072F2F Ffma
    temp_177 = 0.0 - temp_59;
    temp_178 = fma(temp_166, 2.0, temp_177);
    // 0x0005F8: 0xEF94008200472222 Ldc
    temp_179 = temp_173 + 0x2004;
    temp_180 = uint(temp_179) >> 2;
    temp_181 = temp_180 >> 2;
    temp_182 = int(temp_180) & 3;
    temp_183 = fp_c8.data[int(temp_181)][temp_182];
    // 0x000608: 0x5C68100000B70B0B Fmul
    temp_184 = temp_170 * temp_170;
    // 0x000610: 0x3868103F00070F23 Fmul
    temp_185 = temp_171 * 0.5;
    // 0x000618: 0x4C6810180157080F Fmul
    temp_186 = temp_160 * fp_c6.data[5].y;
    // 0x000628: 0x5C68100001072311 Fmul
    temp_187 = temp_185 * temp_174;
    // 0x000630: 0x4C68101801670810 Fmul
    temp_188 = temp_160 * fp_c6.data[5].z;
    // 0x000638: 0x1E23EA2F98370F0F Fmul32i
    temp_189 = temp_186 * 0.318309873;
    // 0x000648: 0x5C68100001170B13 Fmul
    temp_190 = temp_184 * temp_187;
    // 0x000650: 0x4C58301407B72111 Fadd
    temp_191 = 0.0 - fp_c5.data[30].w;
    temp_192 = temp_16 + temp_191;
    // 0x000658: 0x4C6810180147080B Fmul
    temp_193 = temp_160 * fp_c6.data[5].x;
    // 0x000668: 0x5C6810000137080A Fmul
    temp_194 = temp_160 * temp_190;
    // 0x000670: 0x51A0049407B70308 Ffma
    temp_195 = fma(temp_18, temp_176, fp_c5.data[30].w);
    // 0x000678: 0x51A0089407B70307 Ffma
    temp_196 = fma(temp_18, temp_192, fp_c5.data[30].w);
    // 0x000688: 0x51A00A1407B70309 Ffma
    temp_197 = fma(temp_18, temp_131, fp_c5.data[30].w);
    // 0x000690: 0x1E23EA2F98370B11 Fmul32i
    temp_198 = temp_193 * 0.318309873;
    // 0x000698: 0x1E23EA2F98371013 Fmul32i
    temp_199 = temp_188 * 0.318309873;
    // 0x0006A8: 0x59A10B000087160B Ffma
    temp_200 = 0.0 - temp_195;
    temp_201 = fma(temp_153, temp_200, temp_153);
    // 0x0006B0: 0x59A10D0001A70714 Ffma
    temp_202 = 0.0 - temp_148;
    temp_203 = fma(temp_196, temp_202, temp_148);
    // 0x0006B8: 0x59A10D0001A70815 Ffma
    temp_204 = 0.0 - temp_148;
    temp_205 = fma(temp_195, temp_204, temp_148);
    // 0x0006C8: 0x59A10B0000771610 Ffma
    temp_206 = 0.0 - temp_196;
    temp_207 = fma(temp_153, temp_206, temp_153);
    // 0x0006D0: 0x59A10D0001A7091A Ffma
    temp_208 = 0.0 - temp_148;
    temp_209 = fma(temp_197, temp_208, temp_148);
    // 0x0006D8: 0x59A10B0000971616 Ffma
    temp_210 = 0.0 - temp_197;
    temp_211 = fma(temp_153, temp_210, temp_153);
    // 0x0006E8: 0x5C58100000B7080B Fadd
    temp_212 = temp_195 + temp_201;
    // 0x0006F0: 0x5C58100001470714 Fadd
    temp_213 = temp_196 + temp_203;
    // 0x0006F8: 0x5C58100001570815 Fadd
    temp_214 = temp_195 + temp_205;
    // 0x000708: 0x5C58100001070710 Fadd
    temp_215 = temp_196 + temp_207;
    // 0x000710: 0x5C58100001A7091A Fadd
    temp_216 = temp_197 + temp_209;
    // 0x000718: 0x5C58100001670916 Fadd
    temp_217 = temp_197 + temp_211;
    // 0x000728: 0x59A1088001170B11 Ffma
    temp_218 = 0.0 - temp_198;
    temp_219 = fma(temp_212, temp_218, temp_198);
    // 0x000730: 0x4C68101801571414 Fmul
    temp_220 = temp_213 * fp_c6.data[5].y;
    // 0x000738: 0xEF5400000047FF11 Stl
    local_memory[1] = floatBitsToUint(temp_219);
    // 0x000748: 0x59A1078000F7100B Ffma
    temp_221 = 0.0 - temp_189;
    temp_222 = fma(temp_215, temp_221, temp_189);
    // 0x000750: 0x4C68101801671A17 Fmul
    temp_223 = temp_216 * fp_c6.data[5].z;
    // 0x000758: 0xEF5400000007FF0B Stl
    local_memory[0] = floatBitsToUint(temp_222);
    // 0x000768: 0x5B6603800FF72207 Isetp
    temp_224 = floatBitsToUint(temp_183) <= 0u;
    // 0x000770: 0x49A206980AC70D10 Ffma
    temp_225 = 0.0 - temp_80;
    temp_226 = fma(temp_80, fp_c6.data[43].x, temp_225);
    // 0x000778: 0x4C68101801471515 Fmul
    temp_227 = temp_214 * fp_c6.data[5].x;
    // 0x000788: 0x59A1098001371632 Ffma
    temp_228 = 0.0 - temp_199;
    temp_229 = fma(temp_217, temp_228, temp_199);
    // 0x000790: 0x5C68100000A7141A Fmul
    temp_230 = temp_220 * temp_194;
    // 0x000798: 0x5C68100000A71724 Fmul
    temp_231 = temp_223 * temp_194;
    // 0x0007A8: 0x5C68100000670016 Fmul
    temp_232 = temp_122 * temp_155;
    // 0x0007B0: 0x49A206980AD70D11 Ffma
    temp_233 = 0.0 - temp_80;
    temp_234 = fma(temp_80, fp_c6.data[43].y, temp_233);
    // 0x0007B8: 0x49A206980AE70D0D Ffma
    temp_235 = 0.0 - temp_80;
    temp_236 = fma(temp_80, fp_c6.data[43].z, temp_235);
    // 0x0007C8: 0x5C68100000A7151B Fmul
    temp_237 = temp_227 * temp_194;
    // 0x0007D0: 0x5C68100000671217 Fmul
    temp_238 = temp_123 * temp_155;
    // 0x0007D8: 0x3858103F80071025 Fadd
    temp_239 = temp_226 + 1.0;
    // 0x0007E8: 0x5C9807800FF7000A Mov
    // 0x0007F0: 0x3858103F80071126 Fadd
    temp_240 = temp_234 + 1.0;
    // 0x0007F8: 0x3858103F80070D0D Fadd
    temp_241 = temp_236 + 1.0;
    // 0x000808: 0x5C9807800FF7000B Mov
    // 0x000810: 0x5C9807800FF7000F Mov
    // 0x000818: 0x5C9807800FF70013 Mov
    // 0x000828: 0x32A216C000071616 Ffma
    temp_242 = 0.0 - temp_61;
    temp_243 = fma(temp_232, 2.0, temp_242);
    // 0x000830: 0x32A2164000071717 Ffma
    temp_244 = 0.0 - temp_64;
    temp_245 = fma(temp_238, 2.0, temp_244);
    // 0x000838: 0x1E23E22F98371A1A Fmul32i
    temp_246 = temp_230 * 0.159154937;
    // 0x000848: 0x1E23E22F98371B1B Fmul32i
    temp_247 = temp_237 * 0.159154937;
    // 0x000850: 0x1E23E22F98372424 Fmul32i
    temp_248 = temp_231 * 0.159154937;
    // 0x000858: 0x59A4128002572025 Ffma
    temp_249 = fma(temp_15, temp_239, temp_239);
    temp_250 = clamp(temp_249, 0.0, 1.0);
    // 0x000868: 0x59A4130002672126 Ffma
    temp_251 = fma(temp_16, temp_240, temp_240);
    temp_252 = clamp(temp_251, 0.0, 1.0);
    // 0x000870: 0x59A4068000D70427 Ffma
    temp_253 = fma(temp_17, temp_241, temp_241);
    temp_254 = clamp(temp_253, 0.0, 1.0);
    // 0x000878: 0xF0F800000000000F Sync
    temp_255 = 0.0;
    temp_256 = 0.0;
    temp_257 = 0.0;
    temp_258 = 0.0;
    temp_259 = 0.0;
    temp_260 = 0.0;
    temp_261 = 0.0;
    temp_262 = 0.0;
    temp_263 = 0.0;
    temp_264 = 0.0;
    temp_265 = 0.0;
    temp_266 = 0.0;
    if (!temp_224)
    {
        // 0x000888: 0x5C9807800FF70030 Mov
        temp_267 = 0;
        do
        {
            // 0x000890: 0x5C18020003072815 Iscadd
            temp_269 = int(temp_163) << 4;
            temp_270 = temp_269 + temp_267;
            // 0x000898: 0xE003FF87CFF7FF33 Ipa
            // 0x0008A8: 0x1C00000000173030 Iadd32i
            temp_271 = temp_267 + 1;
            // 0x0008B0: 0xE003FF87CFF7FF35 Ipa
            // 0x0008B8: 0x3848000000471515 Shl
            temp_272 = temp_270 << 4;
            // 0x0008C8: 0xE003FF87CFF7FF34 Ipa
            // 0x0008D0: 0x5B6C03800227300F Isetp
            temp_268 = uint(temp_271) >= floatBitsToUint(temp_183);
            // 0x0008D8: 0xE290000055800000 Ssy
            // 0x0008E8: 0xEF94008200071515 Ldc
            temp_273 = temp_272 + 0x2000;
            temp_274 = uint(temp_273) >> 2;
            temp_275 = temp_274 >> 2;
            temp_276 = int(temp_274) & 3;
            temp_277 = fp_c8.data[int(temp_275)][temp_276];
            // 0x0008F0: 0x5080000000473333 Mufu
            // 0x0008F8: 0x5080000000473535 Mufu
            // 0x000908: 0x5080000000473434 Mufu
            // 0x000910: 0xE043FF8D0337FF33 Ipa
            temp_278 = in_attr5.x;
            // 0x000918: 0xE043FF8D8357FF35 Ipa
            temp_279 = in_attr5.z;
            // 0x000928: 0xE043FF8D4347FF34 Ipa
            temp_280 = in_attr5.y;
            // 0x000930: 0x3848000000671531 Shl
            temp_281 = floatBitsToInt(temp_277) << 6;
            // 0x000938: 0xEF9500800107310C Ldc
            temp_282 = temp_281 + 16;
            temp_283 = uint(temp_282) >> 2;
            temp_284 = temp_283 >> 2;
            temp_285 = int(temp_283) & 3;
            temp_286 = fp_c8.data[int(temp_284)][temp_285];
            temp_287 = int(temp_283) + 1;
            temp_288 = uint(temp_287) >> 2;
            temp_289 = temp_287 & 3;
            temp_290 = fp_c8.data[int(temp_288)][temp_289];
            // 0x000948: 0xEF95008001873110 Ldc
            temp_291 = temp_281 + 24;
            temp_292 = uint(temp_291) >> 2;
            temp_293 = temp_292 >> 2;
            temp_294 = int(temp_292) & 3;
            temp_295 = fp_c8.data[int(temp_293)][temp_294];
            temp_296 = int(temp_292) + 1;
            temp_297 = uint(temp_296) >> 2;
            temp_298 = temp_296 & 3;
            temp_299 = fp_c8.data[int(temp_297)][temp_298];
            // 0x000950: 0xEF95008002073114 Ldc
            temp_300 = temp_281 + 32;
            temp_301 = uint(temp_300) >> 2;
            temp_302 = temp_301 >> 2;
            temp_303 = int(temp_301) & 3;
            temp_304 = fp_c8.data[int(temp_302)][temp_303];
            temp_305 = int(temp_301) + 1;
            temp_306 = uint(temp_305) >> 2;
            temp_307 = temp_305 & 3;
            temp_308 = fp_c8.data[int(temp_306)][temp_307];
            // 0x000958: 0x5C58300003370C33 Fadd
            temp_309 = 0.0 - temp_278;
            temp_310 = temp_286 + temp_309;
            // 0x000968: 0x5C58300003470D34 Fadd
            temp_311 = 0.0 - temp_280;
            temp_312 = temp_290 + temp_311;
            // 0x000970: 0x5C58300003571035 Fadd
            temp_313 = 0.0 - temp_279;
            temp_314 = temp_295 + temp_313;
            // 0x000978: 0x5C68100003373336 Fmul
            temp_315 = temp_310 * temp_310;
            // 0x000988: 0x59A11A8003571111 Ffma
            temp_316 = 0.0 - temp_314;
            temp_317 = fma(temp_299, temp_316, temp_314);
            // 0x000990: 0x59A01B0003473436 Ffma
            temp_318 = fma(temp_312, temp_312, temp_315);
            // 0x000998: 0x59A01B0001171137 Ffma
            temp_319 = fma(temp_317, temp_317, temp_318);
            // 0x0009A8: 0x508000000057370C Mufu
            temp_320 = inversesqrt(temp_319);
            // 0x0009B0: 0x5080000000873737 Mufu
            temp_321 = sqrt(temp_319);
            // 0x0009B8: 0x5C68100000C7330D Fmul
            temp_322 = temp_310 * temp_320;
            // 0x0009C8: 0x5C68100000C73410 Fmul
            temp_323 = temp_312 * temp_320;
            // 0x0009D0: 0x5C68100000C7110C Fmul
            temp_324 = temp_317 * temp_320;
            // 0x0009D8: 0x5C69100001470D0D Fmul
            temp_325 = 0.0 - temp_304;
            temp_326 = temp_322 * temp_325;
            // 0x0009E8: 0xEF94008002873114 Ldc
            temp_327 = temp_281 + 40;
            temp_328 = uint(temp_327) >> 2;
            temp_329 = temp_328 >> 2;
            temp_330 = int(temp_328) & 3;
            temp_331 = fp_c8.data[int(temp_329)][temp_330];
            // 0x0009F0: 0x59A106800157100D Ffma
            temp_332 = 0.0 - temp_308;
            temp_333 = fma(temp_323, temp_332, temp_326);
            // 0x0009F8: 0xEF95008003873110 Ldc
            temp_334 = temp_281 + 56;
            temp_335 = uint(temp_334) >> 2;
            temp_336 = temp_335 >> 2;
            temp_337 = int(temp_335) & 3;
            temp_338 = fp_c8.data[int(temp_336)][temp_337];
            temp_339 = int(temp_335) + 1;
            temp_340 = uint(temp_339) >> 2;
            temp_341 = temp_339 & 3;
            temp_342 = fp_c8.data[int(temp_340)][temp_341];
            // 0x000A08: 0x59A1068001470C14 Ffma
            temp_343 = 0.0 - temp_331;
            temp_344 = fma(temp_324, temp_343, temp_333);
            // 0x000A10: 0xEF9500800307310C Ldc
            temp_345 = temp_281 + 48;
            temp_346 = uint(temp_345) >> 2;
            temp_347 = temp_346 >> 2;
            temp_348 = int(temp_346) & 3;
            temp_349 = fp_c8.data[int(temp_347)][temp_348];
            temp_350 = int(temp_346) + 1;
            temp_351 = uint(temp_350) >> 2;
            temp_352 = temp_350 & 3;
            temp_353 = fp_c8.data[int(temp_351)][temp_352];
            // 0x000A18: 0x59A4088001071414 Ffma
            temp_354 = fma(temp_344, temp_338, temp_342);
            temp_355 = clamp(temp_354, 0.0, 1.0);
            // 0x000A28: 0x010404000007F010 Mov32i
            // 0x000A30: 0x5C68100001471411 Fmul
            temp_356 = temp_355 * temp_355;
            // 0x000A38: 0x33A0084000071414 Ffma
            temp_357 = fma(temp_355, -2.0, 3.0);
            // 0x000A48: 0x5C68100001471111 Fmul
            temp_358 = temp_356 * temp_357;
            // 0x000A50: 0x39585042F0073514 Fadd
            temp_359 = abs(temp_314);
            temp_360 = temp_359 + -120.0;
            // 0x000A58: 0x1EABD4CCCCD71414 Fmul32i
            temp_361 = temp_360 * -0.0500000007;
            temp_362 = clamp(temp_361, 0.0, 1.0);
            // 0x000A68: 0x59A4068003770C37 Ffma
            temp_363 = fma(temp_349, temp_321, temp_353);
            temp_364 = clamp(temp_363, 0.0, 1.0);
            // 0x000A70: 0x33A0084000073710 Ffma
            temp_365 = fma(temp_364, -2.0, 3.0);
            // 0x000A78: 0x5C68100003773737 Fmul
            temp_366 = temp_364 * temp_364;
            // 0x000A88: 0x5C68100001073710 Fmul
            temp_367 = temp_366 * temp_365;
            // 0x000A90: 0x5C68100001071110 Fmul
            temp_368 = temp_358 * temp_367;
            // 0x000A98: 0x36247F9000171111 Xmad
            temp_369 = floatBitsToUint(temp_358) >> 16;
            temp_370 = int(temp_369) << 16;
            // 0x000AA8: 0x5C68100001071410 Fmul
            temp_371 = temp_362 * temp_368;
            // 0x000AB0: 0x5BB383800FF71007 Fsetp
            temp_372 = temp_371 <= 0.0;
            // 0x000AB8: 0x7A05083C0F00FF11 Hadd2
            temp_267 = temp_271;
            temp_373 = uint(temp_370);
            temp_374 = temp_255;
            temp_375 = temp_256;
            temp_376 = temp_257;
            temp_377 = temp_258;
            temp_378 = temp_259;
            temp_379 = temp_260;
            if (temp_372)
            {
                temp_380 = unpackHalf2x16(uint(temp_370)).y;
                temp_381 = packHalf2x16(vec2(1.0, temp_380));
                temp_373 = temp_381;
            }
            // 0x000AC8: 0x5D2103902FF71107 Hsetp2
            temp_382 = unpackHalf2x16(temp_373).x;
            temp_383 = temp_382 == 0.0;
            // 0x000AD0: 0xF0F800000008000F Sync
            if (temp_383)
            {
                // 0x000AD8: 0x5080000000470C0C Mufu
                temp_384 = 1.0 / temp_349;
                // 0x000AE8: 0xEF94008002C73115 Ldc
                temp_385 = temp_281 + 44;
                temp_386 = uint(temp_385) >> 2;
                temp_387 = temp_386 >> 2;
                temp_388 = int(temp_386) & 3;
                temp_389 = fp_c8.data[int(temp_387)][temp_388];
                // 0x000AF0: 0x5C69100000C70D14 Fmul
                temp_390 = 0.0 - temp_384;
                temp_391 = temp_353 * temp_390;
                // 0x000AF8: 0x5C60138001473511 Fmnmx
                temp_392 = min(temp_314, temp_391);
                // 0x000B08: 0x5C61178001171411 Fmnmx
                temp_393 = 0.0 - temp_391;
                temp_394 = max(temp_393, temp_392);
                // 0x000B10: 0x59A01B000117110C Ffma
                temp_395 = fma(temp_394, temp_394, temp_318);
                // 0x000B18: 0x5080000000570C0D Mufu
                temp_396 = inversesqrt(temp_395);
                // 0x000B28: 0x5C68100000D73333 Fmul
                temp_397 = temp_310 * temp_396;
                // 0x000B30: 0x5080000000471515 Mufu
                temp_398 = 1.0 / temp_389;
                // 0x000B38: 0x5C68100000D73435 Fmul
                temp_399 = temp_312 * temp_396;
                // 0x000B48: 0x5C68100000D71111 Fmul
                temp_400 = temp_394 * temp_396;
                // 0x000B50: 0x5C58100003372E37 Fadd
                temp_401 = temp_59 + temp_397;
                // 0x000B58: 0x5C58100003572D0D Fadd
                temp_402 = temp_61 + temp_399;
                // 0x000B68: 0x5C58100001172C14 Fadd
                temp_403 = temp_64 + temp_400;
                // 0x000B70: 0x5C68100003773734 Fmul
                temp_404 = temp_401 * temp_401;
                // 0x000B78: 0x59A01A0000D70D34 Ffma
                temp_405 = fma(temp_402, temp_402, temp_404);
                // 0x000B88: 0x59A01A0001471434 Ffma
                temp_406 = fma(temp_403, temp_403, temp_405);
                // 0x000B90: 0x5080000000573434 Mufu
                temp_407 = inversesqrt(temp_406);
                // 0x000B98: 0x5C68100003473737 Fmul
                temp_408 = temp_401 * temp_407;
                // 0x000BA8: 0x5C68100003470D0D Fmul
                temp_409 = temp_402 * temp_407;
                // 0x000BB0: 0x5C68100003471414 Fmul
                temp_410 = temp_403 * temp_407;
                // 0x000BB8: 0x5C68100003370E34 Fmul
                temp_411 = temp_120 * temp_397;
                // 0x000BC8: 0x5C68100003773336 Fmul
                temp_412 = temp_397 * temp_408;
                // 0x000BD0: 0x5080000000870C33 Mufu
                temp_413 = sqrt(temp_395);
                // 0x000BD8: 0x5C68100003770E37 Fmul
                temp_414 = temp_120 * temp_408;
                // 0x000BE8: 0x59A01A0003570034 Ffma
                temp_415 = fma(temp_122, temp_399, temp_411);
                // 0x000BF0: 0x59A01B0000D73536 Ffma
                temp_416 = fma(temp_399, temp_409, temp_412);
                // 0x000BF8: 0x59A01B8000D70037 Ffma
                temp_417 = fma(temp_122, temp_409, temp_414);
                // 0x000C08: 0xEF9500800007310C Ldc
                temp_418 = uint(temp_281) >> 2;
                temp_419 = temp_418 >> 2;
                temp_420 = int(temp_418) & 3;
                temp_421 = fp_c8.data[int(temp_419)][temp_420];
                temp_422 = int(temp_418) + 1;
                temp_423 = uint(temp_422) >> 2;
                temp_424 = temp_422 & 3;
                temp_425 = fp_c8.data[int(temp_423)][temp_424];
                // 0x000C10: 0x59A01A0001171234 Ffma
                temp_426 = fma(temp_123, temp_400, temp_415);
                // 0x000C18: 0xEF94008000873131 Ldc
                temp_427 = temp_281 + 8;
                temp_428 = uint(temp_427) >> 2;
                temp_429 = temp_428 >> 2;
                temp_430 = int(temp_428) & 3;
                temp_431 = fp_c8.data[int(temp_429)][temp_430];
                // 0x000C28: 0x59A41B0001471136 Ffma
                temp_432 = fma(temp_400, temp_410, temp_416);
                temp_433 = clamp(temp_432, 0.0, 1.0);
                // 0x000C30: 0x01040DF760C7F011 Mov32i
                // 0x000C38: 0x51A0198400371515 Ffma
                temp_434 = fma(temp_398, temp_413, fp_c1.data[0].w);
                // 0x000C48: 0x59A41B8001471237 Ffma
                temp_435 = fma(temp_123, temp_410, temp_417);
                temp_436 = clamp(temp_435, 0.0, 1.0);
                // 0x000C50: 0x5080000000471515 Mufu
                temp_437 = 1.0 / temp_434;
                // 0x000C58: 0x49A2088400173611 Ffma
                temp_438 = fma(temp_433, fp_c1.data[0].y, -6.98316002);
                // 0x000C68: 0x59A21B8003772914 Ffma
                temp_439 = 0.0 - temp_436;
                temp_440 = fma(temp_103, temp_436, temp_439);
                // 0x000C70: 0x5C68100001173636 Fmul
                temp_441 = temp_433 * temp_438;
                // 0x000C78: 0x5C5C30000FF73411 Fadd
                temp_442 = temp_426 + -0.0;
                temp_443 = clamp(temp_442, 0.0, 1.0);
                // 0x000C88: 0x51A00A0400273737 Ffma
                temp_444 = fma(temp_436, temp_440, fp_c1.data[0].z);
                // 0x000C90: 0x1E23FB3333371515 Fmul32i
                temp_445 = temp_437 * 1.39999998;
                // 0x000C98: 0x5080000000473737 Mufu
                temp_446 = 1.0 / temp_444;
                // 0x000CA8: 0x5C90008003670033 Rro
                // 0x000CB0: 0x59A1088001172A14 Ffma
                temp_447 = 0.0 - temp_443;
                temp_448 = fma(temp_105, temp_447, temp_443);
                // 0x000CB8: 0x5080000000273333 Mufu
                temp_449 = exp2(temp_441);
                // 0x000CC8: 0x5C68100001571515 Fmul
                temp_450 = temp_445 * temp_445;
                // 0x000CD0: 0x5C58100001472A14 Fadd
                temp_451 = temp_105 + temp_448;
                // 0x000CD8: 0x5080000000471414 Mufu
                temp_452 = 1.0 / temp_451;
                // 0x000CE8: 0x59A10A8001573415 Ffma
                temp_453 = 0.0 - temp_450;
                temp_454 = fma(temp_426, temp_453, temp_450);
                // 0x000CF0: 0x5C68100003772B37 Fmul
                temp_455 = temp_97 * temp_446;
                // 0x000CF8: 0x5C5C100001573415 Fadd
                temp_456 = temp_426 + temp_454;
                temp_457 = clamp(temp_456, 0.0, 1.0);
                // 0x000D08: 0x59A1198003370834 Ffma
                temp_458 = 0.0 - temp_449;
                temp_459 = fma(temp_195, temp_458, temp_449);
                // 0x000D10: 0x5C68100003773737 Fmul
                temp_460 = temp_455 * temp_455;
                // 0x000D18: 0x5C68100000C7100C Fmul
                temp_461 = temp_371 * temp_421;
                // 0x000D28: 0x5C68100000D7100D Fmul
                temp_462 = temp_371 * temp_425;
                // 0x000D30: 0x5C68100001472314 Fmul
                temp_463 = temp_185 * temp_452;
                // 0x000D38: 0x5C58100003470834 Fadd
                temp_464 = temp_195 + temp_459;
                // 0x000D48: 0x5C68100003171031 Fmul
                temp_465 = temp_371 * temp_431;
                // 0x000D50: 0x59A1198003370710 Ffma
                temp_466 = 0.0 - temp_449;
                temp_467 = fma(temp_196, temp_466, temp_449);
                // 0x000D58: 0x59A1198003370933 Ffma
                temp_468 = 0.0 - temp_449;
                temp_469 = fma(temp_197, temp_468, temp_449);
                // 0x000D68: 0x5C68100001473714 Fmul
                temp_470 = temp_460 * temp_463;
                // 0x000D70: 0x5C68100003470C34 Fmul
                temp_471 = temp_461 * temp_464;
                // 0x000D78: 0x5C68100001570C0C Fmul
                temp_472 = temp_461 * temp_457;
                // 0x000D88: 0x5C58100001070710 Fadd
                temp_473 = temp_196 + temp_467;
                // 0x000D90: 0x5C58100003370933 Fadd
                temp_474 = temp_197 + temp_469;
                // 0x000D98: 0x5C68100001471114 Fmul
                temp_475 = temp_443 * temp_470;
                // 0x000DA8: 0x49A0050400570C0A Ffma
                temp_476 = fma(temp_472, fp_c1.data[1].y, temp_255);
                // 0x000DB0: 0x5C68100001070D10 Fmul
                temp_477 = temp_462 * temp_473;
                // 0x000DB8: 0x5C68100003373133 Fmul
                temp_478 = temp_465 * temp_474;
                // 0x000DC8: 0x5C68100001570D0D Fmul
                temp_479 = temp_462 * temp_457;
                // 0x000DD0: 0x5C68100001573115 Fmul
                temp_480 = temp_465 * temp_457;
                // 0x000DD8: 0x5C68100001473434 Fmul
                temp_481 = temp_471 * temp_475;
                // 0x000DE8: 0x5C68100001471011 Fmul
                temp_482 = temp_477 * temp_475;
                // 0x000DF0: 0x5C68100001473333 Fmul
                temp_483 = temp_478 * temp_475;
                // 0x000DF8: 0x49A0058400570D0B Ffma
                temp_484 = fma(temp_479, fp_c1.data[1].y, temp_256);
                // 0x000E08: 0x49A007840057150F Ffma
                temp_485 = fma(temp_480, fp_c1.data[1].y, temp_257);
                // 0x000E10: 0x49A0098400473413 Ffma
                temp_486 = fma(temp_481, fp_c1.data[1].x, temp_258);
                // 0x000E18: 0x49A00C0400471118 Ffma
                temp_487 = fma(temp_482, fp_c1.data[1].x, temp_259);
                // 0x000E28: 0x49A00C8400473319 Ffma
                temp_488 = fma(temp_483, fp_c1.data[1].x, temp_260);
                // 0x000E30: 0xF0F800000007000F Sync
                temp_374 = temp_476;
                temp_375 = temp_484;
                temp_376 = temp_485;
                temp_377 = temp_486;
                temp_378 = temp_487;
                temp_379 = temp_488;
            }
            // 0x000E38: 0xE2400FFFA509000F Bra
            temp_255 = temp_374;
            temp_256 = temp_375;
            temp_257 = temp_376;
            temp_258 = temp_377;
            temp_259 = temp_378;
            temp_260 = temp_379;
            temp_261 = temp_376;
            temp_262 = temp_377;
            temp_263 = temp_378;
            temp_264 = temp_379;
            temp_265 = temp_374;
            temp_266 = temp_375;
        }
        while (!temp_268);
        // 0x000E48: 0xF0F800000007000F Sync
    }
    // 0x000E50: 0x5C62578000070E0C Fmnmx
    temp_489 = abs(temp_120);
    temp_490 = abs(temp_122);
    temp_491 = max(temp_489, temp_490);
    // 0x000E58: 0xE003FF87CFF7FF28 Ipa
    // 0x000E68: 0x5C62578001672F0D Fmnmx
    temp_492 = abs(temp_178);
    temp_493 = abs(temp_243);
    temp_494 = max(temp_492, temp_493);
    // 0x000E70: 0xEF4410000047FF33 Ldl
    temp_495 = uintBitsToFloat(local_memory[1]);
    // 0x000E78: 0x5C60578000C7120C Fmnmx
    temp_496 = abs(temp_123);
    temp_497 = max(temp_496, temp_491);
    // 0x000E88: 0xEF4410000007FF31 Ldl
    temp_498 = uintBitsToFloat(local_memory[0]);
    // 0x000E90: 0x010000000017F014 Mov32i
    // 0x000E98: 0x5080000000470C11 Mufu
    temp_499 = 1.0 / temp_497;
    // 0x000EA8: 0x5C60578000D7170D Fmnmx
    temp_500 = abs(temp_245);
    temp_501 = max(temp_500, temp_494);
    // 0x000EB0: 0x3868104080070523 Fmul
    temp_502 = temp_93 * 4.0;
    // 0x000EB8: 0x5080000000470D0D Mufu
    temp_503 = 1.0 / temp_501;
    // 0x000EC8: 0x4C98079C0207002B Mov
    // 0x000ED0: 0x5C69100001171212 Fmul
    temp_504 = 0.0 - temp_499;
    temp_505 = temp_123 * temp_504;
    // 0x000ED8: 0x5C68100001170E10 Fmul
    temp_506 = temp_120 * temp_499;
    // 0x000EE8: 0x5080000000472828 Mufu
    // 0x000EF0: 0x5C68100001170011 Fmul
    temp_507 = temp_122 * temp_499;
    // 0x000EF8: 0x5C68100000D72F15 Fmul
    temp_508 = temp_178 * temp_503;
    // 0x000F08: 0x5C68100000D71616 Fmul
    temp_509 = temp_243 * temp_503;
    // 0x000F10: 0x5C69100000D71717 Fmul
    temp_510 = 0.0 - temp_503;
    temp_511 = temp_245 * temp_510;
    // 0x000F18: 0xC0BA0163EFF7100C Tex
    temp_512 = textureLod(fp_t_tcb_16, vec3(temp_506, temp_507, temp_505), 0.0).xyz;
    temp_513 = temp_512.x;
    temp_514 = temp_512.y;
    temp_515 = temp_512.z;
    // 0x000F28: 0x38681040E007052F Fmul
    temp_516 = temp_93 * 7.0;
    // 0x000F30: 0xE043FF910287FF2C Ipa
    temp_517 = in_attr9.x;
    // 0x000F38: 0x5C98078001270022 Mov
    // 0x000F48: 0xE043FF914287FF2D Ipa
    temp_518 = in_attr9.y;
    // 0x000F50: 0x3859103F80070505 Fadd
    temp_519 = 0.0 - temp_93;
    temp_520 = temp_519 + 1.0;
    // 0x000F58: 0xE043FF918287FF2E Ipa
    temp_521 = in_attr9.z;
    // 0x000F68: 0xC1BA0143F2F71414 Tex
    temp_522 = textureLod(fp_t_tcb_14, vec4(temp_508, temp_509, temp_511, float(1)), temp_516).xyz;
    temp_523 = temp_522.x;
    temp_524 = temp_522.y;
    temp_525 = temp_522.z;
    // 0x000F70: 0xD9A2018232271010 Texs
    temp_526 = textureLod(fp_t_tcb_18, vec3(temp_506, temp_507, temp_505), temp_502).xyz;
    temp_527 = temp_526.x;
    temp_528 = temp_526.y;
    temp_529 = temp_526.z;
    // 0x000F78: 0xDEBA0000C2B72C2C TexB
    temp_530 = texture(fp_t_cb7_20, vec3(temp_517, temp_518, temp_521)).x;
    // 0x000F88: 0x5C68100000570505 Fmul
    temp_531 = temp_520 * temp_520;
    // 0x000F90: 0x3859103F80070629 Fadd
    temp_532 = 0.0 - temp_155;
    temp_533 = temp_532 + 1.0;
    // 0x000F98: 0x010410676C97F030 Mov32i
    // 0x000FA8: 0x1E23E468DB97062A Fmul32i
    temp_534 = temp_155 * 0.193900004;
    // 0x000FB0: 0x49A019180A170F32 Ffma
    temp_535 = fma(temp_261, fp_c6.data[40].y, temp_229);
    // 0x000FB8: 0x49A00D980A17131B Ffma
    temp_536 = fma(temp_262, fp_c6.data[40].y, temp_247);
    // 0x000FC8: 0x5C68100000570505 Fmul
    temp_537 = temp_531 * temp_531;
    // 0x000FD0: 0x4C68101809072929 Fmul
    temp_538 = temp_533 * fp_c6.data[36].x;
    // 0x000FD8: 0x49A018040097060F Ffma
    temp_539 = fma(temp_155, fp_c1.data[2].y, 8.40400028);
    // 0x000FE8: 0x5080400000372929 Mufu
    temp_540 = abs(temp_538);
    temp_541 = log2(temp_540);
    // 0x000FF0: 0x0103E2CD9E87F012 Mov32i
    // 0x000FF8: 0x49A00D180A17181A Ffma
    temp_542 = fma(temp_263, fp_c6.data[40].y, temp_246);
    // 0x001008: 0x49A015040067052A Ffma
    temp_543 = fma(temp_537, fp_c1.data[1].z, temp_534);
    // 0x001010: 0x49A012180A171924 Ffma
    temp_544 = fma(temp_264, fp_c6.data[40].y, temp_248);
    // 0x001018: 0x51A0078400A70617 Ffma
    temp_545 = fma(temp_155, temp_539, fp_c1.data[2].z);
    // 0x001028: 0xE04BFF904287FF0F Ipa
    temp_546 = in_attr8.y;
    temp_547 = clamp(temp_546, 0.0, 1.0);
    // 0x001030: 0x088BF05D63972A13 Fadd32i
    temp_548 = temp_543 + -0.522800028;
    // 0x001038: 0x0104066978D7F02A Mov32i
    // 0x001048: 0x51A00B8400B70618 Ffma
    temp_549 = fma(temp_155, temp_545, fp_c1.data[2].w);
    // 0x001050: 0x4C68101809172929 Fmul
    temp_550 = temp_541 * fp_c6.data[36].y;
    // 0x001058: 0x49A2090400C70517 Ffma
    temp_551 = fma(temp_537, fp_c1.data[3].x, -0.168799996);
    // 0x001068: 0x5C68100001370612 Fmul
    temp_552 = temp_155 * temp_548;
    // 0x001070: 0x0103F0000007F022 Mov32i
    // 0x001078: 0x49A2150400770506 Ffma
    temp_553 = fma(temp_537, fp_c1.data[1].w, -3.60299993);
    // 0x001088: 0x5C90008002970013 Rro
    // 0x001090: 0x5C68100001770519 Fmul
    temp_554 = temp_537 * temp_551;
    // 0x001098: 0x5084000000271313 Mufu
    temp_555 = exp2(temp_550);
    temp_556 = clamp(temp_555, 0.0, 1.0);
    // 0x0010A8: 0x32A0113F00070000 Ffma
    temp_557 = fma(temp_122, 0.5, 0.5);
    // 0x0010B0: 0x51A0030400870517 Ffma
    temp_558 = fma(temp_537, temp_553, fp_c1.data[2].x);
    // 0x0010B8: 0x4C98079809670022 Mov
    // 0x0010C8: 0x4C9807980B47002B Mov
    // 0x0010D0: 0x4C98079800870029 Mov
    // 0x0010D8: 0x5C6013800197182A Fmnmx
    temp_559 = min(temp_549, temp_554);
    // 0x0010E8: 0x4C98079800970018 Mov
    // 0x0010F0: 0x59A0090001770517 Ffma
    temp_560 = fma(temp_537, temp_558, temp_552);
    // 0x0010F8: 0x4C58101408172206 Fadd
    temp_561 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001108: 0x4C98079800A70012 Mov
    // 0x001110: 0x010404000007F022 Mov32i
    // 0x001118: 0xF0F0000034570000 Depbar
    // 0x001128: 0x51A215980B471D1D Ffma
    temp_562 = 0.0 - fp_c6.data[45].x;
    temp_563 = fma(temp_22, fp_c6.data[45].x, temp_562);
    // 0x001130: 0x51A215980B470202 Ffma
    temp_564 = 0.0 - fp_c6.data[45].x;
    temp_565 = fma(temp_23, fp_c6.data[45].x, temp_564);
    // 0x001138: 0x51A215980B471C1C Ffma
    temp_566 = 0.0 - fp_c6.data[45].x;
    temp_567 = fma(temp_21, fp_c6.data[45].x, temp_566);
    // 0x001148: 0x5C68100001370613 Fmul
    temp_568 = temp_561 * temp_556;
    // 0x001150: 0x4C59101800671212 Fadd
    temp_569 = 0.0 - fp_c6.data[2].z;
    temp_570 = temp_569 + fp_c6.data[1].z;
    // 0x001158: 0x4C59101800472905 Fadd
    temp_571 = 0.0 - fp_c6.data[2].x;
    temp_572 = temp_571 + fp_c6.data[1].x;
    // 0x001168: 0x4C59101800571806 Fadd
    temp_573 = 0.0 - fp_c6.data[2].y;
    temp_574 = temp_573 + fp_c6.data[1].y;
    // 0x001170: 0x33A0114000070F22 Ffma
    temp_575 = fma(temp_547, -2.0, 3.0);
    // 0x001178: 0x5C68100000F70F2B Fmul
    temp_576 = temp_547 * temp_547;
    // 0x001188: 0x386C104248070719 Fmul
    temp_577 = temp_196 * 50.0;
    temp_578 = clamp(temp_577, 0.0, 1.0);
    // 0x001190: 0x5C5C30000FF72A18 Fadd
    temp_579 = temp_559 + -0.0;
    temp_580 = clamp(temp_579, 0.0, 1.0);
    // 0x001198: 0x4C5C100400D71729 Fadd
    temp_581 = temp_560 + fp_c1.data[3].y;
    temp_582 = clamp(temp_581, 0.0, 1.0);
    // 0x0011A8: 0x51A0001800A7120F Ffma
    temp_583 = fma(temp_570, temp_557, fp_c6.data[2].z);
    // 0x0011B0: 0x4C68101808D71317 Fmul
    temp_584 = temp_568 * fp_c6.data[35].y;
    // 0x0011B8: 0x4C68101808C71312 Fmul
    temp_585 = temp_568 * fp_c6.data[35].x;
    // 0x0011C8: 0x51A0001800870505 Ffma
    temp_586 = fma(temp_572, temp_557, fp_c6.data[2].x);
    // 0x0011D0: 0x51A0001800970606 Ffma
    temp_587 = fma(temp_574, temp_557, fp_c6.data[2].y);
    // 0x0011D8: 0x5C68100002B72200 Fmul
    temp_588 = temp_575 * temp_576;
    // 0x0011E8: 0x5C68100001971822 Fmul
    temp_589 = temp_580 * temp_578;
    // 0x0011F0: 0x5C59100002971829 Fadd
    temp_590 = 0.0 - temp_580;
    temp_591 = temp_590 + temp_582;
    // 0x0011F8: 0x49A00D140827171A Ffma
    temp_592 = fma(temp_584, fp_c5.data[32].z, temp_542);
    // 0x001208: 0x49A10B9408271718 Ffma
    temp_593 = 0.0 - fp_c5.data[32].z;
    temp_594 = fma(temp_584, temp_593, temp_584);
    // 0x001210: 0x4C68101808E71313 Fmul
    temp_595 = temp_568 * fp_c6.data[35].z;
    // 0x001218: 0x49A1091408271217 Ffma
    temp_596 = 0.0 - fp_c5.data[32].z;
    temp_597 = fma(temp_585, temp_596, temp_585);
    // 0x001228: 0x49A00D940827121B Ffma
    temp_598 = fma(temp_585, fp_c5.data[32].z, temp_536);
    // 0x001230: 0x59A0110002970808 Ffma
    temp_599 = fma(temp_195, temp_591, temp_589);
    // 0x001238: 0x59A0110002970707 Ffma
    temp_600 = fma(temp_196, temp_591, temp_589);
    // 0x001248: 0x59A0110002970909 Ffma
    temp_601 = fma(temp_197, temp_591, temp_589);
    // 0x001250: 0x49A0121408271324 Ffma
    temp_602 = fma(temp_595, fp_c5.data[32].z, temp_544);
    // 0x001258: 0x49A1099408271313 Ffma
    temp_603 = 0.0 - fp_c5.data[32].z;
    temp_604 = fma(temp_595, temp_603, temp_595);
    // 0x001268: 0x4C68101803770000 Fmul
    temp_605 = temp_588 * fp_c6.data[13].w;
    // 0x001270: 0x5C58100001373213 Fadd
    temp_606 = temp_535 + temp_604;
    // 0x001278: 0xF0F0000034370000 Depbar
    // 0x001288: 0x49A019980A170A0A Ffma
    temp_607 = fma(temp_265, fp_c6.data[40].y, temp_495);
    // 0x001290: 0x49A018980A170B0B Ffma
    temp_608 = fma(temp_266, fp_c6.data[40].y, temp_498);
    // 0x001298: 0x5C58100001770A17 Fadd
    temp_609 = temp_607 + temp_597;
    // 0x0012A8: 0xE043FF900287FF0A Ipa
    temp_610 = in_attr8.x;
    // 0x0012B0: 0x5C58100001870B0B Fadd
    temp_611 = temp_608 + temp_594;
    // 0x0012B8: 0xE043FF8C8287FF28 Ipa
    temp_612 = in_attr4.z;
    // 0x0012C8: 0xF0F0000034270000 Depbar
    // 0x0012D0: 0x49A0060400570505 Ffma
    temp_613 = fma(temp_586, fp_c1.data[1].y, temp_513);
    // 0x0012D8: 0x49A0068400570606 Ffma
    temp_614 = fma(temp_587, fp_c1.data[1].y, temp_514);
    // 0x0012E8: 0x49A0070400570F0E Ffma
    temp_615 = fma(temp_583, fp_c1.data[1].y, temp_515);
    // 0x0012F0: 0x5C58100000571705 Fadd
    temp_616 = temp_609 + temp_613;
    // 0x0012F8: 0x5C58100000670B06 Fadd
    temp_617 = temp_611 + temp_614;
    // 0x001308: 0x5C58100000E7130E Fadd
    temp_618 = temp_606 + temp_615;
    // 0x001310: 0x59A1028000570305 Ffma
    temp_619 = 0.0 - temp_616;
    temp_620 = fma(temp_18, temp_619, temp_616);
    // 0x001318: 0xF0F0000034170000 Depbar
    // 0x001328: 0x49A008180857140D Ffma
    temp_621 = fma(temp_523, fp_c6.data[33].y, temp_527);
    // 0x001330: 0x49A0089808571511 Ffma
    temp_622 = fma(temp_524, fp_c6.data[33].y, temp_528);
    // 0x001338: 0x49A0119808571616 Ffma
    temp_623 = fma(temp_525, fp_c6.data[33].y, temp_529);
    // 0x001348: 0x59A1030000670306 Ffma
    temp_624 = 0.0 - temp_617;
    temp_625 = fma(temp_18, temp_624, temp_617);
    // 0x001350: 0x59A1070000E70303 Ffma
    temp_626 = 0.0 - temp_618;
    temp_627 = fma(temp_18, temp_626, temp_618);
    // 0x001358: 0x59A00D8000D7081B Ffma
    temp_628 = fma(temp_599, temp_621, temp_598);
    // 0x001368: 0x59A00D0001170707 Ffma
    temp_629 = fma(temp_600, temp_622, temp_592);
    // 0x001370: 0x59A0120001670909 Ffma
    temp_630 = fma(temp_601, temp_623, temp_602);
    // 0x001378: 0x4C98079802970008 Mov
    // 0x001388: 0x59A00D800057201B Ffma
    temp_631 = fma(temp_15, temp_620, temp_628);
    // 0x001390: 0x59A0038000672107 Ffma
    temp_632 = fma(temp_16, temp_625, temp_629);
    // 0x001398: 0x59A0048000370409 Ffma
    temp_633 = fma(temp_17, temp_627, temp_630);
    // 0x0013A8: 0x4C98079802870005 Mov
    // 0x0013B0: 0x4C98079802A70003 Mov
    // 0x0013B8: 0x51A0041802971D1D Ffma
    temp_634 = fma(temp_563, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0013C8: 0x5C68100001B72525 Fmul
    temp_635 = temp_250 * temp_631;
    // 0x0013D0: 0x5C68100000772626 Fmul
    temp_636 = temp_252 * temp_632;
    // 0x0013D8: 0x5C68100000972727 Fmul
    temp_637 = temp_254 * temp_633;
    // 0x0013E8: 0x51A0029802871C1C Ffma
    temp_638 = fma(temp_567, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0013F0: 0x51A0019802A70203 Ffma
    temp_639 = fma(temp_565, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0013F8: 0x49A2001803570007 Ffma
    temp_640 = 0.0 - temp_605;
    temp_641 = fma(temp_605, fp_c6.data[13].y, temp_640);
    // 0x001408: 0x49A0129406C71E1E Ffma
    temp_642 = fma(temp_25, fp_c5.data[27].x, temp_635);
    // 0x001410: 0x49A0131406C71F1F Ffma
    temp_643 = fma(temp_26, fp_c5.data[27].x, temp_636);
    // 0x001418: 0x49A0139406C70102 Ffma
    temp_644 = fma(temp_27, fp_c5.data[27].x, temp_637);
    // 0x001428: 0x49A505180BC72C0A Ffma
    temp_645 = 0.0 - fp_c6.data[47].x;
    temp_646 = fma(temp_530, temp_645, temp_610);
    temp_647 = clamp(temp_646, 0.0, 1.0);
    // 0x001430: 0x5080000000370A0A Mufu
    temp_648 = log2(temp_647);
    // 0x001438: 0x5C58300001C71E05 Fadd
    temp_649 = 0.0 - temp_638;
    temp_650 = temp_642 + temp_649;
    // 0x001448: 0x5C58300001D71F04 Fadd
    temp_651 = 0.0 - temp_634;
    temp_652 = temp_643 + temp_651;
    // 0x001450: 0x5C58300000370201 Fadd
    temp_653 = 0.0 - temp_639;
    temp_654 = temp_644 + temp_653;
    // 0x001458: 0x49A00E180BF70505 Ffma
    temp_655 = fma(temp_650, fp_c6.data[47].w, temp_638);
    // 0x001468: 0x49A00E980BF70404 Ffma
    temp_656 = fma(temp_652, fp_c6.data[47].w, temp_634);
    // 0x001470: 0x49A001980BF70101 Ffma
    temp_657 = fma(temp_654, fp_c6.data[47].w, temp_639);
    // 0x001478: 0x4C68101803170A06 Fmul
    temp_658 = temp_648 * fp_c6.data[12].y;
    // 0x001488: 0x5C60178000571C05 Fmnmx
    temp_659 = max(temp_638, temp_655);
    // 0x001490: 0x5C60178000471D04 Fmnmx
    temp_660 = max(temp_634, temp_656);
    // 0x001498: 0x5C60178000170301 Fmnmx
    temp_661 = max(temp_639, temp_657);
    // 0x0014A8: 0x5C90008000670008 Rro
    // 0x0014B0: 0x49A2001803470006 Ffma
    temp_662 = 0.0 - temp_605;
    temp_663 = fma(temp_605, fp_c6.data[13].x, temp_662);
    // 0x0014B8: 0x5080000000270808 Mufu
    temp_664 = exp2(temp_658);
    // 0x0014C8: 0x49A2001803670000 Ffma
    temp_665 = 0.0 - temp_605;
    temp_666 = fma(temp_605, fp_c6.data[13].z, temp_665);
    // 0x0014D0: 0x59A0028000670505 Ffma
    temp_667 = fma(temp_659, temp_663, temp_659);
    // 0x0014D8: 0x59A0020000770406 Ffma
    temp_668 = fma(temp_660, temp_641, temp_660);
    // 0x0014E8: 0x59A0008000070103 Ffma
    temp_669 = fma(temp_661, temp_666, temp_661);
    // 0x0014F0: 0x0103F8000007F007 Mov32i
    // 0x0014F8: 0x5C59100000571E00 Fadd
    temp_670 = 0.0 - temp_642;
    temp_671 = temp_670 + temp_667;
    // 0x001508: 0x4C68101802B70804 Fmul
    temp_672 = temp_664 * fp_c6.data[10].w;
    // 0x001510: 0x5C59100000671F01 Fadd
    temp_673 = 0.0 - temp_643;
    temp_674 = temp_673 + temp_668;
    // 0x001518: 0x5C59100000370203 Fadd
    temp_675 = 0.0 - temp_644;
    temp_676 = temp_675 + temp_669;
    // 0x001528: 0x4C58100C03872808 Fadd
    temp_677 = temp_612 + fp_c3.data[14].x;
    // 0x001530: 0x0103EC000007F005 Mov32i
    // 0x001538: 0x5C9807800FF70006 Mov
    // 0x001548: 0x59A00F0000470000 Ffma
    temp_678 = fma(temp_671, temp_672, temp_642);
    // 0x001550: 0x59A00F8000470101 Ffma
    temp_679 = fma(temp_674, temp_672, temp_643);
    // 0x001558: 0x59A0010000470302 Ffma
    temp_680 = fma(temp_676, temp_672, temp_644);
    // 0x001568: 0x0103F8000007F003 Mov32i
    // 0x001570: 0x49A37F8C03C70804 Ffma
    temp_681 = 0.0 - fp_c3.data[15].x;
    temp_682 = fma(temp_677, temp_681, -0.0);
    // 0x001578: 0xE30000000007000F Exit
    out_attr0.x = temp_678;
    out_attr0.y = temp_679;
    out_attr0.z = temp_680;
    out_attr0.w = 1.0;
    out_attr1.x = temp_682;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
