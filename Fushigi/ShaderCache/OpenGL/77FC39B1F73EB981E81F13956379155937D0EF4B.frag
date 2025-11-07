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
layout (binding = 0) uniform sampler2DArray fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_2C;
layout (binding = 2) uniform sampler2DArray fp_t_tcb_36;
layout (binding = 3) uniform sampler2DArray fp_t_tcb_24;
layout (binding = 4) uniform sampler2DArray fp_t_tcb_28;
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
    uint temp_15;
    uint temp_16;
    precise vec2 temp_17;
    precise float temp_18;
    precise float temp_19;
    precise vec2 temp_20;
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
    precise vec3 temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise vec3 temp_35;
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
    uint temp_167;
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
    int temp_193;
    precise float temp_194;
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
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    bool temp_253;
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
    int temp_299;
    bool temp_300;
    int temp_301;
    int temp_302;
    int temp_303;
    int temp_304;
    int temp_305;
    uint temp_306;
    uint temp_307;
    int temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    int temp_313;
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
    int temp_332;
    uint temp_333;
    uint temp_334;
    int temp_335;
    precise float temp_336;
    int temp_337;
    uint temp_338;
    int temp_339;
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
    precise float temp_357;
    precise float temp_358;
    int temp_359;
    uint temp_360;
    uint temp_361;
    int temp_362;
    precise float temp_363;
    int temp_364;
    uint temp_365;
    int temp_366;
    precise float temp_367;
    precise float temp_368;
    precise float temp_369;
    int temp_370;
    uint temp_371;
    uint temp_372;
    int temp_373;
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
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    uint temp_402;
    int temp_403;
    bool temp_404;
    uint temp_405;
    precise float temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    precise float temp_412;
    uint temp_413;
    precise float temp_414;
    bool temp_415;
    precise float temp_416;
    int temp_417;
    uint temp_418;
    uint temp_419;
    int temp_420;
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
    precise float temp_448;
    uint temp_449;
    uint temp_450;
    int temp_451;
    precise float temp_452;
    int temp_453;
    uint temp_454;
    int temp_455;
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
    precise vec3 temp_550;
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
    precise vec3 temp_564;
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
    // 0x000008: 0x0103F0000007F02D Mov32i
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0xE003FF870FF7FF07 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000028: 0xE003FF874FF7FF0A Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000030: 0x5080000000471010 Mufu
    // 0x000038: 0x4C68100C04A70707 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000048: 0x4C68100C04B70A0A Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000050: 0xE043FF91C107FF0E Ipa
    temp_8 = in_attr9.w;
    // 0x000058: 0xE043FF8E4107FF01 Ipa
    temp_9 = in_attr6.y;
    // 0x000068: 0xE043FF8E0107FF0F Ipa
    temp_10 = in_attr6.x;
    // 0x000070: 0xE043FF8E8107FF02 Ipa
    temp_11 = in_attr6.z;
    // 0x000078: 0xE043FF8EC107FF03 Ipa
    temp_12 = in_attr6.w;
    // 0x000088: 0x5CB0100000E7090E F2i
    temp_13 = roundEven(temp_8);
    temp_14 = max(temp_13, 0.0);
    temp_15 = uint(temp_14);
    temp_16 = clamp(temp_15, 0u, 0xFFFFu);
    // 0x000090: 0xD8F0026FF0170E08 Texs
    temp_17 = texture(fp_t_tcb_26, vec3(temp_10, temp_9, float(int(temp_16)))).xy;
    temp_18 = temp_17.x;
    temp_19 = temp_17.y;
    // 0x000098: 0xD83002CFF0370202 Texs
    temp_20 = texture(fp_t_tcb_2C, vec2(temp_11, temp_12)).xy;
    temp_21 = temp_20.x;
    temp_22 = temp_20.y;
    // 0x0000A8: 0xD8E40360B0170E22 Texs
    temp_23 = texture(fp_t_tcb_36, vec3(temp_10, temp_9, float(int(temp_16)))).xyw;
    temp_24 = temp_23.x;
    temp_25 = temp_23.y;
    temp_26 = temp_23.z;
    // 0x0000B0: 0xD8E2024060170E04 Texs
    temp_27 = texture(fp_t_tcb_24, vec3(temp_10, temp_9, float(int(temp_16)))).xyz;
    temp_28 = temp_27.x;
    temp_29 = temp_27.y;
    temp_30 = temp_27.z;
    // 0x0000B8: 0xD8E20281B0170E0C Texs
    temp_31 = texture(fp_t_tcb_28, vec3(temp_10, temp_9, float(int(temp_16)))).xyz;
    temp_32 = temp_31.x;
    temp_33 = temp_31.y;
    temp_34 = temp_31.z;
    // 0x0000C8: 0xD822020000A7071E Texs
    temp_35 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_36 = temp_35.x;
    temp_37 = temp_35.y;
    temp_38 = temp_35.z;
    // 0x0000D0: 0xE043FF8A0107FF17 Ipa
    temp_39 = in_attr2.x;
    // 0x0000D8: 0xE043FF8B0107FF21 Ipa
    temp_40 = in_attr3.x;
    // 0x0000E8: 0xE043FF8A4107FF15 Ipa
    temp_41 = in_attr2.y;
    // 0x0000F0: 0xE043FF8B4107FF20 Ipa
    temp_42 = in_attr3.y;
    // 0x0000F8: 0xE043FF8A8107FF18 Ipa
    temp_43 = in_attr2.z;
    // 0x000108: 0xE043FF890107FF11 Ipa
    temp_44 = in_attr1.x;
    // 0x000110: 0xE043FF880107FF1C Ipa
    temp_45 = in_attr0.x;
    // 0x000118: 0xE043FF8B8107FF16 Ipa
    temp_46 = in_attr3.z;
    // 0x000128: 0xE043FF894107FF12 Ipa
    temp_47 = in_attr1.y;
    // 0x000130: 0xE043FF884107FF24 Ipa
    temp_48 = in_attr0.y;
    // 0x000138: 0xE043FF898107FF13 Ipa
    temp_49 = in_attr1.z;
    // 0x000148: 0xE043FF888107FF25 Ipa
    temp_50 = in_attr0.z;
    // 0x000150: 0xE2900000E2800000 Ssy
    // 0x000158: 0x5C6810000177170E Fmul
    temp_51 = temp_39 * temp_39;
    // 0x000168: 0x5C6810000217211D Fmul
    temp_52 = temp_40 * temp_40;
    // 0x000170: 0x5C68100001171101 Fmul
    temp_53 = temp_44 * temp_44;
    // 0x000178: 0x59A007000157150E Ffma
    temp_54 = fma(temp_41, temp_41, temp_51);
    // 0x000188: 0x59A00E800207201D Ffma
    temp_55 = fma(temp_42, temp_42, temp_52);
    // 0x000190: 0x5C68100001C71C0F Fmul
    temp_56 = temp_45 * temp_45;
    // 0x000198: 0x59A0008001271201 Ffma
    temp_57 = fma(temp_47, temp_47, temp_53);
    // 0x0001A8: 0x59A0070001871819 Ffma
    temp_58 = fma(temp_43, temp_43, temp_54);
    // 0x0001B0: 0x59A00E800167161D Ffma
    temp_59 = fma(temp_46, temp_46, temp_55);
    // 0x0001B8: 0x508000000057191A Mufu
    temp_60 = inversesqrt(temp_58);
    // 0x0001C8: 0x59A007800247240F Ffma
    temp_61 = fma(temp_48, temp_48, temp_56);
    // 0x0001D0: 0x5080000000571D27 Mufu
    temp_62 = inversesqrt(temp_59);
    // 0x0001D8: 0x59A0008001371314 Ffma
    temp_63 = fma(temp_49, temp_49, temp_57);
    // 0x0001E8: 0x5080000000571414 Mufu
    temp_64 = inversesqrt(temp_63);
    // 0x0001F0: 0x59A0078002572526 Ffma
    temp_65 = fma(temp_50, temp_50, temp_61);
    // 0x0001F8: 0x5080000000572626 Mufu
    temp_66 = inversesqrt(temp_65);
    // 0x000208: 0x5C68100001A71515 Fmul
    temp_67 = temp_41 * temp_60;
    // 0x000210: 0x5C68100001A71717 Fmul
    temp_68 = temp_39 * temp_60;
    // 0x000218: 0x5C69100002772121 Fmul
    temp_69 = 0.0 - temp_62;
    temp_70 = temp_40 * temp_69;
    // 0x000228: 0x5C69100002772020 Fmul
    temp_71 = 0.0 - temp_62;
    temp_72 = temp_42 * temp_71;
    // 0x000230: 0x5C69100002771616 Fmul
    temp_73 = 0.0 - temp_62;
    temp_74 = temp_46 * temp_73;
    // 0x000238: 0x5C6810000147110F Fmul
    temp_75 = temp_44 * temp_64;
    // 0x000248: 0x5C68100001471201 Fmul
    temp_76 = temp_47 * temp_64;
    // 0x000250: 0x5C6810000147130E Fmul
    temp_77 = temp_49 * temp_64;
    // 0x000258: 0x5C68100001A71813 Fmul
    temp_78 = temp_43 * temp_60;
    // 0x000268: 0x5C68100002671C14 Fmul
    temp_79 = temp_45 * temp_66;
    // 0x000270: 0x4C58301805D7201C Fadd
    temp_80 = 0.0 - fp_c6.data[23].y;
    temp_81 = temp_72 + temp_80;
    // 0x000278: 0x4C58301805E7161D Fadd
    temp_82 = 0.0 - fp_c6.data[23].z;
    temp_83 = temp_74 + temp_82;
    // 0x000288: 0x5C68100002672412 Fmul
    temp_84 = temp_48 * temp_66;
    // 0x000290: 0x5C68100002672511 Fmul
    temp_85 = temp_50 * temp_66;
    // 0x000298: 0x3868104110070A0A Fmul
    temp_86 = temp_7 * 9.0;
    // 0x0002A8: 0x5CA8148000A70A0A F2f
    temp_87 = floor(temp_86);
    // 0x0002B0: 0xF0F0000034270000 Depbar
    // 0x0002B8: 0x5C68100000970919 Fmul
    temp_88 = temp_19 * temp_19;
    // 0x0002C8: 0x49A0041407C70202 Ffma
    temp_89 = fma(temp_21, fp_c5.data[31].x, temp_18);
    // 0x0002D0: 0x49A0049407C70303 Ffma
    temp_90 = fma(temp_22, fp_c5.data[31].x, temp_19);
    // 0x0002D8: 0x4C58301805C72109 Fadd
    temp_91 = 0.0 - fp_c6.data[23].x;
    temp_92 = temp_70 + temp_91;
    // 0x0002E8: 0x4C6810180A072222 Fmul
    temp_93 = temp_24 * fp_c6.data[40].x;
    // 0x0002F0: 0x4C68101403070404 Fmul
    temp_94 = temp_28 * fp_c5.data[12].x;
    // 0x0002F8: 0x59A00C8000870819 Ffma
    temp_95 = fma(temp_18, temp_18, temp_88);
    // 0x000308: 0x5C68100000270208 Fmul
    temp_96 = temp_89 * temp_89;
    // 0x000310: 0x4C68101403170505 Fmul
    temp_97 = temp_29 * fp_c5.data[12].y;
    // 0x000318: 0x5C6810000097091A Fmul
    temp_98 = temp_92 * temp_92;
    // 0x000328: 0x4C68101403270606 Fmul
    temp_99 = temp_30 * fp_c5.data[12].z;
    // 0x000330: 0xF0F0000034170000 Depbar
    // 0x000338: 0x4C68101801671B1B Fmul
    temp_100 = temp_34 * fp_c6.data[5].z;
    // 0x000348: 0x385D103F80071919 Fadd
    temp_101 = 0.0 - temp_95;
    temp_102 = temp_101 + 1.0;
    temp_103 = clamp(temp_102, 0.0, 1.0);
    // 0x000350: 0x59A0040000370308 Ffma
    temp_104 = fma(temp_90, temp_90, temp_96);
    // 0x000358: 0x5080000000871919 Mufu
    temp_105 = sqrt(temp_103);
    // 0x000368: 0x59A00D0001C71C1A Ffma
    temp_106 = fma(temp_81, temp_81, temp_98);
    // 0x000370: 0x59A00D0001D71D24 Ffma
    temp_107 = fma(temp_83, temp_83, temp_106);
    // 0x000378: 0x5080000000572427 Mufu
    temp_108 = inversesqrt(temp_107);
    // 0x000388: 0x59A0040001971908 Ffma
    temp_109 = fma(temp_105, temp_105, temp_104);
    // 0x000390: 0x5080000000570808 Mufu
    temp_110 = inversesqrt(temp_109);
    // 0x000398: 0x5C6810000087031A Fmul
    temp_111 = temp_90 * temp_110;
    // 0x0003A8: 0x5C68100000870218 Fmul
    temp_112 = temp_89 * temp_110;
    // 0x0003B0: 0x5C68100002770903 Fmul
    temp_113 = temp_92 * temp_108;
    // 0x0003B8: 0x5C68100001771A02 Fmul
    temp_114 = temp_111 * temp_68;
    // 0x0003C8: 0x5C68100000871917 Fmul
    temp_115 = temp_105 * temp_110;
    // 0x0003D0: 0x5C68100001571A26 Fmul
    temp_116 = temp_111 * temp_67;
    // 0x0003D8: 0x5C68100001371A13 Fmul
    temp_117 = temp_111 * temp_78;
    // 0x0003E8: 0x5C68100002771C1A Fmul
    temp_118 = temp_81 * temp_108;
    // 0x0003F0: 0x5C68100000372109 Fmul
    temp_119 = temp_70 * temp_113;
    // 0x0003F8: 0x59A0010000F71802 Ffma
    temp_120 = fma(temp_112, temp_75, temp_114);
    // 0x000408: 0x5C68100002771D08 Fmul
    temp_121 = temp_83 * temp_108;
    // 0x000410: 0x59A0130000171801 Ffma
    temp_122 = fma(temp_112, temp_76, temp_116);
    // 0x000418: 0x59A0098000E7180E Ffma
    temp_123 = fma(temp_112, temp_77, temp_117);
    // 0x000428: 0x4C69101805C70313 Fmul
    temp_124 = 0.0 - fp_c6.data[23].x;
    temp_125 = temp_113 * temp_124;
    // 0x000430: 0x59A0048001A72009 Ffma
    temp_126 = fma(temp_72, temp_118, temp_119);
    // 0x000438: 0x59A0010001471702 Ffma
    temp_127 = fma(temp_115, temp_79, temp_120);
    // 0x000448: 0x5C9807800FF70027 Mov
    // 0x000450: 0x59A0008001271701 Ffma
    temp_128 = fma(temp_115, temp_84, temp_122);
    // 0x000458: 0x59A0070001171711 Ffma
    temp_129 = fma(temp_115, temp_85, temp_123);
    // 0x000468: 0x01040DF760C7F017 Mov32i
    // 0x000470: 0x59A4048000871609 Ffma
    temp_130 = fma(temp_74, temp_121, temp_126);
    temp_131 = clamp(temp_130, 0.0, 1.0);
    // 0x000478: 0x5C6810000027020F Fmul
    temp_132 = temp_127 * temp_127;
    // 0x000488: 0x49A1099805D71A0E Ffma
    temp_133 = 0.0 - fp_c6.data[23].y;
    temp_134 = fma(temp_118, temp_133, temp_125);
    // 0x000490: 0x59A007800017010F Ffma
    temp_135 = fma(temp_128, temp_128, temp_132);
    // 0x000498: 0x49A5071805E70814 Ffma
    temp_136 = 0.0 - fp_c6.data[23].z;
    temp_137 = fma(temp_121, temp_136, temp_134);
    temp_138 = clamp(temp_137, 0.0, 1.0);
    // 0x0004A8: 0x59A0078001171112 Ffma
    temp_139 = fma(temp_129, temp_129, temp_135);
    // 0x0004B0: 0x49A20B840007090F Ffma
    temp_140 = fma(temp_131, fp_c1.data[0].x, -6.98316002);
    // 0x0004B8: 0x5080000000571213 Mufu
    temp_141 = inversesqrt(temp_139);
    // 0x0004C8: 0x5C68100000F7090F Fmul
    temp_142 = temp_131 * temp_140;
    // 0x0004D0: 0x49A20B8400071409 Ffma
    temp_143 = fma(temp_138, fp_c1.data[0].x, -6.98316002);
    // 0x0004D8: 0x5C6810000137020E Fmul
    temp_144 = temp_127 * temp_141;
    // 0x0004E8: 0x386013BF80072202 Fmnmx
    temp_145 = min(temp_93, 1.0);
    // 0x0004F0: 0x5C68100000971409 Fmul
    temp_146 = temp_138 * temp_143;
    // 0x0004F8: 0x3868104180070714 Fmul
    temp_147 = temp_6 * 16.0;
    // 0x000508: 0x5C68100001370101 Fmul
    temp_148 = temp_128 * temp_141;
    // 0x000510: 0x5CA8148001470A14 F2f
    temp_149 = floor(temp_147);
    // 0x000518: 0x5C68100000E70303 Fmul
    temp_150 = temp_113 * temp_144;
    // 0x000528: 0x4C60178400170202 Fmnmx
    temp_151 = max(temp_145, fp_c1.data[0].y);
    // 0x000530: 0x5C68100000E72107 Fmul
    temp_152 = temp_70 * temp_144;
    // 0x000538: 0x5C68100001371112 Fmul
    temp_153 = temp_129 * temp_141;
    // 0x000548: 0x5C90008000970022 Rro
    // 0x000550: 0x59A0018000171A15 Ffma
    temp_154 = fma(temp_118, temp_148, temp_150);
    // 0x000558: 0x5080000000272222 Mufu
    temp_155 = exp2(temp_146);
    // 0x000568: 0x51A4010400170213 Ffma
    temp_156 = fma(temp_151, temp_151, fp_c1.data[0].y);
    temp_157 = clamp(temp_156, 0.0, 1.0);
    // 0x000570: 0x4C69101805C70E03 Fmul
    temp_158 = 0.0 - fp_c6.data[23].x;
    temp_159 = temp_144 * temp_158;
    // 0x000578: 0x32A016BF0007022D Ffma
    temp_160 = fma(temp_151, 0.5, 0.5);
    // 0x000588: 0x59A0038000172011 Ffma
    temp_161 = fma(temp_72, temp_148, temp_152);
    // 0x000590: 0x32A00A4180070A2C Ffma
    temp_162 = fma(temp_87, 16.0, temp_149);
    // 0x000598: 0x59A40A8001270815 Ffma
    temp_163 = fma(temp_121, temp_153, temp_154);
    temp_164 = clamp(temp_163, 0.0, 1.0);
    // 0x0005A8: 0x5CB0118002C70A2C F2i
    temp_165 = trunc(temp_162);
    temp_166 = max(temp_165, 0.0);
    temp_167 = uint(temp_166);
    // 0x0005B0: 0x5C68100001371308 Fmul
    temp_168 = temp_157 * temp_157;
    // 0x0005B8: 0x49A1019805D70107 Ffma
    temp_169 = 0.0 - fp_c6.data[23].y;
    temp_170 = fma(temp_148, temp_169, temp_159);
    // 0x0005C8: 0x5C68120002D72D2D Fmul
    temp_171 = temp_160 * 0.5;
    temp_172 = temp_171 * temp_160;
    // 0x0005D0: 0x59A4088001271603 Ffma
    temp_173 = fma(temp_74, temp_153, temp_161);
    temp_174 = clamp(temp_173, 0.0, 1.0);
    // 0x0005D8: 0x4C58301407870509 Fadd
    temp_175 = 0.0 - fp_c5.data[30].x;
    temp_176 = temp_97 + temp_175;
    // 0x0005E8: 0x5C90008000F7001A Rro
    // 0x0005F0: 0x59A20A8000871514 Ffma
    temp_177 = 0.0 - temp_164;
    temp_178 = fma(temp_164, temp_168, temp_177);
    // 0x0005F8: 0x5080000000271A1A Mufu
    temp_179 = exp2(temp_142);
    // 0x000608: 0x49A5039805E7120A Ffma
    temp_180 = 0.0 - fp_c6.data[23].z;
    temp_181 = fma(temp_153, temp_180, temp_170);
    temp_182 = clamp(temp_181, 0.0, 1.0);
    // 0x000610: 0x59A1018002D70308 Ffma
    temp_183 = 0.0 - temp_172;
    temp_184 = fma(temp_174, temp_183, temp_174);
    // 0x000618: 0x4C58301407870611 Fadd
    temp_185 = 0.0 - fp_c5.data[30].x;
    temp_186 = temp_99 + temp_185;
    // 0x000628: 0x5C6810000037012E Fmul
    temp_187 = temp_148 * temp_174;
    // 0x000630: 0x51A00A0400271514 Ffma
    temp_188 = fma(temp_164, temp_178, fp_c1.data[0].z);
    // 0x000638: 0x59A1050002D70A07 Ffma
    temp_189 = 0.0 - temp_172;
    temp_190 = fma(temp_182, temp_189, temp_182);
    // 0x000648: 0x5080000000471414 Mufu
    temp_191 = 1.0 / temp_188;
    // 0x000650: 0x5C58100000872D08 Fadd
    temp_192 = temp_172 + temp_184;
    // 0x000658: 0x3848000000872C2A Shl
    temp_193 = int(temp_167) << 8;
    // 0x000668: 0x5080000000470808 Mufu
    temp_194 = 1.0 / temp_192;
    // 0x000670: 0x32A2104000072E2E Ffma
    temp_195 = 0.0 - temp_72;
    temp_196 = fma(temp_187, 2.0, temp_195);
    // 0x000678: 0xEF94008200472A2A Ldc
    temp_197 = temp_193 + 0x2004;
    temp_198 = uint(temp_197) >> 2;
    temp_199 = temp_198 >> 2;
    temp_200 = int(temp_198) & 3;
    temp_201 = fp_c8.data[int(temp_199)][temp_200];
    // 0x000688: 0x5C58100000772D07 Fadd
    temp_202 = temp_172 + temp_190;
    // 0x000690: 0x5080000000470715 Mufu
    temp_203 = 1.0 / temp_202;
    // 0x000698: 0x5C68100001471313 Fmul
    temp_204 = temp_157 * temp_191;
    // 0x0006A8: 0x3868103F0007082B Fmul
    temp_205 = temp_194 * 0.5;
    // 0x0006B0: 0x4C58301407870408 Fadd
    temp_206 = 0.0 - fp_c5.data[30].x;
    temp_207 = temp_94 + temp_206;
    // 0x0006B8: 0x5C68100001371314 Fmul
    temp_208 = temp_204 * temp_204;
    // 0x0006C8: 0x5C68100001572B0F Fmul
    temp_209 = temp_205 * temp_203;
    // 0x0006D0: 0x51A0041407872307 Ffma
    temp_210 = fma(temp_25, temp_207, fp_c5.data[30].x);
    // 0x0006D8: 0x51A0049407872308 Ffma
    temp_211 = fma(temp_25, temp_176, fp_c5.data[30].x);
    // 0x0006E8: 0x51A0089407872309 Ffma
    temp_212 = fma(temp_25, temp_186, fp_c5.data[30].x);
    // 0x0006F0: 0x5C68100001470F15 Fmul
    temp_213 = temp_209 * temp_208;
    // 0x0006F8: 0x59A10D0000771A11 Ffma
    temp_214 = 0.0 - temp_210;
    temp_215 = fma(temp_179, temp_214, temp_179);
    // 0x000708: 0x59A10D0000871A0F Ffma
    temp_216 = 0.0 - temp_211;
    temp_217 = fma(temp_179, temp_216, temp_179);
    // 0x000710: 0x59A1110002270817 Ffma
    temp_218 = 0.0 - temp_155;
    temp_219 = fma(temp_211, temp_218, temp_155);
    // 0x000718: 0x59A1110002270718 Ffma
    temp_220 = 0.0 - temp_155;
    temp_221 = fma(temp_210, temp_220, temp_155);
    // 0x000728: 0x59A1110002270922 Ffma
    temp_222 = 0.0 - temp_155;
    temp_223 = fma(temp_212, temp_222, temp_155);
    // 0x000730: 0x59A10D0000971A1A Ffma
    temp_224 = 0.0 - temp_212;
    temp_225 = fma(temp_179, temp_224, temp_179);
    // 0x000738: 0x5C58100001170713 Fadd
    temp_226 = temp_210 + temp_215;
    // 0x000748: 0x5C58100000F70814 Fadd
    temp_227 = temp_211 + temp_217;
    // 0x000750: 0x4C68101801570A11 Fmul
    temp_228 = temp_182 * fp_c6.data[5].y;
    // 0x000758: 0x5C58100001770817 Fadd
    temp_229 = temp_211 + temp_219;
    // 0x000768: 0x5C58100001870718 Fadd
    temp_230 = temp_210 + temp_221;
    // 0x000770: 0x5C58100002270922 Fadd
    temp_231 = temp_212 + temp_223;
    // 0x000778: 0x4C68101801470A0F Fmul
    temp_232 = temp_182 * fp_c6.data[5].x;
    // 0x000788: 0x4C68101406271414 Fmul
    temp_233 = temp_227 * fp_c5.data[24].z;
    // 0x000790: 0x1E23EA2F98371111 Fmul32i
    temp_234 = temp_228 * 0.318309873;
    // 0x000798: 0x5C68100001570A19 Fmul
    temp_235 = temp_182 * temp_213;
    // 0x0007A8: 0x4C68101406271315 Fmul
    temp_236 = temp_226 * fp_c5.data[24].z;
    // 0x0007B0: 0x4C68101406271717 Fmul
    temp_237 = temp_229 * fp_c5.data[24].z;
    // 0x0007B8: 0x4C68101406271818 Fmul
    temp_238 = temp_230 * fp_c5.data[24].z;
    // 0x0007C8: 0x4C68101406272222 Fmul
    temp_239 = temp_231 * fp_c5.data[24].z;
    // 0x0007D0: 0x1E23EA2F98370F0F Fmul32i
    temp_240 = temp_232 * 0.318309873;
    // 0x0007D8: 0x59A1088001471129 Ffma
    temp_241 = 0.0 - temp_233;
    temp_242 = fma(temp_234, temp_241, temp_234);
    // 0x0007E8: 0x385D103F80070B11 Fadd
    temp_243 = 0.0 - temp_26;
    temp_244 = temp_243 + 1.0;
    temp_245 = clamp(temp_244, 0.0, 1.0);
    // 0x0007F0: 0x5C58100001A7091A Fadd
    temp_246 = temp_212 + temp_225;
    // 0x0007F8: 0x4C68101801571717 Fmul
    temp_247 = temp_237 * fp_c6.data[5].y;
    // 0x000808: 0x4C68101801471818 Fmul
    temp_248 = temp_238 * fp_c6.data[5].x;
    // 0x000810: 0x4C68101801672222 Fmul
    temp_249 = temp_239 * fp_c6.data[5].z;
    // 0x000818: 0x59A1078001570F0F Ffma
    temp_250 = 0.0 - temp_236;
    temp_251 = fma(temp_240, temp_250, temp_240);
    // 0x000828: 0x4C68101801670A0A Fmul
    temp_252 = temp_182 * fp_c6.data[5].z;
    // 0x000830: 0xEF5400000007FF0F Stl
    local_memory[0] = floatBitsToUint(temp_251);
    // 0x000838: 0x5B6603800FF72A07 Isetp
    temp_253 = floatBitsToUint(temp_201) <= 0u;
    // 0x000848: 0x49A2089402C71114 Ffma
    temp_254 = 0.0 - temp_245;
    temp_255 = fma(temp_245, fp_c5.data[11].x, temp_254);
    // 0x000850: 0x49A2089402D71115 Ffma
    temp_256 = 0.0 - temp_245;
    temp_257 = fma(temp_245, fp_c5.data[11].y, temp_256);
    // 0x000858: 0x49A2089402E71111 Ffma
    temp_258 = 0.0 - temp_245;
    temp_259 = fma(temp_245, fp_c5.data[11].z, temp_258);
    // 0x000868: 0x4C68101406271A28 Fmul
    temp_260 = temp_246 * fp_c5.data[24].z;
    // 0x000870: 0x5C68100001971724 Fmul
    temp_261 = temp_247 * temp_235;
    // 0x000878: 0x5C68100001971825 Fmul
    temp_262 = temp_248 * temp_235;
    // 0x000888: 0x5C68100001972226 Fmul
    temp_263 = temp_249 * temp_235;
    // 0x000890: 0x4C68101801570D1A Fmul
    temp_264 = temp_33 * fp_c6.data[5].y;
    // 0x000898: 0x1E23EA2F98370A0A Fmul32i
    temp_265 = temp_252 * 0.318309873;
    // 0x0008A8: 0x4C68101801470C19 Fmul
    temp_266 = temp_32 * fp_c6.data[5].x;
    // 0x0008B0: 0x3858103F8007140D Fadd
    temp_267 = temp_255 + 1.0;
    // 0x0008B8: 0x3858103F80071514 Fadd
    temp_268 = temp_257 + 1.0;
    // 0x0008C8: 0x3858103F80071111 Fadd
    temp_269 = temp_259 + 1.0;
    // 0x0008D0: 0x5C68100000370E0C Fmul
    temp_270 = temp_144 * temp_174;
    // 0x0008D8: 0x5C68100000371217 Fmul
    temp_271 = temp_153 * temp_174;
    // 0x0008E8: 0x59A1050002870A28 Ffma
    temp_272 = 0.0 - temp_260;
    temp_273 = fma(temp_265, temp_272, temp_265);
    // 0x0008F0: 0x5C9807800FF7000A Mov
    // 0x0008F8: 0x5C9807800FF7000B Mov
    // 0x000908: 0x5C9807800FF7000F Mov
    // 0x000910: 0x5C9807800FF70013 Mov
    // 0x000918: 0x5C9807800FF70018 Mov
    // 0x000928: 0x59A4068000D7041C Ffma
    temp_274 = fma(temp_94, temp_267, temp_267);
    temp_275 = clamp(temp_274, 0.0, 1.0);
    // 0x000930: 0x59A40A000147051D Ffma
    temp_276 = fma(temp_97, temp_268, temp_268);
    temp_277 = clamp(temp_276, 0.0, 1.0);
    // 0x000938: 0x59A4088001170622 Ffma
    temp_278 = fma(temp_99, temp_269, temp_269);
    temp_279 = clamp(temp_278, 0.0, 1.0);
    // 0x000948: 0x32A210C000070C31 Ffma
    temp_280 = 0.0 - temp_70;
    temp_281 = fma(temp_270, 2.0, temp_280);
    // 0x000950: 0x32A20B4000071717 Ffma
    temp_282 = 0.0 - temp_74;
    temp_283 = fma(temp_271, 2.0, temp_282);
    // 0x000958: 0x1E23E22F98372424 Fmul32i
    temp_284 = temp_261 * 0.159154937;
    // 0x000968: 0x1E23E22F98372525 Fmul32i
    temp_285 = temp_262 * 0.159154937;
    // 0x000970: 0x1E23E22F98372626 Fmul32i
    temp_286 = temp_263 * 0.159154937;
    // 0x000978: 0xF0F800000000000F Sync
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
    temp_297 = 0.0;
    temp_298 = 0.0;
    if (!temp_253)
    {
        // 0x000988: 0x5C9807800FF70030 Mov
        temp_299 = 0;
        do
        {
            // 0x000990: 0x5C18020003072C2F Iscadd
            temp_301 = int(temp_167) << 4;
            temp_302 = temp_301 + temp_299;
            // 0x000998: 0xE003FF87CFF7FF32 Ipa
            // 0x0009A8: 0x1C00000000173030 Iadd32i
            temp_303 = temp_299 + 1;
            // 0x0009B0: 0xE003FF87CFF7FF34 Ipa
            // 0x0009B8: 0x3848000000472F2F Shl
            temp_304 = temp_302 << 4;
            // 0x0009C8: 0xE003FF87CFF7FF33 Ipa
            // 0x0009D0: 0x5B6C038002A7300F Isetp
            temp_300 = uint(temp_303) >= floatBitsToUint(temp_201);
            // 0x0009D8: 0xE290000059000000 Ssy
            // 0x0009E8: 0xEF94008200072F2F Ldc
            temp_305 = temp_304 + 0x2000;
            temp_306 = uint(temp_305) >> 2;
            temp_307 = temp_306 >> 2;
            temp_308 = int(temp_306) & 3;
            temp_309 = fp_c8.data[int(temp_307)][temp_308];
            // 0x0009F0: 0x5080000000473232 Mufu
            // 0x0009F8: 0x5080000000473434 Mufu
            // 0x000A08: 0x5080000000473333 Mufu
            // 0x000A10: 0xE043FF8D0327FF32 Ipa
            temp_310 = in_attr5.x;
            // 0x000A18: 0xE043FF8D4347FF34 Ipa
            temp_311 = in_attr5.y;
            // 0x000A28: 0xE043FF8D8337FF33 Ipa
            temp_312 = in_attr5.z;
            // 0x000A30: 0x3848000000672F2F Shl
            temp_313 = floatBitsToInt(temp_309) << 6;
            // 0x000A38: 0xEF95008001072F0C Ldc
            temp_314 = temp_313 + 16;
            temp_315 = uint(temp_314) >> 2;
            temp_316 = temp_315 >> 2;
            temp_317 = int(temp_315) & 3;
            temp_318 = fp_c8.data[int(temp_316)][temp_317];
            temp_319 = int(temp_315) + 1;
            temp_320 = uint(temp_319) >> 2;
            temp_321 = temp_319 & 3;
            temp_322 = fp_c8.data[int(temp_320)][temp_321];
            // 0x000A48: 0xEF95008001872F10 Ldc
            temp_323 = temp_313 + 24;
            temp_324 = uint(temp_323) >> 2;
            temp_325 = temp_324 >> 2;
            temp_326 = int(temp_324) & 3;
            temp_327 = fp_c8.data[int(temp_325)][temp_326];
            temp_328 = int(temp_324) + 1;
            temp_329 = uint(temp_328) >> 2;
            temp_330 = temp_328 & 3;
            temp_331 = fp_c8.data[int(temp_329)][temp_330];
            // 0x000A50: 0xEF95008002072F14 Ldc
            temp_332 = temp_313 + 32;
            temp_333 = uint(temp_332) >> 2;
            temp_334 = temp_333 >> 2;
            temp_335 = int(temp_333) & 3;
            temp_336 = fp_c8.data[int(temp_334)][temp_335];
            temp_337 = int(temp_333) + 1;
            temp_338 = uint(temp_337) >> 2;
            temp_339 = temp_337 & 3;
            temp_340 = fp_c8.data[int(temp_338)][temp_339];
            // 0x000A58: 0x5C58300003270C32 Fadd
            temp_341 = 0.0 - temp_310;
            temp_342 = temp_318 + temp_341;
            // 0x000A68: 0x5C58300003470D36 Fadd
            temp_343 = 0.0 - temp_311;
            temp_344 = temp_322 + temp_343;
            // 0x000A70: 0x5C58300003371033 Fadd
            temp_345 = 0.0 - temp_312;
            temp_346 = temp_327 + temp_345;
            // 0x000A78: 0x5C68100003273234 Fmul
            temp_347 = temp_342 * temp_342;
            // 0x000A88: 0x59A1198003371111 Ffma
            temp_348 = 0.0 - temp_346;
            temp_349 = fma(temp_331, temp_348, temp_346);
            // 0x000A90: 0x59A01A0003673634 Ffma
            temp_350 = fma(temp_344, temp_344, temp_347);
            // 0x000A98: 0x59A01A0001171135 Ffma
            temp_351 = fma(temp_349, temp_349, temp_350);
            // 0x000AA8: 0x508000000057350C Mufu
            temp_352 = inversesqrt(temp_351);
            // 0x000AB0: 0x5080000000873535 Mufu
            temp_353 = sqrt(temp_351);
            // 0x000AB8: 0x5C68100000C7320D Fmul
            temp_354 = temp_342 * temp_352;
            // 0x000AC8: 0x5C68100000C73637 Fmul
            temp_355 = temp_344 * temp_352;
            // 0x000AD0: 0x5C69100001470D0D Fmul
            temp_356 = 0.0 - temp_336;
            temp_357 = temp_354 * temp_356;
            // 0x000AD8: 0x5C68100000C71114 Fmul
            temp_358 = temp_349 * temp_352;
            // 0x000AE8: 0xEF95008003872F10 Ldc
            temp_359 = temp_313 + 56;
            temp_360 = uint(temp_359) >> 2;
            temp_361 = temp_360 >> 2;
            temp_362 = int(temp_360) & 3;
            temp_363 = fp_c8.data[int(temp_361)][temp_362];
            temp_364 = int(temp_360) + 1;
            temp_365 = uint(temp_364) >> 2;
            temp_366 = temp_364 & 3;
            temp_367 = fp_c8.data[int(temp_365)][temp_366];
            // 0x000AF0: 0x59A1068001573737 Ffma
            temp_368 = 0.0 - temp_340;
            temp_369 = fma(temp_355, temp_368, temp_357);
            // 0x000AF8: 0xEF94008002872F15 Ldc
            temp_370 = temp_313 + 40;
            temp_371 = uint(temp_370) >> 2;
            temp_372 = temp_371 >> 2;
            temp_373 = int(temp_371) & 3;
            temp_374 = fp_c8.data[int(temp_372)][temp_373];
            // 0x000B08: 0xEF95008003072F0C Ldc
            temp_375 = temp_313 + 48;
            temp_376 = uint(temp_375) >> 2;
            temp_377 = temp_376 >> 2;
            temp_378 = int(temp_376) & 3;
            temp_379 = fp_c8.data[int(temp_377)][temp_378];
            temp_380 = int(temp_376) + 1;
            temp_381 = uint(temp_380) >> 2;
            temp_382 = temp_380 & 3;
            temp_383 = fp_c8.data[int(temp_381)][temp_382];
            // 0x000B10: 0x59A11B8001571414 Ffma
            temp_384 = 0.0 - temp_374;
            temp_385 = fma(temp_358, temp_384, temp_369);
            // 0x000B18: 0x59A4068003570C35 Ffma
            temp_386 = fma(temp_379, temp_353, temp_383);
            temp_387 = clamp(temp_386, 0.0, 1.0);
            // 0x000B28: 0x010404000007F015 Mov32i
            // 0x000B30: 0x59A4088001071410 Ffma
            temp_388 = fma(temp_385, temp_363, temp_367);
            temp_389 = clamp(temp_388, 0.0, 1.0);
            // 0x000B38: 0x5C68100003573514 Fmul
            temp_390 = temp_387 * temp_387;
            // 0x000B48: 0x33A00AC000073511 Ffma
            temp_391 = fma(temp_387, -2.0, 3.0);
            // 0x000B50: 0x33A00AC000071015 Ffma
            temp_392 = fma(temp_389, -2.0, 3.0);
            // 0x000B58: 0x5C68100001071010 Fmul
            temp_393 = temp_389 * temp_389;
            // 0x000B68: 0x5C68100001171411 Fmul
            temp_394 = temp_390 * temp_391;
            // 0x000B70: 0x39585042F0073314 Fadd
            temp_395 = abs(temp_346);
            temp_396 = temp_395 + -120.0;
            // 0x000B78: 0x5C68100001571010 Fmul
            temp_397 = temp_393 * temp_392;
            // 0x000B88: 0x5C68100001171010 Fmul
            temp_398 = temp_397 * temp_394;
            // 0x000B90: 0x1EABD4CCCCD71411 Fmul32i
            temp_399 = temp_396 * -0.0500000007;
            temp_400 = clamp(temp_399, 0.0, 1.0);
            // 0x000B98: 0x5C68100001171010 Fmul
            temp_401 = temp_398 * temp_400;
            // 0x000BA8: 0x36247F9000171111 Xmad
            temp_402 = floatBitsToUint(temp_400) >> 16;
            temp_403 = int(temp_402) << 16;
            // 0x000BB0: 0x5BB383800FF71007 Fsetp
            temp_404 = temp_401 <= 0.0;
            // 0x000BB8: 0x7A05083C0F00FF11 Hadd2
            temp_299 = temp_303;
            temp_405 = uint(temp_403);
            temp_406 = temp_287;
            temp_407 = temp_288;
            temp_408 = temp_289;
            temp_409 = temp_290;
            temp_410 = temp_291;
            temp_411 = temp_292;
            if (temp_404)
            {
                temp_412 = unpackHalf2x16(uint(temp_403)).y;
                temp_413 = packHalf2x16(vec2(1.0, temp_412));
                temp_405 = temp_413;
            }
            // 0x000BC8: 0x5D2103902FF71107 Hsetp2
            temp_414 = unpackHalf2x16(temp_405).x;
            temp_415 = temp_414 == 0.0;
            // 0x000BD0: 0xF0F800000008000F Sync
            if (temp_415)
            {
                // 0x000BD8: 0x5080000000470C0C Mufu
                temp_416 = 1.0 / temp_379;
                // 0x000BE8: 0xEF94008002C72F35 Ldc
                temp_417 = temp_313 + 44;
                temp_418 = uint(temp_417) >> 2;
                temp_419 = temp_418 >> 2;
                temp_420 = int(temp_418) & 3;
                temp_421 = fp_c8.data[int(temp_419)][temp_420];
                // 0x000BF0: 0x5C69100000C70D0D Fmul
                temp_422 = 0.0 - temp_416;
                temp_423 = temp_383 * temp_422;
                // 0x000BF8: 0x5C60138000D73333 Fmnmx
                temp_424 = min(temp_346, temp_423);
                // 0x000C08: 0x5C61178003370D33 Fmnmx
                temp_425 = 0.0 - temp_423;
                temp_426 = max(temp_425, temp_424);
                // 0x000C10: 0x59A01A0003373315 Ffma
                temp_427 = fma(temp_426, temp_426, temp_350);
                // 0x000C18: 0x508000000057150C Mufu
                temp_428 = inversesqrt(temp_427);
                // 0x000C28: 0x5080000000871515 Mufu
                temp_429 = sqrt(temp_427);
                // 0x000C30: 0x5C68100000C73232 Fmul
                temp_430 = temp_342 * temp_428;
                // 0x000C38: 0x5080000000473535 Mufu
                temp_431 = 1.0 / temp_421;
                // 0x000C48: 0x5C68100000C73636 Fmul
                temp_432 = temp_344 * temp_428;
                // 0x000C50: 0x5C68100000C73333 Fmul
                temp_433 = temp_426 * temp_428;
                // 0x000C58: 0x5C58100003272111 Fadd
                temp_434 = temp_70 + temp_430;
                // 0x000C68: 0x5C58100003672034 Fadd
                temp_435 = temp_72 + temp_432;
                // 0x000C70: 0x5C58100003371614 Fadd
                temp_436 = temp_74 + temp_433;
                // 0x000C78: 0x5C68100003270E37 Fmul
                temp_437 = temp_144 * temp_430;
                // 0x000C88: 0x5C6810000117110C Fmul
                temp_438 = temp_434 * temp_434;
                // 0x000C90: 0x51A00A8400373515 Ffma
                temp_439 = fma(temp_431, temp_429, fp_c1.data[0].w);
                // 0x000C98: 0x59A01B8003670137 Ffma
                temp_440 = fma(temp_148, temp_432, temp_437);
                // 0x000CA8: 0x5080000000471515 Mufu
                temp_441 = 1.0 / temp_439;
                // 0x000CB0: 0x59A006000347340C Ffma
                temp_442 = fma(temp_435, temp_435, temp_438);
                // 0x000CB8: 0x59A01B8003371237 Ffma
                temp_443 = fma(temp_153, temp_433, temp_440);
                // 0x000CC8: 0x59A006000147140C Ffma
                temp_444 = fma(temp_436, temp_436, temp_442);
                // 0x000CD0: 0x5080000000570C0C Mufu
                temp_445 = inversesqrt(temp_444);
                // 0x000CD8: 0x5C68100000C71111 Fmul
                temp_446 = temp_434 * temp_445;
                // 0x000CE8: 0x5C68100000C71414 Fmul
                temp_447 = temp_436 * temp_445;
                // 0x000CF0: 0x5C68100000C73434 Fmul
                temp_448 = temp_435 * temp_445;
                // 0x000CF8: 0xEF95008000072F0C Ldc
                temp_449 = uint(temp_313) >> 2;
                temp_450 = temp_449 >> 2;
                temp_451 = int(temp_449) & 3;
                temp_452 = fp_c8.data[int(temp_450)][temp_451];
                temp_453 = int(temp_449) + 1;
                temp_454 = uint(temp_453) >> 2;
                temp_455 = temp_453 & 3;
                temp_456 = fp_c8.data[int(temp_454)][temp_455];
                // 0x000D08: 0x5C68100001173232 Fmul
                temp_457 = temp_430 * temp_446;
                // 0x000D10: 0xEF94008000872F2F Ldc
                temp_458 = temp_313 + 8;
                temp_459 = uint(temp_458) >> 2;
                temp_460 = temp_459 >> 2;
                temp_461 = int(temp_459) & 3;
                temp_462 = fp_c8.data[int(temp_460)][temp_461];
                // 0x000D18: 0x5C68100001170E11 Fmul
                temp_463 = temp_144 * temp_446;
                // 0x000D28: 0x59A0190003473632 Ffma
                temp_464 = fma(temp_432, temp_448, temp_457);
                // 0x000D30: 0x59A0088003470111 Ffma
                temp_465 = fma(temp_148, temp_448, temp_463);
                // 0x000D38: 0x01040DF760C7F034 Mov32i
                // 0x000D48: 0x59A4190001473332 Ffma
                temp_466 = fma(temp_433, temp_447, temp_464);
                temp_467 = clamp(temp_466, 0.0, 1.0);
                // 0x000D50: 0x51A4010400170233 Ffma
                temp_468 = fma(temp_151, temp_151, fp_c1.data[0].y);
                temp_469 = clamp(temp_468, 0.0, 1.0);
                // 0x000D58: 0x59A4088001471211 Ffma
                temp_470 = fma(temp_153, temp_447, temp_465);
                temp_471 = clamp(temp_470, 0.0, 1.0);
                // 0x000D68: 0x49A21A0400073234 Ffma
                temp_472 = fma(temp_467, fp_c1.data[0].x, -6.98316002);
                // 0x000D70: 0x5C68100003373314 Fmul
                temp_473 = temp_469 * temp_469;
                // 0x000D78: 0x5C68100003473232 Fmul
                temp_474 = temp_467 * temp_472;
                // 0x000D88: 0x59A2088001171414 Ffma
                temp_475 = 0.0 - temp_471;
                temp_476 = fma(temp_473, temp_471, temp_475);
                // 0x000D90: 0x1E23FB3333371534 Fmul32i
                temp_477 = temp_441 * 1.39999998;
                // 0x000D98: 0x5C5C30000FF73715 Fadd
                temp_478 = temp_443 + -0.0;
                temp_479 = clamp(temp_478, 0.0, 1.0);
                // 0x000DA8: 0x5C90008003270032 Rro
                // 0x000DB0: 0x51A00A0400271114 Ffma
                temp_480 = fma(temp_471, temp_476, fp_c1.data[0].z);
                // 0x000DB8: 0x5080000000273232 Mufu
                temp_481 = exp2(temp_474);
                // 0x000DC8: 0x59A10A8001572D11 Ffma
                temp_482 = 0.0 - temp_479;
                temp_483 = fma(temp_172, temp_482, temp_479);
                // 0x000DD0: 0x5080000000471414 Mufu
                temp_484 = 1.0 / temp_480;
                // 0x000DD8: 0x5C68100003473434 Fmul
                temp_485 = temp_477 * temp_477;
                // 0x000DE8: 0x5C58100001172D11 Fadd
                temp_486 = temp_172 + temp_483;
                // 0x000DF0: 0x5C68100000C7100C Fmul
                temp_487 = temp_401 * temp_452;
                // 0x000DF8: 0x5080000000471111 Mufu
                temp_488 = 1.0 / temp_486;
                // 0x000E08: 0x5C68100000D7100D Fmul
                temp_489 = temp_401 * temp_456;
                // 0x000E10: 0x59A11A0003473734 Ffma
                temp_490 = 0.0 - temp_485;
                temp_491 = fma(temp_443, temp_490, temp_485);
                // 0x000E18: 0x5C68100001473314 Fmul
                temp_492 = temp_469 * temp_484;
                // 0x000E28: 0x5C68100002F7102F Fmul
                temp_493 = temp_401 * temp_462;
                // 0x000E30: 0x59A1190003270733 Ffma
                temp_494 = 0.0 - temp_481;
                temp_495 = fma(temp_210, temp_494, temp_481);
                // 0x000E38: 0x59A1190003270810 Ffma
                temp_496 = 0.0 - temp_481;
                temp_497 = fma(temp_211, temp_496, temp_481);
                // 0x000E48: 0x59A1190003270932 Ffma
                temp_498 = 0.0 - temp_481;
                temp_499 = fma(temp_212, temp_498, temp_481);
                // 0x000E50: 0x5C5C100003473734 Fadd
                temp_500 = temp_443 + temp_491;
                temp_501 = clamp(temp_500, 0.0, 1.0);
                // 0x000E58: 0x5C68100001471414 Fmul
                temp_502 = temp_492 * temp_492;
                // 0x000E68: 0x5C68100001172B11 Fmul
                temp_503 = temp_205 * temp_488;
                // 0x000E70: 0x5C58100003370733 Fadd
                temp_504 = temp_210 + temp_495;
                // 0x000E78: 0x5C58100001070810 Fadd
                temp_505 = temp_211 + temp_497;
                // 0x000E88: 0x5C58100003270932 Fadd
                temp_506 = temp_212 + temp_499;
                // 0x000E90: 0x5C68100001171414 Fmul
                temp_507 = temp_502 * temp_503;
                // 0x000E98: 0x4C68101406273333 Fmul
                temp_508 = temp_504 * fp_c5.data[24].z;
                // 0x000EA8: 0x4C68101406271010 Fmul
                temp_509 = temp_505 * fp_c5.data[24].z;
                // 0x000EB0: 0x4C68101406273232 Fmul
                temp_510 = temp_506 * fp_c5.data[24].z;
                // 0x000EB8: 0x5C68100001471514 Fmul
                temp_511 = temp_479 * temp_507;
                // 0x000EC8: 0x5C68100000C73333 Fmul
                temp_512 = temp_508 * temp_487;
                // 0x000ED0: 0x5C68100000D71011 Fmul
                temp_513 = temp_509 * temp_489;
                // 0x000ED8: 0x5C68100002F73232 Fmul
                temp_514 = temp_510 * temp_493;
                // 0x000EE8: 0x5C68100003470C0C Fmul
                temp_515 = temp_487 * temp_501;
                // 0x000EF0: 0x5C68100003470D0D Fmul
                temp_516 = temp_489 * temp_501;
                // 0x000EF8: 0x5C68100003472F34 Fmul
                temp_517 = temp_493 * temp_501;
                // 0x000F08: 0x5C68100001473310 Fmul
                temp_518 = temp_512 * temp_511;
                // 0x000F10: 0x5C68100001471111 Fmul
                temp_519 = temp_513 * temp_511;
                // 0x000F18: 0x5C68100001473232 Fmul
                temp_520 = temp_514 * temp_511;
                // 0x000F28: 0x49A0138400570C27 Ffma
                temp_521 = fma(temp_515, fp_c1.data[1].y, temp_287);
                // 0x000F30: 0x49A0050400570D0A Ffma
                temp_522 = fma(temp_516, fp_c1.data[1].y, temp_288);
                // 0x000F38: 0x49A005840057340B Ffma
                temp_523 = fma(temp_517, fp_c1.data[1].y, temp_289);
                // 0x000F48: 0x49A007840047100F Ffma
                temp_524 = fma(temp_518, fp_c1.data[1].x, temp_290);
                // 0x000F50: 0x49A0098400471113 Ffma
                temp_525 = fma(temp_519, fp_c1.data[1].x, temp_291);
                // 0x000F58: 0x49A00C0400473218 Ffma
                temp_526 = fma(temp_520, fp_c1.data[1].x, temp_292);
                // 0x000F68: 0xF0F800000007000F Sync
                temp_406 = temp_521;
                temp_407 = temp_522;
                temp_408 = temp_523;
                temp_409 = temp_524;
                temp_410 = temp_525;
                temp_411 = temp_526;
            }
            // 0x000F70: 0xE2400FFFA189000F Bra
            temp_287 = temp_406;
            temp_288 = temp_407;
            temp_289 = temp_408;
            temp_290 = temp_409;
            temp_291 = temp_410;
            temp_292 = temp_411;
            temp_293 = temp_407;
            temp_294 = temp_408;
            temp_295 = temp_409;
            temp_296 = temp_410;
            temp_297 = temp_411;
            temp_298 = temp_406;
        }
        while (!temp_300);
        // 0x000F78: 0xF0F800000007000F Sync
    }
    // 0x000F88: 0x5C62578002E7310D Fmnmx
    temp_527 = abs(temp_281);
    temp_528 = abs(temp_196);
    temp_529 = max(temp_527, temp_528);
    // 0x000F90: 0xE003FF87CFF7FF2A Ipa
    // 0x000F98: 0x5C62578000170E0C Fmnmx
    temp_530 = abs(temp_144);
    temp_531 = abs(temp_148);
    temp_532 = max(temp_530, temp_531);
    // 0x000FA8: 0xEF4410000007FF32 Ldl
    temp_533 = uintBitsToFloat(local_memory[0]);
    // 0x000FB0: 0x38681040E007022F Fmul
    temp_534 = temp_151 * 7.0;
    // 0x000FB8: 0x010000000017F014 Mov32i
    // 0x000FC8: 0x3868104080070221 Fmul
    temp_535 = temp_151 * 4.0;
    // 0x000FD0: 0x5C60578000D7170D Fmnmx
    temp_536 = abs(temp_283);
    temp_537 = max(temp_536, temp_529);
    // 0x000FD8: 0x4C98079C0207002B Mov
    // 0x000FE8: 0x5080000000470D10 Mufu
    temp_538 = 1.0 / temp_537;
    // 0x000FF0: 0x5C60578000C7120C Fmnmx
    temp_539 = abs(temp_153);
    temp_540 = max(temp_539, temp_532);
    // 0x000FF8: 0x5080000000470C0C Mufu
    temp_541 = 1.0 / temp_540;
    // 0x001008: 0x5C68100001073115 Fmul
    temp_542 = temp_281 * temp_538;
    // 0x001010: 0x5C68100001072E16 Fmul
    temp_543 = temp_196 * temp_538;
    // 0x001018: 0x5080000000472A2A Mufu
    // 0x001028: 0x5C69100001071717 Fmul
    temp_544 = 0.0 - temp_538;
    temp_545 = temp_283 * temp_544;
    // 0x001030: 0x5C69100000C71212 Fmul
    temp_546 = 0.0 - temp_541;
    temp_547 = temp_153 * temp_546;
    // 0x001038: 0x5C68100000C70E10 Fmul
    temp_548 = temp_144 * temp_541;
    // 0x001048: 0x5C68100000C70111 Fmul
    temp_549 = temp_148 * temp_541;
    // 0x001050: 0xC0BA0163EFF7100C Tex
    temp_550 = textureLod(fp_t_tcb_16, vec3(temp_548, temp_549, temp_547), 0.0).xyz;
    temp_551 = temp_550.x;
    temp_552 = temp_550.y;
    temp_553 = temp_550.z;
    // 0x001058: 0xC1BA0143F2F71414 Tex
    temp_554 = textureLod(fp_t_tcb_14, vec4(temp_542, temp_543, temp_545, float(1)), temp_534).xyz;
    temp_555 = temp_554.x;
    temp_556 = temp_554.y;
    temp_557 = temp_554.z;
    // 0x001068: 0x5C98078001270020 Mov
    // 0x001070: 0xE043FF9202A7FF2C Ipa
    temp_558 = in_attr10.x;
    // 0x001078: 0x3859103F80070202 Fadd
    temp_559 = 0.0 - temp_151;
    temp_560 = temp_559 + 1.0;
    // 0x001088: 0xE043FF9242A7FF2D Ipa
    temp_561 = in_attr10.y;
    // 0x001090: 0x49A014980A170A29 Ffma
    temp_562 = fma(temp_293, fp_c6.data[40].y, temp_242);
    // 0x001098: 0xE043FF9282A7FF2E Ipa
    temp_563 = in_attr10.z;
    // 0x0010A8: 0xD9A2018202071010 Texs
    temp_564 = textureLod(fp_t_tcb_18, vec3(temp_548, temp_549, temp_547), temp_535).xyz;
    temp_565 = temp_564.x;
    temp_566 = temp_564.y;
    temp_567 = temp_564.z;
    // 0x0010B0: 0xDEBA0000C2B72C2C TexB
    temp_568 = texture(fp_t_cb7_20, vec3(temp_558, temp_561, temp_563)).x;
    // 0x0010B8: 0x5C68100000270202 Fmul
    temp_569 = temp_560 * temp_560;
    // 0x0010C8: 0x3859103F80070317 Fadd
    temp_570 = 0.0 - temp_174;
    temp_571 = temp_570 + 1.0;
    // 0x0010D0: 0x49A014180A170B28 Ffma
    temp_572 = fma(temp_294, fp_c6.data[40].y, temp_273);
    // 0x0010D8: 0x1E23E468DB97030B Fmul32i
    temp_573 = temp_174 * 0.193900004;
    // 0x0010E8: 0x010410676C97F030 Mov32i
    // 0x0010F0: 0x49A012980A170F25 Ffma
    temp_574 = fma(temp_295, fp_c6.data[40].y, temp_285);
    // 0x0010F8: 0x5C6810000027020A Fmul
    temp_575 = temp_569 * temp_569;
    // 0x001108: 0x4C68101809071702 Fmul
    temp_576 = temp_571 * fp_c6.data[36].x;
    // 0x001110: 0x0103F0000007F00F Mov32i
    // 0x001118: 0x5080400000370202 Mufu
    temp_577 = abs(temp_576);
    temp_578 = log2(temp_577);
    // 0x001128: 0x49A012180A171324 Ffma
    temp_579 = fma(temp_296, fp_c6.data[40].y, temp_284);
    // 0x001130: 0x0103E2CD9E87F013 Mov32i
    // 0x001138: 0x49A0058400670A0B Ffma
    temp_580 = fma(temp_575, fp_c1.data[1].z, temp_573);
    // 0x001148: 0x49A0180400970312 Ffma
    temp_581 = fma(temp_174, fp_c1.data[2].y, 8.40400028);
    // 0x001150: 0x49A013180A171826 Ffma
    temp_582 = fma(temp_297, fp_c6.data[40].y, temp_286);
    // 0x001158: 0x32A007BF0007010F Ffma
    temp_583 = fma(temp_148, 0.5, 0.5);
    // 0x001168: 0x4C9807980B470021 Mov
    // 0x001170: 0x49A2098400B70A13 Ffma
    temp_584 = fma(temp_575, fp_c1.data[2].w, -0.168799996);
    // 0x001178: 0x088BF05D63970B01 Fadd32i
    temp_585 = temp_580 + -0.522800028;
    // 0x001188: 0xE04BFF9042A7FF0B Ipa
    temp_586 = in_attr8.y;
    temp_587 = clamp(temp_586, 0.0, 1.0);
    // 0x001190: 0x51A0090400A70312 Ffma
    temp_588 = fma(temp_174, temp_581, fp_c1.data[2].z);
    // 0x001198: 0x4C98079809770018 Mov
    // 0x0011A8: 0x4C68101809170202 Fmul
    temp_589 = temp_578 * fp_c6.data[36].y;
    // 0x0011B0: 0x5C68100001370A17 Fmul
    temp_590 = temp_575 * temp_584;
    // 0x0011B8: 0x5C68100000170313 Fmul
    temp_591 = temp_174 * temp_585;
    // 0x0011C8: 0x51A0090400C70312 Ffma
    temp_592 = fma(temp_174, temp_588, fp_c1.data[3].x);
    // 0x0011D0: 0xF0F0000034470000 Depbar
    // 0x0011D8: 0x51A210980B471F1F Ffma
    temp_593 = 0.0 - fp_c6.data[45].x;
    temp_594 = fma(temp_37, fp_c6.data[45].x, temp_593);
    // 0x0011E8: 0x51A210980B470000 Ffma
    temp_595 = 0.0 - fp_c6.data[45].x;
    temp_596 = fma(temp_38, fp_c6.data[45].x, temp_595);
    // 0x0011F0: 0x51A210980B471E1E Ffma
    temp_597 = 0.0 - fp_c6.data[45].x;
    temp_598 = fma(temp_36, fp_c6.data[45].x, temp_597);
    // 0x0011F8: 0x0104066978D7F003 Mov32i
    // 0x001208: 0x4C98079800A7002D Mov
    // 0x001210: 0x5C90008000270021 Rro
    // 0x001218: 0x4C98079800870001 Mov
    // 0x001228: 0x5084000000272121 Mufu
    temp_599 = exp2(temp_589);
    temp_600 = clamp(temp_599, 0.0, 1.0);
    // 0x001230: 0x4C9807980097002B Mov
    // 0x001238: 0x49A2018400770A03 Ffma
    temp_601 = fma(temp_575, fp_c1.data[1].w, -3.60299993);
    // 0x001248: 0x4C58101407E71818 Fadd
    temp_602 = fp_c6.data[37].w + fp_c5.data[31].z;
    // 0x001250: 0x5C60138001771212 Fmnmx
    temp_603 = min(temp_592, temp_590);
    // 0x001258: 0x4C59101800672D2D Fadd
    temp_604 = 0.0 - fp_c6.data[2].z;
    temp_605 = temp_604 + fp_c6.data[1].z;
    // 0x001268: 0x4C98079407F70017 Mov
    // 0x001270: 0x4C59101800470101 Fadd
    temp_606 = 0.0 - fp_c6.data[2].x;
    temp_607 = temp_606 + fp_c6.data[1].x;
    // 0x001278: 0x51A0018400870A30 Ffma
    temp_608 = fma(temp_575, temp_601, fp_c1.data[2].x);
    // 0x001288: 0x4C59101800572B02 Fadd
    temp_609 = 0.0 - fp_c6.data[2].y;
    temp_610 = temp_609 + fp_c6.data[1].y;
    // 0x001290: 0x010404000007F02E Mov32i
    // 0x001298: 0x51A0169800A70F03 Ffma
    temp_611 = fma(temp_583, temp_605, fp_c6.data[2].z);
    // 0x0012A8: 0x4C6810140627172D Fmul
    temp_612 = fp_c5.data[31].w * fp_c5.data[24].z;
    // 0x0012B0: 0x5C68100002171818 Fmul
    temp_613 = temp_602 * temp_600;
    // 0x0012B8: 0x59A0098003070A13 Ffma
    temp_614 = fma(temp_575, temp_608, temp_591);
    // 0x0012C8: 0x51A0009800870F01 Ffma
    temp_615 = fma(temp_583, temp_607, fp_c6.data[2].x);
    // 0x0012D0: 0x51A0011800970F02 Ffma
    temp_616 = fma(temp_583, temp_610, fp_c6.data[2].y);
    // 0x0012D8: 0x33A0174000070B0A Ffma
    temp_617 = fma(temp_587, -2.0, 3.0);
    // 0x0012E8: 0x5C68100000B70B17 Fmul
    temp_618 = temp_587 * temp_587;
    // 0x0012F0: 0x4C68101808D7180B Fmul
    temp_619 = temp_613 * fp_c6.data[35].y;
    // 0x0012F8: 0x4C68101808E7180F Fmul
    temp_620 = temp_613 * fp_c6.data[35].z;
    // 0x001308: 0x4C68101808C71818 Fmul
    temp_621 = temp_613 * fp_c6.data[35].x;
    // 0x001310: 0x386C104248070821 Fmul
    temp_622 = temp_211 * 50.0;
    temp_623 = clamp(temp_622, 0.0, 1.0);
    // 0x001318: 0x5C5C30000FF71212 Fadd
    temp_624 = temp_603 + -0.0;
    temp_625 = clamp(temp_624, 0.0, 1.0);
    // 0x001328: 0x4C5C100400D71313 Fadd
    temp_626 = temp_614 + fp_c1.data[3].y;
    temp_627 = clamp(temp_626, 0.0, 1.0);
    // 0x001330: 0x59A0120002D70B24 Ffma
    temp_628 = fma(temp_619, temp_612, temp_579);
    // 0x001338: 0x59A0130002D70F26 Ffma
    temp_629 = fma(temp_620, temp_612, temp_582);
    // 0x001348: 0x59A0128002D71825 Ffma
    temp_630 = fma(temp_621, temp_612, temp_574);
    // 0x001350: 0x49A10C1407F71818 Ffma
    temp_631 = 0.0 - fp_c5.data[31].w;
    temp_632 = fma(temp_621, temp_631, temp_621);
    // 0x001358: 0x5C6810000217122E Fmul
    temp_633 = temp_625 * temp_623;
    // 0x001368: 0x5C59100001371213 Fadd
    temp_634 = 0.0 - temp_625;
    temp_635 = temp_634 + temp_627;
    // 0x001370: 0x49A1059407F70B0B Ffma
    temp_636 = 0.0 - fp_c5.data[31].w;
    temp_637 = fma(temp_619, temp_636, temp_619);
    // 0x001378: 0x49A1079407F70F0F Ffma
    temp_638 = 0.0 - fp_c5.data[31].w;
    temp_639 = fma(temp_620, temp_638, temp_620);
    // 0x001388: 0x5C68100001770A0A Fmul
    temp_640 = temp_617 * temp_618;
    // 0x001390: 0x59A0170001370712 Ffma
    temp_641 = fma(temp_210, temp_635, temp_633);
    // 0x001398: 0xE043FF9002A7FF07 Ipa
    temp_642 = in_attr8.x;
    // 0x0013A8: 0x59A0170001370808 Ffma
    temp_643 = fma(temp_211, temp_635, temp_633);
    // 0x0013B0: 0xE043FF8C82A7FF2A Ipa
    temp_644 = in_attr4.z;
    // 0x0013B8: 0x5C58100000B7290B Fadd
    temp_645 = temp_562 + temp_637;
    // 0x0013C8: 0x4C68101406271212 Fmul
    temp_646 = temp_641 * fp_c5.data[24].z;
    // 0x0013D0: 0x59A0170001370909 Ffma
    temp_647 = fma(temp_212, temp_635, temp_633);
    // 0x0013D8: 0x5C58100000F7280F Fadd
    temp_648 = temp_572 + temp_639;
    // 0x0013E8: 0x4C68101803770A0A Fmul
    temp_649 = temp_640 * fp_c6.data[13].w;
    // 0x0013F0: 0x4C68101406270909 Fmul
    temp_650 = temp_647 * fp_c5.data[24].z;
    // 0x0013F8: 0xF0F0000034370000 Depbar
    // 0x001408: 0x49A019180A172727 Ffma
    temp_651 = fma(temp_298, fp_c6.data[40].y, temp_533);
    // 0x001410: 0x5C58100001872718 Fadd
    temp_652 = temp_651 + temp_632;
    // 0x001418: 0xF0F0000034270000 Depbar
    // 0x001428: 0x49A0060400570101 Ffma
    temp_653 = fma(temp_615, fp_c1.data[1].y, temp_551);
    // 0x001430: 0x49A0068400570202 Ffma
    temp_654 = fma(temp_616, fp_c1.data[1].y, temp_552);
    // 0x001438: 0x49A007040057030E Ffma
    temp_655 = fma(temp_611, fp_c1.data[1].y, temp_553);
    // 0x001448: 0x4C68101406270803 Fmul
    temp_656 = temp_643 * fp_c5.data[24].z;
    // 0x001450: 0x4C98079802970008 Mov
    // 0x001458: 0x5C58100000171801 Fadd
    temp_657 = temp_652 + temp_653;
    // 0x001468: 0x5C58100000270B02 Fadd
    temp_658 = temp_645 + temp_654;
    // 0x001470: 0x5C58100000E70F0E Fadd
    temp_659 = temp_648 + temp_655;
    // 0x001478: 0xF0F0000034170000 Depbar
    // 0x001488: 0x49A0081808571410 Ffma
    temp_660 = fma(temp_555, fp_c6.data[33].y, temp_565);
    // 0x001490: 0x49A0089808571511 Ffma
    temp_661 = fma(temp_556, fp_c6.data[33].y, temp_566);
    // 0x001498: 0x59A1008000172301 Ffma
    temp_662 = 0.0 - temp_657;
    temp_663 = fma(temp_25, temp_662, temp_657);
    // 0x0014A8: 0x49A0101808571620 Ffma
    temp_664 = fma(temp_557, fp_c6.data[33].y, temp_567);
    // 0x0014B0: 0x59A1010000272302 Ffma
    temp_665 = 0.0 - temp_658;
    temp_666 = fma(temp_25, temp_665, temp_658);
    // 0x0014B8: 0x59A1070000E72323 Ffma
    temp_667 = 0.0 - temp_659;
    temp_668 = fma(temp_25, temp_667, temp_659);
    // 0x0014C8: 0x59A0128001071212 Ffma
    temp_669 = fma(temp_646, temp_660, temp_630);
    // 0x0014D0: 0x59A0120001170303 Ffma
    temp_670 = fma(temp_656, temp_661, temp_628);
    // 0x0014D8: 0x51A0041802971F1F Ffma
    temp_671 = fma(temp_594, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0014E8: 0x59A0130002070909 Ffma
    temp_672 = fma(temp_650, temp_664, temp_629);
    // 0x0014F0: 0x59A0090000170401 Ffma
    temp_673 = fma(temp_94, temp_663, temp_669);
    // 0x0014F8: 0x4C98079802870004 Mov
    // 0x001508: 0x59A0018000270502 Ffma
    temp_674 = fma(temp_97, temp_666, temp_670);
    // 0x001510: 0x59A0048002370609 Ffma
    temp_675 = fma(temp_99, temp_668, temp_672);
    // 0x001518: 0x49A2051803570A05 Ffma
    temp_676 = 0.0 - temp_649;
    temp_677 = fma(temp_649, fp_c6.data[13].y, temp_676);
    // 0x001528: 0x5C68100000171C1C Fmul
    temp_678 = temp_275 * temp_673;
    // 0x001530: 0x51A0021802871E1E Ffma
    temp_679 = fma(temp_598, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001538: 0x5C68100000271D1D Fmul
    temp_680 = temp_277 * temp_674;
    // 0x001548: 0x4C98079802A70002 Mov
    // 0x001550: 0x5C68100000972222 Fmul
    temp_681 = temp_279 * temp_675;
    // 0x001558: 0x49A00E1406C71919 Ffma
    temp_682 = fma(temp_266, fp_c5.data[27].x, temp_678);
    // 0x001568: 0x49A00E9406C71A1A Ffma
    temp_683 = fma(temp_264, fp_c5.data[27].x, temp_680);
    // 0x001570: 0x51A0011802A70000 Ffma
    temp_684 = fma(temp_596, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001578: 0x49A0111406C71B1B Ffma
    temp_685 = fma(temp_100, fp_c5.data[27].x, temp_681);
    // 0x001588: 0x49A503980BC72C07 Ffma
    temp_686 = 0.0 - fp_c6.data[47].x;
    temp_687 = fma(temp_568, temp_686, temp_642);
    temp_688 = clamp(temp_687, 0.0, 1.0);
    // 0x001590: 0x5C58300001E71901 Fadd
    temp_689 = 0.0 - temp_679;
    temp_690 = temp_682 + temp_689;
    // 0x001598: 0x5080000000370707 Mufu
    temp_691 = log2(temp_688);
    // 0x0015A8: 0x5C58300001F71A02 Fadd
    temp_692 = 0.0 - temp_671;
    temp_693 = temp_683 + temp_692;
    // 0x0015B0: 0x49A00F180BF70103 Ffma
    temp_694 = fma(temp_690, fp_c6.data[47].w, temp_679);
    // 0x0015B8: 0x5C58300000071B01 Fadd
    temp_695 = 0.0 - temp_684;
    temp_696 = temp_685 + temp_695;
    // 0x0015C8: 0x49A00F980BF70202 Ffma
    temp_697 = fma(temp_693, fp_c6.data[47].w, temp_671);
    // 0x0015D0: 0x5C60178000371E03 Fmnmx
    temp_698 = max(temp_679, temp_694);
    // 0x0015D8: 0x4C68101803170704 Fmul
    temp_699 = temp_691 * fp_c6.data[12].y;
    // 0x0015E8: 0x49A000180BF70101 Ffma
    temp_700 = fma(temp_696, fp_c6.data[47].w, temp_684);
    // 0x0015F0: 0x0103F8000007F007 Mov32i
    // 0x0015F8: 0x5C60178000271F02 Fmnmx
    temp_701 = max(temp_671, temp_697);
    // 0x001608: 0x5C90008000470006 Rro
    // 0x001610: 0x49A2051803470A04 Ffma
    temp_702 = 0.0 - temp_649;
    temp_703 = fma(temp_649, fp_c6.data[13].x, temp_702);
    // 0x001618: 0x5080000000270606 Mufu
    temp_704 = exp2(temp_699);
    // 0x001628: 0x5C60178000170001 Fmnmx
    temp_705 = max(temp_684, temp_700);
    // 0x001630: 0x49A2051803670A0A Ffma
    temp_706 = 0.0 - temp_649;
    temp_707 = fma(temp_649, fp_c6.data[13].z, temp_706);
    // 0x001638: 0x59A0010000570205 Ffma
    temp_708 = fma(temp_701, temp_677, temp_701);
    // 0x001648: 0x59A0018000470300 Ffma
    temp_709 = fma(temp_698, temp_703, temp_698);
    // 0x001650: 0x4C58100C03872A04 Fadd
    temp_710 = temp_644 + fp_c3.data[14].x;
    // 0x001658: 0x59A0008000A70102 Ffma
    temp_711 = fma(temp_705, temp_707, temp_705);
    // 0x001668: 0x5C59100000571A01 Fadd
    temp_712 = 0.0 - temp_683;
    temp_713 = temp_712 + temp_708;
    // 0x001670: 0x0103F0000007F005 Mov32i
    // 0x001678: 0x5C59100000071900 Fadd
    temp_714 = 0.0 - temp_682;
    temp_715 = temp_714 + temp_709;
    // 0x001688: 0x4C68101802B70603 Fmul
    temp_716 = temp_704 * fp_c6.data[10].w;
    // 0x001690: 0x5C59100000271B02 Fadd
    temp_717 = 0.0 - temp_685;
    temp_718 = temp_717 + temp_711;
    // 0x001698: 0x5C9807800FF70006 Mov
    // 0x0016A8: 0x49A37F8C03C70404 Ffma
    temp_719 = 0.0 - fp_c3.data[15].x;
    temp_720 = fma(temp_710, temp_719, -0.0);
    // 0x0016B0: 0x59A00C8000370000 Ffma
    temp_721 = fma(temp_715, temp_716, temp_682);
    // 0x0016B8: 0x59A00D0000370101 Ffma
    temp_722 = fma(temp_713, temp_716, temp_683);
    // 0x0016C8: 0x59A00D8000370202 Ffma
    temp_723 = fma(temp_718, temp_716, temp_685);
    // 0x0016D0: 0x0103F8000007F003 Mov32i
    // 0x0016D8: 0xE30000000007000F Exit
    out_attr0.x = temp_721;
    out_attr0.y = temp_722;
    out_attr0.z = temp_723;
    out_attr0.w = 1.0;
    out_attr1.x = temp_720;
    out_attr1.y = 0.5;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
