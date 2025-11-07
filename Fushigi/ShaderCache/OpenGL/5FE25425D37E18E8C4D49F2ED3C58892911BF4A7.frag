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

layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_36;
layout (binding = 2) uniform sampler2D fp_t_tcb_2C;
layout (binding = 3) uniform sampler2D fp_t_tcb_24;
layout (binding = 4) uniform sampler2D fp_t_tcb_1E;
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
    precise vec3 temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise vec3 temp_19;
    precise float temp_20;
    precise float temp_21;
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
    uint temp_188;
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
    int temp_214;
    precise float temp_215;
    precise float temp_216;
    int temp_217;
    uint temp_218;
    uint temp_219;
    int temp_220;
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
    bool temp_282;
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
    int temp_323;
    int temp_324;
    uint temp_325;
    uint temp_326;
    int temp_327;
    precise float temp_328;
    int temp_329;
    uint temp_330;
    int temp_331;
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
    int temp_342;
    uint temp_343;
    uint temp_344;
    int temp_345;
    precise float temp_346;
    int temp_347;
    uint temp_348;
    int temp_349;
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
    precise float temp_368;
    precise float temp_369;
    int temp_370;
    uint temp_371;
    uint temp_372;
    int temp_373;
    precise float temp_374;
    precise float temp_375;
    int temp_376;
    uint temp_377;
    uint temp_378;
    int temp_379;
    precise float temp_380;
    int temp_381;
    uint temp_382;
    int temp_383;
    precise float temp_384;
    int temp_385;
    uint temp_386;
    uint temp_387;
    int temp_388;
    precise float temp_389;
    int temp_390;
    uint temp_391;
    int temp_392;
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
    uint temp_411;
    int temp_412;
    precise float temp_413;
    bool temp_414;
    uint temp_415;
    precise float temp_416;
    precise float temp_417;
    precise float temp_418;
    precise float temp_419;
    precise float temp_420;
    precise float temp_421;
    precise float temp_422;
    uint temp_423;
    precise float temp_424;
    bool temp_425;
    precise float temp_426;
    int temp_427;
    uint temp_428;
    uint temp_429;
    int temp_430;
    precise float temp_431;
    int temp_432;
    uint temp_433;
    uint temp_434;
    int temp_435;
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
    uint temp_461;
    uint temp_462;
    int temp_463;
    precise float temp_464;
    int temp_465;
    uint temp_466;
    int temp_467;
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
    precise vec3 temp_560;
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
    // 0x000008: 0x0103F8000007F001 Mov32i
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x5C9807800FF70026 Mov
    // 0x000028: 0xE003FF870FF7FF06 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000030: 0x5C9807800FF70027 Mov
    // 0x000038: 0xE003FF874FF7FF07 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000048: 0x4C68100C04A70606 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000050: 0x5080000000470000 Mufu
    // 0x000058: 0x4C68100C04B70707 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000068: 0xE043FF8E0007FF12 Ipa
    temp_8 = in_attr6.x;
    // 0x000070: 0xE043FF8E4007FF15 Ipa
    temp_9 = in_attr6.y;
    // 0x000078: 0xE043FF8EC007FF04 Ipa
    temp_10 = in_attr6.w;
    // 0x000088: 0xE043FF8E8007FF05 Ipa
    temp_11 = in_attr6.z;
    // 0x000090: 0xD830026FF1571208 Texs
    temp_12 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_13 = temp_12.x;
    temp_14 = temp_12.y;
    // 0x000098: 0xD8240360E1571202 Texs
    temp_15 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_16 = temp_15.x;
    temp_17 = temp_15.y;
    temp_18 = temp_15.z;
    // 0x0000A8: 0xD82202C0D0470504 Texs
    temp_19 = texture(fp_t_tcb_2C, vec2(temp_11, temp_10)).xyz;
    temp_20 = temp_19.x;
    temp_21 = temp_19.y;
    temp_22 = temp_19.z;
    // 0x0000B0: 0xD822024FF157121D Texs
    temp_23 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).x;
    // 0x0000B8: 0xD86201EFF0170601 Texs
    temp_24 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x0000C8: 0xD822020140770610 Texs
    temp_25 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_26 = temp_25.x;
    temp_27 = temp_25.y;
    temp_28 = temp_25.z;
    // 0x0000D0: 0xE043FF8A0007FF0A Ipa
    temp_29 = in_attr2.x;
    // 0x0000D8: 0xE043FF890007FF0F Ipa
    temp_30 = in_attr1.x;
    // 0x0000E8: 0xE043FF8A4007FF0B Ipa
    temp_31 = in_attr2.y;
    // 0x0000F0: 0xE043FF894007FF13 Ipa
    temp_32 = in_attr1.y;
    // 0x0000F8: 0xE043FF880007FF1C Ipa
    temp_33 = in_attr0.x;
    // 0x000108: 0xE043FF8A8007FF0C Ipa
    temp_34 = in_attr2.z;
    // 0x000110: 0xE043FF898007FF16 Ipa
    temp_35 = in_attr1.z;
    // 0x000118: 0xE043FF884007FF1E Ipa
    temp_36 = in_attr0.y;
    // 0x000128: 0xE043FF888007FF1F Ipa
    temp_37 = in_attr0.z;
    // 0x000130: 0xE043FF8B0007FF19 Ipa
    temp_38 = in_attr3.x;
    // 0x000138: 0xE043FF8B4007FF1A Ipa
    temp_39 = in_attr3.y;
    // 0x000148: 0xE043FF8B8007FF1B Ipa
    temp_40 = in_attr3.z;
    // 0x000150: 0xE2900000E8800000 Ssy
    // 0x000158: 0x5C9807800FF70029 Mov
    // 0x000168: 0x5C9807800FF70028 Mov
    // 0x000170: 0x5C9807800FF7002A Mov
    // 0x000178: 0x5C68100000A70A12 Fmul
    temp_41 = temp_29 * temp_29;
    // 0x000188: 0x5C68100000F70F15 Fmul
    temp_42 = temp_30 * temp_30;
    // 0x000190: 0x5C68100001C71C18 Fmul
    temp_43 = temp_33 * temp_33;
    // 0x000198: 0x59A0090000B70B12 Ffma
    temp_44 = fma(temp_31, temp_31, temp_41);
    // 0x0001A8: 0x59A00A8001371317 Ffma
    temp_45 = fma(temp_32, temp_32, temp_42);
    // 0x0001B0: 0x59A00C0001E71E20 Ffma
    temp_46 = fma(temp_36, temp_36, temp_43);
    // 0x0001B8: 0x59A0090000C70C12 Ffma
    temp_47 = fma(temp_34, temp_34, temp_44);
    // 0x0001C8: 0x59A00B8001671617 Ffma
    temp_48 = fma(temp_35, temp_35, temp_45);
    // 0x0001D0: 0x5080000000571215 Mufu
    temp_49 = inversesqrt(temp_47);
    // 0x0001D8: 0x59A0100001F71F20 Ffma
    temp_50 = fma(temp_37, temp_37, temp_46);
    // 0x0001E8: 0x5080000000571718 Mufu
    temp_51 = inversesqrt(temp_48);
    // 0x0001F0: 0x3868104180070606 Fmul
    temp_52 = temp_6 * 16.0;
    // 0x0001F8: 0x5080000000572021 Mufu
    temp_53 = inversesqrt(temp_50);
    // 0x000208: 0x5C68100001570A0A Fmul
    temp_54 = temp_29 * temp_49;
    // 0x000210: 0x5CA8148000670A06 F2f
    temp_55 = floor(temp_52);
    // 0x000218: 0x5C68100001570B0B Fmul
    temp_56 = temp_31 * temp_49;
    // 0x000228: 0x5C68100001570C0C Fmul
    temp_57 = temp_34 * temp_49;
    // 0x000230: 0x5C68100001871315 Fmul
    temp_58 = temp_32 * temp_51;
    // 0x000238: 0x5C68100001971913 Fmul
    temp_59 = temp_38 * temp_38;
    // 0x000248: 0x5C68100001870F0F Fmul
    temp_60 = temp_30 * temp_51;
    // 0x000250: 0x5C68100001871616 Fmul
    temp_61 = temp_35 * temp_51;
    // 0x000258: 0x5C68100002171C1C Fmul
    temp_62 = temp_33 * temp_53;
    // 0x000268: 0x5C68100002171E1E Fmul
    temp_63 = temp_36 * temp_53;
    // 0x000270: 0x5C68100002171F22 Fmul
    temp_64 = temp_37 * temp_53;
    // 0x000278: 0x0103F0000007F021 Mov32i
    // 0x000288: 0xF0F0000034170000 Depbar
    // 0x000290: 0x5C68100000970912 Fmul
    temp_65 = temp_14 * temp_14;
    // 0x000298: 0x5C68100000970A0A Fmul
    temp_66 = temp_54 * temp_14;
    // 0x0002A8: 0x5C68100000970B0B Fmul
    temp_67 = temp_56 * temp_14;
    // 0x0002B0: 0x5C68100000970C09 Fmul
    temp_68 = temp_57 * temp_14;
    // 0x0002B8: 0x4C6810180A070202 Fmul
    temp_69 = temp_16 * fp_c6.data[40].x;
    // 0x0002C8: 0x51A5008400270E01 Ffma
    temp_70 = 0.0 - temp_24;
    temp_71 = fma(temp_18, temp_70, fp_c1.data[0].z);
    temp_72 = clamp(temp_71, 0.0, 1.0);
    // 0x0002D0: 0x59A0090000870817 Ffma
    temp_73 = fma(temp_13, temp_13, temp_65);
    // 0x0002D8: 0x59A0098001A71A12 Ffma
    temp_74 = fma(temp_39, temp_39, temp_59);
    // 0x0002E8: 0x59A0050000F7080A Ffma
    temp_75 = fma(temp_13, temp_60, temp_66);
    // 0x0002F0: 0x59A0058001570815 Ffma
    temp_76 = fma(temp_13, temp_58, temp_67);
    // 0x0002F8: 0x59A0048001670809 Ffma
    temp_77 = fma(temp_13, temp_61, temp_68);
    // 0x000308: 0x385D103F80071717 Fadd
    temp_78 = 0.0 - temp_73;
    temp_79 = temp_78 + 1.0;
    temp_80 = clamp(temp_79, 0.0, 1.0);
    // 0x000310: 0x59A0090001B71B12 Ffma
    temp_81 = fma(temp_40, temp_40, temp_74);
    // 0x000318: 0x5080000000871717 Mufu
    temp_82 = sqrt(temp_80);
    // 0x000328: 0x5080000000571218 Mufu
    temp_83 = inversesqrt(temp_81);
    // 0x000330: 0x59A0050001C7171C Ffma
    temp_84 = fma(temp_82, temp_62, temp_75);
    // 0x000338: 0x59A00A8001E71715 Ffma
    temp_85 = fma(temp_82, temp_63, temp_76);
    // 0x000348: 0x5C6910000187190A Fmul
    temp_86 = 0.0 - temp_83;
    temp_87 = temp_38 * temp_86;
    // 0x000350: 0x59A0048002271709 Ffma
    temp_88 = fma(temp_82, temp_64, temp_77);
    // 0x000358: 0x5C69100001871A0B Fmul
    temp_89 = 0.0 - temp_83;
    temp_90 = temp_39 * temp_89;
    // 0x000368: 0x5C69100001871B0C Fmul
    temp_91 = 0.0 - temp_83;
    temp_92 = temp_40 * temp_91;
    // 0x000370: 0x5C68100001C71C08 Fmul
    temp_93 = temp_84 * temp_84;
    // 0x000378: 0x386810411007071E Fmul
    temp_94 = temp_7 * 9.0;
    // 0x000388: 0x4C58301805C70A0F Fadd
    temp_95 = 0.0 - fp_c6.data[23].x;
    temp_96 = temp_87 + temp_95;
    // 0x000390: 0x4C58301805D70B12 Fadd
    temp_97 = 0.0 - fp_c6.data[23].y;
    temp_98 = temp_90 + temp_97;
    // 0x000398: 0x4C58301805E70C13 Fadd
    temp_99 = 0.0 - fp_c6.data[23].z;
    temp_100 = temp_92 + temp_99;
    // 0x0003A8: 0x59A0040001571508 Ffma
    temp_101 = fma(temp_85, temp_85, temp_93);
    // 0x0003B0: 0x59A0040000970916 Ffma
    temp_102 = fma(temp_88, temp_88, temp_101);
    // 0x0003B8: 0x5C68100000F70F08 Fmul
    temp_103 = temp_96 * temp_96;
    // 0x0003C8: 0x5080000000571616 Mufu
    temp_104 = inversesqrt(temp_102);
    // 0x0003D0: 0x59A0040001271208 Ffma
    temp_105 = fma(temp_98, temp_98, temp_103);
    // 0x0003D8: 0x59A0040001371317 Ffma
    temp_106 = fma(temp_100, temp_100, temp_105);
    // 0x0003E8: 0x5C68100001671C08 Fmul
    temp_107 = temp_84 * temp_104;
    // 0x0003F0: 0x5080000000571718 Mufu
    temp_108 = inversesqrt(temp_106);
    // 0x0003F8: 0x5C68100001671515 Fmul
    temp_109 = temp_85 * temp_104;
    // 0x000408: 0x5C68100001670909 Fmul
    temp_110 = temp_88 * temp_104;
    // 0x000410: 0x01040DF760C7F01C Mov32i
    // 0x000418: 0x5C68100000870A1A Fmul
    temp_111 = temp_87 * temp_107;
    // 0x000428: 0x59A00D0001570B1B Ffma
    temp_112 = fma(temp_90, temp_109, temp_111);
    // 0x000430: 0x5C68100001870F19 Fmul
    temp_113 = temp_96 * temp_108;
    // 0x000438: 0x5C6810000187121A Fmul
    temp_114 = temp_98 * temp_108;
    // 0x000448: 0x5C68100001871313 Fmul
    temp_115 = temp_100 * temp_108;
    // 0x000450: 0x59A40D8000970C16 Ffma
    temp_116 = fma(temp_92, temp_110, temp_112);
    temp_117 = clamp(temp_116, 0.0, 1.0);
    // 0x000458: 0x5C68100001970A18 Fmul
    temp_118 = temp_87 * temp_113;
    // 0x000468: 0x4C69101805C71917 Fmul
    temp_119 = 0.0 - fp_c6.data[23].x;
    temp_120 = temp_113 * temp_119;
    // 0x000470: 0x5C68100000871907 Fmul
    temp_121 = temp_113 * temp_107;
    // 0x000478: 0x4C98079403670019 Mov
    // 0x000488: 0x3859103F8007160F Fadd
    temp_122 = 0.0 - temp_117;
    temp_123 = temp_122 + 1.0;
    // 0x000490: 0x59A00C0001A70B12 Ffma
    temp_124 = fma(temp_90, temp_114, temp_118);
    // 0x000498: 0x49A10B9805D71A18 Ffma
    temp_125 = 0.0 - fp_c6.data[23].y;
    temp_126 = fma(temp_114, temp_125, temp_120);
    // 0x0004A8: 0x59A0038001571A1A Ffma
    temp_127 = fma(temp_114, temp_109, temp_121);
    // 0x0004B0: 0x4C98079403070007 Mov
    // 0x0004B8: 0x4C59101403A71919 Fadd
    temp_128 = 0.0 - fp_c5.data[13].z;
    temp_129 = temp_128 + fp_c5.data[14].z;
    // 0x0004C8: 0x4C68101406270F17 Fmul
    temp_130 = temp_123 * fp_c5.data[24].z;
    // 0x0004D0: 0x59A4090001370C12 Ffma
    temp_131 = fma(temp_92, temp_115, temp_124);
    temp_132 = clamp(temp_131, 0.0, 1.0);
    // 0x0004D8: 0x5080400000371717 Mufu
    temp_133 = abs(temp_130);
    temp_134 = log2(temp_133);
    // 0x0004E8: 0x49A50C1805E7131B Ffma
    temp_135 = 0.0 - fp_c6.data[23].z;
    temp_136 = fma(temp_115, temp_135, temp_126);
    temp_137 = clamp(temp_136, 0.0, 1.0);
    // 0x0004F0: 0x59A40D0000971320 Ffma
    temp_138 = fma(temp_115, temp_110, temp_127);
    temp_139 = clamp(temp_138, 0.0, 1.0);
    // 0x0004F8: 0x4C69101805C70813 Fmul
    temp_140 = 0.0 - fp_c6.data[23].x;
    temp_141 = temp_107 * temp_140;
    // 0x000508: 0x4C59101402C70707 Fadd
    temp_142 = 0.0 - fp_c5.data[12].x;
    temp_143 = temp_142 + fp_c5.data[11].x;
    // 0x000510: 0x5C6810000167150E Fmul
    temp_144 = temp_109 * temp_117;
    // 0x000518: 0x49A20E040007120F Ffma
    temp_145 = fma(temp_132, fp_c1.data[0].x, -6.98316002);
    // 0x000528: 0x49A20E0400071B1C Ffma
    temp_146 = fma(temp_137, fp_c1.data[0].x, -6.98316002);
    // 0x000530: 0x32A205C000070E0E Ffma
    temp_147 = 0.0 - temp_90;
    temp_148 = fma(temp_144, 2.0, temp_147);
    // 0x000538: 0x5C68100000F71212 Fmul
    temp_149 = temp_132 * temp_145;
    // 0x000548: 0x4C68101406371718 Fmul
    temp_150 = temp_134 * fp_c5.data[24].w;
    // 0x000550: 0x5CA8148001E70A17 F2f
    temp_151 = floor(temp_94);
    // 0x000558: 0x5C68100001C71B0F Fmul
    temp_152 = temp_137 * temp_146;
    // 0x000568: 0x5C9000800187001B Rro
    // 0x000570: 0x5084000000271B1B Mufu
    temp_153 = exp2(temp_150);
    temp_154 = clamp(temp_153, 0.0, 1.0);
    // 0x000578: 0x386013BF80070218 Fmnmx
    temp_155 = min(temp_69, 1.0);
    // 0x000588: 0x4C9807940357001E Mov
    // 0x000590: 0x5C90008000F7000F Rro
    // 0x000598: 0x32A0034180071724 Ffma
    temp_156 = fma(temp_151, 16.0, temp_55);
    // 0x0005A8: 0x5080000000270F0F Mufu
    temp_157 = exp2(temp_152);
    // 0x0005B0: 0x4C60178400171818 Fmnmx
    temp_158 = max(temp_155, fp_c1.data[0].y);
    // 0x0005B8: 0x4C59101403971E1E Fadd
    temp_159 = 0.0 - fp_c5.data[13].y;
    temp_160 = temp_159 + fp_c5.data[14].y;
    // 0x0005C8: 0x4C68101801471B02 Fmul
    temp_161 = temp_154 * fp_c6.data[5].x;
    // 0x0005D0: 0x51A40C0400171806 Ffma
    temp_162 = fma(temp_158, temp_158, fp_c1.data[0].y);
    temp_163 = clamp(temp_162, 0.0, 1.0);
    // 0x0005D8: 0x32A010BF00071821 Ffma
    temp_164 = fma(temp_158, 0.5, 0.5);
    // 0x0005E8: 0x51A00F1403571B1E Ffma
    temp_165 = fma(temp_154, temp_160, fp_c5.data[13].y);
    // 0x0005F0: 0x51A00C9403671B1F Ffma
    temp_166 = fma(temp_154, temp_129, fp_c5.data[13].z);
    // 0x0005F8: 0x51A00E9403070719 Ffma
    temp_167 = fma(temp_143, temp_23, fp_c5.data[12].x);
    // 0x000608: 0x5C6810000027041C Fmul
    temp_168 = temp_20 * temp_161;
    // 0x000610: 0x4C98079403470004 Mov
    // 0x000618: 0x4C68101801571B02 Fmul
    temp_169 = temp_154 * fp_c6.data[5].y;
    // 0x000628: 0x5C6810000067061A Fmul
    temp_170 = temp_163 * temp_163;
    // 0x000630: 0x5C90008001270007 Rro
    // 0x000638: 0x4C59101403870404 Fadd
    temp_171 = 0.0 - fp_c5.data[13].x;
    temp_172 = temp_171 + fp_c5.data[14].x;
    // 0x000648: 0x5080000000270707 Mufu
    temp_173 = exp2(temp_149);
    // 0x000650: 0x5C68100000270505 Fmul
    temp_174 = temp_21 * temp_169;
    // 0x000658: 0x59A2100001A72002 Ffma
    temp_175 = 0.0 - temp_139;
    temp_176 = fma(temp_139, temp_170, temp_175);
    // 0x000668: 0x4C58301407B7191A Fadd
    temp_177 = 0.0 - fp_c5.data[30].w;
    temp_178 = temp_167 + temp_177;
    // 0x000670: 0x51A0021403471B17 Ffma
    temp_179 = fma(temp_154, temp_172, fp_c5.data[13].x);
    // 0x000678: 0x49A1099805D71504 Ffma
    temp_180 = 0.0 - fp_c6.data[23].y;
    temp_181 = fma(temp_109, temp_180, temp_141);
    // 0x000688: 0x4C68101801671B1B Fmul
    temp_182 = temp_154 * fp_c6.data[5].z;
    // 0x000690: 0x5C68120002172113 Fmul
    temp_183 = temp_164 * 0.5;
    temp_184 = temp_183 * temp_164;
    // 0x000698: 0x51A0010400272021 Ffma
    temp_185 = fma(temp_139, temp_176, fp_c1.data[0].z);
    // 0x0006A8: 0x5CB0118002470A02 F2i
    temp_186 = trunc(temp_156);
    temp_187 = max(temp_186, 0.0);
    temp_188 = uint(temp_187);
    // 0x0006B0: 0x4C98079403270020 Mov
    // 0x0006B8: 0x5080000000472121 Mufu
    temp_189 = 1.0 / temp_185;
    // 0x0006C8: 0x49A5021805E70904 Ffma
    temp_190 = 0.0 - fp_c6.data[23].z;
    temp_191 = fma(temp_110, temp_190, temp_181);
    temp_192 = clamp(temp_191, 0.0, 1.0);
    // 0x0006D0: 0x5C68100001B70D0D Fmul
    temp_193 = temp_22 * temp_182;
    // 0x0006D8: 0x59A10B0001371612 Ffma
    temp_194 = 0.0 - temp_184;
    temp_195 = fma(temp_117, temp_194, temp_117);
    // 0x0006E8: 0x4C9807940317001B Mov
    // 0x0006F0: 0x51A00D1407B7031A Ffma
    temp_196 = fma(temp_17, temp_178, fp_c5.data[30].w);
    // 0x0006F8: 0x4C59101402E72020 Fadd
    temp_197 = 0.0 - fp_c5.data[12].z;
    temp_198 = temp_197 + fp_c5.data[11].z;
    // 0x000708: 0x59A1020001370422 Ffma
    temp_199 = 0.0 - temp_184;
    temp_200 = fma(temp_192, temp_199, temp_192);
    // 0x000710: 0x5C68100000571E1E Fmul
    temp_201 = temp_165 * temp_174;
    // 0x000718: 0x5C58100001271323 Fadd
    temp_202 = temp_184 + temp_195;
    // 0x000728: 0x4C59101402D71B12 Fadd
    temp_203 = 0.0 - fp_c5.data[12].y;
    temp_204 = temp_203 + fp_c5.data[11].y;
    // 0x000730: 0x5080000000472323 Mufu
    temp_205 = 1.0 / temp_202;
    // 0x000738: 0x5C68100001C7171B Fmul
    temp_206 = temp_179 * temp_168;
    // 0x000748: 0x5C58100002271322 Fadd
    temp_207 = temp_184 + temp_200;
    // 0x000750: 0x59A1038000771A17 Ffma
    temp_208 = 0.0 - temp_173;
    temp_209 = fma(temp_196, temp_208, temp_173);
    // 0x000758: 0x5080000000472224 Mufu
    temp_210 = 1.0 / temp_207;
    // 0x000768: 0x5C68100002170606 Fmul
    temp_211 = temp_163 * temp_189;
    // 0x000770: 0x51A00E940317121C Ffma
    temp_212 = fma(temp_204, temp_23, fp_c5.data[12].y);
    // 0x000778: 0x51A00E940327201D Ffma
    temp_213 = fma(temp_198, temp_23, fp_c5.data[12].z);
    // 0x000788: 0x3848000000870212 Shl
    temp_214 = int(temp_188) << 8;
    // 0x000790: 0x4C68101801470420 Fmul
    temp_215 = temp_192 * fp_c6.data[5].x;
    // 0x000798: 0x5C58100001771A17 Fadd
    temp_216 = temp_196 + temp_209;
    // 0x0007A8: 0xEF94008200471212 Ldc
    temp_217 = temp_214 + 0x2004;
    temp_218 = uint(temp_217) >> 2;
    temp_219 = temp_218 >> 2;
    temp_220 = int(temp_218) & 3;
    temp_221 = fp_c8.data[int(temp_219)][temp_220];
    // 0x0007B0: 0x3868103F0007232F Fmul
    temp_222 = temp_205 * 0.5;
    // 0x0007B8: 0x4C58301407B71C21 Fadd
    temp_223 = 0.0 - fp_c5.data[30].w;
    temp_224 = temp_212 + temp_223;
    // 0x0007C8: 0x4C58301407B71D22 Fadd
    temp_225 = 0.0 - fp_c5.data[30].w;
    temp_226 = temp_213 + temp_225;
    // 0x0007D0: 0x5C68100000670606 Fmul
    temp_227 = temp_211 * temp_211;
    // 0x0007D8: 0x1E23EA2F98372020 Fmul32i
    temp_228 = temp_215 * 0.318309873;
    // 0x0007E8: 0x4C68101406971717 Fmul
    temp_229 = temp_216 * fp_c5.data[26].y;
    // 0x0007F0: 0x5C68100002472F23 Fmul
    temp_230 = temp_222 * temp_210;
    // 0x0007F8: 0x51A0109407B70321 Ffma
    temp_231 = fma(temp_17, temp_224, fp_c5.data[30].w);
    // 0x000808: 0x51A0111407B70322 Ffma
    temp_232 = fma(temp_17, temp_226, fp_c5.data[30].w);
    // 0x000810: 0x4C68101801570405 Fmul
    temp_233 = temp_192 * fp_c6.data[5].y;
    // 0x000818: 0x5C68100000D71F1F Fmul
    temp_234 = temp_166 * temp_193;
    // 0x000828: 0x59A1100002071720 Ffma
    temp_235 = 0.0 - temp_228;
    temp_236 = fma(temp_229, temp_235, temp_228);
    // 0x000830: 0x5C68100002370625 Fmul
    temp_237 = temp_227 * temp_230;
    // 0x000838: 0x59A1078000F72123 Ffma
    temp_238 = 0.0 - temp_157;
    temp_239 = fma(temp_231, temp_238, temp_157);
    // 0x000848: 0x59A1078000F71A17 Ffma
    temp_240 = 0.0 - temp_157;
    temp_241 = fma(temp_196, temp_240, temp_157);
    // 0x000850: 0x59A1038000772106 Ffma
    temp_242 = 0.0 - temp_173;
    temp_243 = fma(temp_231, temp_242, temp_173);
    // 0x000858: 0x59A1078000F7220F Ffma
    temp_244 = 0.0 - temp_157;
    temp_245 = fma(temp_232, temp_244, temp_157);
    // 0x000868: 0x59A1038000772207 Ffma
    temp_246 = 0.0 - temp_173;
    temp_247 = fma(temp_232, temp_246, temp_173);
    // 0x000870: 0x1E23EA2F98370505 Fmul32i
    temp_248 = temp_233 * 0.318309873;
    // 0x000878: 0x5C58100002372123 Fadd
    temp_249 = temp_231 + temp_239;
    // 0x000888: 0x5C58100001771A17 Fadd
    temp_250 = temp_196 + temp_241;
    // 0x000890: 0x5C58100000672106 Fadd
    temp_251 = temp_231 + temp_243;
    // 0x000898: 0x5C58100000F7220F Fadd
    temp_252 = temp_232 + temp_245;
    // 0x0008A8: 0x4C6810180167040D Fmul
    temp_253 = temp_192 * fp_c6.data[5].z;
    // 0x0008B0: 0x5C58100000772207 Fadd
    temp_254 = temp_232 + temp_247;
    // 0x0008B8: 0x4C68101406972323 Fmul
    temp_255 = temp_249 * fp_c5.data[26].y;
    // 0x0008C8: 0x4C68101406971717 Fmul
    temp_256 = temp_250 * fp_c5.data[26].y;
    // 0x0008D0: 0x4C68101406970606 Fmul
    temp_257 = temp_251 * fp_c5.data[26].y;
    // 0x0008D8: 0x4C68101406970F0F Fmul
    temp_258 = temp_252 * fp_c5.data[26].y;
    // 0x0008E8: 0x5C68100002570425 Fmul
    temp_259 = temp_192 * temp_237;
    // 0x0008F0: 0x1E23EA2F98370D0D Fmul32i
    temp_260 = temp_253 * 0.318309873;
    // 0x0008F8: 0x4C68101801572304 Fmul
    temp_261 = temp_255 * fp_c6.data[5].y;
    // 0x000908: 0x4C68101406970707 Fmul
    temp_262 = temp_254 * fp_c5.data[26].y;
    // 0x000910: 0x59A1028000570623 Ffma
    temp_263 = 0.0 - temp_248;
    temp_264 = fma(temp_257, temp_263, temp_248);
    // 0x000918: 0x4C68101801471717 Fmul
    temp_265 = temp_256 * fp_c6.data[5].x;
    // 0x000928: 0x4C68101801670F0F Fmul
    temp_266 = temp_258 * fp_c6.data[5].z;
    // 0x000930: 0x49A200980AC70105 Ffma
    temp_267 = 0.0 - temp_72;
    temp_268 = fma(temp_72, fp_c6.data[43].x, temp_267);
    // 0x000938: 0x49A200980AD70106 Ffma
    temp_269 = 0.0 - temp_72;
    temp_270 = fma(temp_72, fp_c6.data[43].y, temp_269);
    // 0x000948: 0x49A200980AE70101 Ffma
    temp_271 = 0.0 - temp_72;
    temp_272 = fma(temp_72, fp_c6.data[43].z, temp_271);
    // 0x000950: 0x59A1068000D70724 Ffma
    temp_273 = 0.0 - temp_260;
    temp_274 = fma(temp_262, temp_273, temp_260);
    // 0x000958: 0x5C6810000177252E Fmul
    temp_275 = temp_259 * temp_265;
    // 0x000968: 0x5C68100000F72530 Fmul
    temp_276 = temp_259 * temp_266;
    // 0x000970: 0x5C68100000472504 Fmul
    temp_277 = temp_259 * temp_261;
    // 0x000978: 0x3858103F8007052B Fadd
    temp_278 = temp_268 + 1.0;
    // 0x000988: 0x3858103F80070606 Fadd
    temp_279 = temp_270 + 1.0;
    // 0x000990: 0x3858103F80070117 Fadd
    temp_280 = temp_272 + 1.0;
    // 0x000998: 0x5C6810000167080D Fmul
    temp_281 = temp_107 * temp_117;
    // 0x0009A8: 0x5B6603800FF71207 Isetp
    temp_282 = floatBitsToUint(temp_221) <= 0u;
    // 0x0009B0: 0x5C6810000167090F Fmul
    temp_283 = temp_110 * temp_117;
    // 0x0009B8: 0x5C9807800FF70025 Mov
    // 0x0009C8: 0x59A4158002B7192B Ffma
    temp_284 = fma(temp_167, temp_278, temp_278);
    temp_285 = clamp(temp_284, 0.0, 1.0);
    // 0x0009D0: 0x59A4030000671C2C Ffma
    temp_286 = fma(temp_212, temp_279, temp_279);
    temp_287 = clamp(temp_286, 0.0, 1.0);
    // 0x0009D8: 0x59A40B8001771D17 Ffma
    temp_288 = fma(temp_213, temp_280, temp_280);
    temp_289 = clamp(temp_288, 0.0, 1.0);
    // 0x0009E8: 0x32A2054000070D0D Ffma
    temp_290 = 0.0 - temp_87;
    temp_291 = fma(temp_281, 2.0, temp_290);
    // 0x0009F0: 0x32A2064000070F0F Ffma
    temp_292 = 0.0 - temp_92;
    temp_293 = fma(temp_283, 2.0, temp_292);
    // 0x0009F8: 0x1E23E22F98372E2E Fmul32i
    temp_294 = temp_275 * 0.159154937;
    // 0x000A08: 0x1E23E22F9837042D Fmul32i
    temp_295 = temp_277 * 0.159154937;
    // 0x000A10: 0x1E23E22F98373030 Fmul32i
    temp_296 = temp_276 * 0.159154937;
    // 0x000A18: 0xF0F800000000000F Sync
    temp_297 = 0.0;
    temp_298 = 0.0;
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
    if (!temp_282)
    {
        // 0x000A28: 0x5C9807800FF70033 Mov
        // 0x000A30: 0xE043FF8D0007FF31 Ipa
        temp_309 = in_attr5.x;
        // 0x000A38: 0xE043FF8D4007FF32 Ipa
        temp_310 = in_attr5.y;
        // 0x000A48: 0xE043FF8D8007FF35 Ipa
        temp_311 = in_attr5.z;
        temp_312 = 0;
        do
        {
            // 0x000A50: 0x5C1802000337023B Iscadd
            temp_314 = int(temp_188) << 4;
            temp_315 = temp_314 + temp_312;
            // 0x000A58: 0xE290000057000000 Ssy
            // 0x000A68: 0x1C00000000173333 Iadd32i
            temp_316 = temp_312 + 1;
            // 0x000A70: 0x3848000000473B3B Shl
            temp_317 = temp_315 << 4;
            // 0x000A78: 0x5B6C03800127330F Isetp
            temp_313 = uint(temp_316) >= floatBitsToUint(temp_221);
            // 0x000A88: 0xEF94008200073B34 Ldc
            temp_318 = temp_317 + 0x2000;
            temp_319 = uint(temp_318) >> 2;
            temp_320 = temp_319 >> 2;
            temp_321 = int(temp_319) & 3;
            temp_322 = fp_c8.data[int(temp_320)][temp_321];
            // 0x000A90: 0x3848000000673434 Shl
            temp_323 = floatBitsToInt(temp_322) << 6;
            // 0x000A98: 0xEF95008001073400 Ldc
            temp_324 = temp_323 + 16;
            temp_325 = uint(temp_324) >> 2;
            temp_326 = temp_325 >> 2;
            temp_327 = int(temp_325) & 3;
            temp_328 = fp_c8.data[int(temp_326)][temp_327];
            temp_329 = int(temp_325) + 1;
            temp_330 = uint(temp_329) >> 2;
            temp_331 = temp_329 & 3;
            temp_332 = fp_c8.data[int(temp_330)][temp_331];
            // 0x000AA8: 0xEF95008001873404 Ldc
            temp_333 = temp_323 + 24;
            temp_334 = uint(temp_333) >> 2;
            temp_335 = temp_334 >> 2;
            temp_336 = int(temp_334) & 3;
            temp_337 = fp_c8.data[int(temp_335)][temp_336];
            temp_338 = int(temp_334) + 1;
            temp_339 = uint(temp_338) >> 2;
            temp_340 = temp_338 & 3;
            temp_341 = fp_c8.data[int(temp_339)][temp_340];
            // 0x000AB0: 0xEF95008002073406 Ldc
            temp_342 = temp_323 + 32;
            temp_343 = uint(temp_342) >> 2;
            temp_344 = temp_343 >> 2;
            temp_345 = int(temp_343) & 3;
            temp_346 = fp_c8.data[int(temp_344)][temp_345];
            temp_347 = int(temp_343) + 1;
            temp_348 = uint(temp_347) >> 2;
            temp_349 = temp_347 & 3;
            temp_350 = fp_c8.data[int(temp_348)][temp_349];
            // 0x000AB8: 0x5C58300003170037 Fadd
            temp_351 = 0.0 - temp_309;
            temp_352 = temp_328 + temp_351;
            // 0x000AC8: 0x5C58300003270136 Fadd
            temp_353 = 0.0 - temp_310;
            temp_354 = temp_332 + temp_353;
            // 0x000AD0: 0x5C58300003570438 Fadd
            temp_355 = 0.0 - temp_311;
            temp_356 = temp_337 + temp_355;
            // 0x000AD8: 0x5C68100003773739 Fmul
            temp_357 = temp_352 * temp_352;
            // 0x000AE8: 0x59A11C0003870500 Ffma
            temp_358 = 0.0 - temp_356;
            temp_359 = fma(temp_341, temp_358, temp_356);
            // 0x000AF0: 0x59A01C8003673639 Ffma
            temp_360 = fma(temp_354, temp_354, temp_357);
            // 0x000AF8: 0x59A01C800007003A Ffma
            temp_361 = fma(temp_359, temp_359, temp_360);
            // 0x000B08: 0x5080000000573A01 Mufu
            temp_362 = inversesqrt(temp_361);
            // 0x000B10: 0x5080000000873A3B Mufu
            temp_363 = sqrt(temp_361);
            // 0x000B18: 0x5C68100000173704 Fmul
            temp_364 = temp_352 * temp_362;
            // 0x000B28: 0x5C69100000670406 Fmul
            temp_365 = 0.0 - temp_346;
            temp_366 = temp_364 * temp_365;
            // 0x000B30: 0x5C68100000173604 Fmul
            temp_367 = temp_354 * temp_362;
            // 0x000B38: 0x59A103000077043C Ffma
            temp_368 = 0.0 - temp_350;
            temp_369 = fma(temp_367, temp_368, temp_366);
            // 0x000B48: 0xEF94008002873407 Ldc
            temp_370 = temp_323 + 40;
            temp_371 = uint(temp_370) >> 2;
            temp_372 = temp_371 >> 2;
            temp_373 = int(temp_371) & 3;
            temp_374 = fp_c8.data[int(temp_372)][temp_373];
            // 0x000B50: 0x5C68100000170006 Fmul
            temp_375 = temp_359 * temp_362;
            // 0x000B58: 0xEF95008003873404 Ldc
            temp_376 = temp_323 + 56;
            temp_377 = uint(temp_376) >> 2;
            temp_378 = temp_377 >> 2;
            temp_379 = int(temp_377) & 3;
            temp_380 = fp_c8.data[int(temp_378)][temp_379];
            temp_381 = int(temp_377) + 1;
            temp_382 = uint(temp_381) >> 2;
            temp_383 = temp_381 & 3;
            temp_384 = fp_c8.data[int(temp_382)][temp_383];
            // 0x000B68: 0xEF95008003073400 Ldc
            temp_385 = temp_323 + 48;
            temp_386 = uint(temp_385) >> 2;
            temp_387 = temp_386 >> 2;
            temp_388 = int(temp_386) & 3;
            temp_389 = fp_c8.data[int(temp_387)][temp_388];
            temp_390 = int(temp_386) + 1;
            temp_391 = uint(temp_390) >> 2;
            temp_392 = temp_390 & 3;
            temp_393 = fp_c8.data[int(temp_391)][temp_392];
            // 0x000B70: 0x59A11E0000770606 Ffma
            temp_394 = 0.0 - temp_374;
            temp_395 = fma(temp_375, temp_394, temp_369);
            // 0x000B78: 0x59A4008003B7003B Ffma
            temp_396 = fma(temp_389, temp_363, temp_393);
            temp_397 = clamp(temp_396, 0.0, 1.0);
            // 0x000B88: 0x59A4028000470604 Ffma
            temp_398 = fma(temp_395, temp_380, temp_384);
            temp_399 = clamp(temp_398, 0.0, 1.0);
            // 0x000B90: 0x010404000007F005 Mov32i
            // 0x000B98: 0x5C68100003B73B06 Fmul
            temp_400 = temp_397 * temp_397;
            // 0x000BA8: 0x33A002C000073B3B Ffma
            temp_401 = fma(temp_397, -2.0, 3.0);
            // 0x000BB0: 0x33A002C000070405 Ffma
            temp_402 = fma(temp_399, -2.0, 3.0);
            // 0x000BB8: 0x5C68100000470404 Fmul
            temp_403 = temp_399 * temp_399;
            // 0x000BC8: 0x5C68100003B70606 Fmul
            temp_404 = temp_400 * temp_401;
            // 0x000BD0: 0x5C68100000570404 Fmul
            temp_405 = temp_403 * temp_402;
            // 0x000BD8: 0x39585042F0073805 Fadd
            temp_406 = abs(temp_356);
            temp_407 = temp_406 + -120.0;
            // 0x000BE8: 0x5C68100000670406 Fmul
            temp_408 = temp_405 * temp_404;
            // 0x000BF0: 0x1EABD4CCCCD70505 Fmul32i
            temp_409 = temp_407 * -0.0500000007;
            temp_410 = clamp(temp_409, 0.0, 1.0);
            // 0x000BF8: 0x36247F9000170404 Xmad
            temp_411 = floatBitsToUint(temp_405) >> 16;
            temp_412 = int(temp_411) << 16;
            // 0x000C08: 0x5C68100000570606 Fmul
            temp_413 = temp_408 * temp_410;
            // 0x000C10: 0x5BB383800FF70607 Fsetp
            temp_414 = temp_413 <= 0.0;
            // 0x000C18: 0x7A05083C0F00FF04 Hadd2
            temp_312 = temp_316;
            temp_415 = uint(temp_412);
            temp_416 = temp_297;
            temp_417 = temp_298;
            temp_418 = temp_299;
            temp_419 = temp_300;
            temp_420 = temp_301;
            temp_421 = temp_302;
            if (temp_414)
            {
                temp_422 = unpackHalf2x16(uint(temp_412)).y;
                temp_423 = packHalf2x16(vec2(1.0, temp_422));
                temp_415 = temp_423;
            }
            // 0x000C28: 0x5D2103902FF70407 Hsetp2
            temp_424 = unpackHalf2x16(temp_415).x;
            temp_425 = temp_424 == 0.0;
            // 0x000C30: 0xF0F800000008000F Sync
            if (temp_425)
            {
                // 0x000C38: 0x5080000000470000 Mufu
                temp_426 = 1.0 / temp_389;
                // 0x000C48: 0xEF94008002C73405 Ldc
                temp_427 = temp_323 + 44;
                temp_428 = uint(temp_427) >> 2;
                temp_429 = temp_428 >> 2;
                temp_430 = int(temp_428) & 3;
                temp_431 = fp_c8.data[int(temp_429)][temp_430];
                // 0x000C50: 0xEF94008000873404 Ldc
                temp_432 = temp_323 + 8;
                temp_433 = uint(temp_432) >> 2;
                temp_434 = temp_433 >> 2;
                temp_435 = int(temp_433) & 3;
                temp_436 = fp_c8.data[int(temp_434)][temp_435];
                // 0x000C58: 0x5C69100000070101 Fmul
                temp_437 = 0.0 - temp_426;
                temp_438 = temp_393 * temp_437;
                // 0x000C68: 0x5C60138000173838 Fmnmx
                temp_439 = min(temp_356, temp_438);
                // 0x000C70: 0x5C61178003870138 Fmnmx
                temp_440 = 0.0 - temp_438;
                temp_441 = max(temp_440, temp_439);
                // 0x000C78: 0x59A01C8003873839 Ffma
                temp_442 = fma(temp_441, temp_441, temp_360);
                // 0x000C88: 0x5080000000573901 Mufu
                temp_443 = inversesqrt(temp_442);
                // 0x000C90: 0x508000000087393C Mufu
                temp_444 = sqrt(temp_442);
                // 0x000C98: 0x5C68100000173737 Fmul
                temp_445 = temp_352 * temp_443;
                // 0x000CA8: 0x5080000000470505 Mufu
                temp_446 = 1.0 / temp_431;
                // 0x000CB0: 0x5C68100000173636 Fmul
                temp_447 = temp_354 * temp_443;
                // 0x000CB8: 0x5C68100000173807 Fmul
                temp_448 = temp_441 * temp_443;
                // 0x000CC8: 0x5C68100000470604 Fmul
                temp_449 = temp_413 * temp_436;
                // 0x000CD0: 0x5C58100003770A3A Fadd
                temp_450 = temp_87 + temp_445;
                // 0x000CD8: 0x5C58100003670B3B Fadd
                temp_451 = temp_90 + temp_447;
                // 0x000CE8: 0x5C58100000770C38 Fadd
                temp_452 = temp_92 + temp_448;
                // 0x000CF0: 0x5C6810000377083F Fmul
                temp_453 = temp_107 * temp_445;
                // 0x000CF8: 0x5C68100003A73A00 Fmul
                temp_454 = temp_450 * temp_450;
                // 0x000D08: 0x51A01E040037053C Ffma
                temp_455 = fma(temp_446, temp_444, fp_c1.data[0].w);
                // 0x000D10: 0x59A01F800367153E Ffma
                temp_456 = fma(temp_109, temp_447, temp_453);
                // 0x000D18: 0x5080000000473C39 Mufu
                temp_457 = 1.0 / temp_455;
                // 0x000D28: 0x59A0000003B73B01 Ffma
                temp_458 = fma(temp_451, temp_451, temp_454);
                // 0x000D30: 0x59A01F0000770905 Ffma
                temp_459 = fma(temp_110, temp_448, temp_456);
                // 0x000D38: 0x59A000800387383D Ffma
                temp_460 = fma(temp_452, temp_452, temp_458);
                // 0x000D48: 0xEF95008000073400 Ldc
                temp_461 = uint(temp_323) >> 2;
                temp_462 = temp_461 >> 2;
                temp_463 = int(temp_461) & 3;
                temp_464 = fp_c8.data[int(temp_462)][temp_463];
                temp_465 = int(temp_461) + 1;
                temp_466 = uint(temp_465) >> 2;
                temp_467 = temp_465 & 3;
                temp_468 = fp_c8.data[int(temp_466)][temp_467];
                // 0x000D50: 0x1E23FB3333373939 Fmul32i
                temp_469 = temp_457 * 1.39999998;
                // 0x000D58: 0x5080000000573D3D Mufu
                temp_470 = inversesqrt(temp_460);
                // 0x000D68: 0x5C68100003D73A3A Fmul
                temp_471 = temp_450 * temp_470;
                // 0x000D70: 0x5C68100003D73B3B Fmul
                temp_472 = temp_451 * temp_470;
                // 0x000D78: 0x5C68100003D73838 Fmul
                temp_473 = temp_452 * temp_470;
                // 0x000D88: 0x5C68100003A73737 Fmul
                temp_474 = temp_445 * temp_471;
                // 0x000D90: 0x5C68100003A7083A Fmul
                temp_475 = temp_107 * temp_471;
                // 0x000D98: 0x59A01B8003B73636 Ffma
                temp_476 = fma(temp_447, temp_472, temp_474);
                // 0x000DA8: 0x59A01D0003B7153A Ffma
                temp_477 = fma(temp_109, temp_472, temp_475);
                // 0x000DB0: 0x01040DF760C7F037 Mov32i
                // 0x000DB8: 0x59A41B0003870736 Ffma
                temp_478 = fma(temp_448, temp_473, temp_476);
                temp_479 = clamp(temp_478, 0.0, 1.0);
                // 0x000DC8: 0x51A40C0400171807 Ffma
                temp_480 = fma(temp_158, temp_158, fp_c1.data[0].y);
                temp_481 = clamp(temp_480, 0.0, 1.0);
                // 0x000DD0: 0x59A41D000387093A Ffma
                temp_482 = fma(temp_110, temp_473, temp_477);
                temp_483 = clamp(temp_482, 0.0, 1.0);
                // 0x000DD8: 0x49A21B8400073637 Ffma
                temp_484 = fma(temp_479, fp_c1.data[0].x, -6.98316002);
                // 0x000DE8: 0x5C68100000770738 Fmul
                temp_485 = temp_481 * temp_481;
                // 0x000DF0: 0x5C68100003773637 Fmul
                temp_486 = temp_479 * temp_484;
                // 0x000DF8: 0x59A21D0003A73838 Ffma
                temp_487 = 0.0 - temp_483;
                temp_488 = fma(temp_485, temp_483, temp_487);
                // 0x000E08: 0x5C5C30000FF70536 Fadd
                temp_489 = temp_459 + -0.0;
                temp_490 = clamp(temp_489, 0.0, 1.0);
                // 0x000E10: 0x5C68100000070600 Fmul
                temp_491 = temp_413 * temp_464;
                // 0x000E18: 0x5C68100000170601 Fmul
                temp_492 = temp_413 * temp_468;
                // 0x000E28: 0x5C90008003770037 Rro
                // 0x000E30: 0x51A01C0400273A38 Ffma
                temp_493 = fma(temp_483, temp_488, fp_c1.data[0].z);
                // 0x000E38: 0x5080000000273737 Mufu
                temp_494 = exp2(temp_486);
                // 0x000E48: 0x5C6810000397393A Fmul
                temp_495 = temp_469 * temp_469;
                // 0x000E50: 0x5080000000473838 Mufu
                temp_496 = 1.0 / temp_493;
                // 0x000E58: 0x59A11B0003671339 Ffma
                temp_497 = 0.0 - temp_490;
                temp_498 = fma(temp_184, temp_497, temp_490);
                // 0x000E68: 0x59A11D0003A7053A Ffma
                temp_499 = 0.0 - temp_495;
                temp_500 = fma(temp_459, temp_499, temp_495);
                // 0x000E70: 0x5C58100003971334 Fadd
                temp_501 = temp_184 + temp_498;
                // 0x000E78: 0x5080000000473434 Mufu
                temp_502 = 1.0 / temp_501;
                // 0x000E88: 0x5C5C100003A70506 Fadd
                temp_503 = temp_459 + temp_500;
                temp_504 = clamp(temp_503, 0.0, 1.0);
                // 0x000E90: 0x5C68100003870739 Fmul
                temp_505 = temp_481 * temp_496;
                // 0x000E98: 0x59A11B8003771A05 Ffma
                temp_506 = 0.0 - temp_494;
                temp_507 = fma(temp_196, temp_506, temp_494);
                // 0x000EA8: 0x59A11B8003772107 Ffma
                temp_508 = 0.0 - temp_494;
                temp_509 = fma(temp_231, temp_508, temp_494);
                // 0x000EB0: 0x59A11B8003772237 Ffma
                temp_510 = 0.0 - temp_494;
                temp_511 = fma(temp_232, temp_510, temp_494);
                // 0x000EB8: 0x5C68100003973939 Fmul
                temp_512 = temp_505 * temp_505;
                // 0x000EC8: 0x5C58100000571A05 Fadd
                temp_513 = temp_196 + temp_507;
                // 0x000ED0: 0x5C58100000772107 Fadd
                temp_514 = temp_231 + temp_509;
                // 0x000ED8: 0x5C68100003472F38 Fmul
                temp_515 = temp_222 * temp_502;
                // 0x000EE8: 0x5C58100003772237 Fadd
                temp_516 = temp_232 + temp_511;
                // 0x000EF0: 0x5C68100000670034 Fmul
                temp_517 = temp_491 * temp_504;
                // 0x000EF8: 0x4C68101406970505 Fmul
                temp_518 = temp_513 * fp_c5.data[26].y;
                // 0x000F08: 0x4C68101406970707 Fmul
                temp_519 = temp_514 * fp_c5.data[26].y;
                // 0x000F10: 0x5C68100003873938 Fmul
                temp_520 = temp_512 * temp_515;
                // 0x000F18: 0x4C68101406973737 Fmul
                temp_521 = temp_516 * fp_c5.data[26].y;
                // 0x000F28: 0x49A0148400573429 Ffma
                temp_522 = fma(temp_517, fp_c1.data[1].y, temp_297);
                // 0x000F30: 0x5C68100000070505 Fmul
                temp_523 = temp_518 * temp_491;
                // 0x000F38: 0x5C68100000170707 Fmul
                temp_524 = temp_519 * temp_492;
                // 0x000F48: 0x5C68100003873638 Fmul
                temp_525 = temp_490 * temp_520;
                // 0x000F50: 0x5C68100000473737 Fmul
                temp_526 = temp_521 * temp_449;
                // 0x000F58: 0x5C68100000670101 Fmul
                temp_527 = temp_492 * temp_504;
                // 0x000F68: 0x5C68100000670404 Fmul
                temp_528 = temp_449 * temp_504;
                // 0x000F70: 0x5C68100003870500 Fmul
                temp_529 = temp_523 * temp_525;
                // 0x000F78: 0x5C68100003870707 Fmul
                temp_530 = temp_524 * temp_525;
                // 0x000F88: 0x5C68100003873738 Fmul
                temp_531 = temp_526 * temp_525;
                // 0x000F90: 0x49A0140400570128 Ffma
                temp_532 = fma(temp_527, fp_c1.data[1].y, temp_298);
                // 0x000F98: 0x49A015040057042A Ffma
                temp_533 = fma(temp_528, fp_c1.data[1].y, temp_299);
                // 0x000FA8: 0x49A0128400470025 Ffma
                temp_534 = fma(temp_529, fp_c1.data[1].x, temp_300);
                // 0x000FB0: 0x49A0130400470726 Ffma
                temp_535 = fma(temp_530, fp_c1.data[1].x, temp_301);
                // 0x000FB8: 0x49A0138400473827 Ffma
                temp_536 = fma(temp_531, fp_c1.data[1].x, temp_302);
                // 0x000FC8: 0xF0F800000007000F Sync
                temp_416 = temp_522;
                temp_417 = temp_532;
                temp_418 = temp_533;
                temp_419 = temp_534;
                temp_420 = temp_535;
                temp_421 = temp_536;
            }
            // 0x000FD0: 0xE2400FFFA789000F Bra
            temp_297 = temp_416;
            temp_298 = temp_417;
            temp_299 = temp_418;
            temp_300 = temp_419;
            temp_301 = temp_420;
            temp_302 = temp_421;
            temp_303 = temp_417;
            temp_304 = temp_419;
            temp_305 = temp_421;
            temp_306 = temp_420;
            temp_307 = temp_418;
            temp_308 = temp_416;
        }
        while (!temp_313);
        // 0x000FD8: 0xF0F800000007000F Sync
    }
    // 0x000FE8: 0x5C62578000E70D01 Fmnmx
    temp_537 = abs(temp_291);
    temp_538 = abs(temp_148);
    temp_539 = max(temp_537, temp_538);
    // 0x000FF0: 0xE003FF87CFF7FF07 Ipa
    // 0x000FF8: 0x38681040E007182F Fmul
    temp_540 = temp_158 * 7.0;
    // 0x001008: 0x5C62578001570800 Fmnmx
    temp_541 = abs(temp_107);
    temp_542 = abs(temp_109);
    temp_543 = max(temp_541, temp_542);
    // 0x001010: 0x010000000017F00C Mov32i
    // 0x001018: 0x386810408007180B Fmul
    temp_544 = temp_158 * 4.0;
    // 0x001028: 0x4C98079C02070033 Mov
    // 0x001030: 0x5C60578000170F04 Fmnmx
    temp_545 = abs(temp_293);
    temp_546 = max(temp_545, temp_539);
    // 0x001038: 0x5C60578000070901 Fmnmx
    temp_547 = abs(temp_110);
    temp_548 = max(temp_547, temp_543);
    // 0x001048: 0x5080000000470404 Mufu
    temp_549 = 1.0 / temp_546;
    // 0x001050: 0x49A011980A172823 Ffma
    temp_550 = fma(temp_303, fp_c6.data[40].y, temp_264);
    // 0x001058: 0x5080000000470102 Mufu
    temp_551 = 1.0 / temp_548;
    // 0x001068: 0x5C68100000470D0D Fmul
    temp_552 = temp_291 * temp_549;
    // 0x001070: 0x5C68100000470E0E Fmul
    temp_553 = temp_148 * temp_549;
    // 0x001078: 0x5080000000470707 Mufu
    // 0x001088: 0x5C6910000027090A Fmul
    temp_554 = 0.0 - temp_551;
    temp_555 = temp_110 * temp_554;
    // 0x001090: 0x5C68100000270808 Fmul
    temp_556 = temp_107 * temp_551;
    // 0x001098: 0x5C68100000271509 Fmul
    temp_557 = temp_109 * temp_551;
    // 0x0010A8: 0x5C69100000470F0F Fmul
    temp_558 = 0.0 - temp_549;
    temp_559 = temp_293 * temp_558;
    // 0x0010B0: 0xC0BA0163EFF70804 Tex
    temp_560 = textureLod(fp_t_tcb_16, vec3(temp_556, temp_557, temp_555), 0.0).xyz;
    temp_561 = temp_560.x;
    temp_562 = temp_560.y;
    temp_563 = temp_560.z;
    // 0x0010B8: 0x0103F0000007F028 Mov32i
    // 0x0010C8: 0xC1BA0143F2F70C0C Tex
    temp_564 = textureLod(fp_t_tcb_14, vec4(temp_552, temp_553, temp_559, float(1)), temp_540).xyz;
    temp_565 = temp_564.x;
    temp_566 = temp_564.y;
    temp_567 = temp_564.z;
    // 0x0010D0: 0xD9A20180B0A70812 Texs
    temp_568 = textureLod(fp_t_tcb_18, vec3(temp_556, temp_557, temp_555), temp_544).xyz;
    temp_569 = temp_568.x;
    temp_570 = temp_568.y;
    temp_571 = temp_568.z;
    // 0x0010D8: 0xE043FF910077FF00 Ipa
    temp_572 = in_attr9.x;
    // 0x0010E8: 0xE043FF914077FF01 Ipa
    temp_573 = in_attr9.y;
    // 0x0010F0: 0xE043FF918077FF02 Ipa
    temp_574 = in_attr9.z;
    // 0x0010F8: 0xDEBA0000C3370000 TexB
    temp_575 = texture(fp_t_cb7_20, vec3(temp_572, temp_573, temp_574)).x;
    // 0x001108: 0x32A0143F0007150F Ffma
    temp_576 = fma(temp_109, 0.5, 0.5);
    // 0x001110: 0xE04BFF904077FF09 Ipa
    temp_577 = in_attr8.y;
    temp_578 = clamp(temp_577, 0.0, 1.0);
    // 0x001118: 0x3859103F80071615 Fadd
    temp_579 = 0.0 - temp_117;
    temp_580 = temp_579 + 1.0;
    // 0x001128: 0x4C98079800A70008 Mov
    // 0x001130: 0x3859103F80071818 Fadd
    temp_581 = 0.0 - temp_158;
    temp_582 = temp_581 + 1.0;
    // 0x001138: 0x49A017180A17252E Ffma
    temp_583 = fma(temp_304, fp_c6.data[40].y, temp_294);
    // 0x001148: 0x4C98079406B7000A Mov
    // 0x001150: 0x010410676C97F028 Mov32i
    // 0x001158: 0x4C68101809071515 Fmul
    temp_584 = temp_580 * fp_c6.data[36].x;
    // 0x001168: 0x4C59101800670808 Fadd
    temp_585 = 0.0 - fp_c6.data[2].z;
    temp_586 = temp_585 + fp_c6.data[1].z;
    // 0x001170: 0x5080400000371515 Mufu
    temp_587 = abs(temp_584);
    temp_588 = log2(temp_587);
    // 0x001178: 0x5C68100001871818 Fmul
    temp_589 = temp_582 * temp_582;
    // 0x001188: 0x1E23E468DB971625 Fmul32i
    temp_590 = temp_117 * 0.193900004;
    // 0x001190: 0x49A018180A172730 Ffma
    temp_591 = fma(temp_305, fp_c6.data[40].y, temp_296);
    // 0x001198: 0x4C68101809D70A27 Fmul
    temp_592 = fp_c5.data[26].w * fp_c6.data[39].y;
    // 0x0011A8: 0x49A016980A17262D Ffma
    temp_593 = fma(temp_306, fp_c6.data[40].y, temp_295);
    // 0x0011B0: 0x51A0041800A70F08 Ffma
    temp_594 = fma(temp_576, temp_586, fp_c6.data[2].z);
    // 0x0011B8: 0x4C98079800870001 Mov
    // 0x0011C8: 0x4C98079800970002 Mov
    // 0x0011D0: 0x0103E2CD9E87F026 Mov32i
    // 0x0011D8: 0x49A012180A172A24 Ffma
    temp_595 = fma(temp_307, fp_c6.data[40].y, temp_274);
    // 0x0011E8: 0x0104066978D7F02A Mov32i
    // 0x0011F0: 0x5C68100002771E1E Fmul
    temp_596 = temp_201 * temp_592;
    // 0x0011F8: 0x4C59101800470101 Fadd
    temp_597 = 0.0 - fp_c6.data[2].x;
    temp_598 = temp_597 + fp_c6.data[1].x;
    // 0x001208: 0x4C59101800570202 Fadd
    temp_599 = 0.0 - fp_c6.data[2].y;
    temp_600 = temp_599 + fp_c6.data[1].y;
    // 0x001210: 0x4C68101809171515 Fmul
    temp_601 = temp_588 * fp_c6.data[36].y;
    // 0x001218: 0x49A010180A172920 Ffma
    temp_602 = fma(temp_308, fp_c6.data[40].y, temp_236);
    // 0x001228: 0x4C98079809970029 Mov
    // 0x001230: 0x4C9807980B470032 Mov
    // 0x001238: 0x51A0009800870F01 Ffma
    temp_603 = fma(temp_576, temp_598, fp_c6.data[2].x);
    // 0x001248: 0x51A0011800970F02 Ffma
    temp_604 = fma(temp_576, temp_600, fp_c6.data[2].y);
    // 0x001250: 0x5C6810000187180F Fmul
    temp_605 = temp_589 * temp_589;
    // 0x001258: 0x49A0140400971618 Ffma
    temp_606 = fma(temp_117, fp_c1.data[2].y, 8.40400028);
    // 0x001268: 0x4C68101809C70A28 Fmul
    temp_607 = fp_c5.data[26].w * fp_c6.data[39].x;
    // 0x001270: 0x5C90008001570015 Rro
    // 0x001278: 0xF0F0000034370000 Depbar
    // 0x001288: 0x51A219180B471010 Ffma
    temp_608 = 0.0 - fp_c6.data[45].x;
    temp_609 = fma(temp_26, fp_c6.data[45].x, temp_608);
    // 0x001290: 0x5084000000271515 Mufu
    temp_610 = exp2(temp_601);
    temp_611 = clamp(temp_610, 0.0, 1.0);
    // 0x001298: 0x49A0128400670F25 Ffma
    temp_612 = fma(temp_605, fp_c1.data[1].z, temp_590);
    // 0x0012A8: 0x51A00C0400A71627 Ffma
    temp_613 = fma(temp_117, temp_606, fp_c1.data[2].z);
    // 0x0012B0: 0x49A2130400B70F26 Ffma
    temp_614 = fma(temp_605, fp_c1.data[2].w, -0.168799996);
    // 0x0012B8: 0x49A2150400770F18 Ffma
    temp_615 = fma(temp_605, fp_c1.data[1].w, -3.60299993);
    // 0x0012C8: 0x5C68100002871B1B Fmul
    temp_616 = temp_206 * temp_607;
    // 0x0012D0: 0x4C98079408270028 Mov
    // 0x0012D8: 0x088BF05D63972525 Fadd32i
    temp_617 = temp_612 + -0.522800028;
    // 0x0012E8: 0x51A0138400C71627 Ffma
    temp_618 = fma(temp_117, temp_613, fp_c1.data[3].x);
    // 0x0012F0: 0x5C68100002670F26 Fmul
    temp_619 = temp_605 * temp_614;
    // 0x0012F8: 0x51A00C0400870F18 Ffma
    temp_620 = fma(temp_605, temp_615, fp_c1.data[2].x);
    // 0x001308: 0x51A219180B471111 Ffma
    temp_621 = 0.0 - fp_c6.data[45].x;
    temp_622 = fma(temp_27, fp_c6.data[45].x, temp_621);
    // 0x001310: 0x4C68101406972828 Fmul
    temp_623 = fp_c5.data[32].z * fp_c5.data[26].y;
    // 0x001318: 0x5C68100002571625 Fmul
    temp_624 = temp_117 * temp_617;
    // 0x001328: 0x4C68101809E70A16 Fmul
    temp_625 = fp_c5.data[26].w * fp_c6.data[39].z;
    // 0x001330: 0x4C5810140817290A Fadd
    temp_626 = fp_c6.data[38].y + fp_c5.data[32].y;
    // 0x001338: 0x5C60138002772626 Fmnmx
    temp_627 = min(temp_619, temp_618);
    // 0x001348: 0x010404000007F027 Mov32i
    // 0x001350: 0x51A219180B471414 Ffma
    temp_628 = 0.0 - fp_c6.data[45].x;
    temp_629 = fma(temp_28, fp_c6.data[45].x, temp_628);
    // 0x001358: 0x59A0128001870F18 Ffma
    temp_630 = fma(temp_605, temp_620, temp_624);
    // 0x001368: 0x5C68100001671F1F Fmul
    temp_631 = temp_234 * temp_625;
    // 0x001370: 0x5C68100001570A0A Fmul
    temp_632 = temp_626 * temp_611;
    // 0x001378: 0x386C104248072125 Fmul
    temp_633 = temp_231 * 50.0;
    temp_634 = clamp(temp_633, 0.0, 1.0);
    // 0x001388: 0x33A013C000070927 Ffma
    temp_635 = fma(temp_578, -2.0, 3.0);
    // 0x001390: 0x5C68100000970909 Fmul
    temp_636 = temp_578 * temp_578;
    // 0x001398: 0x5C5C30000FF72626 Fadd
    temp_637 = temp_627 + -0.0;
    temp_638 = clamp(temp_637, 0.0, 1.0);
    // 0x0013A8: 0x4C5C100400D71818 Fadd
    temp_639 = temp_630 + fp_c1.data[3].y;
    temp_640 = clamp(temp_639, 0.0, 1.0);
    // 0x0013B0: 0x4C68101808D70A16 Fmul
    temp_641 = temp_632 * fp_c6.data[35].y;
    // 0x0013B8: 0x4C68101808E70A15 Fmul
    temp_642 = temp_632 * fp_c6.data[35].z;
    // 0x0013C8: 0x4C68101808C70A0F Fmul
    temp_643 = temp_632 * fp_c6.data[35].x;
    // 0x0013D0: 0xE043FF900077FF0A Ipa
    temp_644 = in_attr8.x;
    // 0x0013D8: 0x5C68100000972709 Fmul
    temp_645 = temp_635 * temp_636;
    // 0x0013E8: 0xE043FF8C8077FF07 Ipa
    temp_646 = in_attr4.z;
    // 0x0013F0: 0x59A016800287162D Ffma
    temp_647 = fma(temp_641, temp_623, temp_593);
    // 0x0013F8: 0x59A0180002871530 Ffma
    temp_648 = fma(temp_642, temp_623, temp_591);
    // 0x001408: 0x59A0170002870F28 Ffma
    temp_649 = fma(temp_643, temp_623, temp_583);
    // 0x001410: 0x5C68100002672527 Fmul
    temp_650 = temp_634 * temp_638;
    // 0x001418: 0x5C59100001872618 Fadd
    temp_651 = 0.0 - temp_638;
    temp_652 = temp_651 + temp_640;
    // 0x001428: 0x49A1079408270F0F Ffma
    temp_653 = 0.0 - fp_c5.data[32].z;
    temp_654 = fma(temp_643, temp_653, temp_643);
    // 0x001430: 0x49A10B1408271616 Ffma
    temp_655 = 0.0 - fp_c5.data[32].z;
    temp_656 = fma(temp_641, temp_655, temp_641);
    // 0x001438: 0x49A10A9408271515 Ffma
    temp_657 = 0.0 - fp_c5.data[32].z;
    temp_658 = fma(temp_642, temp_657, temp_642);
    // 0x001448: 0x4C68101803770909 Fmul
    temp_659 = temp_645 * fp_c6.data[13].w;
    // 0x001450: 0x59A0138001871A1A Ffma
    temp_660 = fma(temp_196, temp_652, temp_650);
    // 0x001458: 0x5C58100000F7200F Fadd
    temp_661 = temp_602 + temp_654;
    // 0x001468: 0x59A0138001872121 Ffma
    temp_662 = fma(temp_231, temp_652, temp_650);
    // 0x001470: 0x5C58100001672316 Fadd
    temp_663 = temp_550 + temp_656;
    // 0x001478: 0x59A0138001872218 Ffma
    temp_664 = fma(temp_232, temp_652, temp_650);
    // 0x001488: 0x5C58100001572415 Fadd
    temp_665 = temp_595 + temp_658;
    // 0x001490: 0x4C68101406971A1A Fmul
    temp_666 = temp_660 * fp_c5.data[26].y;
    // 0x001498: 0xF0F0000034170000 Depbar
    // 0x0014A8: 0x49A0020400570101 Ffma
    temp_667 = fma(temp_603, fp_c1.data[1].y, temp_561);
    // 0x0014B0: 0x49A0028400570205 Ffma
    temp_668 = fma(temp_604, fp_c1.data[1].y, temp_562);
    // 0x0014B8: 0x4C68101406972102 Fmul
    temp_669 = temp_662 * fp_c5.data[26].y;
    // 0x0014C8: 0x49A0091808570C23 Ffma
    temp_670 = fma(temp_565, fp_c6.data[33].y, temp_569);
    // 0x0014D0: 0x49A0099808570D13 Ffma
    temp_671 = fma(temp_566, fp_c6.data[33].y, temp_570);
    // 0x0014D8: 0x49A0030400570806 Ffma
    temp_672 = fma(temp_594, fp_c1.data[1].y, temp_563);
    // 0x0014E8: 0x5C58100000170F01 Fadd
    temp_673 = temp_661 + temp_667;
    // 0x0014F0: 0x5C58100000571605 Fadd
    temp_674 = temp_663 + temp_668;
    // 0x0014F8: 0x49A0059808570E0B Ffma
    temp_675 = fma(temp_567, fp_c6.data[33].y, temp_571);
    // 0x001508: 0x59A0140002371A1A Ffma
    temp_676 = fma(temp_666, temp_670, temp_649);
    // 0x001510: 0x59A0168001370202 Ffma
    temp_677 = fma(temp_669, temp_671, temp_647);
    // 0x001518: 0x5C58100000671506 Fadd
    temp_678 = temp_665 + temp_672;
    // 0x001528: 0x59A1008000170304 Ffma
    temp_679 = 0.0 - temp_673;
    temp_680 = fma(temp_17, temp_679, temp_673);
    // 0x001530: 0x59A1028000570305 Ffma
    temp_681 = 0.0 - temp_674;
    temp_682 = fma(temp_17, temp_681, temp_674);
    // 0x001538: 0x4C68101406971801 Fmul
    temp_683 = temp_664 * fp_c5.data[26].y;
    // 0x001548: 0x4C98079802970008 Mov
    // 0x001550: 0x59A1030000670303 Ffma
    temp_684 = 0.0 - temp_678;
    temp_685 = fma(temp_17, temp_684, temp_678);
    // 0x001558: 0x59A00D0000471904 Ffma
    temp_686 = fma(temp_167, temp_680, temp_676);
    // 0x001568: 0x59A0010000571C02 Ffma
    temp_687 = fma(temp_212, temp_682, temp_677);
    // 0x001570: 0x59A0180000B70130 Ffma
    temp_688 = fma(temp_683, temp_675, temp_648);
    // 0x001578: 0x4C98079802870006 Mov
    // 0x001588: 0x5C68100000472B01 Fmul
    temp_689 = temp_285 * temp_686;
    // 0x001590: 0x5C68100000272C2C Fmul
    temp_690 = temp_287 * temp_687;
    // 0x001598: 0x59A0180000371D30 Ffma
    temp_691 = fma(temp_213, temp_685, temp_688);
    // 0x0015A8: 0x51A0031802871005 Ffma
    temp_692 = fma(temp_609, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0015B0: 0x4C98079802A70006 Mov
    // 0x0015B8: 0x51A0041802971104 Ffma
    temp_693 = fma(temp_622, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0015C8: 0x5C68100003071702 Fmul
    temp_694 = temp_289 * temp_691;
    // 0x0015D0: 0x51A0031802A71414 Ffma
    temp_695 = fma(temp_629, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0015D8: 0x49A0011406C71F02 Ffma
    temp_696 = fma(temp_631, fp_c5.data[27].x, temp_694);
    // 0x0015E8: 0x49A505180BC7000A Ffma
    temp_697 = 0.0 - fp_c6.data[47].x;
    temp_698 = fma(temp_575, temp_697, temp_644);
    temp_699 = clamp(temp_698, 0.0, 1.0);
    // 0x0015F0: 0x49A0009406C71B00 Ffma
    temp_700 = fma(temp_616, fp_c5.data[27].x, temp_689);
    // 0x0015F8: 0x5080000000370A0A Mufu
    temp_701 = log2(temp_699);
    // 0x001608: 0x49A0161406C71E01 Ffma
    temp_702 = fma(temp_596, fp_c5.data[27].x, temp_690);
    // 0x001610: 0x5C58300000570003 Fadd
    temp_703 = 0.0 - temp_692;
    temp_704 = temp_700 + temp_703;
    // 0x001618: 0x5C58300000470106 Fadd
    temp_705 = 0.0 - temp_693;
    temp_706 = temp_702 + temp_705;
    // 0x001628: 0x49A002980BF70308 Ffma
    temp_707 = fma(temp_704, fp_c6.data[47].w, temp_692);
    // 0x001630: 0x4C68101803170A0B Fmul
    temp_708 = temp_701 * fp_c6.data[12].y;
    // 0x001638: 0x49A002180BF70606 Ffma
    temp_709 = fma(temp_706, fp_c6.data[47].w, temp_693);
    // 0x001648: 0x5C58300001470203 Fadd
    temp_710 = 0.0 - temp_695;
    temp_711 = temp_696 + temp_710;
    // 0x001650: 0x5C60178000870508 Fmnmx
    temp_712 = max(temp_692, temp_707);
    // 0x001658: 0x49A2049803470905 Ffma
    temp_713 = 0.0 - temp_659;
    temp_714 = fma(temp_659, fp_c6.data[13].x, temp_713);
    // 0x001668: 0x5C90008000B7000A Rro
    // 0x001670: 0x49A00A180BF70303 Ffma
    temp_715 = fma(temp_711, fp_c6.data[47].w, temp_695);
    // 0x001678: 0x5080000000270A0A Mufu
    temp_716 = exp2(temp_708);
    // 0x001688: 0x5C60178000670406 Fmnmx
    temp_717 = max(temp_693, temp_709);
    // 0x001690: 0x49A2049803570904 Ffma
    temp_718 = 0.0 - temp_659;
    temp_719 = fma(temp_659, fp_c6.data[13].y, temp_718);
    // 0x001698: 0x49A2049803670909 Ffma
    temp_720 = 0.0 - temp_659;
    temp_721 = fma(temp_659, fp_c6.data[13].z, temp_720);
    // 0x0016A8: 0x59A0040000570805 Ffma
    temp_722 = fma(temp_712, temp_714, temp_712);
    // 0x0016B0: 0x5C60178000371403 Fmnmx
    temp_723 = max(temp_695, temp_715);
    // 0x0016B8: 0x59A0030000470604 Ffma
    temp_724 = fma(temp_717, temp_719, temp_717);
    // 0x0016C8: 0x59A0018000970309 Ffma
    temp_725 = fma(temp_723, temp_721, temp_723);
    // 0x0016D0: 0x4C68101802B70A06 Fmul
    temp_726 = temp_716 * fp_c6.data[10].w;
    // 0x0016D8: 0x5C59100000470104 Fadd
    temp_727 = 0.0 - temp_702;
    temp_728 = temp_727 + temp_724;
    // 0x0016E8: 0x5C59100000570003 Fadd
    temp_729 = 0.0 - temp_700;
    temp_730 = temp_729 + temp_722;
    // 0x0016F0: 0x5C59100000970205 Fadd
    temp_731 = 0.0 - temp_696;
    temp_732 = temp_731 + temp_725;
    // 0x0016F8: 0x59A0008000670401 Ffma
    temp_733 = fma(temp_728, temp_726, temp_702);
    // 0x001708: 0x4C58100C03870704 Fadd
    temp_734 = temp_646 + fp_c3.data[14].x;
    // 0x001710: 0x59A0000000670300 Ffma
    temp_735 = fma(temp_730, temp_726, temp_700);
    // 0x001718: 0x0103F8000007F003 Mov32i
    // 0x001728: 0x59A0010000670502 Ffma
    temp_736 = fma(temp_732, temp_726, temp_696);
    // 0x001730: 0x0103F4000007F005 Mov32i
    // 0x001738: 0x5C9807800FF70006 Mov
    // 0x001748: 0x0103F8000007F007 Mov32i
    // 0x001750: 0x49A37F8C03C70404 Ffma
    temp_737 = 0.0 - fp_c3.data[15].x;
    temp_738 = fma(temp_734, temp_737, -0.0);
    // 0x001758: 0xE30000000007000F Exit
    out_attr0.x = temp_735;
    out_attr0.y = temp_733;
    out_attr0.z = temp_736;
    out_attr0.w = 1.0;
    out_attr1.x = temp_738;
    out_attr1.y = 0.75;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
