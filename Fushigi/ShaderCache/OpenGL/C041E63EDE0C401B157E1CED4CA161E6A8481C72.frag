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
layout (binding = 1) uniform sampler2D fp_t_tcb_24;
layout (binding = 2) uniform sampler2D fp_t_tcb_36;
layout (binding = 3) uniform sampler2D fp_t_tcb_28;
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
layout (location = 7) in vec4 in_attr7;
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
    uint temp_124;
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
    int temp_136;
    precise float temp_137;
    int temp_138;
    uint temp_139;
    uint temp_140;
    int temp_141;
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
    bool temp_236;
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
    int temp_322;
    bool temp_323;
    int temp_324;
    int temp_325;
    int temp_326;
    int temp_327;
    int temp_328;
    uint temp_329;
    uint temp_330;
    int temp_331;
    precise float temp_332;
    precise float temp_333;
    precise float temp_334;
    precise float temp_335;
    int temp_336;
    int temp_337;
    uint temp_338;
    uint temp_339;
    int temp_340;
    precise float temp_341;
    int temp_342;
    uint temp_343;
    int temp_344;
    precise float temp_345;
    int temp_346;
    uint temp_347;
    uint temp_348;
    int temp_349;
    precise float temp_350;
    int temp_351;
    uint temp_352;
    int temp_353;
    precise float temp_354;
    int temp_355;
    uint temp_356;
    uint temp_357;
    int temp_358;
    precise float temp_359;
    int temp_360;
    uint temp_361;
    int temp_362;
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
    precise float temp_374;
    precise float temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    precise float temp_381;
    int temp_382;
    uint temp_383;
    uint temp_384;
    int temp_385;
    precise float temp_386;
    precise float temp_387;
    precise float temp_388;
    int temp_389;
    uint temp_390;
    uint temp_391;
    int temp_392;
    precise float temp_393;
    int temp_394;
    uint temp_395;
    int temp_396;
    precise float temp_397;
    precise float temp_398;
    precise float temp_399;
    int temp_400;
    uint temp_401;
    uint temp_402;
    int temp_403;
    precise float temp_404;
    int temp_405;
    uint temp_406;
    int temp_407;
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
    precise float temp_419;
    precise float temp_420;
    precise float temp_421;
    precise float temp_422;
    precise float temp_423;
    uint temp_424;
    int temp_425;
    precise float temp_426;
    bool temp_427;
    uint temp_428;
    precise float temp_429;
    precise float temp_430;
    precise float temp_431;
    precise float temp_432;
    precise float temp_433;
    precise float temp_434;
    precise float temp_435;
    uint temp_436;
    precise float temp_437;
    bool temp_438;
    precise float temp_439;
    int temp_440;
    uint temp_441;
    uint temp_442;
    int temp_443;
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
    uint temp_473;
    uint temp_474;
    int temp_475;
    precise float temp_476;
    int temp_477;
    uint temp_478;
    int temp_479;
    precise float temp_480;
    precise float temp_481;
    int temp_482;
    uint temp_483;
    uint temp_484;
    int temp_485;
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
    precise vec3 temp_571;
    precise float temp_572;
    precise float temp_573;
    precise float temp_574;
    precise vec3 temp_575;
    precise float temp_576;
    precise float temp_577;
    precise float temp_578;
    precise vec3 temp_579;
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
    precise float temp_741;
    precise float temp_742;
    precise float temp_743;
    // 0x000008: 0x0103F0000007F028 Mov32i
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0x5C9807800FF70027 Mov
    // 0x000028: 0xE003FF870FF7FF0A Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000030: 0xE003FF874FF7FF01 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000038: 0x5080000000471010 Mufu
    // 0x000048: 0x4C68100C04A70A0A Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000050: 0x4C68100C04B70101 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000058: 0xE043FF8F0107FF0F Ipa
    temp_8 = in_attr7.x;
    // 0x000068: 0xE043FF8F4107FF11 Ipa
    temp_9 = in_attr7.y;
    // 0x000070: 0xE043FF8FC107FF06 Ipa
    temp_10 = in_attr7.w;
    // 0x000078: 0xE043FF8F8107FF07 Ipa
    temp_11 = in_attr7.z;
    // 0x000088: 0xD830026FF1170F02 Texs
    temp_12 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_13 = temp_12.x;
    temp_14 = temp_12.y;
    // 0x000090: 0xD822024091170F04 Texs
    temp_15 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyz;
    temp_16 = temp_15.x;
    temp_17 = temp_15.y;
    temp_18 = temp_15.z;
    // 0x000098: 0xD824036080670706 Texs
    temp_19 = texture(fp_t_tcb_36, vec2(temp_11, temp_10)).xyw;
    temp_20 = temp_19.x;
    temp_21 = temp_19.y;
    temp_22 = temp_19.z;
    // 0x0000A8: 0xD8220280B1170F0C Texs
    temp_23 = texture(fp_t_tcb_28, vec2(temp_8, temp_9)).xyz;
    temp_24 = temp_23.x;
    temp_25 = temp_23.y;
    temp_26 = temp_23.z;
    // 0x0000B0: 0xD822020000170A1E Texs
    temp_27 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_28 = temp_27.x;
    temp_29 = temp_27.y;
    temp_30 = temp_27.z;
    // 0x0000B8: 0xE043FF8C0107FF2E Ipa
    temp_31 = in_attr4.x;
    // 0x0000C8: 0xE043FF8C4107FF2D Ipa
    temp_32 = in_attr4.y;
    // 0x0000D0: 0xE043FF8C8107FF2C Ipa
    temp_33 = in_attr4.z;
    // 0x0000D8: 0xE043FF8A0107FF14 Ipa
    temp_34 = in_attr2.x;
    // 0x0000E8: 0xE043FF890107FF18 Ipa
    temp_35 = in_attr1.x;
    // 0x0000F0: 0xE043FF880107FF0E Ipa
    temp_36 = in_attr0.x;
    // 0x0000F8: 0xE043FF8A4107FF15 Ipa
    temp_37 = in_attr2.y;
    // 0x000108: 0xE043FF894107FF13 Ipa
    temp_38 = in_attr1.y;
    // 0x000110: 0xE043FF8A8107FF16 Ipa
    temp_39 = in_attr2.z;
    // 0x000118: 0xE043FF898107FF12 Ipa
    temp_40 = in_attr1.z;
    // 0x000128: 0xE2900000F3000000 Ssy
    // 0x000130: 0xE043FF884107FF11 Ipa
    temp_41 = in_attr0.y;
    // 0x000138: 0x5C68100002E72E0F Fmul
    temp_42 = temp_31 * temp_31;
    // 0x000148: 0x5C68100001871819 Fmul
    temp_43 = temp_35 * temp_35;
    // 0x000150: 0x5C68100000E70E1A Fmul
    temp_44 = temp_36 * temp_36;
    // 0x000158: 0x59A0078002D72D17 Ffma
    temp_45 = fma(temp_32, temp_32, temp_42);
    // 0x000168: 0xE043FF888107FF0F Ipa
    temp_46 = in_attr0.z;
    // 0x000170: 0x59A00C8001371319 Ffma
    temp_47 = fma(temp_38, temp_38, temp_43);
    // 0x000178: 0x59A00D000117111A Ffma
    temp_48 = fma(temp_41, temp_41, temp_44);
    // 0x000188: 0x59A00B8002C72C1B Ffma
    temp_49 = fma(temp_33, temp_33, temp_45);
    // 0x000190: 0x5C68100001471417 Fmul
    temp_50 = temp_34 * temp_34;
    // 0x000198: 0x5080000000571B1B Mufu
    temp_51 = inversesqrt(temp_49);
    // 0x0001A8: 0x59A00C8001271219 Ffma
    temp_52 = fma(temp_40, temp_40, temp_47);
    // 0x0001B0: 0x5080000000571919 Mufu
    temp_53 = inversesqrt(temp_52);
    // 0x0001B8: 0x59A00B8001571517 Ffma
    temp_54 = fma(temp_37, temp_37, temp_50);
    // 0x0001C8: 0x59A00B8001671617 Ffma
    temp_55 = fma(temp_39, temp_39, temp_54);
    // 0x0001D0: 0x5C69100001B72E2E Fmul
    temp_56 = 0.0 - temp_51;
    temp_57 = temp_31 * temp_56;
    // 0x0001D8: 0x5080000000571717 Mufu
    temp_58 = inversesqrt(temp_55);
    // 0x0001E8: 0x5C69100001B72D2D Fmul
    temp_59 = 0.0 - temp_51;
    temp_60 = temp_32 * temp_59;
    // 0x0001F0: 0x5C69100001B72C2C Fmul
    temp_61 = 0.0 - temp_51;
    temp_62 = temp_33 * temp_61;
    // 0x0001F8: 0x4C58301805C72E1D Fadd
    temp_63 = 0.0 - fp_c6.data[23].x;
    temp_64 = temp_57 + temp_63;
    // 0x000208: 0x4C58301805D72D20 Fadd
    temp_65 = 0.0 - fp_c6.data[23].y;
    temp_66 = temp_60 + temp_65;
    // 0x000210: 0x59A00D0000F70F1A Ffma
    temp_67 = fma(temp_46, temp_46, temp_48);
    // 0x000218: 0x4C58301805E72C21 Fadd
    temp_68 = 0.0 - fp_c6.data[23].z;
    temp_69 = temp_62 + temp_68;
    // 0x000228: 0x5080000000571A1C Mufu
    temp_70 = inversesqrt(temp_67);
    // 0x000230: 0x5C68100001D71D1B Fmul
    temp_71 = temp_64 * temp_64;
    // 0x000238: 0x5C68100001771414 Fmul
    temp_72 = temp_34 * temp_58;
    // 0x000248: 0x5C68100001771515 Fmul
    temp_73 = temp_37 * temp_58;
    // 0x000250: 0x5C68100001771616 Fmul
    temp_74 = temp_39 * temp_58;
    // 0x000258: 0x5C68100001971817 Fmul
    temp_75 = temp_35 * temp_53;
    // 0x000268: 0x5C68100001971318 Fmul
    temp_76 = temp_38 * temp_53;
    // 0x000270: 0x59A00D800207201B Ffma
    temp_77 = fma(temp_66, temp_66, temp_71);
    // 0x000278: 0x5C68100001971219 Fmul
    temp_78 = temp_40 * temp_53;
    // 0x000288: 0x5C68100001C70F12 Fmul
    temp_79 = temp_46 * temp_70;
    // 0x000290: 0x59A00D8002172122 Ffma
    temp_80 = fma(temp_69, temp_69, temp_77);
    // 0x000298: 0x5C68100001C70E1B Fmul
    temp_81 = temp_36 * temp_70;
    // 0x0002A8: 0x5080000000572222 Mufu
    temp_82 = inversesqrt(temp_80);
    // 0x0002B0: 0x5C68100001C7111A Fmul
    temp_83 = temp_41 * temp_70;
    // 0x0002B8: 0x5C68100002271D13 Fmul
    temp_84 = temp_64 * temp_82;
    // 0x0002C8: 0x5C68100002272111 Fmul
    temp_85 = temp_69 * temp_82;
    // 0x0002D0: 0x3868104180070A0A Fmul
    temp_86 = temp_6 * 16.0;
    // 0x0002D8: 0x5CA8148000A70A0A F2f
    temp_87 = floor(temp_86);
    // 0x0002E8: 0xF0F0000034270000 Depbar
    // 0x0002F0: 0x5C6810000037030F Fmul
    temp_88 = temp_14 * temp_14;
    // 0x0002F8: 0x5C68100000371414 Fmul
    temp_89 = temp_72 * temp_14;
    // 0x000308: 0x5C68100000371515 Fmul
    temp_90 = temp_73 * temp_14;
    // 0x000310: 0x5C68100000371603 Fmul
    temp_91 = temp_74 * temp_14;
    // 0x000318: 0x4C68101406570606 Fmul
    temp_92 = temp_20 * fp_c5.data[25].y;
    // 0x000328: 0x3868104110070116 Fmul
    temp_93 = temp_7 * 9.0;
    // 0x000330: 0x59A007800027020E Ffma
    temp_94 = fma(temp_13, temp_13, temp_88);
    // 0x000338: 0x5C6810000227200F Fmul
    temp_95 = temp_66 * temp_82;
    // 0x000348: 0x1E23E990AFE70420 Fmul32i
    temp_96 = temp_16 * 0.298911989;
    // 0x000350: 0x5C68100001372E04 Fmul
    temp_97 = temp_57 * temp_84;
    // 0x000358: 0x59A00A0001770214 Ffma
    temp_98 = fma(temp_13, temp_75, temp_89);
    // 0x000368: 0x5CA8148001670A17 F2f
    temp_99 = floor(temp_93);
    // 0x000370: 0x59A00A8001870215 Ffma
    temp_100 = fma(temp_13, temp_76, temp_90);
    // 0x000378: 0x385D103F80070E0E Fadd
    temp_101 = 0.0 - temp_94;
    temp_102 = temp_101 + 1.0;
    temp_103 = clamp(temp_102, 0.0, 1.0);
    // 0x000388: 0x59A0018001970203 Ffma
    temp_104 = fma(temp_13, temp_78, temp_91);
    // 0x000390: 0x5080000000870E1C Mufu
    temp_105 = sqrt(temp_103);
    // 0x000398: 0x49A0100400270520 Ffma
    temp_106 = fma(temp_17, fp_c1.data[0].z, temp_96);
    // 0x0003A8: 0x59A0020000F72D02 Ffma
    temp_107 = fma(temp_60, temp_95, temp_97);
    // 0x0003B0: 0x4C69101805C71304 Fmul
    temp_108 = 0.0 - fp_c6.data[23].x;
    temp_109 = temp_84 * temp_108;
    // 0x0003B8: 0x0103F8000007F018 Mov32i
    // 0x0003C8: 0x4C6810180A070606 Fmul
    temp_110 = temp_92 * fp_c6.data[40].x;
    // 0x0003D0: 0x4C5C101406470707 Fadd
    temp_111 = temp_21 + fp_c5.data[25].x;
    temp_112 = clamp(temp_111, 0.0, 1.0);
    // 0x0003D8: 0x49A0100400370920 Ffma
    temp_113 = fma(temp_18, fp_c1.data[0].w, temp_106);
    // 0x0003E8: 0x59A4010001172C09 Ffma
    temp_114 = fma(temp_62, temp_85, temp_107);
    temp_115 = clamp(temp_114, 0.0, 1.0);
    // 0x0003F0: 0x5080400000372020 Mufu
    temp_116 = abs(temp_113);
    temp_117 = log2(temp_116);
    // 0x0003F8: 0x49A1021805D70F0E Ffma
    temp_118 = 0.0 - fp_c6.data[23].y;
    temp_119 = fma(temp_95, temp_118, temp_109);
    // 0x000408: 0x32A0054180071717 Ffma
    temp_120 = fma(temp_99, 16.0, temp_87);
    // 0x000410: 0x59A00A0001C71B1B Ffma
    temp_121 = fma(temp_81, temp_105, temp_98);
    // 0x000418: 0x5CB0118001770A2A F2i
    temp_122 = trunc(temp_120);
    temp_123 = max(temp_122, 0.0);
    temp_124 = uint(temp_123);
    // 0x000428: 0x59A00A8001C71A15 Ffma
    temp_125 = fma(temp_83, temp_105, temp_100);
    // 0x000430: 0x01040DF760C7F014 Mov32i
    // 0x000438: 0x59A0018001C71212 Ffma
    temp_126 = fma(temp_79, temp_105, temp_104);
    // 0x000448: 0x49A5071805E7110E Ffma
    temp_127 = 0.0 - fp_c6.data[23].z;
    temp_128 = fma(temp_85, temp_127, temp_119);
    temp_129 = clamp(temp_128, 0.0, 1.0);
    // 0x000450: 0x5C68100001B71B02 Fmul
    temp_130 = temp_121 * temp_121;
    // 0x000458: 0x49A20A0400170904 Ffma
    temp_131 = fma(temp_115, fp_c1.data[0].y, -6.98316002);
    // 0x000468: 0x49A20A0400170E14 Ffma
    temp_132 = fma(temp_129, fp_c1.data[0].y, -6.98316002);
    // 0x000470: 0x59A0010001571503 Ffma
    temp_133 = fma(temp_125, temp_125, temp_130);
    // 0x000478: 0x1E23EE6666672002 Fmul32i
    temp_134 = temp_117 * 0.449999988;
    // 0x000488: 0x5C68100000470909 Fmul
    temp_135 = temp_115 * temp_131;
    // 0x000490: 0x3848000000872A20 Shl
    temp_136 = int(temp_124) << 8;
    // 0x000498: 0x5C68100001470E14 Fmul
    temp_137 = temp_129 * temp_132;
    // 0x0004A8: 0xEF94008200472020 Ldc
    temp_138 = temp_136 + 0x2004;
    temp_139 = uint(temp_138) >> 2;
    temp_140 = temp_139 >> 2;
    temp_141 = int(temp_139) & 3;
    temp_142 = fp_c8.data[int(temp_140)][temp_141];
    // 0x0004B0: 0x59A0018001271203 Ffma
    temp_143 = fma(temp_126, temp_126, temp_133);
    // 0x0004B8: 0x5C90008000270005 Rro
    // 0x0004C8: 0x5080000000570304 Mufu
    temp_144 = inversesqrt(temp_143);
    // 0x0004D0: 0x5080000000270505 Mufu
    temp_145 = exp2(temp_134);
    // 0x0004D8: 0x5C68100000471B0E Fmul
    temp_146 = temp_121 * temp_144;
    // 0x0004E8: 0x5C68100000471501 Fmul
    temp_147 = temp_125 * temp_144;
    // 0x0004F0: 0x32A20C4000070503 Ffma
    temp_148 = fma(temp_145, 2.0, -1.0);
    // 0x0004F8: 0x5C68100000471212 Fmul
    temp_149 = temp_126 * temp_144;
    // 0x000508: 0x4C98079403070004 Mov
    // 0x000510: 0x4C98079403270015 Mov
    // 0x000518: 0x5C68100001370E02 Fmul
    temp_150 = temp_146 * temp_84;
    // 0x000528: 0x4C98079403170013 Mov
    // 0x000530: 0x32A60C4000070516 Ffma
    temp_151 = fma(temp_145, 2.0, -1.0);
    temp_152 = clamp(temp_151, 0.0, 1.0);
    // 0x000538: 0x5C9000800097001B Rro
    // 0x000548: 0x5080000000271B1B Mufu
    temp_153 = exp2(temp_135);
    // 0x000550: 0x59A0010000F7010F Ffma
    temp_154 = fma(temp_147, temp_95, temp_150);
    // 0x000558: 0x386013BF80070602 Fmnmx
    temp_155 = min(temp_110, 1.0);
    // 0x000568: 0x5C5970000FF70306 Fadd
    temp_156 = abs(temp_148);
    temp_157 = 0.0 - temp_156;
    temp_158 = temp_157 + -0.0;
    // 0x000570: 0x59A407800117120A Ffma
    temp_159 = fma(temp_149, temp_85, temp_154);
    temp_160 = clamp(temp_159, 0.0, 1.0);
    // 0x000578: 0x4C60178400070202 Fmnmx
    temp_161 = max(temp_155, fp_c1.data[0].x);
    // 0x000588: 0x51A0021403070603 Ffma
    temp_162 = fma(temp_158, fp_c5.data[12].x, fp_c5.data[12].x);
    // 0x000590: 0x51A0099403170604 Ffma
    temp_163 = fma(temp_158, fp_c5.data[12].y, fp_c5.data[12].y);
    // 0x000598: 0x33A40C4000070511 Ffma
    temp_164 = fma(temp_145, -2.0, 1.0);
    temp_165 = clamp(temp_164, 0.0, 1.0);
    // 0x0005A8: 0x51A00A9403270606 Ffma
    temp_166 = fma(temp_158, fp_c5.data[12].z, fp_c5.data[12].z);
    // 0x0005B0: 0x5C68100002E70E13 Fmul
    temp_167 = temp_146 * temp_57;
    // 0x0005B8: 0x51A401040007022B Ffma
    temp_168 = fma(temp_161, temp_161, fp_c1.data[0].x);
    temp_169 = clamp(temp_168, 0.0, 1.0);
    // 0x0005C8: 0x4C5C10140667080F Fadd
    temp_170 = temp_22 + fp_c5.data[25].z;
    temp_171 = clamp(temp_170, 0.0, 1.0);
    // 0x0005D0: 0x32A0143F00070228 Ffma
    temp_172 = fma(temp_161, 0.5, 0.5);
    // 0x0005D8: 0x5080000000370F15 Mufu
    temp_173 = log2(temp_171);
    // 0x0005E8: 0x49A0031403671105 Ffma
    temp_174 = fma(temp_165, fp_c5.data[13].z, temp_166);
    // 0x0005F0: 0x4C69101805C70E06 Fmul
    temp_175 = 0.0 - fp_c6.data[23].x;
    temp_176 = temp_146 * temp_175;
    // 0x0005F8: 0x59A0098002D70113 Ffma
    temp_177 = fma(temp_147, temp_60, temp_167);
    // 0x000608: 0x5C68100002B72B29 Fmul
    temp_178 = temp_169 * temp_169;
    // 0x000610: 0x49A0019403471103 Ffma
    temp_179 = fma(temp_165, fp_c5.data[13].x, temp_162);
    // 0x000618: 0x49A0021403571104 Ffma
    temp_180 = fma(temp_165, fp_c5.data[13].y, temp_163);
    // 0x000628: 0x5C68120002872828 Fmul
    temp_181 = temp_172 * 0.5;
    temp_182 = temp_181 * temp_172;
    // 0x000630: 0x49A1031805D70111 Ffma
    temp_183 = 0.0 - fp_c6.data[23].y;
    temp_184 = fma(temp_147, temp_183, temp_176);
    // 0x000638: 0x59A4098002C71206 Ffma
    temp_185 = fma(temp_149, temp_62, temp_177);
    temp_186 = clamp(temp_185, 0.0, 1.0);
    // 0x000648: 0x59A2050002970A08 Ffma
    temp_187 = 0.0 - temp_160;
    temp_188 = fma(temp_160, temp_178, temp_187);
    // 0x000650: 0x49A0019402C71603 Ffma
    temp_189 = fma(temp_152, fp_c5.data[11].x, temp_179);
    // 0x000658: 0x49A0021402D71604 Ffma
    temp_190 = fma(temp_152, fp_c5.data[11].y, temp_180);
    // 0x000668: 0x49A0029402E71605 Ffma
    temp_191 = fma(temp_152, fp_c5.data[11].z, temp_174);
    // 0x000670: 0x49A5089805E71211 Ffma
    temp_192 = 0.0 - fp_c6.data[23].z;
    temp_193 = fma(temp_149, temp_192, temp_184);
    temp_194 = clamp(temp_193, 0.0, 1.0);
    // 0x000678: 0x59A1030002870609 Ffma
    temp_195 = 0.0 - temp_182;
    temp_196 = fma(temp_186, temp_195, temp_186);
    // 0x000688: 0x51A0040400470A17 Ffma
    temp_197 = fma(temp_160, temp_188, fp_c1.data[1].x);
    // 0x000690: 0x4C6810140627150A Fmul
    temp_198 = temp_173 * fp_c5.data[24].z;
    // 0x000698: 0xE043FF8B0107FF15 Ipa
    temp_199 = in_attr3.x;
    // 0x0006A8: 0x4C58301407B70308 Fadd
    temp_200 = 0.0 - fp_c5.data[30].w;
    temp_201 = temp_189 + temp_200;
    // 0x0006B0: 0x508000000047171A Mufu
    temp_202 = 1.0 / temp_197;
    // 0x0006B8: 0x4C98079406370013 Mov
    // 0x0006C8: 0x59A1088002871119 Ffma
    temp_203 = 0.0 - temp_182;
    temp_204 = fma(temp_194, temp_203, temp_194);
    // 0x0006D0: 0x5C58100000972818 Fadd
    temp_205 = temp_182 + temp_196;
    // 0x0006D8: 0x4C58301407B70409 Fadd
    temp_206 = 0.0 - fp_c5.data[30].w;
    temp_207 = temp_190 + temp_206;
    // 0x0006E8: 0x5080000000471821 Mufu
    temp_208 = 1.0 / temp_205;
    // 0x0006F0: 0x51A0041407B70708 Ffma
    temp_209 = fma(temp_112, temp_201, fp_c5.data[30].w);
    // 0x0006F8: 0x5C90008000A70026 Rro
    // 0x000708: 0x5C5810000197281C Fadd
    temp_210 = temp_182 + temp_204;
    // 0x000710: 0x4C68101801471117 Fmul
    temp_211 = temp_194 * fp_c6.data[5].x;
    // 0x000718: 0x5080000000471C23 Mufu
    temp_212 = 1.0 / temp_210;
    // 0x000728: 0x51A0049407B70709 Ffma
    temp_213 = fma(temp_112, temp_207, fp_c5.data[30].w);
    // 0x000730: 0x5C90008001470016 Rro
    // 0x000738: 0xE043FF8B4107FF14 Ipa
    temp_214 = in_attr3.y;
    // 0x000748: 0x5C68100001A72B1A Fmul
    temp_215 = temp_169 * temp_202;
    // 0x000750: 0x4C68101801571118 Fmul
    temp_216 = temp_194 * fp_c6.data[5].y;
    // 0x000758: 0x59A10D8000871B1D Ffma
    temp_217 = 0.0 - temp_209;
    temp_218 = fma(temp_153, temp_217, temp_153);
    // 0x000768: 0x1E23EA2F98371722 Fmul32i
    temp_219 = temp_211 * 0.318309873;
    // 0x000770: 0x5080000000271617 Mufu
    temp_220 = exp2(temp_137);
    // 0x000778: 0x4C58301407B7050A Fadd
    temp_221 = 0.0 - fp_c5.data[30].w;
    temp_222 = temp_191 + temp_221;
    // 0x000788: 0x3868103F00072121 Fmul
    temp_223 = temp_208 * 0.5;
    // 0x000790: 0x59A10D8000971B1C Ffma
    temp_224 = 0.0 - temp_213;
    temp_225 = fma(temp_153, temp_224, temp_153);
    // 0x000798: 0x5C68100001A71A24 Fmul
    temp_226 = temp_215 * temp_215;
    // 0x0007A8: 0x508000000027261A Mufu
    temp_227 = exp2(temp_198);
    // 0x0007B0: 0x5C58100001D7081D Fadd
    temp_228 = temp_209 + temp_218;
    // 0x0007B8: 0x4C68101801671119 Fmul
    temp_229 = temp_194 * fp_c6.data[5].z;
    // 0x0007C8: 0x51A0051407B7070A Ffma
    temp_230 = fma(temp_112, temp_222, fp_c5.data[30].w);
    // 0x0007D0: 0x5C68100002372125 Fmul
    temp_231 = temp_223 * temp_212;
    // 0x0007D8: 0x1E23EA2F98371823 Fmul32i
    temp_232 = temp_216 * 0.318309873;
    // 0x0007E8: 0x5C58100001C7091C Fadd
    temp_233 = temp_213 + temp_225;
    // 0x0007F0: 0x59A1110002271D16 Ffma
    temp_234 = 0.0 - temp_219;
    temp_235 = fma(temp_228, temp_234, temp_219);
    // 0x0007F8: 0x5B6603800FF72007 Isetp
    temp_236 = floatBitsToUint(temp_142) <= 0u;
    // 0x000808: 0xEF5400000047FF16 Stl
    local_memory[1] = floatBitsToUint(temp_235);
    // 0x000810: 0x51A1099406371513 Ffma
    temp_237 = 0.0 - fp_c5.data[24].w;
    temp_238 = fma(temp_199, temp_237, fp_c5.data[24].w);
    // 0x000818: 0x5C68100002572424 Fmul
    temp_239 = temp_226 * temp_231;
    // 0x000828: 0x59A1118002371C15 Ffma
    temp_240 = 0.0 - temp_232;
    temp_241 = fma(temp_233, temp_240, temp_232);
    // 0x000830: 0x59A10D8000A71B1B Ffma
    temp_242 = 0.0 - temp_230;
    temp_243 = fma(temp_153, temp_242, temp_153);
    // 0x000838: 0xEF5400000007FF15 Stl
    local_memory[0] = floatBitsToUint(temp_241);
    // 0x000848: 0x1E23EA2F98371919 Fmul32i
    temp_244 = temp_229 * 0.318309873;
    // 0x000850: 0x5C68100000670E2F Fmul
    temp_245 = temp_146 * temp_186;
    // 0x000858: 0x5C68100002471111 Fmul
    temp_246 = temp_194 * temp_239;
    // 0x000868: 0x5C9807800FF70018 Mov
    // 0x000870: 0x5C9807800FF7001C Mov
    // 0x000878: 0xF0F0000034170000 Depbar
    // 0x000888: 0x5C68100001A70D16 Fmul
    temp_247 = temp_25 * temp_227;
    // 0x000890: 0x59A10B800177080D Ffma
    temp_248 = 0.0 - temp_220;
    temp_249 = fma(temp_209, temp_248, temp_220);
    // 0x000898: 0x5C58100001B70A1B Fadd
    temp_250 = temp_230 + temp_243;
    // 0x0008A8: 0x32A2174000072F2F Ffma
    temp_251 = 0.0 - temp_57;
    temp_252 = fma(temp_245, 2.0, temp_251);
    // 0x0008B0: 0x5C68100001A70C15 Fmul
    temp_253 = temp_24 * temp_227;
    // 0x0008B8: 0x59A10B800177090C Ffma
    temp_254 = 0.0 - temp_220;
    temp_255 = fma(temp_213, temp_254, temp_220);
    // 0x0008C8: 0x59A10B8001770A17 Ffma
    temp_256 = 0.0 - temp_220;
    temp_257 = fma(temp_230, temp_256, temp_220);
    // 0x0008D0: 0x5C58100000D7080D Fadd
    temp_258 = temp_209 + temp_249;
    // 0x0008D8: 0x5C68100001A70B1A Fmul
    temp_259 = temp_26 * temp_227;
    // 0x0008E8: 0x59A0098001471616 Ffma
    temp_260 = fma(temp_247, temp_214, temp_238);
    // 0x0008F0: 0x3859103F8007060B Fadd
    temp_261 = 0.0 - temp_186;
    temp_262 = temp_261 + 1.0;
    // 0x0008F8: 0x5C58100000C7090C Fadd
    temp_263 = temp_213 + temp_255;
    // 0x000908: 0x5C58100001770A17 Fadd
    temp_264 = temp_230 + temp_257;
    // 0x000910: 0x4C68101801470D24 Fmul
    temp_265 = temp_258 * fp_c6.data[5].x;
    // 0x000918: 0x59A0098001471515 Ffma
    temp_266 = fma(temp_253, temp_214, temp_238);
    // 0x000928: 0x59A0098001471A1A Ffma
    temp_267 = fma(temp_259, temp_214, temp_238);
    // 0x000930: 0x4C68101403971616 Fmul
    temp_268 = temp_260 * fp_c5.data[14].y;
    // 0x000938: 0x4C68101801570C0C Fmul
    temp_269 = temp_263 * fp_c6.data[5].y;
    // 0x000948: 0x4C68101801671717 Fmul
    temp_270 = temp_264 * fp_c6.data[5].z;
    // 0x000950: 0x5C68100002471124 Fmul
    temp_271 = temp_246 * temp_265;
    // 0x000958: 0x5C5C30000FF70B13 Fadd
    temp_272 = temp_262 + -0.0;
    temp_273 = clamp(temp_272, 0.0, 1.0);
    // 0x000968: 0x4C68101403871515 Fmul
    temp_274 = temp_266 * fp_c5.data[14].x;
    // 0x000970: 0x4C68101403A71A1A Fmul
    temp_275 = temp_267 * fp_c5.data[14].z;
    // 0x000978: 0x5C68100000C71125 Fmul
    temp_276 = temp_246 * temp_269;
    // 0x000988: 0x385D103F80070F0C Fadd
    temp_277 = 0.0 - temp_171;
    temp_278 = temp_277 + 1.0;
    temp_279 = clamp(temp_278, 0.0, 1.0);
    // 0x000990: 0x5C68100001771126 Fmul
    temp_280 = temp_246 * temp_270;
    // 0x000998: 0x49A00B1403D7130F Ffma
    temp_281 = fma(temp_273, fp_c5.data[15].y, temp_268);
    // 0x0009A8: 0x5C68100000670116 Fmul
    temp_282 = temp_147 * temp_186;
    // 0x0009B0: 0x5C68100000671217 Fmul
    temp_283 = temp_149 * temp_186;
    // 0x0009B8: 0x49A00A9403C7130B Ffma
    temp_284 = fma(temp_273, fp_c5.data[15].x, temp_274);
    // 0x0009C8: 0x49A206180AC70C0D Ffma
    temp_285 = 0.0 - temp_279;
    temp_286 = fma(temp_279, fp_c6.data[43].x, temp_285);
    // 0x0009D0: 0x49A206180AD70C11 Ffma
    temp_287 = 0.0 - temp_279;
    temp_288 = fma(temp_279, fp_c6.data[43].y, temp_287);
    // 0x0009D8: 0x49A206180AE70C0C Ffma
    temp_289 = 0.0 - temp_279;
    temp_290 = fma(temp_279, fp_c6.data[43].z, temp_289);
    // 0x0009E8: 0x59A10C8001971B32 Ffma
    temp_291 = 0.0 - temp_244;
    temp_292 = fma(temp_250, temp_291, temp_244);
    // 0x0009F0: 0x49A00D1403E71313 Ffma
    temp_293 = fma(temp_273, fp_c5.data[15].z, temp_275);
    // 0x0009F8: 0x5C9807800FF70019 Mov
    // 0x000A08: 0x3858103F80070D0D Fadd
    temp_294 = temp_286 + 1.0;
    // 0x000A10: 0x3858103F80071111 Fadd
    temp_295 = temp_288 + 1.0;
    // 0x000A18: 0x3858103F80070C0C Fadd
    temp_296 = temp_290 + 1.0;
    // 0x000A28: 0x5C9807800FF7001A Mov
    // 0x000A30: 0x5C9807800FF7001B Mov
    // 0x000A38: 0x32A216C000071616 Ffma
    temp_297 = 0.0 - temp_60;
    temp_298 = fma(temp_282, 2.0, temp_297);
    // 0x000A48: 0x59A4068000D7031D Ffma
    temp_299 = fma(temp_189, temp_294, temp_294);
    temp_300 = clamp(temp_299, 0.0, 1.0);
    // 0x000A50: 0x59A4088001170422 Ffma
    temp_301 = fma(temp_190, temp_295, temp_295);
    temp_302 = clamp(temp_301, 0.0, 1.0);
    // 0x000A58: 0x59A4060000C70523 Ffma
    temp_303 = fma(temp_191, temp_296, temp_296);
    temp_304 = clamp(temp_303, 0.0, 1.0);
    // 0x000A68: 0x32A2164000071717 Ffma
    temp_305 = 0.0 - temp_62;
    temp_306 = fma(temp_283, 2.0, temp_305);
    // 0x000A70: 0x1E23E22F98372424 Fmul32i
    temp_307 = temp_271 * 0.159154937;
    // 0x000A78: 0x1E23E22F98372525 Fmul32i
    temp_308 = temp_276 * 0.159154937;
    // 0x000A88: 0x1E23E22F98372626 Fmul32i
    temp_309 = temp_280 * 0.159154937;
    // 0x000A90: 0xF0F800000000000F Sync
    temp_310 = 0.0;
    temp_311 = 0.0;
    temp_312 = 0.0;
    temp_313 = 0.0;
    temp_314 = 0.0;
    temp_315 = 0.0;
    temp_316 = 0.0;
    temp_317 = 0.0;
    temp_318 = 0.0;
    temp_319 = 0.0;
    temp_320 = 0.0;
    temp_321 = 0.0;
    if (!temp_236)
    {
        // 0x000A98: 0x5C9807800FF70030 Mov
        temp_322 = 0;
        do
        {
            // 0x000AA8: 0x5C18020003072A15 Iscadd
            temp_324 = int(temp_124) << 4;
            temp_325 = temp_324 + temp_322;
            // 0x000AB0: 0xE003FF87CFF7FF33 Ipa
            // 0x000AB8: 0x1C00000000173030 Iadd32i
            temp_326 = temp_322 + 1;
            // 0x000AC8: 0xE003FF87CFF7FF35 Ipa
            // 0x000AD0: 0x3848000000471515 Shl
            temp_327 = temp_325 << 4;
            // 0x000AD8: 0xE003FF87CFF7FF34 Ipa
            // 0x000AE8: 0x5B6C03800207300F Isetp
            temp_323 = uint(temp_326) >= floatBitsToUint(temp_142);
            // 0x000AF0: 0xE290000055800000 Ssy
            // 0x000AF8: 0xEF94008200071515 Ldc
            temp_328 = temp_327 + 0x2000;
            temp_329 = uint(temp_328) >> 2;
            temp_330 = temp_329 >> 2;
            temp_331 = int(temp_329) & 3;
            temp_332 = fp_c8.data[int(temp_330)][temp_331];
            // 0x000B08: 0x5080000000473333 Mufu
            // 0x000B10: 0x5080000000473535 Mufu
            // 0x000B18: 0x5080000000473434 Mufu
            // 0x000B28: 0xE043FF8E0337FF33 Ipa
            temp_333 = in_attr6.x;
            // 0x000B30: 0xE043FF8E8357FF35 Ipa
            temp_334 = in_attr6.z;
            // 0x000B38: 0xE043FF8E4347FF34 Ipa
            temp_335 = in_attr6.y;
            // 0x000B48: 0x3848000000671531 Shl
            temp_336 = floatBitsToInt(temp_332) << 6;
            // 0x000B50: 0xEF9500800107310C Ldc
            temp_337 = temp_336 + 16;
            temp_338 = uint(temp_337) >> 2;
            temp_339 = temp_338 >> 2;
            temp_340 = int(temp_338) & 3;
            temp_341 = fp_c8.data[int(temp_339)][temp_340];
            temp_342 = int(temp_338) + 1;
            temp_343 = uint(temp_342) >> 2;
            temp_344 = temp_342 & 3;
            temp_345 = fp_c8.data[int(temp_343)][temp_344];
            // 0x000B58: 0xEF95008001873110 Ldc
            temp_346 = temp_336 + 24;
            temp_347 = uint(temp_346) >> 2;
            temp_348 = temp_347 >> 2;
            temp_349 = int(temp_347) & 3;
            temp_350 = fp_c8.data[int(temp_348)][temp_349];
            temp_351 = int(temp_347) + 1;
            temp_352 = uint(temp_351) >> 2;
            temp_353 = temp_351 & 3;
            temp_354 = fp_c8.data[int(temp_352)][temp_353];
            // 0x000B68: 0xEF95008002073114 Ldc
            temp_355 = temp_336 + 32;
            temp_356 = uint(temp_355) >> 2;
            temp_357 = temp_356 >> 2;
            temp_358 = int(temp_356) & 3;
            temp_359 = fp_c8.data[int(temp_357)][temp_358];
            temp_360 = int(temp_356) + 1;
            temp_361 = uint(temp_360) >> 2;
            temp_362 = temp_360 & 3;
            temp_363 = fp_c8.data[int(temp_361)][temp_362];
            // 0x000B70: 0x5C58300003370C33 Fadd
            temp_364 = 0.0 - temp_333;
            temp_365 = temp_341 + temp_364;
            // 0x000B78: 0x5C58300003470D34 Fadd
            temp_366 = 0.0 - temp_335;
            temp_367 = temp_345 + temp_366;
            // 0x000B88: 0x5C58300003571035 Fadd
            temp_368 = 0.0 - temp_334;
            temp_369 = temp_350 + temp_368;
            // 0x000B90: 0x5C68100003373336 Fmul
            temp_370 = temp_365 * temp_365;
            // 0x000B98: 0x59A11A8003571111 Ffma
            temp_371 = 0.0 - temp_369;
            temp_372 = fma(temp_354, temp_371, temp_369);
            // 0x000BA8: 0x59A01B0003473436 Ffma
            temp_373 = fma(temp_367, temp_367, temp_370);
            // 0x000BB0: 0x59A01B0001171137 Ffma
            temp_374 = fma(temp_372, temp_372, temp_373);
            // 0x000BB8: 0x508000000057370C Mufu
            temp_375 = inversesqrt(temp_374);
            // 0x000BC8: 0x5080000000873737 Mufu
            temp_376 = sqrt(temp_374);
            // 0x000BD0: 0x5C68100000C7330D Fmul
            temp_377 = temp_365 * temp_375;
            // 0x000BD8: 0x5C68100000C73410 Fmul
            temp_378 = temp_367 * temp_375;
            // 0x000BE8: 0x5C68100000C7110C Fmul
            temp_379 = temp_372 * temp_375;
            // 0x000BF0: 0x5C69100001470D0D Fmul
            temp_380 = 0.0 - temp_359;
            temp_381 = temp_377 * temp_380;
            // 0x000BF8: 0xEF94008002873114 Ldc
            temp_382 = temp_336 + 40;
            temp_383 = uint(temp_382) >> 2;
            temp_384 = temp_383 >> 2;
            temp_385 = int(temp_383) & 3;
            temp_386 = fp_c8.data[int(temp_384)][temp_385];
            // 0x000C08: 0x59A106800157100D Ffma
            temp_387 = 0.0 - temp_363;
            temp_388 = fma(temp_378, temp_387, temp_381);
            // 0x000C10: 0xEF95008003873110 Ldc
            temp_389 = temp_336 + 56;
            temp_390 = uint(temp_389) >> 2;
            temp_391 = temp_390 >> 2;
            temp_392 = int(temp_390) & 3;
            temp_393 = fp_c8.data[int(temp_391)][temp_392];
            temp_394 = int(temp_390) + 1;
            temp_395 = uint(temp_394) >> 2;
            temp_396 = temp_394 & 3;
            temp_397 = fp_c8.data[int(temp_395)][temp_396];
            // 0x000C18: 0x59A1068001470C14 Ffma
            temp_398 = 0.0 - temp_386;
            temp_399 = fma(temp_379, temp_398, temp_388);
            // 0x000C28: 0xEF9500800307310C Ldc
            temp_400 = temp_336 + 48;
            temp_401 = uint(temp_400) >> 2;
            temp_402 = temp_401 >> 2;
            temp_403 = int(temp_401) & 3;
            temp_404 = fp_c8.data[int(temp_402)][temp_403];
            temp_405 = int(temp_401) + 1;
            temp_406 = uint(temp_405) >> 2;
            temp_407 = temp_405 & 3;
            temp_408 = fp_c8.data[int(temp_406)][temp_407];
            // 0x000C30: 0x59A4088001071414 Ffma
            temp_409 = fma(temp_399, temp_393, temp_397);
            temp_410 = clamp(temp_409, 0.0, 1.0);
            // 0x000C38: 0x010404000007F010 Mov32i
            // 0x000C48: 0x5C68100001471411 Fmul
            temp_411 = temp_410 * temp_410;
            // 0x000C50: 0x33A0084000071414 Ffma
            temp_412 = fma(temp_410, -2.0, 3.0);
            // 0x000C58: 0x5C68100001471111 Fmul
            temp_413 = temp_411 * temp_412;
            // 0x000C68: 0x39585042F0073514 Fadd
            temp_414 = abs(temp_369);
            temp_415 = temp_414 + -120.0;
            // 0x000C70: 0x1EABD4CCCCD71414 Fmul32i
            temp_416 = temp_415 * -0.0500000007;
            temp_417 = clamp(temp_416, 0.0, 1.0);
            // 0x000C78: 0x59A4068003770C37 Ffma
            temp_418 = fma(temp_404, temp_376, temp_408);
            temp_419 = clamp(temp_418, 0.0, 1.0);
            // 0x000C88: 0x33A0084000073710 Ffma
            temp_420 = fma(temp_419, -2.0, 3.0);
            // 0x000C90: 0x5C68100003773737 Fmul
            temp_421 = temp_419 * temp_419;
            // 0x000C98: 0x5C68100001073710 Fmul
            temp_422 = temp_421 * temp_420;
            // 0x000CA8: 0x5C68100001071110 Fmul
            temp_423 = temp_413 * temp_422;
            // 0x000CB0: 0x36247F9000171111 Xmad
            temp_424 = floatBitsToUint(temp_413) >> 16;
            temp_425 = int(temp_424) << 16;
            // 0x000CB8: 0x5C68100001071410 Fmul
            temp_426 = temp_417 * temp_423;
            // 0x000CC8: 0x5BB383800FF71007 Fsetp
            temp_427 = temp_426 <= 0.0;
            // 0x000CD0: 0x7A05083C0F00FF11 Hadd2
            temp_322 = temp_326;
            temp_428 = uint(temp_425);
            temp_429 = temp_310;
            temp_430 = temp_311;
            temp_431 = temp_312;
            temp_432 = temp_313;
            temp_433 = temp_314;
            temp_434 = temp_315;
            if (temp_427)
            {
                temp_435 = unpackHalf2x16(uint(temp_425)).y;
                temp_436 = packHalf2x16(vec2(1.0, temp_435));
                temp_428 = temp_436;
            }
            // 0x000CD8: 0x5D2103902FF71107 Hsetp2
            temp_437 = unpackHalf2x16(temp_428).x;
            temp_438 = temp_437 == 0.0;
            // 0x000CE8: 0xF0F800000008000F Sync
            if (temp_438)
            {
                // 0x000CF0: 0x5080000000470C0C Mufu
                temp_439 = 1.0 / temp_404;
                // 0x000CF8: 0xEF94008002C73115 Ldc
                temp_440 = temp_336 + 44;
                temp_441 = uint(temp_440) >> 2;
                temp_442 = temp_441 >> 2;
                temp_443 = int(temp_441) & 3;
                temp_444 = fp_c8.data[int(temp_442)][temp_443];
                // 0x000D08: 0x5C69100000C70D14 Fmul
                temp_445 = 0.0 - temp_439;
                temp_446 = temp_408 * temp_445;
                // 0x000D10: 0x5C60138001473511 Fmnmx
                temp_447 = min(temp_369, temp_446);
                // 0x000D18: 0x5C61178001171411 Fmnmx
                temp_448 = 0.0 - temp_446;
                temp_449 = max(temp_448, temp_447);
                // 0x000D28: 0x59A01B000117110C Ffma
                temp_450 = fma(temp_449, temp_449, temp_373);
                // 0x000D30: 0x5080000000570C0D Mufu
                temp_451 = inversesqrt(temp_450);
                // 0x000D38: 0x5C68100000D73333 Fmul
                temp_452 = temp_365 * temp_451;
                // 0x000D48: 0x5080000000471515 Mufu
                temp_453 = 1.0 / temp_444;
                // 0x000D50: 0x5C68100000D73435 Fmul
                temp_454 = temp_367 * temp_451;
                // 0x000D58: 0x5C68100000D71111 Fmul
                temp_455 = temp_449 * temp_451;
                // 0x000D68: 0x5C58100003372E37 Fadd
                temp_456 = temp_57 + temp_452;
                // 0x000D70: 0x5C58100003572D0D Fadd
                temp_457 = temp_60 + temp_454;
                // 0x000D78: 0x5C58100001172C14 Fadd
                temp_458 = temp_62 + temp_455;
                // 0x000D88: 0x5C68100003773734 Fmul
                temp_459 = temp_456 * temp_456;
                // 0x000D90: 0x59A01A0000D70D34 Ffma
                temp_460 = fma(temp_457, temp_457, temp_459);
                // 0x000D98: 0x59A01A0001471434 Ffma
                temp_461 = fma(temp_458, temp_458, temp_460);
                // 0x000DA8: 0x5080000000573434 Mufu
                temp_462 = inversesqrt(temp_461);
                // 0x000DB0: 0x5C68100003473737 Fmul
                temp_463 = temp_456 * temp_462;
                // 0x000DB8: 0x5C68100003470D0D Fmul
                temp_464 = temp_457 * temp_462;
                // 0x000DC8: 0x5C68100003471414 Fmul
                temp_465 = temp_458 * temp_462;
                // 0x000DD0: 0x5C68100003370E34 Fmul
                temp_466 = temp_146 * temp_452;
                // 0x000DD8: 0x5C68100003773336 Fmul
                temp_467 = temp_452 * temp_463;
                // 0x000DE8: 0x5080000000870C33 Mufu
                temp_468 = sqrt(temp_450);
                // 0x000DF0: 0x5C68100003770E37 Fmul
                temp_469 = temp_146 * temp_463;
                // 0x000DF8: 0x59A01A0003570134 Ffma
                temp_470 = fma(temp_147, temp_454, temp_466);
                // 0x000E08: 0x59A01B0000D73536 Ffma
                temp_471 = fma(temp_454, temp_464, temp_467);
                // 0x000E10: 0x59A01B8000D70137 Ffma
                temp_472 = fma(temp_147, temp_464, temp_469);
                // 0x000E18: 0xEF9500800007310C Ldc
                temp_473 = uint(temp_336) >> 2;
                temp_474 = temp_473 >> 2;
                temp_475 = int(temp_473) & 3;
                temp_476 = fp_c8.data[int(temp_474)][temp_475];
                temp_477 = int(temp_473) + 1;
                temp_478 = uint(temp_477) >> 2;
                temp_479 = temp_477 & 3;
                temp_480 = fp_c8.data[int(temp_478)][temp_479];
                // 0x000E28: 0x59A01A0001171234 Ffma
                temp_481 = fma(temp_149, temp_455, temp_470);
                // 0x000E30: 0xEF94008000873131 Ldc
                temp_482 = temp_336 + 8;
                temp_483 = uint(temp_482) >> 2;
                temp_484 = temp_483 >> 2;
                temp_485 = int(temp_483) & 3;
                temp_486 = fp_c8.data[int(temp_484)][temp_485];
                // 0x000E38: 0x59A41B0001471136 Ffma
                temp_487 = fma(temp_455, temp_465, temp_471);
                temp_488 = clamp(temp_487, 0.0, 1.0);
                // 0x000E48: 0x01040DF760C7F011 Mov32i
                // 0x000E50: 0x51A0198400571515 Ffma
                temp_489 = fma(temp_453, temp_468, fp_c1.data[1].y);
                // 0x000E58: 0x59A41B8001471237 Ffma
                temp_490 = fma(temp_149, temp_465, temp_472);
                temp_491 = clamp(temp_490, 0.0, 1.0);
                // 0x000E68: 0x5080000000471515 Mufu
                temp_492 = 1.0 / temp_489;
                // 0x000E70: 0x49A2088400173611 Ffma
                temp_493 = fma(temp_488, fp_c1.data[0].y, -6.98316002);
                // 0x000E78: 0x59A21B8003772914 Ffma
                temp_494 = 0.0 - temp_491;
                temp_495 = fma(temp_178, temp_491, temp_494);
                // 0x000E88: 0x5C68100001173636 Fmul
                temp_496 = temp_488 * temp_493;
                // 0x000E90: 0x5C5C30000FF73411 Fadd
                temp_497 = temp_481 + -0.0;
                temp_498 = clamp(temp_497, 0.0, 1.0);
                // 0x000E98: 0x51A00A0400473737 Ffma
                temp_499 = fma(temp_491, temp_495, fp_c1.data[1].x);
                // 0x000EA8: 0x1E23FB3333371515 Fmul32i
                temp_500 = temp_492 * 1.39999998;
                // 0x000EB0: 0x5080000000473737 Mufu
                temp_501 = 1.0 / temp_499;
                // 0x000EB8: 0x5C90008003670033 Rro
                // 0x000EC8: 0x59A1088001172814 Ffma
                temp_502 = 0.0 - temp_498;
                temp_503 = fma(temp_182, temp_502, temp_498);
                // 0x000ED0: 0x5080000000273333 Mufu
                temp_504 = exp2(temp_496);
                // 0x000ED8: 0x5C68100001571515 Fmul
                temp_505 = temp_500 * temp_500;
                // 0x000EE8: 0x5C58100001472814 Fadd
                temp_506 = temp_182 + temp_503;
                // 0x000EF0: 0x5080000000471414 Mufu
                temp_507 = 1.0 / temp_506;
                // 0x000EF8: 0x59A10A8001573415 Ffma
                temp_508 = 0.0 - temp_505;
                temp_509 = fma(temp_481, temp_508, temp_505);
                // 0x000F08: 0x5C68100003772B37 Fmul
                temp_510 = temp_169 * temp_501;
                // 0x000F10: 0x5C5C100001573415 Fadd
                temp_511 = temp_481 + temp_509;
                temp_512 = clamp(temp_511, 0.0, 1.0);
                // 0x000F18: 0x59A1198003370834 Ffma
                temp_513 = 0.0 - temp_504;
                temp_514 = fma(temp_209, temp_513, temp_504);
                // 0x000F28: 0x5C68100003773737 Fmul
                temp_515 = temp_510 * temp_510;
                // 0x000F30: 0x5C68100000C7100C Fmul
                temp_516 = temp_426 * temp_476;
                // 0x000F38: 0x5C68100000D7100D Fmul
                temp_517 = temp_426 * temp_480;
                // 0x000F48: 0x5C68100001472114 Fmul
                temp_518 = temp_223 * temp_507;
                // 0x000F50: 0x5C58100003470834 Fadd
                temp_519 = temp_209 + temp_514;
                // 0x000F58: 0x5C68100003171031 Fmul
                temp_520 = temp_426 * temp_486;
                // 0x000F68: 0x59A1198003370910 Ffma
                temp_521 = 0.0 - temp_504;
                temp_522 = fma(temp_213, temp_521, temp_504);
                // 0x000F70: 0x59A1198003370A33 Ffma
                temp_523 = 0.0 - temp_504;
                temp_524 = fma(temp_230, temp_523, temp_504);
                // 0x000F78: 0x5C68100001473714 Fmul
                temp_525 = temp_515 * temp_518;
                // 0x000F88: 0x5C68100003470C34 Fmul
                temp_526 = temp_516 * temp_519;
                // 0x000F90: 0x5C68100001570C0C Fmul
                temp_527 = temp_516 * temp_512;
                // 0x000F98: 0x5C68100001573136 Fmul
                temp_528 = temp_520 * temp_512;
                // 0x000FA8: 0x5C58100001070910 Fadd
                temp_529 = temp_213 + temp_522;
                // 0x000FB0: 0x5C58100003370A33 Fadd
                temp_530 = temp_230 + temp_524;
                // 0x000FB8: 0x5C68100001471114 Fmul
                temp_531 = temp_498 * temp_525;
                // 0x000FC8: 0x49A0138400770C27 Ffma
                temp_532 = fma(temp_527, fp_c1.data[1].w, temp_310);
                // 0x000FD0: 0x49A00C8400773619 Ffma
                temp_533 = fma(temp_528, fp_c1.data[1].w, temp_311);
                // 0x000FD8: 0x5C68100001070D10 Fmul
                temp_534 = temp_517 * temp_529;
                // 0x000FE8: 0x5C68100003373133 Fmul
                temp_535 = temp_520 * temp_530;
                // 0x000FF0: 0x5C68100001570D0D Fmul
                temp_536 = temp_517 * temp_512;
                // 0x000FF8: 0x5C68100001473434 Fmul
                temp_537 = temp_526 * temp_531;
                // 0x001008: 0x5C68100001471010 Fmul
                temp_538 = temp_534 * temp_531;
                // 0x001010: 0x5C68100001473333 Fmul
                temp_539 = temp_535 * temp_531;
                // 0x001018: 0x49A00C0400770D18 Ffma
                temp_540 = fma(temp_536, fp_c1.data[1].w, temp_312);
                // 0x001028: 0x49A00D040067341A Ffma
                temp_541 = fma(temp_537, fp_c1.data[1].z, temp_313);
                // 0x001030: 0x49A00D840067101B Ffma
                temp_542 = fma(temp_538, fp_c1.data[1].z, temp_314);
                // 0x001038: 0x49A00E040067331C Ffma
                temp_543 = fma(temp_539, fp_c1.data[1].z, temp_315);
                // 0x001048: 0xF0F800000007000F Sync
                temp_429 = temp_532;
                temp_430 = temp_533;
                temp_431 = temp_540;
                temp_432 = temp_541;
                temp_433 = temp_542;
                temp_434 = temp_543;
            }
            // 0x001050: 0xE2400FFFA489000F Bra
            temp_310 = temp_429;
            temp_311 = temp_430;
            temp_312 = temp_431;
            temp_313 = temp_432;
            temp_314 = temp_433;
            temp_315 = temp_434;
            temp_316 = temp_434;
            temp_317 = temp_432;
            temp_318 = temp_430;
            temp_319 = temp_433;
            temp_320 = temp_431;
            temp_321 = temp_429;
        }
        while (!temp_323);
        // 0x001058: 0xF0F800000007000F Sync
    }
    // 0x001068: 0x5C62578000170E0C Fmnmx
    temp_544 = abs(temp_146);
    temp_545 = abs(temp_147);
    temp_546 = max(temp_544, temp_545);
    // 0x001070: 0xEF4410000007FF31 Ldl
    temp_547 = uintBitsToFloat(local_memory[0]);
    // 0x001078: 0x5C62578001672F0D Fmnmx
    temp_548 = abs(temp_252);
    temp_549 = abs(temp_298);
    temp_550 = max(temp_548, temp_549);
    // 0x001088: 0xE003FF87CFF7FF28 Ipa
    // 0x001090: 0x5C60578000C7120C Fmnmx
    temp_551 = abs(temp_149);
    temp_552 = max(temp_551, temp_546);
    // 0x001098: 0xEF4410000047FF33 Ldl
    temp_553 = uintBitsToFloat(local_memory[1]);
    // 0x0010A8: 0x5C60578000D7170D Fmnmx
    temp_554 = abs(temp_306);
    temp_555 = max(temp_554, temp_550);
    // 0x0010B0: 0x5080000000470C0C Mufu
    temp_556 = 1.0 / temp_552;
    // 0x0010B8: 0x38681040E0070229 Fmul
    temp_557 = temp_161 * 7.0;
    // 0x0010C8: 0x5080000000470D0D Mufu
    temp_558 = 1.0 / temp_555;
    // 0x0010D0: 0x010000000017F014 Mov32i
    // 0x0010D8: 0x5080000000472828 Mufu
    // 0x0010E8: 0x5C69100000C71212 Fmul
    temp_559 = 0.0 - temp_556;
    temp_560 = temp_149 * temp_559;
    // 0x0010F0: 0x5C68100000C70E10 Fmul
    temp_561 = temp_146 * temp_556;
    // 0x0010F8: 0x5C68100000C70111 Fmul
    temp_562 = temp_147 * temp_556;
    // 0x001108: 0x5C68100000D72F15 Fmul
    temp_563 = temp_252 * temp_558;
    // 0x001110: 0x5C68100000D71616 Fmul
    temp_564 = temp_298 * temp_558;
    // 0x001118: 0xE043FF920287FF2C Ipa
    temp_565 = in_attr10.x;
    // 0x001128: 0x5C69100000D71717 Fmul
    temp_566 = 0.0 - temp_558;
    temp_567 = temp_306 * temp_566;
    // 0x001130: 0xE043FF924287FF2D Ipa
    temp_568 = in_attr10.y;
    // 0x001138: 0x3868104080070221 Fmul
    temp_569 = temp_161 * 4.0;
    // 0x001148: 0xE043FF928287FF2E Ipa
    temp_570 = in_attr10.z;
    // 0x001150: 0xC0BA0163EFF7100C Tex
    temp_571 = textureLod(fp_t_tcb_16, vec3(temp_561, temp_562, temp_560), 0.0).xyz;
    temp_572 = temp_571.x;
    temp_573 = temp_571.y;
    temp_574 = temp_571.z;
    // 0x001158: 0xC1BA0143F2971414 Tex
    temp_575 = textureLod(fp_t_tcb_14, vec4(temp_563, temp_564, temp_567, float(1)), temp_557).xyz;
    temp_576 = temp_575.x;
    temp_577 = temp_575.y;
    temp_578 = temp_575.z;
    // 0x001168: 0x5C98078001270020 Mov
    // 0x001170: 0xD9A2018202071010 Texs
    temp_579 = textureLod(fp_t_tcb_18, vec3(temp_561, temp_562, temp_560), temp_569).xyz;
    temp_580 = temp_579.x;
    temp_581 = temp_579.y;
    temp_582 = temp_579.z;
    // 0x001178: 0x4C98079C0207002B Mov
    // 0x001188: 0xDEBA0000C2B72C2C TexB
    temp_583 = texture(fp_t_cb7_20, vec3(temp_565, temp_568, temp_570)).x;
    // 0x001190: 0x49A013180A171C26 Ffma
    temp_584 = fma(temp_316, fp_c6.data[40].y, temp_309);
    // 0x001198: 0x3859103F80070202 Fadd
    temp_585 = 0.0 - temp_161;
    temp_586 = temp_585 + 1.0;
    // 0x0011A8: 0x3859103F8007061C Fadd
    temp_587 = 0.0 - temp_186;
    temp_588 = temp_587 + 1.0;
    // 0x0011B0: 0x0103F0000007F02A Mov32i
    // 0x0011B8: 0x5C68100000270202 Fmul
    temp_589 = temp_586 * temp_586;
    // 0x0011C8: 0x4C68101809071C1C Fmul
    temp_590 = temp_588 * fp_c6.data[36].x;
    // 0x0011D0: 0x32A0153F00070117 Ffma
    temp_591 = fma(temp_147, 0.5, 0.5);
    // 0x0011D8: 0x5080400000371C1C Mufu
    temp_592 = abs(temp_590);
    temp_593 = log2(temp_592);
    // 0x0011E8: 0x49A012180A171A24 Ffma
    temp_594 = fma(temp_317, fp_c6.data[40].y, temp_307);
    // 0x0011F0: 0x4C98079800870001 Mov
    // 0x0011F8: 0x49A019180A171932 Ffma
    temp_595 = fma(temp_318, fp_c6.data[40].y, temp_292);
    // 0x001208: 0x4C98079800A7001A Mov
    // 0x001210: 0x010410676C97F029 Mov32i
    // 0x001218: 0x5C68100000270219 Fmul
    temp_596 = temp_589 * temp_589;
    // 0x001228: 0xE04BFF914287FF02 Ipa
    temp_597 = in_attr9.y;
    temp_598 = clamp(temp_597, 0.0, 1.0);
    // 0x001230: 0x1E23E468DB97062A Fmul32i
    temp_599 = temp_186 * 0.193900004;
    // 0x001238: 0x4C59101800470101 Fadd
    temp_600 = 0.0 - fp_c6.data[2].x;
    temp_601 = temp_600 + fp_c6.data[1].x;
    // 0x001248: 0x4C59101800671A1A Fadd
    temp_602 = 0.0 - fp_c6.data[2].z;
    temp_603 = temp_602 + fp_c6.data[1].z;
    // 0x001250: 0x49A0148400B70629 Ffma
    temp_604 = fma(temp_186, fp_c1.data[2].w, 8.40400028);
    // 0x001258: 0x0103E2CD9E87F02E Mov32i
    // 0x001268: 0x49A015040087192A Ffma
    temp_605 = fma(temp_596, fp_c1.data[2].x, temp_599);
    // 0x001270: 0x0104066978D7F02F Mov32i
    // 0x001278: 0x51A00B9800870101 Ffma
    temp_606 = fma(temp_601, temp_591, fp_c6.data[2].x);
    // 0x001288: 0x4C68101809171C1C Fmul
    temp_607 = temp_593 * fp_c6.data[36].y;
    // 0x001290: 0x51A0148400C7062B Ffma
    temp_608 = fma(temp_186, temp_604, fp_c1.data[3].x);
    // 0x001298: 0x49A2170400D7192E Ffma
    temp_609 = fma(temp_596, fp_c1.data[3].y, -0.168799996);
    // 0x0012A8: 0x088BF05D63972A29 Fadd32i
    temp_610 = temp_605 + -0.522800028;
    // 0x0012B0: 0x49A217840097192A Ffma
    temp_611 = fma(temp_596, fp_c1.data[2].y, -3.60299993);
    // 0x0012B8: 0x5C90008001C7001C Rro
    // 0x0012C8: 0x49A012980A171B25 Ffma
    temp_612 = fma(temp_319, fp_c6.data[40].y, temp_308);
    // 0x0012D0: 0x5084000000271C1C Mufu
    temp_613 = exp2(temp_607);
    temp_614 = clamp(temp_613, 0.0, 1.0);
    // 0x0012D8: 0x4C9807980967001B Mov
    // 0x0012E8: 0x51A0158400E7062D Ffma
    temp_615 = fma(temp_186, temp_608, fp_c1.data[3].z);
    // 0x0012F0: 0x5C68100002970606 Fmul
    temp_616 = temp_186 * temp_610;
    // 0x0012F8: 0x5C68100002E7192E Fmul
    temp_617 = temp_596 * temp_609;
    // 0x001308: 0x51A0150400A7192B Ffma
    temp_618 = fma(temp_596, temp_611, fp_c1.data[2].z);
    // 0x001310: 0x4C58101408171B1B Fadd
    temp_619 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001318: 0x5C60138002D72E2D Fmnmx
    temp_620 = min(temp_617, temp_615);
    // 0x001328: 0x59A0030002B71906 Ffma
    temp_621 = fma(temp_596, temp_618, temp_616);
    // 0x001330: 0x5C6810000027022B Fmul
    temp_622 = temp_598 * temp_598;
    // 0x001338: 0x5C68100001C71B1B Fmul
    temp_623 = temp_619 * temp_614;
    // 0x001348: 0x386C10424807091C Fmul
    temp_624 = temp_213 * 50.0;
    temp_625 = clamp(temp_624, 0.0, 1.0);
    // 0x001350: 0x5C5C30000FF72D19 Fadd
    temp_626 = temp_620 + -0.0;
    temp_627 = clamp(temp_626, 0.0, 1.0);
    // 0x001358: 0x4C5C100400F7062A Fadd
    temp_628 = temp_621 + fp_c1.data[3].w;
    temp_629 = clamp(temp_628, 0.0, 1.0);
    // 0x001368: 0x5C59100002A7192A Fadd
    temp_630 = 0.0 - temp_627;
    temp_631 = temp_630 + temp_629;
    // 0x001370: 0xF0F0000034470000 Depbar
    // 0x001378: 0x49A018980A171818 Ffma
    temp_632 = fma(temp_320, fp_c6.data[40].y, temp_547);
    // 0x001388: 0x4C9807980B470031 Mov
    // 0x001390: 0x51A218980B470012 Ffma
    temp_633 = 0.0 - fp_c6.data[45].x;
    temp_634 = fma(temp_30, fp_c6.data[45].x, temp_633);
    // 0x001398: 0x4C98079800970000 Mov
    // 0x0013A8: 0x4C59101800570000 Fadd
    temp_635 = 0.0 - fp_c6.data[2].y;
    temp_636 = temp_635 + fp_c6.data[1].y;
    // 0x0013B0: 0x51A00B9800970000 Ffma
    temp_637 = fma(temp_636, temp_591, fp_c6.data[2].y);
    // 0x0013B8: 0x51A00B9800A71A17 Ffma
    temp_638 = fma(temp_603, temp_591, fp_c6.data[2].z);
    // 0x0013C8: 0x4C98079406B7001A Mov
    // 0x0013D0: 0x4C68101809D71A21 Fmul
    temp_639 = fp_c5.data[26].w * fp_c6.data[39].y;
    // 0x0013D8: 0x4C68101809C71A29 Fmul
    temp_640 = fp_c5.data[26].w * fp_c6.data[39].x;
    // 0x0013E8: 0x5C68100002170F0F Fmul
    temp_641 = temp_281 * temp_639;
    // 0x0013F0: 0x010404000007F021 Mov32i
    // 0x0013F8: 0x4C68101809E71A1A Fmul
    temp_642 = fp_c5.data[26].w * fp_c6.data[39].z;
    // 0x001408: 0x33A010C000070221 Ffma
    temp_643 = fma(temp_598, -2.0, 3.0);
    // 0x001410: 0x5C68100001A71302 Fmul
    temp_644 = temp_293 * temp_642;
    // 0x001418: 0x4C68101808C71B13 Fmul
    temp_645 = temp_623 * fp_c6.data[35].x;
    // 0x001428: 0x4C68101808D71B1A Fmul
    temp_646 = temp_623 * fp_c6.data[35].y;
    // 0x001430: 0x5C68100002B72106 Fmul
    temp_647 = temp_643 * temp_622;
    // 0x001438: 0x5C68100001C7192B Fmul
    temp_648 = temp_627 * temp_625;
    // 0x001448: 0xF0F0000034370000 Depbar
    // 0x001450: 0x49A019980A172727 Ffma
    temp_649 = fma(temp_321, fp_c6.data[40].y, temp_553);
    // 0x001458: 0x4C68101808E71B1B Fmul
    temp_650 = temp_623 * fp_c6.data[35].z;
    // 0x001468: 0x49A0121408271324 Ffma
    temp_651 = fma(temp_645, fp_c5.data[32].z, temp_594);
    // 0x001470: 0x49A1099408271319 Ffma
    temp_652 = 0.0 - fp_c5.data[32].z;
    temp_653 = fma(temp_645, temp_652, temp_645);
    // 0x001478: 0x49A0129408271A25 Ffma
    temp_654 = fma(temp_646, fp_c5.data[32].z, temp_612);
    // 0x001488: 0x59A0158002A70913 Ffma
    temp_655 = fma(temp_213, temp_631, temp_648);
    // 0x001490: 0xE043FF910287FF09 Ipa
    temp_656 = in_attr9.x;
    // 0x001498: 0x49A10D1408271A1A Ffma
    temp_657 = 0.0 - fp_c5.data[32].z;
    temp_658 = fma(temp_646, temp_657, temp_646);
    // 0x0014A8: 0xE043FF8D8287FF28 Ipa
    temp_659 = in_attr5.z;
    // 0x0014B0: 0x49A0131408271B26 Ffma
    temp_660 = fma(temp_650, fp_c5.data[32].z, temp_584);
    // 0x0014B8: 0x5C58100001972719 Fadd
    temp_661 = temp_649 + temp_653;
    // 0x0014C8: 0xF0F0000034170000 Depbar
    // 0x0014D0: 0x49A006040077010C Ffma
    temp_662 = fma(temp_606, fp_c1.data[1].w, temp_572);
    // 0x0014D8: 0x49A10D9408271B1B Ffma
    temp_663 = 0.0 - fp_c5.data[32].z;
    temp_664 = fma(temp_650, temp_663, temp_650);
    // 0x0014E8: 0x49A006840077000D Ffma
    temp_665 = fma(temp_637, fp_c1.data[1].w, temp_573);
    // 0x0014F0: 0x5C58100001A71818 Fadd
    temp_666 = temp_632 + temp_658;
    // 0x0014F8: 0x59A0158002A70821 Ffma
    temp_667 = fma(temp_209, temp_631, temp_648);
    // 0x001508: 0x59A0158002A70A08 Ffma
    temp_668 = fma(temp_230, temp_631, temp_648);
    // 0x001510: 0x49A008180857140A Ffma
    temp_669 = fma(temp_576, fp_c6.data[33].y, temp_580);
    // 0x001518: 0x5C58100000C7190C Fadd
    temp_670 = temp_661 + temp_662;
    // 0x001528: 0x5C58100001B7321B Fadd
    temp_671 = temp_595 + temp_664;
    // 0x001530: 0x49A007040077170E Ffma
    temp_672 = fma(temp_638, fp_c1.data[1].w, temp_574);
    // 0x001538: 0x5C58100000D7180D Fadd
    temp_673 = temp_666 + temp_665;
    // 0x001548: 0x49A0089808571500 Ffma
    temp_674 = fma(temp_577, fp_c6.data[33].y, temp_581);
    // 0x001550: 0x59A0120000A72121 Ffma
    temp_675 = fma(temp_667, temp_669, temp_651);
    // 0x001558: 0x59A1060000C7070C Ffma
    temp_676 = 0.0 - temp_670;
    temp_677 = fma(temp_112, temp_676, temp_670);
    // 0x001568: 0x49A0101808571601 Ffma
    temp_678 = fma(temp_578, fp_c6.data[33].y, temp_582);
    // 0x001570: 0x5C58100000E71B0E Fadd
    temp_679 = temp_671 + temp_672;
    // 0x001578: 0x59A1068000D7070D Ffma
    temp_680 = 0.0 - temp_673;
    temp_681 = fma(temp_112, temp_680, temp_673);
    // 0x001588: 0x59A0128000071313 Ffma
    temp_682 = fma(temp_655, temp_674, temp_654);
    // 0x001590: 0x59A0108000C70300 Ffma
    temp_683 = fma(temp_189, temp_677, temp_675);
    // 0x001598: 0x59A0130000170808 Ffma
    temp_684 = fma(temp_668, temp_678, temp_660);
    // 0x0015A8: 0x59A1070000E70707 Ffma
    temp_685 = 0.0 - temp_679;
    temp_686 = fma(temp_112, temp_685, temp_679);
    // 0x0015B0: 0x59A0098000D70401 Ffma
    temp_687 = fma(temp_190, temp_681, temp_682);
    // 0x0015B8: 0x51A218980B471E1E Ffma
    temp_688 = 0.0 - fp_c6.data[45].x;
    temp_689 = fma(temp_28, fp_c6.data[45].x, temp_688);
    // 0x0015C8: 0x5C68100002970B0B Fmul
    temp_690 = temp_284 * temp_640;
    // 0x0015D0: 0x4C98079802870003 Mov
    // 0x0015D8: 0x5C68100000071D00 Fmul
    temp_691 = temp_300 * temp_683;
    // 0x0015E8: 0x59A0040000770508 Ffma
    temp_692 = fma(temp_191, temp_686, temp_684);
    // 0x0015F0: 0x51A218980B471F1F Ffma
    temp_693 = 0.0 - fp_c6.data[45].x;
    temp_694 = fma(temp_29, fp_c6.data[45].x, temp_693);
    // 0x0015F8: 0x4C9807980297000A Mov
    // 0x001608: 0x5C68100000172201 Fmul
    temp_695 = temp_302 * temp_687;
    // 0x001610: 0x49A504980BC72C09 Ffma
    temp_696 = 0.0 - fp_c6.data[47].x;
    temp_697 = fma(temp_583, temp_696, temp_656);
    temp_698 = clamp(temp_697, 0.0, 1.0);
    // 0x001618: 0x5080000000370909 Mufu
    temp_699 = log2(temp_698);
    // 0x001628: 0x51A0019802871E1E Ffma
    temp_700 = fma(temp_689, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001630: 0x49A0001406C70B00 Ffma
    temp_701 = fma(temp_690, fp_c5.data[27].x, temp_691);
    // 0x001638: 0x4C98079802A70003 Mov
    // 0x001648: 0x5C68100000872323 Fmul
    temp_702 = temp_304 * temp_692;
    // 0x001650: 0x51A0051802971F1F Ffma
    temp_703 = fma(temp_694, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001658: 0x49A0009406C70F01 Ffma
    temp_704 = fma(temp_641, fp_c5.data[27].x, temp_695);
    // 0x001668: 0x5C58300001E70004 Fadd
    temp_705 = 0.0 - temp_700;
    temp_706 = temp_701 + temp_705;
    // 0x001670: 0x51A0019802A71203 Ffma
    temp_707 = fma(temp_634, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001678: 0x49A0119406C70202 Ffma
    temp_708 = fma(temp_644, fp_c5.data[27].x, temp_702);
    // 0x001688: 0x5C58300001F70105 Fadd
    temp_709 = 0.0 - temp_703;
    temp_710 = temp_704 + temp_709;
    // 0x001690: 0x4C68101803170908 Fmul
    temp_711 = temp_699 * fp_c6.data[12].y;
    // 0x001698: 0x49A00F180BF70407 Ffma
    temp_712 = fma(temp_706, fp_c6.data[47].w, temp_700);
    // 0x0016A8: 0x4C68101803770606 Fmul
    temp_713 = temp_647 * fp_c6.data[13].w;
    // 0x0016B0: 0x5C58300000370204 Fadd
    temp_714 = 0.0 - temp_707;
    temp_715 = temp_708 + temp_714;
    // 0x0016B8: 0x49A00F980BF70505 Ffma
    temp_716 = fma(temp_710, fp_c6.data[47].w, temp_703);
    // 0x0016C8: 0x5C90008000870009 Rro
    // 0x0016D0: 0x5080000000270909 Mufu
    temp_717 = exp2(temp_711);
    // 0x0016D8: 0x49A001980BF70404 Ffma
    temp_718 = fma(temp_715, fp_c6.data[47].w, temp_707);
    // 0x0016E8: 0x49A203180357060A Ffma
    temp_719 = 0.0 - temp_713;
    temp_720 = fma(temp_713, fp_c6.data[13].y, temp_719);
    // 0x0016F0: 0x5C60178000571F05 Fmnmx
    temp_721 = max(temp_703, temp_716);
    // 0x0016F8: 0x49A2031803470608 Ffma
    temp_722 = 0.0 - temp_713;
    temp_723 = fma(temp_713, fp_c6.data[13].x, temp_722);
    // 0x001708: 0x49A2031803670606 Ffma
    temp_724 = 0.0 - temp_713;
    temp_725 = fma(temp_713, fp_c6.data[13].z, temp_724);
    // 0x001710: 0x5C60178000470304 Fmnmx
    temp_726 = max(temp_707, temp_718);
    // 0x001718: 0x5C60178000771E07 Fmnmx
    temp_727 = max(temp_700, temp_712);
    // 0x001728: 0x59A0028000A7050A Ffma
    temp_728 = fma(temp_721, temp_720, temp_721);
    // 0x001730: 0x59A0020000670405 Ffma
    temp_729 = fma(temp_726, temp_725, temp_726);
    // 0x001738: 0x4C68101802B70906 Fmul
    temp_730 = temp_717 * fp_c6.data[10].w;
    // 0x001748: 0x59A0038000870703 Ffma
    temp_731 = fma(temp_727, temp_723, temp_727);
    // 0x001750: 0x5C59100000A70104 Fadd
    temp_732 = 0.0 - temp_704;
    temp_733 = temp_732 + temp_728;
    // 0x001758: 0x5C59100000570205 Fadd
    temp_734 = 0.0 - temp_708;
    temp_735 = temp_734 + temp_729;
    // 0x001768: 0x5C59100000370003 Fadd
    temp_736 = 0.0 - temp_701;
    temp_737 = temp_736 + temp_731;
    // 0x001770: 0x59A0008000670401 Ffma
    temp_738 = fma(temp_733, temp_730, temp_704);
    // 0x001778: 0x4C58100C03872804 Fadd
    temp_739 = temp_659 + fp_c3.data[14].x;
    // 0x001788: 0x0103F8000007F007 Mov32i
    // 0x001790: 0x59A0010000670502 Ffma
    temp_740 = fma(temp_735, temp_730, temp_708);
    // 0x001798: 0x0103EC000007F005 Mov32i
    // 0x0017A8: 0x59A0000000670300 Ffma
    temp_741 = fma(temp_737, temp_730, temp_701);
    // 0x0017B0: 0x0103F8000007F003 Mov32i
    // 0x0017B8: 0x5C9807800FF70006 Mov
    // 0x0017C8: 0x49A37F8C03C70404 Ffma
    temp_742 = 0.0 - fp_c3.data[15].x;
    temp_743 = fma(temp_739, temp_742, -0.0);
    // 0x0017D0: 0xE30000000007000F Exit
    out_attr0.x = temp_741;
    out_attr0.y = temp_738;
    out_attr0.z = temp_740;
    out_attr0.w = 1.0;
    out_attr1.x = temp_743;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
