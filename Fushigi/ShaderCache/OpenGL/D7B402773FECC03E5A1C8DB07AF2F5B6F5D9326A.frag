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
layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_24;
layout (binding = 2) uniform sampler2D fp_t_tcb_1E;
layout (binding = 3) uniform sampler2D fp_t_tcb_36;
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
    precise vec4 temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise vec3 temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise vec3 temp_23;
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
    bool temp_76;
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
    uint temp_88;
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
    int temp_104;
    precise float temp_105;
    int temp_106;
    uint temp_107;
    uint temp_108;
    int temp_109;
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
    bool temp_163;
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
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    int temp_273;
    bool temp_274;
    int temp_275;
    int temp_276;
    int temp_277;
    int temp_278;
    int temp_279;
    uint temp_280;
    uint temp_281;
    int temp_282;
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    int temp_287;
    int temp_288;
    uint temp_289;
    uint temp_290;
    int temp_291;
    precise float temp_292;
    int temp_293;
    uint temp_294;
    int temp_295;
    precise float temp_296;
    int temp_297;
    uint temp_298;
    uint temp_299;
    int temp_300;
    precise float temp_301;
    int temp_302;
    uint temp_303;
    int temp_304;
    precise float temp_305;
    int temp_306;
    uint temp_307;
    uint temp_308;
    int temp_309;
    precise float temp_310;
    int temp_311;
    uint temp_312;
    int temp_313;
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
    precise float temp_327;
    precise float temp_328;
    precise float temp_329;
    precise float temp_330;
    precise float temp_331;
    precise float temp_332;
    int temp_333;
    uint temp_334;
    uint temp_335;
    int temp_336;
    precise float temp_337;
    int temp_338;
    uint temp_339;
    int temp_340;
    precise float temp_341;
    precise float temp_342;
    precise float temp_343;
    int temp_344;
    uint temp_345;
    uint temp_346;
    int temp_347;
    precise float temp_348;
    int temp_349;
    uint temp_350;
    uint temp_351;
    int temp_352;
    precise float temp_353;
    int temp_354;
    uint temp_355;
    int temp_356;
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
    precise float temp_374;
    precise float temp_375;
    uint temp_376;
    int temp_377;
    bool temp_378;
    uint temp_379;
    precise float temp_380;
    precise float temp_381;
    precise float temp_382;
    precise float temp_383;
    precise float temp_384;
    precise float temp_385;
    precise float temp_386;
    uint temp_387;
    precise float temp_388;
    bool temp_389;
    precise float temp_390;
    int temp_391;
    uint temp_392;
    uint temp_393;
    int temp_394;
    precise float temp_395;
    int temp_396;
    uint temp_397;
    uint temp_398;
    int temp_399;
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
    uint temp_428;
    uint temp_429;
    int temp_430;
    precise float temp_431;
    int temp_432;
    uint temp_433;
    int temp_434;
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
    precise float temp_512;
    precise float temp_513;
    precise float temp_514;
    precise float temp_515;
    precise float temp_516;
    precise float temp_517;
    precise float temp_518;
    precise float temp_519;
    precise vec3 temp_520;
    precise float temp_521;
    precise float temp_522;
    precise float temp_523;
    precise float temp_524;
    precise float temp_525;
    precise float temp_526;
    precise float temp_527;
    precise float temp_528;
    precise float temp_529;
    precise vec3 temp_530;
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
    // 0x000008: 0x0103F8000007F00F Mov32i
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
    // 0x000050: 0xE043FF8E00C7FF08 Ipa
    temp_8 = in_attr6.x;
    // 0x000058: 0xE043FF8E40C7FF0E Ipa
    temp_9 = in_attr6.y;
    // 0x000068: 0xD830026FF0E70802 Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000070: 0xD8300241C0E7081E Texs
    temp_13 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyzw;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    temp_16 = temp_13.z;
    temp_17 = temp_13.w;
    // 0x000078: 0xD86201EFF0F70409 Texs
    temp_18 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x000088: 0xD8240360A0E70824 Texs
    temp_19 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_20 = temp_19.x;
    temp_21 = temp_19.y;
    temp_22 = temp_19.z;
    // 0x000090: 0xD822020000570420 Texs
    temp_23 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_24 = temp_23.x;
    temp_25 = temp_23.y;
    temp_26 = temp_23.z;
    // 0x000098: 0xE043FF8A00C7FF01 Ipa
    temp_27 = in_attr2.x;
    // 0x0000A8: 0xE043FF8900C7FF0B Ipa
    temp_28 = in_attr1.x;
    // 0x0000B0: 0xE043FF8A40C7FF06 Ipa
    temp_29 = in_attr2.y;
    // 0x0000B8: 0xE043FF8940C7FF0D Ipa
    temp_30 = in_attr1.y;
    // 0x0000C8: 0xE043FF8A80C7FF07 Ipa
    temp_31 = in_attr2.z;
    // 0x0000D0: 0xE043FF8B00C7FF23 Ipa
    temp_32 = in_attr3.x;
    // 0x0000D8: 0xE043FF8800C7FF12 Ipa
    temp_33 = in_attr0.x;
    // 0x0000E8: 0xE043FF8B40C7FF22 Ipa
    temp_34 = in_attr3.y;
    // 0x0000F0: 0xE043FF8840C7FF13 Ipa
    temp_35 = in_attr0.y;
    // 0x0000F8: 0xE043FF8B80C7FF17 Ipa
    temp_36 = in_attr3.z;
    // 0x000108: 0xE043FF8880C7FF15 Ipa
    temp_37 = in_attr0.z;
    // 0x000110: 0xE043FF8980C7FF0E Ipa
    temp_38 = in_attr1.z;
    // 0x000118: 0x5C68100000170108 Fmul
    temp_39 = temp_27 * temp_27;
    // 0x000128: 0x5C68100000B70B0F Fmul
    temp_40 = temp_28 * temp_28;
    // 0x000130: 0x5C68100002372311 Fmul
    temp_41 = temp_32 * temp_32;
    // 0x000138: 0x59A0040000670608 Ffma
    temp_42 = fma(temp_29, temp_29, temp_39);
    // 0x000148: 0x59A0078000D70D0F Ffma
    temp_43 = fma(temp_30, temp_30, temp_40);
    // 0x000150: 0x5C68100001271210 Fmul
    temp_44 = temp_33 * temp_33;
    // 0x000158: 0x59A0088002272211 Ffma
    temp_45 = fma(temp_34, temp_34, temp_41);
    // 0x000168: 0x59A0040000770708 Ffma
    temp_46 = fma(temp_31, temp_31, temp_42);
    // 0x000170: 0x59A0078000E70E0F Ffma
    temp_47 = fma(temp_38, temp_38, temp_43);
    // 0x000178: 0x5080000000570808 Mufu
    temp_48 = inversesqrt(temp_46);
    // 0x000188: 0x59A0080001371310 Ffma
    temp_49 = fma(temp_35, temp_35, temp_44);
    // 0x000190: 0x5080000000570F14 Mufu
    temp_50 = inversesqrt(temp_47);
    // 0x000198: 0x59A0088001771719 Ffma
    temp_51 = fma(temp_36, temp_36, temp_45);
    // 0x0001A8: 0x5080000000571919 Mufu
    temp_52 = inversesqrt(temp_51);
    // 0x0001B0: 0x59A0080001571516 Ffma
    temp_53 = fma(temp_37, temp_37, temp_49);
    // 0x0001B8: 0x5080000000571618 Mufu
    temp_54 = inversesqrt(temp_53);
    // 0x0001C8: 0x5C68100000870711 Fmul
    temp_55 = temp_31 * temp_48;
    // 0x0001D0: 0x5C68100000870110 Fmul
    temp_56 = temp_27 * temp_48;
    // 0x0001D8: 0x5C68100001470B0B Fmul
    temp_57 = temp_28 * temp_50;
    // 0x0001E8: 0x5C68100001470D0D Fmul
    temp_58 = temp_30 * temp_50;
    // 0x0001F0: 0x5C68100000870606 Fmul
    temp_59 = temp_29 * temp_48;
    // 0x0001F8: 0x5C68100001470E14 Fmul
    temp_60 = temp_38 * temp_50;
    // 0x000208: 0x3868104180070408 Fmul
    temp_61 = temp_6 * 16.0;
    // 0x000210: 0x386810411007050E Fmul
    temp_62 = temp_7 * 9.0;
    // 0x000218: 0x5CA8148000870A08 F2f
    temp_63 = floor(temp_61);
    // 0x000228: 0x5C69100001972323 Fmul
    temp_64 = 0.0 - temp_52;
    temp_65 = temp_32 * temp_64;
    // 0x000230: 0x5CA8148000E70A0E F2f
    temp_66 = floor(temp_62);
    // 0x000238: 0x5C68100001871313 Fmul
    temp_67 = temp_35 * temp_54;
    // 0x000248: 0x5C68100001871501 Fmul
    temp_68 = temp_37 * temp_54;
    // 0x000250: 0x5C68100001871212 Fmul
    temp_69 = temp_33 * temp_54;
    // 0x000258: 0x5C69100001972222 Fmul
    temp_70 = 0.0 - temp_52;
    temp_71 = temp_34 * temp_70;
    // 0x000268: 0x5C69100001971716 Fmul
    temp_72 = 0.0 - temp_52;
    temp_73 = temp_36 * temp_72;
    // 0x000270: 0x32A0044180070E2E Ffma
    temp_74 = fma(temp_66, 16.0, temp_63);
    // 0x000278: 0xF0F0000034370000 Depbar
    // 0x000288: 0x5C68100000370307 Fmul
    temp_75 = temp_12 * temp_12;
    // 0x000290: 0x4BB1839406071D07 Fsetp
    temp_76 = temp_17 < fp_c5.data[24].x;
    // 0x000298: 0x5C68100000371010 Fmul
    temp_77 = temp_56 * temp_12;
    // 0x0002A8: 0x59A0038000270207 Ffma
    temp_78 = fma(temp_11, temp_11, temp_75);
    // 0x0002B0: 0x385D103F80070707 Fadd
    temp_79 = 0.0 - temp_78;
    temp_80 = temp_79 + 1.0;
    temp_81 = clamp(temp_80, 0.0, 1.0);
    // 0x0002B8: 0x5080000000870705 Mufu
    temp_82 = sqrt(temp_81);
    // 0x0002C8: 0x5C68100000370604 Fmul
    temp_83 = temp_59 * temp_12;
    // 0x0002D0: 0xE24000000688000F Bra
    if (temp_76)
    {
        // 0x0002D8: 0x5C9807800FF70000 Mov
        // 0x0002E8: 0xE33000000007000F Kil
        discard;
    }
    // 0x000348: 0x4C58301805C72306 Fadd
    temp_84 = 0.0 - fp_c6.data[23].x;
    temp_85 = temp_65 + temp_84;
    // 0x000350: 0x5CB0118002E70A2E F2i
    temp_86 = trunc(temp_74);
    temp_87 = max(temp_86, 0.0);
    temp_88 = uint(temp_87);
    // 0x000358: 0x59A0080000B7020B Ffma
    temp_89 = fma(temp_11, temp_57, temp_77);
    // 0x000368: 0xE2900000BB000000 Ssy
    // 0x000370: 0x5C68100000371111 Fmul
    temp_90 = temp_55 * temp_12;
    // 0x000378: 0x4C58301805D72203 Fadd
    temp_91 = 0.0 - fp_c6.data[23].y;
    temp_92 = temp_71 + temp_91;
    // 0x000388: 0x59A0020000D70204 Ffma
    temp_93 = fma(temp_11, temp_58, temp_83);
    // 0x000390: 0x4C58301805E71607 Fadd
    temp_94 = 0.0 - fp_c6.data[23].z;
    temp_95 = temp_73 + temp_94;
    // 0x000398: 0x5C68100000670608 Fmul
    temp_96 = temp_85 * temp_85;
    // 0x0003A8: 0x59A005800057120B Ffma
    temp_97 = fma(temp_69, temp_82, temp_89);
    // 0x0003B0: 0x59A0088001470214 Ffma
    temp_98 = fma(temp_11, temp_60, temp_90);
    // 0x0003B8: 0xF0F0000034170000 Depbar
    // 0x0003C8: 0x4C6810180A072424 Fmul
    temp_99 = temp_20 * fp_c6.data[40].x;
    // 0x0003D0: 0x59A0020000571304 Ffma
    temp_100 = fma(temp_67, temp_82, temp_93);
    // 0x0003D8: 0x01040DF760C7F00F Mov32i
    // 0x0003E8: 0x59A0040000370308 Ffma
    temp_101 = fma(temp_92, temp_92, temp_96);
    // 0x0003F0: 0x5C68100000B70B02 Fmul
    temp_102 = temp_97 * temp_97;
    // 0x0003F8: 0x59A00A0000570114 Ffma
    temp_103 = fma(temp_68, temp_82, temp_98);
    // 0x000408: 0x0103F0000007F02F Mov32i
    // 0x000410: 0x5C9807800FF70018 Mov
    // 0x000418: 0x3848000000872E2C Shl
    temp_104 = int(temp_88) << 8;
    // 0x000428: 0x59A0040000770708 Ffma
    temp_105 = fma(temp_95, temp_95, temp_101);
    // 0x000430: 0xEF94008200472C2C Ldc
    temp_106 = temp_104 + 0x2004;
    temp_107 = uint(temp_106) >> 2;
    temp_108 = temp_107 >> 2;
    temp_109 = int(temp_107) & 3;
    temp_110 = fp_c8.data[int(temp_108)][temp_109];
    // 0x000438: 0x59A0010000470402 Ffma
    temp_111 = fma(temp_100, temp_100, temp_102);
    // 0x000448: 0x5080000000570808 Mufu
    temp_112 = inversesqrt(temp_105);
    // 0x000450: 0x59A0010001471401 Ffma
    temp_113 = fma(temp_103, temp_103, temp_111);
    // 0x000458: 0x386013BF80072402 Fmnmx
    temp_114 = min(temp_99, 1.0);
    // 0x000468: 0x5080000000570112 Mufu
    temp_115 = inversesqrt(temp_113);
    // 0x000470: 0x5C68100000870605 Fmul
    temp_116 = temp_85 * temp_112;
    // 0x000478: 0x5C68100000870303 Fmul
    temp_117 = temp_92 * temp_112;
    // 0x000488: 0x5C68100000870707 Fmul
    temp_118 = temp_95 * temp_112;
    // 0x000490: 0x4C60178400170202 Fmnmx
    temp_119 = max(temp_114, fp_c1.data[0].y);
    // 0x000498: 0x5C6810000057230D Fmul
    temp_120 = temp_65 * temp_116;
    // 0x0004A8: 0x4C69101805C70506 Fmul
    temp_121 = 0.0 - fp_c6.data[23].x;
    temp_122 = temp_116 * temp_121;
    // 0x0004B0: 0x5C68100001270B0E Fmul
    temp_123 = temp_97 * temp_115;
    // 0x0004B8: 0x5C68100001270401 Fmul
    temp_124 = temp_100 * temp_115;
    // 0x0004C8: 0x5C68100001271412 Fmul
    temp_125 = temp_103 * temp_115;
    // 0x0004D0: 0x51A4010400170231 Ffma
    temp_126 = fma(temp_119, temp_119, fp_c1.data[0].y);
    temp_127 = clamp(temp_126, 0.0, 1.0);
    // 0x0004D8: 0x59A006800037220D Ffma
    temp_128 = fma(temp_71, temp_117, temp_120);
    // 0x0004E8: 0x49A1031805D70306 Ffma
    temp_129 = 0.0 - fp_c6.data[23].y;
    temp_130 = fma(temp_117, temp_129, temp_122);
    // 0x0004F0: 0x5C68100000570E04 Fmul
    temp_131 = temp_123 * temp_116;
    // 0x0004F8: 0x32A017BF0007022F Ffma
    temp_132 = fma(temp_119, 0.5, 0.5);
    // 0x000508: 0x4C69101805C70E08 Fmul
    temp_133 = 0.0 - fp_c6.data[23].x;
    temp_134 = temp_123 * temp_133;
    // 0x000510: 0x5C68100003173130 Fmul
    temp_135 = temp_127 * temp_127;
    // 0x000518: 0x59A406800077160D Ffma
    temp_136 = fma(temp_73, temp_118, temp_128);
    temp_137 = clamp(temp_136, 0.0, 1.0);
    // 0x000528: 0x49A5031805E70706 Ffma
    temp_138 = 0.0 - fp_c6.data[23].z;
    temp_139 = fma(temp_118, temp_138, temp_130);
    temp_140 = clamp(temp_139, 0.0, 1.0);
    // 0x000530: 0x59A0020000370105 Ffma
    temp_141 = fma(temp_124, temp_117, temp_131);
    // 0x000538: 0x5C68100002370E03 Fmul
    temp_142 = temp_123 * temp_65;
    // 0x000548: 0x49A1041805D70108 Ffma
    temp_143 = 0.0 - fp_c6.data[23].y;
    temp_144 = fma(temp_124, temp_143, temp_134);
    // 0x000550: 0x5C68120002F72F2F Fmul
    temp_145 = temp_132 * 0.5;
    temp_146 = temp_145 * temp_132;
    // 0x000558: 0x49A2078400070D04 Ffma
    temp_147 = fma(temp_137, fp_c1.data[0].x, -6.98316002);
    // 0x000568: 0x59A4028000771205 Ffma
    temp_148 = fma(temp_125, temp_118, temp_141);
    temp_149 = clamp(temp_148, 0.0, 1.0);
    // 0x000570: 0x59A0018002270103 Ffma
    temp_150 = fma(temp_124, temp_71, temp_142);
    // 0x000578: 0x49A5041805E71208 Ffma
    temp_151 = 0.0 - fp_c6.data[23].z;
    temp_152 = fma(temp_125, temp_151, temp_144);
    temp_153 = clamp(temp_152, 0.0, 1.0);
    // 0x000588: 0x5C68100000470D0D Fmul
    temp_154 = temp_137 * temp_147;
    // 0x000590: 0x4C58301407B71E04 Fadd
    temp_155 = 0.0 - fp_c5.data[30].w;
    temp_156 = temp_14 + temp_155;
    // 0x000598: 0x59A202800307050B Ffma
    temp_157 = 0.0 - temp_149;
    temp_158 = fma(temp_149, temp_135, temp_157);
    // 0x0005A8: 0x59A4018001671203 Ffma
    temp_159 = fma(temp_125, temp_73, temp_150);
    temp_160 = clamp(temp_159, 0.0, 1.0);
    // 0x0005B0: 0x59A1040002F70810 Ffma
    temp_161 = 0.0 - temp_146;
    temp_162 = fma(temp_153, temp_161, temp_153);
    // 0x0005B8: 0x5B6603800FF72C07 Isetp
    temp_163 = floatBitsToUint(temp_110) <= 0u;
    // 0x0005C8: 0x5C90008000D70007 Rro
    // 0x0005D0: 0x51A005840027050D Ffma
    temp_164 = fma(temp_149, temp_158, fp_c1.data[0].z);
    // 0x0005D8: 0x5080000000270707 Mufu
    temp_165 = exp2(temp_154);
    // 0x0005E8: 0x49A2078400070605 Ffma
    temp_166 = fma(temp_140, fp_c1.data[0].x, -6.98316002);
    // 0x0005F0: 0x5080000000470D0F Mufu
    temp_167 = 1.0 / temp_164;
    // 0x0005F8: 0x51A0021407B72504 Ffma
    temp_168 = fma(temp_21, temp_156, fp_c5.data[30].w);
    // 0x000608: 0x59A1018002F70311 Ffma
    temp_169 = 0.0 - temp_146;
    temp_170 = fma(temp_160, temp_169, temp_160);
    // 0x000610: 0x4C6810180147080B Fmul
    temp_171 = temp_153 * fp_c6.data[5].x;
    // 0x000618: 0x5C58100001072F13 Fadd
    temp_172 = temp_146 + temp_162;
    // 0x000628: 0x5C68100000370128 Fmul
    temp_173 = temp_124 * temp_160;
    // 0x000630: 0x5080000000471313 Mufu
    temp_174 = 1.0 / temp_172;
    // 0x000638: 0x5C68100000570606 Fmul
    temp_175 = temp_140 * temp_166;
    // 0x000648: 0x5C58100001172F11 Fadd
    temp_176 = temp_146 + temp_170;
    // 0x000650: 0x1E23EA2F98370B10 Fmul32i
    temp_177 = temp_171 * 0.318309873;
    // 0x000658: 0x5080000000471111 Mufu
    temp_178 = 1.0 / temp_176;
    // 0x000668: 0x59A1038000770405 Ffma
    temp_179 = 0.0 - temp_165;
    temp_180 = fma(temp_168, temp_179, temp_165);
    // 0x000670: 0x4C58301407B71C0B Fadd
    temp_181 = 0.0 - fp_c5.data[30].w;
    temp_182 = temp_16 + temp_181;
    // 0x000678: 0x5C68100000F7310D Fmul
    temp_183 = temp_127 * temp_167;
    // 0x000688: 0x5C90008000670014 Rro
    // 0x000690: 0x4C58301407B71F06 Fadd
    temp_184 = 0.0 - fp_c5.data[30].w;
    temp_185 = temp_15 + temp_184;
    // 0x000698: 0x508000000027140F Mufu
    temp_186 = exp2(temp_175);
    // 0x0006A8: 0x5C58100000570405 Fadd
    temp_187 = temp_168 + temp_180;
    // 0x0006B0: 0x5C68100000371217 Fmul
    temp_188 = temp_125 * temp_160;
    // 0x0006B8: 0x5C68100000D70D0D Fmul
    temp_189 = temp_183 * temp_183;
    // 0x0006C8: 0x32A2114000072828 Ffma
    temp_190 = 0.0 - temp_71;
    temp_191 = fma(temp_173, 2.0, temp_190);
    // 0x0006D0: 0x4C68101406970505 Fmul
    temp_192 = temp_187 * fp_c5.data[26].y;
    // 0x0006D8: 0x3868103F0007112D Fmul
    temp_193 = temp_178 * 0.5;
    // 0x0006E8: 0x32A20B4000071717 Ffma
    temp_194 = 0.0 - temp_73;
    temp_195 = fma(temp_188, 2.0, temp_194);
    // 0x0006F0: 0x59A1080001070510 Ffma
    temp_196 = 0.0 - temp_177;
    temp_197 = fma(temp_192, temp_196, temp_177);
    // 0x0006F8: 0x51A0031407B72505 Ffma
    temp_198 = fma(temp_21, temp_185, fp_c5.data[30].w);
    // 0x000708: 0xEF5400000007FF10 Stl
    local_memory[0] = floatBitsToUint(temp_197);
    // 0x000710: 0x51A0059407B72506 Ffma
    temp_199 = fma(temp_21, temp_182, fp_c5.data[30].w);
    // 0x000718: 0x5C68100001372D13 Fmul
    temp_200 = temp_193 * temp_174;
    // 0x000728: 0x59A103800077050B Ffma
    temp_201 = 0.0 - temp_165;
    temp_202 = fma(temp_198, temp_201, temp_165);
    // 0x000730: 0x59A1038000770607 Ffma
    temp_203 = 0.0 - temp_165;
    temp_204 = fma(temp_199, temp_203, temp_165);
    // 0x000738: 0x5C68100001370D15 Fmul
    temp_205 = temp_189 * temp_200;
    // 0x000748: 0x4C6810180157080D Fmul
    temp_206 = temp_153 * fp_c6.data[5].y;
    // 0x000750: 0x59A1078000F70413 Ffma
    temp_207 = 0.0 - temp_186;
    temp_208 = fma(temp_168, temp_207, temp_186);
    // 0x000758: 0x4C68101801670810 Fmul
    temp_209 = temp_153 * fp_c6.data[5].z;
    // 0x000768: 0x59A1078000F70514 Ffma
    temp_210 = 0.0 - temp_186;
    temp_211 = fma(temp_198, temp_210, temp_186);
    // 0x000770: 0x5C58100000770607 Fadd
    temp_212 = temp_199 + temp_204;
    // 0x000778: 0x59A1078000F7060F Ffma
    temp_213 = 0.0 - temp_186;
    temp_214 = fma(temp_199, temp_213, temp_186);
    // 0x000788: 0x1E23EA2F98370D11 Fmul32i
    temp_215 = temp_206 * 0.318309873;
    // 0x000790: 0x5C58100000B7050B Fadd
    temp_216 = temp_198 + temp_202;
    // 0x000798: 0x1E23EA2F98371010 Fmul32i
    temp_217 = temp_209 * 0.318309873;
    // 0x0007A8: 0x5C58100001370413 Fadd
    temp_218 = temp_168 + temp_208;
    // 0x0007B0: 0x4C6810140697070D Fmul
    temp_219 = temp_212 * fp_c5.data[26].y;
    // 0x0007B8: 0x5C58100001470514 Fadd
    temp_220 = temp_198 + temp_211;
    // 0x0007C8: 0x5C58100000F7060F Fadd
    temp_221 = temp_199 + temp_214;
    // 0x0007D0: 0x5C68100001570815 Fmul
    temp_222 = temp_153 * temp_205;
    // 0x0007D8: 0x4C68101406970B0B Fmul
    temp_223 = temp_216 * fp_c5.data[26].y;
    // 0x0007E8: 0x4C68101406971313 Fmul
    temp_224 = temp_218 * fp_c5.data[26].y;
    // 0x0007F0: 0x59A1080001070D08 Ffma
    temp_225 = 0.0 - temp_217;
    temp_226 = fma(temp_219, temp_225, temp_217);
    // 0x0007F8: 0x51A5048400270A0D Ffma
    temp_227 = 0.0 - temp_18;
    temp_228 = fma(temp_22, temp_227, fp_c1.data[0].z);
    temp_229 = clamp(temp_228, 0.0, 1.0);
    // 0x000808: 0x4C68101406971414 Fmul
    temp_230 = temp_220 * fp_c5.data[26].y;
    // 0x000810: 0x4C68101406970F0F Fmul
    temp_231 = temp_221 * fp_c5.data[26].y;
    // 0x000818: 0x59A1088001170B07 Ffma
    temp_232 = 0.0 - temp_215;
    temp_233 = fma(temp_223, temp_232, temp_215);
    // 0x000828: 0x4C68101801471313 Fmul
    temp_234 = temp_224 * fp_c6.data[5].x;
    // 0x000830: 0x5C9807800FF70009 Mov
    // 0x000838: 0x49A206980AC70D10 Ffma
    temp_235 = 0.0 - temp_229;
    temp_236 = fma(temp_229, fp_c6.data[43].x, temp_235);
    // 0x000848: 0x49A206980AD70D11 Ffma
    temp_237 = 0.0 - temp_229;
    temp_238 = fma(temp_229, fp_c6.data[43].y, temp_237);
    // 0x000850: 0x49A206980AE70D0D Ffma
    temp_239 = 0.0 - temp_229;
    temp_240 = fma(temp_229, fp_c6.data[43].z, temp_239);
    // 0x000858: 0x4C68101801571414 Fmul
    temp_241 = temp_230 * fp_c6.data[5].y;
    // 0x000868: 0x4C68101801670F0F Fmul
    temp_242 = temp_231 * fp_c6.data[5].z;
    // 0x000870: 0x5C68100001571324 Fmul
    temp_243 = temp_234 * temp_222;
    // 0x000878: 0x3858103F80071010 Fadd
    temp_244 = temp_236 + 1.0;
    // 0x000888: 0x3858103F80071111 Fadd
    temp_245 = temp_238 + 1.0;
    // 0x000890: 0x3858103F80070D1B Fadd
    temp_246 = temp_240 + 1.0;
    // 0x000898: 0x5C68100001571426 Fmul
    temp_247 = temp_241 * temp_222;
    // 0x0008A8: 0x5C68100001570F27 Fmul
    temp_248 = temp_242 * temp_222;
    // 0x0008B0: 0x5C68100000370E0D Fmul
    temp_249 = temp_123 * temp_160;
    // 0x0008B8: 0x5C9807800FF7000A Mov
    // 0x0008C8: 0x5C9807800FF7000B Mov
    // 0x0008D0: 0x5C9807800FF7000F Mov
    // 0x0008D8: 0x5C9807800FF70013 Mov
    // 0x0008E8: 0x59A4080001071E19 Ffma
    temp_250 = fma(temp_14, temp_244, temp_244);
    temp_251 = clamp(temp_250, 0.0, 1.0);
    // 0x0008F0: 0x59A4088001171F1A Ffma
    temp_252 = fma(temp_15, temp_245, temp_245);
    temp_253 = clamp(temp_252, 0.0, 1.0);
    // 0x0008F8: 0x59A40D8001B71C1B Ffma
    temp_254 = fma(temp_16, temp_246, temp_246);
    temp_255 = clamp(temp_254, 0.0, 1.0);
    // 0x000908: 0x32A211C000070D2B Ffma
    temp_256 = 0.0 - temp_65;
    temp_257 = fma(temp_249, 2.0, temp_256);
    // 0x000910: 0x1E23E22F98372424 Fmul32i
    temp_258 = temp_243 * 0.159154937;
    // 0x000918: 0x1E23E22F98372626 Fmul32i
    temp_259 = temp_247 * 0.159154937;
    // 0x000928: 0x1E23E22F98372727 Fmul32i
    temp_260 = temp_248 * 0.159154937;
    // 0x000930: 0xF0F800000000000F Sync
    temp_261 = 0.0;
    temp_262 = 0.0;
    temp_263 = 0.0;
    temp_264 = 0.0;
    temp_265 = 0.0;
    temp_266 = 0.0;
    temp_267 = 0.0;
    temp_268 = 0.0;
    temp_269 = 0.0;
    temp_270 = 0.0;
    temp_271 = 0.0;
    temp_272 = 0.0;
    if (!temp_163)
    {
        // 0x000938: 0x5C9807800FF7002A Mov
        temp_273 = 0;
        do
        {
            // 0x000948: 0x5C18020002A72E29 Iscadd
            temp_275 = int(temp_88) << 4;
            temp_276 = temp_275 + temp_273;
            // 0x000950: 0xE003FF87CFF7FF32 Ipa
            // 0x000958: 0x1C00000000172A2A Iadd32i
            temp_277 = temp_273 + 1;
            // 0x000968: 0xE003FF87CFF7FF34 Ipa
            // 0x000970: 0x3848000000472929 Shl
            temp_278 = temp_276 << 4;
            // 0x000978: 0xE003FF87CFF7FF33 Ipa
            // 0x000988: 0x5B6C038002C72A0F Isetp
            temp_274 = uint(temp_277) >= floatBitsToUint(temp_110);
            // 0x000990: 0xE290000057800000 Ssy
            // 0x000998: 0xEF94008200072929 Ldc
            temp_279 = temp_278 + 0x2000;
            temp_280 = uint(temp_279) >> 2;
            temp_281 = temp_280 >> 2;
            temp_282 = int(temp_280) & 3;
            temp_283 = fp_c8.data[int(temp_281)][temp_282];
            // 0x0009A8: 0x5080000000473232 Mufu
            // 0x0009B0: 0x5080000000473434 Mufu
            // 0x0009B8: 0x5080000000473333 Mufu
            // 0x0009C8: 0xE043FF8D0327FF32 Ipa
            temp_284 = in_attr5.x;
            // 0x0009D0: 0xE043FF8D4347FF34 Ipa
            temp_285 = in_attr5.y;
            // 0x0009D8: 0xE043FF8D8337FF33 Ipa
            temp_286 = in_attr5.z;
            // 0x0009E8: 0x3848000000672929 Shl
            temp_287 = floatBitsToInt(temp_283) << 6;
            // 0x0009F0: 0xEF9500800107290C Ldc
            temp_288 = temp_287 + 16;
            temp_289 = uint(temp_288) >> 2;
            temp_290 = temp_289 >> 2;
            temp_291 = int(temp_289) & 3;
            temp_292 = fp_c8.data[int(temp_290)][temp_291];
            temp_293 = int(temp_289) + 1;
            temp_294 = uint(temp_293) >> 2;
            temp_295 = temp_293 & 3;
            temp_296 = fp_c8.data[int(temp_294)][temp_295];
            // 0x0009F8: 0xEF95008001872910 Ldc
            temp_297 = temp_287 + 24;
            temp_298 = uint(temp_297) >> 2;
            temp_299 = temp_298 >> 2;
            temp_300 = int(temp_298) & 3;
            temp_301 = fp_c8.data[int(temp_299)][temp_300];
            temp_302 = int(temp_298) + 1;
            temp_303 = uint(temp_302) >> 2;
            temp_304 = temp_302 & 3;
            temp_305 = fp_c8.data[int(temp_303)][temp_304];
            // 0x000A08: 0xEF95008002072914 Ldc
            temp_306 = temp_287 + 32;
            temp_307 = uint(temp_306) >> 2;
            temp_308 = temp_307 >> 2;
            temp_309 = int(temp_307) & 3;
            temp_310 = fp_c8.data[int(temp_308)][temp_309];
            temp_311 = int(temp_307) + 1;
            temp_312 = uint(temp_311) >> 2;
            temp_313 = temp_311 & 3;
            temp_314 = fp_c8.data[int(temp_312)][temp_313];
            // 0x000A10: 0x5C58300003270C32 Fadd
            temp_315 = 0.0 - temp_284;
            temp_316 = temp_292 + temp_315;
            // 0x000A18: 0x5C58300003470D35 Fadd
            temp_317 = 0.0 - temp_285;
            temp_318 = temp_296 + temp_317;
            // 0x000A28: 0x5C58300003371033 Fadd
            temp_319 = 0.0 - temp_286;
            temp_320 = temp_301 + temp_319;
            // 0x000A30: 0x5C68100003273234 Fmul
            temp_321 = temp_316 * temp_316;
            // 0x000A38: 0x59A1198003371111 Ffma
            temp_322 = 0.0 - temp_320;
            temp_323 = fma(temp_305, temp_322, temp_320);
            // 0x000A48: 0x59A01A0003573534 Ffma
            temp_324 = fma(temp_318, temp_318, temp_321);
            // 0x000A50: 0x59A01A0001171136 Ffma
            temp_325 = fma(temp_323, temp_323, temp_324);
            // 0x000A58: 0x508000000057360C Mufu
            temp_326 = inversesqrt(temp_325);
            // 0x000A68: 0x5080000000873636 Mufu
            temp_327 = sqrt(temp_325);
            // 0x000A70: 0x5C68100000C7320D Fmul
            temp_328 = temp_316 * temp_326;
            // 0x000A78: 0x5C68100000C73537 Fmul
            temp_329 = temp_318 * temp_326;
            // 0x000A88: 0x5C69100001470D0D Fmul
            temp_330 = 0.0 - temp_310;
            temp_331 = temp_328 * temp_330;
            // 0x000A90: 0x5C68100000C71114 Fmul
            temp_332 = temp_323 * temp_326;
            // 0x000A98: 0xEF95008003872910 Ldc
            temp_333 = temp_287 + 56;
            temp_334 = uint(temp_333) >> 2;
            temp_335 = temp_334 >> 2;
            temp_336 = int(temp_334) & 3;
            temp_337 = fp_c8.data[int(temp_335)][temp_336];
            temp_338 = int(temp_334) + 1;
            temp_339 = uint(temp_338) >> 2;
            temp_340 = temp_338 & 3;
            temp_341 = fp_c8.data[int(temp_339)][temp_340];
            // 0x000AA8: 0x59A1068001573737 Ffma
            temp_342 = 0.0 - temp_314;
            temp_343 = fma(temp_329, temp_342, temp_331);
            // 0x000AB0: 0xEF94008002872915 Ldc
            temp_344 = temp_287 + 40;
            temp_345 = uint(temp_344) >> 2;
            temp_346 = temp_345 >> 2;
            temp_347 = int(temp_345) & 3;
            temp_348 = fp_c8.data[int(temp_346)][temp_347];
            // 0x000AB8: 0xEF9500800307290C Ldc
            temp_349 = temp_287 + 48;
            temp_350 = uint(temp_349) >> 2;
            temp_351 = temp_350 >> 2;
            temp_352 = int(temp_350) & 3;
            temp_353 = fp_c8.data[int(temp_351)][temp_352];
            temp_354 = int(temp_350) + 1;
            temp_355 = uint(temp_354) >> 2;
            temp_356 = temp_354 & 3;
            temp_357 = fp_c8.data[int(temp_355)][temp_356];
            // 0x000AC8: 0x59A11B8001571414 Ffma
            temp_358 = 0.0 - temp_348;
            temp_359 = fma(temp_332, temp_358, temp_343);
            // 0x000AD0: 0x59A4068003670C36 Ffma
            temp_360 = fma(temp_353, temp_327, temp_357);
            temp_361 = clamp(temp_360, 0.0, 1.0);
            // 0x000AD8: 0x010404000007F015 Mov32i
            // 0x000AE8: 0x59A4088001071410 Ffma
            temp_362 = fma(temp_359, temp_337, temp_341);
            temp_363 = clamp(temp_362, 0.0, 1.0);
            // 0x000AF0: 0x5C68100003673614 Fmul
            temp_364 = temp_361 * temp_361;
            // 0x000AF8: 0x33A00AC000073611 Ffma
            temp_365 = fma(temp_361, -2.0, 3.0);
            // 0x000B08: 0x33A00AC000071015 Ffma
            temp_366 = fma(temp_363, -2.0, 3.0);
            // 0x000B10: 0x5C68100001071010 Fmul
            temp_367 = temp_363 * temp_363;
            // 0x000B18: 0x5C68100001171411 Fmul
            temp_368 = temp_364 * temp_365;
            // 0x000B28: 0x39585042F0073314 Fadd
            temp_369 = abs(temp_320);
            temp_370 = temp_369 + -120.0;
            // 0x000B30: 0x5C68100001571010 Fmul
            temp_371 = temp_367 * temp_366;
            // 0x000B38: 0x5C68100001171010 Fmul
            temp_372 = temp_371 * temp_368;
            // 0x000B48: 0x1EABD4CCCCD71411 Fmul32i
            temp_373 = temp_370 * -0.0500000007;
            temp_374 = clamp(temp_373, 0.0, 1.0);
            // 0x000B50: 0x5C68100001171010 Fmul
            temp_375 = temp_372 * temp_374;
            // 0x000B58: 0x36247F9000171111 Xmad
            temp_376 = floatBitsToUint(temp_374) >> 16;
            temp_377 = int(temp_376) << 16;
            // 0x000B68: 0x5BB383800FF71007 Fsetp
            temp_378 = temp_375 <= 0.0;
            // 0x000B70: 0x7A05083C0F00FF11 Hadd2
            temp_273 = temp_277;
            temp_379 = uint(temp_377);
            temp_380 = temp_261;
            temp_381 = temp_262;
            temp_382 = temp_263;
            temp_383 = temp_264;
            temp_384 = temp_265;
            temp_385 = temp_266;
            if (temp_378)
            {
                temp_386 = unpackHalf2x16(uint(temp_377)).y;
                temp_387 = packHalf2x16(vec2(1.0, temp_386));
                temp_379 = temp_387;
            }
            // 0x000B78: 0x5D2103902FF71107 Hsetp2
            temp_388 = unpackHalf2x16(temp_379).x;
            temp_389 = temp_388 == 0.0;
            // 0x000B88: 0xF0F800000008000F Sync
            if (temp_389)
            {
                // 0x000B90: 0x5080000000470C0C Mufu
                temp_390 = 1.0 / temp_353;
                // 0x000B98: 0xEF94008002C72936 Ldc
                temp_391 = temp_287 + 44;
                temp_392 = uint(temp_391) >> 2;
                temp_393 = temp_392 >> 2;
                temp_394 = int(temp_392) & 3;
                temp_395 = fp_c8.data[int(temp_393)][temp_394];
                // 0x000BA8: 0xEF94008000872937 Ldc
                temp_396 = temp_287 + 8;
                temp_397 = uint(temp_396) >> 2;
                temp_398 = temp_397 >> 2;
                temp_399 = int(temp_397) & 3;
                temp_400 = fp_c8.data[int(temp_398)][temp_399];
                // 0x000BB0: 0x5C69100000C70D0D Fmul
                temp_401 = 0.0 - temp_390;
                temp_402 = temp_357 * temp_401;
                // 0x000BB8: 0x5C60138000D73333 Fmnmx
                temp_403 = min(temp_320, temp_402);
                // 0x000BC8: 0x5C61178003370D33 Fmnmx
                temp_404 = 0.0 - temp_402;
                temp_405 = max(temp_404, temp_403);
                // 0x000BD0: 0x59A01A0003373315 Ffma
                temp_406 = fma(temp_405, temp_405, temp_324);
                // 0x000BD8: 0x508000000057150C Mufu
                temp_407 = inversesqrt(temp_406);
                // 0x000BE8: 0x5080000000871515 Mufu
                temp_408 = sqrt(temp_406);
                // 0x000BF0: 0x5C68100000C73211 Fmul
                temp_409 = temp_316 * temp_407;
                // 0x000BF8: 0x5080000000473636 Mufu
                temp_410 = 1.0 / temp_395;
                // 0x000C08: 0x5C68100000C73535 Fmul
                temp_411 = temp_318 * temp_407;
                // 0x000C10: 0x5C68100000C73333 Fmul
                temp_412 = temp_405 * temp_407;
                // 0x000C18: 0x5C68100003771037 Fmul
                temp_413 = temp_375 * temp_400;
                // 0x000C28: 0x5C58100001172314 Fadd
                temp_414 = temp_65 + temp_409;
                // 0x000C30: 0x5C58100003572234 Fadd
                temp_415 = temp_71 + temp_411;
                // 0x000C38: 0x5C58100003371632 Fadd
                temp_416 = temp_73 + temp_412;
                // 0x000C48: 0x5C6810000147140C Fmul
                temp_417 = temp_414 * temp_414;
                // 0x000C50: 0x51A00A8400373615 Ffma
                temp_418 = fma(temp_410, temp_408, fp_c1.data[0].w);
                // 0x000C58: 0x5080000000471515 Mufu
                temp_419 = 1.0 / temp_418;
                // 0x000C68: 0x59A006000347340C Ffma
                temp_420 = fma(temp_415, temp_415, temp_417);
                // 0x000C70: 0x59A006000327320C Ffma
                temp_421 = fma(temp_416, temp_416, temp_420);
                // 0x000C78: 0x5080000000570C0C Mufu
                temp_422 = inversesqrt(temp_421);
                // 0x000C88: 0x1E23FB3333371515 Fmul32i
                temp_423 = temp_419 * 1.39999998;
                // 0x000C90: 0x5C68100001571515 Fmul
                temp_424 = temp_423 * temp_423;
                // 0x000C98: 0x5C68100000C71414 Fmul
                temp_425 = temp_414 * temp_422;
                // 0x000CA8: 0x5C68100000C73232 Fmul
                temp_426 = temp_416 * temp_422;
                // 0x000CB0: 0x5C68100000C73434 Fmul
                temp_427 = temp_415 * temp_422;
                // 0x000CB8: 0xEF9500800007290C Ldc
                temp_428 = uint(temp_287) >> 2;
                temp_429 = temp_428 >> 2;
                temp_430 = int(temp_428) & 3;
                temp_431 = fp_c8.data[int(temp_429)][temp_430];
                temp_432 = int(temp_428) + 1;
                temp_433 = uint(temp_432) >> 2;
                temp_434 = temp_432 & 3;
                temp_435 = fp_c8.data[int(temp_433)][temp_434];
                // 0x000CC8: 0x5C68100001471129 Fmul
                temp_436 = temp_409 * temp_425;
                // 0x000CD0: 0x5C68100001470E14 Fmul
                temp_437 = temp_123 * temp_425;
                // 0x000CD8: 0x5C68100001170E11 Fmul
                temp_438 = temp_123 * temp_409;
                // 0x000CE8: 0x59A0148003473529 Ffma
                temp_439 = fma(temp_411, temp_427, temp_436);
                // 0x000CF0: 0x59A00A0003470114 Ffma
                temp_440 = fma(temp_124, temp_427, temp_437);
                // 0x000CF8: 0x01040DF760C7F034 Mov32i
                // 0x000D08: 0x59A0088003570111 Ffma
                temp_441 = fma(temp_124, temp_411, temp_438);
                // 0x000D10: 0x59A4148003273329 Ffma
                temp_442 = fma(temp_412, temp_426, temp_439);
                temp_443 = clamp(temp_442, 0.0, 1.0);
                // 0x000D18: 0x59A40A0003271214 Ffma
                temp_444 = fma(temp_125, temp_426, temp_440);
                temp_445 = clamp(temp_444, 0.0, 1.0);
                // 0x000D28: 0x59A0088003371211 Ffma
                temp_446 = fma(temp_125, temp_412, temp_441);
                // 0x000D30: 0x49A21A0400072932 Ffma
                temp_447 = fma(temp_443, fp_c1.data[0].x, -6.98316002);
                // 0x000D38: 0x59A20A0001473033 Ffma
                temp_448 = 0.0 - temp_445;
                temp_449 = fma(temp_135, temp_445, temp_448);
                // 0x000D48: 0x59A10A8001571115 Ffma
                temp_450 = 0.0 - temp_424;
                temp_451 = fma(temp_446, temp_450, temp_424);
                // 0x000D50: 0x5C68100003272932 Fmul
                temp_452 = temp_443 * temp_447;
                // 0x000D58: 0x5C5C30000FF71129 Fadd
                temp_453 = temp_446 + -0.0;
                temp_454 = clamp(temp_453, 0.0, 1.0);
                // 0x000D68: 0x51A0198400271433 Ffma
                temp_455 = fma(temp_445, temp_449, fp_c1.data[0].z);
                // 0x000D70: 0x5C5C100001571115 Fadd
                temp_456 = temp_446 + temp_451;
                temp_457 = clamp(temp_456, 0.0, 1.0);
                // 0x000D78: 0x5080000000473333 Mufu
                temp_458 = 1.0 / temp_455;
                // 0x000D88: 0x5C90008003270032 Rro
                // 0x000D90: 0x59A1148002972F14 Ffma
                temp_459 = 0.0 - temp_454;
                temp_460 = fma(temp_146, temp_459, temp_454);
                // 0x000D98: 0x5080000000273232 Mufu
                temp_461 = exp2(temp_452);
                // 0x000DA8: 0x5C58100001472F14 Fadd
                temp_462 = temp_146 + temp_460;
                // 0x000DB0: 0x5080000000471414 Mufu
                temp_463 = 1.0 / temp_462;
                // 0x000DB8: 0x5C68100000C7100C Fmul
                temp_464 = temp_375 * temp_431;
                // 0x000DC8: 0x5C68100000D7100D Fmul
                temp_465 = temp_375 * temp_435;
                // 0x000DD0: 0x5C68100003373133 Fmul
                temp_466 = temp_127 * temp_458;
                // 0x000DD8: 0x59A1190003270411 Ffma
                temp_467 = 0.0 - temp_461;
                temp_468 = fma(temp_168, temp_467, temp_461);
                // 0x000DE8: 0x59A1190003270510 Ffma
                temp_469 = 0.0 - temp_461;
                temp_470 = fma(temp_198, temp_469, temp_461);
                // 0x000DF0: 0x59A1190003270632 Ffma
                temp_471 = 0.0 - temp_461;
                temp_472 = fma(temp_199, temp_471, temp_461);
                // 0x000DF8: 0x5C68100003373333 Fmul
                temp_473 = temp_466 * temp_466;
                // 0x000E08: 0x5C58100001170411 Fadd
                temp_474 = temp_168 + temp_468;
                // 0x000E10: 0x5C58100001070510 Fadd
                temp_475 = temp_198 + temp_470;
                // 0x000E18: 0x5C68100001472D14 Fmul
                temp_476 = temp_193 * temp_463;
                // 0x000E28: 0x5C58100003270632 Fadd
                temp_477 = temp_199 + temp_472;
                // 0x000E30: 0x4C68101406971111 Fmul
                temp_478 = temp_474 * fp_c5.data[26].y;
                // 0x000E38: 0x4C68101406971010 Fmul
                temp_479 = temp_475 * fp_c5.data[26].y;
                // 0x000E48: 0x5C68100001473314 Fmul
                temp_480 = temp_473 * temp_476;
                // 0x000E50: 0x4C68101406973232 Fmul
                temp_481 = temp_477 * fp_c5.data[26].y;
                // 0x000E58: 0x5C68100000C71111 Fmul
                temp_482 = temp_478 * temp_464;
                // 0x000E68: 0x5C68100001570C0C Fmul
                temp_483 = temp_464 * temp_457;
                // 0x000E70: 0x5C68100001472914 Fmul
                temp_484 = temp_454 * temp_480;
                // 0x000E78: 0x5C68100000D71029 Fmul
                temp_485 = temp_479 * temp_465;
                // 0x000E88: 0x5C68100003773232 Fmul
                temp_486 = temp_481 * temp_413;
                // 0x000E90: 0x5C68100001570D0D Fmul
                temp_487 = temp_465 * temp_457;
                // 0x000E98: 0x5C68100001573715 Fmul
                temp_488 = temp_413 * temp_457;
                // 0x000EA8: 0x49A0078400570C0F Ffma
                temp_489 = fma(temp_483, fp_c1.data[1].y, temp_261);
                // 0x000EB0: 0x5C68100001471110 Fmul
                temp_490 = temp_482 * temp_484;
                // 0x000EB8: 0x5C68100001472929 Fmul
                temp_491 = temp_485 * temp_484;
                // 0x000EC8: 0x5C68100001473232 Fmul
                temp_492 = temp_486 * temp_484;
                // 0x000ED0: 0x49A0098400570D13 Ffma
                temp_493 = fma(temp_487, fp_c1.data[1].y, temp_262);
                // 0x000ED8: 0x49A00C0400571518 Ffma
                temp_494 = fma(temp_488, fp_c1.data[1].y, temp_263);
                // 0x000EE8: 0x49A0048400471009 Ffma
                temp_495 = fma(temp_490, fp_c1.data[1].x, temp_264);
                // 0x000EF0: 0x49A005040047290A Ffma
                temp_496 = fma(temp_491, fp_c1.data[1].x, temp_265);
                // 0x000EF8: 0x49A005840047320B Ffma
                temp_497 = fma(temp_492, fp_c1.data[1].x, temp_266);
                // 0x000F08: 0xF0F800000007000F Sync
                temp_380 = temp_489;
                temp_381 = temp_493;
                temp_382 = temp_494;
                temp_383 = temp_495;
                temp_384 = temp_496;
                temp_385 = temp_497;
            }
            // 0x000F10: 0xE2400FFFA289000F Bra
            temp_261 = temp_380;
            temp_262 = temp_381;
            temp_263 = temp_382;
            temp_264 = temp_383;
            temp_265 = temp_384;
            temp_266 = temp_385;
            temp_267 = temp_383;
            temp_268 = temp_384;
            temp_269 = temp_382;
            temp_270 = temp_381;
            temp_271 = temp_385;
            temp_272 = temp_380;
        }
        while (!temp_274);
        // 0x000F18: 0xF0F800000007000F Sync
    }
    // 0x000F28: 0x5C62578002872B0D Fmnmx
    temp_498 = abs(temp_257);
    temp_499 = abs(temp_191);
    temp_500 = max(temp_498, temp_499);
    // 0x000F30: 0xE003FF87CFF7FF2C Ipa
    // 0x000F38: 0x5C62578000170E0C Fmnmx
    temp_501 = abs(temp_123);
    temp_502 = abs(temp_124);
    temp_503 = max(temp_501, temp_502);
    // 0x000F48: 0xEF4410000007FF32 Ldl
    temp_504 = uintBitsToFloat(local_memory[0]);
    // 0x000F50: 0x010000000017F014 Mov32i
    // 0x000F58: 0x3868104080070223 Fmul
    temp_505 = temp_119 * 4.0;
    // 0x000F68: 0x4C98079C0207002F Mov
    // 0x000F70: 0x5C60578000D7170D Fmnmx
    temp_506 = abs(temp_195);
    temp_507 = max(temp_506, temp_500);
    // 0x000F78: 0x5080000000470D0D Mufu
    temp_508 = 1.0 / temp_507;
    // 0x000F88: 0x5C60578000C7120C Fmnmx
    temp_509 = abs(temp_125);
    temp_510 = max(temp_509, temp_503);
    // 0x000F90: 0x5080000000470C0C Mufu
    temp_511 = 1.0 / temp_510;
    // 0x000F98: 0x5C68100000D72816 Fmul
    temp_512 = temp_191 * temp_508;
    // 0x000FA8: 0x5C68100000D72B15 Fmul
    temp_513 = temp_257 * temp_508;
    // 0x000FB0: 0x5080000000472C2C Mufu
    // 0x000FB8: 0x5C69100000C71212 Fmul
    temp_514 = 0.0 - temp_511;
    temp_515 = temp_125 * temp_514;
    // 0x000FC8: 0x5C68100000C70E10 Fmul
    temp_516 = temp_123 * temp_511;
    // 0x000FD0: 0x5C68100000C70111 Fmul
    temp_517 = temp_124 * temp_511;
    // 0x000FD8: 0x5C69100000D71717 Fmul
    temp_518 = 0.0 - temp_508;
    temp_519 = temp_195 * temp_518;
    // 0x000FE8: 0xC0BA0163EFF7100C Tex
    temp_520 = textureLod(fp_t_tcb_16, vec3(temp_516, temp_517, temp_515), 0.0).xyz;
    temp_521 = temp_520.x;
    temp_522 = temp_520.y;
    temp_523 = temp_520.z;
    // 0x000FF0: 0x38681040E007022B Fmul
    temp_524 = temp_119 * 7.0;
    // 0x000FF8: 0xE043FF9102C7FF28 Ipa
    temp_525 = in_attr9.x;
    // 0x001008: 0x5C98078001270022 Mov
    // 0x001010: 0xE043FF9142C7FF29 Ipa
    temp_526 = in_attr9.y;
    // 0x001018: 0x3859103F80070202 Fadd
    temp_527 = 0.0 - temp_119;
    temp_528 = temp_527 + 1.0;
    // 0x001028: 0xE043FF9182C7FF2A Ipa
    temp_529 = in_attr9.z;
    // 0x001030: 0xC1BA0143F2B71414 Tex
    temp_530 = textureLod(fp_t_tcb_14, vec4(temp_513, temp_512, temp_519, float(1)), temp_524).xyz;
    temp_531 = temp_530.x;
    temp_532 = temp_530.y;
    temp_533 = temp_530.z;
    // 0x001038: 0xD9A2018232271010 Texs
    temp_534 = textureLod(fp_t_tcb_18, vec3(temp_516, temp_517, temp_515), temp_505).xyz;
    temp_535 = temp_534.x;
    temp_536 = temp_534.y;
    temp_537 = temp_534.z;
    // 0x001048: 0xDEBA0000C2F72828 TexB
    temp_538 = texture(fp_t_cb7_20, vec3(temp_525, temp_526, temp_529)).x;
    // 0x001050: 0x5C68100000270202 Fmul
    temp_539 = temp_528 * temp_528;
    // 0x001058: 0x49A012180A170924 Ffma
    temp_540 = fma(temp_267, fp_c6.data[40].y, temp_258);
    // 0x001068: 0x49A013180A170A26 Ffma
    temp_541 = fma(temp_268, fp_c6.data[40].y, temp_259);
    // 0x001070: 0x3859103F8007032B Fadd
    temp_542 = 0.0 - temp_160;
    temp_543 = temp_542 + 1.0;
    // 0x001078: 0x49A004180A171808 Ffma
    temp_544 = fma(temp_269, fp_c6.data[40].y, temp_226);
    // 0x001088: 0x1E23E468DB97030A Fmul32i
    temp_545 = temp_160 * 0.193900004;
    // 0x001090: 0x5C68100000270209 Fmul
    temp_546 = temp_539 * temp_539;
    // 0x001098: 0x010410676C97F018 Mov32i
    // 0x0010A8: 0x49A003980A171307 Ffma
    temp_547 = fma(temp_270, fp_c6.data[40].y, temp_233);
    // 0x0010B0: 0x0103F0000007F017 Mov32i
    // 0x0010B8: 0x4C68101809072B02 Fmul
    temp_548 = temp_543 * fp_c6.data[36].x;
    // 0x0010C8: 0x0103E2CD9E87F013 Mov32i
    // 0x0010D0: 0x5080400000370202 Mufu
    temp_549 = abs(temp_548);
    temp_550 = log2(temp_549);
    // 0x0010D8: 0x49A005040067090A Ffma
    temp_551 = fma(temp_546, fp_c1.data[1].z, temp_545);
    // 0x0010E8: 0x49A00C0400970312 Ffma
    temp_552 = fma(temp_160, fp_c1.data[2].y, 8.40400028);
    // 0x0010F0: 0x49A013980A170B27 Ffma
    temp_553 = fma(temp_271, fp_c6.data[40].y, temp_260);
    // 0x0010F8: 0x32A00BBF0007010B Ffma
    temp_554 = fma(temp_124, 0.5, 0.5);
    // 0x001108: 0x4C9807980B470022 Mov
    // 0x001110: 0x49A2098400B70913 Ffma
    temp_555 = fma(temp_546, fp_c1.data[2].w, -0.168799996);
    // 0x001118: 0x088BF05D63970A01 Fadd32i
    temp_556 = temp_551 + -0.522800028;
    // 0x001128: 0xE04BFF9042C7FF0A Ipa
    temp_557 = in_attr8.y;
    temp_558 = clamp(temp_557, 0.0, 1.0);
    // 0x001130: 0x51A0090400A70312 Ffma
    temp_559 = fma(temp_160, temp_552, fp_c1.data[2].z);
    // 0x001138: 0x4C98079800A70029 Mov
    // 0x001148: 0x010404000007F02D Mov32i
    // 0x001150: 0xF0F0000034470000 Depbar
    // 0x001158: 0x51A211180B472121 Ffma
    temp_560 = 0.0 - fp_c6.data[45].x;
    temp_561 = fma(temp_25, fp_c6.data[45].x, temp_560);
    // 0x001168: 0x5C68100001370917 Fmul
    temp_562 = temp_546 * temp_555;
    // 0x001170: 0x5C68100000170313 Fmul
    temp_563 = temp_160 * temp_556;
    // 0x001178: 0x51A0090400C70312 Ffma
    temp_564 = fma(temp_160, temp_559, fp_c1.data[3].x);
    // 0x001188: 0x4C68101809170202 Fmul
    temp_565 = temp_550 * fp_c6.data[36].y;
    // 0x001190: 0x0104066978D7F003 Mov32i
    // 0x001198: 0x51A211180B470000 Ffma
    temp_566 = 0.0 - fp_c6.data[45].x;
    temp_567 = fma(temp_26, fp_c6.data[45].x, temp_566);
    // 0x0011A8: 0x51A211180B472020 Ffma
    temp_568 = 0.0 - fp_c6.data[45].x;
    temp_569 = fma(temp_24, fp_c6.data[45].x, temp_568);
    // 0x0011B0: 0x4C98079800970022 Mov
    // 0x0011B8: 0x5C60138001771212 Fmnmx
    temp_570 = min(temp_564, temp_562);
    // 0x0011C8: 0x4C98079809870017 Mov
    // 0x0011D0: 0x5C90008000270018 Rro
    // 0x0011D8: 0x49A2018400770903 Ffma
    temp_571 = fma(temp_546, fp_c1.data[1].w, -3.60299993);
    // 0x0011E8: 0x5084000000271818 Mufu
    temp_572 = exp2(temp_565);
    temp_573 = clamp(temp_572, 0.0, 1.0);
    // 0x0011F0: 0x4C98079800870001 Mov
    // 0x0011F8: 0x4C59101800572202 Fadd
    temp_574 = 0.0 - fp_c6.data[2].y;
    temp_575 = temp_574 + fp_c6.data[1].y;
    // 0x001208: 0x4C58101408171717 Fadd
    temp_576 = fp_c6.data[38].x + fp_c5.data[32].y;
    // 0x001210: 0x4C59101800672922 Fadd
    temp_577 = 0.0 - fp_c6.data[2].z;
    temp_578 = temp_577 + fp_c6.data[1].z;
    // 0x001218: 0x4C9807940827002B Mov
    // 0x001228: 0x51A001840087092A Ffma
    temp_579 = fma(temp_546, temp_571, fp_c1.data[2].x);
    // 0x001230: 0x4C59101800470101 Fadd
    temp_580 = 0.0 - fp_c6.data[2].x;
    temp_581 = temp_580 + fp_c6.data[1].x;
    // 0x001238: 0x5C5C30000FF71212 Fadd
    temp_582 = temp_570 + -0.0;
    temp_583 = clamp(temp_582, 0.0, 1.0);
    // 0x001248: 0x51A0011800970B02 Ffma
    temp_584 = fma(temp_554, temp_575, fp_c6.data[2].y);
    // 0x001250: 0x51A0111800A70B03 Ffma
    temp_585 = fma(temp_554, temp_578, fp_c6.data[2].z);
    // 0x001258: 0x4C68101406972B29 Fmul
    temp_586 = fp_c5.data[32].z * fp_c5.data[26].y;
    // 0x001268: 0x59A0098002A70913 Ffma
    temp_587 = fma(temp_546, temp_579, temp_563);
    // 0x001270: 0x5C68100001871717 Fmul
    temp_588 = temp_576 * temp_573;
    // 0x001278: 0x33A016C000070A09 Ffma
    temp_589 = fma(temp_558, -2.0, 3.0);
    // 0x001288: 0x5C68100000A70A22 Fmul
    temp_590 = temp_558 * temp_558;
    // 0x001290: 0x386C104248070518 Fmul
    temp_591 = temp_198 * 50.0;
    temp_592 = clamp(temp_591, 0.0, 1.0);
    // 0x001298: 0x51A0009800870B01 Ffma
    temp_593 = fma(temp_554, temp_581, fp_c6.data[2].x);
    // 0x0012A8: 0x4C5C100400D71313 Fadd
    temp_594 = temp_587 + fp_c1.data[3].y;
    temp_595 = clamp(temp_594, 0.0, 1.0);
    // 0x0012B0: 0x4C68101808D7170B Fmul
    temp_596 = temp_588 * fp_c6.data[35].y;
    // 0x0012B8: 0x4C68101808E7170A Fmul
    temp_597 = temp_588 * fp_c6.data[35].z;
    // 0x0012C8: 0x4C68101808C71717 Fmul
    temp_598 = temp_588 * fp_c6.data[35].x;
    // 0x0012D0: 0x5C68100002270909 Fmul
    temp_599 = temp_589 * temp_590;
    // 0x0012D8: 0x5C6810000127182B Fmul
    temp_600 = temp_592 * temp_583;
    // 0x0012E8: 0x5C59100001371222 Fadd
    temp_601 = 0.0 - temp_583;
    temp_602 = temp_601 + temp_595;
    // 0x0012F0: 0x59A0130002970B26 Ffma
    temp_603 = fma(temp_596, temp_586, temp_541);
    // 0x0012F8: 0x49A1059408270B18 Ffma
    temp_604 = 0.0 - fp_c5.data[32].z;
    temp_605 = fma(temp_596, temp_604, temp_596);
    // 0x001308: 0x49A10B9408271712 Ffma
    temp_606 = 0.0 - fp_c5.data[32].z;
    temp_607 = fma(temp_598, temp_606, temp_598);
    // 0x001310: 0x59A0138002970A27 Ffma
    temp_608 = fma(temp_597, temp_586, temp_553);
    // 0x001318: 0x49A1051408270A0A Ffma
    temp_609 = 0.0 - fp_c5.data[32].z;
    temp_610 = fma(temp_597, temp_609, temp_597);
    // 0x001328: 0x59A015800227050B Ffma
    temp_611 = fma(temp_198, temp_602, temp_600);
    // 0x001330: 0xE043FF9002C7FF05 Ipa
    temp_612 = in_attr8.x;
    // 0x001338: 0x59A0158002270404 Ffma
    temp_613 = fma(temp_168, temp_602, temp_600);
    // 0x001348: 0xE043FF8C82C7FF2C Ipa
    temp_614 = in_attr4.z;
    // 0x001350: 0x5C58100000A70808 Fadd
    temp_615 = temp_544 + temp_610;
    // 0x001358: 0x59A0120002971724 Ffma
    temp_616 = fma(temp_598, temp_586, temp_540);
    // 0x001368: 0x59A0158002270606 Ffma
    temp_617 = fma(temp_199, temp_602, temp_600);
    // 0x001370: 0x5C58100001870707 Fadd
    temp_618 = temp_547 + temp_605;
    // 0x001378: 0x4C68101406970B0B Fmul
    temp_619 = temp_611 * fp_c5.data[26].y;
    // 0x001388: 0x4C68101803770909 Fmul
    temp_620 = temp_599 * fp_c6.data[13].w;
    // 0x001390: 0x4C68101406970606 Fmul
    temp_621 = temp_617 * fp_c5.data[26].y;
    // 0x001398: 0xF0F0000034370000 Depbar
    // 0x0013A8: 0x49A019180A170F0F Ffma
    temp_622 = fma(temp_272, fp_c6.data[40].y, temp_504);
    // 0x0013B0: 0x5C58100001270F0F Fadd
    temp_623 = temp_622 + temp_607;
    // 0x0013B8: 0xF0F0000034270000 Depbar
    // 0x0013C8: 0x49A0060400570101 Ffma
    temp_624 = fma(temp_593, fp_c1.data[1].y, temp_521);
    // 0x0013D0: 0x49A0070400570303 Ffma
    temp_625 = fma(temp_585, fp_c1.data[1].y, temp_523);
    // 0x0013D8: 0x49A0068400570202 Ffma
    temp_626 = fma(temp_584, fp_c1.data[1].y, temp_522);
    // 0x0013E8: 0x5C58100000170F0F Fadd
    temp_627 = temp_623 + temp_624;
    // 0x0013F0: 0x4C68101406970401 Fmul
    temp_628 = temp_613 * fp_c5.data[26].y;
    // 0x0013F8: 0x5C58100000370803 Fadd
    temp_629 = temp_615 + temp_625;
    // 0x001408: 0x5C58100000270702 Fadd
    temp_630 = temp_618 + temp_626;
    // 0x001410: 0x4C98079802870007 Mov
    // 0x001418: 0xF0F0000034170000 Depbar
    // 0x001428: 0x49A008180857140A Ffma
    temp_631 = fma(temp_531, fp_c6.data[33].y, temp_535);
    // 0x001430: 0x59A1078000F7250F Ffma
    temp_632 = 0.0 - temp_627;
    temp_633 = fma(temp_21, temp_632, temp_627);
    // 0x001438: 0x49A0089808571511 Ffma
    temp_634 = fma(temp_532, fp_c6.data[33].y, temp_536);
    // 0x001448: 0x49A0119808571608 Ffma
    temp_635 = fma(temp_533, fp_c6.data[33].y, temp_537);
    // 0x001450: 0x59A1010000272504 Ffma
    temp_636 = 0.0 - temp_630;
    temp_637 = fma(temp_21, temp_636, temp_630);
    // 0x001458: 0x59A1018000372503 Ffma
    temp_638 = 0.0 - temp_629;
    temp_639 = fma(temp_21, temp_638, temp_629);
    // 0x001468: 0x59A0120000A70101 Ffma
    temp_640 = fma(temp_628, temp_631, temp_616);
    // 0x001470: 0x51A0039802872020 Ffma
    temp_641 = fma(temp_569, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001478: 0x59A0130001170B26 Ffma
    temp_642 = fma(temp_619, temp_634, temp_603);
    // 0x001488: 0x59A0138000870606 Ffma
    temp_643 = fma(temp_621, temp_635, temp_608);
    // 0x001490: 0x4C9807980297000A Mov
    // 0x001498: 0x4C98079802A70002 Mov
    // 0x0014A8: 0x59A0008000F71E0F Ffma
    temp_644 = fma(temp_14, temp_633, temp_640);
    // 0x0014B0: 0x5C98078001D70007 Mov
    // 0x0014B8: 0x59A0130000471F04 Ffma
    temp_645 = fma(temp_15, temp_637, temp_642);
    // 0x0014C8: 0x59A0030000371C06 Ffma
    temp_646 = fma(temp_16, temp_639, temp_643);
    // 0x0014D0: 0x51A0051802972121 Ffma
    temp_647 = fma(temp_561, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0014D8: 0x51A0011802A70000 Ffma
    temp_648 = fma(temp_567, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0014E8: 0x5C68100000F71919 Fmul
    temp_649 = temp_251 * temp_644;
    // 0x0014F0: 0x5C68100000471A1A Fmul
    temp_650 = temp_253 * temp_645;
    // 0x0014F8: 0x5C68100000671B1B Fmul
    temp_651 = temp_255 * temp_646;
    // 0x001508: 0x5C58300002071901 Fadd
    temp_652 = 0.0 - temp_641;
    temp_653 = temp_649 + temp_652;
    // 0x001510: 0x5C58300002171A02 Fadd
    temp_654 = 0.0 - temp_647;
    temp_655 = temp_650 + temp_654;
    // 0x001518: 0x49A502980BC72805 Ffma
    temp_656 = 0.0 - fp_c6.data[47].x;
    temp_657 = fma(temp_538, temp_656, temp_612);
    temp_658 = clamp(temp_657, 0.0, 1.0);
    // 0x001528: 0x5080000000370505 Mufu
    temp_659 = log2(temp_658);
    // 0x001530: 0x49A010180BF70103 Ffma
    temp_660 = fma(temp_653, fp_c6.data[47].w, temp_641);
    // 0x001538: 0x5C58300000071B01 Fadd
    temp_661 = 0.0 - temp_648;
    temp_662 = temp_651 + temp_661;
    // 0x001548: 0x49A010980BF70202 Ffma
    temp_663 = fma(temp_655, fp_c6.data[47].w, temp_647);
    // 0x001550: 0x5C60178000372003 Fmnmx
    temp_664 = max(temp_641, temp_660);
    // 0x001558: 0x49A000180BF70101 Ffma
    temp_665 = fma(temp_662, fp_c6.data[47].w, temp_648);
    // 0x001568: 0x5C60178000272102 Fmnmx
    temp_666 = max(temp_647, temp_663);
    // 0x001570: 0x4C68101803170504 Fmul
    temp_667 = temp_659 * fp_c6.data[12].y;
    // 0x001578: 0x49A2049803570905 Ffma
    temp_668 = 0.0 - temp_620;
    temp_669 = fma(temp_620, fp_c6.data[13].y, temp_668);
    // 0x001588: 0x5C60178000170001 Fmnmx
    temp_670 = max(temp_648, temp_665);
    // 0x001590: 0x49A2049803670900 Ffma
    temp_671 = 0.0 - temp_620;
    temp_672 = fma(temp_620, fp_c6.data[13].z, temp_671);
    // 0x001598: 0x5C90008000470006 Rro
    // 0x0015A8: 0x49A2049803470904 Ffma
    temp_673 = 0.0 - temp_620;
    temp_674 = fma(temp_620, fp_c6.data[13].x, temp_673);
    // 0x0015B0: 0x5080000000270606 Mufu
    temp_675 = exp2(temp_667);
    // 0x0015B8: 0x59A0010000570205 Ffma
    temp_676 = fma(temp_666, temp_669, temp_666);
    // 0x0015C8: 0x59A0008000070102 Ffma
    temp_677 = fma(temp_670, temp_672, temp_670);
    // 0x0015D0: 0x59A0018000470304 Ffma
    temp_678 = fma(temp_664, temp_674, temp_664);
    // 0x0015D8: 0x5C59100000571A01 Fadd
    temp_679 = 0.0 - temp_650;
    temp_680 = temp_679 + temp_676;
    // 0x0015E8: 0x5C59100000271B02 Fadd
    temp_681 = 0.0 - temp_651;
    temp_682 = temp_681 + temp_677;
    // 0x0015F0: 0x0103F2000007F005 Mov32i
    // 0x0015F8: 0x5C59100000471900 Fadd
    temp_683 = 0.0 - temp_649;
    temp_684 = temp_683 + temp_678;
    // 0x001608: 0x4C68101802B70603 Fmul
    temp_685 = temp_675 * fp_c6.data[10].w;
    // 0x001610: 0x4C58100C03872C04 Fadd
    temp_686 = temp_614 + fp_c3.data[14].x;
    // 0x001618: 0x5C9807800FF70006 Mov
    // 0x001628: 0x59A00C8000370000 Ffma
    temp_687 = fma(temp_684, temp_685, temp_649);
    // 0x001630: 0x59A00D0000370101 Ffma
    temp_688 = fma(temp_680, temp_685, temp_650);
    // 0x001638: 0x59A00D8000370202 Ffma
    temp_689 = fma(temp_682, temp_685, temp_651);
    // 0x001648: 0x5C98078001D70003 Mov
    // 0x001650: 0x49A37F8C03C70404 Ffma
    temp_690 = 0.0 - fp_c3.data[15].x;
    temp_691 = fma(temp_686, temp_690, -0.0);
    // 0x001658: 0xE30000000007000F Exit
    out_attr0.x = temp_687;
    out_attr0.y = temp_688;
    out_attr0.z = temp_689;
    out_attr0.w = temp_17;
    out_attr1.x = temp_691;
    out_attr1.y = 0.625;
    out_attr1.z = 0.0;
    out_attr1.w = temp_17;
    return;
}
