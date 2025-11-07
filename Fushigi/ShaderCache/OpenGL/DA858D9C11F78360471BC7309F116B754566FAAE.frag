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
layout (binding = 4) uniform sampler2D fp_t_tcb_2C;
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
    precise vec2 temp_12;
    precise float temp_13;
    precise float temp_14;
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
    bool temp_69;
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
    uint temp_111;
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
    int temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    int temp_146;
    uint temp_147;
    uint temp_148;
    int temp_149;
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
    bool temp_205;
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
    precise float temp_311;
    int temp_312;
    bool temp_313;
    int temp_314;
    int temp_315;
    int temp_316;
    int temp_317;
    int temp_318;
    uint temp_319;
    uint temp_320;
    int temp_321;
    precise float temp_322;
    precise float temp_323;
    precise float temp_324;
    precise float temp_325;
    int temp_326;
    int temp_327;
    uint temp_328;
    uint temp_329;
    int temp_330;
    precise float temp_331;
    int temp_332;
    uint temp_333;
    int temp_334;
    precise float temp_335;
    int temp_336;
    uint temp_337;
    uint temp_338;
    int temp_339;
    precise float temp_340;
    int temp_341;
    uint temp_342;
    int temp_343;
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
    precise float temp_369;
    precise float temp_370;
    precise float temp_371;
    precise float temp_372;
    precise float temp_373;
    int temp_374;
    uint temp_375;
    uint temp_376;
    int temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    int temp_381;
    uint temp_382;
    uint temp_383;
    int temp_384;
    precise float temp_385;
    int temp_386;
    uint temp_387;
    int temp_388;
    precise float temp_389;
    precise float temp_390;
    precise float temp_391;
    precise float temp_392;
    precise float temp_393;
    precise float temp_394;
    int temp_395;
    uint temp_396;
    uint temp_397;
    int temp_398;
    precise float temp_399;
    int temp_400;
    uint temp_401;
    int temp_402;
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
    precise float temp_416;
    bool temp_417;
    uint temp_418;
    precise float temp_419;
    precise float temp_420;
    precise float temp_421;
    precise float temp_422;
    precise float temp_423;
    precise float temp_424;
    precise float temp_425;
    uint temp_426;
    precise float temp_427;
    bool temp_428;
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
    precise float temp_454;
    int temp_455;
    uint temp_456;
    uint temp_457;
    int temp_458;
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
    uint temp_469;
    uint temp_470;
    int temp_471;
    precise float temp_472;
    int temp_473;
    uint temp_474;
    int temp_475;
    precise float temp_476;
    precise float temp_477;
    precise float temp_478;
    precise float temp_479;
    int temp_480;
    uint temp_481;
    uint temp_482;
    int temp_483;
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
    precise vec3 temp_560;
    precise float temp_561;
    precise float temp_562;
    precise float temp_563;
    precise float temp_564;
    precise float temp_565;
    precise float temp_566;
    precise float temp_567;
    precise float temp_568;
    precise vec3 temp_569;
    precise float temp_570;
    precise float temp_571;
    precise float temp_572;
    precise vec3 temp_573;
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
    precise float temp_730;
    precise float temp_731;
    precise float temp_732;
    precise float temp_733;
    precise float temp_734;
    precise float temp_735;
    precise float temp_736;
    precise float temp_737;
    precise float temp_738;
    precise float temp_739;
    precise float temp_740;
    // 0x000008: 0x0103F8000007F00D Mov32i
    // 0x000010: 0xE003FF87CFF7FF0C Ipa
    // 0x000018: 0xE003FF870FF7FF02 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000028: 0xE003FF874FF7FF03 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000030: 0x5080000000470C0C Mufu
    // 0x000038: 0x4C68100C04A70202 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000048: 0x4C68100C04B70303 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000050: 0xE043FF8E00C7FF0B Ipa
    temp_8 = in_attr6.x;
    // 0x000058: 0xE043FF8E40C7FF12 Ipa
    temp_9 = in_attr6.y;
    // 0x000068: 0xE043FF8EC0C7FF04 Ipa
    temp_10 = in_attr6.w;
    // 0x000070: 0xE043FF8E80C7FF05 Ipa
    temp_11 = in_attr6.z;
    // 0x000078: 0xD830026FF1270B06 Texs
    temp_12 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_13 = temp_12.x;
    temp_14 = temp_12.y;
    // 0x000088: 0xD834024FF1270B1E Texs
    temp_15 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xw;
    temp_16 = temp_15.x;
    temp_17 = temp_15.y;
    // 0x000090: 0xD86201EFF0D7020D Texs
    temp_18 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x000098: 0xD8240360F1270B22 Texs
    temp_19 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_20 = temp_19.x;
    temp_21 = temp_19.y;
    temp_22 = temp_19.z;
    // 0x0000A8: 0xD82202C080470504 Texs
    temp_23 = texture(fp_t_tcb_2C, vec2(temp_11, temp_10)).xyz;
    temp_24 = temp_23.x;
    temp_25 = temp_23.y;
    temp_26 = temp_23.z;
    // 0x0000B0: 0xD82202000037021C Texs
    temp_27 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_28 = temp_27.x;
    temp_29 = temp_27.y;
    temp_30 = temp_27.z;
    // 0x0000B8: 0xE043FF8A00C7FF01 Ipa
    temp_31 = in_attr2.x;
    // 0x0000C8: 0xE043FF8A40C7FF09 Ipa
    temp_32 = in_attr2.y;
    // 0x0000D0: 0xE043FF8A80C7FF0A Ipa
    temp_33 = in_attr2.z;
    // 0x0000D8: 0xE043FF8900C7FF0E Ipa
    temp_34 = in_attr1.x;
    // 0x0000E8: 0xE043FF8800C7FF15 Ipa
    temp_35 = in_attr0.x;
    // 0x0000F0: 0xE043FF8940C7FF10 Ipa
    temp_36 = in_attr1.y;
    // 0x0000F8: 0xE043FF8840C7FF16 Ipa
    temp_37 = in_attr0.y;
    // 0x000108: 0xE043FF8980C7FF11 Ipa
    temp_38 = in_attr1.z;
    // 0x000110: 0xE043FF8880C7FF17 Ipa
    temp_39 = in_attr0.z;
    // 0x000118: 0xE043FF8B00C7FF21 Ipa
    temp_40 = in_attr3.x;
    // 0x000128: 0xE043FF8B40C7FF20 Ipa
    temp_41 = in_attr3.y;
    // 0x000130: 0x5C6810000017010B Fmul
    temp_42 = temp_31 * temp_31;
    // 0x000138: 0x5C68100000E70E12 Fmul
    temp_43 = temp_34 * temp_34;
    // 0x000148: 0x5C68100001571513 Fmul
    temp_44 = temp_35 * temp_35;
    // 0x000150: 0x59A005800097090B Ffma
    temp_45 = fma(temp_32, temp_32, temp_42);
    // 0x000158: 0x59A0090001071012 Ffma
    temp_46 = fma(temp_36, temp_36, temp_43);
    // 0x000168: 0x59A0098001671614 Ffma
    temp_47 = fma(temp_37, temp_37, temp_44);
    // 0x000170: 0x59A0058000A70A0B Ffma
    temp_48 = fma(temp_33, temp_33, temp_45);
    // 0x000178: 0x5080000000570B0B Mufu
    temp_49 = inversesqrt(temp_48);
    // 0x000188: 0x59A0090001171112 Ffma
    temp_50 = fma(temp_38, temp_38, temp_46);
    // 0x000190: 0x59A00A0001771718 Ffma
    temp_51 = fma(temp_39, temp_39, temp_47);
    // 0x000198: 0x5080000000571213 Mufu
    temp_52 = inversesqrt(temp_50);
    // 0x0001A8: 0x5C68100000B70101 Fmul
    temp_53 = temp_31 * temp_49;
    // 0x0001B0: 0x5080000000571818 Mufu
    temp_54 = inversesqrt(temp_51);
    // 0x0001B8: 0x5C68100000B70909 Fmul
    temp_55 = temp_32 * temp_49;
    // 0x0001C8: 0x5C68100000B70A0A Fmul
    temp_56 = temp_33 * temp_49;
    // 0x0001D0: 0x5C68100001370E14 Fmul
    temp_57 = temp_34 * temp_52;
    // 0x0001D8: 0x5C68100001371010 Fmul
    temp_58 = temp_36 * temp_52;
    // 0x0001E8: 0x5C68100001371111 Fmul
    temp_59 = temp_38 * temp_52;
    // 0x0001F0: 0xE043FF8B80C7FF13 Ipa
    temp_60 = in_attr3.z;
    // 0x0001F8: 0x5C68100001871616 Fmul
    temp_61 = temp_37 * temp_54;
    // 0x000208: 0x5C6810000187170E Fmul
    temp_62 = temp_39 * temp_54;
    // 0x000210: 0x5C68100001871512 Fmul
    temp_63 = temp_35 * temp_54;
    // 0x000218: 0xF0F0000034470000 Depbar
    // 0x000228: 0x5C6810000077070B Fmul
    temp_64 = temp_14 * temp_14;
    // 0x000230: 0x5C68100000770101 Fmul
    temp_65 = temp_53 * temp_14;
    // 0x000238: 0x5C68100000770909 Fmul
    temp_66 = temp_55 * temp_14;
    // 0x000248: 0x5C68100000770A07 Fmul
    temp_67 = temp_56 * temp_14;
    // 0x000250: 0x5C6810000217210A Fmul
    temp_68 = temp_40 * temp_40;
    // 0x000258: 0x4BB1839406071F07 Fsetp
    temp_69 = temp_17 < fp_c5.data[24].x;
    // 0x000268: 0x59A005800067060B Ffma
    temp_70 = fma(temp_13, temp_13, temp_64);
    // 0x000270: 0x59A0008001470601 Ffma
    temp_71 = fma(temp_13, temp_57, temp_65);
    // 0x000278: 0x59A0048001070609 Ffma
    temp_72 = fma(temp_13, temp_58, temp_66);
    // 0x000288: 0x59A0038001170607 Ffma
    temp_73 = fma(temp_13, temp_59, temp_67);
    // 0x000290: 0x59A005000207200A Ffma
    temp_74 = fma(temp_41, temp_41, temp_68);
    // 0x000298: 0x3868104110070310 Fmul
    temp_75 = temp_7 * 9.0;
    // 0x0002A8: 0x385D103F80070B0B Fadd
    temp_76 = 0.0 - temp_70;
    temp_77 = temp_76 + 1.0;
    temp_78 = clamp(temp_77, 0.0, 1.0);
    // 0x0002B0: 0x5CA8148001070A10 F2f
    temp_79 = floor(temp_75);
    // 0x0002B8: 0x59A005000137130A Ffma
    temp_80 = fma(temp_60, temp_60, temp_74);
    // 0x0002C8: 0x5080000000870B18 Mufu
    temp_81 = sqrt(temp_78);
    // 0x0002D0: 0x5080000000570A0A Mufu
    temp_82 = inversesqrt(temp_80);
    // 0x0002D8: 0x59A0008001871201 Ffma
    temp_83 = fma(temp_63, temp_81, temp_71);
    // 0x0002E8: 0x59A0048001871609 Ffma
    temp_84 = fma(temp_61, temp_81, temp_72);
    // 0x0002F0: 0x59A0038001870E07 Ffma
    temp_85 = fma(temp_62, temp_81, temp_73);
    // 0x0002F8: 0x5C69100000A72121 Fmul
    temp_86 = 0.0 - temp_82;
    temp_87 = temp_40 * temp_86;
    // 0x000308: 0x5C69100000A72020 Fmul
    temp_88 = 0.0 - temp_82;
    temp_89 = temp_41 * temp_88;
    // 0x000310: 0x5C69100000A71316 Fmul
    temp_90 = 0.0 - temp_82;
    temp_91 = temp_60 * temp_90;
    // 0x000318: 0x5C68100000170106 Fmul
    temp_92 = temp_83 * temp_83;
    // 0x000328: 0x59A0030000970906 Ffma
    temp_93 = fma(temp_84, temp_84, temp_92);
    // 0x000330: 0x59A0030000770706 Ffma
    temp_94 = fma(temp_85, temp_85, temp_93);
    // 0x000338: 0x5080000000570606 Mufu
    temp_95 = inversesqrt(temp_94);
    // 0x000348: 0x5C6810000067010E Fmul
    temp_96 = temp_83 * temp_95;
    // 0x000350: 0x5C68100000670901 Fmul
    temp_97 = temp_84 * temp_95;
    // 0x000358: 0x3868104180070209 Fmul
    temp_98 = temp_6 * 16.0;
    // 0x000368: 0x5C68100000670712 Fmul
    temp_99 = temp_85 * temp_95;
    // 0x000370: 0x5CA8148000970A09 F2f
    temp_100 = floor(temp_98);
    // 0x000378: 0x5C68100002170E0B Fmul
    temp_101 = temp_96 * temp_87;
    // 0x000388: 0x59A005800207010B Ffma
    temp_102 = fma(temp_97, temp_89, temp_101);
    // 0x000390: 0x32A004C180071029 Ffma
    temp_103 = fma(temp_79, 16.0, temp_100);
    // 0x000398: 0x59A4058001671202 Ffma
    temp_104 = fma(temp_99, temp_91, temp_102);
    temp_105 = clamp(temp_104, 0.0, 1.0);
    // 0x0003A8: 0x3859103F80070203 Fadd
    temp_106 = 0.0 - temp_105;
    temp_107 = temp_106 + 1.0;
    // 0x0003B0: 0xE24000000688000F Bra
    if (temp_69)
    {
        // 0x0003B8: 0x5C9807800FF70000 Mov
        // 0x0003C8: 0xE33000000007000F Kil
        discard;
    }
    // 0x000428: 0x4C68101406270303 Fmul
    temp_108 = temp_107 * fp_c5.data[24].z;
    // 0x000430: 0x5CB0118002970A29 F2i
    temp_109 = trunc(temp_103);
    temp_110 = max(temp_109, 0.0);
    temp_111 = uint(temp_110);
    // 0x000438: 0x4C58301805C7210A Fadd
    temp_112 = 0.0 - fp_c6.data[23].x;
    temp_113 = temp_87 + temp_112;
    // 0x000448: 0xE2900000C6800000 Ssy
    // 0x000450: 0x4C58301805D72011 Fadd
    temp_114 = 0.0 - fp_c6.data[23].y;
    temp_115 = temp_89 + temp_114;
    // 0x000458: 0x5080400000370303 Mufu
    temp_116 = abs(temp_108);
    temp_117 = log2(temp_116);
    // 0x000468: 0x4C58301805E71613 Fadd
    temp_118 = 0.0 - fp_c6.data[23].z;
    temp_119 = temp_91 + temp_118;
    // 0x000470: 0x4C98079403470007 Mov
    // 0x000478: 0x4C9807940367000B Mov
    // 0x000488: 0xF0F0000034270000 Depbar
    // 0x000490: 0x4C6810180A072222 Fmul
    temp_120 = temp_20 * fp_c6.data[40].x;
    // 0x000498: 0x5C68100000A70A06 Fmul
    temp_121 = temp_113 * temp_113;
    // 0x0004A8: 0x0103F0000007F02A Mov32i
    // 0x0004B0: 0x51A5068400270F0D Ffma
    temp_122 = 0.0 - temp_18;
    temp_123 = fma(temp_22, temp_122, fp_c1.data[0].z);
    temp_124 = clamp(temp_123, 0.0, 1.0);
    // 0x0004B8: 0x4C59101403870707 Fadd
    temp_125 = 0.0 - fp_c5.data[13].x;
    temp_126 = temp_125 + fp_c5.data[14].x;
    // 0x0004C8: 0x4C59101403A70B0B Fadd
    temp_127 = 0.0 - fp_c5.data[13].z;
    temp_128 = temp_127 + fp_c5.data[14].z;
    // 0x0004D0: 0x5C68100000270E2F Fmul
    temp_129 = temp_96 * temp_105;
    // 0x0004D8: 0x59A0030001171109 Ffma
    temp_130 = fma(temp_115, temp_115, temp_121);
    // 0x0004E8: 0x5C9807800FF7001A Mov
    // 0x0004F0: 0x4C68101406370306 Fmul
    temp_131 = temp_117 * fp_c5.data[24].w;
    // 0x0004F8: 0x5C9807800FF7000F Mov
    // 0x000508: 0x386013BF80072203 Fmnmx
    temp_132 = min(temp_120, 1.0);
    // 0x000510: 0x5C9807800FF70027 Mov
    // 0x000518: 0x59A0048001371310 Ffma
    temp_133 = fma(temp_119, temp_119, temp_130);
    // 0x000528: 0x4C98079403570009 Mov
    // 0x000530: 0x5080000000571014 Mufu
    temp_134 = inversesqrt(temp_133);
    // 0x000538: 0x5C90008000670006 Rro
    // 0x000548: 0x32A210C000072F2F Ffma
    temp_135 = 0.0 - temp_87;
    temp_136 = fma(temp_129, 2.0, temp_135);
    // 0x000550: 0x5084000000270606 Mufu
    temp_137 = exp2(temp_131);
    temp_138 = clamp(temp_137, 0.0, 1.0);
    // 0x000558: 0x4C60178400170303 Fmnmx
    temp_139 = max(temp_132, fp_c1.data[0].y);
    // 0x000568: 0x4C59101403970909 Fadd
    temp_140 = 0.0 - fp_c5.data[13].y;
    temp_141 = temp_140 + fp_c5.data[14].y;
    // 0x000570: 0x384800000087292D Shl
    temp_142 = int(temp_111) << 8;
    // 0x000578: 0x51A401840017032C Ffma
    temp_143 = fma(temp_139, temp_139, fp_c1.data[0].y);
    temp_144 = clamp(temp_143, 0.0, 1.0);
    // 0x000588: 0x32A0153F0007032A Ffma
    temp_145 = fma(temp_139, 0.5, 0.5);
    // 0x000590: 0xEF94008200472D2D Ldc
    temp_146 = temp_142 + 0x2004;
    temp_147 = uint(temp_146) >> 2;
    temp_148 = temp_147 >> 2;
    temp_149 = int(temp_147) & 3;
    temp_150 = fp_c8.data[int(temp_148)][temp_149];
    // 0x000598: 0x5C68100001470A17 Fmul
    temp_151 = temp_113 * temp_134;
    // 0x0005A8: 0x5C68100001471313 Fmul
    temp_152 = temp_119 * temp_134;
    // 0x0005B0: 0x51A0039403470610 Ffma
    temp_153 = fma(temp_138, temp_126, fp_c5.data[13].x);
    // 0x0005B8: 0x4C68101801470607 Fmul
    temp_154 = temp_138 * fp_c6.data[5].x;
    // 0x0005C8: 0x51A0059403670636 Ffma
    temp_155 = fma(temp_138, temp_128, fp_c5.data[13].z);
    // 0x0005D0: 0x5C6810000147110B Fmul
    temp_156 = temp_115 * temp_134;
    // 0x0005D8: 0x5C68100001772111 Fmul
    temp_157 = temp_87 * temp_151;
    // 0x0005E8: 0x4C6810180157060A Fmul
    temp_158 = temp_138 * fp_c6.data[5].y;
    // 0x0005F0: 0x51A0049403570609 Ffma
    temp_159 = fma(temp_138, temp_141, fp_c5.data[13].y);
    // 0x0005F8: 0xF0F0000034170000 Depbar
    // 0x000608: 0x5C68100000470707 Fmul
    temp_160 = temp_154 * temp_24;
    // 0x000610: 0x5C68100001770E04 Fmul
    temp_161 = temp_96 * temp_151;
    // 0x000618: 0x4C68101801670606 Fmul
    temp_162 = temp_138 * fp_c6.data[5].z;
    // 0x000628: 0x59A0088000B72011 Ffma
    temp_163 = fma(temp_89, temp_156, temp_157);
    // 0x000630: 0x5C68100000570A0A Fmul
    temp_164 = temp_158 * temp_25;
    // 0x000638: 0x4C98079403070014 Mov
    // 0x000648: 0x5C68100002C72C2B Fmul
    temp_165 = temp_144 * temp_144;
    // 0x000650: 0x59A0020000B70105 Ffma
    temp_166 = fma(temp_97, temp_156, temp_161);
    // 0x000658: 0x5C68100000870608 Fmul
    temp_167 = temp_162 * temp_26;
    // 0x000668: 0x4C69101805C71704 Fmul
    temp_168 = 0.0 - fp_c6.data[23].x;
    temp_169 = temp_151 * temp_168;
    // 0x000670: 0x01040DF760C7F006 Mov32i
    // 0x000678: 0x59A4088001371611 Ffma
    temp_170 = fma(temp_91, temp_152, temp_163);
    temp_171 = clamp(temp_170, 0.0, 1.0);
    // 0x000688: 0x5C68100000771007 Fmul
    temp_172 = temp_153 * temp_160;
    // 0x000690: 0x59A4028001371215 Ffma
    temp_173 = fma(temp_99, temp_152, temp_166);
    temp_174 = clamp(temp_173, 0.0, 1.0);
    // 0x000698: 0xEF5400000047FF07 Stl
    local_memory[1] = floatBitsToUint(temp_172);
    // 0x0006A8: 0x49A1021805D70B05 Ffma
    temp_175 = 0.0 - fp_c6.data[23].y;
    temp_176 = fma(temp_156, temp_175, temp_169);
    // 0x0006B0: 0x4C69101805C70E0B Fmul
    temp_177 = 0.0 - fp_c6.data[23].x;
    temp_178 = temp_96 * temp_177;
    // 0x0006B8: 0x4C59101402C71404 Fadd
    temp_179 = 0.0 - fp_c5.data[12].x;
    temp_180 = temp_179 + fp_c5.data[11].x;
    // 0x0006C8: 0x5C68120002A72A2A Fmul
    temp_181 = temp_145 * 0.5;
    temp_182 = temp_181 * temp_145;
    // 0x0006D0: 0x4C98079403270017 Mov
    // 0x0006D8: 0x59A20A8002B71510 Ffma
    temp_183 = 0.0 - temp_174;
    temp_184 = fma(temp_174, temp_165, temp_183);
    // 0x0006E8: 0x49A5029805E71314 Ffma
    temp_185 = 0.0 - fp_c6.data[23].z;
    temp_186 = fma(temp_152, temp_185, temp_176);
    temp_187 = clamp(temp_186, 0.0, 1.0);
    // 0x0006F0: 0x49A1059805D7010B Ffma
    temp_188 = 0.0 - fp_c6.data[23].y;
    temp_189 = fma(temp_97, temp_188, temp_178);
    // 0x0006F8: 0x51A0021403071E04 Ffma
    temp_190 = fma(temp_16, temp_180, fp_c5.data[12].x);
    // 0x000708: 0x5C68100000A70909 Fmul
    temp_191 = temp_159 * temp_164;
    // 0x000710: 0x49A2030400071107 Ffma
    temp_192 = fma(temp_171, fp_c1.data[0].x, -6.98316002);
    // 0x000718: 0xEF5400000007FF09 Stl
    local_memory[0] = floatBitsToUint(temp_191);
    // 0x000728: 0x51A0080400271515 Ffma
    temp_193 = fma(temp_174, temp_184, fp_c1.data[0].z);
    // 0x000730: 0x4C98079403170010 Mov
    // 0x000738: 0x5080000000471515 Mufu
    temp_194 = 1.0 / temp_193;
    // 0x000748: 0x49A5059805E7120B Ffma
    temp_195 = 0.0 - fp_c6.data[23].z;
    temp_196 = fma(temp_99, temp_195, temp_189);
    temp_197 = clamp(temp_196, 0.0, 1.0);
    // 0x000750: 0x49A2030400071406 Ffma
    temp_198 = fma(temp_187, fp_c1.data[0].x, -6.98316002);
    // 0x000758: 0x5C68100000771107 Fmul
    temp_199 = temp_171 * temp_192;
    // 0x000768: 0x59A1010002A70211 Ffma
    temp_200 = 0.0 - temp_182;
    temp_201 = fma(temp_105, temp_200, temp_105);
    // 0x000770: 0x4C58301407B70405 Fadd
    temp_202 = 0.0 - fp_c5.data[30].w;
    temp_203 = temp_190 + temp_202;
    // 0x000778: 0x5C68100000873636 Fmul
    temp_204 = temp_155 * temp_167;
    // 0x000788: 0x5B6603800FF72D07 Isetp
    temp_205 = floatBitsToUint(temp_150) <= 0u;
    // 0x000790: 0x5C90008000770013 Rro
    // 0x000798: 0x4C59101402D71007 Fadd
    temp_206 = 0.0 - fp_c5.data[12].y;
    temp_207 = temp_206 + fp_c5.data[11].y;
    // 0x0007A8: 0x5080000000271313 Mufu
    temp_208 = exp2(temp_199);
    // 0x0007B0: 0x4C59101402E71710 Fadd
    temp_209 = 0.0 - fp_c5.data[12].z;
    temp_210 = temp_209 + fp_c5.data[11].z;
    // 0x0007B8: 0x59A1058002A70B17 Ffma
    temp_211 = 0.0 - temp_182;
    temp_212 = fma(temp_197, temp_211, temp_197);
    // 0x0007C8: 0x5C58100001172A18 Fadd
    temp_213 = temp_182 + temp_201;
    // 0x0007D0: 0x5C68100000671411 Fmul
    temp_214 = temp_187 * temp_198;
    // 0x0007D8: 0x5080000000471818 Mufu
    temp_215 = 1.0 / temp_213;
    // 0x0007E8: 0x51A0029407B72305 Ffma
    temp_216 = fma(temp_21, temp_203, fp_c5.data[30].w);
    // 0x0007F0: 0x51A0039403171E06 Ffma
    temp_217 = fma(temp_16, temp_207, fp_c5.data[12].y);
    // 0x0007F8: 0x5C58100001772A19 Fadd
    temp_218 = temp_182 + temp_212;
    // 0x000808: 0x51A0081403271E07 Ffma
    temp_219 = fma(temp_16, temp_210, fp_c5.data[12].z);
    // 0x000810: 0x5080000000471919 Mufu
    temp_220 = 1.0 / temp_218;
    // 0x000818: 0x5C90008001170017 Rro
    // 0x000828: 0x4C68101801470B11 Fmul
    temp_221 = temp_197 * fp_c6.data[5].x;
    // 0x000830: 0x5080000000271717 Mufu
    temp_222 = exp2(temp_214);
    // 0x000838: 0x59A1098001370514 Ffma
    temp_223 = 0.0 - temp_208;
    temp_224 = fma(temp_216, temp_223, temp_208);
    // 0x000848: 0x4C58301407B70610 Fadd
    temp_225 = 0.0 - fp_c5.data[30].w;
    temp_226 = temp_217 + temp_225;
    // 0x000850: 0x5C68100001572C15 Fmul
    temp_227 = temp_144 * temp_194;
    // 0x000858: 0x3868103F0007182E Fmul
    temp_228 = temp_215 * 0.5;
    // 0x000868: 0x1E23EA2F98371132 Fmul32i
    temp_229 = temp_221 * 0.318309873;
    // 0x000870: 0x5C58100001470514 Fadd
    temp_230 = temp_216 + temp_224;
    // 0x000878: 0x4C58301407B70711 Fadd
    temp_231 = 0.0 - fp_c5.data[30].w;
    temp_232 = temp_219 + temp_231;
    // 0x000888: 0x51A0081407B72308 Ffma
    temp_233 = fma(temp_21, temp_226, fp_c5.data[30].w);
    // 0x000890: 0x5C68100001571515 Fmul
    temp_234 = temp_227 * temp_227;
    // 0x000898: 0x5C68100001972E18 Fmul
    temp_235 = temp_228 * temp_220;
    // 0x0008A8: 0x4C68101801570B10 Fmul
    temp_236 = temp_197 * fp_c6.data[5].y;
    // 0x0008B0: 0x4C68101406971414 Fmul
    temp_237 = temp_230 * fp_c5.data[26].y;
    // 0x0008B8: 0x51A0089407B72309 Ffma
    temp_238 = fma(temp_21, temp_232, fp_c5.data[30].w);
    // 0x0008C8: 0x59A109800137080A Ffma
    temp_239 = 0.0 - temp_208;
    temp_240 = fma(temp_233, temp_239, temp_208);
    // 0x0008D0: 0x4C68101801670B11 Fmul
    temp_241 = temp_197 * fp_c6.data[5].z;
    // 0x0008D8: 0x5C68100001871518 Fmul
    temp_242 = temp_234 * temp_235;
    // 0x0008E8: 0x59A10B8001770815 Ffma
    temp_243 = 0.0 - temp_222;
    temp_244 = fma(temp_233, temp_243, temp_222);
    // 0x0008F0: 0x59A1190003271432 Ffma
    temp_245 = 0.0 - temp_229;
    temp_246 = fma(temp_237, temp_245, temp_229);
    // 0x0008F8: 0x59A1098001370913 Ffma
    temp_247 = 0.0 - temp_208;
    temp_248 = fma(temp_238, temp_247, temp_208);
    // 0x000908: 0x59A10B8001770514 Ffma
    temp_249 = 0.0 - temp_222;
    temp_250 = fma(temp_216, temp_249, temp_222);
    // 0x000910: 0x59A10B8001770917 Ffma
    temp_251 = 0.0 - temp_222;
    temp_252 = fma(temp_238, temp_251, temp_222);
    // 0x000918: 0x5C58100000A7080A Fadd
    temp_253 = temp_233 + temp_240;
    // 0x000928: 0x5C58100001570815 Fadd
    temp_254 = temp_233 + temp_244;
    // 0x000930: 0x1E23EA2F98371010 Fmul32i
    temp_255 = temp_236 * 0.318309873;
    // 0x000938: 0x5C58100001370913 Fadd
    temp_256 = temp_238 + temp_248;
    // 0x000948: 0x5C58100001470514 Fadd
    temp_257 = temp_216 + temp_250;
    // 0x000950: 0x5C58100001770917 Fadd
    temp_258 = temp_238 + temp_252;
    // 0x000958: 0x1E23EA2F98371111 Fmul32i
    temp_259 = temp_241 * 0.318309873;
    // 0x000968: 0x4C68101406970A0A Fmul
    temp_260 = temp_253 * fp_c5.data[26].y;
    // 0x000970: 0x4C68101406971515 Fmul
    temp_261 = temp_254 * fp_c5.data[26].y;
    // 0x000978: 0x4C68101406971313 Fmul
    temp_262 = temp_256 * fp_c5.data[26].y;
    // 0x000988: 0x4C68101406971414 Fmul
    temp_263 = temp_257 * fp_c5.data[26].y;
    // 0x000990: 0x4C68101406971717 Fmul
    temp_264 = temp_258 * fp_c5.data[26].y;
    // 0x000998: 0x5C68100001870B26 Fmul
    temp_265 = temp_197 * temp_242;
    // 0x0009A8: 0x59A1080001070A0A Ffma
    temp_266 = 0.0 - temp_255;
    temp_267 = fma(temp_260, temp_266, temp_255);
    // 0x0009B0: 0x4C68101801571515 Fmul
    temp_268 = temp_261 * fp_c6.data[5].y;
    // 0x0009B8: 0x59A108800117130B Ffma
    temp_269 = 0.0 - temp_259;
    temp_270 = fma(temp_262, temp_269, temp_259);
    // 0x0009C8: 0x4C68101801471414 Fmul
    temp_271 = temp_263 * fp_c6.data[5].x;
    // 0x0009D0: 0x49A206980AC70D10 Ffma
    temp_272 = 0.0 - temp_124;
    temp_273 = fma(temp_124, fp_c6.data[43].x, temp_272);
    // 0x0009D8: 0x49A206980AD70D11 Ffma
    temp_274 = 0.0 - temp_124;
    temp_275 = fma(temp_124, fp_c6.data[43].y, temp_274);
    // 0x0009E8: 0x4C68101801671717 Fmul
    temp_276 = temp_264 * fp_c6.data[5].z;
    // 0x0009F0: 0x49A206980AE70D0D Ffma
    temp_277 = 0.0 - temp_124;
    temp_278 = fma(temp_124, fp_c6.data[43].z, temp_277);
    // 0x0009F8: 0x5C68100002671525 Fmul
    temp_279 = temp_268 * temp_265;
    // 0x000A08: 0x5C68100002671424 Fmul
    temp_280 = temp_271 * temp_265;
    // 0x000A10: 0x3858103F8007101B Fadd
    temp_281 = temp_273 + 1.0;
    // 0x000A18: 0x3858103F80071111 Fadd
    temp_282 = temp_275 + 1.0;
    // 0x000A28: 0x5C68100002671726 Fmul
    temp_283 = temp_276 * temp_265;
    // 0x000A30: 0x3858103F80070D22 Fadd
    temp_284 = temp_278 + 1.0;
    // 0x000A38: 0x5C6810000027010D Fmul
    temp_285 = temp_97 * temp_105;
    // 0x000A48: 0x5C68100000271217 Fmul
    temp_286 = temp_99 * temp_105;
    // 0x000A50: 0x5C9807800FF70013 Mov
    // 0x000A58: 0x5C9807800FF70018 Mov
    // 0x000A68: 0x5C9807800FF70019 Mov
    // 0x000A70: 0x59A40D8001B7041B Ffma
    temp_287 = fma(temp_190, temp_281, temp_281);
    temp_288 = clamp(temp_287, 0.0, 1.0);
    // 0x000A78: 0x59A408800117061E Ffma
    temp_289 = fma(temp_217, temp_282, temp_282);
    temp_290 = clamp(temp_289, 0.0, 1.0);
    // 0x000A88: 0x59A4110002270722 Ffma
    temp_291 = fma(temp_219, temp_284, temp_284);
    temp_292 = clamp(temp_291, 0.0, 1.0);
    // 0x000A90: 0x32A2104000070D28 Ffma
    temp_293 = 0.0 - temp_89;
    temp_294 = fma(temp_285, 2.0, temp_293);
    // 0x000A98: 0x32A20B4000071717 Ffma
    temp_295 = 0.0 - temp_91;
    temp_296 = fma(temp_286, 2.0, temp_295);
    // 0x000AA8: 0x1E23E22F98372424 Fmul32i
    temp_297 = temp_280 * 0.159154937;
    // 0x000AB0: 0x1E23E22F98372525 Fmul32i
    temp_298 = temp_279 * 0.159154937;
    // 0x000AB8: 0x1E23E22F98372626 Fmul32i
    temp_299 = temp_283 * 0.159154937;
    // 0x000AC8: 0xF0F800000000000F Sync
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
    temp_311 = 0.0;
    if (!temp_205)
    {
        // 0x000AD0: 0x5C9807800FF70030 Mov
        temp_312 = 0;
        do
        {
            // 0x000AD8: 0x5C18020003072915 Iscadd
            temp_314 = int(temp_111) << 4;
            temp_315 = temp_314 + temp_312;
            // 0x000AE8: 0xE003FF87CFF7FF33 Ipa
            // 0x000AF0: 0x1C00000000173030 Iadd32i
            temp_316 = temp_312 + 1;
            // 0x000AF8: 0xE003FF87CFF7FF35 Ipa
            // 0x000B08: 0x3848000000471515 Shl
            temp_317 = temp_315 << 4;
            // 0x000B10: 0xE003FF87CFF7FF34 Ipa
            // 0x000B18: 0x5B6C038002D7300F Isetp
            temp_313 = uint(temp_316) >= floatBitsToUint(temp_150);
            // 0x000B28: 0xE290000057000000 Ssy
            // 0x000B30: 0xEF94008200071515 Ldc
            temp_318 = temp_317 + 0x2000;
            temp_319 = uint(temp_318) >> 2;
            temp_320 = temp_319 >> 2;
            temp_321 = int(temp_319) & 3;
            temp_322 = fp_c8.data[int(temp_320)][temp_321];
            // 0x000B38: 0x5080000000473333 Mufu
            // 0x000B48: 0x5080000000473535 Mufu
            // 0x000B50: 0x5080000000473434 Mufu
            // 0x000B58: 0xE043FF8D0337FF33 Ipa
            temp_323 = in_attr5.x;
            // 0x000B68: 0xE043FF8D8357FF35 Ipa
            temp_324 = in_attr5.z;
            // 0x000B70: 0xE043FF8D4347FF34 Ipa
            temp_325 = in_attr5.y;
            // 0x000B78: 0x3848000000671531 Shl
            temp_326 = floatBitsToInt(temp_322) << 6;
            // 0x000B88: 0xEF9500800107310C Ldc
            temp_327 = temp_326 + 16;
            temp_328 = uint(temp_327) >> 2;
            temp_329 = temp_328 >> 2;
            temp_330 = int(temp_328) & 3;
            temp_331 = fp_c8.data[int(temp_329)][temp_330];
            temp_332 = int(temp_328) + 1;
            temp_333 = uint(temp_332) >> 2;
            temp_334 = temp_332 & 3;
            temp_335 = fp_c8.data[int(temp_333)][temp_334];
            // 0x000B90: 0xEF95008001873110 Ldc
            temp_336 = temp_326 + 24;
            temp_337 = uint(temp_336) >> 2;
            temp_338 = temp_337 >> 2;
            temp_339 = int(temp_337) & 3;
            temp_340 = fp_c8.data[int(temp_338)][temp_339];
            temp_341 = int(temp_337) + 1;
            temp_342 = uint(temp_341) >> 2;
            temp_343 = temp_341 & 3;
            temp_344 = fp_c8.data[int(temp_342)][temp_343];
            // 0x000B98: 0xEF95008002073114 Ldc
            temp_345 = temp_326 + 32;
            temp_346 = uint(temp_345) >> 2;
            temp_347 = temp_346 >> 2;
            temp_348 = int(temp_346) & 3;
            temp_349 = fp_c8.data[int(temp_347)][temp_348];
            temp_350 = int(temp_346) + 1;
            temp_351 = uint(temp_350) >> 2;
            temp_352 = temp_350 & 3;
            temp_353 = fp_c8.data[int(temp_351)][temp_352];
            // 0x000BA8: 0x5C58300003370C33 Fadd
            temp_354 = 0.0 - temp_323;
            temp_355 = temp_331 + temp_354;
            // 0x000BB0: 0x5C58300003470D34 Fadd
            temp_356 = 0.0 - temp_325;
            temp_357 = temp_335 + temp_356;
            // 0x000BB8: 0x5C58300003571010 Fadd
            temp_358 = 0.0 - temp_324;
            temp_359 = temp_340 + temp_358;
            // 0x000BC8: 0x5C6810000337330D Fmul
            temp_360 = temp_355 * temp_355;
            // 0x000BD0: 0x59A108000107110C Ffma
            temp_361 = 0.0 - temp_359;
            temp_362 = fma(temp_344, temp_361, temp_359);
            // 0x000BD8: 0x59A0068003473411 Ffma
            temp_363 = fma(temp_357, temp_357, temp_360);
            // 0x000BE8: 0x59A0088000C70C35 Ffma
            temp_364 = fma(temp_362, temp_362, temp_363);
            // 0x000BF0: 0x508000000057350D Mufu
            temp_365 = inversesqrt(temp_364);
            // 0x000BF8: 0x5080000000873535 Mufu
            temp_366 = sqrt(temp_364);
            // 0x000C08: 0x5C68100000D73337 Fmul
            temp_367 = temp_355 * temp_365;
            // 0x000C10: 0x5C68100000D70C0C Fmul
            temp_368 = temp_362 * temp_365;
            // 0x000C18: 0x5C68100000D7340D Fmul
            temp_369 = temp_357 * temp_365;
            // 0x000C28: 0x5C69100001473714 Fmul
            temp_370 = 0.0 - temp_349;
            temp_371 = temp_367 * temp_370;
            // 0x000C30: 0x59A10A0001570D0D Ffma
            temp_372 = 0.0 - temp_353;
            temp_373 = fma(temp_369, temp_372, temp_371);
            // 0x000C38: 0xEF94008002873114 Ldc
            temp_374 = temp_326 + 40;
            temp_375 = uint(temp_374) >> 2;
            temp_376 = temp_375 >> 2;
            temp_377 = int(temp_375) & 3;
            temp_378 = fp_c8.data[int(temp_376)][temp_377];
            // 0x000C48: 0x010404000007F015 Mov32i
            // 0x000C50: 0x59A1068001470C14 Ffma
            temp_379 = 0.0 - temp_378;
            temp_380 = fma(temp_368, temp_379, temp_373);
            // 0x000C58: 0xEF9500800387310C Ldc
            temp_381 = temp_326 + 56;
            temp_382 = uint(temp_381) >> 2;
            temp_383 = temp_382 >> 2;
            temp_384 = int(temp_382) & 3;
            temp_385 = fp_c8.data[int(temp_383)][temp_384];
            temp_386 = int(temp_382) + 1;
            temp_387 = uint(temp_386) >> 2;
            temp_388 = temp_386 & 3;
            temp_389 = fp_c8.data[int(temp_387)][temp_388];
            // 0x000C68: 0x59A4068000C7140C Ffma
            temp_390 = fma(temp_380, temp_385, temp_389);
            temp_391 = clamp(temp_390, 0.0, 1.0);
            // 0x000C70: 0x5C68100000C70C14 Fmul
            temp_392 = temp_391 * temp_391;
            // 0x000C78: 0x33A00AC000070C0C Ffma
            temp_393 = fma(temp_391, -2.0, 3.0);
            // 0x000C88: 0x5C68100000C71414 Fmul
            temp_394 = temp_392 * temp_393;
            // 0x000C90: 0xEF9500800307310C Ldc
            temp_395 = temp_326 + 48;
            temp_396 = uint(temp_395) >> 2;
            temp_397 = temp_396 >> 2;
            temp_398 = int(temp_396) & 3;
            temp_399 = fp_c8.data[int(temp_397)][temp_398];
            temp_400 = int(temp_396) + 1;
            temp_401 = uint(temp_400) >> 2;
            temp_402 = temp_400 & 3;
            temp_403 = fp_c8.data[int(temp_401)][temp_402];
            // 0x000C98: 0x59A4068003570C35 Ffma
            temp_404 = fma(temp_399, temp_366, temp_403);
            temp_405 = clamp(temp_404, 0.0, 1.0);
            // 0x000CA8: 0x33A00AC000073515 Ffma
            temp_406 = fma(temp_405, -2.0, 3.0);
            // 0x000CB0: 0x5C68100003573535 Fmul
            temp_407 = temp_405 * temp_405;
            // 0x000CB8: 0x5C68100001573515 Fmul
            temp_408 = temp_407 * temp_406;
            // 0x000CC8: 0x39585042F0071035 Fadd
            temp_409 = abs(temp_359);
            temp_410 = temp_409 + -120.0;
            // 0x000CD0: 0x5C68100001571414 Fmul
            temp_411 = temp_394 * temp_408;
            // 0x000CD8: 0x1EABD4CCCCD73535 Fmul32i
            temp_412 = temp_410 * -0.0500000007;
            temp_413 = clamp(temp_412, 0.0, 1.0);
            // 0x000CE8: 0x36247F9000171515 Xmad
            temp_414 = floatBitsToUint(temp_408) >> 16;
            temp_415 = int(temp_414) << 16;
            // 0x000CF0: 0x5C68100003571414 Fmul
            temp_416 = temp_411 * temp_413;
            // 0x000CF8: 0x5BB383800FF71407 Fsetp
            temp_417 = temp_416 <= 0.0;
            // 0x000D08: 0x7A05083C0F00FF15 Hadd2
            temp_312 = temp_316;
            temp_418 = uint(temp_415);
            temp_419 = temp_300;
            temp_420 = temp_301;
            temp_421 = temp_302;
            temp_422 = temp_303;
            temp_423 = temp_304;
            temp_424 = temp_305;
            if (temp_417)
            {
                temp_425 = unpackHalf2x16(uint(temp_415)).y;
                temp_426 = packHalf2x16(vec2(1.0, temp_425));
                temp_418 = temp_426;
            }
            // 0x000D10: 0x5D2103902FF71507 Hsetp2
            temp_427 = unpackHalf2x16(temp_418).x;
            temp_428 = temp_427 == 0.0;
            // 0x000D18: 0xF0F800000008000F Sync
            if (temp_428)
            {
                // 0x000D28: 0x5080000000470C0C Mufu
                temp_429 = 1.0 / temp_399;
                // 0x000D30: 0x5C69100000C70D0C Fmul
                temp_430 = 0.0 - temp_429;
                temp_431 = temp_403 * temp_430;
                // 0x000D38: 0x5C60138000C71010 Fmnmx
                temp_432 = min(temp_359, temp_431);
                // 0x000D48: 0x5C61178001070C10 Fmnmx
                temp_433 = 0.0 - temp_431;
                temp_434 = max(temp_433, temp_432);
                // 0x000D50: 0x59A0088001071011 Ffma
                temp_435 = fma(temp_434, temp_434, temp_363);
                // 0x000D58: 0x508000000057110D Mufu
                temp_436 = inversesqrt(temp_435);
                // 0x000D68: 0x5080000000871111 Mufu
                temp_437 = sqrt(temp_435);
                // 0x000D70: 0x5C68100000D73333 Fmul
                temp_438 = temp_355 * temp_436;
                // 0x000D78: 0x5C68100000D73434 Fmul
                temp_439 = temp_357 * temp_436;
                // 0x000D88: 0x5C68100000D71010 Fmul
                temp_440 = temp_434 * temp_436;
                // 0x000D90: 0x5C5810000337210C Fadd
                temp_441 = temp_87 + temp_438;
                // 0x000D98: 0x5C5810000347200D Fadd
                temp_442 = temp_89 + temp_439;
                // 0x000DA8: 0x5C58100001071615 Fadd
                temp_443 = temp_91 + temp_440;
                // 0x000DB0: 0x5C68100000C70C35 Fmul
                temp_444 = temp_441 * temp_441;
                // 0x000DB8: 0x59A01A8000D70D35 Ffma
                temp_445 = fma(temp_442, temp_442, temp_444);
                // 0x000DC8: 0x59A01A8001571535 Ffma
                temp_446 = fma(temp_443, temp_443, temp_445);
                // 0x000DD0: 0x5080000000573535 Mufu
                temp_447 = inversesqrt(temp_446);
                // 0x000DD8: 0x5C68100003570C0C Fmul
                temp_448 = temp_441 * temp_447;
                // 0x000DE8: 0x5C68100003571515 Fmul
                temp_449 = temp_443 * temp_447;
                // 0x000DF0: 0x5C68100003570D0D Fmul
                temp_450 = temp_442 * temp_447;
                // 0x000DF8: 0x5C68100003370E35 Fmul
                temp_451 = temp_96 * temp_438;
                // 0x000E08: 0x5C68100000C73337 Fmul
                temp_452 = temp_438 * temp_448;
                // 0x000E10: 0x5C68100000C70E0C Fmul
                temp_453 = temp_96 * temp_448;
                // 0x000E18: 0x59A01A8003470133 Ffma
                temp_454 = fma(temp_97, temp_439, temp_451);
                // 0x000E28: 0xEF94008002C73135 Ldc
                temp_455 = temp_326 + 44;
                temp_456 = uint(temp_455) >> 2;
                temp_457 = temp_456 >> 2;
                temp_458 = int(temp_456) & 3;
                temp_459 = fp_c8.data[int(temp_457)][temp_458];
                // 0x000E30: 0x59A01B8000D73434 Ffma
                temp_460 = fma(temp_439, temp_450, temp_452);
                // 0x000E38: 0x59A0198001071233 Ffma
                temp_461 = fma(temp_99, temp_440, temp_454);
                // 0x000E48: 0x59A41A0001571034 Ffma
                temp_462 = fma(temp_440, temp_449, temp_460);
                temp_463 = clamp(temp_462, 0.0, 1.0);
                // 0x000E50: 0x5C5C30000FF73310 Fadd
                temp_464 = temp_461 + -0.0;
                temp_465 = clamp(temp_464, 0.0, 1.0);
                // 0x000E58: 0x5080000000473535 Mufu
                temp_466 = 1.0 / temp_459;
                // 0x000E68: 0x51A0088400373511 Ffma
                temp_467 = fma(temp_466, temp_437, fp_c1.data[0].w);
                // 0x000E70: 0x59A0060000D70135 Ffma
                temp_468 = fma(temp_97, temp_450, temp_453);
                // 0x000E78: 0xEF9500800007310C Ldc
                temp_469 = uint(temp_326) >> 2;
                temp_470 = temp_469 >> 2;
                temp_471 = int(temp_469) & 3;
                temp_472 = fp_c8.data[int(temp_470)][temp_471];
                temp_473 = int(temp_469) + 1;
                temp_474 = uint(temp_473) >> 2;
                temp_475 = temp_473 & 3;
                temp_476 = fp_c8.data[int(temp_474)][temp_475];
                // 0x000E88: 0x59A41A8001571235 Ffma
                temp_477 = fma(temp_99, temp_449, temp_468);
                temp_478 = clamp(temp_477, 0.0, 1.0);
                // 0x000E90: 0x5080000000471111 Mufu
                temp_479 = 1.0 / temp_467;
                // 0x000E98: 0x01040DF760C7F015 Mov32i
                // 0x000EA8: 0xEF94008000873131 Ldc
                temp_480 = temp_326 + 8;
                temp_481 = uint(temp_480) >> 2;
                temp_482 = temp_481 >> 2;
                temp_483 = int(temp_481) & 3;
                temp_484 = fp_c8.data[int(temp_482)][temp_483];
                // 0x000EB0: 0x49A20A8400073415 Ffma
                temp_485 = fma(temp_463, fp_c1.data[0].x, -6.98316002);
                // 0x000EB8: 0x1E23FB3333371111 Fmul32i
                temp_486 = temp_479 * 1.39999998;
                // 0x000EC8: 0x5C68100001573415 Fmul
                temp_487 = temp_463 * temp_485;
                // 0x000ED0: 0x59A21A8003572B34 Ffma
                temp_488 = 0.0 - temp_478;
                temp_489 = fma(temp_165, temp_478, temp_488);
                // 0x000ED8: 0x5C68100001171111 Fmul
                temp_490 = temp_486 * temp_486;
                // 0x000EE8: 0x5C90008001570015 Rro
                // 0x000EF0: 0x51A01A0400273535 Ffma
                temp_491 = fma(temp_478, temp_489, fp_c1.data[0].z);
                // 0x000EF8: 0x5080000000271515 Mufu
                temp_492 = exp2(temp_487);
                // 0x000F08: 0x59A1080001072A34 Ffma
                temp_493 = 0.0 - temp_465;
                temp_494 = fma(temp_182, temp_493, temp_465);
                // 0x000F10: 0x5080000000473535 Mufu
                temp_495 = 1.0 / temp_491;
                // 0x000F18: 0x59A1088001173311 Ffma
                temp_496 = 0.0 - temp_490;
                temp_497 = fma(temp_461, temp_496, temp_490);
                // 0x000F28: 0x5C58100003472A34 Fadd
                temp_498 = temp_182 + temp_494;
                // 0x000F30: 0x5C5C100001173311 Fadd
                temp_499 = temp_461 + temp_497;
                temp_500 = clamp(temp_499, 0.0, 1.0);
                // 0x000F38: 0x5080000000473434 Mufu
                temp_501 = 1.0 / temp_498;
                // 0x000F48: 0x59A10A8001570533 Ffma
                temp_502 = 0.0 - temp_492;
                temp_503 = fma(temp_216, temp_502, temp_492);
                // 0x000F50: 0x5C68100003572C35 Fmul
                temp_504 = temp_144 * temp_495;
                // 0x000F58: 0x5C58100003370533 Fadd
                temp_505 = temp_216 + temp_503;
                // 0x000F68: 0x5C68100000C7140C Fmul
                temp_506 = temp_416 * temp_472;
                // 0x000F70: 0x5C68100000D7140D Fmul
                temp_507 = temp_416 * temp_476;
                // 0x000F78: 0x5C68100003573535 Fmul
                temp_508 = temp_504 * temp_504;
                // 0x000F88: 0x5C68100003472E34 Fmul
                temp_509 = temp_228 * temp_501;
                // 0x000F90: 0x4C68101406973333 Fmul
                temp_510 = temp_505 * fp_c5.data[26].y;
                // 0x000F98: 0x5C68100003171431 Fmul
                temp_511 = temp_416 * temp_484;
                // 0x000FA8: 0x59A10A8001570814 Ffma
                temp_512 = 0.0 - temp_492;
                temp_513 = fma(temp_233, temp_512, temp_492);
                // 0x000FB0: 0x59A10A8001570915 Ffma
                temp_514 = 0.0 - temp_492;
                temp_515 = fma(temp_238, temp_514, temp_492);
                // 0x000FB8: 0x5C68100003473534 Fmul
                temp_516 = temp_508 * temp_509;
                // 0x000FC8: 0x5C68100000C73333 Fmul
                temp_517 = temp_510 * temp_506;
                // 0x000FD0: 0x5C68100001170C0C Fmul
                temp_518 = temp_506 * temp_500;
                // 0x000FD8: 0x5C58100001470814 Fadd
                temp_519 = temp_233 + temp_513;
                // 0x000FE8: 0x5C58100001570915 Fadd
                temp_520 = temp_238 + temp_515;
                // 0x000FF0: 0x5C68100003471034 Fmul
                temp_521 = temp_465 * temp_516;
                // 0x000FF8: 0x49A0138400570C27 Ffma
                temp_522 = fma(temp_518, fp_c1.data[1].y, temp_300);
                // 0x001008: 0x4C68101406971414 Fmul
                temp_523 = temp_519 * fp_c5.data[26].y;
                // 0x001010: 0x4C68101406971515 Fmul
                temp_524 = temp_520 * fp_c5.data[26].y;
                // 0x001018: 0x5C68100003473333 Fmul
                temp_525 = temp_517 * temp_521;
                // 0x001028: 0x5C68100000D71414 Fmul
                temp_526 = temp_523 * temp_507;
                // 0x001030: 0x5C68100003171515 Fmul
                temp_527 = temp_524 * temp_511;
                // 0x001038: 0x5C68100001170D0D Fmul
                temp_528 = temp_507 * temp_500;
                // 0x001048: 0x5C68100001173111 Fmul
                temp_529 = temp_511 * temp_500;
                // 0x001050: 0x49A00D040047331A Ffma
                temp_530 = fma(temp_525, fp_c1.data[1].x, temp_301);
                // 0x001058: 0x5C68100003471414 Fmul
                temp_531 = temp_526 * temp_521;
                // 0x001068: 0x5C68100003471515 Fmul
                temp_532 = temp_527 * temp_521;
                // 0x001070: 0x49A00C0400570D18 Ffma
                temp_533 = fma(temp_528, fp_c1.data[1].y, temp_302);
                // 0x001078: 0x49A00C8400571119 Ffma
                temp_534 = fma(temp_529, fp_c1.data[1].y, temp_303);
                // 0x001088: 0x49A007840047140F Ffma
                temp_535 = fma(temp_531, fp_c1.data[1].x, temp_304);
                // 0x001090: 0x49A0098400471513 Ffma
                temp_536 = fma(temp_532, fp_c1.data[1].x, temp_305);
                // 0x001098: 0xF0F800000007000F Sync
                temp_419 = temp_522;
                temp_420 = temp_530;
                temp_421 = temp_533;
                temp_422 = temp_534;
                temp_423 = temp_535;
                temp_424 = temp_536;
            }
            // 0x0010A8: 0xE2400FFFA289000F Bra
            temp_300 = temp_419;
            temp_301 = temp_420;
            temp_302 = temp_421;
            temp_303 = temp_422;
            temp_304 = temp_423;
            temp_305 = temp_424;
            temp_306 = temp_419;
            temp_307 = temp_421;
            temp_308 = temp_423;
            temp_309 = temp_424;
            temp_310 = temp_422;
            temp_311 = temp_420;
        }
        while (!temp_313);
        // 0x0010B0: 0xF0F800000007000F Sync
    }
    // 0x0010B8: 0x5C62578000170E0C Fmnmx
    temp_537 = abs(temp_96);
    temp_538 = abs(temp_97);
    temp_539 = max(temp_537, temp_538);
    // 0x0010C8: 0xE003FF87CFF7FF29 Ipa
    // 0x0010D0: 0x5C62578002872F0D Fmnmx
    temp_540 = abs(temp_136);
    temp_541 = abs(temp_294);
    temp_542 = max(temp_540, temp_541);
    // 0x0010D8: 0xEF4410000007FF33 Ldl
    temp_543 = uintBitsToFloat(local_memory[0]);
    // 0x0010E8: 0x5C60578000C7120C Fmnmx
    temp_544 = abs(temp_99);
    temp_545 = max(temp_544, temp_539);
    // 0x0010F0: 0xEF4410000047FF31 Ldl
    temp_546 = uintBitsToFloat(local_memory[1]);
    // 0x0010F8: 0x010000000017F014 Mov32i
    // 0x001108: 0x5080000000470C0C Mufu
    temp_547 = 1.0 / temp_545;
    // 0x001110: 0x5C60578000D7170D Fmnmx
    temp_548 = abs(temp_296);
    temp_549 = max(temp_548, temp_542);
    // 0x001118: 0x3868104080070321 Fmul
    temp_550 = temp_139 * 4.0;
    // 0x001128: 0x5080000000470D0D Mufu
    temp_551 = 1.0 / temp_549;
    // 0x001130: 0x4C98079C0207002B Mov
    // 0x001138: 0x5C69100000C71212 Fmul
    temp_552 = 0.0 - temp_547;
    temp_553 = temp_99 * temp_552;
    // 0x001148: 0x5C68100000C70E10 Fmul
    temp_554 = temp_96 * temp_547;
    // 0x001150: 0x5080000000472929 Mufu
    // 0x001158: 0x5C68100000C70111 Fmul
    temp_555 = temp_97 * temp_547;
    // 0x001168: 0x5C68100000D72F15 Fmul
    temp_556 = temp_136 * temp_551;
    // 0x001170: 0x5C68100000D72816 Fmul
    temp_557 = temp_294 * temp_551;
    // 0x001178: 0x5C69100000D71717 Fmul
    temp_558 = 0.0 - temp_551;
    temp_559 = temp_296 * temp_558;
    // 0x001188: 0xC0BA0163EFF7100C Tex
    temp_560 = textureLod(fp_t_tcb_16, vec3(temp_554, temp_555, temp_553), 0.0).xyz;
    temp_561 = temp_560.x;
    temp_562 = temp_560.y;
    temp_563 = temp_560.z;
    // 0x001190: 0x38681040E0070328 Fmul
    temp_564 = temp_139 * 7.0;
    // 0x001198: 0xE043FF910297FF2C Ipa
    temp_565 = in_attr9.x;
    // 0x0011A8: 0x5C98078001270020 Mov
    // 0x0011B0: 0xE043FF914297FF2D Ipa
    temp_566 = in_attr9.y;
    // 0x0011B8: 0x49A019180A172732 Ffma
    temp_567 = fma(temp_306, fp_c6.data[40].y, temp_246);
    // 0x0011C8: 0xE043FF918297FF2E Ipa
    temp_568 = in_attr9.z;
    // 0x0011D0: 0xC1BA0143F2871414 Tex
    temp_569 = textureLod(fp_t_tcb_14, vec4(temp_556, temp_557, temp_559, float(1)), temp_564).xyz;
    temp_570 = temp_569.x;
    temp_571 = temp_569.y;
    temp_572 = temp_569.z;
    // 0x0011D8: 0xD9A2018202071010 Texs
    temp_573 = textureLod(fp_t_tcb_18, vec3(temp_554, temp_555, temp_553), temp_550).xyz;
    temp_574 = temp_573.x;
    temp_575 = temp_573.y;
    temp_576 = temp_573.z;
    // 0x0011E8: 0xDEBA0000C2B72C2C TexB
    temp_577 = texture(fp_t_cb7_20, vec3(temp_565, temp_566, temp_568)).x;
    // 0x0011F0: 0x49A005180A17180A Ffma
    temp_578 = fma(temp_307, fp_c6.data[40].y, temp_267);
    // 0x0011F8: 0x0103F0000007F018 Mov32i
    // 0x001208: 0x4C9807980B470027 Mov
    // 0x001210: 0x49A012980A170F25 Ffma
    temp_579 = fma(temp_308, fp_c6.data[40].y, temp_298);
    // 0x001218: 0x49A013180A171326 Ffma
    temp_580 = fma(temp_309, fp_c6.data[40].y, temp_299);
    // 0x001228: 0x3859103F80070212 Fadd
    temp_581 = 0.0 - temp_105;
    temp_582 = temp_581 + 1.0;
    // 0x001230: 0x3859103F80070303 Fadd
    temp_583 = 0.0 - temp_139;
    temp_584 = temp_583 + 1.0;
    // 0x001238: 0x32A00C3F00070113 Ffma
    temp_585 = fma(temp_97, 0.5, 0.5);
    // 0x001248: 0xF0F0000034570000 Depbar
    // 0x001250: 0x51A213980B47000F Ffma
    temp_586 = 0.0 - fp_c6.data[45].x;
    temp_587 = fma(temp_30, fp_c6.data[45].x, temp_586);
    // 0x001258: 0x4C98079800870001 Mov
    // 0x001268: 0x4C98079800970000 Mov
    // 0x001270: 0x4C98079800A70018 Mov
    // 0x001278: 0x4C68101809071212 Fmul
    temp_588 = temp_582 * fp_c6.data[36].x;
    // 0x001288: 0x5C68100000370303 Fmul
    temp_589 = temp_584 * temp_584;
    // 0x001290: 0x5080400000371212 Mufu
    temp_590 = abs(temp_588);
    temp_591 = log2(temp_590);
    // 0x001298: 0x4C59101800470101 Fadd
    temp_592 = 0.0 - fp_c6.data[2].x;
    temp_593 = temp_592 + fp_c6.data[1].x;
    // 0x0012A8: 0x4C59101800570000 Fadd
    temp_594 = 0.0 - fp_c6.data[2].y;
    temp_595 = temp_594 + fp_c6.data[1].y;
    // 0x0012B0: 0x4C59101800671818 Fadd
    temp_596 = 0.0 - fp_c6.data[2].z;
    temp_597 = temp_596 + fp_c6.data[1].z;
    // 0x0012B8: 0x010410676C97F021 Mov32i
    // 0x0012C8: 0x49A005980A17190B Ffma
    temp_598 = fma(temp_310, fp_c6.data[40].y, temp_270);
    // 0x0012D0: 0x51A213980B471D1D Ffma
    temp_599 = 0.0 - fp_c6.data[45].x;
    temp_600 = fma(temp_29, fp_c6.data[45].x, temp_599);
    // 0x0012D8: 0x51A0009800871301 Ffma
    temp_601 = fma(temp_585, temp_593, fp_c6.data[2].x);
    // 0x0012E8: 0x51A0001800971300 Ffma
    temp_602 = fma(temp_585, temp_595, fp_c6.data[2].y);
    // 0x0012F0: 0x51A00C1800A71313 Ffma
    temp_603 = fma(temp_585, temp_597, fp_c6.data[2].z);
    // 0x0012F8: 0xE04BFF904297FF18 Ipa
    temp_604 = in_attr8.y;
    temp_605 = clamp(temp_604, 0.0, 1.0);
    // 0x001308: 0x51A213980B471C1C Ffma
    temp_606 = 0.0 - fp_c6.data[45].x;
    temp_607 = fma(temp_28, fp_c6.data[45].x, temp_606);
    // 0x001310: 0x1E23E468DB970227 Fmul32i
    temp_608 = temp_105 * 0.193900004;
    // 0x001318: 0x5C68100000370319 Fmul
    temp_609 = temp_589 * temp_589;
    // 0x001328: 0x4C98079406B70017 Mov
    // 0x001330: 0x49A0108400970221 Ffma
    temp_610 = fma(temp_105, fp_c1.data[2].y, 8.40400028);
    // 0x001338: 0x0103E2CD9E87F02A Mov32i
    // 0x001348: 0x4C68101809171212 Fmul
    temp_611 = temp_591 * fp_c6.data[36].y;
    // 0x001350: 0x0104066978D7F028 Mov32i
    // 0x001358: 0x49A0138400671927 Ffma
    temp_612 = fma(temp_609, fp_c1.data[1].z, temp_608);
    // 0x001368: 0x49A012180A171A24 Ffma
    temp_613 = fma(temp_311, fp_c6.data[40].y, temp_297);
    // 0x001370: 0x4C68101809D7171A Fmul
    temp_614 = fp_c5.data[26].w * fp_c6.data[39].y;
    // 0x001378: 0x51A0108400A7022B Ffma
    temp_615 = fma(temp_105, temp_610, fp_c1.data[2].z);
    // 0x001388: 0x49A2150400B7192A Ffma
    temp_616 = fma(temp_609, fp_c1.data[2].w, -0.168799996);
    // 0x001390: 0x49A2140400771928 Ffma
    temp_617 = fma(temp_609, fp_c1.data[1].w, -3.60299993);
    // 0x001398: 0x5C90008001270021 Rro
    // 0x0013A8: 0x088BF05D63972727 Fadd32i
    temp_618 = temp_612 + -0.522800028;
    // 0x0013B0: 0x5084000000272121 Mufu
    temp_619 = exp2(temp_611);
    temp_620 = clamp(temp_619, 0.0, 1.0);
    // 0x0013B8: 0x51A0158400C7022B Ffma
    temp_621 = fma(temp_105, temp_615, fp_c1.data[3].x);
    // 0x0013C8: 0x5C68100002A7192A Fmul
    temp_622 = temp_609 * temp_616;
    // 0x0013D0: 0x51A0140400871928 Ffma
    temp_623 = fma(temp_609, temp_617, fp_c1.data[2].x);
    // 0x0013D8: 0x4C68101809C71712 Fmul
    temp_624 = fp_c5.data[26].w * fp_c6.data[39].x;
    // 0x0013E8: 0x4C68101809E71717 Fmul
    temp_625 = fp_c5.data[26].w * fp_c6.data[39].z;
    // 0x0013F0: 0x5C68100002770227 Fmul
    temp_626 = temp_105 * temp_618;
    // 0x0013F8: 0x5C60138002A72B2D Fmnmx
    temp_627 = min(temp_621, temp_622);
    // 0x001408: 0x010404000007F02A Mov32i
    // 0x001410: 0x4C9807940827002B Mov
    // 0x001418: 0x5C68100001773602 Fmul
    temp_628 = temp_204 * temp_625;
    // 0x001428: 0x59A0138002871927 Ffma
    temp_629 = fma(temp_609, temp_623, temp_626);
    // 0x001430: 0x386C104248070828 Fmul
    temp_630 = temp_233 * 50.0;
    temp_631 = clamp(temp_630, 0.0, 1.0);
    // 0x001438: 0x33A0154000071817 Ffma
    temp_632 = fma(temp_605, -2.0, 3.0);
    // 0x001448: 0x5C6810000187182A Fmul
    temp_633 = temp_605 * temp_605;
    // 0x001450: 0x4C68101406972B2B Fmul
    temp_634 = fp_c5.data[32].z * fp_c5.data[26].y;
    // 0x001458: 0x4C5C100400D72727 Fadd
    temp_635 = temp_629 + fp_c1.data[3].y;
    temp_636 = clamp(temp_635, 0.0, 1.0);
    // 0x001468: 0x5C68100002A71717 Fmul
    temp_637 = temp_632 * temp_633;
    // 0x001470: 0x4C68101803771717 Fmul
    temp_638 = temp_637 * fp_c6.data[13].w;
    // 0x001478: 0xF0F0000034370000 Depbar
    // 0x001488: 0x5C68100001A73303 Fmul
    temp_639 = temp_543 * temp_614;
    // 0x001490: 0x4C9807980997001A Mov
    // 0x001498: 0x5C68100001273112 Fmul
    temp_640 = temp_546 * temp_624;
    // 0x0014A8: 0x4C58101408171A1A Fadd
    temp_641 = fp_c6.data[38].y + fp_c5.data[32].y;
    // 0x0014B0: 0x5C68100002171A1A Fmul
    temp_642 = temp_641 * temp_620;
    // 0x0014B8: 0x5C5C30000FF72D21 Fadd
    temp_643 = temp_627 + -0.0;
    temp_644 = clamp(temp_643, 0.0, 1.0);
    // 0x0014C8: 0x4C68101808D71A18 Fmul
    temp_645 = temp_642 * fp_c6.data[35].y;
    // 0x0014D0: 0x4C68101808E71A19 Fmul
    temp_646 = temp_642 * fp_c6.data[35].z;
    // 0x0014D8: 0x4C68101808C71A1A Fmul
    temp_647 = temp_642 * fp_c6.data[35].x;
    // 0x0014E8: 0x5C6810000287212A Fmul
    temp_648 = temp_644 * temp_631;
    // 0x0014F0: 0x5C59100002772127 Fadd
    temp_649 = 0.0 - temp_644;
    temp_650 = temp_649 + temp_636;
    // 0x0014F8: 0x59A0128002B71825 Ffma
    temp_651 = fma(temp_645, temp_634, temp_579);
    // 0x001508: 0x49A10C1408271818 Ffma
    temp_652 = 0.0 - fp_c5.data[32].z;
    temp_653 = fma(temp_645, temp_652, temp_645);
    // 0x001510: 0x49A10D1408271A21 Ffma
    temp_654 = 0.0 - fp_c5.data[32].z;
    temp_655 = fma(temp_647, temp_654, temp_647);
    // 0x001518: 0x59A0120002B71A24 Ffma
    temp_656 = fma(temp_647, temp_634, temp_613);
    // 0x001528: 0x59A015000277051A Ffma
    temp_657 = fma(temp_216, temp_650, temp_648);
    // 0x001530: 0xE043FF900297FF05 Ipa
    temp_658 = in_attr8.x;
    // 0x001538: 0x59A0130002B71926 Ffma
    temp_659 = fma(temp_646, temp_634, temp_580);
    // 0x001548: 0xE043FF8C8297FF29 Ipa
    temp_660 = in_attr4.z;
    // 0x001550: 0x49A10C9408271919 Ffma
    temp_661 = 0.0 - fp_c5.data[32].z;
    temp_662 = fma(temp_646, temp_661, temp_646);
    // 0x001558: 0x5C58100002173221 Fadd
    temp_663 = temp_567 + temp_655;
    // 0x001568: 0xF0F0000034170000 Depbar
    // 0x001570: 0x49A006040057010C Ffma
    temp_664 = fma(temp_601, fp_c1.data[1].y, temp_561);
    // 0x001578: 0x59A0150002770808 Ffma
    temp_665 = fma(temp_233, temp_650, temp_648);
    // 0x001588: 0x5C58100001870A0A Fadd
    temp_666 = temp_578 + temp_653;
    // 0x001590: 0x49A0068400570000 Ffma
    temp_667 = fma(temp_602, fp_c1.data[1].y, temp_562);
    // 0x001598: 0x4C68101406971A1A Fmul
    temp_668 = temp_657 * fp_c5.data[26].y;
    // 0x0015A8: 0x49A0081808571401 Ffma
    temp_669 = fma(temp_570, fp_c6.data[33].y, temp_574);
    // 0x0015B0: 0x5C58100001970B0B Fadd
    temp_670 = temp_598 + temp_662;
    // 0x0015B8: 0x49A007040057130E Ffma
    temp_671 = fma(temp_603, fp_c1.data[1].y, temp_563);
    // 0x0015C8: 0x5C58100000C7210C Fadd
    temp_672 = temp_663 + temp_664;
    // 0x0015D0: 0x49A0089808571513 Ffma
    temp_673 = fma(temp_571, fp_c6.data[33].y, temp_575);
    // 0x0015D8: 0x4C68101406970808 Fmul
    temp_674 = temp_665 * fp_c5.data[26].y;
    // 0x0015E8: 0x5C58100000070A00 Fadd
    temp_675 = temp_666 + temp_667;
    // 0x0015F0: 0x59A0150002770909 Ffma
    temp_676 = fma(temp_238, temp_650, temp_648);
    // 0x0015F8: 0x59A0120000171A1A Ffma
    temp_677 = fma(temp_668, temp_669, temp_656);
    // 0x001608: 0x5C58100000E70B0E Fadd
    temp_678 = temp_670 + temp_671;
    // 0x001610: 0x59A1060000C72301 Ffma
    temp_679 = 0.0 - temp_672;
    temp_680 = fma(temp_21, temp_679, temp_672);
    // 0x001618: 0x59A0128001370808 Ffma
    temp_681 = fma(temp_674, temp_673, temp_651);
    // 0x001628: 0x59A100000007230B Ffma
    temp_682 = 0.0 - temp_675;
    temp_683 = fma(temp_21, temp_682, temp_675);
    // 0x001630: 0x49A0101808571620 Ffma
    temp_684 = fma(temp_572, fp_c6.data[33].y, temp_576);
    // 0x001638: 0x4C68101406970909 Fmul
    temp_685 = temp_676 * fp_c5.data[26].y;
    // 0x001648: 0x59A1070000E7230E Ffma
    temp_686 = 0.0 - temp_678;
    temp_687 = fma(temp_21, temp_686, temp_678);
    // 0x001650: 0x59A00D0000170400 Ffma
    temp_688 = fma(temp_190, temp_680, temp_677);
    // 0x001658: 0x4C98079802970004 Mov
    // 0x001668: 0x59A0040000B70601 Ffma
    temp_689 = fma(temp_217, temp_683, temp_681);
    // 0x001670: 0x4C9807980287000A Mov
    // 0x001678: 0x59A0130002070909 Ffma
    temp_690 = fma(temp_685, temp_684, temp_659);
    // 0x001688: 0x5C68100000071B00 Fmul
    temp_691 = temp_288 * temp_688;
    // 0x001690: 0x51A0021802971D08 Ffma
    temp_692 = fma(temp_600, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001698: 0x5C68100000171E01 Fmul
    temp_693 = temp_290 * temp_689;
    // 0x0016A8: 0x51A0051802871C06 Ffma
    temp_694 = fma(temp_607, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0016B0: 0x59A0048000E70704 Ffma
    temp_695 = fma(temp_219, temp_687, temp_690);
    // 0x0016B8: 0x49A502980BC72C2C Ffma
    temp_696 = 0.0 - fp_c6.data[47].x;
    temp_697 = fma(temp_577, temp_696, temp_658);
    temp_698 = clamp(temp_697, 0.0, 1.0);
    // 0x0016C8: 0x4C98079802A70005 Mov
    // 0x0016D0: 0x5080000000372C2C Mufu
    temp_699 = log2(temp_698);
    // 0x0016D8: 0x49A0009406C70301 Ffma
    temp_700 = fma(temp_639, fp_c5.data[27].x, temp_693);
    // 0x0016E8: 0x5C68100000472204 Fmul
    temp_701 = temp_292 * temp_695;
    // 0x0016F0: 0x49A0001406C71200 Ffma
    temp_702 = fma(temp_640, fp_c5.data[27].x, temp_691);
    // 0x0016F8: 0x51A0029802A70F0F Ffma
    temp_703 = fma(temp_587, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001708: 0x5C58300000870105 Fadd
    temp_704 = 0.0 - temp_692;
    temp_705 = temp_700 + temp_704;
    // 0x001710: 0x49A0021406C70202 Ffma
    temp_706 = fma(temp_628, fp_c5.data[27].x, temp_701);
    // 0x001718: 0x5C58300000670003 Fadd
    temp_707 = 0.0 - temp_694;
    temp_708 = temp_702 + temp_707;
    // 0x001728: 0x4C68101803172C07 Fmul
    temp_709 = temp_699 * fp_c6.data[12].y;
    // 0x001730: 0x49A004180BF70505 Ffma
    temp_710 = fma(temp_705, fp_c6.data[47].w, temp_692);
    // 0x001738: 0x5C58300000F70204 Fadd
    temp_711 = 0.0 - temp_703;
    temp_712 = temp_706 + temp_711;
    // 0x001748: 0x49A003180BF70303 Ffma
    temp_713 = fma(temp_708, fp_c6.data[47].w, temp_694);
    // 0x001750: 0x5C90008000770009 Rro
    // 0x001758: 0x49A20B9803571707 Ffma
    temp_714 = 0.0 - temp_638;
    temp_715 = fma(temp_638, fp_c6.data[13].y, temp_714);
    // 0x001768: 0x5C60178000570805 Fmnmx
    temp_716 = max(temp_692, temp_710);
    // 0x001770: 0x5080000000270908 Mufu
    temp_717 = exp2(temp_709);
    // 0x001778: 0x49A007980BF70404 Ffma
    temp_718 = fma(temp_712, fp_c6.data[47].w, temp_703);
    // 0x001788: 0x5C60178000370603 Fmnmx
    temp_719 = max(temp_694, temp_713);
    // 0x001790: 0x49A20B9803471706 Ffma
    temp_720 = 0.0 - temp_638;
    temp_721 = fma(temp_638, fp_c6.data[13].x, temp_720);
    // 0x001798: 0x49A20B9803671717 Ffma
    temp_722 = 0.0 - temp_638;
    temp_723 = fma(temp_638, fp_c6.data[13].z, temp_722);
    // 0x0017A8: 0x59A0028000770507 Ffma
    temp_724 = fma(temp_716, temp_715, temp_716);
    // 0x0017B0: 0x5C60178000470F04 Fmnmx
    temp_725 = max(temp_703, temp_718);
    // 0x0017B8: 0x59A0018000670303 Ffma
    temp_726 = fma(temp_719, temp_721, temp_719);
    // 0x0017C8: 0x59A0020001770405 Ffma
    temp_727 = fma(temp_725, temp_723, temp_725);
    // 0x0017D0: 0x4C68101802B70806 Fmul
    temp_728 = temp_717 * fp_c6.data[10].w;
    // 0x0017D8: 0x5C59100000770104 Fadd
    temp_729 = 0.0 - temp_700;
    temp_730 = temp_729 + temp_724;
    // 0x0017E8: 0x5C59100000370003 Fadd
    temp_731 = 0.0 - temp_702;
    temp_732 = temp_731 + temp_726;
    // 0x0017F0: 0x5C98078001F70007 Mov
    // 0x0017F8: 0x5C59100000570205 Fadd
    temp_733 = 0.0 - temp_706;
    temp_734 = temp_733 + temp_727;
    // 0x001808: 0x59A0008000670401 Ffma
    temp_735 = fma(temp_730, temp_728, temp_700);
    // 0x001810: 0x4C58100C03872904 Fadd
    temp_736 = temp_660 + fp_c3.data[14].x;
    // 0x001818: 0x59A0000000670300 Ffma
    temp_737 = fma(temp_732, temp_728, temp_702);
    // 0x001828: 0x5C98078001F70003 Mov
    // 0x001830: 0x59A0010000670502 Ffma
    temp_738 = fma(temp_734, temp_728, temp_706);
    // 0x001838: 0x0103F4000007F005 Mov32i
    // 0x001848: 0x5C9807800FF70006 Mov
    // 0x001850: 0x49A37F8C03C70404 Ffma
    temp_739 = 0.0 - fp_c3.data[15].x;
    temp_740 = fma(temp_736, temp_739, -0.0);
    // 0x001858: 0xE30000000007000F Exit
    out_attr0.x = temp_737;
    out_attr0.y = temp_735;
    out_attr0.z = temp_738;
    out_attr0.w = temp_17;
    out_attr1.x = temp_740;
    out_attr1.y = 0.75;
    out_attr1.z = 0.0;
    out_attr1.w = temp_17;
    return;
}
