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
layout (binding = 2) uniform sampler2D fp_t_tcb_28;
layout (binding = 3) uniform sampler2D fp_t_tcb_24;
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
    uint temp_140;
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
    int temp_154;
    precise float temp_155;
    precise float temp_156;
    int temp_157;
    uint temp_158;
    uint temp_159;
    int temp_160;
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
    bool temp_247;
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
    int temp_297;
    bool temp_298;
    int temp_299;
    int temp_300;
    int temp_301;
    int temp_302;
    int temp_303;
    uint temp_304;
    uint temp_305;
    int temp_306;
    precise float temp_307;
    precise float temp_308;
    precise float temp_309;
    precise float temp_310;
    int temp_311;
    int temp_312;
    uint temp_313;
    uint temp_314;
    int temp_315;
    precise float temp_316;
    int temp_317;
    uint temp_318;
    int temp_319;
    precise float temp_320;
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
    precise float temp_351;
    precise float temp_352;
    precise float temp_353;
    precise float temp_354;
    precise float temp_355;
    precise float temp_356;
    int temp_357;
    uint temp_358;
    uint temp_359;
    int temp_360;
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
    uint temp_399;
    int temp_400;
    precise float temp_401;
    bool temp_402;
    uint temp_403;
    precise float temp_404;
    precise float temp_405;
    precise float temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    uint temp_411;
    precise float temp_412;
    bool temp_413;
    precise float temp_414;
    int temp_415;
    uint temp_416;
    uint temp_417;
    int temp_418;
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
    precise float temp_444;
    precise float temp_445;
    precise float temp_446;
    precise float temp_447;
    uint temp_448;
    uint temp_449;
    int temp_450;
    precise float temp_451;
    int temp_452;
    uint temp_453;
    int temp_454;
    precise float temp_455;
    precise float temp_456;
    int temp_457;
    uint temp_458;
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
    precise float temp_707;
    precise float temp_708;
    precise float temp_709;
    precise float temp_710;
    precise float temp_711;
    precise float temp_712;
    // 0x000008: 0x0103F0000007F02D Mov32i
    // 0x000010: 0xE003FF87CFF7FF0C Ipa
    // 0x000018: 0x5C9807800FF70027 Mov
    // 0x000028: 0xE003FF870FF7FF08 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000030: 0xE003FF874FF7FF09 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000038: 0x5080000000470C0C Mufu
    // 0x000048: 0x4C68100C04A70808 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000050: 0x4C68100C04B70909 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000058: 0xE043FF8E00C7FF0E Ipa
    temp_8 = in_attr6.x;
    // 0x000068: 0xE043FF8E40C7FF0F Ipa
    temp_9 = in_attr6.y;
    // 0x000070: 0xD830026FF0F70E02 Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000078: 0xD8240360D0F70E22 Texs
    temp_13 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    temp_16 = temp_13.z;
    // 0x000088: 0xD822028FF0F70E04 Texs
    temp_17 = texture(fp_t_tcb_28, vec2(temp_8, temp_9)).x;
    // 0x000090: 0xD822024050F70E06 Texs
    temp_18 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyz;
    temp_19 = temp_18.x;
    temp_20 = temp_18.y;
    temp_21 = temp_18.z;
    // 0x000098: 0xD82202000097081E Texs
    temp_22 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_23 = temp_22.x;
    temp_24 = temp_22.y;
    temp_25 = temp_22.z;
    // 0x0000A8: 0xE043FF8A00C7FF01 Ipa
    temp_26 = in_attr2.x;
    // 0x0000B0: 0xE043FF8B00C7FF28 Ipa
    temp_27 = in_attr3.x;
    // 0x0000B8: 0xE043FF8900C7FF11 Ipa
    temp_28 = in_attr1.x;
    // 0x0000C8: 0xE043FF8A40C7FF0A Ipa
    temp_29 = in_attr2.y;
    // 0x0000D0: 0xE043FF8B40C7FF21 Ipa
    temp_30 = in_attr3.y;
    // 0x0000D8: 0xE043FF8940C7FF12 Ipa
    temp_31 = in_attr1.y;
    // 0x0000E8: 0xE043FF8B80C7FF20 Ipa
    temp_32 = in_attr3.z;
    // 0x0000F0: 0xE043FF8800C7FF16 Ipa
    temp_33 = in_attr0.x;
    // 0x0000F8: 0xE043FF8A80C7FF0B Ipa
    temp_34 = in_attr2.z;
    // 0x000108: 0xE043FF8980C7FF13 Ipa
    temp_35 = in_attr1.z;
    // 0x000110: 0xE043FF8840C7FF17 Ipa
    temp_36 = in_attr0.y;
    // 0x000118: 0xE043FF8880C7FF18 Ipa
    temp_37 = in_attr0.z;
    // 0x000128: 0xE2900000E4800000 Ssy
    // 0x000130: 0x5C6810000017010F Fmul
    temp_38 = temp_26 * temp_26;
    // 0x000138: 0x5C68100002872814 Fmul
    temp_39 = temp_27 * temp_27;
    // 0x000148: 0x5C68100001171110 Fmul
    temp_40 = temp_28 * temp_28;
    // 0x000150: 0x59A0078000A70A0E Ffma
    temp_41 = fma(temp_29, temp_29, temp_38);
    // 0x000158: 0x59A00A000217210F Ffma
    temp_42 = fma(temp_30, temp_30, temp_39);
    // 0x000168: 0x59A0080001271214 Ffma
    temp_43 = fma(temp_31, temp_31, temp_40);
    // 0x000170: 0x5C68100001671615 Fmul
    temp_44 = temp_33 * temp_33;
    // 0x000178: 0x59A0070000B70B0E Ffma
    temp_45 = fma(temp_34, temp_34, temp_41);
    // 0x000188: 0x59A007800207201A Ffma
    temp_46 = fma(temp_32, temp_32, temp_42);
    // 0x000190: 0x5080000000570E10 Mufu
    temp_47 = inversesqrt(temp_45);
    // 0x000198: 0x59A00A0001371314 Ffma
    temp_48 = fma(temp_35, temp_35, temp_43);
    // 0x0001A8: 0x5080000000571A1A Mufu
    temp_49 = inversesqrt(temp_46);
    // 0x0001B0: 0x59A00A8001771715 Ffma
    temp_50 = fma(temp_36, temp_36, temp_44);
    // 0x0001B8: 0x5080000000571414 Mufu
    temp_51 = inversesqrt(temp_48);
    // 0x0001C8: 0x59A00A800187180F Ffma
    temp_52 = fma(temp_37, temp_37, temp_50);
    // 0x0001D0: 0x5080000000570F19 Mufu
    temp_53 = inversesqrt(temp_52);
    // 0x0001D8: 0x5C68100001070115 Fmul
    temp_54 = temp_26 * temp_47;
    // 0x0001E8: 0x5C68100001070A0A Fmul
    temp_55 = temp_29 * temp_47;
    // 0x0001F0: 0x5C69100001A72828 Fmul
    temp_56 = 0.0 - temp_49;
    temp_57 = temp_27 * temp_56;
    // 0x0001F8: 0x5C69100001A72121 Fmul
    temp_58 = 0.0 - temp_49;
    temp_59 = temp_30 * temp_58;
    // 0x000208: 0x5C68100001471201 Fmul
    temp_60 = temp_31 * temp_51;
    // 0x000210: 0x5C68100001471111 Fmul
    temp_61 = temp_28 * temp_51;
    // 0x000218: 0x5C68100001471313 Fmul
    temp_62 = temp_35 * temp_51;
    // 0x000228: 0x5C68100001070B10 Fmul
    temp_63 = temp_34 * temp_47;
    // 0x000230: 0x4C58301805C72812 Fadd
    temp_64 = 0.0 - fp_c6.data[23].x;
    temp_65 = temp_57 + temp_64;
    // 0x000238: 0x5C69100001A72020 Fmul
    temp_66 = 0.0 - temp_49;
    temp_67 = temp_32 * temp_66;
    // 0x000248: 0x4C58301805D72114 Fadd
    temp_68 = 0.0 - fp_c6.data[23].y;
    temp_69 = temp_59 + temp_68;
    // 0x000250: 0x5C68100001971616 Fmul
    temp_70 = temp_33 * temp_53;
    // 0x000258: 0x5C68100001971717 Fmul
    temp_71 = temp_36 * temp_53;
    // 0x000268: 0x5C6810000127120E Fmul
    temp_72 = temp_65 * temp_65;
    // 0x000270: 0x5C68100001971819 Fmul
    temp_73 = temp_37 * temp_53;
    // 0x000278: 0x4C58301805E72018 Fadd
    temp_74 = 0.0 - fp_c6.data[23].z;
    temp_75 = temp_67 + temp_74;
    // 0x000288: 0x59A007000147140E Ffma
    temp_76 = fma(temp_69, temp_69, temp_72);
    // 0x000290: 0x59A007000187181A Ffma
    temp_77 = fma(temp_75, temp_75, temp_76);
    // 0x000298: 0x5080000000571A1B Mufu
    temp_78 = inversesqrt(temp_77);
    // 0x0002A8: 0x5C9807800FF7001A Mov
    // 0x0002B0: 0x5C68100001B71414 Fmul
    temp_79 = temp_69 * temp_78;
    // 0x0002B8: 0xF0F0000034370000 Depbar
    // 0x0002C8: 0x5C6810000037030B Fmul
    temp_80 = temp_12 * temp_12;
    // 0x0002D0: 0x5C68100000370A0F Fmul
    temp_81 = temp_55 * temp_12;
    // 0x0002D8: 0x5C68100000371010 Fmul
    temp_82 = temp_63 * temp_12;
    // 0x0002E8: 0x4C6810180A072222 Fmul
    temp_83 = temp_14 * fp_c6.data[40].x;
    // 0x0002F0: 0x385D103F80070D0D Fadd
    temp_84 = 0.0 - temp_16;
    temp_85 = temp_84 + 1.0;
    temp_86 = clamp(temp_85, 0.0, 1.0);
    // 0x0002F8: 0x59A005800027020B Ffma
    temp_87 = fma(temp_11, temp_11, temp_80);
    // 0x000308: 0x59A0078000270101 Ffma
    temp_88 = fma(temp_60, temp_11, temp_81);
    // 0x000310: 0x59A0080000271310 Ffma
    temp_89 = fma(temp_62, temp_11, temp_82);
    // 0x000318: 0x5C68100001B7120F Fmul
    temp_90 = temp_65 * temp_78;
    // 0x000328: 0x386013BF80072222 Fmnmx
    temp_91 = min(temp_83, 1.0);
    // 0x000330: 0x385D103F80070B0E Fadd
    temp_92 = 0.0 - temp_87;
    temp_93 = temp_92 + 1.0;
    temp_94 = clamp(temp_93, 0.0, 1.0);
    // 0x000338: 0x5C6810000037150B Fmul
    temp_95 = temp_54 * temp_12;
    // 0x000348: 0x5080000000870E0E Mufu
    temp_96 = sqrt(temp_94);
    // 0x000350: 0x5C68100000F7280A Fmul
    temp_97 = temp_57 * temp_90;
    // 0x000358: 0x5C68100001B71803 Fmul
    temp_98 = temp_75 * temp_78;
    // 0x000368: 0x01040DF760C7F015 Mov32i
    // 0x000370: 0x5C9807800FF7001B Mov
    // 0x000378: 0x59A005800027110B Ffma
    temp_99 = fma(temp_61, temp_11, temp_95);
    // 0x000388: 0x59A005000147210A Ffma
    temp_100 = fma(temp_59, temp_79, temp_97);
    // 0x000390: 0x59A0058000E7160B Ffma
    temp_101 = fma(temp_70, temp_96, temp_99);
    // 0x000398: 0x59A0008000E71701 Ffma
    temp_102 = fma(temp_71, temp_96, temp_88);
    // 0x0003A8: 0x59A0080000E71910 Ffma
    temp_103 = fma(temp_73, temp_96, temp_89);
    // 0x0003B0: 0x4C69101805C70F0E Fmul
    temp_104 = 0.0 - fp_c6.data[23].x;
    temp_105 = temp_90 * temp_104;
    // 0x0003B8: 0x59A405000037200A Ffma
    temp_106 = fma(temp_67, temp_98, temp_100);
    temp_107 = clamp(temp_106, 0.0, 1.0);
    // 0x0003C8: 0x3868104180070816 Fmul
    temp_108 = temp_6 * 16.0;
    // 0x0003D0: 0x5C68100000B70B02 Fmul
    temp_109 = temp_101 * temp_101;
    // 0x0003D8: 0x5CA8148001670A16 F2f
    temp_110 = floor(temp_108);
    // 0x0003E8: 0x0103F8000007F017 Mov32i
    // 0x0003F0: 0x49A1071805D7140E Ffma
    temp_111 = 0.0 - fp_c6.data[23].y;
    temp_112 = fma(temp_79, temp_111, temp_105);
    // 0x0003F8: 0x49A20A8400170A11 Ffma
    temp_113 = fma(temp_107, fp_c1.data[0].y, -6.98316002);
    // 0x000408: 0x59A0010000170102 Ffma
    temp_114 = fma(temp_102, temp_102, temp_109);
    // 0x000410: 0x49A5071805E70313 Ffma
    temp_115 = 0.0 - fp_c6.data[23].z;
    temp_116 = fma(temp_98, temp_115, temp_112);
    temp_117 = clamp(temp_116, 0.0, 1.0);
    // 0x000418: 0x5C68100001170A0A Fmul
    temp_118 = temp_107 * temp_113;
    // 0x000428: 0x59A0010001071002 Ffma
    temp_119 = fma(temp_103, temp_103, temp_114);
    // 0x000430: 0x5080000000570212 Mufu
    temp_120 = inversesqrt(temp_119);
    // 0x000438: 0x49A20A8400171311 Ffma
    temp_121 = fma(temp_117, fp_c1.data[0].y, -6.98316002);
    // 0x000448: 0x3868104110070915 Fmul
    temp_122 = temp_7 * 9.0;
    // 0x000450: 0x5CA8148001570A15 F2f
    temp_123 = floor(temp_122);
    // 0x000458: 0x5C90008000A70019 Rro
    // 0x000468: 0x5080000000271919 Mufu
    temp_124 = exp2(temp_118);
    // 0x000470: 0x4C60178400072202 Fmnmx
    temp_125 = max(temp_91, fp_c1.data[0].x);
    // 0x000478: 0x5C68100001270B0E Fmul
    temp_126 = temp_101 * temp_120;
    // 0x000488: 0x5C68100001270101 Fmul
    temp_127 = temp_102 * temp_120;
    // 0x000490: 0x5C6810000117130B Fmul
    temp_128 = temp_117 * temp_121;
    // 0x000498: 0x5C68100001271012 Fmul
    temp_129 = temp_103 * temp_120;
    // 0x0004A8: 0x51A401040007022E Ffma
    temp_130 = fma(temp_125, temp_125, fp_c1.data[0].x);
    temp_131 = clamp(temp_130, 0.0, 1.0);
    // 0x0004B0: 0x32A016BF0007022D Ffma
    temp_132 = fma(temp_125, 0.5, 0.5);
    // 0x0004B8: 0x5C68100000F70E0F Fmul
    temp_133 = temp_126 * temp_90;
    // 0x0004C8: 0x5C68100002870E13 Fmul
    temp_134 = temp_126 * temp_57;
    // 0x0004D0: 0x32A00B418007152A Ffma
    temp_135 = fma(temp_123, 16.0, temp_110);
    // 0x0004D8: 0xF0F0000034270000 Depbar
    // 0x0004E8: 0x32A60BC000070416 Ffma
    temp_136 = fma(temp_17, 2.0, -1.0);
    temp_137 = clamp(temp_136, 0.0, 1.0);
    // 0x0004F0: 0x5CB0118002A70A2A F2i
    temp_138 = trunc(temp_135);
    temp_139 = max(temp_138, 0.0);
    temp_140 = uint(temp_139);
    // 0x0004F8: 0x5C68100002E72E2C Fmul
    temp_141 = temp_131 * temp_131;
    // 0x000508: 0x59A0078001470114 Ffma
    temp_142 = fma(temp_127, temp_79, temp_133);
    // 0x000510: 0x4C69101805C70E0F Fmul
    temp_143 = 0.0 - fp_c6.data[23].x;
    temp_144 = temp_126 * temp_143;
    // 0x000518: 0x59A0098002170113 Ffma
    temp_145 = fma(temp_127, temp_59, temp_134);
    // 0x000528: 0x5C68120002D72D2D Fmul
    temp_146 = temp_132 * 0.5;
    temp_147 = temp_146 * temp_132;
    // 0x000530: 0x59A40A0000371211 Ffma
    temp_148 = fma(temp_129, temp_98, temp_142);
    temp_149 = clamp(temp_148, 0.0, 1.0);
    // 0x000538: 0x49A1079805D7010F Ffma
    temp_150 = 0.0 - fp_c6.data[23].y;
    temp_151 = fma(temp_127, temp_150, temp_144);
    // 0x000548: 0x59A4098002071203 Ffma
    temp_152 = fma(temp_129, temp_67, temp_145);
    temp_153 = clamp(temp_152, 0.0, 1.0);
    // 0x000550: 0x3848000000872A29 Shl
    temp_154 = int(temp_140) << 8;
    // 0x000558: 0x59A2088002C71110 Ffma
    temp_155 = 0.0 - temp_149;
    temp_156 = fma(temp_149, temp_141, temp_155);
    // 0x000568: 0xEF94008200472929 Ldc
    temp_157 = temp_154 + 0x2004;
    temp_158 = uint(temp_157) >> 2;
    temp_159 = temp_158 >> 2;
    temp_160 = int(temp_158) & 3;
    temp_161 = fp_c8.data[int(temp_159)][temp_160];
    // 0x000570: 0x49A5079805E7120F Ffma
    temp_162 = 0.0 - fp_c6.data[23].z;
    temp_163 = fma(temp_129, temp_162, temp_151);
    temp_164 = clamp(temp_163, 0.0, 1.0);
    // 0x000578: 0x59A1018000372D14 Ffma
    temp_165 = 0.0 - temp_153;
    temp_166 = fma(temp_147, temp_165, temp_153);
    // 0x000588: 0x5C68100000370E2F Fmul
    temp_167 = temp_126 * temp_153;
    // 0x000590: 0x51A0080400271110 Ffma
    temp_168 = fma(temp_149, temp_156, fp_c1.data[0].z);
    // 0x000598: 0x59A1078002D70F13 Ffma
    temp_169 = 0.0 - temp_147;
    temp_170 = fma(temp_164, temp_169, temp_164);
    // 0x0005A8: 0x5080000000471010 Mufu
    temp_171 = 1.0 / temp_168;
    // 0x0005B0: 0x5C58100001472D14 Fadd
    temp_172 = temp_147 + temp_166;
    // 0x0005B8: 0x3859103F80070309 Fadd
    temp_173 = 0.0 - temp_153;
    temp_174 = temp_173 + 1.0;
    // 0x0005C8: 0x5080000000471414 Mufu
    temp_175 = 1.0 / temp_172;
    // 0x0005D0: 0x32A2144000072F2F Ffma
    temp_176 = 0.0 - temp_57;
    temp_177 = fma(temp_167, 2.0, temp_176);
    // 0x0005D8: 0x5C58100001372D13 Fadd
    temp_178 = temp_147 + temp_170;
    // 0x0005E8: 0x5080000000471318 Mufu
    temp_179 = 1.0 / temp_178;
    // 0x0005F0: 0x4C68101406870911 Fmul
    temp_180 = temp_174 * fp_c5.data[26].x;
    // 0x0005F8: 0x5080400000371111 Mufu
    temp_181 = abs(temp_180);
    temp_182 = log2(temp_181);
    // 0x000608: 0x5C68100001072E08 Fmul
    temp_183 = temp_131 * temp_171;
    // 0x000610: 0x3868103F0007142B Fmul
    temp_184 = temp_175 * 0.5;
    // 0x000618: 0x4C98079403470013 Mov
    // 0x000628: 0x4C98079403570014 Mov
    // 0x000630: 0x5C68100000870810 Fmul
    temp_185 = temp_183 * temp_183;
    // 0x000638: 0x32A20BC000070408 Ffma
    temp_186 = fma(temp_17, 2.0, -1.0);
    // 0x000648: 0xF0F0000034170000 Depbar
    // 0x000650: 0x4C59101402C70604 Fadd
    temp_187 = 0.0 - temp_19;
    temp_188 = temp_187 + fp_c5.data[11].x;
    // 0x000658: 0x5C68100001872B09 Fmul
    temp_189 = temp_184 * temp_179;
    // 0x000668: 0x4C98079403670018 Mov
    // 0x000670: 0x5C5970000FF70815 Fadd
    temp_190 = abs(temp_186);
    temp_191 = 0.0 - temp_190;
    temp_192 = temp_191 + -0.0;
    // 0x000678: 0x4C68101406971108 Fmul
    temp_193 = temp_182 * fp_c5.data[26].y;
    // 0x000688: 0x5C68100000971010 Fmul
    temp_194 = temp_185 * temp_189;
    // 0x000690: 0x59A0030000470704 Ffma
    temp_195 = fma(temp_20, temp_188, temp_19);
    // 0x000698: 0x51A0099403471511 Ffma
    temp_196 = fma(temp_192, fp_c5.data[13].x, fp_c5.data[13].x);
    // 0x0006A8: 0x5C90008000870009 Rro
    // 0x0006B0: 0x51A00A1403571513 Ffma
    temp_197 = fma(temp_192, fp_c5.data[13].y, fp_c5.data[13].y);
    // 0x0006B8: 0x5084000000270909 Mufu
    temp_198 = exp2(temp_193);
    temp_199 = clamp(temp_198, 0.0, 1.0);
    // 0x0006C8: 0x51A00C1403671515 Ffma
    temp_200 = fma(temp_192, fp_c5.data[13].z, fp_c5.data[13].z);
    // 0x0006D0: 0x4C59101402D70708 Fadd
    temp_201 = 0.0 - temp_20;
    temp_202 = temp_201 + fp_c5.data[11].y;
    // 0x0006D8: 0x4C59101402E70514 Fadd
    temp_203 = 0.0 - temp_21;
    temp_204 = temp_203 + fp_c5.data[11].z;
    // 0x0006E8: 0x49A0089403071617 Ffma
    temp_205 = fma(temp_137, fp_c5.data[12].x, temp_196);
    // 0x0006F0: 0x4C58301407B7040A Fadd
    temp_206 = 0.0 - fp_c5.data[30].w;
    temp_207 = temp_195 + temp_206;
    // 0x0006F8: 0x49A0099403171613 Ffma
    temp_208 = fma(temp_137, fp_c5.data[12].y, temp_197);
    // 0x000708: 0x49A00A9403271616 Ffma
    temp_209 = fma(temp_137, fp_c5.data[12].z, temp_200);
    // 0x000710: 0x59A0038000870706 Ffma
    temp_210 = fma(temp_20, temp_202, temp_20);
    // 0x000718: 0x59A0028001470705 Ffma
    temp_211 = fma(temp_20, temp_204, temp_21);
    // 0x000728: 0x5C90008000B70015 Rro
    // 0x000730: 0x4C68101801470F11 Fmul
    temp_212 = temp_164 * fp_c6.data[5].x;
    // 0x000738: 0x5080000000271515 Mufu
    temp_213 = exp2(temp_128);
    // 0x000748: 0x49A00B9403870907 Ffma
    temp_214 = fma(temp_199, fp_c5.data[14].x, temp_205);
    // 0x000750: 0x49A0099403970908 Ffma
    temp_215 = fma(temp_199, fp_c5.data[14].y, temp_208);
    // 0x000758: 0x49A00B1403A70909 Ffma
    temp_216 = fma(temp_199, fp_c5.data[14].z, temp_209);
    // 0x000768: 0x4C58301407B70616 Fadd
    temp_217 = 0.0 - fp_c5.data[30].w;
    temp_218 = temp_210 + temp_217;
    // 0x000770: 0x4C58301407B70518 Fadd
    temp_219 = 0.0 - fp_c5.data[30].w;
    temp_220 = temp_211 + temp_219;
    // 0x000778: 0x4C68101801570F13 Fmul
    temp_221 = temp_164 * fp_c6.data[5].y;
    // 0x000788: 0x5C68100001070F10 Fmul
    temp_222 = temp_164 * temp_194;
    // 0x000790: 0x4C68101801670F14 Fmul
    temp_223 = temp_164 * fp_c6.data[5].z;
    // 0x000798: 0x51A0051407B7230A Ffma
    temp_224 = fma(temp_15, temp_207, fp_c5.data[30].w);
    // 0x0007A8: 0x51A00B1407B7230B Ffma
    temp_225 = fma(temp_15, temp_218, fp_c5.data[30].w);
    // 0x0007B0: 0x51A00C1407B7230F Ffma
    temp_226 = fma(temp_15, temp_220, fp_c5.data[30].w);
    // 0x0007B8: 0x1E23EA2F98371116 Fmul32i
    temp_227 = temp_212 * 0.318309873;
    // 0x0007C8: 0x1E23EA2F98371313 Fmul32i
    temp_228 = temp_221 * 0.318309873;
    // 0x0007D0: 0x1E23EA2F98371432 Fmul32i
    temp_229 = temp_223 * 0.318309873;
    // 0x0007D8: 0x59A10C8001970A11 Ffma
    temp_230 = 0.0 - temp_124;
    temp_231 = fma(temp_224, temp_230, temp_124);
    // 0x0007E8: 0x59A10A8000B71518 Ffma
    temp_232 = 0.0 - temp_225;
    temp_233 = fma(temp_213, temp_232, temp_213);
    // 0x0007F0: 0x59A10A8000A71517 Ffma
    temp_234 = 0.0 - temp_224;
    temp_235 = fma(temp_213, temp_234, temp_213);
    // 0x0007F8: 0x59A10A8000F71515 Ffma
    temp_236 = 0.0 - temp_226;
    temp_237 = fma(temp_213, temp_236, temp_213);
    // 0x000808: 0x59A10C8001970B14 Ffma
    temp_238 = 0.0 - temp_124;
    temp_239 = fma(temp_225, temp_238, temp_124);
    // 0x000810: 0x59A10C8001970F19 Ffma
    temp_240 = 0.0 - temp_124;
    temp_241 = fma(temp_226, temp_240, temp_124);
    // 0x000818: 0x5C58100001170A11 Fadd
    temp_242 = temp_224 + temp_231;
    // 0x000828: 0x5C58100001870B18 Fadd
    temp_243 = temp_225 + temp_233;
    // 0x000830: 0x5C58100001770A17 Fadd
    temp_244 = temp_224 + temp_235;
    // 0x000838: 0x5C58100001570F15 Fadd
    temp_245 = temp_226 + temp_237;
    // 0x000848: 0x5C58100001470B14 Fadd
    temp_246 = temp_225 + temp_239;
    // 0x000850: 0x5B6603800FF72907 Isetp
    temp_247 = floatBitsToUint(temp_161) <= 0u;
    // 0x000858: 0x59A10B0001671116 Ffma
    temp_248 = 0.0 - temp_227;
    temp_249 = fma(temp_242, temp_248, temp_227);
    // 0x000868: 0x4C68101801571811 Fmul
    temp_250 = temp_243 * fp_c6.data[5].y;
    // 0x000870: 0xEF5400000047FF16 Stl
    local_memory[1] = floatBitsToUint(temp_249);
    // 0x000878: 0x4C68101801471717 Fmul
    temp_251 = temp_244 * fp_c6.data[5].x;
    // 0x000888: 0x4C68101801671515 Fmul
    temp_252 = temp_245 * fp_c6.data[5].z;
    // 0x000890: 0x5C58100001970F19 Fadd
    temp_253 = temp_226 + temp_241;
    // 0x000898: 0x59A1098001371413 Ffma
    temp_254 = 0.0 - temp_228;
    temp_255 = fma(temp_246, temp_254, temp_228);
    // 0x0008A8: 0x5C9807800FF70018 Mov
    // 0x0008B0: 0xEF5400000007FF13 Stl
    local_memory[0] = floatBitsToUint(temp_255);
    // 0x0008B8: 0x5C68100001171024 Fmul
    temp_256 = temp_222 * temp_250;
    // 0x0008C8: 0x5C68100001771025 Fmul
    temp_257 = temp_222 * temp_251;
    // 0x0008D0: 0x5C68100001571026 Fmul
    temp_258 = temp_222 * temp_252;
    // 0x0008D8: 0x49A206980AC70D10 Ffma
    temp_259 = 0.0 - temp_86;
    temp_260 = fma(temp_86, fp_c6.data[43].x, temp_259);
    // 0x0008E8: 0x49A206980AD70D11 Ffma
    temp_261 = 0.0 - temp_86;
    temp_262 = fma(temp_86, fp_c6.data[43].y, temp_261);
    // 0x0008F0: 0x49A206980AE70D0D Ffma
    temp_263 = 0.0 - temp_86;
    temp_264 = fma(temp_86, fp_c6.data[43].z, temp_263);
    // 0x0008F8: 0x5C68100000370116 Fmul
    temp_265 = temp_127 * temp_153;
    // 0x000908: 0x5C68100000371217 Fmul
    temp_266 = temp_129 * temp_153;
    // 0x000910: 0x59A1190003271932 Ffma
    temp_267 = 0.0 - temp_229;
    temp_268 = fma(temp_253, temp_267, temp_229);
    // 0x000918: 0x3858103F80071015 Fadd
    temp_269 = temp_260 + 1.0;
    // 0x000928: 0x3858103F80071111 Fadd
    temp_270 = temp_262 + 1.0;
    // 0x000930: 0x3858103F80070D22 Fadd
    temp_271 = temp_264 + 1.0;
    // 0x000938: 0x5C9807800FF70019 Mov
    // 0x000948: 0x5C9807800FF70013 Mov
    // 0x000950: 0x32A210C000071616 Ffma
    temp_272 = 0.0 - temp_59;
    temp_273 = fma(temp_265, 2.0, temp_272);
    // 0x000958: 0x59A40A800157041C Ffma
    temp_274 = fma(temp_195, temp_269, temp_269);
    temp_275 = clamp(temp_274, 0.0, 1.0);
    // 0x000968: 0x59A408800117061D Ffma
    temp_276 = fma(temp_210, temp_270, temp_270);
    temp_277 = clamp(temp_276, 0.0, 1.0);
    // 0x000970: 0x59A4110002270522 Ffma
    temp_278 = fma(temp_211, temp_271, temp_271);
    temp_279 = clamp(temp_278, 0.0, 1.0);
    // 0x000978: 0x32A2104000071717 Ffma
    temp_280 = 0.0 - temp_67;
    temp_281 = fma(temp_266, 2.0, temp_280);
    // 0x000988: 0x1E23E22F98372424 Fmul32i
    temp_282 = temp_256 * 0.159154937;
    // 0x000990: 0x1E23E22F98372525 Fmul32i
    temp_283 = temp_257 * 0.159154937;
    // 0x000998: 0x1E23E22F98372626 Fmul32i
    temp_284 = temp_258 * 0.159154937;
    // 0x0009A8: 0xF0F800000000000F Sync
    temp_285 = 0.0;
    temp_286 = 0.0;
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
    if (!temp_247)
    {
        // 0x0009B0: 0x5C9807800FF70030 Mov
        temp_297 = 0;
        do
        {
            // 0x0009B8: 0x5C18020003072A15 Iscadd
            temp_299 = int(temp_140) << 4;
            temp_300 = temp_299 + temp_297;
            // 0x0009C8: 0xE003FF87CFF7FF33 Ipa
            // 0x0009D0: 0x1C00000000173030 Iadd32i
            temp_301 = temp_297 + 1;
            // 0x0009D8: 0xE003FF87CFF7FF35 Ipa
            // 0x0009E8: 0x3848000000471515 Shl
            temp_302 = temp_300 << 4;
            // 0x0009F0: 0xE003FF87CFF7FF34 Ipa
            // 0x0009F8: 0x5B6C03800297300F Isetp
            temp_298 = uint(temp_301) >= floatBitsToUint(temp_161);
            // 0x000A08: 0xE290000055000000 Ssy
            // 0x000A10: 0xEF94008200071515 Ldc
            temp_303 = temp_302 + 0x2000;
            temp_304 = uint(temp_303) >> 2;
            temp_305 = temp_304 >> 2;
            temp_306 = int(temp_304) & 3;
            temp_307 = fp_c8.data[int(temp_305)][temp_306];
            // 0x000A18: 0x5080000000473333 Mufu
            // 0x000A28: 0x5080000000473535 Mufu
            // 0x000A30: 0x5080000000473434 Mufu
            // 0x000A38: 0xE043FF8D0337FF33 Ipa
            temp_308 = in_attr5.x;
            // 0x000A48: 0xE043FF8D8357FF35 Ipa
            temp_309 = in_attr5.z;
            // 0x000A50: 0xE043FF8D4347FF34 Ipa
            temp_310 = in_attr5.y;
            // 0x000A58: 0x3848000000671531 Shl
            temp_311 = floatBitsToInt(temp_307) << 6;
            // 0x000A68: 0xEF9500800107310C Ldc
            temp_312 = temp_311 + 16;
            temp_313 = uint(temp_312) >> 2;
            temp_314 = temp_313 >> 2;
            temp_315 = int(temp_313) & 3;
            temp_316 = fp_c8.data[int(temp_314)][temp_315];
            temp_317 = int(temp_313) + 1;
            temp_318 = uint(temp_317) >> 2;
            temp_319 = temp_317 & 3;
            temp_320 = fp_c8.data[int(temp_318)][temp_319];
            // 0x000A70: 0xEF95008001873110 Ldc
            temp_321 = temp_311 + 24;
            temp_322 = uint(temp_321) >> 2;
            temp_323 = temp_322 >> 2;
            temp_324 = int(temp_322) & 3;
            temp_325 = fp_c8.data[int(temp_323)][temp_324];
            temp_326 = int(temp_322) + 1;
            temp_327 = uint(temp_326) >> 2;
            temp_328 = temp_326 & 3;
            temp_329 = fp_c8.data[int(temp_327)][temp_328];
            // 0x000A78: 0xEF95008002073114 Ldc
            temp_330 = temp_311 + 32;
            temp_331 = uint(temp_330) >> 2;
            temp_332 = temp_331 >> 2;
            temp_333 = int(temp_331) & 3;
            temp_334 = fp_c8.data[int(temp_332)][temp_333];
            temp_335 = int(temp_331) + 1;
            temp_336 = uint(temp_335) >> 2;
            temp_337 = temp_335 & 3;
            temp_338 = fp_c8.data[int(temp_336)][temp_337];
            // 0x000A88: 0x5C58300003370C33 Fadd
            temp_339 = 0.0 - temp_308;
            temp_340 = temp_316 + temp_339;
            // 0x000A90: 0x5C58300003470D34 Fadd
            temp_341 = 0.0 - temp_310;
            temp_342 = temp_320 + temp_341;
            // 0x000A98: 0x5C58300003571035 Fadd
            temp_343 = 0.0 - temp_309;
            temp_344 = temp_325 + temp_343;
            // 0x000AA8: 0x5C68100003373336 Fmul
            temp_345 = temp_340 * temp_340;
            // 0x000AB0: 0x59A11A8003571111 Ffma
            temp_346 = 0.0 - temp_344;
            temp_347 = fma(temp_329, temp_346, temp_344);
            // 0x000AB8: 0x59A01B0003473436 Ffma
            temp_348 = fma(temp_342, temp_342, temp_345);
            // 0x000AC8: 0x59A01B0001171137 Ffma
            temp_349 = fma(temp_347, temp_347, temp_348);
            // 0x000AD0: 0x508000000057370C Mufu
            temp_350 = inversesqrt(temp_349);
            // 0x000AD8: 0x5080000000873737 Mufu
            temp_351 = sqrt(temp_349);
            // 0x000AE8: 0x5C68100000C7330D Fmul
            temp_352 = temp_340 * temp_350;
            // 0x000AF0: 0x5C68100000C73410 Fmul
            temp_353 = temp_342 * temp_350;
            // 0x000AF8: 0x5C68100000C7110C Fmul
            temp_354 = temp_347 * temp_350;
            // 0x000B08: 0x5C69100001470D0D Fmul
            temp_355 = 0.0 - temp_334;
            temp_356 = temp_352 * temp_355;
            // 0x000B10: 0xEF94008002873114 Ldc
            temp_357 = temp_311 + 40;
            temp_358 = uint(temp_357) >> 2;
            temp_359 = temp_358 >> 2;
            temp_360 = int(temp_358) & 3;
            temp_361 = fp_c8.data[int(temp_359)][temp_360];
            // 0x000B18: 0x59A106800157100D Ffma
            temp_362 = 0.0 - temp_338;
            temp_363 = fma(temp_353, temp_362, temp_356);
            // 0x000B28: 0xEF95008003873110 Ldc
            temp_364 = temp_311 + 56;
            temp_365 = uint(temp_364) >> 2;
            temp_366 = temp_365 >> 2;
            temp_367 = int(temp_365) & 3;
            temp_368 = fp_c8.data[int(temp_366)][temp_367];
            temp_369 = int(temp_365) + 1;
            temp_370 = uint(temp_369) >> 2;
            temp_371 = temp_369 & 3;
            temp_372 = fp_c8.data[int(temp_370)][temp_371];
            // 0x000B30: 0x010404000007F015 Mov32i
            // 0x000B38: 0x59A1068001470C14 Ffma
            temp_373 = 0.0 - temp_361;
            temp_374 = fma(temp_354, temp_373, temp_363);
            // 0x000B48: 0xEF9500800307310C Ldc
            temp_375 = temp_311 + 48;
            temp_376 = uint(temp_375) >> 2;
            temp_377 = temp_376 >> 2;
            temp_378 = int(temp_376) & 3;
            temp_379 = fp_c8.data[int(temp_377)][temp_378];
            temp_380 = int(temp_376) + 1;
            temp_381 = uint(temp_380) >> 2;
            temp_382 = temp_380 & 3;
            temp_383 = fp_c8.data[int(temp_381)][temp_382];
            // 0x000B50: 0x59A4088001071410 Ffma
            temp_384 = fma(temp_374, temp_368, temp_372);
            temp_385 = clamp(temp_384, 0.0, 1.0);
            // 0x000B58: 0x59A4068003770C37 Ffma
            temp_386 = fma(temp_379, temp_351, temp_383);
            temp_387 = clamp(temp_386, 0.0, 1.0);
            // 0x000B68: 0x33A00AC000073714 Ffma
            temp_388 = fma(temp_387, -2.0, 3.0);
            // 0x000B70: 0x5C68100003773711 Fmul
            temp_389 = temp_387 * temp_387;
            // 0x000B78: 0x33A00AC000071015 Ffma
            temp_390 = fma(temp_385, -2.0, 3.0);
            // 0x000B88: 0x5C68100001071010 Fmul
            temp_391 = temp_385 * temp_385;
            // 0x000B90: 0x5C68100001171411 Fmul
            temp_392 = temp_388 * temp_389;
            // 0x000B98: 0x39585042F0073514 Fadd
            temp_393 = abs(temp_344);
            temp_394 = temp_393 + -120.0;
            // 0x000BA8: 0x5C68100001571010 Fmul
            temp_395 = temp_391 * temp_390;
            // 0x000BB0: 0x1EABD4CCCCD71414 Fmul32i
            temp_396 = temp_394 * -0.0500000007;
            temp_397 = clamp(temp_396, 0.0, 1.0);
            // 0x000BB8: 0x5C68100001171010 Fmul
            temp_398 = temp_395 * temp_392;
            // 0x000BC8: 0x36247F9000171111 Xmad
            temp_399 = floatBitsToUint(temp_392) >> 16;
            temp_400 = int(temp_399) << 16;
            // 0x000BD0: 0x5C68100001071410 Fmul
            temp_401 = temp_397 * temp_398;
            // 0x000BD8: 0x5BB383800FF71007 Fsetp
            temp_402 = temp_401 <= 0.0;
            // 0x000BE8: 0x7A05083C0F00FF11 Hadd2
            temp_297 = temp_301;
            temp_403 = uint(temp_400);
            temp_404 = temp_285;
            temp_405 = temp_286;
            temp_406 = temp_287;
            temp_407 = temp_288;
            temp_408 = temp_289;
            temp_409 = temp_290;
            if (temp_402)
            {
                temp_410 = unpackHalf2x16(uint(temp_400)).y;
                temp_411 = packHalf2x16(vec2(1.0, temp_410));
                temp_403 = temp_411;
            }
            // 0x000BF0: 0x5D2103902FF71107 Hsetp2
            temp_412 = unpackHalf2x16(temp_403).x;
            temp_413 = temp_412 == 0.0;
            // 0x000BF8: 0xF0F800000008000F Sync
            if (temp_413)
            {
                // 0x000C08: 0x5080000000470C0C Mufu
                temp_414 = 1.0 / temp_379;
                // 0x000C10: 0xEF94008002C73115 Ldc
                temp_415 = temp_311 + 44;
                temp_416 = uint(temp_415) >> 2;
                temp_417 = temp_416 >> 2;
                temp_418 = int(temp_416) & 3;
                temp_419 = fp_c8.data[int(temp_417)][temp_418];
                // 0x000C18: 0x5C69100000C70D14 Fmul
                temp_420 = 0.0 - temp_414;
                temp_421 = temp_383 * temp_420;
                // 0x000C28: 0x5C60138001473511 Fmnmx
                temp_422 = min(temp_344, temp_421);
                // 0x000C30: 0x5C61178001171411 Fmnmx
                temp_423 = 0.0 - temp_421;
                temp_424 = max(temp_423, temp_422);
                // 0x000C38: 0x59A01B000117110C Ffma
                temp_425 = fma(temp_424, temp_424, temp_348);
                // 0x000C48: 0x5080000000570C0D Mufu
                temp_426 = inversesqrt(temp_425);
                // 0x000C50: 0x5C68100000D73333 Fmul
                temp_427 = temp_340 * temp_426;
                // 0x000C58: 0x5080000000471515 Mufu
                temp_428 = 1.0 / temp_419;
                // 0x000C68: 0x5C68100000D73435 Fmul
                temp_429 = temp_342 * temp_426;
                // 0x000C70: 0x5C68100000D71111 Fmul
                temp_430 = temp_424 * temp_426;
                // 0x000C78: 0x5C58100003372837 Fadd
                temp_431 = temp_57 + temp_427;
                // 0x000C88: 0x5C5810000357210D Fadd
                temp_432 = temp_59 + temp_429;
                // 0x000C90: 0x5C58100001172014 Fadd
                temp_433 = temp_67 + temp_430;
                // 0x000C98: 0x5C68100003773734 Fmul
                temp_434 = temp_431 * temp_431;
                // 0x000CA8: 0x59A01A0000D70D34 Ffma
                temp_435 = fma(temp_432, temp_432, temp_434);
                // 0x000CB0: 0x59A01A0001471434 Ffma
                temp_436 = fma(temp_433, temp_433, temp_435);
                // 0x000CB8: 0x5080000000573434 Mufu
                temp_437 = inversesqrt(temp_436);
                // 0x000CC8: 0x5C68100003473737 Fmul
                temp_438 = temp_431 * temp_437;
                // 0x000CD0: 0x5C68100003470D0D Fmul
                temp_439 = temp_432 * temp_437;
                // 0x000CD8: 0x5C68100003471414 Fmul
                temp_440 = temp_433 * temp_437;
                // 0x000CE8: 0x5C68100003370E34 Fmul
                temp_441 = temp_126 * temp_427;
                // 0x000CF0: 0x5C68100003773336 Fmul
                temp_442 = temp_427 * temp_438;
                // 0x000CF8: 0x5080000000870C33 Mufu
                temp_443 = sqrt(temp_425);
                // 0x000D08: 0x5C68100003770E37 Fmul
                temp_444 = temp_126 * temp_438;
                // 0x000D10: 0x59A01A0003570134 Ffma
                temp_445 = fma(temp_127, temp_429, temp_441);
                // 0x000D18: 0x59A01B0000D73536 Ffma
                temp_446 = fma(temp_429, temp_439, temp_442);
                // 0x000D28: 0x59A01B8000D70137 Ffma
                temp_447 = fma(temp_127, temp_439, temp_444);
                // 0x000D30: 0xEF9500800007310C Ldc
                temp_448 = uint(temp_311) >> 2;
                temp_449 = temp_448 >> 2;
                temp_450 = int(temp_448) & 3;
                temp_451 = fp_c8.data[int(temp_449)][temp_450];
                temp_452 = int(temp_448) + 1;
                temp_453 = uint(temp_452) >> 2;
                temp_454 = temp_452 & 3;
                temp_455 = fp_c8.data[int(temp_453)][temp_454];
                // 0x000D38: 0x59A01A0001171234 Ffma
                temp_456 = fma(temp_129, temp_430, temp_445);
                // 0x000D48: 0xEF94008000873131 Ldc
                temp_457 = temp_311 + 8;
                temp_458 = uint(temp_457) >> 2;
                temp_459 = temp_458 >> 2;
                temp_460 = int(temp_458) & 3;
                temp_461 = fp_c8.data[int(temp_459)][temp_460];
                // 0x000D50: 0x59A41B0001471136 Ffma
                temp_462 = fma(temp_430, temp_440, temp_446);
                temp_463 = clamp(temp_462, 0.0, 1.0);
                // 0x000D58: 0x01040DF760C7F011 Mov32i
                // 0x000D68: 0x51A0198400371515 Ffma
                temp_464 = fma(temp_428, temp_443, fp_c1.data[0].w);
                // 0x000D70: 0x59A41B8001471237 Ffma
                temp_465 = fma(temp_129, temp_440, temp_447);
                temp_466 = clamp(temp_465, 0.0, 1.0);
                // 0x000D78: 0x5080000000471515 Mufu
                temp_467 = 1.0 / temp_464;
                // 0x000D88: 0x49A2088400173611 Ffma
                temp_468 = fma(temp_463, fp_c1.data[0].y, -6.98316002);
                // 0x000D90: 0x59A21B8003772C14 Ffma
                temp_469 = 0.0 - temp_466;
                temp_470 = fma(temp_141, temp_466, temp_469);
                // 0x000D98: 0x5C68100001173636 Fmul
                temp_471 = temp_463 * temp_468;
                // 0x000DA8: 0x5C5C30000FF73411 Fadd
                temp_472 = temp_456 + -0.0;
                temp_473 = clamp(temp_472, 0.0, 1.0);
                // 0x000DB0: 0x51A00A0400273737 Ffma
                temp_474 = fma(temp_466, temp_470, fp_c1.data[0].z);
                // 0x000DB8: 0x1E23FB3333371515 Fmul32i
                temp_475 = temp_467 * 1.39999998;
                // 0x000DC8: 0x5080000000473737 Mufu
                temp_476 = 1.0 / temp_474;
                // 0x000DD0: 0x5C90008003670033 Rro
                // 0x000DD8: 0x59A1088001172D14 Ffma
                temp_477 = 0.0 - temp_473;
                temp_478 = fma(temp_147, temp_477, temp_473);
                // 0x000DE8: 0x5080000000273333 Mufu
                temp_479 = exp2(temp_471);
                // 0x000DF0: 0x5C68100001571515 Fmul
                temp_480 = temp_475 * temp_475;
                // 0x000DF8: 0x5C58100001472D14 Fadd
                temp_481 = temp_147 + temp_478;
                // 0x000E08: 0x5080000000471414 Mufu
                temp_482 = 1.0 / temp_481;
                // 0x000E10: 0x59A10A8001573415 Ffma
                temp_483 = 0.0 - temp_480;
                temp_484 = fma(temp_456, temp_483, temp_480);
                // 0x000E18: 0x5C68100003772E37 Fmul
                temp_485 = temp_131 * temp_476;
                // 0x000E28: 0x5C5C100001573415 Fadd
                temp_486 = temp_456 + temp_484;
                temp_487 = clamp(temp_486, 0.0, 1.0);
                // 0x000E30: 0x5C68100003773737 Fmul
                temp_488 = temp_485 * temp_485;
                // 0x000E38: 0x59A1198003370B34 Ffma
                temp_489 = 0.0 - temp_479;
                temp_490 = fma(temp_225, temp_489, temp_479);
                // 0x000E48: 0x5C68100000C7100C Fmul
                temp_491 = temp_401 * temp_451;
                // 0x000E50: 0x5C68100000D7100D Fmul
                temp_492 = temp_401 * temp_455;
                // 0x000E58: 0x5C68100001472B14 Fmul
                temp_493 = temp_184 * temp_482;
                // 0x000E68: 0x5C58100003470B34 Fadd
                temp_494 = temp_225 + temp_490;
                // 0x000E70: 0x5C68100003171031 Fmul
                temp_495 = temp_401 * temp_461;
                // 0x000E78: 0x59A1198003370A10 Ffma
                temp_496 = 0.0 - temp_479;
                temp_497 = fma(temp_224, temp_496, temp_479);
                // 0x000E88: 0x59A1198003370F33 Ffma
                temp_498 = 0.0 - temp_479;
                temp_499 = fma(temp_226, temp_498, temp_479);
                // 0x000E90: 0x5C68100001473714 Fmul
                temp_500 = temp_488 * temp_493;
                // 0x000E98: 0x5C68100003470D34 Fmul
                temp_501 = temp_492 * temp_494;
                // 0x000EA8: 0x5C68100001570D0D Fmul
                temp_502 = temp_492 * temp_487;
                // 0x000EB0: 0x5C58100001070A10 Fadd
                temp_503 = temp_224 + temp_497;
                // 0x000EB8: 0x5C58100003370F33 Fadd
                temp_504 = temp_226 + temp_499;
                // 0x000EC8: 0x5C68100001471114 Fmul
                temp_505 = temp_473 * temp_500;
                // 0x000ED0: 0x49A00C8400570D19 Ffma
                temp_506 = fma(temp_502, fp_c1.data[1].y, temp_285);
                // 0x000ED8: 0x5C68100001070C10 Fmul
                temp_507 = temp_491 * temp_503;
                // 0x000EE8: 0x5C68100003373133 Fmul
                temp_508 = temp_495 * temp_504;
                // 0x000EF0: 0x5C68100001570C0C Fmul
                temp_509 = temp_491 * temp_487;
                // 0x000EF8: 0x5C68100001473434 Fmul
                temp_510 = temp_501 * temp_505;
                // 0x000F08: 0x5C68100001573115 Fmul
                temp_511 = temp_495 * temp_487;
                // 0x000F10: 0x5C68100001471011 Fmul
                temp_512 = temp_507 * temp_505;
                // 0x000F18: 0x5C68100001473314 Fmul
                temp_513 = temp_508 * temp_505;
                // 0x000F28: 0x49A0138400570C27 Ffma
                temp_514 = fma(temp_509, fp_c1.data[1].y, temp_286);
                // 0x000F30: 0x49A00D840047341B Ffma
                temp_515 = fma(temp_510, fp_c1.data[1].x, temp_287);
                // 0x000F38: 0x49A00D040057151A Ffma
                temp_516 = fma(temp_511, fp_c1.data[1].y, temp_288);
                // 0x000F48: 0x49A00C0400471118 Ffma
                temp_517 = fma(temp_512, fp_c1.data[1].x, temp_289);
                // 0x000F50: 0x49A0098400471413 Ffma
                temp_518 = fma(temp_513, fp_c1.data[1].x, temp_290);
                // 0x000F58: 0xF0F800000007000F Sync
                temp_404 = temp_506;
                temp_405 = temp_514;
                temp_406 = temp_515;
                temp_407 = temp_516;
                temp_408 = temp_517;
                temp_409 = temp_518;
            }
            // 0x000F68: 0xE2400FFFA489000F Bra
            temp_285 = temp_404;
            temp_286 = temp_405;
            temp_287 = temp_406;
            temp_288 = temp_407;
            temp_289 = temp_408;
            temp_290 = temp_409;
            temp_291 = temp_407;
            temp_292 = temp_406;
            temp_293 = temp_409;
            temp_294 = temp_408;
            temp_295 = temp_405;
            temp_296 = temp_404;
        }
        while (!temp_298);
        // 0x000F70: 0xF0F800000007000F Sync
    }
    // 0x000F78: 0x5C62578000170E0C Fmnmx
    temp_519 = abs(temp_126);
    temp_520 = abs(temp_127);
    temp_521 = max(temp_519, temp_520);
    // 0x000F88: 0xE003FF87CFF7FF28 Ipa
    // 0x000F90: 0x5C62578001672F0D Fmnmx
    temp_522 = abs(temp_177);
    temp_523 = abs(temp_273);
    temp_524 = max(temp_522, temp_523);
    // 0x000F98: 0xEF4410000047FF33 Ldl
    temp_525 = uintBitsToFloat(local_memory[1]);
    // 0x000FA8: 0x5C60578000C7120C Fmnmx
    temp_526 = abs(temp_129);
    temp_527 = max(temp_526, temp_521);
    // 0x000FB0: 0xEF4410000007FF31 Ldl
    temp_528 = uintBitsToFloat(local_memory[0]);
    // 0x000FB8: 0x38681040E007022A Fmul
    temp_529 = temp_125 * 7.0;
    // 0x000FC8: 0x5080000000470C0C Mufu
    temp_530 = 1.0 / temp_527;
    // 0x000FD0: 0x5C60578000D7170D Fmnmx
    temp_531 = abs(temp_281);
    temp_532 = max(temp_531, temp_524);
    // 0x000FD8: 0x010000000017F014 Mov32i
    // 0x000FE8: 0x5080000000470D0D Mufu
    temp_533 = 1.0 / temp_532;
    // 0x000FF0: 0x3868104080070221 Fmul
    temp_534 = temp_125 * 4.0;
    // 0x000FF8: 0x4C98079C0207002B Mov
    // 0x001008: 0x5C69100000C71212 Fmul
    temp_535 = 0.0 - temp_530;
    temp_536 = temp_129 * temp_535;
    // 0x001010: 0x5C68100000C70E10 Fmul
    temp_537 = temp_126 * temp_530;
    // 0x001018: 0x5080000000472828 Mufu
    // 0x001028: 0x5C68100000C70111 Fmul
    temp_538 = temp_127 * temp_530;
    // 0x001030: 0x5C68100000D72F15 Fmul
    temp_539 = temp_177 * temp_533;
    // 0x001038: 0x5C68100000D71616 Fmul
    temp_540 = temp_273 * temp_533;
    // 0x001048: 0x5C69100000D71717 Fmul
    temp_541 = 0.0 - temp_533;
    temp_542 = temp_281 * temp_541;
    // 0x001050: 0xC0BA0163EFF7100C Tex
    temp_543 = textureLod(fp_t_tcb_16, vec3(temp_537, temp_538, temp_536), 0.0).xyz;
    temp_544 = temp_543.x;
    temp_545 = temp_543.y;
    temp_546 = temp_543.z;
    // 0x001058: 0x5C98078001270020 Mov
    // 0x001068: 0xC1BA0143F2A71414 Tex
    temp_547 = textureLod(fp_t_tcb_14, vec4(temp_539, temp_540, temp_542, float(1)), temp_529).xyz;
    temp_548 = temp_547.x;
    temp_549 = temp_547.y;
    temp_550 = temp_547.z;
    // 0x001070: 0xD9A2018202071010 Texs
    temp_551 = textureLod(fp_t_tcb_18, vec3(temp_537, temp_538, temp_536), temp_534).xyz;
    temp_552 = temp_551.x;
    temp_553 = temp_551.y;
    temp_554 = temp_551.z;
    // 0x001078: 0xE043FF910287FF2C Ipa
    temp_555 = in_attr9.x;
    // 0x001088: 0xE043FF914287FF2D Ipa
    temp_556 = in_attr9.y;
    // 0x001090: 0xE043FF918287FF2E Ipa
    temp_557 = in_attr9.z;
    // 0x001098: 0xDEBA0000C2B72C2C TexB
    temp_558 = texture(fp_t_cb7_20, vec3(temp_555, temp_556, temp_557)).x;
    // 0x0010A8: 0x3859103F80070202 Fadd
    temp_559 = 0.0 - temp_125;
    temp_560 = temp_559 + 1.0;
    // 0x0010B0: 0x3859103F80070329 Fadd
    temp_561 = 0.0 - temp_153;
    temp_562 = temp_561 + 1.0;
    // 0x0010B8: 0x010410676C97F030 Mov32i
    // 0x0010C8: 0x1E23E468DB97032F Fmul32i
    temp_563 = temp_153 * 0.193900004;
    // 0x0010D0: 0x49A019180A171A32 Ffma
    temp_564 = fma(temp_291, fp_c6.data[40].y, temp_268);
    // 0x0010D8: 0x49A012180A171B24 Ffma
    temp_565 = fma(temp_292, fp_c6.data[40].y, temp_282);
    // 0x0010E8: 0x5C68100000270202 Fmul
    temp_566 = temp_560 * temp_560;
    // 0x0010F0: 0x4C68101809072929 Fmul
    temp_567 = temp_562 * fp_c6.data[36].x;
    // 0x0010F8: 0x49A0180400A70312 Ffma
    temp_568 = fma(temp_153, fp_c1.data[2].z, 8.40400028);
    // 0x001108: 0x5080400000372929 Mufu
    temp_569 = abs(temp_567);
    temp_570 = log2(temp_569);
    // 0x001110: 0x0103F0000007F017 Mov32i
    // 0x001118: 0x0103E2CD9E87F01B Mov32i
    // 0x001128: 0x5C68100000270202 Fmul
    temp_571 = temp_566 * temp_566;
    // 0x001130: 0x49A013180A171326 Ffma
    temp_572 = fma(temp_293, fp_c6.data[40].y, temp_284);
    // 0x001138: 0x49A012980A171825 Ffma
    temp_573 = fma(temp_294, fp_c6.data[40].y, temp_283);
    // 0x001148: 0x51A0090400B7031A Ffma
    temp_574 = fma(temp_153, temp_568, fp_c1.data[2].w);
    // 0x001150: 0xE04BFF904287FF12 Ipa
    temp_575 = in_attr8.y;
    temp_576 = clamp(temp_575, 0.0, 1.0);
    // 0x001158: 0x32A00BBF00070113 Ffma
    temp_577 = fma(temp_127, 0.5, 0.5);
    // 0x001168: 0x0104066978D7F017 Mov32i
    // 0x001170: 0x49A017840067022F Ffma
    temp_578 = fma(temp_571, fp_c1.data[1].z, temp_563);
    // 0x001178: 0x49A20D8400D70201 Ffma
    temp_579 = fma(temp_571, fp_c1.data[3].y, -0.168799996);
    // 0x001188: 0x4C9807980087002A Mov
    // 0x001190: 0x51A00D0400C7031A Ffma
    temp_580 = fma(temp_153, temp_574, fp_c1.data[3].x);
    // 0x001198: 0x4C68101809172929 Fmul
    temp_581 = temp_570 * fp_c6.data[36].y;
    // 0x0011A8: 0x088BF05D63972F18 Fadd32i
    temp_582 = temp_578 + -0.522800028;
    // 0x0011B0: 0x5C6810000017021B Fmul
    temp_583 = temp_571 * temp_579;
    // 0x0011B8: 0x5C90008002970029 Rro
    // 0x0011C8: 0x5C68100001870318 Fmul
    temp_584 = temp_153 * temp_582;
    // 0x0011D0: 0x5084000000272901 Mufu
    temp_585 = exp2(temp_581);
    temp_586 = clamp(temp_585, 0.0, 1.0);
    // 0x0011D8: 0x49A20B8400770203 Ffma
    temp_587 = fma(temp_571, fp_c1.data[1].w, -3.60299993);
    // 0x0011E8: 0x4C9807980B47002D Mov
    // 0x0011F0: 0x4C98079809670021 Mov
    // 0x0011F8: 0x4C98079800A7002B Mov
    // 0x001208: 0x51A0018400870217 Ffma
    temp_588 = fma(temp_571, temp_587, fp_c1.data[2].x);
    // 0x001210: 0xF0F0000034570000 Depbar
    // 0x001218: 0x51A216980B471E1E Ffma
    temp_589 = 0.0 - fp_c6.data[45].x;
    temp_590 = fma(temp_23, fp_c6.data[45].x, temp_589);
    // 0x001228: 0x51A216980B471F1F Ffma
    temp_591 = 0.0 - fp_c6.data[45].x;
    temp_592 = fma(temp_24, fp_c6.data[45].x, temp_591);
    // 0x001230: 0x51A216980B470000 Ffma
    temp_593 = 0.0 - fp_c6.data[45].x;
    temp_594 = fma(temp_25, fp_c6.data[45].x, temp_593);
    // 0x001238: 0x4C58101408172103 Fadd
    temp_595 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001248: 0x5C60138001B71A2D Fmnmx
    temp_596 = min(temp_580, temp_583);
    // 0x001250: 0x010404000007F029 Mov32i
    // 0x001258: 0x4C9807980097001A Mov
    // 0x001268: 0x59A00C000177021B Ffma
    temp_597 = fma(temp_571, temp_588, temp_584);
    // 0x001270: 0x4C59101800472A02 Fadd
    temp_598 = 0.0 - fp_c6.data[2].x;
    temp_599 = temp_598 + fp_c6.data[1].x;
    // 0x001278: 0x5C68100000370117 Fmul
    temp_600 = temp_586 * temp_595;
    // 0x001288: 0x386C104248070B21 Fmul
    temp_601 = temp_225 * 50.0;
    temp_602 = clamp(temp_601, 0.0, 1.0);
    // 0x001290: 0x33A014C000071203 Ffma
    temp_603 = fma(temp_576, -2.0, 3.0);
    // 0x001298: 0x4C59101800571A18 Fadd
    temp_604 = 0.0 - fp_c6.data[2].y;
    temp_605 = temp_604 + fp_c6.data[1].y;
    // 0x0012A8: 0x5C68100001271212 Fmul
    temp_606 = temp_576 * temp_576;
    // 0x0012B0: 0x51A0011800871301 Ffma
    temp_607 = fma(temp_577, temp_599, fp_c6.data[2].x);
    // 0x0012B8: 0x4C59101800672B1A Fadd
    temp_608 = 0.0 - fp_c6.data[2].z;
    temp_609 = temp_608 + fp_c6.data[1].z;
    // 0x0012C8: 0x4C5C100400971B1B Fadd
    temp_610 = temp_597 + fp_c1.data[2].y;
    temp_611 = clamp(temp_610, 0.0, 1.0);
    // 0x0012D0: 0x51A00C1800971302 Ffma
    temp_612 = fma(temp_577, temp_605, fp_c6.data[2].y);
    // 0x0012D8: 0x5C68100001270303 Fmul
    temp_613 = temp_603 * temp_606;
    // 0x0012E8: 0x5C5C30000FF72D18 Fadd
    temp_614 = temp_596 + -0.0;
    temp_615 = clamp(temp_614, 0.0, 1.0);
    // 0x0012F0: 0x4C68101808C71712 Fmul
    temp_616 = temp_600 * fp_c6.data[35].x;
    // 0x0012F8: 0x51A00D1800A71313 Ffma
    temp_617 = fma(temp_577, temp_609, fp_c6.data[2].z);
    // 0x001308: 0x4C68101808D7171A Fmul
    temp_618 = temp_600 * fp_c6.data[35].y;
    // 0x001310: 0x4C68101808E71717 Fmul
    temp_619 = temp_600 * fp_c6.data[35].z;
    // 0x001318: 0x4C68101803770303 Fmul
    temp_620 = temp_613 * fp_c6.data[13].w;
    // 0x001328: 0x5C68100001872121 Fmul
    temp_621 = temp_602 * temp_615;
    // 0x001330: 0x49A0129408271225 Ffma
    temp_622 = fma(temp_616, fp_c5.data[32].z, temp_573);
    // 0x001338: 0x5C58300001871B18 Fadd
    temp_623 = 0.0 - temp_615;
    temp_624 = temp_611 + temp_623;
    // 0x001348: 0x49A1091408271212 Ffma
    temp_625 = 0.0 - fp_c5.data[32].z;
    temp_626 = fma(temp_616, temp_625, temp_616);
    // 0x001350: 0x49A0121408271A24 Ffma
    temp_627 = fma(temp_618, fp_c5.data[32].z, temp_565);
    // 0x001358: 0x49A10D1408271A1A Ffma
    temp_628 = 0.0 - fp_c5.data[32].z;
    temp_629 = fma(temp_618, temp_628, temp_618);
    // 0x001368: 0x49A0131408271726 Ffma
    temp_630 = fma(temp_619, fp_c5.data[32].z, temp_572);
    // 0x001370: 0x49A10B9408271717 Ffma
    temp_631 = 0.0 - fp_c5.data[32].z;
    temp_632 = fma(temp_619, temp_631, temp_619);
    // 0x001378: 0x59A0108001870A1B Ffma
    temp_633 = fma(temp_224, temp_624, temp_621);
    // 0x001388: 0xE043FF900287FF0A Ipa
    temp_634 = in_attr8.x;
    // 0x001390: 0x59A0108001870B0B Ffma
    temp_635 = fma(temp_225, temp_624, temp_621);
    // 0x001398: 0xE043FF8C8287FF28 Ipa
    temp_636 = in_attr4.z;
    // 0x0013A8: 0x5C58100001773217 Fadd
    temp_637 = temp_564 + temp_632;
    // 0x0013B0: 0x59A0108001870F0F Ffma
    temp_638 = fma(temp_226, temp_624, temp_621);
    // 0x0013B8: 0xF0F0000034370000 Depbar
    // 0x0013C8: 0x49A019980A172727 Ffma
    temp_639 = fma(temp_295, fp_c6.data[40].y, temp_525);
    // 0x0013D0: 0x49A018980A171919 Ffma
    temp_640 = fma(temp_296, fp_c6.data[40].y, temp_528);
    // 0x0013D8: 0x5C58100001272712 Fadd
    temp_641 = temp_639 + temp_626;
    // 0x0013E8: 0x5C58100001A71919 Fadd
    temp_642 = temp_640 + temp_629;
    // 0x0013F0: 0xF0F0000034170000 Depbar
    // 0x0013F8: 0x49A0060400570101 Ffma
    temp_643 = fma(temp_607, fp_c1.data[1].y, temp_544);
    // 0x001408: 0x49A0068400570202 Ffma
    temp_644 = fma(temp_612, fp_c1.data[1].y, temp_545);
    // 0x001410: 0x49A007040057130E Ffma
    temp_645 = fma(temp_617, fp_c1.data[1].y, temp_546);
    // 0x001418: 0x49A0081808571410 Ffma
    temp_646 = fma(temp_548, fp_c6.data[33].y, temp_552);
    // 0x001428: 0x49A0089808571511 Ffma
    temp_647 = fma(temp_549, fp_c6.data[33].y, temp_553);
    // 0x001430: 0x5C58100000171201 Fadd
    temp_648 = temp_641 + temp_643;
    // 0x001438: 0x5C58100000271902 Fadd
    temp_649 = temp_642 + temp_644;
    // 0x001448: 0x5C58100000E7170E Fadd
    temp_650 = temp_637 + temp_645;
    // 0x001450: 0x49A0101808571620 Ffma
    temp_651 = fma(temp_550, fp_c6.data[33].y, temp_554);
    // 0x001458: 0x59A0128001071B1B Ffma
    temp_652 = fma(temp_633, temp_646, temp_622);
    // 0x001468: 0x59A0120001170B0B Ffma
    temp_653 = fma(temp_635, temp_647, temp_627);
    // 0x001470: 0x59A1008000172301 Ffma
    temp_654 = 0.0 - temp_648;
    temp_655 = fma(temp_15, temp_654, temp_648);
    // 0x001478: 0x59A101000027230C Ffma
    temp_656 = 0.0 - temp_649;
    temp_657 = fma(temp_15, temp_656, temp_649);
    // 0x001488: 0x59A1070000E7230E Ffma
    temp_658 = 0.0 - temp_650;
    temp_659 = fma(temp_15, temp_658, temp_650);
    // 0x001490: 0x59A0130002070F0F Ffma
    temp_660 = fma(temp_638, temp_651, temp_630);
    // 0x001498: 0x4C98079802970002 Mov
    // 0x0014A8: 0x59A00D8000170401 Ffma
    temp_661 = fma(temp_195, temp_655, temp_652);
    // 0x0014B0: 0x4C98079802870004 Mov
    // 0x0014B8: 0x59A0058000C7060B Ffma
    temp_662 = fma(temp_210, temp_657, temp_653);
    // 0x0014C8: 0x59A0078000E7050F Ffma
    temp_663 = fma(temp_211, temp_659, temp_660);
    // 0x0014D0: 0x51A0011802971F1F Ffma
    temp_664 = fma(temp_592, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0014D8: 0x4C98079802A70002 Mov
    // 0x0014E8: 0x5C68100000171C1C Fmul
    temp_665 = temp_275 * temp_661;
    // 0x0014F0: 0x51A0021802871E1E Ffma
    temp_666 = fma(temp_590, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0014F8: 0x5C68100000B71D1D Fmul
    temp_667 = temp_277 * temp_662;
    // 0x001508: 0x5C68100000F72222 Fmul
    temp_668 = temp_279 * temp_663;
    // 0x001510: 0x49A201980357030B Ffma
    temp_669 = 0.0 - temp_620;
    temp_670 = fma(temp_620, fp_c6.data[13].y, temp_669);
    // 0x001518: 0x51A0011802A70000 Ffma
    temp_671 = fma(temp_594, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001528: 0x49A00E1406C70707 Ffma
    temp_672 = fma(temp_214, fp_c5.data[27].x, temp_665);
    // 0x001530: 0x49A00E9406C70808 Ffma
    temp_673 = fma(temp_215, fp_c5.data[27].x, temp_667);
    // 0x001538: 0x49A0111406C70909 Ffma
    temp_674 = fma(temp_216, fp_c5.data[27].x, temp_668);
    // 0x001548: 0x5C58300001E70701 Fadd
    temp_675 = 0.0 - temp_666;
    temp_676 = temp_672 + temp_675;
    // 0x001550: 0x5C58300001F70802 Fadd
    temp_677 = 0.0 - temp_664;
    temp_678 = temp_673 + temp_677;
    // 0x001558: 0x49A505180BC72C0A Ffma
    temp_679 = 0.0 - fp_c6.data[47].x;
    temp_680 = fma(temp_558, temp_679, temp_634);
    temp_681 = clamp(temp_680, 0.0, 1.0);
    // 0x001568: 0x49A00F180BF70104 Ffma
    temp_682 = fma(temp_676, fp_c6.data[47].w, temp_666);
    // 0x001570: 0x5080000000370A0A Mufu
    temp_683 = log2(temp_681);
    // 0x001578: 0x5C58300000070901 Fadd
    temp_684 = 0.0 - temp_671;
    temp_685 = temp_674 + temp_684;
    // 0x001588: 0x49A00F980BF70202 Ffma
    temp_686 = fma(temp_678, fp_c6.data[47].w, temp_664);
    // 0x001590: 0x5C60178000471E04 Fmnmx
    temp_687 = max(temp_666, temp_682);
    // 0x001598: 0x49A000180BF70101 Ffma
    temp_688 = fma(temp_685, fp_c6.data[47].w, temp_671);
    // 0x0015A8: 0x5C60178000271F02 Fmnmx
    temp_689 = max(temp_664, temp_686);
    // 0x0015B0: 0x4C68101803170A05 Fmul
    temp_690 = temp_683 * fp_c6.data[12].y;
    // 0x0015B8: 0x5C60178000170001 Fmnmx
    temp_691 = max(temp_671, temp_688);
    // 0x0015C8: 0x59A0010000B7020B Ffma
    temp_692 = fma(temp_689, temp_670, temp_689);
    // 0x0015D0: 0x5C90008000570006 Rro
    // 0x0015D8: 0x49A2019803470305 Ffma
    temp_693 = 0.0 - temp_620;
    temp_694 = fma(temp_620, fp_c6.data[13].x, temp_693);
    // 0x0015E8: 0x5080000000270606 Mufu
    temp_695 = exp2(temp_690);
    // 0x0015F0: 0x49A2019803670303 Ffma
    temp_696 = 0.0 - temp_620;
    temp_697 = fma(temp_620, fp_c6.data[13].z, temp_696);
    // 0x0015F8: 0x59A0020000570400 Ffma
    temp_698 = fma(temp_687, temp_694, temp_687);
    // 0x001608: 0x59A0008000370102 Ffma
    temp_699 = fma(temp_691, temp_697, temp_691);
    // 0x001610: 0x5C59100000B70801 Fadd
    temp_700 = 0.0 - temp_673;
    temp_701 = temp_700 + temp_692;
    // 0x001618: 0x4C58100C03872804 Fadd
    temp_702 = temp_636 + fp_c3.data[14].x;
    // 0x001628: 0x0103EC000007F005 Mov32i
    // 0x001630: 0x5C59100000070700 Fadd
    temp_703 = 0.0 - temp_672;
    temp_704 = temp_703 + temp_698;
    // 0x001638: 0x4C68101802B70603 Fmul
    temp_705 = temp_695 * fp_c6.data[10].w;
    // 0x001648: 0x5C59100000270902 Fadd
    temp_706 = 0.0 - temp_674;
    temp_707 = temp_706 + temp_699;
    // 0x001650: 0x5C9807800FF70006 Mov
    // 0x001658: 0x49A37F8C03C70404 Ffma
    temp_708 = 0.0 - fp_c3.data[15].x;
    temp_709 = fma(temp_702, temp_708, -0.0);
    // 0x001668: 0x59A0038000370000 Ffma
    temp_710 = fma(temp_704, temp_705, temp_672);
    // 0x001670: 0x59A0040000370101 Ffma
    temp_711 = fma(temp_701, temp_705, temp_673);
    // 0x001678: 0x59A0048000370202 Ffma
    temp_712 = fma(temp_707, temp_705, temp_674);
    // 0x001688: 0x0103F8000007F003 Mov32i
    // 0x001690: 0x0103F8000007F007 Mov32i
    // 0x001698: 0xE30000000007000F Exit
    out_attr0.x = temp_710;
    out_attr0.y = temp_711;
    out_attr0.z = temp_712;
    out_attr0.w = 1.0;
    out_attr1.x = temp_709;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
