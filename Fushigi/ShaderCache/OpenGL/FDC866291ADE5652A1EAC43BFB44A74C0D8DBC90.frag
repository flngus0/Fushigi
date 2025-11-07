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
    precise vec4 temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
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
    uint temp_182;
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
    int temp_196;
    precise float temp_197;
    int temp_198;
    uint temp_199;
    uint temp_200;
    int temp_201;
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
    int temp_294;
    bool temp_295;
    int temp_296;
    int temp_297;
    int temp_298;
    int temp_299;
    int temp_300;
    uint temp_301;
    uint temp_302;
    int temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    precise float temp_307;
    int temp_308;
    int temp_309;
    uint temp_310;
    uint temp_311;
    int temp_312;
    precise float temp_313;
    int temp_314;
    uint temp_315;
    int temp_316;
    precise float temp_317;
    int temp_318;
    uint temp_319;
    uint temp_320;
    int temp_321;
    precise float temp_322;
    int temp_323;
    uint temp_324;
    int temp_325;
    precise float temp_326;
    int temp_327;
    uint temp_328;
    uint temp_329;
    int temp_330;
    precise float temp_331;
    int temp_332;
    uint temp_333;
    int temp_334;
    precise float temp_335;
    precise float temp_336;
    precise float temp_337;
    int temp_338;
    uint temp_339;
    uint temp_340;
    int temp_341;
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
    precise float temp_359;
    precise float temp_360;
    int temp_361;
    uint temp_362;
    uint temp_363;
    int temp_364;
    precise float temp_365;
    int temp_366;
    uint temp_367;
    int temp_368;
    precise float temp_369;
    precise float temp_370;
    precise float temp_371;
    int temp_372;
    uint temp_373;
    uint temp_374;
    int temp_375;
    precise float temp_376;
    int temp_377;
    uint temp_378;
    int temp_379;
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
    precise float temp_394;
    precise float temp_395;
    uint temp_396;
    int temp_397;
    precise float temp_398;
    bool temp_399;
    uint temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    precise float temp_405;
    precise float temp_406;
    precise float temp_407;
    uint temp_408;
    precise float temp_409;
    bool temp_410;
    precise float temp_411;
    int temp_412;
    uint temp_413;
    uint temp_414;
    int temp_415;
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
    uint temp_444;
    uint temp_445;
    int temp_446;
    precise float temp_447;
    int temp_448;
    uint temp_449;
    int temp_450;
    precise float temp_451;
    precise float temp_452;
    int temp_453;
    uint temp_454;
    uint temp_455;
    int temp_456;
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
    precise float temp_535;
    precise float temp_536;
    precise float temp_537;
    precise float temp_538;
    precise float temp_539;
    precise float temp_540;
    precise float temp_541;
    precise float temp_542;
    precise vec3 temp_543;
    precise float temp_544;
    precise float temp_545;
    precise float temp_546;
    precise vec3 temp_547;
    precise float temp_548;
    precise float temp_549;
    precise float temp_550;
    precise vec3 temp_551;
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
    // 0x000008: 0x0103F8000007F00D Mov32i
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0x0103F0000007F02F Mov32i
    // 0x000028: 0xE003FF91CFF7FF00 Ipa
    temp_0 = in_attr9.w;
    temp_1 = gl_FragCoord.w;
    temp_2 = temp_0 * temp_1;
    // 0x000030: 0xE003FF870FF7FF02 Ipa
    temp_3 = gl_FragCoord.x;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000038: 0xE003FF874FF7FF03 Ipa
    temp_6 = gl_FragCoord.y;
    temp_7 = support_buffer.render_scale[0];
    temp_8 = temp_6 / temp_7;
    // 0x000048: 0x5080000000471010 Mufu
    // 0x000050: 0x5080000000470009 Mufu
    temp_9 = 1.0 / temp_2;
    // 0x000058: 0x4C68100C04A70202 Fmul
    temp_10 = temp_5 * fp_c3.data[18].z;
    // 0x000068: 0x4C68100C04B70303 Fmul
    temp_11 = temp_8 * fp_c3.data[18].w;
    // 0x000070: 0xE043FF8E0107FF07 Ipa
    temp_12 = in_attr6.x;
    // 0x000078: 0xE043FF8E4107FF08 Ipa
    temp_13 = in_attr6.y;
    // 0x000088: 0xE043FF918097FF12 Ipa
    temp_14 = in_attr9.z;
    temp_15 = gl_FragCoord.w;
    temp_16 = temp_14 * temp_15;
    temp_17 = temp_16 * temp_9;
    // 0x000090: 0xE043FF910097FF1C Ipa
    temp_18 = in_attr9.x;
    temp_19 = gl_FragCoord.w;
    temp_20 = temp_18 * temp_19;
    temp_21 = temp_20 * temp_9;
    // 0x000098: 0xE043FF914097FF1D Ipa
    temp_22 = in_attr9.y;
    temp_23 = gl_FragCoord.w;
    temp_24 = temp_22 * temp_23;
    temp_25 = temp_24 * temp_9;
    // 0x0000A8: 0xD830026FF0870704 Texs
    temp_26 = texture(fp_t_tcb_26, vec2(temp_12, temp_13)).xy;
    temp_27 = temp_26.x;
    temp_28 = temp_26.y;
    // 0x0000B0: 0xD824036010870722 Texs
    temp_29 = texture(fp_t_tcb_36, vec2(temp_12, temp_13)).xyw;
    temp_30 = temp_29.x;
    temp_31 = temp_29.y;
    temp_32 = temp_29.z;
    // 0x0000B8: 0xD832024160870720 Texs
    temp_33 = texture(fp_t_tcb_24, vec2(temp_12, temp_13)).xyzw;
    temp_34 = temp_33.x;
    temp_35 = temp_33.y;
    temp_36 = temp_33.z;
    temp_37 = temp_33.w;
    // 0x0000C8: 0xD88001AFF1271C1D Texs
    temp_38 = texture(fp_t_tcb_1A, vec3(temp_21, temp_25, temp_17));
    // 0x0000D0: 0xD86201EFF0D70206 Texs
    temp_39 = textureLod(fp_t_tcb_1E, vec2(temp_10, temp_11), 1.0).x;
    // 0x0000D8: 0xD82202000037021E Texs
    temp_40 = texture(fp_t_tcb_20, vec2(temp_10, temp_11)).xyz;
    temp_41 = temp_40.x;
    temp_42 = temp_40.y;
    temp_43 = temp_40.z;
    // 0x0000E8: 0xE043FF8B0107FF27 Ipa
    temp_44 = in_attr3.x;
    // 0x0000F0: 0xE043FF8B4107FF26 Ipa
    temp_45 = in_attr3.y;
    // 0x0000F8: 0xE043FF8B8107FF25 Ipa
    temp_46 = in_attr3.z;
    // 0x000108: 0xE043FF880107FF09 Ipa
    temp_47 = in_attr0.x;
    // 0x000110: 0xE043FF8A0107FF0A Ipa
    temp_48 = in_attr2.x;
    // 0x000118: 0xE043FF890107FF0E Ipa
    temp_49 = in_attr1.x;
    // 0x000128: 0xE043FF8A4107FF0B Ipa
    temp_50 = in_attr2.y;
    // 0x000130: 0xE043FF894107FF0F Ipa
    temp_51 = in_attr1.y;
    // 0x000138: 0xE043FF8A8107FF0C Ipa
    temp_52 = in_attr2.z;
    // 0x000148: 0xE043FF884107FF08 Ipa
    temp_53 = in_attr0.y;
    // 0x000150: 0xE043FF888107FF07 Ipa
    temp_54 = in_attr0.z;
    // 0x000158: 0xE043FF898107FF11 Ipa
    temp_55 = in_attr1.z;
    // 0x000168: 0xE2900000D7000000 Ssy
    // 0x000170: 0x5C6810000277270D Fmul
    temp_56 = temp_44 * temp_44;
    // 0x000178: 0x5C68100000E70E12 Fmul
    temp_57 = temp_49 * temp_49;
    // 0x000188: 0x59A0068002672613 Ffma
    temp_58 = fma(temp_45, temp_45, temp_56);
    // 0x000190: 0x5C68100000A70A0D Fmul
    temp_59 = temp_48 * temp_48;
    // 0x000198: 0x59A0090000F70F12 Ffma
    temp_60 = fma(temp_51, temp_51, temp_57);
    // 0x0001A8: 0x59A0098002572518 Ffma
    temp_61 = fma(temp_46, temp_46, temp_58);
    // 0x0001B0: 0x5C68100000970913 Fmul
    temp_62 = temp_47 * temp_47;
    // 0x0001B8: 0x5080000000571818 Mufu
    temp_63 = inversesqrt(temp_61);
    // 0x0001C8: 0x59A0068000B70B0D Ffma
    temp_64 = fma(temp_50, temp_50, temp_59);
    // 0x0001D0: 0x59A0090001171112 Ffma
    temp_65 = fma(temp_55, temp_55, temp_60);
    // 0x0001D8: 0x5080000000571214 Mufu
    temp_66 = inversesqrt(temp_65);
    // 0x0001E8: 0x59A0098000870815 Ffma
    temp_67 = fma(temp_53, temp_53, temp_62);
    // 0x0001F0: 0x59A0068000C70C0D Ffma
    temp_68 = fma(temp_52, temp_52, temp_64);
    // 0x0001F8: 0x5080000000570D0D Mufu
    temp_69 = inversesqrt(temp_68);
    // 0x000208: 0x59A00A8000770715 Ffma
    temp_70 = fma(temp_54, temp_54, temp_67);
    // 0x000210: 0x5C69100001872727 Fmul
    temp_71 = 0.0 - temp_63;
    temp_72 = temp_44 * temp_71;
    // 0x000218: 0x508000000057151A Mufu
    temp_73 = inversesqrt(temp_70);
    // 0x000228: 0x5C69100001872626 Fmul
    temp_74 = 0.0 - temp_63;
    temp_75 = temp_45 * temp_74;
    // 0x000230: 0x5C69100001872525 Fmul
    temp_76 = 0.0 - temp_63;
    temp_77 = temp_46 * temp_76;
    // 0x000238: 0x4C58301805C72719 Fadd
    temp_78 = 0.0 - fp_c6.data[23].x;
    temp_79 = temp_72 + temp_78;
    // 0x000248: 0x4C58301805D72618 Fadd
    temp_80 = 0.0 - fp_c6.data[23].y;
    temp_81 = temp_75 + temp_80;
    // 0x000250: 0x4C58301805E72515 Fadd
    temp_82 = 0.0 - fp_c6.data[23].z;
    temp_83 = temp_77 + temp_82;
    // 0x000258: 0x5C68100000D70A0A Fmul
    temp_84 = temp_48 * temp_69;
    // 0x000268: 0x5C68100000D70B0B Fmul
    temp_85 = temp_50 * temp_69;
    // 0x000270: 0x5C68100000D70C0C Fmul
    temp_86 = temp_52 * temp_69;
    // 0x000278: 0x5C68100001971913 Fmul
    temp_87 = temp_79 * temp_79;
    // 0x000288: 0x5C68100001A70912 Fmul
    temp_88 = temp_47 * temp_73;
    // 0x000290: 0x5C68100001A70709 Fmul
    temp_89 = temp_54 * temp_73;
    // 0x000298: 0x5C68100001470E0D Fmul
    temp_90 = temp_49 * temp_66;
    // 0x0002A8: 0x5C68100001470F0E Fmul
    temp_91 = temp_51 * temp_66;
    // 0x0002B0: 0x5C6810000147110F Fmul
    temp_92 = temp_55 * temp_66;
    // 0x0002B8: 0x59A0098001871813 Ffma
    temp_93 = fma(temp_81, temp_81, temp_87);
    // 0x0002C8: 0x5C68100001A70811 Fmul
    temp_94 = temp_53 * temp_73;
    // 0x0002D0: 0x59A009800157151A Ffma
    temp_95 = fma(temp_83, temp_83, temp_93);
    // 0x0002D8: 0x5080000000571A1A Mufu
    temp_96 = inversesqrt(temp_95);
    // 0x0002E8: 0x5C68100001A71908 Fmul
    temp_97 = temp_79 * temp_96;
    // 0x0002F0: 0xF0F0000034370000 Depbar
    // 0x0002F8: 0x5C68100000570507 Fmul
    temp_98 = temp_28 * temp_28;
    // 0x000308: 0x5C68100000570A0A Fmul
    temp_99 = temp_84 * temp_28;
    // 0x000310: 0x5C68100000570B0B Fmul
    temp_100 = temp_85 * temp_28;
    // 0x000318: 0x5C68100000570C05 Fmul
    temp_101 = temp_86 * temp_28;
    // 0x000328: 0x5C6810000087270C Fmul
    temp_102 = temp_72 * temp_97;
    // 0x000330: 0x4C6810180A072222 Fmul
    temp_103 = temp_30 * fp_c6.data[40].x;
    // 0x000338: 0x59A0038000470407 Ffma
    temp_104 = fma(temp_27, temp_27, temp_98);
    // 0x000348: 0x59A0050000D7040D Ffma
    temp_105 = fma(temp_27, temp_90, temp_99);
    // 0x000350: 0x59A0058000E7040B Ffma
    temp_106 = fma(temp_27, temp_91, temp_100);
    // 0x000358: 0x5C68100001A7150A Fmul
    temp_107 = temp_83 * temp_96;
    // 0x000368: 0x59A0028000F7040F Ffma
    temp_108 = fma(temp_27, temp_92, temp_101);
    // 0x000370: 0x4C69101805C7080E Fmul
    temp_109 = 0.0 - fp_c6.data[23].x;
    temp_110 = temp_97 * temp_109;
    // 0x000378: 0x385D103F80070713 Fadd
    temp_111 = 0.0 - temp_104;
    temp_112 = temp_111 + 1.0;
    temp_113 = clamp(temp_112, 0.0, 1.0);
    // 0x000388: 0x5C68100001A71807 Fmul
    temp_114 = temp_81 * temp_96;
    // 0x000390: 0x5080000000871314 Mufu
    temp_115 = sqrt(temp_113);
    // 0x000398: 0x386013BF80072215 Fmnmx
    temp_116 = min(temp_103, 1.0);
    // 0x0003A8: 0xF0F0000034170000 Depbar
    // 0x0003B0: 0x385D103F80071D1D Fadd
    temp_117 = 0.0 - temp_38;
    temp_118 = temp_117 + 1.0;
    temp_119 = clamp(temp_118, 0.0, 1.0);
    // 0x0003B8: 0x51A5030400270101 Ffma
    temp_120 = 0.0 - temp_39;
    temp_121 = fma(temp_32, temp_120, fp_c1.data[0].z);
    temp_122 = clamp(temp_121, 0.0, 1.0);
    // 0x0003C8: 0x5C9807800FF70006 Mov
    // 0x0003D0: 0x59A006000077260C Ffma
    temp_123 = fma(temp_75, temp_114, temp_102);
    // 0x0003D8: 0x4C60178400171515 Fmnmx
    temp_124 = max(temp_116, fp_c1.data[0].y);
    // 0x0003E8: 0x59A4060000A72505 Ffma
    temp_125 = fma(temp_77, temp_107, temp_123);
    temp_126 = clamp(temp_125, 0.0, 1.0);
    // 0x0003F0: 0x59A006800147120D Ffma
    temp_127 = fma(temp_88, temp_115, temp_105);
    // 0x0003F8: 0x59A005800147110B Ffma
    temp_128 = fma(temp_94, temp_115, temp_106);
    // 0x000408: 0x49A1071805D7070C Ffma
    temp_129 = 0.0 - fp_c6.data[23].y;
    temp_130 = fma(temp_114, temp_129, temp_110);
    // 0x000410: 0x59A0078001470909 Ffma
    temp_131 = fma(temp_89, temp_115, temp_108);
    // 0x000418: 0x51A40A8400171531 Ffma
    temp_132 = fma(temp_124, temp_124, fp_c1.data[0].y);
    temp_133 = clamp(temp_132, 0.0, 1.0);
    // 0x000428: 0x32A017BF0007152F Ffma
    temp_134 = fma(temp_124, 0.5, 0.5);
    // 0x000430: 0x5C68100000D70D04 Fmul
    temp_135 = temp_127 * temp_127;
    // 0x000438: 0x01040DF760C7F012 Mov32i
    // 0x000448: 0x49A5061805E70A0F Ffma
    temp_136 = 0.0 - fp_c6.data[23].z;
    temp_137 = fma(temp_107, temp_136, temp_130);
    temp_138 = clamp(temp_137, 0.0, 1.0);
    // 0x000450: 0x5C68100003173130 Fmul
    temp_139 = temp_133 * temp_133;
    // 0x000458: 0x5C68120002F72F2F Fmul
    temp_140 = temp_134 * 0.5;
    temp_141 = temp_140 * temp_134;
    // 0x000468: 0x59A0020000B70B04 Ffma
    temp_142 = fma(temp_128, temp_128, temp_135);
    // 0x000470: 0x49A209040007050E Ffma
    temp_143 = fma(temp_126, fp_c1.data[0].x, -6.98316002);
    // 0x000478: 0x59A002000097090C Ffma
    temp_144 = fma(temp_131, temp_131, temp_142);
    // 0x000488: 0x5C68100000E70505 Fmul
    temp_145 = temp_126 * temp_143;
    // 0x000490: 0x5080000000570C0C Mufu
    temp_146 = inversesqrt(temp_144);
    // 0x000498: 0x49A2090400070F04 Ffma
    temp_147 = fma(temp_138, fp_c1.data[0].x, -6.98316002);
    // 0x0004A8: 0x4C58301407B7210E Fadd
    temp_148 = 0.0 - fp_c5.data[30].w;
    temp_149 = temp_35 + temp_148;
    // 0x0004B0: 0x5C68100000470F04 Fmul
    temp_150 = temp_138 * temp_147;
    // 0x0004B8: 0x51A0071407B7230E Ffma
    temp_151 = fma(temp_31, temp_149, fp_c5.data[30].w);
    // 0x0004C8: 0x5C68100000C70D1A Fmul
    temp_152 = temp_127 * temp_146;
    // 0x0004D0: 0x5C68100000C70B22 Fmul
    temp_153 = temp_128 * temp_146;
    // 0x0004D8: 0x5C68100000C7091B Fmul
    temp_154 = temp_131 * temp_146;
    // 0x0004E8: 0x3868104180070209 Fmul
    temp_155 = temp_10 * 16.0;
    // 0x0004F0: 0x386810411007030B Fmul
    temp_156 = temp_11 * 9.0;
    // 0x0004F8: 0x5CA8148000970A09 F2f
    temp_157 = floor(temp_155);
    // 0x000508: 0x5C68100000871A08 Fmul
    temp_158 = temp_152 * temp_97;
    // 0x000510: 0x5CA8148000B70A0B F2f
    temp_159 = floor(temp_156);
    // 0x000518: 0x5C9000800057000C Rro
    // 0x000528: 0x4C69101805C71A03 Fmul
    temp_160 = 0.0 - fp_c6.data[23].x;
    temp_161 = temp_152 * temp_160;
    // 0x000530: 0x4C58301407B72005 Fadd
    temp_162 = 0.0 - fp_c5.data[30].w;
    temp_163 = temp_34 + temp_162;
    // 0x000538: 0x4C58301407B7160D Fadd
    temp_164 = 0.0 - fp_c5.data[30].w;
    temp_165 = temp_36 + temp_164;
    // 0x000548: 0x5C90008000470018 Rro
    // 0x000550: 0x59A0040000772208 Ffma
    temp_166 = fma(temp_153, temp_114, temp_158);
    // 0x000558: 0x5080000000271818 Mufu
    temp_167 = exp2(temp_150);
    // 0x000568: 0x5C68100001A72707 Fmul
    temp_168 = temp_72 * temp_152;
    // 0x000570: 0x49A1019805D72202 Ffma
    temp_169 = 0.0 - fp_c6.data[23].y;
    temp_170 = fma(temp_153, temp_169, temp_161);
    // 0x000578: 0x51A0029407B7230F Ffma
    temp_171 = fma(temp_31, temp_163, fp_c5.data[30].w);
    // 0x000588: 0x51A0069407B7230D Ffma
    temp_172 = fma(temp_31, temp_165, fp_c5.data[30].w);
    // 0x000590: 0x59A4040000A71B0A Ffma
    temp_173 = fma(temp_154, temp_107, temp_166);
    temp_174 = clamp(temp_173, 0.0, 1.0);
    // 0x000598: 0x59A0038002272614 Ffma
    temp_175 = fma(temp_75, temp_153, temp_168);
    // 0x0005A8: 0x49A5011805E71B02 Ffma
    temp_176 = 0.0 - fp_c6.data[23].z;
    temp_177 = fma(temp_154, temp_176, temp_170);
    temp_178 = clamp(temp_177, 0.0, 1.0);
    // 0x0005B0: 0x32A004C180070B2E Ffma
    temp_179 = fma(temp_159, 16.0, temp_157);
    // 0x0005B8: 0x5CB0118002E70A2E F2i
    temp_180 = trunc(temp_179);
    temp_181 = max(temp_180, 0.0);
    temp_182 = uint(temp_181);
    // 0x0005C8: 0x59A2050003070A03 Ffma
    temp_183 = 0.0 - temp_174;
    temp_184 = fma(temp_174, temp_139, temp_183);
    // 0x0005D0: 0x59A40A0001B72514 Ffma
    temp_185 = fma(temp_77, temp_154, temp_175);
    temp_186 = clamp(temp_185, 0.0, 1.0);
    // 0x0005D8: 0x59A1010002F70209 Ffma
    temp_187 = 0.0 - temp_141;
    temp_188 = fma(temp_178, temp_187, temp_178);
    // 0x0005E8: 0x51A0018400270A0A Ffma
    temp_189 = fma(temp_174, temp_184, fp_c1.data[0].z);
    // 0x0005F0: 0x59A10A0002F71408 Ffma
    temp_190 = 0.0 - temp_141;
    temp_191 = fma(temp_186, temp_190, temp_186);
    // 0x0005F8: 0x5080000000470A0A Mufu
    temp_192 = 1.0 / temp_189;
    // 0x000608: 0x5C58100000972F0B Fadd
    temp_193 = temp_141 + temp_188;
    // 0x000610: 0x4C68101801470203 Fmul
    temp_194 = temp_178 * fp_c6.data[5].x;
    // 0x000618: 0x5080000000470B0B Mufu
    temp_195 = 1.0 / temp_193;
    // 0x000628: 0x3848000000872E2C Shl
    temp_196 = int(temp_182) << 8;
    // 0x000630: 0x5C68100001472228 Fmul
    temp_197 = temp_153 * temp_186;
    // 0x000638: 0xEF94008200472C2C Ldc
    temp_198 = temp_196 + 0x2004;
    temp_199 = uint(temp_198) >> 2;
    temp_200 = temp_199 >> 2;
    temp_201 = int(temp_199) & 3;
    temp_202 = fp_c8.data[int(temp_200)][temp_201];
    // 0x000648: 0x5C58100000872F07 Fadd
    temp_203 = temp_141 + temp_191;
    // 0x000650: 0x5080000000270C08 Mufu
    temp_204 = exp2(temp_145);
    // 0x000658: 0x1E23EA2F98370303 Fmul32i
    temp_205 = temp_194 * 0.318309873;
    // 0x000668: 0x5080000000470707 Mufu
    temp_206 = 1.0 / temp_203;
    // 0x000670: 0x5C68100001471B1C Fmul
    temp_207 = temp_154 * temp_186;
    // 0x000678: 0x5C68100000A73109 Fmul
    temp_208 = temp_133 * temp_192;
    // 0x000688: 0x32A2134000072828 Ffma
    temp_209 = 0.0 - temp_75;
    temp_210 = fma(temp_197, 2.0, temp_209);
    // 0x000690: 0x32A212C000071C1C Ffma
    temp_211 = 0.0 - temp_77;
    temp_212 = fma(temp_207, 2.0, temp_211);
    // 0x000698: 0x5C68100000970909 Fmul
    temp_213 = temp_208 * temp_208;
    // 0x0006A8: 0x59A1040000F70805 Ffma
    temp_214 = 0.0 - temp_171;
    temp_215 = fma(temp_204, temp_214, temp_204);
    // 0x0006B0: 0x3868103F0007072D Fmul
    temp_216 = temp_206 * 0.5;
    // 0x0006B8: 0x5C58100000570F05 Fadd
    temp_217 = temp_171 + temp_215;
    // 0x0006C8: 0x5C68100000B72D04 Fmul
    temp_218 = temp_216 * temp_195;
    // 0x0006D0: 0x59A101800037050C Ffma
    temp_219 = 0.0 - temp_205;
    temp_220 = fma(temp_217, temp_219, temp_205);
    // 0x0006D8: 0x4C68101801570203 Fmul
    temp_221 = temp_178 * fp_c6.data[5].y;
    // 0x0006E8: 0x5C68100000470909 Fmul
    temp_222 = temp_213 * temp_218;
    // 0x0006F0: 0x4C68101801670204 Fmul
    temp_223 = temp_178 * fp_c6.data[5].z;
    // 0x0006F8: 0x59A10C0001870E05 Ffma
    temp_224 = 0.0 - temp_167;
    temp_225 = fma(temp_151, temp_224, temp_167);
    // 0x000708: 0x1E23EA2F98370303 Fmul32i
    temp_226 = temp_221 * 0.318309873;
    // 0x000710: 0x5C6810000097020A Fmul
    temp_227 = temp_178 * temp_222;
    // 0x000718: 0x59A10C0001870F09 Ffma
    temp_228 = 0.0 - temp_167;
    temp_229 = fma(temp_171, temp_228, temp_167);
    // 0x000728: 0x59A10C0001870D18 Ffma
    temp_230 = 0.0 - temp_167;
    temp_231 = fma(temp_172, temp_230, temp_167);
    // 0x000730: 0x59A1040000D70802 Ffma
    temp_232 = 0.0 - temp_172;
    temp_233 = fma(temp_204, temp_232, temp_204);
    // 0x000738: 0x59A1040000E70808 Ffma
    temp_234 = 0.0 - temp_151;
    temp_235 = fma(temp_204, temp_234, temp_204);
    // 0x000748: 0x5C58100000570E05 Fadd
    temp_236 = temp_151 + temp_225;
    // 0x000750: 0x1E23EA2F98370404 Fmul32i
    temp_237 = temp_223 * 0.318309873;
    // 0x000758: 0x5C58100000970F09 Fadd
    temp_238 = temp_171 + temp_229;
    // 0x000768: 0x5C58100001870D18 Fadd
    temp_239 = temp_172 + temp_231;
    // 0x000770: 0x5C58100000270D02 Fadd
    temp_240 = temp_172 + temp_233;
    // 0x000778: 0x5C58100000870E08 Fadd
    temp_241 = temp_151 + temp_235;
    // 0x000788: 0x4C68101801570507 Fmul
    temp_242 = temp_236 * fp_c6.data[5].y;
    // 0x000790: 0x3859103F80071D05 Fadd
    temp_243 = 0.0 - temp_119;
    temp_244 = temp_243 + 1.0;
    // 0x000798: 0x4C68101801470909 Fmul
    temp_245 = temp_238 * fp_c6.data[5].x;
    // 0x0007A8: 0x4C68101801671818 Fmul
    temp_246 = temp_239 * fp_c6.data[5].z;
    // 0x0007B0: 0x59A1020000470202 Ffma
    temp_247 = 0.0 - temp_237;
    temp_248 = fma(temp_240, temp_247, temp_237);
    // 0x0007B8: 0x59A1018000370808 Ffma
    temp_249 = 0.0 - temp_226;
    temp_250 = fma(temp_241, temp_249, temp_226);
    // 0x0007C8: 0x5C68100000A70707 Fmul
    temp_251 = temp_242 * temp_227;
    // 0x0007D0: 0x5B6603800FF72C07 Isetp
    temp_252 = floatBitsToUint(temp_202) <= 0u;
    // 0x0007D8: 0x5C68100000A70903 Fmul
    temp_253 = temp_245 * temp_227;
    // 0x0007E8: 0x5C68100000A71818 Fmul
    temp_254 = temp_246 * temp_227;
    // 0x0007F0: 0x5C6810000057020A Fmul
    temp_255 = temp_248 * temp_244;
    // 0x0007F8: 0x49A200980AC70102 Ffma
    temp_256 = 0.0 - temp_122;
    temp_257 = fma(temp_122, fp_c6.data[43].x, temp_256);
    // 0x000808: 0x5C68100000770512 Fmul
    temp_258 = temp_244 * temp_251;
    // 0x000810: 0x5C68100000570C0C Fmul
    temp_259 = temp_220 * temp_244;
    // 0x000818: 0x5C68100000370511 Fmul
    temp_260 = temp_244 * temp_253;
    // 0x000828: 0x49A200980AD70103 Ffma
    temp_261 = 0.0 - temp_122;
    temp_262 = fma(temp_122, fp_c6.data[43].y, temp_261);
    // 0x000830: 0x49A200980AE70101 Ffma
    temp_263 = 0.0 - temp_122;
    temp_264 = fma(temp_122, fp_c6.data[43].z, temp_263);
    // 0x000838: 0x3858103F80070202 Fadd
    temp_265 = temp_257 + 1.0;
    // 0x000848: 0x5C68100001870524 Fmul
    temp_266 = temp_244 * temp_254;
    // 0x000850: 0x5C68100001471A18 Fmul
    temp_267 = temp_152 * temp_186;
    // 0x000858: 0x5C6810000057080B Fmul
    temp_268 = temp_250 * temp_244;
    // 0x000868: 0x3858103F80070313 Fadd
    temp_269 = temp_262 + 1.0;
    // 0x000870: 0x3858103F80070101 Fadd
    temp_270 = temp_264 + 1.0;
    // 0x000878: 0x59A4010000272003 Ffma
    temp_271 = fma(temp_34, temp_265, temp_265);
    temp_272 = clamp(temp_271, 0.0, 1.0);
    // 0x000888: 0x5C9807800FF70009 Mov
    // 0x000890: 0x5C9807800FF70008 Mov
    // 0x000898: 0x5C9807800FF70007 Mov
    // 0x0008A8: 0x59A4098001372102 Ffma
    temp_273 = fma(temp_35, temp_269, temp_269);
    temp_274 = clamp(temp_273, 0.0, 1.0);
    // 0x0008B0: 0x1E23E22F98371113 Fmul32i
    temp_275 = temp_260 * 0.159154937;
    // 0x0008B8: 0x1E23E22F98371211 Fmul32i
    temp_276 = temp_258 * 0.159154937;
    // 0x0008C8: 0xEF5400000047FF13 Stl
    local_memory[1] = floatBitsToUint(temp_275);
    // 0x0008D0: 0x5C9807800FF70005 Mov
    // 0x0008D8: 0xEF5400000007FF11 Stl
    local_memory[0] = floatBitsToUint(temp_276);
    // 0x0008E8: 0x5C9807800FF70004 Mov
    // 0x0008F0: 0x59A4008000171601 Ffma
    temp_277 = fma(temp_36, temp_270, temp_270);
    temp_278 = clamp(temp_277, 0.0, 1.0);
    // 0x0008F8: 0x32A213C00007182B Ffma
    temp_279 = 0.0 - temp_72;
    temp_280 = fma(temp_267, 2.0, temp_279);
    // 0x000908: 0x1E23E22F98372424 Fmul32i
    temp_281 = temp_266 * 0.159154937;
    // 0x000910: 0xF0F800000000000F Sync
    temp_282 = 0.0;
    temp_283 = 0.0;
    temp_284 = 0.0;
    temp_285 = 0.0;
    temp_286 = 0.0;
    temp_287 = 0.0;
    temp_288 = 0.0;
    temp_289 = 0.0;
    temp_290 = 0.0;
    temp_291 = 0.0;
    temp_292 = 0.0;
    temp_293 = 0.0;
    if (!temp_252)
    {
        // 0x000918: 0x5C9807800FF7002A Mov
        temp_294 = 0;
        do
        {
            // 0x000928: 0x5C18020002A72E37 Iscadd
            temp_296 = int(temp_182) << 4;
            temp_297 = temp_296 + temp_294;
            // 0x000930: 0xE003FF87CFF7FF32 Ipa
            // 0x000938: 0x1C00000000172A2A Iadd32i
            temp_298 = temp_294 + 1;
            // 0x000948: 0xE003FF87CFF7FF34 Ipa
            // 0x000950: 0x3848000000473737 Shl
            temp_299 = temp_297 << 4;
            // 0x000958: 0xE003FF87CFF7FF33 Ipa
            // 0x000968: 0x5B6C038002C72A0F Isetp
            temp_295 = uint(temp_298) >= floatBitsToUint(temp_202);
            // 0x000970: 0xE290000055800000 Ssy
            // 0x000978: 0xEF94008200073729 Ldc
            temp_300 = temp_299 + 0x2000;
            temp_301 = uint(temp_300) >> 2;
            temp_302 = temp_301 >> 2;
            temp_303 = int(temp_301) & 3;
            temp_304 = fp_c8.data[int(temp_302)][temp_303];
            // 0x000988: 0x5080000000473232 Mufu
            // 0x000990: 0x5080000000473434 Mufu
            // 0x000998: 0x5080000000473333 Mufu
            // 0x0009A8: 0xE043FF8D0327FF32 Ipa
            temp_305 = in_attr5.x;
            // 0x0009B0: 0xE043FF8D8347FF34 Ipa
            temp_306 = in_attr5.z;
            // 0x0009B8: 0xE043FF8D4337FF33 Ipa
            temp_307 = in_attr5.y;
            // 0x0009C8: 0x3848000000672929 Shl
            temp_308 = floatBitsToInt(temp_304) << 6;
            // 0x0009D0: 0xEF95008001072910 Ldc
            temp_309 = temp_308 + 16;
            temp_310 = uint(temp_309) >> 2;
            temp_311 = temp_310 >> 2;
            temp_312 = int(temp_310) & 3;
            temp_313 = fp_c8.data[int(temp_311)][temp_312];
            temp_314 = int(temp_310) + 1;
            temp_315 = uint(temp_314) >> 2;
            temp_316 = temp_314 & 3;
            temp_317 = fp_c8.data[int(temp_315)][temp_316];
            // 0x0009D8: 0xEF95008001872912 Ldc
            temp_318 = temp_308 + 24;
            temp_319 = uint(temp_318) >> 2;
            temp_320 = temp_319 >> 2;
            temp_321 = int(temp_319) & 3;
            temp_322 = fp_c8.data[int(temp_320)][temp_321];
            temp_323 = int(temp_319) + 1;
            temp_324 = uint(temp_323) >> 2;
            temp_325 = temp_323 & 3;
            temp_326 = fp_c8.data[int(temp_324)][temp_325];
            // 0x0009E8: 0xEF95008002072918 Ldc
            temp_327 = temp_308 + 32;
            temp_328 = uint(temp_327) >> 2;
            temp_329 = temp_328 >> 2;
            temp_330 = int(temp_328) & 3;
            temp_331 = fp_c8.data[int(temp_329)][temp_330];
            temp_332 = int(temp_328) + 1;
            temp_333 = uint(temp_332) >> 2;
            temp_334 = temp_332 & 3;
            temp_335 = fp_c8.data[int(temp_333)][temp_334];
            // 0x0009F0: 0x5C58300003271032 Fadd
            temp_336 = 0.0 - temp_305;
            temp_337 = temp_313 + temp_336;
            // 0x0009F8: 0xEF94008002872910 Ldc
            temp_338 = temp_308 + 40;
            temp_339 = uint(temp_338) >> 2;
            temp_340 = temp_339 >> 2;
            temp_341 = int(temp_339) & 3;
            temp_342 = fp_c8.data[int(temp_340)][temp_341];
            // 0x000A08: 0x5C58300003371133 Fadd
            temp_343 = 0.0 - temp_307;
            temp_344 = temp_317 + temp_343;
            // 0x000A10: 0x5C58300003471234 Fadd
            temp_345 = 0.0 - temp_306;
            temp_346 = temp_322 + temp_345;
            // 0x000A18: 0x5C68100003273235 Fmul
            temp_347 = temp_337 * temp_337;
            // 0x000A28: 0x59A11A0003471313 Ffma
            temp_348 = 0.0 - temp_346;
            temp_349 = fma(temp_326, temp_348, temp_346);
            // 0x000A30: 0x59A01A8003373335 Ffma
            temp_350 = fma(temp_344, temp_344, temp_347);
            // 0x000A38: 0x59A01A8001371336 Ffma
            temp_351 = fma(temp_349, temp_349, temp_350);
            // 0x000A48: 0x5080000000573611 Mufu
            temp_352 = inversesqrt(temp_351);
            // 0x000A50: 0x5080000000873636 Mufu
            temp_353 = sqrt(temp_351);
            // 0x000A58: 0x5C68100001173212 Fmul
            temp_354 = temp_337 * temp_352;
            // 0x000A68: 0x5C69100001871212 Fmul
            temp_355 = 0.0 - temp_331;
            temp_356 = temp_354 * temp_355;
            // 0x000A70: 0x5C68100001173318 Fmul
            temp_357 = temp_344 * temp_352;
            // 0x000A78: 0x5C68100001171311 Fmul
            temp_358 = temp_349 * temp_352;
            // 0x000A88: 0x59A1090001971818 Ffma
            temp_359 = 0.0 - temp_335;
            temp_360 = fma(temp_357, temp_359, temp_356);
            // 0x000A90: 0xEF95008003872912 Ldc
            temp_361 = temp_308 + 56;
            temp_362 = uint(temp_361) >> 2;
            temp_363 = temp_362 >> 2;
            temp_364 = int(temp_362) & 3;
            temp_365 = fp_c8.data[int(temp_363)][temp_364];
            temp_366 = int(temp_362) + 1;
            temp_367 = uint(temp_366) >> 2;
            temp_368 = temp_366 & 3;
            temp_369 = fp_c8.data[int(temp_367)][temp_368];
            // 0x000A98: 0x010404000007F019 Mov32i
            // 0x000AA8: 0x59A10C0001071118 Ffma
            temp_370 = 0.0 - temp_342;
            temp_371 = fma(temp_358, temp_370, temp_360);
            // 0x000AB0: 0xEF95008003072910 Ldc
            temp_372 = temp_308 + 48;
            temp_373 = uint(temp_372) >> 2;
            temp_374 = temp_373 >> 2;
            temp_375 = int(temp_373) & 3;
            temp_376 = fp_c8.data[int(temp_374)][temp_375];
            temp_377 = int(temp_373) + 1;
            temp_378 = uint(temp_377) >> 2;
            temp_379 = temp_377 & 3;
            temp_380 = fp_c8.data[int(temp_378)][temp_379];
            // 0x000AB8: 0x59A4098001271812 Ffma
            temp_381 = fma(temp_371, temp_365, temp_369);
            temp_382 = clamp(temp_381, 0.0, 1.0);
            // 0x000AC8: 0x59A4088003671036 Ffma
            temp_383 = fma(temp_376, temp_353, temp_380);
            temp_384 = clamp(temp_383, 0.0, 1.0);
            // 0x000AD0: 0x33A00CC000073613 Ffma
            temp_385 = fma(temp_384, -2.0, 3.0);
            // 0x000AD8: 0x5C68100003673618 Fmul
            temp_386 = temp_384 * temp_384;
            // 0x000AE8: 0x33A00CC000071219 Ffma
            temp_387 = fma(temp_382, -2.0, 3.0);
            // 0x000AF0: 0x5C68100001271212 Fmul
            temp_388 = temp_382 * temp_382;
            // 0x000AF8: 0x5C68100001371813 Fmul
            temp_389 = temp_386 * temp_385;
            // 0x000B08: 0x39585042F0073418 Fadd
            temp_390 = abs(temp_346);
            temp_391 = temp_390 + -120.0;
            // 0x000B10: 0x5C68100001971212 Fmul
            temp_392 = temp_388 * temp_387;
            // 0x000B18: 0x1EABD4CCCCD71818 Fmul32i
            temp_393 = temp_391 * -0.0500000007;
            temp_394 = clamp(temp_393, 0.0, 1.0);
            // 0x000B28: 0x5C68100001371212 Fmul
            temp_395 = temp_392 * temp_389;
            // 0x000B30: 0x36247F9000171313 Xmad
            temp_396 = floatBitsToUint(temp_389) >> 16;
            temp_397 = int(temp_396) << 16;
            // 0x000B38: 0x5C68100001271812 Fmul
            temp_398 = temp_394 * temp_395;
            // 0x000B48: 0x5BB383800FF71207 Fsetp
            temp_399 = temp_398 <= 0.0;
            // 0x000B50: 0x7A05083C0F00FF13 Hadd2
            temp_294 = temp_298;
            temp_400 = uint(temp_397);
            temp_401 = temp_282;
            temp_402 = temp_283;
            temp_403 = temp_284;
            temp_404 = temp_285;
            temp_405 = temp_286;
            temp_406 = temp_287;
            if (temp_399)
            {
                temp_407 = unpackHalf2x16(uint(temp_397)).y;
                temp_408 = packHalf2x16(vec2(1.0, temp_407));
                temp_400 = temp_408;
            }
            // 0x000B58: 0x5D2103902FF71307 Hsetp2
            temp_409 = unpackHalf2x16(temp_400).x;
            temp_410 = temp_409 == 0.0;
            // 0x000B68: 0xF0F800000008000F Sync
            if (temp_410)
            {
                // 0x000B70: 0x5080000000471010 Mufu
                temp_411 = 1.0 / temp_376;
                // 0x000B78: 0xEF94008002C72913 Ldc
                temp_412 = temp_308 + 44;
                temp_413 = uint(temp_412) >> 2;
                temp_414 = temp_413 >> 2;
                temp_415 = int(temp_413) & 3;
                temp_416 = fp_c8.data[int(temp_414)][temp_415];
                // 0x000B88: 0x5C69100001071111 Fmul
                temp_417 = 0.0 - temp_411;
                temp_418 = temp_380 * temp_417;
                // 0x000B90: 0x5C60138001173434 Fmnmx
                temp_419 = min(temp_346, temp_418);
                // 0x000B98: 0x5C61178003471119 Fmnmx
                temp_420 = 0.0 - temp_418;
                temp_421 = max(temp_420, temp_419);
                // 0x000BA8: 0x59A01A8001971910 Ffma
                temp_422 = fma(temp_421, temp_421, temp_350);
                // 0x000BB0: 0x5080000000571011 Mufu
                temp_423 = inversesqrt(temp_422);
                // 0x000BB8: 0x5C68100001173232 Fmul
                temp_424 = temp_337 * temp_423;
                // 0x000BC8: 0x5080000000471313 Mufu
                temp_425 = 1.0 / temp_416;
                // 0x000BD0: 0x5C68100001173333 Fmul
                temp_426 = temp_344 * temp_423;
                // 0x000BD8: 0x5C68100001171919 Fmul
                temp_427 = temp_421 * temp_423;
                // 0x000BE8: 0x5C58100003272735 Fadd
                temp_428 = temp_72 + temp_424;
                // 0x000BF0: 0x5C58100003372618 Fadd
                temp_429 = temp_75 + temp_426;
                // 0x000BF8: 0x5C58100001972511 Fadd
                temp_430 = temp_77 + temp_427;
                // 0x000C08: 0x5C68100003271A36 Fmul
                temp_431 = temp_152 * temp_424;
                // 0x000C10: 0x5C68100003573534 Fmul
                temp_432 = temp_428 * temp_428;
                // 0x000C18: 0x59A01B0003372236 Ffma
                temp_433 = fma(temp_153, temp_426, temp_431);
                // 0x000C28: 0x59A01A0001871834 Ffma
                temp_434 = fma(temp_429, temp_429, temp_432);
                // 0x000C30: 0x59A01B0001971B36 Ffma
                temp_435 = fma(temp_154, temp_427, temp_433);
                // 0x000C38: 0x59A01A0001171134 Ffma
                temp_436 = fma(temp_430, temp_430, temp_434);
                // 0x000C48: 0x5080000000573434 Mufu
                temp_437 = inversesqrt(temp_436);
                // 0x000C50: 0x5C68100003473535 Fmul
                temp_438 = temp_428 * temp_437;
                // 0x000C58: 0x5C68100003471818 Fmul
                temp_439 = temp_429 * temp_437;
                // 0x000C68: 0x5C68100003471134 Fmul
                temp_440 = temp_430 * temp_437;
                // 0x000C70: 0x5C68100003573237 Fmul
                temp_441 = temp_424 * temp_438;
                // 0x000C78: 0x5080000000871032 Mufu
                temp_442 = sqrt(temp_422);
                // 0x000C88: 0x5C68100003571A35 Fmul
                temp_443 = temp_152 * temp_438;
                // 0x000C90: 0xEF95008000072910 Ldc
                temp_444 = uint(temp_308) >> 2;
                temp_445 = temp_444 >> 2;
                temp_446 = int(temp_444) & 3;
                temp_447 = fp_c8.data[int(temp_445)][temp_446];
                temp_448 = int(temp_444) + 1;
                temp_449 = uint(temp_448) >> 2;
                temp_450 = temp_448 & 3;
                temp_451 = fp_c8.data[int(temp_449)][temp_450];
                // 0x000C98: 0x59A01B8001873337 Ffma
                temp_452 = fma(temp_426, temp_439, temp_441);
                // 0x000CA8: 0xEF94008000872929 Ldc
                temp_453 = temp_308 + 8;
                temp_454 = uint(temp_453) >> 2;
                temp_455 = temp_454 >> 2;
                temp_456 = int(temp_454) & 3;
                temp_457 = fp_c8.data[int(temp_455)][temp_456];
                // 0x000CB0: 0x59A01A8001872235 Ffma
                temp_458 = fma(temp_153, temp_439, temp_443);
                // 0x000CB8: 0x01040DF760C7F018 Mov32i
                // 0x000CC8: 0x51A0190400371313 Ffma
                temp_459 = fma(temp_425, temp_442, fp_c1.data[0].w);
                // 0x000CD0: 0x5080000000471313 Mufu
                temp_460 = 1.0 / temp_459;
                // 0x000CD8: 0x59A41B8003471937 Ffma
                temp_461 = fma(temp_427, temp_440, temp_452);
                temp_462 = clamp(temp_461, 0.0, 1.0);
                // 0x000CE8: 0x59A41A8003471B35 Ffma
                temp_463 = fma(temp_154, temp_440, temp_458);
                temp_464 = clamp(temp_463, 0.0, 1.0);
                // 0x000CF0: 0x49A20C0400073718 Ffma
                temp_465 = fma(temp_462, fp_c1.data[0].x, -6.98316002);
                // 0x000CF8: 0x59A21A8003573019 Ffma
                temp_466 = 0.0 - temp_464;
                temp_467 = fma(temp_139, temp_464, temp_466);
                // 0x000D08: 0x5C68100001873737 Fmul
                temp_468 = temp_462 * temp_465;
                // 0x000D10: 0x5C5C30000FF73618 Fadd
                temp_469 = temp_435 + -0.0;
                temp_470 = clamp(temp_469, 0.0, 1.0);
                // 0x000D18: 0x51A00C8400273535 Ffma
                temp_471 = fma(temp_464, temp_467, fp_c1.data[0].z);
                // 0x000D28: 0x1E23FB3333371313 Fmul32i
                temp_472 = temp_460 * 1.39999998;
                // 0x000D30: 0x5080000000473535 Mufu
                temp_473 = 1.0 / temp_471;
                // 0x000D38: 0x5C90008003770032 Rro
                // 0x000D48: 0x59A10C0001872F19 Ffma
                temp_474 = 0.0 - temp_470;
                temp_475 = fma(temp_141, temp_474, temp_470);
                // 0x000D50: 0x5080000000273232 Mufu
                temp_476 = exp2(temp_468);
                // 0x000D58: 0x5C68100001371313 Fmul
                temp_477 = temp_472 * temp_472;
                // 0x000D68: 0x5C58100001972F19 Fadd
                temp_478 = temp_141 + temp_475;
                // 0x000D70: 0x5080000000471919 Mufu
                temp_479 = 1.0 / temp_478;
                // 0x000D78: 0x5C68100003573135 Fmul
                temp_480 = temp_133 * temp_473;
                // 0x000D88: 0x59A1098001373613 Ffma
                temp_481 = 0.0 - temp_477;
                temp_482 = fma(temp_435, temp_481, temp_477);
                // 0x000D90: 0x59A1190003270E33 Ffma
                temp_483 = 0.0 - temp_476;
                temp_484 = fma(temp_151, temp_483, temp_476);
                // 0x000D98: 0x5C68100001071210 Fmul
                temp_485 = temp_398 * temp_447;
                // 0x000DA8: 0x5C68100001171211 Fmul
                temp_486 = temp_398 * temp_451;
                // 0x000DB0: 0x5C68100003573535 Fmul
                temp_487 = temp_480 * temp_480;
                // 0x000DB8: 0x5C5C100001373613 Fadd
                temp_488 = temp_435 + temp_482;
                temp_489 = clamp(temp_488, 0.0, 1.0);
                // 0x000DC8: 0x5C58100003370E33 Fadd
                temp_490 = temp_151 + temp_484;
                // 0x000DD0: 0x5C68100001972D19 Fmul
                temp_491 = temp_216 * temp_479;
                // 0x000DD8: 0x5C68100002971229 Fmul
                temp_492 = temp_398 * temp_457;
                // 0x000DE8: 0x59A1190003270F12 Ffma
                temp_493 = 0.0 - temp_476;
                temp_494 = fma(temp_171, temp_493, temp_476);
                // 0x000DF0: 0x59A1190003270D32 Ffma
                temp_495 = 0.0 - temp_476;
                temp_496 = fma(temp_172, temp_495, temp_476);
                // 0x000DF8: 0x5C68100003371133 Fmul
                temp_497 = temp_486 * temp_490;
                // 0x000E08: 0x5C68100001371111 Fmul
                temp_498 = temp_486 * temp_489;
                // 0x000E10: 0x5C68100001973519 Fmul
                temp_499 = temp_487 * temp_491;
                // 0x000E18: 0x5C58100001270F12 Fadd
                temp_500 = temp_171 + temp_494;
                // 0x000E28: 0x5C58100003270D32 Fadd
                temp_501 = temp_172 + temp_496;
                // 0x000E30: 0x49A0040400571108 Ffma
                temp_502 = fma(temp_498, fp_c1.data[1].y, temp_282);
                // 0x000E38: 0x5C68100001971819 Fmul
                temp_503 = temp_470 * temp_499;
                // 0x000E48: 0x5C68100001271012 Fmul
                temp_504 = temp_485 * temp_500;
                // 0x000E50: 0x5C68100003272932 Fmul
                temp_505 = temp_492 * temp_501;
                // 0x000E58: 0x5C68100001371010 Fmul
                temp_506 = temp_485 * temp_489;
                // 0x000E68: 0x5C68100001372929 Fmul
                temp_507 = temp_492 * temp_489;
                // 0x000E70: 0x5C68100001973333 Fmul
                temp_508 = temp_497 * temp_503;
                // 0x000E78: 0x5C68100001971213 Fmul
                temp_509 = temp_504 * temp_503;
                // 0x000E88: 0x5C68100001973232 Fmul
                temp_510 = temp_505 * temp_503;
                // 0x000E90: 0x49A0048400571009 Ffma
                temp_511 = fma(temp_506, fp_c1.data[1].y, temp_283);
                // 0x000E98: 0x49A0038400572907 Ffma
                temp_512 = fma(temp_507, fp_c1.data[1].y, temp_284);
                // 0x000EA8: 0x49A0028400473305 Ffma
                temp_513 = fma(temp_508, fp_c1.data[1].x, temp_285);
                // 0x000EB0: 0x49A0030400471306 Ffma
                temp_514 = fma(temp_509, fp_c1.data[1].x, temp_286);
                // 0x000EB8: 0x49A0020400473204 Ffma
                temp_515 = fma(temp_510, fp_c1.data[1].x, temp_287);
                // 0x000EC8: 0xF0F800000007000F Sync
                temp_401 = temp_502;
                temp_402 = temp_511;
                temp_403 = temp_512;
                temp_404 = temp_513;
                temp_405 = temp_514;
                temp_406 = temp_515;
            }
            // 0x000ED0: 0xE2400FFFA489000F Bra
            temp_282 = temp_401;
            temp_283 = temp_402;
            temp_284 = temp_403;
            temp_285 = temp_404;
            temp_286 = temp_405;
            temp_287 = temp_406;
            temp_288 = temp_401;
            temp_289 = temp_402;
            temp_290 = temp_403;
            temp_291 = temp_406;
            temp_292 = temp_405;
            temp_293 = temp_404;
        }
        while (!temp_295);
        // 0x000ED8: 0xF0F800000007000F Sync
    }
    // 0x000EE8: 0x5C62578002872B11 Fmnmx
    temp_516 = abs(temp_280);
    temp_517 = abs(temp_210);
    temp_518 = max(temp_516, temp_517);
    // 0x000EF0: 0xE003FF87CFF7FF25 Ipa
    // 0x000EF8: 0x5C62578002271A10 Fmnmx
    temp_519 = abs(temp_152);
    temp_520 = abs(temp_153);
    temp_521 = max(temp_519, temp_520);
    // 0x000F08: 0xEF4410000047FF33 Ldl
    temp_522 = uintBitsToFloat(local_memory[1]);
    // 0x000F10: 0x5C60578001171C19 Fmnmx
    temp_523 = abs(temp_212);
    temp_524 = max(temp_523, temp_518);
    // 0x000F18: 0xEF4410000007FF32 Ldl
    temp_525 = uintBitsToFloat(local_memory[0]);
    // 0x000F28: 0x4C98079C0207002F Mov
    // 0x000F30: 0x5080000000471919 Mufu
    temp_526 = 1.0 / temp_524;
    // 0x000F38: 0x5C60578001071B10 Fmnmx
    temp_527 = abs(temp_154);
    temp_528 = max(temp_527, temp_521);
    // 0x000F48: 0x5080000000471018 Mufu
    temp_529 = 1.0 / temp_528;
    // 0x000F50: 0x010000000017F010 Mov32i
    // 0x000F58: 0x5C68100001972812 Fmul
    temp_530 = temp_210 * temp_526;
    // 0x000F68: 0x5C69100001971C13 Fmul
    temp_531 = 0.0 - temp_526;
    temp_532 = temp_212 * temp_531;
    // 0x000F70: 0x5080000000472525 Mufu
    // 0x000F78: 0x5C69100001871B1C Fmul
    temp_533 = 0.0 - temp_529;
    temp_534 = temp_154 * temp_533;
    // 0x000F88: 0x5C68100001871A1A Fmul
    temp_535 = temp_152 * temp_529;
    // 0x000F90: 0x5C6810000187221B Fmul
    temp_536 = temp_153 * temp_529;
    // 0x000F98: 0x5C68100001972B11 Fmul
    temp_537 = temp_280 * temp_526;
    // 0x000FA8: 0x38681040E007152B Fmul
    temp_538 = temp_124 * 7.0;
    // 0x000FB0: 0xE043FF920257FF28 Ipa
    temp_539 = in_attr10.x;
    // 0x000FB8: 0x5C98078001C70018 Mov
    // 0x000FC8: 0xE043FF924257FF29 Ipa
    temp_540 = in_attr10.y;
    // 0x000FD0: 0x3868104080071519 Fmul
    temp_541 = temp_124 * 4.0;
    // 0x000FD8: 0xE043FF928257FF2A Ipa
    temp_542 = in_attr10.z;
    // 0x000FE8: 0xD9A2016261C71A1C Texs
    temp_543 = textureLod(fp_t_tcb_16, vec3(temp_535, temp_536, temp_534), temp_119).xyz;
    temp_544 = temp_543.x;
    temp_545 = temp_543.y;
    temp_546 = temp_543.z;
    // 0x000FF0: 0xC1BA0143F2B71010 Tex
    temp_547 = textureLod(fp_t_tcb_14, vec4(temp_537, temp_530, temp_532, float(1)), temp_538).xyz;
    temp_548 = temp_547.x;
    temp_549 = temp_547.y;
    temp_550 = temp_547.z;
    // 0x000FF8: 0xD9A2018271871A18 Texs
    temp_551 = textureLod(fp_t_tcb_18, vec3(temp_535, temp_536, temp_534), temp_541).xyz;
    temp_552 = temp_551.x;
    temp_553 = temp_551.y;
    temp_554 = temp_551.z;
    // 0x001008: 0xDEBA0000C2F72828 TexB
    temp_555 = texture(fp_t_cb7_20, vec3(temp_539, temp_540, temp_542)).x;
    // 0x001010: 0x3859103F80071515 Fadd
    temp_556 = 0.0 - temp_124;
    temp_557 = temp_556 + 1.0;
    // 0x001018: 0x3859103F8007142C Fadd
    temp_558 = 0.0 - temp_186;
    temp_559 = temp_558 + 1.0;
    // 0x001028: 0x010410676C97F02D Mov32i
    // 0x001030: 0x49A005980A17080B Ffma
    temp_560 = fma(temp_288, fp_c6.data[40].y, temp_268);
    // 0x001038: 0x49A006180A17090C Ffma
    temp_561 = fma(temp_289, fp_c6.data[40].y, temp_259);
    // 0x001048: 0x49A005180A17070A Ffma
    temp_562 = fma(temp_290, fp_c6.data[40].y, temp_255);
    // 0x001050: 0x5C68100001571515 Fmul
    temp_563 = temp_557 * temp_557;
    // 0x001058: 0x4C68101809072C08 Fmul
    temp_564 = temp_559 * fp_c6.data[36].x;
    // 0x001068: 0x1E23E468DB971409 Fmul32i
    temp_565 = temp_186 * 0.193900004;
    // 0x001070: 0x5080400000370808 Mufu
    temp_566 = abs(temp_564);
    temp_567 = log2(temp_566);
    // 0x001078: 0x49A0168400871413 Ffma
    temp_568 = fma(temp_186, fp_c1.data[2].x, 8.40400028);
    // 0x001088: 0x49A012180A170424 Ffma
    temp_569 = fma(temp_291, fp_c6.data[40].y, temp_281);
    // 0x001090: 0xE04BFF904257FF04 Ipa
    temp_570 = in_attr8.y;
    temp_571 = clamp(temp_570, 0.0, 1.0);
    // 0x001098: 0x5C68100001571507 Fmul
    temp_572 = temp_563 * temp_563;
    // 0x0010A8: 0x0103E2CD9E87F015 Mov32i
    // 0x0010B0: 0x0103F0000007F01B Mov32i
    // 0x0010B8: 0x4C9807980B47002D Mov
    // 0x0010C8: 0x51A0098400971413 Ffma
    temp_573 = fma(temp_186, temp_568, fp_c1.data[2].y);
    // 0x0010D0: 0x49A0048400670709 Ffma
    temp_574 = fma(temp_572, fp_c1.data[1].z, temp_565);
    // 0x0010D8: 0x49A20A8400B70715 Ffma
    temp_575 = fma(temp_572, fp_c1.data[2].w, -0.168799996);
    // 0x0010E8: 0x0104066978D7F029 Mov32i
    // 0x0010F0: 0x32A00DBF00072222 Ffma
    temp_576 = fma(temp_153, 0.5, 0.5);
    // 0x0010F8: 0x4C68101809170808 Fmul
    temp_577 = temp_567 * fp_c6.data[36].y;
    // 0x001108: 0x51A0098400C7141A Ffma
    temp_578 = fma(temp_186, temp_573, fp_c1.data[3].x);
    // 0x001110: 0x088BF05D63970909 Fadd32i
    temp_579 = temp_574 + -0.522800028;
    // 0x001118: 0x5C68100001570713 Fmul
    temp_580 = temp_572 * temp_575;
    // 0x001128: 0x4C9807980097002A Mov
    // 0x001130: 0xF0F0000034570000 Depbar
    // 0x001138: 0x51A216980B471E1E Ffma
    temp_581 = 0.0 - fp_c6.data[45].x;
    temp_582 = fma(temp_41, fp_c6.data[45].x, temp_581);
    // 0x001148: 0x51A216980B471F1F Ffma
    temp_583 = 0.0 - fp_c6.data[45].x;
    temp_584 = fma(temp_42, fp_c6.data[45].x, temp_583);
    // 0x001150: 0x5C9000800087001B Rro
    // 0x001158: 0x5C68100000971415 Fmul
    temp_585 = temp_186 * temp_579;
    // 0x001168: 0x49A2148400770709 Ffma
    temp_586 = fma(temp_572, fp_c1.data[1].w, -3.60299993);
    // 0x001170: 0x4C98079800870029 Mov
    // 0x001178: 0x5C60138001A71308 Fmnmx
    temp_587 = min(temp_580, temp_578);
    // 0x001188: 0x5084000000271B13 Mufu
    temp_588 = exp2(temp_577);
    temp_589 = clamp(temp_588, 0.0, 1.0);
    // 0x001190: 0x4C98079809A7001A Mov
    // 0x001198: 0x51A216980B470000 Ffma
    temp_590 = 0.0 - fp_c6.data[45].x;
    temp_591 = fma(temp_43, fp_c6.data[45].x, temp_590);
    // 0x0011A8: 0x51A0048400A70714 Ffma
    temp_592 = fma(temp_572, temp_586, fp_c1.data[2].z);
    // 0x0011B0: 0x4C58101408171A09 Fadd
    temp_593 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x0011B8: 0x386C104248070E1B Fmul
    temp_594 = temp_151 * 50.0;
    temp_595 = clamp(temp_594, 0.0, 1.0);
    // 0x0011C8: 0x59A00A800147071A Ffma
    temp_596 = fma(temp_572, temp_592, temp_585);
    // 0x0011D0: 0x4C98079800A70015 Mov
    // 0x0011D8: 0x4C59101800472907 Fadd
    temp_597 = 0.0 - fp_c6.data[2].x;
    temp_598 = temp_597 + fp_c6.data[1].x;
    // 0x0011E8: 0x010404000007F029 Mov32i
    // 0x0011F0: 0x4C59101800572A14 Fadd
    temp_599 = 0.0 - fp_c6.data[2].y;
    temp_600 = temp_599 + fp_c6.data[1].y;
    // 0x0011F8: 0x5C68100001370913 Fmul
    temp_601 = temp_593 * temp_589;
    // 0x001208: 0x5C6810000047042A Fmul
    temp_602 = temp_571 * temp_571;
    // 0x001210: 0x4C59101800671515 Fadd
    temp_603 = 0.0 - fp_c6.data[2].z;
    temp_604 = temp_603 + fp_c6.data[1].z;
    // 0x001218: 0x51A0111800870709 Ffma
    temp_605 = fma(temp_598, temp_576, fp_c6.data[2].x);
    // 0x001228: 0x33A014C000070407 Ffma
    temp_606 = fma(temp_571, -2.0, 3.0);
    // 0x001230: 0x51A0111800971404 Ffma
    temp_607 = fma(temp_600, temp_576, fp_c6.data[2].y);
    // 0x001238: 0x4C68101808C71314 Fmul
    temp_608 = temp_601 * fp_c6.data[35].x;
    // 0x001248: 0x5C5C30000FF70829 Fadd
    temp_609 = temp_587 + -0.0;
    temp_610 = clamp(temp_609, 0.0, 1.0);
    // 0x001250: 0x51A0111800A71508 Ffma
    temp_611 = fma(temp_604, temp_576, fp_c6.data[2].z);
    // 0x001258: 0x4C5C100400D71A22 Fadd
    temp_612 = temp_596 + fp_c1.data[3].y;
    temp_613 = clamp(temp_612, 0.0, 1.0);
    // 0x001268: 0x4C68101808D7131A Fmul
    temp_614 = temp_601 * fp_c6.data[35].y;
    // 0x001270: 0x4C68101808E71315 Fmul
    temp_615 = temp_601 * fp_c6.data[35].z;
    // 0x001278: 0x5C68100002A70707 Fmul
    temp_616 = temp_606 * temp_602;
    // 0x001288: 0x5C68100002971B2C Fmul
    temp_617 = temp_595 * temp_610;
    // 0x001290: 0x5C59100002272929 Fadd
    temp_618 = 0.0 - temp_610;
    temp_619 = temp_618 + temp_613;
    // 0x001298: 0x49A10D1408271A22 Ffma
    temp_620 = 0.0 - fp_c5.data[32].z;
    temp_621 = fma(temp_614, temp_620, temp_614);
    // 0x0012A8: 0x49A0121408271524 Ffma
    temp_622 = fma(temp_615, fp_c5.data[32].z, temp_569);
    // 0x0012B0: 0x49A10A9408271515 Ffma
    temp_623 = 0.0 - fp_c5.data[32].z;
    temp_624 = fma(temp_615, temp_623, temp_615);
    // 0x0012B8: 0x4C68101803770707 Fmul
    temp_625 = temp_616 * fp_c6.data[13].w;
    // 0x0012C8: 0x59A0160002970E0E Ffma
    temp_626 = fma(temp_151, temp_619, temp_617);
    // 0x0012D0: 0x5C58100002270B0B Fadd
    temp_627 = temp_560 + temp_621;
    // 0x0012D8: 0x59A0160002970D0D Ffma
    temp_628 = fma(temp_172, temp_619, temp_617);
    // 0x0012E8: 0x5C58100001570A0A Fadd
    temp_629 = temp_562 + temp_624;
    // 0x0012F0: 0xF0F0000034370000 Depbar
    // 0x0012F8: 0x49A019980A170606 Ffma
    temp_630 = fma(temp_292, fp_c6.data[40].y, temp_522);
    // 0x001308: 0x49A019180A170505 Ffma
    temp_631 = fma(temp_293, fp_c6.data[40].y, temp_525);
    // 0x001310: 0x49A0031408271413 Ffma
    temp_632 = fma(temp_608, fp_c5.data[32].z, temp_630);
    // 0x001318: 0xE043FF900257FF06 Ipa
    temp_633 = in_attr8.x;
    // 0x001328: 0x49A0029408271A05 Ffma
    temp_634 = fma(temp_614, fp_c5.data[32].z, temp_631);
    // 0x001330: 0xE043FF8C8257FF25 Ipa
    temp_635 = in_attr4.z;
    // 0x001338: 0x49A10A140827141A Ffma
    temp_636 = 0.0 - fp_c5.data[32].z;
    temp_637 = fma(temp_608, temp_636, temp_608);
    // 0x001348: 0x59A0160002970F14 Ffma
    temp_638 = fma(temp_171, temp_619, temp_617);
    // 0x001350: 0x5C58100001A70C0C Fadd
    temp_639 = temp_561 + temp_637;
    // 0x001358: 0xF0F0000034170000 Depbar
    // 0x001368: 0x49A00E0400570909 Ffma
    temp_640 = fma(temp_605, fp_c1.data[1].y, temp_544);
    // 0x001370: 0x49A00E8400570404 Ffma
    temp_641 = fma(temp_607, fp_c1.data[1].y, temp_545);
    // 0x001378: 0x49A0130400570808 Ffma
    temp_642 = fma(temp_611, fp_c1.data[1].y, temp_546);
    // 0x001388: 0x49A00C1808571015 Ffma
    temp_643 = fma(temp_548, fp_c6.data[33].y, temp_552);
    // 0x001390: 0x49A0139808571212 Ffma
    temp_644 = fma(temp_550, fp_c6.data[33].y, temp_554);
    // 0x001398: 0x5C58100000970C09 Fadd
    temp_645 = temp_639 + temp_640;
    // 0x0013A8: 0x5C58100000470B04 Fadd
    temp_646 = temp_627 + temp_641;
    // 0x0013B0: 0x49A00C980857110B Ffma
    temp_647 = fma(temp_549, fp_c6.data[33].y, temp_553);
    // 0x0013B8: 0x5C58100000870A08 Fadd
    temp_648 = temp_629 + temp_642;
    // 0x0013C8: 0x59A0098001571413 Ffma
    temp_649 = fma(temp_638, temp_643, temp_632);
    // 0x0013D0: 0x59A0120001270D0D Ffma
    temp_650 = fma(temp_628, temp_644, temp_622);
    // 0x0013D8: 0x59A1048000972309 Ffma
    temp_651 = 0.0 - temp_645;
    temp_652 = fma(temp_31, temp_651, temp_645);
    // 0x0013E8: 0x59A1020000472304 Ffma
    temp_653 = 0.0 - temp_646;
    temp_654 = fma(temp_31, temp_653, temp_646);
    // 0x0013F0: 0x59A0028000B70E0E Ffma
    temp_655 = fma(temp_626, temp_647, temp_634);
    // 0x0013F8: 0x59A1040000872308 Ffma
    temp_656 = 0.0 - temp_648;
    temp_657 = fma(temp_31, temp_656, temp_648);
    // 0x001408: 0x4C9807980287000C Mov
    // 0x001410: 0x4C9807980297000A Mov
    // 0x001418: 0x59A0098000972009 Ffma
    temp_658 = fma(temp_34, temp_652, temp_649);
    // 0x001428: 0x4C98079802A70005 Mov
    // 0x001430: 0x59A0070000472104 Ffma
    temp_659 = fma(temp_35, temp_654, temp_655);
    // 0x001438: 0x59A0068000871616 Ffma
    temp_660 = fma(temp_36, temp_657, temp_650);
    // 0x001448: 0x51A0061802871E1E Ffma
    temp_661 = fma(temp_582, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001450: 0x51A0051802971F1F Ffma
    temp_662 = fma(temp_584, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001458: 0x5C68100000970303 Fmul
    temp_663 = temp_272 * temp_658;
    // 0x001468: 0x51A0029802A70005 Ffma
    temp_664 = fma(temp_591, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001470: 0x5C68100000470202 Fmul
    temp_665 = temp_274 * temp_659;
    // 0x001478: 0x5C68100001670104 Fmul
    temp_666 = temp_278 * temp_660;
    // 0x001488: 0x49A2039803570709 Ffma
    temp_667 = 0.0 - temp_625;
    temp_668 = fma(temp_625, fp_c6.data[13].y, temp_667);
    // 0x001490: 0x49A503180BC72806 Ffma
    temp_669 = 0.0 - fp_c6.data[47].x;
    temp_670 = fma(temp_555, temp_669, temp_633);
    temp_671 = clamp(temp_670, 0.0, 1.0);
    // 0x001498: 0x5C58300001E70308 Fadd
    temp_672 = 0.0 - temp_661;
    temp_673 = temp_663 + temp_672;
    // 0x0014A8: 0x5080000000370606 Mufu
    temp_674 = log2(temp_671);
    // 0x0014B0: 0x5C58300001F70200 Fadd
    temp_675 = 0.0 - temp_662;
    temp_676 = temp_665 + temp_675;
    // 0x0014B8: 0x49A00F180BF70808 Ffma
    temp_677 = fma(temp_673, fp_c6.data[47].w, temp_661);
    // 0x0014C8: 0x49A00F980BF70000 Ffma
    temp_678 = fma(temp_676, fp_c6.data[47].w, temp_662);
    // 0x0014D0: 0x5C60178000871E08 Fmnmx
    temp_679 = max(temp_661, temp_677);
    // 0x0014D8: 0x4C68101803170601 Fmul
    temp_680 = temp_674 * fp_c6.data[12].y;
    // 0x0014E8: 0x5C58300000570406 Fadd
    temp_681 = 0.0 - temp_664;
    temp_682 = temp_666 + temp_681;
    // 0x0014F0: 0x5C60178000071F00 Fmnmx
    temp_683 = max(temp_662, temp_678);
    // 0x0014F8: 0x5C9000800017000A Rro
    // 0x001508: 0x49A002980BF70606 Ffma
    temp_684 = fma(temp_682, fp_c6.data[47].w, temp_664);
    // 0x001510: 0x5080000000270A0A Mufu
    temp_685 = exp2(temp_680);
    // 0x001518: 0x49A2039803470701 Ffma
    temp_686 = 0.0 - temp_625;
    temp_687 = fma(temp_625, fp_c6.data[13].x, temp_686);
    // 0x001528: 0x49A2039803670707 Ffma
    temp_688 = 0.0 - temp_625;
    temp_689 = fma(temp_625, fp_c6.data[13].z, temp_688);
    // 0x001530: 0x59A0000000970009 Ffma
    temp_690 = fma(temp_683, temp_668, temp_683);
    // 0x001538: 0x5C60178000670506 Fmnmx
    temp_691 = max(temp_664, temp_684);
    // 0x001548: 0x59A0040000170801 Ffma
    temp_692 = fma(temp_679, temp_687, temp_679);
    // 0x001550: 0x4C58100C03872508 Fadd
    temp_693 = temp_635 + fp_c3.data[14].x;
    // 0x001558: 0x59A0030000770605 Ffma
    temp_694 = fma(temp_691, temp_689, temp_691);
    // 0x001568: 0x5C59100000170300 Fadd
    temp_695 = 0.0 - temp_663;
    temp_696 = temp_695 + temp_692;
    // 0x001570: 0x4C68101802B70A06 Fmul
    temp_697 = temp_685 * fp_c6.data[10].w;
    // 0x001578: 0x5C59100000970201 Fadd
    temp_698 = 0.0 - temp_665;
    temp_699 = temp_698 + temp_690;
    // 0x001588: 0x5C98078001770007 Mov
    // 0x001590: 0x5C59100000570405 Fadd
    temp_700 = 0.0 - temp_666;
    temp_701 = temp_700 + temp_694;
    // 0x001598: 0x59A0018000670000 Ffma
    temp_702 = fma(temp_696, temp_697, temp_663);
    // 0x0015A8: 0x59A0010000670101 Ffma
    temp_703 = fma(temp_699, temp_697, temp_665);
    // 0x0015B0: 0x5C98078001770003 Mov
    // 0x0015B8: 0x59A0020000670502 Ffma
    temp_704 = fma(temp_701, temp_697, temp_666);
    // 0x0015C8: 0x0103F6000007F005 Mov32i
    // 0x0015D0: 0x5C9807800FF70006 Mov
    // 0x0015D8: 0x49A37F8C03C70804 Ffma
    temp_705 = 0.0 - fp_c3.data[15].x;
    temp_706 = fma(temp_693, temp_705, -0.0);
    // 0x0015E8: 0xE30000000007000F Exit
    out_attr0.x = temp_702;
    out_attr0.y = temp_703;
    out_attr0.z = temp_704;
    out_attr0.w = temp_37;
    out_attr1.x = temp_706;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_37;
    return;
}
