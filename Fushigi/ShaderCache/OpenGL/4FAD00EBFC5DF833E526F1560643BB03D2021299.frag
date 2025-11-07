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
layout (binding = 3) uniform sampler2D fp_t_tcb_1E;
layout (binding = 4) uniform sampler2D fp_t_tcb_20;
layout (binding = 5) uniform samplerCube fp_t_tcb_18;
layout (binding = 6) uniform samplerCube fp_t_tcb_16;
layout (binding = 7) uniform samplerCubeArray fp_t_tcb_14;
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
    precise float temp_21;
    precise vec3 temp_22;
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
    uint temp_171;
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
    int temp_192;
    precise float temp_193;
    int temp_194;
    uint temp_195;
    uint temp_196;
    int temp_197;
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
    bool temp_252;
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
    int temp_301;
    bool temp_302;
    int temp_303;
    int temp_304;
    int temp_305;
    int temp_306;
    int temp_307;
    uint temp_308;
    uint temp_309;
    int temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    precise float temp_314;
    int temp_315;
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
    precise float temp_350;
    precise float temp_351;
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
    int temp_368;
    uint temp_369;
    uint temp_370;
    int temp_371;
    precise float temp_372;
    int temp_373;
    uint temp_374;
    int temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    int temp_379;
    uint temp_380;
    uint temp_381;
    int temp_382;
    precise float temp_383;
    int temp_384;
    uint temp_385;
    int temp_386;
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
    precise float temp_402;
    uint temp_403;
    int temp_404;
    precise float temp_405;
    bool temp_406;
    uint temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    precise float temp_412;
    precise float temp_413;
    precise float temp_414;
    uint temp_415;
    precise float temp_416;
    bool temp_417;
    precise float temp_418;
    precise float temp_419;
    precise float temp_420;
    precise float temp_421;
    precise float temp_422;
    precise float temp_423;
    int temp_424;
    uint temp_425;
    uint temp_426;
    int temp_427;
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
    uint temp_453;
    uint temp_454;
    int temp_455;
    precise float temp_456;
    int temp_457;
    uint temp_458;
    int temp_459;
    precise float temp_460;
    precise float temp_461;
    precise float temp_462;
    int temp_463;
    uint temp_464;
    uint temp_465;
    int temp_466;
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
    precise vec3 temp_564;
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
    // 0x000008: 0x0103F8000007F004 Mov32i
    // 0x000010: 0xE003FF87CFF7FF0C Ipa
    // 0x000018: 0x0103F0000007F030 Mov32i
    // 0x000028: 0xE003FF870FF7FF06 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000030: 0xE003FF874FF7FF07 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000038: 0x5080000000470C0C Mufu
    // 0x000048: 0x4C68100C04A70606 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000050: 0x4C68100C04B70707 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000058: 0xE043FF8E00C7FF0E Ipa
    temp_8 = in_attr6.x;
    // 0x000068: 0xE043FF8E40C7FF11 Ipa
    temp_9 = in_attr6.y;
    // 0x000070: 0xD830026FF1170E0A Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000078: 0xD824036051170E1E Texs
    temp_13 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    temp_16 = temp_13.z;
    // 0x000088: 0xD822024081170E02 Texs
    temp_17 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyz;
    temp_18 = temp_17.x;
    temp_19 = temp_17.y;
    temp_20 = temp_17.z;
    // 0x000090: 0xD86201EFF0470604 Texs
    temp_21 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x000098: 0xD82202000077061A Texs
    temp_22 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_23 = temp_22.x;
    temp_24 = temp_22.y;
    temp_25 = temp_22.z;
    // 0x0000A8: 0xE043FF8B00C7FF2A Ipa
    temp_26 = in_attr3.x;
    // 0x0000B0: 0xE043FF8900C7FF0F Ipa
    temp_27 = in_attr1.x;
    // 0x0000B8: 0xE043FF8B40C7FF29 Ipa
    temp_28 = in_attr3.y;
    // 0x0000C8: 0xE043FF8A00C7FF01 Ipa
    temp_29 = in_attr2.x;
    // 0x0000D0: 0xE043FF8940C7FF10 Ipa
    temp_30 = in_attr1.y;
    // 0x0000D8: 0xE043FF8800C7FF14 Ipa
    temp_31 = in_attr0.x;
    // 0x0000E8: 0xE043FF8B80C7FF28 Ipa
    temp_32 = in_attr3.z;
    // 0x0000F0: 0xE043FF8A40C7FF09 Ipa
    temp_33 = in_attr2.y;
    // 0x0000F8: 0xE043FF8840C7FF15 Ipa
    temp_34 = in_attr0.y;
    // 0x000108: 0xE043FF8A80C7FF0D Ipa
    temp_35 = in_attr2.z;
    // 0x000110: 0xE043FF8980C7FF11 Ipa
    temp_36 = in_attr1.z;
    // 0x000118: 0xE043FF8880C7FF16 Ipa
    temp_37 = in_attr0.z;
    // 0x000128: 0xE2900000EC800000 Ssy
    // 0x000130: 0x5C68100002A72A17 Fmul
    temp_38 = temp_26 * temp_26;
    // 0x000138: 0x5C68100000F70F12 Fmul
    temp_39 = temp_27 * temp_27;
    // 0x000148: 0x5C6810000017010E Fmul
    temp_40 = temp_29 * temp_29;
    // 0x000150: 0x5C68100001471413 Fmul
    temp_41 = temp_31 * temp_31;
    // 0x000158: 0x59A00B8002972917 Ffma
    temp_42 = fma(temp_28, temp_28, temp_38);
    // 0x000168: 0x59A0090001071012 Ffma
    temp_43 = fma(temp_30, temp_30, temp_39);
    // 0x000170: 0x59A007000097090E Ffma
    temp_44 = fma(temp_33, temp_33, temp_40);
    // 0x000178: 0x59A0098001571513 Ffma
    temp_45 = fma(temp_34, temp_34, temp_41);
    // 0x000188: 0x59A00B8002872818 Ffma
    temp_46 = fma(temp_32, temp_32, temp_42);
    // 0x000190: 0x59A0090001171112 Ffma
    temp_47 = fma(temp_36, temp_36, temp_43);
    // 0x000198: 0x5080000000571823 Mufu
    temp_48 = inversesqrt(temp_46);
    // 0x0001A8: 0x59A0070000D70D0E Ffma
    temp_49 = fma(temp_35, temp_35, temp_44);
    // 0x0001B0: 0x5080000000571212 Mufu
    temp_50 = inversesqrt(temp_47);
    // 0x0001B8: 0x59A0098001671617 Ffma
    temp_51 = fma(temp_37, temp_37, temp_45);
    // 0x0001C8: 0x5080000000570E0E Mufu
    temp_52 = inversesqrt(temp_49);
    // 0x0001D0: 0x5C69100002372A2A Fmul
    temp_53 = 0.0 - temp_48;
    temp_54 = temp_26 * temp_53;
    // 0x0001D8: 0x5080000000571717 Mufu
    temp_55 = inversesqrt(temp_51);
    // 0x0001E8: 0x5C69100002372929 Fmul
    temp_56 = 0.0 - temp_48;
    temp_57 = temp_28 * temp_56;
    // 0x0001F0: 0x5C68100001271113 Fmul
    temp_58 = temp_36 * temp_50;
    // 0x0001F8: 0x5C68100001270F0F Fmul
    temp_59 = temp_27 * temp_50;
    // 0x000208: 0x5C68100001271010 Fmul
    temp_60 = temp_30 * temp_50;
    // 0x000210: 0x5C68100000E70101 Fmul
    temp_61 = temp_29 * temp_52;
    // 0x000218: 0x4C58301805C72A12 Fadd
    temp_62 = 0.0 - fp_c6.data[23].x;
    temp_63 = temp_54 + temp_62;
    // 0x000228: 0x5C68100000E70909 Fmul
    temp_64 = temp_33 * temp_52;
    // 0x000230: 0x5C68100000E70D0D Fmul
    temp_65 = temp_35 * temp_52;
    // 0x000238: 0x5C69100002372828 Fmul
    temp_66 = 0.0 - temp_48;
    temp_67 = temp_32 * temp_66;
    // 0x000248: 0x5C6810000177150E Fmul
    temp_68 = temp_34 * temp_55;
    // 0x000250: 0x5C68100001771616 Fmul
    temp_69 = temp_37 * temp_55;
    // 0x000258: 0x5C68100001771414 Fmul
    temp_70 = temp_31 * temp_55;
    // 0x000268: 0x4C58301805D72915 Fadd
    temp_71 = 0.0 - fp_c6.data[23].y;
    temp_72 = temp_57 + temp_71;
    // 0x000270: 0x5C68100001271217 Fmul
    temp_73 = temp_63 * temp_63;
    // 0x000278: 0x4C58301805E72818 Fadd
    temp_74 = 0.0 - fp_c6.data[23].z;
    temp_75 = temp_67 + temp_74;
    // 0x000288: 0x59A00B8001571519 Ffma
    temp_76 = fma(temp_72, temp_72, temp_73);
    // 0x000290: 0x59A00C8001871819 Ffma
    temp_77 = fma(temp_75, temp_75, temp_76);
    // 0x000298: 0x5080000000571923 Mufu
    temp_78 = inversesqrt(temp_77);
    // 0x0002A8: 0xF0F0000034370000 Depbar
    // 0x0002B0: 0x5C68100000B70B11 Fmul
    temp_79 = temp_12 * temp_12;
    // 0x0002B8: 0x5C68100000B70101 Fmul
    temp_80 = temp_61 * temp_12;
    // 0x0002C8: 0x5C68100000B70909 Fmul
    temp_81 = temp_64 * temp_12;
    // 0x0002D0: 0x5C68100000B70D0D Fmul
    temp_82 = temp_65 * temp_12;
    // 0x0002D8: 0x5C6810000237150B Fmul
    temp_83 = temp_72 * temp_78;
    // 0x0002E8: 0x4C5C101406371E21 Fadd
    temp_84 = temp_14 + fp_c5.data[24].w;
    temp_85 = clamp(temp_84, 0.0, 1.0);
    // 0x0002F0: 0x59A0088000A70A11 Ffma
    temp_86 = fma(temp_11, temp_11, temp_79);
    // 0x0002F8: 0x59A0008000F70A01 Ffma
    temp_87 = fma(temp_11, temp_59, temp_80);
    // 0x000308: 0x59A0048001070A09 Ffma
    temp_88 = fma(temp_11, temp_60, temp_81);
    // 0x000310: 0x59A0068001370A0D Ffma
    temp_89 = fma(temp_11, temp_58, temp_82);
    // 0x000318: 0x5C68100002371210 Fmul
    temp_90 = temp_63 * temp_78;
    // 0x000328: 0x5C68100002371823 Fmul
    temp_91 = temp_75 * temp_78;
    // 0x000330: 0x385D103F80071111 Fadd
    temp_92 = 0.0 - temp_86;
    temp_93 = temp_92 + 1.0;
    temp_94 = clamp(temp_93, 0.0, 1.0);
    // 0x000338: 0x01040DF760C7F013 Mov32i
    // 0x000348: 0x5080000000871117 Mufu
    temp_95 = sqrt(temp_94);
    // 0x000350: 0x51A4108400072131 Ffma
    temp_96 = fma(temp_85, temp_85, fp_c1.data[0].x);
    temp_97 = clamp(temp_96, 0.0, 1.0);
    // 0x000358: 0x5C68100001072A12 Fmul
    temp_98 = temp_54 * temp_90;
    // 0x000368: 0x32A0183F00072130 Ffma
    temp_99 = fma(temp_85, 0.5, 0.5);
    // 0x000370: 0xF0F0000034270000 Depbar
    // 0x000378: 0x4C68101402C7021E Fmul
    temp_100 = temp_18 * fp_c5.data[11].x;
    // 0x000388: 0x4C68101402D70319 Fmul
    temp_101 = temp_19 * fp_c5.data[11].y;
    // 0x000390: 0x4C68101402E70818 Fmul
    temp_102 = temp_20 * fp_c5.data[11].z;
    // 0x000398: 0x4C68101406970303 Fmul
    temp_103 = temp_19 * fp_c5.data[26].y;
    // 0x0003A8: 0x4C69101805C71011 Fmul
    temp_104 = 0.0 - fp_c6.data[23].x;
    temp_105 = temp_90 * temp_104;
    // 0x0003B0: 0x59A0090000B72912 Ffma
    temp_106 = fma(temp_57, temp_83, temp_98);
    // 0x0003B8: 0x5C68120003073030 Fmul
    temp_107 = temp_99 * 0.5;
    temp_108 = temp_107 * temp_99;
    // 0x0003C8: 0x4C68101406970202 Fmul
    temp_109 = temp_18 * fp_c5.data[26].y;
    // 0x0003D0: 0x4C58301407B71815 Fadd
    temp_110 = 0.0 - fp_c5.data[30].w;
    temp_111 = temp_102 + temp_110;
    // 0x0003D8: 0x59A0008001771401 Ffma
    temp_112 = fma(temp_70, temp_95, temp_87);
    // 0x0003E8: 0x59A0048001770E0E Ffma
    temp_113 = fma(temp_68, temp_95, temp_88);
    // 0x0003F0: 0x59A006800177160D Ffma
    temp_114 = fma(temp_69, temp_95, temp_89);
    // 0x0003F8: 0x49A1089805D70B11 Ffma
    temp_115 = 0.0 - fp_c6.data[23].y;
    temp_116 = fma(temp_83, temp_115, temp_105);
    // 0x000408: 0x59A4090002372812 Ffma
    temp_117 = fma(temp_67, temp_91, temp_106);
    temp_118 = clamp(temp_117, 0.0, 1.0);
    // 0x000410: 0x4C58301407B71916 Fadd
    temp_119 = 0.0 - fp_c5.data[30].w;
    temp_120 = temp_101 + temp_119;
    // 0x000418: 0x5C68100000170109 Fmul
    temp_121 = temp_112 * temp_112;
    // 0x000428: 0x51A00A9407B71F15 Ffma
    temp_122 = fma(temp_15, temp_111, fp_c5.data[30].w);
    // 0x000430: 0x4C68101406970808 Fmul
    temp_123 = temp_20 * fp_c5.data[26].y;
    // 0x000438: 0x49A5089805E72311 Ffma
    temp_124 = 0.0 - fp_c6.data[23].z;
    temp_125 = fma(temp_91, temp_124, temp_116);
    temp_126 = clamp(temp_125, 0.0, 1.0);
    // 0x000448: 0x51A00B1407B71F16 Ffma
    temp_127 = fma(temp_15, temp_120, fp_c5.data[30].w);
    // 0x000450: 0x59A0048000E70E0A Ffma
    temp_128 = fma(temp_113, temp_113, temp_121);
    // 0x000458: 0x49A209840027110F Ffma
    temp_129 = fma(temp_126, fp_c1.data[0].z, -6.98316002);
    // 0x000468: 0x59A0050000D70D0A Ffma
    temp_130 = fma(temp_114, temp_114, temp_128);
    // 0x000470: 0x5080000000570A1C Mufu
    temp_131 = inversesqrt(temp_130);
    // 0x000478: 0x5C68100000F71109 Fmul
    temp_132 = temp_126 * temp_129;
    // 0x000488: 0x49A209840027120F Ffma
    temp_133 = fma(temp_118, fp_c1.data[0].z, -6.98316002);
    // 0x000490: 0x4C98079403A70013 Mov
    // 0x000498: 0x4C98079403870011 Mov
    // 0x0004A8: 0x5C90008000970014 Rro
    // 0x0004B0: 0x5C68100000F7120A Fmul
    temp_134 = temp_118 * temp_133;
    // 0x0004B8: 0x5080000000271414 Mufu
    temp_135 = exp2(temp_132);
    // 0x0004C8: 0x386810411007070F Fmul
    temp_136 = temp_7 * 9.0;
    // 0x0004D0: 0x5C68100001C70127 Fmul
    temp_137 = temp_112 * temp_131;
    // 0x0004D8: 0x5C68100001C70E01 Fmul
    temp_138 = temp_113 * temp_131;
    // 0x0004E8: 0x5C68100001C70D1C Fmul
    temp_139 = temp_114 * temp_131;
    // 0x0004F0: 0x4C98079403970012 Mov
    // 0x0004F8: 0x4C59101403471111 Fadd
    temp_140 = 0.0 - fp_c5.data[14].x;
    temp_141 = temp_140 + fp_c5.data[13].x;
    // 0x000508: 0x5C68100002772A0E Fmul
    temp_142 = temp_54 * temp_137;
    // 0x000510: 0x5C68100001072710 Fmul
    temp_143 = temp_137 * temp_90;
    // 0x000518: 0x5C68100003173107 Fmul
    temp_144 = temp_97 * temp_97;
    // 0x000528: 0x4C59101403571212 Fadd
    temp_145 = 0.0 - fp_c5.data[14].y;
    temp_146 = temp_145 + fp_c5.data[13].y;
    // 0x000530: 0x59A007000017290E Ffma
    temp_147 = fma(temp_57, temp_138, temp_142);
    // 0x000538: 0x59A0080000B7010D Ffma
    temp_148 = fma(temp_138, temp_83, temp_143);
    // 0x000548: 0x5CA8148000F70A10 F2f
    temp_149 = floor(temp_136);
    // 0x000550: 0x386810418007060B Fmul
    temp_150 = temp_6 * 16.0;
    // 0x000558: 0x4C69101805C72706 Fmul
    temp_151 = 0.0 - fp_c6.data[23].x;
    temp_152 = temp_137 * temp_151;
    // 0x000568: 0x5CA8148000B70A0B F2f
    temp_153 = floor(temp_150);
    // 0x000570: 0x59A4070001C72820 Ffma
    temp_154 = fma(temp_67, temp_139, temp_147);
    temp_155 = clamp(temp_154, 0.0, 1.0);
    // 0x000578: 0x59A4068002371C0D Ffma
    temp_156 = fma(temp_139, temp_91, temp_148);
    temp_157 = clamp(temp_156, 0.0, 1.0);
    // 0x000588: 0x49A1031805D70106 Ffma
    temp_158 = 0.0 - fp_c6.data[23].y;
    temp_159 = fma(temp_138, temp_158, temp_152);
    // 0x000590: 0x3859103F8007200E Fadd
    temp_160 = 0.0 - temp_155;
    temp_161 = temp_160 + 1.0;
    // 0x000598: 0x59A2068000770D07 Ffma
    temp_162 = 0.0 - temp_157;
    temp_163 = fma(temp_157, temp_144, temp_162);
    // 0x0005A8: 0x5080000000370E0E Mufu
    temp_164 = log2(temp_161);
    // 0x0005B0: 0x32A005C18007102F Ffma
    temp_165 = fma(temp_149, 16.0, temp_153);
    // 0x0005B8: 0x49A5031805E71C0B Ffma
    temp_166 = 0.0 - fp_c6.data[23].z;
    temp_167 = fma(temp_139, temp_166, temp_159);
    temp_168 = clamp(temp_167, 0.0, 1.0);
    // 0x0005C8: 0x5CB0118002F70A2F F2i
    temp_169 = trunc(temp_165);
    temp_170 = max(temp_169, 0.0);
    temp_171 = uint(temp_170);
    // 0x0005D0: 0x51A0038400170D07 Ffma
    temp_172 = fma(temp_157, temp_163, fp_c1.data[0].y);
    // 0x0005D8: 0x59A110000207300D Ffma
    temp_173 = 0.0 - temp_155;
    temp_174 = fma(temp_108, temp_173, temp_155);
    // 0x0005E8: 0x5080000000470707 Mufu
    temp_175 = 1.0 / temp_172;
    // 0x0005F0: 0x5C90008000A70010 Rro
    // 0x0005F8: 0x4C58301407B71E0A Fadd
    temp_176 = 0.0 - fp_c5.data[30].w;
    temp_177 = temp_100 + temp_176;
    // 0x000608: 0x5080000000271010 Mufu
    temp_178 = exp2(temp_134);
    // 0x000610: 0x59A1058003070B06 Ffma
    temp_179 = 0.0 - temp_108;
    temp_180 = fma(temp_168, temp_179, temp_168);
    // 0x000618: 0x4C68101406270E0F Fmul
    temp_181 = temp_164 * fp_c5.data[24].z;
    // 0x000628: 0x5C58100000D7300D Fadd
    temp_182 = temp_108 + temp_174;
    // 0x000630: 0x5080000000470D2E Mufu
    temp_183 = 1.0 / temp_182;
    // 0x000638: 0x51A0051407B71F17 Ffma
    temp_184 = fma(temp_15, temp_177, fp_c5.data[30].w);
    // 0x000648: 0x5C5810000067300E Fadd
    temp_185 = temp_108 + temp_180;
    // 0x000650: 0x4C59101403671306 Fadd
    temp_186 = 0.0 - fp_c5.data[14].z;
    temp_187 = temp_186 + fp_c5.data[13].z;
    // 0x000658: 0x5080000000470E13 Mufu
    temp_188 = 1.0 / temp_185;
    // 0x000668: 0x5C90008000F7000F Rro
    // 0x000670: 0x5084000000270F0F Mufu
    temp_189 = exp2(temp_181);
    temp_190 = clamp(temp_189, 0.0, 1.0);
    // 0x000678: 0x5C6810000077310D Fmul
    temp_191 = temp_97 * temp_175;
    // 0x000688: 0x3848000000872F2D Shl
    temp_192 = int(temp_171) << 8;
    // 0x000690: 0x3868103F00072E2E Fmul
    temp_193 = temp_183 * 0.5;
    // 0x000698: 0xEF94008200472D2D Ldc
    temp_194 = temp_192 + 0x2004;
    temp_195 = uint(temp_194) >> 2;
    temp_196 = temp_195 >> 2;
    temp_197 = int(temp_195) & 3;
    temp_198 = fp_c8.data[int(temp_196)][temp_197];
    // 0x0006A8: 0x5C68100000D70D0D Fmul
    temp_199 = temp_191 * temp_191;
    // 0x0006B0: 0x5C68100001372E0E Fmul
    temp_200 = temp_193 * temp_188;
    // 0x0006B8: 0x51A0089403870F07 Ffma
    temp_201 = fma(temp_190, temp_141, fp_c5.data[14].x);
    // 0x0006C8: 0x59A1080001071711 Ffma
    temp_202 = 0.0 - temp_178;
    temp_203 = fma(temp_184, temp_202, temp_178);
    // 0x0006D0: 0x51A0091403970F0A Ffma
    temp_204 = fma(temp_190, temp_146, fp_c5.data[14].y);
    // 0x0006D8: 0x51A0031403A70F06 Ffma
    temp_205 = fma(temp_190, temp_187, fp_c5.data[14].z);
    // 0x0006E8: 0x4C68101801470B0F Fmul
    temp_206 = temp_168 * fp_c6.data[5].x;
    // 0x0006F0: 0x5C68100000E70D0D Fmul
    temp_207 = temp_199 * temp_200;
    // 0x0006F8: 0x4C68101801570B0E Fmul
    temp_208 = temp_168 * fp_c6.data[5].y;
    // 0x000708: 0x5C58100001171711 Fadd
    temp_209 = temp_184 + temp_203;
    // 0x000710: 0x1E23EA2F98370F12 Fmul32i
    temp_210 = temp_206 * 0.318309873;
    // 0x000718: 0x5C68100000D70B09 Fmul
    temp_211 = temp_168 * temp_207;
    // 0x000728: 0x4C68101801670B0B Fmul
    temp_212 = temp_168 * fp_c6.data[5].z;
    // 0x000730: 0x4C68101406471111 Fmul
    temp_213 = temp_209 * fp_c5.data[25].x;
    // 0x000738: 0x59A108000107160F Ffma
    temp_214 = 0.0 - temp_178;
    temp_215 = fma(temp_127, temp_214, temp_178);
    // 0x000748: 0x59A1080001071510 Ffma
    temp_216 = 0.0 - temp_178;
    temp_217 = fma(temp_122, temp_216, temp_178);
    // 0x000750: 0x1E23EA2F98370E0E Fmul32i
    temp_218 = temp_208 * 0.318309873;
    // 0x000758: 0x1E23EA2F98370B25 Fmul32i
    temp_219 = temp_212 * 0.318309873;
    // 0x000768: 0x59A109000127110D Ffma
    temp_220 = 0.0 - temp_210;
    temp_221 = fma(temp_213, temp_220, temp_210);
    // 0x000770: 0x59A10A000147160B Ffma
    temp_222 = 0.0 - temp_135;
    temp_223 = fma(temp_127, temp_222, temp_135);
    // 0x000778: 0xEF5400000047FF0D Stl
    local_memory[1] = floatBitsToUint(temp_221);
    // 0x000788: 0x4C68101403170511 Fmul
    temp_224 = temp_16 * fp_c5.data[12].y;
    // 0x000790: 0x5C58100000F7160F Fadd
    temp_225 = temp_127 + temp_215;
    // 0x000798: 0x5C58100001071510 Fadd
    temp_226 = temp_122 + temp_217;
    // 0x0007A8: 0x5C68100002071C12 Fmul
    temp_227 = temp_139 * temp_155;
    // 0x0007B0: 0x5C58100000B7160B Fadd
    temp_228 = temp_127 + temp_223;
    // 0x0007B8: 0x59A005000117030A Ffma
    temp_229 = fma(temp_103, temp_224, temp_204);
    // 0x0007C8: 0x4C68101403070511 Fmul
    temp_230 = temp_16 * fp_c5.data[12].x;
    // 0x0007D0: 0x4C98079808470003 Mov
    // 0x0007D8: 0x4C68101403270505 Fmul
    temp_231 = temp_16 * fp_c5.data[12].z;
    // 0x0007E8: 0x59A10A000147170D Ffma
    temp_232 = 0.0 - temp_135;
    temp_233 = fma(temp_184, temp_232, temp_135);
    // 0x0007F0: 0x59A10A0001471514 Ffma
    temp_234 = 0.0 - temp_135;
    temp_235 = fma(temp_122, temp_234, temp_135);
    // 0x0007F8: 0x4C68101406470B0B Fmul
    temp_236 = temp_228 * fp_c5.data[25].x;
    // 0x000808: 0x59A0038001170202 Ffma
    temp_237 = fma(temp_109, temp_230, temp_201);
    // 0x000810: 0x4C68101406870303 Fmul
    temp_238 = fp_c6.data[33].x * fp_c5.data[26].x;
    // 0x000818: 0x59A0030000570805 Ffma
    temp_239 = fma(temp_123, temp_231, temp_205);
    // 0x000828: 0x5C58100000D7170D Fadd
    temp_240 = temp_184 + temp_233;
    // 0x000830: 0x5C58100001471514 Fadd
    temp_241 = temp_122 + temp_235;
    // 0x000838: 0x4C68101801570B0B Fmul
    temp_242 = temp_236 * fp_c6.data[5].y;
    // 0x000848: 0xF0F0000034170000 Depbar
    // 0x000850: 0x51A5020400171104 Ffma
    temp_243 = 0.0 - temp_21;
    temp_244 = fma(temp_230, temp_243, fp_c1.data[0].y);
    temp_245 = clamp(temp_244, 0.0, 1.0);
    // 0x000858: 0x4C68101406470F0F Fmul
    temp_246 = temp_225 * fp_c5.data[25].x;
    // 0x000868: 0x59A0050000370A13 Ffma
    temp_247 = fma(temp_229, temp_238, temp_229);
    // 0x000870: 0x4C68101406470D0D Fmul
    temp_248 = temp_240 * fp_c5.data[25].x;
    // 0x000878: 0x4C68101406471414 Fmul
    temp_249 = temp_241 * fp_c5.data[25].x;
    // 0x000888: 0x5C68100000B70922 Fmul
    temp_250 = temp_211 * temp_242;
    // 0x000890: 0x59A002800037050B Ffma
    temp_251 = fma(temp_239, temp_238, temp_239);
    // 0x000898: 0x5B6603800FF72D07 Isetp
    temp_252 = floatBitsToUint(temp_198) <= 0u;
    // 0x0008A8: 0x59A1070000E70F0E Ffma
    temp_253 = 0.0 - temp_218;
    temp_254 = fma(temp_246, temp_253, temp_218);
    // 0x0008B0: 0x4C68101801470D24 Fmul
    temp_255 = temp_248 * fp_c6.data[5].x;
    // 0x0008B8: 0xEF5400000007FF0E Stl
    local_memory[0] = floatBitsToUint(temp_254);
    // 0x0008C8: 0x4C68101801671414 Fmul
    temp_256 = temp_249 * fp_c6.data[5].z;
    // 0x0008D0: 0x4C68101406471010 Fmul
    temp_257 = temp_226 * fp_c5.data[25].x;
    // 0x0008D8: 0x5C6810000207270D Fmul
    temp_258 = temp_137 * temp_155;
    // 0x0008E8: 0x5C9807800FF7000A Mov
    // 0x0008F0: 0x5C9807800FF70008 Mov
    // 0x0008F8: 0x5C68100002470924 Fmul
    temp_259 = temp_211 * temp_255;
    // 0x000908: 0x5C68100001470923 Fmul
    temp_260 = temp_211 * temp_256;
    // 0x000910: 0x59A0010000370214 Ffma
    temp_261 = fma(temp_237, temp_238, temp_237);
    // 0x000918: 0x49A2021404870402 Ffma
    temp_262 = 0.0 - temp_245;
    temp_263 = fma(temp_245, fp_c5.data[18].x, temp_262);
    // 0x000928: 0x49A2021404970403 Ffma
    temp_264 = 0.0 - temp_245;
    temp_265 = fma(temp_245, fp_c5.data[18].y, temp_264);
    // 0x000930: 0x49A2021404A70404 Ffma
    temp_266 = 0.0 - temp_245;
    temp_267 = fma(temp_245, fp_c5.data[18].z, temp_266);
    // 0x000938: 0x5C6810000207010E Fmul
    temp_268 = temp_138 * temp_155;
    // 0x000948: 0x59A1128002571025 Ffma
    temp_269 = 0.0 - temp_219;
    temp_270 = fma(temp_257, temp_269, temp_219);
    // 0x000950: 0x5C9807800FF70009 Mov
    // 0x000958: 0x3858103F8007020F Fadd
    temp_271 = temp_263 + 1.0;
    // 0x000968: 0x3858103F80070303 Fadd
    temp_272 = temp_265 + 1.0;
    // 0x000970: 0x3858103F80070402 Fadd
    temp_273 = temp_267 + 1.0;
    // 0x000978: 0x5C9807800FF70007 Mov
    // 0x000988: 0x5C9807800FF70006 Mov
    // 0x000990: 0x5C9807800FF70005 Mov
    // 0x000998: 0x59A4078000F71E04 Ffma
    temp_274 = fma(temp_100, temp_271, temp_271);
    temp_275 = clamp(temp_274, 0.0, 1.0);
    // 0x0009A8: 0x59A4018000371903 Ffma
    temp_276 = fma(temp_101, temp_272, temp_272);
    temp_277 = clamp(temp_276, 0.0, 1.0);
    // 0x0009B0: 0x59A4010000271802 Ffma
    temp_278 = fma(temp_102, temp_273, temp_273);
    temp_279 = clamp(temp_278, 0.0, 1.0);
    // 0x0009B8: 0x32A2154000070D26 Ffma
    temp_280 = 0.0 - temp_54;
    temp_281 = fma(temp_258, 2.0, temp_280);
    // 0x0009C8: 0x32A214C000070E1D Ffma
    temp_282 = 0.0 - temp_57;
    temp_283 = fma(temp_268, 2.0, temp_282);
    // 0x0009D0: 0x32A2144000071212 Ffma
    temp_284 = 0.0 - temp_67;
    temp_285 = fma(temp_227, 2.0, temp_284);
    // 0x0009D8: 0x1E23E22F98372424 Fmul32i
    temp_286 = temp_259 * 0.159154937;
    // 0x0009E8: 0x1E23E22F98372222 Fmul32i
    temp_287 = temp_250 * 0.159154937;
    // 0x0009F0: 0x1E23E22F98372323 Fmul32i
    temp_288 = temp_260 * 0.159154937;
    // 0x0009F8: 0xF0F800000000000F Sync
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
    temp_299 = 0.0;
    temp_300 = 0.0;
    if (!temp_252)
    {
        // 0x000A08: 0x5C9807800FF7002C Mov
        temp_301 = 0;
        do
        {
            // 0x000A10: 0x5C18020002C72F37 Iscadd
            temp_303 = int(temp_171) << 4;
            temp_304 = temp_303 + temp_301;
            // 0x000A18: 0xE003FF87CFF7FF32 Ipa
            // 0x000A28: 0x1C00000000172C2C Iadd32i
            temp_305 = temp_301 + 1;
            // 0x000A30: 0xE003FF87CFF7FF34 Ipa
            // 0x000A38: 0x3848000000473737 Shl
            temp_306 = temp_304 << 4;
            // 0x000A48: 0xE003FF87CFF7FF33 Ipa
            // 0x000A50: 0x5B6C038002D72C0F Isetp
            temp_302 = uint(temp_305) >= floatBitsToUint(temp_198);
            // 0x000A58: 0xE290000058000000 Ssy
            // 0x000A68: 0xEF9400820007372B Ldc
            temp_307 = temp_306 + 0x2000;
            temp_308 = uint(temp_307) >> 2;
            temp_309 = temp_308 >> 2;
            temp_310 = int(temp_308) & 3;
            temp_311 = fp_c8.data[int(temp_309)][temp_310];
            // 0x000A70: 0x5080000000473232 Mufu
            // 0x000A78: 0x5080000000473434 Mufu
            // 0x000A88: 0x5080000000473333 Mufu
            // 0x000A90: 0xE043FF8D0327FF32 Ipa
            temp_312 = in_attr5.x;
            // 0x000A98: 0xE043FF8D8347FF34 Ipa
            temp_313 = in_attr5.z;
            // 0x000AA8: 0xE043FF8D4337FF33 Ipa
            temp_314 = in_attr5.y;
            // 0x000AB0: 0x3848000000672B2B Shl
            temp_315 = floatBitsToInt(temp_311) << 6;
            // 0x000AB8: 0xEF95008001072B0C Ldc
            temp_316 = temp_315 + 16;
            temp_317 = uint(temp_316) >> 2;
            temp_318 = temp_317 >> 2;
            temp_319 = int(temp_317) & 3;
            temp_320 = fp_c8.data[int(temp_318)][temp_319];
            temp_321 = int(temp_317) + 1;
            temp_322 = uint(temp_321) >> 2;
            temp_323 = temp_321 & 3;
            temp_324 = fp_c8.data[int(temp_322)][temp_323];
            // 0x000AC8: 0xEF95008001872B0E Ldc
            temp_325 = temp_315 + 24;
            temp_326 = uint(temp_325) >> 2;
            temp_327 = temp_326 >> 2;
            temp_328 = int(temp_326) & 3;
            temp_329 = fp_c8.data[int(temp_327)][temp_328];
            temp_330 = int(temp_326) + 1;
            temp_331 = uint(temp_330) >> 2;
            temp_332 = temp_330 & 3;
            temp_333 = fp_c8.data[int(temp_331)][temp_332];
            // 0x000AD0: 0xEF95008002072B10 Ldc
            temp_334 = temp_315 + 32;
            temp_335 = uint(temp_334) >> 2;
            temp_336 = temp_335 >> 2;
            temp_337 = int(temp_335) & 3;
            temp_338 = fp_c8.data[int(temp_336)][temp_337];
            temp_339 = int(temp_335) + 1;
            temp_340 = uint(temp_339) >> 2;
            temp_341 = temp_339 & 3;
            temp_342 = fp_c8.data[int(temp_340)][temp_341];
            // 0x000AD8: 0x5C58300003270C32 Fadd
            temp_343 = 0.0 - temp_312;
            temp_344 = temp_320 + temp_343;
            // 0x000AE8: 0xEF94008002872B0C Ldc
            temp_345 = temp_315 + 40;
            temp_346 = uint(temp_345) >> 2;
            temp_347 = temp_346 >> 2;
            temp_348 = int(temp_346) & 3;
            temp_349 = fp_c8.data[int(temp_347)][temp_348];
            // 0x000AF0: 0x5C58300003370D33 Fadd
            temp_350 = 0.0 - temp_314;
            temp_351 = temp_324 + temp_350;
            // 0x000AF8: 0x5C58300003470E34 Fadd
            temp_352 = 0.0 - temp_313;
            temp_353 = temp_329 + temp_352;
            // 0x000B08: 0x5C68100003273235 Fmul
            temp_354 = temp_344 * temp_344;
            // 0x000B10: 0x59A11A0003470F0F Ffma
            temp_355 = 0.0 - temp_353;
            temp_356 = fma(temp_333, temp_355, temp_353);
            // 0x000B18: 0x59A01A8003373335 Ffma
            temp_357 = fma(temp_351, temp_351, temp_354);
            // 0x000B28: 0x59A01A8000F70F36 Ffma
            temp_358 = fma(temp_356, temp_356, temp_357);
            // 0x000B30: 0x508000000057360D Mufu
            temp_359 = inversesqrt(temp_358);
            // 0x000B38: 0x5080000000873636 Mufu
            temp_360 = sqrt(temp_358);
            // 0x000B48: 0x5C68100000D7320E Fmul
            temp_361 = temp_344 * temp_359;
            // 0x000B50: 0x5C69100001070E0E Fmul
            temp_362 = 0.0 - temp_338;
            temp_363 = temp_361 * temp_362;
            // 0x000B58: 0x5C68100000D73310 Fmul
            temp_364 = temp_351 * temp_359;
            // 0x000B68: 0x5C68100000D70F0D Fmul
            temp_365 = temp_356 * temp_359;
            // 0x000B70: 0x59A1070001171010 Ffma
            temp_366 = 0.0 - temp_342;
            temp_367 = fma(temp_364, temp_366, temp_363);
            // 0x000B78: 0xEF95008003872B0E Ldc
            temp_368 = temp_315 + 56;
            temp_369 = uint(temp_368) >> 2;
            temp_370 = temp_369 >> 2;
            temp_371 = int(temp_369) & 3;
            temp_372 = fp_c8.data[int(temp_370)][temp_371];
            temp_373 = int(temp_369) + 1;
            temp_374 = uint(temp_373) >> 2;
            temp_375 = temp_373 & 3;
            temp_376 = fp_c8.data[int(temp_374)][temp_375];
            // 0x000B88: 0x010404000007F011 Mov32i
            // 0x000B90: 0x59A1080000C70D10 Ffma
            temp_377 = 0.0 - temp_349;
            temp_378 = fma(temp_365, temp_377, temp_367);
            // 0x000B98: 0xEF95008003072B0C Ldc
            temp_379 = temp_315 + 48;
            temp_380 = uint(temp_379) >> 2;
            temp_381 = temp_380 >> 2;
            temp_382 = int(temp_380) & 3;
            temp_383 = fp_c8.data[int(temp_381)][temp_382];
            temp_384 = int(temp_380) + 1;
            temp_385 = uint(temp_384) >> 2;
            temp_386 = temp_384 & 3;
            temp_387 = fp_c8.data[int(temp_385)][temp_386];
            // 0x000BA8: 0x59A4078000E7100E Ffma
            temp_388 = fma(temp_378, temp_372, temp_376);
            temp_389 = clamp(temp_388, 0.0, 1.0);
            // 0x000BB0: 0x59A4068003670C36 Ffma
            temp_390 = fma(temp_383, temp_360, temp_387);
            temp_391 = clamp(temp_390, 0.0, 1.0);
            // 0x000BB8: 0x33A008C00007360F Ffma
            temp_392 = fma(temp_391, -2.0, 3.0);
            // 0x000BC8: 0x5C68100003673610 Fmul
            temp_393 = temp_391 * temp_391;
            // 0x000BD0: 0x33A008C000070E11 Ffma
            temp_394 = fma(temp_389, -2.0, 3.0);
            // 0x000BD8: 0x5C68100000E70E0E Fmul
            temp_395 = temp_389 * temp_389;
            // 0x000BE8: 0x5C68100000F7100F Fmul
            temp_396 = temp_393 * temp_392;
            // 0x000BF0: 0x39585042F0073410 Fadd
            temp_397 = abs(temp_353);
            temp_398 = temp_397 + -120.0;
            // 0x000BF8: 0x5C68100001170E0E Fmul
            temp_399 = temp_395 * temp_394;
            // 0x000C08: 0x1EABD4CCCCD71010 Fmul32i
            temp_400 = temp_398 * -0.0500000007;
            temp_401 = clamp(temp_400, 0.0, 1.0);
            // 0x000C10: 0x5C68100000F70E0E Fmul
            temp_402 = temp_399 * temp_396;
            // 0x000C18: 0x36247F9000170F0F Xmad
            temp_403 = floatBitsToUint(temp_396) >> 16;
            temp_404 = int(temp_403) << 16;
            // 0x000C28: 0x5C68100001070E0E Fmul
            temp_405 = temp_402 * temp_401;
            // 0x000C30: 0x5BB383800FF70E07 Fsetp
            temp_406 = temp_405 <= 0.0;
            // 0x000C38: 0x7A05083C0F00FF0F Hadd2
            temp_301 = temp_305;
            temp_407 = uint(temp_404);
            temp_408 = temp_289;
            temp_409 = temp_290;
            temp_410 = temp_291;
            temp_411 = temp_292;
            temp_412 = temp_293;
            temp_413 = temp_294;
            if (temp_406)
            {
                temp_414 = unpackHalf2x16(uint(temp_404)).y;
                temp_415 = packHalf2x16(vec2(1.0, temp_414));
                temp_407 = temp_415;
            }
            // 0x000C48: 0x5D2103902FF70F07 Hsetp2
            temp_416 = unpackHalf2x16(temp_407).x;
            temp_417 = temp_416 == 0.0;
            // 0x000C50: 0xF0F800000008000F Sync
            if (temp_417)
            {
                // 0x000C58: 0x5080000000470C0C Mufu
                temp_418 = 1.0 / temp_383;
                // 0x000C68: 0x5C69100000C70D0D Fmul
                temp_419 = 0.0 - temp_418;
                temp_420 = temp_387 * temp_419;
                // 0x000C70: 0x5C60138000D7340F Fmnmx
                temp_421 = min(temp_353, temp_420);
                // 0x000C78: 0x5C61178000F70D0F Fmnmx
                temp_422 = 0.0 - temp_420;
                temp_423 = max(temp_422, temp_421);
                // 0x000C88: 0xEF94008002C72B0D Ldc
                temp_424 = temp_315 + 44;
                temp_425 = uint(temp_424) >> 2;
                temp_426 = temp_425 >> 2;
                temp_427 = int(temp_425) & 3;
                temp_428 = fp_c8.data[int(temp_426)][temp_427];
                // 0x000C90: 0x59A01A8000F70F0C Ffma
                temp_429 = fma(temp_423, temp_423, temp_357);
                // 0x000C98: 0x5080000000570C11 Mufu
                temp_430 = inversesqrt(temp_429);
                // 0x000CA8: 0x5C68100001173232 Fmul
                temp_431 = temp_344 * temp_430;
                // 0x000CB0: 0x5C68100001173333 Fmul
                temp_432 = temp_351 * temp_430;
                // 0x000CB8: 0x5C68100001170F0F Fmul
                temp_433 = temp_423 * temp_430;
                // 0x000CC8: 0x5C58100003272A10 Fadd
                temp_434 = temp_54 + temp_431;
                // 0x000CD0: 0x5C58100003372911 Fadd
                temp_435 = temp_57 + temp_432;
                // 0x000CD8: 0x5C58100000F72836 Fadd
                temp_436 = temp_67 + temp_433;
                // 0x000CE8: 0x5C68100001071034 Fmul
                temp_437 = temp_434 * temp_434;
                // 0x000CF0: 0x59A01A0001171134 Ffma
                temp_438 = fma(temp_435, temp_435, temp_437);
                // 0x000CF8: 0x59A01A0003673634 Ffma
                temp_439 = fma(temp_436, temp_436, temp_438);
                // 0x000D08: 0x5080000000573437 Mufu
                temp_440 = inversesqrt(temp_439);
                // 0x000D10: 0x5C68100003272734 Fmul
                temp_441 = temp_137 * temp_431;
                // 0x000D18: 0x5C68100003771010 Fmul
                temp_442 = temp_434 * temp_440;
                // 0x000D28: 0x5C68100003771111 Fmul
                temp_443 = temp_435 * temp_440;
                // 0x000D30: 0x59A01A0003370134 Ffma
                temp_444 = fma(temp_138, temp_432, temp_441);
                // 0x000D38: 0x5C68100001073235 Fmul
                temp_445 = temp_431 * temp_442;
                // 0x000D48: 0x5C68100003773632 Fmul
                temp_446 = temp_436 * temp_440;
                // 0x000D50: 0x5080000000870C36 Mufu
                temp_447 = sqrt(temp_429);
                // 0x000D58: 0x5C68100001072710 Fmul
                temp_448 = temp_137 * temp_442;
                // 0x000D68: 0x59A01A0000F71C34 Ffma
                temp_449 = fma(temp_139, temp_433, temp_444);
                // 0x000D70: 0x59A01A8001173335 Ffma
                temp_450 = fma(temp_432, temp_443, temp_445);
                // 0x000D78: 0x5080000000470D33 Mufu
                temp_451 = 1.0 / temp_428;
                // 0x000D88: 0x59A0080001170110 Ffma
                temp_452 = fma(temp_138, temp_443, temp_448);
                // 0x000D90: 0xEF95008000072B0C Ldc
                temp_453 = uint(temp_315) >> 2;
                temp_454 = temp_453 >> 2;
                temp_455 = int(temp_453) & 3;
                temp_456 = fp_c8.data[int(temp_454)][temp_455];
                temp_457 = int(temp_453) + 1;
                temp_458 = uint(temp_457) >> 2;
                temp_459 = temp_457 & 3;
                temp_460 = fp_c8.data[int(temp_458)][temp_459];
                // 0x000D98: 0x59A41A8003270F35 Ffma
                temp_461 = fma(temp_433, temp_446, temp_450);
                temp_462 = clamp(temp_461, 0.0, 1.0);
                // 0x000DA8: 0xEF94008000872B2B Ldc
                temp_463 = temp_315 + 8;
                temp_464 = uint(temp_463) >> 2;
                temp_465 = temp_464 >> 2;
                temp_466 = int(temp_464) & 3;
                temp_467 = fp_c8.data[int(temp_465)][temp_466];
                // 0x000DB0: 0x01040DF760C7F011 Mov32i
                // 0x000DB8: 0x59A4080003271C10 Ffma
                temp_468 = fma(temp_139, temp_446, temp_452);
                temp_469 = clamp(temp_468, 0.0, 1.0);
                // 0x000DC8: 0x5C6810000317310F Fmul
                temp_470 = temp_97 * temp_97;
                // 0x000DD0: 0x51A01B0400373333 Ffma
                temp_471 = fma(temp_451, temp_447, fp_c1.data[0].w);
                // 0x000DD8: 0x5080000000473333 Mufu
                temp_472 = 1.0 / temp_471;
                // 0x000DE8: 0x49A2088400273511 Ffma
                temp_473 = fma(temp_462, fp_c1.data[0].z, -6.98316002);
                // 0x000DF0: 0x59A2080001070F0F Ffma
                temp_474 = 0.0 - temp_469;
                temp_475 = fma(temp_470, temp_469, temp_474);
                // 0x000DF8: 0x5C68100001173535 Fmul
                temp_476 = temp_462 * temp_473;
                // 0x000E08: 0x5C5C30000FF73411 Fadd
                temp_477 = temp_449 + -0.0;
                temp_478 = clamp(temp_477, 0.0, 1.0);
                // 0x000E10: 0x51A007840017100F Ffma
                temp_479 = fma(temp_469, temp_475, fp_c1.data[0].y);
                // 0x000E18: 0x5080000000470F0F Mufu
                temp_480 = 1.0 / temp_479;
                // 0x000E28: 0x5C90008003570035 Rro
                // 0x000E30: 0x59A1088001173010 Ffma
                temp_481 = 0.0 - temp_478;
                temp_482 = fma(temp_108, temp_481, temp_478);
                // 0x000E38: 0x5080000000273535 Mufu
                temp_483 = exp2(temp_476);
                // 0x000E48: 0x1E23FB3333373333 Fmul32i
                temp_484 = temp_472 * 1.39999998;
                // 0x000E50: 0x5C58100001073010 Fadd
                temp_485 = temp_108 + temp_482;
                // 0x000E58: 0x5C68100003373333 Fmul
                temp_486 = temp_484 * temp_484;
                // 0x000E68: 0x5080000000471010 Mufu
                temp_487 = 1.0 / temp_485;
                // 0x000E70: 0x5C68100000F7310F Fmul
                temp_488 = temp_97 * temp_480;
                // 0x000E78: 0x59A11A8003571732 Ffma
                temp_489 = 0.0 - temp_483;
                temp_490 = fma(temp_184, temp_489, temp_483);
                // 0x000E88: 0x59A1198003373433 Ffma
                temp_491 = 0.0 - temp_486;
                temp_492 = fma(temp_449, temp_491, temp_486);
                // 0x000E90: 0x5C68100000F70F0F Fmul
                temp_493 = temp_488 * temp_488;
                // 0x000E98: 0x5C68100000C70E0C Fmul
                temp_494 = temp_405 * temp_456;
                // 0x000EA8: 0x5C68100000D70E0D Fmul
                temp_495 = temp_405 * temp_460;
                // 0x000EB0: 0x5C68100001072E10 Fmul
                temp_496 = temp_193 * temp_487;
                // 0x000EB8: 0x5C58100003271732 Fadd
                temp_497 = temp_184 + temp_490;
                // 0x000EC8: 0x5C5C100003373433 Fadd
                temp_498 = temp_449 + temp_492;
                temp_499 = clamp(temp_498, 0.0, 1.0);
                // 0x000ED0: 0x5C68100002B70E2B Fmul
                temp_500 = temp_405 * temp_467;
                // 0x000ED8: 0x59A11A800357160E Ffma
                temp_501 = 0.0 - temp_483;
                temp_502 = fma(temp_127, temp_501, temp_483);
                // 0x000EE8: 0x59A11A8003571535 Ffma
                temp_503 = 0.0 - temp_483;
                temp_504 = fma(temp_122, temp_503, temp_483);
                // 0x000EF0: 0x5C68100001070F0F Fmul
                temp_505 = temp_493 * temp_496;
                // 0x000EF8: 0x4C68101406473232 Fmul
                temp_506 = temp_497 * fp_c5.data[25].x;
                // 0x000F08: 0x5C68100003370D10 Fmul
                temp_507 = temp_495 * temp_499;
                // 0x000F10: 0x5C58100000E7160E Fadd
                temp_508 = temp_127 + temp_502;
                // 0x000F18: 0x5C58100003571535 Fadd
                temp_509 = temp_122 + temp_504;
                // 0x000F28: 0x5C68100000F7110F Fmul
                temp_510 = temp_478 * temp_505;
                // 0x000F30: 0x5C68100003270C32 Fmul
                temp_511 = temp_494 * temp_506;
                // 0x000F38: 0x5C68100003370C0C Fmul
                temp_512 = temp_494 * temp_499;
                // 0x000F48: 0x49A0048400571009 Ffma
                temp_513 = fma(temp_507, fp_c1.data[1].y, temp_289);
                // 0x000F50: 0x4C68101406470E0E Fmul
                temp_514 = temp_508 * fp_c5.data[25].x;
                // 0x000F58: 0x4C68101406473535 Fmul
                temp_515 = temp_509 * fp_c5.data[25].x;
                // 0x000F68: 0x5C68100000F73232 Fmul
                temp_516 = temp_511 * temp_510;
                // 0x000F70: 0x49A0050400570C0A Ffma
                temp_517 = fma(temp_512, fp_c1.data[1].y, temp_290);
                // 0x000F78: 0x5C68100000E70D0E Fmul
                temp_518 = temp_495 * temp_514;
                // 0x000F88: 0x5C68100003572B35 Fmul
                temp_519 = temp_500 * temp_515;
                // 0x000F90: 0x5C68100003372B2B Fmul
                temp_520 = temp_500 * temp_499;
                // 0x000F98: 0x49A0038400473207 Ffma
                temp_521 = fma(temp_516, fp_c1.data[1].x, temp_291);
                // 0x000FA8: 0x5C68100000F70E0D Fmul
                temp_522 = temp_518 * temp_510;
                // 0x000FB0: 0x5C68100000F7350F Fmul
                temp_523 = temp_519 * temp_510;
                // 0x000FB8: 0x49A0040400572B08 Ffma
                temp_524 = fma(temp_520, fp_c1.data[1].y, temp_292);
                // 0x000FC8: 0x49A0030400470D06 Ffma
                temp_525 = fma(temp_522, fp_c1.data[1].x, temp_293);
                // 0x000FD0: 0x49A0028400470F05 Ffma
                temp_526 = fma(temp_523, fp_c1.data[1].x, temp_294);
                // 0x000FD8: 0xF0F800000007000F Sync
                temp_408 = temp_513;
                temp_409 = temp_517;
                temp_410 = temp_521;
                temp_411 = temp_524;
                temp_412 = temp_525;
                temp_413 = temp_526;
            }
            // 0x000FE8: 0xE2400FFFA209000F Bra
            temp_289 = temp_408;
            temp_290 = temp_409;
            temp_291 = temp_410;
            temp_292 = temp_411;
            temp_293 = temp_412;
            temp_294 = temp_413;
            temp_295 = temp_411;
            temp_296 = temp_410;
            temp_297 = temp_413;
            temp_298 = temp_412;
            temp_299 = temp_409;
            temp_300 = temp_408;
        }
        while (!temp_302);
        // 0x000FF0: 0xF0F800000007000F Sync
    }
    // 0x000FF8: 0x4C58101405472727 Fadd
    temp_527 = temp_137 + fp_c5.data[21].x;
    // 0x001008: 0xE003FF87CFF7FF29 Ipa
    // 0x001010: 0x4C5810140557010C Fadd
    temp_528 = temp_138 + fp_c5.data[21].y;
    // 0x001018: 0xEF4410000047FF33 Ldl
    temp_529 = uintBitsToFloat(local_memory[1]);
    // 0x001028: 0x5C6810000277270D Fmul
    temp_530 = temp_527 * temp_527;
    // 0x001030: 0xEF4410000007FF32 Ldl
    temp_531 = uintBitsToFloat(local_memory[0]);
    // 0x001038: 0x4C59101405671C1C Fadd
    temp_532 = 0.0 - temp_139;
    temp_533 = temp_532 + fp_c5.data[21].z;
    // 0x001048: 0x38681040E007212E Fmul
    temp_534 = temp_85 * 7.0;
    // 0x001050: 0x5C62578001D7260F Fmnmx
    temp_535 = abs(temp_281);
    temp_536 = abs(temp_283);
    temp_537 = max(temp_535, temp_536);
    // 0x001058: 0x4C98079C0207002B Mov
    // 0x001068: 0x59A0068000C70C0D Ffma
    temp_538 = fma(temp_528, temp_528, temp_530);
    // 0x001070: 0x5C60578000F71228 Fmnmx
    temp_539 = abs(temp_285);
    temp_540 = max(temp_539, temp_537);
    // 0x001078: 0x5080000000472828 Mufu
    temp_541 = 1.0 / temp_540;
    // 0x001088: 0x59A0068001C71C0D Ffma
    temp_542 = fma(temp_533, temp_533, temp_538);
    // 0x001090: 0x5080000000570D0D Mufu
    temp_543 = inversesqrt(temp_542);
    // 0x001098: 0x5C6910000287120F Fmul
    temp_544 = 0.0 - temp_541;
    temp_545 = temp_285 * temp_544;
    // 0x0010A8: 0x5C68100000D72710 Fmul
    temp_546 = temp_527 * temp_543;
    // 0x0010B0: 0x5080000000472927 Mufu
    // 0x0010B8: 0x5C68100000D70C11 Fmul
    temp_547 = temp_528 * temp_543;
    // 0x0010C8: 0x5C68100000D71C1C Fmul
    temp_548 = temp_533 * temp_543;
    // 0x0010D0: 0x5C6810000287260D Fmul
    temp_549 = temp_281 * temp_541;
    // 0x0010D8: 0x5C6257800117100E Fmnmx
    temp_550 = abs(temp_546);
    temp_551 = abs(temp_547);
    temp_552 = max(temp_550, temp_551);
    // 0x0010E8: 0xE043FF914277FF29 Ipa
    temp_553 = in_attr9.y;
    // 0x0010F0: 0x5C60578000E71C0C Fmnmx
    temp_554 = abs(temp_548);
    temp_555 = max(temp_554, temp_552);
    // 0x0010F8: 0xE043FF918277FF2A Ipa
    temp_556 = in_attr9.z;
    // 0x001108: 0x010410676C97F02D Mov32i
    // 0x001110: 0x5080000000470C0E Mufu
    temp_557 = 1.0 / temp_555;
    // 0x001118: 0x010000000017F00C Mov32i
    // 0x001128: 0x5C68100000E71C1C Fmul
    temp_558 = temp_548 * temp_557;
    // 0x001130: 0x5C68100000E71010 Fmul
    temp_559 = temp_546 * temp_557;
    // 0x001138: 0x5C68100000E71111 Fmul
    temp_560 = temp_547 * temp_557;
    // 0x001148: 0x5C68100002871D0E Fmul
    temp_561 = temp_283 * temp_541;
    // 0x001150: 0xE043FF910277FF28 Ipa
    temp_562 = in_attr9.x;
    // 0x001158: 0x386810408007211D Fmul
    temp_563 = temp_85 * 4.0;
    // 0x001168: 0x5C98078001C70012 Mov
    // 0x001170: 0xD9A2018261C7101C Texs
    temp_564 = textureLod(fp_t_tcb_18, vec3(temp_559, temp_560, temp_558), temp_563).xyz;
    temp_565 = temp_564.x;
    temp_566 = temp_564.y;
    temp_567 = temp_564.z;
    // 0x001178: 0xC0BA0163EFF71010 Tex
    temp_568 = textureLod(fp_t_tcb_16, vec3(temp_559, temp_560, temp_558), 0.0).xyz;
    temp_569 = temp_568.x;
    temp_570 = temp_568.y;
    temp_571 = temp_568.z;
    // 0x001188: 0xC1BA0143F2E70C0C Tex
    temp_572 = textureLod(fp_t_tcb_14, vec4(temp_549, temp_561, temp_545, float(1)), temp_534).xyz;
    temp_573 = temp_572.x;
    temp_574 = temp_572.y;
    temp_575 = temp_572.z;
    // 0x001190: 0xDEBA0000C2B72828 TexB
    temp_576 = texture(fp_t_cb7_20, vec3(temp_562, temp_553, temp_556)).x;
    // 0x001198: 0x3859103F80072121 Fadd
    temp_577 = 0.0 - temp_85;
    temp_578 = temp_577 + 1.0;
    // 0x0011A8: 0x1E23E468DB97202C Fmul32i
    temp_579 = temp_155 * 0.193900004;
    // 0x0011B0: 0x49A012980A170825 Ffma
    temp_580 = fma(temp_295, fp_c6.data[40].y, temp_270);
    // 0x0011B8: 0x49A0168400A7202D Ffma
    temp_581 = fma(temp_155, fp_c1.data[2].z, 8.40400028);
    // 0x0011C8: 0x0103E2CD9E87F008 Mov32i
    // 0x0011D0: 0x49A012180A170724 Ffma
    temp_582 = fma(temp_296, fp_c6.data[40].y, temp_286);
    // 0x0011D8: 0x5C68100002172121 Fmul
    temp_583 = temp_578 * temp_578;
    // 0x0011E8: 0x0104066978D7F007 Mov32i
    // 0x0011F0: 0x49A011980A170523 Ffma
    temp_584 = fma(temp_297, fp_c6.data[40].y, temp_288);
    // 0x0011F8: 0xE04BFF904277FF05 Ipa
    temp_585 = in_attr8.y;
    temp_586 = clamp(temp_585, 0.0, 1.0);
    // 0x001208: 0x51A0168400B7202D Ffma
    temp_587 = fma(temp_155, temp_581, fp_c1.data[2].w);
    // 0x001210: 0x49A011180A170622 Ffma
    temp_588 = fma(temp_298, fp_c6.data[40].y, temp_287);
    // 0x001218: 0x5C68100002172121 Fmul
    temp_589 = temp_583 * temp_583;
    // 0x001228: 0x51A0168400C7202D Ffma
    temp_590 = fma(temp_155, temp_587, fp_c1.data[3].x);
    // 0x001230: 0x49A016040067212C Ffma
    temp_591 = fma(temp_589, fp_c1.data[1].z, temp_579);
    // 0x001238: 0x49A2040400972108 Ffma
    temp_592 = fma(temp_589, fp_c1.data[2].y, -0.168799996);
    // 0x001248: 0x49A2038400772107 Ffma
    temp_593 = fma(temp_589, fp_c1.data[1].w, -3.60299993);
    // 0x001250: 0x088BF05D63972C0F Fadd32i
    temp_594 = temp_591 + -0.522800028;
    // 0x001258: 0x5C68100000872108 Fmul
    temp_595 = temp_589 * temp_592;
    // 0x001268: 0x51A0038400872107 Ffma
    temp_596 = fma(temp_589, temp_593, fp_c1.data[2].x);
    // 0x001270: 0x0103F0000007F02A Mov32i
    // 0x001278: 0x4C98079800A7002B Mov
    // 0x001288: 0x010404000007F02C Mov32i
    // 0x001290: 0x5C68100000F72020 Fmul
    temp_597 = temp_155 * temp_594;
    // 0x001298: 0x5C60138002D70806 Fmnmx
    temp_598 = min(temp_595, temp_590);
    // 0x0012A8: 0x386C104248071608 Fmul
    temp_599 = temp_127 * 50.0;
    temp_600 = clamp(temp_599, 0.0, 1.0);
    // 0x0012B0: 0x32A0153F00070101 Ffma
    temp_601 = fma(temp_138, 0.5, 0.5);
    // 0x0012B8: 0x4C9807980097002A Mov
    // 0x0012C8: 0x4C59101800672B2B Fadd
    temp_602 = 0.0 - fp_c6.data[2].z;
    temp_603 = temp_602 + fp_c6.data[1].z;
    // 0x0012D0: 0x59A0100000772107 Ffma
    temp_604 = fma(temp_589, temp_596, temp_597);
    // 0x0012D8: 0x4C98079800870020 Mov
    // 0x0012E8: 0x5C5C30000FF70606 Fadd
    temp_605 = temp_598 + -0.0;
    temp_606 = clamp(temp_605, 0.0, 1.0);
    // 0x0012F0: 0x4C9807980B470029 Mov
    // 0x0012F8: 0x4C59101800572A2A Fadd
    temp_607 = 0.0 - fp_c6.data[2].y;
    temp_608 = temp_607 + fp_c6.data[1].y;
    // 0x001308: 0x4C5C100400D70707 Fadd
    temp_609 = temp_604 + fp_c1.data[3].y;
    temp_610 = clamp(temp_609, 0.0, 1.0);
    // 0x001310: 0x4C59101800472020 Fadd
    temp_611 = 0.0 - fp_c6.data[2].x;
    temp_612 = temp_611 + fp_c6.data[1].x;
    // 0x001318: 0x5C6810000087060F Fmul
    temp_613 = temp_606 * temp_600;
    // 0x001328: 0xF0F0000034670000 Depbar
    // 0x001330: 0x51A214980B471A1A Ffma
    temp_614 = 0.0 - fp_c6.data[45].x;
    temp_615 = fma(temp_23, fp_c6.data[45].x, temp_614);
    // 0x001338: 0x51A214980B471B1B Ffma
    temp_616 = 0.0 - fp_c6.data[45].x;
    temp_617 = fma(temp_24, fp_c6.data[45].x, temp_616);
    // 0x001348: 0x51A214980B470000 Ffma
    temp_618 = 0.0 - fp_c6.data[45].x;
    temp_619 = fma(temp_25, fp_c6.data[45].x, temp_618);
    // 0x001350: 0x5C59100000770608 Fadd
    temp_620 = 0.0 - temp_606;
    temp_621 = temp_620 + temp_610;
    // 0x001358: 0x51A0009800872020 Ffma
    temp_622 = fma(temp_612, temp_601, fp_c6.data[2].x);
    // 0x001368: 0x51A0009800972A07 Ffma
    temp_623 = fma(temp_608, temp_601, fp_c6.data[2].y);
    // 0x001370: 0x51A0009800A72B06 Ffma
    temp_624 = fma(temp_603, temp_601, fp_c6.data[2].z);
    // 0x001378: 0x33A0164000070501 Ffma
    temp_625 = fma(temp_586, -2.0, 3.0);
    // 0x001388: 0x5C6810000057052A Fmul
    temp_626 = temp_586 * temp_586;
    // 0x001390: 0x59A0078000871717 Ffma
    temp_627 = fma(temp_184, temp_621, temp_613);
    // 0x001398: 0x59A0078000871616 Ffma
    temp_628 = fma(temp_127, temp_621, temp_613);
    // 0x0013A8: 0x59A0078000871515 Ffma
    temp_629 = fma(temp_122, temp_621, temp_613);
    // 0x0013B0: 0x5C68100002A70101 Fmul
    temp_630 = temp_625 * temp_626;
    // 0x0013B8: 0x4C68101406471717 Fmul
    temp_631 = temp_627 * fp_c5.data[25].x;
    // 0x0013C8: 0x4C68101406471515 Fmul
    temp_632 = temp_629 * fp_c5.data[25].x;
    // 0x0013D0: 0x4C68101803770101 Fmul
    temp_633 = temp_630 * fp_c6.data[13].w;
    // 0x0013D8: 0xF0F0000034470000 Depbar
    // 0x0013E8: 0x49A019980A170A0A Ffma
    temp_634 = fma(temp_299, fp_c6.data[40].y, temp_529);
    // 0x0013F0: 0x49A019180A170909 Ffma
    temp_635 = fma(temp_300, fp_c6.data[40].y, temp_531);
    // 0x0013F8: 0xF0F0000034170000 Depbar
    // 0x001408: 0x4C68101407871C05 Fmul
    temp_636 = temp_565 * fp_c5.data[30].x;
    // 0x001410: 0x4C68101407871D08 Fmul
    temp_637 = temp_566 * fp_c5.data[30].x;
    // 0x001418: 0x4C6810140787100F Fmul
    temp_638 = temp_569 * fp_c5.data[30].x;
    // 0x001428: 0x4C68101407871111 Fmul
    temp_639 = temp_570 * fp_c5.data[30].x;
    // 0x001430: 0x49A0029808570C1D Ffma
    temp_640 = fma(temp_573, fp_c6.data[33].y, temp_636);
    // 0x001438: 0xE043FF900277FF05 Ipa
    temp_641 = in_attr8.x;
    // 0x001448: 0x49A0041808570D0D Ffma
    temp_642 = fma(temp_574, fp_c6.data[33].y, temp_637);
    // 0x001450: 0xE043FF8C8277FF27 Ipa
    temp_643 = in_attr4.z;
    // 0x001458: 0x49A007840057200F Ffma
    temp_644 = fma(temp_622, fp_c1.data[1].y, temp_638);
    // 0x001468: 0x4C68101407871208 Fmul
    temp_645 = temp_571 * fp_c5.data[30].x;
    // 0x001470: 0x49A0088400570710 Ffma
    temp_646 = fma(temp_623, fp_c1.data[1].y, temp_639);
    // 0x001478: 0x4C6810140787260C Fmul
    temp_647 = temp_567 * fp_c5.data[30].x;
    // 0x001488: 0x4C68101406471607 Fmul
    temp_648 = temp_628 * fp_c5.data[25].x;
    // 0x001490: 0x59A0120001D71717 Ffma
    temp_649 = fma(temp_631, temp_640, temp_582);
    // 0x001498: 0x5C58100000A70F0A Fadd
    temp_650 = temp_644 + temp_634;
    // 0x0014A8: 0x49A0040400570606 Ffma
    temp_651 = fma(temp_624, fp_c1.data[1].y, temp_645);
    // 0x0014B0: 0x5C58100000971009 Fadd
    temp_652 = temp_646 + temp_635;
    // 0x0014B8: 0x49A0061808570E0C Ffma
    temp_653 = fma(temp_575, fp_c6.data[33].y, temp_647);
    // 0x0014C8: 0x59A0110000D70707 Ffma
    temp_654 = fma(temp_648, temp_642, temp_588);
    // 0x0014D0: 0x59A1050000A71F08 Ffma
    temp_655 = 0.0 - temp_650;
    temp_656 = fma(temp_15, temp_655, temp_650);
    // 0x0014D8: 0x5C58100002570606 Fadd
    temp_657 = temp_651 + temp_580;
    // 0x0014E8: 0x59A1048000971F0A Ffma
    temp_658 = 0.0 - temp_652;
    temp_659 = fma(temp_15, temp_658, temp_652);
    // 0x0014F0: 0x59A0118000C71515 Ffma
    temp_660 = fma(temp_632, temp_653, temp_584);
    // 0x0014F8: 0x4C98079802970009 Mov
    // 0x001508: 0x59A00B8000871E17 Ffma
    temp_661 = fma(temp_100, temp_656, temp_649);
    // 0x001510: 0x59A1030000671F06 Ffma
    temp_662 = 0.0 - temp_657;
    temp_663 = fma(temp_15, temp_662, temp_657);
    // 0x001518: 0x59A0038000A7190A Ffma
    temp_664 = fma(temp_101, temp_659, temp_654);
    // 0x001528: 0x4C98079802870008 Mov
    // 0x001530: 0x49A502980BC72805 Ffma
    temp_665 = 0.0 - fp_c6.data[47].x;
    temp_666 = fma(temp_576, temp_665, temp_641);
    temp_667 = clamp(temp_666, 0.0, 1.0);
    // 0x001538: 0x5C68100001770407 Fmul
    temp_668 = temp_275 * temp_661;
    // 0x001548: 0x5080000000370505 Mufu
    temp_669 = log2(temp_667);
    // 0x001550: 0x59A00A8000671815 Ffma
    temp_670 = fma(temp_102, temp_663, temp_660);
    // 0x001558: 0x5C68100000A70304 Fmul
    temp_671 = temp_277 * temp_664;
    // 0x001568: 0x51A0041802871A1A Ffma
    temp_672 = fma(temp_615, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001570: 0x4C98079802A70006 Mov
    // 0x001578: 0x51A0049802971B08 Ffma
    temp_673 = fma(temp_617, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001588: 0x49A0039406C71414 Ffma
    temp_674 = fma(temp_261, fp_c5.data[27].x, temp_668);
    // 0x001590: 0x5C68100001570202 Fmul
    temp_675 = temp_279 * temp_670;
    // 0x001598: 0x49A0021406C71313 Ffma
    temp_676 = fma(temp_247, fp_c5.data[27].x, temp_671);
    // 0x0015A8: 0x49A2009803570107 Ffma
    temp_677 = 0.0 - temp_633;
    temp_678 = fma(temp_633, fp_c6.data[13].y, temp_677);
    // 0x0015B0: 0x51A0031802A70000 Ffma
    temp_679 = fma(temp_619, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0015B8: 0x5C58300001A71403 Fadd
    temp_680 = 0.0 - temp_672;
    temp_681 = temp_674 + temp_680;
    // 0x0015C8: 0x49A0011406C70B0B Ffma
    temp_682 = fma(temp_251, fp_c5.data[27].x, temp_675);
    // 0x0015D0: 0x5C58300000871302 Fadd
    temp_683 = 0.0 - temp_673;
    temp_684 = temp_676 + temp_683;
    // 0x0015D8: 0x4C68101803170506 Fmul
    temp_685 = temp_669 * fp_c6.data[12].y;
    // 0x0015E8: 0x49A2009803470105 Ffma
    temp_686 = 0.0 - temp_633;
    temp_687 = fma(temp_633, fp_c6.data[13].x, temp_686);
    // 0x0015F0: 0x49A2009803670101 Ffma
    temp_688 = 0.0 - temp_633;
    temp_689 = fma(temp_633, fp_c6.data[13].z, temp_688);
    // 0x0015F8: 0x49A00D180BF70304 Ffma
    temp_690 = fma(temp_681, fp_c6.data[47].w, temp_672);
    // 0x001608: 0x5C58300000070B03 Fadd
    temp_691 = 0.0 - temp_679;
    temp_692 = temp_682 + temp_691;
    // 0x001610: 0x49A004180BF70202 Ffma
    temp_693 = fma(temp_684, fp_c6.data[47].w, temp_673);
    // 0x001618: 0x5C90008000670009 Rro
    // 0x001628: 0x5C60178000471A04 Fmnmx
    temp_694 = max(temp_672, temp_690);
    // 0x001630: 0x49A000180BF70303 Ffma
    temp_695 = fma(temp_692, fp_c6.data[47].w, temp_679);
    // 0x001638: 0x5C60178000270802 Fmnmx
    temp_696 = max(temp_673, temp_693);
    // 0x001648: 0x5080000000270908 Mufu
    temp_697 = exp2(temp_685);
    // 0x001650: 0x59A0020000570406 Ffma
    temp_698 = fma(temp_694, temp_687, temp_694);
    // 0x001658: 0x5C60178000370003 Fmnmx
    temp_699 = max(temp_679, temp_695);
    // 0x001668: 0x59A0010000770202 Ffma
    temp_700 = fma(temp_696, temp_678, temp_696);
    // 0x001670: 0x0103F8000007F007 Mov32i
    // 0x001678: 0x59A0018000170304 Ffma
    temp_701 = fma(temp_699, temp_689, temp_699);
    // 0x001688: 0x5C59100000671401 Fadd
    temp_702 = 0.0 - temp_674;
    temp_703 = temp_702 + temp_698;
    // 0x001690: 0x4C68101802B70805 Fmul
    temp_704 = temp_697 * fp_c6.data[10].w;
    // 0x001698: 0x5C59100000271302 Fadd
    temp_705 = 0.0 - temp_676;
    temp_706 = temp_705 + temp_700;
    // 0x0016A8: 0x4C58100C03872708 Fadd
    temp_707 = temp_643 + fp_c3.data[14].x;
    // 0x0016B0: 0x0103F8000007F003 Mov32i
    // 0x0016B8: 0x5C59100000470B04 Fadd
    temp_708 = 0.0 - temp_682;
    temp_709 = temp_708 + temp_701;
    // 0x0016C8: 0x5C9807800FF70006 Mov
    // 0x0016D0: 0x59A00A0000570100 Ffma
    temp_710 = fma(temp_703, temp_704, temp_674);
    // 0x0016D8: 0x59A0098000570201 Ffma
    temp_711 = fma(temp_706, temp_704, temp_676);
    // 0x0016E8: 0x59A0058000570402 Ffma
    temp_712 = fma(temp_709, temp_704, temp_682);
    // 0x0016F0: 0x0103EC000007F005 Mov32i
    // 0x0016F8: 0x49A37F8C03C70804 Ffma
    temp_713 = 0.0 - fp_c3.data[15].x;
    temp_714 = fma(temp_707, temp_713, -0.0);
    // 0x001708: 0xE30000000007000F Exit
    out_attr0.x = temp_710;
    out_attr0.y = temp_711;
    out_attr0.z = temp_712;
    out_attr0.w = 1.0;
    out_attr1.x = temp_714;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
