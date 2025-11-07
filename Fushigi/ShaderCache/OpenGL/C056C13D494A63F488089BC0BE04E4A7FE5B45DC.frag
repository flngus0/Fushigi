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
layout (binding = 6) uniform sampler2DArray fp_t_tcb_28;
layout (binding = 7) uniform sampler2D fp_t_tcb_20;
layout (binding = 8) uniform samplerCube fp_t_tcb_16;
layout (binding = 9) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 10) uniform samplerCube fp_t_tcb_18;
layout (binding = 11) uniform sampler3D fp_t_cb7_20;
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
    precise vec3 temp_40;
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
    bool temp_71;
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
    uint temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    int temp_151;
    precise float temp_152;
    int temp_153;
    uint temp_154;
    uint temp_155;
    int temp_156;
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
    precise float temp_205;
    precise float temp_206;
    bool temp_207;
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
    int temp_306;
    bool temp_307;
    int temp_308;
    int temp_309;
    int temp_310;
    int temp_311;
    int temp_312;
    uint temp_313;
    uint temp_314;
    int temp_315;
    precise float temp_316;
    precise float temp_317;
    precise float temp_318;
    precise float temp_319;
    int temp_320;
    int temp_321;
    uint temp_322;
    uint temp_323;
    int temp_324;
    precise float temp_325;
    int temp_326;
    uint temp_327;
    int temp_328;
    precise float temp_329;
    int temp_330;
    uint temp_331;
    uint temp_332;
    int temp_333;
    precise float temp_334;
    int temp_335;
    uint temp_336;
    int temp_337;
    precise float temp_338;
    int temp_339;
    uint temp_340;
    uint temp_341;
    int temp_342;
    precise float temp_343;
    int temp_344;
    uint temp_345;
    int temp_346;
    precise float temp_347;
    precise float temp_348;
    precise float temp_349;
    int temp_350;
    uint temp_351;
    uint temp_352;
    int temp_353;
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
    int temp_373;
    uint temp_374;
    uint temp_375;
    int temp_376;
    precise float temp_377;
    int temp_378;
    uint temp_379;
    int temp_380;
    precise float temp_381;
    precise float temp_382;
    precise float temp_383;
    int temp_384;
    uint temp_385;
    uint temp_386;
    int temp_387;
    precise float temp_388;
    int temp_389;
    uint temp_390;
    int temp_391;
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
    uint temp_408;
    int temp_409;
    precise float temp_410;
    bool temp_411;
    uint temp_412;
    precise float temp_413;
    precise float temp_414;
    precise float temp_415;
    precise float temp_416;
    precise float temp_417;
    precise float temp_418;
    precise float temp_419;
    uint temp_420;
    precise float temp_421;
    bool temp_422;
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
    precise float temp_453;
    precise float temp_454;
    precise float temp_455;
    precise float temp_456;
    precise float temp_457;
    precise float temp_458;
    uint temp_459;
    uint temp_460;
    int temp_461;
    precise float temp_462;
    int temp_463;
    uint temp_464;
    int temp_465;
    precise float temp_466;
    precise float temp_467;
    int temp_468;
    uint temp_469;
    uint temp_470;
    int temp_471;
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
    precise vec3 temp_558;
    precise float temp_559;
    precise float temp_560;
    precise float temp_561;
    precise vec3 temp_562;
    precise float temp_563;
    precise float temp_564;
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
    // 0x000008: 0xE003FF87CFF7FF10 Ipa
    // 0x000010: 0xE003FF870FF7FF09 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000018: 0xE003FF874FF7FF0A Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000028: 0x5080000000471010 Mufu
    // 0x000030: 0x4C68100C04A70909 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000038: 0x4C68100C04B70A0A Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000048: 0xE043FF91C107FF00 Ipa
    temp_8 = in_attr9.w;
    // 0x000050: 0xE043FF8E4107FF17 Ipa
    temp_9 = in_attr6.y;
    // 0x000058: 0xE043FF8E0107FF19 Ipa
    temp_10 = in_attr6.x;
    // 0x000068: 0xE043FF8E8107FF14 Ipa
    temp_11 = in_attr6.z;
    // 0x000070: 0xE043FF8EC107FF15 Ipa
    temp_12 = in_attr6.w;
    // 0x000078: 0xE043FF8F4107FF01 Ipa
    temp_13 = in_attr7.y;
    // 0x000088: 0xE043FF8F0107FF1B Ipa
    temp_14 = in_attr7.x;
    // 0x000090: 0xE043FF8F0107FF27 Ipa
    temp_15 = in_attr7.x;
    // 0x000098: 0x5CB0100000070918 F2i
    temp_16 = roundEven(temp_8);
    temp_17 = max(temp_16, 0.0);
    temp_18 = uint(temp_17);
    temp_19 = clamp(temp_18, 0u, 0xFFFFu);
    // 0x0000A8: 0xD8F0026FF1771806 Texs
    temp_20 = texture(fp_t_tcb_26, vec3(temp_10, temp_9, float(int(temp_19)))).xy;
    temp_21 = temp_20.x;
    temp_22 = temp_20.y;
    // 0x0000B0: 0xD83002CFF1571414 Texs
    temp_23 = texture(fp_t_tcb_2C, vec2(temp_11, temp_12)).xy;
    temp_24 = temp_23.x;
    temp_25 = temp_23.y;
    // 0x0000B8: 0xD822030081771904 Texs
    temp_26 = texture(fp_t_tcb_30, vec2(temp_10, temp_9)).xyz;
    temp_27 = temp_26.x;
    temp_28 = temp_26.y;
    temp_29 = temp_26.z;
    // 0x0000C8: 0x5C9807800187001A Mov
    // 0x0000D0: 0x5C98078001870026 Mov
    // 0x0000D8: 0xD8EC02AFF0171A03 Texs
    temp_30 = texture(fp_t_tcb_2A, vec3(temp_14, temp_13, float(int(temp_19)))).w;
    // 0x0000E8: 0xD8E40360B1771822 Texs
    temp_31 = texture(fp_t_tcb_36, vec3(temp_10, temp_9, float(int(temp_19)))).xyw;
    temp_32 = temp_31.x;
    temp_33 = temp_31.y;
    temp_34 = temp_31.z;
    // 0x0000F0: 0xD8E2024FF0172611 Texs
    temp_35 = texture(fp_t_tcb_24, vec3(temp_15, temp_13, float(int(temp_19)))).x;
    // 0x0000F8: 0xD8E202813177180C Texs
    temp_36 = texture(fp_t_tcb_28, vec3(temp_10, temp_9, float(int(temp_19)))).xyz;
    temp_37 = temp_36.x;
    temp_38 = temp_36.y;
    temp_39 = temp_36.z;
    // 0x000108: 0xD822020000A7091E Texs
    temp_40 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_41 = temp_40.x;
    temp_42 = temp_40.y;
    temp_43 = temp_40.z;
    // 0x000110: 0xE043FF8A0107FF1C Ipa
    temp_44 = in_attr2.x;
    // 0x000118: 0xE043FF890107FF16 Ipa
    temp_45 = in_attr1.x;
    // 0x000128: 0xE043FF8A4107FF1D Ipa
    temp_46 = in_attr2.y;
    // 0x000130: 0xE043FF880107FF0E Ipa
    temp_47 = in_attr0.x;
    // 0x000138: 0xE043FF894107FF02 Ipa
    temp_48 = in_attr1.y;
    // 0x000148: 0xE043FF8A8107FF12 Ipa
    temp_49 = in_attr2.z;
    // 0x000150: 0xE043FF898107FF0F Ipa
    temp_50 = in_attr1.z;
    // 0x000158: 0xE043FF8B0107FF21 Ipa
    temp_51 = in_attr3.x;
    // 0x000168: 0xE043FF8B4107FF20 Ipa
    temp_52 = in_attr3.y;
    // 0x000170: 0xE043FF884107FF01 Ipa
    temp_53 = in_attr0.y;
    // 0x000178: 0x5C68100001C71C17 Fmul
    temp_54 = temp_44 * temp_44;
    // 0x000188: 0x5C68100001671619 Fmul
    temp_55 = temp_45 * temp_45;
    // 0x000190: 0x59A00B8001D71D17 Ffma
    temp_56 = fma(temp_46, temp_46, temp_54);
    // 0x000198: 0x59A00C8000270219 Ffma
    temp_57 = fma(temp_48, temp_48, temp_55);
    // 0x0001A8: 0x59A00B8001271217 Ffma
    temp_58 = fma(temp_49, temp_49, temp_56);
    // 0x0001B0: 0x59A00C8000F70F19 Ffma
    temp_59 = fma(temp_50, temp_50, temp_57);
    // 0x0001B8: 0x5080000000571717 Mufu
    temp_60 = inversesqrt(temp_58);
    // 0x0001C8: 0x5080000000571919 Mufu
    temp_61 = inversesqrt(temp_59);
    // 0x0001D0: 0x5C68100001771C1C Fmul
    temp_62 = temp_44 * temp_60;
    // 0x0001D8: 0x5C68100001771D24 Fmul
    temp_63 = temp_46 * temp_60;
    // 0x0001E8: 0x5C68100001971616 Fmul
    temp_64 = temp_45 * temp_61;
    // 0x0001F0: 0x5C68100001771212 Fmul
    temp_65 = temp_49 * temp_60;
    // 0x0001F8: 0x5C68100001970202 Fmul
    temp_66 = temp_48 * temp_61;
    // 0x000208: 0x5C68100001970F0F Fmul
    temp_67 = temp_50 * temp_61;
    // 0x000210: 0xF0F0000034470000 Depbar
    // 0x000218: 0x5C6810000077071B Fmul
    temp_68 = temp_22 * temp_22;
    // 0x000228: 0x49A0031407C71414 Ffma
    temp_69 = fma(temp_24, fp_c5.data[31].x, temp_21);
    // 0x000230: 0x49A0039407C71515 Ffma
    temp_70 = fma(temp_25, fp_c5.data[31].x, temp_22);
    // 0x000238: 0x4BB1839406070307 Fsetp
    temp_71 = temp_30 < fp_c5.data[24].x;
    // 0x000248: 0x59A00D800067061B Ffma
    temp_72 = fma(temp_21, temp_21, temp_68);
    // 0x000250: 0xE043FF888107FF06 Ipa
    temp_73 = in_attr0.z;
    // 0x000258: 0x5C68100001471407 Fmul
    temp_74 = temp_69 * temp_69;
    // 0x000268: 0x385D103F80071B1B Fadd
    temp_75 = 0.0 - temp_72;
    temp_76 = temp_75 + 1.0;
    temp_77 = clamp(temp_76, 0.0, 1.0);
    // 0x000270: 0x59A0038001571518 Ffma
    temp_78 = fma(temp_70, temp_70, temp_74);
    // 0x000278: 0x5080000000871B1B Mufu
    temp_79 = sqrt(temp_77);
    // 0x000288: 0x5C68100000E70E07 Fmul
    temp_80 = temp_47 * temp_47;
    // 0x000290: 0x59A0038000170107 Ffma
    temp_81 = fma(temp_53, temp_53, temp_80);
    // 0x000298: 0x59A00C0001B71B18 Ffma
    temp_82 = fma(temp_79, temp_79, temp_78);
    // 0x0002A8: 0x508000000057181A Mufu
    temp_83 = inversesqrt(temp_82);
    // 0x0002B0: 0x59A0038000670625 Ffma
    temp_84 = fma(temp_73, temp_73, temp_81);
    // 0x0002B8: 0xE043FF8B8107FF07 Ipa
    temp_85 = in_attr3.z;
    // 0x0002C8: 0x5C68100001A71515 Fmul
    temp_86 = temp_70 * temp_83;
    // 0x0002D0: 0x5080000000572527 Mufu
    temp_87 = inversesqrt(temp_84);
    // 0x0002D8: 0x5C68100001A71414 Fmul
    temp_88 = temp_69 * temp_83;
    // 0x0002E8: 0x5C68100001A71B1A Fmul
    temp_89 = temp_79 * temp_83;
    // 0x0002F0: 0x5C68100001C7151D Fmul
    temp_90 = temp_86 * temp_62;
    // 0x0002F8: 0x5C68100002471517 Fmul
    temp_91 = temp_86 * temp_63;
    // 0x000308: 0x5C68100001271512 Fmul
    temp_92 = temp_86 * temp_65;
    // 0x000310: 0x59A00E800167141D Ffma
    temp_93 = fma(temp_88, temp_64, temp_90);
    // 0x000318: 0x5C68100002770E18 Fmul
    temp_94 = temp_47 * temp_87;
    // 0x000328: 0x59A00B8000271417 Ffma
    temp_95 = fma(temp_88, temp_66, temp_91);
    // 0x000330: 0x5C68100002770101 Fmul
    temp_96 = temp_53 * temp_87;
    // 0x000338: 0x5C68100002172102 Fmul
    temp_97 = temp_51 * temp_51;
    // 0x000348: 0x5C68100002770615 Fmul
    temp_98 = temp_73 * temp_87;
    // 0x000350: 0x59A0090000F7140F Ffma
    temp_99 = fma(temp_88, temp_67, temp_92);
    // 0x000358: 0x59A00E8001871A18 Ffma
    temp_100 = fma(temp_89, temp_94, temp_93);
    // 0x000368: 0x59A00B8000171A17 Ffma
    temp_101 = fma(temp_89, temp_96, temp_95);
    // 0x000370: 0x59A0010002072002 Ffma
    temp_102 = fma(temp_52, temp_52, temp_97);
    // 0x000378: 0x59A0078001571A0F Ffma
    temp_103 = fma(temp_89, temp_98, temp_99);
    // 0x000388: 0x5C68100001871801 Fmul
    temp_104 = temp_100 * temp_100;
    // 0x000390: 0x59A0010000770712 Ffma
    temp_105 = fma(temp_85, temp_85, temp_102);
    // 0x000398: 0x4C68101403170502 Fmul
    temp_106 = temp_28 * fp_c5.data[12].y;
    // 0x0003A8: 0x5080000000571212 Mufu
    temp_107 = inversesqrt(temp_105);
    // 0x0003B0: 0x59A0008001771701 Ffma
    temp_108 = fma(temp_101, temp_101, temp_104);
    // 0x0003B8: 0x59A0008000F70F06 Ffma
    temp_109 = fma(temp_103, temp_103, temp_108);
    // 0x0003C8: 0x4C68101403070401 Fmul
    temp_110 = temp_27 * fp_c5.data[12].x;
    // 0x0003D0: 0x5080000000570606 Mufu
    temp_111 = inversesqrt(temp_109);
    // 0x0003D8: 0x5C69100001272121 Fmul
    temp_112 = 0.0 - temp_107;
    temp_113 = temp_51 * temp_112;
    // 0x0003E8: 0x5C69100001272020 Fmul
    temp_114 = 0.0 - temp_107;
    temp_115 = temp_52 * temp_114;
    // 0x0003F0: 0x5C69100001270716 Fmul
    temp_116 = 0.0 - temp_107;
    temp_117 = temp_85 * temp_116;
    // 0x0003F8: 0x5C6810000067180E Fmul
    temp_118 = temp_100 * temp_111;
    // 0x000408: 0x5C68100000671704 Fmul
    temp_119 = temp_101 * temp_111;
    // 0x000410: 0x5C68100000670F12 Fmul
    temp_120 = temp_103 * temp_111;
    // 0x000418: 0xE24000000708000F Bra
    if (temp_71)
    {
        // 0x000428: 0x5C9807800FF70000 Mov
        // 0x000430: 0xE33000000007000F Kil
        discard;
    }
    // 0x000490: 0x4C58301805C72105 Fadd
    temp_121 = 0.0 - fp_c6.data[23].x;
    temp_122 = temp_113 + temp_121;
    // 0x000498: 0xE2900000BC000000 Ssy
    // 0x0004A8: 0x4C58301805D72006 Fadd
    temp_123 = 0.0 - fp_c6.data[23].y;
    temp_124 = temp_115 + temp_123;
    // 0x0004B0: 0x4C58301805E71607 Fadd
    temp_125 = 0.0 - fp_c6.data[23].z;
    temp_126 = temp_117 + temp_125;
    // 0x0004B8: 0xF0F0000034270000 Depbar
    // 0x0004C8: 0x4C6810180A072222 Fmul
    temp_127 = temp_32 * fp_c6.data[40].x;
    // 0x0004D0: 0x01040DF760C7F01C Mov32i
    // 0x0004D8: 0x3868104110070A0A Fmul
    temp_128 = temp_7 * 9.0;
    // 0x0004E8: 0x5C6810000057050F Fmul
    temp_129 = temp_122 * temp_122;
    // 0x0004F0: 0x5CA8148000A70A1A F2f
    temp_130 = floor(temp_128);
    // 0x0004F8: 0x3868104180070909 Fmul
    temp_131 = temp_6 * 16.0;
    // 0x000508: 0x5C68100001170B0B Fmul
    temp_132 = temp_34 * temp_35;
    // 0x000510: 0x5CA8148000970A09 F2f
    temp_133 = floor(temp_131);
    // 0x000518: 0x4C69101805C70E11 Fmul
    temp_134 = 0.0 - fp_c6.data[23].x;
    temp_135 = temp_118 * temp_134;
    // 0x000528: 0x4C58301407870118 Fadd
    temp_136 = 0.0 - fp_c5.data[30].x;
    temp_137 = temp_110 + temp_136;
    // 0x000530: 0x59A0078000670614 Ffma
    temp_138 = fma(temp_124, temp_124, temp_129);
    // 0x000538: 0x4C68101403270808 Fmul
    temp_139 = temp_29 * fp_c5.data[12].z;
    // 0x000548: 0xF0F0000034170000 Depbar
    // 0x000550: 0x4C68101801671313 Fmul
    temp_140 = temp_39 * fp_c6.data[5].z;
    // 0x000558: 0x5C9807800FF70027 Mov
    // 0x000568: 0x59A00A0000770714 Ffma
    temp_141 = fma(temp_126, temp_126, temp_138);
    // 0x000570: 0x5080000000571414 Mufu
    temp_142 = inversesqrt(temp_141);
    // 0x000578: 0x32A004C180071A30 Ffma
    temp_143 = fma(temp_130, 16.0, temp_133);
    // 0x000588: 0x5CB0118003070A30 F2i
    temp_144 = trunc(temp_143);
    temp_145 = max(temp_144, 0.0);
    temp_146 = uint(temp_145);
    // 0x000590: 0x5C6810000147050F Fmul
    temp_147 = temp_122 * temp_142;
    // 0x000598: 0x386013BF80072205 Fmnmx
    temp_148 = min(temp_127, 1.0);
    // 0x0005A8: 0x5C68100001470606 Fmul
    temp_149 = temp_124 * temp_142;
    // 0x0005B0: 0x5C68100001470715 Fmul
    temp_150 = temp_126 * temp_142;
    // 0x0005B8: 0x384800000087302F Shl
    temp_151 = int(temp_146) << 8;
    // 0x0005C8: 0x5C68100000F72117 Fmul
    temp_152 = temp_113 * temp_147;
    // 0x0005D0: 0xEF94008200472F2F Ldc
    temp_153 = temp_151 + 0x2004;
    temp_154 = uint(temp_153) >> 2;
    temp_155 = temp_154 >> 2;
    temp_156 = int(temp_154) & 3;
    temp_157 = fp_c8.data[int(temp_155)][temp_156];
    // 0x0005D8: 0x4C60178400170505 Fmnmx
    temp_158 = max(temp_148, fp_c1.data[0].y);
    // 0x0005E8: 0x5C68100000F70E19 Fmul
    temp_159 = temp_118 * temp_147;
    // 0x0005F0: 0x4C69101805C70F0F Fmul
    temp_160 = 0.0 - fp_c6.data[23].x;
    temp_161 = temp_147 * temp_160;
    // 0x0005F8: 0x59A00B8000672017 Ffma
    temp_162 = fma(temp_115, temp_149, temp_152);
    // 0x000608: 0x51A4028400170507 Ffma
    temp_163 = fma(temp_158, temp_158, fp_c1.data[0].y);
    temp_164 = clamp(temp_163, 0.0, 1.0);
    // 0x000610: 0x59A00C8000670414 Ffma
    temp_165 = fma(temp_119, temp_149, temp_159);
    // 0x000618: 0x49A1079805D7060F Ffma
    temp_166 = 0.0 - fp_c6.data[23].y;
    temp_167 = fma(temp_149, temp_166, temp_161);
    // 0x000628: 0x59A40B8001571617 Ffma
    temp_168 = fma(temp_117, temp_150, temp_162);
    temp_169 = clamp(temp_168, 0.0, 1.0);
    // 0x000630: 0x5C68100000770719 Fmul
    temp_170 = temp_164 * temp_164;
    // 0x000638: 0x59A40A0001571214 Ffma
    temp_171 = fma(temp_120, temp_150, temp_165);
    temp_172 = clamp(temp_171, 0.0, 1.0);
    // 0x000648: 0x49A5079805E7150F Ffma
    temp_173 = 0.0 - fp_c6.data[23].z;
    temp_174 = fma(temp_150, temp_173, temp_167);
    temp_175 = clamp(temp_174, 0.0, 1.0);
    // 0x000650: 0x49A1089805D70415 Ffma
    temp_176 = 0.0 - fp_c6.data[23].y;
    temp_177 = fma(temp_119, temp_176, temp_135);
    // 0x000658: 0x49A20E0400071706 Ffma
    temp_178 = fma(temp_169, fp_c1.data[0].x, -6.98316002);
    // 0x000668: 0x59A20A0001971419 Ffma
    temp_179 = 0.0 - temp_172;
    temp_180 = fma(temp_172, temp_170, temp_179);
    // 0x000670: 0x49A20E0400070F0A Ffma
    temp_181 = fma(temp_175, fp_c1.data[0].x, -6.98316002);
    // 0x000678: 0x5C68100000671717 Fmul
    temp_182 = temp_169 * temp_178;
    // 0x000688: 0x5C68100002170E06 Fmul
    temp_183 = temp_118 * temp_113;
    // 0x000690: 0x51A00C8400271419 Ffma
    temp_184 = fma(temp_172, temp_180, fp_c1.data[0].z);
    // 0x000698: 0x5C68100000A70F0A Fmul
    temp_185 = temp_175 * temp_181;
    // 0x0006A8: 0x5080000000471919 Mufu
    temp_186 = 1.0 / temp_184;
    // 0x0006B0: 0x49A50A9805E7120F Ffma
    temp_187 = 0.0 - fp_c6.data[23].z;
    temp_188 = fma(temp_120, temp_187, temp_177);
    temp_189 = clamp(temp_188, 0.0, 1.0);
    // 0x0006B8: 0x5C90008001770014 Rro
    // 0x0006C8: 0x0103F0000007F017 Mov32i
    // 0x0006D0: 0x5080000000271414 Mufu
    temp_190 = exp2(temp_182);
    // 0x0006D8: 0x59A0030002070409 Ffma
    temp_191 = fma(temp_119, temp_115, temp_183);
    // 0x0006E8: 0x51A00C1407872306 Ffma
    temp_192 = fma(temp_33, temp_137, fp_c5.data[30].x);
    // 0x0006F0: 0x5C90008000A7001D Rro
    // 0x0006F8: 0x32A00BBF00070531 Ffma
    temp_193 = fma(temp_158, 0.5, 0.5);
    // 0x000708: 0x4C68101801470F17 Fmul
    temp_194 = temp_189 * fp_c6.data[5].x;
    // 0x000710: 0x5C68100001970711 Fmul
    temp_195 = temp_164 * temp_186;
    // 0x000718: 0x59A4048001671207 Ffma
    temp_196 = fma(temp_120, temp_117, temp_191);
    temp_197 = clamp(temp_196, 0.0, 1.0);
    // 0x000728: 0x4C58301407870209 Fadd
    temp_198 = 0.0 - fp_c5.data[30].x;
    temp_199 = temp_106 + temp_198;
    // 0x000730: 0x5C68120003173131 Fmul
    temp_200 = temp_193 * 0.5;
    temp_201 = temp_200 * temp_193;
    // 0x000738: 0x59A10A0000671415 Ffma
    temp_202 = 0.0 - temp_192;
    temp_203 = fma(temp_190, temp_202, temp_190);
    // 0x000748: 0x1E23EA2F9837171C Fmul32i
    temp_204 = temp_194 * 0.318309873;
    // 0x000750: 0x5080000000271D17 Mufu
    temp_205 = exp2(temp_185);
    // 0x000758: 0x5C68100001171111 Fmul
    temp_206 = temp_195 * temp_195;
    // 0x000768: 0x5B6603800FF72F07 Isetp
    temp_207 = floatBitsToUint(temp_157) <= 0u;
    // 0x000770: 0x51A0049407872309 Ffma
    temp_208 = fma(temp_33, temp_199, fp_c5.data[30].x);
    // 0x000778: 0x59A1038003170718 Ffma
    temp_209 = 0.0 - temp_201;
    temp_210 = fma(temp_197, temp_209, temp_197);
    // 0x000788: 0x5C58100001570619 Fadd
    temp_211 = temp_192 + temp_203;
    // 0x000790: 0x4C58301407870815 Fadd
    temp_212 = 0.0 - fp_c5.data[30].x;
    temp_213 = temp_139 + temp_212;
    // 0x000798: 0x59A1078003170F1A Ffma
    temp_214 = 0.0 - temp_201;
    temp_215 = fma(temp_189, temp_214, temp_189);
    // 0x0007A8: 0x4C68101801670F1D Fmul
    temp_216 = temp_189 * fp_c6.data[5].z;
    // 0x0007B0: 0x5C6810000077042A Fmul
    temp_217 = temp_119 * temp_197;
    // 0x0007B8: 0x4C6810140627191B Fmul
    temp_218 = temp_211 * fp_c5.data[24].z;
    // 0x0007C8: 0x5C58100001873119 Fadd
    temp_219 = temp_201 + temp_210;
    // 0x0007D0: 0x51A00A940787230A Ffma
    temp_220 = fma(temp_33, temp_213, fp_c5.data[30].x);
    // 0x0007D8: 0x5080000000471919 Mufu
    temp_221 = 1.0 / temp_219;
    // 0x0007E8: 0x59A10A0000971418 Ffma
    temp_222 = 0.0 - temp_208;
    temp_223 = fma(temp_190, temp_222, temp_190);
    // 0x0007F0: 0x32A2104000072A2A Ffma
    temp_224 = 0.0 - temp_115;
    temp_225 = fma(temp_217, 2.0, temp_224);
    // 0x0007F8: 0x59A10E0001C71B15 Ffma
    temp_226 = 0.0 - temp_204;
    temp_227 = fma(temp_218, temp_226, temp_204);
    // 0x000808: 0x5C58100001A7311B Fadd
    temp_228 = temp_201 + temp_215;
    // 0x000810: 0xEF5400000007FF15 Stl
    local_memory[0] = floatBitsToUint(temp_227);
    // 0x000818: 0x59A10A0000A71414 Ffma
    temp_229 = 0.0 - temp_220;
    temp_230 = fma(temp_190, temp_229, temp_190);
    // 0x000828: 0x5080000000471B24 Mufu
    temp_231 = 1.0 / temp_228;
    // 0x000830: 0x59A10B800097171A Ffma
    temp_232 = 0.0 - temp_208;
    temp_233 = fma(temp_205, temp_232, temp_205);
    // 0x000838: 0x4C68101801570F1C Fmul
    temp_234 = temp_189 * fp_c6.data[5].y;
    // 0x000848: 0x5C58100001870918 Fadd
    temp_235 = temp_208 + temp_223;
    // 0x000850: 0x3868103F0007192E Fmul
    temp_236 = temp_221 * 0.5;
    // 0x000858: 0x5C58100001470A19 Fadd
    temp_237 = temp_220 + temp_230;
    // 0x000868: 0x5C58100001A7091A Fadd
    temp_238 = temp_208 + temp_233;
    // 0x000870: 0x59A10B8000671715 Ffma
    temp_239 = 0.0 - temp_192;
    temp_240 = fma(temp_205, temp_239, temp_205);
    // 0x000878: 0x59A10B8000A71717 Ffma
    temp_241 = 0.0 - temp_220;
    temp_242 = fma(temp_205, temp_241, temp_205);
    // 0x000888: 0x1E23EA2F98371C37 Fmul32i
    temp_243 = temp_234 * 0.318309873;
    // 0x000890: 0x1E23EA2F98371D1B Fmul32i
    temp_244 = temp_216 * 0.318309873;
    // 0x000898: 0x5C68100002472E14 Fmul
    temp_245 = temp_236 * temp_231;
    // 0x0008A8: 0x4C68101406271A1A Fmul
    temp_246 = temp_238 * fp_c5.data[24].z;
    // 0x0008B0: 0x5C58100001570615 Fadd
    temp_247 = temp_192 + temp_240;
    // 0x0008B8: 0x5C58100001770A17 Fadd
    temp_248 = temp_220 + temp_242;
    // 0x0008C8: 0x4C68101406271818 Fmul
    temp_249 = temp_235 * fp_c5.data[24].z;
    // 0x0008D0: 0x4C68101406271919 Fmul
    temp_250 = temp_237 * fp_c5.data[24].z;
    // 0x0008D8: 0x5C68100001471111 Fmul
    temp_251 = temp_206 * temp_245;
    // 0x0008E8: 0x4C68101801571A1A Fmul
    temp_252 = temp_246 * fp_c6.data[5].y;
    // 0x0008F0: 0x4C68101406271515 Fmul
    temp_253 = temp_247 * fp_c5.data[24].z;
    // 0x0008F8: 0x4C68101406271717 Fmul
    temp_254 = temp_248 * fp_c5.data[24].z;
    // 0x000908: 0x59A11B8003771837 Ffma
    temp_255 = 0.0 - temp_243;
    temp_256 = fma(temp_249, temp_255, temp_243);
    // 0x000910: 0x59A10D8001B71929 Ffma
    temp_257 = 0.0 - temp_244;
    temp_258 = fma(temp_250, temp_257, temp_244);
    // 0x000918: 0x5C68100001170F14 Fmul
    temp_259 = temp_189 * temp_251;
    // 0x000928: 0x5C68100000770E0F Fmul
    temp_260 = temp_118 * temp_197;
    // 0x000930: 0x385D103F80070B11 Fadd
    temp_261 = 0.0 - temp_132;
    temp_262 = temp_261 + 1.0;
    temp_263 = clamp(temp_262, 0.0, 1.0);
    // 0x000938: 0x4C68101801470C0B Fmul
    temp_264 = temp_37 * fp_c6.data[5].x;
    // 0x000948: 0x4C68101801471515 Fmul
    temp_265 = temp_253 * fp_c6.data[5].x;
    // 0x000950: 0x4C68101801671726 Fmul
    temp_266 = temp_254 * fp_c6.data[5].z;
    // 0x000958: 0x5C68100000771217 Fmul
    temp_267 = temp_120 * temp_197;
    // 0x000968: 0x32A210C000070F2D Ffma
    temp_268 = 0.0 - temp_113;
    temp_269 = fma(temp_260, 2.0, temp_268);
    // 0x000970: 0x4C68101801570D0F Fmul
    temp_270 = temp_38 * fp_c6.data[5].y;
    // 0x000978: 0x49A2089402C7110C Ffma
    temp_271 = 0.0 - temp_263;
    temp_272 = fma(temp_263, fp_c5.data[11].x, temp_271);
    // 0x000988: 0x49A2089402D7110D Ffma
    temp_273 = 0.0 - temp_263;
    temp_274 = fma(temp_263, fp_c5.data[11].y, temp_273);
    // 0x000990: 0x49A2089402E71111 Ffma
    temp_275 = 0.0 - temp_263;
    temp_276 = fma(temp_263, fp_c5.data[11].z, temp_275);
    // 0x000998: 0x5C68100001471528 Fmul
    temp_277 = temp_265 * temp_259;
    // 0x0009A8: 0x5C68100001471A25 Fmul
    temp_278 = temp_252 * temp_259;
    // 0x0009B0: 0x5C68100001472626 Fmul
    temp_279 = temp_266 * temp_259;
    // 0x0009B8: 0x3858103F80070C0C Fadd
    temp_280 = temp_272 + 1.0;
    // 0x0009C8: 0x3858103F80070D0D Fadd
    temp_281 = temp_274 + 1.0;
    // 0x0009D0: 0x3858103F80071111 Fadd
    temp_282 = temp_276 + 1.0;
    // 0x0009D8: 0x32A20B4000071717 Ffma
    temp_283 = 0.0 - temp_117;
    temp_284 = fma(temp_267, 2.0, temp_283);
    // 0x0009E8: 0x5C9807800FF7001C Mov
    // 0x0009F0: 0x5C9807800FF70018 Mov
    // 0x0009F8: 0x5C9807800FF70019 Mov
    // 0x000A08: 0x5C9807800FF7001A Mov
    // 0x000A10: 0x5C9807800FF7001B Mov
    // 0x000A18: 0x59A4060000C7011D Ffma
    temp_285 = fma(temp_110, temp_280, temp_280);
    temp_286 = clamp(temp_285, 0.0, 1.0);
    // 0x000A28: 0x59A4068000D70222 Ffma
    temp_287 = fma(temp_106, temp_281, temp_281);
    temp_288 = clamp(temp_287, 0.0, 1.0);
    // 0x000A30: 0x59A4088001170824 Ffma
    temp_289 = fma(temp_139, temp_282, temp_282);
    temp_290 = clamp(temp_289, 0.0, 1.0);
    // 0x000A38: 0x1E23E22F98372828 Fmul32i
    temp_291 = temp_277 * 0.159154937;
    // 0x000A48: 0x1E23E22F98372525 Fmul32i
    temp_292 = temp_278 * 0.159154937;
    // 0x000A50: 0x1E23E22F98372626 Fmul32i
    temp_293 = temp_279 * 0.159154937;
    // 0x000A58: 0xF0F800000000000F Sync
    temp_294 = 0.0;
    temp_295 = 0.0;
    temp_296 = 0.0;
    temp_297 = 0.0;
    temp_298 = 0.0;
    temp_299 = 0.0;
    temp_300 = 0.0;
    temp_301 = 0.0;
    temp_302 = 0.0;
    temp_303 = 0.0;
    temp_304 = 0.0;
    temp_305 = 0.0;
    if (!temp_207)
    {
        // 0x000A68: 0x5C9807800FF7002C Mov
        temp_306 = 0;
        do
        {
            // 0x000A70: 0x5C18020002C73015 Iscadd
            temp_308 = int(temp_146) << 4;
            temp_309 = temp_308 + temp_306;
            // 0x000A78: 0xE003FF87CFF7FF32 Ipa
            // 0x000A88: 0x1C00000000172C2C Iadd32i
            temp_310 = temp_306 + 1;
            // 0x000A90: 0xE003FF87CFF7FF34 Ipa
            // 0x000A98: 0x3848000000471515 Shl
            temp_311 = temp_309 << 4;
            // 0x000AA8: 0xE003FF87CFF7FF33 Ipa
            // 0x000AB0: 0x5B6C038002F72C0F Isetp
            temp_307 = uint(temp_310) >= floatBitsToUint(temp_157);
            // 0x000AB8: 0xE290000059000000 Ssy
            // 0x000AC8: 0xEF94008200071515 Ldc
            temp_312 = temp_311 + 0x2000;
            temp_313 = uint(temp_312) >> 2;
            temp_314 = temp_313 >> 2;
            temp_315 = int(temp_313) & 3;
            temp_316 = fp_c8.data[int(temp_314)][temp_315];
            // 0x000AD0: 0x5080000000473232 Mufu
            // 0x000AD8: 0x5080000000473434 Mufu
            // 0x000AE8: 0x5080000000473333 Mufu
            // 0x000AF0: 0xE043FF8D0327FF32 Ipa
            temp_317 = in_attr5.x;
            // 0x000AF8: 0xE043FF8D8347FF34 Ipa
            temp_318 = in_attr5.z;
            // 0x000B08: 0xE043FF8D4337FF33 Ipa
            temp_319 = in_attr5.y;
            // 0x000B10: 0x384800000067152B Shl
            temp_320 = floatBitsToInt(temp_316) << 6;
            // 0x000B18: 0xEF95008001072B0C Ldc
            temp_321 = temp_320 + 16;
            temp_322 = uint(temp_321) >> 2;
            temp_323 = temp_322 >> 2;
            temp_324 = int(temp_322) & 3;
            temp_325 = fp_c8.data[int(temp_323)][temp_324];
            temp_326 = int(temp_322) + 1;
            temp_327 = uint(temp_326) >> 2;
            temp_328 = temp_326 & 3;
            temp_329 = fp_c8.data[int(temp_327)][temp_328];
            // 0x000B28: 0xEF95008001872B10 Ldc
            temp_330 = temp_320 + 24;
            temp_331 = uint(temp_330) >> 2;
            temp_332 = temp_331 >> 2;
            temp_333 = int(temp_331) & 3;
            temp_334 = fp_c8.data[int(temp_332)][temp_333];
            temp_335 = int(temp_331) + 1;
            temp_336 = uint(temp_335) >> 2;
            temp_337 = temp_335 & 3;
            temp_338 = fp_c8.data[int(temp_336)][temp_337];
            // 0x000B30: 0xEF95008002072B14 Ldc
            temp_339 = temp_320 + 32;
            temp_340 = uint(temp_339) >> 2;
            temp_341 = temp_340 >> 2;
            temp_342 = int(temp_340) & 3;
            temp_343 = fp_c8.data[int(temp_341)][temp_342];
            temp_344 = int(temp_340) + 1;
            temp_345 = uint(temp_344) >> 2;
            temp_346 = temp_344 & 3;
            temp_347 = fp_c8.data[int(temp_345)][temp_346];
            // 0x000B38: 0x5C58300003270C32 Fadd
            temp_348 = 0.0 - temp_317;
            temp_349 = temp_325 + temp_348;
            // 0x000B48: 0xEF94008002872B0C Ldc
            temp_350 = temp_320 + 40;
            temp_351 = uint(temp_350) >> 2;
            temp_352 = temp_351 >> 2;
            temp_353 = int(temp_351) & 3;
            temp_354 = fp_c8.data[int(temp_352)][temp_353];
            // 0x000B50: 0x5C58300003370D33 Fadd
            temp_355 = 0.0 - temp_319;
            temp_356 = temp_329 + temp_355;
            // 0x000B58: 0x5C58300003471034 Fadd
            temp_357 = 0.0 - temp_318;
            temp_358 = temp_334 + temp_357;
            // 0x000B68: 0x5C68100003273235 Fmul
            temp_359 = temp_349 * temp_349;
            // 0x000B70: 0x59A11A0003471111 Ffma
            temp_360 = 0.0 - temp_358;
            temp_361 = fma(temp_338, temp_360, temp_358);
            // 0x000B78: 0x59A01A8003373335 Ffma
            temp_362 = fma(temp_356, temp_356, temp_359);
            // 0x000B88: 0x59A01A8001171136 Ffma
            temp_363 = fma(temp_361, temp_361, temp_362);
            // 0x000B90: 0x508000000057360D Mufu
            temp_364 = inversesqrt(temp_363);
            // 0x000B98: 0x5080000000873636 Mufu
            temp_365 = sqrt(temp_363);
            // 0x000BA8: 0x5C68100000D73210 Fmul
            temp_366 = temp_349 * temp_364;
            // 0x000BB0: 0x5C69100001471010 Fmul
            temp_367 = 0.0 - temp_343;
            temp_368 = temp_366 * temp_367;
            // 0x000BB8: 0x5C68100000D73314 Fmul
            temp_369 = temp_356 * temp_364;
            // 0x000BC8: 0x5C68100000D7110D Fmul
            temp_370 = temp_361 * temp_364;
            // 0x000BD0: 0x59A1080001571414 Ffma
            temp_371 = 0.0 - temp_347;
            temp_372 = fma(temp_369, temp_371, temp_368);
            // 0x000BD8: 0xEF95008003872B10 Ldc
            temp_373 = temp_320 + 56;
            temp_374 = uint(temp_373) >> 2;
            temp_375 = temp_374 >> 2;
            temp_376 = int(temp_374) & 3;
            temp_377 = fp_c8.data[int(temp_375)][temp_376];
            temp_378 = int(temp_374) + 1;
            temp_379 = uint(temp_378) >> 2;
            temp_380 = temp_378 & 3;
            temp_381 = fp_c8.data[int(temp_379)][temp_380];
            // 0x000BE8: 0x010404000007F015 Mov32i
            // 0x000BF0: 0x59A10A0000C70D14 Ffma
            temp_382 = 0.0 - temp_354;
            temp_383 = fma(temp_370, temp_382, temp_372);
            // 0x000BF8: 0xEF95008003072B0C Ldc
            temp_384 = temp_320 + 48;
            temp_385 = uint(temp_384) >> 2;
            temp_386 = temp_385 >> 2;
            temp_387 = int(temp_385) & 3;
            temp_388 = fp_c8.data[int(temp_386)][temp_387];
            temp_389 = int(temp_385) + 1;
            temp_390 = uint(temp_389) >> 2;
            temp_391 = temp_389 & 3;
            temp_392 = fp_c8.data[int(temp_390)][temp_391];
            // 0x000C08: 0x59A4088001071410 Ffma
            temp_393 = fma(temp_383, temp_377, temp_381);
            temp_394 = clamp(temp_393, 0.0, 1.0);
            // 0x000C10: 0x59A4068003670C36 Ffma
            temp_395 = fma(temp_388, temp_365, temp_392);
            temp_396 = clamp(temp_395, 0.0, 1.0);
            // 0x000C18: 0x33A00AC000073614 Ffma
            temp_397 = fma(temp_396, -2.0, 3.0);
            // 0x000C28: 0x5C68100003673611 Fmul
            temp_398 = temp_396 * temp_396;
            // 0x000C30: 0x33A00AC000071015 Ffma
            temp_399 = fma(temp_394, -2.0, 3.0);
            // 0x000C38: 0x5C68100001071010 Fmul
            temp_400 = temp_394 * temp_394;
            // 0x000C48: 0x5C68100001171411 Fmul
            temp_401 = temp_397 * temp_398;
            // 0x000C50: 0x39585042F0073414 Fadd
            temp_402 = abs(temp_358);
            temp_403 = temp_402 + -120.0;
            // 0x000C58: 0x5C68100001571010 Fmul
            temp_404 = temp_400 * temp_399;
            // 0x000C68: 0x1EABD4CCCCD71414 Fmul32i
            temp_405 = temp_403 * -0.0500000007;
            temp_406 = clamp(temp_405, 0.0, 1.0);
            // 0x000C70: 0x5C68100001171010 Fmul
            temp_407 = temp_404 * temp_401;
            // 0x000C78: 0x36247F9000171111 Xmad
            temp_408 = floatBitsToUint(temp_401) >> 16;
            temp_409 = int(temp_408) << 16;
            // 0x000C88: 0x5C68100001071410 Fmul
            temp_410 = temp_406 * temp_407;
            // 0x000C90: 0x5BB383800FF71007 Fsetp
            temp_411 = temp_410 <= 0.0;
            // 0x000C98: 0x7A05083C0F00FF11 Hadd2
            temp_306 = temp_310;
            temp_412 = uint(temp_409);
            temp_413 = temp_294;
            temp_414 = temp_295;
            temp_415 = temp_296;
            temp_416 = temp_297;
            temp_417 = temp_298;
            temp_418 = temp_299;
            if (temp_411)
            {
                temp_419 = unpackHalf2x16(uint(temp_409)).y;
                temp_420 = packHalf2x16(vec2(1.0, temp_419));
                temp_412 = temp_420;
            }
            // 0x000CA8: 0x5D2103902FF71107 Hsetp2
            temp_421 = unpackHalf2x16(temp_412).x;
            temp_422 = temp_421 == 0.0;
            // 0x000CB0: 0xF0F800000008000F Sync
            if (temp_422)
            {
                // 0x000CB8: 0x5080000000470C0C Mufu
                temp_423 = 1.0 / temp_388;
                // 0x000CC8: 0xEF94008002C72B14 Ldc
                temp_424 = temp_320 + 44;
                temp_425 = uint(temp_424) >> 2;
                temp_426 = temp_425 >> 2;
                temp_427 = int(temp_425) & 3;
                temp_428 = fp_c8.data[int(temp_426)][temp_427];
                // 0x000CD0: 0x5C69100000C70D0D Fmul
                temp_429 = 0.0 - temp_423;
                temp_430 = temp_392 * temp_429;
                // 0x000CD8: 0x5C60138000D73434 Fmnmx
                temp_431 = min(temp_358, temp_430);
                // 0x000CE8: 0x5C61178003470D11 Fmnmx
                temp_432 = 0.0 - temp_430;
                temp_433 = max(temp_432, temp_431);
                // 0x000CF0: 0x59A01A800117110D Ffma
                temp_434 = fma(temp_433, temp_433, temp_362);
                // 0x000CF8: 0x5080000000570D15 Mufu
                temp_435 = inversesqrt(temp_434);
                // 0x000D08: 0x5C6810000157320C Fmul
                temp_436 = temp_349 * temp_435;
                // 0x000D10: 0x5080000000471414 Mufu
                temp_437 = 1.0 / temp_428;
                // 0x000D18: 0x5C68100001573334 Fmul
                temp_438 = temp_356 * temp_435;
                // 0x000D28: 0x5C68100001571111 Fmul
                temp_439 = temp_433 * temp_435;
                // 0x000D30: 0x5C58100000C72133 Fadd
                temp_440 = temp_113 + temp_436;
                // 0x000D38: 0x5C58100003472015 Fadd
                temp_441 = temp_115 + temp_438;
                // 0x000D48: 0x5C58100001171635 Fadd
                temp_442 = temp_117 + temp_439;
                // 0x000D50: 0x5C68100003373332 Fmul
                temp_443 = temp_440 * temp_440;
                // 0x000D58: 0x59A0190001571532 Ffma
                temp_444 = fma(temp_441, temp_441, temp_443);
                // 0x000D68: 0x59A0190003573532 Ffma
                temp_445 = fma(temp_442, temp_442, temp_444);
                // 0x000D70: 0x5080000000573236 Mufu
                temp_446 = inversesqrt(temp_445);
                // 0x000D78: 0x5080000000870D32 Mufu
                temp_447 = sqrt(temp_434);
                // 0x000D88: 0x5C68100000C70E0D Fmul
                temp_448 = temp_118 * temp_436;
                // 0x000D90: 0x5C68100003673333 Fmul
                temp_449 = temp_440 * temp_446;
                // 0x000D98: 0x5C68100003671515 Fmul
                temp_450 = temp_441 * temp_446;
                // 0x000DA8: 0x5C68100003673535 Fmul
                temp_451 = temp_442 * temp_446;
                // 0x000DB0: 0x59A0068003470436 Ffma
                temp_452 = fma(temp_119, temp_438, temp_448);
                // 0x000DB8: 0x51A0190400371414 Ffma
                temp_453 = fma(temp_437, temp_447, fp_c1.data[0].w);
                // 0x000DC8: 0x5C68100003370C0C Fmul
                temp_454 = temp_436 * temp_449;
                // 0x000DD0: 0x5080000000471414 Mufu
                temp_455 = 1.0 / temp_453;
                // 0x000DD8: 0x5C68100003370E33 Fmul
                temp_456 = temp_118 * temp_449;
                // 0x000DE8: 0x59A01B0001171236 Ffma
                temp_457 = fma(temp_120, temp_439, temp_452);
                // 0x000DF0: 0x59A0060001573434 Ffma
                temp_458 = fma(temp_438, temp_450, temp_454);
                // 0x000DF8: 0xEF95008000072B0C Ldc
                temp_459 = uint(temp_320) >> 2;
                temp_460 = temp_459 >> 2;
                temp_461 = int(temp_459) & 3;
                temp_462 = fp_c8.data[int(temp_460)][temp_461];
                temp_463 = int(temp_459) + 1;
                temp_464 = uint(temp_463) >> 2;
                temp_465 = temp_463 & 3;
                temp_466 = fp_c8.data[int(temp_464)][temp_465];
                // 0x000E08: 0x59A0198001570433 Ffma
                temp_467 = fma(temp_119, temp_450, temp_456);
                // 0x000E10: 0xEF94008000872B2B Ldc
                temp_468 = temp_320 + 8;
                temp_469 = uint(temp_468) >> 2;
                temp_470 = temp_469 >> 2;
                temp_471 = int(temp_469) & 3;
                temp_472 = fp_c8.data[int(temp_470)][temp_471];
                // 0x000E18: 0x59A41A0003571134 Ffma
                temp_473 = fma(temp_439, temp_451, temp_458);
                temp_474 = clamp(temp_473, 0.0, 1.0);
                // 0x000E28: 0x51A4028400170511 Ffma
                temp_475 = fma(temp_158, temp_158, fp_c1.data[0].y);
                temp_476 = clamp(temp_475, 0.0, 1.0);
                // 0x000E30: 0x01040DF760C7F015 Mov32i
                // 0x000E38: 0x1E23FB3333371414 Fmul32i
                temp_477 = temp_455 * 1.39999998;
                // 0x000E48: 0x59A4198003571233 Ffma
                temp_478 = fma(temp_120, temp_451, temp_467);
                temp_479 = clamp(temp_478, 0.0, 1.0);
                // 0x000E50: 0x5C68100001171132 Fmul
                temp_480 = temp_476 * temp_476;
                // 0x000E58: 0x49A20A8400073415 Ffma
                temp_481 = fma(temp_474, fp_c1.data[0].x, -6.98316002);
                // 0x000E68: 0x5C68100001471414 Fmul
                temp_482 = temp_477 * temp_477;
                // 0x000E70: 0x59A2198003373232 Ffma
                temp_483 = 0.0 - temp_479;
                temp_484 = fma(temp_480, temp_479, temp_483);
                // 0x000E78: 0x5C68100001573434 Fmul
                temp_485 = temp_474 * temp_481;
                // 0x000E88: 0x5C5C30000FF73615 Fadd
                temp_486 = temp_457 + -0.0;
                temp_487 = clamp(temp_486, 0.0, 1.0);
                // 0x000E90: 0x59A10A0001473614 Ffma
                temp_488 = 0.0 - temp_482;
                temp_489 = fma(temp_457, temp_488, temp_482);
                // 0x000E98: 0x51A0190400273332 Ffma
                temp_490 = fma(temp_479, temp_484, fp_c1.data[0].z);
                // 0x000EA8: 0x5C90008003470034 Rro
                // 0x000EB0: 0x5080000000473232 Mufu
                temp_491 = 1.0 / temp_490;
                // 0x000EB8: 0x59A10A8001573133 Ffma
                temp_492 = 0.0 - temp_487;
                temp_493 = fma(temp_201, temp_492, temp_487);
                // 0x000EC8: 0x5080000000273434 Mufu
                temp_494 = exp2(temp_485);
                // 0x000ED0: 0x5C5C100001473614 Fadd
                temp_495 = temp_457 + temp_489;
                temp_496 = clamp(temp_495, 0.0, 1.0);
                // 0x000ED8: 0x5C58100003373133 Fadd
                temp_497 = temp_201 + temp_493;
                // 0x000EE8: 0x5080000000473333 Mufu
                temp_498 = 1.0 / temp_497;
                // 0x000EF0: 0x5C68100003271132 Fmul
                temp_499 = temp_476 * temp_491;
                // 0x000EF8: 0x59A11A0003470611 Ffma
                temp_500 = 0.0 - temp_494;
                temp_501 = fma(temp_192, temp_500, temp_494);
                // 0x000F08: 0x5C68100000C7100C Fmul
                temp_502 = temp_410 * temp_462;
                // 0x000F10: 0x5C68100000D7100D Fmul
                temp_503 = temp_410 * temp_466;
                // 0x000F18: 0x5C68100003273232 Fmul
                temp_504 = temp_499 * temp_499;
                // 0x000F28: 0x5C58100001170611 Fadd
                temp_505 = temp_192 + temp_501;
                // 0x000F30: 0x5C68100003372E33 Fmul
                temp_506 = temp_236 * temp_498;
                // 0x000F38: 0x5C68100002B7102B Fmul
                temp_507 = temp_410 * temp_472;
                // 0x000F48: 0x59A11A0003470910 Ffma
                temp_508 = 0.0 - temp_494;
                temp_509 = fma(temp_208, temp_508, temp_494);
                // 0x000F50: 0x59A11A0003470A34 Ffma
                temp_510 = 0.0 - temp_494;
                temp_511 = fma(temp_220, temp_510, temp_494);
                // 0x000F58: 0x5C68100003373232 Fmul
                temp_512 = temp_504 * temp_506;
                // 0x000F68: 0x4C68101406271111 Fmul
                temp_513 = temp_505 * fp_c5.data[24].z;
                // 0x000F70: 0x5C58100001070910 Fadd
                temp_514 = temp_208 + temp_509;
                // 0x000F78: 0x5C58100003470A34 Fadd
                temp_515 = temp_220 + temp_511;
                // 0x000F88: 0x5C68100003271532 Fmul
                temp_516 = temp_487 * temp_512;
                // 0x000F90: 0x5C68100001170C11 Fmul
                temp_517 = temp_502 * temp_513;
                // 0x000F98: 0x5C68100001470C0C Fmul
                temp_518 = temp_502 * temp_496;
                // 0x000FA8: 0x4C68101406271010 Fmul
                temp_519 = temp_514 * fp_c5.data[24].z;
                // 0x000FB0: 0x4C68101406273434 Fmul
                temp_520 = temp_515 * fp_c5.data[24].z;
                // 0x000FB8: 0x5C68100003271111 Fmul
                temp_521 = temp_517 * temp_516;
                // 0x000FC8: 0x49A0138400570C27 Ffma
                temp_522 = fma(temp_518, fp_c1.data[1].y, temp_294);
                // 0x000FD0: 0x5C68100001070D10 Fmul
                temp_523 = temp_503 * temp_519;
                // 0x000FD8: 0x5C68100003472B34 Fmul
                temp_524 = temp_507 * temp_520;
                // 0x000FE8: 0x5C68100001470D0D Fmul
                temp_525 = temp_503 * temp_496;
                // 0x000FF0: 0x5C68100001472B14 Fmul
                temp_526 = temp_507 * temp_496;
                // 0x000FF8: 0x49A00E040047111C Ffma
                temp_527 = fma(temp_521, fp_c1.data[1].x, temp_295);
                // 0x001008: 0x5C68100003271015 Fmul
                temp_528 = temp_523 * temp_516;
                // 0x001010: 0x5C68100003273434 Fmul
                temp_529 = temp_524 * temp_516;
                // 0x001018: 0x49A00D0400570D1A Ffma
                temp_530 = fma(temp_525, fp_c1.data[1].y, temp_296);
                // 0x001028: 0x49A00D840057141B Ffma
                temp_531 = fma(temp_526, fp_c1.data[1].y, temp_297);
                // 0x001030: 0x49A00C0400471518 Ffma
                temp_532 = fma(temp_528, fp_c1.data[1].x, temp_298);
                // 0x001038: 0x49A00C8400473419 Ffma
                temp_533 = fma(temp_529, fp_c1.data[1].x, temp_299);
                // 0x001048: 0xF0F800000007000F Sync
                temp_413 = temp_522;
                temp_414 = temp_527;
                temp_415 = temp_530;
                temp_416 = temp_531;
                temp_417 = temp_532;
                temp_418 = temp_533;
            }
            // 0x001050: 0xE2400FFFA189000F Bra
            temp_294 = temp_413;
            temp_295 = temp_414;
            temp_296 = temp_415;
            temp_297 = temp_416;
            temp_298 = temp_417;
            temp_299 = temp_418;
            temp_300 = temp_414;
            temp_301 = temp_415;
            temp_302 = temp_417;
            temp_303 = temp_416;
            temp_304 = temp_418;
            temp_305 = temp_413;
        }
        while (!temp_307);
        // 0x001058: 0xF0F800000007000F Sync
    }
    // 0x001068: 0x5C62578002A72D0D Fmnmx
    temp_534 = abs(temp_269);
    temp_535 = abs(temp_225);
    temp_536 = max(temp_534, temp_535);
    // 0x001070: 0xE003FF87CFF7FF2B Ipa
    // 0x001078: 0x5C62578000470E0C Fmnmx
    temp_537 = abs(temp_118);
    temp_538 = abs(temp_119);
    temp_539 = max(temp_537, temp_538);
    // 0x001088: 0xEF4410000007FF32 Ldl
    temp_540 = uintBitsToFloat(local_memory[0]);
    // 0x001090: 0x010000000017F014 Mov32i
    // 0x001098: 0x3868104080070521 Fmul
    temp_541 = temp_158 * 4.0;
    // 0x0010A8: 0x4C98079C0207002F Mov
    // 0x0010B0: 0x5C60578000D7170D Fmnmx
    temp_542 = abs(temp_284);
    temp_543 = max(temp_542, temp_536);
    // 0x0010B8: 0x5C60578000C7120C Fmnmx
    temp_544 = abs(temp_120);
    temp_545 = max(temp_544, temp_539);
    // 0x0010C8: 0x5080000000470D10 Mufu
    temp_546 = 1.0 / temp_543;
    // 0x0010D0: 0x49A014180A171C28 Ffma
    temp_547 = fma(temp_300, fp_c6.data[40].y, temp_291);
    // 0x0010D8: 0x5080000000470C11 Mufu
    temp_548 = 1.0 / temp_545;
    // 0x0010E8: 0x5C68100001072D15 Fmul
    temp_549 = temp_269 * temp_546;
    // 0x0010F0: 0x5C68100001072A16 Fmul
    temp_550 = temp_225 * temp_546;
    // 0x0010F8: 0x5080000000472B2B Mufu
    // 0x001108: 0x5C69100001071717 Fmul
    temp_551 = 0.0 - temp_546;
    temp_552 = temp_284 * temp_551;
    // 0x001110: 0x5C69100001171212 Fmul
    temp_553 = 0.0 - temp_548;
    temp_554 = temp_120 * temp_553;
    // 0x001118: 0x5C68100001170E10 Fmul
    temp_555 = temp_118 * temp_548;
    // 0x001128: 0x5C68100001170411 Fmul
    temp_556 = temp_119 * temp_548;
    // 0x001130: 0x38681040E007052A Fmul
    temp_557 = temp_158 * 7.0;
    // 0x001138: 0xC0BA0163EFF7100C Tex
    temp_558 = textureLod(fp_t_tcb_16, vec3(temp_555, temp_556, temp_554), 0.0).xyz;
    temp_559 = temp_558.x;
    temp_560 = temp_558.y;
    temp_561 = temp_558.z;
    // 0x001148: 0x5C98078001270020 Mov
    // 0x001150: 0xC1BA0143F2A71414 Tex
    temp_562 = textureLod(fp_t_tcb_14, vec4(temp_549, temp_550, temp_552, float(1)), temp_557).xyz;
    temp_563 = temp_562.x;
    temp_564 = temp_562.y;
    temp_565 = temp_562.z;
    // 0x001158: 0x3859103F80070505 Fadd
    temp_566 = 0.0 - temp_158;
    temp_567 = temp_566 + 1.0;
    // 0x001168: 0xD9A2018202071010 Texs
    temp_568 = textureLod(fp_t_tcb_18, vec3(temp_555, temp_556, temp_554), temp_541).xyz;
    temp_569 = temp_568.x;
    temp_570 = temp_568.y;
    temp_571 = temp_568.z;
    // 0x001170: 0x3859103F8007071C Fadd
    temp_572 = 0.0 - temp_197;
    temp_573 = temp_572 + 1.0;
    // 0x001178: 0xE043FF9202B7FF2C Ipa
    temp_574 = in_attr10.x;
    // 0x001188: 0x5C68100000570505 Fmul
    temp_575 = temp_567 * temp_567;
    // 0x001190: 0xE043FF9242B7FF2D Ipa
    temp_576 = in_attr10.y;
    // 0x001198: 0x49A01B980A171A37 Ffma
    temp_577 = fma(temp_301, fp_c6.data[40].y, temp_256);
    // 0x0011A8: 0xE043FF9282B7FF2E Ipa
    temp_578 = in_attr10.z;
    // 0x0011B0: 0xDEBA0000C2F72C2C TexB
    temp_579 = texture(fp_t_cb7_20, vec3(temp_574, temp_576, temp_578)).x;
    // 0x0011B8: 0x010410676C97F01A Mov32i
    // 0x0011C8: 0x1E23E468DB970717 Fmul32i
    temp_580 = temp_197 * 0.193900004;
    // 0x0011D0: 0x5C68100000570512 Fmul
    temp_581 = temp_575 * temp_575;
    // 0x0011D8: 0x4C68101809071C05 Fmul
    temp_582 = temp_573 * fp_c6.data[36].x;
    // 0x0011E8: 0x49A012980A171825 Ffma
    temp_583 = fma(temp_302, fp_c6.data[40].y, temp_292);
    // 0x0011F0: 0x5080400000370505 Mufu
    temp_584 = abs(temp_582);
    temp_585 = log2(temp_584);
    // 0x0011F8: 0x49A014980A171B29 Ffma
    temp_586 = fma(temp_303, fp_c6.data[40].y, temp_258);
    // 0x001208: 0x49A00D0400A70718 Ffma
    temp_587 = fma(temp_197, fp_c1.data[2].z, 8.40400028);
    // 0x001210: 0x0103E2CD9E87F01B Mov32i
    // 0x001218: 0x0103F0000007F01A Mov32i
    // 0x001228: 0x49A00B8400671217 Ffma
    temp_588 = fma(temp_581, fp_c1.data[1].z, temp_580);
    // 0x001230: 0x49A013180A171926 Ffma
    temp_589 = fma(temp_304, fp_c6.data[40].y, temp_293);
    // 0x001238: 0x4C9807980B470021 Mov
    // 0x001248: 0x51A00C0400B70719 Ffma
    temp_590 = fma(temp_197, temp_587, fp_c1.data[2].w);
    // 0x001250: 0x49A20D8400D7121B Ffma
    temp_591 = fma(temp_581, fp_c1.data[3].y, -0.168799996);
    // 0x001258: 0x32A00D3F00070418 Ffma
    temp_592 = fma(temp_119, 0.5, 0.5);
    // 0x001268: 0x088BF05D63971704 Fadd32i
    temp_593 = temp_588 + -0.522800028;
    // 0x001270: 0xE04BFF9042B7FF17 Ipa
    temp_594 = in_attr8.y;
    temp_595 = clamp(temp_594, 0.0, 1.0);
    // 0x001278: 0x4C9807980097002A Mov
    // 0x001288: 0x4C68101809170505 Fmul
    temp_596 = temp_585 * fp_c6.data[36].y;
    // 0x001290: 0x51A00C8400C70719 Ffma
    temp_597 = fma(temp_197, temp_590, fp_c1.data[3].x);
    // 0x001298: 0x5C68100001B7121A Fmul
    temp_598 = temp_581 * temp_591;
    // 0x0012A8: 0xF0F0000034470000 Depbar
    // 0x0012B0: 0x51A210980B471E1E Ffma
    temp_599 = 0.0 - fp_c6.data[45].x;
    temp_600 = fma(temp_41, fp_c6.data[45].x, temp_599);
    // 0x0012B8: 0x5C6810000047071B Fmul
    temp_601 = temp_197 * temp_593;
    // 0x0012C8: 0x0104066978D7F004 Mov32i
    // 0x0012D0: 0x51A210980B471F1F Ffma
    temp_602 = 0.0 - fp_c6.data[45].x;
    temp_603 = fma(temp_42, fp_c6.data[45].x, temp_602);
    // 0x0012D8: 0x51A210980B470000 Ffma
    temp_604 = 0.0 - fp_c6.data[45].x;
    temp_605 = fma(temp_43, fp_c6.data[45].x, temp_604);
    // 0x0012E8: 0x4C98079800870007 Mov
    // 0x0012F0: 0x5C90008000570021 Rro
    // 0x0012F8: 0x4C98079800A7002D Mov
    // 0x001308: 0x5084000000272121 Mufu
    temp_606 = exp2(temp_596);
    temp_607 = clamp(temp_606, 0.0, 1.0);
    // 0x001310: 0x49A2020400771204 Ffma
    temp_608 = fma(temp_581, fp_c1.data[1].w, -3.60299993);
    // 0x001318: 0x4C9807980977001C Mov
    // 0x001328: 0x4C59101800470705 Fadd
    temp_609 = 0.0 - fp_c6.data[2].x;
    temp_610 = temp_609 + fp_c6.data[1].x;
    // 0x001330: 0x4C59101800572A07 Fadd
    temp_611 = 0.0 - fp_c6.data[2].y;
    temp_612 = temp_611 + fp_c6.data[1].y;
    // 0x001338: 0x010404000007F02E Mov32i
    // 0x001348: 0x4C59101800672D2A Fadd
    temp_613 = 0.0 - fp_c6.data[2].z;
    temp_614 = temp_613 + fp_c6.data[1].z;
    // 0x001350: 0x51A002040087122D Ffma
    temp_615 = fma(temp_581, temp_608, fp_c1.data[2].x);
    // 0x001358: 0x4C58101407E71C1C Fadd
    temp_616 = fp_c6.data[37].w + fp_c5.data[31].z;
    // 0x001368: 0x51A0029800871805 Ffma
    temp_617 = fma(temp_592, temp_610, fp_c6.data[2].x);
    // 0x001370: 0x5C60138001A71919 Fmnmx
    temp_618 = min(temp_597, temp_598);
    // 0x001378: 0x4C98079407F7001A Mov
    // 0x001388: 0x51A0039800971804 Ffma
    temp_619 = fma(temp_592, temp_612, fp_c6.data[2].y);
    // 0x001390: 0x59A00D8002D7121B Ffma
    temp_620 = fma(temp_581, temp_615, temp_601);
    // 0x001398: 0x5C68100002171C1C Fmul
    temp_621 = temp_616 * temp_607;
    // 0x0013A8: 0x51A0151800A71807 Ffma
    temp_622 = fma(temp_592, temp_614, fp_c6.data[2].z);
    // 0x0013B0: 0x386C104248070921 Fmul
    temp_623 = temp_208 * 50.0;
    temp_624 = clamp(temp_623, 0.0, 1.0);
    // 0x0013B8: 0x4C68101406271A2A Fmul
    temp_625 = fp_c5.data[31].w * fp_c5.data[24].z;
    // 0x0013C8: 0x33A017400007172D Ffma
    temp_626 = fma(temp_595, -2.0, 3.0);
    // 0x0013D0: 0x5C68100001771712 Fmul
    temp_627 = temp_595 * temp_595;
    // 0x0013D8: 0x5C5C30000FF7191A Fadd
    temp_628 = temp_618 + -0.0;
    temp_629 = clamp(temp_628, 0.0, 1.0);
    // 0x0013E8: 0x4C5C100400971B1B Fadd
    temp_630 = temp_620 + fp_c1.data[2].y;
    temp_631 = clamp(temp_630, 0.0, 1.0);
    // 0x0013F0: 0x4C68101808C71C17 Fmul
    temp_632 = temp_621 * fp_c6.data[35].x;
    // 0x0013F8: 0x4C68101808D71C18 Fmul
    temp_633 = temp_621 * fp_c6.data[35].y;
    // 0x001408: 0x4C68101808E71C19 Fmul
    temp_634 = temp_621 * fp_c6.data[35].z;
    // 0x001410: 0x5C68100002D71212 Fmul
    temp_635 = temp_627 * temp_626;
    // 0x001418: 0x5C68100002171A1C Fmul
    temp_636 = temp_629 * temp_624;
    // 0x001428: 0x5C58300001A71B1B Fadd
    temp_637 = 0.0 - temp_629;
    temp_638 = temp_631 + temp_637;
    // 0x001430: 0x49A10B9407F7171A Ffma
    temp_639 = 0.0 - fp_c5.data[31].w;
    temp_640 = fma(temp_632, temp_639, temp_632);
    // 0x001438: 0x59A0128002A71825 Ffma
    temp_641 = fma(temp_633, temp_625, temp_583);
    // 0x001448: 0x59A0140002A71728 Ffma
    temp_642 = fma(temp_632, temp_625, temp_547);
    // 0x001450: 0x49A10C1407F71818 Ffma
    temp_643 = 0.0 - fp_c5.data[31].w;
    temp_644 = fma(temp_633, temp_643, temp_633);
    // 0x001458: 0x59A0130002A71926 Ffma
    temp_645 = fma(temp_634, temp_625, temp_589);
    // 0x001468: 0x49A10C9407F71917 Ffma
    temp_646 = 0.0 - fp_c5.data[31].w;
    temp_647 = fma(temp_634, temp_646, temp_634);
    // 0x001470: 0x59A00E0001B70619 Ffma
    temp_648 = fma(temp_192, temp_638, temp_636);
    // 0x001478: 0xE043FF9002B7FF06 Ipa
    temp_649 = in_attr8.x;
    // 0x001488: 0x59A00E0001B70909 Ffma
    temp_650 = fma(temp_208, temp_638, temp_636);
    // 0x001490: 0x59A00E0001B70A0A Ffma
    temp_651 = fma(temp_220, temp_638, temp_636);
    // 0x001498: 0x5C58100001873718 Fadd
    temp_652 = temp_577 + temp_644;
    // 0x0014A8: 0x4C68101803771212 Fmul
    temp_653 = temp_635 * fp_c6.data[13].w;
    // 0x0014B0: 0x5C58100001772917 Fadd
    temp_654 = temp_586 + temp_647;
    // 0x0014B8: 0x4C68101406271919 Fmul
    temp_655 = temp_648 * fp_c5.data[24].z;
    // 0x0014C8: 0xF0F0000034370000 Depbar
    // 0x0014D0: 0x49A019180A172727 Ffma
    temp_656 = fma(temp_305, fp_c6.data[40].y, temp_540);
    // 0x0014D8: 0x5C58100001A7271A Fadd
    temp_657 = temp_656 + temp_640;
    // 0x0014E8: 0xF0F0000034170000 Depbar
    // 0x0014F0: 0x49A0060400570505 Ffma
    temp_658 = fma(temp_617, fp_c1.data[1].y, temp_559);
    // 0x0014F8: 0x49A006840057040D Ffma
    temp_659 = fma(temp_619, fp_c1.data[1].y, temp_560);
    // 0x001508: 0x49A007040057070E Ffma
    temp_660 = fma(temp_622, fp_c1.data[1].y, temp_561);
    // 0x001510: 0x4C68101406270907 Fmul
    temp_661 = temp_650 * fp_c5.data[24].z;
    // 0x001518: 0x49A008980857150C Ffma
    temp_662 = fma(temp_564, fp_c6.data[33].y, temp_570);
    // 0x001528: 0x49A008180857141B Ffma
    temp_663 = fma(temp_563, fp_c6.data[33].y, temp_569);
    // 0x001530: 0x5C58100000571A05 Fadd
    temp_664 = temp_657 + temp_658;
    // 0x001538: 0x5C58100000D7180D Fadd
    temp_665 = temp_652 + temp_659;
    // 0x001548: 0x5C58100000E7170E Fadd
    temp_666 = temp_654 + temp_660;
    // 0x001550: 0x49A0101808571620 Ffma
    temp_667 = fma(temp_565, fp_c6.data[33].y, temp_571);
    // 0x001558: 0x59A0128000C70707 Ffma
    temp_668 = fma(temp_661, temp_662, temp_641);
    // 0x001568: 0x59A0140001B71917 Ffma
    temp_669 = fma(temp_655, temp_663, temp_642);
    // 0x001570: 0x59A1028000572304 Ffma
    temp_670 = 0.0 - temp_664;
    temp_671 = fma(temp_33, temp_670, temp_664);
    // 0x001578: 0x4C68101406270A05 Fmul
    temp_672 = temp_651 * fp_c5.data[24].z;
    // 0x001588: 0x59A1068000D7230D Ffma
    temp_673 = 0.0 - temp_665;
    temp_674 = fma(temp_33, temp_673, temp_665);
    // 0x001590: 0x59A1070000E7230E Ffma
    temp_675 = 0.0 - temp_666;
    temp_676 = fma(temp_33, temp_675, temp_666);
    // 0x001598: 0x4C98079802970009 Mov
    // 0x0015A8: 0x59A00B8000470104 Ffma
    temp_677 = fma(temp_110, temp_671, temp_669);
    // 0x0015B0: 0x59A0130002070505 Ffma
    temp_678 = fma(temp_672, temp_667, temp_645);
    // 0x0015B8: 0x59A0038000D70207 Ffma
    temp_679 = fma(temp_106, temp_674, temp_668);
    // 0x0015C8: 0x4C98079802870001 Mov
    // 0x0015D0: 0x4C98079802A70002 Mov
    // 0x0015D8: 0x5C68100000471D1D Fmul
    temp_680 = temp_286 * temp_677;
    // 0x0015E8: 0x59A0028000E70805 Ffma
    temp_681 = fma(temp_139, temp_676, temp_678);
    // 0x0015F0: 0xE043FF8C82B7FF08 Ipa
    temp_682 = in_attr4.z;
    // 0x0015F8: 0x5C68100000772222 Fmul
    temp_683 = temp_288 * temp_679;
    // 0x001608: 0x51A0009802871E1E Ffma
    temp_684 = fma(temp_600, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001610: 0x51A0049802971F01 Ffma
    temp_685 = fma(temp_603, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001618: 0x51A0011802A70000 Ffma
    temp_686 = fma(temp_605, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001628: 0x49A00E9406C70B0B Ffma
    temp_687 = fma(temp_264, fp_c5.data[27].x, temp_680);
    // 0x001630: 0x5C68100000572424 Fmul
    temp_688 = temp_290 * temp_681;
    // 0x001638: 0x49A0111406C70F0F Ffma
    temp_689 = fma(temp_270, fp_c5.data[27].x, temp_683);
    // 0x001648: 0x5C58300001E70B04 Fadd
    temp_690 = 0.0 - temp_684;
    temp_691 = temp_687 + temp_690;
    // 0x001650: 0x49A0121406C71313 Ffma
    temp_692 = fma(temp_140, fp_c5.data[27].x, temp_688);
    // 0x001658: 0x5C58300000170F02 Fadd
    temp_693 = 0.0 - temp_685;
    temp_694 = temp_689 + temp_693;
    // 0x001668: 0x49A503180BC72C06 Ffma
    temp_695 = 0.0 - fp_c6.data[47].x;
    temp_696 = fma(temp_579, temp_695, temp_649);
    temp_697 = clamp(temp_696, 0.0, 1.0);
    // 0x001670: 0x49A00F180BF70404 Ffma
    temp_698 = fma(temp_691, fp_c6.data[47].w, temp_684);
    // 0x001678: 0x5080000000370606 Mufu
    temp_699 = log2(temp_697);
    // 0x001688: 0x5C58300000071305 Fadd
    temp_700 = 0.0 - temp_686;
    temp_701 = temp_692 + temp_700;
    // 0x001690: 0x49A000980BF70202 Ffma
    temp_702 = fma(temp_694, fp_c6.data[47].w, temp_685);
    // 0x001698: 0x5C60178000471E04 Fmnmx
    temp_703 = max(temp_684, temp_698);
    // 0x0016A8: 0x49A000180BF70505 Ffma
    temp_704 = fma(temp_701, fp_c6.data[47].w, temp_686);
    // 0x0016B0: 0x5C60178000270102 Fmnmx
    temp_705 = max(temp_685, temp_702);
    // 0x0016B8: 0x49A2091803471201 Ffma
    temp_706 = 0.0 - temp_653;
    temp_707 = fma(temp_653, fp_c6.data[13].x, temp_706);
    // 0x0016C8: 0x4C58100C03870808 Fadd
    temp_708 = temp_682 + fp_c3.data[14].x;
    // 0x0016D0: 0x4C68101803170607 Fmul
    temp_709 = temp_699 * fp_c6.data[12].y;
    // 0x0016D8: 0x5C60178000570005 Fmnmx
    temp_710 = max(temp_686, temp_704);
    // 0x0016E8: 0x59A0020000170400 Ffma
    temp_711 = fma(temp_703, temp_707, temp_703);
    // 0x0016F0: 0x5C90008000770006 Rro
    // 0x0016F8: 0x49A2091803571207 Ffma
    temp_712 = 0.0 - temp_653;
    temp_713 = fma(temp_653, fp_c6.data[13].y, temp_712);
    // 0x001708: 0x5080000000270606 Mufu
    temp_714 = exp2(temp_709);
    // 0x001710: 0x49A2091803671212 Ffma
    temp_715 = 0.0 - temp_653;
    temp_716 = fma(temp_653, fp_c6.data[13].z, temp_715);
    // 0x001718: 0x5C59100000070B00 Fadd
    temp_717 = 0.0 - temp_687;
    temp_718 = temp_717 + temp_711;
    // 0x001728: 0x59A0010000770201 Ffma
    temp_719 = fma(temp_705, temp_713, temp_705);
    // 0x001730: 0x59A0028001270502 Ffma
    temp_720 = fma(temp_710, temp_716, temp_710);
    // 0x001738: 0x5C98078000370007 Mov
    // 0x001748: 0x0103F0000007F005 Mov32i
    // 0x001750: 0x5C59100000170F01 Fadd
    temp_721 = 0.0 - temp_689;
    temp_722 = temp_721 + temp_719;
    // 0x001758: 0x4C68101802B70604 Fmul
    temp_723 = temp_714 * fp_c6.data[10].w;
    // 0x001768: 0x5C59100000271302 Fadd
    temp_724 = 0.0 - temp_692;
    temp_725 = temp_724 + temp_720;
    // 0x001770: 0x5C9807800FF70006 Mov
    // 0x001778: 0x59A0058000470000 Ffma
    temp_726 = fma(temp_718, temp_723, temp_687);
    // 0x001788: 0x59A0078000470101 Ffma
    temp_727 = fma(temp_722, temp_723, temp_689);
    // 0x001790: 0x59A0098000470202 Ffma
    temp_728 = fma(temp_725, temp_723, temp_692);
    // 0x001798: 0x49A37F8C03C70804 Ffma
    temp_729 = 0.0 - fp_c3.data[15].x;
    temp_730 = fma(temp_708, temp_729, -0.0);
    // 0x0017A8: 0xE30000000007000F Exit
    out_attr0.x = temp_726;
    out_attr0.y = temp_727;
    out_attr0.z = temp_728;
    out_attr0.w = temp_30;
    out_attr1.x = temp_730;
    out_attr1.y = 0.5;
    out_attr1.z = 0.0;
    out_attr1.w = temp_30;
    return;
}
