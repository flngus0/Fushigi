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
layout (binding = 2) uniform sampler2D fp_t_tcb_2C;
layout (binding = 3) uniform sampler2D fp_t_tcb_36;
layout (binding = 4) uniform sampler2D fp_t_tcb_20;
layout (binding = 5) uniform sampler2D fp_t_tcb_22;
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
    precise vec3 temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise vec3 temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise vec3 temp_26;
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
    bool temp_61;
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
    precise vec4 temp_95;
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
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    uint temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    int temp_180;
    precise float temp_181;
    int temp_182;
    uint temp_183;
    uint temp_184;
    int temp_185;
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
    bool temp_256;
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
    precise float temp_327;
    precise float temp_328;
    int temp_329;
    bool temp_330;
    int temp_331;
    int temp_332;
    int temp_333;
    int temp_334;
    int temp_335;
    uint temp_336;
    uint temp_337;
    int temp_338;
    precise float temp_339;
    precise float temp_340;
    precise float temp_341;
    precise float temp_342;
    int temp_343;
    int temp_344;
    uint temp_345;
    uint temp_346;
    int temp_347;
    precise float temp_348;
    int temp_349;
    uint temp_350;
    int temp_351;
    precise float temp_352;
    int temp_353;
    uint temp_354;
    uint temp_355;
    int temp_356;
    precise float temp_357;
    int temp_358;
    uint temp_359;
    int temp_360;
    precise float temp_361;
    int temp_362;
    uint temp_363;
    uint temp_364;
    int temp_365;
    precise float temp_366;
    int temp_367;
    uint temp_368;
    int temp_369;
    precise float temp_370;
    precise float temp_371;
    precise float temp_372;
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
    int temp_389;
    uint temp_390;
    uint temp_391;
    int temp_392;
    precise float temp_393;
    precise float temp_394;
    precise float temp_395;
    int temp_396;
    uint temp_397;
    uint temp_398;
    int temp_399;
    precise float temp_400;
    int temp_401;
    uint temp_402;
    int temp_403;
    precise float temp_404;
    precise float temp_405;
    precise float temp_406;
    int temp_407;
    uint temp_408;
    uint temp_409;
    int temp_410;
    precise float temp_411;
    int temp_412;
    uint temp_413;
    int temp_414;
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
    uint temp_431;
    int temp_432;
    precise float temp_433;
    bool temp_434;
    uint temp_435;
    precise float temp_436;
    precise float temp_437;
    precise float temp_438;
    precise float temp_439;
    precise float temp_440;
    precise float temp_441;
    precise float temp_442;
    uint temp_443;
    precise float temp_444;
    bool temp_445;
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
    int temp_458;
    uint temp_459;
    uint temp_460;
    int temp_461;
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
    uint temp_491;
    uint temp_492;
    int temp_493;
    precise float temp_494;
    int temp_495;
    uint temp_496;
    int temp_497;
    precise float temp_498;
    precise float temp_499;
    precise float temp_500;
    precise float temp_501;
    precise float temp_502;
    int temp_503;
    uint temp_504;
    uint temp_505;
    int temp_506;
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
    precise vec3 temp_578;
    precise float temp_579;
    precise float temp_580;
    precise float temp_581;
    precise vec3 temp_582;
    precise float temp_583;
    precise float temp_584;
    precise float temp_585;
    precise float temp_586;
    precise float temp_587;
    precise vec3 temp_588;
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
    precise float temp_741;
    precise float temp_742;
    precise float temp_743;
    precise float temp_744;
    precise float temp_745;
    precise float temp_746;
    precise float temp_747;
    precise float temp_748;
    precise float temp_749;
    precise float temp_750;
    precise float temp_751;
    precise float temp_752;
    precise float temp_753;
    precise float temp_754;
    precise float temp_755;
    precise float temp_756;
    precise float temp_757;
    precise float temp_758;
    precise float temp_759;
    precise float temp_760;
    // 0x000008: 0xE003FF87CFF7FF0C Ipa
    // 0x000010: 0xE003FF870FF7FF03 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000018: 0xE003FF874FF7FF08 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000028: 0x5080000000470C0C Mufu
    // 0x000030: 0x4C68100C04A70303 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000038: 0x4C68100C04B70808 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000048: 0xE043FF8E00C7FF10 Ipa
    temp_8 = in_attr6.x;
    // 0x000050: 0xE043FF8E40C7FF12 Ipa
    temp_9 = in_attr6.y;
    // 0x000058: 0xE043FF8EC0C7FF04 Ipa
    temp_10 = in_attr6.w;
    // 0x000068: 0xE043FF8E80C7FF05 Ipa
    temp_11 = in_attr6.z;
    // 0x000070: 0xD830026FF1271006 Texs
    temp_12 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_13 = temp_12.x;
    temp_14 = temp_12.y;
    // 0x000078: 0xD834024FF1271020 Texs
    temp_15 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xw;
    temp_16 = temp_15.x;
    temp_17 = temp_15.y;
    // 0x000088: 0xD82202C090470504 Texs
    temp_18 = texture(fp_t_tcb_2C, vec2(temp_11, temp_10)).xyz;
    temp_19 = temp_18.x;
    temp_20 = temp_18.y;
    temp_21 = temp_18.z;
    // 0x000090: 0xD824036021271024 Texs
    temp_22 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_23 = temp_22.x;
    temp_24 = temp_22.y;
    temp_25 = temp_22.z;
    // 0x000098: 0xD82202000087031C Texs
    temp_26 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_27 = temp_26.x;
    temp_28 = temp_26.y;
    temp_29 = temp_26.z;
    // 0x0000A8: 0xE043FF8A00C7FF01 Ipa
    temp_30 = in_attr2.x;
    // 0x0000B0: 0xE043FF8A40C7FF0A Ipa
    temp_31 = in_attr2.y;
    // 0x0000B8: 0xE043FF8900C7FF0E Ipa
    temp_32 = in_attr1.x;
    // 0x0000C8: 0xE043FF8A80C7FF0B Ipa
    temp_33 = in_attr2.z;
    // 0x0000D0: 0xE043FF8940C7FF0F Ipa
    temp_34 = in_attr1.y;
    // 0x0000D8: 0xE043FF8800C7FF13 Ipa
    temp_35 = in_attr0.x;
    // 0x0000E8: 0xE043FF8980C7FF11 Ipa
    temp_36 = in_attr1.z;
    // 0x0000F0: 0xE043FF8840C7FF16 Ipa
    temp_37 = in_attr0.y;
    // 0x0000F8: 0xE043FF8880C7FF17 Ipa
    temp_38 = in_attr0.z;
    // 0x000108: 0x5C6810000017010D Fmul
    temp_39 = temp_30 * temp_30;
    // 0x000110: 0x5C68100000E70E10 Fmul
    temp_40 = temp_32 * temp_32;
    // 0x000118: 0x5C68100001371318 Fmul
    temp_41 = temp_35 * temp_35;
    // 0x000128: 0x59A0068000A70A0D Ffma
    temp_42 = fma(temp_31, temp_31, temp_39);
    // 0x000130: 0x59A0080000F70F12 Ffma
    temp_43 = fma(temp_34, temp_34, temp_40);
    // 0x000138: 0x59A00C0001671618 Ffma
    temp_44 = fma(temp_37, temp_37, temp_41);
    // 0x000148: 0x59A0068000B70B0D Ffma
    temp_45 = fma(temp_33, temp_33, temp_42);
    // 0x000150: 0x5080000000570D10 Mufu
    temp_46 = inversesqrt(temp_45);
    // 0x000158: 0x59A0090001171112 Ffma
    temp_47 = fma(temp_36, temp_36, temp_43);
    // 0x000168: 0x5080000000571214 Mufu
    temp_48 = inversesqrt(temp_47);
    // 0x000170: 0x59A00C0001771718 Ffma
    temp_49 = fma(temp_38, temp_38, temp_44);
    // 0x000178: 0x5080000000571818 Mufu
    temp_50 = inversesqrt(temp_49);
    // 0x000188: 0x5C68100001070115 Fmul
    temp_51 = temp_30 * temp_46;
    // 0x000190: 0x5C68100001070A0A Fmul
    temp_52 = temp_31 * temp_46;
    // 0x000198: 0x5C68100001070B10 Fmul
    temp_53 = temp_33 * temp_46;
    // 0x0001A8: 0x5C68100001470E01 Fmul
    temp_54 = temp_32 * temp_48;
    // 0x0001B0: 0x5C68100001470F0F Fmul
    temp_55 = temp_34 * temp_48;
    // 0x0001B8: 0x5C68100001471111 Fmul
    temp_56 = temp_36 * temp_48;
    // 0x0001C8: 0x5C68100001871616 Fmul
    temp_57 = temp_37 * temp_50;
    // 0x0001D0: 0x5C68100001871717 Fmul
    temp_58 = temp_38 * temp_50;
    // 0x0001D8: 0xF0F0000034370000 Depbar
    // 0x0001E8: 0x5C6810000077070B Fmul
    temp_59 = temp_14 * temp_14;
    // 0x0001F0: 0x5C68100000771010 Fmul
    temp_60 = temp_53 * temp_14;
    // 0x0001F8: 0x4BB1839406072107 Fsetp
    temp_61 = temp_17 < fp_c5.data[24].x;
    // 0x000208: 0x59A005800067060B Ffma
    temp_62 = fma(temp_13, temp_13, temp_59);
    // 0x000210: 0x59A0080000671110 Ffma
    temp_63 = fma(temp_56, temp_13, temp_60);
    // 0x000218: 0x385D103F80070B0D Fadd
    temp_64 = 0.0 - temp_62;
    temp_65 = temp_64 + 1.0;
    temp_66 = clamp(temp_65, 0.0, 1.0);
    // 0x000228: 0x5C6810000077150B Fmul
    temp_67 = temp_51 * temp_14;
    // 0x000230: 0x5080000000870D0D Mufu
    temp_68 = sqrt(temp_66);
    // 0x000238: 0x59A005800067010B Ffma
    temp_69 = fma(temp_54, temp_13, temp_67);
    // 0x000248: 0x5C68100000770A01 Fmul
    temp_70 = temp_52 * temp_14;
    // 0x000250: 0x5C6810000187130A Fmul
    temp_71 = temp_35 * temp_50;
    // 0x000258: 0x59A0008000670F01 Ffma
    temp_72 = fma(temp_55, temp_13, temp_70);
    // 0x000268: 0x59A0058000D70A0A Ffma
    temp_73 = fma(temp_71, temp_68, temp_69);
    // 0x000270: 0x59A0080000D71710 Ffma
    temp_74 = fma(temp_58, temp_68, temp_63);
    // 0x000278: 0x59A0008000D71601 Ffma
    temp_75 = fma(temp_57, temp_68, temp_72);
    // 0x000288: 0x5C68100000A70A06 Fmul
    temp_76 = temp_73 * temp_73;
    // 0x000290: 0x59A0030000170106 Ffma
    temp_77 = fma(temp_75, temp_75, temp_76);
    // 0x000298: 0x59A0030001071006 Ffma
    temp_78 = fma(temp_74, temp_74, temp_77);
    // 0x0002A8: 0x5080000000570607 Mufu
    temp_79 = inversesqrt(temp_78);
    // 0x0002B0: 0x5C68100000771012 Fmul
    temp_80 = temp_74 * temp_79;
    // 0x0002B8: 0x5C68100000770101 Fmul
    temp_81 = temp_75 * temp_79;
    // 0x0002C8: 0x5C68100000770A0E Fmul
    temp_82 = temp_73 * temp_79;
    // 0x0002D0: 0x4C68100C0067120B Fmul
    temp_83 = temp_80 * fp_c3.data[1].z;
    // 0x0002D8: 0x4C68100C00271207 Fmul
    temp_84 = temp_80 * fp_c3.data[0].z;
    // 0x0002E8: 0x49A0058C0057010B Ffma
    temp_85 = fma(temp_81, fp_c3.data[1].y, temp_83);
    // 0x0002F0: 0x49A0038C00170107 Ffma
    temp_86 = fma(temp_81, fp_c3.data[0].y, temp_84);
    // 0x0002F8: 0x49A0058C00470E0B Ffma
    temp_87 = fma(temp_82, fp_c3.data[1].x, temp_85);
    // 0x000308: 0x49A0038C00070E07 Ffma
    temp_88 = fma(temp_82, fp_c3.data[0].x, temp_86);
    // 0x000310: 0x4C69100C03E70B0B Fmul
    temp_89 = 0.0 - fp_c3.data[15].z;
    temp_90 = temp_87 * temp_89;
    // 0x000318: 0x4C68101808B70706 Fmul
    temp_91 = temp_88 * fp_c6.data[34].w;
    // 0x000328: 0x4C68101808B70B0B Fmul
    temp_92 = temp_90 * fp_c6.data[34].w;
    // 0x000330: 0xE24000000688000F Bra
    if (temp_61)
    {
        // 0x000338: 0x5C9807800FF70000 Mov
        // 0x000348: 0xE33000000007000F Kil
        discard;
    }
    // 0x0003A8: 0x49A001840037061A Ffma
    temp_93 = fma(temp_91, fp_c1.data[0].w, temp_6);
    // 0x0003B0: 0x49A0040400370B0B Ffma
    temp_94 = fma(temp_92, fp_c1.data[0].w, temp_7);
    // 0x0003B8: 0xD8320221E0B71A1A Texs
    temp_95 = texture(fp_t_tcb_22, vec2(temp_93, temp_94)).xyzw;
    temp_96 = temp_95.x;
    temp_97 = temp_95.y;
    temp_98 = temp_95.z;
    temp_99 = temp_95.w;
    // 0x0003C8: 0xE043FF8B00C7FF2A Ipa
    temp_100 = in_attr3.x;
    // 0x0003D0: 0xE043FF8B40C7FF23 Ipa
    temp_101 = in_attr3.y;
    // 0x0003D8: 0xF0F0000034270000 Depbar
    // 0x0003E8: 0x5080400000370406 Mufu
    temp_102 = abs(temp_19);
    temp_103 = log2(temp_102);
    // 0x0003F0: 0xE043FF8B80C7FF22 Ipa
    temp_104 = in_attr3.z;
    // 0x0003F8: 0x508040000037090A Mufu
    temp_105 = abs(temp_21);
    temp_106 = log2(temp_105);
    // 0x000408: 0x5080400000370507 Mufu
    temp_107 = abs(temp_20);
    temp_108 = log2(temp_107);
    // 0x000410: 0x4C5C101406372013 Fadd
    temp_109 = temp_16 + fp_c5.data[24].w;
    temp_110 = clamp(temp_109, 0.0, 1.0);
    // 0x000418: 0xE2900000CD800000 Ssy
    // 0x000428: 0x4C6810180A072424 Fmul
    temp_111 = temp_23 * fp_c6.data[40].x;
    // 0x000430: 0x3868104110070808 Fmul
    temp_112 = temp_7 * 9.0;
    // 0x000438: 0x01040DF760C7F014 Mov32i
    // 0x000448: 0x5CA8148000870A08 F2f
    temp_113 = floor(temp_112);
    // 0x000450: 0x385D103F80070202 Fadd
    temp_114 = 0.0 - temp_25;
    temp_115 = temp_114 + 1.0;
    temp_116 = clamp(temp_115, 0.0, 1.0);
    // 0x000458: 0x386013BF80072419 Fmnmx
    temp_117 = min(temp_111, 1.0);
    // 0x000468: 0x4C68101406270606 Fmul
    temp_118 = temp_103 * fp_c5.data[24].z;
    // 0x000470: 0x4C68101406270A0D Fmul
    temp_119 = temp_106 * fp_c5.data[24].z;
    // 0x000478: 0x4C68101406270707 Fmul
    temp_120 = temp_108 * fp_c5.data[24].z;
    // 0x000488: 0x4C60178400271919 Fmnmx
    temp_121 = max(temp_117, fp_c1.data[0].z);
    // 0x000490: 0x5C9000800067000A Rro
    // 0x000498: 0x5080000000270A0A Mufu
    temp_122 = exp2(temp_118);
    // 0x0004A8: 0x5C9000800077000B Rro
    // 0x0004B0: 0x5C90008000D7000F Rro
    // 0x0004B8: 0x5080000000270B0B Mufu
    temp_123 = exp2(temp_120);
    // 0x0004C8: 0x4C5C10040007200D Fadd
    temp_124 = temp_16 + fp_c1.data[0].x;
    temp_125 = clamp(temp_124, 0.0, 1.0);
    // 0x0004D0: 0x5080000000270F0F Mufu
    temp_126 = exp2(temp_119);
    // 0x0004D8: 0x5C68100002A72A06 Fmul
    temp_127 = temp_100 * temp_100;
    // 0x0004E8: 0x59A0030002372307 Ffma
    temp_128 = fma(temp_101, temp_101, temp_127);
    // 0x0004F0: 0x4C60178400070D06 Fmnmx
    temp_129 = max(temp_125, fp_c1.data[0].x);
    // 0x0004F8: 0x5C58300000A7040D Fadd
    temp_130 = 0.0 - temp_122;
    temp_131 = temp_19 + temp_130;
    // 0x000508: 0x5C58300000B70505 Fadd
    temp_132 = 0.0 - temp_123;
    temp_133 = temp_20 + temp_132;
    // 0x000510: 0x59A0038002272207 Ffma
    temp_134 = fma(temp_104, temp_104, temp_128);
    // 0x000518: 0x5C5C30000FF70606 Fadd
    temp_135 = temp_129 + -0.0;
    temp_136 = clamp(temp_135, 0.0, 1.0);
    // 0x000528: 0x5080000000570704 Mufu
    temp_137 = inversesqrt(temp_134);
    // 0x000530: 0x5C58300000F70909 Fadd
    temp_138 = 0.0 - temp_126;
    temp_139 = temp_21 + temp_138;
    // 0x000538: 0x59A0058002070505 Ffma
    temp_140 = fma(temp_133, temp_16, temp_123);
    // 0x000548: 0x59A0050002070D0D Ffma
    temp_141 = fma(temp_131, temp_16, temp_122);
    // 0x000550: 0x088BF4CCCCD70606 Fadd32i
    temp_142 = temp_136 + -0.800000012;
    // 0x000558: 0x59A0078002070909 Ffma
    temp_143 = fma(temp_139, temp_16, temp_126);
    // 0x000568: 0x5C68100000670505 Fmul
    temp_144 = temp_140 * temp_142;
    // 0x000570: 0x5C69100000472A2A Fmul
    temp_145 = 0.0 - temp_137;
    temp_146 = temp_100 * temp_145;
    // 0x000578: 0x5C69100000472323 Fmul
    temp_147 = 0.0 - temp_137;
    temp_148 = temp_101 * temp_147;
    // 0x000588: 0x5C69100000472222 Fmul
    temp_149 = 0.0 - temp_137;
    temp_150 = temp_104 * temp_149;
    // 0x000590: 0x5C68100000670909 Fmul
    temp_151 = temp_143 * temp_142;
    // 0x000598: 0x5C68100000670D0D Fmul
    temp_152 = temp_141 * temp_142;
    // 0x0005A8: 0x5C6810000057130F Fmul
    temp_153 = temp_110 * temp_144;
    // 0x0005B0: 0x4C58301805C72A04 Fadd
    temp_154 = 0.0 - fp_c6.data[23].x;
    temp_155 = temp_146 + temp_154;
    // 0x0005B8: 0x4C58301805D72305 Fadd
    temp_156 = 0.0 - fp_c6.data[23].y;
    temp_157 = temp_148 + temp_156;
    // 0x0005C8: 0x4C58301805E72206 Fadd
    temp_158 = 0.0 - fp_c6.data[23].z;
    temp_159 = temp_150 + temp_158;
    // 0x0005D0: 0x5C6810000097130B Fmul
    temp_160 = temp_110 * temp_151;
    // 0x0005D8: 0x5C68100000D71313 Fmul
    temp_161 = temp_110 * temp_152;
    // 0x0005E8: 0x386810418007030D Fmul
    temp_162 = temp_6 * 16.0;
    // 0x0005F0: 0x5C68100000470407 Fmul
    temp_163 = temp_155 * temp_155;
    // 0x0005F8: 0x5CA8148000D70A0D F2f
    temp_164 = floor(temp_162);
    // 0x000608: 0x1E240A0000170F0F Fmul32i
    temp_165 = temp_153 * 5.00000048;
    // 0x000610: 0x1E240A0000170B0B Fmul32i
    temp_166 = temp_160 * 5.00000048;
    // 0x000618: 0x1E240A0000171313 Fmul32i
    temp_167 = temp_161 * 5.00000048;
    // 0x000628: 0x59A0038000570507 Ffma
    temp_168 = fma(temp_157, temp_157, temp_163);
    // 0x000630: 0x59A0038000670607 Ffma
    temp_169 = fma(temp_159, temp_159, temp_168);
    // 0x000638: 0x32A006C18007082E Ffma
    temp_170 = fma(temp_113, 16.0, temp_164);
    // 0x000648: 0x5080000000570707 Mufu
    temp_171 = inversesqrt(temp_169);
    // 0x000650: 0x5CB0118002E70A2E F2i
    temp_172 = trunc(temp_170);
    temp_173 = max(temp_172, 0.0);
    temp_174 = uint(temp_173);
    // 0x000658: 0x5C68100000770409 Fmul
    temp_175 = temp_155 * temp_171;
    // 0x000668: 0x5C6810000077050A Fmul
    temp_176 = temp_157 * temp_171;
    // 0x000670: 0x51A40C8400271904 Ffma
    temp_177 = fma(temp_121, temp_121, fp_c1.data[0].z);
    temp_178 = clamp(temp_177, 0.0, 1.0);
    // 0x000678: 0x5C68100000770605 Fmul
    temp_179 = temp_159 * temp_171;
    // 0x000688: 0x3848000000872E2B Shl
    temp_180 = int(temp_174) << 8;
    // 0x000690: 0x5C68100000970E10 Fmul
    temp_181 = temp_82 * temp_175;
    // 0x000698: 0xEF94008200472B2B Ldc
    temp_182 = temp_180 + 0x2004;
    temp_183 = uint(temp_182) >> 2;
    temp_184 = temp_183 >> 2;
    temp_185 = int(temp_183) & 3;
    temp_186 = fp_c8.data[int(temp_184)][temp_185];
    // 0x0006A8: 0x4C69101805C70903 Fmul
    temp_187 = 0.0 - fp_c6.data[23].x;
    temp_188 = temp_175 * temp_187;
    // 0x0006B0: 0x5C68100000972A09 Fmul
    temp_189 = temp_146 * temp_175;
    // 0x0006B8: 0x5C68100000470406 Fmul
    temp_190 = temp_178 * temp_178;
    // 0x0006C8: 0x59A0080000A70110 Ffma
    temp_191 = fma(temp_81, temp_176, temp_181);
    // 0x0006D0: 0x49A1019805D70A03 Ffma
    temp_192 = 0.0 - fp_c6.data[23].y;
    temp_193 = fma(temp_176, temp_192, temp_188);
    // 0x0006D8: 0x59A0048000A72307 Ffma
    temp_194 = fma(temp_148, temp_176, temp_189);
    // 0x0006E8: 0x59A4080000571210 Ffma
    temp_195 = fma(temp_80, temp_179, temp_191);
    temp_196 = clamp(temp_195, 0.0, 1.0);
    // 0x0006F0: 0x49A5019805E70503 Ffma
    temp_197 = 0.0 - fp_c6.data[23].z;
    temp_198 = fma(temp_179, temp_197, temp_193);
    temp_199 = clamp(temp_198, 0.0, 1.0);
    // 0x0006F8: 0x59A4038000572209 Ffma
    temp_200 = fma(temp_150, temp_179, temp_194);
    temp_201 = clamp(temp_200, 0.0, 1.0);
    // 0x000708: 0x0103F0000007F007 Mov32i
    // 0x000710: 0x59A2080000671006 Ffma
    temp_202 = 0.0 - temp_196;
    temp_203 = fma(temp_196, temp_190, temp_202);
    // 0x000718: 0x49A20A0400170305 Ffma
    temp_204 = fma(temp_199, fp_c1.data[0].y, -6.98316002);
    // 0x000728: 0x49A20A0400170908 Ffma
    temp_205 = fma(temp_201, fp_c1.data[0].y, -6.98316002);
    // 0x000730: 0x32A003BF0007192D Ffma
    temp_206 = fma(temp_121, 0.5, 0.5);
    // 0x000738: 0x4C69101805C70E07 Fmul
    temp_207 = 0.0 - fp_c6.data[23].x;
    temp_208 = temp_82 * temp_207;
    // 0x000748: 0x51A0030400471010 Ffma
    temp_209 = fma(temp_196, temp_203, fp_c1.data[1].x);
    // 0x000750: 0x5C68100002A70E06 Fmul
    temp_210 = temp_82 * temp_146;
    // 0x000758: 0x508000000047100A Mufu
    temp_211 = 1.0 / temp_209;
    // 0x000768: 0x5C68100000570305 Fmul
    temp_212 = temp_199 * temp_204;
    // 0x000770: 0x5C68100000870908 Fmul
    temp_213 = temp_201 * temp_205;
    // 0x000778: 0x5C68120002D72D2D Fmul
    temp_214 = temp_206 * 0.5;
    temp_215 = temp_214 * temp_206;
    // 0x000788: 0x49A1039805D70103 Ffma
    temp_216 = 0.0 - fp_c6.data[23].y;
    temp_217 = fma(temp_81, temp_216, temp_208);
    // 0x000790: 0x59A0030002370118 Ffma
    temp_218 = fma(temp_81, temp_148, temp_210);
    // 0x000798: 0x4C58301407B70B06 Fadd
    temp_219 = 0.0 - fp_c5.data[30].w;
    temp_220 = temp_166 + temp_219;
    // 0x0007A8: 0x5C90008000870017 Rro
    // 0x0007B0: 0x49A5019805E71203 Ffma
    temp_221 = 0.0 - fp_c6.data[23].z;
    temp_222 = fma(temp_80, temp_221, temp_217);
    temp_223 = clamp(temp_222, 0.0, 1.0);
    // 0x0007B8: 0x5080000000271717 Mufu
    temp_224 = exp2(temp_213);
    // 0x0007C8: 0x59A40C0002271218 Ffma
    temp_225 = fma(temp_80, temp_150, temp_218);
    temp_226 = clamp(temp_225, 0.0, 1.0);
    // 0x0007D0: 0x5C68100000A70404 Fmul
    temp_227 = temp_178 * temp_211;
    // 0x0007D8: 0x4C58301407B7130A Fadd
    temp_228 = 0.0 - fp_c5.data[30].w;
    temp_229 = temp_167 + temp_228;
    // 0x0007E8: 0x51A0031407B72509 Ffma
    temp_230 = fma(temp_24, temp_220, fp_c5.data[30].w);
    // 0x0007F0: 0x4C58301407B70F08 Fadd
    temp_231 = 0.0 - fp_c5.data[30].w;
    temp_232 = temp_165 + temp_231;
    // 0x0007F8: 0x59A1018002D70310 Ffma
    temp_233 = 0.0 - temp_215;
    temp_234 = fma(temp_223, temp_233, temp_223);
    // 0x000808: 0x59A10C0002D71807 Ffma
    temp_235 = 0.0 - temp_215;
    temp_236 = fma(temp_226, temp_235, temp_226);
    // 0x000810: 0x4C6810180167030D Fmul
    temp_237 = temp_223 * fp_c6.data[5].z;
    // 0x000818: 0x51A0051407B7250A Ffma
    temp_238 = fma(temp_24, temp_229, fp_c5.data[30].w);
    // 0x000828: 0x4C68101801470306 Fmul
    temp_239 = temp_223 * fp_c6.data[5].x;
    // 0x000830: 0x5C68100000470404 Fmul
    temp_240 = temp_227 * temp_227;
    // 0x000838: 0x5C58100001072D10 Fadd
    temp_241 = temp_215 + temp_234;
    // 0x000848: 0x5C58100000772D07 Fadd
    temp_242 = temp_215 + temp_236;
    // 0x000850: 0x5080000000471026 Mufu
    temp_243 = 1.0 / temp_241;
    // 0x000858: 0x59A10B8001770914 Ffma
    temp_244 = 0.0 - temp_224;
    temp_245 = fma(temp_230, temp_244, temp_224);
    // 0x000868: 0x508000000047072C Mufu
    temp_246 = 1.0 / temp_242;
    // 0x000870: 0x59A10B8001770A11 Ffma
    temp_247 = 0.0 - temp_224;
    temp_248 = fma(temp_238, temp_247, temp_224);
    // 0x000878: 0x5C90008000570020 Rro
    // 0x000888: 0x1E23EA2F98370D0D Fmul32i
    temp_249 = temp_237 * 0.318309873;
    // 0x000890: 0x5080000000272007 Mufu
    temp_250 = exp2(temp_212);
    // 0x000898: 0x1E23EA2F98370615 Fmul32i
    temp_251 = temp_239 * 0.318309873;
    // 0x0008A8: 0x5C58100001470914 Fadd
    temp_252 = temp_230 + temp_245;
    // 0x0008B0: 0x5C58100001170A16 Fadd
    temp_253 = temp_238 + temp_248;
    // 0x0008B8: 0x4C68101801570306 Fmul
    temp_254 = temp_223 * fp_c6.data[5].y;
    // 0x0008C8: 0x51A0041407B72508 Ffma
    temp_255 = fma(temp_24, temp_232, fp_c5.data[30].w);
    // 0x0008D0: 0x5B6603800FF72B07 Isetp
    temp_256 = floatBitsToUint(temp_186) <= 0u;
    // 0x0008D8: 0x5C68100001870E2F Fmul
    temp_257 = temp_82 * temp_226;
    // 0x0008E8: 0x59A1068001470D32 Ffma
    temp_258 = 0.0 - temp_252;
    temp_259 = fma(temp_249, temp_258, temp_249);
    // 0x0008F0: 0x3868103F00072C2C Fmul
    temp_260 = temp_246 * 0.5;
    // 0x0008F8: 0x4C98079808A7000D Mov
    // 0x000908: 0x59A10A8001671510 Ffma
    temp_261 = 0.0 - temp_253;
    temp_262 = fma(temp_251, temp_261, temp_251);
    // 0x000910: 0x59A10B8001770817 Ffma
    temp_263 = 0.0 - temp_224;
    temp_264 = fma(temp_255, temp_263, temp_224);
    // 0x000918: 0xEF5400000047FF10 Stl
    local_memory[1] = floatBitsToUint(temp_262);
    // 0x000928: 0x5C68100001870116 Fmul
    temp_265 = temp_81 * temp_226;
    // 0x000930: 0x5C68100002672C05 Fmul
    temp_266 = temp_260 * temp_243;
    // 0x000938: 0x4C68101808770D0D Fmul
    temp_267 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x000948: 0x32A2154000072F2F Ffma
    temp_268 = 0.0 - temp_146;
    temp_269 = fma(temp_257, 2.0, temp_268);
    // 0x000950: 0x5C58100001770817 Fadd
    temp_270 = temp_255 + temp_264;
    // 0x000958: 0x32A211C000071616 Ffma
    temp_271 = 0.0 - temp_148;
    temp_272 = fma(temp_265, 2.0, temp_271);
    // 0x000968: 0x1E23EA2F98370610 Fmul32i
    temp_273 = temp_254 * 0.318309873;
    // 0x000970: 0x5C68100000570406 Fmul
    temp_274 = temp_240 * temp_266;
    // 0x000978: 0x59A1038000770805 Ffma
    temp_275 = 0.0 - temp_250;
    temp_276 = fma(temp_255, temp_275, temp_250);
    // 0x000988: 0x59A1038000770A04 Ffma
    temp_277 = 0.0 - temp_250;
    temp_278 = fma(temp_238, temp_277, temp_250);
    // 0x000990: 0x59A1038000770907 Ffma
    temp_279 = 0.0 - temp_250;
    temp_280 = fma(temp_230, temp_279, temp_250);
    // 0x000998: 0x59A1080001771010 Ffma
    temp_281 = 0.0 - temp_270;
    temp_282 = fma(temp_273, temp_281, temp_273);
    // 0x0009A8: 0x5C68100000670311 Fmul
    temp_283 = temp_223 * temp_274;
    // 0x0009B0: 0xEF5400000007FF10 Stl
    local_memory[0] = floatBitsToUint(temp_282);
    // 0x0009B8: 0x5C58100000570805 Fadd
    temp_284 = temp_255 + temp_276;
    // 0x0009C8: 0x5C58100000470A06 Fadd
    temp_285 = temp_238 + temp_278;
    // 0x0009D0: 0x5C58100000770907 Fadd
    temp_286 = temp_230 + temp_280;
    // 0x0009D8: 0x5C68100001871217 Fmul
    temp_287 = temp_80 * temp_226;
    // 0x0009E8: 0x32A2114000071717 Ffma
    temp_288 = 0.0 - temp_150;
    temp_289 = fma(temp_287, 2.0, temp_288);
    // 0x0009F0: 0x49A201180AE70210 Ffma
    temp_290 = 0.0 - temp_116;
    temp_291 = fma(temp_116, fp_c6.data[43].z, temp_290);
    // 0x0009F8: 0x3858103F80071010 Fadd
    temp_292 = temp_291 + 1.0;
    // 0x000A08: 0x59A4080001070B24 Ffma
    temp_293 = fma(temp_166, temp_292, temp_292);
    temp_294 = clamp(temp_293, 0.0, 1.0);
    // 0x000A10: 0x51A00D9801570D03 Ffma
    temp_295 = fma(temp_267, temp_97, fp_c6.data[5].y);
    // 0x000A18: 0x51A00F1801670D04 Ffma
    temp_296 = fma(temp_267, temp_98, fp_c6.data[5].z);
    // 0x000A28: 0x51A00D1801470D0D Ffma
    temp_297 = fma(temp_267, temp_96, fp_c6.data[5].x);
    // 0x000A30: 0x5C68100000570303 Fmul
    temp_298 = temp_295 * temp_284;
    // 0x000A38: 0x5C68100000770404 Fmul
    temp_299 = temp_296 * temp_286;
    // 0x000A48: 0x5C68100000670D06 Fmul
    temp_300 = temp_297 * temp_285;
    // 0x000A50: 0x49A201180AD7020D Ffma
    temp_301 = 0.0 - temp_116;
    temp_302 = fma(temp_116, fp_c6.data[43].y, temp_301);
    // 0x000A58: 0x5C9807800FF70007 Mov
    // 0x000A68: 0x5C9807800FF70005 Mov
    // 0x000A70: 0x5C68100001170327 Fmul
    temp_303 = temp_298 * temp_283;
    // 0x000A78: 0x49A201180AC70203 Ffma
    temp_304 = 0.0 - temp_116;
    temp_305 = fma(temp_116, fp_c6.data[43].x, temp_304);
    // 0x000A88: 0x5C68100001170428 Fmul
    temp_306 = temp_299 * temp_283;
    // 0x000A90: 0x5C68100001170626 Fmul
    temp_307 = temp_300 * temp_283;
    // 0x000A98: 0x3858103F80070D0D Fadd
    temp_308 = temp_302 + 1.0;
    // 0x000AA8: 0x5C9807800FF70006 Mov
    // 0x000AB0: 0x5C9807800FF70004 Mov
    // 0x000AB8: 0x3858103F80070329 Fadd
    temp_309 = temp_305 + 1.0;
    // 0x000AC8: 0x5C9807800FF70003 Mov
    // 0x000AD0: 0x5C9807800FF70002 Mov
    // 0x000AD8: 0x59A4068000D70F20 Ffma
    temp_310 = fma(temp_165, temp_308, temp_308);
    temp_311 = clamp(temp_310, 0.0, 1.0);
    // 0x000AE8: 0x1E23E22F98372626 Fmul32i
    temp_312 = temp_307 * 0.159154937;
    // 0x000AF0: 0x1E23E22F98372727 Fmul32i
    temp_313 = temp_303 * 0.159154937;
    // 0x000AF8: 0x59A4148002971329 Ffma
    temp_314 = fma(temp_167, temp_309, temp_309);
    temp_315 = clamp(temp_314, 0.0, 1.0);
    // 0x000B08: 0x1E23E22F98372828 Fmul32i
    temp_316 = temp_306 * 0.159154937;
    // 0x000B10: 0xF0F800000000000F Sync
    temp_317 = 0.0;
    temp_318 = 0.0;
    temp_319 = 0.0;
    temp_320 = 0.0;
    temp_321 = 0.0;
    temp_322 = 0.0;
    temp_323 = 0.0;
    temp_324 = 0.0;
    temp_325 = 0.0;
    temp_326 = 0.0;
    temp_327 = 0.0;
    temp_328 = 0.0;
    if (!temp_256)
    {
        // 0x000B18: 0x5C9807800FF70030 Mov
        temp_329 = 0;
        do
        {
            // 0x000B28: 0x5C18020003072E15 Iscadd
            temp_331 = int(temp_174) << 4;
            temp_332 = temp_331 + temp_329;
            // 0x000B30: 0xE003FF87CFF7FF33 Ipa
            // 0x000B38: 0x1C00000000173030 Iadd32i
            temp_333 = temp_329 + 1;
            // 0x000B48: 0xE003FF87CFF7FF35 Ipa
            // 0x000B50: 0x3848000000471515 Shl
            temp_334 = temp_332 << 4;
            // 0x000B58: 0xE003FF87CFF7FF34 Ipa
            // 0x000B68: 0x5B6C038002B7300F Isetp
            temp_330 = uint(temp_333) >= floatBitsToUint(temp_186);
            // 0x000B70: 0xE290000056800000 Ssy
            // 0x000B78: 0xEF94008200071515 Ldc
            temp_335 = temp_334 + 0x2000;
            temp_336 = uint(temp_335) >> 2;
            temp_337 = temp_336 >> 2;
            temp_338 = int(temp_336) & 3;
            temp_339 = fp_c8.data[int(temp_337)][temp_338];
            // 0x000B88: 0x5080000000473333 Mufu
            // 0x000B90: 0x5080000000473535 Mufu
            // 0x000B98: 0x5080000000473434 Mufu
            // 0x000BA8: 0xE043FF8D0337FF33 Ipa
            temp_340 = in_attr5.x;
            // 0x000BB0: 0xE043FF8D8357FF35 Ipa
            temp_341 = in_attr5.z;
            // 0x000BB8: 0xE043FF8D4347FF34 Ipa
            temp_342 = in_attr5.y;
            // 0x000BC8: 0x3848000000671531 Shl
            temp_343 = floatBitsToInt(temp_339) << 6;
            // 0x000BD0: 0xEF9500800107310C Ldc
            temp_344 = temp_343 + 16;
            temp_345 = uint(temp_344) >> 2;
            temp_346 = temp_345 >> 2;
            temp_347 = int(temp_345) & 3;
            temp_348 = fp_c8.data[int(temp_346)][temp_347];
            temp_349 = int(temp_345) + 1;
            temp_350 = uint(temp_349) >> 2;
            temp_351 = temp_349 & 3;
            temp_352 = fp_c8.data[int(temp_350)][temp_351];
            // 0x000BD8: 0xEF95008001873110 Ldc
            temp_353 = temp_343 + 24;
            temp_354 = uint(temp_353) >> 2;
            temp_355 = temp_354 >> 2;
            temp_356 = int(temp_354) & 3;
            temp_357 = fp_c8.data[int(temp_355)][temp_356];
            temp_358 = int(temp_354) + 1;
            temp_359 = uint(temp_358) >> 2;
            temp_360 = temp_358 & 3;
            temp_361 = fp_c8.data[int(temp_359)][temp_360];
            // 0x000BE8: 0xEF95008002073114 Ldc
            temp_362 = temp_343 + 32;
            temp_363 = uint(temp_362) >> 2;
            temp_364 = temp_363 >> 2;
            temp_365 = int(temp_363) & 3;
            temp_366 = fp_c8.data[int(temp_364)][temp_365];
            temp_367 = int(temp_363) + 1;
            temp_368 = uint(temp_367) >> 2;
            temp_369 = temp_367 & 3;
            temp_370 = fp_c8.data[int(temp_368)][temp_369];
            // 0x000BF0: 0x5C58300003370C33 Fadd
            temp_371 = 0.0 - temp_340;
            temp_372 = temp_348 + temp_371;
            // 0x000BF8: 0x5C58300003470D34 Fadd
            temp_373 = 0.0 - temp_342;
            temp_374 = temp_352 + temp_373;
            // 0x000C08: 0x5C58300003571035 Fadd
            temp_375 = 0.0 - temp_341;
            temp_376 = temp_357 + temp_375;
            // 0x000C10: 0x5C68100003373336 Fmul
            temp_377 = temp_372 * temp_372;
            // 0x000C18: 0x59A11A8003571111 Ffma
            temp_378 = 0.0 - temp_376;
            temp_379 = fma(temp_361, temp_378, temp_376);
            // 0x000C28: 0x59A01B0003473436 Ffma
            temp_380 = fma(temp_374, temp_374, temp_377);
            // 0x000C30: 0x59A01B0001171137 Ffma
            temp_381 = fma(temp_379, temp_379, temp_380);
            // 0x000C38: 0x508000000057370C Mufu
            temp_382 = inversesqrt(temp_381);
            // 0x000C48: 0x5080000000873737 Mufu
            temp_383 = sqrt(temp_381);
            // 0x000C50: 0x5C68100000C7330D Fmul
            temp_384 = temp_372 * temp_382;
            // 0x000C58: 0x5C68100000C73410 Fmul
            temp_385 = temp_374 * temp_382;
            // 0x000C68: 0x5C68100000C7110C Fmul
            temp_386 = temp_379 * temp_382;
            // 0x000C70: 0x5C69100001470D0D Fmul
            temp_387 = 0.0 - temp_366;
            temp_388 = temp_384 * temp_387;
            // 0x000C78: 0xEF94008002873114 Ldc
            temp_389 = temp_343 + 40;
            temp_390 = uint(temp_389) >> 2;
            temp_391 = temp_390 >> 2;
            temp_392 = int(temp_390) & 3;
            temp_393 = fp_c8.data[int(temp_391)][temp_392];
            // 0x000C88: 0x59A106800157100D Ffma
            temp_394 = 0.0 - temp_370;
            temp_395 = fma(temp_385, temp_394, temp_388);
            // 0x000C90: 0xEF95008003873110 Ldc
            temp_396 = temp_343 + 56;
            temp_397 = uint(temp_396) >> 2;
            temp_398 = temp_397 >> 2;
            temp_399 = int(temp_397) & 3;
            temp_400 = fp_c8.data[int(temp_398)][temp_399];
            temp_401 = int(temp_397) + 1;
            temp_402 = uint(temp_401) >> 2;
            temp_403 = temp_401 & 3;
            temp_404 = fp_c8.data[int(temp_402)][temp_403];
            // 0x000C98: 0x010404000007F015 Mov32i
            // 0x000CA8: 0x59A1068001470C14 Ffma
            temp_405 = 0.0 - temp_393;
            temp_406 = fma(temp_386, temp_405, temp_395);
            // 0x000CB0: 0xEF9500800307310C Ldc
            temp_407 = temp_343 + 48;
            temp_408 = uint(temp_407) >> 2;
            temp_409 = temp_408 >> 2;
            temp_410 = int(temp_408) & 3;
            temp_411 = fp_c8.data[int(temp_409)][temp_410];
            temp_412 = int(temp_408) + 1;
            temp_413 = uint(temp_412) >> 2;
            temp_414 = temp_412 & 3;
            temp_415 = fp_c8.data[int(temp_413)][temp_414];
            // 0x000CB8: 0x59A4088001071410 Ffma
            temp_416 = fma(temp_406, temp_400, temp_404);
            temp_417 = clamp(temp_416, 0.0, 1.0);
            // 0x000CC8: 0x59A4068003770C37 Ffma
            temp_418 = fma(temp_411, temp_383, temp_415);
            temp_419 = clamp(temp_418, 0.0, 1.0);
            // 0x000CD0: 0x33A00AC000073714 Ffma
            temp_420 = fma(temp_419, -2.0, 3.0);
            // 0x000CD8: 0x5C68100003773711 Fmul
            temp_421 = temp_419 * temp_419;
            // 0x000CE8: 0x33A00AC000071015 Ffma
            temp_422 = fma(temp_417, -2.0, 3.0);
            // 0x000CF0: 0x5C68100001071010 Fmul
            temp_423 = temp_417 * temp_417;
            // 0x000CF8: 0x5C68100001171411 Fmul
            temp_424 = temp_420 * temp_421;
            // 0x000D08: 0x39585042F0073514 Fadd
            temp_425 = abs(temp_376);
            temp_426 = temp_425 + -120.0;
            // 0x000D10: 0x5C68100001571010 Fmul
            temp_427 = temp_423 * temp_422;
            // 0x000D18: 0x1EABD4CCCCD71414 Fmul32i
            temp_428 = temp_426 * -0.0500000007;
            temp_429 = clamp(temp_428, 0.0, 1.0);
            // 0x000D28: 0x5C68100001171010 Fmul
            temp_430 = temp_427 * temp_424;
            // 0x000D30: 0x36247F9000171111 Xmad
            temp_431 = floatBitsToUint(temp_424) >> 16;
            temp_432 = int(temp_431) << 16;
            // 0x000D38: 0x5C68100001071410 Fmul
            temp_433 = temp_429 * temp_430;
            // 0x000D48: 0x5BB383800FF71007 Fsetp
            temp_434 = temp_433 <= 0.0;
            // 0x000D50: 0x7A05083C0F00FF11 Hadd2
            temp_329 = temp_333;
            temp_435 = uint(temp_432);
            temp_436 = temp_317;
            temp_437 = temp_318;
            temp_438 = temp_319;
            temp_439 = temp_320;
            temp_440 = temp_321;
            temp_441 = temp_322;
            if (temp_434)
            {
                temp_442 = unpackHalf2x16(uint(temp_432)).y;
                temp_443 = packHalf2x16(vec2(1.0, temp_442));
                temp_435 = temp_443;
            }
            // 0x000D58: 0x5D2103902FF71107 Hsetp2
            temp_444 = unpackHalf2x16(temp_435).x;
            temp_445 = temp_444 == 0.0;
            // 0x000D68: 0xF0F800000008000F Sync
            if (temp_445)
            {
                // 0x000D70: 0x5080000000470C0C Mufu
                temp_446 = 1.0 / temp_411;
                // 0x000D78: 0x5C69100000C70D14 Fmul
                temp_447 = 0.0 - temp_446;
                temp_448 = temp_415 * temp_447;
                // 0x000D88: 0x5C60138001473511 Fmnmx
                temp_449 = min(temp_376, temp_448);
                // 0x000D90: 0x5C61178001171411 Fmnmx
                temp_450 = 0.0 - temp_448;
                temp_451 = max(temp_450, temp_449);
                // 0x000D98: 0x59A01B0001171136 Ffma
                temp_452 = fma(temp_451, temp_451, temp_380);
                // 0x000DA8: 0x508000000057360C Mufu
                temp_453 = inversesqrt(temp_452);
                // 0x000DB0: 0x5080000000873636 Mufu
                temp_454 = sqrt(temp_452);
                // 0x000DB8: 0x5C68100000C73333 Fmul
                temp_455 = temp_372 * temp_453;
                // 0x000DC8: 0x5C68100000C73434 Fmul
                temp_456 = temp_374 * temp_453;
                // 0x000DD0: 0x5C68100000C71111 Fmul
                temp_457 = temp_451 * temp_453;
                // 0x000DD8: 0xEF94008002C7310C Ldc
                temp_458 = temp_343 + 44;
                temp_459 = uint(temp_458) >> 2;
                temp_460 = temp_459 >> 2;
                temp_461 = int(temp_459) & 3;
                temp_462 = fp_c8.data[int(temp_460)][temp_461];
                // 0x000DE8: 0x5C58100003372A35 Fadd
                temp_463 = temp_146 + temp_455;
                // 0x000DF0: 0x5C5810000347230D Fadd
                temp_464 = temp_148 + temp_456;
                // 0x000DF8: 0x5C58100001172215 Fadd
                temp_465 = temp_150 + temp_457;
                // 0x000E08: 0x5C68100003573514 Fmul
                temp_466 = temp_463 * temp_463;
                // 0x000E10: 0x59A00A0000D70D14 Ffma
                temp_467 = fma(temp_464, temp_464, temp_466);
                // 0x000E18: 0x59A00A0001571514 Ffma
                temp_468 = fma(temp_465, temp_465, temp_467);
                // 0x000E28: 0x5080000000571414 Mufu
                temp_469 = inversesqrt(temp_468);
                // 0x000E30: 0x5C68100001473535 Fmul
                temp_470 = temp_463 * temp_469;
                // 0x000E38: 0x5C68100001470D0D Fmul
                temp_471 = temp_464 * temp_469;
                // 0x000E48: 0x5C68100001471515 Fmul
                temp_472 = temp_465 * temp_469;
                // 0x000E50: 0x5C68100003370E14 Fmul
                temp_473 = temp_82 * temp_455;
                // 0x000E58: 0x5C68100003573333 Fmul
                temp_474 = temp_455 * temp_470;
                // 0x000E68: 0x5C68100003570E35 Fmul
                temp_475 = temp_82 * temp_470;
                // 0x000E70: 0x59A00A0003470114 Ffma
                temp_476 = fma(temp_81, temp_456, temp_473);
                // 0x000E78: 0x59A0198000D73434 Ffma
                temp_477 = fma(temp_456, temp_471, temp_474);
                // 0x000E88: 0x59A01A8000D7010D Ffma
                temp_478 = fma(temp_81, temp_471, temp_475);
                // 0x000E90: 0x51A40C8400271933 Ffma
                temp_479 = fma(temp_121, temp_121, fp_c1.data[0].z);
                temp_480 = clamp(temp_479, 0.0, 1.0);
                // 0x000E98: 0x59A00A0001171214 Ffma
                temp_481 = fma(temp_80, temp_457, temp_476);
                // 0x000EA8: 0x59A41A0001571134 Ffma
                temp_482 = fma(temp_457, temp_472, temp_477);
                temp_483 = clamp(temp_482, 0.0, 1.0);
                // 0x000EB0: 0x59A406800157120D Ffma
                temp_484 = fma(temp_80, temp_472, temp_478);
                temp_485 = clamp(temp_484, 0.0, 1.0);
                // 0x000EB8: 0x5080000000470C15 Mufu
                temp_486 = 1.0 / temp_462;
                // 0x000EC8: 0x5C68100003373335 Fmul
                temp_487 = temp_480 * temp_480;
                // 0x000ED0: 0x59A2068000D73535 Ffma
                temp_488 = 0.0 - temp_485;
                temp_489 = fma(temp_487, temp_485, temp_488);
                // 0x000ED8: 0x51A01A8400470D35 Ffma
                temp_490 = fma(temp_485, temp_489, fp_c1.data[1].x);
                // 0x000EE8: 0xEF9500800007310C Ldc
                temp_491 = uint(temp_343) >> 2;
                temp_492 = temp_491 >> 2;
                temp_493 = int(temp_491) & 3;
                temp_494 = fp_c8.data[int(temp_492)][temp_493];
                temp_495 = int(temp_491) + 1;
                temp_496 = uint(temp_495) >> 2;
                temp_497 = temp_495 & 3;
                temp_498 = fp_c8.data[int(temp_496)][temp_497];
                // 0x000EF0: 0x51A01B0400571515 Ffma
                temp_499 = fma(temp_486, temp_454, fp_c1.data[1].y);
                // 0x000EF8: 0x5080000000473535 Mufu
                temp_500 = 1.0 / temp_490;
                // 0x000F08: 0x01040DF760C7F036 Mov32i
                // 0x000F10: 0x5080000000471515 Mufu
                temp_501 = 1.0 / temp_499;
                // 0x000F18: 0x5C68100003573335 Fmul
                temp_502 = temp_480 * temp_500;
                // 0x000F28: 0xEF94008000873131 Ldc
                temp_503 = temp_343 + 8;
                temp_504 = uint(temp_503) >> 2;
                temp_505 = temp_504 >> 2;
                temp_506 = int(temp_504) & 3;
                temp_507 = fp_c8.data[int(temp_505)][temp_506];
                // 0x000F30: 0x49A21B0400173411 Ffma
                temp_508 = fma(temp_483, fp_c1.data[0].y, -6.98316002);
                // 0x000F38: 0x1E23FB3333371533 Fmul32i
                temp_509 = temp_501 * 1.39999998;
                // 0x000F48: 0x5C68100003573535 Fmul
                temp_510 = temp_502 * temp_502;
                // 0x000F50: 0x5C68100001173434 Fmul
                temp_511 = temp_483 * temp_508;
                // 0x000F58: 0x5C5C30000FF71411 Fadd
                temp_512 = temp_481 + -0.0;
                temp_513 = clamp(temp_512, 0.0, 1.0);
                // 0x000F68: 0x5C68100003373333 Fmul
                temp_514 = temp_509 * temp_509;
                // 0x000F70: 0x5C90008003470034 Rro
                // 0x000F78: 0x59A1088001172D15 Ffma
                temp_515 = 0.0 - temp_513;
                temp_516 = fma(temp_215, temp_515, temp_513);
                // 0x000F88: 0x5080000000273434 Mufu
                temp_517 = exp2(temp_511);
                // 0x000F90: 0x59A1198003371433 Ffma
                temp_518 = 0.0 - temp_514;
                temp_519 = fma(temp_481, temp_518, temp_514);
                // 0x000F98: 0x5C58100001572D15 Fadd
                temp_520 = temp_215 + temp_516;
                // 0x000FA8: 0x5C5C100003371433 Fadd
                temp_521 = temp_481 + temp_519;
                temp_522 = clamp(temp_521, 0.0, 1.0);
                // 0x000FB0: 0x5080000000471515 Mufu
                temp_523 = 1.0 / temp_520;
                // 0x000FB8: 0x59A11A0003470814 Ffma
                temp_524 = 0.0 - temp_517;
                temp_525 = fma(temp_255, temp_524, temp_517);
                // 0x000FC8: 0x5C68100000C7100C Fmul
                temp_526 = temp_433 * temp_494;
                // 0x000FD0: 0x5C68100000D7100D Fmul
                temp_527 = temp_433 * temp_498;
                // 0x000FD8: 0x5C68100001572C15 Fmul
                temp_528 = temp_260 * temp_523;
                // 0x000FE8: 0x5C58100001470814 Fadd
                temp_529 = temp_255 + temp_525;
                // 0x000FF0: 0x5C68100001573515 Fmul
                temp_530 = temp_510 * temp_528;
                // 0x000FF8: 0x5C68100000D71414 Fmul
                temp_531 = temp_529 * temp_527;
                // 0x001008: 0x5C68100003370D0D Fmul
                temp_532 = temp_527 * temp_522;
                // 0x001010: 0x5C68100003171031 Fmul
                temp_533 = temp_433 * temp_507;
                // 0x001018: 0x59A11A0003470A10 Ffma
                temp_534 = 0.0 - temp_517;
                temp_535 = fma(temp_238, temp_534, temp_517);
                // 0x001028: 0x59A11A0003470934 Ffma
                temp_536 = 0.0 - temp_517;
                temp_537 = fma(temp_230, temp_536, temp_517);
                // 0x001030: 0x5C68100001571115 Fmul
                temp_538 = temp_513 * temp_530;
                // 0x001038: 0x49A0030400770D06 Ffma
                temp_539 = fma(temp_532, fp_c1.data[1].w, temp_317);
                // 0x001048: 0x5C58100001070A10 Fadd
                temp_540 = temp_238 + temp_535;
                // 0x001050: 0x5C58100003470934 Fadd
                temp_541 = temp_230 + temp_537;
                // 0x001058: 0x5C68100001571414 Fmul
                temp_542 = temp_531 * temp_538;
                // 0x001068: 0x5C68100000C71010 Fmul
                temp_543 = temp_540 * temp_526;
                // 0x001070: 0x5C68100003173434 Fmul
                temp_544 = temp_541 * temp_533;
                // 0x001078: 0x5C68100003370C0C Fmul
                temp_545 = temp_526 * temp_522;
                // 0x001088: 0x5C68100003373133 Fmul
                temp_546 = temp_533 * temp_522;
                // 0x001090: 0x49A0010400671402 Ffma
                temp_547 = fma(temp_542, fp_c1.data[1].z, temp_318);
                // 0x001098: 0x5C68100001571010 Fmul
                temp_548 = temp_543 * temp_538;
                // 0x0010A8: 0x5C68100001573415 Fmul
                temp_549 = temp_544 * temp_538;
                // 0x0010B0: 0x49A0038400770C07 Ffma
                temp_550 = fma(temp_545, fp_c1.data[1].w, temp_319);
                // 0x0010B8: 0x49A0028400773305 Ffma
                temp_551 = fma(temp_546, fp_c1.data[1].w, temp_320);
                // 0x0010C8: 0x49A0018400671003 Ffma
                temp_552 = fma(temp_548, fp_c1.data[1].z, temp_321);
                // 0x0010D0: 0x49A0020400671504 Ffma
                temp_553 = fma(temp_549, fp_c1.data[1].z, temp_322);
                // 0x0010D8: 0xF0F800000007000F Sync
                temp_436 = temp_539;
                temp_437 = temp_547;
                temp_438 = temp_550;
                temp_439 = temp_551;
                temp_440 = temp_552;
                temp_441 = temp_553;
            }
            // 0x0010E8: 0xE2400FFFA309000F Bra
            temp_317 = temp_436;
            temp_318 = temp_437;
            temp_319 = temp_438;
            temp_320 = temp_439;
            temp_321 = temp_440;
            temp_322 = temp_441;
            temp_323 = temp_440;
            temp_324 = temp_437;
            temp_325 = temp_439;
            temp_326 = temp_441;
            temp_327 = temp_438;
            temp_328 = temp_436;
        }
        while (!temp_330);
        // 0x0010F0: 0xF0F800000007000F Sync
    }
    // 0x0010F8: 0x5C62578000170E0C Fmnmx
    temp_554 = abs(temp_82);
    temp_555 = abs(temp_81);
    temp_556 = max(temp_554, temp_555);
    // 0x001108: 0xE003FF87CFF7FF2A Ipa
    // 0x001110: 0x5C62578001672F0D Fmnmx
    temp_557 = abs(temp_269);
    temp_558 = abs(temp_272);
    temp_559 = max(temp_557, temp_558);
    // 0x001118: 0xEF4410000047FF34 Ldl
    temp_560 = uintBitsToFloat(local_memory[1]);
    // 0x001128: 0x5C60578000C7120C Fmnmx
    temp_561 = abs(temp_80);
    temp_562 = max(temp_561, temp_556);
    // 0x001130: 0xEF4410000007FF33 Ldl
    temp_563 = uintBitsToFloat(local_memory[0]);
    // 0x001138: 0x38681040E0071931 Fmul
    temp_564 = temp_121 * 7.0;
    // 0x001148: 0x5080000000470C0C Mufu
    temp_565 = 1.0 / temp_562;
    // 0x001150: 0x5C60578000D7170D Fmnmx
    temp_566 = abs(temp_289);
    temp_567 = max(temp_566, temp_559);
    // 0x001158: 0x010000000017F014 Mov32i
    // 0x001168: 0x5080000000470D0D Mufu
    temp_568 = 1.0 / temp_567;
    // 0x001170: 0x3868104080071923 Fmul
    temp_569 = temp_121 * 4.0;
    // 0x001178: 0x4C98079C0207002B Mov
    // 0x001188: 0x5C69100000C71212 Fmul
    temp_570 = 0.0 - temp_565;
    temp_571 = temp_80 * temp_570;
    // 0x001190: 0x5C68100000C70E10 Fmul
    temp_572 = temp_82 * temp_565;
    // 0x001198: 0x5080000000472A2A Mufu
    // 0x0011A8: 0x5C68100000C70111 Fmul
    temp_573 = temp_81 * temp_565;
    // 0x0011B0: 0x5C68100000D72F15 Fmul
    temp_574 = temp_269 * temp_568;
    // 0x0011B8: 0x5C68100000D71616 Fmul
    temp_575 = temp_272 * temp_568;
    // 0x0011C8: 0x5C69100000D71717 Fmul
    temp_576 = 0.0 - temp_568;
    temp_577 = temp_289 * temp_576;
    // 0x0011D0: 0xC0BA0163EFF7100C Tex
    temp_578 = textureLod(fp_t_tcb_16, vec3(temp_572, temp_573, temp_571), 0.0).xyz;
    temp_579 = temp_578.x;
    temp_580 = temp_578.y;
    temp_581 = temp_578.z;
    // 0x0011D8: 0x5C98078001270022 Mov
    // 0x0011E8: 0xC1BA0143F3171414 Tex
    temp_582 = textureLod(fp_t_tcb_14, vec4(temp_574, temp_575, temp_577, float(1)), temp_564).xyz;
    temp_583 = temp_582.x;
    temp_584 = temp_582.y;
    temp_585 = temp_582.z;
    // 0x0011F0: 0x3859103F8007182F Fadd
    temp_586 = 0.0 - temp_226;
    temp_587 = temp_586 + 1.0;
    // 0x0011F8: 0xD9A2018232271010 Texs
    temp_588 = textureLod(fp_t_tcb_18, vec3(temp_572, temp_573, temp_571), temp_569).xyz;
    temp_589 = temp_588.x;
    temp_590 = temp_588.y;
    temp_591 = temp_588.z;
    // 0x001208: 0x3859103F80071930 Fadd
    temp_592 = 0.0 - temp_121;
    temp_593 = temp_592 + 1.0;
    // 0x001210: 0xE043FF9102A7FF2C Ipa
    temp_594 = in_attr9.x;
    // 0x001218: 0x4C68101809072F19 Fmul
    temp_595 = temp_587 * fp_c6.data[36].x;
    // 0x001228: 0xE043FF9142A7FF2D Ipa
    temp_596 = in_attr9.y;
    // 0x001230: 0x5C68100003073030 Fmul
    temp_597 = temp_593 * temp_593;
    // 0x001238: 0xE043FF9182A7FF2E Ipa
    temp_598 = in_attr9.z;
    // 0x001248: 0xDEBA0000C2B72C2B TexB
    temp_599 = texture(fp_t_cb7_20, vec3(temp_594, temp_596, temp_598)).x;
    // 0x001250: 0x5080400000371919 Mufu
    temp_600 = abs(temp_595);
    temp_601 = log2(temp_600);
    // 0x001258: 0x49A013180A170326 Ffma
    temp_602 = fma(temp_323, fp_c6.data[40].y, temp_312);
    // 0x001268: 0x5080000000372F2F Mufu
    temp_603 = log2(temp_587);
    // 0x001270: 0x49A013980A170227 Ffma
    temp_604 = fma(temp_324, fp_c6.data[40].y, temp_313);
    // 0x001278: 0x010410676C97F017 Mov32i
    // 0x001288: 0x1E23E468DB971803 Fmul32i
    temp_605 = temp_226 * 0.193900004;
    // 0x001290: 0x5C68100003073002 Fmul
    temp_606 = temp_597 * temp_597;
    // 0x001298: 0x49A019180A170532 Ffma
    temp_607 = fma(temp_325, fp_c6.data[40].y, temp_259);
    // 0x0012A8: 0x4C98079809670012 Mov
    // 0x0012B0: 0x49A014180A170428 Ffma
    temp_608 = fma(temp_326, fp_c6.data[40].y, temp_316);
    // 0x0012B8: 0x49A00B8400C71817 Ffma
    temp_609 = fma(temp_226, fp_c1.data[3].x, 8.40400028);
    // 0x0012C8: 0x0103F0000007F004 Mov32i
    // 0x0012D0: 0x49A0018400870205 Ffma
    temp_610 = fma(temp_606, fp_c1.data[2].x, temp_605);
    // 0x0012D8: 0xE04BFF9042A7FF03 Ipa
    temp_611 = in_attr8.y;
    temp_612 = clamp(temp_611, 0.0, 1.0);
    // 0x0012E8: 0x4C68101808771F1F Fmul
    temp_613 = temp_99 * fp_c6.data[33].w;
    // 0x0012F0: 0x4C68101809171919 Fmul
    temp_614 = temp_601 * fp_c6.data[36].y;
    // 0x0012F8: 0x4C68101808972F2F Fmul
    temp_615 = temp_603 * fp_c6.data[34].y;
    // 0x001308: 0x0103E2CD9E87F02C Mov32i
    // 0x001310: 0x0104066978D7F02D Mov32i
    // 0x001318: 0x51A00B8400D71822 Ffma
    temp_616 = fma(temp_226, temp_609, fp_c1.data[3].y);
    // 0x001328: 0x088BF05D63970517 Fadd32i
    temp_617 = temp_610 + -0.522800028;
    // 0x001330: 0x4C58101408171212 Fadd
    temp_618 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001338: 0x5C90008001970005 Rro
    // 0x001348: 0x49A2160400E7022C Ffma
    temp_619 = fma(temp_606, fp_c1.data[3].z, -0.168799996);
    // 0x001350: 0x5084000000270505 Mufu
    temp_620 = exp2(temp_614);
    temp_621 = clamp(temp_620, 0.0, 1.0);
    // 0x001358: 0x49A2168400970219 Ffma
    temp_622 = fma(temp_606, fp_c1.data[2].y, -3.60299993);
    // 0x001368: 0x51A0110400F71822 Ffma
    temp_623 = fma(temp_226, temp_616, fp_c1.data[3].w);
    // 0x001370: 0x5C68100001771817 Fmul
    temp_624 = temp_226 * temp_617;
    // 0x001378: 0x32A0023F00070104 Ffma
    temp_625 = fma(temp_81, 0.5, 0.5);
    // 0x001388: 0x010404000007F02E Mov32i
    // 0x001390: 0x5C68100002C7022C Fmul
    temp_626 = temp_606 * temp_619;
    // 0x001398: 0x51A00C8400A70219 Ffma
    temp_627 = fma(temp_606, temp_622, fp_c1.data[2].z);
    // 0x0013A8: 0x4C98079800870018 Mov
    // 0x0013B0: 0x5C60138002C72201 Fmnmx
    temp_628 = min(temp_623, temp_626);
    // 0x0013B8: 0x5C68100000571212 Fmul
    temp_629 = temp_618 * temp_621;
    // 0x0013C8: 0x5C90008002F70022 Rro
    // 0x0013D0: 0x59A00B8001970217 Ffma
    temp_630 = fma(temp_606, temp_627, temp_624);
    // 0x0013D8: 0x5084000000272222 Mufu
    temp_631 = exp2(temp_615);
    temp_632 = clamp(temp_631, 0.0, 1.0);
    // 0x0013E8: 0x4C98079800970005 Mov
    // 0x0013F0: 0x4C98079800A70019 Mov
    // 0x0013F8: 0x33A017400007032E Ffma
    temp_633 = fma(temp_612, -2.0, 3.0);
    // 0x001408: 0x5C6810000037032D Fmul
    temp_634 = temp_612 * temp_612;
    // 0x001410: 0x4C59101800471802 Fadd
    temp_635 = 0.0 - fp_c6.data[2].x;
    temp_636 = temp_635 + fp_c6.data[1].x;
    // 0x001418: 0x4C98079808670018 Mov
    // 0x001428: 0x4C59101800570505 Fadd
    temp_637 = 0.0 - fp_c6.data[2].y;
    temp_638 = temp_637 + fp_c6.data[1].y;
    // 0x001430: 0x4C59101800671919 Fadd
    temp_639 = 0.0 - fp_c6.data[2].z;
    temp_640 = temp_639 + fp_c6.data[1].z;
    // 0x001438: 0x5C5C30000FF7012C Fadd
    temp_641 = temp_628 + -0.0;
    temp_642 = clamp(temp_641, 0.0, 1.0);
    // 0x001448: 0x386C10424807082F Fmul
    temp_643 = temp_255 * 50.0;
    temp_644 = clamp(temp_643, 0.0, 1.0);
    // 0x001450: 0x51A0021800870202 Ffma
    temp_645 = fma(temp_636, temp_625, fp_c6.data[2].x);
    // 0x001458: 0x5C68100002E72D01 Fmul
    temp_646 = temp_634 * temp_633;
    // 0x001468: 0x51A0021800970503 Ffma
    temp_647 = fma(temp_638, temp_625, fp_c6.data[2].y);
    // 0x001470: 0x4C68101808872222 Fmul
    temp_648 = temp_632 * fp_c6.data[34].x;
    // 0x001478: 0x51A0021800A71905 Ffma
    temp_649 = fma(temp_640, temp_625, fp_c6.data[2].z);
    // 0x001488: 0x4C5C100400B71719 Fadd
    temp_650 = temp_630 + fp_c1.data[2].w;
    temp_651 = clamp(temp_650, 0.0, 1.0);
    // 0x001490: 0x4C68101808C71217 Fmul
    temp_652 = temp_629 * fp_c6.data[35].x;
    // 0x001498: 0x5C68100002C72F2F Fmul
    temp_653 = temp_644 * temp_642;
    // 0x0014A8: 0x4C68101803770101 Fmul
    temp_654 = temp_646 * fp_c6.data[13].w;
    // 0x0014B0: 0x51A00C1808672204 Ffma
    temp_655 = fma(temp_648, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x0014B8: 0x4C68101808D71218 Fmul
    temp_656 = temp_629 * fp_c6.data[35].y;
    // 0x0014C8: 0x5C58300002C71922 Fadd
    temp_657 = 0.0 - temp_642;
    temp_658 = temp_651 + temp_657;
    // 0x0014D0: 0x4C68101808E71219 Fmul
    temp_659 = temp_629 * fp_c6.data[35].z;
    // 0x0014D8: 0x49A0131408271726 Ffma
    temp_660 = fma(temp_652, fp_c5.data[32].z, temp_602);
    // 0x0014E8: 0x4C9807980B470012 Mov
    // 0x0014F0: 0x49A0139408271827 Ffma
    temp_661 = fma(temp_656, fp_c5.data[32].z, temp_604);
    // 0x0014F8: 0x49A10C140827182C Ffma
    temp_662 = 0.0 - fp_c5.data[32].z;
    temp_663 = fma(temp_656, temp_662, temp_656);
    // 0x001508: 0x49A0141408271928 Ffma
    temp_664 = fma(temp_659, fp_c5.data[32].z, temp_608);
    // 0x001510: 0x49A10C9408271919 Ffma
    temp_665 = 0.0 - fp_c5.data[32].z;
    temp_666 = fma(temp_659, temp_665, temp_659);
    // 0x001518: 0x49A10B9408271718 Ffma
    temp_667 = 0.0 - fp_c5.data[32].z;
    temp_668 = fma(temp_652, temp_667, temp_652);
    // 0x001528: 0x59A0178002270A17 Ffma
    temp_669 = fma(temp_238, temp_658, temp_653);
    // 0x001530: 0x59A0178002270808 Ffma
    temp_670 = fma(temp_255, temp_658, temp_653);
    // 0x001538: 0x59A0178002270909 Ffma
    temp_671 = fma(temp_230, temp_658, temp_653);
    // 0x001548: 0x51A209180B471C1C Ffma
    temp_672 = 0.0 - fp_c6.data[45].x;
    temp_673 = fma(temp_27, fp_c6.data[45].x, temp_672);
    // 0x001550: 0x5C58100001973232 Fadd
    temp_674 = temp_607 + temp_666;
    // 0x001558: 0x51A209180B471D1D Ffma
    temp_675 = 0.0 - fp_c6.data[45].x;
    temp_676 = fma(temp_28, fp_c6.data[45].x, temp_675);
    // 0x001568: 0x51A209180B470000 Ffma
    temp_677 = 0.0 - fp_c6.data[45].x;
    temp_678 = fma(temp_29, fp_c6.data[45].x, temp_677);
    // 0x001570: 0xF0F0000034370000 Depbar
    // 0x001578: 0x49A01A180A170707 Ffma
    temp_679 = fma(temp_327, fp_c6.data[40].y, temp_560);
    // 0x001588: 0x49A019980A170606 Ffma
    temp_680 = fma(temp_328, fp_c6.data[40].y, temp_563);
    // 0x001590: 0x5C58100001870707 Fadd
    temp_681 = temp_679 + temp_668;
    // 0x001598: 0x5C58100002C70606 Fadd
    temp_682 = temp_680 + temp_663;
    // 0x0015A8: 0xF0F0000034270000 Depbar
    // 0x0015B0: 0x49A0060400770219 Ffma
    temp_683 = fma(temp_645, fp_c1.data[1].w, temp_579);
    // 0x0015B8: 0xE043FF9002A7FF02 Ipa
    temp_684 = in_attr8.x;
    // 0x0015C8: 0x49A006840077030D Ffma
    temp_685 = fma(temp_647, fp_c1.data[1].w, temp_580);
    // 0x0015D0: 0xE043FF8C82A7FF2A Ipa
    temp_686 = in_attr4.z;
    // 0x0015D8: 0x59A20C8000471A1A Ffma
    temp_687 = 0.0 - temp_683;
    temp_688 = fma(temp_96, temp_655, temp_687);
    // 0x0015E8: 0x49A0070400770505 Ffma
    temp_689 = fma(temp_649, fp_c1.data[1].w, temp_581);
    // 0x0015F0: 0xF0F0000034170000 Depbar
    // 0x0015F8: 0x49A0081808571410 Ffma
    temp_690 = fma(temp_583, fp_c6.data[33].y, temp_589);
    // 0x001608: 0x49A0089808571511 Ffma
    temp_691 = fma(temp_584, fp_c6.data[33].y, temp_590);
    // 0x001610: 0x49A0119808571616 Ffma
    temp_692 = fma(temp_585, fp_c6.data[33].y, temp_591);
    // 0x001618: 0x59A2068000471B1B Ffma
    temp_693 = 0.0 - temp_685;
    temp_694 = fma(temp_97, temp_655, temp_693);
    // 0x001628: 0x59A00C8001F71A1A Ffma
    temp_695 = fma(temp_688, temp_613, temp_683);
    // 0x001630: 0x59A2028000471E04 Ffma
    temp_696 = 0.0 - temp_689;
    temp_697 = fma(temp_98, temp_655, temp_696);
    // 0x001638: 0x59A0130001071726 Ffma
    temp_698 = fma(temp_669, temp_690, temp_660);
    // 0x001648: 0x4C98079802870003 Mov
    // 0x001650: 0x59A0138001170808 Ffma
    temp_699 = fma(temp_670, temp_691, temp_661);
    // 0x001658: 0x59A0068001F71B1B Ffma
    temp_700 = fma(temp_694, temp_613, temp_685);
    // 0x001668: 0x5C58100000771A07 Fadd
    temp_701 = temp_695 + temp_681;
    // 0x001670: 0x59A0028001F70404 Ffma
    temp_702 = fma(temp_697, temp_613, temp_689);
    // 0x001678: 0x59A0140001670909 Ffma
    temp_703 = fma(temp_671, temp_692, temp_664);
    // 0x001688: 0x51A0019802871C1C Ffma
    temp_704 = fma(temp_673, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001690: 0x5C58100000671B06 Fadd
    temp_705 = temp_700 + temp_682;
    // 0x001698: 0x59A1038000772505 Ffma
    temp_706 = 0.0 - temp_701;
    temp_707 = fma(temp_24, temp_706, temp_701);
    // 0x0016A8: 0x5C58100003270404 Fadd
    temp_708 = temp_702 + temp_674;
    // 0x0016B0: 0x4C98079802970007 Mov
    // 0x0016B8: 0x59A1030000672506 Ffma
    temp_709 = 0.0 - temp_705;
    temp_710 = fma(temp_24, temp_709, temp_705);
    // 0x0016C8: 0x59A0130000571326 Ffma
    temp_711 = fma(temp_167, temp_707, temp_698);
    // 0x0016D0: 0x59A1020000472504 Ffma
    temp_712 = 0.0 - temp_708;
    temp_713 = fma(temp_24, temp_712, temp_708);
    // 0x0016D8: 0x51A0039802971D1D Ffma
    temp_714 = fma(temp_676, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0016E8: 0x59A0040000670F06 Ffma
    temp_715 = fma(temp_165, temp_710, temp_699);
    // 0x0016F0: 0x5C68100002672929 Fmul
    temp_716 = temp_315 * temp_711;
    // 0x0016F8: 0x59A0048000470B09 Ffma
    temp_717 = fma(temp_166, temp_713, temp_703);
    // 0x001708: 0x5C68100000672020 Fmul
    temp_718 = temp_311 * temp_715;
    // 0x001710: 0x49A501180BC72B2B Ffma
    temp_719 = 0.0 - fp_c6.data[47].x;
    temp_720 = fma(temp_599, temp_719, temp_684);
    temp_721 = clamp(temp_720, 0.0, 1.0);
    // 0x001718: 0x4C98079802A70002 Mov
    // 0x001728: 0x5080000000372B2B Mufu
    temp_722 = log2(temp_721);
    // 0x001730: 0x5C58300001C72903 Fadd
    temp_723 = 0.0 - temp_704;
    temp_724 = temp_716 + temp_723;
    // 0x001738: 0x5C68100000972424 Fmul
    temp_725 = temp_294 * temp_717;
    // 0x001748: 0x49A2009803570106 Ffma
    temp_726 = 0.0 - temp_654;
    temp_727 = fma(temp_654, fp_c6.data[13].y, temp_726);
    // 0x001750: 0x51A0011802A70002 Ffma
    temp_728 = fma(temp_678, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001758: 0x49A00E180BF70305 Ffma
    temp_729 = fma(temp_724, fp_c6.data[47].w, temp_704);
    // 0x001768: 0x5C58300001D72000 Fadd
    temp_730 = 0.0 - temp_714;
    temp_731 = temp_718 + temp_730;
    // 0x001770: 0x5C58300000272403 Fadd
    temp_732 = 0.0 - temp_728;
    temp_733 = temp_725 + temp_732;
    // 0x001778: 0x4C68101803172B04 Fmul
    temp_734 = temp_722 * fp_c6.data[12].y;
    // 0x001788: 0x49A00E980BF70000 Ffma
    temp_735 = fma(temp_731, fp_c6.data[47].w, temp_714);
    // 0x001790: 0x5C60178000571C05 Fmnmx
    temp_736 = max(temp_704, temp_729);
    // 0x001798: 0x49A001180BF70303 Ffma
    temp_737 = fma(temp_733, fp_c6.data[47].w, temp_728);
    // 0x0017A8: 0x5C90008000470007 Rro
    // 0x0017B0: 0x49A2009803470104 Ffma
    temp_738 = 0.0 - temp_654;
    temp_739 = fma(temp_654, fp_c6.data[13].x, temp_738);
    // 0x0017B8: 0x5080000000270707 Mufu
    temp_740 = exp2(temp_734);
    // 0x0017C8: 0x5C60178000071D00 Fmnmx
    temp_741 = max(temp_714, temp_735);
    // 0x0017D0: 0x49A2009803670101 Ffma
    temp_742 = 0.0 - temp_654;
    temp_743 = fma(temp_654, fp_c6.data[13].z, temp_742);
    // 0x0017D8: 0x5C60178000370203 Fmnmx
    temp_744 = max(temp_728, temp_737);
    // 0x0017E8: 0x59A0028000470504 Ffma
    temp_745 = fma(temp_736, temp_739, temp_736);
    // 0x0017F0: 0x59A0000000670006 Ffma
    temp_746 = fma(temp_741, temp_727, temp_741);
    // 0x0017F8: 0x0103EC000007F005 Mov32i
    // 0x001808: 0x59A0018000170302 Ffma
    temp_747 = fma(temp_744, temp_743, temp_744);
    // 0x001810: 0x5C59100000472900 Fadd
    temp_748 = 0.0 - temp_716;
    temp_749 = temp_748 + temp_745;
    // 0x001818: 0x4C68101802B70703 Fmul
    temp_750 = temp_740 * fp_c6.data[10].w;
    // 0x001828: 0x5C59100000672001 Fadd
    temp_751 = 0.0 - temp_718;
    temp_752 = temp_751 + temp_746;
    // 0x001830: 0x5C59100000272402 Fadd
    temp_753 = 0.0 - temp_725;
    temp_754 = temp_753 + temp_747;
    // 0x001838: 0x4C58100C03872A04 Fadd
    temp_755 = temp_686 + fp_c3.data[14].x;
    // 0x001848: 0x5C98078002170007 Mov
    // 0x001850: 0x5C9807800FF70006 Mov
    // 0x001858: 0x59A0148000370000 Ffma
    temp_756 = fma(temp_749, temp_750, temp_716);
    // 0x001868: 0x59A0100000370101 Ffma
    temp_757 = fma(temp_752, temp_750, temp_718);
    // 0x001870: 0x59A0120000370202 Ffma
    temp_758 = fma(temp_754, temp_750, temp_725);
    // 0x001878: 0x5C98078002170003 Mov
    // 0x001888: 0x49A37F8C03C70404 Ffma
    temp_759 = 0.0 - fp_c3.data[15].x;
    temp_760 = fma(temp_755, temp_759, -0.0);
    // 0x001890: 0xE30000000007000F Exit
    out_attr0.x = temp_756;
    out_attr0.y = temp_757;
    out_attr0.z = temp_758;
    out_attr0.w = temp_17;
    out_attr1.x = temp_760;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = temp_17;
    return;
}
