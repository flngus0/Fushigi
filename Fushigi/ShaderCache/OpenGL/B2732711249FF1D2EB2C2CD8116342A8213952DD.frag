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

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

uint local_memory[16];
layout (binding = 0) uniform sampler2DArray fp_t_tcb_26;
layout (binding = 1) uniform sampler2DArray fp_t_tcb_2A;
layout (binding = 2) uniform sampler2DArray fp_t_tcb_24;
layout (binding = 3) uniform sampler2DArray fp_t_tcb_36;
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
    uint temp_13;
    uint temp_14;
    precise vec2 temp_15;
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
    precise vec3 temp_27;
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
    bool temp_77;
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
    int temp_186;
    precise float temp_187;
    precise float temp_188;
    int temp_189;
    uint temp_190;
    uint temp_191;
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
    bool temp_250;
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
    int temp_351;
    uint temp_352;
    uint temp_353;
    int temp_354;
    precise float temp_355;
    int temp_356;
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
    uint temp_369;
    int temp_370;
    precise float temp_371;
    int temp_372;
    uint temp_373;
    int temp_374;
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
    precise float temp_390;
    precise float temp_391;
    precise float temp_392;
    precise float temp_393;
    uint temp_394;
    int temp_395;
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
    int temp_409;
    uint temp_410;
    uint temp_411;
    int temp_412;
    precise float temp_413;
    precise float temp_414;
    precise float temp_415;
    precise float temp_416;
    precise float temp_417;
    precise float temp_418;
    precise float temp_419;
    int temp_420;
    uint temp_421;
    uint temp_422;
    int temp_423;
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
    precise float temp_439;
    precise float temp_440;
    precise float temp_441;
    uint temp_442;
    uint temp_443;
    int temp_444;
    precise float temp_445;
    int temp_446;
    uint temp_447;
    int temp_448;
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
    precise vec3 temp_535;
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
    // 0x000008: 0xE003FF87CFF7FF0C Ipa
    // 0x000010: 0xE003FF870FF7FF02 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000018: 0xE003FF874FF7FF08 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000028: 0x5080000000470C0C Mufu
    // 0x000030: 0x4C68100C04A70202 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000038: 0x4C68100C04B70808 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000048: 0xE043FF91C0C7FF0D Ipa
    temp_8 = in_attr9.w;
    // 0x000050: 0xE043FF8E40C7FF0E Ipa
    temp_9 = in_attr6.y;
    // 0x000058: 0xE043FF8E00C7FF11 Ipa
    temp_10 = in_attr6.x;
    // 0x000068: 0x5CB0100000D70910 F2i
    temp_11 = roundEven(temp_8);
    temp_12 = max(temp_11, 0.0);
    temp_13 = uint(temp_12);
    temp_14 = clamp(temp_13, 0u, 0xFFFFu);
    // 0x000070: 0xD8F0026FF0E71006 Texs
    temp_15 = texture(fp_t_tcb_26, vec3(temp_10, temp_9, float(int(temp_14)))).xy;
    temp_16 = temp_15.x;
    temp_17 = temp_15.y;
    // 0x000078: 0xD8EC02AFF0E71003 Texs
    temp_18 = texture(fp_t_tcb_2A, vec3(temp_10, temp_9, float(int(temp_14)))).w;
    // 0x000088: 0xD8E2024010E71004 Texs
    temp_19 = texture(fp_t_tcb_24, vec3(temp_10, temp_9, float(int(temp_14)))).xyz;
    temp_20 = temp_19.x;
    temp_21 = temp_19.y;
    temp_22 = temp_19.z;
    // 0x000090: 0xD8E40360B0E71022 Texs
    temp_23 = texture(fp_t_tcb_36, vec3(temp_10, temp_9, float(int(temp_14)))).xyw;
    temp_24 = temp_23.x;
    temp_25 = temp_23.y;
    temp_26 = temp_23.z;
    // 0x000098: 0xD82202000087021E Texs
    temp_27 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_28 = temp_27.x;
    temp_29 = temp_27.y;
    temp_30 = temp_27.z;
    // 0x0000A8: 0xE043FF8A00C7FF09 Ipa
    temp_31 = in_attr2.x;
    // 0x0000B0: 0xE043FF8A40C7FF0A Ipa
    temp_32 = in_attr2.y;
    // 0x0000B8: 0xE043FF8A80C7FF0D Ipa
    temp_33 = in_attr2.z;
    // 0x0000C8: 0xE043FF8900C7FF12 Ipa
    temp_34 = in_attr1.x;
    // 0x0000D0: 0xE043FF8800C7FF17 Ipa
    temp_35 = in_attr0.x;
    // 0x0000D8: 0xE043FF8940C7FF13 Ipa
    temp_36 = in_attr1.y;
    // 0x0000E8: 0xE043FF8840C7FF18 Ipa
    temp_37 = in_attr0.y;
    // 0x0000F0: 0xE043FF8980C7FF14 Ipa
    temp_38 = in_attr1.z;
    // 0x0000F8: 0xE043FF8B00C7FF21 Ipa
    temp_39 = in_attr3.x;
    // 0x000108: 0xE043FF8880C7FF19 Ipa
    temp_40 = in_attr0.z;
    // 0x000110: 0xE043FF8B40C7FF20 Ipa
    temp_41 = in_attr3.y;
    // 0x000118: 0xE043FF8B80C7FF16 Ipa
    temp_42 = in_attr3.z;
    // 0x000128: 0x5C6810000097090F Fmul
    temp_43 = temp_31 * temp_31;
    // 0x000130: 0x59A0078000A70A0F Ffma
    temp_44 = fma(temp_32, temp_32, temp_43);
    // 0x000138: 0x5C6810000127120E Fmul
    temp_45 = temp_34 * temp_34;
    // 0x000148: 0x5C68100001771711 Fmul
    temp_46 = temp_35 * temp_35;
    // 0x000150: 0x5C68100002172115 Fmul
    temp_47 = temp_39 * temp_39;
    // 0x000158: 0x59A0078000D70D0F Ffma
    temp_48 = fma(temp_33, temp_33, temp_44);
    // 0x000168: 0x59A007000137130E Ffma
    temp_49 = fma(temp_36, temp_36, temp_45);
    // 0x000170: 0x5080000000570F0F Mufu
    temp_50 = inversesqrt(temp_48);
    // 0x000178: 0x59A008800187181A Ffma
    temp_51 = fma(temp_37, temp_37, temp_46);
    // 0x000188: 0x59A00A800207201B Ffma
    temp_52 = fma(temp_41, temp_41, temp_47);
    // 0x000190: 0x59A0070001471410 Ffma
    temp_53 = fma(temp_38, temp_38, temp_49);
    // 0x000198: 0x59A00D000197191A Ffma
    temp_54 = fma(temp_40, temp_40, temp_51);
    // 0x0001A8: 0x5080000000571011 Mufu
    temp_55 = inversesqrt(temp_53);
    // 0x0001B0: 0x59A00D800167161B Ffma
    temp_56 = fma(temp_42, temp_42, temp_52);
    // 0x0001B8: 0x5080000000571A1A Mufu
    temp_57 = inversesqrt(temp_54);
    // 0x0001C8: 0x5C68100000F7090E Fmul
    temp_58 = temp_31 * temp_50;
    // 0x0001D0: 0x5080000000571B1B Mufu
    temp_59 = inversesqrt(temp_56);
    // 0x0001D8: 0x5C68100000F70A0A Fmul
    temp_60 = temp_32 * temp_50;
    // 0x0001E8: 0x5C68100000F70D0D Fmul
    temp_61 = temp_33 * temp_50;
    // 0x0001F0: 0x5C68100001171215 Fmul
    temp_62 = temp_34 * temp_55;
    // 0x0001F8: 0x5C68100001171313 Fmul
    temp_63 = temp_36 * temp_55;
    // 0x000208: 0x5C68100001171414 Fmul
    temp_64 = temp_38 * temp_55;
    // 0x000210: 0x5C68100001A71811 Fmul
    temp_65 = temp_37 * temp_57;
    // 0x000218: 0x5C68100001A71918 Fmul
    temp_66 = temp_40 * temp_57;
    // 0x000228: 0x5C68100001A71719 Fmul
    temp_67 = temp_35 * temp_57;
    // 0x000230: 0x5C69100001B72121 Fmul
    temp_68 = 0.0 - temp_59;
    temp_69 = temp_39 * temp_68;
    // 0x000238: 0x5C69100001B72020 Fmul
    temp_70 = 0.0 - temp_59;
    temp_71 = temp_41 * temp_70;
    // 0x000248: 0x5C69100001B71616 Fmul
    temp_72 = 0.0 - temp_59;
    temp_73 = temp_42 * temp_72;
    // 0x000250: 0xF0F0000034270000 Depbar
    // 0x000258: 0x5C68100000770709 Fmul
    temp_74 = temp_17 * temp_17;
    // 0x000268: 0x5C68100000A70710 Fmul
    temp_75 = temp_17 * temp_60;
    // 0x000270: 0x5C68100000E7070F Fmul
    temp_76 = temp_17 * temp_58;
    // 0x000278: 0x4BB1839406070307 Fsetp
    temp_77 = temp_18 < fp_c5.data[24].x;
    // 0x000288: 0x5C68100000D7070D Fmul
    temp_78 = temp_17 * temp_61;
    // 0x000290: 0x1E23E990AFE70404 Fmul32i
    temp_79 = temp_20 * 0.298911989;
    // 0x000298: 0x59A0048000670609 Ffma
    temp_80 = fma(temp_16, temp_16, temp_74);
    // 0x0002A8: 0x59A0080001370610 Ffma
    temp_81 = fma(temp_16, temp_63, temp_75);
    // 0x0002B0: 0x59A007800157060F Ffma
    temp_82 = fma(temp_16, temp_62, temp_76);
    // 0x0002B8: 0x59A006800147060D Ffma
    temp_83 = fma(temp_16, temp_64, temp_78);
    // 0x0002C8: 0x49A0020400070504 Ffma
    temp_84 = fma(temp_21, fp_c1.data[0].x, temp_79);
    // 0x0002D0: 0x385D103F80070909 Fadd
    temp_85 = 0.0 - temp_80;
    temp_86 = temp_85 + 1.0;
    temp_87 = clamp(temp_86, 0.0, 1.0);
    // 0x0002D8: 0x508000000087090A Mufu
    temp_88 = sqrt(temp_87);
    // 0x0002E8: 0x59A0078001970A0F Ffma
    temp_89 = fma(temp_88, temp_67, temp_82);
    // 0x0002F0: 0x59A0080001170A10 Ffma
    temp_90 = fma(temp_88, temp_65, temp_81);
    // 0x0002F8: 0xE24000000708000F Bra
    if (temp_77)
    {
        // 0x000308: 0x5C9807800FF70000 Mov
        // 0x000310: 0xE33000000007000F Kil
        discard;
    }
    // 0x000370: 0x5C68100000F70F05 Fmul
    temp_91 = temp_89 * temp_89;
    // 0x000378: 0xE2900000C2000000 Ssy
    // 0x000388: 0x4C58301805C72111 Fadd
    temp_92 = 0.0 - fp_c6.data[23].x;
    temp_93 = temp_69 + temp_92;
    // 0x000390: 0x49A0020400170107 Ffma
    temp_94 = fma(temp_22, fp_c1.data[0].y, temp_84);
    // 0x000398: 0x59A0068001870A0D Ffma
    temp_95 = fma(temp_88, temp_66, temp_83);
    // 0x0003A8: 0x4C58301805D7200A Fadd
    temp_96 = 0.0 - fp_c6.data[23].y;
    temp_97 = temp_71 + temp_96;
    // 0x0003B0: 0x4C58301805E71614 Fadd
    temp_98 = 0.0 - fp_c6.data[23].z;
    temp_99 = temp_73 + temp_98;
    // 0x0003B8: 0x59A0028001071004 Ffma
    temp_100 = fma(temp_90, temp_90, temp_91);
    // 0x0003C8: 0x5C68100001171105 Fmul
    temp_101 = temp_93 * temp_93;
    // 0x0003D0: 0x0103F8000007F019 Mov32i
    // 0x0003D8: 0x4C98079403070006 Mov
    // 0x0003E8: 0x4C98079403270013 Mov
    // 0x0003F0: 0x4C9807940317000E Mov
    // 0x0003F8: 0x59A0020000D70D04 Ffma
    temp_102 = fma(temp_95, temp_95, temp_100);
    // 0x000408: 0x59A0028000A70A05 Ffma
    temp_103 = fma(temp_97, temp_97, temp_101);
    // 0x000410: 0x5080000000570412 Mufu
    temp_104 = inversesqrt(temp_102);
    // 0x000418: 0x32A20CC000070701 Ffma
    temp_105 = fma(temp_94, 2.0, -1.0);
    // 0x000428: 0xF0F0000034170000 Depbar
    // 0x000430: 0x4C6810180A072222 Fmul
    temp_106 = temp_24 * fp_c6.data[40].x;
    // 0x000438: 0x0103F0000007F02F Mov32i
    // 0x000448: 0x5C9807800FF7001B Mov
    // 0x000450: 0x5C9807800FF70027 Mov
    // 0x000458: 0x59A0028001471415 Ffma
    temp_107 = fma(temp_99, temp_99, temp_103);
    // 0x000468: 0x5C5970000FF70101 Fadd
    temp_108 = abs(temp_105);
    temp_109 = 0.0 - temp_108;
    temp_110 = temp_109 + -0.0;
    // 0x000470: 0x5080000000571517 Mufu
    temp_111 = inversesqrt(temp_107);
    // 0x000478: 0x386013BF80072222 Fmnmx
    temp_112 = min(temp_106, 1.0);
    // 0x000488: 0x51A0031403070105 Ffma
    temp_113 = fma(temp_110, fp_c5.data[12].x, fp_c5.data[12].x);
    // 0x000490: 0x51A0099403270109 Ffma
    temp_114 = fma(temp_110, fp_c5.data[12].z, fp_c5.data[12].z);
    // 0x000498: 0x51A0071403170106 Ffma
    temp_115 = fma(temp_110, fp_c5.data[12].y, fp_c5.data[12].y);
    // 0x0004A8: 0x33A40CC000070713 Ffma
    temp_116 = fma(temp_94, -2.0, 1.0);
    temp_117 = clamp(temp_116, 0.0, 1.0);
    // 0x0004B0: 0x5C68100001270F0E Fmul
    temp_118 = temp_89 * temp_104;
    // 0x0004B8: 0x3868104110070815 Fmul
    temp_119 = temp_7 * 9.0;
    // 0x0004C8: 0x5C68100001271001 Fmul
    temp_120 = temp_90 * temp_104;
    // 0x0004D0: 0x5CA8148001570A15 F2f
    temp_121 = floor(temp_119);
    // 0x0004D8: 0x5C68100001771104 Fmul
    temp_122 = temp_93 * temp_111;
    // 0x0004E8: 0x5C68100001770A0F Fmul
    temp_123 = temp_97 * temp_111;
    // 0x0004F0: 0x49A0029403471305 Ffma
    temp_124 = fma(temp_117, fp_c5.data[13].x, temp_113);
    // 0x0004F8: 0x49A0031403571306 Ffma
    temp_125 = fma(temp_117, fp_c5.data[13].y, temp_115);
    // 0x000508: 0x49A0049403671309 Ffma
    temp_126 = fma(temp_117, fp_c5.data[13].z, temp_114);
    // 0x000510: 0x3868104180070213 Fmul
    temp_127 = temp_6 * 16.0;
    // 0x000518: 0x5C6810000047210A Fmul
    temp_128 = temp_69 * temp_122;
    // 0x000528: 0x5CA8148001370A13 F2f
    temp_129 = floor(temp_127);
    // 0x000530: 0x5C68100001270D12 Fmul
    temp_130 = temp_95 * temp_104;
    // 0x000538: 0x5C68100000470E10 Fmul
    temp_131 = temp_118 * temp_122;
    // 0x000548: 0x5C68100001771414 Fmul
    temp_132 = temp_99 * temp_111;
    // 0x000550: 0x4C60178400372202 Fmnmx
    temp_133 = max(temp_112, fp_c1.data[0].w);
    // 0x000558: 0x32A60CC000070707 Ffma
    temp_134 = fma(temp_94, 2.0, -1.0);
    temp_135 = clamp(temp_134, 0.0, 1.0);
    // 0x000568: 0x59A0050000F7200D Ffma
    temp_136 = fma(temp_71, temp_123, temp_128);
    // 0x000570: 0x5C68100002170E0A Fmul
    temp_137 = temp_118 * temp_69;
    // 0x000578: 0x59A0080000F70119 Ffma
    temp_138 = fma(temp_120, temp_123, temp_131);
    // 0x000588: 0x01040DF760C7F008 Mov32i
    // 0x000590: 0x4C69101805C70410 Fmul
    temp_139 = 0.0 - fp_c6.data[23].x;
    temp_140 = temp_122 * temp_139;
    // 0x000598: 0x51A4010400370231 Ffma
    temp_141 = fma(temp_133, temp_133, fp_c1.data[0].w);
    temp_142 = clamp(temp_141, 0.0, 1.0);
    // 0x0005A8: 0x59A4068001471611 Ffma
    temp_143 = fma(temp_73, temp_132, temp_136);
    temp_144 = clamp(temp_143, 0.0, 1.0);
    // 0x0005B0: 0x32A017BF0007022F Ffma
    temp_145 = fma(temp_133, 0.5, 0.5);
    // 0x0005B8: 0x4C69101805C70E17 Fmul
    temp_146 = 0.0 - fp_c6.data[23].x;
    temp_147 = temp_118 * temp_146;
    // 0x0005C8: 0x59A0050002070104 Ffma
    temp_148 = fma(temp_120, temp_71, temp_137);
    // 0x0005D0: 0x32A009C180071515 Ffma
    temp_149 = fma(temp_121, 16.0, temp_129);
    // 0x0005D8: 0x5C68100003173130 Fmul
    temp_150 = temp_142 * temp_142;
    // 0x0005E8: 0x5CB0118001570A2E F2i
    temp_151 = trunc(temp_149);
    temp_152 = max(temp_151, 0.0);
    temp_153 = uint(temp_152);
    // 0x0005F0: 0x49A204040027110A Ffma
    temp_154 = fma(temp_144, fp_c1.data[0].z, -6.98316002);
    // 0x0005F8: 0x59A40C8001471219 Ffma
    temp_155 = fma(temp_130, temp_132, temp_138);
    temp_156 = clamp(temp_155, 0.0, 1.0);
    // 0x000608: 0x5C68120002F72F2F Fmul
    temp_157 = temp_145 * 0.5;
    temp_158 = temp_157 * temp_145;
    // 0x000610: 0x49A10B9805D7010D Ffma
    temp_159 = 0.0 - fp_c6.data[23].y;
    temp_160 = fma(temp_120, temp_159, temp_147);
    // 0x000618: 0x59A4020001671204 Ffma
    temp_161 = fma(temp_130, temp_73, temp_148);
    temp_162 = clamp(temp_161, 0.0, 1.0);
    // 0x000628: 0x49A1081805D70F0F Ffma
    temp_163 = 0.0 - fp_c6.data[23].y;
    temp_164 = fma(temp_123, temp_163, temp_140);
    // 0x000630: 0x5C68100000A7110A Fmul
    temp_165 = temp_144 * temp_154;
    // 0x000638: 0x59A20C8003071910 Ffma
    temp_166 = 0.0 - temp_156;
    temp_167 = fma(temp_156, temp_150, temp_166);
    // 0x000648: 0x49A0029402C70705 Ffma
    temp_168 = fma(temp_135, fp_c5.data[11].x, temp_124);
    // 0x000650: 0x49A5069805E7120D Ffma
    temp_169 = 0.0 - fp_c6.data[23].z;
    temp_170 = fma(temp_130, temp_169, temp_160);
    temp_171 = clamp(temp_170, 0.0, 1.0);
    // 0x000658: 0x59A1020002F70411 Ffma
    temp_172 = 0.0 - temp_158;
    temp_173 = fma(temp_162, temp_172, temp_162);
    // 0x000668: 0x49A5079805E71413 Ffma
    temp_174 = 0.0 - fp_c6.data[23].z;
    temp_175 = fma(temp_132, temp_174, temp_164);
    temp_176 = clamp(temp_175, 0.0, 1.0);
    // 0x000670: 0x49A0031402D70706 Ffma
    temp_177 = fma(temp_135, fp_c5.data[11].y, temp_125);
    // 0x000678: 0x51A0080400471910 Ffma
    temp_178 = fma(temp_156, temp_167, fp_c1.data[1].x);
    // 0x000688: 0x49A0049402E70707 Ffma
    temp_179 = fma(temp_135, fp_c5.data[11].z, temp_126);
    // 0x000690: 0x5080000000471017 Mufu
    temp_180 = 1.0 / temp_178;
    // 0x000698: 0x59A1068002F70D14 Ffma
    temp_181 = 0.0 - temp_158;
    temp_182 = fma(temp_171, temp_181, temp_171);
    // 0x0006A8: 0x5C58100001172F11 Fadd
    temp_183 = temp_158 + temp_173;
    // 0x0006B0: 0x49A2040400271308 Ffma
    temp_184 = fma(temp_176, fp_c1.data[0].z, -6.98316002);
    // 0x0006B8: 0x5080000000471111 Mufu
    temp_185 = 1.0 / temp_183;
    // 0x0006C8: 0x3848000000872E2C Shl
    temp_186 = int(temp_153) << 8;
    // 0x0006D0: 0x4C58301407870609 Fadd
    temp_187 = 0.0 - fp_c5.data[30].x;
    temp_188 = temp_177 + temp_187;
    // 0x0006D8: 0x5C90008000A7000F Rro
    // 0x0006E8: 0xEF94008200472C2C Ldc
    temp_189 = temp_186 + 0x2004;
    temp_190 = uint(temp_189) >> 2;
    temp_191 = temp_190 >> 2;
    temp_192 = int(temp_190) & 3;
    temp_193 = fp_c8.data[int(temp_191)][temp_192];
    // 0x0006F0: 0x4C5830140787050A Fadd
    temp_194 = 0.0 - fp_c5.data[30].x;
    temp_195 = temp_168 + temp_194;
    // 0x0006F8: 0x5080000000270F0F Mufu
    temp_196 = exp2(temp_165);
    // 0x000708: 0x5C58100001472F14 Fadd
    temp_197 = temp_158 + temp_182;
    // 0x000710: 0x5C68100000871313 Fmul
    temp_198 = temp_176 * temp_184;
    // 0x000718: 0x5080000000471418 Mufu
    temp_199 = 1.0 / temp_197;
    // 0x000728: 0x4C68101801470D10 Fmul
    temp_200 = temp_171 * fp_c6.data[5].x;
    // 0x000730: 0x51A0049407872309 Ffma
    temp_201 = fma(temp_25, temp_188, fp_c5.data[30].x);
    // 0x000738: 0x51A0051407872308 Ffma
    temp_202 = fma(temp_25, temp_195, fp_c5.data[30].x);
    // 0x000748: 0x5C6810000177310A Fmul
    temp_203 = temp_142 * temp_180;
    // 0x000750: 0x3868103F0007112D Fmul
    temp_204 = temp_185 * 0.5;
    // 0x000758: 0x5C90008001370013 Rro
    // 0x000768: 0x385D103F80070B17 Fadd
    temp_205 = 0.0 - temp_26;
    temp_206 = temp_205 + 1.0;
    temp_207 = clamp(temp_206, 0.0, 1.0);
    // 0x000770: 0x5080000000271313 Mufu
    temp_208 = exp2(temp_198);
    // 0x000778: 0x1E23EA2F98371014 Fmul32i
    temp_209 = temp_200 * 0.318309873;
    // 0x000788: 0x59A1078000F70811 Ffma
    temp_210 = 0.0 - temp_196;
    temp_211 = fma(temp_202, temp_210, temp_196);
    // 0x000790: 0x5C68100000A70A10 Fmul
    temp_212 = temp_203 * temp_203;
    // 0x000798: 0x4C5830140787070A Fadd
    temp_213 = 0.0 - fp_c5.data[30].x;
    temp_214 = temp_179 + temp_213;
    // 0x0007A8: 0x5C68100001872D15 Fmul
    temp_215 = temp_204 * temp_199;
    // 0x0007B0: 0x5C68100000470E2B Fmul
    temp_216 = temp_118 * temp_162;
    // 0x0007B8: 0x5C9807800FF70018 Mov
    // 0x0007C8: 0x5C58100001170811 Fadd
    temp_217 = temp_202 + temp_211;
    // 0x0007D0: 0x5C9807800FF70019 Mov
    // 0x0007D8: 0x51A005140787230A Ffma
    temp_218 = fma(temp_25, temp_214, fp_c5.data[30].x);
    // 0x0007E8: 0x5C68100001571010 Fmul
    temp_219 = temp_212 * temp_215;
    // 0x0007F0: 0x4C68101801670D15 Fmul
    temp_220 = temp_171 * fp_c6.data[5].z;
    // 0x0007F8: 0x32A210C000072B2B Ffma
    temp_221 = 0.0 - temp_69;
    temp_222 = fma(temp_216, 2.0, temp_221);
    // 0x000808: 0x59A10A0001171411 Ffma
    temp_223 = 0.0 - temp_217;
    temp_224 = fma(temp_209, temp_223, temp_209);
    // 0x000810: 0x59A1078000F70914 Ffma
    temp_225 = 0.0 - temp_196;
    temp_226 = fma(temp_201, temp_225, temp_196);
    // 0x000818: 0xEF5400000007FF11 Stl
    local_memory[0] = floatBitsToUint(temp_224);
    // 0x000828: 0x5C68100001070D1A Fmul
    temp_227 = temp_171 * temp_219;
    // 0x000830: 0x59A1098000971310 Ffma
    temp_228 = 0.0 - temp_201;
    temp_229 = fma(temp_208, temp_228, temp_208);
    // 0x000838: 0x59A1078000F70A0F Ffma
    temp_230 = 0.0 - temp_196;
    temp_231 = fma(temp_218, temp_230, temp_196);
    // 0x000848: 0x1E23EA2F98371515 Fmul32i
    temp_232 = temp_220 * 0.318309873;
    // 0x000850: 0x5C58100001470914 Fadd
    temp_233 = temp_201 + temp_226;
    // 0x000858: 0x5C58100001070910 Fadd
    temp_234 = temp_201 + temp_229;
    // 0x000868: 0x5C58100000F70A0F Fadd
    temp_235 = temp_218 + temp_231;
    // 0x000870: 0x4C68101801570D11 Fmul
    temp_236 = temp_171 * fp_c6.data[5].y;
    // 0x000878: 0x59A109800087130D Ffma
    temp_237 = 0.0 - temp_202;
    temp_238 = fma(temp_208, temp_237, temp_208);
    // 0x000888: 0x59A1098000A71313 Ffma
    temp_239 = 0.0 - temp_218;
    temp_240 = fma(temp_208, temp_239, temp_208);
    // 0x000890: 0x4C68101801571010 Fmul
    temp_241 = temp_234 * fp_c6.data[5].y;
    // 0x000898: 0x59A10A8000F7150F Ffma
    temp_242 = 0.0 - temp_235;
    temp_243 = fma(temp_232, temp_242, temp_232);
    // 0x0008A8: 0x1E23EA2F98371111 Fmul32i
    temp_244 = temp_236 * 0.318309873;
    // 0x0008B0: 0x5C58100000D7080D Fadd
    temp_245 = temp_202 + temp_238;
    // 0x0008B8: 0x5C58100001370A13 Fadd
    temp_246 = temp_218 + temp_240;
    // 0x0008C8: 0x5C68100001A71025 Fmul
    temp_247 = temp_241 * temp_227;
    // 0x0008D0: 0x49A20B980AD71710 Ffma
    temp_248 = 0.0 - temp_207;
    temp_249 = fma(temp_207, fp_c6.data[43].y, temp_248);
    // 0x0008D8: 0x5B6603800FF72C07 Isetp
    temp_250 = floatBitsToUint(temp_193) <= 0u;
    // 0x0008E8: 0x59A108800147110B Ffma
    temp_251 = 0.0 - temp_233;
    temp_252 = fma(temp_244, temp_251, temp_244);
    // 0x0008F0: 0x4C68101801470D0D Fmul
    temp_253 = temp_245 * fp_c6.data[5].x;
    // 0x0008F8: 0x4C68101801671313 Fmul
    temp_254 = temp_246 * fp_c6.data[5].z;
    // 0x000908: 0x1E23E22F98372525 Fmul32i
    temp_255 = temp_247 * 0.159154937;
    // 0x000910: 0x3858103F80071010 Fadd
    temp_256 = temp_249 + 1.0;
    // 0x000918: 0x5C68100001A70D24 Fmul
    temp_257 = temp_253 * temp_227;
    // 0x000928: 0x49A20B980AC7170D Ffma
    temp_258 = 0.0 - temp_207;
    temp_259 = fma(temp_207, fp_c6.data[43].x, temp_258);
    // 0x000930: 0x49A20B980AE71717 Ffma
    temp_260 = 0.0 - temp_207;
    temp_261 = fma(temp_207, fp_c6.data[43].z, temp_260);
    // 0x000938: 0x5C68100001A71326 Fmul
    temp_262 = temp_254 * temp_227;
    // 0x000948: 0x5C9807800FF70013 Mov
    // 0x000950: 0x5C9807800FF7001A Mov
    // 0x000958: 0x59A408000107061D Ffma
    temp_263 = fma(temp_177, temp_256, temp_256);
    temp_264 = clamp(temp_263, 0.0, 1.0);
    // 0x000968: 0x3858103F80070D1C Fadd
    temp_265 = temp_259 + 1.0;
    // 0x000970: 0x3858103F80071722 Fadd
    temp_266 = temp_261 + 1.0;
    // 0x000978: 0x5C6810000047010D Fmul
    temp_267 = temp_120 * temp_162;
    // 0x000988: 0x5C68100000471217 Fmul
    temp_268 = temp_130 * temp_162;
    // 0x000990: 0x1E23E22F98372424 Fmul32i
    temp_269 = temp_257 * 0.159154937;
    // 0x000998: 0x1E23E22F98372626 Fmul32i
    temp_270 = temp_262 * 0.159154937;
    // 0x0009A8: 0x59A40E0001C7051C Ffma
    temp_271 = fma(temp_168, temp_265, temp_265);
    temp_272 = clamp(temp_271, 0.0, 1.0);
    // 0x0009B0: 0x59A4110002270722 Ffma
    temp_273 = fma(temp_179, temp_266, temp_266);
    temp_274 = clamp(temp_273, 0.0, 1.0);
    // 0x0009B8: 0x32A2104000070D28 Ffma
    temp_275 = 0.0 - temp_71;
    temp_276 = fma(temp_267, 2.0, temp_275);
    // 0x0009C8: 0x32A20B4000071717 Ffma
    temp_277 = 0.0 - temp_73;
    temp_278 = fma(temp_268, 2.0, temp_277);
    // 0x0009D0: 0xF0F800000000000F Sync
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
    if (!temp_250)
    {
        // 0x0009D8: 0x5C9807800FF7002A Mov
        temp_291 = 0;
        do
        {
            // 0x0009E8: 0x5C18020002A72E29 Iscadd
            temp_293 = int(temp_153) << 4;
            temp_294 = temp_293 + temp_291;
            // 0x0009F0: 0xE003FF87CFF7FF32 Ipa
            // 0x0009F8: 0x1C00000000172A2A Iadd32i
            temp_295 = temp_291 + 1;
            // 0x000A08: 0xE003FF87CFF7FF34 Ipa
            // 0x000A10: 0x3848000000472929 Shl
            temp_296 = temp_294 << 4;
            // 0x000A18: 0xE003FF87CFF7FF33 Ipa
            // 0x000A28: 0x5B6C038002C72A0F Isetp
            temp_292 = uint(temp_295) >= floatBitsToUint(temp_193);
            // 0x000A30: 0xE290000055800000 Ssy
            // 0x000A38: 0xEF94008200072929 Ldc
            temp_297 = temp_296 + 0x2000;
            temp_298 = uint(temp_297) >> 2;
            temp_299 = temp_298 >> 2;
            temp_300 = int(temp_298) & 3;
            temp_301 = fp_c8.data[int(temp_299)][temp_300];
            // 0x000A48: 0x5080000000473232 Mufu
            // 0x000A50: 0x5080000000473434 Mufu
            // 0x000A58: 0x5080000000473333 Mufu
            // 0x000A68: 0xE043FF8D0327FF32 Ipa
            temp_302 = in_attr5.x;
            // 0x000A70: 0xE043FF8D4347FF34 Ipa
            temp_303 = in_attr5.y;
            // 0x000A78: 0xE043FF8D8337FF33 Ipa
            temp_304 = in_attr5.z;
            // 0x000A88: 0x3848000000672929 Shl
            temp_305 = floatBitsToInt(temp_301) << 6;
            // 0x000A90: 0xEF9500800107290C Ldc
            temp_306 = temp_305 + 16;
            temp_307 = uint(temp_306) >> 2;
            temp_308 = temp_307 >> 2;
            temp_309 = int(temp_307) & 3;
            temp_310 = fp_c8.data[int(temp_308)][temp_309];
            temp_311 = int(temp_307) + 1;
            temp_312 = uint(temp_311) >> 2;
            temp_313 = temp_311 & 3;
            temp_314 = fp_c8.data[int(temp_312)][temp_313];
            // 0x000A98: 0xEF95008001872910 Ldc
            temp_315 = temp_305 + 24;
            temp_316 = uint(temp_315) >> 2;
            temp_317 = temp_316 >> 2;
            temp_318 = int(temp_316) & 3;
            temp_319 = fp_c8.data[int(temp_317)][temp_318];
            temp_320 = int(temp_316) + 1;
            temp_321 = uint(temp_320) >> 2;
            temp_322 = temp_320 & 3;
            temp_323 = fp_c8.data[int(temp_321)][temp_322];
            // 0x000AA8: 0xEF95008002072914 Ldc
            temp_324 = temp_305 + 32;
            temp_325 = uint(temp_324) >> 2;
            temp_326 = temp_325 >> 2;
            temp_327 = int(temp_325) & 3;
            temp_328 = fp_c8.data[int(temp_326)][temp_327];
            temp_329 = int(temp_325) + 1;
            temp_330 = uint(temp_329) >> 2;
            temp_331 = temp_329 & 3;
            temp_332 = fp_c8.data[int(temp_330)][temp_331];
            // 0x000AB0: 0x5C58300003270C32 Fadd
            temp_333 = 0.0 - temp_302;
            temp_334 = temp_310 + temp_333;
            // 0x000AB8: 0x5C58300003470D36 Fadd
            temp_335 = 0.0 - temp_303;
            temp_336 = temp_314 + temp_335;
            // 0x000AC8: 0x5C58300003371033 Fadd
            temp_337 = 0.0 - temp_304;
            temp_338 = temp_319 + temp_337;
            // 0x000AD0: 0x5C68100003273234 Fmul
            temp_339 = temp_334 * temp_334;
            // 0x000AD8: 0x59A1198003371111 Ffma
            temp_340 = 0.0 - temp_338;
            temp_341 = fma(temp_323, temp_340, temp_338);
            // 0x000AE8: 0x59A01A0003673634 Ffma
            temp_342 = fma(temp_336, temp_336, temp_339);
            // 0x000AF0: 0x59A01A0001171135 Ffma
            temp_343 = fma(temp_341, temp_341, temp_342);
            // 0x000AF8: 0x508000000057350C Mufu
            temp_344 = inversesqrt(temp_343);
            // 0x000B08: 0x5080000000873535 Mufu
            temp_345 = sqrt(temp_343);
            // 0x000B10: 0x5C68100000C7320D Fmul
            temp_346 = temp_334 * temp_344;
            // 0x000B18: 0x5C68100000C73637 Fmul
            temp_347 = temp_336 * temp_344;
            // 0x000B28: 0x5C69100001470D0D Fmul
            temp_348 = 0.0 - temp_328;
            temp_349 = temp_346 * temp_348;
            // 0x000B30: 0x5C68100000C71114 Fmul
            temp_350 = temp_341 * temp_344;
            // 0x000B38: 0xEF95008003872910 Ldc
            temp_351 = temp_305 + 56;
            temp_352 = uint(temp_351) >> 2;
            temp_353 = temp_352 >> 2;
            temp_354 = int(temp_352) & 3;
            temp_355 = fp_c8.data[int(temp_353)][temp_354];
            temp_356 = int(temp_352) + 1;
            temp_357 = uint(temp_356) >> 2;
            temp_358 = temp_356 & 3;
            temp_359 = fp_c8.data[int(temp_357)][temp_358];
            // 0x000B48: 0x59A1068001573737 Ffma
            temp_360 = 0.0 - temp_332;
            temp_361 = fma(temp_347, temp_360, temp_349);
            // 0x000B50: 0xEF94008002872915 Ldc
            temp_362 = temp_305 + 40;
            temp_363 = uint(temp_362) >> 2;
            temp_364 = temp_363 >> 2;
            temp_365 = int(temp_363) & 3;
            temp_366 = fp_c8.data[int(temp_364)][temp_365];
            // 0x000B58: 0xEF9500800307290C Ldc
            temp_367 = temp_305 + 48;
            temp_368 = uint(temp_367) >> 2;
            temp_369 = temp_368 >> 2;
            temp_370 = int(temp_368) & 3;
            temp_371 = fp_c8.data[int(temp_369)][temp_370];
            temp_372 = int(temp_368) + 1;
            temp_373 = uint(temp_372) >> 2;
            temp_374 = temp_372 & 3;
            temp_375 = fp_c8.data[int(temp_373)][temp_374];
            // 0x000B68: 0x59A11B8001571414 Ffma
            temp_376 = 0.0 - temp_366;
            temp_377 = fma(temp_350, temp_376, temp_361);
            // 0x000B70: 0x59A4068003570C35 Ffma
            temp_378 = fma(temp_371, temp_345, temp_375);
            temp_379 = clamp(temp_378, 0.0, 1.0);
            // 0x000B78: 0x010404000007F015 Mov32i
            // 0x000B88: 0x59A4088001071410 Ffma
            temp_380 = fma(temp_377, temp_355, temp_359);
            temp_381 = clamp(temp_380, 0.0, 1.0);
            // 0x000B90: 0x5C68100003573511 Fmul
            temp_382 = temp_379 * temp_379;
            // 0x000B98: 0x33A00AC000073514 Ffma
            temp_383 = fma(temp_379, -2.0, 3.0);
            // 0x000BA8: 0x33A00AC000071015 Ffma
            temp_384 = fma(temp_381, -2.0, 3.0);
            // 0x000BB0: 0x5C68100001071010 Fmul
            temp_385 = temp_381 * temp_381;
            // 0x000BB8: 0x5C68100001171411 Fmul
            temp_386 = temp_383 * temp_382;
            // 0x000BC8: 0x39585042F0073314 Fadd
            temp_387 = abs(temp_338);
            temp_388 = temp_387 + -120.0;
            // 0x000BD0: 0x5C68100001571010 Fmul
            temp_389 = temp_385 * temp_384;
            // 0x000BD8: 0x5C68100001171010 Fmul
            temp_390 = temp_389 * temp_386;
            // 0x000BE8: 0x1EABD4CCCCD71411 Fmul32i
            temp_391 = temp_388 * -0.0500000007;
            temp_392 = clamp(temp_391, 0.0, 1.0);
            // 0x000BF0: 0x5C68100001071110 Fmul
            temp_393 = temp_392 * temp_390;
            // 0x000BF8: 0x36247F9000171111 Xmad
            temp_394 = floatBitsToUint(temp_392) >> 16;
            temp_395 = int(temp_394) << 16;
            // 0x000C08: 0x5BB383800FF71007 Fsetp
            temp_396 = temp_393 <= 0.0;
            // 0x000C10: 0x7A05083C0F00FF11 Hadd2
            temp_291 = temp_295;
            temp_397 = uint(temp_395);
            temp_398 = temp_279;
            temp_399 = temp_280;
            temp_400 = temp_281;
            temp_401 = temp_282;
            temp_402 = temp_283;
            temp_403 = temp_284;
            if (temp_396)
            {
                temp_404 = unpackHalf2x16(uint(temp_395)).y;
                temp_405 = packHalf2x16(vec2(1.0, temp_404));
                temp_397 = temp_405;
            }
            // 0x000C18: 0x5D2103902FF71107 Hsetp2
            temp_406 = unpackHalf2x16(temp_397).x;
            temp_407 = temp_406 == 0.0;
            // 0x000C28: 0xF0F800000008000F Sync
            if (temp_407)
            {
                // 0x000C30: 0x5080000000470C0C Mufu
                temp_408 = 1.0 / temp_371;
                // 0x000C38: 0xEF94008000872937 Ldc
                temp_409 = temp_305 + 8;
                temp_410 = uint(temp_409) >> 2;
                temp_411 = temp_410 >> 2;
                temp_412 = int(temp_410) & 3;
                temp_413 = fp_c8.data[int(temp_411)][temp_412];
                // 0x000C48: 0x5C69100000C70D0D Fmul
                temp_414 = 0.0 - temp_408;
                temp_415 = temp_375 * temp_414;
                // 0x000C50: 0x5C60138000D73333 Fmnmx
                temp_416 = min(temp_338, temp_415);
                // 0x000C58: 0x5C61178003370D33 Fmnmx
                temp_417 = 0.0 - temp_415;
                temp_418 = max(temp_417, temp_416);
                // 0x000C68: 0x59A01A0003373314 Ffma
                temp_419 = fma(temp_418, temp_418, temp_342);
                // 0x000C70: 0xEF94008002C72934 Ldc
                temp_420 = temp_305 + 44;
                temp_421 = uint(temp_420) >> 2;
                temp_422 = temp_421 >> 2;
                temp_423 = int(temp_421) & 3;
                temp_424 = fp_c8.data[int(temp_422)][temp_423];
                // 0x000C78: 0x508000000057140C Mufu
                temp_425 = inversesqrt(temp_419);
                // 0x000C88: 0x5080000000871414 Mufu
                temp_426 = sqrt(temp_419);
                // 0x000C90: 0x5C68100000C73211 Fmul
                temp_427 = temp_334 * temp_425;
                // 0x000C98: 0x5C68100000C73636 Fmul
                temp_428 = temp_336 * temp_425;
                // 0x000CA8: 0x5C68100000C73333 Fmul
                temp_429 = temp_418 * temp_425;
                // 0x000CB0: 0x5C68100003771037 Fmul
                temp_430 = temp_393 * temp_413;
                // 0x000CB8: 0x5C58100001172115 Fadd
                temp_431 = temp_69 + temp_427;
                // 0x000CC8: 0x5C58100003672035 Fadd
                temp_432 = temp_71 + temp_428;
                // 0x000CD0: 0x5C58100003371632 Fadd
                temp_433 = temp_73 + temp_429;
                // 0x000CD8: 0x5C6810000157150C Fmul
                temp_434 = temp_431 * temp_431;
                // 0x000CE8: 0x59A006000357350C Ffma
                temp_435 = fma(temp_432, temp_432, temp_434);
                // 0x000CF0: 0x59A006000327320C Ffma
                temp_436 = fma(temp_433, temp_433, temp_435);
                // 0x000CF8: 0x5080000000570C0C Mufu
                temp_437 = inversesqrt(temp_436);
                // 0x000D08: 0x5080000000473434 Mufu
                temp_438 = 1.0 / temp_424;
                // 0x000D10: 0x5C68100000C71515 Fmul
                temp_439 = temp_431 * temp_437;
                // 0x000D18: 0x5C68100000C73535 Fmul
                temp_440 = temp_432 * temp_437;
                // 0x000D28: 0x5C68100000C73232 Fmul
                temp_441 = temp_433 * temp_437;
                // 0x000D30: 0xEF9500800007290C Ldc
                temp_442 = uint(temp_305) >> 2;
                temp_443 = temp_442 >> 2;
                temp_444 = int(temp_442) & 3;
                temp_445 = fp_c8.data[int(temp_443)][temp_444];
                temp_446 = int(temp_442) + 1;
                temp_447 = uint(temp_446) >> 2;
                temp_448 = temp_446 & 3;
                temp_449 = fp_c8.data[int(temp_447)][temp_448];
                // 0x000D38: 0x51A00A0400573414 Ffma
                temp_450 = fma(temp_438, temp_426, fp_c1.data[1].y);
                // 0x000D48: 0x5080000000471414 Mufu
                temp_451 = 1.0 / temp_450;
                // 0x000D50: 0x5C68100001170E29 Fmul
                temp_452 = temp_118 * temp_427;
                // 0x000D58: 0x5C68100001571111 Fmul
                temp_453 = temp_427 * temp_439;
                // 0x000D68: 0x5C68100001570E15 Fmul
                temp_454 = temp_118 * temp_439;
                // 0x000D70: 0x59A0148003670129 Ffma
                temp_455 = fma(temp_120, temp_428, temp_452);
                // 0x000D78: 0x59A0088003573611 Ffma
                temp_456 = fma(temp_428, temp_440, temp_453);
                // 0x000D88: 0x59A00A8003570115 Ffma
                temp_457 = fma(temp_120, temp_440, temp_454);
                // 0x000D90: 0x59A0148003371229 Ffma
                temp_458 = fma(temp_130, temp_429, temp_455);
                // 0x000D98: 0x59A4088003273311 Ffma
                temp_459 = fma(temp_429, temp_441, temp_456);
                temp_460 = clamp(temp_459, 0.0, 1.0);
                // 0x000DA8: 0x59A40A8003271215 Ffma
                temp_461 = fma(temp_130, temp_441, temp_457);
                temp_462 = clamp(temp_461, 0.0, 1.0);
                // 0x000DB0: 0x01040DF760C7F032 Mov32i
                // 0x000DB8: 0x1E23FB3333371414 Fmul32i
                temp_463 = temp_451 * 1.39999998;
                // 0x000DC8: 0x5C5C30000FF72934 Fadd
                temp_464 = temp_458 + -0.0;
                temp_465 = clamp(temp_464, 0.0, 1.0);
                // 0x000DD0: 0x59A20A8001573033 Ffma
                temp_466 = 0.0 - temp_462;
                temp_467 = fma(temp_150, temp_462, temp_466);
                // 0x000DD8: 0x49A2190400271132 Ffma
                temp_468 = fma(temp_460, fp_c1.data[0].z, -6.98316002);
                // 0x000DE8: 0x5C68100001471414 Fmul
                temp_469 = temp_463 * temp_463;
                // 0x000DF0: 0x51A0198400471533 Ffma
                temp_470 = fma(temp_462, temp_467, fp_c1.data[1].x);
                // 0x000DF8: 0x5C68100003271132 Fmul
                temp_471 = temp_460 * temp_468;
                // 0x000E08: 0x5080000000473333 Mufu
                temp_472 = 1.0 / temp_470;
                // 0x000E10: 0x59A11A0003472F11 Ffma
                temp_473 = 0.0 - temp_465;
                temp_474 = fma(temp_158, temp_473, temp_465);
                // 0x000E18: 0x59A10A0001472914 Ffma
                temp_475 = 0.0 - temp_469;
                temp_476 = fma(temp_458, temp_475, temp_469);
                // 0x000E28: 0x5C90008003270015 Rro
                // 0x000E30: 0x5C58100001172F11 Fadd
                temp_477 = temp_158 + temp_474;
                // 0x000E38: 0x5080000000271515 Mufu
                temp_478 = exp2(temp_471);
                // 0x000E48: 0x5C5C100001472914 Fadd
                temp_479 = temp_458 + temp_476;
                temp_480 = clamp(temp_479, 0.0, 1.0);
                // 0x000E50: 0x5080000000471111 Mufu
                temp_481 = 1.0 / temp_477;
                // 0x000E58: 0x5C68100000C7100C Fmul
                temp_482 = temp_393 * temp_445;
                // 0x000E68: 0x5C68100003373133 Fmul
                temp_483 = temp_142 * temp_472;
                // 0x000E70: 0x5C68100000D7100D Fmul
                temp_484 = temp_393 * temp_449;
                // 0x000E78: 0x5C68100003373333 Fmul
                temp_485 = temp_483 * temp_483;
                // 0x000E88: 0x59A10A8001570929 Ffma
                temp_486 = 0.0 - temp_478;
                temp_487 = fma(temp_201, temp_486, temp_478);
                // 0x000E90: 0x59A10A8001570810 Ffma
                temp_488 = 0.0 - temp_478;
                temp_489 = fma(temp_202, temp_488, temp_478);
                // 0x000E98: 0x5C68100001172D11 Fmul
                temp_490 = temp_204 * temp_481;
                // 0x000EA8: 0x59A10A8001570A15 Ffma
                temp_491 = 0.0 - temp_478;
                temp_492 = fma(temp_218, temp_491, temp_478);
                // 0x000EB0: 0x5C58100002970932 Fadd
                temp_493 = temp_201 + temp_487;
                // 0x000EB8: 0x5C58100001070829 Fadd
                temp_494 = temp_202 + temp_489;
                // 0x000EC8: 0x5C68100001173311 Fmul
                temp_495 = temp_485 * temp_490;
                // 0x000ED0: 0x5C58100001570A15 Fadd
                temp_496 = temp_218 + temp_492;
                // 0x000ED8: 0x5C68100000D73232 Fmul
                temp_497 = temp_493 * temp_484;
                // 0x000EE8: 0x5C68100000C72910 Fmul
                temp_498 = temp_494 * temp_482;
                // 0x000EF0: 0x5C68100001173411 Fmul
                temp_499 = temp_465 * temp_495;
                // 0x000EF8: 0x5C68100003771533 Fmul
                temp_500 = temp_496 * temp_430;
                // 0x000F08: 0x5C68100001470D34 Fmul
                temp_501 = temp_484 * temp_480;
                // 0x000F10: 0x5C68100001470C0C Fmul
                temp_502 = temp_482 * temp_480;
                // 0x000F18: 0x5C68100001473714 Fmul
                temp_503 = temp_430 * temp_480;
                // 0x000F28: 0x5C68100001173232 Fmul
                temp_504 = temp_497 * temp_499;
                // 0x000F30: 0x5C6810000117100D Fmul
                temp_505 = temp_498 * temp_499;
                // 0x000F38: 0x5C68100001173311 Fmul
                temp_506 = temp_500 * temp_499;
                // 0x000F48: 0x49A0138400770C27 Ffma
                temp_507 = fma(temp_502, fp_c1.data[1].w, temp_279);
                // 0x000F50: 0x49A00C8400773419 Ffma
                temp_508 = fma(temp_501, fp_c1.data[1].w, temp_280);
                // 0x000F58: 0x49A00D040077141A Ffma
                temp_509 = fma(temp_503, fp_c1.data[1].w, temp_281);
                // 0x000F68: 0x49A00D840067321B Ffma
                temp_510 = fma(temp_504, fp_c1.data[1].z, temp_282);
                // 0x000F70: 0x49A00C0400670D18 Ffma
                temp_511 = fma(temp_505, fp_c1.data[1].z, temp_283);
                // 0x000F78: 0x49A0098400671113 Ffma
                temp_512 = fma(temp_506, fp_c1.data[1].z, temp_284);
                // 0x000F88: 0xF0F800000007000F Sync
                temp_398 = temp_507;
                temp_399 = temp_508;
                temp_400 = temp_509;
                temp_401 = temp_510;
                temp_402 = temp_511;
                temp_403 = temp_512;
            }
            // 0x000F90: 0xE2400FFFA489000F Bra
            temp_279 = temp_398;
            temp_280 = temp_399;
            temp_281 = temp_400;
            temp_282 = temp_401;
            temp_283 = temp_402;
            temp_284 = temp_403;
            temp_285 = temp_399;
            temp_286 = temp_400;
            temp_287 = temp_402;
            temp_288 = temp_403;
            temp_289 = temp_401;
            temp_290 = temp_398;
        }
        while (!temp_292);
        // 0x000F98: 0xF0F800000007000F Sync
    }
    // 0x000FA8: 0x5C62578002872B0D Fmnmx
    temp_513 = abs(temp_222);
    temp_514 = abs(temp_276);
    temp_515 = max(temp_513, temp_514);
    // 0x000FB0: 0xE003FF87CFF7FF2C Ipa
    // 0x000FB8: 0x5C62578000170E0C Fmnmx
    temp_516 = abs(temp_118);
    temp_517 = abs(temp_120);
    temp_518 = max(temp_516, temp_517);
    // 0x000FC8: 0xEF4410000007FF32 Ldl
    temp_519 = uintBitsToFloat(local_memory[0]);
    // 0x000FD0: 0x010000000017F014 Mov32i
    // 0x000FD8: 0x3868104080070221 Fmul
    temp_520 = temp_133 * 4.0;
    // 0x000FE8: 0x4C98079C0207002F Mov
    // 0x000FF0: 0x5C60578000D7170D Fmnmx
    temp_521 = abs(temp_278);
    temp_522 = max(temp_521, temp_515);
    // 0x000FF8: 0x5080000000470D0D Mufu
    temp_523 = 1.0 / temp_522;
    // 0x001008: 0x5C60578000C7120C Fmnmx
    temp_524 = abs(temp_130);
    temp_525 = max(temp_524, temp_518);
    // 0x001010: 0x5080000000470C0C Mufu
    temp_526 = 1.0 / temp_525;
    // 0x001018: 0x5C68100000D72816 Fmul
    temp_527 = temp_276 * temp_523;
    // 0x001028: 0x5C68100000D72B15 Fmul
    temp_528 = temp_222 * temp_523;
    // 0x001030: 0x5080000000472C2C Mufu
    // 0x001038: 0x5C69100000C71212 Fmul
    temp_529 = 0.0 - temp_526;
    temp_530 = temp_130 * temp_529;
    // 0x001048: 0x5C68100000C70E10 Fmul
    temp_531 = temp_118 * temp_526;
    // 0x001050: 0x5C68100000C70111 Fmul
    temp_532 = temp_120 * temp_526;
    // 0x001058: 0x5C69100000D71717 Fmul
    temp_533 = 0.0 - temp_523;
    temp_534 = temp_278 * temp_533;
    // 0x001068: 0xC0BA0163EFF7100C Tex
    temp_535 = textureLod(fp_t_tcb_16, vec3(temp_531, temp_532, temp_530), 0.0).xyz;
    temp_536 = temp_535.x;
    temp_537 = temp_535.y;
    temp_538 = temp_535.z;
    // 0x001070: 0x38681040E007022B Fmul
    temp_539 = temp_133 * 7.0;
    // 0x001078: 0xE043FF9202C7FF28 Ipa
    temp_540 = in_attr10.x;
    // 0x001088: 0x5C98078001270020 Mov
    // 0x001090: 0xE043FF9242C7FF29 Ipa
    temp_541 = in_attr10.y;
    // 0x001098: 0x3859103F80070202 Fadd
    temp_542 = 0.0 - temp_133;
    temp_543 = temp_542 + 1.0;
    // 0x0010A8: 0xE043FF9282C7FF2A Ipa
    temp_544 = in_attr10.z;
    // 0x0010B0: 0xC1BA0143F2B71414 Tex
    temp_545 = textureLod(fp_t_tcb_14, vec4(temp_528, temp_527, temp_534, float(1)), temp_539).xyz;
    temp_546 = temp_545.x;
    temp_547 = temp_545.y;
    temp_548 = temp_545.z;
    // 0x0010B8: 0xD9A2018202071010 Texs
    temp_549 = textureLod(fp_t_tcb_18, vec3(temp_531, temp_532, temp_530), temp_520).xyz;
    temp_550 = temp_549.x;
    temp_551 = temp_549.y;
    temp_552 = temp_549.z;
    // 0x0010C8: 0xDEBA0000C2F72828 TexB
    temp_553 = texture(fp_t_cb7_20, vec3(temp_540, temp_541, temp_544)).x;
    // 0x0010D0: 0x3859103F8007042D Fadd
    temp_554 = 0.0 - temp_162;
    temp_555 = temp_554 + 1.0;
    // 0x0010D8: 0x49A005980A17190B Ffma
    temp_556 = fma(temp_285, fp_c6.data[40].y, temp_252);
    // 0x0010E8: 0x49A007980A171A0F Ffma
    temp_557 = fma(temp_286, fp_c6.data[40].y, temp_243);
    // 0x0010F0: 0x5C68100000270219 Fmul
    temp_558 = temp_543 * temp_543;
    // 0x0010F8: 0x010410676C97F01A Mov32i
    // 0x001108: 0x49A012180A171824 Ffma
    temp_559 = fma(temp_287, fp_c6.data[40].y, temp_269);
    // 0x001110: 0x4C68101809072D02 Fmul
    temp_560 = temp_555 * fp_c6.data[36].x;
    // 0x001118: 0x1E23E468DB970418 Fmul32i
    temp_561 = temp_162 * 0.193900004;
    // 0x001128: 0x5080400000370217 Mufu
    temp_562 = abs(temp_560);
    temp_563 = log2(temp_562);
    // 0x001130: 0x5C68100001971912 Fmul
    temp_564 = temp_558 * temp_558;
    // 0x001138: 0xE04BFF9042C7FF02 Ipa
    temp_565 = in_attr8.y;
    temp_566 = clamp(temp_565, 0.0, 1.0);
    // 0x001148: 0x49A00D0400C7041A Ffma
    temp_567 = fma(temp_162, fp_c1.data[3].x, 8.40400028);
    // 0x001150: 0x0103E2CD9E87F019 Mov32i
    // 0x001158: 0x49A013180A171326 Ffma
    temp_568 = fma(temp_288, fp_c6.data[40].y, temp_270);
    // 0x001168: 0x49A012980A171B25 Ffma
    temp_569 = fma(temp_289, fp_c6.data[40].y, temp_255);
    // 0x001170: 0x0103F0000007F02A Mov32i
    // 0x001178: 0x49A00C0400871218 Ffma
    temp_570 = fma(temp_564, fp_c1.data[2].x, temp_561);
    // 0x001188: 0x51A00D0400D7041A Ffma
    temp_571 = fma(temp_162, temp_567, fp_c1.data[3].y);
    // 0x001190: 0x49A20C8400F71213 Ffma
    temp_572 = fma(temp_564, fp_c1.data[3].w, -0.168799996);
    // 0x001198: 0x0104066978D7F01B Mov32i
    // 0x0011A8: 0x4C68101809171717 Fmul
    temp_573 = temp_563 * fp_c6.data[36].y;
    // 0x0011B0: 0x4C9807980B470021 Mov
    // 0x0011B8: 0x088BF05D63971819 Fadd32i
    temp_574 = temp_570 + -0.522800028;
    // 0x0011C8: 0x51A00D0400E7041A Ffma
    temp_575 = fma(temp_162, temp_571, fp_c1.data[3].z);
    // 0x0011D0: 0x5C68100001371218 Fmul
    temp_576 = temp_564 * temp_572;
    // 0x0011D8: 0x32A0153F00070113 Ffma
    temp_577 = fma(temp_120, 0.5, 0.5);
    // 0x0011E8: 0x49A20D8400971201 Ffma
    temp_578 = fma(temp_564, fp_c1.data[2].y, -3.60299993);
    // 0x0011F0: 0x4C9807980087001B Mov
    // 0x0011F8: 0x5C90008001770017 Rro
    // 0x001208: 0x5C68100001970419 Fmul
    temp_579 = temp_162 * temp_574;
    // 0x001210: 0x5084000000271717 Mufu
    temp_580 = exp2(temp_573);
    temp_581 = clamp(temp_580, 0.0, 1.0);
    // 0x001218: 0x5C60138001871A04 Fmnmx
    temp_582 = min(temp_575, temp_576);
    // 0x001228: 0x4C9807980987001A Mov
    // 0x001230: 0x51A0008400A71218 Ffma
    temp_583 = fma(temp_564, temp_578, fp_c1.data[2].z);
    // 0x001238: 0xF0F0000034470000 Depbar
    // 0x001248: 0x51A210980B471E1E Ffma
    temp_584 = 0.0 - fp_c6.data[45].x;
    temp_585 = fma(temp_28, fp_c6.data[45].x, temp_584);
    // 0x001250: 0x51A210980B471F1F Ffma
    temp_586 = 0.0 - fp_c6.data[45].x;
    temp_587 = fma(temp_29, fp_c6.data[45].x, temp_586);
    // 0x001258: 0x51A210980B470000 Ffma
    temp_588 = 0.0 - fp_c6.data[45].x;
    temp_589 = fma(temp_30, fp_c6.data[45].x, temp_588);
    // 0x001268: 0x4C98079800970021 Mov
    // 0x001270: 0x4C58101407E71A01 Fadd
    temp_590 = fp_c6.data[38].x + fp_c5.data[31].z;
    // 0x001278: 0x59A00C800187121A Ffma
    temp_591 = fma(temp_564, temp_583, temp_579);
    // 0x001288: 0x4C59101800471B12 Fadd
    temp_592 = 0.0 - fp_c6.data[2].x;
    temp_593 = temp_592 + fp_c6.data[1].x;
    // 0x001290: 0x010404000007F029 Mov32i
    // 0x001298: 0x4C98079800A70019 Mov
    // 0x0012A8: 0x4C59101800572118 Fadd
    temp_594 = 0.0 - fp_c6.data[2].y;
    temp_595 = temp_594 + fp_c6.data[1].y;
    // 0x0012B0: 0x5C68100001770117 Fmul
    temp_596 = temp_590 * temp_581;
    // 0x0012B8: 0x5C5C30000FF7041B Fadd
    temp_597 = temp_582 + -0.0;
    temp_598 = clamp(temp_597, 0.0, 1.0);
    // 0x0012C8: 0x51A0091800871301 Ffma
    temp_599 = fma(temp_577, temp_593, fp_c6.data[2].x);
    // 0x0012D0: 0x33A014C000070229 Ffma
    temp_600 = fma(temp_566, -2.0, 3.0);
    // 0x0012D8: 0x5C68100000270212 Fmul
    temp_601 = temp_566 * temp_566;
    // 0x0012E8: 0x4C59101800671919 Fadd
    temp_602 = 0.0 - fp_c6.data[2].z;
    temp_603 = temp_602 + fp_c6.data[1].z;
    // 0x0012F0: 0x51A00C1800971302 Ffma
    temp_604 = fma(temp_577, temp_595, fp_c6.data[2].y);
    // 0x0012F8: 0x4C68101808D71718 Fmul
    temp_605 = temp_596 * fp_c6.data[35].y;
    // 0x001308: 0x386C104248070921 Fmul
    temp_606 = temp_201 * 50.0;
    temp_607 = clamp(temp_606, 0.0, 1.0);
    // 0x001310: 0x4C5C100400B71A1A Fadd
    temp_608 = temp_591 + fp_c1.data[2].w;
    temp_609 = clamp(temp_608, 0.0, 1.0);
    // 0x001318: 0x5C68100002971204 Fmul
    temp_610 = temp_601 * temp_600;
    // 0x001328: 0x4C68101808C71712 Fmul
    temp_611 = temp_596 * fp_c6.data[35].x;
    // 0x001330: 0x51A00C9800A71313 Ffma
    temp_612 = fma(temp_577, temp_603, fp_c6.data[2].z);
    // 0x001338: 0x49A0129407F71825 Ffma
    temp_613 = fma(temp_605, fp_c5.data[31].w, temp_569);
    // 0x001348: 0x49A10C1407F71819 Ffma
    temp_614 = 0.0 - fp_c5.data[31].w;
    temp_615 = fma(temp_605, temp_614, temp_605);
    // 0x001350: 0x4C68101808E71717 Fmul
    temp_616 = temp_596 * fp_c6.data[35].z;
    // 0x001358: 0x5C68100002171B2B Fmul
    temp_617 = temp_598 * temp_607;
    // 0x001368: 0x49A0121407F71224 Ffma
    temp_618 = fma(temp_611, fp_c5.data[31].w, temp_559);
    // 0x001370: 0x49A1091407F71218 Ffma
    temp_619 = 0.0 - fp_c5.data[31].w;
    temp_620 = fma(temp_611, temp_619, temp_611);
    // 0x001378: 0xE043FF9002C7FF12 Ipa
    temp_621 = in_attr8.x;
    // 0x001388: 0x5C58300001B71A21 Fadd
    temp_622 = 0.0 - temp_598;
    temp_623 = temp_609 + temp_622;
    // 0x001390: 0xE043FF8C82C7FF2C Ipa
    temp_624 = in_attr4.z;
    // 0x001398: 0x49A10B9407F7171A Ffma
    temp_625 = 0.0 - fp_c5.data[31].w;
    temp_626 = fma(temp_616, temp_625, temp_616);
    // 0x0013A8: 0x49A0131407F71726 Ffma
    temp_627 = fma(temp_616, fp_c5.data[31].w, temp_568);
    // 0x0013B0: 0x5C58100001970B0B Fadd
    temp_628 = temp_556 + temp_615;
    // 0x0013B8: 0x4C68101803770404 Fmul
    temp_629 = temp_610 * fp_c6.data[13].w;
    // 0x0013C8: 0x59A0158002170917 Ffma
    temp_630 = fma(temp_201, temp_623, temp_617);
    // 0x0013D0: 0x59A015800217081B Ffma
    temp_631 = fma(temp_202, temp_623, temp_617);
    // 0x0013D8: 0x5C58100001A70F0F Fadd
    temp_632 = temp_557 + temp_626;
    // 0x0013E8: 0x59A0158002170A08 Ffma
    temp_633 = fma(temp_218, temp_623, temp_617);
    // 0x0013F0: 0xF0F0000034370000 Depbar
    // 0x0013F8: 0x49A019180A172727 Ffma
    temp_634 = fma(temp_290, fp_c6.data[40].y, temp_519);
    // 0x001408: 0x5C58100001872718 Fadd
    temp_635 = temp_634 + temp_620;
    // 0x001410: 0xF0F0000034270000 Depbar
    // 0x001418: 0x49A0060400770101 Ffma
    temp_636 = fma(temp_599, fp_c1.data[1].w, temp_536);
    // 0x001428: 0x49A0068400770202 Ffma
    temp_637 = fma(temp_604, fp_c1.data[1].w, temp_537);
    // 0x001430: 0x49A007040077130E Ffma
    temp_638 = fma(temp_612, fp_c1.data[1].w, temp_538);
    // 0x001438: 0x4C9807980297000D Mov
    // 0x001448: 0x5C58100000171801 Fadd
    temp_639 = temp_635 + temp_636;
    // 0x001450: 0x5C58100000270B02 Fadd
    temp_640 = temp_628 + temp_637;
    // 0x001458: 0x5C58100000E70F0E Fadd
    temp_641 = temp_632 + temp_638;
    // 0x001468: 0x4C9807980287000B Mov
    // 0x001470: 0x51A0069802971F1F Ffma
    temp_642 = fma(temp_587, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001478: 0xF0F0000034170000 Depbar
    // 0x001488: 0x49A0081808571409 Ffma
    temp_643 = fma(temp_546, fp_c6.data[33].y, temp_550);
    // 0x001490: 0x49A008980857150C Ffma
    temp_644 = fma(temp_547, fp_c6.data[33].y, temp_551);
    // 0x001498: 0x59A100800017230A Ffma
    temp_645 = 0.0 - temp_639;
    temp_646 = fma(temp_25, temp_645, temp_639);
    // 0x0014A8: 0x59A1010000272301 Ffma
    temp_647 = 0.0 - temp_640;
    temp_648 = fma(temp_25, temp_647, temp_640);
    // 0x0014B0: 0x59A1070000E7230E Ffma
    temp_649 = 0.0 - temp_641;
    temp_650 = fma(temp_25, temp_649, temp_641);
    // 0x0014B8: 0x51A0059802871E1E Ffma
    temp_651 = fma(temp_585, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0014C8: 0x59A0120000971B1B Ffma
    temp_652 = fma(temp_631, temp_643, temp_618);
    // 0x0014D0: 0x49A0101808571609 Ffma
    temp_653 = fma(temp_548, fp_c6.data[33].y, temp_552);
    // 0x0014D8: 0x59A0128000C71717 Ffma
    temp_654 = fma(temp_630, temp_644, temp_613);
    // 0x0014E8: 0x4C98079802A70002 Mov
    // 0x0014F0: 0x59A00D8000A7050A Ffma
    temp_655 = fma(temp_168, temp_646, temp_652);
    // 0x0014F8: 0x59A0130000970808 Ffma
    temp_656 = fma(temp_633, temp_653, temp_627);
    // 0x001508: 0x59A00B8000170617 Ffma
    temp_657 = fma(temp_177, temp_648, temp_654);
    // 0x001510: 0x51A0011802A70000 Ffma
    temp_658 = fma(temp_589, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001518: 0x5C68100000A71C1C Fmul
    temp_659 = temp_272 * temp_655;
    // 0x001528: 0x59A0040000E70708 Ffma
    temp_660 = fma(temp_179, temp_650, temp_656);
    // 0x001530: 0x5C68100001771D1D Fmul
    temp_661 = temp_264 * temp_657;
    // 0x001538: 0x49A2021803570407 Ffma
    temp_662 = 0.0 - temp_629;
    temp_663 = fma(temp_629, fp_c6.data[13].y, temp_662);
    // 0x001548: 0x5C58300001E71C01 Fadd
    temp_664 = 0.0 - temp_651;
    temp_665 = temp_659 + temp_664;
    // 0x001550: 0x5C68100000872222 Fmul
    temp_666 = temp_274 * temp_660;
    // 0x001558: 0x5C58300001F71D02 Fadd
    temp_667 = 0.0 - temp_642;
    temp_668 = temp_661 + temp_667;
    // 0x001568: 0x49A509180BC72812 Ffma
    temp_669 = 0.0 - fp_c6.data[47].x;
    temp_670 = fma(temp_553, temp_669, temp_621);
    temp_671 = clamp(temp_670, 0.0, 1.0);
    // 0x001570: 0x5080000000371212 Mufu
    temp_672 = log2(temp_671);
    // 0x001578: 0x49A00F180BF70105 Ffma
    temp_673 = fma(temp_665, fp_c6.data[47].w, temp_651);
    // 0x001588: 0x5C58300000072201 Fadd
    temp_674 = 0.0 - temp_658;
    temp_675 = temp_666 + temp_674;
    // 0x001590: 0x49A00F980BF70202 Ffma
    temp_676 = fma(temp_668, fp_c6.data[47].w, temp_642);
    // 0x001598: 0x5C60178000571E05 Fmnmx
    temp_677 = max(temp_651, temp_673);
    // 0x0015A8: 0x49A000180BF70101 Ffma
    temp_678 = fma(temp_675, fp_c6.data[47].w, temp_658);
    // 0x0015B0: 0x5C60178000271F02 Fmnmx
    temp_679 = max(temp_642, temp_676);
    // 0x0015B8: 0x4C68101803171206 Fmul
    temp_680 = temp_672 * fp_c6.data[12].y;
    // 0x0015C8: 0x5C60178000170001 Fmnmx
    temp_681 = max(temp_658, temp_678);
    // 0x0015D0: 0x59A0010000770202 Ffma
    temp_682 = fma(temp_679, temp_663, temp_679);
    // 0x0015D8: 0x5C90008000670008 Rro
    // 0x0015E8: 0x49A2021803470406 Ffma
    temp_683 = 0.0 - temp_629;
    temp_684 = fma(temp_629, fp_c6.data[13].x, temp_683);
    // 0x0015F0: 0x5080000000270808 Mufu
    temp_685 = exp2(temp_680);
    // 0x0015F8: 0x49A2021803670404 Ffma
    temp_686 = 0.0 - temp_629;
    temp_687 = fma(temp_629, fp_c6.data[13].z, temp_686);
    // 0x001608: 0x5C59100000271D02 Fadd
    temp_688 = 0.0 - temp_661;
    temp_689 = temp_688 + temp_682;
    // 0x001610: 0x59A0028000670506 Ffma
    temp_690 = fma(temp_677, temp_684, temp_677);
    // 0x001618: 0x59A0008000470104 Ffma
    temp_691 = fma(temp_681, temp_687, temp_681);
    // 0x001628: 0x0103F2000007F005 Mov32i
    // 0x001630: 0x5C59100000671C01 Fadd
    temp_692 = 0.0 - temp_659;
    temp_693 = temp_692 + temp_690;
    // 0x001638: 0x4C68101802B70807 Fmul
    temp_694 = temp_685 * fp_c6.data[10].w;
    // 0x001648: 0x5C59100000472204 Fadd
    temp_695 = 0.0 - temp_666;
    temp_696 = temp_695 + temp_691;
    // 0x001650: 0x4C58100C03872C08 Fadd
    temp_697 = temp_624 + fp_c3.data[14].x;
    // 0x001658: 0x5C9807800FF70006 Mov
    // 0x001668: 0x59A00E0000770100 Ffma
    temp_698 = fma(temp_693, temp_694, temp_659);
    // 0x001670: 0x59A00E8000770201 Ffma
    temp_699 = fma(temp_689, temp_694, temp_661);
    // 0x001678: 0x59A0110000770402 Ffma
    temp_700 = fma(temp_696, temp_694, temp_666);
    // 0x001688: 0x5C98078000370007 Mov
    // 0x001690: 0x49A37F8C03C70804 Ffma
    temp_701 = 0.0 - fp_c3.data[15].x;
    temp_702 = fma(temp_697, temp_701, -0.0);
    // 0x001698: 0xE30000000007000F Exit
    out_attr0.x = temp_698;
    out_attr0.y = temp_699;
    out_attr0.z = temp_700;
    out_attr0.w = temp_18;
    out_attr1.x = temp_702;
    out_attr1.y = 0.625;
    out_attr1.z = 0.0;
    out_attr1.w = temp_18;
    return;
}
