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
layout (binding = 0) uniform sampler2D fp_t_tcb_24;
layout (binding = 1) uniform sampler2D fp_t_tcb_26;
layout (binding = 2) uniform sampler2D fp_t_tcb_36;
layout (binding = 3) uniform sampler2D fp_t_tcb_20;
layout (binding = 4) uniform sampler2DShadow fp_t_tcb_1A;
layout (binding = 5) uniform sampler2D fp_t_tcb_1E;
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
    precise vec4 temp_10;
    precise float temp_11;
    precise float temp_12;
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
    bool temp_26;
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
    uint temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    int temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    int temp_117;
    uint temp_118;
    uint temp_119;
    int temp_120;
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
    bool temp_167;
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
    precise float temp_424;
    precise float temp_425;
    precise float temp_426;
    precise float temp_427;
    precise float temp_428;
    int temp_429;
    uint temp_430;
    uint temp_431;
    int temp_432;
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
    uint temp_458;
    uint temp_459;
    int temp_460;
    precise float temp_461;
    int temp_462;
    uint temp_463;
    int temp_464;
    precise float temp_465;
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
    precise vec3 temp_557;
    precise float temp_558;
    precise float temp_559;
    precise float temp_560;
    precise float temp_561;
    precise vec3 temp_562;
    precise float temp_563;
    precise float temp_564;
    precise float temp_565;
    precise vec3 temp_566;
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
    precise float temp_723;
    precise float temp_724;
    precise float temp_725;
    // 0x000008: 0xE003FF87CFF7FF10 Ipa
    // 0x000010: 0xE003FF870FF7FF06 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000018: 0xE003FF874FF7FF07 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000028: 0x5080000000471010 Mufu
    // 0x000030: 0x4C68100C04A70606 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000038: 0x4C68100C04B70707 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000048: 0xE043FF8E0107FF01 Ipa
    temp_8 = in_attr6.x;
    // 0x000050: 0xE043FF8E4107FF08 Ipa
    temp_9 = in_attr6.y;
    // 0x000058: 0xD830024160870102 Texs
    temp_10 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyzw;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    temp_13 = temp_10.z;
    temp_14 = temp_10.w;
    // 0x000068: 0xD830026FF0870104 Texs
    temp_15 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_16 = temp_15.x;
    temp_17 = temp_15.y;
    // 0x000070: 0xD8240360A0870120 Texs
    temp_18 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_19 = temp_18.x;
    temp_20 = temp_18.y;
    temp_21 = temp_18.z;
    // 0x000078: 0xD82202000077061E Texs
    temp_22 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_23 = temp_22.x;
    temp_24 = temp_22.y;
    temp_25 = temp_22.z;
    // 0x000088: 0xF0F0000034370000 Depbar
    // 0x000090: 0x4BB1839406071707 Fsetp
    temp_26 = temp_14 < fp_c5.data[24].x;
    // 0x000098: 0xE24000000708000F Bra
    if (temp_26)
    {
        // 0x0000A8: 0x5C9807800FF70000 Mov
        // 0x0000B0: 0xE33000000007000F Kil
        discard;
    }
    // 0x000110: 0x0103F8000007F014 Mov32i
    // 0x000118: 0xE003FF91CFF7FF01 Ipa
    temp_27 = in_attr9.w;
    temp_28 = gl_FragCoord.w;
    temp_29 = temp_27 * temp_28;
    // 0x000128: 0x5080000000470101 Mufu
    temp_30 = 1.0 / temp_29;
    // 0x000130: 0xE043FF918017FF0E Ipa
    temp_31 = in_attr9.z;
    temp_32 = gl_FragCoord.w;
    temp_33 = temp_31 * temp_32;
    temp_34 = temp_33 * temp_30;
    // 0x000138: 0xE043FF910017FF1C Ipa
    temp_35 = in_attr9.x;
    temp_36 = gl_FragCoord.w;
    temp_37 = temp_35 * temp_36;
    temp_38 = temp_37 * temp_30;
    // 0x000148: 0xE043FF914017FF1D Ipa
    temp_39 = in_attr9.y;
    temp_40 = gl_FragCoord.w;
    temp_41 = temp_39 * temp_40;
    temp_42 = temp_41 * temp_30;
    // 0x000150: 0xD88001AFF0E71C1D Texs
    temp_43 = texture(fp_t_tcb_1A, vec3(temp_38, temp_42, temp_34));
    // 0x000158: 0xD86201EFF147060B Texs
    temp_44 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x000168: 0xE043FF8A0107FF09 Ipa
    temp_45 = in_attr2.x;
    // 0x000170: 0xE043FF8A4107FF0C Ipa
    temp_46 = in_attr2.y;
    // 0x000178: 0xE043FF890107FF0F Ipa
    temp_47 = in_attr1.x;
    // 0x000188: 0xE043FF8A8107FF0D Ipa
    temp_48 = in_attr2.z;
    // 0x000190: 0xE043FF894107FF11 Ipa
    temp_49 = in_attr1.y;
    // 0x000198: 0xE043FF898107FF12 Ipa
    temp_50 = in_attr1.z;
    // 0x0001A8: 0xE043FF880107FF15 Ipa
    temp_51 = in_attr0.x;
    // 0x0001B0: 0xE043FF884107FF08 Ipa
    temp_52 = in_attr0.y;
    // 0x0001B8: 0xE043FF8B0107FF26 Ipa
    temp_53 = in_attr3.x;
    // 0x0001C8: 0xE043FF8B4107FF25 Ipa
    temp_54 = in_attr3.y;
    // 0x0001D0: 0xF0F0000034370000 Depbar
    // 0x0001D8: 0x4C6810180A072020 Fmul
    temp_55 = temp_19 * fp_c6.data[40].x;
    // 0x0001E8: 0xE2900000E0000000 Ssy
    // 0x0001F0: 0x0103F0000007F02A Mov32i
    // 0x0001F8: 0x4C68101402C70202 Fmul
    temp_56 = temp_11 * fp_c5.data[11].x;
    // 0x000208: 0x4C68101402D70303 Fmul
    temp_57 = temp_12 * fp_c5.data[11].y;
    // 0x000210: 0x4C6C101406870A0A Fmul
    temp_58 = temp_21 * fp_c5.data[26].x;
    temp_59 = clamp(temp_58, 0.0, 1.0);
    // 0x000218: 0x5C68100000970901 Fmul
    temp_60 = temp_45 * temp_45;
    // 0x000228: 0x5C68100000F70F13 Fmul
    temp_61 = temp_47 * temp_47;
    // 0x000230: 0x59A0008000C70C0E Ffma
    temp_62 = fma(temp_46, temp_46, temp_60);
    // 0x000238: 0xE043FF888107FF01 Ipa
    temp_63 = in_attr0.z;
    // 0x000248: 0x5C68100001571519 Fmul
    temp_64 = temp_51 * temp_51;
    // 0x000250: 0x59A0098001171113 Ffma
    temp_65 = fma(temp_49, temp_49, temp_61);
    // 0x000258: 0x59A0070000D70D0E Ffma
    temp_66 = fma(temp_48, temp_48, temp_62);
    // 0x000268: 0x59A00C800087081B Ffma
    temp_67 = fma(temp_52, temp_52, temp_64);
    // 0x000270: 0x5080000000570E0E Mufu
    temp_68 = inversesqrt(temp_66);
    // 0x000278: 0x59A0098001271213 Ffma
    temp_69 = fma(temp_50, temp_50, temp_65);
    // 0x000288: 0x508000000057131C Mufu
    temp_70 = inversesqrt(temp_69);
    // 0x000290: 0x3868104180070613 Fmul
    temp_71 = temp_6 * 16.0;
    // 0x000298: 0x5C68100000E70914 Fmul
    temp_72 = temp_45 * temp_68;
    // 0x0002A8: 0x5CA8148001370A13 F2f
    temp_73 = floor(temp_71);
    // 0x0002B0: 0x5C68100000570509 Fmul
    temp_74 = temp_17 * temp_17;
    // 0x0002B8: 0x5C68100000E70C0C Fmul
    temp_75 = temp_46 * temp_68;
    // 0x0002C8: 0x5C68100001C7111A Fmul
    temp_76 = temp_49 * temp_70;
    // 0x0002D0: 0xE043FF8B8107FF11 Ipa
    temp_77 = in_attr3.z;
    // 0x0002D8: 0x5C68100000E70D18 Fmul
    temp_78 = temp_48 * temp_68;
    // 0x0002E8: 0x5C68100001C70F0F Fmul
    temp_79 = temp_47 * temp_70;
    // 0x0002F0: 0x5C68100001C71212 Fmul
    temp_80 = temp_50 * temp_70;
    // 0x0002F8: 0x59A0048000470409 Ffma
    temp_81 = fma(temp_16, temp_16, temp_74);
    // 0x000308: 0x5C68100000570C0D Fmul
    temp_82 = temp_75 * temp_17;
    // 0x000310: 0x59A00D800017011B Ffma
    temp_83 = fma(temp_63, temp_63, temp_67);
    // 0x000318: 0x5080000000571B1B Mufu
    temp_84 = inversesqrt(temp_83);
    // 0x000328: 0x385D103F8007090E Fadd
    temp_85 = 0.0 - temp_81;
    temp_86 = temp_85 + 1.0;
    temp_87 = clamp(temp_86, 0.0, 1.0);
    // 0x000330: 0x5C68100000571409 Fmul
    temp_88 = temp_72 * temp_17;
    // 0x000338: 0x5080000000870E0E Mufu
    temp_89 = sqrt(temp_87);
    // 0x000348: 0x5C68100000571805 Fmul
    temp_90 = temp_78 * temp_17;
    // 0x000350: 0x59A0068001A7040D Ffma
    temp_91 = fma(temp_16, temp_76, temp_82);
    // 0x000358: 0x3868104110070714 Fmul
    temp_92 = temp_7 * 9.0;
    // 0x000368: 0x5CA8148001470A14 F2f
    temp_93 = floor(temp_92);
    // 0x000370: 0x59A0048000F70409 Ffma
    temp_94 = fma(temp_16, temp_79, temp_88);
    // 0x000378: 0x59A0028001270405 Ffma
    temp_95 = fma(temp_16, temp_80, temp_90);
    // 0x000388: 0x5C68100001B7150C Fmul
    temp_96 = temp_51 * temp_84;
    // 0x000390: 0x5C68100001B70808 Fmul
    temp_97 = temp_52 * temp_84;
    // 0x000398: 0x5C68100001B7011B Fmul
    temp_98 = temp_63 * temp_84;
    // 0x0003A8: 0x59A0048000E70C09 Ffma
    temp_99 = fma(temp_96, temp_89, temp_94);
    // 0x0003B0: 0x5C6810000267260C Fmul
    temp_100 = temp_53 * temp_53;
    // 0x0003B8: 0x59A0068000E70808 Ffma
    temp_101 = fma(temp_97, temp_89, temp_91);
    // 0x0003C8: 0x59A0028000E71B05 Ffma
    temp_102 = fma(temp_98, temp_89, temp_95);
    // 0x0003D0: 0x32A009C180071413 Ffma
    temp_103 = fma(temp_93, 16.0, temp_73);
    // 0x0003D8: 0x5C68100000970901 Fmul
    temp_104 = temp_99 * temp_99;
    // 0x0003E8: 0x5CB0118001370A28 F2i
    temp_105 = trunc(temp_103);
    temp_106 = max(temp_105, 0.0);
    temp_107 = uint(temp_106);
    // 0x0003F0: 0x59A006000257250C Ffma
    temp_108 = fma(temp_54, temp_54, temp_100);
    // 0x0003F8: 0x59A0008000870804 Ffma
    temp_109 = fma(temp_101, temp_101, temp_104);
    // 0x000408: 0x59A006000117110C Ffma
    temp_110 = fma(temp_77, temp_77, temp_108);
    // 0x000410: 0x5080000000570C0C Mufu
    temp_111 = inversesqrt(temp_110);
    // 0x000418: 0x59A0020000570504 Ffma
    temp_112 = fma(temp_102, temp_102, temp_109);
    // 0x000428: 0x3848000000872831 Shl
    temp_113 = int(temp_107) << 8;
    // 0x000430: 0x508000000057040E Mufu
    temp_114 = inversesqrt(temp_112);
    // 0x000438: 0x5C69100000C72626 Fmul
    temp_115 = 0.0 - temp_111;
    temp_116 = temp_53 * temp_115;
    // 0x000448: 0xEF94008200473131 Ldc
    temp_117 = temp_113 + 0x2004;
    temp_118 = uint(temp_117) >> 2;
    temp_119 = temp_118 >> 2;
    temp_120 = int(temp_118) & 3;
    temp_121 = fp_c8.data[int(temp_119)][temp_120];
    // 0x000450: 0x5C69100000C72525 Fmul
    temp_122 = 0.0 - temp_111;
    temp_123 = temp_54 * temp_122;
    // 0x000458: 0x5C69100000C7111B Fmul
    temp_124 = 0.0 - temp_111;
    temp_125 = temp_77 * temp_124;
    // 0x000468: 0x5C68100000E7051C Fmul
    temp_126 = temp_102 * temp_114;
    // 0x000470: 0x4C58301805C72605 Fadd
    temp_127 = 0.0 - fp_c6.data[23].x;
    temp_128 = temp_116 + temp_127;
    // 0x000478: 0x5C68100000E70801 Fmul
    temp_129 = temp_101 * temp_114;
    // 0x000488: 0x4C58301805D72508 Fadd
    temp_130 = 0.0 - fp_c6.data[23].y;
    temp_131 = temp_123 + temp_130;
    // 0x000490: 0x5C68100000E7091A Fmul
    temp_132 = temp_99 * temp_114;
    // 0x000498: 0x4C58301805E71B09 Fadd
    temp_133 = 0.0 - fp_c6.data[23].z;
    temp_134 = temp_125 + temp_133;
    // 0x0004A8: 0x5C6810000057050D Fmul
    temp_135 = temp_128 * temp_128;
    // 0x0004B0: 0x59A0068000870804 Ffma
    temp_136 = fma(temp_131, temp_131, temp_135);
    // 0x0004B8: 0x59A002000097090C Ffma
    temp_137 = fma(temp_134, temp_134, temp_136);
    // 0x0004C8: 0x386013BF80072004 Fmnmx
    temp_138 = min(temp_55, 1.0);
    // 0x0004D0: 0x5080000000570C0E Mufu
    temp_139 = inversesqrt(temp_137);
    // 0x0004D8: 0x4C60178400170404 Fmnmx
    temp_140 = max(temp_138, fp_c1.data[0].y);
    // 0x0004E8: 0x4C69101805C71A0C Fmul
    temp_141 = 0.0 - fp_c6.data[23].x;
    temp_142 = temp_132 * temp_141;
    // 0x0004F0: 0x51A402040017042C Ffma
    temp_143 = fma(temp_140, temp_140, fp_c1.data[0].y);
    temp_144 = clamp(temp_143, 0.0, 1.0);
    // 0x0004F8: 0x5C68100000E7050D Fmul
    temp_145 = temp_128 * temp_139;
    // 0x000508: 0x5C68100000E7080F Fmul
    temp_146 = temp_131 * temp_139;
    // 0x000510: 0x5C68100002671A08 Fmul
    temp_147 = temp_132 * temp_116;
    // 0x000518: 0x5C68100000E70909 Fmul
    temp_148 = temp_134 * temp_139;
    // 0x000528: 0x32A0153F0007042A Ffma
    temp_149 = fma(temp_140, 0.5, 0.5);
    // 0x000530: 0x5C68100002C72C2B Fmul
    temp_150 = temp_144 * temp_144;
    // 0x000538: 0x5C68100000D71A12 Fmul
    temp_151 = temp_132 * temp_145;
    // 0x000548: 0x49A1061805D7010E Ffma
    temp_152 = 0.0 - fp_c6.data[23].y;
    temp_153 = fma(temp_129, temp_152, temp_142);
    // 0x000550: 0x59A0040002570105 Ffma
    temp_154 = fma(temp_129, temp_123, temp_147);
    // 0x000558: 0x5C68100000D72606 Fmul
    temp_155 = temp_116 * temp_145;
    // 0x000568: 0x5C68120002A72A2A Fmul
    temp_156 = temp_149 * 0.5;
    temp_157 = temp_156 * temp_149;
    // 0x000570: 0x4C69101805C70D0D Fmul
    temp_158 = 0.0 - fp_c6.data[23].x;
    temp_159 = temp_145 * temp_158;
    // 0x000578: 0x59A0090000F70112 Ffma
    temp_160 = fma(temp_129, temp_146, temp_151);
    // 0x000588: 0x49A5071805E71C08 Ffma
    temp_161 = 0.0 - fp_c6.data[23].z;
    temp_162 = fma(temp_126, temp_161, temp_153);
    temp_163 = clamp(temp_162, 0.0, 1.0);
    // 0x000590: 0x59A4028001B71C05 Ffma
    temp_164 = fma(temp_126, temp_125, temp_154);
    temp_165 = clamp(temp_164, 0.0, 1.0);
    // 0x000598: 0x59A0030000F72506 Ffma
    temp_166 = fma(temp_123, temp_146, temp_155);
    // 0x0005A8: 0x5B6603800FF73107 Isetp
    temp_167 = floatBitsToUint(temp_121) <= 0u;
    // 0x0005B0: 0x49A1069805D70F07 Ffma
    temp_168 = 0.0 - fp_c6.data[23].y;
    temp_169 = fma(temp_146, temp_168, temp_159);
    // 0x0005B8: 0x59A4090000971C12 Ffma
    temp_170 = fma(temp_126, temp_148, temp_160);
    temp_171 = clamp(temp_170, 0.0, 1.0);
    // 0x0005C8: 0x01040DF760C7F00F Mov32i
    // 0x0005D0: 0x59A1028002A70511 Ffma
    temp_172 = 0.0 - temp_157;
    temp_173 = fma(temp_165, temp_172, temp_165);
    // 0x0005D8: 0x4C68101801570813 Fmul
    temp_174 = temp_163 * fp_c6.data[5].y;
    // 0x0005E8: 0x4C68101801670814 Fmul
    temp_175 = temp_163 * fp_c6.data[5].z;
    // 0x0005F0: 0x5C68100000571A30 Fmul
    temp_176 = temp_132 * temp_165;
    // 0x0005F8: 0x59A2090002B7120C Ffma
    temp_177 = 0.0 - temp_171;
    temp_178 = fma(temp_171, temp_150, temp_177);
    // 0x000608: 0x5C58100001172A11 Fadd
    temp_179 = temp_157 + temp_173;
    // 0x000610: 0x5080000000471111 Mufu
    temp_180 = 1.0 / temp_179;
    // 0x000618: 0x32A2134000073030 Ffma
    temp_181 = 0.0 - temp_116;
    temp_182 = fma(temp_176, 2.0, temp_181);
    // 0x000628: 0x51A0060400271212 Ffma
    temp_183 = fma(temp_171, temp_178, fp_c1.data[0].z);
    // 0x000630: 0x59A1040000872A0C Ffma
    temp_184 = 0.0 - temp_163;
    temp_185 = fma(temp_157, temp_184, temp_163);
    // 0x000638: 0x5080000000471212 Mufu
    temp_186 = 1.0 / temp_183;
    // 0x000648: 0x5C58100000C72A0E Fadd
    temp_187 = temp_157 + temp_185;
    // 0x000650: 0x49A5039805E7090C Ffma
    temp_188 = 0.0 - fp_c6.data[23].z;
    temp_189 = fma(temp_148, temp_188, temp_169);
    temp_190 = clamp(temp_189, 0.0, 1.0);
    // 0x000658: 0x5080000000470E0E Mufu
    temp_191 = 1.0 / temp_187;
    // 0x000668: 0x59A4030000971B09 Ffma
    temp_192 = fma(temp_125, temp_148, temp_166);
    temp_193 = clamp(temp_192, 0.0, 1.0);
    // 0x000670: 0x3868103F00071129 Fmul
    temp_194 = temp_180 * 0.5;
    // 0x000678: 0x4C68101801470811 Fmul
    temp_195 = temp_163 * fp_c6.data[5].x;
    // 0x000688: 0x5C68100001272C0D Fmul
    temp_196 = temp_144 * temp_186;
    // 0x000690: 0x49A2078400070C06 Ffma
    temp_197 = fma(temp_190, fp_c1.data[0].x, -6.98316002);
    // 0x000698: 0x49A2078400070907 Ffma
    temp_198 = fma(temp_193, fp_c1.data[0].x, -6.98316002);
    // 0x0006A8: 0x5C68100000D70D0F Fmul
    temp_199 = temp_196 * temp_196;
    // 0x0006B0: 0x5C68100000670C0C Fmul
    temp_200 = temp_190 * temp_197;
    // 0x0006B8: 0x5C68100000E7290D Fmul
    temp_201 = temp_194 * temp_191;
    // 0x0006C8: 0x4C68101402E71606 Fmul
    temp_202 = temp_13 * fp_c5.data[11].z;
    // 0x0006D0: 0x5C68100000770907 Fmul
    temp_203 = temp_193 * temp_198;
    // 0x0006D8: 0x4C58301407B7020E Fadd
    temp_204 = 0.0 - fp_c5.data[30].w;
    temp_205 = temp_56 + temp_204;
    // 0x0006E8: 0x5C90008000C70022 Rro
    // 0x0006F0: 0x5C68100000F70D0D Fmul
    temp_206 = temp_201 * temp_199;
    // 0x0006F8: 0x5080000000272222 Mufu
    temp_207 = exp2(temp_200);
    // 0x000708: 0x4C58301407B7030F Fadd
    temp_208 = 0.0 - fp_c5.data[30].w;
    temp_209 = temp_57 + temp_208;
    // 0x000710: 0x4C58301407B70612 Fadd
    temp_210 = 0.0 - fp_c5.data[30].w;
    temp_211 = temp_202 + temp_210;
    // 0x000718: 0x5C90008000770016 Rro
    // 0x000728: 0x51A0071407B72107 Ffma
    temp_212 = fma(temp_20, temp_205, fp_c5.data[30].w);
    // 0x000730: 0x5080000000271616 Mufu
    temp_213 = exp2(temp_203);
    // 0x000738: 0x5C68100000D7080C Fmul
    temp_214 = temp_163 * temp_206;
    // 0x000748: 0x51A0079407B72108 Ffma
    temp_215 = fma(temp_20, temp_209, fp_c5.data[30].w);
    // 0x000750: 0x51A0091407B72109 Ffma
    temp_216 = fma(temp_20, temp_211, fp_c5.data[30].w);
    // 0x000758: 0x1E23EA2F9837130E Fmul32i
    temp_217 = temp_174 * 0.318309873;
    // 0x000768: 0x1E23EA2F9837140F Fmul32i
    temp_218 = temp_175 * 0.318309873;
    // 0x000770: 0x1E23EA2F9837110D Fmul32i
    temp_219 = temp_195 * 0.318309873;
    // 0x000778: 0x59A1110002270714 Ffma
    temp_220 = 0.0 - temp_207;
    temp_221 = fma(temp_212, temp_220, temp_207);
    // 0x000788: 0x59A1110002270813 Ffma
    temp_222 = 0.0 - temp_207;
    temp_223 = fma(temp_215, temp_222, temp_207);
    // 0x000790: 0x59A1110002270922 Ffma
    temp_224 = 0.0 - temp_207;
    temp_225 = fma(temp_216, temp_224, temp_207);
    // 0x000798: 0x59A10B0001670711 Ffma
    temp_226 = 0.0 - temp_213;
    temp_227 = fma(temp_212, temp_226, temp_213);
    // 0x0007A8: 0x59A10B0001670812 Ffma
    temp_228 = 0.0 - temp_213;
    temp_229 = fma(temp_215, temp_228, temp_213);
    // 0x0007B0: 0x5C58100001470714 Fadd
    temp_230 = temp_212 + temp_221;
    // 0x0007B8: 0x5C58100001370813 Fadd
    temp_231 = temp_215 + temp_223;
    // 0x0007C8: 0x5C58100002270922 Fadd
    temp_232 = temp_216 + temp_225;
    // 0x0007D0: 0x59A10B0001670916 Ffma
    temp_233 = 0.0 - temp_213;
    temp_234 = fma(temp_216, temp_233, temp_213);
    // 0x0007D8: 0x5C58100001170711 Fadd
    temp_235 = temp_212 + temp_227;
    // 0x0007E8: 0x5C58100001270812 Fadd
    temp_236 = temp_215 + temp_229;
    // 0x0007F0: 0x4C68101406971414 Fmul
    temp_237 = temp_230 * fp_c5.data[26].y;
    // 0x0007F8: 0x4C68101406971315 Fmul
    temp_238 = temp_231 * fp_c5.data[26].y;
    // 0x000808: 0x4C68101406972222 Fmul
    temp_239 = temp_232 * fp_c5.data[26].y;
    // 0x000810: 0x5C58100001670916 Fadd
    temp_240 = temp_216 + temp_234;
    // 0x000818: 0x4C68101406971113 Fmul
    temp_241 = temp_235 * fp_c5.data[26].y;
    // 0x000828: 0x4C68101406971211 Fmul
    temp_242 = temp_236 * fp_c5.data[26].y;
    // 0x000830: 0x4C68101801471412 Fmul
    temp_243 = temp_237 * fp_c6.data[5].x;
    // 0x000838: 0x4C68101801571515 Fmul
    temp_244 = temp_238 * fp_c6.data[5].y;
    // 0x000848: 0x4C68101801672222 Fmul
    temp_245 = temp_239 * fp_c6.data[5].z;
    // 0x000850: 0x4C68101406971616 Fmul
    temp_246 = temp_240 * fp_c5.data[26].y;
    // 0x000858: 0x59A1068000D71313 Ffma
    temp_247 = 0.0 - temp_219;
    temp_248 = fma(temp_241, temp_247, temp_219);
    // 0x000868: 0x59A1070000E71111 Ffma
    temp_249 = 0.0 - temp_217;
    temp_250 = fma(temp_242, temp_249, temp_217);
    // 0x000870: 0x5C68100001270C12 Fmul
    temp_251 = temp_214 * temp_243;
    // 0x000878: 0x5C68100001570C15 Fmul
    temp_252 = temp_214 * temp_244;
    // 0x000888: 0x5C68100002270C24 Fmul
    temp_253 = temp_214 * temp_245;
    // 0x000890: 0x59A1078000F71616 Ffma
    temp_254 = 0.0 - temp_218;
    temp_255 = fma(temp_246, temp_254, temp_218);
    // 0x000898: 0x5C9807800FF7000E Mov
    // 0x0008A8: 0x5C9807800FF7000F Mov
    // 0x0008B0: 0x5C9807800FF70014 Mov
    // 0x0008B8: 0x385D103F80071D1D Fadd
    temp_256 = 0.0 - temp_43;
    temp_257 = temp_256 + 1.0;
    temp_258 = clamp(temp_257, 0.0, 1.0);
    // 0x0008C8: 0x51A5058400270A18 Ffma
    temp_259 = 0.0 - temp_44;
    temp_260 = fma(temp_59, temp_259, fp_c1.data[0].z);
    temp_261 = clamp(temp_260, 0.0, 1.0);
    // 0x0008D0: 0x3859103F80071D0C Fadd
    temp_262 = 0.0 - temp_258;
    temp_263 = temp_262 + 1.0;
    // 0x0008D8: 0x5C68100000C7130D Fmul
    temp_264 = temp_248 * temp_263;
    // 0x0008E8: 0x5C68100000C71523 Fmul
    temp_265 = temp_252 * temp_263;
    // 0x0008F0: 0xEF5400000047FF0D Stl
    local_memory[1] = floatBitsToUint(temp_264);
    // 0x0008F8: 0x49A20C180AC71813 Ffma
    temp_266 = 0.0 - temp_261;
    temp_267 = fma(temp_261, fp_c6.data[43].x, temp_266);
    // 0x000908: 0x49A20C180AD71815 Ffma
    temp_268 = 0.0 - temp_261;
    temp_269 = fma(temp_261, fp_c6.data[43].y, temp_268);
    // 0x000910: 0x49A20C180AE71818 Ffma
    temp_270 = 0.0 - temp_261;
    temp_271 = fma(temp_261, fp_c6.data[43].z, temp_270);
    // 0x000918: 0x5C68100000C7110B Fmul
    temp_272 = temp_250 * temp_263;
    // 0x000928: 0x5C68100000C7160A Fmul
    temp_273 = temp_255 * temp_263;
    // 0x000930: 0xEF5400000007FF0B Stl
    local_memory[0] = floatBitsToUint(temp_272);
    // 0x000938: 0x5C68100000C71222 Fmul
    temp_274 = temp_251 * temp_263;
    // 0x000948: 0x5C68100000C72424 Fmul
    temp_275 = temp_253 * temp_263;
    // 0x000950: 0x5C68100000570112 Fmul
    temp_276 = temp_129 * temp_165;
    // 0x000958: 0x5C68100000571C11 Fmul
    temp_277 = temp_126 * temp_165;
    // 0x000968: 0x3858103F80071313 Fadd
    temp_278 = temp_267 + 1.0;
    // 0x000970: 0x3858103F80071516 Fadd
    temp_279 = temp_269 + 1.0;
    // 0x000978: 0x3858103F80071818 Fadd
    temp_280 = temp_271 + 1.0;
    // 0x000988: 0x5C9807800FF7000C Mov
    // 0x000990: 0x5C9807800FF7000D Mov
    // 0x000998: 0x32A212C00007122D Ffma
    temp_281 = 0.0 - temp_123;
    temp_282 = fma(temp_276, 2.0, temp_281);
    // 0x0009A8: 0x5C9807800FF7000B Mov
    // 0x0009B0: 0x32A20DC000071127 Ffma
    temp_283 = 0.0 - temp_125;
    temp_284 = fma(temp_277, 2.0, temp_283);
    // 0x0009B8: 0x59A4098001370215 Ffma
    temp_285 = fma(temp_56, temp_278, temp_278);
    temp_286 = clamp(temp_285, 0.0, 1.0);
    // 0x0009C8: 0x59A40B0001670316 Ffma
    temp_287 = fma(temp_57, temp_279, temp_279);
    temp_288 = clamp(temp_287, 0.0, 1.0);
    // 0x0009D0: 0x59A40C0001870620 Ffma
    temp_289 = fma(temp_202, temp_280, temp_280);
    temp_290 = clamp(temp_289, 0.0, 1.0);
    // 0x0009D8: 0x1E23E22F98372222 Fmul32i
    temp_291 = temp_274 * 0.159154937;
    // 0x0009E8: 0x1E23E22F98372323 Fmul32i
    temp_292 = temp_265 * 0.159154937;
    // 0x0009F0: 0x1E23E22F98372424 Fmul32i
    temp_293 = temp_275 * 0.159154937;
    // 0x0009F8: 0xF0F800000000000F Sync
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
    if (!temp_167)
    {
        // 0x000A08: 0x5C9807800FF7002F Mov
        temp_306 = 0;
        do
        {
            // 0x000A10: 0x5C18020002F72837 Iscadd
            temp_308 = int(temp_107) << 4;
            temp_309 = temp_308 + temp_306;
            // 0x000A18: 0xE003FF87CFF7FF32 Ipa
            // 0x000A28: 0x1C00000000172F2F Iadd32i
            temp_310 = temp_306 + 1;
            // 0x000A30: 0xE003FF87CFF7FF34 Ipa
            // 0x000A38: 0x3848000000473737 Shl
            temp_311 = temp_309 << 4;
            // 0x000A48: 0xE003FF87CFF7FF33 Ipa
            // 0x000A50: 0x5B6C038003172F0F Isetp
            temp_307 = uint(temp_310) >= floatBitsToUint(temp_121);
            // 0x000A58: 0xE290000057800000 Ssy
            // 0x000A68: 0xEF9400820007372E Ldc
            temp_312 = temp_311 + 0x2000;
            temp_313 = uint(temp_312) >> 2;
            temp_314 = temp_313 >> 2;
            temp_315 = int(temp_313) & 3;
            temp_316 = fp_c8.data[int(temp_314)][temp_315];
            // 0x000A70: 0x5080000000473232 Mufu
            // 0x000A78: 0x5080000000473434 Mufu
            // 0x000A88: 0x5080000000473333 Mufu
            // 0x000A90: 0xE043FF8D0327FF32 Ipa
            temp_317 = in_attr5.x;
            // 0x000A98: 0xE043FF8D8347FF34 Ipa
            temp_318 = in_attr5.z;
            // 0x000AA8: 0xE043FF8D4337FF33 Ipa
            temp_319 = in_attr5.y;
            // 0x000AB0: 0x3848000000672E2E Shl
            temp_320 = floatBitsToInt(temp_316) << 6;
            // 0x000AB8: 0xEF95008001072E10 Ldc
            temp_321 = temp_320 + 16;
            temp_322 = uint(temp_321) >> 2;
            temp_323 = temp_322 >> 2;
            temp_324 = int(temp_322) & 3;
            temp_325 = fp_c8.data[int(temp_323)][temp_324];
            temp_326 = int(temp_322) + 1;
            temp_327 = uint(temp_326) >> 2;
            temp_328 = temp_326 & 3;
            temp_329 = fp_c8.data[int(temp_327)][temp_328];
            // 0x000AC8: 0xEF95008001872E12 Ldc
            temp_330 = temp_320 + 24;
            temp_331 = uint(temp_330) >> 2;
            temp_332 = temp_331 >> 2;
            temp_333 = int(temp_331) & 3;
            temp_334 = fp_c8.data[int(temp_332)][temp_333];
            temp_335 = int(temp_331) + 1;
            temp_336 = uint(temp_335) >> 2;
            temp_337 = temp_335 & 3;
            temp_338 = fp_c8.data[int(temp_336)][temp_337];
            // 0x000AD0: 0xEF95008002072E18 Ldc
            temp_339 = temp_320 + 32;
            temp_340 = uint(temp_339) >> 2;
            temp_341 = temp_340 >> 2;
            temp_342 = int(temp_340) & 3;
            temp_343 = fp_c8.data[int(temp_341)][temp_342];
            temp_344 = int(temp_340) + 1;
            temp_345 = uint(temp_344) >> 2;
            temp_346 = temp_344 & 3;
            temp_347 = fp_c8.data[int(temp_345)][temp_346];
            // 0x000AD8: 0x5C58300003271032 Fadd
            temp_348 = 0.0 - temp_317;
            temp_349 = temp_325 + temp_348;
            // 0x000AE8: 0xEF94008002872E10 Ldc
            temp_350 = temp_320 + 40;
            temp_351 = uint(temp_350) >> 2;
            temp_352 = temp_351 >> 2;
            temp_353 = int(temp_351) & 3;
            temp_354 = fp_c8.data[int(temp_352)][temp_353];
            // 0x000AF0: 0x5C58300003371133 Fadd
            temp_355 = 0.0 - temp_319;
            temp_356 = temp_329 + temp_355;
            // 0x000AF8: 0x5C58300003471234 Fadd
            temp_357 = 0.0 - temp_318;
            temp_358 = temp_334 + temp_357;
            // 0x000B08: 0x5C68100003273235 Fmul
            temp_359 = temp_349 * temp_349;
            // 0x000B10: 0x59A11A0003471313 Ffma
            temp_360 = 0.0 - temp_358;
            temp_361 = fma(temp_338, temp_360, temp_358);
            // 0x000B18: 0x59A01A8003373335 Ffma
            temp_362 = fma(temp_356, temp_356, temp_359);
            // 0x000B28: 0x59A01A8001371336 Ffma
            temp_363 = fma(temp_361, temp_361, temp_362);
            // 0x000B30: 0x5080000000573611 Mufu
            temp_364 = inversesqrt(temp_363);
            // 0x000B38: 0x5080000000873636 Mufu
            temp_365 = sqrt(temp_363);
            // 0x000B48: 0x5C68100001173212 Fmul
            temp_366 = temp_349 * temp_364;
            // 0x000B50: 0x5C69100001871212 Fmul
            temp_367 = 0.0 - temp_343;
            temp_368 = temp_366 * temp_367;
            // 0x000B58: 0x5C68100001173318 Fmul
            temp_369 = temp_356 * temp_364;
            // 0x000B68: 0x5C68100001171311 Fmul
            temp_370 = temp_361 * temp_364;
            // 0x000B70: 0x59A1090001971818 Ffma
            temp_371 = 0.0 - temp_347;
            temp_372 = fma(temp_369, temp_371, temp_368);
            // 0x000B78: 0xEF95008003872E12 Ldc
            temp_373 = temp_320 + 56;
            temp_374 = uint(temp_373) >> 2;
            temp_375 = temp_374 >> 2;
            temp_376 = int(temp_374) & 3;
            temp_377 = fp_c8.data[int(temp_375)][temp_376];
            temp_378 = int(temp_374) + 1;
            temp_379 = uint(temp_378) >> 2;
            temp_380 = temp_378 & 3;
            temp_381 = fp_c8.data[int(temp_379)][temp_380];
            // 0x000B88: 0x010404000007F019 Mov32i
            // 0x000B90: 0x59A10C0001071118 Ffma
            temp_382 = 0.0 - temp_354;
            temp_383 = fma(temp_370, temp_382, temp_372);
            // 0x000B98: 0xEF95008003072E10 Ldc
            temp_384 = temp_320 + 48;
            temp_385 = uint(temp_384) >> 2;
            temp_386 = temp_385 >> 2;
            temp_387 = int(temp_385) & 3;
            temp_388 = fp_c8.data[int(temp_386)][temp_387];
            temp_389 = int(temp_385) + 1;
            temp_390 = uint(temp_389) >> 2;
            temp_391 = temp_389 & 3;
            temp_392 = fp_c8.data[int(temp_390)][temp_391];
            // 0x000BA8: 0x59A4098001271812 Ffma
            temp_393 = fma(temp_383, temp_377, temp_381);
            temp_394 = clamp(temp_393, 0.0, 1.0);
            // 0x000BB0: 0x59A4088003671036 Ffma
            temp_395 = fma(temp_388, temp_365, temp_392);
            temp_396 = clamp(temp_395, 0.0, 1.0);
            // 0x000BB8: 0x33A00CC000073613 Ffma
            temp_397 = fma(temp_396, -2.0, 3.0);
            // 0x000BC8: 0x5C68100003673618 Fmul
            temp_398 = temp_396 * temp_396;
            // 0x000BD0: 0x33A00CC000071219 Ffma
            temp_399 = fma(temp_394, -2.0, 3.0);
            // 0x000BD8: 0x5C68100001271212 Fmul
            temp_400 = temp_394 * temp_394;
            // 0x000BE8: 0x5C68100001371813 Fmul
            temp_401 = temp_398 * temp_397;
            // 0x000BF0: 0x39585042F0073418 Fadd
            temp_402 = abs(temp_358);
            temp_403 = temp_402 + -120.0;
            // 0x000BF8: 0x5C68100001971212 Fmul
            temp_404 = temp_400 * temp_399;
            // 0x000C08: 0x1EABD4CCCCD71818 Fmul32i
            temp_405 = temp_403 * -0.0500000007;
            temp_406 = clamp(temp_405, 0.0, 1.0);
            // 0x000C10: 0x5C68100001371212 Fmul
            temp_407 = temp_404 * temp_401;
            // 0x000C18: 0x36247F9000171313 Xmad
            temp_408 = floatBitsToUint(temp_401) >> 16;
            temp_409 = int(temp_408) << 16;
            // 0x000C28: 0x5C68100001871212 Fmul
            temp_410 = temp_407 * temp_406;
            // 0x000C30: 0x5BB383800FF71207 Fsetp
            temp_411 = temp_410 <= 0.0;
            // 0x000C38: 0x7A05083C0F00FF13 Hadd2
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
            // 0x000C48: 0x5D2103902FF71307 Hsetp2
            temp_421 = unpackHalf2x16(temp_412).x;
            temp_422 = temp_421 == 0.0;
            // 0x000C50: 0xF0F800000008000F Sync
            if (temp_422)
            {
                // 0x000C58: 0x5080000000471010 Mufu
                temp_423 = 1.0 / temp_388;
                // 0x000C68: 0x5C69100001071111 Fmul
                temp_424 = 0.0 - temp_423;
                temp_425 = temp_392 * temp_424;
                // 0x000C70: 0x5C60138001173413 Fmnmx
                temp_426 = min(temp_358, temp_425);
                // 0x000C78: 0x5C61178001371113 Fmnmx
                temp_427 = 0.0 - temp_425;
                temp_428 = max(temp_427, temp_426);
                // 0x000C88: 0xEF94008002C72E11 Ldc
                temp_429 = temp_320 + 44;
                temp_430 = uint(temp_429) >> 2;
                temp_431 = temp_430 >> 2;
                temp_432 = int(temp_430) & 3;
                temp_433 = fp_c8.data[int(temp_431)][temp_432];
                // 0x000C90: 0x59A01A8001371310 Ffma
                temp_434 = fma(temp_428, temp_428, temp_362);
                // 0x000C98: 0x5080000000571019 Mufu
                temp_435 = inversesqrt(temp_434);
                // 0x000CA8: 0x5C68100001973232 Fmul
                temp_436 = temp_349 * temp_435;
                // 0x000CB0: 0x5C68100001973333 Fmul
                temp_437 = temp_356 * temp_435;
                // 0x000CB8: 0x5C68100001971313 Fmul
                temp_438 = temp_428 * temp_435;
                // 0x000CC8: 0x5C58100003272618 Fadd
                temp_439 = temp_116 + temp_436;
                // 0x000CD0: 0x5C58100003372519 Fadd
                temp_440 = temp_123 + temp_437;
                // 0x000CD8: 0x5C58100001371B36 Fadd
                temp_441 = temp_125 + temp_438;
                // 0x000CE8: 0x5C68100001871834 Fmul
                temp_442 = temp_439 * temp_439;
                // 0x000CF0: 0x59A01A0001971934 Ffma
                temp_443 = fma(temp_440, temp_440, temp_442);
                // 0x000CF8: 0x59A01A0003673634 Ffma
                temp_444 = fma(temp_441, temp_441, temp_443);
                // 0x000D08: 0x5080000000573437 Mufu
                temp_445 = inversesqrt(temp_444);
                // 0x000D10: 0x5C68100003271A34 Fmul
                temp_446 = temp_132 * temp_436;
                // 0x000D18: 0x5C68100003771818 Fmul
                temp_447 = temp_439 * temp_445;
                // 0x000D28: 0x5C68100003771919 Fmul
                temp_448 = temp_440 * temp_445;
                // 0x000D30: 0x59A01A0003370134 Ffma
                temp_449 = fma(temp_129, temp_437, temp_446);
                // 0x000D38: 0x5C68100001873235 Fmul
                temp_450 = temp_436 * temp_447;
                // 0x000D48: 0x5C68100003773632 Fmul
                temp_451 = temp_441 * temp_445;
                // 0x000D50: 0x5080000000871036 Mufu
                temp_452 = sqrt(temp_434);
                // 0x000D58: 0x5C68100001871A18 Fmul
                temp_453 = temp_132 * temp_447;
                // 0x000D68: 0x59A01A0001371C34 Ffma
                temp_454 = fma(temp_126, temp_438, temp_449);
                // 0x000D70: 0x59A01A8001973335 Ffma
                temp_455 = fma(temp_437, temp_448, temp_450);
                // 0x000D78: 0x5080000000471133 Mufu
                temp_456 = 1.0 / temp_433;
                // 0x000D88: 0x59A00C0001970118 Ffma
                temp_457 = fma(temp_129, temp_448, temp_453);
                // 0x000D90: 0xEF95008000072E10 Ldc
                temp_458 = uint(temp_320) >> 2;
                temp_459 = temp_458 >> 2;
                temp_460 = int(temp_458) & 3;
                temp_461 = fp_c8.data[int(temp_459)][temp_460];
                temp_462 = int(temp_458) + 1;
                temp_463 = uint(temp_462) >> 2;
                temp_464 = temp_462 & 3;
                temp_465 = fp_c8.data[int(temp_463)][temp_464];
                // 0x000D98: 0x59A41A8003271335 Ffma
                temp_466 = fma(temp_438, temp_451, temp_455);
                temp_467 = clamp(temp_466, 0.0, 1.0);
                // 0x000DA8: 0xEF94008000872E2E Ldc
                temp_468 = temp_320 + 8;
                temp_469 = uint(temp_468) >> 2;
                temp_470 = temp_469 >> 2;
                temp_471 = int(temp_469) & 3;
                temp_472 = fp_c8.data[int(temp_470)][temp_471];
                // 0x000DB0: 0x51A01B0400373333 Ffma
                temp_473 = fma(temp_456, temp_452, fp_c1.data[0].w);
                // 0x000DB8: 0x01040DF760C7F019 Mov32i
                // 0x000DC8: 0x5080000000473333 Mufu
                temp_474 = 1.0 / temp_473;
                // 0x000DD0: 0x59A40C0003271C18 Ffma
                temp_475 = fma(temp_126, temp_451, temp_457);
                temp_476 = clamp(temp_475, 0.0, 1.0);
                // 0x000DD8: 0x5C5C30000FF73432 Fadd
                temp_477 = temp_454 + -0.0;
                temp_478 = clamp(temp_477, 0.0, 1.0);
                // 0x000DE8: 0x49A20C8400073519 Ffma
                temp_479 = fma(temp_467, fp_c1.data[0].x, -6.98316002);
                // 0x000DF0: 0x59A20C0001872B13 Ffma
                temp_480 = 0.0 - temp_476;
                temp_481 = fma(temp_150, temp_476, temp_480);
                // 0x000DF8: 0x5C68100001973519 Fmul
                temp_482 = temp_467 * temp_479;
                // 0x000E08: 0x1E23FB3333373333 Fmul32i
                temp_483 = temp_474 * 1.39999998;
                // 0x000E10: 0x51A0098400271813 Ffma
                temp_484 = fma(temp_476, temp_481, fp_c1.data[0].z);
                // 0x000E18: 0x59A1190003272A18 Ffma
                temp_485 = 0.0 - temp_478;
                temp_486 = fma(temp_157, temp_485, temp_478);
                // 0x000E28: 0x5080000000471313 Mufu
                temp_487 = 1.0 / temp_484;
                // 0x000E30: 0x5C90008001970019 Rro
                // 0x000E38: 0x5C68100003373333 Fmul
                temp_488 = temp_483 * temp_483;
                // 0x000E48: 0x5080000000271919 Mufu
                temp_489 = exp2(temp_482);
                // 0x000E50: 0x5C58100001872A18 Fadd
                temp_490 = temp_157 + temp_486;
                // 0x000E58: 0x5080000000471818 Mufu
                temp_491 = 1.0 / temp_490;
                // 0x000E68: 0x59A1198003373433 Ffma
                temp_492 = 0.0 - temp_488;
                temp_493 = fma(temp_454, temp_492, temp_488);
                // 0x000E70: 0x5C68100001372C13 Fmul
                temp_494 = temp_144 * temp_487;
                // 0x000E78: 0x5C5C100003373433 Fadd
                temp_495 = temp_454 + temp_493;
                temp_496 = clamp(temp_495, 0.0, 1.0);
                // 0x000E88: 0x59A10C8001970734 Ffma
                temp_497 = 0.0 - temp_489;
                temp_498 = fma(temp_212, temp_497, temp_489);
                // 0x000E90: 0x5C68100001371313 Fmul
                temp_499 = temp_494 * temp_494;
                // 0x000E98: 0x5C68100001071210 Fmul
                temp_500 = temp_410 * temp_461;
                // 0x000EA8: 0x5C68100001171211 Fmul
                temp_501 = temp_410 * temp_465;
                // 0x000EB0: 0x5C68100001872918 Fmul
                temp_502 = temp_194 * temp_491;
                // 0x000EB8: 0x5C58100003470734 Fadd
                temp_503 = temp_212 + temp_498;
                // 0x000EC8: 0x5C68100002E7122E Fmul
                temp_504 = temp_410 * temp_472;
                // 0x000ED0: 0x59A10C8001970812 Ffma
                temp_505 = 0.0 - temp_489;
                temp_506 = fma(temp_215, temp_505, temp_489);
                // 0x000ED8: 0x59A10C8001970919 Ffma
                temp_507 = 0.0 - temp_489;
                temp_508 = fma(temp_216, temp_507, temp_489);
                // 0x000EE8: 0x5C68100001871313 Fmul
                temp_509 = temp_499 * temp_502;
                // 0x000EF0: 0x4C68101406973434 Fmul
                temp_510 = temp_503 * fp_c5.data[26].y;
                // 0x000EF8: 0x5C58100001270812 Fadd
                temp_511 = temp_215 + temp_506;
                // 0x000F08: 0x5C58100001970919 Fadd
                temp_512 = temp_216 + temp_508;
                // 0x000F10: 0x5C68100001373213 Fmul
                temp_513 = temp_478 * temp_509;
                // 0x000F18: 0x5C68100001073434 Fmul
                temp_514 = temp_510 * temp_500;
                // 0x000F28: 0x5C68100003371010 Fmul
                temp_515 = temp_500 * temp_496;
                // 0x000F30: 0x4C68101406971212 Fmul
                temp_516 = temp_511 * fp_c5.data[26].y;
                // 0x000F38: 0x4C68101406971919 Fmul
                temp_517 = temp_512 * fp_c5.data[26].y;
                // 0x000F48: 0x5C68100001373434 Fmul
                temp_518 = temp_514 * temp_513;
                // 0x000F50: 0x49A005840057100B Ffma
                temp_519 = fma(temp_515, fp_c1.data[1].y, temp_294);
                // 0x000F58: 0x5C68100001171212 Fmul
                temp_520 = temp_516 * temp_501;
                // 0x000F68: 0x5C68100002E71919 Fmul
                temp_521 = temp_517 * temp_504;
                // 0x000F70: 0x5C68100003371111 Fmul
                temp_522 = temp_501 * temp_496;
                // 0x000F78: 0x5C68100003372E2E Fmul
                temp_523 = temp_504 * temp_496;
                // 0x000F88: 0x49A007040047340E Ffma
                temp_524 = fma(temp_518, fp_c1.data[1].x, temp_295);
                // 0x000F90: 0x5C68100001371212 Fmul
                temp_525 = temp_520 * temp_513;
                // 0x000F98: 0x5C68100001371919 Fmul
                temp_526 = temp_521 * temp_513;
                // 0x000FA8: 0x49A006040057110C Ffma
                temp_527 = fma(temp_522, fp_c1.data[1].y, temp_296);
                // 0x000FB0: 0x49A0068400572E0D Ffma
                temp_528 = fma(temp_523, fp_c1.data[1].y, temp_297);
                // 0x000FB8: 0x49A007840047120F Ffma
                temp_529 = fma(temp_525, fp_c1.data[1].x, temp_298);
                // 0x000FC8: 0x49A00A0400471914 Ffma
                temp_530 = fma(temp_526, fp_c1.data[1].x, temp_299);
                // 0x000FD0: 0xF0F800000007000F Sync
                temp_413 = temp_519;
                temp_414 = temp_524;
                temp_415 = temp_527;
                temp_416 = temp_528;
                temp_417 = temp_529;
                temp_418 = temp_530;
            }
            // 0x000FD8: 0xE2400FFFA309000F Bra
            temp_294 = temp_413;
            temp_295 = temp_414;
            temp_296 = temp_415;
            temp_297 = temp_416;
            temp_298 = temp_417;
            temp_299 = temp_418;
            temp_300 = temp_416;
            temp_301 = temp_414;
            temp_302 = temp_417;
            temp_303 = temp_418;
            temp_304 = temp_415;
            temp_305 = temp_413;
        }
        while (!temp_307);
        // 0x000FE8: 0xF0F800000007000F Sync
    }
    // 0x000FF0: 0x5C62578000171A11 Fmnmx
    temp_531 = abs(temp_132);
    temp_532 = abs(temp_129);
    temp_533 = max(temp_531, temp_532);
    // 0x000FF8: 0xEF4410000007FF2E Ldl
    temp_534 = uintBitsToFloat(local_memory[0]);
    // 0x001008: 0x5C62578002D73010 Fmnmx
    temp_535 = abs(temp_182);
    temp_536 = abs(temp_282);
    temp_537 = max(temp_535, temp_536);
    // 0x001010: 0xE003FF87CFF7FF25 Ipa
    // 0x001018: 0x5C60578001171C18 Fmnmx
    temp_538 = abs(temp_126);
    temp_539 = max(temp_538, temp_533);
    // 0x001028: 0xEF4410000047FF32 Ldl
    temp_540 = uintBitsToFloat(local_memory[1]);
    // 0x001030: 0x5C60578001072710 Fmnmx
    temp_541 = abs(temp_284);
    temp_542 = max(temp_541, temp_537);
    // 0x001038: 0x508000000047181B Mufu
    temp_543 = 1.0 / temp_539;
    // 0x001048: 0x38681040E007042C Fmul
    temp_544 = temp_140 * 7.0;
    // 0x001050: 0x5080000000471026 Mufu
    temp_545 = 1.0 / temp_542;
    // 0x001058: 0x5080000000472525 Mufu
    // 0x001068: 0x5C69100001B71C1C Fmul
    temp_546 = 0.0 - temp_543;
    temp_547 = temp_126 * temp_546;
    // 0x001070: 0x5C68100001B71A1A Fmul
    temp_548 = temp_132 * temp_543;
    // 0x001078: 0x5C68100001B7011B Fmul
    temp_549 = temp_129 * temp_543;
    // 0x001088: 0xE043FF920257FF28 Ipa
    temp_550 = in_attr10.x;
    // 0x001090: 0xE043FF924257FF29 Ipa
    temp_551 = in_attr10.y;
    // 0x001098: 0xE043FF928257FF2A Ipa
    temp_552 = in_attr10.z;
    // 0x0010A8: 0x5C68100002673011 Fmul
    temp_553 = temp_182 * temp_545;
    // 0x0010B0: 0x5C68100002672D12 Fmul
    temp_554 = temp_282 * temp_545;
    // 0x0010B8: 0x5C69100002672713 Fmul
    temp_555 = 0.0 - temp_545;
    temp_556 = temp_284 * temp_555;
    // 0x0010C8: 0x5C98078001C70018 Mov
    // 0x0010D0: 0xD9A2016261C71A1C Texs
    temp_557 = textureLod(fp_t_tcb_16, vec3(temp_548, temp_549, temp_547), temp_258).xyz;
    temp_558 = temp_557.x;
    temp_559 = temp_557.y;
    temp_560 = temp_557.z;
    // 0x0010D8: 0x010000000017F010 Mov32i
    // 0x0010E8: 0x3868104080070419 Fmul
    temp_561 = temp_140 * 4.0;
    // 0x0010F0: 0xC1BA0143F2C71010 Tex
    temp_562 = textureLod(fp_t_tcb_14, vec4(temp_553, temp_554, temp_556, float(1)), temp_544).xyz;
    temp_563 = temp_562.x;
    temp_564 = temp_562.y;
    temp_565 = temp_562.z;
    // 0x0010F8: 0xD9A2018271871A18 Texs
    temp_566 = textureLod(fp_t_tcb_18, vec3(temp_548, temp_549, temp_547), temp_561).xyz;
    temp_567 = temp_566.x;
    temp_568 = temp_566.y;
    temp_569 = temp_566.z;
    // 0x001108: 0x4C98079C0207002B Mov
    // 0x001110: 0xDEBA0000C2B72828 TexB
    temp_570 = texture(fp_t_cb7_20, vec3(temp_550, temp_551, temp_552)).x;
    // 0x001118: 0x3859103F80070404 Fadd
    temp_571 = 0.0 - temp_140;
    temp_572 = temp_571 + 1.0;
    // 0x001128: 0x49A005180A170D0A Ffma
    temp_573 = fma(temp_300, fp_c6.data[40].y, temp_273);
    // 0x001130: 0x5C68100000470404 Fmul
    temp_574 = temp_572 * temp_572;
    // 0x001138: 0x49A011180A170E22 Ffma
    temp_575 = fma(temp_301, fp_c6.data[40].y, temp_291);
    // 0x001148: 0x1E23E468DB97050E Fmul32i
    temp_576 = temp_165 * 0.193900004;
    // 0x001150: 0x3859103F80070513 Fadd
    temp_577 = 0.0 - temp_165;
    temp_578 = temp_577 + 1.0;
    // 0x001158: 0x5C6810000047040D Fmul
    temp_579 = temp_574 * temp_574;
    // 0x001168: 0x49A011980A170F23 Ffma
    temp_580 = fma(temp_302, fp_c6.data[40].y, temp_292);
    // 0x001170: 0x0103E2CD9E87F01A Mov32i
    // 0x001178: 0x4C68101809071304 Fmul
    temp_581 = temp_578 * fp_c6.data[36].x;
    // 0x001188: 0x49A0070400670D0E Ffma
    temp_582 = fma(temp_579, fp_c1.data[1].z, temp_576);
    // 0x001190: 0x5080400000370404 Mufu
    temp_583 = abs(temp_581);
    temp_584 = log2(temp_583);
    // 0x001198: 0x49A012180A171424 Ffma
    temp_585 = fma(temp_303, fp_c6.data[40].y, temp_293);
    // 0x0011A8: 0x49A20D0400B70D1A Ffma
    temp_586 = fma(temp_579, fp_c1.data[2].w, -0.168799996);
    // 0x0011B0: 0x088BF05D63970E14 Fadd32i
    temp_587 = temp_582 + -0.522800028;
    // 0x0011B8: 0xE04BFF904257FF0E Ipa
    temp_588 = in_attr8.y;
    temp_589 = clamp(temp_588, 0.0, 1.0);
    // 0x0011C8: 0x0103F0000007F01B Mov32i
    // 0x0011D0: 0x5C68100001A70D1A Fmul
    temp_590 = temp_579 * temp_586;
    // 0x0011D8: 0x0104066978D7F02B Mov32i
    // 0x0011E8: 0x4C9807980B470029 Mov
    // 0x0011F0: 0x4C68101809170404 Fmul
    temp_591 = temp_584 * fp_c6.data[36].y;
    // 0x0011F8: 0x5C68100001470514 Fmul
    temp_592 = temp_165 * temp_587;
    // 0x001208: 0x4C98079800A7002A Mov
    // 0x001210: 0x51A214980B471F1F Ffma
    temp_593 = 0.0 - fp_c6.data[45].x;
    temp_594 = fma(temp_24, fp_c6.data[45].x, temp_593);
    // 0x001218: 0x51A214980B470000 Ffma
    temp_595 = 0.0 - fp_c6.data[45].x;
    temp_596 = fma(temp_25, fp_c6.data[45].x, temp_595);
    // 0x001228: 0x51A214980B471E1E Ffma
    temp_597 = 0.0 - fp_c6.data[45].x;
    temp_598 = fma(temp_23, fp_c6.data[45].x, temp_597);
    // 0x001230: 0x4C98079809A70029 Mov
    // 0x001238: 0x4C9807940827002D Mov
    // 0x001248: 0x4C68101406972D2D Fmul
    temp_599 = fp_c5.data[32].z * fp_c5.data[26].y;
    // 0x001250: 0xF0F0000034470000 Depbar
    // 0x001258: 0x49A017180A170C0C Ffma
    temp_600 = fma(temp_304, fp_c6.data[40].y, temp_534);
    // 0x001268: 0x010410676C97F02E Mov32i
    // 0x001270: 0x49A017040097050F Ffma
    temp_601 = fma(temp_165, fp_c1.data[2].y, 8.40400028);
    // 0x001278: 0x51A0078400A70513 Ffma
    temp_602 = fma(temp_165, temp_601, fp_c1.data[2].z);
    // 0x001288: 0x51A0098400C70513 Ffma
    temp_603 = fma(temp_165, temp_602, fp_c1.data[3].x);
    // 0x001290: 0x4C98079800970005 Mov
    // 0x001298: 0x32A00DBF0007010F Ffma
    temp_604 = fma(temp_129, 0.5, 0.5);
    // 0x0012A8: 0x5C9000800047001B Rro
    // 0x0012B0: 0x5C60138001A71313 Fmnmx
    temp_605 = min(temp_603, temp_590);
    // 0x0012B8: 0x5084000000271B1B Mufu
    temp_606 = exp2(temp_591);
    temp_607 = clamp(temp_606, 0.0, 1.0);
    // 0x0012C8: 0x49A2158400770D1A Ffma
    temp_608 = fma(temp_579, fp_c1.data[1].w, -3.60299993);
    // 0x0012D0: 0x4C59101800570504 Fadd
    temp_609 = 0.0 - fp_c6.data[2].y;
    temp_610 = temp_609 + fp_c6.data[1].y;
    // 0x0012D8: 0x4C59101800672A05 Fadd
    temp_611 = 0.0 - fp_c6.data[2].z;
    temp_612 = temp_611 + fp_c6.data[1].z;
    // 0x0012E8: 0x4C98079800870001 Mov
    // 0x0012F0: 0x51A00D0400870D2A Ffma
    temp_613 = fma(temp_579, temp_608, fp_c1.data[2].x);
    // 0x0012F8: 0x4C5810140817291A Fadd
    temp_614 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x001308: 0x010404000007F029 Mov32i
    // 0x001310: 0x4C59101800470101 Fadd
    temp_615 = 0.0 - fp_c6.data[2].x;
    temp_616 = temp_615 + fp_c6.data[1].x;
    // 0x001318: 0x59A00A0002A70D14 Ffma
    temp_617 = fma(temp_579, temp_613, temp_592);
    // 0x001328: 0x5C68100001B71A1A Fmul
    temp_618 = temp_614 * temp_607;
    // 0x001330: 0x33A014C000070E0D Ffma
    temp_619 = fma(temp_589, -2.0, 3.0);
    // 0x001338: 0x386C10424807081B Fmul
    temp_620 = temp_215 * 50.0;
    temp_621 = clamp(temp_620, 0.0, 1.0);
    // 0x001348: 0x5C5C30000FF71329 Fadd
    temp_622 = temp_605 + -0.0;
    temp_623 = clamp(temp_622, 0.0, 1.0);
    // 0x001350: 0x4C5C100400D71414 Fadd
    temp_624 = temp_617 + fp_c1.data[3].y;
    temp_625 = clamp(temp_624, 0.0, 1.0);
    // 0x001358: 0x51A0009800870F01 Ffma
    temp_626 = fma(temp_604, temp_616, fp_c6.data[2].x);
    // 0x001368: 0x51A0021800970F04 Ffma
    temp_627 = fma(temp_604, temp_610, fp_c6.data[2].y);
    // 0x001370: 0x51A0029800A70F05 Ffma
    temp_628 = fma(temp_604, temp_612, fp_c6.data[2].z);
    // 0x001378: 0x5C68100000E70E2A Fmul
    temp_629 = temp_589 * temp_589;
    // 0x001388: 0x4C68101808D71A0E Fmul
    temp_630 = temp_618 * fp_c6.data[35].y;
    // 0x001390: 0x4C68101808E71A13 Fmul
    temp_631 = temp_618 * fp_c6.data[35].z;
    // 0x001398: 0x4C68101808C71A0F Fmul
    temp_632 = temp_618 * fp_c6.data[35].x;
    // 0x0013A8: 0x5C68100002971B1A Fmul
    temp_633 = temp_621 * temp_623;
    // 0x0013B0: 0x5C59100001472929 Fadd
    temp_634 = 0.0 - temp_623;
    temp_635 = temp_634 + temp_625;
    // 0x0013B8: 0x59A0110002D70F22 Ffma
    temp_636 = fma(temp_632, temp_599, temp_575);
    // 0x0013C8: 0x49A1079408270F14 Ffma
    temp_637 = 0.0 - fp_c5.data[32].z;
    temp_638 = fma(temp_632, temp_637, temp_632);
    // 0x0013D0: 0x59A00D000297070F Ffma
    temp_639 = fma(temp_212, temp_635, temp_633);
    // 0x0013D8: 0xF0F0000034270000 Depbar
    // 0x0013E8: 0xE043FF900257FF07 Ipa
    temp_640 = in_attr8.x;
    // 0x0013F0: 0x49A019180A170B0B Ffma
    temp_641 = fma(temp_305, fp_c6.data[40].y, temp_540);
    // 0x0013F8: 0xE043FF8C8257FF25 Ipa
    temp_642 = in_attr4.z;
    // 0x001408: 0x59A0118002D70E23 Ffma
    temp_643 = fma(temp_630, temp_599, temp_580);
    // 0x001410: 0x59A0120002D71324 Ffma
    temp_644 = fma(temp_631, temp_599, temp_585);
    // 0x001418: 0x49A1071408270E0E Ffma
    temp_645 = 0.0 - fp_c5.data[32].z;
    temp_646 = fma(temp_630, temp_645, temp_630);
    // 0x001428: 0x49A1099408271313 Ffma
    temp_647 = 0.0 - fp_c5.data[32].z;
    temp_648 = fma(temp_631, temp_647, temp_631);
    // 0x001430: 0x49A00E0400570101 Ffma
    temp_649 = fma(temp_626, fp_c1.data[1].y, temp_558);
    // 0x001438: 0x5C58100001470B0B Fadd
    temp_650 = temp_641 + temp_638;
    // 0x001448: 0x59A00D0002970808 Ffma
    temp_651 = fma(temp_215, temp_635, temp_633);
    // 0x001450: 0x59A00D0002970909 Ffma
    temp_652 = fma(temp_216, temp_635, temp_633);
    // 0x001458: 0x5C58100000E70C0C Fadd
    temp_653 = temp_600 + temp_646;
    // 0x001468: 0x5C58100001370A0A Fadd
    temp_654 = temp_573 + temp_648;
    // 0x001470: 0x49A00E840057041D Ffma
    temp_655 = fma(temp_627, fp_c1.data[1].y, temp_559);
    // 0x001478: 0x49A0130400570505 Ffma
    temp_656 = fma(temp_628, fp_c1.data[1].y, temp_560);
    // 0x001488: 0x5C58100000170B0B Fadd
    temp_657 = temp_650 + temp_649;
    // 0x001490: 0xF0F0000034170000 Depbar
    // 0x001498: 0x49A00C1808571010 Ffma
    temp_658 = fma(temp_563, fp_c6.data[33].y, temp_567);
    // 0x0014A8: 0x4C68101406970F0F Fmul
    temp_659 = temp_639 * fp_c5.data[26].y;
    // 0x0014B0: 0x4C98079802870004 Mov
    // 0x0014B8: 0x5C58100001D70C0C Fadd
    temp_660 = temp_653 + temp_655;
    // 0x0014C8: 0x5C58100000570A0A Fadd
    temp_661 = temp_654 + temp_656;
    // 0x0014D0: 0x49A00C9808571111 Ffma
    temp_662 = fma(temp_564, fp_c6.data[33].y, temp_568);
    // 0x0014D8: 0x4C68101406970808 Fmul
    temp_663 = temp_651 * fp_c5.data[26].y;
    // 0x0014E8: 0x49A0139808571212 Ffma
    temp_664 = fma(temp_565, fp_c6.data[33].y, temp_569);
    // 0x0014F0: 0x4C68101406970909 Fmul
    temp_665 = temp_652 * fp_c5.data[26].y;
    // 0x0014F8: 0x59A0110001070F0F Ffma
    temp_666 = fma(temp_659, temp_658, temp_636);
    // 0x001508: 0x59A1058000B72101 Ffma
    temp_667 = 0.0 - temp_657;
    temp_668 = fma(temp_20, temp_667, temp_657);
    // 0x001510: 0x51A0021802871E1E Ffma
    temp_669 = fma(temp_598, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001518: 0x59A0118001170808 Ffma
    temp_670 = fma(temp_663, temp_662, temp_643);
    // 0x001528: 0x59A1060000C72105 Ffma
    temp_671 = 0.0 - temp_660;
    temp_672 = fma(temp_20, temp_671, temp_660);
    // 0x001530: 0x59A1050000A72104 Ffma
    temp_673 = 0.0 - temp_661;
    temp_674 = fma(temp_20, temp_673, temp_661);
    // 0x001538: 0x59A0120001270909 Ffma
    temp_675 = fma(temp_665, temp_664, temp_644);
    // 0x001548: 0x59A007800017020F Ffma
    temp_676 = fma(temp_56, temp_668, temp_666);
    // 0x001550: 0x4C9807980297000E Mov
    // 0x001558: 0x49A503980BC72807 Ffma
    temp_677 = 0.0 - fp_c6.data[47].x;
    temp_678 = fma(temp_570, temp_677, temp_640);
    temp_679 = clamp(temp_678, 0.0, 1.0);
    // 0x001568: 0x59A0040000570305 Ffma
    temp_680 = fma(temp_57, temp_672, temp_670);
    // 0x001570: 0x5080000000370707 Mufu
    temp_681 = log2(temp_679);
    // 0x001578: 0x4C98079802A70001 Mov
    // 0x001588: 0x59A0048000470609 Ffma
    temp_682 = fma(temp_202, temp_674, temp_675);
    // 0x001590: 0x51A0071802971F1F Ffma
    temp_683 = fma(temp_594, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001598: 0x5C68100000F71515 Fmul
    temp_684 = temp_286 * temp_676;
    // 0x0015A8: 0x5C68100000571616 Fmul
    temp_685 = temp_288 * temp_680;
    // 0x0015B0: 0x51A0009802A70001 Ffma
    temp_686 = fma(temp_596, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0015B8: 0x5C68100000972020 Fmul
    temp_687 = temp_290 * temp_682;
    // 0x0015C8: 0x5C68100002A70D0D Fmul
    temp_688 = temp_619 * temp_629;
    // 0x0015D0: 0x5C58300001E71503 Fadd
    temp_689 = 0.0 - temp_669;
    temp_690 = temp_684 + temp_689;
    // 0x0015D8: 0x5C58300001F71600 Fadd
    temp_691 = 0.0 - temp_683;
    temp_692 = temp_685 + temp_691;
    // 0x0015E8: 0x5C58300000172002 Fadd
    temp_693 = 0.0 - temp_686;
    temp_694 = temp_687 + temp_693;
    // 0x0015F0: 0x4C68101803170704 Fmul
    temp_695 = temp_681 * fp_c6.data[12].y;
    // 0x0015F8: 0x4C68101803770D0D Fmul
    temp_696 = temp_688 * fp_c6.data[13].w;
    // 0x001608: 0x49A00F180BF70303 Ffma
    temp_697 = fma(temp_690, fp_c6.data[47].w, temp_669);
    // 0x001610: 0x49A00F980BF70000 Ffma
    temp_698 = fma(temp_692, fp_c6.data[47].w, temp_683);
    // 0x001618: 0x49A000980BF70202 Ffma
    temp_699 = fma(temp_694, fp_c6.data[47].w, temp_686);
    // 0x001628: 0x5C90008000470006 Rro
    // 0x001630: 0x49A2069803470D04 Ffma
    temp_700 = 0.0 - temp_696;
    temp_701 = fma(temp_696, fp_c6.data[13].x, temp_700);
    // 0x001638: 0x5080000000270606 Mufu
    temp_702 = exp2(temp_695);
    // 0x001648: 0x49A2069803570D05 Ffma
    temp_703 = 0.0 - temp_696;
    temp_704 = fma(temp_696, fp_c6.data[13].y, temp_703);
    // 0x001650: 0x5C60178000371E03 Fmnmx
    temp_705 = max(temp_669, temp_697);
    // 0x001658: 0x49A2069803670D0D Ffma
    temp_706 = 0.0 - temp_696;
    temp_707 = fma(temp_696, fp_c6.data[13].z, temp_706);
    // 0x001668: 0x5C60178000071F00 Fmnmx
    temp_708 = max(temp_683, temp_698);
    // 0x001670: 0x5C60178000270102 Fmnmx
    temp_709 = max(temp_686, temp_699);
    // 0x001678: 0x59A0018000470304 Ffma
    temp_710 = fma(temp_705, temp_701, temp_705);
    // 0x001688: 0x59A0000000570001 Ffma
    temp_711 = fma(temp_708, temp_704, temp_708);
    // 0x001690: 0x59A0010000D70202 Ffma
    temp_712 = fma(temp_709, temp_707, temp_709);
    // 0x001698: 0x4C68101802B70603 Fmul
    temp_713 = temp_702 * fp_c6.data[10].w;
    // 0x0016A8: 0x5C59100000471500 Fadd
    temp_714 = 0.0 - temp_684;
    temp_715 = temp_714 + temp_710;
    // 0x0016B0: 0x4C58100C03872504 Fadd
    temp_716 = temp_642 + fp_c3.data[14].x;
    // 0x0016B8: 0x5C59100000171601 Fadd
    temp_717 = 0.0 - temp_685;
    temp_718 = temp_717 + temp_711;
    // 0x0016C8: 0x5C59100000272002 Fadd
    temp_719 = 0.0 - temp_687;
    temp_720 = temp_719 + temp_712;
    // 0x0016D0: 0x5C98078001770007 Mov
    // 0x0016D8: 0x59A00A8000370000 Ffma
    temp_721 = fma(temp_715, temp_713, temp_684);
    // 0x0016E8: 0x0103F6000007F005 Mov32i
    // 0x0016F0: 0x59A00B0000370101 Ffma
    temp_722 = fma(temp_718, temp_713, temp_685);
    // 0x0016F8: 0x5C9807800FF70006 Mov
    // 0x001708: 0x59A0100000370202 Ffma
    temp_723 = fma(temp_720, temp_713, temp_687);
    // 0x001710: 0x5C98078001770003 Mov
    // 0x001718: 0x49A37F8C03C70404 Ffma
    temp_724 = 0.0 - fp_c3.data[15].x;
    temp_725 = fma(temp_716, temp_724, -0.0);
    // 0x001728: 0xE30000000007000F Exit
    out_attr0.x = temp_721;
    out_attr0.y = temp_722;
    out_attr0.z = temp_723;
    out_attr0.w = temp_14;
    out_attr1.x = temp_725;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_14;
    return;
}
