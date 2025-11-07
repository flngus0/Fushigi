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
layout (binding = 2) uniform sampler2D fp_t_tcb_30;
layout (binding = 3) uniform sampler2DArray fp_t_tcb_2A;
layout (binding = 4) uniform sampler2DArray fp_t_tcb_36;
layout (binding = 5) uniform sampler2DArray fp_t_tcb_24;
layout (binding = 6) uniform sampler2D fp_t_tcb_20;
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
    precise float temp_17;
    uint temp_18;
    uint temp_19;
    precise vec2 temp_20;
    precise float temp_21;
    precise float temp_22;
    precise vec2 temp_23;
    precise float temp_24;
    precise float temp_25;
    precise vec3 temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise vec3 temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise vec3 temp_36;
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
    bool temp_64;
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
    uint temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    int temp_145;
    precise float temp_146;
    int temp_147;
    uint temp_148;
    uint temp_149;
    int temp_150;
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
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    bool temp_202;
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
    int temp_299;
    bool temp_300;
    int temp_301;
    int temp_302;
    int temp_303;
    int temp_304;
    int temp_305;
    uint temp_306;
    uint temp_307;
    int temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    int temp_313;
    int temp_314;
    uint temp_315;
    uint temp_316;
    int temp_317;
    precise float temp_318;
    int temp_319;
    uint temp_320;
    int temp_321;
    precise float temp_322;
    int temp_323;
    uint temp_324;
    uint temp_325;
    int temp_326;
    precise float temp_327;
    int temp_328;
    uint temp_329;
    int temp_330;
    precise float temp_331;
    int temp_332;
    uint temp_333;
    uint temp_334;
    int temp_335;
    precise float temp_336;
    int temp_337;
    uint temp_338;
    int temp_339;
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
    precise float temp_355;
    precise float temp_356;
    precise float temp_357;
    precise float temp_358;
    int temp_359;
    uint temp_360;
    uint temp_361;
    int temp_362;
    precise float temp_363;
    int temp_364;
    uint temp_365;
    int temp_366;
    precise float temp_367;
    precise float temp_368;
    precise float temp_369;
    int temp_370;
    uint temp_371;
    uint temp_372;
    int temp_373;
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
    precise float temp_395;
    precise float temp_396;
    precise float temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    uint temp_402;
    int temp_403;
    bool temp_404;
    uint temp_405;
    precise float temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    precise float temp_412;
    uint temp_413;
    precise float temp_414;
    bool temp_415;
    precise float temp_416;
    int temp_417;
    uint temp_418;
    uint temp_419;
    int temp_420;
    precise float temp_421;
    int temp_422;
    uint temp_423;
    uint temp_424;
    int temp_425;
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
    uint temp_454;
    uint temp_455;
    int temp_456;
    precise float temp_457;
    int temp_458;
    uint temp_459;
    int temp_460;
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
    precise vec3 temp_546;
    precise float temp_547;
    precise float temp_548;
    precise float temp_549;
    precise float temp_550;
    precise float temp_551;
    precise float temp_552;
    precise float temp_553;
    precise float temp_554;
    precise float temp_555;
    precise vec3 temp_556;
    precise float temp_557;
    precise float temp_558;
    precise float temp_559;
    precise vec3 temp_560;
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
    // 0x000008: 0xE003FF87CFF7FF0C Ipa
    // 0x000010: 0xE003FF870FF7FF06 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000018: 0xE003FF874FF7FF0F Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000028: 0x5080000000470C0C Mufu
    // 0x000030: 0x4C68100C04A70606 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000038: 0x4C68100C04B70F0F Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000048: 0xE043FF91C0C7FF00 Ipa
    temp_8 = in_attr9.w;
    // 0x000050: 0xE043FF8E40C7FF01 Ipa
    temp_9 = in_attr6.y;
    // 0x000058: 0xE043FF8E00C7FF17 Ipa
    temp_10 = in_attr6.x;
    // 0x000068: 0xE043FF8E80C7FF12 Ipa
    temp_11 = in_attr6.z;
    // 0x000070: 0xE043FF8EC0C7FF13 Ipa
    temp_12 = in_attr6.w;
    // 0x000078: 0xE043FF8F40C7FF14 Ipa
    temp_13 = in_attr7.y;
    // 0x000088: 0xE043FF8F00C7FF27 Ipa
    temp_14 = in_attr7.x;
    // 0x000090: 0xE043FF8F00C7FF1B Ipa
    temp_15 = in_attr7.x;
    // 0x000098: 0x5CB0100000070916 F2i
    temp_16 = roundEven(temp_8);
    temp_17 = max(temp_16, 0.0);
    temp_18 = uint(temp_17);
    temp_19 = clamp(temp_18, 0u, 0xFFFFu);
    // 0x0000A8: 0xD8F0026FF0171608 Texs
    temp_20 = texture(fp_t_tcb_26, vec3(temp_10, temp_9, float(int(temp_19)))).xy;
    temp_21 = temp_20.x;
    temp_22 = temp_20.y;
    // 0x0000B0: 0xD83002CFF1371212 Texs
    temp_23 = texture(fp_t_tcb_2C, vec2(temp_11, temp_12)).xy;
    temp_24 = temp_23.x;
    temp_25 = temp_23.y;
    // 0x0000B8: 0xD822030070171704 Texs
    temp_26 = texture(fp_t_tcb_30, vec2(temp_10, temp_9)).xyz;
    temp_27 = temp_26.x;
    temp_28 = temp_26.y;
    temp_29 = temp_26.z;
    // 0x0000C8: 0x5C98078001670026 Mov
    // 0x0000D0: 0x5C9807800167001A Mov
    // 0x0000D8: 0xD8EC02AFF1472603 Texs
    temp_30 = texture(fp_t_tcb_2A, vec3(temp_14, temp_13, float(int(temp_19)))).w;
    // 0x0000E8: 0xD8E40360B0171622 Texs
    temp_31 = texture(fp_t_tcb_36, vec3(temp_10, temp_9, float(int(temp_19)))).xyw;
    temp_32 = temp_31.x;
    temp_33 = temp_31.y;
    temp_34 = temp_31.z;
    // 0x0000F0: 0xD8E2024FF1471A0D Texs
    temp_35 = texture(fp_t_tcb_24, vec3(temp_15, temp_13, float(int(temp_19)))).x;
    // 0x0000F8: 0xD822020000F7061E Texs
    temp_36 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_37 = temp_36.x;
    temp_38 = temp_36.y;
    temp_39 = temp_36.z;
    // 0x000108: 0xE043FF8A00C7FF18 Ipa
    temp_40 = in_attr2.x;
    // 0x000110: 0xE043FF8900C7FF11 Ipa
    temp_41 = in_attr1.x;
    // 0x000118: 0xE043FF8A40C7FF19 Ipa
    temp_42 = in_attr2.y;
    // 0x000128: 0xE043FF8940C7FF0E Ipa
    temp_43 = in_attr1.y;
    // 0x000130: 0xE043FF8800C7FF02 Ipa
    temp_44 = in_attr0.x;
    // 0x000138: 0xE043FF8A80C7FF10 Ipa
    temp_45 = in_attr2.z;
    // 0x000148: 0xE043FF8980C7FF0A Ipa
    temp_46 = in_attr1.z;
    // 0x000150: 0xE043FF8B00C7FF21 Ipa
    temp_47 = in_attr3.x;
    // 0x000158: 0xE043FF8B40C7FF20 Ipa
    temp_48 = in_attr3.y;
    // 0x000168: 0xE043FF8840C7FF01 Ipa
    temp_49 = in_attr0.y;
    // 0x000170: 0x5C68100001871816 Fmul
    temp_50 = temp_40 * temp_40;
    // 0x000178: 0x59A00B0001971916 Ffma
    temp_51 = fma(temp_42, temp_42, temp_50);
    // 0x000188: 0x5C6810000027021B Fmul
    temp_52 = temp_44 * temp_44;
    // 0x000190: 0x59A00B0001071016 Ffma
    temp_53 = fma(temp_45, temp_45, temp_51);
    // 0x000198: 0x59A00D800017011B Ffma
    temp_54 = fma(temp_49, temp_49, temp_52);
    // 0x0001A8: 0x508000000057161A Mufu
    temp_55 = inversesqrt(temp_53);
    // 0x0001B0: 0x5C68100001A71818 Fmul
    temp_56 = temp_40 * temp_55;
    // 0x0001B8: 0xE043FF8B80C7FF16 Ipa
    temp_57 = in_attr3.z;
    // 0x0001C8: 0x5C68100001A71919 Fmul
    temp_58 = temp_42 * temp_55;
    // 0x0001D0: 0x5C68100001A71010 Fmul
    temp_59 = temp_45 * temp_55;
    // 0x0001D8: 0xF0F0000034370000 Depbar
    // 0x0001E8: 0x5C68100000970915 Fmul
    temp_60 = temp_22 * temp_22;
    // 0x0001F0: 0x49A0041407C71212 Ffma
    temp_61 = fma(temp_24, fp_c5.data[31].x, temp_21);
    // 0x0001F8: 0x49A0049407C71313 Ffma
    temp_62 = fma(temp_25, fp_c5.data[31].x, temp_22);
    // 0x000208: 0x5C68100001171109 Fmul
    temp_63 = temp_41 * temp_41;
    // 0x000210: 0x4BB1839406070307 Fsetp
    temp_64 = temp_30 < fp_c5.data[24].x;
    // 0x000218: 0x59A00A8000870815 Ffma
    temp_65 = fma(temp_21, temp_21, temp_60);
    // 0x000228: 0xE043FF8880C7FF08 Ipa
    temp_66 = in_attr0.z;
    // 0x000230: 0x5C68100001271214 Fmul
    temp_67 = temp_61 * temp_61;
    // 0x000238: 0x59A0048000E70E09 Ffma
    temp_68 = fma(temp_43, temp_43, temp_63);
    // 0x000248: 0x385D103F80071515 Fadd
    temp_69 = 0.0 - temp_65;
    temp_70 = temp_69 + 1.0;
    temp_71 = clamp(temp_70, 0.0, 1.0);
    // 0x000250: 0x59A00A0001371314 Ffma
    temp_72 = fma(temp_62, temp_62, temp_67);
    // 0x000258: 0x5080000000871515 Mufu
    temp_73 = sqrt(temp_71);
    // 0x000268: 0x59A0048000A70A09 Ffma
    temp_74 = fma(temp_46, temp_46, temp_68);
    // 0x000270: 0x5080000000570917 Mufu
    temp_75 = inversesqrt(temp_74);
    // 0x000278: 0x59A00A0001571514 Ffma
    temp_76 = fma(temp_73, temp_73, temp_72);
    // 0x000288: 0x5080000000571414 Mufu
    temp_77 = inversesqrt(temp_76);
    // 0x000290: 0x5C68100001771111 Fmul
    temp_78 = temp_41 * temp_75;
    // 0x000298: 0x5C68100001770E09 Fmul
    temp_79 = temp_43 * temp_75;
    // 0x0002A8: 0x5C68100001770A17 Fmul
    temp_80 = temp_46 * temp_75;
    // 0x0002B0: 0x5C6810000217210E Fmul
    temp_81 = temp_47 * temp_47;
    // 0x0002B8: 0x59A00D800087081C Ffma
    temp_82 = fma(temp_66, temp_66, temp_54);
    // 0x0002C8: 0x5080000000571C27 Mufu
    temp_83 = inversesqrt(temp_82);
    // 0x0002D0: 0x5C68100001471313 Fmul
    temp_84 = temp_62 * temp_77;
    // 0x0002D8: 0x5C68100001471212 Fmul
    temp_85 = temp_61 * temp_77;
    // 0x0002E8: 0x5C68100001471514 Fmul
    temp_86 = temp_73 * temp_77;
    // 0x0002F0: 0x5C68100001871318 Fmul
    temp_87 = temp_84 * temp_56;
    // 0x0002F8: 0x5C6810000197131B Fmul
    temp_88 = temp_84 * temp_58;
    // 0x000308: 0x5C68100001071310 Fmul
    temp_89 = temp_84 * temp_59;
    // 0x000310: 0x5C68100002770202 Fmul
    temp_90 = temp_44 * temp_83;
    // 0x000318: 0x5C6810000277010A Fmul
    temp_91 = temp_49 * temp_83;
    // 0x000328: 0x5C68100002770801 Fmul
    temp_92 = temp_66 * temp_83;
    // 0x000330: 0x59A00C0001171211 Ffma
    temp_93 = fma(temp_85, temp_78, temp_87);
    // 0x000338: 0x59A00D8000971209 Ffma
    temp_94 = fma(temp_85, temp_79, temp_88);
    // 0x000348: 0x59A0080001771217 Ffma
    temp_95 = fma(temp_85, temp_80, temp_89);
    // 0x000350: 0x59A0070002072008 Ffma
    temp_96 = fma(temp_48, temp_48, temp_81);
    // 0x000358: 0x59A0088000271411 Ffma
    temp_97 = fma(temp_86, temp_90, temp_93);
    // 0x000368: 0x59A0048000A71409 Ffma
    temp_98 = fma(temp_86, temp_91, temp_94);
    // 0x000370: 0x59A00B8000171417 Ffma
    temp_99 = fma(temp_86, temp_92, temp_95);
    // 0x000378: 0x59A004000167160A Ffma
    temp_100 = fma(temp_57, temp_57, temp_96);
    // 0x000388: 0x4C68101403070401 Fmul
    temp_101 = temp_27 * fp_c5.data[12].x;
    // 0x000390: 0x5080000000570A13 Mufu
    temp_102 = inversesqrt(temp_100);
    // 0x000398: 0x5C68100001171102 Fmul
    temp_103 = temp_97 * temp_97;
    // 0x0003A8: 0x59A0010000970902 Ffma
    temp_104 = fma(temp_98, temp_98, temp_103);
    // 0x0003B0: 0x59A0010001771708 Ffma
    temp_105 = fma(temp_99, temp_99, temp_104);
    // 0x0003B8: 0x4C68101403170502 Fmul
    temp_106 = temp_28 * fp_c5.data[12].y;
    // 0x0003C8: 0x5080000000570808 Mufu
    temp_107 = inversesqrt(temp_105);
    // 0x0003D0: 0x5C69100001372121 Fmul
    temp_108 = 0.0 - temp_102;
    temp_109 = temp_47 * temp_108;
    // 0x0003D8: 0x5C69100001372020 Fmul
    temp_110 = 0.0 - temp_102;
    temp_111 = temp_48 * temp_110;
    // 0x0003E8: 0x5C69100001371616 Fmul
    temp_112 = 0.0 - temp_102;
    temp_113 = temp_57 * temp_112;
    // 0x0003F0: 0x5C6810000087110E Fmul
    temp_114 = temp_97 * temp_107;
    // 0x0003F8: 0x5C68100000870904 Fmul
    temp_115 = temp_98 * temp_107;
    // 0x000408: 0x5C68100000871712 Fmul
    temp_116 = temp_99 * temp_107;
    // 0x000410: 0xE24000000688000F Bra
    if (temp_64)
    {
        // 0x000418: 0x5C9807800FF70000 Mov
        // 0x000428: 0xE33000000007000F Kil
        discard;
    }
    // 0x000488: 0x4C58301805C72105 Fadd
    temp_117 = 0.0 - fp_c6.data[23].x;
    temp_118 = temp_109 + temp_117;
    // 0x000490: 0xE2900000B8000000 Ssy
    // 0x000498: 0x4C58301805D72008 Fadd
    temp_119 = 0.0 - fp_c6.data[23].y;
    temp_120 = temp_111 + temp_119;
    // 0x0004A8: 0x4C58301805E71609 Fadd
    temp_121 = 0.0 - fp_c6.data[23].z;
    temp_122 = temp_113 + temp_121;
    // 0x0004B0: 0xF0F0000034170000 Depbar
    // 0x0004B8: 0x4C6810180A072222 Fmul
    temp_123 = temp_32 * fp_c6.data[40].x;
    // 0x0004C8: 0x3868104180070614 Fmul
    temp_124 = temp_6 * 16.0;
    // 0x0004D0: 0x01040DF760C7F019 Mov32i
    // 0x0004D8: 0x5CA8148001470A14 F2f
    temp_125 = floor(temp_124);
    // 0x0004E8: 0x5C6810000057050A Fmul
    temp_126 = temp_118 * temp_118;
    // 0x0004F0: 0x3868104110070F15 Fmul
    temp_127 = temp_7 * 9.0;
    // 0x0004F8: 0x0103F0000007F02E Mov32i
    // 0x000508: 0x5CA8148001570A15 F2f
    temp_128 = floor(temp_127);
    // 0x000510: 0x4C68101403270707 Fmul
    temp_129 = temp_29 * fp_c5.data[12].z;
    // 0x000518: 0x5C68100000D70B0D Fmul
    temp_130 = temp_34 * temp_35;
    // 0x000528: 0x59A005000087080A Ffma
    temp_131 = fma(temp_120, temp_120, temp_126);
    // 0x000530: 0x5C9807800FF70027 Mov
    // 0x000538: 0x385D103F80070D0D Fadd
    temp_132 = 0.0 - temp_130;
    temp_133 = temp_132 + 1.0;
    temp_134 = clamp(temp_133, 0.0, 1.0);
    // 0x000548: 0x59A005000097090A Ffma
    temp_135 = fma(temp_122, temp_122, temp_131);
    // 0x000550: 0x5080000000570A0A Mufu
    temp_136 = inversesqrt(temp_135);
    // 0x000558: 0x32A00A4180071515 Ffma
    temp_137 = fma(temp_128, 16.0, temp_125);
    // 0x000568: 0x5CB0118001570A2F F2i
    temp_138 = trunc(temp_137);
    temp_139 = max(temp_138, 0.0);
    temp_140 = uint(temp_139);
    // 0x000570: 0x5C68100000A70510 Fmul
    temp_141 = temp_118 * temp_136;
    // 0x000578: 0x5C68100000A70811 Fmul
    temp_142 = temp_120 * temp_136;
    // 0x000588: 0x5C68100000A70909 Fmul
    temp_143 = temp_122 * temp_136;
    // 0x000590: 0x386013BF80072205 Fmnmx
    temp_144 = min(temp_123, 1.0);
    // 0x000598: 0x3848000000872F2D Shl
    temp_145 = int(temp_140) << 8;
    // 0x0005A8: 0x5C68100001072113 Fmul
    temp_146 = temp_109 * temp_141;
    // 0x0005B0: 0xEF94008200472D2D Ldc
    temp_147 = temp_145 + 0x2004;
    temp_148 = uint(temp_147) >> 2;
    temp_149 = temp_148 >> 2;
    temp_150 = int(temp_148) & 3;
    temp_151 = fp_c8.data[int(temp_149)][temp_150];
    // 0x0005B8: 0x4C69101805C71006 Fmul
    temp_152 = 0.0 - fp_c6.data[23].x;
    temp_153 = temp_141 * temp_152;
    // 0x0005C8: 0x5C68100001070E0A Fmul
    temp_154 = temp_114 * temp_141;
    // 0x0005D0: 0x4C58301407870110 Fadd
    temp_155 = 0.0 - fp_c5.data[30].x;
    temp_156 = temp_101 + temp_155;
    // 0x0005D8: 0x4C60178400170505 Fmnmx
    temp_157 = max(temp_144, fp_c1.data[0].y);
    // 0x0005E8: 0x59A0098001172013 Ffma
    temp_158 = fma(temp_111, temp_142, temp_146);
    // 0x0005F0: 0x49A1031805D71108 Ffma
    temp_159 = 0.0 - fp_c6.data[23].y;
    temp_160 = fma(temp_142, temp_159, temp_153);
    // 0x0005F8: 0x59A005000117040F Ffma
    temp_161 = fma(temp_115, temp_142, temp_154);
    // 0x000608: 0x4C69101805C70E11 Fmul
    temp_162 = 0.0 - fp_c6.data[23].x;
    temp_163 = temp_114 * temp_162;
    // 0x000610: 0x51A4028400170531 Ffma
    temp_164 = fma(temp_157, temp_157, fp_c1.data[0].y);
    temp_165 = clamp(temp_164, 0.0, 1.0);
    // 0x000618: 0x32A0173F0007052E Ffma
    temp_166 = fma(temp_157, 0.5, 0.5);
    // 0x000628: 0x59A4098000971613 Ffma
    temp_167 = fma(temp_113, temp_143, temp_158);
    temp_168 = clamp(temp_167, 0.0, 1.0);
    // 0x000630: 0x49A5041805E70908 Ffma
    temp_169 = 0.0 - fp_c6.data[23].z;
    temp_170 = fma(temp_143, temp_169, temp_160);
    temp_171 = clamp(temp_170, 0.0, 1.0);
    // 0x000638: 0x5C68100003173130 Fmul
    temp_172 = temp_165 * temp_165;
    // 0x000648: 0x5C68120002E72E2E Fmul
    temp_173 = temp_166 * 0.5;
    temp_174 = temp_173 * temp_166;
    // 0x000650: 0x49A20C8400071306 Ffma
    temp_175 = fma(temp_168, fp_c1.data[0].x, -6.98316002);
    // 0x000658: 0x5C68100000671306 Fmul
    temp_176 = temp_168 * temp_175;
    // 0x000668: 0x59A4078000971213 Ffma
    temp_177 = fma(temp_116, temp_143, temp_161);
    temp_178 = clamp(temp_177, 0.0, 1.0);
    // 0x000670: 0x49A20C8400070809 Ffma
    temp_179 = fma(temp_171, fp_c1.data[0].x, -6.98316002);
    // 0x000678: 0x5C9000800067000F Rro
    // 0x000688: 0x59A2098003071306 Ffma
    temp_180 = 0.0 - temp_178;
    temp_181 = fma(temp_178, temp_172, temp_180);
    // 0x000690: 0x5080000000270F0F Mufu
    temp_182 = exp2(temp_176);
    // 0x000698: 0x5C6810000097080A Fmul
    temp_183 = temp_171 * temp_179;
    // 0x0006A8: 0x5C68100002170E09 Fmul
    temp_184 = temp_114 * temp_109;
    // 0x0006B0: 0x51A0030400271314 Ffma
    temp_185 = fma(temp_178, temp_181, fp_c1.data[0].z);
    // 0x0006B8: 0x51A0081407872306 Ffma
    temp_186 = fma(temp_33, temp_156, fp_c5.data[30].x);
    // 0x0006C8: 0x5080000000471414 Mufu
    temp_187 = 1.0 / temp_185;
    // 0x0006D0: 0x49A1089805D70410 Ffma
    temp_188 = 0.0 - fp_c6.data[23].y;
    temp_189 = fma(temp_115, temp_188, temp_163);
    // 0x0006D8: 0x59A0048002070408 Ffma
    temp_190 = fma(temp_115, temp_111, temp_184);
    // 0x0006E8: 0x4C58301407870711 Fadd
    temp_191 = 0.0 - fp_c5.data[30].x;
    temp_192 = temp_129 + temp_191;
    // 0x0006F0: 0x4C58301407870209 Fadd
    temp_193 = 0.0 - fp_c5.data[30].x;
    temp_194 = temp_106 + temp_193;
    // 0x0006F8: 0x59A1078000670F13 Ffma
    temp_195 = 0.0 - temp_186;
    temp_196 = fma(temp_182, temp_195, temp_182);
    // 0x000708: 0x49A5081805E71210 Ffma
    temp_197 = 0.0 - fp_c6.data[23].z;
    temp_198 = fma(temp_116, temp_197, temp_189);
    temp_199 = clamp(temp_198, 0.0, 1.0);
    // 0x000710: 0x59A4040001671208 Ffma
    temp_200 = fma(temp_116, temp_113, temp_190);
    temp_201 = clamp(temp_200, 0.0, 1.0);
    // 0x000718: 0x5B6603800FF72D07 Isetp
    temp_202 = floatBitsToUint(temp_151) <= 0u;
    // 0x000728: 0x51A0049407872309 Ffma
    temp_203 = fma(temp_33, temp_194, fp_c5.data[30].x);
    // 0x000730: 0x5C58100001370618 Fadd
    temp_204 = temp_186 + temp_196;
    // 0x000738: 0x4C68101801471017 Fmul
    temp_205 = temp_199 * fp_c6.data[5].x;
    // 0x000748: 0x59A1040002E70815 Ffma
    temp_206 = 0.0 - temp_174;
    temp_207 = fma(temp_201, temp_206, temp_201);
    // 0x000750: 0x5C90008000A70013 Rro
    // 0x000758: 0x51A008940787230A Ffma
    temp_208 = fma(temp_33, temp_192, fp_c5.data[30].x);
    // 0x000768: 0x5080000000271313 Mufu
    temp_209 = exp2(temp_183);
    // 0x000770: 0x59A1080002E71011 Ffma
    temp_210 = 0.0 - temp_174;
    temp_211 = fma(temp_199, temp_210, temp_199);
    // 0x000778: 0x1E23EA2F98371719 Fmul32i
    temp_212 = temp_205 * 0.318309873;
    // 0x000788: 0x4C68101406271817 Fmul
    temp_213 = temp_204 * fp_c5.data[24].z;
    // 0x000790: 0x5C58100001572E18 Fadd
    temp_214 = temp_174 + temp_207;
    // 0x000798: 0x4C6810180157101A Fmul
    temp_215 = temp_199 * fp_c6.data[5].y;
    // 0x0007A8: 0x5080000000471818 Mufu
    temp_216 = 1.0 / temp_214;
    // 0x0007B0: 0x59A1078000A70F15 Ffma
    temp_217 = 0.0 - temp_208;
    temp_218 = fma(temp_182, temp_217, temp_182);
    // 0x0007B8: 0x4C6810180167101B Fmul
    temp_219 = temp_199 * fp_c6.data[5].z;
    // 0x0007C8: 0x59A10C800197170B Ffma
    temp_220 = 0.0 - temp_212;
    temp_221 = fma(temp_213, temp_220, temp_212);
    // 0x0007D0: 0x5C58100001172E19 Fadd
    temp_222 = temp_174 + temp_211;
    // 0x0007D8: 0xEF5400000007FF0B Stl
    local_memory[0] = floatBitsToUint(temp_221);
    // 0x0007E8: 0x59A1078000970F17 Ffma
    temp_223 = 0.0 - temp_203;
    temp_224 = fma(temp_182, temp_223, temp_182);
    // 0x0007F0: 0x5080000000471919 Mufu
    temp_225 = 1.0 / temp_222;
    // 0x0007F8: 0x5C68100001473111 Fmul
    temp_226 = temp_165 * temp_187;
    // 0x000808: 0x59A109800097130F Ffma
    temp_227 = 0.0 - temp_203;
    temp_228 = fma(temp_209, temp_227, temp_209);
    // 0x000810: 0x1E23EA2F98371A1A Fmul32i
    temp_229 = temp_215 * 0.318309873;
    // 0x000818: 0x1E23EA2F98371B1B Fmul32i
    temp_230 = temp_219 * 0.318309873;
    // 0x000828: 0x5C68100000870E2B Fmul
    temp_231 = temp_114 * temp_201;
    // 0x000830: 0x3868103F0007182C Fmul
    temp_232 = temp_216 * 0.5;
    // 0x000838: 0x5C58100001770917 Fadd
    temp_233 = temp_203 + temp_224;
    // 0x000848: 0x5C68100001171111 Fmul
    temp_234 = temp_226 * temp_226;
    // 0x000850: 0x59A109800067130B Ffma
    temp_235 = 0.0 - temp_186;
    temp_236 = fma(temp_209, temp_235, temp_209);
    // 0x000858: 0x59A1098000A71313 Ffma
    temp_237 = 0.0 - temp_208;
    temp_238 = fma(temp_209, temp_237, temp_209);
    // 0x000868: 0x5C58100001570A18 Fadd
    temp_239 = temp_208 + temp_218;
    // 0x000870: 0x5C58100000F7090F Fadd
    temp_240 = temp_203 + temp_228;
    // 0x000878: 0x5C68100001972C14 Fmul
    temp_241 = temp_232 * temp_225;
    // 0x000888: 0x4C68101406271717 Fmul
    temp_242 = temp_233 * fp_c5.data[24].z;
    // 0x000890: 0x5C58100000B70615 Fadd
    temp_243 = temp_186 + temp_236;
    // 0x000898: 0x5C58100001370A13 Fadd
    temp_244 = temp_208 + temp_238;
    // 0x0008A8: 0x4C68101406271818 Fmul
    temp_245 = temp_239 * fp_c5.data[24].z;
    // 0x0008B0: 0x32A210C000072B2B Ffma
    temp_246 = 0.0 - temp_109;
    temp_247 = fma(temp_231, 2.0, temp_246);
    // 0x0008B8: 0x5C68100001471111 Fmul
    temp_248 = temp_234 * temp_241;
    // 0x0008C8: 0x59A10D0001A7170B Ffma
    temp_249 = 0.0 - temp_229;
    temp_250 = fma(temp_242, temp_249, temp_229);
    // 0x0008D0: 0x4C68101406271515 Fmul
    temp_251 = temp_243 * fp_c5.data[24].z;
    // 0x0008D8: 0x4C68101406270F14 Fmul
    temp_252 = temp_240 * fp_c5.data[24].z;
    // 0x0008E8: 0x4C68101406271313 Fmul
    temp_253 = temp_244 * fp_c5.data[24].z;
    // 0x0008F0: 0x5C68100000871217 Fmul
    temp_254 = temp_116 * temp_201;
    // 0x0008F8: 0x5C6810000117101A Fmul
    temp_255 = temp_199 * temp_248;
    // 0x000908: 0x5C68100000870411 Fmul
    temp_256 = temp_115 * temp_201;
    // 0x000910: 0x49A2069402C70D10 Ffma
    temp_257 = 0.0 - temp_134;
    temp_258 = fma(temp_134, fp_c5.data[11].x, temp_257);
    // 0x000918: 0x4C68101801471515 Fmul
    temp_259 = temp_251 * fp_c6.data[5].x;
    // 0x000928: 0x4C68101801571414 Fmul
    temp_260 = temp_252 * fp_c6.data[5].y;
    // 0x000930: 0x4C68101801671313 Fmul
    temp_261 = temp_253 * fp_c6.data[5].z;
    // 0x000938: 0x59A10D8001B7180F Ffma
    temp_262 = 0.0 - temp_230;
    temp_263 = fma(temp_245, temp_262, temp_230);
    // 0x000948: 0x32A2104000071128 Ffma
    temp_264 = 0.0 - temp_111;
    temp_265 = fma(temp_256, 2.0, temp_264);
    // 0x000950: 0x49A2069402D70D11 Ffma
    temp_266 = 0.0 - temp_134;
    temp_267 = fma(temp_134, fp_c5.data[11].y, temp_266);
    // 0x000958: 0x49A2069402E70D0D Ffma
    temp_268 = 0.0 - temp_134;
    temp_269 = fma(temp_134, fp_c5.data[11].z, temp_268);
    // 0x000968: 0x5C68100001A71524 Fmul
    temp_270 = temp_259 * temp_255;
    // 0x000970: 0x5C68100001A71425 Fmul
    temp_271 = temp_260 * temp_255;
    // 0x000978: 0x5C68100001A71326 Fmul
    temp_272 = temp_261 * temp_255;
    // 0x000988: 0x3858103F80071010 Fadd
    temp_273 = temp_258 + 1.0;
    // 0x000990: 0x3858103F80071111 Fadd
    temp_274 = temp_267 + 1.0;
    // 0x000998: 0x3858103F80070D0D Fadd
    temp_275 = temp_269 + 1.0;
    // 0x0009A8: 0x32A20B4000071717 Ffma
    temp_276 = 0.0 - temp_113;
    temp_277 = fma(temp_254, 2.0, temp_276);
    // 0x0009B0: 0x5C9807800FF7001B Mov
    // 0x0009B8: 0x5C9807800FF70013 Mov
    // 0x0009C8: 0x5C9807800FF70018 Mov
    // 0x0009D0: 0x5C9807800FF70019 Mov
    // 0x0009D8: 0x5C9807800FF7001A Mov
    // 0x0009E8: 0x59A408000107011C Ffma
    temp_278 = fma(temp_101, temp_273, temp_273);
    temp_279 = clamp(temp_278, 0.0, 1.0);
    // 0x0009F0: 0x59A408800117021D Ffma
    temp_280 = fma(temp_106, temp_274, temp_274);
    temp_281 = clamp(temp_280, 0.0, 1.0);
    // 0x0009F8: 0x59A4068000D70722 Ffma
    temp_282 = fma(temp_129, temp_275, temp_275);
    temp_283 = clamp(temp_282, 0.0, 1.0);
    // 0x000A08: 0x1E23E22F98372424 Fmul32i
    temp_284 = temp_270 * 0.159154937;
    // 0x000A10: 0x1E23E22F98372525 Fmul32i
    temp_285 = temp_271 * 0.159154937;
    // 0x000A18: 0x1E23E22F98372626 Fmul32i
    temp_286 = temp_272 * 0.159154937;
    // 0x000A28: 0xF0F800000000000F Sync
    temp_287 = 0.0;
    temp_288 = 0.0;
    temp_289 = 0.0;
    temp_290 = 0.0;
    temp_291 = 0.0;
    temp_292 = 0.0;
    temp_293 = 0.0;
    temp_294 = 0.0;
    temp_295 = 0.0;
    temp_296 = 0.0;
    temp_297 = 0.0;
    temp_298 = 0.0;
    if (!temp_202)
    {
        // 0x000A30: 0x5C9807800FF7002A Mov
        temp_299 = 0;
        do
        {
            // 0x000A38: 0x5C18020002A72F29 Iscadd
            temp_301 = int(temp_140) << 4;
            temp_302 = temp_301 + temp_299;
            // 0x000A48: 0xE003FF87CFF7FF32 Ipa
            // 0x000A50: 0x1C00000000172A2A Iadd32i
            temp_303 = temp_299 + 1;
            // 0x000A58: 0xE003FF87CFF7FF34 Ipa
            // 0x000A68: 0x3848000000472929 Shl
            temp_304 = temp_302 << 4;
            // 0x000A70: 0xE003FF87CFF7FF33 Ipa
            // 0x000A78: 0x5B6C038002D72A0F Isetp
            temp_300 = uint(temp_303) >= floatBitsToUint(temp_151);
            // 0x000A88: 0xE290000057000000 Ssy
            // 0x000A90: 0xEF94008200072929 Ldc
            temp_305 = temp_304 + 0x2000;
            temp_306 = uint(temp_305) >> 2;
            temp_307 = temp_306 >> 2;
            temp_308 = int(temp_306) & 3;
            temp_309 = fp_c8.data[int(temp_307)][temp_308];
            // 0x000A98: 0x5080000000473232 Mufu
            // 0x000AA8: 0x5080000000473434 Mufu
            // 0x000AB0: 0x5080000000473333 Mufu
            // 0x000AB8: 0xE043FF8D0327FF32 Ipa
            temp_310 = in_attr5.x;
            // 0x000AC8: 0xE043FF8D4347FF34 Ipa
            temp_311 = in_attr5.y;
            // 0x000AD0: 0xE043FF8D8337FF33 Ipa
            temp_312 = in_attr5.z;
            // 0x000AD8: 0x3848000000672929 Shl
            temp_313 = floatBitsToInt(temp_309) << 6;
            // 0x000AE8: 0xEF9500800107290C Ldc
            temp_314 = temp_313 + 16;
            temp_315 = uint(temp_314) >> 2;
            temp_316 = temp_315 >> 2;
            temp_317 = int(temp_315) & 3;
            temp_318 = fp_c8.data[int(temp_316)][temp_317];
            temp_319 = int(temp_315) + 1;
            temp_320 = uint(temp_319) >> 2;
            temp_321 = temp_319 & 3;
            temp_322 = fp_c8.data[int(temp_320)][temp_321];
            // 0x000AF0: 0xEF95008001872910 Ldc
            temp_323 = temp_313 + 24;
            temp_324 = uint(temp_323) >> 2;
            temp_325 = temp_324 >> 2;
            temp_326 = int(temp_324) & 3;
            temp_327 = fp_c8.data[int(temp_325)][temp_326];
            temp_328 = int(temp_324) + 1;
            temp_329 = uint(temp_328) >> 2;
            temp_330 = temp_328 & 3;
            temp_331 = fp_c8.data[int(temp_329)][temp_330];
            // 0x000AF8: 0xEF95008002072914 Ldc
            temp_332 = temp_313 + 32;
            temp_333 = uint(temp_332) >> 2;
            temp_334 = temp_333 >> 2;
            temp_335 = int(temp_333) & 3;
            temp_336 = fp_c8.data[int(temp_334)][temp_335];
            temp_337 = int(temp_333) + 1;
            temp_338 = uint(temp_337) >> 2;
            temp_339 = temp_337 & 3;
            temp_340 = fp_c8.data[int(temp_338)][temp_339];
            // 0x000B08: 0x5C58300003270C32 Fadd
            temp_341 = 0.0 - temp_310;
            temp_342 = temp_318 + temp_341;
            // 0x000B10: 0x5C58300003470D35 Fadd
            temp_343 = 0.0 - temp_311;
            temp_344 = temp_322 + temp_343;
            // 0x000B18: 0x5C58300003371033 Fadd
            temp_345 = 0.0 - temp_312;
            temp_346 = temp_327 + temp_345;
            // 0x000B28: 0x5C68100003273234 Fmul
            temp_347 = temp_342 * temp_342;
            // 0x000B30: 0x59A1198003371111 Ffma
            temp_348 = 0.0 - temp_346;
            temp_349 = fma(temp_331, temp_348, temp_346);
            // 0x000B38: 0x59A01A0003573534 Ffma
            temp_350 = fma(temp_344, temp_344, temp_347);
            // 0x000B48: 0x59A01A0001171136 Ffma
            temp_351 = fma(temp_349, temp_349, temp_350);
            // 0x000B50: 0x508000000057360C Mufu
            temp_352 = inversesqrt(temp_351);
            // 0x000B58: 0x5080000000873636 Mufu
            temp_353 = sqrt(temp_351);
            // 0x000B68: 0x5C68100000C7320D Fmul
            temp_354 = temp_342 * temp_352;
            // 0x000B70: 0x5C68100000C73537 Fmul
            temp_355 = temp_344 * temp_352;
            // 0x000B78: 0x5C69100001470D0D Fmul
            temp_356 = 0.0 - temp_336;
            temp_357 = temp_354 * temp_356;
            // 0x000B88: 0x5C68100000C71114 Fmul
            temp_358 = temp_349 * temp_352;
            // 0x000B90: 0xEF95008003872910 Ldc
            temp_359 = temp_313 + 56;
            temp_360 = uint(temp_359) >> 2;
            temp_361 = temp_360 >> 2;
            temp_362 = int(temp_360) & 3;
            temp_363 = fp_c8.data[int(temp_361)][temp_362];
            temp_364 = int(temp_360) + 1;
            temp_365 = uint(temp_364) >> 2;
            temp_366 = temp_364 & 3;
            temp_367 = fp_c8.data[int(temp_365)][temp_366];
            // 0x000B98: 0x59A1068001573737 Ffma
            temp_368 = 0.0 - temp_340;
            temp_369 = fma(temp_355, temp_368, temp_357);
            // 0x000BA8: 0xEF94008002872915 Ldc
            temp_370 = temp_313 + 40;
            temp_371 = uint(temp_370) >> 2;
            temp_372 = temp_371 >> 2;
            temp_373 = int(temp_371) & 3;
            temp_374 = fp_c8.data[int(temp_372)][temp_373];
            // 0x000BB0: 0xEF9500800307290C Ldc
            temp_375 = temp_313 + 48;
            temp_376 = uint(temp_375) >> 2;
            temp_377 = temp_376 >> 2;
            temp_378 = int(temp_376) & 3;
            temp_379 = fp_c8.data[int(temp_377)][temp_378];
            temp_380 = int(temp_376) + 1;
            temp_381 = uint(temp_380) >> 2;
            temp_382 = temp_380 & 3;
            temp_383 = fp_c8.data[int(temp_381)][temp_382];
            // 0x000BB8: 0x59A11B8001571414 Ffma
            temp_384 = 0.0 - temp_374;
            temp_385 = fma(temp_358, temp_384, temp_369);
            // 0x000BC8: 0x59A4068003670C36 Ffma
            temp_386 = fma(temp_379, temp_353, temp_383);
            temp_387 = clamp(temp_386, 0.0, 1.0);
            // 0x000BD0: 0x010404000007F015 Mov32i
            // 0x000BD8: 0x59A4088001071410 Ffma
            temp_388 = fma(temp_385, temp_363, temp_367);
            temp_389 = clamp(temp_388, 0.0, 1.0);
            // 0x000BE8: 0x5C68100003673611 Fmul
            temp_390 = temp_387 * temp_387;
            // 0x000BF0: 0x33A00AC000073614 Ffma
            temp_391 = fma(temp_387, -2.0, 3.0);
            // 0x000BF8: 0x33A00AC000071015 Ffma
            temp_392 = fma(temp_389, -2.0, 3.0);
            // 0x000C08: 0x5C68100001071010 Fmul
            temp_393 = temp_389 * temp_389;
            // 0x000C10: 0x5C68100001171411 Fmul
            temp_394 = temp_391 * temp_390;
            // 0x000C18: 0x39585042F0073314 Fadd
            temp_395 = abs(temp_346);
            temp_396 = temp_395 + -120.0;
            // 0x000C28: 0x5C68100001571010 Fmul
            temp_397 = temp_393 * temp_392;
            // 0x000C30: 0x5C68100001171010 Fmul
            temp_398 = temp_397 * temp_394;
            // 0x000C38: 0x1EABD4CCCCD71411 Fmul32i
            temp_399 = temp_396 * -0.0500000007;
            temp_400 = clamp(temp_399, 0.0, 1.0);
            // 0x000C48: 0x5C68100001071110 Fmul
            temp_401 = temp_400 * temp_398;
            // 0x000C50: 0x36247F9000171111 Xmad
            temp_402 = floatBitsToUint(temp_400) >> 16;
            temp_403 = int(temp_402) << 16;
            // 0x000C58: 0x5BB383800FF71007 Fsetp
            temp_404 = temp_401 <= 0.0;
            // 0x000C68: 0x7A05083C0F00FF11 Hadd2
            temp_299 = temp_303;
            temp_405 = uint(temp_403);
            temp_406 = temp_287;
            temp_407 = temp_288;
            temp_408 = temp_289;
            temp_409 = temp_290;
            temp_410 = temp_291;
            temp_411 = temp_292;
            if (temp_404)
            {
                temp_412 = unpackHalf2x16(uint(temp_403)).y;
                temp_413 = packHalf2x16(vec2(1.0, temp_412));
                temp_405 = temp_413;
            }
            // 0x000C70: 0x5D2103902FF71107 Hsetp2
            temp_414 = unpackHalf2x16(temp_405).x;
            temp_415 = temp_414 == 0.0;
            // 0x000C78: 0xF0F800000008000F Sync
            if (temp_415)
            {
                // 0x000C88: 0x5080000000470C0C Mufu
                temp_416 = 1.0 / temp_379;
                // 0x000C90: 0xEF94008002C72936 Ldc
                temp_417 = temp_313 + 44;
                temp_418 = uint(temp_417) >> 2;
                temp_419 = temp_418 >> 2;
                temp_420 = int(temp_418) & 3;
                temp_421 = fp_c8.data[int(temp_419)][temp_420];
                // 0x000C98: 0xEF94008000872937 Ldc
                temp_422 = temp_313 + 8;
                temp_423 = uint(temp_422) >> 2;
                temp_424 = temp_423 >> 2;
                temp_425 = int(temp_423) & 3;
                temp_426 = fp_c8.data[int(temp_424)][temp_425];
                // 0x000CA8: 0x5C69100000C70D0D Fmul
                temp_427 = 0.0 - temp_416;
                temp_428 = temp_383 * temp_427;
                // 0x000CB0: 0x5C60138000D73333 Fmnmx
                temp_429 = min(temp_346, temp_428);
                // 0x000CB8: 0x5C61178003370D33 Fmnmx
                temp_430 = 0.0 - temp_428;
                temp_431 = max(temp_430, temp_429);
                // 0x000CC8: 0x59A01A0003373315 Ffma
                temp_432 = fma(temp_431, temp_431, temp_350);
                // 0x000CD0: 0x508000000057150C Mufu
                temp_433 = inversesqrt(temp_432);
                // 0x000CD8: 0x5080000000871515 Mufu
                temp_434 = sqrt(temp_432);
                // 0x000CE8: 0x5C68100000C73211 Fmul
                temp_435 = temp_342 * temp_433;
                // 0x000CF0: 0x5080000000473636 Mufu
                temp_436 = 1.0 / temp_421;
                // 0x000CF8: 0x5C68100000C73535 Fmul
                temp_437 = temp_344 * temp_433;
                // 0x000D08: 0x5C68100000C73333 Fmul
                temp_438 = temp_431 * temp_433;
                // 0x000D10: 0x5C68100003771037 Fmul
                temp_439 = temp_401 * temp_426;
                // 0x000D18: 0x5C58100001172114 Fadd
                temp_440 = temp_109 + temp_435;
                // 0x000D28: 0x5C58100003572034 Fadd
                temp_441 = temp_111 + temp_437;
                // 0x000D30: 0x5C58100003371632 Fadd
                temp_442 = temp_113 + temp_438;
                // 0x000D38: 0x5C6810000147140C Fmul
                temp_443 = temp_440 * temp_440;
                // 0x000D48: 0x51A00A8400373615 Ffma
                temp_444 = fma(temp_436, temp_434, fp_c1.data[0].w);
                // 0x000D50: 0x5080000000471515 Mufu
                temp_445 = 1.0 / temp_444;
                // 0x000D58: 0x59A006000347340C Ffma
                temp_446 = fma(temp_441, temp_441, temp_443);
                // 0x000D68: 0x59A006000327320C Ffma
                temp_447 = fma(temp_442, temp_442, temp_446);
                // 0x000D70: 0x5080000000570C0C Mufu
                temp_448 = inversesqrt(temp_447);
                // 0x000D78: 0x1E23FB3333371515 Fmul32i
                temp_449 = temp_445 * 1.39999998;
                // 0x000D88: 0x5C68100001571515 Fmul
                temp_450 = temp_449 * temp_449;
                // 0x000D90: 0x5C68100000C71414 Fmul
                temp_451 = temp_440 * temp_448;
                // 0x000D98: 0x5C68100000C73434 Fmul
                temp_452 = temp_441 * temp_448;
                // 0x000DA8: 0x5C68100000C73232 Fmul
                temp_453 = temp_442 * temp_448;
                // 0x000DB0: 0xEF9500800007290C Ldc
                temp_454 = uint(temp_313) >> 2;
                temp_455 = temp_454 >> 2;
                temp_456 = int(temp_454) & 3;
                temp_457 = fp_c8.data[int(temp_455)][temp_456];
                temp_458 = int(temp_454) + 1;
                temp_459 = uint(temp_458) >> 2;
                temp_460 = temp_458 & 3;
                temp_461 = fp_c8.data[int(temp_459)][temp_460];
                // 0x000DB8: 0x5C68100001471129 Fmul
                temp_462 = temp_435 * temp_451;
                // 0x000DC8: 0x5C68100001470E14 Fmul
                temp_463 = temp_114 * temp_451;
                // 0x000DD0: 0x5C68100001170E11 Fmul
                temp_464 = temp_114 * temp_435;
                // 0x000DD8: 0x59A0148003473529 Ffma
                temp_465 = fma(temp_437, temp_452, temp_462);
                // 0x000DE8: 0x59A00A0003470414 Ffma
                temp_466 = fma(temp_115, temp_452, temp_463);
                // 0x000DF0: 0x01040DF760C7F034 Mov32i
                // 0x000DF8: 0x59A0088003570411 Ffma
                temp_467 = fma(temp_115, temp_437, temp_464);
                // 0x000E08: 0x59A4148003273329 Ffma
                temp_468 = fma(temp_438, temp_453, temp_465);
                temp_469 = clamp(temp_468, 0.0, 1.0);
                // 0x000E10: 0x59A40A0003271214 Ffma
                temp_470 = fma(temp_116, temp_453, temp_466);
                temp_471 = clamp(temp_470, 0.0, 1.0);
                // 0x000E18: 0x59A0088003371211 Ffma
                temp_472 = fma(temp_116, temp_438, temp_467);
                // 0x000E28: 0x49A21A0400072932 Ffma
                temp_473 = fma(temp_469, fp_c1.data[0].x, -6.98316002);
                // 0x000E30: 0x59A20A0001473033 Ffma
                temp_474 = 0.0 - temp_471;
                temp_475 = fma(temp_172, temp_471, temp_474);
                // 0x000E38: 0x59A10A8001571115 Ffma
                temp_476 = 0.0 - temp_450;
                temp_477 = fma(temp_472, temp_476, temp_450);
                // 0x000E48: 0x5C68100003272932 Fmul
                temp_478 = temp_469 * temp_473;
                // 0x000E50: 0x5C5C30000FF71129 Fadd
                temp_479 = temp_472 + -0.0;
                temp_480 = clamp(temp_479, 0.0, 1.0);
                // 0x000E58: 0x51A0198400271433 Ffma
                temp_481 = fma(temp_471, temp_475, fp_c1.data[0].z);
                // 0x000E68: 0x5C5C100001571115 Fadd
                temp_482 = temp_472 + temp_477;
                temp_483 = clamp(temp_482, 0.0, 1.0);
                // 0x000E70: 0x5080000000473333 Mufu
                temp_484 = 1.0 / temp_481;
                // 0x000E78: 0x5C90008003270032 Rro
                // 0x000E88: 0x59A1148002972E14 Ffma
                temp_485 = 0.0 - temp_480;
                temp_486 = fma(temp_174, temp_485, temp_480);
                // 0x000E90: 0x5080000000273232 Mufu
                temp_487 = exp2(temp_478);
                // 0x000E98: 0x5C58100001472E14 Fadd
                temp_488 = temp_174 + temp_486;
                // 0x000EA8: 0x5080000000471414 Mufu
                temp_489 = 1.0 / temp_488;
                // 0x000EB0: 0x5C68100000C7100C Fmul
                temp_490 = temp_401 * temp_457;
                // 0x000EB8: 0x5C68100000D7100D Fmul
                temp_491 = temp_401 * temp_461;
                // 0x000EC8: 0x5C68100003373133 Fmul
                temp_492 = temp_165 * temp_484;
                // 0x000ED0: 0x59A1190003270611 Ffma
                temp_493 = 0.0 - temp_487;
                temp_494 = fma(temp_186, temp_493, temp_487);
                // 0x000ED8: 0x59A1190003270910 Ffma
                temp_495 = 0.0 - temp_487;
                temp_496 = fma(temp_203, temp_495, temp_487);
                // 0x000EE8: 0x59A1190003270A32 Ffma
                temp_497 = 0.0 - temp_487;
                temp_498 = fma(temp_208, temp_497, temp_487);
                // 0x000EF0: 0x5C68100003373333 Fmul
                temp_499 = temp_492 * temp_492;
                // 0x000EF8: 0x5C58100001170611 Fadd
                temp_500 = temp_186 + temp_494;
                // 0x000F08: 0x5C58100001070910 Fadd
                temp_501 = temp_203 + temp_496;
                // 0x000F10: 0x5C68100001472C14 Fmul
                temp_502 = temp_232 * temp_489;
                // 0x000F18: 0x5C58100003270A32 Fadd
                temp_503 = temp_208 + temp_498;
                // 0x000F28: 0x4C68101406271111 Fmul
                temp_504 = temp_500 * fp_c5.data[24].z;
                // 0x000F30: 0x4C68101406271010 Fmul
                temp_505 = temp_501 * fp_c5.data[24].z;
                // 0x000F38: 0x5C68100001473314 Fmul
                temp_506 = temp_499 * temp_502;
                // 0x000F48: 0x4C68101406273232 Fmul
                temp_507 = temp_503 * fp_c5.data[24].z;
                // 0x000F50: 0x5C68100001170C11 Fmul
                temp_508 = temp_490 * temp_504;
                // 0x000F58: 0x5C68100001570C0C Fmul
                temp_509 = temp_490 * temp_483;
                // 0x000F68: 0x5C68100001472914 Fmul
                temp_510 = temp_480 * temp_506;
                // 0x000F70: 0x5C68100001070D29 Fmul
                temp_511 = temp_491 * temp_505;
                // 0x000F78: 0x5C68100003273732 Fmul
                temp_512 = temp_439 * temp_507;
                // 0x000F88: 0x5C68100001570D10 Fmul
                temp_513 = temp_491 * temp_483;
                // 0x000F90: 0x5C68100001573715 Fmul
                temp_514 = temp_439 * temp_483;
                // 0x000F98: 0x49A0138400570C27 Ffma
                temp_515 = fma(temp_509, fp_c1.data[1].y, temp_287);
                // 0x000FA8: 0x5C68100001471111 Fmul
                temp_516 = temp_508 * temp_510;
                // 0x000FB0: 0x5C68100001472929 Fmul
                temp_517 = temp_511 * temp_510;
                // 0x000FB8: 0x5C68100001473232 Fmul
                temp_518 = temp_512 * temp_510;
                // 0x000FC8: 0x49A00C8400571019 Ffma
                temp_519 = fma(temp_513, fp_c1.data[1].y, temp_288);
                // 0x000FD0: 0x49A00D040057151A Ffma
                temp_520 = fma(temp_514, fp_c1.data[1].y, temp_289);
                // 0x000FD8: 0x49A00D840047111B Ffma
                temp_521 = fma(temp_516, fp_c1.data[1].x, temp_290);
                // 0x000FE8: 0x49A0098400472913 Ffma
                temp_522 = fma(temp_517, fp_c1.data[1].x, temp_291);
                // 0x000FF0: 0x49A00C0400473218 Ffma
                temp_523 = fma(temp_518, fp_c1.data[1].x, temp_292);
                // 0x000FF8: 0xF0F800000007000F Sync
                temp_406 = temp_515;
                temp_407 = temp_519;
                temp_408 = temp_520;
                temp_409 = temp_521;
                temp_410 = temp_522;
                temp_411 = temp_523;
            }
            // 0x001008: 0xE2400FFFA289000F Bra
            temp_287 = temp_406;
            temp_288 = temp_407;
            temp_289 = temp_408;
            temp_290 = temp_409;
            temp_291 = temp_410;
            temp_292 = temp_411;
            temp_293 = temp_408;
            temp_294 = temp_407;
            temp_295 = temp_410;
            temp_296 = temp_409;
            temp_297 = temp_411;
            temp_298 = temp_406;
        }
        while (!temp_300);
        // 0x001010: 0xF0F800000007000F Sync
    }
    // 0x001018: 0x5C62578002872B0D Fmnmx
    temp_524 = abs(temp_247);
    temp_525 = abs(temp_265);
    temp_526 = max(temp_524, temp_525);
    // 0x001028: 0xE003FF87CFF7FF2C Ipa
    // 0x001030: 0x5C62578000470E0C Fmnmx
    temp_527 = abs(temp_114);
    temp_528 = abs(temp_115);
    temp_529 = max(temp_527, temp_528);
    // 0x001038: 0xEF4410000007FF32 Ldl
    temp_530 = uintBitsToFloat(local_memory[0]);
    // 0x001048: 0x010000000017F014 Mov32i
    // 0x001050: 0x3868104080070521 Fmul
    temp_531 = temp_157 * 4.0;
    // 0x001058: 0x4C98079C0207002F Mov
    // 0x001068: 0x5C60578000D7170D Fmnmx
    temp_532 = abs(temp_277);
    temp_533 = max(temp_532, temp_526);
    // 0x001070: 0x5080000000470D0D Mufu
    temp_534 = 1.0 / temp_533;
    // 0x001078: 0x5C60578000C7120C Fmnmx
    temp_535 = abs(temp_116);
    temp_536 = max(temp_535, temp_529);
    // 0x001088: 0x5080000000470C11 Mufu
    temp_537 = 1.0 / temp_536;
    // 0x001090: 0x5C68100000D72816 Fmul
    temp_538 = temp_265 * temp_534;
    // 0x001098: 0x5C68100000D72B15 Fmul
    temp_539 = temp_247 * temp_534;
    // 0x0010A8: 0x5080000000472C2C Mufu
    // 0x0010B0: 0x5C69100001171212 Fmul
    temp_540 = 0.0 - temp_537;
    temp_541 = temp_116 * temp_540;
    // 0x0010B8: 0x5C68100001170E10 Fmul
    temp_542 = temp_114 * temp_537;
    // 0x0010C8: 0x5C68100001170411 Fmul
    temp_543 = temp_115 * temp_537;
    // 0x0010D0: 0x5C69100000D71717 Fmul
    temp_544 = 0.0 - temp_534;
    temp_545 = temp_277 * temp_544;
    // 0x0010D8: 0xC0BA0163EFF7100C Tex
    temp_546 = textureLod(fp_t_tcb_16, vec3(temp_542, temp_543, temp_541), 0.0).xyz;
    temp_547 = temp_546.x;
    temp_548 = temp_546.y;
    temp_549 = temp_546.z;
    // 0x0010E8: 0x38681040E007052B Fmul
    temp_550 = temp_157 * 7.0;
    // 0x0010F0: 0xE043FF9202C7FF28 Ipa
    temp_551 = in_attr10.x;
    // 0x0010F8: 0x5C98078001270020 Mov
    // 0x001108: 0xE043FF9242C7FF29 Ipa
    temp_552 = in_attr10.y;
    // 0x001110: 0x3859103F80070505 Fadd
    temp_553 = 0.0 - temp_157;
    temp_554 = temp_553 + 1.0;
    // 0x001118: 0xE043FF9282C7FF2A Ipa
    temp_555 = in_attr10.z;
    // 0x001128: 0xC1BA0143F2B71414 Tex
    temp_556 = textureLod(fp_t_tcb_14, vec4(temp_539, temp_538, temp_545, float(1)), temp_550).xyz;
    temp_557 = temp_556.x;
    temp_558 = temp_556.y;
    temp_559 = temp_556.z;
    // 0x001130: 0xD9A2018202071010 Texs
    temp_560 = textureLod(fp_t_tcb_18, vec3(temp_542, temp_543, temp_541), temp_531).xyz;
    temp_561 = temp_560.x;
    temp_562 = temp_560.y;
    temp_563 = temp_560.z;
    // 0x001138: 0xDEBA0000C2F72828 TexB
    temp_564 = texture(fp_t_cb7_20, vec3(temp_551, temp_552, temp_555)).x;
    // 0x001148: 0x5C68100000570505 Fmul
    temp_565 = temp_554 * temp_554;
    // 0x001150: 0x49A007980A171A0F Ffma
    temp_566 = fma(temp_293, fp_c6.data[40].y, temp_263);
    // 0x001158: 0x3859103F8007081A Fadd
    temp_567 = 0.0 - temp_201;
    temp_568 = temp_567 + 1.0;
    // 0x001168: 0x49A005980A17190B Ffma
    temp_569 = fma(temp_294, fp_c6.data[40].y, temp_250);
    // 0x001170: 0x010410676C97F019 Mov32i
    // 0x001178: 0x49A012980A171325 Ffma
    temp_570 = fma(temp_295, fp_c6.data[40].y, temp_285);
    // 0x001188: 0x1E23E468DB970813 Fmul32i
    temp_571 = temp_201 * 0.193900004;
    // 0x001190: 0x5C68100000570512 Fmul
    temp_572 = temp_565 * temp_565;
    // 0x001198: 0x4C68101809071A05 Fmul
    temp_573 = temp_568 * fp_c6.data[36].x;
    // 0x0011A8: 0x49A012180A171B24 Ffma
    temp_574 = fma(temp_296, fp_c6.data[40].y, temp_284);
    // 0x0011B0: 0x5080400000370505 Mufu
    temp_575 = abs(temp_573);
    temp_576 = log2(temp_575);
    // 0x0011B8: 0x0103E2CD9E87F01B Mov32i
    // 0x0011C8: 0x49A00C8400A70817 Ffma
    temp_577 = fma(temp_201, fp_c1.data[2].z, 8.40400028);
    // 0x0011D0: 0x0103F0000007F019 Mov32i
    // 0x0011D8: 0x49A0098400671213 Ffma
    temp_578 = fma(temp_572, fp_c1.data[1].z, temp_571);
    // 0x0011E8: 0x49A013180A171826 Ffma
    temp_579 = fma(temp_297, fp_c6.data[40].y, temp_286);
    // 0x0011F0: 0x49A20D8400C71218 Ffma
    temp_580 = fma(temp_572, fp_c1.data[3].x, -0.168799996);
    // 0x0011F8: 0x51A00B8400B7081A Ffma
    temp_581 = fma(temp_201, temp_577, fp_c1.data[2].w);
    // 0x001208: 0x32A00CBF00070417 Ffma
    temp_582 = fma(temp_115, 0.5, 0.5);
    // 0x001210: 0x088BF05D63971319 Fadd32i
    temp_583 = temp_578 + -0.522800028;
    // 0x001218: 0xE04BFF9042C7FF13 Ipa
    temp_584 = in_attr8.y;
    temp_585 = clamp(temp_584, 0.0, 1.0);
    // 0x001228: 0x0104066978D7F01B Mov32i
    // 0x001230: 0x4C9807980B470021 Mov
    // 0x001238: 0x5C68100001871218 Fmul
    temp_586 = temp_572 * temp_580;
    // 0x001248: 0x51A00D0400D7081A Ffma
    temp_587 = fma(temp_201, temp_581, fp_c1.data[3].y);
    // 0x001250: 0x4C68101809170505 Fmul
    temp_588 = temp_576 * fp_c6.data[36].y;
    // 0x001258: 0x5C68100001970819 Fmul
    temp_589 = temp_201 * temp_583;
    // 0x001268: 0x49A20D840077121B Ffma
    temp_590 = fma(temp_572, fp_c1.data[1].w, -3.60299993);
    // 0x001270: 0xF0F0000034470000 Depbar
    // 0x001278: 0x51A210980B471E1E Ffma
    temp_591 = 0.0 - fp_c6.data[45].x;
    temp_592 = fma(temp_37, fp_c6.data[45].x, temp_591);
    // 0x001288: 0x51A210980B471F1F Ffma
    temp_593 = 0.0 - fp_c6.data[45].x;
    temp_594 = fma(temp_38, fp_c6.data[45].x, temp_593);
    // 0x001290: 0x5C60138001871A18 Fmnmx
    temp_595 = min(temp_587, temp_586);
    // 0x001298: 0x51A210980B470000 Ffma
    temp_596 = 0.0 - fp_c6.data[45].x;
    temp_597 = fma(temp_39, fp_c6.data[45].x, temp_596);
    // 0x0012A8: 0x5C9000800057001A Rro
    // 0x0012B0: 0x4C98079809770021 Mov
    // 0x0012B8: 0x5084000000271A1A Mufu
    temp_598 = exp2(temp_588);
    temp_599 = clamp(temp_598, 0.0, 1.0);
    // 0x0012C8: 0x51A00D840087122B Ffma
    temp_600 = fma(temp_572, temp_590, fp_c1.data[2].x);
    // 0x0012D0: 0x4C98079800870004 Mov
    // 0x0012D8: 0x4C98079800970008 Mov
    // 0x0012E8: 0x4C98079800A70029 Mov
    // 0x0012F0: 0x4C98079407F7002A Mov
    // 0x0012F8: 0x4C58101407E7211B Fadd
    temp_601 = fp_c6.data[37].w + fp_c5.data[31].z;
    // 0x001308: 0x59A00C8002B71219 Ffma
    temp_602 = fma(temp_572, temp_600, temp_589);
    // 0x001310: 0x4C59101800470405 Fadd
    temp_603 = 0.0 - fp_c6.data[2].x;
    temp_604 = temp_603 + fp_c6.data[1].x;
    // 0x001318: 0x4C59101800570804 Fadd
    temp_605 = 0.0 - fp_c6.data[2].y;
    temp_606 = temp_605 + fp_c6.data[1].y;
    // 0x001328: 0x4C59101800672908 Fadd
    temp_607 = 0.0 - fp_c6.data[2].z;
    temp_608 = temp_607 + fp_c6.data[1].z;
    // 0x001330: 0x010404000007F029 Mov32i
    // 0x001338: 0x5C5C30000FF71818 Fadd
    temp_609 = temp_595 + -0.0;
    temp_610 = clamp(temp_609, 0.0, 1.0);
    // 0x001348: 0x5C68100001B71A1A Fmul
    temp_611 = temp_599 * temp_601;
    // 0x001350: 0x386C10424807091B Fmul
    temp_612 = temp_203 * 50.0;
    temp_613 = clamp(temp_612, 0.0, 1.0);
    // 0x001358: 0x4C5C100400971919 Fadd
    temp_614 = temp_602 + fp_c1.data[2].y;
    temp_615 = clamp(temp_614, 0.0, 1.0);
    // 0x001368: 0x5C68100001371312 Fmul
    temp_616 = temp_585 * temp_585;
    // 0x001370: 0x33A014C000071329 Ffma
    temp_617 = fma(temp_585, -2.0, 3.0);
    // 0x001378: 0x51A00B9800870505 Ffma
    temp_618 = fma(temp_604, temp_582, fp_c6.data[2].x);
    // 0x001388: 0x51A00B9800970404 Ffma
    temp_619 = fma(temp_606, temp_582, fp_c6.data[2].y);
    // 0x001390: 0x51A00B9800A70808 Ffma
    temp_620 = fma(temp_608, temp_582, fp_c6.data[2].z);
    // 0x001398: 0x4C68101406272A21 Fmul
    temp_621 = fp_c5.data[31].w * fp_c5.data[24].z;
    // 0x0013A8: 0x4C68101808D71A13 Fmul
    temp_622 = temp_611 * fp_c6.data[35].y;
    // 0x0013B0: 0x4C68101808E71A17 Fmul
    temp_623 = temp_611 * fp_c6.data[35].z;
    // 0x0013B8: 0x5C68100001871B1B Fmul
    temp_624 = temp_613 * temp_610;
    // 0x0013C8: 0x5C58300001871930 Fadd
    temp_625 = 0.0 - temp_610;
    temp_626 = temp_615 + temp_625;
    // 0x0013D0: 0x4C68101808C71A1A Fmul
    temp_627 = temp_611 * fp_c6.data[35].x;
    // 0x0013D8: 0x5C68100002971212 Fmul
    temp_628 = temp_616 * temp_617;
    // 0x0013E8: 0x59A0128002171325 Ffma
    temp_629 = fma(temp_622, temp_621, temp_570);
    // 0x0013F0: 0x49A1099407F71318 Ffma
    temp_630 = 0.0 - fp_c5.data[31].w;
    temp_631 = fma(temp_622, temp_630, temp_622);
    // 0x0013F8: 0x49A10B9407F71719 Ffma
    temp_632 = 0.0 - fp_c5.data[31].w;
    temp_633 = fma(temp_623, temp_632, temp_623);
    // 0x001408: 0x59A00D8003070613 Ffma
    temp_634 = fma(temp_186, temp_626, temp_624);
    // 0x001410: 0xE043FF9002C7FF06 Ipa
    temp_635 = in_attr8.x;
    // 0x001418: 0x59A0120002171A24 Ffma
    temp_636 = fma(temp_627, temp_621, temp_574);
    // 0x001428: 0x49A10D1407F71A1A Ffma
    temp_637 = 0.0 - fp_c5.data[31].w;
    temp_638 = fma(temp_627, temp_637, temp_627);
    // 0x001430: 0x59A00D8003070909 Ffma
    temp_639 = fma(temp_203, temp_626, temp_624);
    // 0x001438: 0x5C58100001870B0B Fadd
    temp_640 = temp_569 + temp_631;
    // 0x001448: 0x59A00D8003070A0A Ffma
    temp_641 = fma(temp_208, temp_626, temp_624);
    // 0x001450: 0x4C68101406271313 Fmul
    temp_642 = temp_634 * fp_c5.data[24].z;
    // 0x001458: 0x5C58100001970F0F Fadd
    temp_643 = temp_566 + temp_633;
    // 0x001468: 0x59A0130002171726 Ffma
    temp_644 = fma(temp_623, temp_621, temp_579);
    // 0x001470: 0x4C68101803771212 Fmul
    temp_645 = temp_628 * fp_c6.data[13].w;
    // 0x001478: 0xF0F0000034370000 Depbar
    // 0x001488: 0x49A019180A172727 Ffma
    temp_646 = fma(temp_298, fp_c6.data[40].y, temp_530);
    // 0x001490: 0x5C58100001A7271A Fadd
    temp_647 = temp_646 + temp_638;
    // 0x001498: 0xF0F0000034270000 Depbar
    // 0x0014A8: 0x49A0060400570505 Ffma
    temp_648 = fma(temp_618, fp_c1.data[1].y, temp_547);
    // 0x0014B0: 0x49A0068400570404 Ffma
    temp_649 = fma(temp_619, fp_c1.data[1].y, temp_548);
    // 0x0014B8: 0x49A0070400570808 Ffma
    temp_650 = fma(temp_620, fp_c1.data[1].y, temp_549);
    // 0x0014C8: 0x5C58100000571A05 Fadd
    temp_651 = temp_647 + temp_648;
    // 0x0014D0: 0x5C58100000470B04 Fadd
    temp_652 = temp_640 + temp_649;
    // 0x0014D8: 0x4C6810140627090B Fmul
    temp_653 = temp_639 * fp_c5.data[24].z;
    // 0x0014E8: 0x5C58100000870F08 Fadd
    temp_654 = temp_643 + temp_650;
    // 0x0014F0: 0x4C98079802870009 Mov
    // 0x0014F8: 0xF0F0000034170000 Depbar
    // 0x001508: 0x49A008180857140D Ffma
    temp_655 = fma(temp_557, fp_c6.data[33].y, temp_561);
    // 0x001510: 0x49A008980857150E Ffma
    temp_656 = fma(temp_558, fp_c6.data[33].y, temp_562);
    // 0x001518: 0x59A102800057230C Ffma
    temp_657 = 0.0 - temp_651;
    temp_658 = fma(temp_33, temp_657, temp_651);
    // 0x001528: 0x49A0101808571620 Ffma
    temp_659 = fma(temp_559, fp_c6.data[33].y, temp_563);
    // 0x001530: 0x4C68101406270A05 Fmul
    temp_660 = temp_641 * fp_c5.data[24].z;
    // 0x001538: 0x59A1020000472304 Ffma
    temp_661 = 0.0 - temp_652;
    temp_662 = fma(temp_33, temp_661, temp_652);
    // 0x001548: 0x59A0120000D71313 Ffma
    temp_663 = fma(temp_642, temp_655, temp_636);
    // 0x001550: 0x59A0128000E70B0B Ffma
    temp_664 = fma(temp_653, temp_656, temp_629);
    // 0x001558: 0x59A1040000872308 Ffma
    temp_665 = 0.0 - temp_654;
    temp_666 = fma(temp_33, temp_665, temp_654);
    // 0x001568: 0x4C9807980297000D Mov
    // 0x001570: 0x59A0130002070505 Ffma
    temp_667 = fma(temp_660, temp_659, temp_644);
    // 0x001578: 0x51A0049802871E1E Ffma
    temp_668 = fma(temp_592, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001588: 0x59A0098000C70113 Ffma
    temp_669 = fma(temp_101, temp_658, temp_663);
    // 0x001590: 0x59A0058000470204 Ffma
    temp_670 = fma(temp_106, temp_662, temp_664);
    // 0x001598: 0x4C98079802A70002 Mov
    // 0x0015A8: 0x51A0069802971F1F Ffma
    temp_671 = fma(temp_594, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0015B0: 0x59A0028000870705 Ffma
    temp_672 = fma(temp_129, temp_666, temp_667);
    // 0x0015B8: 0xE043FF8C82C7FF08 Ipa
    temp_673 = in_attr4.z;
    // 0x0015C8: 0x49A2091803571207 Ffma
    temp_674 = 0.0 - temp_645;
    temp_675 = fma(temp_645, fp_c6.data[13].y, temp_674);
    // 0x0015D0: 0x5C68100001371C1C Fmul
    temp_676 = temp_279 * temp_669;
    // 0x0015D8: 0x5C68100000471D1D Fmul
    temp_677 = temp_281 * temp_670;
    // 0x0015E8: 0x51A0011802A70000 Ffma
    temp_678 = fma(temp_597, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0015F0: 0x5C68100000572222 Fmul
    temp_679 = temp_283 * temp_672;
    // 0x0015F8: 0x5C58300001E71C01 Fadd
    temp_680 = 0.0 - temp_668;
    temp_681 = temp_676 + temp_680;
    // 0x001608: 0x5C58300001F71D02 Fadd
    temp_682 = 0.0 - temp_671;
    temp_683 = temp_677 + temp_682;
    // 0x001610: 0x49A503180BC72806 Ffma
    temp_684 = 0.0 - fp_c6.data[47].x;
    temp_685 = fma(temp_564, temp_684, temp_635);
    temp_686 = clamp(temp_685, 0.0, 1.0);
    // 0x001618: 0x5080000000370606 Mufu
    temp_687 = log2(temp_686);
    // 0x001628: 0x49A00F180BF70104 Ffma
    temp_688 = fma(temp_681, fp_c6.data[47].w, temp_668);
    // 0x001630: 0x5C58300000072201 Fadd
    temp_689 = 0.0 - temp_678;
    temp_690 = temp_679 + temp_689;
    // 0x001638: 0x49A00F980BF70202 Ffma
    temp_691 = fma(temp_683, fp_c6.data[47].w, temp_671);
    // 0x001648: 0x5C60178000471E04 Fmnmx
    temp_692 = max(temp_668, temp_688);
    // 0x001650: 0x49A000180BF70101 Ffma
    temp_693 = fma(temp_690, fp_c6.data[47].w, temp_678);
    // 0x001658: 0x5C60178000271F02 Fmnmx
    temp_694 = max(temp_671, temp_691);
    // 0x001668: 0x4C68101803170605 Fmul
    temp_695 = temp_687 * fp_c6.data[12].y;
    // 0x001670: 0x5C60178000170001 Fmnmx
    temp_696 = max(temp_678, temp_693);
    // 0x001678: 0x59A0010000770202 Ffma
    temp_697 = fma(temp_694, temp_675, temp_694);
    // 0x001688: 0x4C58100C03870808 Fadd
    temp_698 = temp_673 + fp_c3.data[14].x;
    // 0x001690: 0x5C90008000570006 Rro
    // 0x001698: 0x49A2091803471205 Ffma
    temp_699 = 0.0 - temp_645;
    temp_700 = fma(temp_645, fp_c6.data[13].x, temp_699);
    // 0x0016A8: 0x5080000000270606 Mufu
    temp_701 = exp2(temp_695);
    // 0x0016B0: 0x49A2091803671212 Ffma
    temp_702 = 0.0 - temp_645;
    temp_703 = fma(temp_645, fp_c6.data[13].z, temp_702);
    // 0x0016B8: 0x5C59100000271D02 Fadd
    temp_704 = 0.0 - temp_677;
    temp_705 = temp_704 + temp_697;
    // 0x0016C8: 0x59A0020000570405 Ffma
    temp_706 = fma(temp_692, temp_700, temp_692);
    // 0x0016D0: 0x59A0008001270104 Ffma
    temp_707 = fma(temp_696, temp_703, temp_696);
    // 0x0016D8: 0x5C59100000571C01 Fadd
    temp_708 = 0.0 - temp_676;
    temp_709 = temp_708 + temp_706;
    // 0x0016E8: 0x4C68101802B70607 Fmul
    temp_710 = temp_701 * fp_c6.data[10].w;
    // 0x0016F0: 0x5C59100000472204 Fadd
    temp_711 = 0.0 - temp_679;
    temp_712 = temp_711 + temp_707;
    // 0x0016F8: 0x0103F0000007F005 Mov32i
    // 0x001708: 0x5C9807800FF70006 Mov
    // 0x001710: 0x59A00E0000770100 Ffma
    temp_713 = fma(temp_709, temp_710, temp_676);
    // 0x001718: 0x59A00E8000770201 Ffma
    temp_714 = fma(temp_705, temp_710, temp_677);
    // 0x001728: 0x59A0110000770402 Ffma
    temp_715 = fma(temp_712, temp_710, temp_679);
    // 0x001730: 0x5C98078000370007 Mov
    // 0x001738: 0x49A37F8C03C70804 Ffma
    temp_716 = 0.0 - fp_c3.data[15].x;
    temp_717 = fma(temp_698, temp_716, -0.0);
    // 0x001748: 0xE30000000007000F Exit
    out_attr0.x = temp_713;
    out_attr0.y = temp_714;
    out_attr0.z = temp_715;
    out_attr0.w = temp_30;
    out_attr1.x = temp_717;
    out_attr1.y = 0.5;
    out_attr1.z = 0.0;
    out_attr1.w = temp_30;
    return;
}
