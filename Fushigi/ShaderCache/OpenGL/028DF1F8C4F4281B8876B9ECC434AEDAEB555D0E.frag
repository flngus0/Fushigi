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
    precise float temp_59;
    bool temp_60;
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
    uint temp_177;
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
    int temp_194;
    precise float temp_195;
    precise float temp_196;
    int temp_197;
    uint temp_198;
    uint temp_199;
    int temp_200;
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
    bool temp_246;
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
    int temp_290;
    bool temp_291;
    int temp_292;
    int temp_293;
    int temp_294;
    int temp_295;
    int temp_296;
    uint temp_297;
    uint temp_298;
    int temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    int temp_304;
    int temp_305;
    uint temp_306;
    uint temp_307;
    int temp_308;
    precise float temp_309;
    int temp_310;
    uint temp_311;
    int temp_312;
    precise float temp_313;
    int temp_314;
    uint temp_315;
    uint temp_316;
    int temp_317;
    precise float temp_318;
    int temp_319;
    uint temp_320;
    int temp_321;
    precise float temp_322;
    int temp_323;
    uint temp_324;
    uint temp_325;
    int temp_326;
    precise float temp_327;
    int temp_328;
    uint temp_329;
    int temp_330;
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
    int temp_357;
    uint temp_358;
    uint temp_359;
    int temp_360;
    precise float temp_361;
    int temp_362;
    uint temp_363;
    int temp_364;
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
    precise float temp_389;
    precise float temp_390;
    precise float temp_391;
    uint temp_392;
    int temp_393;
    precise float temp_394;
    bool temp_395;
    uint temp_396;
    precise float temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    uint temp_404;
    precise float temp_405;
    bool temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    precise float temp_412;
    precise float temp_413;
    precise float temp_414;
    precise float temp_415;
    precise float temp_416;
    precise float temp_417;
    precise float temp_418;
    int temp_419;
    uint temp_420;
    uint temp_421;
    int temp_422;
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
    precise float temp_449;
    precise float temp_450;
    precise float temp_451;
    uint temp_452;
    uint temp_453;
    int temp_454;
    precise float temp_455;
    int temp_456;
    uint temp_457;
    int temp_458;
    precise float temp_459;
    precise float temp_460;
    precise float temp_461;
    precise float temp_462;
    precise float temp_463;
    int temp_464;
    uint temp_465;
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
    precise vec3 temp_539;
    precise float temp_540;
    precise float temp_541;
    precise float temp_542;
    precise vec3 temp_543;
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
    precise vec3 temp_554;
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
    precise float temp_719;
    precise float temp_720;
    precise float temp_721;
    // 0x000008: 0xE003FF87CFF7FF0C Ipa
    // 0x000010: 0xE003FF870FF7FF07 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000018: 0xE003FF874FF7FF08 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000028: 0x5080000000470C0C Mufu
    // 0x000030: 0x4C68100C04A70707 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000038: 0x4C68100C04B70808 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000048: 0xE043FF8E00C7FF10 Ipa
    temp_8 = in_attr6.x;
    // 0x000050: 0xE043FF8E40C7FF11 Ipa
    temp_9 = in_attr6.y;
    // 0x000058: 0xD830026FF1171004 Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000068: 0xD830024201171002 Texs
    temp_13 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyzw;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    temp_16 = temp_13.z;
    temp_17 = temp_13.w;
    // 0x000070: 0xD824036061171024 Texs
    temp_18 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_19 = temp_18.x;
    temp_20 = temp_18.y;
    temp_21 = temp_18.z;
    // 0x000078: 0xD82202000087071C Texs
    temp_22 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_23 = temp_22.x;
    temp_24 = temp_22.y;
    temp_25 = temp_22.z;
    // 0x000088: 0xE043FF8A00C7FF01 Ipa
    temp_26 = in_attr2.x;
    // 0x000090: 0xE043FF8A40C7FF09 Ipa
    temp_27 = in_attr2.y;
    // 0x000098: 0xE043FF8A80C7FF0A Ipa
    temp_28 = in_attr2.z;
    // 0x0000A8: 0xE043FF8900C7FF0D Ipa
    temp_29 = in_attr1.x;
    // 0x0000B0: 0xE043FF8940C7FF0E Ipa
    temp_30 = in_attr1.y;
    // 0x0000B8: 0xE043FF8800C7FF14 Ipa
    temp_31 = in_attr0.x;
    // 0x0000C8: 0xE043FF8980C7FF0F Ipa
    temp_32 = in_attr1.z;
    // 0x0000D0: 0xE043FF8840C7FF15 Ipa
    temp_33 = in_attr0.y;
    // 0x0000D8: 0xE043FF8880C7FF11 Ipa
    temp_34 = in_attr0.z;
    // 0x0000E8: 0x5C6810000017010B Fmul
    temp_35 = temp_26 * temp_26;
    // 0x0000F0: 0x5C68100000D70D10 Fmul
    temp_36 = temp_29 * temp_29;
    // 0x0000F8: 0x5C68100001471416 Fmul
    temp_37 = temp_31 * temp_31;
    // 0x000108: 0x59A005800097090B Ffma
    temp_38 = fma(temp_27, temp_27, temp_35);
    // 0x000110: 0x59A0080000E70E10 Ffma
    temp_39 = fma(temp_30, temp_30, temp_36);
    // 0x000118: 0x59A00B0001571516 Ffma
    temp_40 = fma(temp_33, temp_33, temp_37);
    // 0x000128: 0x59A0058000A70A0B Ffma
    temp_41 = fma(temp_28, temp_28, temp_38);
    // 0x000130: 0x5080000000570B0B Mufu
    temp_42 = inversesqrt(temp_41);
    // 0x000138: 0x59A0080000F70F10 Ffma
    temp_43 = fma(temp_32, temp_32, temp_39);
    // 0x000148: 0x5080000000571010 Mufu
    temp_44 = inversesqrt(temp_43);
    // 0x000150: 0x59A00B0001171116 Ffma
    temp_45 = fma(temp_34, temp_34, temp_40);
    // 0x000158: 0x5080000000571616 Mufu
    temp_46 = inversesqrt(temp_45);
    // 0x000168: 0x5C68100000B70112 Fmul
    temp_47 = temp_26 * temp_42;
    // 0x000170: 0x5C68100000B70913 Fmul
    temp_48 = temp_27 * temp_42;
    // 0x000178: 0x5C68100000B70A0A Fmul
    temp_49 = temp_28 * temp_42;
    // 0x000188: 0x5C68100001070D0D Fmul
    temp_50 = temp_29 * temp_44;
    // 0x000190: 0x5C68100001070E0E Fmul
    temp_51 = temp_30 * temp_44;
    // 0x000198: 0x5C68100001070F0F Fmul
    temp_52 = temp_32 * temp_44;
    // 0x0001A8: 0x5C68100001671414 Fmul
    temp_53 = temp_31 * temp_46;
    // 0x0001B0: 0x5C68100001671515 Fmul
    temp_54 = temp_33 * temp_46;
    // 0x0001B8: 0x5C68100001671111 Fmul
    temp_55 = temp_34 * temp_46;
    // 0x0001C8: 0xF0F0000034270000 Depbar
    // 0x0001D0: 0x5C68100000570501 Fmul
    temp_56 = temp_12 * temp_12;
    // 0x0001D8: 0x5C68100000571212 Fmul
    temp_57 = temp_47 * temp_12;
    // 0x0001E8: 0x5C68100000571313 Fmul
    temp_58 = temp_48 * temp_12;
    // 0x0001F0: 0x5C68100000570A0A Fmul
    temp_59 = temp_49 * temp_12;
    // 0x0001F8: 0x4BB1839406072107 Fsetp
    temp_60 = temp_17 < fp_c5.data[24].x;
    // 0x000208: 0x59A0008000470401 Ffma
    temp_61 = fma(temp_11, temp_11, temp_56);
    // 0x000210: 0x59A0090000470D0D Ffma
    temp_62 = fma(temp_50, temp_11, temp_57);
    // 0x000218: 0x59A0098000470E0E Ffma
    temp_63 = fma(temp_51, temp_11, temp_58);
    // 0x000228: 0x59A0050000470F0A Ffma
    temp_64 = fma(temp_52, temp_11, temp_59);
    // 0x000230: 0x385D103F80070101 Fadd
    temp_65 = 0.0 - temp_61;
    temp_66 = temp_65 + 1.0;
    temp_67 = clamp(temp_66, 0.0, 1.0);
    // 0x000238: 0x508000000087010B Mufu
    temp_68 = sqrt(temp_67);
    // 0x000248: 0x59A0068000B7140D Ffma
    temp_69 = fma(temp_53, temp_68, temp_62);
    // 0x000250: 0x59A0070000B7150E Ffma
    temp_70 = fma(temp_54, temp_68, temp_63);
    // 0x000258: 0x59A0050000B7110A Ffma
    temp_71 = fma(temp_55, temp_68, temp_64);
    // 0x000268: 0x5C68100000D70D01 Fmul
    temp_72 = temp_69 * temp_69;
    // 0x000270: 0x59A0008000E70E01 Ffma
    temp_73 = fma(temp_70, temp_70, temp_72);
    // 0x000278: 0x59A0008000A70A04 Ffma
    temp_74 = fma(temp_71, temp_71, temp_73);
    // 0x000288: 0x5080000000570404 Mufu
    temp_75 = inversesqrt(temp_74);
    // 0x000290: 0x5C68100000470A12 Fmul
    temp_76 = temp_71 * temp_75;
    // 0x000298: 0x5C68100000470E01 Fmul
    temp_77 = temp_70 * temp_75;
    // 0x0002A8: 0x5C68100000470D0E Fmul
    temp_78 = temp_69 * temp_75;
    // 0x0002B0: 0x4C68100C0067120B Fmul
    temp_79 = temp_76 * fp_c3.data[1].z;
    // 0x0002B8: 0x4C68100C0027120A Fmul
    temp_80 = temp_76 * fp_c3.data[0].z;
    // 0x0002C8: 0x49A0058C0057010B Ffma
    temp_81 = fma(temp_77, fp_c3.data[1].y, temp_79);
    // 0x0002D0: 0x49A0050C00170105 Ffma
    temp_82 = fma(temp_77, fp_c3.data[0].y, temp_80);
    // 0x0002D8: 0x49A0058C00470E0B Ffma
    temp_83 = fma(temp_78, fp_c3.data[1].x, temp_81);
    // 0x0002E8: 0x49A0028C00070E05 Ffma
    temp_84 = fma(temp_78, fp_c3.data[0].x, temp_82);
    // 0x0002F0: 0x4C69100C03E70B0B Fmul
    temp_85 = 0.0 - fp_c3.data[15].z;
    temp_86 = temp_83 * temp_85;
    // 0x0002F8: 0x4C68101808B70505 Fmul
    temp_87 = temp_84 * fp_c6.data[34].w;
    // 0x000308: 0x4C68101808B70B0B Fmul
    temp_88 = temp_86 * fp_c6.data[34].w;
    // 0x000310: 0xE24000000688000F Bra
    if (temp_60)
    {
        // 0x000318: 0x5C9807800FF70000 Mov
        // 0x000328: 0xE33000000007000F Kil
        discard;
    }
    // 0x000388: 0x49A0038400270505 Ffma
    temp_89 = fma(temp_87, fp_c1.data[0].z, temp_6);
    // 0x000390: 0x49A0040400270B0B Ffma
    temp_90 = fma(temp_88, fp_c1.data[0].z, temp_7);
    // 0x000398: 0xD8320221E0B7051A Texs
    temp_91 = texture(fp_t_tcb_22, vec2(temp_89, temp_90)).xyzw;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    temp_95 = temp_91.w;
    // 0x0003A8: 0xE043FF8B00C7FF23 Ipa
    temp_96 = in_attr3.x;
    // 0x0003B0: 0xE043FF8B40C7FF22 Ipa
    temp_97 = in_attr3.y;
    // 0x0003B8: 0xE043FF8B80C7FF16 Ipa
    temp_98 = in_attr3.z;
    // 0x0003C8: 0xF0F0000034270000 Depbar
    // 0x0003D0: 0x4C6810180A072424 Fmul
    temp_99 = temp_19 * fp_c6.data[40].x;
    // 0x0003D8: 0xE2900000BC000000 Ssy
    // 0x0003E8: 0x3868104110070808 Fmul
    temp_100 = temp_7 * 9.0;
    // 0x0003F0: 0x0103F0000007F02B Mov32i
    // 0x0003F8: 0x5CA8148000870A13 F2f
    temp_101 = floor(temp_100);
    // 0x000408: 0x4C68101402E72019 Fmul
    temp_102 = temp_16 * fp_c5.data[11].z;
    // 0x000410: 0x4C68101402C70202 Fmul
    temp_103 = temp_14 * fp_c5.data[11].x;
    // 0x000418: 0x4C68101402D70303 Fmul
    temp_104 = temp_15 * fp_c5.data[11].y;
    // 0x000428: 0x385D103F80070606 Fadd
    temp_105 = 0.0 - temp_21;
    temp_106 = temp_105 + 1.0;
    temp_107 = clamp(temp_106, 0.0, 1.0);
    // 0x000430: 0x4C69101805C70E08 Fmul
    temp_108 = 0.0 - fp_c6.data[23].x;
    temp_109 = temp_78 * temp_108;
    // 0x000438: 0x4C58301407B70218 Fadd
    temp_110 = 0.0 - fp_c5.data[30].w;
    temp_111 = temp_103 + temp_110;
    // 0x000448: 0x49A1041805D70108 Ffma
    temp_112 = 0.0 - fp_c6.data[23].y;
    temp_113 = fma(temp_77, temp_112, temp_109);
    // 0x000450: 0x51A00C1407B72518 Ffma
    temp_114 = fma(temp_20, temp_111, fp_c5.data[30].w);
    // 0x000458: 0x49A5041805E71208 Ffma
    temp_115 = 0.0 - fp_c6.data[23].z;
    temp_116 = fma(temp_76, temp_115, temp_113);
    temp_117 = clamp(temp_116, 0.0, 1.0);
    // 0x000468: 0x5C68100002372304 Fmul
    temp_118 = temp_96 * temp_96;
    // 0x000470: 0x59A0020002272204 Ffma
    temp_119 = fma(temp_97, temp_97, temp_118);
    // 0x000478: 0x59A0020001671604 Ffma
    temp_120 = fma(temp_98, temp_98, temp_119);
    // 0x000488: 0x5080000000570404 Mufu
    temp_121 = inversesqrt(temp_120);
    // 0x000490: 0x5C69100000472323 Fmul
    temp_122 = 0.0 - temp_121;
    temp_123 = temp_96 * temp_122;
    // 0x000498: 0x5C69100000472222 Fmul
    temp_124 = 0.0 - temp_121;
    temp_125 = temp_97 * temp_124;
    // 0x0004A8: 0x5C69100000471616 Fmul
    temp_126 = 0.0 - temp_121;
    temp_127 = temp_98 * temp_126;
    // 0x0004B0: 0x386013BF80072404 Fmnmx
    temp_128 = min(temp_99, 1.0);
    // 0x0004B8: 0x4C58301805C72305 Fadd
    temp_129 = 0.0 - fp_c6.data[23].x;
    temp_130 = temp_123 + temp_129;
    // 0x0004C8: 0x4C58301805D72209 Fadd
    temp_131 = 0.0 - fp_c6.data[23].y;
    temp_132 = temp_125 + temp_131;
    // 0x0004D0: 0x4C58301805E7160A Fadd
    temp_133 = 0.0 - fp_c6.data[23].z;
    temp_134 = temp_127 + temp_133;
    // 0x0004D8: 0x4C60178400170404 Fmnmx
    temp_135 = max(temp_128, fp_c1.data[0].y);
    // 0x0004E8: 0x5C6810000057050B Fmul
    temp_136 = temp_130 * temp_130;
    // 0x0004F0: 0x32A015BF0007042B Ffma
    temp_137 = fma(temp_135, 0.5, 0.5);
    // 0x0004F8: 0x59A005800097090B Ffma
    temp_138 = fma(temp_132, temp_132, temp_136);
    // 0x000508: 0x5C68120002B72B2B Fmul
    temp_139 = temp_137 * 0.5;
    temp_140 = temp_139 * temp_137;
    // 0x000510: 0x59A0058000A70A0B Ffma
    temp_141 = fma(temp_134, temp_134, temp_138);
    // 0x000518: 0x5080000000570B0B Mufu
    temp_142 = inversesqrt(temp_141);
    // 0x000528: 0x5C68100000B70505 Fmul
    temp_143 = temp_130 * temp_142;
    // 0x000530: 0x5C68100000B7090F Fmul
    temp_144 = temp_132 * temp_142;
    // 0x000538: 0x5C68100000B70A09 Fmul
    temp_145 = temp_134 * temp_142;
    // 0x000548: 0x51A402040017040A Ffma
    temp_146 = fma(temp_135, temp_135, fp_c1.data[0].y);
    temp_147 = clamp(temp_146, 0.0, 1.0);
    // 0x000550: 0x5C68100000570E10 Fmul
    temp_148 = temp_78 * temp_143;
    // 0x000558: 0x4C69101805C7050D Fmul
    temp_149 = 0.0 - fp_c6.data[23].x;
    temp_150 = temp_143 * temp_149;
    // 0x000568: 0x5C68100000572311 Fmul
    temp_151 = temp_123 * temp_143;
    // 0x000570: 0x5C68100000A70A05 Fmul
    temp_152 = temp_147 * temp_147;
    // 0x000578: 0x59A0080000F70110 Ffma
    temp_153 = fma(temp_77, temp_144, temp_148);
    // 0x000588: 0x49A1069805D70F0B Ffma
    temp_154 = 0.0 - fp_c6.data[23].y;
    temp_155 = fma(temp_144, temp_154, temp_150);
    // 0x000590: 0x59A0088000F7220F Ffma
    temp_156 = fma(temp_125, temp_144, temp_151);
    // 0x000598: 0x3868104180070711 Fmul
    temp_157 = temp_6 * 16.0;
    // 0x0005A8: 0x5C68100002370E07 Fmul
    temp_158 = temp_78 * temp_123;
    // 0x0005B0: 0x5CA8148001170A11 F2f
    temp_159 = floor(temp_157);
    // 0x0005B8: 0x59A4080000971210 Ffma
    temp_160 = fma(temp_76, temp_145, temp_153);
    temp_161 = clamp(temp_160, 0.0, 1.0);
    // 0x0005C8: 0x49A5059805E7090B Ffma
    temp_162 = 0.0 - fp_c6.data[23].z;
    temp_163 = fma(temp_145, temp_162, temp_155);
    temp_164 = clamp(temp_163, 0.0, 1.0);
    // 0x0005D0: 0x01040DF760C7F00D Mov32i
    // 0x0005D8: 0x59A407800097160F Ffma
    temp_165 = fma(temp_127, temp_145, temp_156);
    temp_166 = clamp(temp_165, 0.0, 1.0);
    // 0x0005E8: 0x59A2080000571005 Ffma
    temp_167 = 0.0 - temp_161;
    temp_168 = fma(temp_161, temp_152, temp_167);
    // 0x0005F0: 0x49A2068400070B09 Ffma
    temp_169 = fma(temp_164, fp_c1.data[0].x, -6.98316002);
    // 0x0005F8: 0x49A2068400070F0D Ffma
    temp_170 = fma(temp_166, fp_c1.data[0].x, -6.98316002);
    // 0x000608: 0x51A0028400371010 Ffma
    temp_171 = fma(temp_161, temp_168, fp_c1.data[0].w);
    // 0x000610: 0x32A008C18007132E Ffma
    temp_172 = fma(temp_101, 16.0, temp_159);
    // 0x000618: 0x5080000000471010 Mufu
    temp_173 = 1.0 / temp_171;
    // 0x000628: 0x59A0038002270105 Ffma
    temp_174 = fma(temp_77, temp_125, temp_158);
    // 0x000630: 0x5CB0118002E70A2E F2i
    temp_175 = trunc(temp_172);
    temp_176 = max(temp_175, 0.0);
    temp_177 = uint(temp_176);
    // 0x000638: 0x5C68100000D70F0D Fmul
    temp_178 = temp_166 * temp_170;
    // 0x000648: 0x4C58301407B71913 Fadd
    temp_179 = 0.0 - fp_c5.data[30].w;
    temp_180 = temp_102 + temp_179;
    // 0x000650: 0x5C68100000970B09 Fmul
    temp_181 = temp_164 * temp_169;
    // 0x000658: 0x4C6810180147080B Fmul
    temp_182 = temp_117 * fp_c6.data[5].x;
    // 0x000668: 0x4C58301407B7030F Fadd
    temp_183 = 0.0 - fp_c5.data[30].w;
    temp_184 = temp_104 + temp_183;
    // 0x000670: 0x59A4028001671205 Ffma
    temp_185 = fma(temp_76, temp_127, temp_174);
    temp_186 = clamp(temp_185, 0.0, 1.0);
    // 0x000678: 0x5C90008000D70011 Rro
    // 0x000688: 0x59A1040002B7080D Ffma
    temp_187 = 0.0 - temp_140;
    temp_188 = fma(temp_117, temp_187, temp_117);
    // 0x000690: 0x5080000000271111 Mufu
    temp_189 = exp2(temp_178);
    // 0x000698: 0x5C68100001070A07 Fmul
    temp_190 = temp_147 * temp_173;
    // 0x0006A8: 0x59A1028002B7050A Ffma
    temp_191 = 0.0 - temp_140;
    temp_192 = fma(temp_186, temp_191, temp_186);
    // 0x0006B0: 0x51A0099407B72513 Ffma
    temp_193 = fma(temp_20, temp_180, fp_c5.data[30].w);
    // 0x0006B8: 0x3848000000872E2C Shl
    temp_194 = int(temp_177) << 8;
    // 0x0006C8: 0x4C68101801670810 Fmul
    temp_195 = temp_117 * fp_c6.data[5].z;
    // 0x0006D0: 0x5C58100000D72B0D Fadd
    temp_196 = temp_140 + temp_188;
    // 0x0006D8: 0xEF94008200472C2C Ldc
    temp_197 = temp_194 + 0x2004;
    temp_198 = uint(temp_197) >> 2;
    temp_199 = temp_198 >> 2;
    temp_200 = int(temp_198) & 3;
    temp_201 = fp_c8.data[int(temp_199)][temp_200];
    // 0x0006E8: 0x5C58100000A72B0A Fadd
    temp_202 = temp_140 + temp_192;
    // 0x0006F0: 0x5080000000470D20 Mufu
    temp_203 = 1.0 / temp_196;
    // 0x0006F8: 0x5C90008000970009 Rro
    // 0x000708: 0x5080000000470A0A Mufu
    temp_204 = 1.0 / temp_202;
    // 0x000710: 0x59A1088001171314 Ffma
    temp_205 = 0.0 - temp_189;
    temp_206 = fma(temp_193, temp_205, temp_189);
    // 0x000718: 0x5080000000270909 Mufu
    temp_207 = exp2(temp_181);
    // 0x000728: 0x1E23EA2F98370B17 Fmul32i
    temp_208 = temp_182 * 0.318309873;
    // 0x000730: 0x1E23EA2F98371010 Fmul32i
    temp_209 = temp_195 * 0.318309873;
    // 0x000738: 0x4C6810180157080B Fmul
    temp_210 = temp_117 * fp_c6.data[5].y;
    // 0x000748: 0x5C68100000770707 Fmul
    temp_211 = temp_190 * temp_190;
    // 0x000750: 0x51A0079407B7250F Ffma
    temp_212 = fma(temp_20, temp_184, fp_c5.data[30].w);
    // 0x000758: 0x5C58100001471332 Fadd
    temp_213 = temp_193 + temp_206;
    // 0x000768: 0x4C98079808A7000D Mov
    // 0x000770: 0x59A1088001171815 Ffma
    temp_214 = 0.0 - temp_189;
    temp_215 = fma(temp_114, temp_214, temp_189);
    // 0x000778: 0x3868103F00070A2D Fmul
    temp_216 = temp_204 * 0.5;
    // 0x000788: 0x59A1080003271032 Ffma
    temp_217 = 0.0 - temp_213;
    temp_218 = fma(temp_209, temp_217, temp_209);
    // 0x000790: 0x1E23EA2F98370B10 Fmul32i
    temp_219 = temp_210 * 0.318309873;
    // 0x000798: 0x4C68101808770D0D Fmul
    temp_220 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x0007A8: 0x59A1088001170F11 Ffma
    temp_221 = 0.0 - temp_189;
    temp_222 = fma(temp_212, temp_221, temp_189);
    // 0x0007B0: 0x5C58100001571815 Fadd
    temp_223 = temp_114 + temp_215;
    // 0x0007B8: 0x5C68100002072D0A Fmul
    temp_224 = temp_216 * temp_203;
    // 0x0007C8: 0x5C58100001170F11 Fadd
    temp_225 = temp_212 + temp_222;
    // 0x0007D0: 0x59A10B8001571714 Ffma
    temp_226 = 0.0 - temp_223;
    temp_227 = fma(temp_208, temp_226, temp_208);
    // 0x0007D8: 0x5C68100000A7070B Fmul
    temp_228 = temp_211 * temp_224;
    // 0x0007E8: 0xEF5400000047FF14 Stl
    local_memory[1] = floatBitsToUint(temp_227);
    // 0x0007F0: 0x59A1048000971807 Ffma
    temp_229 = 0.0 - temp_207;
    temp_230 = fma(temp_114, temp_229, temp_207);
    // 0x0007F8: 0x59A1048000970F0A Ffma
    temp_231 = 0.0 - temp_207;
    temp_232 = fma(temp_212, temp_231, temp_207);
    // 0x000808: 0x59A1048000971309 Ffma
    temp_233 = 0.0 - temp_207;
    temp_234 = fma(temp_193, temp_233, temp_207);
    // 0x000810: 0x59A1080001171010 Ffma
    temp_235 = 0.0 - temp_225;
    temp_236 = fma(temp_219, temp_235, temp_219);
    // 0x000818: 0x5C68100000571217 Fmul
    temp_237 = temp_76 * temp_186;
    // 0x000828: 0xEF5400000007FF10 Stl
    local_memory[0] = floatBitsToUint(temp_236);
    // 0x000830: 0x5C68100000B70826 Fmul
    temp_238 = temp_117 * temp_228;
    // 0x000838: 0x5C58100000A70F0A Fadd
    temp_239 = temp_212 + temp_232;
    // 0x000848: 0x5C58100000971309 Fadd
    temp_240 = temp_193 + temp_234;
    // 0x000850: 0x5C58100000771807 Fadd
    temp_241 = temp_114 + temp_230;
    // 0x000858: 0x32A20B4000071717 Ffma
    temp_242 = 0.0 - temp_127;
    temp_243 = fma(temp_237, 2.0, temp_242);
    // 0x000868: 0x49A203180AE70610 Ffma
    temp_244 = 0.0 - temp_107;
    temp_245 = fma(temp_107, fp_c6.data[43].z, temp_244);
    // 0x000870: 0x5B6603800FF72C07 Isetp
    temp_246 = floatBitsToUint(temp_201) <= 0u;
    // 0x000878: 0x3858103F80071024 Fadd
    temp_247 = temp_245 + 1.0;
    // 0x000888: 0x5C68100000570110 Fmul
    temp_248 = temp_77 * temp_186;
    // 0x000890: 0x59A4120002471924 Ffma
    temp_249 = fma(temp_102, temp_247, temp_247);
    temp_250 = clamp(temp_249, 0.0, 1.0);
    // 0x000898: 0x32A211400007102A Ffma
    temp_251 = 0.0 - temp_125;
    temp_252 = fma(temp_248, 2.0, temp_251);
    // 0x0008A8: 0x51A00D9801570D08 Ffma
    temp_253 = fma(temp_220, temp_93, fp_c6.data[5].y);
    // 0x0008B0: 0x51A00F1801670D0B Ffma
    temp_254 = fma(temp_220, temp_94, fp_c6.data[5].z);
    // 0x0008B8: 0x51A00D1801470D0D Ffma
    temp_255 = fma(temp_220, temp_92, fp_c6.data[5].x);
    // 0x0008C8: 0x5C68100000870A08 Fmul
    temp_256 = temp_239 * temp_253;
    // 0x0008D0: 0x5C68100000B70909 Fmul
    temp_257 = temp_240 * temp_254;
    // 0x0008D8: 0x5C68100000D70707 Fmul
    temp_258 = temp_241 * temp_255;
    // 0x0008E8: 0x49A203180AD7060D Ffma
    temp_259 = 0.0 - temp_107;
    temp_260 = fma(temp_107, fp_c6.data[43].y, temp_259);
    // 0x0008F0: 0x5C9807800FF7000B Mov
    // 0x0008F8: 0x5C9807800FF7000A Mov
    // 0x000908: 0x5C68100002670827 Fmul
    temp_261 = temp_256 * temp_238;
    // 0x000910: 0x5C68100002670928 Fmul
    temp_262 = temp_257 * temp_238;
    // 0x000918: 0x5C68100002670726 Fmul
    temp_263 = temp_258 * temp_238;
    // 0x000928: 0x49A203180AC70607 Ffma
    temp_264 = 0.0 - temp_107;
    temp_265 = fma(temp_107, fp_c6.data[43].x, temp_264);
    // 0x000930: 0x3858103F80070D20 Fadd
    temp_266 = temp_260 + 1.0;
    // 0x000938: 0x5C68100000570E0D Fmul
    temp_267 = temp_78 * temp_186;
    // 0x000948: 0x5C9807800FF70009 Mov
    // 0x000950: 0x5C9807800FF70008 Mov
    // 0x000958: 0x5C9807800FF70006 Mov
    // 0x000968: 0x3858103F80070729 Fadd
    temp_268 = temp_265 + 1.0;
    // 0x000970: 0x5C9807800FF70007 Mov
    // 0x000978: 0x59A4100002070320 Ffma
    temp_269 = fma(temp_104, temp_266, temp_266);
    temp_270 = clamp(temp_269, 0.0, 1.0);
    // 0x000988: 0x32A211C000070D2F Ffma
    temp_271 = 0.0 - temp_123;
    temp_272 = fma(temp_267, 2.0, temp_271);
    // 0x000990: 0x1E23E22F98372626 Fmul32i
    temp_273 = temp_263 * 0.159154937;
    // 0x000998: 0x1E23E22F98372727 Fmul32i
    temp_274 = temp_261 * 0.159154937;
    // 0x0009A8: 0x59A4148002970229 Ffma
    temp_275 = fma(temp_103, temp_268, temp_268);
    temp_276 = clamp(temp_275, 0.0, 1.0);
    // 0x0009B0: 0x1E23E22F98372828 Fmul32i
    temp_277 = temp_262 * 0.159154937;
    // 0x0009B8: 0xF0F800000000000F Sync
    temp_278 = 0.0;
    temp_279 = 0.0;
    temp_280 = 0.0;
    temp_281 = 0.0;
    temp_282 = 0.0;
    temp_283 = 0.0;
    temp_284 = 0.0;
    temp_285 = 0.0;
    temp_286 = 0.0;
    temp_287 = 0.0;
    temp_288 = 0.0;
    temp_289 = 0.0;
    if (!temp_246)
    {
        // 0x0009C8: 0x5C9807800FF70030 Mov
        temp_290 = 0;
        do
        {
            // 0x0009D0: 0x5C18020003072E15 Iscadd
            temp_292 = int(temp_177) << 4;
            temp_293 = temp_292 + temp_290;
            // 0x0009D8: 0xE003FF87CFF7FF33 Ipa
            // 0x0009E8: 0x1C00000000173030 Iadd32i
            temp_294 = temp_290 + 1;
            // 0x0009F0: 0xE003FF87CFF7FF35 Ipa
            // 0x0009F8: 0x3848000000471515 Shl
            temp_295 = temp_293 << 4;
            // 0x000A08: 0xE003FF87CFF7FF34 Ipa
            // 0x000A10: 0x5B6C038002C7300F Isetp
            temp_291 = uint(temp_294) >= floatBitsToUint(temp_201);
            // 0x000A18: 0xE290000057000000 Ssy
            // 0x000A28: 0xEF94008200071515 Ldc
            temp_296 = temp_295 + 0x2000;
            temp_297 = uint(temp_296) >> 2;
            temp_298 = temp_297 >> 2;
            temp_299 = int(temp_297) & 3;
            temp_300 = fp_c8.data[int(temp_298)][temp_299];
            // 0x000A30: 0x5080000000473333 Mufu
            // 0x000A38: 0x5080000000473535 Mufu
            // 0x000A48: 0x5080000000473434 Mufu
            // 0x000A50: 0xE043FF8D0337FF33 Ipa
            temp_301 = in_attr5.x;
            // 0x000A58: 0xE043FF8D8357FF35 Ipa
            temp_302 = in_attr5.z;
            // 0x000A68: 0xE043FF8D4347FF34 Ipa
            temp_303 = in_attr5.y;
            // 0x000A70: 0x3848000000671531 Shl
            temp_304 = floatBitsToInt(temp_300) << 6;
            // 0x000A78: 0xEF9500800107310C Ldc
            temp_305 = temp_304 + 16;
            temp_306 = uint(temp_305) >> 2;
            temp_307 = temp_306 >> 2;
            temp_308 = int(temp_306) & 3;
            temp_309 = fp_c8.data[int(temp_307)][temp_308];
            temp_310 = int(temp_306) + 1;
            temp_311 = uint(temp_310) >> 2;
            temp_312 = temp_310 & 3;
            temp_313 = fp_c8.data[int(temp_311)][temp_312];
            // 0x000A88: 0xEF95008001873110 Ldc
            temp_314 = temp_304 + 24;
            temp_315 = uint(temp_314) >> 2;
            temp_316 = temp_315 >> 2;
            temp_317 = int(temp_315) & 3;
            temp_318 = fp_c8.data[int(temp_316)][temp_317];
            temp_319 = int(temp_315) + 1;
            temp_320 = uint(temp_319) >> 2;
            temp_321 = temp_319 & 3;
            temp_322 = fp_c8.data[int(temp_320)][temp_321];
            // 0x000A90: 0xEF95008002073114 Ldc
            temp_323 = temp_304 + 32;
            temp_324 = uint(temp_323) >> 2;
            temp_325 = temp_324 >> 2;
            temp_326 = int(temp_324) & 3;
            temp_327 = fp_c8.data[int(temp_325)][temp_326];
            temp_328 = int(temp_324) + 1;
            temp_329 = uint(temp_328) >> 2;
            temp_330 = temp_328 & 3;
            temp_331 = fp_c8.data[int(temp_329)][temp_330];
            // 0x000A98: 0x5C58300003370C33 Fadd
            temp_332 = 0.0 - temp_301;
            temp_333 = temp_309 + temp_332;
            // 0x000AA8: 0x5C58300003470D34 Fadd
            temp_334 = 0.0 - temp_303;
            temp_335 = temp_313 + temp_334;
            // 0x000AB0: 0x5C58300003571035 Fadd
            temp_336 = 0.0 - temp_302;
            temp_337 = temp_318 + temp_336;
            // 0x000AB8: 0x5C68100003373336 Fmul
            temp_338 = temp_333 * temp_333;
            // 0x000AC8: 0x59A11A8003571111 Ffma
            temp_339 = 0.0 - temp_337;
            temp_340 = fma(temp_322, temp_339, temp_337);
            // 0x000AD0: 0x59A01B0003473436 Ffma
            temp_341 = fma(temp_335, temp_335, temp_338);
            // 0x000AD8: 0x59A01B0001171137 Ffma
            temp_342 = fma(temp_340, temp_340, temp_341);
            // 0x000AE8: 0x508000000057370C Mufu
            temp_343 = inversesqrt(temp_342);
            // 0x000AF0: 0x5080000000873737 Mufu
            temp_344 = sqrt(temp_342);
            // 0x000AF8: 0x5C68100000C7330D Fmul
            temp_345 = temp_333 * temp_343;
            // 0x000B08: 0x5C68100000C73410 Fmul
            temp_346 = temp_335 * temp_343;
            // 0x000B10: 0x5C68100000C7110C Fmul
            temp_347 = temp_340 * temp_343;
            // 0x000B18: 0x5C69100001470D0D Fmul
            temp_348 = 0.0 - temp_327;
            temp_349 = temp_345 * temp_348;
            // 0x000B28: 0xEF94008002873114 Ldc
            temp_350 = temp_304 + 40;
            temp_351 = uint(temp_350) >> 2;
            temp_352 = temp_351 >> 2;
            temp_353 = int(temp_351) & 3;
            temp_354 = fp_c8.data[int(temp_352)][temp_353];
            // 0x000B30: 0x59A106800157100D Ffma
            temp_355 = 0.0 - temp_331;
            temp_356 = fma(temp_346, temp_355, temp_349);
            // 0x000B38: 0xEF95008003873110 Ldc
            temp_357 = temp_304 + 56;
            temp_358 = uint(temp_357) >> 2;
            temp_359 = temp_358 >> 2;
            temp_360 = int(temp_358) & 3;
            temp_361 = fp_c8.data[int(temp_359)][temp_360];
            temp_362 = int(temp_358) + 1;
            temp_363 = uint(temp_362) >> 2;
            temp_364 = temp_362 & 3;
            temp_365 = fp_c8.data[int(temp_363)][temp_364];
            // 0x000B48: 0x010404000007F015 Mov32i
            // 0x000B50: 0x59A1068001470C14 Ffma
            temp_366 = 0.0 - temp_354;
            temp_367 = fma(temp_347, temp_366, temp_356);
            // 0x000B58: 0xEF9500800307310C Ldc
            temp_368 = temp_304 + 48;
            temp_369 = uint(temp_368) >> 2;
            temp_370 = temp_369 >> 2;
            temp_371 = int(temp_369) & 3;
            temp_372 = fp_c8.data[int(temp_370)][temp_371];
            temp_373 = int(temp_369) + 1;
            temp_374 = uint(temp_373) >> 2;
            temp_375 = temp_373 & 3;
            temp_376 = fp_c8.data[int(temp_374)][temp_375];
            // 0x000B68: 0x59A4088001071410 Ffma
            temp_377 = fma(temp_367, temp_361, temp_365);
            temp_378 = clamp(temp_377, 0.0, 1.0);
            // 0x000B70: 0x59A4068003770C37 Ffma
            temp_379 = fma(temp_372, temp_344, temp_376);
            temp_380 = clamp(temp_379, 0.0, 1.0);
            // 0x000B78: 0x33A00AC000073714 Ffma
            temp_381 = fma(temp_380, -2.0, 3.0);
            // 0x000B88: 0x5C68100003773711 Fmul
            temp_382 = temp_380 * temp_380;
            // 0x000B90: 0x33A00AC000071015 Ffma
            temp_383 = fma(temp_378, -2.0, 3.0);
            // 0x000B98: 0x5C68100001071010 Fmul
            temp_384 = temp_378 * temp_378;
            // 0x000BA8: 0x5C68100001171411 Fmul
            temp_385 = temp_381 * temp_382;
            // 0x000BB0: 0x39585042F0073514 Fadd
            temp_386 = abs(temp_337);
            temp_387 = temp_386 + -120.0;
            // 0x000BB8: 0x5C68100001571010 Fmul
            temp_388 = temp_384 * temp_383;
            // 0x000BC8: 0x1EABD4CCCCD71414 Fmul32i
            temp_389 = temp_387 * -0.0500000007;
            temp_390 = clamp(temp_389, 0.0, 1.0);
            // 0x000BD0: 0x5C68100001171010 Fmul
            temp_391 = temp_388 * temp_385;
            // 0x000BD8: 0x36247F9000171111 Xmad
            temp_392 = floatBitsToUint(temp_385) >> 16;
            temp_393 = int(temp_392) << 16;
            // 0x000BE8: 0x5C68100001071410 Fmul
            temp_394 = temp_390 * temp_391;
            // 0x000BF0: 0x5BB383800FF71007 Fsetp
            temp_395 = temp_394 <= 0.0;
            // 0x000BF8: 0x7A05083C0F00FF11 Hadd2
            temp_290 = temp_294;
            temp_396 = uint(temp_393);
            temp_397 = temp_278;
            temp_398 = temp_279;
            temp_399 = temp_280;
            temp_400 = temp_281;
            temp_401 = temp_282;
            temp_402 = temp_283;
            if (temp_395)
            {
                temp_403 = unpackHalf2x16(uint(temp_393)).y;
                temp_404 = packHalf2x16(vec2(1.0, temp_403));
                temp_396 = temp_404;
            }
            // 0x000C08: 0x5D2103902FF71107 Hsetp2
            temp_405 = unpackHalf2x16(temp_396).x;
            temp_406 = temp_405 == 0.0;
            // 0x000C10: 0xF0F800000008000F Sync
            if (temp_406)
            {
                // 0x000C18: 0x5080000000470C0C Mufu
                temp_407 = 1.0 / temp_372;
                // 0x000C28: 0x5C69100000C70D14 Fmul
                temp_408 = 0.0 - temp_407;
                temp_409 = temp_376 * temp_408;
                // 0x000C30: 0x5C60138001473511 Fmnmx
                temp_410 = min(temp_337, temp_409);
                // 0x000C38: 0x5C61178001171411 Fmnmx
                temp_411 = 0.0 - temp_409;
                temp_412 = max(temp_411, temp_410);
                // 0x000C48: 0x59A01B0001171136 Ffma
                temp_413 = fma(temp_412, temp_412, temp_341);
                // 0x000C50: 0x508000000057360C Mufu
                temp_414 = inversesqrt(temp_413);
                // 0x000C58: 0x5080000000873636 Mufu
                temp_415 = sqrt(temp_413);
                // 0x000C68: 0x5C68100000C73333 Fmul
                temp_416 = temp_333 * temp_414;
                // 0x000C70: 0x5C68100000C73434 Fmul
                temp_417 = temp_335 * temp_414;
                // 0x000C78: 0x5C68100000C71111 Fmul
                temp_418 = temp_412 * temp_414;
                // 0x000C88: 0xEF94008002C7310C Ldc
                temp_419 = temp_304 + 44;
                temp_420 = uint(temp_419) >> 2;
                temp_421 = temp_420 >> 2;
                temp_422 = int(temp_420) & 3;
                temp_423 = fp_c8.data[int(temp_421)][temp_422];
                // 0x000C90: 0x5C58100003372335 Fadd
                temp_424 = temp_123 + temp_416;
                // 0x000C98: 0x5C5810000347220D Fadd
                temp_425 = temp_125 + temp_417;
                // 0x000CA8: 0x5C58100001171615 Fadd
                temp_426 = temp_127 + temp_418;
                // 0x000CB0: 0x5C68100003573514 Fmul
                temp_427 = temp_424 * temp_424;
                // 0x000CB8: 0x59A00A0000D70D14 Ffma
                temp_428 = fma(temp_425, temp_425, temp_427);
                // 0x000CC8: 0x59A00A0001571514 Ffma
                temp_429 = fma(temp_426, temp_426, temp_428);
                // 0x000CD0: 0x5080000000571414 Mufu
                temp_430 = inversesqrt(temp_429);
                // 0x000CD8: 0x5C68100001473535 Fmul
                temp_431 = temp_424 * temp_430;
                // 0x000CE8: 0x5C68100001470D0D Fmul
                temp_432 = temp_425 * temp_430;
                // 0x000CF0: 0x5C68100001471515 Fmul
                temp_433 = temp_426 * temp_430;
                // 0x000CF8: 0x5C68100003370E14 Fmul
                temp_434 = temp_78 * temp_416;
                // 0x000D08: 0x5C68100003573333 Fmul
                temp_435 = temp_416 * temp_431;
                // 0x000D10: 0x5C68100003570E35 Fmul
                temp_436 = temp_78 * temp_431;
                // 0x000D18: 0x59A00A0003470114 Ffma
                temp_437 = fma(temp_77, temp_417, temp_434);
                // 0x000D28: 0x59A0198000D73434 Ffma
                temp_438 = fma(temp_417, temp_432, temp_435);
                // 0x000D30: 0x59A01A8000D7010D Ffma
                temp_439 = fma(temp_77, temp_432, temp_436);
                // 0x000D38: 0x51A4020400170433 Ffma
                temp_440 = fma(temp_135, temp_135, fp_c1.data[0].y);
                temp_441 = clamp(temp_440, 0.0, 1.0);
                // 0x000D48: 0x59A00A0001171214 Ffma
                temp_442 = fma(temp_76, temp_418, temp_437);
                // 0x000D50: 0x59A41A0001571134 Ffma
                temp_443 = fma(temp_418, temp_433, temp_438);
                temp_444 = clamp(temp_443, 0.0, 1.0);
                // 0x000D58: 0x59A406800157120D Ffma
                temp_445 = fma(temp_76, temp_433, temp_439);
                temp_446 = clamp(temp_445, 0.0, 1.0);
                // 0x000D68: 0x5080000000470C15 Mufu
                temp_447 = 1.0 / temp_423;
                // 0x000D70: 0x5C68100003373335 Fmul
                temp_448 = temp_441 * temp_441;
                // 0x000D78: 0x59A2068000D73535 Ffma
                temp_449 = 0.0 - temp_446;
                temp_450 = fma(temp_448, temp_446, temp_449);
                // 0x000D88: 0x51A01A8400370D35 Ffma
                temp_451 = fma(temp_446, temp_450, fp_c1.data[0].w);
                // 0x000D90: 0xEF9500800007310C Ldc
                temp_452 = uint(temp_304) >> 2;
                temp_453 = temp_452 >> 2;
                temp_454 = int(temp_452) & 3;
                temp_455 = fp_c8.data[int(temp_453)][temp_454];
                temp_456 = int(temp_452) + 1;
                temp_457 = uint(temp_456) >> 2;
                temp_458 = temp_456 & 3;
                temp_459 = fp_c8.data[int(temp_457)][temp_458];
                // 0x000D98: 0x51A01B0400471515 Ffma
                temp_460 = fma(temp_447, temp_415, fp_c1.data[1].x);
                // 0x000DA8: 0x5080000000473535 Mufu
                temp_461 = 1.0 / temp_451;
                // 0x000DB0: 0x01040DF760C7F036 Mov32i
                // 0x000DB8: 0x5080000000471515 Mufu
                temp_462 = 1.0 / temp_460;
                // 0x000DC8: 0x5C68100003573335 Fmul
                temp_463 = temp_441 * temp_461;
                // 0x000DD0: 0xEF94008000873131 Ldc
                temp_464 = temp_304 + 8;
                temp_465 = uint(temp_464) >> 2;
                temp_466 = temp_465 >> 2;
                temp_467 = int(temp_465) & 3;
                temp_468 = fp_c8.data[int(temp_466)][temp_467];
                // 0x000DD8: 0x49A21B0400073411 Ffma
                temp_469 = fma(temp_444, fp_c1.data[0].x, -6.98316002);
                // 0x000DE8: 0x1E23FB3333371533 Fmul32i
                temp_470 = temp_462 * 1.39999998;
                // 0x000DF0: 0x5C68100003573535 Fmul
                temp_471 = temp_463 * temp_463;
                // 0x000DF8: 0x5C68100001173434 Fmul
                temp_472 = temp_444 * temp_469;
                // 0x000E08: 0x5C5C30000FF71411 Fadd
                temp_473 = temp_442 + -0.0;
                temp_474 = clamp(temp_473, 0.0, 1.0);
                // 0x000E10: 0x5C68100003373333 Fmul
                temp_475 = temp_470 * temp_470;
                // 0x000E18: 0x5C90008003470034 Rro
                // 0x000E28: 0x59A1088001172B15 Ffma
                temp_476 = 0.0 - temp_474;
                temp_477 = fma(temp_140, temp_476, temp_474);
                // 0x000E30: 0x5080000000273434 Mufu
                temp_478 = exp2(temp_472);
                // 0x000E38: 0x59A1198003371433 Ffma
                temp_479 = 0.0 - temp_475;
                temp_480 = fma(temp_442, temp_479, temp_475);
                // 0x000E48: 0x5C58100001572B15 Fadd
                temp_481 = temp_140 + temp_477;
                // 0x000E50: 0x5C5C100003371433 Fadd
                temp_482 = temp_442 + temp_480;
                temp_483 = clamp(temp_482, 0.0, 1.0);
                // 0x000E58: 0x5080000000471515 Mufu
                temp_484 = 1.0 / temp_481;
                // 0x000E68: 0x59A11A0003470F14 Ffma
                temp_485 = 0.0 - temp_478;
                temp_486 = fma(temp_212, temp_485, temp_478);
                // 0x000E70: 0x5C68100000C7100C Fmul
                temp_487 = temp_394 * temp_455;
                // 0x000E78: 0x5C68100000D7100D Fmul
                temp_488 = temp_394 * temp_459;
                // 0x000E88: 0x5C68100001572D15 Fmul
                temp_489 = temp_216 * temp_484;
                // 0x000E90: 0x5C58100001470F14 Fadd
                temp_490 = temp_212 + temp_486;
                // 0x000E98: 0x5C68100001573515 Fmul
                temp_491 = temp_471 * temp_489;
                // 0x000EA8: 0x5C68100000D71414 Fmul
                temp_492 = temp_490 * temp_488;
                // 0x000EB0: 0x5C68100003370D0D Fmul
                temp_493 = temp_488 * temp_483;
                // 0x000EB8: 0x5C68100003171031 Fmul
                temp_494 = temp_394 * temp_468;
                // 0x000EC8: 0x59A11A0003471810 Ffma
                temp_495 = 0.0 - temp_478;
                temp_496 = fma(temp_114, temp_495, temp_478);
                // 0x000ED0: 0x59A11A0003471334 Ffma
                temp_497 = 0.0 - temp_478;
                temp_498 = fma(temp_193, temp_497, temp_478);
                // 0x000ED8: 0x5C68100001571115 Fmul
                temp_499 = temp_474 * temp_491;
                // 0x000EE8: 0x49A0050400670D0A Ffma
                temp_500 = fma(temp_493, fp_c1.data[1].z, temp_278);
                // 0x000EF0: 0x5C58100001071810 Fadd
                temp_501 = temp_114 + temp_496;
                // 0x000EF8: 0x5C58100003471334 Fadd
                temp_502 = temp_193 + temp_498;
                // 0x000F08: 0x5C68100001571414 Fmul
                temp_503 = temp_492 * temp_499;
                // 0x000F10: 0x5C68100000C71010 Fmul
                temp_504 = temp_501 * temp_487;
                // 0x000F18: 0x5C68100003173434 Fmul
                temp_505 = temp_502 * temp_494;
                // 0x000F28: 0x5C68100003370C0C Fmul
                temp_506 = temp_487 * temp_483;
                // 0x000F30: 0x5C68100003373133 Fmul
                temp_507 = temp_494 * temp_483;
                // 0x000F38: 0x49A0030400571406 Ffma
                temp_508 = fma(temp_503, fp_c1.data[1].y, temp_279);
                // 0x000F48: 0x5C68100001571010 Fmul
                temp_509 = temp_504 * temp_499;
                // 0x000F50: 0x5C68100001573415 Fmul
                temp_510 = temp_505 * temp_499;
                // 0x000F58: 0x49A0058400670C0B Ffma
                temp_511 = fma(temp_506, fp_c1.data[1].z, temp_280);
                // 0x000F68: 0x49A0048400673309 Ffma
                temp_512 = fma(temp_507, fp_c1.data[1].z, temp_281);
                // 0x000F70: 0x49A0038400571007 Ffma
                temp_513 = fma(temp_509, fp_c1.data[1].y, temp_282);
                // 0x000F78: 0x49A0040400571508 Ffma
                temp_514 = fma(temp_510, fp_c1.data[1].y, temp_283);
                // 0x000F88: 0xF0F800000007000F Sync
                temp_397 = temp_500;
                temp_398 = temp_508;
                temp_399 = temp_511;
                temp_400 = temp_512;
                temp_401 = temp_513;
                temp_402 = temp_514;
            }
            // 0x000F90: 0xE2400FFFA389000F Bra
            temp_278 = temp_397;
            temp_279 = temp_398;
            temp_280 = temp_399;
            temp_281 = temp_400;
            temp_282 = temp_401;
            temp_283 = temp_402;
            temp_284 = temp_398;
            temp_285 = temp_402;
            temp_286 = temp_401;
            temp_287 = temp_400;
            temp_288 = temp_399;
            temp_289 = temp_397;
        }
        while (!temp_291);
        // 0x000F98: 0xF0F800000007000F Sync
    }
    // 0x000FA8: 0x5C62578000170E0C Fmnmx
    temp_515 = abs(temp_78);
    temp_516 = abs(temp_77);
    temp_517 = max(temp_515, temp_516);
    // 0x000FB0: 0xE003FF87CFF7FF2B Ipa
    // 0x000FB8: 0x5C62578002A72F0D Fmnmx
    temp_518 = abs(temp_272);
    temp_519 = abs(temp_252);
    temp_520 = max(temp_518, temp_519);
    // 0x000FC8: 0xEF4410000047FF34 Ldl
    temp_521 = uintBitsToFloat(local_memory[1]);
    // 0x000FD0: 0x5C60578000C7120C Fmnmx
    temp_522 = abs(temp_76);
    temp_523 = max(temp_522, temp_517);
    // 0x000FD8: 0xEF4410000007FF33 Ldl
    temp_524 = uintBitsToFloat(local_memory[0]);
    // 0x000FE8: 0x38681040E0070431 Fmul
    temp_525 = temp_135 * 7.0;
    // 0x000FF0: 0x5080000000470C0C Mufu
    temp_526 = 1.0 / temp_523;
    // 0x000FF8: 0x5C60578000D7170D Fmnmx
    temp_527 = abs(temp_243);
    temp_528 = max(temp_527, temp_520);
    // 0x001008: 0x010000000017F014 Mov32i
    // 0x001010: 0x5080000000470D0D Mufu
    temp_529 = 1.0 / temp_528;
    // 0x001018: 0x3868104080070423 Fmul
    temp_530 = temp_135 * 4.0;
    // 0x001028: 0x5C69100000C71212 Fmul
    temp_531 = 0.0 - temp_526;
    temp_532 = temp_76 * temp_531;
    // 0x001030: 0x5C68100000C70E10 Fmul
    temp_533 = temp_78 * temp_526;
    // 0x001038: 0x5080000000472B2B Mufu
    // 0x001048: 0x5C68100000C70111 Fmul
    temp_534 = temp_77 * temp_526;
    // 0x001050: 0x5C68100000D72F15 Fmul
    temp_535 = temp_272 * temp_529;
    // 0x001058: 0x5C68100000D72A16 Fmul
    temp_536 = temp_252 * temp_529;
    // 0x001068: 0x5C69100000D71717 Fmul
    temp_537 = 0.0 - temp_529;
    temp_538 = temp_243 * temp_537;
    // 0x001070: 0xC0BA0163EFF7100C Tex
    temp_539 = textureLod(fp_t_tcb_16, vec3(temp_533, temp_534, temp_532), 0.0).xyz;
    temp_540 = temp_539.x;
    temp_541 = temp_539.y;
    temp_542 = temp_539.z;
    // 0x001078: 0x5C98078001270022 Mov
    // 0x001088: 0xC1BA0143F3171414 Tex
    temp_543 = textureLod(fp_t_tcb_14, vec4(temp_535, temp_536, temp_538, float(1)), temp_525).xyz;
    temp_544 = temp_543.x;
    temp_545 = temp_543.y;
    temp_546 = temp_543.z;
    // 0x001090: 0x4C98079C0207002F Mov
    // 0x001098: 0xE043FF9102B7FF2C Ipa
    temp_547 = in_attr9.x;
    // 0x0010A8: 0x3859103F80070404 Fadd
    temp_548 = 0.0 - temp_135;
    temp_549 = temp_548 + 1.0;
    // 0x0010B0: 0xE043FF9142B7FF2D Ipa
    temp_550 = in_attr9.y;
    // 0x0010B8: 0x3859103F8007052A Fadd
    temp_551 = 0.0 - temp_186;
    temp_552 = temp_551 + 1.0;
    // 0x0010C8: 0xE043FF9182B7FF2E Ipa
    temp_553 = in_attr9.z;
    // 0x0010D0: 0xD9A2018232271010 Texs
    temp_554 = textureLod(fp_t_tcb_18, vec3(temp_533, temp_534, temp_532), temp_530).xyz;
    temp_555 = temp_554.x;
    temp_556 = temp_554.y;
    temp_557 = temp_554.z;
    // 0x0010D8: 0xDEBA0000C2F72C2C TexB
    temp_558 = texture(fp_t_cb7_20, vec3(temp_547, temp_550, temp_553)).x;
    // 0x0010E8: 0x5C68100000470404 Fmul
    temp_559 = temp_549 * temp_549;
    // 0x0010F0: 0x49A013980A170627 Ffma
    temp_560 = fma(temp_284, fp_c6.data[40].y, temp_274);
    // 0x0010F8: 0x4C68101809072A30 Fmul
    temp_561 = temp_552 * fp_c6.data[36].x;
    // 0x001108: 0x5080000000372A2A Mufu
    temp_562 = log2(temp_552);
    // 0x001110: 0x1E23E468DB970506 Fmul32i
    temp_563 = temp_186 * 0.193900004;
    // 0x001118: 0x5080400000373030 Mufu
    temp_564 = abs(temp_561);
    temp_565 = log2(temp_564);
    // 0x001128: 0x010410676C97F012 Mov32i
    // 0x001130: 0x5C68100000470404 Fmul
    temp_566 = temp_559 * temp_559;
    // 0x001138: 0x49A014180A170828 Ffma
    temp_567 = fma(temp_285, fp_c6.data[40].y, temp_277);
    // 0x001148: 0x49A013180A170726 Ffma
    temp_568 = fma(temp_286, fp_c6.data[40].y, temp_273);
    // 0x001150: 0x0104066978D7F017 Mov32i
    // 0x001158: 0x0103F0000007F007 Mov32i
    // 0x001168: 0x49A0090400B70512 Ffma
    temp_569 = fma(temp_186, fp_c1.data[2].w, 8.40400028);
    // 0x001170: 0x49A0030400770408 Ffma
    temp_570 = fma(temp_566, fp_c1.data[1].w, temp_563);
    // 0x001178: 0xE04BFF9042B7FF06 Ipa
    temp_571 = in_attr8.y;
    temp_572 = clamp(temp_571, 0.0, 1.0);
    // 0x001188: 0x49A019180A170932 Ffma
    temp_573 = fma(temp_287, fp_c6.data[40].y, temp_218);
    // 0x001190: 0x4C98079809670009 Mov
    // 0x001198: 0x49A20B8400870417 Ffma
    temp_574 = fma(temp_566, fp_c1.data[2].x, -3.60299993);
    // 0x0011A8: 0x0103E2CD9E87F02D Mov32i
    // 0x0011B0: 0x51A0090400C70522 Ffma
    temp_575 = fma(temp_186, temp_569, fp_c1.data[3].x);
    // 0x0011B8: 0x4C68101809173030 Fmul
    temp_576 = temp_565 * fp_c6.data[36].y;
    // 0x0011C8: 0x088BF05D63970812 Fadd32i
    temp_577 = temp_570 + -0.522800028;
    // 0x0011D0: 0x32A003BF00070107 Ffma
    temp_578 = fma(temp_77, 0.5, 0.5);
    // 0x0011D8: 0x51A00B8400970417 Ffma
    temp_579 = fma(temp_566, temp_574, fp_c1.data[2].y);
    // 0x0011E8: 0x49A2168400D7042D Ffma
    temp_580 = fma(temp_566, fp_c1.data[3].y, -0.168799996);
    // 0x0011F0: 0x51A0110400E70522 Ffma
    temp_581 = fma(temp_186, temp_575, fp_c1.data[3].z);
    // 0x0011F8: 0x5C90008003070008 Rro
    // 0x001208: 0x5C68100001270512 Fmul
    temp_582 = temp_186 * temp_577;
    // 0x001210: 0x5084000000270808 Mufu
    temp_583 = exp2(temp_576);
    temp_584 = clamp(temp_583, 0.0, 1.0);
    // 0x001218: 0x4C68101808972A2A Fmul
    temp_585 = temp_562 * fp_c6.data[34].y;
    // 0x001228: 0x5C68100002D7042D Fmul
    temp_586 = temp_566 * temp_580;
    // 0x001230: 0x4C98079800970005 Mov
    // 0x001238: 0x4C58101408170909 Fadd
    temp_587 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001248: 0x010404000007F02F Mov32i
    // 0x001250: 0x59A0090001770417 Ffma
    temp_588 = fma(temp_566, temp_579, temp_582);
    // 0x001258: 0x386C104248070F12 Fmul
    temp_589 = temp_212 * 50.0;
    temp_590 = clamp(temp_589, 0.0, 1.0);
    // 0x001268: 0x5C60138002D72201 Fmnmx
    temp_591 = min(temp_581, temp_586);
    // 0x001270: 0x4C98079800A7002D Mov
    // 0x001278: 0x4C98079800470022 Mov
    // 0x001288: 0x4C59101800570504 Fadd
    temp_592 = 0.0 - fp_c6.data[2].y;
    temp_593 = temp_592 + fp_c6.data[1].y;
    // 0x001290: 0x5C90008002A7002A Rro
    // 0x001298: 0x5C68100000870909 Fmul
    temp_594 = temp_587 * temp_584;
    // 0x0012A8: 0x5084000000272A2A Mufu
    temp_595 = exp2(temp_585);
    temp_596 = clamp(temp_595, 0.0, 1.0);
    // 0x0012B0: 0x4C59101800672D05 Fadd
    temp_597 = 0.0 - fp_c6.data[2].z;
    temp_598 = temp_597 + fp_c6.data[1].z;
    // 0x0012B8: 0x4C58301800872222 Fadd
    temp_599 = 0.0 - fp_c6.data[2].x;
    temp_600 = fp_c6.data[1].x + temp_599;
    // 0x0012C8: 0x33A017C00007062F Ffma
    temp_601 = fma(temp_572, -2.0, 3.0);
    // 0x0012D0: 0x5C6810000067062E Fmul
    temp_602 = temp_572 * temp_572;
    // 0x0012D8: 0x51A0039800970404 Ffma
    temp_603 = fma(temp_593, temp_578, fp_c6.data[2].y);
    // 0x0012E8: 0x5C5C30000FF7012D Fadd
    temp_604 = temp_591 + -0.0;
    temp_605 = clamp(temp_604, 0.0, 1.0);
    // 0x0012F0: 0x51A0039800A70505 Ffma
    temp_606 = fma(temp_598, temp_578, fp_c6.data[2].z);
    // 0x0012F8: 0x51A0039800872206 Ffma
    temp_607 = fma(temp_600, temp_578, fp_c6.data[2].x);
    // 0x001308: 0x4C5C100400A71707 Fadd
    temp_608 = temp_588 + fp_c1.data[2].z;
    temp_609 = clamp(temp_608, 0.0, 1.0);
    // 0x001310: 0x4C68101808D70922 Fmul
    temp_610 = temp_594 * fp_c6.data[35].y;
    // 0x001318: 0x4C68101808C70917 Fmul
    temp_611 = temp_594 * fp_c6.data[35].x;
    // 0x001328: 0x4C68101808E70909 Fmul
    temp_612 = temp_594 * fp_c6.data[35].z;
    // 0x001330: 0x5C68100002D71212 Fmul
    temp_613 = temp_590 * temp_605;
    // 0x001338: 0x4C98079808670008 Mov
    // 0x001348: 0x5C58300002D70731 Fadd
    temp_614 = 0.0 - temp_605;
    temp_615 = temp_609 + temp_614;
    // 0x001350: 0x4C68101808872A2A Fmul
    temp_616 = temp_596 * fp_c6.data[34].x;
    // 0x001358: 0x49A0139408272227 Ffma
    temp_617 = fma(temp_610, fp_c5.data[32].z, temp_560);
    // 0x001368: 0x49A111140827222D Ffma
    temp_618 = 0.0 - fp_c5.data[32].z;
    temp_619 = fma(temp_610, temp_618, temp_610);
    // 0x001370: 0x49A0131408271726 Ffma
    temp_620 = fma(temp_611, fp_c5.data[32].z, temp_568);
    // 0x001378: 0x49A10B9408271722 Ffma
    temp_621 = 0.0 - fp_c5.data[32].z;
    temp_622 = fma(temp_611, temp_621, temp_611);
    // 0x001388: 0x49A0141408270928 Ffma
    temp_623 = fma(temp_612, fp_c5.data[32].z, temp_567);
    // 0x001390: 0x49A1049408270917 Ffma
    temp_624 = 0.0 - fp_c5.data[32].z;
    temp_625 = fma(temp_612, temp_624, temp_612);
    // 0x001398: 0x59A0090003170F09 Ffma
    temp_626 = fma(temp_212, temp_615, temp_613);
    // 0x0013A8: 0x51A0041808672A08 Ffma
    temp_627 = fma(temp_616, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x0013B0: 0x4C9807980B470007 Mov
    // 0x0013B8: 0x59A0090003171818 Ffma
    temp_628 = fma(temp_114, temp_615, temp_613);
    // 0x0013C8: 0x59A0090003171313 Ffma
    temp_629 = fma(temp_193, temp_615, temp_613);
    // 0x0013D0: 0x5C58100001773232 Fadd
    temp_630 = temp_573 + temp_625;
    // 0x0013D8: 0x5C68100002F72E01 Fmul
    temp_631 = temp_602 * temp_601;
    // 0x0013E8: 0x51A203980B471C1C Ffma
    temp_632 = 0.0 - fp_c6.data[45].x;
    temp_633 = fma(temp_23, fp_c6.data[45].x, temp_632);
    // 0x0013F0: 0x51A203980B471D1D Ffma
    temp_634 = 0.0 - fp_c6.data[45].x;
    temp_635 = fma(temp_24, fp_c6.data[45].x, temp_634);
    // 0x0013F8: 0x51A203980B470000 Ffma
    temp_636 = 0.0 - fp_c6.data[45].x;
    temp_637 = fma(temp_25, fp_c6.data[45].x, temp_636);
    // 0x001408: 0x4C68101803770101 Fmul
    temp_638 = temp_631 * fp_c6.data[13].w;
    // 0x001410: 0xF0F0000034370000 Depbar
    // 0x001418: 0x49A01A180A170B0B Ffma
    temp_639 = fma(temp_288, fp_c6.data[40].y, temp_521);
    // 0x001428: 0x49A019980A170A0A Ffma
    temp_640 = fma(temp_289, fp_c6.data[40].y, temp_524);
    // 0x001430: 0x5C58100002270B0B Fadd
    temp_641 = temp_639 + temp_622;
    // 0x001438: 0x5C58100002D70A0A Fadd
    temp_642 = temp_640 + temp_619;
    // 0x001448: 0xF0F0000034270000 Depbar
    // 0x001450: 0x49A006040067060F Ffma
    temp_643 = fma(temp_607, fp_c1.data[1].z, temp_540);
    // 0x001458: 0x49A006840067040D Ffma
    temp_644 = fma(temp_603, fp_c1.data[1].z, temp_541);
    // 0x001468: 0x49A0070400670517 Ffma
    temp_645 = fma(temp_606, fp_c1.data[1].z, temp_542);
    // 0x001470: 0xE043FF9002B7FF05 Ipa
    temp_646 = in_attr8.x;
    // 0x001478: 0x4C68101808771F04 Fmul
    temp_647 = temp_95 * fp_c6.data[33].w;
    // 0x001488: 0xE043FF8C82B7FF2B Ipa
    temp_648 = in_attr4.z;
    // 0x001490: 0x59A2078000871A1A Ffma
    temp_649 = 0.0 - temp_643;
    temp_650 = fma(temp_92, temp_627, temp_649);
    // 0x001498: 0x59A2068000871B1B Ffma
    temp_651 = 0.0 - temp_644;
    temp_652 = fma(temp_93, temp_627, temp_651);
    // 0x0014A8: 0x59A20B8000871E08 Ffma
    temp_653 = 0.0 - temp_645;
    temp_654 = fma(temp_94, temp_627, temp_653);
    // 0x0014B0: 0xF0F0000034170000 Depbar
    // 0x0014B8: 0x49A0081808571407 Ffma
    temp_655 = fma(temp_544, fp_c6.data[33].y, temp_555);
    // 0x0014C8: 0x49A0119808571616 Ffma
    temp_656 = fma(temp_546, fp_c6.data[33].y, temp_557);
    // 0x0014D0: 0x4C98079802870006 Mov
    // 0x0014D8: 0x59A0078000471A1A Ffma
    temp_657 = fma(temp_650, temp_647, temp_643);
    // 0x0014E8: 0x59A0068000471B1B Ffma
    temp_658 = fma(temp_652, temp_647, temp_644);
    // 0x0014F0: 0x59A00B8000470808 Ffma
    temp_659 = fma(temp_654, temp_647, temp_645);
    // 0x0014F8: 0x59A0130000771818 Ffma
    temp_660 = fma(temp_628, temp_655, temp_620);
    // 0x001508: 0x49A0089808571504 Ffma
    temp_661 = fma(temp_545, fp_c6.data[33].y, temp_556);
    // 0x001510: 0x59A0140001671313 Ffma
    temp_662 = fma(temp_629, temp_656, temp_623);
    // 0x001518: 0x5C58100000B71A0B Fadd
    temp_663 = temp_657 + temp_641;
    // 0x001528: 0x5C58100000A71B0A Fadd
    temp_664 = temp_658 + temp_642;
    // 0x001530: 0x5C58100003270808 Fadd
    temp_665 = temp_659 + temp_630;
    // 0x001538: 0x51A0031802871C1C Ffma
    temp_666 = fma(temp_633, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001548: 0x59A0138000470909 Ffma
    temp_667 = fma(temp_626, temp_661, temp_617);
    // 0x001550: 0x4C98079802970007 Mov
    // 0x001558: 0x59A1058000B7250B Ffma
    temp_668 = 0.0 - temp_663;
    temp_669 = fma(temp_20, temp_668, temp_663);
    // 0x001568: 0x59A1050000A7250A Ffma
    temp_670 = 0.0 - temp_664;
    temp_671 = fma(temp_20, temp_670, temp_664);
    // 0x001570: 0x59A1040000872508 Ffma
    temp_672 = 0.0 - temp_665;
    temp_673 = fma(temp_20, temp_672, temp_665);
    // 0x001578: 0x49A2009803570106 Ffma
    temp_674 = 0.0 - temp_638;
    temp_675 = fma(temp_638, fp_c6.data[13].y, temp_674);
    // 0x001588: 0x51A0039802971D1D Ffma
    temp_676 = fma(temp_635, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001590: 0x59A00C0000B7020B Ffma
    temp_677 = fma(temp_103, temp_669, temp_660);
    // 0x001598: 0x59A0048000A70309 Ffma
    temp_678 = fma(temp_104, temp_671, temp_667);
    // 0x0015A8: 0x4C98079802A70002 Mov
    // 0x0015B0: 0x59A0098000871913 Ffma
    temp_679 = fma(temp_102, temp_673, temp_662);
    // 0x0015B8: 0x5C68100000B72929 Fmul
    temp_680 = temp_276 * temp_677;
    // 0x0015C8: 0x49A502980BC72C2C Ffma
    temp_681 = 0.0 - fp_c6.data[47].x;
    temp_682 = fma(temp_558, temp_681, temp_646);
    temp_683 = clamp(temp_682, 0.0, 1.0);
    // 0x0015D0: 0x5C68100000972020 Fmul
    temp_684 = temp_270 * temp_678;
    // 0x0015D8: 0x5080000000372C2C Mufu
    temp_685 = log2(temp_683);
    // 0x0015E8: 0x51A0011802A70002 Ffma
    temp_686 = fma(temp_637, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0015F0: 0x5C68100001372424 Fmul
    temp_687 = temp_250 * temp_679;
    // 0x0015F8: 0x5C58300001C72903 Fadd
    temp_688 = 0.0 - temp_666;
    temp_689 = temp_680 + temp_688;
    // 0x001608: 0x5C58300001D72000 Fadd
    temp_690 = 0.0 - temp_676;
    temp_691 = temp_684 + temp_690;
    // 0x001610: 0x49A00E180BF70305 Ffma
    temp_692 = fma(temp_689, fp_c6.data[47].w, temp_666);
    // 0x001618: 0x5C58300000272403 Fadd
    temp_693 = 0.0 - temp_686;
    temp_694 = temp_687 + temp_693;
    // 0x001628: 0x49A00E980BF70000 Ffma
    temp_695 = fma(temp_691, fp_c6.data[47].w, temp_676);
    // 0x001630: 0x4C68101803172C04 Fmul
    temp_696 = temp_685 * fp_c6.data[12].y;
    // 0x001638: 0x5C60178000571C05 Fmnmx
    temp_697 = max(temp_666, temp_692);
    // 0x001648: 0x49A001180BF70303 Ffma
    temp_698 = fma(temp_694, fp_c6.data[47].w, temp_686);
    // 0x001650: 0x5C60178000071D00 Fmnmx
    temp_699 = max(temp_676, temp_695);
    // 0x001658: 0x5C90008000470007 Rro
    // 0x001668: 0x49A2009803470104 Ffma
    temp_700 = 0.0 - temp_638;
    temp_701 = fma(temp_638, fp_c6.data[13].x, temp_700);
    // 0x001670: 0x5080000000270707 Mufu
    temp_702 = exp2(temp_696);
    // 0x001678: 0x5C60178000370203 Fmnmx
    temp_703 = max(temp_686, temp_698);
    // 0x001688: 0x49A2009803670101 Ffma
    temp_704 = 0.0 - temp_638;
    temp_705 = fma(temp_638, fp_c6.data[13].z, temp_704);
    // 0x001690: 0x59A0000000670006 Ffma
    temp_706 = fma(temp_699, temp_675, temp_699);
    // 0x001698: 0x59A0028000470504 Ffma
    temp_707 = fma(temp_697, temp_701, temp_697);
    // 0x0016A8: 0x0103EC000007F005 Mov32i
    // 0x0016B0: 0x59A0018000170302 Ffma
    temp_708 = fma(temp_703, temp_705, temp_703);
    // 0x0016B8: 0x5C59100000672001 Fadd
    temp_709 = 0.0 - temp_684;
    temp_710 = temp_709 + temp_706;
    // 0x0016C8: 0x5C9807800FF70006 Mov
    // 0x0016D0: 0x5C59100000472900 Fadd
    temp_711 = 0.0 - temp_680;
    temp_712 = temp_711 + temp_707;
    // 0x0016D8: 0x4C68101802B70703 Fmul
    temp_713 = temp_702 * fp_c6.data[10].w;
    // 0x0016E8: 0x5C59100000272402 Fadd
    temp_714 = 0.0 - temp_687;
    temp_715 = temp_714 + temp_708;
    // 0x0016F0: 0x4C58100C03872B04 Fadd
    temp_716 = temp_648 + fp_c3.data[14].x;
    // 0x0016F8: 0x5C98078002170007 Mov
    // 0x001708: 0x59A0148000370000 Ffma
    temp_717 = fma(temp_712, temp_713, temp_680);
    // 0x001710: 0x59A0100000370101 Ffma
    temp_718 = fma(temp_710, temp_713, temp_684);
    // 0x001718: 0x59A0120000370202 Ffma
    temp_719 = fma(temp_715, temp_713, temp_687);
    // 0x001728: 0x5C98078002170003 Mov
    // 0x001730: 0x49A37F8C03C70404 Ffma
    temp_720 = 0.0 - fp_c3.data[15].x;
    temp_721 = fma(temp_716, temp_720, -0.0);
    // 0x001738: 0xE30000000007000F Exit
    out_attr0.x = temp_717;
    out_attr0.y = temp_718;
    out_attr0.z = temp_719;
    out_attr0.w = temp_17;
    out_attr1.x = temp_721;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = temp_17;
    return;
}
