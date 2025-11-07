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
layout (binding = 2) uniform sampler2D fp_t_tcb_36;
layout (binding = 3) uniform sampler2D fp_t_tcb_20;
layout (binding = 4) uniform sampler2D fp_t_tcb_22;
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
    precise vec3 temp_18;
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
    bool temp_59;
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
    precise vec4 temp_91;
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
    uint temp_162;
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
    int temp_183;
    precise float temp_184;
    precise float temp_185;
    int temp_186;
    uint temp_187;
    uint temp_188;
    int temp_189;
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
    bool temp_242;
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
    int temp_287;
    bool temp_288;
    int temp_289;
    int temp_290;
    int temp_291;
    int temp_292;
    int temp_293;
    uint temp_294;
    uint temp_295;
    int temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    int temp_301;
    int temp_302;
    uint temp_303;
    uint temp_304;
    int temp_305;
    precise float temp_306;
    int temp_307;
    uint temp_308;
    int temp_309;
    precise float temp_310;
    int temp_311;
    uint temp_312;
    uint temp_313;
    int temp_314;
    precise float temp_315;
    int temp_316;
    uint temp_317;
    int temp_318;
    precise float temp_319;
    int temp_320;
    uint temp_321;
    uint temp_322;
    int temp_323;
    precise float temp_324;
    int temp_325;
    uint temp_326;
    int temp_327;
    precise float temp_328;
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
    int temp_347;
    uint temp_348;
    uint temp_349;
    int temp_350;
    precise float temp_351;
    precise float temp_352;
    precise float temp_353;
    int temp_354;
    uint temp_355;
    uint temp_356;
    int temp_357;
    precise float temp_358;
    int temp_359;
    uint temp_360;
    int temp_361;
    precise float temp_362;
    precise float temp_363;
    precise float temp_364;
    int temp_365;
    uint temp_366;
    uint temp_367;
    int temp_368;
    precise float temp_369;
    int temp_370;
    uint temp_371;
    int temp_372;
    precise float temp_373;
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
    uint temp_389;
    int temp_390;
    precise float temp_391;
    bool temp_392;
    uint temp_393;
    precise float temp_394;
    precise float temp_395;
    precise float temp_396;
    precise float temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    uint temp_401;
    precise float temp_402;
    bool temp_403;
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
    int temp_416;
    uint temp_417;
    uint temp_418;
    int temp_419;
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
    precise float temp_460;
    int temp_461;
    uint temp_462;
    uint temp_463;
    int temp_464;
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
    precise vec3 temp_536;
    precise float temp_537;
    precise float temp_538;
    precise float temp_539;
    precise vec3 temp_540;
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
    // 0x000008: 0xE003FF87CFF7FF0C Ipa
    // 0x000010: 0xE003FF870FF7FF04 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000018: 0xE003FF874FF7FF05 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000028: 0x5080000000470C0C Mufu
    // 0x000030: 0x4C68100C04A70404 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000038: 0x4C68100C04B70505 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000048: 0xE043FF8E00C7FF0E Ipa
    temp_8 = in_attr6.x;
    // 0x000050: 0xE043FF8E40C7FF0F Ipa
    temp_9 = in_attr6.y;
    // 0x000058: 0xD830026FF0F70E02 Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000068: 0xD8300241A0F70E1E Texs
    temp_13 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyzw;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    temp_16 = temp_13.z;
    temp_17 = temp_13.w;
    // 0x000070: 0xD824036070F70E26 Texs
    temp_18 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_19 = temp_18.x;
    temp_20 = temp_18.y;
    temp_21 = temp_18.z;
    // 0x000078: 0xD822020010570422 Texs
    temp_22 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_23 = temp_22.x;
    temp_24 = temp_22.y;
    temp_25 = temp_22.z;
    // 0x000088: 0xE043FF8A00C7FF00 Ipa
    temp_26 = in_attr2.x;
    // 0x000090: 0xE043FF8A40C7FF06 Ipa
    temp_27 = in_attr2.y;
    // 0x000098: 0xE043FF8A80C7FF08 Ipa
    temp_28 = in_attr2.z;
    // 0x0000A8: 0xE043FF8900C7FF0A Ipa
    temp_29 = in_attr1.x;
    // 0x0000B0: 0xE043FF8940C7FF0B Ipa
    temp_30 = in_attr1.y;
    // 0x0000B8: 0xE043FF8800C7FF12 Ipa
    temp_31 = in_attr0.x;
    // 0x0000C8: 0xE043FF8980C7FF0D Ipa
    temp_32 = in_attr1.z;
    // 0x0000D0: 0xE043FF8840C7FF13 Ipa
    temp_33 = in_attr0.y;
    // 0x0000D8: 0xE043FF8880C7FF0F Ipa
    temp_34 = in_attr0.z;
    // 0x0000E8: 0x5C68100000070009 Fmul
    temp_35 = temp_26 * temp_26;
    // 0x0000F0: 0x5C68100000A70A0E Fmul
    temp_36 = temp_29 * temp_29;
    // 0x0000F8: 0x5C68100001271214 Fmul
    temp_37 = temp_31 * temp_31;
    // 0x000108: 0x59A0048000670609 Ffma
    temp_38 = fma(temp_27, temp_27, temp_35);
    // 0x000110: 0x59A0070000B70B0E Ffma
    temp_39 = fma(temp_30, temp_30, temp_36);
    // 0x000118: 0x59A00A0001371314 Ffma
    temp_40 = fma(temp_33, temp_33, temp_37);
    // 0x000128: 0x59A0048000870809 Ffma
    temp_41 = fma(temp_28, temp_28, temp_38);
    // 0x000130: 0x5080000000570909 Mufu
    temp_42 = inversesqrt(temp_41);
    // 0x000138: 0x59A0070000D70D0E Ffma
    temp_43 = fma(temp_32, temp_32, temp_39);
    // 0x000148: 0x5080000000570E10 Mufu
    temp_44 = inversesqrt(temp_43);
    // 0x000150: 0x59A00A0000F70F14 Ffma
    temp_45 = fma(temp_34, temp_34, temp_40);
    // 0x000158: 0x5080000000571414 Mufu
    temp_46 = inversesqrt(temp_45);
    // 0x000168: 0x5C68100000970011 Fmul
    temp_47 = temp_26 * temp_42;
    // 0x000170: 0x5C68100000970606 Fmul
    temp_48 = temp_27 * temp_42;
    // 0x000178: 0x5C68100000970808 Fmul
    temp_49 = temp_28 * temp_42;
    // 0x000188: 0x5C68100001070A00 Fmul
    temp_50 = temp_29 * temp_44;
    // 0x000190: 0x5C68100001070B0B Fmul
    temp_51 = temp_30 * temp_44;
    // 0x000198: 0x5C68100001070D0D Fmul
    temp_52 = temp_32 * temp_44;
    // 0x0001A8: 0x5C68100001471212 Fmul
    temp_53 = temp_31 * temp_46;
    // 0x0001B0: 0x5C68100001471313 Fmul
    temp_54 = temp_33 * temp_46;
    // 0x0001B8: 0x5C68100001470F0F Fmul
    temp_55 = temp_34 * temp_46;
    // 0x0001C8: 0xF0F0000034270000 Depbar
    // 0x0001D0: 0x5C68100000370309 Fmul
    temp_56 = temp_12 * temp_12;
    // 0x0001D8: 0x5C68100000371111 Fmul
    temp_57 = temp_47 * temp_12;
    // 0x0001E8: 0x5C68100000370808 Fmul
    temp_58 = temp_49 * temp_12;
    // 0x0001F0: 0x4BB1839406071B07 Fsetp
    temp_59 = temp_17 < fp_c5.data[24].x;
    // 0x0001F8: 0x59A0048000270209 Ffma
    temp_60 = fma(temp_11, temp_11, temp_56);
    // 0x000208: 0x59A0088000270011 Ffma
    temp_61 = fma(temp_50, temp_11, temp_57);
    // 0x000210: 0x5C68100000370600 Fmul
    temp_62 = temp_48 * temp_12;
    // 0x000218: 0x59A0040000270D08 Ffma
    temp_63 = fma(temp_52, temp_11, temp_58);
    // 0x000228: 0x385D103F80070909 Fadd
    temp_64 = 0.0 - temp_60;
    temp_65 = temp_64 + 1.0;
    temp_66 = clamp(temp_65, 0.0, 1.0);
    // 0x000230: 0x5080000000870909 Mufu
    temp_67 = sqrt(temp_66);
    // 0x000238: 0x59A0000000270B00 Ffma
    temp_68 = fma(temp_51, temp_11, temp_62);
    // 0x000248: 0x59A0088000971211 Ffma
    temp_69 = fma(temp_53, temp_67, temp_61);
    // 0x000250: 0x59A0000000971300 Ffma
    temp_70 = fma(temp_54, temp_67, temp_68);
    // 0x000258: 0x59A0040000970F08 Ffma
    temp_71 = fma(temp_55, temp_67, temp_63);
    // 0x000268: 0x5C68100001171102 Fmul
    temp_72 = temp_69 * temp_69;
    // 0x000270: 0x59A0010000070002 Ffma
    temp_73 = fma(temp_70, temp_70, temp_72);
    // 0x000278: 0x59A0010000870802 Ffma
    temp_74 = fma(temp_71, temp_71, temp_73);
    // 0x000288: 0x5080000000570202 Mufu
    temp_75 = inversesqrt(temp_74);
    // 0x000290: 0x5C68100000270812 Fmul
    temp_76 = temp_71 * temp_75;
    // 0x000298: 0x5C68100000270000 Fmul
    temp_77 = temp_70 * temp_75;
    // 0x0002A8: 0x5C6810000027110E Fmul
    temp_78 = temp_69 * temp_75;
    // 0x0002B0: 0x4C68100C00671206 Fmul
    temp_79 = temp_76 * fp_c3.data[1].z;
    // 0x0002B8: 0x4C68100C00271203 Fmul
    temp_80 = temp_76 * fp_c3.data[0].z;
    // 0x0002C8: 0x49A0030C00570008 Ffma
    temp_81 = fma(temp_77, fp_c3.data[1].y, temp_79);
    // 0x0002D0: 0x49A0018C00170003 Ffma
    temp_82 = fma(temp_77, fp_c3.data[0].y, temp_80);
    // 0x0002D8: 0x49A0040C00470E08 Ffma
    temp_83 = fma(temp_78, fp_c3.data[1].x, temp_81);
    // 0x0002E8: 0x49A0018C00070E03 Ffma
    temp_84 = fma(temp_78, fp_c3.data[0].x, temp_82);
    // 0x0002F0: 0x4C69100C03E70808 Fmul
    temp_85 = 0.0 - fp_c3.data[15].z;
    temp_86 = temp_83 * temp_85;
    // 0x0002F8: 0x4C68101808B70303 Fmul
    temp_87 = temp_84 * fp_c6.data[34].w;
    // 0x000308: 0x4C68101808B70808 Fmul
    temp_88 = temp_86 * fp_c6.data[34].w;
    // 0x000310: 0xE24000000688000F Bra
    if (temp_59)
    {
        // 0x000318: 0x5C9807800FF70000 Mov
        // 0x000328: 0xE33000000007000F Kil
        discard;
    }
    // 0x000388: 0x49A002040027031C Ffma
    temp_89 = fma(temp_87, fp_c1.data[0].z, temp_6);
    // 0x000390: 0x49A002840027081D Ffma
    temp_90 = fma(temp_88, fp_c1.data[0].z, temp_7);
    // 0x000398: 0xD832022201D71C1C Texs
    temp_91 = texture(fp_t_tcb_22, vec2(temp_89, temp_90)).xyzw;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    temp_95 = temp_91.w;
    // 0x0003A8: 0xE043FF8B00C7FF2A Ipa
    temp_96 = in_attr3.x;
    // 0x0003B0: 0xE043FF8B40C7FF25 Ipa
    temp_97 = in_attr3.y;
    // 0x0003B8: 0xE043FF8B80C7FF24 Ipa
    temp_98 = in_attr3.z;
    // 0x0003C8: 0xF0F0000034270000 Depbar
    // 0x0003D0: 0x4C6810180A072626 Fmul
    temp_99 = temp_19 * fp_c6.data[40].x;
    // 0x0003D8: 0xE2900000BA000000 Ssy
    // 0x0003E8: 0x01040DF760C7F011 Mov32i
    // 0x0003F0: 0x0103F0000007F013 Mov32i
    // 0x0003F8: 0x385D103F80070707 Fadd
    temp_100 = 0.0 - temp_21;
    temp_101 = temp_100 + 1.0;
    temp_102 = clamp(temp_101, 0.0, 1.0);
    // 0x000408: 0x5C68100002A72A02 Fmul
    temp_103 = temp_96 * temp_96;
    // 0x000410: 0x59A0010002572502 Ffma
    temp_104 = fma(temp_97, temp_97, temp_103);
    // 0x000418: 0x59A0010002472402 Ffma
    temp_105 = fma(temp_98, temp_98, temp_104);
    // 0x000428: 0x5080000000570203 Mufu
    temp_106 = inversesqrt(temp_105);
    // 0x000430: 0x386013BF80072602 Fmnmx
    temp_107 = min(temp_99, 1.0);
    // 0x000438: 0x5C69100000372A2A Fmul
    temp_108 = 0.0 - temp_106;
    temp_109 = temp_96 * temp_108;
    // 0x000448: 0x5C69100000372525 Fmul
    temp_110 = 0.0 - temp_106;
    temp_111 = temp_97 * temp_110;
    // 0x000450: 0x5C69100000372424 Fmul
    temp_112 = 0.0 - temp_106;
    temp_113 = temp_98 * temp_112;
    // 0x000458: 0x4C60178400170202 Fmnmx
    temp_114 = max(temp_107, fp_c1.data[0].y);
    // 0x000468: 0x4C58301805C72A03 Fadd
    temp_115 = 0.0 - fp_c6.data[23].x;
    temp_116 = temp_109 + temp_115;
    // 0x000470: 0x4C58301805D72506 Fadd
    temp_117 = 0.0 - fp_c6.data[23].y;
    temp_118 = temp_111 + temp_117;
    // 0x000478: 0x4C58301805E72408 Fadd
    temp_119 = 0.0 - fp_c6.data[23].z;
    temp_120 = temp_113 + temp_119;
    // 0x000488: 0x32A009BF0007022E Ffma
    temp_121 = fma(temp_114, 0.5, 0.5);
    // 0x000490: 0x5C68100000370309 Fmul
    temp_122 = temp_116 * temp_116;
    // 0x000498: 0x5C68120002E72E2E Fmul
    temp_123 = temp_121 * 0.5;
    temp_124 = temp_123 * temp_121;
    // 0x0004A8: 0x59A0048000670609 Ffma
    temp_125 = fma(temp_118, temp_118, temp_122);
    // 0x0004B0: 0x59A004800087080A Ffma
    temp_126 = fma(temp_120, temp_120, temp_125);
    // 0x0004B8: 0x5080000000570A09 Mufu
    temp_127 = inversesqrt(temp_126);
    // 0x0004C8: 0x386810418007040A Fmul
    temp_128 = temp_6 * 16.0;
    // 0x0004D0: 0x3868104110070504 Fmul
    temp_129 = temp_7 * 9.0;
    // 0x0004D8: 0x5CA8148000A70A0A F2f
    temp_130 = floor(temp_128);
    // 0x0004E8: 0x5C68100000970303 Fmul
    temp_131 = temp_116 * temp_127;
    // 0x0004F0: 0x5C68100000970606 Fmul
    temp_132 = temp_118 * temp_127;
    // 0x0004F8: 0x5C6810000097080B Fmul
    temp_133 = temp_120 * temp_127;
    // 0x000508: 0x51A4010400170209 Ffma
    temp_134 = fma(temp_114, temp_114, fp_c1.data[0].y);
    temp_135 = clamp(temp_134, 0.0, 1.0);
    // 0x000510: 0x5C68100000370E0D Fmul
    temp_136 = temp_78 * temp_131;
    // 0x000518: 0x4C69101805C70308 Fmul
    temp_137 = 0.0 - fp_c6.data[23].x;
    temp_138 = temp_131 * temp_137;
    // 0x000528: 0x5C68100000372A0F Fmul
    temp_139 = temp_109 * temp_131;
    // 0x000530: 0x5C68100000970903 Fmul
    temp_140 = temp_135 * temp_135;
    // 0x000538: 0x59A006800067000D Ffma
    temp_141 = fma(temp_77, temp_132, temp_136);
    // 0x000548: 0x49A1041805D70608 Ffma
    temp_142 = 0.0 - fp_c6.data[23].y;
    temp_143 = fma(temp_132, temp_142, temp_138);
    // 0x000550: 0x59A0078000672506 Ffma
    temp_144 = fma(temp_111, temp_132, temp_139);
    // 0x000558: 0x5CA8148000470A0F F2f
    temp_145 = floor(temp_129);
    // 0x000568: 0x59A4068000B7120D Ffma
    temp_146 = fma(temp_76, temp_133, temp_141);
    temp_147 = clamp(temp_146, 0.0, 1.0);
    // 0x000570: 0x49A5041805E70B08 Ffma
    temp_148 = 0.0 - fp_c6.data[23].z;
    temp_149 = fma(temp_133, temp_148, temp_143);
    temp_150 = clamp(temp_149, 0.0, 1.0);
    // 0x000578: 0x59A4030000B7240B Ffma
    temp_151 = fma(temp_113, temp_133, temp_144);
    temp_152 = clamp(temp_151, 0.0, 1.0);
    // 0x000588: 0x4C69101805C70E06 Fmul
    temp_153 = 0.0 - fp_c6.data[23].x;
    temp_154 = temp_78 * temp_153;
    // 0x000590: 0x59A2068000370D03 Ffma
    temp_155 = 0.0 - temp_147;
    temp_156 = fma(temp_147, temp_140, temp_155);
    // 0x000598: 0x49A2088400070805 Ffma
    temp_157 = fma(temp_150, fp_c1.data[0].x, -6.98316002);
    // 0x0005A8: 0x49A2088400070B04 Ffma
    temp_158 = fma(temp_152, fp_c1.data[0].x, -6.98316002);
    // 0x0005B0: 0x32A0054180070F0F Ffma
    temp_159 = fma(temp_145, 16.0, temp_130);
    // 0x0005B8: 0x5CB0118000F70A2D F2i
    temp_160 = trunc(temp_159);
    temp_161 = max(temp_160, 0.0);
    temp_162 = uint(temp_161);
    // 0x0005C8: 0x51A0018400370D0D Ffma
    temp_163 = fma(temp_147, temp_156, fp_c1.data[0].w);
    // 0x0005D0: 0x5C68100002A70E03 Fmul
    temp_164 = temp_78 * temp_109;
    // 0x0005D8: 0x5080000000470D10 Mufu
    temp_165 = 1.0 / temp_163;
    // 0x0005E8: 0x5C6810000057080A Fmul
    temp_166 = temp_150 * temp_157;
    // 0x0005F0: 0x49A1031805D70008 Ffma
    temp_167 = 0.0 - fp_c6.data[23].y;
    temp_168 = fma(temp_77, temp_167, temp_154);
    // 0x0005F8: 0x5C68100000470B05 Fmul
    temp_169 = temp_152 * temp_158;
    // 0x000608: 0x4C58301407B71E04 Fadd
    temp_170 = 0.0 - fp_c5.data[30].w;
    temp_171 = temp_14 + temp_170;
    // 0x000610: 0x4C58301407B71F06 Fadd
    temp_172 = 0.0 - fp_c5.data[30].w;
    temp_173 = temp_15 + temp_172;
    // 0x000618: 0x59A0018002570003 Ffma
    temp_174 = fma(temp_77, temp_111, temp_164);
    // 0x000628: 0x49A5041805E71208 Ffma
    temp_175 = 0.0 - fp_c6.data[23].z;
    temp_176 = fma(temp_76, temp_175, temp_168);
    temp_177 = clamp(temp_176, 0.0, 1.0);
    // 0x000630: 0x5C90008000570013 Rro
    // 0x000638: 0x4C58301407B71A05 Fadd
    temp_178 = 0.0 - fp_c5.data[30].w;
    temp_179 = temp_16 + temp_178;
    // 0x000648: 0x5080000000271313 Mufu
    temp_180 = exp2(temp_169);
    // 0x000650: 0x59A4018002471203 Ffma
    temp_181 = fma(temp_76, temp_113, temp_174);
    temp_182 = clamp(temp_181, 0.0, 1.0);
    // 0x000658: 0x3848000000872D2B Shl
    temp_183 = int(temp_162) << 8;
    // 0x000668: 0x59A1040002E7080D Ffma
    temp_184 = 0.0 - temp_124;
    temp_185 = fma(temp_177, temp_184, temp_177);
    // 0x000670: 0xEF94008200472B2B Ldc
    temp_186 = temp_183 + 0x2004;
    temp_187 = uint(temp_186) >> 2;
    temp_188 = temp_187 >> 2;
    temp_189 = int(temp_187) & 3;
    temp_190 = fp_c8.data[int(temp_188)][temp_189];
    // 0x000678: 0x59A1018002E7030B Ffma
    temp_191 = 0.0 - temp_124;
    temp_192 = fma(temp_182, temp_191, temp_182);
    // 0x000688: 0x51A0021407B72704 Ffma
    temp_193 = fma(temp_20, temp_171, fp_c5.data[30].w);
    // 0x000690: 0x51A0029407B72705 Ffma
    temp_194 = fma(temp_20, temp_179, fp_c5.data[30].w);
    // 0x000698: 0x4C6810180147080F Fmul
    temp_195 = temp_177 * fp_c6.data[5].x;
    // 0x0006A8: 0x5C68100001070909 Fmul
    temp_196 = temp_135 * temp_165;
    // 0x0006B0: 0x5C58100000D72E0D Fadd
    temp_197 = temp_124 + temp_185;
    // 0x0006B8: 0x5C58100000B72E0B Fadd
    temp_198 = temp_124 + temp_192;
    // 0x0006C8: 0x5080000000470D15 Mufu
    temp_199 = 1.0 / temp_197;
    // 0x0006D0: 0x59A1098001370411 Ffma
    temp_200 = 0.0 - temp_180;
    temp_201 = fma(temp_193, temp_200, temp_180);
    // 0x0006D8: 0x5080000000470B2C Mufu
    temp_202 = 1.0 / temp_198;
    // 0x0006E8: 0x4C68101801670810 Fmul
    temp_203 = temp_177 * fp_c6.data[5].z;
    // 0x0006F0: 0x59A1098001370514 Ffma
    temp_204 = 0.0 - temp_180;
    temp_205 = fma(temp_194, temp_204, temp_180);
    // 0x0006F8: 0x51A0031407B72706 Ffma
    temp_206 = fma(temp_20, temp_173, fp_c5.data[30].w);
    // 0x000708: 0x5C90008000A70016 Rro
    // 0x000710: 0x1E23EA2F98370F0F Fmul32i
    temp_207 = temp_195 * 0.318309873;
    // 0x000718: 0x508000000027160B Mufu
    temp_208 = exp2(temp_166);
    // 0x000728: 0x5C58100001170411 Fadd
    temp_209 = temp_193 + temp_201;
    // 0x000730: 0x1E23EA2F98371010 Fmul32i
    temp_210 = temp_203 * 0.318309873;
    // 0x000738: 0x5C58100001470532 Fadd
    temp_211 = temp_194 + temp_205;
    // 0x000748: 0x4C6810180157080D Fmul
    temp_212 = temp_177 * fp_c6.data[5].y;
    // 0x000750: 0x59A1098001370613 Ffma
    temp_213 = 0.0 - temp_180;
    temp_214 = fma(temp_206, temp_213, temp_180);
    // 0x000758: 0x5C68100000970909 Fmul
    temp_215 = temp_196 * temp_196;
    // 0x000768: 0x3868103F00072C2C Fmul
    temp_216 = temp_202 * 0.5;
    // 0x000770: 0x59A1078001170F0F Ffma
    temp_217 = 0.0 - temp_209;
    temp_218 = fma(temp_207, temp_217, temp_207);
    // 0x000778: 0x4C98079808A70011 Mov
    // 0x000788: 0xEF5400000047FF0F Stl
    local_memory[1] = floatBitsToUint(temp_218);
    // 0x000790: 0x59A1080003271032 Ffma
    temp_219 = 0.0 - temp_211;
    temp_220 = fma(temp_210, temp_219, temp_210);
    // 0x000798: 0x1E23EA2F98370D10 Fmul32i
    temp_221 = temp_212 * 0.318309873;
    // 0x0007A8: 0x5C68100001572C0A Fmul
    temp_222 = temp_216 * temp_199;
    // 0x0007B0: 0x5C58100001370613 Fadd
    temp_223 = temp_206 + temp_214;
    // 0x0007B8: 0x59A1058000B7060D Ffma
    temp_224 = 0.0 - temp_208;
    temp_225 = fma(temp_206, temp_224, temp_208);
    // 0x0007C8: 0x5C68100000370E2F Fmul
    temp_226 = temp_78 * temp_182;
    // 0x0007D0: 0x5C68100000371217 Fmul
    temp_227 = temp_76 * temp_182;
    // 0x0007D8: 0x59A1080001371010 Ffma
    temp_228 = 0.0 - temp_223;
    temp_229 = fma(temp_221, temp_228, temp_221);
    // 0x0007E8: 0x5C68100000A7090F Fmul
    temp_230 = temp_215 * temp_222;
    // 0x0007F0: 0xEF5400000007FF10 Stl
    local_memory[0] = floatBitsToUint(temp_229);
    // 0x0007F8: 0x59A1058000B70409 Ffma
    temp_231 = 0.0 - temp_208;
    temp_232 = fma(temp_193, temp_231, temp_208);
    // 0x000808: 0x4C6810180877110A Fmul
    temp_233 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x000810: 0x59A1058000B7050B Ffma
    temp_234 = 0.0 - temp_208;
    temp_235 = fma(temp_194, temp_234, temp_208);
    // 0x000818: 0x5C58100000D7060D Fadd
    temp_236 = temp_206 + temp_225;
    // 0x000828: 0x32A2154000072F2F Ffma
    temp_237 = 0.0 - temp_109;
    temp_238 = fma(temp_226, 2.0, temp_237);
    // 0x000830: 0x5C68100000F70816 Fmul
    temp_239 = temp_177 * temp_230;
    // 0x000838: 0x5C58100000970409 Fadd
    temp_240 = temp_193 + temp_232;
    // 0x000848: 0x5C9807800FF7000F Mov
    // 0x000850: 0x5C58100000B7050B Fadd
    temp_241 = temp_194 + temp_235;
    // 0x000858: 0x5B6603800FF72B07 Isetp
    temp_242 = floatBitsToUint(temp_190) <= 0u;
    // 0x000868: 0x32A2124000071717 Ffma
    temp_243 = 0.0 - temp_113;
    temp_244 = fma(temp_227, 2.0, temp_243);
    // 0x000870: 0x51A00E9801570A08 Ffma
    temp_245 = fma(temp_233, temp_93, fp_c6.data[5].y);
    // 0x000878: 0x51A0101801670A10 Ffma
    temp_246 = fma(temp_233, temp_94, fp_c6.data[5].z);
    // 0x000888: 0x51A00E1801470A0A Ffma
    temp_247 = fma(temp_233, temp_92, fp_c6.data[5].x);
    // 0x000890: 0x5C68100000870D08 Fmul
    temp_248 = temp_236 * temp_245;
    // 0x000898: 0x5C68100001070B0B Fmul
    temp_249 = temp_241 * temp_246;
    // 0x0008A8: 0x5C68100000A70909 Fmul
    temp_250 = temp_240 * temp_247;
    // 0x0008B0: 0x49A203980AC7070A Ffma
    temp_251 = 0.0 - temp_102;
    temp_252 = fma(temp_102, fp_c6.data[43].x, temp_251);
    // 0x0008B8: 0x49A203980AD7070D Ffma
    temp_253 = 0.0 - temp_102;
    temp_254 = fma(temp_102, fp_c6.data[43].y, temp_253);
    // 0x0008C8: 0x49A203980AE70710 Ffma
    temp_255 = 0.0 - temp_102;
    temp_256 = fma(temp_102, fp_c6.data[43].z, temp_255);
    // 0x0008D0: 0x5C68100001670828 Fmul
    temp_257 = temp_248 * temp_239;
    // 0x0008D8: 0x5C68100001670B29 Fmul
    temp_258 = temp_249 * temp_239;
    // 0x0008E8: 0x5C68100001670926 Fmul
    temp_259 = temp_250 * temp_239;
    // 0x0008F0: 0x3858103F80070A13 Fadd
    temp_260 = temp_252 + 1.0;
    // 0x0008F8: 0x3858103F80070D0D Fadd
    temp_261 = temp_254 + 1.0;
    // 0x000908: 0x3858103F80071010 Fadd
    temp_262 = temp_256 + 1.0;
    // 0x000910: 0x5C68100000370016 Fmul
    temp_263 = temp_77 * temp_182;
    // 0x000918: 0x5C9807800FF70007 Mov
    // 0x000928: 0x5C9807800FF70008 Mov
    // 0x000930: 0x5C9807800FF70009 Mov
    // 0x000938: 0x5C9807800FF7000A Mov
    // 0x000948: 0x5C9807800FF7000B Mov
    // 0x000950: 0x59A4098001371E13 Ffma
    temp_264 = fma(temp_14, temp_260, temp_260);
    temp_265 = clamp(temp_264, 0.0, 1.0);
    // 0x000958: 0x59A4068000D71F18 Ffma
    temp_266 = fma(temp_15, temp_261, temp_261);
    temp_267 = clamp(temp_266, 0.0, 1.0);
    // 0x000968: 0x59A4080001071A19 Ffma
    temp_268 = fma(temp_16, temp_262, temp_262);
    temp_269 = clamp(temp_268, 0.0, 1.0);
    // 0x000970: 0x32A212C000071616 Ffma
    temp_270 = 0.0 - temp_111;
    temp_271 = fma(temp_263, 2.0, temp_270);
    // 0x000978: 0x1E23E22F98372626 Fmul32i
    temp_272 = temp_259 * 0.159154937;
    // 0x000988: 0x1E23E22F98372828 Fmul32i
    temp_273 = temp_257 * 0.159154937;
    // 0x000990: 0x1E23E22F98372929 Fmul32i
    temp_274 = temp_258 * 0.159154937;
    // 0x000998: 0xF0F800000000000F Sync
    temp_275 = 0.0;
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
    if (!temp_242)
    {
        // 0x0009A8: 0x5C9807800FF70030 Mov
        temp_287 = 0;
        do
        {
            // 0x0009B0: 0x5C18020003072D15 Iscadd
            temp_289 = int(temp_162) << 4;
            temp_290 = temp_289 + temp_287;
            // 0x0009B8: 0xE003FF87CFF7FF33 Ipa
            // 0x0009C8: 0x1C00000000173030 Iadd32i
            temp_291 = temp_287 + 1;
            // 0x0009D0: 0xE003FF87CFF7FF35 Ipa
            // 0x0009D8: 0x3848000000471515 Shl
            temp_292 = temp_290 << 4;
            // 0x0009E8: 0xE003FF87CFF7FF34 Ipa
            // 0x0009F0: 0x5B6C038002B7300F Isetp
            temp_288 = uint(temp_291) >= floatBitsToUint(temp_190);
            // 0x0009F8: 0xE290000057000000 Ssy
            // 0x000A08: 0xEF94008200071515 Ldc
            temp_293 = temp_292 + 0x2000;
            temp_294 = uint(temp_293) >> 2;
            temp_295 = temp_294 >> 2;
            temp_296 = int(temp_294) & 3;
            temp_297 = fp_c8.data[int(temp_295)][temp_296];
            // 0x000A10: 0x5080000000473333 Mufu
            // 0x000A18: 0x5080000000473535 Mufu
            // 0x000A28: 0x5080000000473434 Mufu
            // 0x000A30: 0xE043FF8D0337FF33 Ipa
            temp_298 = in_attr5.x;
            // 0x000A38: 0xE043FF8D8357FF35 Ipa
            temp_299 = in_attr5.z;
            // 0x000A48: 0xE043FF8D4347FF34 Ipa
            temp_300 = in_attr5.y;
            // 0x000A50: 0x3848000000671531 Shl
            temp_301 = floatBitsToInt(temp_297) << 6;
            // 0x000A58: 0xEF9500800107310C Ldc
            temp_302 = temp_301 + 16;
            temp_303 = uint(temp_302) >> 2;
            temp_304 = temp_303 >> 2;
            temp_305 = int(temp_303) & 3;
            temp_306 = fp_c8.data[int(temp_304)][temp_305];
            temp_307 = int(temp_303) + 1;
            temp_308 = uint(temp_307) >> 2;
            temp_309 = temp_307 & 3;
            temp_310 = fp_c8.data[int(temp_308)][temp_309];
            // 0x000A68: 0xEF95008001873110 Ldc
            temp_311 = temp_301 + 24;
            temp_312 = uint(temp_311) >> 2;
            temp_313 = temp_312 >> 2;
            temp_314 = int(temp_312) & 3;
            temp_315 = fp_c8.data[int(temp_313)][temp_314];
            temp_316 = int(temp_312) + 1;
            temp_317 = uint(temp_316) >> 2;
            temp_318 = temp_316 & 3;
            temp_319 = fp_c8.data[int(temp_317)][temp_318];
            // 0x000A70: 0xEF95008002073114 Ldc
            temp_320 = temp_301 + 32;
            temp_321 = uint(temp_320) >> 2;
            temp_322 = temp_321 >> 2;
            temp_323 = int(temp_321) & 3;
            temp_324 = fp_c8.data[int(temp_322)][temp_323];
            temp_325 = int(temp_321) + 1;
            temp_326 = uint(temp_325) >> 2;
            temp_327 = temp_325 & 3;
            temp_328 = fp_c8.data[int(temp_326)][temp_327];
            // 0x000A78: 0x5C58300003370C33 Fadd
            temp_329 = 0.0 - temp_298;
            temp_330 = temp_306 + temp_329;
            // 0x000A88: 0x5C58300003470D34 Fadd
            temp_331 = 0.0 - temp_300;
            temp_332 = temp_310 + temp_331;
            // 0x000A90: 0x5C58300003571035 Fadd
            temp_333 = 0.0 - temp_299;
            temp_334 = temp_315 + temp_333;
            // 0x000A98: 0x5C68100003373336 Fmul
            temp_335 = temp_330 * temp_330;
            // 0x000AA8: 0x59A11A8003571111 Ffma
            temp_336 = 0.0 - temp_334;
            temp_337 = fma(temp_319, temp_336, temp_334);
            // 0x000AB0: 0x59A01B0003473436 Ffma
            temp_338 = fma(temp_332, temp_332, temp_335);
            // 0x000AB8: 0x59A01B0001171137 Ffma
            temp_339 = fma(temp_337, temp_337, temp_338);
            // 0x000AC8: 0x508000000057370C Mufu
            temp_340 = inversesqrt(temp_339);
            // 0x000AD0: 0x5080000000873737 Mufu
            temp_341 = sqrt(temp_339);
            // 0x000AD8: 0x5C68100000C7330D Fmul
            temp_342 = temp_330 * temp_340;
            // 0x000AE8: 0x5C68100000C73410 Fmul
            temp_343 = temp_332 * temp_340;
            // 0x000AF0: 0x5C68100000C7110C Fmul
            temp_344 = temp_337 * temp_340;
            // 0x000AF8: 0x5C69100001470D0D Fmul
            temp_345 = 0.0 - temp_324;
            temp_346 = temp_342 * temp_345;
            // 0x000B08: 0xEF94008002873114 Ldc
            temp_347 = temp_301 + 40;
            temp_348 = uint(temp_347) >> 2;
            temp_349 = temp_348 >> 2;
            temp_350 = int(temp_348) & 3;
            temp_351 = fp_c8.data[int(temp_349)][temp_350];
            // 0x000B10: 0x59A106800157100D Ffma
            temp_352 = 0.0 - temp_328;
            temp_353 = fma(temp_343, temp_352, temp_346);
            // 0x000B18: 0xEF95008003873110 Ldc
            temp_354 = temp_301 + 56;
            temp_355 = uint(temp_354) >> 2;
            temp_356 = temp_355 >> 2;
            temp_357 = int(temp_355) & 3;
            temp_358 = fp_c8.data[int(temp_356)][temp_357];
            temp_359 = int(temp_355) + 1;
            temp_360 = uint(temp_359) >> 2;
            temp_361 = temp_359 & 3;
            temp_362 = fp_c8.data[int(temp_360)][temp_361];
            // 0x000B28: 0x010404000007F015 Mov32i
            // 0x000B30: 0x59A1068001470C14 Ffma
            temp_363 = 0.0 - temp_351;
            temp_364 = fma(temp_344, temp_363, temp_353);
            // 0x000B38: 0xEF9500800307310C Ldc
            temp_365 = temp_301 + 48;
            temp_366 = uint(temp_365) >> 2;
            temp_367 = temp_366 >> 2;
            temp_368 = int(temp_366) & 3;
            temp_369 = fp_c8.data[int(temp_367)][temp_368];
            temp_370 = int(temp_366) + 1;
            temp_371 = uint(temp_370) >> 2;
            temp_372 = temp_370 & 3;
            temp_373 = fp_c8.data[int(temp_371)][temp_372];
            // 0x000B48: 0x59A4088001071410 Ffma
            temp_374 = fma(temp_364, temp_358, temp_362);
            temp_375 = clamp(temp_374, 0.0, 1.0);
            // 0x000B50: 0x59A4068003770C37 Ffma
            temp_376 = fma(temp_369, temp_341, temp_373);
            temp_377 = clamp(temp_376, 0.0, 1.0);
            // 0x000B58: 0x33A00AC000073714 Ffma
            temp_378 = fma(temp_377, -2.0, 3.0);
            // 0x000B68: 0x5C68100003773711 Fmul
            temp_379 = temp_377 * temp_377;
            // 0x000B70: 0x33A00AC000071015 Ffma
            temp_380 = fma(temp_375, -2.0, 3.0);
            // 0x000B78: 0x5C68100001071010 Fmul
            temp_381 = temp_375 * temp_375;
            // 0x000B88: 0x5C68100001171411 Fmul
            temp_382 = temp_378 * temp_379;
            // 0x000B90: 0x39585042F0073514 Fadd
            temp_383 = abs(temp_334);
            temp_384 = temp_383 + -120.0;
            // 0x000B98: 0x5C68100001571010 Fmul
            temp_385 = temp_381 * temp_380;
            // 0x000BA8: 0x1EABD4CCCCD71414 Fmul32i
            temp_386 = temp_384 * -0.0500000007;
            temp_387 = clamp(temp_386, 0.0, 1.0);
            // 0x000BB0: 0x5C68100001171010 Fmul
            temp_388 = temp_385 * temp_382;
            // 0x000BB8: 0x36247F9000171111 Xmad
            temp_389 = floatBitsToUint(temp_382) >> 16;
            temp_390 = int(temp_389) << 16;
            // 0x000BC8: 0x5C68100001071410 Fmul
            temp_391 = temp_387 * temp_388;
            // 0x000BD0: 0x5BB383800FF71007 Fsetp
            temp_392 = temp_391 <= 0.0;
            // 0x000BD8: 0x7A05083C0F00FF11 Hadd2
            temp_287 = temp_291;
            temp_393 = uint(temp_390);
            temp_394 = temp_275;
            temp_395 = temp_276;
            temp_396 = temp_277;
            temp_397 = temp_278;
            temp_398 = temp_279;
            temp_399 = temp_280;
            if (temp_392)
            {
                temp_400 = unpackHalf2x16(uint(temp_390)).y;
                temp_401 = packHalf2x16(vec2(1.0, temp_400));
                temp_393 = temp_401;
            }
            // 0x000BE8: 0x5D2103902FF71107 Hsetp2
            temp_402 = unpackHalf2x16(temp_393).x;
            temp_403 = temp_402 == 0.0;
            // 0x000BF0: 0xF0F800000008000F Sync
            if (temp_403)
            {
                // 0x000BF8: 0x5080000000470C0C Mufu
                temp_404 = 1.0 / temp_369;
                // 0x000C08: 0x5C69100000C70D14 Fmul
                temp_405 = 0.0 - temp_404;
                temp_406 = temp_373 * temp_405;
                // 0x000C10: 0x5C60138001473511 Fmnmx
                temp_407 = min(temp_334, temp_406);
                // 0x000C18: 0x5C61178001171411 Fmnmx
                temp_408 = 0.0 - temp_406;
                temp_409 = max(temp_408, temp_407);
                // 0x000C28: 0x59A01B0001171136 Ffma
                temp_410 = fma(temp_409, temp_409, temp_338);
                // 0x000C30: 0x508000000057360C Mufu
                temp_411 = inversesqrt(temp_410);
                // 0x000C38: 0x5080000000873636 Mufu
                temp_412 = sqrt(temp_410);
                // 0x000C48: 0x5C68100000C73333 Fmul
                temp_413 = temp_330 * temp_411;
                // 0x000C50: 0x5C68100000C73434 Fmul
                temp_414 = temp_332 * temp_411;
                // 0x000C58: 0x5C68100000C71111 Fmul
                temp_415 = temp_409 * temp_411;
                // 0x000C68: 0xEF94008002C7310C Ldc
                temp_416 = temp_301 + 44;
                temp_417 = uint(temp_416) >> 2;
                temp_418 = temp_417 >> 2;
                temp_419 = int(temp_417) & 3;
                temp_420 = fp_c8.data[int(temp_418)][temp_419];
                // 0x000C70: 0x5C58100003372A35 Fadd
                temp_421 = temp_109 + temp_413;
                // 0x000C78: 0x5C5810000347250D Fadd
                temp_422 = temp_111 + temp_414;
                // 0x000C88: 0x5C58100001172415 Fadd
                temp_423 = temp_113 + temp_415;
                // 0x000C90: 0x5C68100003573514 Fmul
                temp_424 = temp_421 * temp_421;
                // 0x000C98: 0x59A00A0000D70D14 Ffma
                temp_425 = fma(temp_422, temp_422, temp_424);
                // 0x000CA8: 0x59A00A0001571514 Ffma
                temp_426 = fma(temp_423, temp_423, temp_425);
                // 0x000CB0: 0x5080000000571414 Mufu
                temp_427 = inversesqrt(temp_426);
                // 0x000CB8: 0x5C68100001473535 Fmul
                temp_428 = temp_421 * temp_427;
                // 0x000CC8: 0x5C68100001470D0D Fmul
                temp_429 = temp_422 * temp_427;
                // 0x000CD0: 0x5C68100001471515 Fmul
                temp_430 = temp_423 * temp_427;
                // 0x000CD8: 0x5C68100003370E14 Fmul
                temp_431 = temp_78 * temp_413;
                // 0x000CE8: 0x5C68100003573333 Fmul
                temp_432 = temp_413 * temp_428;
                // 0x000CF0: 0x5C68100003570E35 Fmul
                temp_433 = temp_78 * temp_428;
                // 0x000CF8: 0x59A00A0003470014 Ffma
                temp_434 = fma(temp_77, temp_414, temp_431);
                // 0x000D08: 0x59A0198000D73434 Ffma
                temp_435 = fma(temp_414, temp_429, temp_432);
                // 0x000D10: 0x59A01A8000D7000D Ffma
                temp_436 = fma(temp_77, temp_429, temp_433);
                // 0x000D18: 0x51A4010400170233 Ffma
                temp_437 = fma(temp_114, temp_114, fp_c1.data[0].y);
                temp_438 = clamp(temp_437, 0.0, 1.0);
                // 0x000D28: 0x59A00A0001171214 Ffma
                temp_439 = fma(temp_76, temp_415, temp_434);
                // 0x000D30: 0x59A41A0001571134 Ffma
                temp_440 = fma(temp_415, temp_430, temp_435);
                temp_441 = clamp(temp_440, 0.0, 1.0);
                // 0x000D38: 0x59A406800157120D Ffma
                temp_442 = fma(temp_76, temp_430, temp_436);
                temp_443 = clamp(temp_442, 0.0, 1.0);
                // 0x000D48: 0x5080000000470C15 Mufu
                temp_444 = 1.0 / temp_420;
                // 0x000D50: 0x5C68100003373335 Fmul
                temp_445 = temp_438 * temp_438;
                // 0x000D58: 0x59A2068000D73535 Ffma
                temp_446 = 0.0 - temp_443;
                temp_447 = fma(temp_445, temp_443, temp_446);
                // 0x000D68: 0x51A01A8400370D35 Ffma
                temp_448 = fma(temp_443, temp_447, fp_c1.data[0].w);
                // 0x000D70: 0xEF9500800007310C Ldc
                temp_449 = uint(temp_301) >> 2;
                temp_450 = temp_449 >> 2;
                temp_451 = int(temp_449) & 3;
                temp_452 = fp_c8.data[int(temp_450)][temp_451];
                temp_453 = int(temp_449) + 1;
                temp_454 = uint(temp_453) >> 2;
                temp_455 = temp_453 & 3;
                temp_456 = fp_c8.data[int(temp_454)][temp_455];
                // 0x000D78: 0x51A01B0400471515 Ffma
                temp_457 = fma(temp_444, temp_412, fp_c1.data[1].x);
                // 0x000D88: 0x5080000000473535 Mufu
                temp_458 = 1.0 / temp_448;
                // 0x000D90: 0x01040DF760C7F036 Mov32i
                // 0x000D98: 0x5080000000471515 Mufu
                temp_459 = 1.0 / temp_457;
                // 0x000DA8: 0x5C68100003573335 Fmul
                temp_460 = temp_438 * temp_458;
                // 0x000DB0: 0xEF94008000873131 Ldc
                temp_461 = temp_301 + 8;
                temp_462 = uint(temp_461) >> 2;
                temp_463 = temp_462 >> 2;
                temp_464 = int(temp_462) & 3;
                temp_465 = fp_c8.data[int(temp_463)][temp_464];
                // 0x000DB8: 0x49A21B0400073411 Ffma
                temp_466 = fma(temp_441, fp_c1.data[0].x, -6.98316002);
                // 0x000DC8: 0x1E23FB3333371533 Fmul32i
                temp_467 = temp_459 * 1.39999998;
                // 0x000DD0: 0x5C68100003573535 Fmul
                temp_468 = temp_460 * temp_460;
                // 0x000DD8: 0x5C68100001173434 Fmul
                temp_469 = temp_441 * temp_466;
                // 0x000DE8: 0x5C5C30000FF71411 Fadd
                temp_470 = temp_439 + -0.0;
                temp_471 = clamp(temp_470, 0.0, 1.0);
                // 0x000DF0: 0x5C68100003373333 Fmul
                temp_472 = temp_467 * temp_467;
                // 0x000DF8: 0x5C90008003470034 Rro
                // 0x000E08: 0x59A1088001172E15 Ffma
                temp_473 = 0.0 - temp_471;
                temp_474 = fma(temp_124, temp_473, temp_471);
                // 0x000E10: 0x5080000000273434 Mufu
                temp_475 = exp2(temp_469);
                // 0x000E18: 0x59A1198003371433 Ffma
                temp_476 = 0.0 - temp_472;
                temp_477 = fma(temp_439, temp_476, temp_472);
                // 0x000E28: 0x5C58100001572E15 Fadd
                temp_478 = temp_124 + temp_474;
                // 0x000E30: 0x5C5C100003371433 Fadd
                temp_479 = temp_439 + temp_477;
                temp_480 = clamp(temp_479, 0.0, 1.0);
                // 0x000E38: 0x5080000000471515 Mufu
                temp_481 = 1.0 / temp_478;
                // 0x000E48: 0x59A11A0003470614 Ffma
                temp_482 = 0.0 - temp_475;
                temp_483 = fma(temp_206, temp_482, temp_475);
                // 0x000E50: 0x5C68100000C7100C Fmul
                temp_484 = temp_391 * temp_452;
                // 0x000E58: 0x5C68100000D7100D Fmul
                temp_485 = temp_391 * temp_456;
                // 0x000E68: 0x5C68100001572C15 Fmul
                temp_486 = temp_216 * temp_481;
                // 0x000E70: 0x5C58100001470614 Fadd
                temp_487 = temp_206 + temp_483;
                // 0x000E78: 0x5C68100001573515 Fmul
                temp_488 = temp_468 * temp_486;
                // 0x000E88: 0x5C68100000D71414 Fmul
                temp_489 = temp_487 * temp_485;
                // 0x000E90: 0x5C68100003370D0D Fmul
                temp_490 = temp_485 * temp_480;
                // 0x000E98: 0x5C68100003171031 Fmul
                temp_491 = temp_391 * temp_465;
                // 0x000EA8: 0x59A11A0003470410 Ffma
                temp_492 = 0.0 - temp_475;
                temp_493 = fma(temp_193, temp_492, temp_475);
                // 0x000EB0: 0x59A11A0003470534 Ffma
                temp_494 = 0.0 - temp_475;
                temp_495 = fma(temp_194, temp_494, temp_475);
                // 0x000EB8: 0x5C68100001571115 Fmul
                temp_496 = temp_471 * temp_488;
                // 0x000EC8: 0x49A0040400670D08 Ffma
                temp_497 = fma(temp_490, fp_c1.data[1].z, temp_275);
                // 0x000ED0: 0x5C58100001070410 Fadd
                temp_498 = temp_193 + temp_493;
                // 0x000ED8: 0x5C58100003470534 Fadd
                temp_499 = temp_194 + temp_495;
                // 0x000EE8: 0x5C68100001571414 Fmul
                temp_500 = temp_489 * temp_496;
                // 0x000EF0: 0x5C68100000C71010 Fmul
                temp_501 = temp_498 * temp_484;
                // 0x000EF8: 0x5C68100003173434 Fmul
                temp_502 = temp_499 * temp_491;
                // 0x000F08: 0x5C68100003370C0C Fmul
                temp_503 = temp_484 * temp_480;
                // 0x000F10: 0x5C68100003373133 Fmul
                temp_504 = temp_491 * temp_480;
                // 0x000F18: 0x49A007840057140F Ffma
                temp_505 = fma(temp_500, fp_c1.data[1].y, temp_276);
                // 0x000F28: 0x5C68100001571010 Fmul
                temp_506 = temp_501 * temp_496;
                // 0x000F30: 0x5C68100001573434 Fmul
                temp_507 = temp_502 * temp_496;
                // 0x000F38: 0x49A0038400670C07 Ffma
                temp_508 = fma(temp_503, fp_c1.data[1].z, temp_277);
                // 0x000F48: 0x49A0048400673309 Ffma
                temp_509 = fma(temp_504, fp_c1.data[1].z, temp_278);
                // 0x000F50: 0x49A005840057100B Ffma
                temp_510 = fma(temp_506, fp_c1.data[1].y, temp_279);
                // 0x000F58: 0x49A005040057340A Ffma
                temp_511 = fma(temp_507, fp_c1.data[1].y, temp_280);
                // 0x000F68: 0xF0F800000007000F Sync
                temp_394 = temp_497;
                temp_395 = temp_505;
                temp_396 = temp_508;
                temp_397 = temp_509;
                temp_398 = temp_510;
                temp_399 = temp_511;
            }
            // 0x000F70: 0xE2400FFFA389000F Bra
            temp_275 = temp_394;
            temp_276 = temp_395;
            temp_277 = temp_396;
            temp_278 = temp_397;
            temp_279 = temp_398;
            temp_280 = temp_399;
            temp_281 = temp_397;
            temp_282 = temp_398;
            temp_283 = temp_395;
            temp_284 = temp_399;
            temp_285 = temp_396;
            temp_286 = temp_394;
        }
        while (!temp_288);
        // 0x000F78: 0xF0F800000007000F Sync
    }
    // 0x000F88: 0x5C62578000070E0C Fmnmx
    temp_512 = abs(temp_78);
    temp_513 = abs(temp_77);
    temp_514 = max(temp_512, temp_513);
    // 0x000F90: 0xE003FF87CFF7FF2A Ipa
    // 0x000F98: 0x5C62578001672F0D Fmnmx
    temp_515 = abs(temp_238);
    temp_516 = abs(temp_271);
    temp_517 = max(temp_515, temp_516);
    // 0x000FA8: 0xEF4410000047FF35 Ldl
    temp_518 = uintBitsToFloat(local_memory[1]);
    // 0x000FB0: 0x5C60578000C7120C Fmnmx
    temp_519 = abs(temp_76);
    temp_520 = max(temp_519, temp_514);
    // 0x000FB8: 0xEF4410000007FF33 Ldl
    temp_521 = uintBitsToFloat(local_memory[0]);
    // 0x000FC8: 0x38681040E0070231 Fmul
    temp_522 = temp_114 * 7.0;
    // 0x000FD0: 0x5080000000470C11 Mufu
    temp_523 = 1.0 / temp_520;
    // 0x000FD8: 0x5C60578000D7170D Fmnmx
    temp_524 = abs(temp_244);
    temp_525 = max(temp_524, temp_517);
    // 0x000FE8: 0x010000000017F014 Mov32i
    // 0x000FF0: 0x5080000000470D0D Mufu
    temp_526 = 1.0 / temp_525;
    // 0x000FF8: 0x3868104080070225 Fmul
    temp_527 = temp_114 * 4.0;
    // 0x001008: 0x4C98079C0207002B Mov
    // 0x001010: 0x5C69100001171212 Fmul
    temp_528 = 0.0 - temp_523;
    temp_529 = temp_76 * temp_528;
    // 0x001018: 0x5C68100001170E10 Fmul
    temp_530 = temp_78 * temp_523;
    // 0x001028: 0x5080000000472A2A Mufu
    // 0x001030: 0x5C68100001170011 Fmul
    temp_531 = temp_77 * temp_523;
    // 0x001038: 0x5C68100000D72F15 Fmul
    temp_532 = temp_238 * temp_526;
    // 0x001048: 0x5C68100000D71616 Fmul
    temp_533 = temp_271 * temp_526;
    // 0x001050: 0x5C69100000D71717 Fmul
    temp_534 = 0.0 - temp_526;
    temp_535 = temp_244 * temp_534;
    // 0x001058: 0xC0BA0163EFF7100C Tex
    temp_536 = textureLod(fp_t_tcb_16, vec3(temp_530, temp_531, temp_529), 0.0).xyz;
    temp_537 = temp_536.x;
    temp_538 = temp_536.y;
    temp_539 = temp_536.z;
    // 0x001068: 0x5C98078001270024 Mov
    // 0x001070: 0xC1BA0143F3171414 Tex
    temp_540 = textureLod(fp_t_tcb_14, vec4(temp_532, temp_533, temp_535, float(1)), temp_522).xyz;
    temp_541 = temp_540.x;
    temp_542 = temp_540.y;
    temp_543 = temp_540.z;
    // 0x001078: 0x3859103F80070202 Fadd
    temp_544 = 0.0 - temp_114;
    temp_545 = temp_544 + 1.0;
    // 0x001088: 0xD9A2018242471010 Texs
    temp_546 = textureLod(fp_t_tcb_18, vec3(temp_530, temp_531, temp_529), temp_527).xyz;
    temp_547 = temp_546.x;
    temp_548 = temp_546.y;
    temp_549 = temp_546.z;
    // 0x001090: 0x3859103F8007032F Fadd
    temp_550 = 0.0 - temp_182;
    temp_551 = temp_550 + 1.0;
    // 0x001098: 0xE043FF9102A7FF2C Ipa
    temp_552 = in_attr9.x;
    // 0x0010A8: 0x5C68100000270202 Fmul
    temp_553 = temp_545 * temp_545;
    // 0x0010B0: 0xE043FF9142A7FF2D Ipa
    temp_554 = in_attr9.y;
    // 0x0010B8: 0x010410676C97F034 Mov32i
    // 0x0010C8: 0xE043FF9182A7FF2E Ipa
    temp_555 = in_attr9.z;
    // 0x0010D0: 0xDEBA0000C2B72C2B TexB
    temp_556 = texture(fp_t_cb7_20, vec3(temp_552, temp_554, temp_555)).x;
    // 0x0010D8: 0x0103F0000007F017 Mov32i
    // 0x0010E8: 0x1E23E468DB970330 Fmul32i
    temp_557 = temp_182 * 0.193900004;
    // 0x0010F0: 0x5C68100000270202 Fmul
    temp_558 = temp_553 * temp_553;
    // 0x0010F8: 0x4C68101809072F12 Fmul
    temp_559 = temp_551 * fp_c6.data[36].x;
    // 0x001108: 0x49A019180A170932 Ffma
    temp_560 = fma(temp_281, fp_c6.data[40].y, temp_220);
    // 0x001110: 0x5080400000371209 Mufu
    temp_561 = abs(temp_559);
    temp_562 = log2(temp_561);
    // 0x001118: 0x49A013180A170B26 Ffma
    temp_563 = fma(temp_282, fp_c6.data[40].y, temp_272);
    // 0x001128: 0x5080000000372F0B Mufu
    temp_564 = log2(temp_551);
    // 0x001130: 0x49A01A0400B70331 Ffma
    temp_565 = fma(temp_182, fp_c1.data[2].w, 8.40400028);
    // 0x001138: 0x32A00BBF00070000 Ffma
    temp_566 = fma(temp_77, 0.5, 0.5);
    // 0x001148: 0x0103E2CD9E87F025 Mov32i
    // 0x001150: 0x49A0180400770230 Ffma
    temp_567 = fma(temp_558, fp_c1.data[1].w, temp_557);
    // 0x001158: 0x0104066978D7F017 Mov32i
    // 0x001168: 0x49A014180A170F28 Ffma
    temp_568 = fma(temp_283, fp_c6.data[40].y, temp_273);
    // 0x001170: 0x51A0188400C70331 Ffma
    temp_569 = fma(temp_182, temp_565, fp_c1.data[3].x);
    // 0x001178: 0x49A014980A170A29 Ffma
    temp_570 = fma(temp_284, fp_c6.data[40].y, temp_274);
    // 0x001188: 0x49A2128400E70225 Ffma
    temp_571 = fma(temp_558, fp_c1.data[3].z, -0.168799996);
    // 0x001190: 0x088BF05D63973030 Fadd32i
    temp_572 = temp_567 + -0.522800028;
    // 0x001198: 0x49A20B8400870217 Ffma
    temp_573 = fma(temp_558, fp_c1.data[2].x, -3.60299993);
    // 0x0011A8: 0x4C68101809170912 Fmul
    temp_574 = temp_562 * fp_c6.data[36].y;
    // 0x0011B0: 0x51A0188400D7030A Ffma
    temp_575 = fma(temp_182, temp_569, fp_c1.data[3].y);
    // 0x0011B8: 0x4C68101808970B0F Fmul
    temp_576 = temp_564 * fp_c6.data[34].y;
    // 0x0011C8: 0x5C6810000257022C Fmul
    temp_577 = temp_558 * temp_571;
    // 0x0011D0: 0x5C68100003070303 Fmul
    temp_578 = temp_182 * temp_572;
    // 0x0011D8: 0x51A00B8400970225 Ffma
    temp_579 = fma(temp_558, temp_573, fp_c1.data[2].y);
    // 0x0011E8: 0x4C98079809670009 Mov
    // 0x0011F0: 0x5C9000800127000B Rro
    // 0x0011F8: 0x4C98079800870017 Mov
    // 0x001208: 0x5084000000270B0B Mufu
    temp_580 = exp2(temp_574);
    temp_581 = clamp(temp_580, 0.0, 1.0);
    // 0x001210: 0x5C90008000F7000F Rro
    // 0x001218: 0x59A0018002570225 Ffma
    temp_582 = fma(temp_558, temp_579, temp_578);
    // 0x001228: 0xE04BFF9042A7FF02 Ipa
    temp_583 = in_attr8.y;
    temp_584 = clamp(temp_583, 0.0, 1.0);
    // 0x001230: 0x4C58101408170909 Fadd
    temp_585 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001238: 0x5084000000270F12 Mufu
    temp_586 = exp2(temp_576);
    temp_587 = clamp(temp_586, 0.0, 1.0);
    // 0x001248: 0x4C98079800970003 Mov
    // 0x001250: 0x5C60138002C70A0A Fmnmx
    temp_588 = min(temp_575, temp_577);
    // 0x001258: 0x4C98079800A7002C Mov
    // 0x001268: 0x4C9807980867002D Mov
    // 0x001270: 0x4C5C100400A72525 Fadd
    temp_589 = temp_582 + fp_c1.data[2].z;
    temp_590 = clamp(temp_589, 0.0, 1.0);
    // 0x001278: 0x4C9807980B470030 Mov
    // 0x001288: 0x4C59101800570303 Fadd
    temp_591 = 0.0 - fp_c6.data[2].y;
    temp_592 = temp_591 + fp_c6.data[1].y;
    // 0x001290: 0x4C59101800672C0F Fadd
    temp_593 = 0.0 - fp_c6.data[2].z;
    temp_594 = temp_593 + fp_c6.data[1].z;
    // 0x001298: 0x5C68100000B7090B Fmul
    temp_595 = temp_585 * temp_581;
    // 0x0012A8: 0x4C59101800471709 Fadd
    temp_596 = 0.0 - fp_c6.data[2].x;
    temp_597 = temp_596 + fp_c6.data[1].x;
    // 0x0012B0: 0x386C104248070617 Fmul
    temp_598 = temp_206 * 50.0;
    temp_599 = clamp(temp_598, 0.0, 1.0);
    // 0x0012B8: 0x4C68101808871212 Fmul
    temp_600 = temp_587 * fp_c6.data[34].x;
    // 0x0012C8: 0x5C5C30000FF70A2C Fadd
    temp_601 = temp_588 + -0.0;
    temp_602 = clamp(temp_601, 0.0, 1.0);
    // 0x0012D0: 0x51A001980097000A Ffma
    temp_603 = fma(temp_566, temp_592, fp_c6.data[2].y);
    // 0x0012D8: 0x51A218180B472222 Ffma
    temp_604 = 0.0 - fp_c6.data[45].x;
    temp_605 = fma(temp_23, fp_c6.data[45].x, temp_604);
    // 0x0012E8: 0x51A0049800870009 Ffma
    temp_606 = fma(temp_566, temp_597, fp_c6.data[2].x);
    // 0x0012F0: 0x51A0079800A70000 Ffma
    temp_607 = fma(temp_566, temp_594, fp_c6.data[2].z);
    // 0x0012F8: 0x51A0169808671203 Ffma
    temp_608 = fma(temp_600, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001308: 0x4C68101808D70B12 Fmul
    temp_609 = temp_595 * fp_c6.data[35].y;
    // 0x001310: 0x5C68100002C7170F Fmul
    temp_610 = temp_599 * temp_602;
    // 0x001318: 0x4C68101808C70B17 Fmul
    temp_611 = temp_595 * fp_c6.data[35].x;
    // 0x001328: 0x4C68101808E70B0B Fmul
    temp_612 = temp_595 * fp_c6.data[35].z;
    // 0x001330: 0x5C58300002C7252C Fadd
    temp_613 = 0.0 - temp_602;
    temp_614 = temp_590 + temp_613;
    // 0x001338: 0x010404000007F02D Mov32i
    // 0x001348: 0x49A0141408271228 Ffma
    temp_615 = fma(temp_609, fp_c5.data[32].z, temp_568);
    // 0x001350: 0x49A1091408271225 Ffma
    temp_616 = 0.0 - fp_c5.data[32].z;
    temp_617 = fma(temp_609, temp_616, temp_609);
    // 0x001358: 0x49A0131408271726 Ffma
    temp_618 = fma(temp_611, fp_c5.data[32].z, temp_563);
    // 0x001368: 0x49A10B9408271712 Ffma
    temp_619 = 0.0 - fp_c5.data[32].z;
    temp_620 = fma(temp_611, temp_619, temp_611);
    // 0x001370: 0x49A0149408270B29 Ffma
    temp_621 = fma(temp_612, fp_c5.data[32].z, temp_570);
    // 0x001378: 0x49A1059408270B17 Ffma
    temp_622 = 0.0 - fp_c5.data[32].z;
    temp_623 = fma(temp_612, temp_622, temp_612);
    // 0x001388: 0x59A0078002C7050B Ffma
    temp_624 = fma(temp_194, temp_614, temp_610);
    // 0x001390: 0x33A016C000070205 Ffma
    temp_625 = fma(temp_584, -2.0, 3.0);
    // 0x001398: 0x5C68100000270202 Fmul
    temp_626 = temp_584 * temp_584;
    // 0x0013A8: 0x59A0078002C70404 Ffma
    temp_627 = fma(temp_193, temp_614, temp_610);
    // 0x0013B0: 0x59A0078002C70606 Ffma
    temp_628 = fma(temp_206, temp_614, temp_610);
    // 0x0013B8: 0x5C58100001773232 Fadd
    temp_629 = temp_560 + temp_623;
    // 0x0013C8: 0x51A218180B472323 Ffma
    temp_630 = 0.0 - fp_c6.data[45].x;
    temp_631 = fma(temp_24, fp_c6.data[45].x, temp_630);
    // 0x0013D0: 0x51A218180B470101 Ffma
    temp_632 = 0.0 - fp_c6.data[45].x;
    temp_633 = fma(temp_25, fp_c6.data[45].x, temp_632);
    // 0x0013D8: 0xF0F0000034370000 Depbar
    // 0x0013E8: 0x49A01A980A170707 Ffma
    temp_634 = fma(temp_285, fp_c6.data[40].y, temp_518);
    // 0x0013F0: 0x49A019980A170808 Ffma
    temp_635 = fma(temp_286, fp_c6.data[40].y, temp_521);
    // 0x0013F8: 0x5C58100001270712 Fadd
    temp_636 = temp_634 + temp_620;
    // 0x001408: 0x4C68101808772107 Fmul
    temp_637 = temp_95 * fp_c6.data[33].w;
    // 0x001410: 0x5C58100002570808 Fadd
    temp_638 = temp_635 + temp_617;
    // 0x001418: 0xF0F0000034270000 Depbar
    // 0x001428: 0x49A0060400670909 Ffma
    temp_639 = fma(temp_606, fp_c1.data[1].z, temp_537);
    // 0x001430: 0x49A0068400670A0A Ffma
    temp_640 = fma(temp_603, fp_c1.data[1].z, temp_538);
    // 0x001438: 0x49A007040067000E Ffma
    temp_641 = fma(temp_607, fp_c1.data[1].z, temp_539);
    // 0x001448: 0x5C68100000270500 Fmul
    temp_642 = temp_625 * temp_626;
    // 0x001450: 0xF0F0000034170000 Depbar
    // 0x001458: 0xE043FF9002A7FF02 Ipa
    temp_643 = in_attr8.x;
    // 0x001468: 0x49A0081808571405 Ffma
    temp_644 = fma(temp_541, fp_c6.data[33].y, temp_547);
    // 0x001470: 0xE043FF8C82A7FF2A Ipa
    temp_645 = in_attr4.z;
    // 0x001478: 0x59A2048000371C1C Ffma
    temp_646 = 0.0 - temp_639;
    temp_647 = fma(temp_92, temp_608, temp_646);
    // 0x001488: 0x59A2050000371D1D Ffma
    temp_648 = 0.0 - temp_640;
    temp_649 = fma(temp_93, temp_608, temp_648);
    // 0x001490: 0x59A2070000372003 Ffma
    temp_650 = 0.0 - temp_641;
    temp_651 = fma(temp_94, temp_608, temp_650);
    // 0x001498: 0x49A0089808571511 Ffma
    temp_652 = fma(temp_542, fp_c6.data[33].y, temp_548);
    // 0x0014A8: 0x49A0121808571616 Ffma
    temp_653 = fma(temp_543, fp_c6.data[33].y, temp_549);
    // 0x0014B0: 0x59A0130000570404 Ffma
    temp_654 = fma(temp_627, temp_644, temp_618);
    // 0x0014B8: 0x59A0048000771C1C Ffma
    temp_655 = fma(temp_647, temp_637, temp_639);
    // 0x0014C8: 0x59A0050000771D1D Ffma
    temp_656 = fma(temp_649, temp_637, temp_640);
    // 0x0014D0: 0x59A0070000770303 Ffma
    temp_657 = fma(temp_651, temp_637, temp_641);
    // 0x0014D8: 0x4C98079802870005 Mov
    // 0x0014E8: 0x59A0140001170606 Ffma
    temp_658 = fma(temp_628, temp_652, temp_615);
    // 0x0014F0: 0x59A0148001670B0B Ffma
    temp_659 = fma(temp_624, temp_653, temp_621);
    // 0x0014F8: 0x5C58100001271C12 Fadd
    temp_660 = temp_655 + temp_636;
    // 0x001508: 0x5C58100000871D08 Fadd
    temp_661 = temp_656 + temp_638;
    // 0x001510: 0x5C58100003270332 Fadd
    temp_662 = temp_657 + temp_629;
    // 0x001518: 0x51A0029802872222 Ffma
    temp_663 = fma(temp_605, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001528: 0x4C98079802970009 Mov
    // 0x001530: 0x4C68101803770000 Fmul
    temp_664 = temp_642 * fp_c6.data[13].w;
    // 0x001538: 0x59A1090001272703 Ffma
    temp_665 = 0.0 - temp_660;
    temp_666 = fma(temp_20, temp_665, temp_660);
    // 0x001548: 0x59A1040000872708 Ffma
    temp_667 = 0.0 - temp_661;
    temp_668 = fma(temp_20, temp_667, temp_661);
    // 0x001550: 0x51A0049802972323 Ffma
    temp_669 = fma(temp_631, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001558: 0x59A0020000371E1E Ffma
    temp_670 = fma(temp_14, temp_666, temp_654);
    // 0x001568: 0x59A1190003272704 Ffma
    temp_671 = 0.0 - temp_662;
    temp_672 = fma(temp_20, temp_671, temp_662);
    // 0x001570: 0x59A0030000871F06 Ffma
    temp_673 = fma(temp_15, temp_668, temp_658);
    // 0x001578: 0x49A501180BC72B2B Ffma
    temp_674 = 0.0 - fp_c6.data[47].x;
    temp_675 = fma(temp_556, temp_674, temp_643);
    temp_676 = clamp(temp_675, 0.0, 1.0);
    // 0x001588: 0x5C68100001E71313 Fmul
    temp_677 = temp_265 * temp_670;
    // 0x001590: 0x5080000000372B2B Mufu
    temp_678 = log2(temp_676);
    // 0x001598: 0x4C98079802A70002 Mov
    // 0x0015A8: 0x59A0058000471A04 Ffma
    temp_679 = fma(temp_16, temp_672, temp_659);
    // 0x0015B0: 0x5C68100000671818 Fmul
    temp_680 = temp_267 * temp_673;
    // 0x0015B8: 0x49A2001803570006 Ffma
    temp_681 = 0.0 - temp_664;
    temp_682 = fma(temp_664, fp_c6.data[13].y, temp_681);
    // 0x0015C8: 0x5C58300002271303 Fadd
    temp_683 = 0.0 - temp_663;
    temp_684 = temp_677 + temp_683;
    // 0x0015D0: 0x51A0011802A70102 Ffma
    temp_685 = fma(temp_633, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0015D8: 0x5C68100000471919 Fmul
    temp_686 = temp_269 * temp_679;
    // 0x0015E8: 0x5C58300002371801 Fadd
    temp_687 = 0.0 - temp_669;
    temp_688 = temp_680 + temp_687;
    // 0x0015F0: 0x49A011180BF70304 Ffma
    temp_689 = fma(temp_684, fp_c6.data[47].w, temp_663);
    // 0x0015F8: 0x4C68101803172B05 Fmul
    temp_690 = temp_678 * fp_c6.data[12].y;
    // 0x001608: 0x5C58300000271903 Fadd
    temp_691 = 0.0 - temp_685;
    temp_692 = temp_686 + temp_691;
    // 0x001610: 0x49A011980BF70101 Ffma
    temp_693 = fma(temp_688, fp_c6.data[47].w, temp_669);
    // 0x001618: 0x5C60178000472204 Fmnmx
    temp_694 = max(temp_663, temp_689);
    // 0x001628: 0x49A001180BF70303 Ffma
    temp_695 = fma(temp_692, fp_c6.data[47].w, temp_685);
    // 0x001630: 0x5C90008000570007 Rro
    // 0x001638: 0x49A2001803470005 Ffma
    temp_696 = 0.0 - temp_664;
    temp_697 = fma(temp_664, fp_c6.data[13].x, temp_696);
    // 0x001648: 0x5080000000270707 Mufu
    temp_698 = exp2(temp_690);
    // 0x001650: 0x5C60178000172301 Fmnmx
    temp_699 = max(temp_669, temp_693);
    // 0x001658: 0x49A2001803670000 Ffma
    temp_700 = 0.0 - temp_664;
    temp_701 = fma(temp_664, fp_c6.data[13].z, temp_700);
    // 0x001668: 0x5C60178000370203 Fmnmx
    temp_702 = max(temp_685, temp_695);
    // 0x001670: 0x59A0020000570405 Ffma
    temp_703 = fma(temp_694, temp_697, temp_694);
    // 0x001678: 0x59A0008000670101 Ffma
    temp_704 = fma(temp_699, temp_682, temp_699);
    // 0x001688: 0x4C58100C03872A04 Fadd
    temp_705 = temp_645 + fp_c3.data[14].x;
    // 0x001690: 0x59A0018000070302 Ffma
    temp_706 = fma(temp_702, temp_701, temp_702);
    // 0x001698: 0x5C9807800FF70006 Mov
    // 0x0016A8: 0x5C59100000571300 Fadd
    temp_707 = 0.0 - temp_677;
    temp_708 = temp_707 + temp_703;
    // 0x0016B0: 0x4C68101802B70703 Fmul
    temp_709 = temp_698 * fp_c6.data[10].w;
    // 0x0016B8: 0x5C59100000171801 Fadd
    temp_710 = 0.0 - temp_680;
    temp_711 = temp_710 + temp_704;
    // 0x0016C8: 0x5C59100000271902 Fadd
    temp_712 = 0.0 - temp_686;
    temp_713 = temp_712 + temp_706;
    // 0x0016D0: 0x5C98078001B70007 Mov
    // 0x0016D8: 0x0103EC000007F005 Mov32i
    // 0x0016E8: 0x49A37F8C03C70404 Ffma
    temp_714 = 0.0 - fp_c3.data[15].x;
    temp_715 = fma(temp_705, temp_714, -0.0);
    // 0x0016F0: 0x59A0098000370000 Ffma
    temp_716 = fma(temp_708, temp_709, temp_677);
    // 0x0016F8: 0x59A00C0000370101 Ffma
    temp_717 = fma(temp_711, temp_709, temp_680);
    // 0x001708: 0x59A00C8000370202 Ffma
    temp_718 = fma(temp_713, temp_709, temp_686);
    // 0x001710: 0x5C98078001B70003 Mov
    // 0x001718: 0xE30000000007000F Exit
    out_attr0.x = temp_716;
    out_attr0.y = temp_717;
    out_attr0.z = temp_718;
    out_attr0.w = temp_17;
    out_attr1.x = temp_715;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = temp_17;
    return;
}
