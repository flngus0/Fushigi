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
layout (binding = 3) uniform sampler2DShadow fp_t_tcb_1A;
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
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise vec2 temp_26;
    precise float temp_27;
    precise float temp_28;
    precise vec3 temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise vec3 temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise vec3 temp_39;
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
    uint temp_155;
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
    int temp_166;
    precise float temp_167;
    precise float temp_168;
    int temp_169;
    uint temp_170;
    uint temp_171;
    int temp_172;
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
    bool temp_259;
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
    int temp_304;
    bool temp_305;
    int temp_306;
    int temp_307;
    int temp_308;
    int temp_309;
    int temp_310;
    uint temp_311;
    uint temp_312;
    int temp_313;
    precise float temp_314;
    precise float temp_315;
    precise float temp_316;
    precise float temp_317;
    int temp_318;
    int temp_319;
    uint temp_320;
    uint temp_321;
    int temp_322;
    precise float temp_323;
    int temp_324;
    uint temp_325;
    int temp_326;
    precise float temp_327;
    int temp_328;
    uint temp_329;
    uint temp_330;
    int temp_331;
    precise float temp_332;
    int temp_333;
    uint temp_334;
    int temp_335;
    precise float temp_336;
    int temp_337;
    uint temp_338;
    uint temp_339;
    int temp_340;
    precise float temp_341;
    int temp_342;
    uint temp_343;
    int temp_344;
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
    precise float temp_359;
    precise float temp_360;
    precise float temp_361;
    precise float temp_362;
    precise float temp_363;
    int temp_364;
    uint temp_365;
    uint temp_366;
    int temp_367;
    precise float temp_368;
    int temp_369;
    uint temp_370;
    int temp_371;
    precise float temp_372;
    precise float temp_373;
    precise float temp_374;
    int temp_375;
    uint temp_376;
    uint temp_377;
    int temp_378;
    precise float temp_379;
    int temp_380;
    uint temp_381;
    uint temp_382;
    int temp_383;
    precise float temp_384;
    int temp_385;
    uint temp_386;
    int temp_387;
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
    precise float temp_403;
    precise float temp_404;
    precise float temp_405;
    uint temp_406;
    int temp_407;
    precise float temp_408;
    bool temp_409;
    uint temp_410;
    precise float temp_411;
    precise float temp_412;
    precise float temp_413;
    precise float temp_414;
    precise float temp_415;
    precise float temp_416;
    precise float temp_417;
    uint temp_418;
    precise float temp_419;
    bool temp_420;
    precise float temp_421;
    int temp_422;
    uint temp_423;
    uint temp_424;
    int temp_425;
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
    uint temp_459;
    uint temp_460;
    int temp_461;
    precise float temp_462;
    int temp_463;
    uint temp_464;
    int temp_465;
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
    precise float temp_546;
    precise float temp_547;
    precise float temp_548;
    precise float temp_549;
    precise float temp_550;
    precise float temp_551;
    precise float temp_552;
    precise float temp_553;
    precise float temp_554;
    precise vec3 temp_555;
    precise float temp_556;
    precise float temp_557;
    precise float temp_558;
    precise vec3 temp_559;
    precise float temp_560;
    precise float temp_561;
    precise float temp_562;
    precise vec3 temp_563;
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
    precise float temp_719;
    precise float temp_720;
    precise float temp_721;
    precise float temp_722;
    // 0x000008: 0x0103F8000007F00D Mov32i
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0xE003FF91CFF7FF00 Ipa
    temp_0 = in_attr9.w;
    temp_1 = gl_FragCoord.w;
    temp_2 = temp_0 * temp_1;
    // 0x000028: 0xE003FF870FF7FF02 Ipa
    temp_3 = gl_FragCoord.x;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000030: 0xE003FF874FF7FF03 Ipa
    temp_6 = gl_FragCoord.y;
    temp_7 = support_buffer.render_scale[0];
    temp_8 = temp_6 / temp_7;
    // 0x000038: 0x5080000000471010 Mufu
    // 0x000048: 0x5080000000470001 Mufu
    temp_9 = 1.0 / temp_2;
    // 0x000050: 0x4C68100C04A70202 Fmul
    temp_10 = temp_5 * fp_c3.data[18].z;
    // 0x000058: 0x4C68100C04B70303 Fmul
    temp_11 = temp_8 * fp_c3.data[18].w;
    // 0x000068: 0xE043FF8E0107FF09 Ipa
    temp_12 = in_attr6.x;
    // 0x000070: 0xE043FF8E4107FF0C Ipa
    temp_13 = in_attr6.y;
    // 0x000078: 0xE043FF918017FF0E Ipa
    temp_14 = in_attr9.z;
    temp_15 = gl_FragCoord.w;
    temp_16 = temp_14 * temp_15;
    temp_17 = temp_16 * temp_9;
    // 0x000088: 0xE043FF910017FF1C Ipa
    temp_18 = in_attr9.x;
    temp_19 = gl_FragCoord.w;
    temp_20 = temp_18 * temp_19;
    temp_21 = temp_20 * temp_9;
    // 0x000090: 0xE043FF914017FF1D Ipa
    temp_22 = in_attr9.y;
    temp_23 = gl_FragCoord.w;
    temp_24 = temp_22 * temp_23;
    temp_25 = temp_24 * temp_9;
    // 0x000098: 0xD830026FF0C70906 Texs
    temp_26 = texture(fp_t_tcb_26, vec2(temp_12, temp_13)).xy;
    temp_27 = temp_26.x;
    temp_28 = temp_26.y;
    // 0x0000A8: 0xD8240360B0C70920 Texs
    temp_29 = texture(fp_t_tcb_36, vec2(temp_12, temp_13)).xyw;
    temp_30 = temp_29.x;
    temp_31 = temp_29.y;
    temp_32 = temp_29.z;
    // 0x0000B0: 0xD822024080C70904 Texs
    temp_33 = texture(fp_t_tcb_24, vec2(temp_12, temp_13)).xyz;
    temp_34 = temp_33.x;
    temp_35 = temp_33.y;
    temp_36 = temp_33.z;
    // 0x0000B8: 0xD88001AFF0E71C1D Texs
    temp_37 = texture(fp_t_tcb_1A, vec3(temp_21, temp_25, temp_17));
    // 0x0000C8: 0xD86201EFF0D7020A Texs
    temp_38 = textureLod(fp_t_tcb_1E, vec2(temp_10, temp_11), 1.0).x;
    // 0x0000D0: 0xD82202000037021E Texs
    temp_39 = texture(fp_t_tcb_20, vec2(temp_10, temp_11)).xyz;
    temp_40 = temp_39.x;
    temp_41 = temp_39.y;
    temp_42 = temp_39.z;
    // 0x0000D8: 0xE043FF8B0107FF27 Ipa
    temp_43 = in_attr3.x;
    // 0x0000E8: 0xE043FF8B4107FF26 Ipa
    temp_44 = in_attr3.y;
    // 0x0000F0: 0xE043FF8B8107FF25 Ipa
    temp_45 = in_attr3.z;
    // 0x0000F8: 0xE043FF8A0107FF11 Ipa
    temp_46 = in_attr2.x;
    // 0x000108: 0xE043FF880107FF01 Ipa
    temp_47 = in_attr0.x;
    // 0x000110: 0xE043FF8A4107FF13 Ipa
    temp_48 = in_attr2.y;
    // 0x000118: 0xE043FF890107FF17 Ipa
    temp_49 = in_attr1.x;
    // 0x000128: 0xE043FF8A8107FF15 Ipa
    temp_50 = in_attr2.z;
    // 0x000130: 0xE043FF894107FF18 Ipa
    temp_51 = in_attr1.y;
    // 0x000138: 0xE043FF884107FF0C Ipa
    temp_52 = in_attr0.y;
    // 0x000148: 0xE043FF888107FF09 Ipa
    temp_53 = in_attr0.z;
    // 0x000150: 0xE2900000E1800000 Ssy
    // 0x000158: 0xE043FF898107FF0D Ipa
    temp_54 = in_attr1.z;
    // 0x000168: 0x5C6810000277270F Fmul
    temp_55 = temp_43 * temp_43;
    // 0x000170: 0x5C6810000117110E Fmul
    temp_56 = temp_46 * temp_46;
    // 0x000178: 0x5C68100000170116 Fmul
    temp_57 = temp_47 * temp_47;
    // 0x000188: 0x59A007800267260F Ffma
    temp_58 = fma(temp_44, temp_44, temp_55);
    // 0x000190: 0x5C68100001771712 Fmul
    temp_59 = temp_49 * temp_49;
    // 0x000198: 0x59A007000137130E Ffma
    temp_60 = fma(temp_48, temp_48, temp_56);
    // 0x0001A8: 0x59A00B0000C70C1A Ffma
    temp_61 = fma(temp_52, temp_52, temp_57);
    // 0x0001B0: 0x59A007800257250F Ffma
    temp_62 = fma(temp_45, temp_45, temp_58);
    // 0x0001B8: 0x59A0090001871812 Ffma
    temp_63 = fma(temp_51, temp_51, temp_59);
    // 0x0001C8: 0x5080000000570F14 Mufu
    temp_64 = inversesqrt(temp_62);
    // 0x0001D0: 0x59A0070001571516 Ffma
    temp_65 = fma(temp_50, temp_50, temp_60);
    // 0x0001D8: 0x59A00D000097091B Ffma
    temp_66 = fma(temp_53, temp_53, temp_61);
    // 0x0001E8: 0x5080000000571616 Mufu
    temp_67 = inversesqrt(temp_65);
    // 0x0001F0: 0x59A0090000D70D19 Ffma
    temp_68 = fma(temp_54, temp_54, temp_63);
    // 0x0001F8: 0x5080000000571B1B Mufu
    temp_69 = inversesqrt(temp_66);
    // 0x000208: 0x5C69100001472727 Fmul
    temp_70 = 0.0 - temp_64;
    temp_71 = temp_43 * temp_70;
    // 0x000210: 0x5080000000571922 Mufu
    temp_72 = inversesqrt(temp_68);
    // 0x000218: 0x5C69100001472626 Fmul
    temp_73 = 0.0 - temp_64;
    temp_74 = temp_44 * temp_73;
    // 0x000228: 0x5C69100001472525 Fmul
    temp_75 = 0.0 - temp_64;
    temp_76 = temp_45 * temp_75;
    // 0x000230: 0x5C6810000167111A Fmul
    temp_77 = temp_46 * temp_67;
    // 0x000238: 0x5C6810000167131C Fmul
    temp_78 = temp_48 * temp_67;
    // 0x000248: 0x5C68100001671515 Fmul
    temp_79 = temp_50 * temp_67;
    // 0x000250: 0x4C58301805C7270E Fadd
    temp_80 = 0.0 - fp_c6.data[23].x;
    temp_81 = temp_71 + temp_80;
    // 0x000258: 0x4C58301805D7260F Fadd
    temp_82 = 0.0 - fp_c6.data[23].y;
    temp_83 = temp_74 + temp_82;
    // 0x000268: 0x4C58301805E72511 Fadd
    temp_84 = 0.0 - fp_c6.data[23].z;
    temp_85 = temp_76 + temp_84;
    // 0x000270: 0x5C68100001B70124 Fmul
    temp_86 = temp_47 * temp_69;
    // 0x000278: 0x5C68100000E70E12 Fmul
    temp_87 = temp_81 * temp_81;
    // 0x000288: 0x5C68100002271719 Fmul
    temp_88 = temp_49 * temp_72;
    // 0x000290: 0x5C68100002271817 Fmul
    temp_89 = temp_51 * temp_72;
    // 0x000298: 0x5C68100002270D18 Fmul
    temp_90 = temp_54 * temp_72;
    // 0x0002A8: 0x5C68100001B7090D Fmul
    temp_91 = temp_53 * temp_69;
    // 0x0002B0: 0x5C68100001B70C22 Fmul
    temp_92 = temp_52 * temp_69;
    // 0x0002B8: 0x59A0090000F70F12 Ffma
    temp_93 = fma(temp_83, temp_83, temp_87);
    // 0x0002C8: 0x59A0090001171112 Ffma
    temp_94 = fma(temp_85, temp_85, temp_93);
    // 0x0002D0: 0x5080000000571214 Mufu
    temp_95 = inversesqrt(temp_94);
    // 0x0002D8: 0x01040DF760C7F012 Mov32i
    // 0x0002E8: 0x5C68100001470E09 Fmul
    temp_96 = temp_81 * temp_95;
    // 0x0002F0: 0x5C68100001470F0C Fmul
    temp_97 = temp_83 * temp_95;
    // 0x0002F8: 0x5C6810000147110E Fmul
    temp_98 = temp_85 * temp_95;
    // 0x000308: 0xF0F0000034370000 Depbar
    // 0x000310: 0x5C68100000770701 Fmul
    temp_99 = temp_28 * temp_28;
    // 0x000318: 0x5C68100000771A13 Fmul
    temp_100 = temp_77 * temp_28;
    // 0x000328: 0x5C68100000771C1C Fmul
    temp_101 = temp_78 * temp_28;
    // 0x000330: 0x5C68100000771515 Fmul
    temp_102 = temp_79 * temp_28;
    // 0x000338: 0x4C6810180A072020 Fmul
    temp_103 = temp_30 * fp_c6.data[40].x;
    // 0x000348: 0x4C68101402D70505 Fmul
    temp_104 = temp_35 * fp_c5.data[11].y;
    // 0x000350: 0x59A0008000670601 Ffma
    temp_105 = fma(temp_27, temp_27, temp_99);
    // 0x000358: 0x59A0098001970613 Ffma
    temp_106 = fma(temp_27, temp_88, temp_100);
    // 0x000368: 0x59A00E0001770617 Ffma
    temp_107 = fma(temp_27, temp_89, temp_101);
    // 0x000370: 0x59A00A8001870618 Ffma
    temp_108 = fma(temp_27, temp_90, temp_102);
    // 0x000378: 0xF0F0000034270000 Depbar
    // 0x000388: 0x385D103F80071D1D Fadd
    temp_109 = 0.0 - temp_37;
    temp_110 = temp_109 + 1.0;
    temp_111 = clamp(temp_110, 0.0, 1.0);
    // 0x000390: 0x385D103F80070116 Fadd
    temp_112 = 0.0 - temp_105;
    temp_113 = temp_112 + 1.0;
    temp_114 = clamp(temp_113, 0.0, 1.0);
    // 0x000398: 0x5C68100000972701 Fmul
    temp_115 = temp_71 * temp_96;
    // 0x0003A8: 0x5080000000871616 Mufu
    temp_116 = sqrt(temp_114);
    // 0x0003B0: 0x59A0008000C72607 Ffma
    temp_117 = fma(temp_74, temp_97, temp_115);
    // 0x0003B8: 0x4C69101805C70901 Fmul
    temp_118 = 0.0 - fp_c6.data[23].x;
    temp_119 = temp_96 * temp_118;
    // 0x0003C8: 0x59A4038000E72507 Ffma
    temp_120 = fma(temp_76, temp_98, temp_117);
    temp_121 = clamp(temp_120, 0.0, 1.0);
    // 0x0003D0: 0x59A0098001672413 Ffma
    temp_122 = fma(temp_86, temp_116, temp_106);
    // 0x0003D8: 0x59A00B8001672217 Ffma
    temp_123 = fma(temp_92, temp_116, temp_107);
    // 0x0003E8: 0x49A1009805D70C0F Ffma
    temp_124 = 0.0 - fp_c6.data[23].y;
    temp_125 = fma(temp_97, temp_124, temp_119);
    // 0x0003F0: 0x59A00C0001670D0D Ffma
    temp_126 = fma(temp_91, temp_116, temp_108);
    // 0x0003F8: 0x49A2090400070701 Ffma
    temp_127 = fma(temp_121, fp_c1.data[0].x, -6.98316002);
    // 0x000408: 0x5C68100001371306 Fmul
    temp_128 = temp_122 * temp_122;
    // 0x000410: 0x49A5079805E70E11 Ffma
    temp_129 = 0.0 - fp_c6.data[23].z;
    temp_130 = fma(temp_98, temp_129, temp_125);
    temp_131 = clamp(temp_130, 0.0, 1.0);
    // 0x000418: 0x5C68100000170707 Fmul
    temp_132 = temp_121 * temp_127;
    // 0x000428: 0x59A0030001771706 Ffma
    temp_133 = fma(temp_123, temp_123, temp_128);
    // 0x000430: 0x49A2090400071112 Ffma
    temp_134 = fma(temp_131, fp_c1.data[0].x, -6.98316002);
    // 0x000438: 0x59A0030000D70D0F Ffma
    temp_135 = fma(temp_126, temp_126, temp_133);
    // 0x000448: 0x5080000000570F1C Mufu
    temp_136 = inversesqrt(temp_135);
    // 0x000450: 0x5C68100001271106 Fmul
    temp_137 = temp_131 * temp_134;
    // 0x000458: 0x3868104180070211 Fmul
    temp_138 = temp_10 * 16.0;
    // 0x000468: 0x3868104110070312 Fmul
    temp_139 = temp_11 * 9.0;
    // 0x000470: 0x5CA8148001170A11 F2f
    temp_140 = floor(temp_138);
    // 0x000478: 0x386013BF80072002 Fmnmx
    temp_141 = min(temp_103, 1.0);
    // 0x000488: 0x5CA8148001270A12 F2f
    temp_142 = floor(temp_139);
    // 0x000490: 0x5C9000800077000F Rro
    // 0x000498: 0x5080000000270F0F Mufu
    temp_143 = exp2(temp_132);
    // 0x0004A8: 0x4C60178400170202 Fmnmx
    temp_144 = max(temp_141, fp_c1.data[0].y);
    // 0x0004B0: 0x5C68100001C7131A Fmul
    temp_145 = temp_122 * temp_136;
    // 0x0004B8: 0x5C68100001C71701 Fmul
    temp_146 = temp_123 * temp_136;
    // 0x0004C8: 0x5C68100001C70D1C Fmul
    temp_147 = temp_126 * temp_136;
    // 0x0004D0: 0x5C90008000670017 Rro
    // 0x0004D8: 0x51A4010400170230 Ffma
    temp_148 = fma(temp_144, temp_144, fp_c1.data[0].y);
    temp_149 = clamp(temp_148, 0.0, 1.0);
    // 0x0004E8: 0x5080000000271717 Mufu
    temp_150 = exp2(temp_137);
    // 0x0004F0: 0x5C68100001A70903 Fmul
    temp_151 = temp_96 * temp_145;
    // 0x0004F8: 0x32A008C180071231 Ffma
    temp_152 = fma(temp_142, 16.0, temp_140);
    // 0x000508: 0x5CB0118003170A31 F2i
    temp_153 = trunc(temp_152);
    temp_154 = max(temp_153, 0.0);
    temp_155 = uint(temp_154);
    // 0x000510: 0x5C6810000307302F Fmul
    temp_156 = temp_149 * temp_149;
    // 0x000518: 0x59A0018000170C09 Ffma
    temp_157 = fma(temp_97, temp_146, temp_151);
    // 0x000528: 0x0103F0000007F00C Mov32i
    // 0x000530: 0x5C68100001A72703 Fmul
    temp_158 = temp_71 * temp_145;
    // 0x000538: 0x59A4048001C70E0D Ffma
    temp_159 = fma(temp_98, temp_147, temp_157);
    temp_160 = clamp(temp_159, 0.0, 1.0);
    // 0x000548: 0x32A0063F0007022E Ffma
    temp_161 = fma(temp_144, 0.5, 0.5);
    // 0x000550: 0x59A001800017260E Ffma
    temp_162 = fma(temp_74, temp_146, temp_158);
    // 0x000558: 0x4C69101805C71A0C Fmul
    temp_163 = 0.0 - fp_c6.data[23].x;
    temp_164 = temp_145 * temp_163;
    // 0x000568: 0x4C68101402C70403 Fmul
    temp_165 = temp_34 * fp_c5.data[11].x;
    // 0x000570: 0x384800000087312C Shl
    temp_166 = int(temp_155) << 8;
    // 0x000578: 0x5C68120002E72E2E Fmul
    temp_167 = temp_161 * 0.5;
    temp_168 = temp_167 * temp_161;
    // 0x000588: 0xEF94008200472C2C Ldc
    temp_169 = temp_166 + 0x2004;
    temp_170 = uint(temp_169) >> 2;
    temp_171 = temp_170 >> 2;
    temp_172 = int(temp_170) & 3;
    temp_173 = fp_c8.data[int(temp_171)][temp_172];
    // 0x000590: 0x59A4070001C72504 Ffma
    temp_174 = fma(temp_76, temp_147, temp_162);
    temp_175 = clamp(temp_174, 0.0, 1.0);
    // 0x000598: 0x49A1061805D70109 Ffma
    temp_176 = 0.0 - fp_c6.data[23].y;
    temp_177 = fma(temp_146, temp_176, temp_164);
    // 0x0005A8: 0x59A2068002F70D0E Ffma
    temp_178 = 0.0 - temp_160;
    temp_179 = fma(temp_160, temp_156, temp_178);
    // 0x0005B0: 0x4C58301407B70307 Fadd
    temp_180 = 0.0 - fp_c5.data[30].w;
    temp_181 = temp_165 + temp_180;
    // 0x0005B8: 0x5C68100000470128 Fmul
    temp_182 = temp_146 * temp_175;
    // 0x0005C8: 0x49A5049805E71C0C Ffma
    temp_183 = 0.0 - fp_c6.data[23].z;
    temp_184 = fma(temp_147, temp_183, temp_177);
    temp_185 = clamp(temp_184, 0.0, 1.0);
    // 0x0005D0: 0x51A0070400270D12 Ffma
    temp_186 = fma(temp_160, temp_179, fp_c1.data[0].z);
    // 0x0005D8: 0x59A1020002E70409 Ffma
    temp_187 = 0.0 - temp_168;
    temp_188 = fma(temp_175, temp_187, temp_175);
    // 0x0005E8: 0x5080000000471215 Mufu
    temp_189 = 1.0 / temp_186;
    // 0x0005F0: 0x4C58301407B7050E Fadd
    temp_190 = 0.0 - fp_c5.data[30].w;
    temp_191 = temp_104 + temp_190;
    // 0x0005F8: 0x51A0039407B72106 Ffma
    temp_192 = fma(temp_31, temp_181, fp_c5.data[30].w);
    // 0x000608: 0x59A1060002E70C0D Ffma
    temp_193 = 0.0 - temp_168;
    temp_194 = fma(temp_185, temp_193, temp_185);
    // 0x000610: 0x4C68101402E70807 Fmul
    temp_195 = temp_36 * fp_c5.data[11].z;
    // 0x000618: 0x4C68101801470C11 Fmul
    temp_196 = temp_185 * fp_c6.data[5].x;
    // 0x000628: 0x5C58100000972E13 Fadd
    temp_197 = temp_168 + temp_188;
    // 0x000630: 0x51A0071407B72108 Ffma
    temp_198 = fma(temp_31, temp_191, fp_c5.data[30].w);
    // 0x000638: 0x508000000047132D Mufu
    temp_199 = 1.0 / temp_197;
    // 0x000648: 0x59A1078000670F09 Ffma
    temp_200 = 0.0 - temp_192;
    temp_201 = fma(temp_143, temp_200, temp_143);
    // 0x000650: 0x5C58100000D72E14 Fadd
    temp_202 = temp_168 + temp_194;
    // 0x000658: 0x4C58301407B7070E Fadd
    temp_203 = 0.0 - fp_c5.data[30].w;
    temp_204 = temp_195 + temp_203;
    // 0x000668: 0x5080000000471416 Mufu
    temp_205 = 1.0 / temp_202;
    // 0x000670: 0x4C68101801570C12 Fmul
    temp_206 = temp_185 * fp_c6.data[5].y;
    // 0x000678: 0x59A1078000870F0D Ffma
    temp_207 = 0.0 - temp_198;
    temp_208 = fma(temp_143, temp_207, temp_143);
    // 0x000688: 0x5C58100000970609 Fadd
    temp_209 = temp_192 + temp_201;
    // 0x000690: 0x1E23EA2F98371113 Fmul32i
    temp_210 = temp_196 * 0.318309873;
    // 0x000698: 0x5C68100001573015 Fmul
    temp_211 = temp_149 * temp_189;
    // 0x0006A8: 0x5C68100000471C1B Fmul
    temp_212 = temp_147 * temp_175;
    // 0x0006B0: 0x32A2134000072828 Ffma
    temp_213 = 0.0 - temp_74;
    temp_214 = fma(temp_182, 2.0, temp_213);
    // 0x0006B8: 0x5C58100000D7080D Fadd
    temp_215 = temp_198 + temp_208;
    // 0x0006C8: 0x4C68101406970911 Fmul
    temp_216 = temp_209 * fp_c5.data[26].y;
    // 0x0006D0: 0x51A0071407B72109 Ffma
    temp_217 = fma(temp_31, temp_204, fp_c5.data[30].w);
    // 0x0006D8: 0x1E23EA2F98371214 Fmul32i
    temp_218 = temp_206 * 0.318309873;
    // 0x0006E8: 0x3868103F00072D2D Fmul
    temp_219 = temp_199 * 0.5;
    // 0x0006F0: 0x59A10B8001770812 Ffma
    temp_220 = 0.0 - temp_150;
    temp_221 = fma(temp_198, temp_220, temp_150);
    // 0x0006F8: 0x4C68101406970D0E Fmul
    temp_222 = temp_215 * fp_c5.data[26].y;
    // 0x000708: 0x59A109800137110D Ffma
    temp_223 = 0.0 - temp_210;
    temp_224 = fma(temp_216, temp_223, temp_210);
    // 0x000710: 0x59A10B8001770611 Ffma
    temp_225 = 0.0 - temp_150;
    temp_226 = fma(temp_192, temp_225, temp_150);
    // 0x000718: 0x5C68100001571515 Fmul
    temp_227 = temp_211 * temp_211;
    // 0x000728: 0x5C68100001672D16 Fmul
    temp_228 = temp_219 * temp_205;
    // 0x000730: 0x5C58100001270812 Fadd
    temp_229 = temp_198 + temp_221;
    // 0x000738: 0x59A10B8001770917 Ffma
    temp_230 = 0.0 - temp_150;
    temp_231 = fma(temp_217, temp_230, temp_150);
    // 0x000748: 0x59A1078000970F0F Ffma
    temp_232 = 0.0 - temp_217;
    temp_233 = fma(temp_143, temp_232, temp_143);
    // 0x000750: 0x5C58100001170611 Fadd
    temp_234 = temp_192 + temp_226;
    // 0x000758: 0x59A10A0001470E0E Ffma
    temp_235 = 0.0 - temp_218;
    temp_236 = fma(temp_222, temp_235, temp_218);
    // 0x000768: 0x5C68100001671515 Fmul
    temp_237 = temp_227 * temp_228;
    // 0x000770: 0x4C68101406971212 Fmul
    temp_238 = temp_229 * fp_c5.data[26].y;
    // 0x000778: 0x5C58100001770917 Fadd
    temp_239 = temp_217 + temp_231;
    // 0x000788: 0x3859103F80071D14 Fadd
    temp_240 = 0.0 - temp_111;
    temp_241 = temp_240 + 1.0;
    // 0x000790: 0x4C68101406971111 Fmul
    temp_242 = temp_234 * fp_c5.data[26].y;
    // 0x000798: 0x5C58100000F7090F Fadd
    temp_243 = temp_217 + temp_233;
    // 0x0007A8: 0x5C68100001570C15 Fmul
    temp_244 = temp_185 * temp_237;
    // 0x0007B0: 0x4C68101801571212 Fmul
    temp_245 = temp_238 * fp_c6.data[5].y;
    // 0x0007B8: 0x4C68101406971717 Fmul
    temp_246 = temp_239 * fp_c5.data[26].y;
    // 0x0007C8: 0x4C68101801670C0C Fmul
    temp_247 = temp_185 * fp_c6.data[5].z;
    // 0x0007D0: 0x4C68101801471113 Fmul
    temp_248 = temp_242 * fp_c6.data[5].x;
    // 0x0007D8: 0x4C6C101406870B11 Fmul
    temp_249 = temp_32 * fp_c5.data[26].x;
    temp_250 = clamp(temp_249, 0.0, 1.0);
    // 0x0007E8: 0x4C68101406970F0F Fmul
    temp_251 = temp_243 * fp_c5.data[26].y;
    // 0x0007F0: 0x5C68100001271512 Fmul
    temp_252 = temp_244 * temp_245;
    // 0x0007F8: 0x4C68101801671717 Fmul
    temp_253 = temp_246 * fp_c6.data[5].z;
    // 0x000808: 0x1E23EA2F98370C0C Fmul32i
    temp_254 = temp_247 * 0.318309873;
    // 0x000810: 0x5C68100001371513 Fmul
    temp_255 = temp_244 * temp_248;
    // 0x000818: 0xF0F0000034170000 Depbar
    // 0x000828: 0x51A5088400270A11 Ffma
    temp_256 = 0.0 - temp_250;
    temp_257 = fma(temp_38, temp_256, fp_c1.data[0].z);
    temp_258 = clamp(temp_257, 0.0, 1.0);
    // 0x000830: 0x5B6603800FF72C07 Isetp
    temp_259 = floatBitsToUint(temp_173) <= 0u;
    // 0x000838: 0x5C68100001271423 Fmul
    temp_260 = temp_241 * temp_252;
    // 0x000848: 0x5C68100001771517 Fmul
    temp_261 = temp_244 * temp_253;
    // 0x000850: 0x59A1060000C70F0B Ffma
    temp_262 = 0.0 - temp_254;
    temp_263 = fma(temp_251, temp_262, temp_254);
    // 0x000858: 0x5C68100001371422 Fmul
    temp_264 = temp_241 * temp_255;
    // 0x000868: 0x49A208980AC71112 Ffma
    temp_265 = 0.0 - temp_258;
    temp_266 = fma(temp_258, fp_c6.data[43].x, temp_265);
    // 0x000870: 0x49A208980AD71113 Ffma
    temp_267 = 0.0 - temp_258;
    temp_268 = fma(temp_258, fp_c6.data[43].y, temp_267);
    // 0x000878: 0x49A208980AE71111 Ffma
    temp_269 = 0.0 - temp_258;
    temp_270 = fma(temp_258, fp_c6.data[43].z, temp_269);
    // 0x000888: 0x5C68100001771424 Fmul
    temp_271 = temp_241 * temp_261;
    // 0x000890: 0x5C68100001470D0C Fmul
    temp_272 = temp_224 * temp_241;
    // 0x000898: 0x5C68100001470E0A Fmul
    temp_273 = temp_236 * temp_241;
    // 0x0008A8: 0xEF5400000007FF0C Stl
    local_memory[0] = floatBitsToUint(temp_272);
    // 0x0008B0: 0x3858103F80071212 Fadd
    temp_274 = temp_266 + 1.0;
    // 0x0008B8: 0x3858103F80071120 Fadd
    temp_275 = temp_270 + 1.0;
    // 0x0008C8: 0x3858103F80071313 Fadd
    temp_276 = temp_268 + 1.0;
    // 0x0008D0: 0x5C68100000471A11 Fmul
    temp_277 = temp_145 * temp_175;
    // 0x0008D8: 0x5C68100001470B0B Fmul
    temp_278 = temp_263 * temp_241;
    // 0x0008E8: 0x5C9807800FF7000D Mov
    // 0x0008F0: 0x5C9807800FF7000E Mov
    // 0x0008F8: 0x5C9807800FF7000F Mov
    // 0x000908: 0x5C9807800FF70014 Mov
    // 0x000910: 0x5C9807800FF70015 Mov
    // 0x000918: 0x5C9807800FF7000C Mov
    // 0x000928: 0x59A4090001270316 Ffma
    temp_279 = fma(temp_165, temp_274, temp_274);
    temp_280 = clamp(temp_279, 0.0, 1.0);
    // 0x000930: 0x59A4098001370517 Ffma
    temp_281 = fma(temp_104, temp_276, temp_276);
    temp_282 = clamp(temp_281, 0.0, 1.0);
    // 0x000938: 0x59A4100002070720 Ffma
    temp_283 = fma(temp_195, temp_275, temp_275);
    temp_284 = clamp(temp_283, 0.0, 1.0);
    // 0x000948: 0x32A213C00007112B Ffma
    temp_285 = 0.0 - temp_71;
    temp_286 = fma(temp_277, 2.0, temp_285);
    // 0x000950: 0x32A212C000071B1B Ffma
    temp_287 = 0.0 - temp_76;
    temp_288 = fma(temp_212, 2.0, temp_287);
    // 0x000958: 0x1E23E22F98372222 Fmul32i
    temp_289 = temp_264 * 0.159154937;
    // 0x000968: 0x1E23E22F98372323 Fmul32i
    temp_290 = temp_260 * 0.159154937;
    // 0x000970: 0x1E23E22F98372424 Fmul32i
    temp_291 = temp_271 * 0.159154937;
    // 0x000978: 0xF0F800000000000F Sync
    temp_292 = 0.0;
    temp_293 = 0.0;
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
    if (!temp_259)
    {
        // 0x000988: 0x5C9807800FF7002A Mov
        temp_304 = 0;
        do
        {
            // 0x000990: 0x5C18020002A73129 Iscadd
            temp_306 = int(temp_155) << 4;
            temp_307 = temp_306 + temp_304;
            // 0x000998: 0xE003FF87CFF7FF32 Ipa
            // 0x0009A8: 0x1C00000000172A2A Iadd32i
            temp_308 = temp_304 + 1;
            // 0x0009B0: 0xE003FF87CFF7FF34 Ipa
            // 0x0009B8: 0x3848000000472929 Shl
            temp_309 = temp_307 << 4;
            // 0x0009C8: 0xE003FF87CFF7FF33 Ipa
            // 0x0009D0: 0x5B6C038002C72A0F Isetp
            temp_305 = uint(temp_308) >= floatBitsToUint(temp_173);
            // 0x0009D8: 0xE290000057800000 Ssy
            // 0x0009E8: 0xEF94008200072929 Ldc
            temp_310 = temp_309 + 0x2000;
            temp_311 = uint(temp_310) >> 2;
            temp_312 = temp_311 >> 2;
            temp_313 = int(temp_311) & 3;
            temp_314 = fp_c8.data[int(temp_312)][temp_313];
            // 0x0009F0: 0x5080000000473232 Mufu
            // 0x0009F8: 0x5080000000473434 Mufu
            // 0x000A08: 0x5080000000473333 Mufu
            // 0x000A10: 0xE043FF8D0327FF32 Ipa
            temp_315 = in_attr5.x;
            // 0x000A18: 0xE043FF8D4347FF34 Ipa
            temp_316 = in_attr5.y;
            // 0x000A28: 0xE043FF8D8337FF33 Ipa
            temp_317 = in_attr5.z;
            // 0x000A30: 0x3848000000672929 Shl
            temp_318 = floatBitsToInt(temp_314) << 6;
            // 0x000A38: 0xEF95008001072910 Ldc
            temp_319 = temp_318 + 16;
            temp_320 = uint(temp_319) >> 2;
            temp_321 = temp_320 >> 2;
            temp_322 = int(temp_320) & 3;
            temp_323 = fp_c8.data[int(temp_321)][temp_322];
            temp_324 = int(temp_320) + 1;
            temp_325 = uint(temp_324) >> 2;
            temp_326 = temp_324 & 3;
            temp_327 = fp_c8.data[int(temp_325)][temp_326];
            // 0x000A48: 0xEF95008001872912 Ldc
            temp_328 = temp_318 + 24;
            temp_329 = uint(temp_328) >> 2;
            temp_330 = temp_329 >> 2;
            temp_331 = int(temp_329) & 3;
            temp_332 = fp_c8.data[int(temp_330)][temp_331];
            temp_333 = int(temp_329) + 1;
            temp_334 = uint(temp_333) >> 2;
            temp_335 = temp_333 & 3;
            temp_336 = fp_c8.data[int(temp_334)][temp_335];
            // 0x000A50: 0xEF95008002072918 Ldc
            temp_337 = temp_318 + 32;
            temp_338 = uint(temp_337) >> 2;
            temp_339 = temp_338 >> 2;
            temp_340 = int(temp_338) & 3;
            temp_341 = fp_c8.data[int(temp_339)][temp_340];
            temp_342 = int(temp_338) + 1;
            temp_343 = uint(temp_342) >> 2;
            temp_344 = temp_342 & 3;
            temp_345 = fp_c8.data[int(temp_343)][temp_344];
            // 0x000A58: 0x5C58300003271032 Fadd
            temp_346 = 0.0 - temp_315;
            temp_347 = temp_323 + temp_346;
            // 0x000A68: 0x5C58300003471135 Fadd
            temp_348 = 0.0 - temp_316;
            temp_349 = temp_327 + temp_348;
            // 0x000A70: 0x5C58300003371233 Fadd
            temp_350 = 0.0 - temp_317;
            temp_351 = temp_332 + temp_350;
            // 0x000A78: 0x5C68100003273234 Fmul
            temp_352 = temp_347 * temp_347;
            // 0x000A88: 0x59A1198003371313 Ffma
            temp_353 = 0.0 - temp_351;
            temp_354 = fma(temp_336, temp_353, temp_351);
            // 0x000A90: 0x59A01A0003573534 Ffma
            temp_355 = fma(temp_349, temp_349, temp_352);
            // 0x000A98: 0x59A01A0001371336 Ffma
            temp_356 = fma(temp_354, temp_354, temp_355);
            // 0x000AA8: 0x5080000000573610 Mufu
            temp_357 = inversesqrt(temp_356);
            // 0x000AB0: 0x5080000000873636 Mufu
            temp_358 = sqrt(temp_356);
            // 0x000AB8: 0x5C68100001073211 Fmul
            temp_359 = temp_347 * temp_357;
            // 0x000AC8: 0x5C68100001073537 Fmul
            temp_360 = temp_349 * temp_357;
            // 0x000AD0: 0x5C69100001871111 Fmul
            temp_361 = 0.0 - temp_341;
            temp_362 = temp_359 * temp_361;
            // 0x000AD8: 0x5C68100001071318 Fmul
            temp_363 = temp_354 * temp_357;
            // 0x000AE8: 0xEF95008003872912 Ldc
            temp_364 = temp_318 + 56;
            temp_365 = uint(temp_364) >> 2;
            temp_366 = temp_365 >> 2;
            temp_367 = int(temp_365) & 3;
            temp_368 = fp_c8.data[int(temp_366)][temp_367];
            temp_369 = int(temp_365) + 1;
            temp_370 = uint(temp_369) >> 2;
            temp_371 = temp_369 & 3;
            temp_372 = fp_c8.data[int(temp_370)][temp_371];
            // 0x000AF0: 0x59A1088001973737 Ffma
            temp_373 = 0.0 - temp_345;
            temp_374 = fma(temp_360, temp_373, temp_362);
            // 0x000AF8: 0xEF94008002872919 Ldc
            temp_375 = temp_318 + 40;
            temp_376 = uint(temp_375) >> 2;
            temp_377 = temp_376 >> 2;
            temp_378 = int(temp_376) & 3;
            temp_379 = fp_c8.data[int(temp_377)][temp_378];
            // 0x000B08: 0xEF95008003072910 Ldc
            temp_380 = temp_318 + 48;
            temp_381 = uint(temp_380) >> 2;
            temp_382 = temp_381 >> 2;
            temp_383 = int(temp_381) & 3;
            temp_384 = fp_c8.data[int(temp_382)][temp_383];
            temp_385 = int(temp_381) + 1;
            temp_386 = uint(temp_385) >> 2;
            temp_387 = temp_385 & 3;
            temp_388 = fp_c8.data[int(temp_386)][temp_387];
            // 0x000B10: 0x59A11B8001971818 Ffma
            temp_389 = 0.0 - temp_379;
            temp_390 = fma(temp_363, temp_389, temp_374);
            // 0x000B18: 0x59A4088003671036 Ffma
            temp_391 = fma(temp_384, temp_358, temp_388);
            temp_392 = clamp(temp_391, 0.0, 1.0);
            // 0x000B28: 0x010404000007F019 Mov32i
            // 0x000B30: 0x59A4098001271812 Ffma
            temp_393 = fma(temp_390, temp_368, temp_372);
            temp_394 = clamp(temp_393, 0.0, 1.0);
            // 0x000B38: 0x5C68100003673618 Fmul
            temp_395 = temp_392 * temp_392;
            // 0x000B48: 0x33A00CC000073613 Ffma
            temp_396 = fma(temp_392, -2.0, 3.0);
            // 0x000B50: 0x33A00CC000071219 Ffma
            temp_397 = fma(temp_394, -2.0, 3.0);
            // 0x000B58: 0x5C68100001271212 Fmul
            temp_398 = temp_394 * temp_394;
            // 0x000B68: 0x5C68100001371813 Fmul
            temp_399 = temp_395 * temp_396;
            // 0x000B70: 0x39585042F0073318 Fadd
            temp_400 = abs(temp_351);
            temp_401 = temp_400 + -120.0;
            // 0x000B78: 0x5C68100001971212 Fmul
            temp_402 = temp_398 * temp_397;
            // 0x000B88: 0x1EABD4CCCCD71818 Fmul32i
            temp_403 = temp_401 * -0.0500000007;
            temp_404 = clamp(temp_403, 0.0, 1.0);
            // 0x000B90: 0x5C68100001371212 Fmul
            temp_405 = temp_402 * temp_399;
            // 0x000B98: 0x36247F9000171313 Xmad
            temp_406 = floatBitsToUint(temp_399) >> 16;
            temp_407 = int(temp_406) << 16;
            // 0x000BA8: 0x5C68100001871212 Fmul
            temp_408 = temp_405 * temp_404;
            // 0x000BB0: 0x5BB383800FF71207 Fsetp
            temp_409 = temp_408 <= 0.0;
            // 0x000BB8: 0x7A05083C0F00FF13 Hadd2
            temp_304 = temp_308;
            temp_410 = uint(temp_407);
            temp_411 = temp_292;
            temp_412 = temp_293;
            temp_413 = temp_294;
            temp_414 = temp_295;
            temp_415 = temp_296;
            temp_416 = temp_297;
            if (temp_409)
            {
                temp_417 = unpackHalf2x16(uint(temp_407)).y;
                temp_418 = packHalf2x16(vec2(1.0, temp_417));
                temp_410 = temp_418;
            }
            // 0x000BC8: 0x5D2103902FF71307 Hsetp2
            temp_419 = unpackHalf2x16(temp_410).x;
            temp_420 = temp_419 == 0.0;
            // 0x000BD0: 0xF0F800000008000F Sync
            if (temp_420)
            {
                // 0x000BD8: 0x5080000000471010 Mufu
                temp_421 = 1.0 / temp_384;
                // 0x000BE8: 0xEF94008002C72936 Ldc
                temp_422 = temp_318 + 44;
                temp_423 = uint(temp_422) >> 2;
                temp_424 = temp_423 >> 2;
                temp_425 = int(temp_423) & 3;
                temp_426 = fp_c8.data[int(temp_424)][temp_425];
                // 0x000BF0: 0xEF94008000872937 Ldc
                temp_427 = temp_318 + 8;
                temp_428 = uint(temp_427) >> 2;
                temp_429 = temp_428 >> 2;
                temp_430 = int(temp_428) & 3;
                temp_431 = fp_c8.data[int(temp_429)][temp_430];
                // 0x000BF8: 0x5C69100001071111 Fmul
                temp_432 = 0.0 - temp_421;
                temp_433 = temp_388 * temp_432;
                // 0x000C08: 0x5C60138001173333 Fmnmx
                temp_434 = min(temp_351, temp_433);
                // 0x000C10: 0x5C61178003371133 Fmnmx
                temp_435 = 0.0 - temp_433;
                temp_436 = max(temp_435, temp_434);
                // 0x000C18: 0x59A01A0003373319 Ffma
                temp_437 = fma(temp_436, temp_436, temp_355);
                // 0x000C28: 0x5080000000571910 Mufu
                temp_438 = inversesqrt(temp_437);
                // 0x000C30: 0x5080000000871919 Mufu
                temp_439 = sqrt(temp_437);
                // 0x000C38: 0x5C68100001073213 Fmul
                temp_440 = temp_347 * temp_438;
                // 0x000C48: 0x5080000000473636 Mufu
                temp_441 = 1.0 / temp_426;
                // 0x000C50: 0x5C68100001073535 Fmul
                temp_442 = temp_349 * temp_438;
                // 0x000C58: 0x5C68100001073333 Fmul
                temp_443 = temp_436 * temp_438;
                // 0x000C68: 0x5C68100003771237 Fmul
                temp_444 = temp_408 * temp_431;
                // 0x000C70: 0x5C58100001372718 Fadd
                temp_445 = temp_71 + temp_440;
                // 0x000C78: 0x5C58100003572634 Fadd
                temp_446 = temp_74 + temp_442;
                // 0x000C88: 0x5C58100003372532 Fadd
                temp_447 = temp_76 + temp_443;
                // 0x000C90: 0x5C68100001871810 Fmul
                temp_448 = temp_445 * temp_445;
                // 0x000C98: 0x51A00C8400373619 Ffma
                temp_449 = fma(temp_441, temp_439, fp_c1.data[0].w);
                // 0x000CA8: 0x5080000000471919 Mufu
                temp_450 = 1.0 / temp_449;
                // 0x000CB0: 0x59A0080003473410 Ffma
                temp_451 = fma(temp_446, temp_446, temp_448);
                // 0x000CB8: 0x59A0080003273210 Ffma
                temp_452 = fma(temp_447, temp_447, temp_451);
                // 0x000CC8: 0x5080000000571010 Mufu
                temp_453 = inversesqrt(temp_452);
                // 0x000CD0: 0x1E23FB3333371919 Fmul32i
                temp_454 = temp_450 * 1.39999998;
                // 0x000CD8: 0x5C68100001971919 Fmul
                temp_455 = temp_454 * temp_454;
                // 0x000CE8: 0x5C68100001071818 Fmul
                temp_456 = temp_445 * temp_453;
                // 0x000CF0: 0x5C68100001073232 Fmul
                temp_457 = temp_447 * temp_453;
                // 0x000CF8: 0x5C68100001073434 Fmul
                temp_458 = temp_446 * temp_453;
                // 0x000D08: 0xEF95008000072910 Ldc
                temp_459 = uint(temp_318) >> 2;
                temp_460 = temp_459 >> 2;
                temp_461 = int(temp_459) & 3;
                temp_462 = fp_c8.data[int(temp_460)][temp_461];
                temp_463 = int(temp_459) + 1;
                temp_464 = uint(temp_463) >> 2;
                temp_465 = temp_463 & 3;
                temp_466 = fp_c8.data[int(temp_464)][temp_465];
                // 0x000D10: 0x5C68100001871329 Fmul
                temp_467 = temp_440 * temp_456;
                // 0x000D18: 0x5C68100001871A18 Fmul
                temp_468 = temp_145 * temp_456;
                // 0x000D28: 0x5C68100001371A13 Fmul
                temp_469 = temp_145 * temp_440;
                // 0x000D30: 0x59A0148003473529 Ffma
                temp_470 = fma(temp_442, temp_458, temp_467);
                // 0x000D38: 0x59A00C0003470118 Ffma
                temp_471 = fma(temp_146, temp_458, temp_468);
                // 0x000D48: 0x01040DF760C7F034 Mov32i
                // 0x000D50: 0x59A0098003570113 Ffma
                temp_472 = fma(temp_146, temp_442, temp_469);
                // 0x000D58: 0x59A4148003273329 Ffma
                temp_473 = fma(temp_443, temp_457, temp_470);
                temp_474 = clamp(temp_473, 0.0, 1.0);
                // 0x000D68: 0x59A40C0003271C18 Ffma
                temp_475 = fma(temp_147, temp_457, temp_471);
                temp_476 = clamp(temp_475, 0.0, 1.0);
                // 0x000D70: 0x59A0098003371C13 Ffma
                temp_477 = fma(temp_147, temp_443, temp_472);
                // 0x000D78: 0x49A21A0400072932 Ffma
                temp_478 = fma(temp_474, fp_c1.data[0].x, -6.98316002);
                // 0x000D88: 0x59A20C0001872F33 Ffma
                temp_479 = 0.0 - temp_476;
                temp_480 = fma(temp_156, temp_476, temp_479);
                // 0x000D90: 0x59A10C8001971319 Ffma
                temp_481 = 0.0 - temp_455;
                temp_482 = fma(temp_477, temp_481, temp_455);
                // 0x000D98: 0x5C68100003272932 Fmul
                temp_483 = temp_474 * temp_478;
                // 0x000DA8: 0x5C5C30000FF71329 Fadd
                temp_484 = temp_477 + -0.0;
                temp_485 = clamp(temp_484, 0.0, 1.0);
                // 0x000DB0: 0x51A0198400271833 Ffma
                temp_486 = fma(temp_476, temp_480, fp_c1.data[0].z);
                // 0x000DB8: 0x5C5C100001971319 Fadd
                temp_487 = temp_477 + temp_482;
                temp_488 = clamp(temp_487, 0.0, 1.0);
                // 0x000DC8: 0x5080000000473333 Mufu
                temp_489 = 1.0 / temp_486;
                // 0x000DD0: 0x5C90008003270032 Rro
                // 0x000DD8: 0x59A1148002972E18 Ffma
                temp_490 = 0.0 - temp_485;
                temp_491 = fma(temp_168, temp_490, temp_485);
                // 0x000DE8: 0x5080000000273232 Mufu
                temp_492 = exp2(temp_483);
                // 0x000DF0: 0x5C58100001872E18 Fadd
                temp_493 = temp_168 + temp_491;
                // 0x000DF8: 0x5080000000471818 Mufu
                temp_494 = 1.0 / temp_493;
                // 0x000E08: 0x5C68100001071210 Fmul
                temp_495 = temp_408 * temp_462;
                // 0x000E10: 0x5C68100001171211 Fmul
                temp_496 = temp_408 * temp_466;
                // 0x000E18: 0x5C68100003373033 Fmul
                temp_497 = temp_149 * temp_489;
                // 0x000E28: 0x59A1190003270613 Ffma
                temp_498 = 0.0 - temp_492;
                temp_499 = fma(temp_192, temp_498, temp_492);
                // 0x000E30: 0x59A1190003270812 Ffma
                temp_500 = 0.0 - temp_492;
                temp_501 = fma(temp_198, temp_500, temp_492);
                // 0x000E38: 0x59A1190003270932 Ffma
                temp_502 = 0.0 - temp_492;
                temp_503 = fma(temp_217, temp_502, temp_492);
                // 0x000E48: 0x5C68100003373333 Fmul
                temp_504 = temp_497 * temp_497;
                // 0x000E50: 0x5C58100001370613 Fadd
                temp_505 = temp_192 + temp_499;
                // 0x000E58: 0x5C58100001270812 Fadd
                temp_506 = temp_198 + temp_501;
                // 0x000E68: 0x5C68100001872D18 Fmul
                temp_507 = temp_219 * temp_494;
                // 0x000E70: 0x5C58100003270932 Fadd
                temp_508 = temp_217 + temp_503;
                // 0x000E78: 0x4C68101406971313 Fmul
                temp_509 = temp_505 * fp_c5.data[26].y;
                // 0x000E88: 0x4C68101406971212 Fmul
                temp_510 = temp_506 * fp_c5.data[26].y;
                // 0x000E90: 0x5C68100001873318 Fmul
                temp_511 = temp_504 * temp_507;
                // 0x000E98: 0x4C68101406973232 Fmul
                temp_512 = temp_508 * fp_c5.data[26].y;
                // 0x000EA8: 0x5C68100001071313 Fmul
                temp_513 = temp_509 * temp_495;
                // 0x000EB0: 0x5C68100001171212 Fmul
                temp_514 = temp_510 * temp_496;
                // 0x000EB8: 0x5C68100001872918 Fmul
                temp_515 = temp_485 * temp_511;
                // 0x000EC8: 0x5C68100003773232 Fmul
                temp_516 = temp_512 * temp_444;
                // 0x000ED0: 0x5C68100001971010 Fmul
                temp_517 = temp_495 * temp_488;
                // 0x000ED8: 0x5C68100001971111 Fmul
                temp_518 = temp_496 * temp_488;
                // 0x000EE8: 0x5C68100001973737 Fmul
                temp_519 = temp_444 * temp_488;
                // 0x000EF0: 0x5C68100001871313 Fmul
                temp_520 = temp_513 * temp_515;
                // 0x000EF8: 0x5C68100001871212 Fmul
                temp_521 = temp_514 * temp_515;
                // 0x000F08: 0x5C68100001873218 Fmul
                temp_522 = temp_516 * temp_515;
                // 0x000F10: 0x49A007840057100F Ffma
                temp_523 = fma(temp_517, fp_c1.data[1].y, temp_292);
                // 0x000F18: 0x49A00A0400571114 Ffma
                temp_524 = fma(temp_518, fp_c1.data[1].y, temp_293);
                // 0x000F28: 0x49A00A8400573715 Ffma
                temp_525 = fma(temp_519, fp_c1.data[1].y, temp_294);
                // 0x000F30: 0x49A006040047130C Ffma
                temp_526 = fma(temp_520, fp_c1.data[1].x, temp_295);
                // 0x000F38: 0x49A006840047120D Ffma
                temp_527 = fma(temp_521, fp_c1.data[1].x, temp_296);
                // 0x000F48: 0x49A007040047180E Ffma
                temp_528 = fma(temp_522, fp_c1.data[1].x, temp_297);
                // 0x000F50: 0xF0F800000007000F Sync
                temp_411 = temp_523;
                temp_412 = temp_524;
                temp_413 = temp_525;
                temp_414 = temp_526;
                temp_415 = temp_527;
                temp_416 = temp_528;
            }
            // 0x000F58: 0xE2400FFFA309000F Bra
            temp_292 = temp_411;
            temp_293 = temp_412;
            temp_294 = temp_413;
            temp_295 = temp_414;
            temp_296 = temp_415;
            temp_297 = temp_416;
            temp_298 = temp_414;
            temp_299 = temp_415;
            temp_300 = temp_413;
            temp_301 = temp_412;
            temp_302 = temp_416;
            temp_303 = temp_411;
        }
        while (!temp_305);
        // 0x000F68: 0xF0F800000007000F Sync
    }
    // 0x000F70: 0x5C62578002872B10 Fmnmx
    temp_529 = abs(temp_286);
    temp_530 = abs(temp_214);
    temp_531 = max(temp_529, temp_530);
    // 0x000F78: 0xE003FF87CFF7FF25 Ipa
    // 0x000F88: 0x5C62578000171A11 Fmnmx
    temp_532 = abs(temp_145);
    temp_533 = abs(temp_146);
    temp_534 = max(temp_532, temp_533);
    // 0x000F90: 0xEF4410000007FF32 Ldl
    temp_535 = uintBitsToFloat(local_memory[0]);
    // 0x000F98: 0x4C98079C0207002F Mov
    // 0x000FA8: 0x5C60578001071B10 Fmnmx
    temp_536 = abs(temp_288);
    temp_537 = max(temp_536, temp_531);
    // 0x000FB0: 0x5080000000471019 Mufu
    temp_538 = 1.0 / temp_537;
    // 0x000FB8: 0x5C60578001171C18 Fmnmx
    temp_539 = abs(temp_147);
    temp_540 = max(temp_539, temp_534);
    // 0x000FC8: 0x5080000000471827 Mufu
    temp_541 = 1.0 / temp_540;
    // 0x000FD0: 0x010000000017F010 Mov32i
    // 0x000FD8: 0x5C68100001972812 Fmul
    temp_542 = temp_214 * temp_538;
    // 0x000FE8: 0x5C69100001971B13 Fmul
    temp_543 = 0.0 - temp_538;
    temp_544 = temp_288 * temp_543;
    // 0x000FF0: 0x5080000000472525 Mufu
    // 0x000FF8: 0x5C69100002771C1C Fmul
    temp_545 = 0.0 - temp_541;
    temp_546 = temp_147 * temp_545;
    // 0x001008: 0x5C68100002771A1A Fmul
    temp_547 = temp_145 * temp_541;
    // 0x001010: 0x5C6810000277011B Fmul
    temp_548 = temp_146 * temp_541;
    // 0x001018: 0x5C68100001972B11 Fmul
    temp_549 = temp_286 * temp_538;
    // 0x001028: 0x38681040E007022B Fmul
    temp_550 = temp_144 * 7.0;
    // 0x001030: 0xE043FF920257FF28 Ipa
    temp_551 = in_attr10.x;
    // 0x001038: 0x5C98078001C70018 Mov
    // 0x001048: 0xE043FF924257FF29 Ipa
    temp_552 = in_attr10.y;
    // 0x001050: 0x3868104080070219 Fmul
    temp_553 = temp_144 * 4.0;
    // 0x001058: 0xE043FF928257FF2A Ipa
    temp_554 = in_attr10.z;
    // 0x001068: 0xD9A2016261C71A1C Texs
    temp_555 = textureLod(fp_t_tcb_16, vec3(temp_547, temp_548, temp_546), temp_111).xyz;
    temp_556 = temp_555.x;
    temp_557 = temp_555.y;
    temp_558 = temp_555.z;
    // 0x001070: 0xC1BA0143F2B71010 Tex
    temp_559 = textureLod(fp_t_tcb_14, vec4(temp_549, temp_542, temp_544, float(1)), temp_550).xyz;
    temp_560 = temp_559.x;
    temp_561 = temp_559.y;
    temp_562 = temp_559.z;
    // 0x001078: 0xD9A2018271871A18 Texs
    temp_563 = textureLod(fp_t_tcb_18, vec3(temp_547, temp_548, temp_546), temp_553).xyz;
    temp_564 = temp_563.x;
    temp_565 = temp_563.y;
    temp_566 = temp_563.z;
    // 0x001088: 0xDEBA0000C2F72828 TexB
    temp_567 = texture(fp_t_cb7_20, vec3(temp_551, temp_552, temp_554)).x;
    // 0x001090: 0x3859103F80070202 Fadd
    temp_568 = 0.0 - temp_144;
    temp_569 = temp_568 + 1.0;
    // 0x001098: 0x3859103F8007042B Fadd
    temp_570 = 0.0 - temp_175;
    temp_571 = temp_570 + 1.0;
    // 0x0010A8: 0x49A011180A170C22 Ffma
    temp_572 = fma(temp_298, fp_c6.data[40].y, temp_289);
    // 0x0010B0: 0x49A011980A170D23 Ffma
    temp_573 = fma(temp_299, fp_c6.data[40].y, temp_290);
    // 0x0010B8: 0x1E23E468DB97040D Fmul32i
    temp_574 = temp_175 * 0.193900004;
    // 0x0010C8: 0x49A005980A17150B Ffma
    temp_575 = fma(temp_300, fp_c6.data[40].y, temp_278);
    // 0x0010D0: 0x5C68100000270202 Fmul
    temp_576 = temp_569 * temp_569;
    // 0x0010D8: 0x010410676C97F015 Mov32i
    // 0x0010E8: 0x49A005180A17140A Ffma
    temp_577 = fma(temp_301, fp_c6.data[40].y, temp_273);
    // 0x0010F0: 0x0103E2CD9E87F01A Mov32i
    // 0x0010F8: 0x0103F0000007F014 Mov32i
    // 0x001108: 0x49A012180A170E24 Ffma
    temp_578 = fma(temp_302, fp_c6.data[40].y, temp_291);
    // 0x001110: 0x5C6810000027020C Fmul
    temp_579 = temp_576 * temp_576;
    // 0x001118: 0x4C68101809072B02 Fmul
    temp_580 = temp_571 * fp_c6.data[36].x;
    // 0x001128: 0x49A00A8400970413 Ffma
    temp_581 = fma(temp_175, fp_c1.data[2].y, 8.40400028);
    // 0x001130: 0x5080400000370202 Mufu
    temp_582 = abs(temp_580);
    temp_583 = log2(temp_582);
    // 0x001138: 0x4C9807980B470029 Mov
    // 0x001148: 0x32A00A3F0007010E Ffma
    temp_584 = fma(temp_146, 0.5, 0.5);
    // 0x001150: 0x49A0068400670C0D Ffma
    temp_585 = fma(temp_579, fp_c1.data[1].z, temp_574);
    // 0x001158: 0x49A20D0400B70C1A Ffma
    temp_586 = fma(temp_579, fp_c1.data[2].w, -0.168799996);
    // 0x001168: 0x4C98079800A7001B Mov
    // 0x001170: 0x51A0098400A70413 Ffma
    temp_587 = fma(temp_175, temp_581, fp_c1.data[2].z);
    // 0x001178: 0xF0F0000034470000 Depbar
    // 0x001188: 0x51A214980B471F1F Ffma
    temp_588 = 0.0 - fp_c6.data[45].x;
    temp_589 = fma(temp_41, fp_c6.data[45].x, temp_588);
    // 0x001190: 0x51A214980B470000 Ffma
    temp_590 = 0.0 - fp_c6.data[45].x;
    temp_591 = fma(temp_42, fp_c6.data[45].x, temp_590);
    // 0x001198: 0x088BF05D63970D15 Fadd32i
    temp_592 = temp_585 + -0.522800028;
    // 0x0011A8: 0xE04BFF904257FF0D Ipa
    temp_593 = in_attr8.y;
    temp_594 = clamp(temp_593, 0.0, 1.0);
    // 0x0011B0: 0x51A214980B471E1E Ffma
    temp_595 = 0.0 - fp_c6.data[45].x;
    temp_596 = fma(temp_40, fp_c6.data[45].x, temp_595);
    // 0x0011B8: 0x0104066978D7F029 Mov32i
    // 0x0011C8: 0x51A0098400C70401 Ffma
    temp_597 = fma(temp_175, temp_587, fp_c1.data[3].x);
    // 0x0011D0: 0x4C68101809170202 Fmul
    temp_598 = temp_583 * fp_c6.data[36].y;
    // 0x0011D8: 0x5C68100001A70C13 Fmul
    temp_599 = temp_579 * temp_586;
    // 0x0011E8: 0x5C68100001570415 Fmul
    temp_600 = temp_175 * temp_592;
    // 0x0011F0: 0x4C98079800970004 Mov
    // 0x0011F8: 0x4C98079809A70014 Mov
    // 0x001208: 0x4C59101800671B1B Fadd
    temp_601 = 0.0 - fp_c6.data[2].z;
    temp_602 = temp_601 + fp_c6.data[1].z;
    // 0x001210: 0x010404000007F02B Mov32i
    // 0x001218: 0x5C9000800027001A Rro
    // 0x001228: 0x49A2148400770C02 Ffma
    temp_603 = fma(temp_579, fp_c1.data[1].w, -3.60299993);
    // 0x001230: 0x5084000000271A1A Mufu
    temp_604 = exp2(temp_598);
    temp_605 = clamp(temp_604, 0.0, 1.0);
    // 0x001238: 0x4C59101800570404 Fadd
    temp_606 = 0.0 - fp_c6.data[2].y;
    temp_607 = temp_606 + fp_c6.data[1].y;
    // 0x001248: 0x4C58101408171414 Fadd
    temp_608 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x001250: 0x4C98079408270029 Mov
    // 0x001258: 0x5C60138000171313 Fmnmx
    temp_609 = min(temp_599, temp_597);
    // 0x001268: 0x4C98079800870001 Mov
    // 0x001270: 0x51A0010400870C2A Ffma
    temp_610 = fma(temp_579, temp_603, fp_c1.data[2].x);
    // 0x001278: 0x51A0071800970402 Ffma
    temp_611 = fma(temp_607, temp_584, fp_c6.data[2].y);
    // 0x001288: 0x51A0071800A71B04 Ffma
    temp_612 = fma(temp_602, temp_584, fp_c6.data[2].z);
    // 0x001290: 0x4C68101406972929 Fmul
    temp_613 = fp_c5.data[32].z * fp_c5.data[26].y;
    // 0x001298: 0x5C5C30000FF71313 Fadd
    temp_614 = temp_609 + -0.0;
    temp_615 = clamp(temp_614, 0.0, 1.0);
    // 0x0012A8: 0x4C59101800470101 Fadd
    temp_616 = 0.0 - fp_c6.data[2].x;
    temp_617 = temp_616 + fp_c6.data[1].x;
    // 0x0012B0: 0x59A00A8002A70C15 Ffma
    temp_618 = fma(temp_579, temp_610, temp_600);
    // 0x0012B8: 0x5C68100001A71414 Fmul
    temp_619 = temp_608 * temp_605;
    // 0x0012C8: 0x386C10424807081A Fmul
    temp_620 = temp_198 * 50.0;
    temp_621 = clamp(temp_620, 0.0, 1.0);
    // 0x0012D0: 0x33A015C000070D0C Ffma
    temp_622 = fma(temp_594, -2.0, 3.0);
    // 0x0012D8: 0x5C68100000D70D1B Fmul
    temp_623 = temp_594 * temp_594;
    // 0x0012E8: 0x4C5C100400D71515 Fadd
    temp_624 = temp_618 + fp_c1.data[3].y;
    temp_625 = clamp(temp_624, 0.0, 1.0);
    // 0x0012F0: 0x51A0071800870101 Ffma
    temp_626 = fma(temp_617, temp_584, fp_c6.data[2].x);
    // 0x0012F8: 0x4C68101808D7140D Fmul
    temp_627 = temp_619 * fp_c6.data[35].y;
    // 0x001308: 0x4C68101808E7140E Fmul
    temp_628 = temp_619 * fp_c6.data[35].z;
    // 0x001310: 0x4C68101808C71414 Fmul
    temp_629 = temp_619 * fp_c6.data[35].x;
    // 0x001318: 0x5C68100001B70C0C Fmul
    temp_630 = temp_622 * temp_623;
    // 0x001328: 0x5C68100001371A1B Fmul
    temp_631 = temp_621 * temp_615;
    // 0x001330: 0x5C59100001571315 Fadd
    temp_632 = 0.0 - temp_615;
    temp_633 = temp_632 + temp_625;
    // 0x001338: 0x59A0118002970D23 Ffma
    temp_634 = fma(temp_627, temp_613, temp_573);
    // 0x001348: 0x49A1069408270D0D Ffma
    temp_635 = 0.0 - fp_c5.data[32].z;
    temp_636 = fma(temp_627, temp_635, temp_627);
    // 0x001350: 0x59A0110002971422 Ffma
    temp_637 = fma(temp_629, temp_613, temp_572);
    // 0x001358: 0x49A10A1408271414 Ffma
    temp_638 = 0.0 - fp_c5.data[32].z;
    temp_639 = fma(temp_629, temp_638, temp_629);
    // 0x001368: 0x59A0120002970E24 Ffma
    temp_640 = fma(temp_628, temp_613, temp_578);
    // 0x001370: 0x59A00D8001570613 Ffma
    temp_641 = fma(temp_192, temp_633, temp_631);
    // 0x001378: 0xE043FF900257FF06 Ipa
    temp_642 = in_attr8.x;
    // 0x001388: 0x49A1071408270E0E Ffma
    temp_643 = 0.0 - fp_c5.data[32].z;
    temp_644 = fma(temp_628, temp_643, temp_628);
    // 0x001390: 0xE043FF8C8257FF25 Ipa
    temp_645 = in_attr4.z;
    // 0x001398: 0x59A00D8001570808 Ffma
    temp_646 = fma(temp_198, temp_633, temp_631);
    // 0x0013A8: 0x5C58100000D70A0A Fadd
    temp_647 = temp_577 + temp_636;
    // 0x0013B0: 0x59A00D8001570909 Ffma
    temp_648 = fma(temp_217, temp_633, temp_631);
    // 0x0013B8: 0x4C68101406971313 Fmul
    temp_649 = temp_641 * fp_c5.data[26].y;
    // 0x0013C8: 0x4C68101803770C0C Fmul
    temp_650 = temp_630 * fp_c6.data[13].w;
    // 0x0013D0: 0x5C58100000E70B0B Fadd
    temp_651 = temp_575 + temp_644;
    // 0x0013D8: 0x4C68101406970808 Fmul
    temp_652 = temp_646 * fp_c5.data[26].y;
    // 0x0013E8: 0x4C68101406970909 Fmul
    temp_653 = temp_648 * fp_c5.data[26].y;
    // 0x0013F0: 0xF0F0000034370000 Depbar
    // 0x0013F8: 0x49A019180A170F0F Ffma
    temp_654 = fma(temp_303, fp_c6.data[40].y, temp_535);
    // 0x001408: 0x5C58100001470F0F Fadd
    temp_655 = temp_654 + temp_639;
    // 0x001410: 0xF0F0000034170000 Depbar
    // 0x001418: 0x49A00E0400570101 Ffma
    temp_656 = fma(temp_626, fp_c1.data[1].y, temp_556);
    // 0x001428: 0x49A00E840057021D Ffma
    temp_657 = fma(temp_611, fp_c1.data[1].y, temp_557);
    // 0x001430: 0x49A0130400570404 Ffma
    temp_658 = fma(temp_612, fp_c1.data[1].y, temp_558);
    // 0x001438: 0x49A00C1808571010 Ffma
    temp_659 = fma(temp_560, fp_c6.data[33].y, temp_564);
    // 0x001448: 0x49A00C9808571111 Ffma
    temp_660 = fma(temp_561, fp_c6.data[33].y, temp_565);
    // 0x001450: 0x49A0139808571212 Ffma
    temp_661 = fma(temp_562, fp_c6.data[33].y, temp_566);
    // 0x001458: 0x5C58100000170F0F Fadd
    temp_662 = temp_655 + temp_656;
    // 0x001468: 0x5C58100001D70A0A Fadd
    temp_663 = temp_647 + temp_657;
    // 0x001470: 0x5C58100000470B04 Fadd
    temp_664 = temp_651 + temp_658;
    // 0x001478: 0x59A0110001071322 Ffma
    temp_665 = fma(temp_649, temp_659, temp_637);
    // 0x001488: 0x59A0118001170808 Ffma
    temp_666 = fma(temp_652, temp_660, temp_634);
    // 0x001490: 0x4C98079802970002 Mov
    // 0x001498: 0x59A1078000F72101 Ffma
    temp_667 = 0.0 - temp_662;
    temp_668 = fma(temp_31, temp_667, temp_662);
    // 0x0014A8: 0x59A1050000A7210A Ffma
    temp_669 = 0.0 - temp_663;
    temp_670 = fma(temp_31, temp_669, temp_663);
    // 0x0014B0: 0x59A1020000472104 Ffma
    temp_671 = 0.0 - temp_664;
    temp_672 = fma(temp_31, temp_671, temp_664);
    // 0x0014B8: 0x59A0120001270909 Ffma
    temp_673 = fma(temp_653, temp_661, temp_640);
    // 0x0014C8: 0x4C9807980287000B Mov
    // 0x0014D0: 0x59A0110000170303 Ffma
    temp_674 = fma(temp_165, temp_668, temp_665);
    // 0x0014D8: 0x59A0040000A70508 Ffma
    temp_675 = fma(temp_104, temp_670, temp_666);
    // 0x0014E8: 0x51A0011802971F01 Ffma
    temp_676 = fma(temp_589, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0014F0: 0x4C98079802A70002 Mov
    // 0x0014F8: 0x59A0048000470709 Ffma
    temp_677 = fma(temp_195, temp_672, temp_673);
    // 0x001508: 0x51A0059802871E0B Ffma
    temp_678 = fma(temp_596, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001510: 0x5C68100000371616 Fmul
    temp_679 = temp_280 * temp_674;
    // 0x001518: 0x5C68100000871717 Fmul
    temp_680 = temp_282 * temp_675;
    // 0x001528: 0x0103F8000007F007 Mov32i
    // 0x001530: 0x51A0011802A70002 Ffma
    temp_681 = fma(temp_591, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001538: 0x5C68100000972020 Fmul
    temp_682 = temp_284 * temp_677;
    // 0x001548: 0x49A503180BC72806 Ffma
    temp_683 = 0.0 - fp_c6.data[47].x;
    temp_684 = fma(temp_567, temp_683, temp_642);
    temp_685 = clamp(temp_684, 0.0, 1.0);
    // 0x001550: 0x5C58300000B71604 Fadd
    temp_686 = 0.0 - temp_678;
    temp_687 = temp_679 + temp_686;
    // 0x001558: 0x5080000000370606 Mufu
    temp_688 = log2(temp_685);
    // 0x001568: 0x5C58300000171700 Fadd
    temp_689 = 0.0 - temp_676;
    temp_690 = temp_680 + temp_689;
    // 0x001570: 0x5C58300000272003 Fadd
    temp_691 = 0.0 - temp_681;
    temp_692 = temp_682 + temp_691;
    // 0x001578: 0x49A005980BF70404 Ffma
    temp_693 = fma(temp_687, fp_c6.data[47].w, temp_678);
    // 0x001588: 0x49A000980BF70000 Ffma
    temp_694 = fma(temp_690, fp_c6.data[47].w, temp_676);
    // 0x001590: 0x49A001180BF70303 Ffma
    temp_695 = fma(temp_692, fp_c6.data[47].w, temp_681);
    // 0x001598: 0x5C60178000470B04 Fmnmx
    temp_696 = max(temp_678, temp_693);
    // 0x0015A8: 0x4C68101803170605 Fmul
    temp_697 = temp_688 * fp_c6.data[12].y;
    // 0x0015B0: 0x5C60178000070100 Fmnmx
    temp_698 = max(temp_676, temp_694);
    // 0x0015B8: 0x49A2061803470C01 Ffma
    temp_699 = 0.0 - temp_650;
    temp_700 = fma(temp_650, fp_c6.data[13].x, temp_699);
    // 0x0015C8: 0x5C60178000370203 Fmnmx
    temp_701 = max(temp_681, temp_695);
    // 0x0015D0: 0x5C90008000570006 Rro
    // 0x0015D8: 0x49A2061803570C05 Ffma
    temp_702 = 0.0 - temp_650;
    temp_703 = fma(temp_650, fp_c6.data[13].y, temp_702);
    // 0x0015E8: 0x5080000000270606 Mufu
    temp_704 = exp2(temp_697);
    // 0x0015F0: 0x49A2061803670C0C Ffma
    temp_705 = 0.0 - temp_650;
    temp_706 = fma(temp_650, fp_c6.data[13].z, temp_705);
    // 0x0015F8: 0x59A0020000170401 Ffma
    temp_707 = fma(temp_696, temp_700, temp_696);
    // 0x001608: 0x4C58100C03872504 Fadd
    temp_708 = temp_645 + fp_c3.data[14].x;
    // 0x001610: 0x59A0000000570005 Ffma
    temp_709 = fma(temp_698, temp_703, temp_698);
    // 0x001618: 0x59A0018000C70302 Ffma
    temp_710 = fma(temp_701, temp_706, temp_701);
    // 0x001628: 0x5C59100000171600 Fadd
    temp_711 = 0.0 - temp_679;
    temp_712 = temp_711 + temp_707;
    // 0x001630: 0x49A37F8C03C70404 Ffma
    temp_713 = 0.0 - fp_c3.data[15].x;
    temp_714 = fma(temp_708, temp_713, -0.0);
    // 0x001638: 0x5C59100000571701 Fadd
    temp_715 = 0.0 - temp_680;
    temp_716 = temp_715 + temp_709;
    // 0x001648: 0x4C68101802B70603 Fmul
    temp_717 = temp_704 * fp_c6.data[10].w;
    // 0x001650: 0x5C59100000272002 Fadd
    temp_718 = 0.0 - temp_682;
    temp_719 = temp_718 + temp_710;
    // 0x001658: 0x0103F6000007F005 Mov32i
    // 0x001668: 0x5C9807800FF70006 Mov
    // 0x001670: 0x59A00B0000370000 Ffma
    temp_720 = fma(temp_712, temp_717, temp_679);
    // 0x001678: 0x59A00B8000370101 Ffma
    temp_721 = fma(temp_716, temp_717, temp_680);
    // 0x001688: 0x59A0100000370202 Ffma
    temp_722 = fma(temp_719, temp_717, temp_682);
    // 0x001690: 0x0103F8000007F003 Mov32i
    // 0x001698: 0xE30000000007000F Exit
    out_attr0.x = temp_720;
    out_attr0.y = temp_721;
    out_attr0.z = temp_722;
    out_attr0.w = 1.0;
    out_attr1.x = temp_714;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
