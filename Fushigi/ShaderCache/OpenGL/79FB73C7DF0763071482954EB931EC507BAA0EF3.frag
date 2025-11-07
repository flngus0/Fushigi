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
layout (binding = 3) uniform sampler2D fp_t_tcb_22;
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
    precise vec2 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise vec4 temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise vec3 temp_10;
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
    precise vec4 temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise vec3 temp_91;
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
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    uint temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    int temp_201;
    precise float temp_202;
    int temp_203;
    uint temp_204;
    uint temp_205;
    int temp_206;
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
    bool temp_240;
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
    int temp_292;
    bool temp_293;
    int temp_294;
    int temp_295;
    int temp_296;
    int temp_297;
    int temp_298;
    uint temp_299;
    uint temp_300;
    int temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    int temp_306;
    int temp_307;
    uint temp_308;
    uint temp_309;
    int temp_310;
    precise float temp_311;
    int temp_312;
    uint temp_313;
    int temp_314;
    precise float temp_315;
    int temp_316;
    uint temp_317;
    uint temp_318;
    int temp_319;
    precise float temp_320;
    int temp_321;
    uint temp_322;
    int temp_323;
    precise float temp_324;
    int temp_325;
    uint temp_326;
    uint temp_327;
    int temp_328;
    precise float temp_329;
    int temp_330;
    uint temp_331;
    int temp_332;
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
    precise float temp_350;
    precise float temp_351;
    precise float temp_352;
    precise float temp_353;
    int temp_354;
    uint temp_355;
    uint temp_356;
    int temp_357;
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
    uint temp_395;
    int temp_396;
    bool temp_397;
    uint temp_398;
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    precise float temp_405;
    uint temp_406;
    precise float temp_407;
    bool temp_408;
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
    int temp_436;
    uint temp_437;
    uint temp_438;
    int temp_439;
    precise float temp_440;
    precise float temp_441;
    precise float temp_442;
    precise float temp_443;
    precise float temp_444;
    precise float temp_445;
    precise float temp_446;
    uint temp_447;
    uint temp_448;
    int temp_449;
    precise float temp_450;
    int temp_451;
    uint temp_452;
    int temp_453;
    precise float temp_454;
    int temp_455;
    uint temp_456;
    uint temp_457;
    int temp_458;
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
    precise vec3 temp_541;
    precise float temp_542;
    precise float temp_543;
    precise float temp_544;
    precise float temp_545;
    precise vec3 temp_546;
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
    precise float temp_722;
    precise float temp_723;
    precise float temp_724;
    precise float temp_725;
    precise float temp_726;
    precise float temp_727;
    precise float temp_728;
    // 0x000008: 0x01040DF760C7F014 Mov32i
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0x5080000000471010 Mufu
    // 0x000028: 0xE043FF8E0107FF0B Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E4107FF0C Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xD830026FF0C70B00 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xD830036220C70B26 Texs
    temp_5 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyzw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    temp_9 = temp_5.w;
    // 0x000050: 0xD822024020C70B1C Texs
    temp_10 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    temp_13 = temp_10.z;
    // 0x000058: 0xE043FF8A0107FF03 Ipa
    temp_14 = in_attr2.x;
    // 0x000068: 0xE043FF8A4107FF04 Ipa
    temp_15 = in_attr2.y;
    // 0x000070: 0xE043FF8A8107FF05 Ipa
    temp_16 = in_attr2.z;
    // 0x000078: 0xE043FF890107FF07 Ipa
    temp_17 = in_attr1.x;
    // 0x000088: 0xE043FF894107FF08 Ipa
    temp_18 = in_attr1.y;
    // 0x000090: 0xE043FF880107FF0E Ipa
    temp_19 = in_attr0.x;
    // 0x000098: 0xE043FF898107FF09 Ipa
    temp_20 = in_attr1.z;
    // 0x0000A8: 0xE043FF884107FF0F Ipa
    temp_21 = in_attr0.y;
    // 0x0000B0: 0xE043FF888107FF0C Ipa
    temp_22 = in_attr0.z;
    // 0x0000B8: 0x5C68100000370306 Fmul
    temp_23 = temp_14 * temp_14;
    // 0x0000C8: 0x5C6810000077070A Fmul
    temp_24 = temp_17 * temp_17;
    // 0x0000D0: 0x5C68100000E70E0D Fmul
    temp_25 = temp_19 * temp_19;
    // 0x0000D8: 0x59A0030000470406 Ffma
    temp_26 = fma(temp_15, temp_15, temp_23);
    // 0x0000E8: 0x59A005000087080A Ffma
    temp_27 = fma(temp_18, temp_18, temp_24);
    // 0x0000F0: 0x59A0068000F70F11 Ffma
    temp_28 = fma(temp_21, temp_21, temp_25);
    // 0x0000F8: 0x59A0030000570506 Ffma
    temp_29 = fma(temp_16, temp_16, temp_26);
    // 0x000108: 0x5080000000570606 Mufu
    temp_30 = inversesqrt(temp_29);
    // 0x000110: 0x59A005000097090A Ffma
    temp_31 = fma(temp_20, temp_20, temp_27);
    // 0x000118: 0x5080000000570A0A Mufu
    temp_32 = inversesqrt(temp_31);
    // 0x000128: 0x59A0088000C70C11 Ffma
    temp_33 = fma(temp_22, temp_22, temp_28);
    // 0x000130: 0x5080000000571111 Mufu
    temp_34 = inversesqrt(temp_33);
    // 0x000138: 0x5C6810000067050B Fmul
    temp_35 = temp_16 * temp_30;
    // 0x000148: 0x5C68100000670303 Fmul
    temp_36 = temp_14 * temp_30;
    // 0x000150: 0x5C68100000670404 Fmul
    temp_37 = temp_15 * temp_30;
    // 0x000158: 0x5C68100000A7070D Fmul
    temp_38 = temp_17 * temp_32;
    // 0x000168: 0x5C68100000A70807 Fmul
    temp_39 = temp_18 * temp_32;
    // 0x000170: 0x5C68100000A70909 Fmul
    temp_40 = temp_20 * temp_32;
    // 0x000178: 0x5C68100001170E0E Fmul
    temp_41 = temp_19 * temp_34;
    // 0x000188: 0x5C68100001170F0F Fmul
    temp_42 = temp_21 * temp_34;
    // 0x000190: 0x5C68100001170C0C Fmul
    temp_43 = temp_22 * temp_34;
    // 0x000198: 0xF0F0000034270000 Depbar
    // 0x0001A8: 0x5C68100000170105 Fmul
    temp_44 = temp_4 * temp_4;
    // 0x0001B0: 0x5C68100000170303 Fmul
    temp_45 = temp_36 * temp_4;
    // 0x0001B8: 0x5C68100000170B0B Fmul
    temp_46 = temp_35 * temp_4;
    // 0x0001C8: 0x59A0028000070005 Ffma
    temp_47 = fma(temp_3, temp_3, temp_44);
    // 0x0001D0: 0x59A0018000D70003 Ffma
    temp_48 = fma(temp_3, temp_38, temp_45);
    // 0x0001D8: 0x59A0058000970009 Ffma
    temp_49 = fma(temp_3, temp_40, temp_46);
    // 0x0001E8: 0x385D103F80070506 Fadd
    temp_50 = 0.0 - temp_47;
    temp_51 = temp_50 + 1.0;
    temp_52 = clamp(temp_51, 0.0, 1.0);
    // 0x0001F0: 0x5C68100000170405 Fmul
    temp_53 = temp_37 * temp_4;
    // 0x0001F8: 0x5080000000870606 Mufu
    temp_54 = sqrt(temp_52);
    // 0x000208: 0x59A0028000770005 Ffma
    temp_55 = fma(temp_3, temp_39, temp_53);
    // 0x000210: 0xE003FF874FF7FF07 Ipa
    temp_56 = gl_FragCoord.y;
    temp_57 = support_buffer.render_scale[0];
    temp_58 = temp_56 / temp_57;
    // 0x000218: 0x59A0018000670E03 Ffma
    temp_59 = fma(temp_41, temp_54, temp_48);
    // 0x000228: 0x59A0028000670F05 Ffma
    temp_60 = fma(temp_42, temp_54, temp_55);
    // 0x000230: 0x59A0048000670C09 Ffma
    temp_61 = fma(temp_43, temp_54, temp_49);
    // 0x000238: 0xE003FF870FF7FF06 Ipa
    temp_62 = gl_FragCoord.x;
    temp_63 = support_buffer.render_scale[0];
    temp_64 = temp_62 / temp_63;
    // 0x000248: 0x5C68100000370300 Fmul
    temp_65 = temp_59 * temp_59;
    // 0x000250: 0x59A0000000570500 Ffma
    temp_66 = fma(temp_60, temp_60, temp_65);
    // 0x000258: 0x59A0000000970900 Ffma
    temp_67 = fma(temp_61, temp_61, temp_66);
    // 0x000268: 0x5080000000570000 Mufu
    temp_68 = inversesqrt(temp_67);
    // 0x000270: 0x5C68100000070912 Fmul
    temp_69 = temp_61 * temp_68;
    // 0x000278: 0x5C68100000070501 Fmul
    temp_70 = temp_60 * temp_68;
    // 0x000288: 0x5C6810000007030C Fmul
    temp_71 = temp_59 * temp_68;
    // 0x000290: 0x4C68100C00671204 Fmul
    temp_72 = temp_69 * fp_c3.data[1].z;
    // 0x000298: 0x4C68100C00271203 Fmul
    temp_73 = temp_69 * fp_c3.data[0].z;
    // 0x0002A8: 0x49A0020C00570105 Ffma
    temp_74 = fma(temp_70, fp_c3.data[1].y, temp_72);
    // 0x0002B0: 0x49A0018C00170103 Ffma
    temp_75 = fma(temp_70, fp_c3.data[0].y, temp_73);
    // 0x0002B8: 0x4C68100C04B70704 Fmul
    temp_76 = temp_58 * fp_c3.data[18].w;
    // 0x0002C8: 0x49A0028C00470C05 Ffma
    temp_77 = fma(temp_71, fp_c3.data[1].x, temp_74);
    // 0x0002D0: 0x49A0018C00070C00 Ffma
    temp_78 = fma(temp_71, fp_c3.data[0].x, temp_75);
    // 0x0002D8: 0x4C68100C04A70603 Fmul
    temp_79 = temp_64 * fp_c3.data[18].z;
    // 0x0002E8: 0x4C69100C03E70505 Fmul
    temp_80 = 0.0 - fp_c3.data[15].z;
    temp_81 = temp_77 * temp_80;
    // 0x0002F0: 0x4C68101808B70000 Fmul
    temp_82 = temp_78 * fp_c6.data[34].w;
    // 0x0002F8: 0x4C68101808B70505 Fmul
    temp_83 = temp_81 * fp_c6.data[34].w;
    // 0x000308: 0x49A001840037001A Ffma
    temp_84 = fma(temp_82, fp_c1.data[0].w, temp_79);
    // 0x000310: 0x49A002040037051B Ffma
    temp_85 = fma(temp_83, fp_c1.data[0].w, temp_76);
    // 0x000318: 0xD832022201B71A1A Texs
    temp_86 = texture(fp_t_tcb_22, vec2(temp_84, temp_85)).xyzw;
    temp_87 = temp_86.x;
    temp_88 = temp_86.y;
    temp_89 = temp_86.z;
    temp_90 = temp_86.w;
    // 0x000328: 0xD82202000047031E Texs
    temp_91 = texture(fp_t_tcb_20, vec2(temp_79, temp_76)).xyz;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x000330: 0xE043FF8B0107FF25 Ipa
    temp_95 = in_attr3.x;
    // 0x000338: 0xE043FF8B4107FF24 Ipa
    temp_96 = in_attr3.y;
    // 0x000348: 0xE043FF8B8107FF0E Ipa
    temp_97 = in_attr3.z;
    // 0x000350: 0xF0F0000034370000 Depbar
    // 0x000358: 0x4C6810180A072626 Fmul
    temp_98 = temp_6 * fp_c6.data[40].x;
    // 0x000368: 0xE2900000C0000000 Ssy
    // 0x000370: 0x0103F0000007F02C Mov32i
    // 0x000378: 0x386810411007040F Fmul
    temp_99 = temp_76 * 9.0;
    // 0x000388: 0x385D103F80072323 Fadd
    temp_100 = 0.0 - temp_9;
    temp_101 = temp_100 + 1.0;
    temp_102 = clamp(temp_101, 0.0, 1.0);
    // 0x000390: 0x5CA8148000F70A11 F2f
    temp_103 = floor(temp_99);
    // 0x000398: 0x5C68100002572505 Fmul
    temp_104 = temp_95 * temp_95;
    // 0x0003A8: 0x59A0028002472405 Ffma
    temp_105 = fma(temp_96, temp_96, temp_104);
    // 0x0003B0: 0x59A0028000E70E05 Ffma
    temp_106 = fma(temp_97, temp_97, temp_105);
    // 0x0003B8: 0x5080000000570507 Mufu
    temp_107 = inversesqrt(temp_106);
    // 0x0003C8: 0x5C69100000772525 Fmul
    temp_108 = 0.0 - temp_107;
    temp_109 = temp_95 * temp_108;
    // 0x0003D0: 0x5C69100000772424 Fmul
    temp_110 = 0.0 - temp_107;
    temp_111 = temp_96 * temp_110;
    // 0x0003D8: 0x5C69100000770E0E Fmul
    temp_112 = 0.0 - temp_107;
    temp_113 = temp_97 * temp_112;
    // 0x0003E8: 0x4C58301805C72506 Fadd
    temp_114 = 0.0 - fp_c6.data[23].x;
    temp_115 = temp_109 + temp_114;
    // 0x0003F0: 0x4C58301805D72407 Fadd
    temp_116 = 0.0 - fp_c6.data[23].y;
    temp_117 = temp_111 + temp_116;
    // 0x0003F8: 0x4C58301805E70E08 Fadd
    temp_118 = 0.0 - fp_c6.data[23].z;
    temp_119 = temp_113 + temp_118;
    // 0x000408: 0x5C68100000670609 Fmul
    temp_120 = temp_115 * temp_115;
    // 0x000410: 0x59A0048000770709 Ffma
    temp_121 = fma(temp_117, temp_117, temp_120);
    // 0x000418: 0x59A0048000870809 Ffma
    temp_122 = fma(temp_119, temp_119, temp_121);
    // 0x000428: 0x5080000000570909 Mufu
    temp_123 = inversesqrt(temp_122);
    // 0x000430: 0x5C68100000970606 Fmul
    temp_124 = temp_115 * temp_123;
    // 0x000438: 0x5C68100000970707 Fmul
    temp_125 = temp_117 * temp_123;
    // 0x000448: 0x5C68100000970808 Fmul
    temp_126 = temp_119 * temp_123;
    // 0x000450: 0x4C69101805C70605 Fmul
    temp_127 = 0.0 - fp_c6.data[23].x;
    temp_128 = temp_124 * temp_127;
    // 0x000458: 0x5C6810000067250A Fmul
    temp_129 = temp_109 * temp_124;
    // 0x000468: 0x5C68100000670C06 Fmul
    temp_130 = temp_71 * temp_124;
    // 0x000470: 0x49A1029805D70705 Ffma
    temp_131 = 0.0 - fp_c6.data[23].y;
    temp_132 = fma(temp_125, temp_131, temp_128);
    // 0x000478: 0x59A005000077240B Ffma
    temp_133 = fma(temp_111, temp_125, temp_129);
    // 0x000488: 0x59A0030000770107 Ffma
    temp_134 = fma(temp_70, temp_125, temp_130);
    // 0x000490: 0x49A5029805E70805 Ffma
    temp_135 = 0.0 - fp_c6.data[23].z;
    temp_136 = fma(temp_126, temp_135, temp_132);
    temp_137 = clamp(temp_136, 0.0, 1.0);
    // 0x000498: 0x59A4058000870E0B Ffma
    temp_138 = fma(temp_113, temp_126, temp_133);
    temp_139 = clamp(temp_138, 0.0, 1.0);
    // 0x0004A8: 0x49A20A040027050A Ffma
    temp_140 = fma(temp_137, fp_c1.data[0].z, -6.98316002);
    // 0x0004B0: 0x49A20A0400270B09 Ffma
    temp_141 = fma(temp_139, fp_c1.data[0].z, -6.98316002);
    // 0x0004B8: 0x5C68100000A70506 Fmul
    temp_142 = temp_137 * temp_140;
    // 0x0004C8: 0x5C68100000970B05 Fmul
    temp_143 = temp_139 * temp_141;
    // 0x0004D0: 0x59A403800087120A Ffma
    temp_144 = fma(temp_69, temp_126, temp_134);
    temp_145 = clamp(temp_144, 0.0, 1.0);
    // 0x0004D8: 0x386013BF80072609 Fmnmx
    temp_146 = min(temp_98, 1.0);
    // 0x0004E8: 0x5C68100002570C07 Fmul
    temp_147 = temp_71 * temp_109;
    // 0x0004F0: 0x4C69101805C70C08 Fmul
    temp_148 = 0.0 - fp_c6.data[23].x;
    temp_149 = temp_71 * temp_148;
    // 0x0004F8: 0x5C90008000670014 Rro
    // 0x000508: 0xF0F0000034270000 Depbar
    // 0x000510: 0x4C58301407B70206 Fadd
    temp_150 = 0.0 - fp_c5.data[30].w;
    temp_151 = temp_13 + temp_150;
    // 0x000518: 0x5080000000271414 Mufu
    temp_152 = exp2(temp_142);
    // 0x000528: 0x4C60178400070909 Fmnmx
    temp_153 = max(temp_146, fp_c1.data[0].x);
    // 0x000530: 0x59A0038002470107 Ffma
    temp_154 = fma(temp_70, temp_111, temp_147);
    // 0x000538: 0x49A1041805D7010B Ffma
    temp_155 = 0.0 - fp_c6.data[23].y;
    temp_156 = fma(temp_70, temp_155, temp_149);
    // 0x000548: 0x5C90008000570018 Rro
    // 0x000550: 0x4C58301407B71D05 Fadd
    temp_157 = 0.0 - fp_c5.data[30].w;
    temp_158 = temp_12 + temp_157;
    // 0x000558: 0x5080000000271818 Mufu
    temp_159 = exp2(temp_143);
    // 0x000568: 0x51A404840007092E Ffma
    temp_160 = fma(temp_153, temp_153, fp_c1.data[0].x);
    temp_161 = clamp(temp_160, 0.0, 1.0);
    // 0x000570: 0x59A4038000E71208 Ffma
    temp_162 = fma(temp_69, temp_113, temp_154);
    temp_163 = clamp(temp_162, 0.0, 1.0);
    // 0x000578: 0x32A0163F0007092C Ffma
    temp_164 = fma(temp_153, 0.5, 0.5);
    // 0x000588: 0x49A5059805E71207 Ffma
    temp_165 = 0.0 - fp_c6.data[23].z;
    temp_166 = fma(temp_69, temp_165, temp_156);
    temp_167 = clamp(temp_166, 0.0, 1.0);
    // 0x000590: 0x386810418007030B Fmul
    temp_168 = temp_79 * 16.0;
    // 0x000598: 0x51A0031407B72706 Ffma
    temp_169 = fma(temp_7, temp_151, fp_c5.data[30].w);
    // 0x0005A8: 0x5CA8148000B70A0B F2f
    temp_170 = floor(temp_168);
    // 0x0005B0: 0x5C68100002E72E2D Fmul
    temp_171 = temp_161 * temp_161;
    // 0x0005B8: 0x5C68120002C72C2C Fmul
    temp_172 = temp_164 * 0.5;
    temp_173 = temp_172 * temp_164;
    // 0x0005C8: 0x4C6810180167070F Fmul
    temp_174 = temp_167 * fp_c6.data[5].z;
    // 0x0005D0: 0x51A0029407B72705 Ffma
    temp_175 = fma(temp_7, temp_158, fp_c5.data[30].w);
    // 0x0005D8: 0x5C68100000870C2F Fmul
    temp_176 = temp_71 * temp_163;
    // 0x0005E8: 0x59A2050002D70A0D Ffma
    temp_177 = 0.0 - temp_145;
    temp_178 = fma(temp_145, temp_171, temp_177);
    // 0x0005F0: 0x59A1038002C70703 Ffma
    temp_179 = 0.0 - temp_173;
    temp_180 = fma(temp_167, temp_179, temp_167);
    // 0x0005F8: 0x59A10C0001870513 Ffma
    temp_181 = 0.0 - temp_159;
    temp_182 = fma(temp_175, temp_181, temp_159);
    // 0x000608: 0x32A212C000072F2F Ffma
    temp_183 = 0.0 - temp_109;
    temp_184 = fma(temp_176, 2.0, temp_183);
    // 0x000610: 0x51A0068400170A0D Ffma
    temp_185 = fma(temp_145, temp_178, fp_c1.data[0].y);
    // 0x000618: 0x59A1040002C7080A Ffma
    temp_186 = 0.0 - temp_173;
    temp_187 = fma(temp_163, temp_186, temp_163);
    // 0x000628: 0x5080000000470D0D Mufu
    temp_188 = 1.0 / temp_185;
    // 0x000630: 0x32A005C18007112B Ffma
    temp_189 = fma(temp_103, 16.0, temp_170);
    // 0x000638: 0x5C58100000372C04 Fadd
    temp_190 = temp_173 + temp_180;
    // 0x000648: 0x5CB0118002B70A2B F2i
    temp_191 = trunc(temp_189);
    temp_192 = max(temp_191, 0.0);
    temp_193 = uint(temp_192);
    // 0x000650: 0x4C98079808A7000B Mov
    // 0x000658: 0x5080000000470404 Mufu
    temp_194 = 1.0 / temp_190;
    // 0x000668: 0x5C58100000A72C0A Fadd
    temp_195 = temp_173 + temp_187;
    // 0x000670: 0x5C58100001370519 Fadd
    temp_196 = temp_175 + temp_182;
    // 0x000678: 0x5080000000470A0A Mufu
    temp_197 = 1.0 / temp_195;
    // 0x000688: 0x5C68100000D72E03 Fmul
    temp_198 = temp_161 * temp_188;
    // 0x000690: 0x4C68101808770B0D Fmul
    temp_199 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x000698: 0x4C6810180147070B Fmul
    temp_200 = temp_167 * fp_c6.data[5].x;
    // 0x0006A8: 0x3848000000872B29 Shl
    temp_201 = int(temp_193) << 8;
    // 0x0006B0: 0x5C68100001972219 Fmul
    temp_202 = temp_8 * temp_196;
    // 0x0006B8: 0xEF94008200472929 Ldc
    temp_203 = temp_201 + 0x2004;
    temp_204 = uint(temp_203) >> 2;
    temp_205 = temp_204 >> 2;
    temp_206 = int(temp_204) & 3;
    temp_207 = fp_c8.data[int(temp_205)][temp_206];
    // 0x0006C8: 0x3868103F00070A2A Fmul
    temp_208 = temp_197 * 0.5;
    // 0x0006D0: 0x5C68100000370303 Fmul
    temp_209 = temp_198 * temp_198;
    // 0x0006D8: 0x4C6810180157070A Fmul
    temp_210 = temp_167 * fp_c6.data[5].y;
    // 0x0006E8: 0x1E23EA2F98370B0B Fmul32i
    temp_211 = temp_200 * 0.318309873;
    // 0x0006F0: 0x5C68100000472A11 Fmul
    temp_212 = temp_208 * temp_194;
    // 0x0006F8: 0x4C58301407B71C04 Fadd
    temp_213 = 0.0 - fp_c5.data[30].w;
    temp_214 = temp_11 + temp_213;
    // 0x000708: 0x5C68100001170311 Fmul
    temp_215 = temp_209 * temp_212;
    // 0x000710: 0x5C68100001170703 Fmul
    temp_216 = temp_167 * temp_215;
    // 0x000718: 0x51A0021407B72707 Ffma
    temp_217 = fma(temp_7, temp_214, fp_c5.data[30].w);
    // 0x000728: 0x1E23EA2F98370A04 Fmul32i
    temp_218 = temp_210 * 0.318309873;
    // 0x000730: 0x1E23EA2F98370F0A Fmul32i
    temp_219 = temp_174 * 0.318309873;
    // 0x000738: 0x59A10A000067140F Ffma
    temp_220 = 0.0 - temp_169;
    temp_221 = fma(temp_152, temp_220, temp_152);
    // 0x000748: 0x59A10A0000771411 Ffma
    temp_222 = 0.0 - temp_217;
    temp_223 = fma(temp_152, temp_222, temp_152);
    // 0x000750: 0x59A10C0001870715 Ffma
    temp_224 = 0.0 - temp_159;
    temp_225 = fma(temp_217, temp_224, temp_159);
    // 0x000758: 0x59A10A0000571414 Ffma
    temp_226 = 0.0 - temp_175;
    temp_227 = fma(temp_152, temp_226, temp_152);
    // 0x000768: 0x5C58100000F7060F Fadd
    temp_228 = temp_169 + temp_221;
    // 0x000770: 0x59A10C0001870618 Ffma
    temp_229 = 0.0 - temp_159;
    temp_230 = fma(temp_169, temp_229, temp_159);
    // 0x000778: 0x5C58100001170711 Fadd
    temp_231 = temp_217 + temp_223;
    // 0x000788: 0x5C58100001570717 Fadd
    temp_232 = temp_217 + temp_225;
    // 0x000790: 0x5C58100001470514 Fadd
    temp_233 = temp_175 + temp_227;
    // 0x000798: 0x5C68100000F72213 Fmul
    temp_234 = temp_8 * temp_228;
    // 0x0007A8: 0x5C58100001870618 Fadd
    temp_235 = temp_169 + temp_230;
    // 0x0007B0: 0x5C68100001172215 Fmul
    temp_236 = temp_8 * temp_231;
    // 0x0007B8: 0x5C68100001772216 Fmul
    temp_237 = temp_8 * temp_232;
    // 0x0007C8: 0x5C68100001472214 Fmul
    temp_238 = temp_8 * temp_233;
    // 0x0007D0: 0x5C68100001872218 Fmul
    temp_239 = temp_8 * temp_235;
    // 0x0007D8: 0x5B6603800FF72907 Isetp
    temp_240 = floatBitsToUint(temp_207) <= 0u;
    // 0x0007E8: 0xF0F0000034170000 Depbar
    // 0x0007F0: 0x51A0069801471A0F Ffma
    temp_241 = fma(temp_87, temp_199, fp_c6.data[5].x);
    // 0x0007F8: 0x51A0069801571B11 Ffma
    temp_242 = fma(temp_88, temp_199, fp_c6.data[5].y);
    // 0x000808: 0x51A006980167200D Ffma
    temp_243 = fma(temp_89, temp_199, fp_c6.data[5].z);
    // 0x000810: 0x5C68100001570F15 Fmul
    temp_244 = temp_241 * temp_236;
    // 0x000818: 0x5C68100001471111 Fmul
    temp_245 = temp_242 * temp_238;
    // 0x000828: 0x5C68100001370D0D Fmul
    temp_246 = temp_243 * temp_234;
    // 0x000830: 0x49A211980AC72314 Ffma
    temp_247 = 0.0 - temp_102;
    temp_248 = fma(temp_102, fp_c6.data[43].x, temp_247);
    // 0x000838: 0x59A1058000B7160F Ffma
    temp_249 = 0.0 - temp_211;
    temp_250 = fma(temp_237, temp_249, temp_211);
    // 0x000848: 0x59A102000047190B Ffma
    temp_251 = 0.0 - temp_218;
    temp_252 = fma(temp_202, temp_251, temp_218);
    // 0x000850: 0xEF5400000087FF0F Stl
    local_memory[2] = floatBitsToUint(temp_250);
    // 0x000858: 0x5C68100001570336 Fmul
    temp_253 = temp_216 * temp_244;
    // 0x000868: 0xEF5400000047FF0B Stl
    local_memory[1] = floatBitsToUint(temp_252);
    // 0x000870: 0x49A211980AD72315 Ffma
    temp_254 = 0.0 - temp_102;
    temp_255 = fma(temp_102, fp_c6.data[43].y, temp_254);
    // 0x000878: 0x49A211980AE72323 Ffma
    temp_256 = 0.0 - temp_102;
    temp_257 = fma(temp_102, fp_c6.data[43].z, temp_256);
    // 0x000888: 0x5C68100000D70326 Fmul
    temp_258 = temp_216 * temp_246;
    // 0x000890: 0x5C68100001170332 Fmul
    temp_259 = temp_216 * temp_245;
    // 0x000898: 0x5C6810000087010D Fmul
    temp_260 = temp_70 * temp_163;
    // 0x0008A8: 0x3858103F80071416 Fadd
    temp_261 = temp_248 + 1.0;
    // 0x0008B0: 0x5C68100000871211 Fmul
    temp_262 = temp_69 * temp_163;
    // 0x0008B8: 0x3858103F80071514 Fadd
    temp_263 = temp_255 + 1.0;
    // 0x0008C8: 0x3858103F80072323 Fadd
    temp_264 = temp_257 + 1.0;
    // 0x0008D0: 0x59A1050000A71804 Ffma
    temp_265 = 0.0 - temp_219;
    temp_266 = fma(temp_239, temp_265, temp_219);
    // 0x0008D8: 0x32A2124000070D28 Ffma
    temp_267 = 0.0 - temp_111;
    temp_268 = fma(temp_260, 2.0, temp_267);
    // 0x0008E8: 0xEF5400000007FF04 Stl
    local_memory[0] = floatBitsToUint(temp_266);
    // 0x0008F0: 0x5C9807800FF70003 Mov
    // 0x0008F8: 0x5C9807800FF7000A Mov
    // 0x000908: 0x5C9807800FF7000B Mov
    // 0x000910: 0x5C9807800FF7000F Mov
    // 0x000918: 0x5C9807800FF70013 Mov
    // 0x000928: 0x32A207400007110D Ffma
    temp_269 = 0.0 - temp_113;
    temp_270 = fma(temp_262, 2.0, temp_269);
    // 0x000930: 0x59A40B0001671C18 Ffma
    temp_271 = fma(temp_11, temp_261, temp_261);
    temp_272 = clamp(temp_271, 0.0, 1.0);
    // 0x000938: 0x59A40A0001471D19 Ffma
    temp_273 = fma(temp_12, temp_263, temp_263);
    temp_274 = clamp(temp_273, 0.0, 1.0);
    // 0x000948: 0x59A4118002370223 Ffma
    temp_275 = fma(temp_13, temp_264, temp_264);
    temp_276 = clamp(temp_275, 0.0, 1.0);
    // 0x000950: 0x1E23E22F98373636 Fmul32i
    temp_277 = temp_253 * 0.159154937;
    // 0x000958: 0x5C9807800FF70004 Mov
    // 0x000968: 0x1E23E22F98373232 Fmul32i
    temp_278 = temp_259 * 0.159154937;
    // 0x000970: 0x1E23E22F98372626 Fmul32i
    temp_279 = temp_258 * 0.159154937;
    // 0x000978: 0xF0F800000000000F Sync
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
    temp_290 = 0.0;
    temp_291 = 0.0;
    if (!temp_240)
    {
        // 0x000988: 0x5C9807800FF70030 Mov
        temp_292 = 0;
        do
        {
            // 0x000990: 0x5C18020003072B17 Iscadd
            temp_294 = int(temp_193) << 4;
            temp_295 = temp_294 + temp_292;
            // 0x000998: 0xE003FF87CFF7FF33 Ipa
            // 0x0009A8: 0x1C00000000173030 Iadd32i
            temp_296 = temp_292 + 1;
            // 0x0009B0: 0xE003FF87CFF7FF35 Ipa
            // 0x0009B8: 0x3848000000471717 Shl
            temp_297 = temp_295 << 4;
            // 0x0009C8: 0xE003FF87CFF7FF34 Ipa
            // 0x0009D0: 0x5B6C03800297300F Isetp
            temp_293 = uint(temp_296) >= floatBitsToUint(temp_207);
            // 0x0009D8: 0xE290000057800000 Ssy
            // 0x0009E8: 0xEF94008200071717 Ldc
            temp_298 = temp_297 + 0x2000;
            temp_299 = uint(temp_298) >> 2;
            temp_300 = temp_299 >> 2;
            temp_301 = int(temp_299) & 3;
            temp_302 = fp_c8.data[int(temp_300)][temp_301];
            // 0x0009F0: 0x5080000000473333 Mufu
            // 0x0009F8: 0x5080000000473535 Mufu
            // 0x000A08: 0x5080000000473434 Mufu
            // 0x000A10: 0xE043FF8D0337FF33 Ipa
            temp_303 = in_attr5.x;
            // 0x000A18: 0xE043FF8D8357FF35 Ipa
            temp_304 = in_attr5.z;
            // 0x000A28: 0xE043FF8D4347FF34 Ipa
            temp_305 = in_attr5.y;
            // 0x000A30: 0x3848000000671731 Shl
            temp_306 = floatBitsToInt(temp_302) << 6;
            // 0x000A38: 0xEF95008001073110 Ldc
            temp_307 = temp_306 + 16;
            temp_308 = uint(temp_307) >> 2;
            temp_309 = temp_308 >> 2;
            temp_310 = int(temp_308) & 3;
            temp_311 = fp_c8.data[int(temp_309)][temp_310];
            temp_312 = int(temp_308) + 1;
            temp_313 = uint(temp_312) >> 2;
            temp_314 = temp_312 & 3;
            temp_315 = fp_c8.data[int(temp_313)][temp_314];
            // 0x000A48: 0xEF95008001873114 Ldc
            temp_316 = temp_306 + 24;
            temp_317 = uint(temp_316) >> 2;
            temp_318 = temp_317 >> 2;
            temp_319 = int(temp_317) & 3;
            temp_320 = fp_c8.data[int(temp_318)][temp_319];
            temp_321 = int(temp_317) + 1;
            temp_322 = uint(temp_321) >> 2;
            temp_323 = temp_321 & 3;
            temp_324 = fp_c8.data[int(temp_322)][temp_323];
            // 0x000A50: 0xEF95008002073116 Ldc
            temp_325 = temp_306 + 32;
            temp_326 = uint(temp_325) >> 2;
            temp_327 = temp_326 >> 2;
            temp_328 = int(temp_326) & 3;
            temp_329 = fp_c8.data[int(temp_327)][temp_328];
            temp_330 = int(temp_326) + 1;
            temp_331 = uint(temp_330) >> 2;
            temp_332 = temp_330 & 3;
            temp_333 = fp_c8.data[int(temp_331)][temp_332];
            // 0x000A58: 0x5C58300003371033 Fadd
            temp_334 = 0.0 - temp_303;
            temp_335 = temp_311 + temp_334;
            // 0x000A68: 0x5C58300003471134 Fadd
            temp_336 = 0.0 - temp_305;
            temp_337 = temp_315 + temp_336;
            // 0x000A70: 0x5C58300003571414 Fadd
            temp_338 = 0.0 - temp_304;
            temp_339 = temp_320 + temp_338;
            // 0x000A78: 0x5C68100003373311 Fmul
            temp_340 = temp_335 * temp_335;
            // 0x000A88: 0x59A10A0001471510 Ffma
            temp_341 = 0.0 - temp_339;
            temp_342 = fma(temp_324, temp_341, temp_339);
            // 0x000A90: 0x59A0088003473415 Ffma
            temp_343 = fma(temp_337, temp_337, temp_340);
            // 0x000A98: 0x59A00A8001071035 Ffma
            temp_344 = fma(temp_342, temp_342, temp_343);
            // 0x000AA8: 0x5080000000573511 Mufu
            temp_345 = inversesqrt(temp_344);
            // 0x000AB0: 0x5080000000873535 Mufu
            temp_346 = sqrt(temp_344);
            // 0x000AB8: 0x5C68100001173337 Fmul
            temp_347 = temp_335 * temp_345;
            // 0x000AC8: 0x5C68100001171010 Fmul
            temp_348 = temp_342 * temp_345;
            // 0x000AD0: 0x5C68100001173411 Fmul
            temp_349 = temp_337 * temp_345;
            // 0x000AD8: 0x5C69100001673716 Fmul
            temp_350 = 0.0 - temp_329;
            temp_351 = temp_347 * temp_350;
            // 0x000AE8: 0x59A10B0001771111 Ffma
            temp_352 = 0.0 - temp_333;
            temp_353 = fma(temp_349, temp_352, temp_351);
            // 0x000AF0: 0xEF94008002873116 Ldc
            temp_354 = temp_306 + 40;
            temp_355 = uint(temp_354) >> 2;
            temp_356 = temp_355 >> 2;
            temp_357 = int(temp_355) & 3;
            temp_358 = fp_c8.data[int(temp_356)][temp_357];
            // 0x000AF8: 0x010404000007F017 Mov32i
            // 0x000B08: 0x59A1088001671016 Ffma
            temp_359 = 0.0 - temp_358;
            temp_360 = fma(temp_348, temp_359, temp_353);
            // 0x000B10: 0xEF95008003873110 Ldc
            temp_361 = temp_306 + 56;
            temp_362 = uint(temp_361) >> 2;
            temp_363 = temp_362 >> 2;
            temp_364 = int(temp_362) & 3;
            temp_365 = fp_c8.data[int(temp_363)][temp_364];
            temp_366 = int(temp_362) + 1;
            temp_367 = uint(temp_366) >> 2;
            temp_368 = temp_366 & 3;
            temp_369 = fp_c8.data[int(temp_367)][temp_368];
            // 0x000B18: 0x59A4088001071610 Ffma
            temp_370 = fma(temp_360, temp_365, temp_369);
            temp_371 = clamp(temp_370, 0.0, 1.0);
            // 0x000B28: 0x5C68100001071016 Fmul
            temp_372 = temp_371 * temp_371;
            // 0x000B30: 0x33A00BC000071010 Ffma
            temp_373 = fma(temp_371, -2.0, 3.0);
            // 0x000B38: 0x5C68100001071616 Fmul
            temp_374 = temp_372 * temp_373;
            // 0x000B48: 0xEF95008003073110 Ldc
            temp_375 = temp_306 + 48;
            temp_376 = uint(temp_375) >> 2;
            temp_377 = temp_376 >> 2;
            temp_378 = int(temp_376) & 3;
            temp_379 = fp_c8.data[int(temp_377)][temp_378];
            temp_380 = int(temp_376) + 1;
            temp_381 = uint(temp_380) >> 2;
            temp_382 = temp_380 & 3;
            temp_383 = fp_c8.data[int(temp_381)][temp_382];
            // 0x000B50: 0x59A4088003571035 Ffma
            temp_384 = fma(temp_379, temp_346, temp_383);
            temp_385 = clamp(temp_384, 0.0, 1.0);
            // 0x000B58: 0x33A00BC000073517 Ffma
            temp_386 = fma(temp_385, -2.0, 3.0);
            // 0x000B68: 0x5C68100003573535 Fmul
            temp_387 = temp_385 * temp_385;
            // 0x000B70: 0x5C68100001773517 Fmul
            temp_388 = temp_387 * temp_386;
            // 0x000B78: 0x5C68100001771616 Fmul
            temp_389 = temp_374 * temp_388;
            // 0x000B88: 0x39585042F0071417 Fadd
            temp_390 = abs(temp_339);
            temp_391 = temp_390 + -120.0;
            // 0x000B90: 0x1EABD4CCCCD71717 Fmul32i
            temp_392 = temp_391 * -0.0500000007;
            temp_393 = clamp(temp_392, 0.0, 1.0);
            // 0x000B98: 0x5C68100001671716 Fmul
            temp_394 = temp_393 * temp_389;
            // 0x000BA8: 0x36247F9000171717 Xmad
            temp_395 = floatBitsToUint(temp_393) >> 16;
            temp_396 = int(temp_395) << 16;
            // 0x000BB0: 0x5BB383800FF71607 Fsetp
            temp_397 = temp_394 <= 0.0;
            // 0x000BB8: 0x7A05083C0F00FF17 Hadd2
            temp_292 = temp_296;
            temp_398 = uint(temp_396);
            temp_399 = temp_280;
            temp_400 = temp_281;
            temp_401 = temp_282;
            temp_402 = temp_283;
            temp_403 = temp_284;
            temp_404 = temp_285;
            if (temp_397)
            {
                temp_405 = unpackHalf2x16(uint(temp_396)).y;
                temp_406 = packHalf2x16(vec2(1.0, temp_405));
                temp_398 = temp_406;
            }
            // 0x000BC8: 0x5D2103902FF71707 Hsetp2
            temp_407 = unpackHalf2x16(temp_398).x;
            temp_408 = temp_407 == 0.0;
            // 0x000BD0: 0xF0F800000008000F Sync
            if (temp_408)
            {
                // 0x000BD8: 0x5080000000471010 Mufu
                temp_409 = 1.0 / temp_379;
                // 0x000BE8: 0x5C69100001071110 Fmul
                temp_410 = 0.0 - temp_409;
                temp_411 = temp_383 * temp_410;
                // 0x000BF0: 0x5C60138001071414 Fmnmx
                temp_412 = min(temp_339, temp_411);
                // 0x000BF8: 0x5C61178001471010 Fmnmx
                temp_413 = 0.0 - temp_411;
                temp_414 = max(temp_413, temp_412);
                // 0x000C08: 0x59A00A8001071015 Ffma
                temp_415 = fma(temp_414, temp_414, temp_343);
                // 0x000C10: 0x5080000000571511 Mufu
                temp_416 = inversesqrt(temp_415);
                // 0x000C18: 0x5080000000871515 Mufu
                temp_417 = sqrt(temp_415);
                // 0x000C28: 0x5C68100001173333 Fmul
                temp_418 = temp_335 * temp_416;
                // 0x000C30: 0x5C68100001173434 Fmul
                temp_419 = temp_337 * temp_416;
                // 0x000C38: 0x5C68100001171010 Fmul
                temp_420 = temp_414 * temp_416;
                // 0x000C48: 0x5C58100003372511 Fadd
                temp_421 = temp_109 + temp_418;
                // 0x000C50: 0x5C58100003472417 Fadd
                temp_422 = temp_111 + temp_419;
                // 0x000C58: 0x5C58100001070E14 Fadd
                temp_423 = temp_113 + temp_420;
                // 0x000C68: 0x5C68100001171135 Fmul
                temp_424 = temp_421 * temp_421;
                // 0x000C70: 0x59A01A8001771735 Ffma
                temp_425 = fma(temp_422, temp_422, temp_424);
                // 0x000C78: 0x59A01A8001471435 Ffma
                temp_426 = fma(temp_423, temp_423, temp_425);
                // 0x000C88: 0x5080000000573535 Mufu
                temp_427 = inversesqrt(temp_426);
                // 0x000C90: 0x5C68100003571111 Fmul
                temp_428 = temp_421 * temp_427;
                // 0x000C98: 0x5C68100003571717 Fmul
                temp_429 = temp_422 * temp_427;
                // 0x000CA8: 0x5C68100003571414 Fmul
                temp_430 = temp_423 * temp_427;
                // 0x000CB0: 0x5C68100001173335 Fmul
                temp_431 = temp_418 * temp_428;
                // 0x000CB8: 0x5C68100001170C11 Fmul
                temp_432 = temp_71 * temp_428;
                // 0x000CC8: 0x5C68100003370C33 Fmul
                temp_433 = temp_71 * temp_418;
                // 0x000CD0: 0x59A01A8001773435 Ffma
                temp_434 = fma(temp_419, temp_429, temp_431);
                // 0x000CD8: 0x59A0088001770111 Ffma
                temp_435 = fma(temp_70, temp_429, temp_432);
                // 0x000CE8: 0xEF94008002C73117 Ldc
                temp_436 = temp_306 + 44;
                temp_437 = uint(temp_436) >> 2;
                temp_438 = temp_437 >> 2;
                temp_439 = int(temp_437) & 3;
                temp_440 = fp_c8.data[int(temp_438)][temp_439];
                // 0x000CF0: 0x59A0198003470133 Ffma
                temp_441 = fma(temp_70, temp_419, temp_433);
                // 0x000CF8: 0x59A41A8001471035 Ffma
                temp_442 = fma(temp_420, temp_430, temp_434);
                temp_443 = clamp(temp_442, 0.0, 1.0);
                // 0x000D08: 0x59A4088001471214 Ffma
                temp_444 = fma(temp_69, temp_430, temp_435);
                temp_445 = clamp(temp_444, 0.0, 1.0);
                // 0x000D10: 0x59A0198001071233 Ffma
                temp_446 = fma(temp_69, temp_420, temp_441);
                // 0x000D18: 0xEF95008000073110 Ldc
                temp_447 = uint(temp_306) >> 2;
                temp_448 = temp_447 >> 2;
                temp_449 = int(temp_447) & 3;
                temp_450 = fp_c8.data[int(temp_448)][temp_449];
                temp_451 = int(temp_447) + 1;
                temp_452 = uint(temp_451) >> 2;
                temp_453 = temp_451 & 3;
                temp_454 = fp_c8.data[int(temp_452)][temp_453];
                // 0x000D28: 0xEF94008000873131 Ldc
                temp_455 = temp_306 + 8;
                temp_456 = uint(temp_455) >> 2;
                temp_457 = temp_456 >> 2;
                temp_458 = int(temp_456) & 3;
                temp_459 = fp_c8.data[int(temp_457)][temp_458];
                // 0x000D30: 0x5080000000471717 Mufu
                temp_460 = 1.0 / temp_440;
                // 0x000D38: 0x5C68100001071610 Fmul
                temp_461 = temp_394 * temp_450;
                // 0x000D48: 0x5C68100001171611 Fmul
                temp_462 = temp_394 * temp_454;
                // 0x000D50: 0x51A00A8400471715 Ffma
                temp_463 = fma(temp_460, temp_417, fp_c1.data[1].x);
                // 0x000D58: 0x59A20A0001472D17 Ffma
                temp_464 = 0.0 - temp_445;
                temp_465 = fma(temp_171, temp_445, temp_464);
                // 0x000D68: 0x5080000000471515 Mufu
                temp_466 = 1.0 / temp_463;
                // 0x000D70: 0x5C68100003171631 Fmul
                temp_467 = temp_394 * temp_459;
                // 0x000D78: 0x01040DF760C7F016 Mov32i
                // 0x000D88: 0x51A00B8400171417 Ffma
                temp_468 = fma(temp_445, temp_465, fp_c1.data[0].y);
                // 0x000D90: 0x49A20B0400273514 Ffma
                temp_469 = fma(temp_443, fp_c1.data[0].z, -6.98316002);
                // 0x000D98: 0x5080000000471717 Mufu
                temp_470 = 1.0 / temp_468;
                // 0x000DA8: 0x1E23FB3333371515 Fmul32i
                temp_471 = temp_466 * 1.39999998;
                // 0x000DB0: 0x5C68100001473535 Fmul
                temp_472 = temp_443 * temp_469;
                // 0x000DB8: 0x5C68100001571515 Fmul
                temp_473 = temp_471 * temp_471;
                // 0x000DC8: 0x5C68100001772E17 Fmul
                temp_474 = temp_161 * temp_470;
                // 0x000DD0: 0x59A10A8001573315 Ffma
                temp_475 = 0.0 - temp_473;
                temp_476 = fma(temp_446, temp_475, temp_473);
                // 0x000DD8: 0x5C68100001771717 Fmul
                temp_477 = temp_474 * temp_474;
                // 0x000DE8: 0x5C5C100001573315 Fadd
                temp_478 = temp_446 + temp_476;
                temp_479 = clamp(temp_478, 0.0, 1.0);
                // 0x000DF0: 0x5C5C30000FF73333 Fadd
                temp_480 = temp_446 + -0.0;
                temp_481 = clamp(temp_480, 0.0, 1.0);
                // 0x000DF8: 0x59A1198003372C16 Ffma
                temp_482 = 0.0 - temp_481;
                temp_483 = fma(temp_173, temp_482, temp_481);
                // 0x000E08: 0x5C58100001672C14 Fadd
                temp_484 = temp_173 + temp_483;
                // 0x000E10: 0x5C90008003570016 Rro
                // 0x000E18: 0x5080000000471414 Mufu
                temp_485 = 1.0 / temp_484;
                // 0x000E28: 0x5080000000271616 Mufu
                temp_486 = exp2(temp_472);
                // 0x000E30: 0x5C68100001472A14 Fmul
                temp_487 = temp_208 * temp_485;
                // 0x000E38: 0x59A10B0001670734 Ffma
                temp_488 = 0.0 - temp_486;
                temp_489 = fma(temp_217, temp_488, temp_486);
                // 0x000E48: 0x5C68100001471714 Fmul
                temp_490 = temp_477 * temp_487;
                // 0x000E50: 0x59A10B0001670517 Ffma
                temp_491 = 0.0 - temp_486;
                temp_492 = fma(temp_175, temp_491, temp_486);
                // 0x000E58: 0x59A10B0001670616 Ffma
                temp_493 = 0.0 - temp_486;
                temp_494 = fma(temp_169, temp_493, temp_486);
                // 0x000E68: 0x5C58100003470734 Fadd
                temp_495 = temp_217 + temp_489;
                // 0x000E70: 0x5C68100001473314 Fmul
                temp_496 = temp_481 * temp_490;
                // 0x000E78: 0x5C58100001770517 Fadd
                temp_497 = temp_175 + temp_492;
                // 0x000E88: 0x5C58100001670616 Fadd
                temp_498 = temp_169 + temp_494;
                // 0x000E90: 0x5C68100003472234 Fmul
                temp_499 = temp_8 * temp_495;
                // 0x000E98: 0x5C68100001772217 Fmul
                temp_500 = temp_8 * temp_497;
                // 0x000EA8: 0x5C68100001672216 Fmul
                temp_501 = temp_8 * temp_498;
                // 0x000EB0: 0x5C68100003471034 Fmul
                temp_502 = temp_461 * temp_499;
                // 0x000EB8: 0x5C68100001571010 Fmul
                temp_503 = temp_461 * temp_479;
                // 0x000EC8: 0x5C68100001771117 Fmul
                temp_504 = temp_462 * temp_500;
                // 0x000ED0: 0x5C68100001673116 Fmul
                temp_505 = temp_467 * temp_501;
                // 0x000ED8: 0x5C68100001571111 Fmul
                temp_506 = temp_462 * temp_479;
                // 0x000EE8: 0x5C68100001573115 Fmul
                temp_507 = temp_467 * temp_479;
                // 0x000EF0: 0x5C68100001473434 Fmul
                temp_508 = temp_502 * temp_496;
                // 0x000EF8: 0x49A0020400671004 Ffma
                temp_509 = fma(temp_503, fp_c1.data[1].z, temp_280);
                // 0x000F08: 0x5C68100001471717 Fmul
                temp_510 = temp_504 * temp_496;
                // 0x000F10: 0x5C68100001471616 Fmul
                temp_511 = temp_505 * temp_496;
                // 0x000F18: 0x49A0018400671103 Ffma
                temp_512 = fma(temp_506, fp_c1.data[1].z, temp_281);
                // 0x000F28: 0x49A005040067150A Ffma
                temp_513 = fma(temp_507, fp_c1.data[1].z, temp_282);
                // 0x000F30: 0x49A005840057340B Ffma
                temp_514 = fma(temp_508, fp_c1.data[1].y, temp_283);
                // 0x000F38: 0x49A007840057170F Ffma
                temp_515 = fma(temp_510, fp_c1.data[1].y, temp_284);
                // 0x000F48: 0x49A0098400571613 Ffma
                temp_516 = fma(temp_511, fp_c1.data[1].y, temp_285);
                // 0x000F50: 0xF0F800000007000F Sync
                temp_399 = temp_509;
                temp_400 = temp_512;
                temp_401 = temp_513;
                temp_402 = temp_514;
                temp_403 = temp_515;
                temp_404 = temp_516;
            }
            // 0x000F58: 0xE2400FFFA309000F Bra
            temp_280 = temp_399;
            temp_281 = temp_400;
            temp_282 = temp_401;
            temp_283 = temp_402;
            temp_284 = temp_403;
            temp_285 = temp_404;
            temp_286 = temp_403;
            temp_287 = temp_402;
            temp_288 = temp_404;
            temp_289 = temp_401;
            temp_290 = temp_399;
            temp_291 = temp_400;
        }
        while (!temp_293);
        // 0x000F68: 0xF0F800000007000F Sync
    }
    // 0x000F70: 0x5C62578000170C10 Fmnmx
    temp_517 = abs(temp_71);
    temp_518 = abs(temp_70);
    temp_519 = max(temp_517, temp_518);
    // 0x000F78: 0xE003FF87CFF7FF29 Ipa
    // 0x000F88: 0x5C62578002872F0E Fmnmx
    temp_520 = abs(temp_184);
    temp_521 = abs(temp_268);
    temp_522 = max(temp_520, temp_521);
    // 0x000F90: 0xEF4410000007FF31 Ldl
    temp_523 = uintBitsToFloat(local_memory[0]);
    // 0x000F98: 0x5C60578001071210 Fmnmx
    temp_524 = abs(temp_69);
    temp_525 = max(temp_524, temp_519);
    // 0x000FA8: 0xEF4410000087FF35 Ldl
    temp_526 = uintBitsToFloat(local_memory[2]);
    // 0x000FB0: 0x5C60578000E70D0E Fmnmx
    temp_527 = abs(temp_270);
    temp_528 = max(temp_527, temp_522);
    // 0x000FB8: 0x5080000000471033 Mufu
    temp_529 = 1.0 / temp_525;
    // 0x000FC8: 0x38681040E007092A Fmul
    temp_530 = temp_153 * 7.0;
    // 0x000FD0: 0xEF4410000047FF34 Ldl
    temp_531 = uintBitsToFloat(local_memory[1]);
    // 0x000FD8: 0x010000000017F014 Mov32i
    // 0x000FE8: 0x5080000000470E0E Mufu
    temp_532 = 1.0 / temp_528;
    // 0x000FF0: 0x5C69100003371212 Fmul
    temp_533 = 0.0 - temp_529;
    temp_534 = temp_69 * temp_533;
    // 0x000FF8: 0x5C68100003370C10 Fmul
    temp_535 = temp_71 * temp_529;
    // 0x001008: 0x5080000000472929 Mufu
    // 0x001010: 0x5C68100003370111 Fmul
    temp_536 = temp_70 * temp_529;
    // 0x001018: 0x5C68100000E72F15 Fmul
    temp_537 = temp_184 * temp_532;
    // 0x001028: 0x5C68100000E72816 Fmul
    temp_538 = temp_268 * temp_532;
    // 0x001030: 0x5C69100000E70D17 Fmul
    temp_539 = 0.0 - temp_532;
    temp_540 = temp_270 * temp_539;
    // 0x001038: 0xC0BA0163EFF7100C Tex
    temp_541 = textureLod(fp_t_tcb_16, vec3(temp_535, temp_536, temp_534), 0.0).xyz;
    temp_542 = temp_541.x;
    temp_543 = temp_541.y;
    temp_544 = temp_541.z;
    // 0x001048: 0x3868104080070925 Fmul
    temp_545 = temp_153 * 4.0;
    // 0x001050: 0xC1BA0143F2A71414 Tex
    temp_546 = textureLod(fp_t_tcb_14, vec4(temp_537, temp_538, temp_540, float(1)), temp_530).xyz;
    temp_547 = temp_546.x;
    temp_548 = temp_546.y;
    temp_549 = temp_546.z;
    // 0x001058: 0x5C98078001270024 Mov
    // 0x001068: 0xE043FF910297FF2C Ipa
    temp_550 = in_attr9.x;
    // 0x001070: 0x4C98079C0207002B Mov
    // 0x001078: 0xE043FF914297FF2D Ipa
    temp_551 = in_attr9.y;
    // 0x001088: 0x49A019180A170F32 Ffma
    temp_552 = fma(temp_286, fp_c6.data[40].y, temp_278);
    // 0x001090: 0xE043FF918297FF2E Ipa
    temp_553 = in_attr9.z;
    // 0x001098: 0xD9A2018242471010 Texs
    temp_554 = textureLod(fp_t_tcb_18, vec3(temp_535, temp_536, temp_534), temp_545).xyz;
    temp_555 = temp_554.x;
    temp_556 = temp_554.y;
    temp_557 = temp_554.z;
    // 0x0010A8: 0xDEBA0000C2B72C2B TexB
    temp_558 = texture(fp_t_cb7_20, vec3(temp_550, temp_551, temp_553)).x;
    // 0x0010B0: 0x3859103F8007082A Fadd
    temp_559 = 0.0 - temp_163;
    temp_560 = temp_559 + 1.0;
    // 0x0010B8: 0x3859103F80070909 Fadd
    temp_561 = 0.0 - temp_153;
    temp_562 = temp_561 + 1.0;
    // 0x0010C8: 0x4C68101809072A0F Fmul
    temp_563 = temp_560 * fp_c6.data[36].x;
    // 0x0010D0: 0x5080400000370F0F Mufu
    temp_564 = abs(temp_563);
    temp_565 = log2(temp_564);
    // 0x0010D8: 0x5C68100000970909 Fmul
    temp_566 = temp_562 * temp_562;
    // 0x0010E8: 0x010410676C97F02F Mov32i
    // 0x0010F0: 0x1E23E468DB970828 Fmul32i
    temp_567 = temp_163 * 0.193900004;
    // 0x0010F8: 0x49A01B180A170B36 Ffma
    temp_568 = fma(temp_287, fp_c6.data[40].y, temp_277);
    // 0x001108: 0x0103F0000007F017 Mov32i
    // 0x001110: 0x5C68100000970909 Fmul
    temp_569 = temp_566 * temp_566;
    // 0x001118: 0x49A0178400A7080B Ffma
    temp_570 = fma(temp_163, fp_c1.data[2].z, 8.40400028);
    // 0x001128: 0x4C9807980B470025 Mov
    // 0x001130: 0x0103E2CD9E87F02E Mov32i
    // 0x001138: 0x4C68101809170F0F Fmul
    temp_571 = temp_565 * fp_c6.data[36].y;
    // 0x001148: 0x49A0140400770928 Ffma
    temp_572 = fma(temp_569, fp_c1.data[1].w, temp_567);
    // 0x001150: 0x51A0058400B70812 Ffma
    temp_573 = fma(temp_163, temp_570, fp_c1.data[2].w);
    // 0x001158: 0x32A00BBF0007010B Ffma
    temp_574 = fma(temp_70, 0.5, 0.5);
    // 0x001168: 0xF0F0000034670000 Depbar
    // 0x001170: 0x5080000000372A17 Mufu
    temp_575 = log2(temp_560);
    // 0x001178: 0x51A212980B471F1F Ffma
    temp_576 = 0.0 - fp_c6.data[45].x;
    temp_577 = fma(temp_93, fp_c6.data[45].x, temp_576);
    // 0x001188: 0x51A212980B470000 Ffma
    temp_578 = 0.0 - fp_c6.data[45].x;
    temp_579 = fma(temp_94, fp_c6.data[45].x, temp_578);
    // 0x001190: 0x51A212980B471E1E Ffma
    temp_580 = 0.0 - fp_c6.data[45].x;
    temp_581 = fma(temp_92, fp_c6.data[45].x, temp_580);
    // 0x001198: 0x0104066978D7F02C Mov32i
    // 0x0011A8: 0x5C90008000F70025 Rro
    // 0x0011B0: 0x49A2170400C7090F Ffma
    temp_582 = fma(temp_569, fp_c1.data[3].x, -0.168799996);
    // 0x0011B8: 0x5084000000272525 Mufu
    temp_583 = exp2(temp_571);
    temp_584 = clamp(temp_583, 0.0, 1.0);
    // 0x0011C8: 0x49A013180A171326 Ffma
    temp_585 = fma(temp_288, fp_c6.data[40].y, temp_279);
    // 0x0011D0: 0x088BF05D63972813 Fadd32i
    temp_586 = temp_572 + -0.522800028;
    // 0x0011D8: 0x49A216040087092C Ffma
    temp_587 = fma(temp_569, fp_c1.data[2].x, -3.60299993);
    // 0x0011E8: 0x4C9807980967002A Mov
    // 0x0011F0: 0x5C68100000F7092D Fmul
    temp_588 = temp_569 * temp_582;
    // 0x0011F8: 0xE04BFF904297FF0F Ipa
    temp_589 = in_attr8.y;
    temp_590 = clamp(temp_589, 0.0, 1.0);
    // 0x001208: 0x51A0090400D70812 Ffma
    temp_591 = fma(temp_163, temp_573, fp_c1.data[3].y);
    // 0x001210: 0x5C68100001370813 Fmul
    temp_592 = temp_163 * temp_586;
    // 0x001218: 0x4C98079800870001 Mov
    // 0x001228: 0x4C98079800970008 Mov
    // 0x001230: 0x4C98079800A70028 Mov
    // 0x001238: 0x51A016040097092C Ffma
    temp_593 = fma(temp_569, temp_587, fp_c1.data[2].y);
    // 0x001248: 0x4C58101408172A2A Fadd
    temp_594 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001250: 0x4C68101808971717 Fmul
    temp_595 = temp_575 * fp_c6.data[34].y;
    // 0x001258: 0x4C59101800470101 Fadd
    temp_596 = 0.0 - fp_c6.data[2].x;
    temp_597 = temp_596 + fp_c6.data[1].x;
    // 0x001268: 0x4C59101800570808 Fadd
    temp_598 = 0.0 - fp_c6.data[2].y;
    temp_599 = temp_598 + fp_c6.data[1].y;
    // 0x001270: 0x4C59101800672828 Fadd
    temp_600 = 0.0 - fp_c6.data[2].z;
    temp_601 = temp_600 + fp_c6.data[1].z;
    // 0x001278: 0x59A0098002C70913 Ffma
    temp_602 = fma(temp_569, temp_593, temp_592);
    // 0x001288: 0x5C60138001272D12 Fmnmx
    temp_603 = min(temp_588, temp_591);
    // 0x001290: 0x5C68100002572A2A Fmul
    temp_604 = temp_594 * temp_584;
    // 0x001298: 0x5C90008001770017 Rro
    // 0x0012A8: 0x51A0009800870B01 Ffma
    temp_605 = fma(temp_574, temp_597, fp_c6.data[2].x);
    // 0x0012B0: 0x5084000000271717 Mufu
    temp_606 = exp2(temp_595);
    temp_607 = clamp(temp_606, 0.0, 1.0);
    // 0x0012B8: 0x51A0041800970B08 Ffma
    temp_608 = fma(temp_574, temp_599, fp_c6.data[2].y);
    // 0x0012C8: 0x51A0141800A70B0B Ffma
    temp_609 = fma(temp_574, temp_601, fp_c6.data[2].z);
    // 0x0012D0: 0x4C5C100400E7132D Fadd
    temp_610 = temp_602 + fp_c1.data[3].z;
    temp_611 = clamp(temp_610, 0.0, 1.0);
    // 0x0012D8: 0x386C104248070528 Fmul
    temp_612 = temp_175 * 50.0;
    temp_613 = clamp(temp_612, 0.0, 1.0);
    // 0x0012E8: 0x4C68101408272225 Fmul
    temp_614 = temp_8 * fp_c5.data[32].z;
    // 0x0012F0: 0x5C5C30000FF71212 Fadd
    temp_615 = temp_603 + -0.0;
    temp_616 = clamp(temp_615, 0.0, 1.0);
    // 0x0012F8: 0x4C68101808E72A13 Fmul
    temp_617 = temp_604 * fp_c6.data[35].z;
    // 0x001308: 0x4C9807980867002E Mov
    // 0x001310: 0x5C68100001272828 Fmul
    temp_618 = temp_613 * temp_616;
    // 0x001318: 0x5C59100002D7122D Fadd
    temp_619 = 0.0 - temp_616;
    temp_620 = temp_619 + temp_611;
    // 0x001328: 0x59A0130002571326 Ffma
    temp_621 = fma(temp_617, temp_614, temp_585);
    // 0x001330: 0x49A1099408271313 Ffma
    temp_622 = 0.0 - fp_c5.data[32].z;
    temp_623 = fma(temp_617, temp_622, temp_617);
    // 0x001338: 0x010404000007F012 Mov32i
    // 0x001348: 0x4C68101808871709 Fmul
    temp_624 = temp_607 * fp_c6.data[34].x;
    // 0x001350: 0x59A0140002D70707 Ffma
    temp_625 = fma(temp_217, temp_620, temp_618);
    // 0x001358: 0x59A0140002D70505 Ffma
    temp_626 = fma(temp_175, temp_620, temp_618);
    // 0x001368: 0x59A0140002D70628 Ffma
    temp_627 = fma(temp_169, temp_620, temp_618);
    // 0x001370: 0x33A0094000070F06 Ffma
    temp_628 = fma(temp_590, -2.0, 3.0);
    // 0x001378: 0x4C68101808C72A17 Fmul
    temp_629 = temp_604 * fp_c6.data[35].x;
    // 0x001388: 0x51A0171808670909 Ffma
    temp_630 = fma(temp_624, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001390: 0x4C68101808D72A2C Fmul
    temp_631 = temp_604 * fp_c6.data[35].y;
    // 0x001398: 0x4C68101808772121 Fmul
    temp_632 = temp_90 * fp_c6.data[33].w;
    // 0x0013A8: 0x59A01B0002571736 Ffma
    temp_633 = fma(temp_629, temp_614, temp_568);
    // 0x0013B0: 0x49A10B9408271717 Ffma
    temp_634 = 0.0 - fp_c5.data[32].z;
    temp_635 = fma(temp_629, temp_634, temp_629);
    // 0x0013B8: 0x59A0190002572C32 Ffma
    temp_636 = fma(temp_631, temp_614, temp_552);
    // 0x0013C8: 0x49A1161408272C2C Ffma
    temp_637 = 0.0 - fp_c5.data[32].z;
    temp_638 = fma(temp_631, temp_637, temp_631);
    // 0x0013D0: 0x5C68100000572205 Fmul
    temp_639 = temp_8 * temp_626;
    // 0x0013D8: 0xF0F0000034370000 Depbar
    // 0x0013E8: 0x49A018980A170A0A Ffma
    temp_640 = fma(temp_289, fp_c6.data[40].y, temp_523);
    // 0x0013F0: 0x5C58100001370A0A Fadd
    temp_641 = temp_640 + temp_623;
    // 0x0013F8: 0x5C68100000F70F13 Fmul
    temp_642 = temp_590 * temp_590;
    // 0x001408: 0x49A01A980A170404 Ffma
    temp_643 = fma(temp_290, fp_c6.data[40].y, temp_526);
    // 0x001410: 0x49A01A180A170303 Ffma
    temp_644 = fma(temp_291, fp_c6.data[40].y, temp_531);
    // 0x001418: 0x5C58100001770404 Fadd
    temp_645 = temp_643 + temp_635;
    // 0x001428: 0x5C58100002C70303 Fadd
    temp_646 = temp_644 + temp_638;
    // 0x001430: 0xF0F0000034270000 Depbar
    // 0x001438: 0x49A006040067010C Ffma
    temp_647 = fma(temp_605, fp_c1.data[1].z, temp_542);
    // 0x001448: 0x49A0068400670808 Ffma
    temp_648 = fma(temp_608, fp_c1.data[1].z, temp_543);
    // 0x001450: 0x5C68100001370601 Fmul
    temp_649 = temp_628 * temp_642;
    // 0x001458: 0xE043FF900297FF06 Ipa
    temp_650 = in_attr8.x;
    // 0x001468: 0x49A0070400670B0B Ffma
    temp_651 = fma(temp_609, fp_c1.data[1].z, temp_544);
    // 0x001470: 0x59A2060000971A1A Ffma
    temp_652 = 0.0 - temp_647;
    temp_653 = fma(temp_87, temp_630, temp_652);
    // 0x001478: 0x59A2040000971B1B Ffma
    temp_654 = 0.0 - temp_648;
    temp_655 = fma(temp_88, temp_630, temp_654);
    // 0x001488: 0x59A2058000972009 Ffma
    temp_656 = 0.0 - temp_651;
    temp_657 = fma(temp_89, temp_630, temp_656);
    // 0x001490: 0x59A0060002171A1A Ffma
    temp_658 = fma(temp_653, temp_632, temp_647);
    // 0x001498: 0x59A0040002171B08 Ffma
    temp_659 = fma(temp_655, temp_632, temp_648);
    // 0x0014A8: 0x5C6810000077220F Fmul
    temp_660 = temp_8 * temp_625;
    // 0x0014B0: 0x59A0058002170909 Ffma
    temp_661 = fma(temp_657, temp_632, temp_651);
    // 0x0014B8: 0xF0F0000034170000 Depbar
    // 0x0014C8: 0x49A0081808571410 Ffma
    temp_662 = fma(temp_547, fp_c6.data[33].y, temp_555);
    // 0x0014D0: 0x5C58100000471A04 Fadd
    temp_663 = temp_658 + temp_645;
    // 0x0014D8: 0x5C58100000370808 Fadd
    temp_664 = temp_659 + temp_646;
    // 0x0014E8: 0x49A0089808571503 Ffma
    temp_665 = fma(temp_548, fp_c6.data[33].y, temp_556);
    // 0x0014F0: 0x5C58100000A70909 Fadd
    temp_666 = temp_661 + temp_641;
    // 0x0014F8: 0x59A01B0001070F0F Ffma
    temp_667 = fma(temp_660, temp_662, temp_633);
    // 0x001508: 0x5C68100002872207 Fmul
    temp_668 = temp_8 * temp_627;
    // 0x001510: 0x59A102000047270A Ffma
    temp_669 = 0.0 - temp_663;
    temp_670 = fma(temp_7, temp_669, temp_663);
    // 0x001518: 0x49A0121808571624 Ffma
    temp_671 = fma(temp_549, fp_c6.data[33].y, temp_557);
    // 0x001528: 0x4C9807980287000B Mov
    // 0x001530: 0x59A0190000370532 Ffma
    temp_672 = fma(temp_639, temp_665, temp_636);
    // 0x001538: 0x59A1040000872708 Ffma
    temp_673 = 0.0 - temp_664;
    temp_674 = fma(temp_7, temp_673, temp_664);
    // 0x001548: 0x59A1048000972709 Ffma
    temp_675 = 0.0 - temp_666;
    temp_676 = fma(temp_7, temp_675, temp_666);
    // 0x001550: 0x59A0078000A71C0A Ffma
    temp_677 = fma(temp_11, temp_670, temp_667);
    // 0x001558: 0x59A0130002470707 Ffma
    temp_678 = fma(temp_668, temp_671, temp_621);
    // 0x001568: 0x4C98079802970004 Mov
    // 0x001570: 0x51A0059802871E1E Ffma
    temp_679 = fma(temp_581, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001578: 0x59A0190000871D08 Ffma
    temp_680 = fma(temp_12, temp_674, temp_672);
    // 0x001588: 0x4C98079802A70005 Mov
    // 0x001590: 0x5C68100000A71818 Fmul
    temp_681 = temp_272 * temp_677;
    // 0x001598: 0x59A0038000970209 Ffma
    temp_682 = fma(temp_13, temp_676, temp_678);
    // 0x0015A8: 0x49A503180BC72B06 Ffma
    temp_683 = 0.0 - fp_c6.data[47].x;
    temp_684 = fma(temp_558, temp_683, temp_650);
    temp_685 = clamp(temp_684, 0.0, 1.0);
    // 0x0015B0: 0x5080000000370606 Mufu
    temp_686 = log2(temp_685);
    // 0x0015B8: 0x51A0021802971F1F Ffma
    temp_687 = fma(temp_577, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0015C8: 0x5C68100000871919 Fmul
    temp_688 = temp_274 * temp_680;
    // 0x0015D0: 0xE043FF8C8297FF08 Ipa
    temp_689 = in_attr4.z;
    // 0x0015D8: 0x5C58300001E71803 Fadd
    temp_690 = 0.0 - temp_679;
    temp_691 = temp_681 + temp_690;
    // 0x0015E8: 0x51A0029802A70000 Ffma
    temp_692 = fma(temp_579, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0015F0: 0x5C68100000972323 Fmul
    temp_693 = temp_276 * temp_682;
    // 0x0015F8: 0x5C58300001F71902 Fadd
    temp_694 = 0.0 - temp_687;
    temp_695 = temp_688 + temp_694;
    // 0x001608: 0x49A00F180BF70304 Ffma
    temp_696 = fma(temp_691, fp_c6.data[47].w, temp_679);
    // 0x001610: 0x5C58300000072303 Fadd
    temp_697 = 0.0 - temp_692;
    temp_698 = temp_693 + temp_697;
    // 0x001618: 0x4C68101803170605 Fmul
    temp_699 = temp_686 * fp_c6.data[12].y;
    // 0x001628: 0x4C68101803770101 Fmul
    temp_700 = temp_649 * fp_c6.data[13].w;
    // 0x001630: 0x49A00F980BF70202 Ffma
    temp_701 = fma(temp_695, fp_c6.data[47].w, temp_687);
    // 0x001638: 0x49A000180BF70303 Ffma
    temp_702 = fma(temp_698, fp_c6.data[47].w, temp_692);
    // 0x001648: 0x5C90008000570006 Rro
    // 0x001650: 0x49A2009803470105 Ffma
    temp_703 = 0.0 - temp_700;
    temp_704 = fma(temp_700, fp_c6.data[13].x, temp_703);
    // 0x001658: 0x5080000000270606 Mufu
    temp_705 = exp2(temp_699);
    // 0x001668: 0x5C60178000471E04 Fmnmx
    temp_706 = max(temp_679, temp_696);
    // 0x001670: 0x49A2009803570107 Ffma
    temp_707 = 0.0 - temp_700;
    temp_708 = fma(temp_700, fp_c6.data[13].y, temp_707);
    // 0x001678: 0x5C60178000271F02 Fmnmx
    temp_709 = max(temp_687, temp_701);
    // 0x001688: 0x49A2009803670101 Ffma
    temp_710 = 0.0 - temp_700;
    temp_711 = fma(temp_700, fp_c6.data[13].z, temp_710);
    // 0x001690: 0x5C60178000370003 Fmnmx
    temp_712 = max(temp_692, temp_702);
    // 0x001698: 0x59A0020000570405 Ffma
    temp_713 = fma(temp_706, temp_704, temp_706);
    // 0x0016A8: 0x59A0010000770202 Ffma
    temp_714 = fma(temp_709, temp_708, temp_709);
    // 0x0016B0: 0x59A0018000170304 Ffma
    temp_715 = fma(temp_712, temp_711, temp_712);
    // 0x0016B8: 0x4C68101802B70603 Fmul
    temp_716 = temp_705 * fp_c6.data[10].w;
    // 0x0016C8: 0x5C59100000571801 Fadd
    temp_717 = 0.0 - temp_681;
    temp_718 = temp_717 + temp_713;
    // 0x0016D0: 0x5C59100000271902 Fadd
    temp_719 = 0.0 - temp_688;
    temp_720 = temp_719 + temp_714;
    // 0x0016D8: 0x4C58100C03870808 Fadd
    temp_721 = temp_689 + fp_c3.data[14].x;
    // 0x0016E8: 0x5C59100000472304 Fadd
    temp_722 = 0.0 - temp_693;
    temp_723 = temp_722 + temp_715;
    // 0x0016F0: 0x59A00C0000370100 Ffma
    temp_724 = fma(temp_718, temp_716, temp_681);
    // 0x0016F8: 0x59A00C8000370201 Ffma
    temp_725 = fma(temp_720, temp_716, temp_688);
    // 0x001708: 0x0103EC000007F005 Mov32i
    // 0x001710: 0x59A0118000370402 Ffma
    temp_726 = fma(temp_723, temp_716, temp_693);
    // 0x001718: 0x0103F8000007F003 Mov32i
    // 0x001728: 0x5C9807800FF70006 Mov
    // 0x001730: 0x0103F8000007F007 Mov32i
    // 0x001738: 0x49A37F8C03C70804 Ffma
    temp_727 = 0.0 - fp_c3.data[15].x;
    temp_728 = fma(temp_721, temp_727, -0.0);
    // 0x001748: 0xE30000000007000F Exit
    out_attr0.x = temp_724;
    out_attr0.y = temp_725;
    out_attr0.z = temp_726;
    out_attr0.w = 1.0;
    out_attr1.x = temp_728;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
