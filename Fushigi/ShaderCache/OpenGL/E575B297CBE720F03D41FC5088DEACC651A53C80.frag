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
layout (binding = 1) uniform sampler2D fp_t_tcb_24;
layout (binding = 2) uniform sampler2D fp_t_tcb_1E;
layout (binding = 3) uniform sampler2D fp_t_tcb_22;
layout (binding = 4) uniform sampler2D fp_t_tcb_36;
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
    precise vec2 temp_10;
    precise float temp_11;
    precise float temp_12;
    precise vec4 temp_13;
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
    precise vec4 temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise vec3 temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise vec3 temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    bool temp_99;
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
    uint temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    int temp_149;
    precise float temp_150;
    int temp_151;
    uint temp_152;
    uint temp_153;
    int temp_154;
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
    bool temp_215;
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
    int temp_356;
    uint temp_357;
    uint temp_358;
    int temp_359;
    precise float temp_360;
    precise float temp_361;
    precise float temp_362;
    int temp_363;
    uint temp_364;
    uint temp_365;
    int temp_366;
    precise float temp_367;
    int temp_368;
    uint temp_369;
    int temp_370;
    precise float temp_371;
    precise float temp_372;
    precise float temp_373;
    precise float temp_374;
    precise float temp_375;
    precise float temp_376;
    int temp_377;
    uint temp_378;
    uint temp_379;
    int temp_380;
    precise float temp_381;
    int temp_382;
    uint temp_383;
    int temp_384;
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
    uint temp_397;
    int temp_398;
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
    precise float temp_412;
    precise float temp_413;
    precise float temp_414;
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
    precise float temp_431;
    precise float temp_432;
    precise float temp_433;
    precise float temp_434;
    precise float temp_435;
    precise float temp_436;
    precise float temp_437;
    int temp_438;
    uint temp_439;
    uint temp_440;
    int temp_441;
    precise float temp_442;
    precise float temp_443;
    precise float temp_444;
    precise float temp_445;
    precise float temp_446;
    precise float temp_447;
    precise float temp_448;
    precise float temp_449;
    precise float temp_450;
    int temp_451;
    uint temp_452;
    uint temp_453;
    int temp_454;
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
    precise vec3 temp_543;
    precise float temp_544;
    precise float temp_545;
    precise float temp_546;
    precise float temp_547;
    precise float temp_548;
    precise float temp_549;
    precise float temp_550;
    precise vec3 temp_551;
    precise float temp_552;
    precise float temp_553;
    precise float temp_554;
    precise vec3 temp_555;
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
    precise float temp_722;
    precise float temp_723;
    precise float temp_724;
    precise float temp_725;
    precise float temp_726;
    precise float temp_727;
    precise float temp_728;
    precise float temp_729;
    precise float temp_730;
    // 0x000008: 0x0103F8000007F004 Mov32i
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0xE003FF870FF7FF02 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000028: 0xE003FF874FF7FF03 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000030: 0x5080000000471010 Mufu
    // 0x000038: 0x4C68100C04A70202 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000048: 0x4C68100C04B70303 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000050: 0xE043FF8E0107FF27 Ipa
    temp_8 = in_attr6.x;
    // 0x000058: 0xE043FF8E4107FF26 Ipa
    temp_9 = in_attr6.y;
    // 0x000068: 0xD830026FF2672700 Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000070: 0xD8300241A2672720 Texs
    temp_13 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyzw;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    temp_16 = temp_13.z;
    temp_17 = temp_13.w;
    // 0x000078: 0xD86201EFF0470204 Texs
    temp_18 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x000088: 0xE043FF8A0107FF05 Ipa
    temp_19 = in_attr2.x;
    // 0x000090: 0xE043FF890107FF09 Ipa
    temp_20 = in_attr1.x;
    // 0x000098: 0xE043FF8A4107FF06 Ipa
    temp_21 = in_attr2.y;
    // 0x0000A8: 0xE043FF894107FF0A Ipa
    temp_22 = in_attr1.y;
    // 0x0000B0: 0xE043FF8A8107FF07 Ipa
    temp_23 = in_attr2.z;
    // 0x0000B8: 0xE043FF898107FF0B Ipa
    temp_24 = in_attr1.z;
    // 0x0000C8: 0xE043FF880107FF0D Ipa
    temp_25 = in_attr0.x;
    // 0x0000D0: 0xE043FF884107FF0F Ipa
    temp_26 = in_attr0.y;
    // 0x0000D8: 0xE043FF888107FF11 Ipa
    temp_27 = in_attr0.z;
    // 0x0000E8: 0x5C68100000570508 Fmul
    temp_28 = temp_19 * temp_19;
    // 0x0000F0: 0x5C6810000097090C Fmul
    temp_29 = temp_20 * temp_20;
    // 0x0000F8: 0x59A0040000670608 Ffma
    temp_30 = fma(temp_21, temp_21, temp_28);
    // 0x000108: 0x59A0060000A70A0C Ffma
    temp_31 = fma(temp_22, temp_22, temp_29);
    // 0x000110: 0x5C68100000D70D12 Fmul
    temp_32 = temp_25 * temp_25;
    // 0x000118: 0x59A0040000770708 Ffma
    temp_33 = fma(temp_23, temp_23, temp_30);
    // 0x000128: 0x59A0060000B70B0C Ffma
    temp_34 = fma(temp_24, temp_24, temp_31);
    // 0x000130: 0x5080000000570808 Mufu
    temp_35 = inversesqrt(temp_33);
    // 0x000138: 0x59A0090000F70F12 Ffma
    temp_36 = fma(temp_26, temp_26, temp_32);
    // 0x000148: 0x5080000000570C0C Mufu
    temp_37 = inversesqrt(temp_34);
    // 0x000150: 0x59A0090001171112 Ffma
    temp_38 = fma(temp_27, temp_27, temp_36);
    // 0x000158: 0x5080000000571212 Mufu
    temp_39 = inversesqrt(temp_38);
    // 0x000168: 0x5C6810000087050E Fmul
    temp_40 = temp_19 * temp_35;
    // 0x000170: 0x5C68100000870606 Fmul
    temp_41 = temp_21 * temp_35;
    // 0x000178: 0x5C68100000C70A05 Fmul
    temp_42 = temp_22 * temp_37;
    // 0x000188: 0x5C68100000C70B0A Fmul
    temp_43 = temp_24 * temp_37;
    // 0x000190: 0x5C68100000C70909 Fmul
    temp_44 = temp_20 * temp_37;
    // 0x000198: 0x5C68100000870707 Fmul
    temp_45 = temp_23 * temp_35;
    // 0x0001A8: 0x5C68100001270D08 Fmul
    temp_46 = temp_25 * temp_39;
    // 0x0001B0: 0x5C68100001270F0F Fmul
    temp_47 = temp_26 * temp_39;
    // 0x0001B8: 0x5C68100001271111 Fmul
    temp_48 = temp_27 * temp_39;
    // 0x0001C8: 0xF0F0000034270000 Depbar
    // 0x0001D0: 0x5C6810000017010B Fmul
    temp_49 = temp_12 * temp_12;
    // 0x0001D8: 0x5C68100000170E0E Fmul
    temp_50 = temp_40 * temp_12;
    // 0x0001E8: 0x5C68100000170606 Fmul
    temp_51 = temp_41 * temp_12;
    // 0x0001F0: 0x5C68100000170707 Fmul
    temp_52 = temp_45 * temp_12;
    // 0x0001F8: 0x59A005800007000B Ffma
    temp_53 = fma(temp_11, temp_11, temp_49);
    // 0x000208: 0x59A0070000970009 Ffma
    temp_54 = fma(temp_11, temp_44, temp_50);
    // 0x000210: 0x59A0030000570005 Ffma
    temp_55 = fma(temp_11, temp_42, temp_51);
    // 0x000218: 0x59A0038000A70007 Ffma
    temp_56 = fma(temp_11, temp_43, temp_52);
    // 0x000228: 0x385D103F80070B0B Fadd
    temp_57 = 0.0 - temp_53;
    temp_58 = temp_57 + 1.0;
    temp_59 = clamp(temp_58, 0.0, 1.0);
    // 0x000230: 0x5080000000870B16 Mufu
    temp_60 = sqrt(temp_59);
    // 0x000238: 0x59A0048001670808 Ffma
    temp_61 = fma(temp_46, temp_60, temp_54);
    // 0x000248: 0x59A0028001670F05 Ffma
    temp_62 = fma(temp_47, temp_60, temp_55);
    // 0x000250: 0x59A0038001671107 Ffma
    temp_63 = fma(temp_48, temp_60, temp_56);
    // 0x000258: 0x5C68100000870800 Fmul
    temp_64 = temp_61 * temp_61;
    // 0x000268: 0x59A0000000570500 Ffma
    temp_65 = fma(temp_62, temp_62, temp_64);
    // 0x000270: 0x59A0000000770700 Ffma
    temp_66 = fma(temp_63, temp_63, temp_65);
    // 0x000278: 0x5080000000570006 Mufu
    temp_67 = inversesqrt(temp_66);
    // 0x000288: 0x5C68100000670712 Fmul
    temp_68 = temp_63 * temp_67;
    // 0x000290: 0x5C68100000670501 Fmul
    temp_69 = temp_62 * temp_67;
    // 0x000298: 0x5C6810000067080C Fmul
    temp_70 = temp_61 * temp_67;
    // 0x0002A8: 0x4C68100C00671207 Fmul
    temp_71 = temp_68 * fp_c3.data[1].z;
    // 0x0002B0: 0x4C68100C00271206 Fmul
    temp_72 = temp_68 * fp_c3.data[0].z;
    // 0x0002B8: 0x49A0038C00570107 Ffma
    temp_73 = fma(temp_69, fp_c3.data[1].y, temp_71);
    // 0x0002C8: 0x49A0030C00170106 Ffma
    temp_74 = fma(temp_69, fp_c3.data[0].y, temp_72);
    // 0x0002D0: 0x49A0038C00470C07 Ffma
    temp_75 = fma(temp_70, fp_c3.data[1].x, temp_73);
    // 0x0002D8: 0x49A0030C00070C06 Ffma
    temp_76 = fma(temp_70, fp_c3.data[0].x, temp_74);
    // 0x0002E8: 0x4C69100C03E70707 Fmul
    temp_77 = 0.0 - fp_c3.data[15].z;
    temp_78 = temp_75 * temp_77;
    // 0x0002F0: 0x4C68101808B70600 Fmul
    temp_79 = temp_76 * fp_c6.data[34].w;
    // 0x0002F8: 0x4C68101808B70705 Fmul
    temp_80 = temp_78 * fp_c6.data[34].w;
    // 0x000308: 0x49A001040017001C Ffma
    temp_81 = fma(temp_79, fp_c1.data[0].y, temp_6);
    // 0x000310: 0x49A001840017051D Ffma
    temp_82 = fma(temp_80, fp_c1.data[0].y, temp_7);
    // 0x000318: 0xD8320221C1D71C22 Texs
    temp_83 = texture(fp_t_tcb_22, vec2(temp_81, temp_82)).xyzw;
    temp_84 = temp_83.x;
    temp_85 = temp_83.y;
    temp_86 = temp_83.z;
    temp_87 = temp_83.w;
    // 0x000328: 0xD824036052672726 Texs
    temp_88 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_89 = temp_88.x;
    temp_90 = temp_88.y;
    temp_91 = temp_88.z;
    // 0x000330: 0xD82202000037021E Texs
    temp_92 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_93 = temp_92.x;
    temp_94 = temp_92.y;
    temp_95 = temp_92.z;
    // 0x000338: 0xE043FF8B0107FF25 Ipa
    temp_96 = in_attr3.x;
    // 0x000348: 0xE043FF8B4107FF24 Ipa
    temp_97 = in_attr3.y;
    // 0x000350: 0xE043FF8B8107FF0E Ipa
    temp_98 = in_attr3.z;
    // 0x000358: 0xF0F0000034470000 Depbar
    // 0x000368: 0x4BB1839406071B07 Fsetp
    temp_99 = temp_17 < fp_c5.data[24].x;
    // 0x000370: 0xF0F0000000070002 Depbar
    // 0x000378: 0x5C68100002572506 Fmul
    temp_100 = temp_96 * temp_96;
    // 0x000388: 0x59A0030002472407 Ffma
    temp_101 = fma(temp_97, temp_97, temp_100);
    // 0x000390: 0x59A0038000E70E07 Ffma
    temp_102 = fma(temp_98, temp_98, temp_101);
    // 0x000398: 0x5080000000570707 Mufu
    temp_103 = inversesqrt(temp_102);
    // 0x0003A8: 0x5C69100000772525 Fmul
    temp_104 = 0.0 - temp_103;
    temp_105 = temp_96 * temp_104;
    // 0x0003B0: 0x5C69100000772424 Fmul
    temp_106 = 0.0 - temp_103;
    temp_107 = temp_97 * temp_106;
    // 0x0003B8: 0x5C69100000770E0E Fmul
    temp_108 = 0.0 - temp_103;
    temp_109 = temp_98 * temp_108;
    // 0x0003C8: 0xE24000000688000F Bra
    if (temp_99)
    {
        // 0x0003D0: 0x5C9807800FF70000 Mov
        // 0x0003D8: 0xE33000000007000F Kil
        discard;
    }
    // 0x000438: 0x4C58301805C72506 Fadd
    temp_110 = 0.0 - fp_c6.data[23].x;
    temp_111 = temp_105 + temp_110;
    // 0x000448: 0xE2900000BB000000 Ssy
    // 0x000450: 0x4C58301805D72407 Fadd
    temp_112 = 0.0 - fp_c6.data[23].y;
    temp_113 = temp_107 + temp_112;
    // 0x000458: 0x4C58301805E70E08 Fadd
    temp_114 = 0.0 - fp_c6.data[23].z;
    temp_115 = temp_109 + temp_114;
    // 0x000468: 0x386810418007020B Fmul
    temp_116 = temp_6 * 16.0;
    // 0x000470: 0xF0F0000034170000 Depbar
    // 0x000478: 0x4C6810180A072626 Fmul
    temp_117 = temp_89 * fp_c6.data[40].x;
    // 0x000488: 0x5CA8148000B70A0B F2f
    temp_118 = floor(temp_116);
    // 0x000490: 0x5C68100000670609 Fmul
    temp_119 = temp_111 * temp_111;
    // 0x000498: 0x386810411007030D Fmul
    temp_120 = temp_7 * 9.0;
    // 0x0004A8: 0x01040DF760C7F00F Mov32i
    // 0x0004B0: 0x5CA8148000D70A0D F2f
    temp_121 = floor(temp_120);
    // 0x0004B8: 0x0103F0000007F02F Mov32i
    // 0x0004C8: 0x386013BF80072626 Fmnmx
    temp_122 = min(temp_117, 1.0);
    // 0x0004D0: 0x59A0048000770709 Ffma
    temp_123 = fma(temp_113, temp_113, temp_119);
    // 0x0004D8: 0x4C58301407B72019 Fadd
    temp_124 = 0.0 - fp_c5.data[30].w;
    temp_125 = temp_14 + temp_124;
    // 0x0004E8: 0x4C58301407B72118 Fadd
    temp_126 = 0.0 - fp_c5.data[30].w;
    temp_127 = temp_15 + temp_126;
    // 0x0004F0: 0x51A5020400370504 Ffma
    temp_128 = 0.0 - temp_18;
    temp_129 = fma(temp_91, temp_128, fp_c1.data[0].w);
    temp_130 = clamp(temp_129, 0.0, 1.0);
    // 0x0004F8: 0x5C9807800FF70005 Mov
    // 0x000508: 0x4C60178400272628 Fmnmx
    temp_131 = max(temp_122, fp_c1.data[0].z);
    // 0x000510: 0x59A0048000870809 Ffma
    temp_132 = fma(temp_115, temp_115, temp_123);
    // 0x000518: 0x51A00C9407B72719 Ffma
    temp_133 = fma(temp_90, temp_125, fp_c5.data[30].w);
    // 0x000528: 0x5080000000570909 Mufu
    temp_134 = inversesqrt(temp_132);
    // 0x000530: 0x51A00C1407B72718 Ffma
    temp_135 = fma(temp_90, temp_127, fp_c5.data[30].w);
    // 0x000538: 0x32A005C180070D0D Ffma
    temp_136 = fma(temp_121, 16.0, temp_118);
    // 0x000548: 0x51A4140400272831 Ffma
    temp_137 = fma(temp_131, temp_131, fp_c1.data[0].z);
    temp_138 = clamp(temp_137, 0.0, 1.0);
    // 0x000550: 0x5CB0118000D70A2E F2i
    temp_139 = trunc(temp_136);
    temp_140 = max(temp_139, 0.0);
    temp_141 = uint(temp_140);
    // 0x000558: 0x32A017BF0007282F Ffma
    temp_142 = fma(temp_131, 0.5, 0.5);
    // 0x000568: 0x5C68100003173130 Fmul
    temp_143 = temp_138 * temp_138;
    // 0x000570: 0x5C68120002F72F2F Fmul
    temp_144 = temp_142 * 0.5;
    temp_145 = temp_144 * temp_142;
    // 0x000578: 0x5C68100000970606 Fmul
    temp_146 = temp_111 * temp_134;
    // 0x000588: 0x5C68100000970707 Fmul
    temp_147 = temp_113 * temp_134;
    // 0x000590: 0x5C68100000970808 Fmul
    temp_148 = temp_115 * temp_134;
    // 0x000598: 0x3848000000872E2C Shl
    temp_149 = int(temp_141) << 8;
    // 0x0005A8: 0x5C68100000672502 Fmul
    temp_150 = temp_105 * temp_146;
    // 0x0005B0: 0xEF94008200472C2C Ldc
    temp_151 = temp_149 + 0x2004;
    temp_152 = uint(temp_151) >> 2;
    temp_153 = temp_152 >> 2;
    temp_154 = int(temp_152) & 3;
    temp_155 = fp_c8.data[int(temp_153)][temp_154];
    // 0x0005B8: 0x4C69101805C70609 Fmul
    temp_156 = 0.0 - fp_c6.data[23].x;
    temp_157 = temp_146 * temp_156;
    // 0x0005C8: 0x5C68100000670C0A Fmul
    temp_158 = temp_70 * temp_146;
    // 0x0005D0: 0x59A0010000772403 Ffma
    temp_159 = fma(temp_107, temp_147, temp_150);
    // 0x0005D8: 0x5C68100002570C02 Fmul
    temp_160 = temp_70 * temp_105;
    // 0x0005E8: 0x49A1049805D70709 Ffma
    temp_161 = 0.0 - fp_c6.data[23].y;
    temp_162 = fma(temp_147, temp_161, temp_157);
    // 0x0005F0: 0x59A005000077010B Ffma
    temp_163 = fma(temp_69, temp_147, temp_158);
    // 0x0005F8: 0x59A4018000870E06 Ffma
    temp_164 = fma(temp_109, temp_148, temp_159);
    temp_165 = clamp(temp_164, 0.0, 1.0);
    // 0x000608: 0x59A0010002470103 Ffma
    temp_166 = fma(temp_69, temp_107, temp_160);
    // 0x000610: 0x4C69101805C70C02 Fmul
    temp_167 = 0.0 - fp_c6.data[23].x;
    temp_168 = temp_70 * temp_167;
    // 0x000618: 0x49A5049805E70809 Ffma
    temp_169 = 0.0 - fp_c6.data[23].z;
    temp_170 = fma(temp_148, temp_169, temp_162);
    temp_171 = clamp(temp_170, 0.0, 1.0);
    // 0x000628: 0x59A405800087120B Ffma
    temp_172 = fma(temp_68, temp_148, temp_163);
    temp_173 = clamp(temp_172, 0.0, 1.0);
    // 0x000630: 0x49A2078400070607 Ffma
    temp_174 = fma(temp_165, fp_c1.data[0].x, -6.98316002);
    // 0x000638: 0x59A4018000E71226 Ffma
    temp_175 = fma(temp_68, temp_109, temp_166);
    temp_176 = clamp(temp_175, 0.0, 1.0);
    // 0x000648: 0x49A1011805D70108 Ffma
    temp_177 = 0.0 - fp_c6.data[23].y;
    temp_178 = fma(temp_69, temp_177, temp_168);
    // 0x000650: 0x49A2078400070903 Ffma
    temp_179 = fma(temp_171, fp_c1.data[0].x, -6.98316002);
    // 0x000658: 0x59A2058003070B0A Ffma
    temp_180 = 0.0 - temp_173;
    temp_181 = fma(temp_173, temp_143, temp_180);
    // 0x000668: 0x5C68100000770607 Fmul
    temp_182 = temp_165 * temp_174;
    // 0x000670: 0x5C68100002670C2B Fmul
    temp_183 = temp_70 * temp_176;
    // 0x000678: 0x49A5041805E71202 Ffma
    temp_184 = 0.0 - fp_c6.data[23].z;
    temp_185 = fma(temp_68, temp_184, temp_178);
    temp_186 = clamp(temp_185, 0.0, 1.0);
    // 0x000688: 0x59A1130002F72608 Ffma
    temp_187 = 0.0 - temp_145;
    temp_188 = fma(temp_176, temp_187, temp_176);
    // 0x000690: 0x5C68100000370903 Fmul
    temp_189 = temp_171 * temp_179;
    // 0x000698: 0x51A0050400370B0A Ffma
    temp_190 = fma(temp_173, temp_181, fp_c1.data[0].w);
    // 0x0006A8: 0x5C68100002670129 Fmul
    temp_191 = temp_69 * temp_176;
    // 0x0006B0: 0x5080000000470A0A Mufu
    temp_192 = 1.0 / temp_190;
    // 0x0006B8: 0x5C90008000770006 Rro
    // 0x0006C8: 0x59A1010000272F09 Ffma
    temp_193 = 0.0 - temp_186;
    temp_194 = fma(temp_145, temp_193, temp_186);
    // 0x0006D0: 0x5080000000270606 Mufu
    temp_195 = exp2(temp_182);
    // 0x0006D8: 0x5C58100000872F07 Fadd
    temp_196 = temp_145 + temp_188;
    // 0x0006E8: 0x5C90008000370014 Rro
    // 0x0006F0: 0x5080000000470707 Mufu
    temp_197 = 1.0 / temp_196;
    // 0x0006F8: 0x4C58301407B71A08 Fadd
    temp_198 = 0.0 - fp_c5.data[30].w;
    temp_199 = temp_16 + temp_198;
    // 0x000708: 0x4C6810180147020D Fmul
    temp_200 = temp_186 * fp_c6.data[5].x;
    // 0x000710: 0x5C58100000972F09 Fadd
    temp_201 = temp_145 + temp_194;
    // 0x000718: 0x4C6810180157020F Fmul
    temp_202 = temp_186 * fp_c6.data[5].y;
    // 0x000728: 0x5080000000470913 Mufu
    temp_203 = 1.0 / temp_201;
    // 0x000730: 0x32A212C000072B2B Ffma
    temp_204 = 0.0 - temp_105;
    temp_205 = fma(temp_183, 2.0, temp_204);
    // 0x000738: 0x32A2124000072929 Ffma
    temp_206 = 0.0 - temp_107;
    temp_207 = fma(temp_191, 2.0, temp_206);
    // 0x000748: 0x1E23EA2F98370D36 Fmul32i
    temp_208 = temp_200 * 0.318309873;
    // 0x000750: 0x59A1030000671903 Ffma
    temp_209 = 0.0 - temp_195;
    temp_210 = fma(temp_133, temp_209, temp_195);
    // 0x000758: 0x59A103000067180B Ffma
    temp_211 = 0.0 - temp_195;
    temp_212 = fma(temp_135, temp_211, temp_195);
    // 0x000768: 0x1E23EA2F98370F0D Fmul32i
    temp_213 = temp_202 * 0.318309873;
    // 0x000770: 0x3868103F0007072D Fmul
    temp_214 = temp_197 * 0.5;
    // 0x000778: 0x5B6603800FF72C07 Isetp
    temp_215 = floatBitsToUint(temp_155) <= 0u;
    // 0x000788: 0x5C58100000371911 Fadd
    temp_216 = temp_133 + temp_210;
    // 0x000790: 0x5C68100000A73103 Fmul
    temp_217 = temp_138 * temp_192;
    // 0x000798: 0x508000000027140A Mufu
    temp_218 = exp2(temp_189);
    // 0x0007A8: 0x5C58100000B7180B Fadd
    temp_219 = temp_135 + temp_212;
    // 0x0007B0: 0x5C68100001372D09 Fmul
    temp_220 = temp_214 * temp_203;
    // 0x0007B8: 0x51A0041407B72713 Ffma
    temp_221 = fma(temp_90, temp_199, fp_c5.data[30].w);
    // 0x0007C8: 0x4C68101406971111 Fmul
    temp_222 = temp_216 * fp_c5.data[26].y;
    // 0x0007D0: 0x5C68100000370303 Fmul
    temp_223 = temp_217 * temp_217;
    // 0x0007D8: 0x4C68101406970B0B Fmul
    temp_224 = temp_219 * fp_c5.data[26].y;
    // 0x0007E8: 0x59A1030000671308 Ffma
    temp_225 = 0.0 - temp_195;
    temp_226 = fma(temp_221, temp_225, temp_195);
    // 0x0007F0: 0x59A11B0003671136 Ffma
    temp_227 = 0.0 - temp_208;
    temp_228 = fma(temp_222, temp_227, temp_208);
    // 0x0007F8: 0x5C68100000970303 Fmul
    temp_229 = temp_223 * temp_220;
    // 0x000808: 0x59A1050000A71907 Ffma
    temp_230 = 0.0 - temp_218;
    temp_231 = fma(temp_133, temp_230, temp_218);
    // 0x000810: 0x4C98079808A70009 Mov
    // 0x000818: 0x59A1050000A71806 Ffma
    temp_232 = 0.0 - temp_218;
    temp_233 = fma(temp_135, temp_232, temp_218);
    // 0x000828: 0x59A1050000A7130A Ffma
    temp_234 = 0.0 - temp_218;
    temp_235 = fma(temp_221, temp_234, temp_218);
    // 0x000830: 0x59A1068000D70B0F Ffma
    temp_236 = 0.0 - temp_213;
    temp_237 = fma(temp_224, temp_236, temp_213);
    // 0x000838: 0x4C6810180167020B Fmul
    temp_238 = temp_186 * fp_c6.data[5].z;
    // 0x000848: 0x5C58100000871308 Fadd
    temp_239 = temp_221 + temp_226;
    // 0x000850: 0x5C58100000771907 Fadd
    temp_240 = temp_133 + temp_231;
    // 0x000858: 0x4C68101808770909 Fmul
    temp_241 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x000868: 0x5C58100000671806 Fadd
    temp_242 = temp_135 + temp_233;
    // 0x000870: 0x5C58100000A7130A Fadd
    temp_243 = temp_221 + temp_235;
    // 0x000878: 0x1E23EA2F98370B11 Fmul32i
    temp_244 = temp_238 * 0.318309873;
    // 0x000888: 0x4C6810140697080B Fmul
    temp_245 = temp_239 * fp_c5.data[26].y;
    // 0x000890: 0x4C68101406970707 Fmul
    temp_246 = temp_240 * fp_c5.data[26].y;
    // 0x000898: 0x51A0111801470908 Ffma
    temp_247 = fma(temp_241, temp_84, fp_c6.data[5].x);
    // 0x0008A8: 0x4C68101406970606 Fmul
    temp_248 = temp_242 * fp_c5.data[26].y;
    // 0x0008B0: 0x51A011980157090D Ffma
    temp_249 = fma(temp_241, temp_85, fp_c6.data[5].y);
    // 0x0008B8: 0x4C68101406970A0A Fmul
    temp_250 = temp_243 * fp_c5.data[26].y;
    // 0x0008C8: 0x51A00E1801670909 Ffma
    temp_251 = fma(temp_241, temp_86, fp_c6.data[5].z);
    // 0x0008D0: 0x5C68100000370234 Fmul
    temp_252 = temp_186 * temp_229;
    // 0x0008D8: 0x5C68100000870707 Fmul
    temp_253 = temp_246 * temp_247;
    // 0x0008E8: 0x49A202180AC70402 Ffma
    temp_254 = 0.0 - temp_130;
    temp_255 = fma(temp_130, fp_c6.data[43].x, temp_254);
    // 0x0008F0: 0x5C68100000D70606 Fmul
    temp_256 = temp_248 * temp_249;
    // 0x0008F8: 0x49A202180AD70403 Ffma
    temp_257 = 0.0 - temp_130;
    temp_258 = fma(temp_130, fp_c6.data[43].y, temp_257);
    // 0x000908: 0x5C68100000970A09 Fmul
    temp_259 = temp_250 * temp_251;
    // 0x000910: 0x49A202180AE70404 Ffma
    temp_260 = 0.0 - temp_130;
    temp_261 = fma(temp_130, fp_c6.data[43].z, temp_260);
    // 0x000918: 0x59A1088001170B0B Ffma
    temp_262 = 0.0 - temp_244;
    temp_263 = fma(temp_245, temp_262, temp_244);
    // 0x000928: 0x5C68100003470714 Fmul
    temp_264 = temp_253 * temp_252;
    // 0x000930: 0x5C68100003470611 Fmul
    temp_265 = temp_256 * temp_252;
    // 0x000938: 0x3858103F80070202 Fadd
    temp_266 = temp_255 + 1.0;
    // 0x000948: 0x5C68100003470915 Fmul
    temp_267 = temp_259 * temp_252;
    // 0x000950: 0x5C6810000267120D Fmul
    temp_268 = temp_68 * temp_176;
    // 0x000958: 0x3858103F80070303 Fadd
    temp_269 = temp_258 + 1.0;
    // 0x000968: 0x3858103F80070417 Fadd
    temp_270 = temp_261 + 1.0;
    // 0x000970: 0x1E23E22F98371416 Fmul32i
    temp_271 = temp_264 * 0.159154937;
    // 0x000978: 0x1E23E22F98371114 Fmul32i
    temp_272 = temp_265 * 0.159154937;
    // 0x000988: 0xEF5400000087FF16 Stl
    local_memory[2] = floatBitsToUint(temp_271);
    // 0x000990: 0x1E23E22F98371511 Fmul32i
    temp_273 = temp_267 * 0.159154937;
    // 0x000998: 0xEF5400000047FF14 Stl
    local_memory[1] = floatBitsToUint(temp_272);
    // 0x0009A8: 0x59A4010000272004 Ffma
    temp_274 = fma(temp_14, temp_266, temp_266);
    temp_275 = clamp(temp_274, 0.0, 1.0);
    // 0x0009B0: 0xEF5400000007FF11 Stl
    local_memory[0] = floatBitsToUint(temp_273);
    // 0x0009B8: 0x32A2074000070D0D Ffma
    temp_276 = 0.0 - temp_109;
    temp_277 = fma(temp_268, 2.0, temp_276);
    // 0x0009C8: 0x5C9807800FF7000A Mov
    // 0x0009D0: 0x5C9807800FF70009 Mov
    // 0x0009D8: 0x5C9807800FF70008 Mov
    // 0x0009E8: 0x5C9807800FF70007 Mov
    // 0x0009F0: 0x5C9807800FF70006 Mov
    // 0x0009F8: 0x59A4018000372103 Ffma
    temp_278 = fma(temp_15, temp_269, temp_269);
    temp_279 = clamp(temp_278, 0.0, 1.0);
    // 0x000A08: 0x59A40B8001771A02 Ffma
    temp_280 = fma(temp_16, temp_270, temp_270);
    temp_281 = clamp(temp_280, 0.0, 1.0);
    // 0x000A10: 0xF0F800000000000F Sync
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
    if (!temp_215)
    {
        // 0x000A18: 0x5C9807800FF7002A Mov
        temp_294 = 0;
        do
        {
            // 0x000A28: 0x5C18020002A72E17 Iscadd
            temp_296 = int(temp_141) << 4;
            temp_297 = temp_296 + temp_294;
            // 0x000A30: 0xE003FF87CFF7FF33 Ipa
            // 0x000A38: 0x1C00000000172A2A Iadd32i
            temp_298 = temp_294 + 1;
            // 0x000A48: 0xE003FF87CFF7FF35 Ipa
            // 0x000A50: 0x3848000000471717 Shl
            temp_299 = temp_297 << 4;
            // 0x000A58: 0xE003FF87CFF7FF34 Ipa
            // 0x000A68: 0x5B6C038002C72A0F Isetp
            temp_295 = uint(temp_298) >= floatBitsToUint(temp_155);
            // 0x000A70: 0xE290000057800000 Ssy
            // 0x000A78: 0xEF94008200071717 Ldc
            temp_300 = temp_299 + 0x2000;
            temp_301 = uint(temp_300) >> 2;
            temp_302 = temp_301 >> 2;
            temp_303 = int(temp_301) & 3;
            temp_304 = fp_c8.data[int(temp_302)][temp_303];
            // 0x000A88: 0x5080000000473333 Mufu
            // 0x000A90: 0x5080000000473535 Mufu
            // 0x000A98: 0x5080000000473434 Mufu
            // 0x000AA8: 0xE043FF8D0337FF33 Ipa
            temp_305 = in_attr5.x;
            // 0x000AB0: 0xE043FF8D8357FF35 Ipa
            temp_306 = in_attr5.z;
            // 0x000AB8: 0xE043FF8D4347FF34 Ipa
            temp_307 = in_attr5.y;
            // 0x000AC8: 0x3848000000671732 Shl
            temp_308 = floatBitsToInt(temp_304) << 6;
            // 0x000AD0: 0xEF95008001073210 Ldc
            temp_309 = temp_308 + 16;
            temp_310 = uint(temp_309) >> 2;
            temp_311 = temp_310 >> 2;
            temp_312 = int(temp_310) & 3;
            temp_313 = fp_c8.data[int(temp_311)][temp_312];
            temp_314 = int(temp_310) + 1;
            temp_315 = uint(temp_314) >> 2;
            temp_316 = temp_314 & 3;
            temp_317 = fp_c8.data[int(temp_315)][temp_316];
            // 0x000AD8: 0xEF95008001873214 Ldc
            temp_318 = temp_308 + 24;
            temp_319 = uint(temp_318) >> 2;
            temp_320 = temp_319 >> 2;
            temp_321 = int(temp_319) & 3;
            temp_322 = fp_c8.data[int(temp_320)][temp_321];
            temp_323 = int(temp_319) + 1;
            temp_324 = uint(temp_323) >> 2;
            temp_325 = temp_323 & 3;
            temp_326 = fp_c8.data[int(temp_324)][temp_325];
            // 0x000AE8: 0xEF95008002073216 Ldc
            temp_327 = temp_308 + 32;
            temp_328 = uint(temp_327) >> 2;
            temp_329 = temp_328 >> 2;
            temp_330 = int(temp_328) & 3;
            temp_331 = fp_c8.data[int(temp_329)][temp_330];
            temp_332 = int(temp_328) + 1;
            temp_333 = uint(temp_332) >> 2;
            temp_334 = temp_332 & 3;
            temp_335 = fp_c8.data[int(temp_333)][temp_334];
            // 0x000AF0: 0x5C58300003371033 Fadd
            temp_336 = 0.0 - temp_305;
            temp_337 = temp_313 + temp_336;
            // 0x000AF8: 0x5C58300003471134 Fadd
            temp_338 = 0.0 - temp_307;
            temp_339 = temp_317 + temp_338;
            // 0x000B08: 0x5C58300003571414 Fadd
            temp_340 = 0.0 - temp_306;
            temp_341 = temp_322 + temp_340;
            // 0x000B10: 0x5C68100003373311 Fmul
            temp_342 = temp_337 * temp_337;
            // 0x000B18: 0x59A10A0001471510 Ffma
            temp_343 = 0.0 - temp_341;
            temp_344 = fma(temp_326, temp_343, temp_341);
            // 0x000B28: 0x59A0088003473415 Ffma
            temp_345 = fma(temp_339, temp_339, temp_342);
            // 0x000B30: 0x59A00A8001071035 Ffma
            temp_346 = fma(temp_344, temp_344, temp_345);
            // 0x000B38: 0x5080000000573511 Mufu
            temp_347 = inversesqrt(temp_346);
            // 0x000B48: 0x5080000000873535 Mufu
            temp_348 = sqrt(temp_346);
            // 0x000B50: 0x5C68100001173337 Fmul
            temp_349 = temp_337 * temp_347;
            // 0x000B58: 0x5C68100001171010 Fmul
            temp_350 = temp_344 * temp_347;
            // 0x000B68: 0x5C68100001173411 Fmul
            temp_351 = temp_339 * temp_347;
            // 0x000B70: 0x5C69100001673716 Fmul
            temp_352 = 0.0 - temp_331;
            temp_353 = temp_349 * temp_352;
            // 0x000B78: 0x59A10B0001771111 Ffma
            temp_354 = 0.0 - temp_335;
            temp_355 = fma(temp_351, temp_354, temp_353);
            // 0x000B88: 0xEF94008002873216 Ldc
            temp_356 = temp_308 + 40;
            temp_357 = uint(temp_356) >> 2;
            temp_358 = temp_357 >> 2;
            temp_359 = int(temp_357) & 3;
            temp_360 = fp_c8.data[int(temp_358)][temp_359];
            // 0x000B90: 0x010404000007F017 Mov32i
            // 0x000B98: 0x59A1088001671016 Ffma
            temp_361 = 0.0 - temp_360;
            temp_362 = fma(temp_350, temp_361, temp_355);
            // 0x000BA8: 0xEF95008003873210 Ldc
            temp_363 = temp_308 + 56;
            temp_364 = uint(temp_363) >> 2;
            temp_365 = temp_364 >> 2;
            temp_366 = int(temp_364) & 3;
            temp_367 = fp_c8.data[int(temp_365)][temp_366];
            temp_368 = int(temp_364) + 1;
            temp_369 = uint(temp_368) >> 2;
            temp_370 = temp_368 & 3;
            temp_371 = fp_c8.data[int(temp_369)][temp_370];
            // 0x000BB0: 0x59A4088001071610 Ffma
            temp_372 = fma(temp_362, temp_367, temp_371);
            temp_373 = clamp(temp_372, 0.0, 1.0);
            // 0x000BB8: 0x5C68100001071016 Fmul
            temp_374 = temp_373 * temp_373;
            // 0x000BC8: 0x33A00BC000071010 Ffma
            temp_375 = fma(temp_373, -2.0, 3.0);
            // 0x000BD0: 0x5C68100001071616 Fmul
            temp_376 = temp_374 * temp_375;
            // 0x000BD8: 0xEF95008003073210 Ldc
            temp_377 = temp_308 + 48;
            temp_378 = uint(temp_377) >> 2;
            temp_379 = temp_378 >> 2;
            temp_380 = int(temp_378) & 3;
            temp_381 = fp_c8.data[int(temp_379)][temp_380];
            temp_382 = int(temp_378) + 1;
            temp_383 = uint(temp_382) >> 2;
            temp_384 = temp_382 & 3;
            temp_385 = fp_c8.data[int(temp_383)][temp_384];
            // 0x000BE8: 0x59A4088003571035 Ffma
            temp_386 = fma(temp_381, temp_348, temp_385);
            temp_387 = clamp(temp_386, 0.0, 1.0);
            // 0x000BF0: 0x33A00BC000073517 Ffma
            temp_388 = fma(temp_387, -2.0, 3.0);
            // 0x000BF8: 0x5C68100003573535 Fmul
            temp_389 = temp_387 * temp_387;
            // 0x000C08: 0x5C68100001773517 Fmul
            temp_390 = temp_389 * temp_388;
            // 0x000C10: 0x5C68100001771616 Fmul
            temp_391 = temp_376 * temp_390;
            // 0x000C18: 0x39585042F0071417 Fadd
            temp_392 = abs(temp_341);
            temp_393 = temp_392 + -120.0;
            // 0x000C28: 0x1EABD4CCCCD71717 Fmul32i
            temp_394 = temp_393 * -0.0500000007;
            temp_395 = clamp(temp_394, 0.0, 1.0);
            // 0x000C30: 0x5C68100001771616 Fmul
            temp_396 = temp_391 * temp_395;
            // 0x000C38: 0x36247F9000171717 Xmad
            temp_397 = floatBitsToUint(temp_395) >> 16;
            temp_398 = int(temp_397) << 16;
            // 0x000C48: 0x5BB383800FF71607 Fsetp
            temp_399 = temp_396 <= 0.0;
            // 0x000C50: 0x7A05083C0F00FF17 Hadd2
            temp_294 = temp_298;
            temp_400 = uint(temp_398);
            temp_401 = temp_282;
            temp_402 = temp_283;
            temp_403 = temp_284;
            temp_404 = temp_285;
            temp_405 = temp_286;
            temp_406 = temp_287;
            if (temp_399)
            {
                temp_407 = unpackHalf2x16(uint(temp_398)).y;
                temp_408 = packHalf2x16(vec2(1.0, temp_407));
                temp_400 = temp_408;
            }
            // 0x000C58: 0x5D2103902FF71707 Hsetp2
            temp_409 = unpackHalf2x16(temp_400).x;
            temp_410 = temp_409 == 0.0;
            // 0x000C68: 0xF0F800000008000F Sync
            if (temp_410)
            {
                // 0x000C70: 0x5080000000471010 Mufu
                temp_411 = 1.0 / temp_381;
                // 0x000C78: 0x5C69100001071110 Fmul
                temp_412 = 0.0 - temp_411;
                temp_413 = temp_385 * temp_412;
                // 0x000C88: 0x5C60138001071414 Fmnmx
                temp_414 = min(temp_341, temp_413);
                // 0x000C90: 0x5C61178001471010 Fmnmx
                temp_415 = 0.0 - temp_413;
                temp_416 = max(temp_415, temp_414);
                // 0x000C98: 0x59A00A8001071015 Ffma
                temp_417 = fma(temp_416, temp_416, temp_345);
                // 0x000CA8: 0x5080000000571511 Mufu
                temp_418 = inversesqrt(temp_417);
                // 0x000CB0: 0x5080000000871515 Mufu
                temp_419 = sqrt(temp_417);
                // 0x000CB8: 0x5C68100001173333 Fmul
                temp_420 = temp_337 * temp_418;
                // 0x000CC8: 0x5C68100001173434 Fmul
                temp_421 = temp_339 * temp_418;
                // 0x000CD0: 0x5C68100001171010 Fmul
                temp_422 = temp_416 * temp_418;
                // 0x000CD8: 0x5C58100003372511 Fadd
                temp_423 = temp_105 + temp_420;
                // 0x000CE8: 0x5C58100003472435 Fadd
                temp_424 = temp_107 + temp_421;
                // 0x000CF0: 0x5C58100001070E17 Fadd
                temp_425 = temp_109 + temp_422;
                // 0x000CF8: 0x5C68100001171114 Fmul
                temp_426 = temp_423 * temp_423;
                // 0x000D08: 0x59A00A0003573514 Ffma
                temp_427 = fma(temp_424, temp_424, temp_426);
                // 0x000D10: 0x59A00A0001771714 Ffma
                temp_428 = fma(temp_425, temp_425, temp_427);
                // 0x000D18: 0x5080000000571414 Mufu
                temp_429 = inversesqrt(temp_428);
                // 0x000D28: 0x5C68100001471111 Fmul
                temp_430 = temp_423 * temp_429;
                // 0x000D30: 0x5C68100001471717 Fmul
                temp_431 = temp_425 * temp_429;
                // 0x000D38: 0x5C68100001473535 Fmul
                temp_432 = temp_424 * temp_429;
                // 0x000D48: 0x5C68100001173314 Fmul
                temp_433 = temp_420 * temp_430;
                // 0x000D50: 0x5C68100001170C11 Fmul
                temp_434 = temp_70 * temp_430;
                // 0x000D58: 0x5C68100003370C33 Fmul
                temp_435 = temp_70 * temp_420;
                // 0x000D68: 0x59A00A0003573414 Ffma
                temp_436 = fma(temp_421, temp_432, temp_433);
                // 0x000D70: 0x59A0088003570135 Ffma
                temp_437 = fma(temp_69, temp_432, temp_434);
                // 0x000D78: 0xEF94008002C73211 Ldc
                temp_438 = temp_308 + 44;
                temp_439 = uint(temp_438) >> 2;
                temp_440 = temp_439 >> 2;
                temp_441 = int(temp_439) & 3;
                temp_442 = fp_c8.data[int(temp_440)][temp_441];
                // 0x000D88: 0x59A0198003470133 Ffma
                temp_443 = fma(temp_69, temp_421, temp_435);
                // 0x000D90: 0x59A40A0001771014 Ffma
                temp_444 = fma(temp_422, temp_431, temp_436);
                temp_445 = clamp(temp_444, 0.0, 1.0);
                // 0x000D98: 0x59A41A8001771235 Ffma
                temp_446 = fma(temp_68, temp_431, temp_437);
                temp_447 = clamp(temp_446, 0.0, 1.0);
                // 0x000DA8: 0x59A0198001071233 Ffma
                temp_448 = fma(temp_68, temp_422, temp_443);
                // 0x000DB0: 0x5080000000471111 Mufu
                temp_449 = 1.0 / temp_442;
                // 0x000DB8: 0x51A00A8400471111 Ffma
                temp_450 = fma(temp_449, temp_419, fp_c1.data[1].x);
                // 0x000DC8: 0xEF94008000873215 Ldc
                temp_451 = temp_308 + 8;
                temp_452 = uint(temp_451) >> 2;
                temp_453 = temp_452 >> 2;
                temp_454 = int(temp_452) & 3;
                temp_455 = fp_c8.data[int(temp_453)][temp_454];
                // 0x000DD0: 0x5080000000471111 Mufu
                temp_456 = 1.0 / temp_450;
                // 0x000DD8: 0x1E23FB3333371111 Fmul32i
                temp_457 = temp_456 * 1.39999998;
                // 0x000DE8: 0x5C68100001171117 Fmul
                temp_458 = temp_457 * temp_457;
                // 0x000DF0: 0xEF95008000073210 Ldc
                temp_459 = uint(temp_308) >> 2;
                temp_460 = temp_459 >> 2;
                temp_461 = int(temp_459) & 3;
                temp_462 = fp_c8.data[int(temp_460)][temp_461];
                temp_463 = int(temp_459) + 1;
                temp_464 = uint(temp_463) >> 2;
                temp_465 = temp_463 & 3;
                temp_466 = fp_c8.data[int(temp_464)][temp_465];
                // 0x000DF8: 0x59A10B8001773317 Ffma
                temp_467 = 0.0 - temp_458;
                temp_468 = fma(temp_448, temp_467, temp_458);
                // 0x000E08: 0x01040DF760C7F032 Mov32i
                // 0x000E10: 0x5C5C100001773317 Fadd
                temp_469 = temp_448 + temp_468;
                temp_470 = clamp(temp_469, 0.0, 1.0);
                // 0x000E18: 0x5C5C30000FF73333 Fadd
                temp_471 = temp_448 + -0.0;
                temp_472 = clamp(temp_471, 0.0, 1.0);
                // 0x000E28: 0x49A2190400071432 Ffma
                temp_473 = fma(temp_445, fp_c1.data[0].x, -6.98316002);
                // 0x000E30: 0x5C68100003271432 Fmul
                temp_474 = temp_445 * temp_473;
                // 0x000E38: 0x59A21A8003573014 Ffma
                temp_475 = 0.0 - temp_447;
                temp_476 = fma(temp_143, temp_447, temp_475);
                // 0x000E48: 0x5C90008003270032 Rro
                // 0x000E50: 0x51A00A0400373534 Ffma
                temp_477 = fma(temp_447, temp_476, fp_c1.data[0].w);
                // 0x000E58: 0x5080000000273232 Mufu
                temp_478 = exp2(temp_474);
                // 0x000E68: 0x59A1198003372F14 Ffma
                temp_479 = 0.0 - temp_472;
                temp_480 = fma(temp_145, temp_479, temp_472);
                // 0x000E70: 0x5080000000473434 Mufu
                temp_481 = 1.0 / temp_477;
                // 0x000E78: 0x5C68100001571615 Fmul
                temp_482 = temp_396 * temp_455;
                // 0x000E88: 0x5C58100001472F14 Fadd
                temp_483 = temp_145 + temp_480;
                // 0x000E90: 0x5080000000471414 Mufu
                temp_484 = 1.0 / temp_483;
                // 0x000E98: 0x5C68100003473134 Fmul
                temp_485 = temp_138 * temp_481;
                // 0x000EA8: 0x5C68100001071610 Fmul
                temp_486 = temp_396 * temp_462;
                // 0x000EB0: 0x5C68100003473434 Fmul
                temp_487 = temp_485 * temp_485;
                // 0x000EB8: 0x5C68100001171611 Fmul
                temp_488 = temp_396 * temp_466;
                // 0x000EC8: 0x5C68100001472D14 Fmul
                temp_489 = temp_214 * temp_484;
                // 0x000ED0: 0x59A1190003271816 Ffma
                temp_490 = 0.0 - temp_478;
                temp_491 = fma(temp_135, temp_490, temp_478);
                // 0x000ED8: 0x5C68100001473414 Fmul
                temp_492 = temp_487 * temp_489;
                // 0x000EE8: 0x59A1190003271934 Ffma
                temp_493 = 0.0 - temp_478;
                temp_494 = fma(temp_133, temp_493, temp_478);
                // 0x000EF0: 0x59A1190003271332 Ffma
                temp_495 = 0.0 - temp_478;
                temp_496 = fma(temp_221, temp_495, temp_478);
                // 0x000EF8: 0x5C58100001671816 Fadd
                temp_497 = temp_135 + temp_491;
                // 0x000F08: 0x5C68100001473314 Fmul
                temp_498 = temp_472 * temp_492;
                // 0x000F10: 0x5C58100003471934 Fadd
                temp_499 = temp_133 + temp_494;
                // 0x000F18: 0x5C58100003271332 Fadd
                temp_500 = temp_221 + temp_496;
                // 0x000F28: 0x4C68101406971616 Fmul
                temp_501 = temp_497 * fp_c5.data[26].y;
                // 0x000F30: 0x4C68101406973434 Fmul
                temp_502 = temp_499 * fp_c5.data[26].y;
                // 0x000F38: 0x4C68101406973232 Fmul
                temp_503 = temp_500 * fp_c5.data[26].y;
                // 0x000F48: 0x5C68100001171616 Fmul
                temp_504 = temp_501 * temp_488;
                // 0x000F50: 0x5C68100001771111 Fmul
                temp_505 = temp_488 * temp_470;
                // 0x000F58: 0x5C68100001073434 Fmul
                temp_506 = temp_502 * temp_486;
                // 0x000F68: 0x5C68100001573232 Fmul
                temp_507 = temp_503 * temp_482;
                // 0x000F70: 0x5C68100001771010 Fmul
                temp_508 = temp_486 * temp_470;
                // 0x000F78: 0x5C68100001771515 Fmul
                temp_509 = temp_482 * temp_470;
                // 0x000F88: 0x5C68100001471616 Fmul
                temp_510 = temp_504 * temp_498;
                // 0x000F90: 0x49A0030400671106 Ffma
                temp_511 = fma(temp_505, fp_c1.data[1].z, temp_282);
                // 0x000F98: 0x5C68100001473434 Fmul
                temp_512 = temp_506 * temp_498;
                // 0x000FA8: 0x5C68100001473232 Fmul
                temp_513 = temp_507 * temp_498;
                // 0x000FB0: 0x49A0038400671007 Ffma
                temp_514 = fma(temp_508, fp_c1.data[1].z, temp_283);
                // 0x000FB8: 0x49A0028400671505 Ffma
                temp_515 = fma(temp_509, fp_c1.data[1].z, temp_284);
                // 0x000FC8: 0x49A0048400571609 Ffma
                temp_516 = fma(temp_510, fp_c1.data[1].y, temp_285);
                // 0x000FD0: 0x49A005040057340A Ffma
                temp_517 = fma(temp_512, fp_c1.data[1].y, temp_286);
                // 0x000FD8: 0x49A0040400573208 Ffma
                temp_518 = fma(temp_513, fp_c1.data[1].y, temp_287);
                // 0x000FE8: 0xF0F800000007000F Sync
                temp_401 = temp_511;
                temp_402 = temp_514;
                temp_403 = temp_515;
                temp_404 = temp_516;
                temp_405 = temp_517;
                temp_406 = temp_518;
            }
            // 0x000FF0: 0xE2400FFFA289000F Bra
            temp_282 = temp_401;
            temp_283 = temp_402;
            temp_284 = temp_403;
            temp_285 = temp_404;
            temp_286 = temp_405;
            temp_287 = temp_406;
            temp_288 = temp_402;
            temp_289 = temp_401;
            temp_290 = temp_403;
            temp_291 = temp_406;
            temp_292 = temp_405;
            temp_293 = temp_404;
        }
        while (!temp_295);
        // 0x000FF8: 0xF0F800000007000F Sync
    }
    // 0x001008: 0x5C62578000170C10 Fmnmx
    temp_519 = abs(temp_70);
    temp_520 = abs(temp_69);
    temp_521 = max(temp_519, temp_520);
    // 0x001010: 0xE003FF87CFF7FF2A Ipa
    // 0x001018: 0x5C62578002972B0E Fmnmx
    temp_522 = abs(temp_205);
    temp_523 = abs(temp_207);
    temp_524 = max(temp_522, temp_523);
    // 0x001028: 0xEF4410000007FF32 Ldl
    temp_525 = uintBitsToFloat(local_memory[0]);
    // 0x001030: 0x5C60578001071210 Fmnmx
    temp_526 = abs(temp_68);
    temp_527 = max(temp_526, temp_521);
    // 0x001038: 0xEF4410000087FF34 Ldl
    temp_528 = uintBitsToFloat(local_memory[2]);
    // 0x001048: 0x5C60578000E70D0E Fmnmx
    temp_529 = abs(temp_277);
    temp_530 = max(temp_529, temp_524);
    // 0x001050: 0x508000000047102F Mufu
    temp_531 = 1.0 / temp_527;
    // 0x001058: 0x010000000017F014 Mov32i
    // 0x001068: 0xEF4410000047FF33 Ldl
    temp_532 = uintBitsToFloat(local_memory[1]);
    // 0x001070: 0x3868104080072825 Fmul
    temp_533 = temp_131 * 4.0;
    // 0x001078: 0x5080000000470E0E Mufu
    temp_534 = 1.0 / temp_530;
    // 0x001088: 0x5C69100002F71212 Fmul
    temp_535 = 0.0 - temp_531;
    temp_536 = temp_68 * temp_535;
    // 0x001090: 0x5C68100002F70C10 Fmul
    temp_537 = temp_70 * temp_531;
    // 0x001098: 0x5080000000472A2A Mufu
    // 0x0010A8: 0x5C68100002F70111 Fmul
    temp_538 = temp_69 * temp_531;
    // 0x0010B0: 0x5C68100000E72B15 Fmul
    temp_539 = temp_205 * temp_534;
    // 0x0010B8: 0x5C68100000E72916 Fmul
    temp_540 = temp_207 * temp_534;
    // 0x0010C8: 0x5C69100000E70D17 Fmul
    temp_541 = 0.0 - temp_534;
    temp_542 = temp_277 * temp_541;
    // 0x0010D0: 0xC0BA0163EFF7100C Tex
    temp_543 = textureLod(fp_t_tcb_16, vec3(temp_537, temp_538, temp_536), 0.0).xyz;
    temp_544 = temp_543.x;
    temp_545 = temp_543.y;
    temp_546 = temp_543.z;
    // 0x0010D8: 0x38681040E0072829 Fmul
    temp_547 = temp_131 * 7.0;
    // 0x0010E8: 0xE043FF9102A7FF2C Ipa
    temp_548 = in_attr9.x;
    // 0x0010F0: 0x5C98078001270024 Mov
    // 0x0010F8: 0xE043FF9142A7FF2D Ipa
    temp_549 = in_attr9.y;
    // 0x001108: 0x4C98079C0207002B Mov
    // 0x001110: 0xE043FF9182A7FF2E Ipa
    temp_550 = in_attr9.z;
    // 0x001118: 0xC1BA0143F2971414 Tex
    temp_551 = textureLod(fp_t_tcb_14, vec4(temp_539, temp_540, temp_542, float(1)), temp_547).xyz;
    temp_552 = temp_551.x;
    temp_553 = temp_551.y;
    temp_554 = temp_551.z;
    // 0x001128: 0xD9A2018242471010 Texs
    temp_555 = textureLod(fp_t_tcb_18, vec3(temp_537, temp_538, temp_536), temp_533).xyz;
    temp_556 = temp_555.x;
    temp_557 = temp_555.y;
    temp_558 = temp_555.z;
    // 0x001130: 0xDEBA0000C2B72C2B TexB
    temp_559 = texture(fp_t_cb7_20, vec3(temp_548, temp_549, temp_550)).x;
    // 0x001138: 0x3859103F80072828 Fadd
    temp_560 = 0.0 - temp_131;
    temp_561 = temp_560 + 1.0;
    // 0x001148: 0x49A01B180A170736 Ffma
    temp_562 = fma(temp_288, fp_c6.data[40].y, temp_228);
    // 0x001150: 0x010410676C97F007 Mov32i
    // 0x001158: 0x5C68100002872828 Fmul
    temp_563 = temp_561 * temp_561;
    // 0x001168: 0x49A007980A17060F Ffma
    temp_564 = fma(temp_289, fp_c6.data[40].y, temp_237);
    // 0x001170: 0x49A005980A17050B Ffma
    temp_565 = fma(temp_290, fp_c6.data[40].y, temp_263);
    // 0x001178: 0x3859103F80072606 Fadd
    temp_566 = 0.0 - temp_176;
    temp_567 = temp_566 + 1.0;
    // 0x001188: 0x49A0038400A72607 Ffma
    temp_568 = fma(temp_176, fp_c1.data[2].z, 8.40400028);
    // 0x001190: 0x1E23E468DB972605 Fmul32i
    temp_569 = temp_176 * 0.193900004;
    // 0x001198: 0x5C68100002872812 Fmul
    temp_570 = temp_563 * temp_563;
    // 0x0011A8: 0x0103E2CD9E87F029 Mov32i
    // 0x0011B0: 0x4C68101809070625 Fmul
    temp_571 = temp_567 * fp_c6.data[36].x;
    // 0x0011B8: 0x5080000000370606 Mufu
    temp_572 = log2(temp_567);
    // 0x0011C8: 0x51A0038400B72617 Ffma
    temp_573 = fma(temp_176, temp_568, fp_c1.data[2].w);
    // 0x0011D0: 0x49A0028400771207 Ffma
    temp_574 = fma(temp_570, fp_c1.data[1].w, temp_569);
    // 0x0011D8: 0x5080400000372505 Mufu
    temp_575 = abs(temp_571);
    temp_576 = log2(temp_575);
    // 0x0011E8: 0x49A2148400C71228 Ffma
    temp_577 = fma(temp_570, fp_c1.data[3].x, -0.168799996);
    // 0x0011F0: 0x0103F0000007F02C Mov32i
    // 0x0011F8: 0x4C9807980B47002D Mov
    // 0x001208: 0x5C68100002871229 Fmul
    temp_578 = temp_570 * temp_577;
    // 0x001210: 0x088BF05D63970728 Fadd32i
    temp_579 = temp_574 + -0.522800028;
    // 0x001218: 0x51A00B8400D72617 Ffma
    temp_580 = fma(temp_176, temp_573, fp_c1.data[3].y);
    // 0x001228: 0x32A0163F00070107 Ffma
    temp_581 = fma(temp_69, 0.5, 0.5);
    // 0x001230: 0xF0F0000034670000 Depbar
    // 0x001238: 0x51A216980B471F1F Ffma
    temp_582 = 0.0 - fp_c6.data[45].x;
    temp_583 = fma(temp_94, fp_c6.data[45].x, temp_582);
    // 0x001248: 0x4C68101809170505 Fmul
    temp_584 = temp_576 * fp_c6.data[36].y;
    // 0x001250: 0x5C68100002872625 Fmul
    temp_585 = temp_176 * temp_579;
    // 0x001258: 0x4C98079800870028 Mov
    // 0x001268: 0x51A216980B470000 Ffma
    temp_586 = 0.0 - fp_c6.data[45].x;
    temp_587 = fma(temp_95, fp_c6.data[45].x, temp_586);
    // 0x001270: 0x51A216980B471E1E Ffma
    temp_588 = 0.0 - fp_c6.data[45].x;
    temp_589 = fma(temp_93, fp_c6.data[45].x, temp_588);
    // 0x001278: 0x4C68101808970606 Fmul
    temp_590 = temp_572 * fp_c6.data[34].y;
    // 0x001288: 0x4C9807980097002C Mov
    // 0x001290: 0x0104066978D7F02D Mov32i
    // 0x001298: 0x4C98079800A7002E Mov
    // 0x0012A8: 0x5C60138002971717 Fmnmx
    temp_591 = min(temp_580, temp_578);
    // 0x0012B0: 0x4C98079809970001 Mov
    // 0x0012B8: 0x5C90008000570029 Rro
    // 0x0012C8: 0x4C59101800472805 Fadd
    temp_592 = 0.0 - fp_c6.data[2].x;
    temp_593 = temp_592 + fp_c6.data[1].x;
    // 0x0012D0: 0x5084000000272929 Mufu
    temp_594 = exp2(temp_584);
    temp_595 = clamp(temp_594, 0.0, 1.0);
    // 0x0012D8: 0x5C90008000670028 Rro
    // 0x0012E8: 0x49A216840087122D Ffma
    temp_596 = fma(temp_570, fp_c1.data[2].x, -3.60299993);
    // 0x0012F0: 0x5084000000272828 Mufu
    temp_597 = exp2(temp_590);
    temp_598 = clamp(temp_597, 0.0, 1.0);
    // 0x0012F8: 0x4C59101800572C06 Fadd
    temp_599 = 0.0 - fp_c6.data[2].y;
    temp_600 = temp_599 + fp_c6.data[1].y;
    // 0x001308: 0x4C59101800672E2C Fadd
    temp_601 = 0.0 - fp_c6.data[2].z;
    temp_602 = temp_601 + fp_c6.data[1].z;
    // 0x001310: 0x4C5810140817012E Fadd
    temp_603 = fp_c6.data[38].y + fp_c5.data[32].y;
    // 0x001318: 0xE04BFF9042A7FF01 Ipa
    temp_604 = in_attr8.y;
    temp_605 = clamp(temp_604, 0.0, 1.0);
    // 0x001328: 0x51A016840097122F Ffma
    temp_606 = fma(temp_570, temp_596, fp_c1.data[2].y);
    // 0x001330: 0x4C98079408270026 Mov
    // 0x001338: 0x5C68100002972E29 Fmul
    temp_607 = temp_603 * temp_595;
    // 0x001348: 0x59A0128002F71212 Ffma
    temp_608 = fma(temp_570, temp_606, temp_585);
    // 0x001350: 0x4C68101808872825 Fmul
    temp_609 = temp_598 * fp_c6.data[34].x;
    // 0x001358: 0x4C6810140697262F Fmul
    temp_610 = fp_c5.data[32].z * fp_c5.data[26].y;
    // 0x001368: 0x386C10424807182E Fmul
    temp_611 = temp_135 * 50.0;
    temp_612 = clamp(temp_611, 0.0, 1.0);
    // 0x001370: 0x5C5C30000FF71717 Fadd
    temp_613 = temp_591 + -0.0;
    temp_614 = clamp(temp_613, 0.0, 1.0);
    // 0x001378: 0x4C5C100400E71228 Fadd
    temp_615 = temp_608 + fp_c1.data[3].z;
    temp_616 = clamp(temp_615, 0.0, 1.0);
    // 0x001388: 0x4C68101808E72912 Fmul
    temp_617 = temp_607 * fp_c6.data[35].z;
    // 0x001390: 0x51A0039800870505 Ffma
    temp_618 = fma(temp_593, temp_581, fp_c6.data[2].x);
    // 0x001398: 0x5C68100001772E2E Fmul
    temp_619 = temp_612 * temp_614;
    // 0x0013A8: 0x5C59100002871728 Fadd
    temp_620 = 0.0 - temp_614;
    temp_621 = temp_620 + temp_616;
    // 0x0013B0: 0x010404000007F017 Mov32i
    // 0x0013B8: 0x51A0039800970606 Ffma
    temp_622 = fma(temp_600, temp_581, fp_c6.data[2].y);
    // 0x0013C8: 0x51A0039800A72C07 Ffma
    temp_623 = fma(temp_602, temp_581, fp_c6.data[2].z);
    // 0x0013D0: 0x4C9807980867002C Mov
    // 0x0013D8: 0x4C68101808D72926 Fmul
    temp_624 = temp_607 * fp_c6.data[35].y;
    // 0x0013E8: 0x4C68101808C72929 Fmul
    temp_625 = temp_607 * fp_c6.data[35].x;
    // 0x0013F0: 0x51A0161808672525 Ffma
    temp_626 = fma(temp_609, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x0013F8: 0x4C68101808771D1D Fmul
    temp_627 = temp_87 * fp_c6.data[33].w;
    // 0x001408: 0x59A0170002871919 Ffma
    temp_628 = fma(temp_133, temp_621, temp_619);
    // 0x001410: 0x59A0170002871818 Ffma
    temp_629 = fma(temp_135, temp_621, temp_619);
    // 0x001418: 0x59A0170002871313 Ffma
    temp_630 = fma(temp_221, temp_621, temp_619);
    // 0x001428: 0x4C68101406971919 Fmul
    temp_631 = temp_628 * fp_c5.data[26].y;
    // 0x001430: 0x4C68101406971818 Fmul
    temp_632 = temp_629 * fp_c5.data[26].y;
    // 0x001438: 0x4C68101406971313 Fmul
    temp_633 = temp_630 * fp_c5.data[26].y;
    // 0x001448: 0xF0F0000034470000 Depbar
    // 0x001450: 0x49A019180A170808 Ffma
    temp_634 = fma(temp_291, fp_c6.data[40].y, temp_525);
    // 0x001458: 0x59A0040002F71208 Ffma
    temp_635 = fma(temp_617, temp_610, temp_634);
    // 0x001468: 0x49A1091408271212 Ffma
    temp_636 = 0.0 - fp_c5.data[32].z;
    temp_637 = fma(temp_617, temp_636, temp_617);
    // 0x001470: 0x49A01A180A170A0A Ffma
    temp_638 = fma(temp_292, fp_c6.data[40].y, temp_528);
    // 0x001478: 0x5C58100001270B0B Fadd
    temp_639 = temp_565 + temp_637;
    // 0x001488: 0x5C68100000170112 Fmul
    temp_640 = temp_605 * temp_605;
    // 0x001490: 0xF0F0000034370000 Depbar
    // 0x001498: 0x49A019980A170909 Ffma
    temp_641 = fma(temp_293, fp_c6.data[40].y, temp_532);
    // 0x0014A8: 0x59A0050002F7290A Ffma
    temp_642 = fma(temp_625, temp_610, temp_638);
    // 0x0014B0: 0x49A1149408272929 Ffma
    temp_643 = 0.0 - fp_c5.data[32].z;
    temp_644 = fma(temp_625, temp_643, temp_625);
    // 0x0014B8: 0xF0F0000034270000 Depbar
    // 0x0014C8: 0x49A006040067050C Ffma
    temp_645 = fma(temp_618, fp_c1.data[1].z, temp_544);
    // 0x0014D0: 0x33A00BC000070105 Ffma
    temp_646 = fma(temp_605, -2.0, 3.0);
    // 0x0014D8: 0x49A0068400670606 Ffma
    temp_647 = fma(temp_622, fp_c1.data[1].z, temp_545);
    // 0x0014E8: 0x49A0070400670707 Ffma
    temp_648 = fma(temp_623, fp_c1.data[1].z, temp_546);
    // 0x0014F0: 0x5C68100001270501 Fmul
    temp_649 = temp_646 * temp_640;
    // 0x0014F8: 0xE043FF9002A7FF05 Ipa
    temp_650 = in_attr8.x;
    // 0x001508: 0x59A2060002572222 Ffma
    temp_651 = 0.0 - temp_645;
    temp_652 = fma(temp_84, temp_626, temp_651);
    // 0x001510: 0xE043FF8C82A7FF2A Ipa
    temp_653 = in_attr4.z;
    // 0x001518: 0x59A0048002F72609 Ffma
    temp_654 = fma(temp_624, temp_610, temp_641);
    // 0x001528: 0x49A1131408272626 Ffma
    temp_655 = 0.0 - fp_c5.data[32].z;
    temp_656 = fma(temp_624, temp_655, temp_624);
    // 0x001530: 0x5C58100002973636 Fadd
    temp_657 = temp_562 + temp_644;
    // 0x001538: 0x59A2030002572323 Ffma
    temp_658 = 0.0 - temp_647;
    temp_659 = fma(temp_85, temp_626, temp_658);
    // 0x001548: 0x59A2038002571C1C Ffma
    temp_660 = 0.0 - temp_648;
    temp_661 = fma(temp_86, temp_626, temp_660);
    // 0x001550: 0x59A0060001D7220C Ffma
    temp_662 = fma(temp_652, temp_627, temp_645);
    // 0x001558: 0xF0F0000034170000 Depbar
    // 0x001568: 0x49A0081808571410 Ffma
    temp_663 = fma(temp_552, fp_c6.data[33].y, temp_556);
    // 0x001570: 0x5C58100002670F0F Fadd
    temp_664 = temp_564 + temp_656;
    // 0x001578: 0x59A0030001D72306 Ffma
    temp_665 = fma(temp_659, temp_627, temp_647);
    // 0x001588: 0x59A0038001D71C1C Ffma
    temp_666 = fma(temp_661, temp_627, temp_648);
    // 0x001590: 0x5C58100003670C0C Fadd
    temp_667 = temp_662 + temp_657;
    // 0x001598: 0x59A005000107190A Ffma
    temp_668 = fma(temp_631, temp_663, temp_642);
    // 0x0015A8: 0x49A0121808571616 Ffma
    temp_669 = fma(temp_554, fp_c6.data[33].y, temp_558);
    // 0x0015B0: 0x5C58100000F70606 Fadd
    temp_670 = temp_665 + temp_664;
    // 0x0015B8: 0x5C58100000B71C1C Fadd
    temp_671 = temp_666 + temp_639;
    // 0x0015C8: 0x59A1060000C72707 Ffma
    temp_672 = 0.0 - temp_667;
    temp_673 = fma(temp_90, temp_672, temp_667);
    // 0x0015D0: 0x49A008980857150B Ffma
    temp_674 = fma(temp_553, fp_c6.data[33].y, temp_557);
    // 0x0015D8: 0x4C9807980287000D Mov
    // 0x0015E8: 0x59A0040001671308 Ffma
    temp_675 = fma(temp_633, temp_669, temp_635);
    // 0x0015F0: 0x59A1030000672706 Ffma
    temp_676 = 0.0 - temp_670;
    temp_677 = fma(temp_90, temp_676, temp_670);
    // 0x0015F8: 0x59A10E0001C72727 Ffma
    temp_678 = 0.0 - temp_671;
    temp_679 = fma(temp_90, temp_678, temp_671);
    // 0x001608: 0x59A0050000772007 Ffma
    temp_680 = fma(temp_14, temp_673, temp_668);
    // 0x001610: 0x59A0048000B71818 Ffma
    temp_681 = fma(temp_632, temp_674, temp_654);
    // 0x001618: 0x49A502980BC72B2B Ffma
    temp_682 = 0.0 - fp_c6.data[47].x;
    temp_683 = fma(temp_559, temp_682, temp_650);
    temp_684 = clamp(temp_683, 0.0, 1.0);
    // 0x001628: 0x51A0069802871E1E Ffma
    temp_685 = fma(temp_589, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001630: 0x5080000000372B2B Mufu
    temp_686 = log2(temp_684);
    // 0x001638: 0x4C9807980297000C Mov
    // 0x001648: 0x5C68100000770404 Fmul
    temp_687 = temp_275 * temp_680;
    // 0x001650: 0x59A00C0000672106 Ffma
    temp_688 = fma(temp_15, temp_677, temp_681);
    // 0x001658: 0x4C98079802A70007 Mov
    // 0x001668: 0x59A0040002771A08 Ffma
    temp_689 = fma(temp_16, temp_679, temp_675);
    // 0x001670: 0x51A0061802971F09 Ffma
    temp_690 = fma(temp_583, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001678: 0x5C58300001E70405 Fadd
    temp_691 = 0.0 - temp_685;
    temp_692 = temp_687 + temp_691;
    // 0x001688: 0x5C68100000670303 Fmul
    temp_693 = temp_279 * temp_688;
    // 0x001690: 0x51A0039802A70000 Ffma
    temp_694 = fma(temp_587, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001698: 0x5C68100000870202 Fmul
    temp_695 = temp_281 * temp_689;
    // 0x0016A8: 0x4C68101803172B08 Fmul
    temp_696 = temp_686 * fp_c6.data[12].y;
    // 0x0016B0: 0x49A00F180BF70507 Ffma
    temp_697 = fma(temp_692, fp_c6.data[47].w, temp_685);
    // 0x0016B8: 0x5C58300000970306 Fadd
    temp_698 = 0.0 - temp_690;
    temp_699 = temp_693 + temp_698;
    // 0x0016C8: 0x5C58300000070205 Fadd
    temp_700 = 0.0 - temp_694;
    temp_701 = temp_695 + temp_700;
    // 0x0016D0: 0x4C68101803770101 Fmul
    temp_702 = temp_649 * fp_c6.data[13].w;
    // 0x0016D8: 0x5C9000800087000A Rro
    // 0x0016E8: 0x49A004980BF70606 Ffma
    temp_703 = fma(temp_699, fp_c6.data[47].w, temp_690);
    // 0x0016F0: 0x5080000000270A0A Mufu
    temp_704 = exp2(temp_696);
    // 0x0016F8: 0x49A000180BF70505 Ffma
    temp_705 = fma(temp_701, fp_c6.data[47].w, temp_694);
    // 0x001708: 0x5C60178000771E07 Fmnmx
    temp_706 = max(temp_685, temp_697);
    // 0x001710: 0x49A2009803470108 Ffma
    temp_707 = 0.0 - temp_702;
    temp_708 = fma(temp_702, fp_c6.data[13].x, temp_707);
    // 0x001718: 0x5C60178000670906 Fmnmx
    temp_709 = max(temp_690, temp_703);
    // 0x001728: 0x49A2009803570109 Ffma
    temp_710 = 0.0 - temp_702;
    temp_711 = fma(temp_702, fp_c6.data[13].y, temp_710);
    // 0x001730: 0x5C60178000570005 Fmnmx
    temp_712 = max(temp_694, temp_705);
    // 0x001738: 0x49A2009803670100 Ffma
    temp_713 = 0.0 - temp_702;
    temp_714 = fma(temp_702, fp_c6.data[13].z, temp_713);
    // 0x001748: 0x59A0038000870701 Ffma
    temp_715 = fma(temp_706, temp_708, temp_706);
    // 0x001750: 0x59A0030000970609 Ffma
    temp_716 = fma(temp_709, temp_711, temp_709);
    // 0x001758: 0x4C68101802B70A06 Fmul
    temp_717 = temp_704 * fp_c6.data[10].w;
    // 0x001768: 0x59A0028000070500 Ffma
    temp_718 = fma(temp_712, temp_714, temp_712);
    // 0x001770: 0x5C59100000170401 Fadd
    temp_719 = 0.0 - temp_687;
    temp_720 = temp_719 + temp_715;
    // 0x001778: 0x5C59100000970305 Fadd
    temp_721 = 0.0 - temp_693;
    temp_722 = temp_721 + temp_716;
    // 0x001788: 0x5C59100000070207 Fadd
    temp_723 = 0.0 - temp_695;
    temp_724 = temp_723 + temp_718;
    // 0x001790: 0x59A0020000670100 Ffma
    temp_725 = fma(temp_720, temp_717, temp_687);
    // 0x001798: 0x4C58100C03872A04 Fadd
    temp_726 = temp_653 + fp_c3.data[14].x;
    // 0x0017A8: 0x59A0018000670501 Ffma
    temp_727 = fma(temp_722, temp_717, temp_693);
    // 0x0017B0: 0x5C98078001B70003 Mov
    // 0x0017B8: 0x59A0010000670702 Ffma
    temp_728 = fma(temp_724, temp_717, temp_695);
    // 0x0017C8: 0x5C98078001B70007 Mov
    // 0x0017D0: 0x0103F4000007F005 Mov32i
    // 0x0017D8: 0x5C9807800FF70006 Mov
    // 0x0017E8: 0x49A37F8C03C70404 Ffma
    temp_729 = 0.0 - fp_c3.data[15].x;
    temp_730 = fma(temp_726, temp_729, -0.0);
    // 0x0017F0: 0xE30000000007000F Exit
    out_attr0.x = temp_725;
    out_attr0.y = temp_727;
    out_attr0.z = temp_728;
    out_attr0.w = temp_17;
    out_attr1.x = temp_730;
    out_attr1.y = 0.75;
    out_attr1.z = 0.0;
    out_attr1.w = temp_17;
    return;
}
